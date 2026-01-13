import { Metadata } from 'next';
import Link from 'next/link';
import {
  Ship,
  Plane,
  Home,
  FileCheck,
  Globe,
  Clock,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Freight Forwarding Services | Upfreights',
  description:
    'Comprehensive logistics solutions connecting Chinese manufacturers with global markets. Sea freight, air freight, door-to-door delivery, and customs clearance services.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'China Freight Forwarding Services | Upfreights',
    description:
      'Complete freight forwarding solutions from China. Sea freight, air freight, door-to-door, and customs clearance.',
  },
};

const services = [
  {
    slug: 'sea-freight',
    icon: Ship,
    title: 'Sea Freight',
    tagline: 'Cost-effective ocean shipping',
    description: 'FCL and LCL container shipping from major Chinese ports to worldwide destinations.',
  },
  {
    slug: 'air-freight',
    icon: Plane,
    title: 'Air Freight',
    tagline: 'Fast express delivery',
    description: 'Express air cargo services for time-sensitive shipments with 1-5 day delivery times.',
  },
  {
    slug: 'door-to-door',
    icon: Home,
    title: 'Door to Door',
    tagline: 'Complete logistics solution',
    description: 'End-to-end delivery from supplier\'s door in China to your business address.',
  },
  {
    slug: 'customs-clearance',
    icon: FileCheck,
    title: 'Customs Clearance',
    tagline: 'Expert customs brokerage',
    description: 'Professional customs documentation and clearance services for smooth imports.',
  },
];

const benefits = [
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Extensive partnerships with carriers, ports, and customs brokers across 100+ countries for reliable worldwide shipping coverage.',
  },
  {
    icon: Clock,
    title: 'Proven Experience',
    description: 'Over 15 years of expertise in China-origin shipping with deep understanding of local markets, suppliers, and logistics infrastructure.',
  },
  {
    icon: Shield,
    title: 'Comprehensive Insurance',
    description: 'Full cargo protection with marine insurance options and claims handling support to safeguard your valuable shipments.',
  },
];

const comparisonData = [
  {
    service: 'Sea Freight',
    transitTime: '15-35 days',
    costLevel: 'Lowest',
    bestFor: 'Large volumes, heavy goods',
    coverage: 'All major ports',
  },
  {
    service: 'Air Freight',
    transitTime: '1-5 days',
    costLevel: 'Highest',
    bestFor: 'Urgent, high-value items',
    coverage: '500+ airports',
  },
  {
    service: 'Door to Door',
    transitTime: '3-35 days',
    costLevel: 'Medium',
    bestFor: 'Complete convenience',
    coverage: 'Worldwide addresses',
  },
  {
    service: 'Customs Clearance',
    transitTime: '1-3 days',
    costLevel: 'Service Fee',
    bestFor: 'Complex regulations',
    coverage: 'All countries',
  },
];

const popularRoutes = [
  {
    destination: 'USA',
    seaFreight: '14-28 days',
    airFreight: '1-3 days',
  },
  {
    destination: 'UK',
    seaFreight: '25-35 days',
    airFreight: '2-4 days',
  },
  {
    destination: 'Australia',
    seaFreight: '12-18 days',
    airFreight: '2-3 days',
  },
  {
    destination: 'Canada',
    seaFreight: '15-25 days',
    airFreight: '1-3 days',
  },
  {
    destination: 'Germany',
    seaFreight: '28-35 days',
    airFreight: '2-4 days',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              China Freight Forwarding Services
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Comprehensive logistics solutions connecting Chinese manufacturers with global markets
              through reliable, cost-effective shipping and customs services.
            </p>
            <Button asChild className="bg-orange hover:bg-orange-dark text-white">
              <Link href="/quote">
                Get Quote for All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Complete Freight Forwarding Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.slug} className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-4 group-hover:bg-orange/20 transition-colors">
                      <Icon className="h-7 w-7 text-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-orange font-medium mb-3">{service.tagline}</p>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <Link
                      href={`/${service.slug}`}
                      className="inline-flex items-center text-sm font-medium text-orange hover:text-orange-dark transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Choose Upfreights for Your China Shipping?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-border/50 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Choose the Right Service for Your Needs
            </h2>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">Service Type</th>
                  <th className="px-4 py-3 text-left font-semibold">Transit Time</th>
                  <th className="px-4 py-3 text-left font-semibold">Cost Level</th>
                  <th className="px-4 py-3 text-left font-semibold">Best For</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">Coverage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
                  >
                    <td className="px-4 py-4 font-medium text-foreground">{row.service}</td>
                    <td className="px-4 py-4 text-muted-foreground">{row.transitTime}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                        row.costLevel === 'Lowest' ? 'bg-green-100 text-green-700' :
                        row.costLevel === 'Highest' ? 'bg-red-100 text-red-700' :
                        row.costLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {row.costLevel}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-muted-foreground">{row.bestFor}</td>
                    <td className="px-4 py-4 text-muted-foreground">{row.coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Popular Shipping Routes from China
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {popularRoutes.map((route) => (
              <Card key={route.destination} className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    China to {route.destination}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Sea Freight:</p>
                      <p className="font-semibold text-foreground">{route.seaFreight}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Air Freight:</p>
                      <p className="font-semibold text-foreground">{route.airFreight}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Ready to Ship From China?"
        description="Get a free quote for any of our freight forwarding services. Our team will help you choose the best option for your needs."
      />
    </>
  );
}
