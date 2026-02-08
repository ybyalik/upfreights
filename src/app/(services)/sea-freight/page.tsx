import { Metadata } from 'next';
import Link from 'next/link';
import { Ship, CheckCircle, ArrowRight, Anchor, Clock, Shield, Package, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumbs, CTASection, HeroQuoteForm } from '@/components/sections';
import { generateSeaRoutes } from '@/lib/data/routeGenerator';
import { generateServiceSchema, ORGANIZATION_INFO } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Sea Freight Services from China',
  description: 'Cost-effective ocean shipping solutions for full container loads (FCL) and less-than-container loads (LCL) with reliable transit times and competitive rates.',
  alternates: {
    canonical: '/sea-freight',
  },
  openGraph: {
    title: 'Sea Freight Services from China | UpFreights',
    description: 'Cost-effective ocean shipping solutions for FCL and LCL shipments from China to worldwide destinations.',
  },
};

const whyChooseFeatures = [
  {
    title: 'FCL & LCL Options',
    description: 'Full container loads for large shipments or consolidation services for smaller cargo volumes.',
    icon: Package,
  },
  {
    title: 'Reliable Transit',
    description: 'Predictable shipping schedules with major carriers ensuring on-time delivery to global destinations.',
    icon: Clock,
  },
  {
    title: 'Cargo Protection',
    description: 'Comprehensive insurance options and secure handling procedures to protect your valuable cargo.',
    icon: Shield,
  },
];

const destinationCountries = [
  {
    country: 'United States',
    flag: '🇺🇸',
    slug: 'china-to-united-states',
    transitTime: '15-25 days',
    description: 'Professional sea freight to major US ports including Long Beach, Los Angeles, New York, and more.',
    highlights: ['Multiple port options', 'FCL & LCL services', 'Reliable schedules'],
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    slug: 'china-to-canada',
    transitTime: '15-30 days',
    description: 'Efficient shipping to Vancouver, Montreal, Halifax, and other major Canadian ports.',
    highlights: ['Pacific & Atlantic access', 'NAFTA benefits', 'Fast customs processing'],
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    slug: 'china-to-australia',
    transitTime: '18-28 days',
    description: 'Direct services to Sydney, Melbourne, Brisbane, and Fremantle with competitive rates.',
    highlights: ['Close Asia proximity', 'Modern port facilities', 'Strong bilateral trade'],
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    slug: 'china-to-united-kingdom',
    transitTime: '25-35 days',
    description: 'Reliable shipping to Felixstowe, Southampton, and London Gateway ports.',
    highlights: ['Financial services hub', 'European market access', 'Premium consumer base'],
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    slug: 'china-to-germany',
    transitTime: '25-35 days',
    description: 'Gateway to Europe via Hamburg and Bremerhaven with excellent infrastructure.',
    highlights: ['EU market gateway', 'Central European location', 'Advanced logistics'],
  },
  {
    country: 'Italy',
    flag: '🇮🇹',
    slug: 'china-to-italy',
    transitTime: '40-65 days',
    description: 'Strategic Mediterranean access via Trieste, gateway to Central and Southern Europe.',
    highlights: ['Mediterranean gateway', 'Central Europe access', 'Major carrier coverage'],
  },
];

const seaFreightServiceSchema = generateServiceSchema({
  name: 'Sea Freight Shipping Services',
  description: 'Cost-effective ocean shipping solutions for full container loads (FCL) and less-than-container loads (LCL) with reliable transit times and competitive rates from China to worldwide destinations.',
  url: `${ORGANIZATION_INFO.url}/sea-freight`,
  features: [
    'Full Container Load (FCL) shipping',
    'Less than Container Load (LCL) consolidation',
    'Refrigerated container options',
    'Oversized and project cargo handling',
    'Port-to-port and door-to-door options',
    'Real-time container tracking',
    'Customs documentation support',
    'Cargo insurance options',
  ],
});

export default function SeaFreightPage() {
  const allSeaRoutes = generateSeaRoutes();

  // Group routes by origin city
  const routesByOrigin = allSeaRoutes.reduce((acc, route) => {
    if (!acc[route.originCity]) {
      acc[route.originCity] = [];
    }
    acc[route.originCity].push(route);
    return acc;
  }, {} as Record<string, typeof allSeaRoutes>);

  const originCities = Object.keys(routesByOrigin).sort();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seaFreightServiceSchema),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Sea Freight' },
            ]}
            variant="light"
            className="mb-6"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                  <Ship className="h-8 w-8 text-orange" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Sea Freight Services from China
                </h1>
              </div>
              <p className="text-lg text-white/80 mb-8 max-w-3xl">
                Cost-effective ocean shipping solutions for full container loads (FCL) and less-than-container loads (LCL) with reliable transit times and competitive rates.
              </p>
              <Button asChild className="bg-orange hover:bg-orange-dark text-white lg:hidden">
                <Link href="/quote">
                  Get Sea Freight Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <HeroQuoteForm defaultService="sea" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Choose Our Sea Freight Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-border/50 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-ocean/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-ocean" />
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

      {/* Complete Solutions Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Complete Sea Freight Solutions
              </h2>
              <p className="text-muted-foreground mb-8">
                Our sea freight services connect Chinese manufacturers with global markets through comprehensive ocean shipping solutions. From small LCL shipments to full container loads, we handle every aspect of your maritime logistics.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-ocean/10 flex items-center justify-center flex-shrink-0">
                    <Anchor className="h-6 w-6 text-ocean" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Major Chinese Ports</h3>
                    <p className="text-muted-foreground text-sm">Shanghai, Shenzhen, Ningbo, Qingdao, Tianjin, Guangzhou</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-ocean/10 flex items-center justify-center flex-shrink-0">
                    <Package className="h-6 w-6 text-ocean" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Container Options</h3>
                    <p className="text-muted-foreground text-sm">20ft, 40ft, 40ft High Cube containers for FCL and LCL consolidation</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-ocean/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-ocean" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Global Destinations</h3>
                    <p className="text-muted-foreground text-sm">United States, Europe, Australia, Canada, and 100+ countries worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-white mb-2">{allSeaRoutes.length}+</div>
                    <div className="text-white/80">Sea Freight Routes</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-orange mb-2">8</div>
                    <div className="text-white/80">Chinese Origin Ports</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-white mb-2">50+</div>
                    <div className="text-white/80">Destination Ports</div>
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
              Sea Freight Services by Destination
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover comprehensive sea freight solutions tailored for specific countries. View all available routes, pricing details, and transit times for your destination.
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
              All Sea Freight Routes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse all {allSeaRoutes.length} sea freight routes from China. Click any route for detailed pricing and transit information.
            </p>
          </div>

          <div className="space-y-8">
            {originCities.map((originCity) => {
              const routes = routesByOrigin[originCity];
              return (
                <div key={originCity}>
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Ship className="h-5 w-5 text-ocean" />
                    From {originCity}
                    <span className="text-sm font-normal text-muted-foreground">({routes.length} routes)</span>
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {routes.map((route) => (
                      <Link
                        key={route.id}
                        href={`/sea-freight-${route.slug}`}
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
        title="Ready to Ship with Sea Freight?"
        description="Get a free, no-obligation quote for your ocean shipment. Our team will respond within 24 hours with competitive rates."
      />
    </>
  );
}
