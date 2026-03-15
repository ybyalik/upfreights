import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, CheckCircle, XCircle, AlertTriangle, ArrowRight, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'FCA Incoterms (Free Carrier) | Complete Guide to Free Carrier Terms',
  description: 'Complete guide to FCA (Free Carrier) Incoterms. Learn seller and buyer responsibilities, advantages, risks, and when to use Free Carrier terms in international trade.',
  alternates: {
    canonical: '/incoterms/fca',
  },
  openGraph: {
    title: 'FCA Incoterms (Free Carrier) | UpFreights',
    description: 'Complete guide to FCA (Free Carrier) Incoterms. Learn seller and buyer responsibilities, advantages, and risks.',
  },
};

const sellerResponsibilities = [
  { task: 'Packaging and labeling goods for transport', included: true },
  { task: 'Loading goods at seller\'s premises (if applicable)', included: true },
  { task: 'Export customs clearance and documentation', included: true },
  { task: 'Delivery to named place/carrier', included: true },
  { task: 'Providing proof of delivery', included: true },
  { task: 'Main carriage arrangement', included: false },
  { task: 'Insurance during main carriage', included: false },
  { task: 'Import customs clearance', included: false },
  { task: 'Delivery to final destination', included: false },
];

const buyerResponsibilities = [
  { task: 'Packaging and labeling', included: false },
  { task: 'Export clearance', included: false },
  { task: 'Arranging main carriage', included: true },
  { task: 'Paying freight costs', included: true },
  { task: 'Insurance during transport', included: true },
  { task: 'Import customs clearance', included: true },
  { task: 'Import duties and taxes', included: true },
  { task: 'Unloading at destination', included: true },
  { task: 'Delivery to final destination', included: true },
];

const costBreakdown = [
  { item: 'Packaging & Labeling', seller: true, buyer: false },
  { item: 'Loading at Origin', seller: true, buyer: false },
  { item: 'Export Customs Clearance', seller: true, buyer: false },
  { item: 'Delivery to Carrier/Named Place', seller: true, buyer: false },
  { item: 'Main Carriage (Freight)', seller: false, buyer: true },
  { item: 'Cargo Insurance', seller: false, buyer: true },
  { item: 'Import Customs Clearance', seller: false, buyer: true },
  { item: 'Import Duties & Taxes', seller: false, buyer: true },
  { item: 'Delivery to Final Destination', seller: false, buyer: true },
];

const advantages = [
  {
    title: 'Flexibility in Transport Mode',
    description: 'FCA can be used with any mode of transport—sea, air, road, rail, or multimodal—making it highly versatile for various shipping needs.',
  },
  {
    title: 'Clear Risk Transfer Point',
    description: 'The risk transfers at a clearly defined point (delivery to carrier), reducing disputes about when responsibility changes hands.',
  },
  {
    title: 'Seller Handles Export Formalities',
    description: 'The seller manages export customs clearance, which is typically easier for them as the local party familiar with their country\'s regulations.',
  },
  {
    title: 'Buyer Controls Main Carriage',
    description: 'Buyers can negotiate their own freight rates and choose carriers, potentially achieving cost savings through preferred logistics partners.',
  },
];

const disadvantages = [
  {
    title: 'Buyer Bears Most Transport Risk',
    description: 'Once goods are delivered to the carrier, all transit risks transfer to the buyer, requiring comprehensive insurance coverage.',
  },
  {
    title: 'Coordination Complexity',
    description: 'The buyer must coordinate with carriers in the seller\'s country, which can be challenging without local knowledge or contacts.',
  },
  {
    title: 'Potential for Miscommunication',
    description: 'Unclear specification of the "named place" can lead to disputes about delivery location and associated costs.',
  },
  {
    title: 'Insurance Gaps Possible',
    description: 'If not carefully managed, there can be coverage gaps between the seller\'s and buyer\'s insurance policies at the transfer point.',
  },
];

