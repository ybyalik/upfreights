import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Access token for webhook authentication
const ACCESS_TOKEN = process.env.BLOG_WEBHOOK_ACCESS_TOKEN;

interface ArticlePayload {
  id: string;
  title: string;
  content_markdown: string;
  content_html: string;
  meta_description: string;
  created_at: string;
  image_url?: string;
  slug: string;
  tags?: string[];
}

interface WebhookPayload {
  event_type: string;
  timestamp: string;
  data: {
    articles: ArticlePayload[];
  };
}

function validateAccessToken(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  const token = authHeader.split(' ')[1];
  return token === ACCESS_TOKEN;
}

function escapeTemplateString(str: string): string {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${');
}

function generateBlogPostEntry(article: ArticlePayload): string {
  const excerpt = article.meta_description || article.content_markdown.slice(0, 300);

  return `  {
    id: '${article.id}',
    slug: '${article.slug}',
    title: \`${escapeTemplateString(article.title)}\`,
    excerpt: \`${escapeTemplateString(excerpt)}\`,
    content: \`${escapeTemplateString(article.content_markdown)}\`,
    metaTitle: \`${escapeTemplateString(article.title)}\`,
    metaDescription: \`${escapeTemplateString(article.meta_description || excerpt.slice(0, 160))}\`,
    author: 'UpFreights Team',
    publishedAt: '${article.created_at}',
  }`;
}

export async function POST(request: NextRequest) {
  try {
    // Validate access token
    if (!ACCESS_TOKEN) {
      console.error('BLOG_WEBHOOK_ACCESS_TOKEN not configured');
      return NextResponse.json(
        { error: 'Webhook not configured' },
        { status: 500 }
      );
    }

    if (!validateAccessToken(request)) {
      return NextResponse.json(
        { error: 'Invalid access token' },
        { status: 401 }
      );
    }

    // Parse the webhook payload
    const payload: WebhookPayload = await request.json();

    // Validate event type
    if (payload.event_type !== 'publish_articles') {
      return NextResponse.json(
        { error: 'Unsupported event type' },
        { status: 400 }
      );
    }

    // Validate articles array
    if (!payload.data?.articles || !Array.isArray(payload.data.articles)) {
      return NextResponse.json(
        { error: 'Invalid payload: missing articles array' },
        { status: 400 }
      );
    }

    console.log(`Received ${payload.data.articles.length} articles from webhook`);

    // Read existing blog posts
    const blogFilePath = path.join(process.cwd(), 'src/lib/data/blog.ts');
    let existingContent = '';

    try {
      existingContent = await fs.readFile(blogFilePath, 'utf-8');
    } catch {
      console.log('No existing blog file found, creating new one');
    }

    // Extract existing posts from the file
    const existingPosts: Map<string, string> = new Map();
    const postRegex = /\{\s*id:\s*'([^']+)'[\s\S]*?\},(?=\s*\{|\s*\];)/g;
    let match;

    while ((match = postRegex.exec(existingContent)) !== null) {
      const fullMatch = match[0];
      const id = match[1];
      existingPosts.set(id, fullMatch);
    }

    // Update or add new articles
    for (const article of payload.data.articles) {
      const newEntry = generateBlogPostEntry(article);
      existingPosts.set(article.id, newEntry);
      console.log(`Updated/Added article: ${article.slug}`);
    }

    // Generate new blog.ts content
    const postsArray = Array.from(existingPosts.values()).join(',\n');
    const newFileContent = `import { BlogPost } from '@/lib/types';

export const blogPosts: BlogPost[] = [
${postsArray},
];
`;

    // Write updated file
    await fs.writeFile(blogFilePath, newFileContent, 'utf-8');

    console.log(`Successfully processed ${payload.data.articles.length} articles`);

    return NextResponse.json({
      message: 'Webhook processed successfully',
      articlesProcessed: payload.data.articles.length,
    });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
