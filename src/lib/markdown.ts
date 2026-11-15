import Showdown from 'showdown';
import TurndownService from 'turndown';

const showdownConverter = new Showdown.Converter({
  tables: true,
  ghCodeBlocks: true,
  tasklists: true,
  strikethrough: true,
  simpleLineBreaks: false,
});

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
});

export function markdownToHtml(markdown: string): string {
  if (!markdown) return '';
  return showdownConverter.makeHtml(markdown);
}

export function htmlToMarkdown(html: string): string {
  if (!html) return '';
  return turndownService.turndown(html);
}

// Markdown to HTML for blog posts and article pages (moved out of the blog page, 15 Nov 2026).
// Comprehensive markdown content formatter
export function formatContent(content: string): string {
  // Input validation
  if (!content || typeof content !== 'string') {
    return '<p class="text-muted-foreground">No content available.</p>';
  }

  // First, decode HTML entities that may be in the source content
  function decodeHtmlEntities(text: string): string {
    const htmlEntities: Record<string, string> = {
      '&#39;': "'",
      '&apos;': "'",
      '&quot;': '"',
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&nbsp;': ' ',
    };
    return text.replace(/&#?\w+;/g, (entity) => htmlEntities[entity] || entity);
  }

  // Decode entities in the source content first
  content = decodeHtmlEntities(content);

  const lines = content.split('\n');
  const result: string[] = [];
  let inList = false;
  let listType: 'ul' | 'ol' | null = null;
  let inTable = false;
  let tableRows: string[][] = [];

  // Helper to escape HTML entities to prevent XSS (for user-generated content)
  function escapeHtml(text: string): string {
    const htmlEntities: Record<string, string> = {
      '<': '&lt;',
      '>': '&gt;',
    };
    // Only escape angle brackets to prevent HTML injection, preserve quotes and apostrophes
    return text.replace(/[<>]/g, (char) => htmlEntities[char] || char);
  }

  // Helper to validate URLs - only allow safe protocols
  function isValidUrl(url: string): boolean {
    // Allow relative URLs
    if (url.startsWith('/') || url.startsWith('#')) {
      return true;
    }
    // Check for safe absolute URLs
    try {
      const parsed = new URL(url);
      return ['http:', 'https:', 'mailto:'].includes(parsed.protocol);
    } catch {
      return false;
    }
  }

  // Helper to process inline markdown (bold, links, images, etc.)
  function processInline(text: string): string {
    // First escape HTML to prevent injection
    text = escapeHtml(text);

    // Images ![alt](url) - must process before links since syntax is similar
    text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, altText, url) => {
      if (isValidUrl(url)) {
        const safeUrl = escapeHtml(url);
        const safeAlt = altText || 'Blog image';
        return `<img src="${safeUrl}" alt="${safeAlt}" class="rounded-lg my-6 w-full" loading="lazy" />`;
      }
      // Invalid URL - show alt text
      return altText || '';
    });

    // Bold (using escaped asterisks pattern)
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Links [text](url) - with URL validation
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
      // Decode HTML entities in URL for validation
      const decodedUrl = url.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      if (isValidUrl(decodedUrl)) {
        // Re-escape the URL for safe attribute insertion
        const safeUrl = escapeHtml(decodedUrl);
        return `<a href="${safeUrl}" rel="noopener noreferrer" class="text-orange hover:underline font-medium">${linkText}</a>`;
      }
      // Invalid URL - render as plain text
      return linkText;
    });
    return text;
  }

  // Helper to close current list if open
  function closeList() {
    if (inList && listType) {
      result.push(`</${listType}>`);
      inList = false;
      listType = null;
    }
  }

  // Helper to render table
  function renderTable() {
    if (tableRows.length === 0) return;

    let html = '<div class="overflow-x-auto my-6"><table class="min-w-full border-collapse">';

    tableRows.forEach((row, rowIndex) => {
      const isHeader = rowIndex === 0;
      const isEvenRow = rowIndex % 2 === 0;
      const tag = isHeader ? 'th' : 'td';

      // Row styling - header gets special style, data rows alternate
      const rowClass = isHeader
        ? ''
        : isEvenRow ? 'bg-secondary/30' : '';

      // Cell styling
      const cellClass = isHeader
        ? 'px-4 py-3 text-left font-semibold text-foreground border-b-2 border-border'
        : 'px-4 py-3 text-muted-foreground border-b border-border/50';

      html += `<tr class="${rowClass}">`;
      row.forEach((cell, cellIndex) => {
        // First column in data rows is often a label, make it slightly bolder
        const extraClass = !isHeader && cellIndex === 0 ? ' font-medium text-foreground' : '';
        html += `<${tag} class="${cellClass}${extraClass}">${processInline(cell.trim())}</${tag}>`;
      });
      html += '</tr>';
    });

    html += '</table></div>';
    result.push(html);
    tableRows = [];
    inTable = false;
  }

  // Track if we just saw an empty line while in a table (signals new row in single-cell format)
  let tableRowBreak = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Skip empty lines but close lists
    if (!trimmedLine) {
      closeList();
      // For tables in single-cell-per-line format, empty line signals end of current row
      if (inTable) {
        tableRowBreak = true;
        // Look ahead to see if the table continues
        let nextLineIdx = i + 1;
        while (nextLineIdx < lines.length && !lines[nextLineIdx].trim()) {
          nextLineIdx++;
        }
        const nextLine = lines[nextLineIdx]?.trim() || '';
        // If next content line doesn't start with |, render the table
        if (!nextLine.startsWith('|')) {
          renderTable();
          tableRowBreak = false;
        }
      }
      continue;
    }

    // Check for table row (starts with |)
    // Handle both formats: "| Col1 | Col2 | Col3 |" and single-line cells "| Cell "
    if (trimmedLine.startsWith('|')) {
      closeList();

      // Skip separator rows (|---|---|)
      if (/^\|?[\s\-|]+\|?$/.test(trimmedLine)) {
        continue;
      }

      inTable = true;
      // Parse table cells - split by | and filter empty
      const cells = trimmedLine
        .split('|')
        .map(cell => cell.trim())
        .filter(cell => cell !== '');

      if (cells.length > 0) {
        // Check if this is a multi-column format (has multiple cells)
        if (cells.length > 1) {
          // Standard markdown table row: | Col1 | Col2 | Col3 |
          tableRows.push(cells);
        } else {
          // Single cell per line format
          // If we had an empty line, start a new row
          if (tableRowBreak && tableRows.length > 0) {
            tableRows.push([cells[0]]);
            tableRowBreak = false;
          } else if (tableRows.length === 0) {
            // First cell, start first row
            tableRows.push([cells[0]]);
          } else {
            // Add to current row
            tableRows[tableRows.length - 1].push(cells[0]);
          }
        }
      }
      continue;
    }

    // If we were in a table and hit a non-table line, render the table
    if (inTable) {
      renderTable();
      tableRowBreak = false;
    }

    // Headers
    if (trimmedLine.startsWith('## ')) {
      closeList();
      const text = trimmedLine.slice(3).trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      result.push(`<h2 id="${id}" class="text-2xl font-bold mt-8 mb-4 scroll-mt-28">${processInline(text)}</h2>`);
      continue;
    }

    if (trimmedLine.startsWith('### ')) {
      closeList();
      const text = trimmedLine.slice(4).trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      result.push(`<h3 id="${id}" class="text-xl font-semibold mt-6 mb-3 scroll-mt-28">${processInline(text)}</h3>`);
      continue;
    }

    if (trimmedLine.startsWith('#### ')) {
      closeList();
      const text = trimmedLine.slice(5).trim();
      result.push(`<h4 class="text-lg font-semibold mt-4 mb-2">${processInline(text)}</h4>`);
      continue;
    }

    // Unordered list items
    if (trimmedLine.startsWith('- ')) {
      if (!inList || listType !== 'ul') {
        closeList();
        result.push('<ul class="list-disc list-inside mb-4 space-y-2">');
        inList = true;
        listType = 'ul';
      }
      result.push(`<li class="text-muted-foreground">${processInline(trimmedLine.slice(2))}</li>`);
      continue;
    }

    // Ordered list items
    if (/^\d+\.\s/.test(trimmedLine)) {
      if (!inList || listType !== 'ol') {
        closeList();
        result.push('<ol class="list-decimal list-inside mb-4 space-y-2">');
        inList = true;
        listType = 'ol';
      }
      result.push(`<li class="text-muted-foreground">${processInline(trimmedLine.replace(/^\d+\.\s/, ''))}</li>`);
      continue;
    }

    // Blockquotes. Several ">" lines in a row are one box (e.g. an "at a glance" box with a list);
    // a single ">" line is a quote.
    if (trimmedLine.startsWith('>')) {
      closeList();
      const group: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        group.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      i--;
      if (group.length === 1) {
        result.push(`<blockquote class="border-l-4 border-orange pl-4 my-6 text-muted-foreground">${processInline(group[0])}</blockquote>`);
      } else {
        result.push(`<div class="rounded-xl border border-border bg-secondary/50 px-5 pt-4 pb-1 my-6">${formatContent(group.join('\n'))}</div>`);
      }
      continue;
    }

    // Standalone images (line starts with ![)
    if (trimmedLine.startsWith('![')) {
      closeList();
      result.push(`<div class="my-6">${processInline(trimmedLine)}</div>`);
      continue;
    }

    // Regular paragraph
    closeList();
    result.push(`<p class="mb-4 text-muted-foreground">${processInline(trimmedLine)}</p>`);
  }

  // Close any open elements at end
  closeList();
  if (inTable) {
    renderTable();
  }

  return result.join('\n');
}
