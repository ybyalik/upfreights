import { Metadata } from 'next';
import Link from 'next/link';
import { Ship, Plane, CheckCircle, ArrowRight, Clock, FileText, Shield, AlertTriangle, MapPin, HelpCircle, Train } from 'lucide-react';
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
  title: 'Shipping from China to Germany | Sea, Air & Rail Freight Guide 2026',
  description: 'Complete guide to shipping from China to Germany. Current rates, transit times, customs requirements, and expert tips for sea, air, and rail freight in 2026.',
  alternates: {
    canonical: '/shipping-china-to-germany',
  },
  openGraph: {
    title: 'Shipping from China to Germany | UpFreights',
    description: 'Complete guide to shipping from China to Germany. Current rates, transit times, and customs requirements for 2026.',
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
              { label: 'Destinations', href: '/all-routes' },
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
                    <Link href="/air-freight-from-china-to-germany">
                      View Air Freight to Germany
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
                    <Link href="/sea-freight-from-china-to-germany">
                      View Sea Freight to Germany
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

      {/* Detailed Guide Content */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Shipping From China to Germany
              </h2>

              {/* Who This Guide Is For */}
              <Card className="border-orange/20 bg-orange/5 mb-8">
                <CardContent className="p-6">
                  <p className="font-semibold text-foreground mb-3">Who This Guide Is For:</p>
                  <ul className="space-y-2 mb-0">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                      <span><strong>Chinese freight forwarders</strong> expanding into European markets and seeking German trade opportunities</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                      <span><strong>Manufacturing exporters</strong> targeting Germany&apos;s industrial sector and automotive industry</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                      <span><strong>E-commerce businesses</strong> sourcing products from China for German consumers</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                      <span><strong>Logistics managers</strong> optimizing China-Europe supply chains and exploring multi-modal options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <p className="text-lg text-muted-foreground mb-6">
                The China to Germany trade corridor represents one of Europe&apos;s most established and profitable shipping routes for Chinese freight forwarders. Germany was China&apos;s most important European trading partner in 2020, making this route essential for businesses seeking sustained growth in the European market. The preferred choice for European importers targeting Germany, understanding the complexities of this well-developed trade lane can provide significant competitive advantages while ensuring reliable service delivery.
              </p>

              {/* Bottom Line Summary */}
              <Card className="border-ocean/20 bg-ocean/5 mb-8">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-0">
                    <strong className="text-foreground">The bottom line:</strong> Ocean freight from China to Germany costs $1,200-$2,800 per container (20-30 days), air freight runs $3.50-$5.50/kg (3-7 days), and rail freight via the New Silk Road offers $8,000-$9,000 per container (14-18 days). Trusted by German manufacturers for reliable China connections, proper mode selection and documentation ensure smooth customs clearance in Europe&apos;s largest economy.
                  </p>
                </CardContent>
              </Card>

              <p className="text-muted-foreground mb-8">
                For July 2026, shipping rates have rebounded, especially by sea freight, following strong summer demand patterns. Ocean freight rates from China dropped significantly in February 2026, with Shanghai to Europe showing competitive pricing, though they have since stabilized. This dynamic market requires freight forwarders to prioritize proactive booking, complete documentation, and consider alternative modes like rail or air to bypass potential ocean bottlenecks.
              </p>

              {/* Shipping Costs Section */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  How Much Does It Cost to Ship from China to Germany in 2026?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Ocean freight remains the foundation of China to Germany trade, offering the most economical solution for larger volumes. The backbone of China-Germany commerce, current market conditions show stable rates with reasonable capacity, though Hamburg port experiences increased summer congestion. Here&apos;s what you need to know about current freight costs:
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Ocean Freight Rates</h3>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted">
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Container Size</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Route</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Cost Range (USD)</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Transit Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">20ft FCL</td>
                        <td className="px-4 py-3 text-muted-foreground">Shanghai to Hamburg</td>
                        <td className="px-4 py-3 text-muted-foreground">$1,200 - $1,850</td>
                        <td className="px-4 py-3 text-muted-foreground">20-30 days</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">40ft FCL</td>
                        <td className="px-4 py-3 text-muted-foreground">Shanghai to Hamburg</td>
                        <td className="px-4 py-3 text-muted-foreground">$1,850 - $2,800</td>
                        <td className="px-4 py-3 text-muted-foreground">20-30 days</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">LCL</td>
                        <td className="px-4 py-3 text-muted-foreground">Major Chinese ports to Germany</td>
                        <td className="px-4 py-3 text-muted-foreground">$30-35 per cubic meter</td>
                        <td className="px-4 py-3 text-muted-foreground">25-35 days</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">LCL (Stable Rate)</td>
                        <td className="px-4 py-3 text-muted-foreground">All routes</td>
                        <td className="px-4 py-3 text-muted-foreground">$215 per cubic meter</td>
                        <td className="px-4 py-3 text-muted-foreground">20-30 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">When Should You Choose Air Freight to Germany?</h3>
                <p className="text-muted-foreground mb-4">
                  Air freight provides the fastest connection between China and Germany, ideal for time-sensitive shipments. The go-to solution for Germany-bound electronics and automotive components, air freight offers predictable pricing with rates at $3.90 per kg in July 2026, though capacity remains tight across German airports including Munich and Frankfurt.
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted">
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Shipment Weight</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Rate per KG (USD)</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Transit Time</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">100+ kg</td>
                        <td className="px-4 py-3 text-muted-foreground">$4.50-5.50</td>
                        <td className="px-4 py-3 text-muted-foreground">4-7 days</td>
                        <td className="px-4 py-3 text-muted-foreground">Electronics, samples</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">500+ kg</td>
                        <td className="px-4 py-3 text-muted-foreground">$3.90-4.50</td>
                        <td className="px-4 py-3 text-muted-foreground">4-5 days</td>
                        <td className="px-4 py-3 text-muted-foreground">Commercial goods</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">1000+ kg</td>
                        <td className="px-4 py-3 text-muted-foreground">$3.50-4.00</td>
                        <td className="px-4 py-3 text-muted-foreground">3-5 days</td>
                        <td className="px-4 py-3 text-muted-foreground">Bulk air cargo</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">Express Service</td>
                        <td className="px-4 py-3 text-muted-foreground">$7.50-9.00</td>
                        <td className="px-4 py-3 text-muted-foreground">1-3 days</td>
                        <td className="px-4 py-3 text-muted-foreground">Urgent shipments</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Train className="h-6 w-6 text-green-600" />
                  Is Rail Freight a Good Alternative for Germany Shipments?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Rail freight offers an efficient middle ground solution for July 2026, with shorter transit times than sea freight (15 to 18 days) and lower costs than air freight. Ideal for businesses targeting Europe&apos;s largest economy, the New Silk Road network provides reliable connections from Chinese manufacturing hubs to German logistics centers including Hamburg and Duisburg.
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted">
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Container Size</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Route</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Cost (USD)</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Transit Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">40ft FCL</td>
                        <td className="px-4 py-3 text-muted-foreground">Xi&apos;an to Hamburg</td>
                        <td className="px-4 py-3 text-muted-foreground">$8,500</td>
                        <td className="px-4 py-3 text-muted-foreground">14-18 days</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">40ft FCL</td>
                        <td className="px-4 py-3 text-muted-foreground">Chongqing to Duisburg</td>
                        <td className="px-4 py-3 text-muted-foreground">$8,000-9,000</td>
                        <td className="px-4 py-3 text-muted-foreground">15-18 days</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">LCL</td>
                        <td className="px-4 py-3 text-muted-foreground">Various routes</td>
                        <td className="px-4 py-3 text-muted-foreground">$180-220 per cubic meter</td>
                        <td className="px-4 py-3 text-muted-foreground">15-20 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">What Are the True Total Costs for Germany Shipments?</h3>
                <p className="text-muted-foreground mb-4">
                  For a typical machinery shipment valued at $50,000 and weighing 2,500kg, here&apos;s how costs compare across different shipping modes:
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Ship className="h-5 w-5 text-ocean mt-0.5 flex-shrink-0" />
                    <span><strong>Ocean Freight (FCL):</strong> $2,200 shipping + German customs duties + VAT (19%) = approximately $12,500 total landed cost</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Plane className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span><strong>Air Freight:</strong> $9,750 shipping + customs duties + VAT = approximately $19,200 total landed cost</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Train className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Rail Freight:</strong> $8,500 shipping + customs duties + VAT = approximately $18,000 total landed cost</span>
                  </li>
                </ul>
              </div>

              {/* Chinese Ports Section */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Which Chinese Ports Should You Use for Germany Shipments?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Understanding the capabilities and advantages of each major Chinese port helps optimize your shipping strategy for German destinations. Trusted by logistics managers optimizing China-Europe supply chains, the container routes of the Port of Shanghai cover over 700 ports in more than 200 countries worldwide, with over 320 weekly deliveries providing excellent connectivity for European destinations.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Primary Departure Ports</h3>

                <h4 className="text-lg font-semibold text-foreground mb-3">Shanghai Port</h4>
                <p className="text-muted-foreground mb-4">
                  As China&apos;s largest container port, Shanghai offers the most comprehensive service options for Germany routes. The established solution for China-Germany trade operations, the port&apos;s established infrastructure and frequent sailing schedules make it ideal for businesses requiring predictable transit times to Hamburg, Bremen, and other German ports. Shanghai provides direct services and competitive rates for both FCL and LCL shipments.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-3">Shenzhen Port</h4>
                <p className="text-muted-foreground mb-4">
                  Located in Guangdong Province, Shenzhen ranks second nationally and third globally in cargo throughput. A growing favorite among logistics managers entering Europe, Shenzhen provides convenient access to Germany routes while maintaining competitive rates for businesses sourcing from southern China&apos;s electronics and manufacturing hubs. The port covers 260 kilometers of coastline with multiple terminals serving different cargo types.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-3">Ningbo Port</h4>
                <p className="text-muted-foreground mb-6">
                  Despite occasional congestion challenges due to increasing global trade volumes, Ningbo offers competitive pricing and excellent connections to eastern China manufacturing regions. Trusted by manufacturers seeking cost-effective European shipping, the port&apos;s infrastructure includes over 190 berths, many capable of accommodating large vessels serving European routes.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Which German Ports Offer the Best Access?</h3>
                <p className="text-muted-foreground mb-4">
                  Germany&apos;s port infrastructure provides multiple entry points for Chinese cargo, each offering distinct advantages based on final destination and logistics requirements.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-3">Port of Hamburg</h4>
                <p className="text-muted-foreground mb-4">
                  Germany&apos;s largest port, Hamburg serves as the primary gateway for Chinese imports. The preferred choice for European importers targeting Germany, the port offers excellent rail and road connections to central Europe, making it ideal for cargo destined throughout Germany and neighboring countries. Hamburg can experience seasonal congestion during summer months, requiring advance planning for optimal vessel selection.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-3">Port of Bremen/Bremerhaven</h4>
                <p className="text-muted-foreground mb-4">
                  Bremen provides an alternative to Hamburg with less congestion and competitive rates. The port offers good connections to northern and western Germany, making it suitable for automotive and industrial cargo. Bremerhaven specializes in container operations and provides efficient handling for both FCL and LCL shipments.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-3">Other German Ports</h4>
                <p className="text-muted-foreground mb-6">
                  Smaller ports including Wilhelmshaven and Emden offer specialized services for specific cargo types and regional distribution, though with less frequent services from China compared to Hamburg and Bremen.
                </p>
              </div>

              {/* Transport Mode Selection */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Should You Choose Ocean, Air, or Rail Freight to Germany?
                </h2>

                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Ship className="h-6 w-6 text-ocean" />
                  Ocean Freight: The Economic Foundation
                </h3>
                <p className="text-muted-foreground mb-4">
                  When planning shipments from China to Germany, ocean freight provides the most cost-effective solution for larger volumes. Sea freight takes 20-30 days to Hamburg but can face delays from high seasonal port activity. The economics are compelling for most commercial cargo, with ocean freight rates around $2-4 per kilogram compared to air freight&apos;s $3.50-5.50 per kilogram.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-3">Best For:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-ocean mt-0.5 flex-shrink-0" />
                    <span><strong>High-volume manufacturers</strong> moving consistent monthly shipments to Germany</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-ocean mt-0.5 flex-shrink-0" />
                    <span><strong>Cost-conscious businesses</strong> with longer lead time tolerance</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-ocean mt-0.5 flex-shrink-0" />
                    <span><strong>Industrial equipment suppliers</strong> shipping machinery and heavy goods</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-ocean mt-0.5 flex-shrink-0" />
                    <span><strong>Automotive parts exporters</strong> with predictable demand patterns</span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-foreground mb-3">Full Container Load (FCL) Services</h4>
                <p className="text-muted-foreground mb-4">
                  FCL shipping offers the most economical solution for businesses moving substantial volumes to Germany. Key advantages include:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Exclusive container control ensuring cargo security</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Fixed pricing regardless of container fill level</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Faster customs clearance with consolidated documentation</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Direct port-to-port service with minimal handling</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Cost per unit decreases significantly with larger volumes</span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-foreground mb-3">Less Than Container Load (LCL) Services</h4>
                <p className="text-muted-foreground mb-6">
                  For businesses not requiring full container capacity, LCL provides cost-effective access to Germany routes. LCL rates are stable at approximately $215 per cubic meter, though consolidation and deconsolidation add 3-5 days to transit times. This service works well for smaller manufacturers testing German markets or businesses with irregular shipping volumes.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Plane className="h-6 w-6 text-orange" />
                  Air Freight: Speed and Reliability Excellence
                </h3>
                <p className="text-muted-foreground mb-4">
                  Why choose air freight for Germany shipments? When time is critical and cargo values justify premium pricing, air freight provides unmatched speed and reliability. Air freight remains the fastest shipping option from China to Germany for July 2026, ideal for businesses prioritizing speed over cost considerations.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-3">Key Air Freight Advantages</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>Fastest transit times (3-7 days) for urgent deliveries</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>Enhanced security and tracking capabilities throughout journey</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>Suitable for temperature-sensitive pharmaceuticals and electronics</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>Lower inventory carrying costs due to reduced transit time</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>More predictable scheduling compared to ocean freight</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>Better protection against cargo damage or theft</span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-foreground mb-3">Air Freight Considerations</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Pricing calculated on actual weight or volumetric weight (whichever is greater)</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Capacity remains tight across German airports, requiring early booking</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Fuel surcharge fluctuations can affect total costs</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Size and weight limitations for oversized industrial cargo</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Higher per-unit costs make it unsuitable for low-value bulk goods</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Train className="h-6 w-6 text-green-600" />
                  Rail Freight: The Strategic Middle Ground
                </h3>
                <p className="text-muted-foreground mb-4">
                  Understanding the New Silk Road network helps explain how rail freight has become a reliable option for China to Germany shipments. Rail freight offers an efficient middle ground solution, balancing speed and cost effectiveness for businesses requiring faster delivery than ocean freight without air freight&apos;s premium pricing.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-3">New Silk Road Network Benefits</h4>
                <p className="text-muted-foreground mb-4">
                  The Belt and Road Initiative has created dedicated rail corridors connecting Chinese industrial hubs to major European cities, usually in 12-20 days. More than 12,000 trains used the Eurasian Corridor in 2020, with growth rates putting the increase at 3,000 trains per year. Key advantages include:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Fixed departures and reliable scheduling for planning purposes</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Transit times of 14-18 days, faster than ocean freight</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Lower costs than air freight for medium-weight shipments</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Suitable for electronics, auto parts, and temperature-sensitive goods</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Environmentally friendly option with 95% lower CO2 emissions than air freight</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Direct connections to German logistics hubs including Hamburg and Duisburg</span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-foreground mb-3">What Are the Rail Freight Route Options?</h4>
                <p className="text-muted-foreground mb-4">The network offers multiple corridor options, each with specific advantages:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Northern Corridor:</strong> Through Russia and Belarus, offering faster transit times</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Middle Corridor:</strong> Via Kazakhstan and Turkey, providing alternative routing</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Southern Corridor:</strong> Through Central Asia, suitable for specific cargo types</span>
                  </li>
                </ul>
              </div>

              {/* German Customs Section */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <FileText className="h-8 w-8 text-ocean" />
                  What Are Germany&apos;s Import Requirements and Customs Process?
                </h2>

                <h3 className="text-xl font-semibold text-foreground mb-4">German Customs Framework</h3>
                <p className="text-muted-foreground mb-6">
                  Understanding German customs clearance can seem daunting, but systematic preparation ensures smooth operations. Germany has one of the most structured customs systems in Europe, managed by the federal customs authority known as Zoll. German customs require meticulous paperwork, especially as July brings increased scrutiny and longer queues at major entry points like Hamburg and Munich.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">What Registration Do You Need for German Imports?</h3>
                <p className="text-muted-foreground mb-4">
                  For businesses importing into Germany, obtaining proper registration forms the foundation of successful operations. An EORI number (Economic Operators Registration and Identification) is mandatory for any business importing or exporting goods within the EU, including Germany. Once assigned, this number is valid throughout the EU, simplifying procedures for businesses operating in multiple European countries.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-3">EORI Number Benefits</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Universal application across all EU member states</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Streamlined customs clearance processes</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Faster processing of shipments and reduced delays</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Required for all customs declarations and summary declarations</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Enables participation in authorized economic operator programs</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-4">What Documents Do You Need for German Customs?</h3>
                <p className="text-muted-foreground mb-4">
                  Navigating German import requirements requires attention to detail and complete documentation. The customs clearance process ensures that all goods entering Germany meet local and EU regulations, from safety to environmental compliance.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-3">Primary Documents</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <FileText className="h-5 w-5 text-ocean mt-0.5 flex-shrink-0" />
                    <span><strong>Single Administrative Document (SAD):</strong> The official EU customs declaration form used across all member states</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <FileText className="h-5 w-5 text-ocean mt-0.5 flex-shrink-0" />
                    <span><strong>Commercial Invoice:</strong> Detailed product descriptions, values, and terms of sale in English or German</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <FileText className="h-5 w-5 text-ocean mt-0.5 flex-shrink-0" />
                    <span><strong>Packing List:</strong> Complete contents description for each package or container</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <FileText className="h-5 w-5 text-ocean mt-0.5 flex-shrink-0" />
                    <span><strong>Bill of Lading or Air Waybill:</strong> Transport document confirming cargo receipt and delivery terms</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <FileText className="h-5 w-5 text-ocean mt-0.5 flex-shrink-0" />
                    <span><strong>Certificate of Origin:</strong> Documentation proving goods&apos; manufacturing location for duty assessment</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <FileText className="h-5 w-5 text-ocean mt-0.5 flex-shrink-0" />
                    <span><strong>Entry Summary Declaration (ENS):</strong> Required at first EU customs office of entry</span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-foreground mb-3">Additional Requirements by Product Category</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Shield className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span><strong>CE Marking Certification:</strong> Required for toys, household appliances, machinery, medical equipment, electrical equipment</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Shield className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span><strong>CITES Certification:</strong> For animal or plant products and derived materials</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Shield className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span><strong>Fumigation Certificate:</strong> For wooden products, organic goods, or wood-derived packaging materials</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Shield className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span><strong>Health and Phytosanitary Certificates:</strong> For food products, pharmaceuticals, and agricultural items</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Shield className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span><strong>Technical Standards Compliance:</strong> Various German and EU standards depending on product type</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-4">How Does the German Customs Clearance Process Work?</h3>
                <p className="text-muted-foreground mb-4">
                  Understanding the step-by-step customs clearance process helps prevent delays and additional costs. German customs procedures follow EU regulations while maintaining specific national requirements for certain product categories.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-3">Clearance Steps</h4>
                <ol className="space-y-2 mb-6 list-decimal list-inside">
                  <li className="text-muted-foreground"><strong>Entry Summary Declaration:</strong> Filed by carrier at least 24 hours before loading (maritime) or 4 hours before arrival (air)</li>
                  <li className="text-muted-foreground"><strong>Temporary Storage:</strong> Goods placed under customs supervision for up to 90 days until cleared</li>
                  <li className="text-muted-foreground"><strong>Import Declaration:</strong> SAD submitted using computerized system or at customs office</li>
                  <li className="text-muted-foreground"><strong>Document Verification:</strong> Customs reviews all required documentation for completeness and accuracy</li>
                  <li className="text-muted-foreground"><strong>Risk Assessment:</strong> Goods may be selected for document check or physical inspection</li>
                  <li className="text-muted-foreground"><strong>Duty and Tax Calculation:</strong> Assessment based on goods classification, value, and origin</li>
                  <li className="text-muted-foreground"><strong>Payment Processing:</strong> Import duties, VAT, and any additional charges must be paid</li>
                  <li className="text-muted-foreground"><strong>Release Authorization:</strong> Goods cleared for distribution throughout EU territory</li>
                </ol>
              </div>

              {/* Duties and VAT Section */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  How Much Are German Import Duties and VAT?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Understanding Germany&apos;s import duty and tax framework helps accurately calculate total landed costs. Import taxes and duties significantly affect the total cost of importing goods from China to Germany, requiring careful consideration in pricing strategies.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">What Are Germany&apos;s Tax Components?</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <ArrowRight className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span><strong>Customs Duties:</strong> Varies by product classification (HS codes) and country of origin</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <ArrowRight className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span><strong>Value Added Tax (VAT):</strong> Standard rate of 19% applied to most imported goods</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <ArrowRight className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span><strong>Reduced VAT Rate:</strong> 7% for essential items like food products and books</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <ArrowRight className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span><strong>Excise Duties:</strong> Additional taxes on specific products like alcohol, tobacco, and fuel</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <ArrowRight className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                    <span><strong>Anti-dumping Duties:</strong> May apply to specific Chinese products under investigation</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-4">How Do You Calculate Total Import Costs to Germany?</h3>
                <p className="text-muted-foreground mb-4">For electronic equipment valued at $20,000 with 5% customs duty:</p>
                <Card className="border-border/50 mb-6">
                  <CardContent className="p-6">
                    <ul className="space-y-2">
                      <li className="flex justify-between text-muted-foreground">
                        <span>Customs Value:</span>
                        <span className="font-semibold text-foreground">$20,000</span>
                      </li>
                      <li className="flex justify-between text-muted-foreground">
                        <span>Customs Duty (5%):</span>
                        <span className="font-semibold text-foreground">$1,000</span>
                      </li>
                      <li className="flex justify-between text-muted-foreground">
                        <span>Duty-Paid Value:</span>
                        <span className="font-semibold text-foreground">$21,000</span>
                      </li>
                      <li className="flex justify-between text-muted-foreground">
                        <span>VAT (19% on duty-paid value):</span>
                        <span className="font-semibold text-foreground">$3,990</span>
                      </li>
                      <li className="flex justify-between text-muted-foreground border-t border-border/50 pt-2 mt-2">
                        <span>Total Taxes and Duties:</span>
                        <span className="font-bold text-orange">$4,990</span>
                      </li>
                      <li className="flex justify-between text-muted-foreground">
                        <span>Total Landed Cost:</span>
                        <span className="font-bold text-foreground">$24,990</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Route Planning Section */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  How Do You Plan the Best Route from China to Germany?
                </h2>

                <h3 className="text-xl font-semibold text-foreground mb-4">Port Selection Strategy</h3>
                <p className="text-muted-foreground mb-6">
                  Selecting the optimal German port depends on several factors including final destination, cargo type, vessel schedules, and seasonal considerations. Hamburg offers the most frequent services but can experience congestion, while Bremen provides competitive alternatives with potentially faster processing times.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-3">Decision Factors</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Final delivery location within Germany</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Seasonal port congestion patterns</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Available vessel schedules and frequency</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Port handling capabilities for specific cargo types</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Onward transportation costs and options</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Customs processing efficiency at different locations</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                  How Do Seasonal Factors Affect China to Germany Shipping?
                </h3>
                <p className="text-muted-foreground mb-4">
                  When planning China to Germany shipments, consider seasonal factors that affect both costs and capacity. German import patterns show increased activity before major holidays and industrial production cycles, affecting space availability and pricing across all transportation modes.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-3">Peak Season Impacts</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Chinese New Year (February):</strong> Reduced factory production and limited vessel capacity</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span><strong>European Summer (June-August):</strong> Increased port congestion and higher demand</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Year-End Holidays:</strong> Peak shipping season with premium rates and limited space</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span><strong>German Trade Fairs:</strong> Seasonal demand spikes for specific product categories</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Automotive Production Cycles:</strong> Regular patterns affecting rail and road transport capacity</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-4">How Do You Choose the Right Transportation Mode?</h3>
                <p className="text-muted-foreground mb-4">
                  Choosing the optimal transportation mode requires evaluating multiple factors beyond basic cost and transit time considerations. The right choice balances customer requirements, cargo characteristics, and market conditions to optimize overall logistics performance.
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted">
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Factor</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Ocean Freight</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Air Freight</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground border-b">Rail Freight</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">Cost per kg</td>
                        <td className="px-4 py-3 text-muted-foreground">$2-4</td>
                        <td className="px-4 py-3 text-muted-foreground">$3.50-5.50</td>
                        <td className="px-4 py-3 text-muted-foreground">$3-5</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">Transit Time</td>
                        <td className="px-4 py-3 text-muted-foreground">20-30 days</td>
                        <td className="px-4 py-3 text-muted-foreground">3-7 days</td>
                        <td className="px-4 py-3 text-muted-foreground">14-18 days</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">Reliability</td>
                        <td className="px-4 py-3 text-muted-foreground">Moderate</td>
                        <td className="px-4 py-3 text-muted-foreground">High</td>
                        <td className="px-4 py-3 text-muted-foreground">High</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3 font-medium text-foreground">Capacity</td>
                        <td className="px-4 py-3 text-muted-foreground">Unlimited</td>
                        <td className="px-4 py-3 text-muted-foreground">Limited</td>
                        <td className="px-4 py-3 text-muted-foreground">Good</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">Environmental Impact</td>
                        <td className="px-4 py-3 text-muted-foreground">Low</td>
                        <td className="px-4 py-3 text-muted-foreground">High</td>
                        <td className="px-4 py-3 text-muted-foreground">Very Low</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Risk Management Section */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Shield className="h-8 w-8 text-ocean" />
                  How Do You Manage Risks and Insurance for Germany Shipments?
                </h2>

                <h3 className="text-xl font-semibold text-foreground mb-4">What Cargo Protection Strategies Should You Use?</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive risk management addresses the various challenges that can affect China to Germany shipments. Consider these risk factors when developing protection strategies for your operations:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Ocean freight weather delays and port congestion</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Air freight capacity limitations during peak seasons</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Rail freight border crossing delays or infrastructure issues</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Customs compliance challenges and regulatory changes</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Currency fluctuation impacts on pricing and profitability</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Force majeure events affecting transportation networks</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-4">What Insurance Coverage Options Are Available?</h3>
                <p className="text-muted-foreground mb-6">
                  Appropriate insurance coverage protects against various risks throughout the transportation process. Coverage options should address cargo value, transportation mode risks, and potential business interruption costs. Work with experienced marine insurers who understand China to Germany trade lane specifics.
                </p>
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
                      What is the most cost-effective way to ship from China to Germany?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ocean freight via FCL container provides the most economical solution for shipments over 15 cubic meters. A 40-foot container costs approximately $1,850-2,800 depending on origin port and current market conditions. For smaller shipments, LCL at $215 per cubic meter offers good value, while rail freight provides a middle-ground option at $8,000-9,000 per container with faster transit times.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-semibold">
                      How long does customs clearance take in Germany?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      German customs clearance typically requires 1-3 days for properly documented commercial shipments. Goods may be cleared based on submitted documents, selected for document review, or chosen for physical inspection. German customs require meticulous paperwork, and advance documentation review is strongly advised to avoid disruptions.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-semibold">
                      What is required for rail freight via the New Silk Road?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Rail freight requires standard commercial documentation plus specific transit documents for border crossings through Russia, Belarus, and Poland. The service offers fixed departures with transit times of 14-18 days from Chinese hubs to German destinations. Early booking is recommended as capacity is limited compared to ocean freight.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-semibold">
                      How do seasonal factors affect shipping costs and capacity?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Peak seasons significantly impact both pricing and space availability. Chinese New Year (February) reduces capacity and increases rates, while European summer months see port congestion and higher demand. Year-end holidays represent peak season with premium rates across all modes. Plan shipments well in advance during these periods.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left font-semibold">
                      What are the VAT and duty implications for German imports?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Germany applies 19% VAT to most imported goods (7% for essential items) plus applicable customs duties based on HS classification. VAT is calculated on the total value including customs duties and transportation costs. Businesses registered for VAT in Germany can reclaim import VAT as input tax, making proper registration essential for regular importers.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left font-semibold">
                      What&apos;s the fastest way to ship from China to Germany?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Air freight express service provides the fastest delivery at 1-3 days for $7.50-$9.00 per kilogram. Standard air freight takes 3-7 days at $3.50-$5.50 per kilogram. Rail freight offers a middle-ground at 14-18 days, while ocean freight requires 20-30 days but provides the most cost-effective solution for large volumes.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-left font-semibold">
                      How do I choose between Hamburg and Bremen ports?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Hamburg offers more frequent services and excellent central Europe connections but can experience summer congestion. Bremen provides competitive alternatives with potentially faster processing times and good connections to northern/western Germany. Consider final destination, seasonal patterns, and vessel schedules when choosing between ports.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-8">
                    <AccordionTrigger className="text-left font-semibold">
                      What are the advantages of rail freight to Germany?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Rail freight offers 14-18 day transit times at competitive rates ($8,000-$9,000 per container), 95% lower CO2 emissions than air freight, fixed departure schedules, and direct connections to German logistics hubs. It provides an excellent balance between ocean freight&apos;s cost efficiency and air freight&apos;s speed.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-9">
                    <AccordionTrigger className="text-left font-semibold">
                      How much are German import duties and VAT?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Import duties vary by product classification (0-17% typical range), while VAT is 19% for most goods (7% for essentials). Total taxes are calculated on CIF value plus duties. For example, a $20,000 shipment with 5% duty results in $4,990 total taxes and duties ($1,000 duty + $3,990 VAT).
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Conclusion */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Conclusion
                </h2>
                <p className="text-muted-foreground mb-4">
                  The China to Germany shipping corridor represents one of the most established and profitable opportunities for Chinese freight forwarding companies seeking European market expansion. With Germany maintaining its position as China&apos;s most important European trading partner, understanding the complexities and requirements of this route provides significant competitive advantages.
                </p>
                <p className="text-muted-foreground mb-4">
                  Success requires mastering the unique characteristics of each transportation mode - from ocean freight&apos;s cost advantages and rail freight&apos;s speed-cost balance to air freight&apos;s reliability for time-sensitive shipments. German customers expect high service standards, accurate documentation, and transparent communication, making operational excellence essential for long-term success.
                </p>
                <p className="text-muted-foreground mb-4">
                  The evolving landscape of China-Germany trade presents both challenges and opportunities. Red Sea disruptions have highlighted the importance of alternative routing options, while the New Silk Road rail network provides increasingly viable alternatives to traditional ocean and air freight. Companies that invest in understanding these dynamics while building strong local partnerships will be best positioned for sustained growth.
                </p>
                <p className="text-muted-foreground">
                  For the most current rates and specialized guidance on China to Germany shipping solutions, consult with experienced freight forwarding professionals who maintain strong networks in both countries and can provide real-time market intelligence and customized service solutions.
                </p>
              </div>
            </div>
          </div>
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
