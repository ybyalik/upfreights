import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogCard, CTASection } from '@/components/sections';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { generateBlogCollectionSchema } from '@/lib/schema';

const POSTS_PER_PAGE = 20;

export const metadata: Metadata = {
  title: 'Blog - Shipping Insights & Guides',
  description:
    'Expert insights on international shipping, customs clearance, freight forwarding, and logistics. Stay informed with UpFreights blog.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog - Shipping Insights & Guides | UpFreights',
    description:
      'Expert insights on international shipping, customs clearance, and logistics.',
  },
};

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || '1', 10));

  // Get total count
  const { count } = await supabase
    .from('blog_posts')
    .select('*', { count: 'exact', head: true });

  const total = count || 0;
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  // Get paginated posts sorted by newest first
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('id, slug, title, excerpt, image, published_at, category, author, content')
    .order('published_at', { ascending: false })
    .range((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE - 1);

  const paginatedPosts = (posts || []).map((row) => ({
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

  // For schema - get all post titles/slugs
  const { data: allPosts } = await supabase
    .from('blog_posts')
    .select('title, slug');

  const blogCollectionSchema = generateBlogCollectionSchema(
    (allPosts || []).map((post) => ({ title: post.title, slug: post.slug }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogCollectionSchema),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <BookOpen className="h-10 w-10 text-orange" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Shipping Insights
              </h1>
            </div>
            <p className="text-lg text-white/80">
              Expert guides, industry news, and practical tips for successful international
              shipping. Stay informed with the latest from our logistics experts.
            </p>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <Button
                variant="outline"
                size="sm"
                asChild
                className={currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}
              >
                <Link href={currentPage > 1 ? `/blog?page=${currentPage - 1}` : '#'}>
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Link>
              </Button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={page === currentPage ? 'default' : 'outline'}
                    size="sm"
                    asChild
                    className={page === currentPage ? 'bg-orange hover:bg-orange-dark' : ''}
                  >
                    <Link href={`/blog?page=${page}`}>{page}</Link>
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                asChild
                className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''}
              >
                <Link href={currentPage < totalPages ? `/blog?page=${currentPage + 1}` : '#'}>
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Need Shipping Help?"
        description="Our team is ready to assist with your international shipping needs. Get a free quote today."
      />
    </>
  );
}
