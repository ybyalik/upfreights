import { Metadata } from 'next';
import Link from 'next/link';
import { Ship, CheckCircle, ArrowRight, Anchor, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumbs, CTASection, HeroQuoteForm } from '@/components/sections';
import { generateSeaRoutes } from '@/lib/data/routeGenerator';

export const metadata: Metadata = {
  title: 'Sea Freight from China to Italy | Ocean Shipping to Genoa, Trieste, Naples, La Spezia & Venice',
  description: 'Reliable sea freight services from China to Italy. FCL and LCL shipping with 40-65 days transit to Genoa, Trieste, Naples, La Spezia, and Venice. Major carriers including CMA, MSC, Maersk, COSCO, and OOCL.',
  alternates: {
    canonical: '/sea-freight-from-china-to-italy',
  },
  openGraph: {
    title: 'Sea Freight from China to Italy | UpFreights',
    description: 'Reliable sea freight services from China to Italy with FCL and LCL options via Genoa, Trieste, Naples, La Spezia, and Venice.',
  },
};

const whyChooseSeaFreight = [
  'Cost-effective for large and heavy shipments',
  'FCL (Full Container Load) and LCL (Less than Container Load) options',
  'Direct services to Genoa, Trieste, Naples, La Spezia, and Venice - Mediterranean gateways to Europe',
  'Major carriers: CMA CGM, MSC, Maersk, COSCO, OOCL',
  'EU customs compliance expertise included',
];

const majorPorts = [
  { name: 'Genoa', transit: '40-65 days', volume: "Italy's largest and busiest port" },
  { name: 'Trieste', transit: '40-65 days', volume: "Italy's largest port by tonnage" },
  { name: 'Naples', transit: '50-65 days', volume: "Southern Italy's key commercial gateway" },
  { name: 'La Spezia', transit: '40-65 days', volume: "Northern Italy's Ligurian gateway" },
  { name: 'Venice', transit: '40-65 days', volume: "Northeastern Italy's Adriatic gateway" },
];

export default function SeaFreightChinaToItalyPage() {
  const seaRoutes = generateSeaRoutes().filter(r =>
    r.destinationCountry.toLowerCase() === 'italy'
  );

  const routesByDestination = seaRoutes.reduce((acc, route) => {
    const key = route.destinationCity;
    if (!acc[key]) acc[key] = [];
    acc[key].push(route);
    return acc;
  }, {} as Record<string, typeof seaRoutes>);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Sea Freight', href: '/sea-freight' },
              { label: 'China to Italy' },
            ]}
            variant="light"
            className="mb-6"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-ocean/20 text-white border-ocean/40 mb-4">
                <Ship className="h-3 w-3 mr-1" />
                Ocean Freight
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Sea Freight from China to Italy
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Cost-effective ocean shipping from China to Italy via Genoa, Trieste, Naples, La Spezia, and Venice,
                the Mediterranean&apos;s strategic gateways to Central and Southern Europe.
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
              <div className="text-3xl md:text-4xl font-bold text-ocean mb-1">{seaRoutes.length}</div>
              <div className="text-sm text-muted-foreground">Sea Routes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-ocean mb-1">40-65</div>
              <div className="text-sm text-muted-foreground">Days Transit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-ocean mb-1">8</div>
              <div className="text-sm text-muted-foreground">Chinese Ports</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-ocean mb-1">Weekly</div>
              <div className="text-sm text-muted-foreground">Departures</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sea Freight Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Why Choose Sea Freight to Italy?
              </h2>
              <p className="text-muted-foreground mb-8">
                Trieste is a key Mediterranean gateway offering the shortest overland route
                from Asia to Central Europe. Sea freight provides the most cost-effective
                solution for shipping large volumes to Italian and European markets.
              </p>
              <ul className="space-y-4">
                {whyChooseSeaFreight.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild className="bg-ocean hover:bg-ocean/90 text-white">
                  <Link href="/quote">
                    Request Sea Freight Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Package className="h-5 w-5 text-ocean" />
                    Container Options
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <div className="font-medium">20ft Standard Container</div>
                      <div className="text-sm text-muted-foreground">5.9m x 2.35m x 2.39m &bull; Max 28,200 kg</div>
                      <div className="text-sm text-ocean mt-1">Ideal for heavy cargo</div>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <div className="font-medium">40ft Standard Container</div>
                      <div className="text-sm text-muted-foreground">12.03m x 2.35m x 2.39m &bull; Max 26,680 kg</div>
                      <div className="text-sm text-ocean mt-1">Most popular option</div>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <div className="font-medium">40ft High Cube</div>
                      <div className="text-sm text-muted-foreground">12.03m x 2.35m x 2.69m &bull; Max 26,460 kg</div>
                      <div className="text-sm text-ocean mt-1">Extra height for voluminous cargo</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Major Ports Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Destination Ports in Italy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We ship to major Italian ports with excellent rail and road connections throughout Italy and Central Europe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {majorPorts.map((port) => (
              <Card key={port.name} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center flex-shrink-0">
                      <Anchor className="h-6 w-6 text-ocean" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{port.name}</h3>
                      <p className="text-sm text-muted-foreground">{port.volume}</p>
                      <p className="text-sm text-ocean font-medium mt-1">{port.transit}</p>
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
              All Sea Freight Routes to Italy
            </h2>
            <p className="text-muted-foreground">
              Browse all {seaRoutes.length} sea freight routes from China to Italy.
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(routesByDestination).map(([destination, routes]) => (
              <div key={destination}>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Anchor className="h-4 w-4 text-ocean" />
                  Routes to {destination}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.id}
                      href={`/sea-freight-${route.slug}`}
                      className="group block p-4 rounded-lg border border-border/50 hover:border-ocean/50 hover:bg-ocean/5 transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs border-ocean/30 text-ocean">
                          Sea
                        </Badge>
                        <span className="text-xs text-muted-foreground">{route.transitTime}</span>
                      </div>
                      <div className="font-medium text-foreground group-hover:text-ocean transition-colors">
                        {route.originCity} &rarr; {route.destinationCity}
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
        title="Ship by Sea to Italy Today"
        description="Get a free quote for sea freight from China to Italy. EU customs expertise included."
      />
    </>
  );
}
