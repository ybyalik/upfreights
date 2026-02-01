import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'DAP Incoterms (Delivered at Place) | Complete Guide to DAP Terms',
  description: 'Complete guide to DAP (Delivered at Place) Incoterms. Learn seller and buyer responsibilities, risk transfer points, and when to use DAP in international trade.',
  alternates: {
    canonical: '/incoterms/dap',
  },
  openGraph: {
    title: 'DAP Incoterms (Delivered at Place) | UpFreights',
    description: 'Complete guide to DAP Incoterms. Learn seller and buyer responsibilities, cost allocation, and risk transfer.',
  },
};

const sellerResponsibilities = [
  { task: 'Export packaging and documentation', included: true },
  { task: 'Loading at origin', included: true },
  { task: 'Export customs clearance', included: true },
  { task: 'Main carriage freight', included: true },
  { task: 'Transport insurance (recommended)', included: true },
  { task: 'Delivery to named place', included: true },
  { task: 'Bear all transit risks until destination', included: true },
  { task: 'Unloading at destination', included: false },
  { task: 'Import customs clearance', included: false },
  { task: 'Import duties and taxes', included: false },
];

const buyerResponsibilities = [
  { task: 'Unloading at destination', included: true },
  { task: 'Import customs clearance', included: true },
  { task: 'Import duties and taxes', included: true },
  { task: 'Final delivery to premises', included: true },
  { task: 'Obtain import licenses and permits', included: true },
  { task: 'Export clearance', included: false },
  { task: 'Main carriage costs', included: false },
  { task: 'Transit risk during transport', included: false },
];

const costBreakdown = [
  { item: 'Export Clearance', seller: true, buyer: false },
  { item: 'Loading at Origin', seller: true, buyer: false },
  { item: 'Main Carriage Freight', seller: true, buyer: false },
  { item: 'Transport Insurance', seller: true, buyer: false, note: '(if purchased)' },
  { item: 'Delivery to Named Place', seller: true, buyer: false },
  { item: 'Unloading at Destination', seller: false, buyer: true },
  { item: 'Import Customs Clearance', seller: false, buyer: true },
  { item: 'Import Duties & Taxes', seller: false, buyer: true },
  { item: 'Final Delivery to Premises', seller: false, buyer: true },
];

const comparisonData = [
  { aspect: 'Import Clearance', dap: 'Buyer', ddp: 'Seller', cpt: 'Buyer', fca: 'Buyer' },
  { aspect: 'Import Duties/Taxes', dap: 'Buyer', ddp: 'Seller', cpt: 'Buyer', fca: 'Buyer' },
  { aspect: 'Risk Transfer', dap: 'At destination', ddp: 'At destination', cpt: 'First carrier', fca: 'First carrier' },
  { aspect: 'Transport Arrangement', dap: 'Seller', ddp: 'Seller', cpt: 'Seller', fca: 'Buyer' },
  { aspect: 'Unloading Costs', dap: 'Buyer', ddp: 'Buyer', cpt: 'Buyer', fca: 'Buyer' },
];

const advantages = [
  {
    title: 'Control Over Shipping Process',
    description: 'Sellers maintain oversight of goods throughout transportation, selecting reliable carriers and optimizing routing decisions.',
  },
  {
    title: 'Simplified Import Procedures',
    description: 'Sellers avoid complex import procedures and associated costs. Buyers handle customs in their home country using familiar regulations.',
  },
  {
    title: 'Clear Risk Transfer Point',
    description: 'Risk ends at the moment goods arrive ready for unloading, creating a clear cutoff for insurance coverage and damage claims.',
  },
  {
    title: 'Cost Transparency for Buyers',
    description: 'Buyers receive quotes including all transportation expenses to their facility, eliminating unexpected freight charges or surcharges.',
  },
];

const disadvantages = [
  {
    title: 'Communication Gaps',
    description: 'Misunderstandings about exact delivery location, unloading responsibilities, or arrival notifications can delay shipments and increase costs.',
  },
  {
    title: 'Currency Fluctuations',
    description: 'Exchange rate movements between contract signing and delivery can erode profit margins for sellers or increase buyer costs unexpectedly.',
  },
  {
    title: 'Infrastructure Limitations',
    description: 'Poor road conditions, limited handling equipment, or restricted access hours at destination points can increase delivery costs.',
  },
  {
    title: 'Insurance Coverage Gaps',
    description: 'Sellers\' cargo insurance typically expires when goods become available for unloading, while buyers\' coverage might not activate until after unloading.',
  },
];

