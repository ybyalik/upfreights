import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogCard, CTASection } from '@/components/sections';
import { blogPosts } from '@/lib/data/blog';
import { Button } from '@/components/ui/button';
import { generateBlogCollectionSchema } from '@/lib/schema';

const POSTS_PER_PAGE = 20;

const blogCollectionSchema = generateBlogCollectionSchema(
  blogPosts.map((post) => ({ title: post.title, slug: post.slug }))
);

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
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = blogPosts.slice(startIndex, endIndex);

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

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest shipping insights, industry news,
              and expert tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-orange/50"
              />
              <button className="px-6 py-2 bg-orange hover:bg-orange-dark text-white rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
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
