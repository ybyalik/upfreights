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
