import { Metadata } from 'next';
import Link from 'next/link';
import { Plane, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumbs, CTASection, HeroQuoteForm } from '@/components/sections';
import { generateAirRoutes } from '@/lib/data/routeGenerator';

export const metadata: Metadata = {
  title: 'Air Freight from China to UK | Express Air Cargo Services',
  description: 'Fast air freight services from China to UK. Express and standard air cargo options with 3-5 day delivery to London Heathrow and major UK airports.',
  alternates: {
    canonical: '/air-freight-from-china-to-uk',
  },
  openGraph: {
    title: 'Air Freight from China to UK | UpFreights',
    description: 'Fast air freight services from China to UK with 3-5 day delivery.',
  },
};

const whyChooseAirFreight = [
  'Fastest delivery option - 3-5 days to most UK destinations',
  'Ideal for time-sensitive and high-value shipments',
  'Express, standard, and economy service tiers',
  'Daily flights to London Heathrow',
  'Post-Brexit customs clearance expertise',
];

const majorAirports = [
  { name: 'London Heathrow (LHR)', transit: '3-4 days', hub: 'Primary UK Gateway' },
  { name: 'East Midlands (EMA)', transit: '3-5 days', hub: 'Cargo Hub' },
  { name: 'Manchester (MAN)', transit: '3-5 days', hub: 'Northern England' },
  { name: 'Birmingham (BHX)', transit: '3-5 days', hub: 'Midlands Region' },
];

export default function AirFreightChinaToUKPage() {
  const airRoutes = generateAirRoutes().filter(r =>
    r.destinationCountry.toLowerCase() === 'united kingdom' ||
    r.destinationCountry.toLowerCase().includes('kingdom')
  );

  const routesByDestination = airRoutes.reduce((acc, route) => {
    const key = route.destinationCity;
    if (!acc[key]) acc[key] = [];
    acc[key].push(route);
    return acc;
  }, {} as Record<string, typeof airRoutes>);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Air Freight', href: '/air-freight' },
              { label: 'China to UK' },
            ]}
            variant="light"
            className="mb-6"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange/20 text-white border-orange/40 mb-4">
                <Plane className="h-3 w-3 mr-1" />
                Air Freight
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Air Freight from China to UK
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Fast and reliable air cargo services from China to the United Kingdom.
                Express delivery in 3-5 days with daily flights to London Heathrow.
              </p>
              <div className="flex flex-wrap gap-4 lg:hidden">
                <Button asChild className="bg-orange hover:bg-orange-dark text-white">
                  <Link href="/quote">
                    Get Instant Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="!border-white/40 !text-white !bg-transparent hover:!bg-white/10">
                  <Link href="#all-routes">
                    View All Routes
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <HeroQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange mb-1">{airRoutes.length}</div>
              <div className="text-sm text-muted-foreground">Air Routes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange mb-1">3-5</div>
              <div className="text-sm text-muted-foreground">Days Transit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange mb-1">6</div>
              <div className="text-sm text-muted-foreground">Chinese Airports</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange mb-1">Daily</div>
              <div className="text-sm text-muted-foreground">Flights</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Air Freight Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Why Choose Air Freight to the UK?
              </h2>
              <p className="text-muted-foreground mb-8">
                Air freight is the fastest way to ship from China to the United Kingdom.
                Perfect for urgent shipments, high-value goods, and e-commerce orders.
                Our team handles all post-Brexit customs requirements seamlessly.
              </p>
              <ul className="space-y-4">
                {whyChooseAirFreight.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild className="bg-orange hover:bg-orange-dark text-white">
                  <Link href="/quote">
                    Request Air Freight Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-orange" />
                    Service Tiers
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <div className="font-medium flex items-center gap-2">
                        Express
                        <Badge className="bg-orange/10 text-orange border-orange/20 text-xs">Fastest</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">2-3 days • Priority handling</div>
                      <div className="text-sm text-orange mt-1">For urgent shipments</div>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <div className="font-medium">Standard Air Cargo</div>
                      <div className="text-sm text-muted-foreground">3-4 days • Regular handling</div>
                      <div className="text-sm text-orange mt-1">Best value for most shipments</div>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <div className="font-medium">Economy Air</div>
                      <div className="text-sm text-muted-foreground">4-5 days • Consolidated cargo</div>
                      <div className="text-sm text-orange mt-1">Budget-friendly option</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Major Airports Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Major UK Destination Airports
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver to all major UK airports with nationwide distribution available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {majorAirports.map((airport) => (
              <Card key={airport.name} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                      <Plane className="h-6 w-6 text-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{airport.name}</h3>
                      <p className="text-sm text-muted-foreground">{airport.hub}</p>
                      <p className="text-sm text-orange font-medium mt-1">{airport.transit}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Routes Section */}
      <section id="all-routes" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              All Air Freight Routes to UK
            </h2>
            <p className="text-muted-foreground">
              Browse all {airRoutes.length} air freight routes from China to the United Kingdom.
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(routesByDestination).map(([destination, routes]) => (
              <div key={destination}>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Plane className="h-4 w-4 text-orange" />
                  Routes to {destination}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.id}
                      href={`/air-freight-${route.slug}`}
                      className="group block p-4 rounded-lg border border-border/50 hover:border-orange/50 hover:bg-orange/5 transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs border-orange/30 text-orange">
                          Air
                        </Badge>
                        <span className="text-xs text-muted-foreground">{route.transitTime}</span>
                      </div>
                      <div className="font-medium text-foreground group-hover:text-orange transition-colors">
                        {route.originCity} → {route.destinationCity}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {route.frequency}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Ship by Air to the UK Today"
        description="Get a free quote for air freight from China to the UK. Fast delivery with expert post-Brexit customs handling."
      />
    </>
  );
}
