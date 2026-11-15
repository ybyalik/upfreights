import { cache } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumbs, BlogCard, CTASection } from '@/components/sections';
import { supabase } from '@/lib/supabase';
import { TableOfContents } from './TableOfContents';
import { generateBlogPostingSchema } from '@/lib/schema';
import { REMOVED_BLOG_SLUGS_FILTER } from '@/lib/data/blogCleanup';
import { formatContent } from '@/lib/markdown';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Revalidate every hour. Webhook publishes also call revalidatePath for instant refresh.
export const revalidate = 3600;
export const dynamic = 'force-static';
export const dynamicParams = true;

const getPost = cache(async (slug: string) => {
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();
  return data;
});

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found | UpFreights Blog',
      robots: { index: false, follow: false },
    };
  }

  // Some posts were saved with the brand already on the end of the title.
  // The site-wide title template adds "| UpFreights", so strip it here to
  // avoid "... | Upfreights | UpFreights" in search results.
  const cleanTitle = (post.meta_title || post.title).replace(/\s*\|\s*upfreights\s*$/i, '');
  const ogTitle = `${cleanTitle} | UpFreights Blog`;
  const description = post.meta_description || post.excerpt;
  const images = post.image
    ? [{ url: post.image, alt: cleanTitle }]
    : [{ url: '/og-image.png', alt: cleanTitle }];

  return {
    title: cleanTitle,
    description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: ogTitle,
      description,
      type: 'article',
      images,
      ...(post.published_at && { publishedTime: post.published_at }),
      ...(post.updated_at && { modifiedTime: post.updated_at }),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: images.map((i) => i.url),
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
  const postData = await getPost(slug);

  if (!postData) {
    notFound();
  }

  const post = {
    id: postData.id,
    slug: postData.slug,
    title: postData.title,
    excerpt: postData.excerpt,
    content: postData.content || '',
    category: postData.category,
    author: postData.author,
    publishedAt: postData.published_at,
    image: postData.image,
    readingTime: null as string | null,
  };

  // Get related posts (different slug, limit 3)
  const { data: relatedData } = await supabase
    .from('blog_posts')
    .select('id, slug, title, excerpt, image, published_at, category, author, content')
    .neq('slug', slug)
    .not('slug', 'in', REMOVED_BLOG_SLUGS_FILTER)
    .order('published_at', { ascending: false })
    .limit(3);

  const relatedPosts = (relatedData || []).map((row) => ({
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    image: row.image,
    publishedAt: row.published_at,
    category: row.category,
    author: row.author,
    content: row.content,
  }));

  const headings = extractHeadings(post.content);
  const readingTime = calculateReadingTime(post.content);

  const blogPostSchema = generateBlogPostingSchema({
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    category: post.category,
    content: post.content,
    readingTime,
    image: post.image,
    publishedAt: postData.published_at,
    updatedAt: postData.updated_at,
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
