import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const maxDuration = 30;

const ACCESS_TOKEN = process.env.BLOG_WEBHOOK_ACCESS_TOKEN;
const SIGNING_SECRET = process.env.BLOG_WEBHOOK_SIGNING_SECRET;
const ALLOWED_ORIGIN = process.env.BLOG_WEBHOOK_ALLOWED_ORIGIN || 'null';

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

function timingSafeEqualHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

function validateBearer(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) return false;
  const token = authHeader.slice('Bearer '.length);
  if (!ACCESS_TOKEN || token.length !== ACCESS_TOKEN.length) return false;
  return timingSafeEqualHex(token, ACCESS_TOKEN);
}

async function validateSignature(rawBody: string, request: NextRequest): Promise<boolean> {
  if (!SIGNING_SECRET) return true; // Signing disabled if secret not configured.

  const signature = request.headers.get('x-signature');
  const timestamp = request.headers.get('x-timestamp');
  if (!signature || !timestamp) return false;

  // Reject stale requests (>5 min) to prevent replay.
  const ts = parseInt(timestamp, 10);
  if (!Number.isFinite(ts) || Math.abs(Date.now() / 1000 - ts) > 300) return false;

  const data = `${timestamp}.${rawBody}`;
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(SIGNING_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sigBuf = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data));
  const expected = Array.from(new Uint8Array(sigBuf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  return signature.length === expected.length && timingSafeEqualHex(signature, expected);
}

export async function POST(request: NextRequest) {
  try {
    if (!ACCESS_TOKEN) {
      console.error('BLOG_WEBHOOK_ACCESS_TOKEN not configured');
      return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 });
    }

    if (!validateBearer(request)) {
      return NextResponse.json({ error: 'Invalid access token' }, { status: 401 });
    }

    const rawBody = await request.text();

    if (!(await validateSignature(rawBody, request))) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    let payload: WebhookPayload;
    try {
      payload = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }

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
      'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Signature, X-Timestamp',
    },
  });
}
