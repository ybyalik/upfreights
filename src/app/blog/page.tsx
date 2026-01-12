import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { BlogCard, CTASection } from '@/components/sections';
import { blogPosts, getFeaturedPosts, getAllCategories } from '@/lib/data/blog';

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

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
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

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground">Categories:</span>
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
              All Posts
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-secondary"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
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
