import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumbs, BlogCard, CTASection } from '@/components/sections';
import { getBlogPostBySlug, getAllBlogSlugs, getRelatedPosts } from '@/lib/data/blog';
import { TableOfContents } from './TableOfContents';
import { generateBlogPostingSchema } from '@/lib/schema';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | UpFreights Blog`,
      description: post.excerpt,
      type: 'article',
    },
  };
}

// Decode HTML entities helper
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

// Extract headings from content for table of contents
function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  const lines = content.split('\n');

  lines.forEach((line) => {
    if (line.startsWith('## ')) {
      const rawText = line.slice(3).trim();
      const text = decodeHtmlEntities(rawText);
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      headings.push({ id, text, level: 2 });
    } else if (line.startsWith('### ')) {
      const rawText = line.slice(4).trim();
      const text = decodeHtmlEntities(rawText);
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      headings.push({ id, text, level: 3 });
    }
  });

  return headings;
}

// Calculate reading time from content
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  const headings = extractHeadings(post.content);
  const readingTime = post.readingTime || calculateReadingTime(post.content);

  const blogPostSchema = generateBlogPostingSchema({
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    category: post.category,
    content: post.content,
    readingTime: post.readingTime,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostSchema),
        }}
      />
      {/* Article Header */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              items={[
                { label: 'Blog', href: '/blog' },
                { label: post.title },
              ]}
              variant="light"
              className="mb-6"
            />

            {post.category && (
              <Badge className="bg-white/10 text-white border-white/20 mb-4">
                {post.category}
              </Badge>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-white/80 mb-8">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-white/70">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Main Content */}
              <article className="lg:col-span-2 prose prose-lg max-w-none">
                <div
                  className="prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-orange prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
                />
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                {/* Table of Contents */}
                {headings.length > 0 && (
                  <Card className="border-border/50 mb-6 sticky top-24">
                    <CardContent className="p-5">
                      <h4 className="text-sm font-semibold text-foreground mb-4">Table of Contents</h4>
                      <TableOfContents headings={headings} />
                    </CardContent>
                  </Card>
                )}
              </aside>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-border">
              <Button asChild variant="outline">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <p className="text-xl font-semibold text-foreground mb-8">
                Related Articles
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} variant="compact" />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Ready to Ship?"
        description="Get expert logistics support for your international shipments. Request a free quote today."
      />
    </>
  );
}

// Comprehensive markdown content formatter
function formatContent(content: string): string {
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

    // Blockquotes
    if (trimmedLine.startsWith('> ')) {
      closeList();
      const quoteText = trimmedLine.slice(2).trim();
      result.push(`<blockquote class="border-l-4 border-orange pl-4 my-6 italic text-muted-foreground">${processInline(quoteText)}</blockquote>`);
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
