import { Metadata } from 'next';
import Link from 'next/link';
import { Ship, Plane, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumbs, CTASection, FilterableRoutesList, HeroQuoteForm } from '@/components/sections';
import { generateSeaRoutes, generateAirRoutes } from '@/lib/data/routeGenerator';

export const metadata: Metadata = {
  title: 'Shipping from China to Germany',
  description: 'Comprehensive freight forwarding services with air and sea shipping options. Reliable, cost-effective solutions for businesses of all sizes.',
  alternates: {
    canonical: '/shipping-china-to-germany',
  },
  openGraph: {
    title: 'Shipping from China to Germany | UpFreights',
    description: 'Comprehensive freight forwarding services with air and sea shipping options to Germany.',
  },
};

const whyShipWithUs = [
  'Multiple service options to fit your budget and timeline',
  'Comprehensive door-to-door delivery services',
  'Expert customs clearance and documentation',
  'Real-time tracking and shipment updates',
];

export default function ShippingToGermanyPage() {
  // Get routes for Germany
  const seaRoutes = generateSeaRoutes().filter(r =>
    r.destinationCountry.toLowerCase() === 'germany'
  );
  const airRoutes = generateAirRoutes().filter(r =>
    r.destinationCountry.toLowerCase() === 'germany'
  );

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Destinations', href: '/shipping' },
              { label: 'Germany' },
            ]}
            variant="light"
            className="mb-6"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Shipping from China to Germany
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Comprehensive freight forwarding services with air and sea shipping options. Reliable, cost-effective solutions for businesses of all sizes.
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
                Why Ship to Germany with Us?
              </h2>
              <p className="text-muted-foreground mb-8">
                We specialize in freight forwarding from China to Germany, offering both air and sea freight options to meet your specific shipping requirements. Our extensive network and experience ensure your cargo reaches its destination safely and on time.
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
                    <div className="text-5xl font-bold text-white mb-2">{seaRoutes.length + airRoutes.length}</div>
                    <div className="text-white/80">Total Routes Available</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-orange mb-2">2-5</div>
                    <div className="text-white/80">Days Air Freight</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-white mb-2">28-38</div>
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
              Choose from air freight for urgent shipments or sea freight for cost-effective bulk cargo transport.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Air Freight Card */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center">
                    <Plane className="h-7 w-7 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Air Freight to Germany</h3>
                    <p className="text-sm text-muted-foreground">Fast and reliable air cargo services</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Fast and reliable air cargo services from major Chinese airports to Germany. Perfect for time-sensitive and high-value shipments.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Transit Time:</span>
                    <span className="font-semibold text-foreground">2-5 days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Available Routes:</span>
                    <span className="font-semibold text-foreground">12</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Service Types:</span>
                    <span className="font-semibold text-foreground">Express, Standard, Economy</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button asChild variant="outline">
                    <Link href="/air-freight">
                      View All Air Freight Routes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <span className="text-sm text-muted-foreground">Starting from <span className="font-semibold text-orange">$6.80/kg</span></span>
                </div>
              </CardContent>
            </Card>

            {/* Sea Freight Card */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-ocean/10 flex items-center justify-center">
                    <Ship className="h-7 w-7 text-ocean" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Sea Freight to Germany</h3>
                    <p className="text-sm text-muted-foreground">Cost-effective ocean shipping</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Cost-effective ocean shipping with FCL and LCL options from Chinese ports to Germany. Ideal for large volumes and non-urgent cargo.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Transit Time:</span>
                    <span className="font-semibold text-foreground">28-38 days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Available Routes:</span>
                    <span className="font-semibold text-foreground">16</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Container Types:</span>
                    <span className="font-semibold text-foreground">20ft, 40ft, 40ft HC</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button asChild variant="outline">
                    <Link href="/sea-freight">
                      View All Sea Freight Routes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <span className="text-sm text-muted-foreground">Starting from <span className="font-semibold text-ocean">$90/CBM</span></span>
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
              All Routes to Germany
            </h2>
            <p className="text-muted-foreground">
              Browse all {seaRoutes.length + airRoutes.length} shipping routes from China to Germany.
              Use filters to find the perfect route for your shipment.
            </p>
          </div>

          <FilterableRoutesList
            seaRoutes={seaRoutes}
            airRoutes={airRoutes}
            countryName="Germany"
          />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Ship to Germany Today"
        description="Get a free quote for shipping from China to Germany. Our team will help you choose the best option."
      />
    </>
  );
}
