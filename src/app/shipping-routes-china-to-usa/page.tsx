import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowLeft, Ship, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Shipping Routes From China to USA | Complete Guide to Ports, Transit Times & Costs',
  description: 'Complete guide to shipping routes from China to USA. Learn about Pacific, Panama, and Suez routes, major ports, transit times, costs, and best practices for importing goods.',
  alternates: {
    canonical: '/shipping-routes-china-to-usa',
  },
  openGraph: {
    title: 'Shipping Routes From China to USA | Complete Guide | UpFreights',
    description: 'Complete guide to shipping routes from China to USA covering Pacific, Panama, and Suez routes. Learn about major ports, transit times, costs, and best practices.',
    type: 'article',
  },
};

export default function ShippingRoutesChinaToUSAPage() {
  return (
    <>
      {/* Article Header */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <Badge className="bg-white/10 text-white border-white/20 mb-4">
              Shipping Guide
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Shipping Routes From China to USA
            </h1>

            <p className="text-lg text-white/80 mb-8">
              Complete guide to shipping routes from China to USA covering Pacific, Panama, and Suez routes. Learn about major ports, transit times, costs, and best practices for importing goods from China to the United States.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-white/70">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <Ship className="h-4 w-4" />
                <span>Sea & Air Freight</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-orange prose-a:no-underline hover:prose-a:underline">

              <p className="mb-4 text-muted-foreground">
                Shipping routes from China to the USA connect the world's largest manufacturing hub with one of its biggest consumer markets. China contributes 31.63% share of the global manufacturing, and the USA is the world's largest consumer market, so these routes are a huge part of global trade.
              </p>

              <p className="mb-4 text-muted-foreground">
                These routes traverse key shipping lanes, including the Pacific Ocean, and involve various transit times and costs depending on the method and destination.
              </p>

              <p className="mb-4 text-muted-foreground">
                If you're ready to ship goods from China to the USA, our experts explore the primary shipping routes, highlight major ports, and break down the factors affecting shipping costs in this article.
              </p>

              <h2 id="shipping-route-types" className="text-2xl font-bold mt-8 mb-4 scroll-mt-28">Shipping Route Types and Comparison</h2>

              <h3 id="sea-routes" className="text-xl font-semibold mt-6 mb-3 scroll-mt-28">Sea Routes</h3>

              <p className="mb-4 text-muted-foreground">
                Sea freight is the most popular choice for transporting large volumes of goods, offering significant cost savings for bulk shipments. There are several primary sea routes used for shipping between China and the U.S.:
              </p>

              <ul className="list-disc list-inside mb-4 space-y-2">
                <li className="text-muted-foreground"><strong>Pacific Route:</strong> The most widely used route, connecting major Chinese ports like Shanghai and Shenzhen to West Coast U.S. ports such as Los Angeles and Long Beach.</li>
                <li className="text-muted-foreground"><strong>Panama Route:</strong> This route uses the Panama Canal to connect East Asia with U.S. East Coast ports like New York and Savannah.</li>
                <li className="text-muted-foreground"><strong>Suez Route:</strong> A longer route that passes through the Suez Canal, primarily used for specialized shipments to inland U.S. destinations.</li>
              </ul>

              <h3 id="comparison-sea-routes" className="text-xl font-semibold mt-6 mb-3 scroll-mt-28">Comparison of Sea Routes</h3>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-foreground border-b-2 border-border">Feature</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground border-b-2 border-border">Pacific Route</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground border-b-2 border-border">Panama Route</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground border-b-2 border-border">Suez Route</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-secondary/30">
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50 font-medium text-foreground">Transit Time</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">14–20 days</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">25–30 days</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">30–40 days</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50 font-medium text-foreground">Cost</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Lower due to high volume</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Moderate</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Higher due to distance</td>
                    </tr>
                    <tr className="bg-secondary/30">
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50 font-medium text-foreground">Reliability</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">High with established lines</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Moderate</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Variable</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 id="air-routes" className="text-xl font-semibold mt-6 mb-3 scroll-mt-28">Air Routes</h3>

              <p className="mb-4 text-muted-foreground">
                Air freight provides a faster alternative to sea shipping, ideal for high-value or time-sensitive goods. The two main air freight options are:
              </p>

              <ul className="list-disc list-inside mb-4 space-y-2">
                <li className="text-muted-foreground"><strong>Direct Flights:</strong> Connecting major Chinese airports (e.g., Shanghai Pudong) with U.S. hubs like Los Angeles and New York.</li>
                <li className="text-muted-foreground"><strong>Hub-and-Spoke:</strong> Involves routing through central hubs for optimized efficiency and cost management.</li>
              </ul>

              <h3 id="air-vs-sea" className="text-xl font-semibold mt-6 mb-3 scroll-mt-28">Comparison: Air Freight vs. Sea Freight</h3>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-foreground border-b-2 border-border">Feature</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground border-b-2 border-border">Air Freight</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground border-b-2 border-border">Sea Freight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-secondary/30">
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50 font-medium text-foreground">Transit Time</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">3–7 days</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">14–40 days</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50 font-medium text-foreground">Cost</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Significantly higher</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">More economical per unit</td>
                    </tr>
                    <tr className="bg-secondary/30">
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50 font-medium text-foreground">Capacity</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Limited</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">High</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="major-ports" className="text-2xl font-bold mt-8 mb-4 scroll-mt-28">What are the Major Ports and their Transit Times?</h2>

              <p className="mb-4 text-muted-foreground">
                Shipping times vary depending on the ports involved. Below is an overview of key Chinese and U.S. ports and their associated transit times.
              </p>

              <h3 id="ports-china" className="text-xl font-semibold mt-6 mb-3 scroll-mt-28">Ports in China</h3>

              <p className="mb-4 text-muted-foreground">
                <strong>Shanghai:</strong> As the world's busiest port, Shanghai handles a vast volume of container and bulk cargo, serving as a primary export gateway for manufactured goods and electronics.
              </p>

              <p className="mb-4 text-muted-foreground">
                <strong>Shenzhen:</strong> Located near Hong Kong, Shenzhen is one of China's largest ports, specializing in high-tech goods and manufacturing exports.
              </p>

              <p className="mb-4 text-muted-foreground">
                <strong>Ningbo-Zhoushan:</strong> Known for its deep-water capacity, Ningbo-Zhoushan is strategically located to handle heavy container traffic and bulk cargo.
              </p>

              <p className="mb-4 text-muted-foreground">
                <strong>Guangzhou:</strong> Serving southern China, Guangzhou handles extensive shipments of consumer goods, electronics, and industrial products.
              </p>

              <p className="mb-4 text-muted-foreground">
                <strong>Qingdao:</strong> Located on the Yellow Sea, Qingdao is a critical port for exports from northern China, particularly for electronics, textiles, and machinery.
              </p>

              <h3 id="ports-usa" className="text-xl font-semibold mt-6 mb-3 scroll-mt-28">Ports in USA</h3>

              <h4 className="text-lg font-semibold mt-4 mb-2">West Coast:</h4>

              <ul className="list-disc list-inside mb-4 space-y-2">
                <li className="text-muted-foreground"><strong>Los Angeles:</strong> The busiest port in the U.S., handling a significant volume of imports from Asia.</li>
                <li className="text-muted-foreground"><strong>Long Beach:</strong> Adjacent to Los Angeles, this port is a major gateway for goods entering the U.S. West Coast.</li>
                <li className="text-muted-foreground"><strong>Oakland:</strong> Primarily serves Northern California, facilitating smooth import and export services.</li>
                <li className="text-muted-foreground"><strong>Seattle:</strong> Positioned close to Asia-Pacific trade routes with robust container facilities.</li>
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">East Coast:</h4>

              <ul className="list-disc list-inside mb-4 space-y-2">
                <li className="text-muted-foreground"><strong>New York:</strong> The busiest port on the U.S. East Coast, connecting international shipments to vast inland distribution channels.</li>
                <li className="text-muted-foreground"><strong>Savannah:</strong> Known for rapid processing and expanding facilities, one of the fastest-growing U.S. ports.</li>
                <li className="text-muted-foreground"><strong>Norfolk:</strong> A key East Coast hub with deep-water harbor enabling large vessels.</li>
                <li className="text-muted-foreground"><strong>Charleston:</strong> A critical gateway for Southeast U.S. imports.</li>
              </ul>

              <h2 id="transit-times" className="text-2xl font-bold mt-8 mb-4 scroll-mt-28">Estimated Transit Times</h2>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-foreground border-b-2 border-border">Route</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground border-b-2 border-border">Estimated Transit Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-secondary/30">
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Shanghai to Los Angeles</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">14–16 days</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Northern China to Seattle</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">16–21 days</td>
                    </tr>
                    <tr className="bg-secondary/30">
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Shenzhen to New York</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">25–30 days</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Ningbo to Savannah</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">22–28 days</td>
                    </tr>
                    <tr className="bg-secondary/30">
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Shenzhen to Miami</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">30–35 days</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Hong Kong to San Francisco</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">16–21 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="shipping-costs" className="text-2xl font-bold mt-8 mb-4 scroll-mt-28">How much does Container Shipping from China to USA Cost?</h2>

              <p className="mb-4 text-muted-foreground">
                The cost of shipping a container from China to the USA depends on multiple factors, including the type of container you're sending, its size and weight, the type of cargo you're shipping, and any extra fees incurred.
              </p>

              <h3 id="shipping-rates" className="text-xl font-semibold mt-6 mb-3 scroll-mt-28">Factors Influencing Shipping Rates</h3>

              <p className="mb-4 text-muted-foreground">
                <strong>Type of Freight Shipping:</strong>
              </p>

              <ul className="list-disc list-inside mb-4 space-y-2">
                <li className="text-muted-foreground"><strong>Sea FCL (Full Container Load):</strong> You get a full container to yourself which you can fill to the brim, but this costs more.</li>
                <li className="text-muted-foreground"><strong>Sea LCL (Less than Container Load):</strong> You'll share container space which saves costs, but there may be higher handling fees and longer transit time.</li>
              </ul>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-foreground border-b-2 border-border">Type of Shipping</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground border-b-2 border-border">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-secondary/30">
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Sea LCL (Less than Container Load)</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">$20 to $50 per cubic meter</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Sea FCL (20-foot container)</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">$1,400 to $3,000</td>
                    </tr>
                    <tr className="bg-secondary/30">
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Sea FCL (40-foot container)</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">$1,700 to $4,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="shipping-companies" className="text-2xl font-bold mt-8 mb-4 scroll-mt-28">What Shipping Companies Operate Between China and the USA?</h2>

              <p className="mb-4 text-muted-foreground">
                A variety of shipping companies manage shipping routes from China to the USA, each offering different services tailored to business needs. Leading shipping lines from China to the US are known for their reliability and wide range of container shipping options.
              </p>

              <h3 id="top-shipping-lines" className="text-xl font-semibold mt-6 mb-3 scroll-mt-28">Top Shipping Lines on China to US Shipments</h3>

              <ul className="list-disc list-inside mb-4 space-y-2">
                <li className="text-muted-foreground"><strong>Maersk Line:</strong> One of the largest container shipping companies globally.</li>
                <li className="text-muted-foreground"><strong>COSCO Shipping:</strong> A state-owned Chinese shipping giant.</li>
                <li className="text-muted-foreground"><strong>FedEx and UPS:</strong> Leaders in air freight and intermodal logistics.</li>
              </ul>

              <h2 id="shipping-alliances" className="text-2xl font-bold mt-8 mb-4 scroll-mt-28">What are the Main China/USA Shipping Alliances?</h2>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-foreground border-b-2 border-border">Shipping Alliance</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground border-b-2 border-border">Member Companies</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground border-b-2 border-border">Key Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-secondary/30">
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50 font-medium text-foreground">Ocean Alliance</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">COSCO, CMA CGM, Evergreen, OOCL</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Covers Asia to USA routes extensively</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50 font-medium text-foreground">2M Alliance</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Maersk, MSC</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">World's largest capacity alliance</td>
                    </tr>
                    <tr className="bg-secondary/30">
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50 font-medium text-foreground">THE Alliance</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Hapag-Lloyd, ONE, Yang Ming, HMM</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border/50">Strong trans-Pacific presence</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="best-practices" className="text-2xl font-bold mt-8 mb-4 scroll-mt-28">Best Practices for Shipping Goods from China</h2>

              <p className="mb-4 text-muted-foreground">
                To ensure seamless shipping from China to the USA, businesses can follow these best practices:
              </p>

              <ol className="list-decimal list-inside mb-4 space-y-2">
                <li className="text-muted-foreground"><strong>Stay Informed on Trade Policies:</strong> Regularly review and stay updated on both Chinese and US trade regulations.</li>
                <li className="text-muted-foreground"><strong>Maintain Accurate Documentation:</strong> Ensure all shipping documents are accurate and complete.</li>
                <li className="text-muted-foreground"><strong>Partner with Trusted Shipping Providers:</strong> Work with experienced logistics companies that specialize in China to USA shipping routes.</li>
                <li className="text-muted-foreground"><strong>Use a Freight Forwarder:</strong> Freight forwarders can help streamline the shipping process.</li>
                <li className="text-muted-foreground"><strong>Monitor Shipping Schedules and Weather:</strong> Keep an eye on forecasts and port schedules.</li>
                <li className="text-muted-foreground"><strong>Optimize Packaging:</strong> Use durable and appropriate packaging to prevent damage.</li>
                <li className="text-muted-foreground"><strong>Leverage Shipping Insurance:</strong> Protect your cargo from potential loss or damage.</li>
                <li className="text-muted-foreground"><strong>Plan for Peak Seasons:</strong> Book shipments well in advance during high-traffic periods.</li>
              </ol>

              <h2 id="faq" className="text-2xl font-bold mt-8 mb-4 scroll-mt-28">Frequently Asked Questions</h2>

              <h3 id="faq-documents" className="text-xl font-semibold mt-6 mb-3 scroll-mt-28">What Documents are Required For Shipping From China To The USA?</h3>

              <p className="mb-4 text-muted-foreground">Required documents include:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li className="text-muted-foreground">Bill of Lading</li>
                <li className="text-muted-foreground">Commercial Invoice</li>
                <li className="text-muted-foreground">Packing List</li>
                <li className="text-muted-foreground">Customs Entry Summary (CBP Form 3461)</li>
              </ul>

              <h3 id="faq-tracking" className="text-xl font-semibold mt-6 mb-3 scroll-mt-28">How can I track my container during transit?</h3>

              <p className="mb-4 text-muted-foreground">
                Most sea freight carriers provide tracking systems that allow real-time updates on the location of the ship carrying your cargo, including estimated arrival times and port updates.
              </p>

              <h3 id="faq-hazardous" className="text-xl font-semibold mt-6 mb-3 scroll-mt-28">Can I ship hazardous materials from China to the United States?</h3>

              <p className="mb-4 text-muted-foreground">
                Yes, hazardous materials can be shipped from China to the USA. Compliance with the International Maritime Dangerous Goods (IMDG) Code and other regulations is required. Goods must be properly classified, packaged, labeled, and documented. Contact us for more information and assistance with hazardous cargo shipping.
              </p>

            </div>

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-border">
              <Button asChild variant="outline">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/sea-freight" className="block group">
                <Card className="h-full border-border/50 hover:border-orange/50 hover:shadow-md transition-all">
                  <CardContent className="p-6 text-center">
                    <Ship className="h-8 w-8 text-orange mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground group-hover:text-orange transition-colors">
                      Sea Freight
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      FCL & LCL shipping services
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/door-to-door" className="block group">
                <Card className="h-full border-border/50 hover:border-orange/50 hover:shadow-md transition-all">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-8 w-8 text-orange mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground group-hover:text-orange transition-colors">
                      Door to Door
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Complete end-to-end logistics
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/shipping-china-to-united-states" className="block group">
                <Card className="h-full border-border/50 hover:border-orange/50 hover:shadow-md transition-all">
                  <CardContent className="p-6 text-center">
                    <span className="text-2xl mb-3 block">🇺🇸</span>
                    <h3 className="font-semibold text-foreground group-hover:text-orange transition-colors">
                      China to USA
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Dedicated USA shipping
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Ready to Ship from China to USA?"
        description="Get expert logistics support for your international shipments. Request a free quote today."
      />
    </>
  );
}
