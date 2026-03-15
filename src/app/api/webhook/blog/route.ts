import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const maxDuration = 30;

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

export async function POST(request: NextRequest) {
  try {
    if (!ACCESS_TOKEN) {
      console.error('BLOG_WEBHOOK_ACCESS_TOKEN not configured');
      return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 });
    }

    if (!validateAccessToken(request)) {
      return NextResponse.json({ error: 'Invalid access token' }, { status: 401 });
    }

    const payload: WebhookPayload = await request.json();

    if (payload.event_type !== 'publish_articles') {
      return NextResponse.json({ error: 'Unsupported event type' }, { status: 400 });
    }

    if (!payload.data?.articles || !Array.isArray(payload.data.articles)) {
      return NextResponse.json({ error: 'Invalid payload: missing articles array' }, { status: 400 });
    }

    console.log(`Received ${payload.data.articles.length} articles from webhook`);

    const rows = payload.data.articles.map((article) => ({
      id: article.id,
      slug: article.slug,
      title: article.title,
      excerpt: article.meta_description || article.content_markdown.slice(0, 300),
      content: article.content_markdown,
      meta_title: article.title,
      meta_description: article.meta_description || article.content_markdown.slice(0, 160),
      author: 'UpFreights Team',
      published_at: article.created_at,
      image: article.image_url || '',
      tags: article.tags || [],
    }));

    const { error } = await supabase
      .from('blog_posts')
      .upsert(rows, { onConflict: 'id' });

    if (error) throw error;

    console.log(`Upserted ${rows.length} articles to Supabase`);

    return NextResponse.json({
      message: 'Webhook processed successfully',
      articlesProcessed: payload.data.articles.length,
    });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json({ error: 'Failed to process webhook' }, { status: 500 });
  }
}

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
