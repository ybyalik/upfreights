import { Metadata } from 'next';
import Link from 'next/link';
import { Ship, Plane, CheckCircle, ArrowRight, Clock, FileText, Shield, AlertTriangle, MapPin, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumbs, CTASection, FilterableRoutesList, HeroQuoteForm } from '@/components/sections';
import { generateSeaRoutes, generateAirRoutes } from '@/lib/data/routeGenerator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: 'Shipping from China to Netherlands | Sea & Air Freight Guide 2025',
  description: 'Complete guide to shipping from China to Netherlands. Current rates, transit times, customs requirements, and expert tips for sea and air freight in 2025.',
  alternates: {
    canonical: '/shipping-china-to-netherlands',
  },
  openGraph: {
    title: 'Shipping from China to Netherlands | UpFreights',
    description: 'Complete guide to shipping from China to Netherlands. Current rates, transit times, and customs requirements for 2025.',
  },
};

const whyShipWithUs = [
  'Multiple service options to fit your budget and timeline',
  'Comprehensive door-to-door delivery services',
  'Expert customs clearance and documentation',
  'Real-time tracking and shipment updates',
];

export default function ShippingToNetherlandsPage() {
  // Get routes for Netherlands
  const seaRoutes = generateSeaRoutes().filter(r =>
    r.destinationCountry.toLowerCase() === 'netherlands'
  );
  const airRoutes = generateAirRoutes().filter(r =>
    r.destinationCountry.toLowerCase() === 'netherlands'
  );

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Destinations', href: '/all-routes' },
              { label: 'Netherlands' },
            ]}
            variant="light"
            className="mb-6"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Shipping from China to Netherlands
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
                Why Ship to Netherlands with Us?
              </h2>
              <p className="text-muted-foreground mb-8">
                We specialize in freight forwarding from China to Netherlands, offering both air and sea freight options to meet your specific shipping requirements. Our extensive network and experience ensure your cargo reaches its destination safely and on time.
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
                    <div className="text-5xl font-bold text-orange mb-2">3-5</div>
                    <div className="text-white/80">Days Air Freight</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-white mb-2">26-32</div>
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
                    <h3 className="text-xl font-bold text-foreground">Air Freight to Netherlands</h3>
                    <p className="text-sm text-muted-foreground">Fast and reliable air cargo services</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Fast and reliable air cargo services from major Chinese airports to Netherlands. Perfect for time-sensitive and high-value shipments.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Transit Time:</span>
                    <span className="font-semibold text-foreground">3-5 days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Available Routes:</span>
                    <span className="font-semibold text-foreground">{airRoutes.length}</span>
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
                  <span className="text-sm text-muted-foreground">Starting from <span className="font-semibold text-orange">$6.20/kg</span></span>
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
                    <h3 className="text-xl font-bold text-foreground">Sea Freight to Netherlands</h3>
                    <p className="text-sm text-muted-foreground">Cost-effective ocean shipping</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Cost-effective ocean shipping with FCL and LCL options from Chinese ports to Netherlands. Ideal for large volumes and non-urgent cargo.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Transit Time:</span>
                    <span className="font-semibold text-foreground">26-32 days</span>
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
                    <Link href="/sea-freight">
                      View All Sea Freight Routes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <span className="text-sm text-muted-foreground">Starting from <span className="font-semibold text-ocean">$80/CBM</span></span>
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
              All Routes to Netherlands
            </h2>
            <p className="text-muted-foreground">
              Browse all {seaRoutes.length + airRoutes.length} shipping routes from China to Netherlands.
              Use filters to find the perfect route for your shipment.
            </p>
          </div>

          <FilterableRoutesList
            seaRoutes={seaRoutes}
            airRoutes={airRoutes}
            countryName="Netherlands"
          />
        </div>
      </section>

      {/* Detailed Guide Content */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Shipping from China to the Netherlands can seem daunting, especially with 2025&apos;s volatile market conditions. Current geopolitical tensions and Red Sea disruptions have created significant rate fluctuations, making expert guidance essential for cost-effective international shipping. This comprehensive guide will help you understand your options, optimize costs, and ensure smooth delivery to the Netherlands.
              </p>

              {/* Current Market Conditions */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Current Market Conditions and Rates for 2025
                </h2>
                <p className="text-muted-foreground mb-6">
                  Understanding the current shipping landscape is crucial for planning your logistics strategy. The China to Netherlands route has experienced dramatic rate swings throughout 2025, with Shanghai to Rotterdam rates jumping 41% in June alone before stabilizing in July.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Sea Freight Rates Show Signs of Stabilization</h3>
                <p className="text-muted-foreground mb-4">
                  After a turbulent first half of 2025, sea freight rates are showing more stability. Here&apos;s what you need to know about current pricing:
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted">
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Container Type</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Current Rate Range</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Average Rate</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Transit Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 text-muted-foreground">20ft Container</td>
                        <td className="px-4 py-3 text-muted-foreground">$1,050 - $2,750</td>
                        <td className="px-4 py-3 font-semibold text-foreground">$1,900</td>
                        <td className="px-4 py-3 text-muted-foreground">30-35 days</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 text-muted-foreground">40ft Container</td>
                        <td className="px-4 py-3 text-muted-foreground">$1,975 - $4,010</td>
                        <td className="px-4 py-3 font-semibold text-foreground">$2,800</td>
                        <td className="px-4 py-3 text-muted-foreground">30-35 days</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 text-muted-foreground">40ft High Cube</td>
                        <td className="px-4 py-3 text-muted-foreground">$2,000 - $4,200</td>
                        <td className="px-4 py-3 font-semibold text-foreground">$3,100</td>
                        <td className="px-4 py-3 text-muted-foreground">30-35 days</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-muted-foreground">LCL per CBM</td>
                        <td className="px-4 py-3 text-muted-foreground">$250 - $375</td>
                        <td className="px-4 py-3 font-semibold text-foreground">$312</td>
                        <td className="px-4 py-3 text-muted-foreground">32-38 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">Air Freight Maintains Premium Pricing</h3>
                <p className="text-muted-foreground mb-4">
                  Air freight rates have stabilized at elevated levels after experiencing an 88% year-over-year increase in April 2025. Red Sea crisis impacts continue to drive demand as shippers seek faster alternatives.
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted">
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Weight Range</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Rate per kg</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">All-in Rate</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Transit Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 text-muted-foreground">45-100kg</td>
                        <td className="px-4 py-3 text-muted-foreground">$5.50</td>
                        <td className="px-4 py-3 font-semibold text-foreground">$6.00</td>
                        <td className="px-4 py-3 text-muted-foreground">3-5 days</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 text-muted-foreground">100-300kg</td>
                        <td className="px-4 py-3 text-muted-foreground">$4.80</td>
                        <td className="px-4 py-3 font-semibold text-foreground">$5.30</td>
                        <td className="px-4 py-3 text-muted-foreground">3-5 days</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 text-muted-foreground">300-1,000kg</td>
                        <td className="px-4 py-3 text-muted-foreground">$4.40</td>
                        <td className="px-4 py-3 font-semibold text-foreground">$4.90</td>
                        <td className="px-4 py-3 text-muted-foreground">3-5 days</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-muted-foreground">1,000kg+</td>
                        <td className="px-4 py-3 text-muted-foreground">$3.80</td>
                        <td className="px-4 py-3 font-semibold text-foreground">$4.30</td>
                        <td className="px-4 py-3 text-muted-foreground">3-5 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sea Freight Section */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Ship className="h-8 w-8 text-ocean" />
                  Sea Freight: Your Most Cost-Effective Option
                </h2>
                <p className="text-muted-foreground mb-6">
                  When planning shipments from China to the Netherlands, sea freight typically offers the best value for money. The route primarily uses Rotterdam as the main entry point, handling nearly 80% of Netherlands&apos; container traffic.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Major Shipping Routes and Transit Times</h3>
                <p className="text-muted-foreground mb-4">
                  Key considerations include choosing the right departure port based on your supplier location and cargo type:
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted">
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Origin Port</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Destination</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">FCL Transit</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">LCL Transit</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">Shanghai</td>
                        <td className="px-4 py-3 text-muted-foreground">Rotterdam</td>
                        <td className="px-4 py-3 text-muted-foreground">30-32 days</td>
                        <td className="px-4 py-3 text-muted-foreground">32-35 days</td>
                        <td className="px-4 py-3 text-muted-foreground">Most frequent service</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">Shenzhen</td>
                        <td className="px-4 py-3 text-muted-foreground">Rotterdam</td>
                        <td className="px-4 py-3 text-muted-foreground">22-24 days</td>
                        <td className="px-4 py-3 text-muted-foreground">24-26 days</td>
                        <td className="px-4 py-3 text-muted-foreground">Direct route available</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">Ningbo</td>
                        <td className="px-4 py-3 text-muted-foreground">Rotterdam</td>
                        <td className="px-4 py-3 text-muted-foreground">28-30 days</td>
                        <td className="px-4 py-3 text-muted-foreground">30-32 days</td>
                        <td className="px-4 py-3 text-muted-foreground">Competitive rates</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">Qingdao</td>
                        <td className="px-4 py-3 text-muted-foreground">Rotterdam</td>
                        <td className="px-4 py-3 text-muted-foreground">35-40 days</td>
                        <td className="px-4 py-3 text-muted-foreground">37-42 days</td>
                        <td className="px-4 py-3 text-muted-foreground">Northern China access</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">Full Container Load (FCL) vs Less Container Load (LCL)</h3>
                <p className="text-muted-foreground mb-4">
                  Selecting between FCL and LCL depends on your cargo volume and budget considerations:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-ocean/20 bg-ocean/5">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-3">Choose FCL When:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-ocean mt-0.5 flex-shrink-0" />
                          <span>Your cargo fills at least 15 cubic meters</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-ocean mt-0.5 flex-shrink-0" />
                          <span>You need faster transit times</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-ocean mt-0.5 flex-shrink-0" />
                          <span>Your goods require special handling</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-ocean mt-0.5 flex-shrink-0" />
                          <span>Cost per cubic meter is lower than LCL rates</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-orange/20 bg-orange/5">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-3">Choose LCL When:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                          <span>Your cargo is less than 15 cubic meters</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                          <span>You can accept longer transit times</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                          <span>Your goods don&apos;t require special handling</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                          <span>You want to avoid minimum container charges</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">Container Types and Specifications</h3>
                <p className="text-muted-foreground mb-4">
                  Understanding container options helps optimize your shipping strategy:
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted">
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Container Type</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Internal Dimensions</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Capacity</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Max Weight</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">20ft Standard</td>
                        <td className="px-4 py-3 text-muted-foreground">5.89m × 2.35m × 2.39m</td>
                        <td className="px-4 py-3 text-muted-foreground">33 CBM</td>
                        <td className="px-4 py-3 text-muted-foreground">21,700 kg</td>
                        <td className="px-4 py-3 text-muted-foreground">Heavy, dense cargo</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">40ft Standard</td>
                        <td className="px-4 py-3 text-muted-foreground">12.03m × 2.35m × 2.39m</td>
                        <td className="px-4 py-3 text-muted-foreground">67 CBM</td>
                        <td className="px-4 py-3 text-muted-foreground">26,500 kg</td>
                        <td className="px-4 py-3 text-muted-foreground">General cargo</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">40ft High Cube</td>
                        <td className="px-4 py-3 text-muted-foreground">12.03m × 2.35m × 2.70m</td>
                        <td className="px-4 py-3 text-muted-foreground">76 CBM</td>
                        <td className="px-4 py-3 text-muted-foreground">26,500 kg</td>
                        <td className="px-4 py-3 text-muted-foreground">Voluminous, light cargo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Air Freight Section */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Plane className="h-8 w-8 text-orange" />
                  Air Freight: When Speed Matters Most
                </h2>
                <p className="text-muted-foreground mb-6">
                  For businesses looking to minimize transit times or ship high-value, time-sensitive goods, air freight provides unmatched speed from China to the Netherlands.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose Air Freight?</h3>
                <p className="text-muted-foreground mb-4">Air freight makes sense when you need to:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Meet urgent delivery deadlines</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Ship high-value, low-weight products</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Reduce inventory holding costs</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Maintain fresh product quality</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Respond quickly to market demands</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-4">Air Freight Service Levels</h3>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted">
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Service Type</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Transit Time</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Rate Premium</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">Express</td>
                        <td className="px-4 py-3 text-muted-foreground">1-3 days</td>
                        <td className="px-4 py-3 text-muted-foreground">30-50% above standard</td>
                        <td className="px-4 py-3 text-muted-foreground">Emergency shipments</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">Standard</td>
                        <td className="px-4 py-3 text-muted-foreground">4-6 days</td>
                        <td className="px-4 py-3 text-muted-foreground">Base rate</td>
                        <td className="px-4 py-3 text-muted-foreground">Regular air freight</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">Economy</td>
                        <td className="px-4 py-3 text-muted-foreground">7-10 days</td>
                        <td className="px-4 py-3 text-muted-foreground">10-20% below standard</td>
                        <td className="px-4 py-3 text-muted-foreground">Cost-conscious air freight</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">Major Air Routes and Airports</h3>
                <p className="text-muted-foreground mb-4">
                  Primary air freight routes connect China&apos;s manufacturing hubs with Amsterdam Schiphol Airport, Europe&apos;s fourth-busiest cargo airport:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span><strong>Shanghai Pudong (PVG) to Amsterdam (AMS):</strong> 10h 35m flight time, multiple daily services</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span><strong>Shenzhen (SZX) to Amsterdam (AMS):</strong> Direct cargo flights available</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span><strong>Guangzhou (CAN) to Amsterdam (AMS):</strong> Major cargo hub with excellent connectivity</span>
                  </li>
                </ul>
              </div>

              {/* Cost Breakdown Section */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Complete Cost Breakdown and Hidden Fees
                </h2>
                <p className="text-muted-foreground mb-6">
                  Understanding the full cost structure helps you budget accurately and avoid surprises. Here&apos;s what you need to know about total landed costs:
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Sea Freight Cost Components</h3>
                <p className="text-muted-foreground mb-4">For a typical 40ft container shipment, expect these cost elements:</p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted">
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Cost Component</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Typical Range</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">Ocean Freight</td>
                        <td className="px-4 py-3 text-muted-foreground">$2,800 - $4,000</td>
                        <td className="px-4 py-3 text-muted-foreground">Base shipping rate</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">Fuel Surcharge</td>
                        <td className="px-4 py-3 text-muted-foreground">$150 - $300</td>
                        <td className="px-4 py-3 text-muted-foreground">Fluctuates with oil prices</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">Documentation Fees</td>
                        <td className="px-4 py-3 text-muted-foreground">$30 - $80</td>
                        <td className="px-4 py-3 text-muted-foreground">Bill of lading, certificates</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">Terminal Handling</td>
                        <td className="px-4 py-3 text-muted-foreground">$200 - $400</td>
                        <td className="px-4 py-3 text-muted-foreground">Port charges both ends</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">Customs Clearance</td>
                        <td className="px-4 py-3 text-muted-foreground">$150 - $400</td>
                        <td className="px-4 py-3 text-muted-foreground">Netherlands import processing</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">Local Delivery</td>
                        <td className="px-4 py-3 text-muted-foreground">$150 - $500</td>
                        <td className="px-4 py-3 text-muted-foreground">Rotterdam to final destination</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">Air Freight Cost Structure</h3>
                <p className="text-muted-foreground mb-4">For a 500kg air freight shipment, calculate costs as follows:</p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted">
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Cost Element</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Rate</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">500kg Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 text-muted-foreground">Base Air Freight</td>
                        <td className="px-4 py-3 text-muted-foreground">$4.40/kg</td>
                        <td className="px-4 py-3 text-muted-foreground">$2,200</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 text-muted-foreground">Fuel Surcharge</td>
                        <td className="px-4 py-3 text-muted-foreground">$0.30/kg</td>
                        <td className="px-4 py-3 text-muted-foreground">$150</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 text-muted-foreground">Security Fee</td>
                        <td className="px-4 py-3 text-muted-foreground">$0.15/kg</td>
                        <td className="px-4 py-3 text-muted-foreground">$75</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 text-muted-foreground">Handling Charges</td>
                        <td className="px-4 py-3 text-muted-foreground">$0.25/kg</td>
                        <td className="px-4 py-3 text-muted-foreground">$125</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 text-muted-foreground">Documentation</td>
                        <td className="px-4 py-3 text-muted-foreground">$50 flat</td>
                        <td className="px-4 py-3 text-muted-foreground">$50</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 text-muted-foreground">Customs Clearance</td>
                        <td className="px-4 py-3 text-muted-foreground">$200 flat</td>
                        <td className="px-4 py-3 text-muted-foreground">$200</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="px-4 py-3 font-bold text-foreground">Total Cost</td>
                        <td className="px-4 py-3 font-bold text-foreground">$5.60/kg</td>
                        <td className="px-4 py-3 font-bold text-foreground">$2,800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Documentation Section */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <FileText className="h-8 w-8 text-ocean" />
                  Essential Documentation and Compliance Requirements
                </h2>
                <p className="text-muted-foreground mb-6">
                  Navigating customs requirements can seem complex, but following this systematic approach ensures smooth clearance at Netherlands borders.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Required Documents for China Export</h3>
                <p className="text-muted-foreground mb-4">Ensure your Chinese supplier provides these mandatory documents:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Commercial Invoice:</strong> Detailed product description, quantities, values</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Packing List:</strong> Complete itemization of package contents</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Export Declaration:</strong> 18-digit Chinese customs form</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Bill of Lading/Air Waybill:</strong> Transport document and title</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Certificate of Origin:</strong> Required for duty preferences</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Quality Certificates:</strong> Product-specific compliance documents</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-4">Netherlands Import Requirements</h3>
                <p className="text-muted-foreground mb-4">Key considerations include obtaining your EORI number well in advance:</p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted">
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Document</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Timeline</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">
                          <Link href="https://business.gov.nl/international/doing-business-abroad/eori-number-for-all-customs-operations/" className="text-orange hover:underline" target="_blank" rel="noopener noreferrer">
                            EORI Registration
                          </Link>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">3 weeks</td>
                        <td className="px-4 py-3 text-muted-foreground">Free registration required for all imports</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">
                          <Link href="https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export_en" className="text-orange hover:underline" target="_blank" rel="noopener noreferrer">
                            Import Declaration
                          </Link>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">Before arrival</td>
                        <td className="px-4 py-3 text-muted-foreground">Electronic submission required</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">Entry Summary Declaration</td>
                        <td className="px-4 py-3 text-muted-foreground">4-24 hours before</td>
                        <td className="px-4 py-3 text-muted-foreground">Safety and security filing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">Duty and Tax Calculations</h3>
                <p className="text-muted-foreground mb-4">For a $10,000 shipment of electronics, expect these charges:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <ArrowRight className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span><strong>Import Duty:</strong> 0-14% depending on product classification</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <ArrowRight className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span><strong>VAT:</strong> 21% on (value + duty + transport costs)</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <ArrowRight className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span><strong>Total Tax Example:</strong> $2,100+ for electronics imports</span>
                  </li>
                </ul>
              </div>

              {/* Step-by-Step Process */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Clock className="h-8 w-8 text-orange" />
                  Step-by-Step Shipping Process
                </h2>
                <p className="text-muted-foreground mb-6">
                  Understanding the complete shipping workflow helps you plan effectively and avoid common delays.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Pre-Shipment Planning (2-4 weeks before)</h3>
                <ol className="space-y-2 mb-6 list-decimal list-inside">
                  <li className="text-muted-foreground"><strong>Obtain EORI Number:</strong> Register with Netherlands customs (allow 3 weeks)</li>
                  <li className="text-muted-foreground"><strong>Classify Your Products:</strong> Determine correct HS codes for duty calculation</li>
                  <li className="text-muted-foreground"><strong>Choose Shipping Method:</strong> Compare sea vs air freight based on urgency and budget</li>
                  <li className="text-muted-foreground"><strong>Select Freight Forwarder:</strong> Evaluate services, rates, and track record</li>
                  <li className="text-muted-foreground"><strong>Arrange Insurance:</strong> Secure cargo protection (0.1-0.3% of shipment value)</li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground mb-4">Booking and Documentation (1-2 weeks before)</h3>
                <ol className="space-y-2 mb-6 list-decimal list-inside">
                  <li className="text-muted-foreground"><strong>Confirm Booking:</strong> Secure container/air freight space with forwarder</li>
                  <li className="text-muted-foreground"><strong>Prepare Documents:</strong> Work with supplier to complete export paperwork</li>
                  <li className="text-muted-foreground"><strong>Arrange Pickup:</strong> Schedule collection from supplier facility</li>
                  <li className="text-muted-foreground"><strong>Submit Pre-Arrival Notice:</strong> File Entry Summary Declaration with Dutch customs</li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground mb-4">Transit and Arrival Process</h3>
                <ol className="space-y-2 mb-6 list-decimal list-inside">
                  <li className="text-muted-foreground"><strong>Cargo Departure:</strong> Monitor vessel/flight departure from China</li>
                  <li className="text-muted-foreground"><strong>Transit Tracking:</strong> Receive regular updates on shipment progress</li>
                  <li className="text-muted-foreground"><strong>Arrival Notification:</strong> Get notice when cargo reaches Netherlands</li>
                  <li className="text-muted-foreground"><strong>Customs Processing:</strong> Submit import declaration and pay duties/taxes</li>
                  <li className="text-muted-foreground"><strong>Release and Delivery:</strong> Arrange final delivery to your facility</li>
                </ol>
              </div>

              {/* Managing Challenges */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-orange" />
                  Managing Common Challenges and Delays
                </h2>
                <p className="text-muted-foreground mb-6">
                  Anticipating potential issues helps you mitigate risks and maintain supply chain reliability.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Peak Season Considerations</h3>
                <p className="text-muted-foreground mb-4">Plan ahead for these high-demand periods when capacity becomes scarce and rates increase:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Chinese New Year (January-February):</strong> 2-3 week factory shutdown</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Summer Peak (July-September):</strong> 50-100% rate increases possible</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Pre-Christmas Rush (October-November):</strong> Limited space availability</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-4">Risk Mitigation Strategies</h3>
                <p className="text-muted-foreground mb-4">To optimize your shipping strategy and minimize disruptions:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Book Early:</strong> Secure space 4-6 weeks in advance during peak seasons</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Diversify Routes:</strong> Consider alternative ports like Hamburg or Antwerp</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Maintain Flexibility:</strong> Keep backup shipping options available</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Monitor Documentation:</strong> Use experienced customs brokers to avoid errors</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Track Weather:</strong> Stay informed about potential weather delays</span>
                  </li>
                </ul>
              </div>

              {/* Insurance Section */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Shield className="h-8 w-8 text-ocean" />
                  Insurance and Cargo Protection
                </h2>
                <p className="text-muted-foreground mb-6">
                  Protecting your investment through proper insurance coverage is essential for international shipping.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Insurance Coverage Options</h3>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted">
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Coverage Type</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Premium Rate</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Coverage Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">All-Risk Coverage</td>
                        <td className="px-4 py-3 text-muted-foreground">0.15-0.30%</td>
                        <td className="px-4 py-3 text-muted-foreground">Comprehensive protection against physical loss and damage</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">Named Perils</td>
                        <td className="px-4 py-3 text-muted-foreground">0.10-0.20%</td>
                        <td className="px-4 py-3 text-muted-foreground">Coverage for specific risks like fire, theft, collision</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">Basic Coverage</td>
                        <td className="px-4 py-3 text-muted-foreground">0.05-0.15%</td>
                        <td className="px-4 py-3 text-muted-foreground">Total loss protection only</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">Insurance Calculation Example</h3>
                <p className="text-muted-foreground mb-4">For a $50,000 electronics shipment with all-risk coverage:</p>
                <Card className="border-border/50 mb-6">
                  <CardContent className="p-6">
                    <ul className="space-y-2">
                      <li className="flex justify-between text-muted-foreground">
                        <span>Coverage Value:</span>
                        <span className="font-semibold text-foreground">$55,000 (110% of CIF value)</span>
                      </li>
                      <li className="flex justify-between text-muted-foreground">
                        <span>Premium Rate:</span>
                        <span className="font-semibold text-foreground">0.20%</span>
                      </li>
                      <li className="flex justify-between text-muted-foreground border-t border-border/50 pt-2 mt-2">
                        <span>Insurance Cost:</span>
                        <span className="font-bold text-orange">$110</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Technology Section */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Technology and Tracking Solutions
                </h2>
                <p className="text-muted-foreground mb-6">
                  Modern shipping relies on technology to provide visibility and control throughout the supply chain.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Real-Time Tracking Capabilities</h3>
                <p className="text-muted-foreground mb-4">Expect these tracking features from professional freight forwarders:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>GPS Tracking:</strong> Real-time location updates for air freight</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Milestone Notifications:</strong> Automated alerts for key events</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Document Management:</strong> Digital access to all shipping documents</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Customs Status:</strong> Live updates on clearance progress</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Delivery Confirmation:</strong> Proof of delivery with timestamp</span>
                  </li>
                </ul>
              </div>

              {/* FAQ Section */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <HelpCircle className="h-8 w-8 text-orange" />
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-semibold">
                      How far in advance should I book my shipment?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      For sea freight, book 2-3 weeks in advance during normal periods, and 4-6 weeks during peak seasons. Air freight typically requires 1-2 weeks advance booking, though express services can accommodate shorter notice.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-semibold">
                      What happens if my cargo is delayed at customs?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Customs holds typically last 1-5 business days while authorities review documentation or inspect cargo. Working with experienced customs brokers significantly reduces delay risks through proper documentation preparation.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-semibold">
                      Can I ship hazardous materials from China to Netherlands?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, but hazardous materials require special documentation, packaging, and handling. Expect 25-50% rate premiums and additional compliance requirements including dangerous goods certificates.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-semibold">
                      How do I calculate dimensional weight for air freight?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Dimensional weight equals (Length × Width × Height) ÷ 6000 for air freight. Airlines charge based on whichever is greater: actual weight or dimensional weight.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left font-semibold">
                      What&apos;s the difference between Rotterdam and Amsterdam ports?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Rotterdam handles the majority of Netherlands container traffic with 14.4 million TEU capacity and better connectivity to European inland transport. Amsterdam specializes in agricultural products and offers 425,000 TEU capacity as a secondary option.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Next Steps */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Next Steps: Implementing Your Shipping Strategy
                </h2>
                <p className="text-muted-foreground mb-4">To streamline your China to Netherlands shipping operations:</p>
                <ol className="space-y-2 mb-6 list-decimal list-inside">
                  <li className="text-muted-foreground"><strong>Evaluate Your Requirements:</strong> Assess volume, urgency, and budget constraints</li>
                  <li className="text-muted-foreground"><strong>Register for EORI:</strong> Complete Netherlands customs registration immediately</li>
                  <li className="text-muted-foreground"><strong>Compare Freight Forwarders:</strong> Request quotes from multiple providers</li>
                  <li className="text-muted-foreground"><strong>Establish Documentation Process:</strong> Create templates and checklists</li>
                  <li className="text-muted-foreground"><strong>Set Up Tracking Systems:</strong> Implement visibility tools for supply chain management</li>
                </ol>

                <p className="text-muted-foreground mb-4">
                  Successful shipping from China to Netherlands requires careful planning, proper documentation, and reliable partners. By understanding current market conditions, comparing shipping methods, and implementing robust tracking systems, you can optimize costs while ensuring reliable delivery to the Netherlands market.
                </p>

                <p className="text-muted-foreground">
                  Remember that shipping costs and transit times fluctuate based on market conditions, seasonal demand, and global events. Maintaining flexibility in your logistics strategy while building strong relationships with experienced freight forwarders will help you navigate these complexities successfully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Ship to Netherlands Today"
        description="Get a free quote for shipping from China to Netherlands. Our team will help you choose the best option."
      />
    </>
  );
}