const faqs = [
  {
    question: 'What does FCA mean in shipping?',
    answer: 'FCA (Free Carrier) is an Incoterm where the seller delivers goods, cleared for export, to a carrier or another person nominated by the buyer at the seller\'s premises or another named place. Risk transfers to the buyer when goods are delivered to the carrier. It\'s one of the most versatile Incoterms as it works with any transport mode.',
  },
  {
    question: 'What is the difference between FCA and FOB?',
    answer: 'The main differences are: (1) FCA works with any transport mode while FOB is only for sea/inland waterway; (2) Under FCA, risk transfers when goods are delivered to the carrier at the named place, while FOB transfers risk when goods pass the ship\'s rail; (3) FCA is more flexible for modern containerized shipping, while FOB is traditional for bulk sea cargo.',
  },
  {
    question: 'Who pays for freight under FCA terms?',
    answer: 'Under FCA terms, the buyer pays for the main carriage (freight) from the named place to the destination. The seller only pays for transportation to the named place where goods are handed over to the carrier. This includes any local delivery costs to reach the agreed handover point.',
  },
  {
    question: 'When should I use FCA instead of EXW?',
    answer: 'Use FCA instead of EXW when: (1) You want the seller to handle export customs clearance; (2) You prefer a clearer, more balanced risk distribution; (3) The seller has better access to loading facilities; (4) You\'re dealing with containerized cargo that needs to be delivered to a terminal. FCA is generally recommended over EXW by the ICC for most international transactions.',
  },
  {
    question: 'Does the seller need to load goods under FCA?',
    answer: 'It depends on the delivery location. If delivery is at the seller\'s premises, the seller is responsible for loading. If delivery is at any other place (like a terminal or carrier\'s facility), the seller delivers goods on their arriving vehicle, ready for unloading, but is not responsible for unloading.',
  },
  {
    question: 'Is insurance mandatory under FCA?',
    answer: 'No, insurance is not mandatory under FCA terms. However, since risk transfers to the buyer when goods are delivered to the carrier, it\'s strongly recommended that buyers arrange cargo insurance from that point. The seller has no obligation to provide insurance coverage under FCA.',
  },
];

