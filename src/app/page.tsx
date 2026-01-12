import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};
import { Button } from '@/components/ui/button';
import {
  Hero,
  ServiceCard,
  DestinationCard,
  RouteCard,
  CTASection,
  Stats,
  TestimonialCard,
  sampleTestimonials,
} from '@/components/sections';
import { services } from '@/lib/data/services';
import { destinations } from '@/lib/data/destinations';
import { getPopularRoutes } from '@/lib/data/routes';
import type { Statistic } from '@/lib/types';

const stats: Statistic[] = [
  { value: '10,000+', label: 'Shipments Delivered', description: 'Annually' },
  { value: '50+', label: 'Countries Served', description: 'Worldwide' },
  { value: '15+', label: 'Years Experience', description: 'Since 2009' },
  { value: '99.2%', label: 'On-Time Delivery', description: 'Track record' },
];

const whyChooseUs = [
  {
    title: 'Competitive Rates',
    description: 'Volume discounts from major carriers ensure you get the best prices.',
  },
  {
    title: 'End-to-End Tracking',
    description: 'Real-time visibility of your shipment from origin to destination.',
  },
  {
    title: 'Expert Support',
    description: 'Dedicated account managers with deep logistics expertise.',
  },
  {
    title: 'Customs Expertise',
    description: 'Licensed brokers handle all documentation and compliance.',
  },
  {
    title: 'Flexible Solutions',
    description: 'FCL, LCL, air freight, and door-to-door options available.',
  },
  {
    title: 'Cargo Insurance',
    description: 'Comprehensive coverage options to protect your investment.',
  },
];

export default function HomePage() {
  const popularRoutes = getPopularRoutes().slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Shipping Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive freight forwarding solutions tailored to your needs.
              From sea freight to customs clearance, we handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats stats={stats} variant="dark" />

      {/* Popular Destinations Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Popular Destinations
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                We ship from China to these major destinations with optimized routes
                and competitive rates.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link href="/shipping">
                View All Destinations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                variant="featured"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Shipping Routes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most requested routes with fast transit times and reliable service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRoutes.map((route) => (
              <RouteCard key={route.id} route={route} variant="detailed" />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose UpFreights?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With over 15 years of experience in international freight forwarding,
                we&apos;ve built a reputation for reliability, transparency, and
                exceptional customer service.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild className="mt-8 bg-orange hover:bg-orange-dark text-white">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-white mb-2">24hr</div>
                    <div className="text-white/80">Quote Response Time</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-orange mb-2">1,000+</div>
                    <div className="text-white/80">Happy Customers</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-white mb-2">50+</div>
                    <div className="text-white/80">Destination Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what businesses like yours
              have to say about working with UpFreights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleTestimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Ready to Ship Your Cargo?"
        description="Get a free, no-obligation quote for your shipment. Our team will respond within 24 hours with competitive rates and a tailored logistics solution."
      />
    </>
  );
}
