/**
 * One-time migration script: import all blog posts from blog.ts into Supabase.
 *
 * Run with:  npx tsx src/scripts/migrate-blog-to-supabase.ts
 */
import { config } from 'dotenv';
config({ path: '.env.local' });

import { createClient } from '@supabase/supabase-js';
import { blogPosts } from '../lib/data/blog';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrate() {
  console.log(`Migrating ${blogPosts.length} posts to Supabase...`);

  const rows = blogPosts.map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt || '',
    content: post.content || '',
    meta_title: post.metaTitle || post.title,
    meta_description: post.metaDescription || (post.excerpt || '').slice(0, 160),
    author: typeof post.author === 'string' ? post.author : post.author?.name || 'UpFreights Team',
    category: post.category || '',
    tags: post.tags || [],
    published_at: post.publishedAt || new Date().toISOString(),
    updated_at: post.updatedAt || null,
    image: post.image || '',
    featured: post.featured || false,
  }));

  // Upsert in batches of 50
  const BATCH_SIZE = 50;
  let inserted = 0;

  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch = rows.slice(i, i + BATCH_SIZE);
    const { error } = await supabase
      .from('blog_posts')
      .upsert(batch, { onConflict: 'id' });

    if (error) {
      console.error(`Error on batch ${i / BATCH_SIZE + 1}:`, error.message);
      process.exit(1);
    }

    inserted += batch.length;
    console.log(`  Inserted ${inserted}/${rows.length}`);
  }

  console.log(`Done! ${inserted} posts migrated to Supabase.`);
}

migrate();
