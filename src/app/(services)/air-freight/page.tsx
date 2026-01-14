import { Metadata } from 'next';
import Link from 'next/link';
import { Plane, CheckCircle, ArrowRight, Clock, Globe, Shield, Package, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumbs, CTASection, HeroQuoteForm } from '@/components/sections';
import { generateAirRoutes } from '@/lib/data/routeGenerator';
import { generateServiceSchema, ORGANIZATION_INFO } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Air Freight Services from China',
  description: 'Fast, reliable air cargo services for time-sensitive shipments with express delivery options and premium handling from major Chinese airports.',
  alternates: {
    canonical: '/air-freight',
  },
  openGraph: {
    title: 'Air Freight Services from China | UpFreights',
    description: 'Fast, reliable air cargo services for time-sensitive shipments with express delivery options and premium handling.',
  },
};

const whyChooseFeatures = [
  {
    title: 'Express Speed',
    description: '1-5 day delivery times to major destinations worldwide with priority handling and customs clearance.',
    icon: Zap,
  },
  {
    title: 'Global Network',
    description: 'Access to 500+ destinations through partnerships with major airlines and freight carriers.',
    icon: Globe,
  },
  {
    title: 'Secure Handling',
    description: 'Temperature-controlled options and specialized handling for fragile, valuable, and hazardous cargo.',
    icon: Shield,
  },
];

const destinationCountries = [
  {
    country: 'United States',
    flag: '🇺🇸',
    slug: 'china-to-united-states',
    transitTime: '2-4 days',
    description: 'Express air freight to major US airports including LAX, JFK, ORD, and ATL with daily departures.',
    highlights: ['Daily flights available', 'Multiple airport options', 'Fast customs clearance'],
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    slug: 'china-to-canada',
    transitTime: '2-4 days',
    description: 'Fast air cargo to Toronto, Vancouver, Montreal, and Calgary with efficient customs processing.',
    highlights: ['Direct connections', 'NAFTA facilitation', 'Express customs'],
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    slug: 'china-to-australia',
    transitTime: '2-3 days',
    description: 'Quick delivery to Sydney, Melbourne, Brisbane, and Perth leveraging Asia-Pacific proximity.',
    highlights: ['Short transit times', 'Frequent departures', 'Time zone advantage'],
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    slug: 'china-to-united-kingdom',
    transitTime: '3-4 days',
    description: 'Reliable air freight to London Heathrow and other UK airports with seamless customs.',
    highlights: ['Heathrow direct', 'UK customs expertise', 'Next-day delivery options'],
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    slug: 'china-to-germany',
    transitTime: '3-5 days',
    description: 'Premium air cargo to Frankfurt, Munich, and Hamburg connecting to all of Europe.',
    highlights: ['EU gateway hub', 'Frankfurt direct', 'Pan-European distribution'],
  },
];

const airFreightServiceSchema = generateServiceSchema({
  name: 'Air Freight Shipping Services',
  description: 'Fast, reliable air cargo services for time-sensitive shipments with express delivery options and premium handling from major Chinese airports to worldwide destinations.',
  url: `${ORGANIZATION_INFO.url}/air-freight`,
  features: [
    'Express and standard air freight options',
    'Charter services for urgent cargo',
    'Temperature-controlled shipments',
    'Dangerous goods handling (DG certified)',
    'Airport-to-airport and door-to-door',
    'Same-day and next-day options available',
    'Secure handling for high-value goods',
    'Dedicated account management',
  ],
});

export default function AirFreightPage() {
  const allAirRoutes = generateAirRoutes();

  // Group routes by origin city
  const routesByOrigin = allAirRoutes.reduce((acc, route) => {
    if (!acc[route.originCity]) {
      acc[route.originCity] = [];
    }
    acc[route.originCity].push(route);
    return acc;
  }, {} as Record<string, typeof allAirRoutes>);

  const originCities = Object.keys(routesByOrigin).sort();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(airFreightServiceSchema),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Air Freight' },
            ]}
            variant="light"
            className="mb-6"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                  <Plane className="h-8 w-8 text-orange" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Air Freight Services from China
                </h1>
              </div>
              <p className="text-lg text-white/80 mb-8 max-w-3xl">
                Fast, reliable air cargo services for time-sensitive shipments with express delivery options and premium handling from major Chinese airports.
              </p>
              <Button asChild className="bg-orange hover:bg-orange-dark text-white lg:hidden">
                <Link href="/quote">
                  Get Air Freight Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <HeroQuoteForm defaultService="air" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Choose Our Air Freight Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-border/50 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-orange/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Solutions Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Premium Air Cargo Solutions
              </h2>
              <p className="text-muted-foreground mb-8">
                Our air freight services provide the fastest shipping option for urgent cargo, high-value goods, and time-sensitive deliveries. With direct connections from China&apos;s major airports to global destinations, we ensure your cargo arrives quickly and safely.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <Plane className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Major Chinese Airports</h3>
                    <p className="text-muted-foreground text-sm">Beijing, Shanghai, Guangzhou, Shenzhen, Hangzhou, Chengdu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <Package className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Cargo Types</h3>
                    <p className="text-muted-foreground text-sm">General cargo, perishables, electronics, pharmaceuticals, dangerous goods</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Service Options</h3>
                    <p className="text-muted-foreground text-sm">Express (1-2 days), Standard (3-5 days), Economy (5-7 days)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-white mb-2">{allAirRoutes.length}+</div>
                    <div className="text-white/80">Air Freight Routes</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-orange mb-2">6</div>
                    <div className="text-white/80">Chinese Origin Airports</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-white mb-2">1-5</div>
                    <div className="text-white/80">Day Delivery Times</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Air Freight Services by Destination
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover express air freight solutions tailored for specific countries. View all available routes, pricing details, and transit times for your destination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {destinationCountries.map((dest) => (
              <Link key={dest.slug} href={`/shipping-${dest.slug}`}>
                <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{dest.flag}</span>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{dest.country}</h3>
                        <p className="text-sm text-orange font-medium">{dest.transitTime} transit time</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {dest.description}
                    </p>
                    <ul className="space-y-1">
                      {dest.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Routes Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Complete Air Freight Routes from China
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Express air freight services from major Chinese airports to global destinations. Fast 1-5 day delivery with competitive rates and priority handling.
            </p>
          </div>

          <div className="space-y-8">
            {originCities.map((originCity) => {
              const routes = routesByOrigin[originCity];
              return (
                <div key={originCity}>
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Plane className="h-5 w-5 text-orange" />
                    From {originCity}
                    <span className="text-sm font-normal text-muted-foreground">({routes.length} routes)</span>
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {routes.map((route) => (
                      <Link
                        key={route.id}
                        href={`/air-freight-${route.slug}`}
                        className="p-3 bg-card border border-border/50 rounded-lg hover:border-orange transition-colors flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-foreground font-medium truncate">{route.destinationCity}</span>
                          <span className="text-xs text-muted-foreground flex-shrink-0">
                            {route.transitTime}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-orange transition-colors flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Ready to Ship with Air Freight?"
        description="Get a free, no-obligation quote for your air cargo shipment. Our team will respond within 24 hours with competitive rates."
      />
    </>
  );
}
