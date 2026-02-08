import { Metadata } from 'next';
import Link from 'next/link';
import { Ship, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumbs, CTASection, FilterableRoutesList, HeroQuoteForm } from '@/components/sections';
import { generateSeaRoutes } from '@/lib/data/routeGenerator';

export const metadata: Metadata = {
  title: 'Shipping from China to Italy | Sea Freight Guide 2026',
  description: 'Complete guide to shipping from China to Italy. Current rates, transit times, customs requirements, and expert tips for sea freight via Trieste in 2026.',
  alternates: {
    canonical: '/shipping-china-to-italy',
  },
  openGraph: {
    title: 'Shipping from China to Italy | UpFreights',
    description: 'Complete guide to shipping from China to Italy. Current rates, transit times, and customs requirements for 2026.',
  },
};

const whyShipWithUs = [
  'Direct services to Trieste from all major Chinese ports',
  'Comprehensive door-to-door delivery services',
  'Expert EU customs clearance and EORI documentation',
  'Real-time tracking and shipment updates',
];

export default function ShippingToItalyPage() {
  // Get routes for Italy
  const seaRoutes = generateSeaRoutes().filter(r =>
    r.destinationCountry.toLowerCase() === 'italy'
  );

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Destinations', href: '/all-routes' },
              { label: 'Italy' },
            ]}
            variant="light"
            className="mb-6"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Shipping from China to Italy
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Reliable sea freight forwarding services via Trieste, Italy&apos;s strategic Mediterranean gateway to Central and Southern Europe.
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

      {/* Why Ship With Us Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Why Ship to Italy with Us?
              </h2>
              <p className="text-muted-foreground mb-8">
                We specialize in freight forwarding from China to Italy, offering sea freight options through the Port of Trieste. Our extensive carrier network and EU customs expertise ensure your cargo reaches its destination safely and on time.
              </p>
              <ul className="space-y-4">
                {whyShipWithUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-white mb-2">{seaRoutes.length}</div>
                    <div className="text-white/80">Sea Routes Available</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-orange mb-2">8</div>
                    <div className="text-white/80">Chinese Origin Ports</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-white mb-2">40-65</div>
                    <div className="text-white/80">Days Sea Freight</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Shipping Services Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Available Shipping Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sea freight for cost-effective bulk cargo transport from China to Italy via Trieste.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            {/* Sea Freight Card */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-ocean/10 flex items-center justify-center">
                    <Ship className="h-7 w-7 text-ocean" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Sea Freight to Italy</h3>
                    <p className="text-sm text-muted-foreground">Cost-effective ocean shipping via Trieste</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Cost-effective ocean shipping with FCL and LCL options from Chinese ports to Trieste, Italy. Ideal for large volumes with excellent connections to Central Europe.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Transit Time:</span>
                    <span className="font-semibold text-foreground">40-65 days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Available Routes:</span>
                    <span className="font-semibold text-foreground">{seaRoutes.length}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Container Types:</span>
                    <span className="font-semibold text-foreground">20ft, 40ft, 40ft HC</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button asChild variant="outline">
                    <Link href="/sea-freight-from-china-to-italy">
                      View Sea Freight to Italy
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <span className="text-sm text-muted-foreground">Starting from <span className="font-semibold text-ocean">$1,900/ctn</span></span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Routes Section with Filters */}
      <section id="all-routes" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              All Routes to Italy
            </h2>
            <p className="text-muted-foreground">
              Browse all {seaRoutes.length} shipping routes from China to Italy.
              Use filters to find the perfect route for your shipment.
            </p>
          </div>

          <FilterableRoutesList
            seaRoutes={seaRoutes}
            airRoutes={[]}
            countryName="Italy"
          />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Ship to Italy Today"
        description="Get a free quote for shipping from China to Italy. Our team will help you choose the best option."
      />
    </>
  );
}
