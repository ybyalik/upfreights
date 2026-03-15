import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET /api/admin/blog — list posts with optional search & pagination
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const search = searchParams.get('search') || '';
    const page = parseInt(searchParams.get('page') || '1', 10);
    const perPage = parseInt(searchParams.get('perPage') || '20', 10);

    // Get total count
    let countQuery = supabase
      .from('blog_posts')
      .select('*', { count: 'exact', head: true });

    if (search) {
      countQuery = countQuery.or(`title.ilike.%${search}%,slug.ilike.%${search}%`);
    }

    const { count } = await countQuery;
    const total = count || 0;

    // Get paginated posts
    let query = supabase
      .from('blog_posts')
      .select('id, slug, title, published_at, image')
      .order('published_at', { ascending: false })
      .range((page - 1) * perPage, page * perPage - 1);

    if (search) {
      query = query.or(`title.ilike.%${search}%,slug.ilike.%${search}%`);
    }

    const { data, error } = await query;

    if (error) throw error;

    const posts = (data || []).map((row) => ({
      id: row.id,
      slug: row.slug,
      title: row.title,
      publishedAt: row.published_at,
      image: row.image,
    }));

    return NextResponse.json({
      posts,
      total,
      page,
      perPage,
      totalPages: Math.ceil(total / perPage),
    });
  } catch (error) {
    console.error('Admin blog GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

// POST /api/admin/blog — create a new post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json({ error: 'title, slug, and content are required' }, { status: 400 });
    }

    // Check for duplicate slug
    const { data: existing } = await supabase
      .from('blog_posts')
      .select('id')
      .eq('slug', body.slug)
      .maybeSingle();

    if (existing) {
      return NextResponse.json({ error: 'A post with this slug already exists' }, { status: 409 });
    }

    const id = body.id || `post-${Date.now()}`;

    const { error } = await supabase.from('blog_posts').insert({
      id,
      slug: body.slug,
      title: body.title,
      excerpt: body.excerpt || '',
      content: body.content,
      meta_title: body.metaTitle || body.title,
      meta_description: body.metaDescription || (body.excerpt || '').slice(0, 160),
      author: body.author || 'UpFreights Team',
      category: body.category || '',
      published_at: body.publishedAt || new Date().toISOString(),
      image: body.image || '',
      featured: body.featured || false,
    });

    if (error) throw error;

    return NextResponse.json({ id }, { status: 201 });
  } catch (error) {
    console.error('Admin blog POST error:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