const faqs = [
  {
    question: 'What does DAP mean in shipping terms?',
    answer: 'DAP stands for "Delivered at Place" and is part of the Incoterms® 2020 rules. Under DAP terms, the seller delivers goods to a buyer-specified location and covers all transportation costs and risks until arrival. The buyer handles unloading, import clearance, and pays import duties. This arrangement provides a balanced distribution of responsibilities between trading partners.',
  },
  {
    question: 'Who pays for shipping under DAP terms?',
    answer: 'The seller pays for all shipping costs from origin to the named destination, including export clearance, freight charges, and transportation. The buyer only pays for unloading at destination, import duties, taxes, and any costs after delivery. This clear cost division helps both parties budget accurately for international transactions.',
  },
  {
    question: 'When does risk transfer from seller to buyer in DAP?',
    answer: 'Risk transfers from seller to buyer when goods arrive at the agreed destination and are ready for unloading. The seller bears all risks during transportation, including damage or loss. Once the shipment reaches the destination point, the buyer assumes responsibility for any risks during unloading and beyond.',
  },
  {
    question: 'What\'s the difference between DAP and DDP?',
    answer: 'The main difference is import clearance responsibility. Under DAP, the buyer handles import clearance and pays duties. With DDP (Delivered Duty Paid), the seller manages import clearance and pays all duties and taxes. DDP places maximum responsibility on the seller, while DAP offers a more balanced approach.',
  },
  {
    question: 'Is insurance required for DAP shipments?',
    answer: 'While not mandatory, insurance is highly recommended for both parties. The seller should insure goods until delivery at destination, while the buyer should consider coverage from the point of delivery onward. Gap-free insurance coverage protects both parties\' financial interests.',
  },
  {
    question: 'What documents are required for DAP shipments?',
    answer: 'Essential documents include commercial invoices, packing lists, bills of lading, export permits, and certificates of origin from the seller. The buyer needs import permits and customs clearance documents. Both parties should maintain delivery receipts to confirm the transfer point.',
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

export default function DAPIncotermsPage() {
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
              <span>DAP</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              DAP Incoterms (Delivered at Place)
            </h1>
            <p className="text-lg text-white/80 mb-6 max-w-3xl">
              DAP offers a balanced approach to risk and cost distribution between buyers and sellers. The seller delivers goods to a named destination while the buyer handles import clearance and duties. This term works across various transportation modes and simplifies logistics planning.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Risk Transfer</span>
                <p className="text-white font-semibold">At Destination</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Transport Mode</span>
                <p className="text-white font-semibold">Any Mode</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Import Duties</span>
                <p className="text-white font-semibold">Buyer Pays</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is DAP Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              What Are DAP Incoterms?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                DAP (Delivered at Place) Incoterms® define a delivery arrangement where the seller delivers goods to a buyer-designated location, ready for unloading. This trade term creates a clear division of responsibilities between parties in international transactions.
              </p>
              <p>
                Under DAP terms, the seller fulfills their obligation when goods arrive at the agreed destination on the arriving means of transport, ready for unloading by the buyer. The seller bears all risks and costs associated with transporting goods to the named place of destination, including export clearance, international freight, and any transit-related expenses.
              </p>
              <p>
                DAP applies to any mode of transport: sea freight, air cargo, road transport, rail, or multimodal combinations. This flexibility makes DAP suitable for containerized shipments, bulk cargo, and consolidated freight across various industries.
              </p>
            </div>

            <div className="mt-8 p-6 bg-orange/10 rounded-xl">
              <h3 className="font-semibold text-foreground mb-3">Key Components of DAP:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-orange flex-shrink-0" />
                  <strong>Named Place:</strong>&nbsp;Exact delivery location specified in contract (e.g., "DAP Chicago Warehouse, USA")
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  <strong>Risk Transfer:</strong>&nbsp;When goods arrive at destination on transport vehicle, ready for unloading
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  <strong>Seller Covers:</strong>&nbsp;Export clearance, main freight, delivery to named place
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  <strong>Buyer Covers:</strong>&nbsp;Unloading, import clearance, duties, and final delivery
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
              Key Responsibilities Under DAP Terms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Seller Responsibilities */}
              <Card className="border-orange/50 bg-orange/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Seller&apos;s Obligations</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    The seller manages the entire transportation chain until goods reach the agreed destination, bearing all transit risks.
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
                    The buyer takes charge once goods arrive at the named destination ready for unloading and handles import formalities.
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

      {/* Cost Breakdown Table */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
              DAP Cost Breakdown
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Understanding who pays for what under DAP terms helps avoid disputes and ensures accurate budgeting.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left font-semibold">Expense Category</th>
                    <th className="px-4 py-4 text-center font-semibold">Seller Pays</th>
                    <th className="px-4 py-4 text-center font-semibold">Buyer Pays</th>
                  </tr>
                </thead>
                <tbody>
                  {costBreakdown.map((item, index) => (
                    <tr
                      key={item.item}
                      className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
                    >
                      <td className="px-4 py-4 font-medium text-foreground">
                        {item.item}
                        {item.note && <span className="text-muted-foreground text-sm ml-1">{item.note}</span>}
                      </td>
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

      {/* Advantages and Disadvantages */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Advantages and Disadvantages of DAP
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

      {/* DAP vs Other Incoterms */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              DAP vs Other Incoterms
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left font-semibold">Aspect</th>
                    <th className="px-4 py-4 text-left font-semibold">DAP</th>
                    <th className="px-4 py-4 text-left font-semibold">DDP</th>
                    <th className="px-4 py-4 text-left font-semibold">CPT</th>
                    <th className="px-4 py-4 text-left font-semibold">FCA</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={row.aspect}
                      className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
                    >
                      <td className="px-4 py-4 font-medium text-foreground">{row.aspect}</td>
                      <td className="px-4 py-4 text-orange font-semibold">{row.dap}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.ddp}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.cpt}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.fca}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">DAP vs DDP</h3>
                  <p className="text-sm text-muted-foreground">
                    Under DAP, the buyer handles import clearance and pays duties. With DDP, the seller manages import clearance and pays all duties and taxes. Choose DAP when you have established import procedures or preferential duty rates.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">DAP vs CPT</h3>
                  <p className="text-sm text-muted-foreground">
                    DAP transfers risk at destination while CPT transfers risk at first carrier. DAP works better for high-value goods where you want the seller to maintain risk during transit.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">DAP vs FCA</h3>
                  <p className="text-sm text-muted-foreground">
                    DAP requires seller to arrange full transportation; FCA limits seller to delivering goods to a carrier. FCA benefits buyers with favorable freight contracts; DAP simplifies logistics.
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

      {/* When to Use DAP */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              When to Use DAP Incoterms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Ideal Scenarios for DAP
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Seller wants control over shipping but not import procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyer has established relationships with customs brokers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyer has preferential duty rates or import exemptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">High-value goods requiring seller risk during transit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Multimodal shipments across various transport types</span>
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
                    <span className="text-muted-foreground">Buyer wants seller to handle all import procedures (use DDP)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyer wants to arrange their own freight (use FCA or EXW)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Seller cannot obtain transport insurance to destination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Destination has poor infrastructure or access limitations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Sea-only shipments where CIF may be more appropriate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Best Practices for DAP Transactions
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-orange" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">Location Precision</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Specify exact delivery addresses with GPS coordinates</li>
                    <li>Define access hours and restrictions</li>
                    <li>Include contact persons for delivery</li>
                    <li>Document unloading facility requirements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-orange" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">Insurance Coverage</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Seller: Insure until delivery at destination</li>
                    <li>Buyer: Coverage from delivery onward</li>
                    <li>Eliminate gaps at transfer point</li>
                    <li>Document cargo condition at handover</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-orange" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">Communication</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Establish notification protocols (72 hrs advance)</li>
                    <li>Create shared tracking dashboards</li>
                    <li>Define escalation procedures</li>
                    <li>Document all agreements in writing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24 bg-secondary/30">
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
        title="Need Help with DAP Shipments?"
        description="Our freight experts can help you navigate DAP terms and manage your international shipments to any destination. Get a quote today."
        primaryAction={{ label: 'Get Quote', href: '/quote' }}
      />
    </>
  );
}