// Generate FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FCAIncotermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm mb-4">
              <Link href="/incoterms" className="hover:text-orange transition-colors">
                Incoterms 2020
              </Link>
              <span>/</span>
              <span>FCA</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              FCA Incoterms (Free Carrier)
            </h1>
            <p className="text-lg text-white/80 mb-6 max-w-3xl">
              FCA (Free Carrier) is one of the most versatile and commonly used Incoterms in international trade. Under FCA, the seller delivers goods, cleared for export, to a carrier nominated by the buyer at a named place. It offers a balanced distribution of responsibilities between buyer and seller.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Risk Transfer</span>
                <p className="text-white font-semibold">At Named Place</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Transport Mode</span>
                <p className="text-white font-semibold">Any Mode</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Export Clearance</span>
                <p className="text-white font-semibold">Seller</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is FCA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              What Does FCA Mean in Shipping?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                FCA (Free Carrier) is an international commercial term (Incoterm) published by the International Chamber of Commerce (ICC). It defines the point at which the seller fulfills their delivery obligation by handing over goods, cleared for export, to a carrier or another person nominated by the buyer at the seller&apos;s premises or another named place.
              </p>
              <p>
                Under FCA terms, the seller bears all costs and risks up to and including delivery to the named place. Once the goods are delivered to the carrier, the risk transfers to the buyer, who then becomes responsible for the main carriage, insurance, and import formalities.
              </p>
              <p>
                FCA is particularly popular because it works with any mode of transport and provides clearer risk allocation than EXW while still giving buyers control over the main carriage arrangements.
              </p>
            </div>

            <div className="mt-8 p-6 bg-orange/10 rounded-xl">
              <h3 className="font-semibold text-foreground mb-3">Key Features of FCA:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Works with any mode of transport (sea, air, road, rail, multimodal)
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Seller handles export customs clearance
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Risk transfers when goods delivered to carrier at named place
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Buyer arranges and pays for main carriage
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  More balanced than EXW, more flexible than FOB
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Key Responsibilities Under FCA Terms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Seller Responsibilities */}
              <Card className="border-orange/50 bg-orange/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Seller&apos;s Obligations</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    The seller is responsible for preparing goods, export clearance, and delivering to the named place or carrier.
                  </p>
                  <div className="space-y-3">
                    {sellerResponsibilities.map((item) => (
                      <div key={item.task} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                        <span className="text-foreground text-sm">{item.task}</span>
                        {item.included ? (
                          <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-muted-foreground/40 flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Buyer Responsibilities */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Buyer&apos;s Obligations</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    The buyer handles main carriage, insurance, import formalities, and final delivery.
                  </p>
                  <div className="space-y-3">
                    {buyerResponsibilities.map((item) => (
                      <div key={item.task} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                        <span className="text-foreground text-sm">{item.task}</span>
                        {item.included ? (
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-muted-foreground/40 flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages and Disadvantages */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Advantages and Disadvantages of FCA
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Advantages */}
              <div>
                <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6" />
                  Advantages
                </h3>
                <div className="space-y-4">
                  {advantages.map((item, index) => (
                    <Card key={index} className="border-green-200 bg-green-50/50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Disadvantages */}
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                  <XCircle className="h-6 w-6" />
                  Disadvantages
                </h3>
                <div className="space-y-4">
                  {disadvantages.map((item, index) => (
                    <Card key={index} className="border-red-200 bg-red-50/50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown Table */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
              FCA Cost Breakdown
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Understanding who pays for what under FCA terms helps avoid disputes and budget surprises.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left font-semibold">Cost Item</th>
                    <th className="px-4 py-4 text-center font-semibold">Seller</th>
                    <th className="px-4 py-4 text-center font-semibold">Buyer</th>
                  </tr>
                </thead>
                <tbody>
                  {costBreakdown.map((item, index) => (
                    <tr
                      key={item.item}
                      className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
                    >
                      <td className="px-4 py-4 font-medium text-foreground">{item.item}</td>
                      <td className="px-4 py-4 text-center">
                        {item.seller ? (
                          <CheckCircle className="h-5 w-5 text-orange mx-auto" />
                        ) : (
                          <XCircle className="h-5 w-5 text-muted-foreground/30 mx-auto" />
                        )}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {item.buyer ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="h-5 w-5 text-muted-foreground/30 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FCA vs FOB vs EXW */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              FCA vs FOB vs EXW Comparison
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left font-semibold">Aspect</th>
                    <th className="px-4 py-4 text-left font-semibold">FCA</th>
                    <th className="px-4 py-4 text-left font-semibold">FOB</th>
                    <th className="px-4 py-4 text-left font-semibold">EXW</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-card">
                    <td className="px-4 py-4 font-medium text-foreground">Transport Mode</td>
                    <td className="px-4 py-4 text-muted-foreground">Any mode</td>
                    <td className="px-4 py-4 text-muted-foreground">Sea/inland waterway only</td>
                    <td className="px-4 py-4 text-muted-foreground">Any mode</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-secondary/20">
                    <td className="px-4 py-4 font-medium text-foreground">Export Clearance</td>
                    <td className="px-4 py-4 text-orange font-semibold">Seller</td>
                    <td className="px-4 py-4 text-muted-foreground">Seller</td>
                    <td className="px-4 py-4 text-muted-foreground">Buyer</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-card">
                    <td className="px-4 py-4 font-medium text-foreground">Risk Transfer Point</td>
                    <td className="px-4 py-4 text-muted-foreground">Delivery to carrier</td>
                    <td className="px-4 py-4 text-muted-foreground">On board vessel</td>
                    <td className="px-4 py-4 text-muted-foreground">Seller&apos;s premises</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-secondary/20">
                    <td className="px-4 py-4 font-medium text-foreground">Loading Responsibility</td>
                    <td className="px-4 py-4 text-muted-foreground">Seller (at own premises)</td>
                    <td className="px-4 py-4 text-muted-foreground">Seller</td>
                    <td className="px-4 py-4 text-muted-foreground">Buyer</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-card">
                    <td className="px-4 py-4 font-medium text-foreground">Best For</td>
                    <td className="px-4 py-4 text-muted-foreground">Multimodal, containerized cargo</td>
                    <td className="px-4 py-4 text-muted-foreground">Bulk sea cargo</td>
                    <td className="px-4 py-4 text-muted-foreground">Experienced buyers with logistics network</td>
                  </tr>
                  <tr className="bg-secondary/20">
                    <td className="px-4 py-4 font-medium text-foreground">ICC Recommendation</td>
                    <td className="px-4 py-4 text-green-600 font-semibold">Recommended for most trades</td>
                    <td className="px-4 py-4 text-muted-foreground">Sea freight only</td>
                    <td className="px-4 py-4 text-muted-foreground">Limited use cases</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">FCA vs FOB: Key Difference</h3>
                  <p className="text-sm text-muted-foreground">
                    While both involve seller export clearance, FCA is more flexible as it works with any transport mode and is better suited for containerized cargo. FOB is specifically for sea transport where goods are loaded directly onto a vessel. FCA is increasingly preferred for container shipping as it provides a clearer handover point.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">FCA vs EXW: Key Difference</h3>
                  <p className="text-sm text-muted-foreground">
                    FCA provides significantly more seller involvement than EXW. Under FCA, the seller handles export clearance and delivers to the carrier, whereas EXW places all responsibilities on the buyer from the seller&apos;s premises. FCA is generally recommended by the ICC over EXW for international trade.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/incoterms"
                className="inline-flex items-center text-orange hover:text-orange-dark font-medium transition-colors"
              >
                View All Incoterms
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use FCA */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              When to Use FCA in International Trade
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Ideal Scenarios for FCA
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Containerized cargo shipped via multiple transport modes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyer has preferred freight forwarders or carriers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Delivery to inland terminals or freight stations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Air freight shipments requiring terminal delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">When seller should handle export but not freight</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Consider Alternatives When
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyer lacks logistics experience in seller&apos;s country</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Traditional bulk cargo shipped directly by sea (use FOB)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyer wants seller to arrange freight (use CPT or CIP)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyer needs full door-to-door service (use DDP or DAP)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">High-value goods needing seller-arranged insurance (use CIP)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-background rounded-lg border border-border/50 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-orange">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Need Help with FCA Shipments?"
        description="Our freight experts can help you navigate FCA terms and manage your international shipments from China. Get a quote today."
        primaryAction={{ label: 'Get Quote', href: '/quote' }}
      />
    </>
  );
}
