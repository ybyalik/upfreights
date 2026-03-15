import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET /api/admin/blog/[id] — get a single post for editing
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const post = {
      id: data.id,
      slug: data.slug,
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      metaTitle: data.meta_title,
      metaDescription: data.meta_description,
      author: data.author,
      publishedAt: data.published_at,
      updatedAt: data.updated_at,
      category: data.category,
      image: data.image,
      featured: data.featured,
    };

    return NextResponse.json({ post });
  } catch (error) {
    console.error('Admin blog GET [id] error:', error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}

// PUT /api/admin/blog/[id] — update a post
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json({ error: 'title, slug, and content are required' }, { status: 400 });
    }

    // Check post exists
    const { data: existing } = await supabase
      .from('blog_posts')
      .select('id')
      .eq('id', id)
      .maybeSingle();

    if (!existing) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Check slug conflict with other posts
    const { data: slugConflict } = await supabase
      .from('blog_posts')
      .select('id')
      .eq('slug', body.slug)
      .neq('id', id)
      .maybeSingle();

    if (slugConflict) {
      return NextResponse.json({ error: 'Another post already uses this slug' }, { status: 409 });
    }

    const { error } = await supabase
      .from('blog_posts')
      .update({
        slug: body.slug,
        title: body.title,
        excerpt: body.excerpt || '',
        content: body.content,
        meta_title: body.metaTitle || body.title,
        meta_description: body.metaDescription || (body.excerpt || '').slice(0, 160),
        author: body.author || 'UpFreights Team',
        category: body.category || '',
        published_at: body.publishedAt || new Date().toISOString(),
        updated_at: new Date().toISOString(),
        image: body.image || '',
        featured: body.featured || false,
      })
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ id });
  } catch (error) {
    console.error('Admin blog PUT error:', error);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

// DELETE /api/admin/blog/[id] — delete a post
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ deleted: true });
  } catch (error) {
    console.error('Admin blog DELETE error:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
