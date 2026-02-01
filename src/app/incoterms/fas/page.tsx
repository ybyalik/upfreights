import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, Ship, Anchor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'FAS Incoterms (Free Alongside Ship) | Complete Guide to FAS Terms',
  description: 'Complete guide to FAS (Free Alongside Ship) Incoterms. Learn seller and buyer responsibilities, cost distribution, risk transfer, and when to use FAS for maritime shipping.',
  alternates: {
    canonical: '/incoterms/fas',
  },
  openGraph: {
    title: 'FAS Incoterms (Free Alongside Ship) | UpFreights',
    description: 'Complete guide to FAS Incoterms. Seller delivers goods alongside the vessel at named port of shipment.',
  },
};

const sellerResponsibilities = [
  { task: 'Deliver goods alongside the vessel at named port', included: true },
  { task: 'Export packaging and labeling', included: true },
  { task: 'Export customs clearance and documentation', included: true },
  { task: 'Transportation to port of shipment', included: true },
  { task: 'Port handling up to the ship\'s side', included: true },
  { task: 'Loading goods onto vessel', included: false },
  { task: 'Ocean freight charges', included: false },
  { task: 'Marine insurance', included: false },
];

const buyerResponsibilities = [
  { task: 'Nominate the vessel', included: true },
  { task: 'Loading goods onto vessel (stevedoring)', included: true },
  { task: 'Ocean freight charges', included: true },
  { task: 'Marine insurance during transit', included: true },
  { task: 'Import customs clearance', included: true },
  { task: 'Destination port charges', included: true },
  { task: 'Inland transport at destination', included: true },
  { task: 'Export clearance', included: false },
];

const costBreakdown = [
  { item: 'Product Cost', seller: true, buyer: false },
  { item: 'Export Packaging', seller: true, buyer: false },
  { item: 'Inland Transport to Port', seller: true, buyer: false },
  { item: 'Export Clearance & Documentation', seller: true, buyer: false },
  { item: 'Port Handling (to quayside)', seller: true, buyer: false },
  { item: 'Loading onto Vessel', seller: false, buyer: true },
  { item: 'Ocean Freight', seller: false, buyer: true },
  { item: 'Marine Insurance', seller: false, buyer: true },
  { item: 'Destination Port Charges', seller: false, buyer: true },
  { item: 'Import Clearance & Duties', seller: false, buyer: true },
  { item: 'Delivery to Final Destination', seller: false, buyer: true },
];

const comparisonData = [
  { aspect: 'Risk Transfer Point', fas: 'Alongside vessel', fob: 'On board vessel', cfr: 'On board vessel', cif: 'On board vessel' },
  { aspect: 'Loading Costs', fas: 'Buyer', fob: 'Seller', cfr: 'Seller', cif: 'Seller' },
  { aspect: 'Ocean Freight', fas: 'Buyer', fob: 'Buyer', cfr: 'Seller', cif: 'Seller' },
  { aspect: 'Marine Insurance', fas: 'Buyer', fob: 'Buyer', cfr: 'Buyer', cif: 'Seller' },
  { aspect: 'Export Clearance', fas: 'Seller', fob: 'Seller', cfr: 'Seller', cif: 'Seller' },
  { aspect: 'Transport Mode', fas: 'Sea/Waterway', fob: 'Sea/Waterway', cfr: 'Sea/Waterway', cif: 'Sea/Waterway' },
];

const advantages = [
  {
    title: 'Buyer Controls Loading Operations',
    description: 'Buyers with established relationships with stevedoring companies can manage loading directly, often securing better rates and timing.',
  },
  {
    title: 'Ideal for Bulk Commodities',
    description: 'FAS works exceptionally well for coal, grain, minerals, and other bulk cargo where buyers have specialized loading expertise.',
  },
  {
    title: 'Lower Purchase Price',
    description: 'Sellers exclude loading costs from quotations, potentially resulting in lower initial purchase prices compared to FOB terms.',
  },
  {
    title: 'Charter Party Alignment',
    description: 'When buyers charter entire vessels, FAS terms align perfectly with their control over loading operations and vessel scheduling.',
  },
];

const disadvantages = [
  {
    title: 'Buyer Assumes Early Risk',
    description: 'Risk transfers when goods are placed alongside the vessel—before loading begins. Buyers bear loading risks including crane accidents and drops.',
  },
  {
    title: 'Complex Port Coordination',
    description: 'Buyers must coordinate directly with stevedores and port authorities for loading operations, scheduling, and managing labor crews.',
  },
  {
    title: 'Limited Transport Mode',
    description: 'FAS applies only to sea and inland waterway transport, limiting flexibility for multimodal shipments or air freight alternatives.',
  },
  {
    title: 'Timing Dependencies',
    description: 'Buyers must ensure vessel arrives when goods are ready at quayside. Delays in vessel arrival can result in storage fees and cargo exposure.',
  },
];

const commonChallenges = [
  {
    title: 'Documentation Errors',
    description: 'Missing export licenses, incorrect commercial invoices, and incomplete packing lists cause 65% of FAS shipment delays. Create master checklists and submit documents 72 hours before vessel arrival.',
  },
  {
    title: 'Timing and Coordination Issues',
    description: 'Late arrivals cost $500-$2,000 per hour in demurrage charges. Confirm vessel berthing 48 hours in advance and build buffer time into delivery schedules.',
  },
  {
    title: 'Risk Transfer Disputes',
    description: 'Disagreements about the exact moment of risk transfer generate 30% of FAS-related insurance claims. Document delivery with timestamped photographs and obtain signed receipts from port authorities.',
  },
  {
    title: 'Port Infrastructure Limitations',
    description: 'Not all ports have adequate facilities for FAS operations. Verify crane capacity, quayside depth, and storage areas before committing to FAS terms at a specific port.',
  },
  {
    title: 'Cargo Damage Prevention',
    description: 'Goods placed alongside vessels face weather exposure, handling damage, and theft. Use weather-resistant packaging and arrange security patrols during quayside storage.',
  },
];

const faqs = [
  {
    question: 'What does FAS mean in shipping terms?',
    answer: 'FAS stands for Free Alongside Ship, an Incoterm where the seller delivers goods alongside a vessel at a designated port. The seller handles export clearance and bears all costs until the goods are placed next to the ship. Once delivered alongside the vessel, the buyer assumes all risks and costs, including loading onto the ship and subsequent transportation.',
  },
  {
    question: 'Who pays for loading under FAS terms?',
    answer: 'Under FAS terms, the buyer pays for loading the goods onto the vessel. The seller\'s responsibility ends when goods are delivered alongside the ship at the named port. All costs from that point forward, including crane charges, stevedoring fees, and stowage, are the buyer\'s responsibility.',
  },
  {
    question: 'What\'s the difference between FAS and FOB?',
    answer: 'The main difference is the point of risk transfer and loading responsibility. Under FAS, risk passes when goods are placed alongside the vessel, while under FOB, risk transfers when goods are loaded on board. With FAS, buyers handle and pay for loading; with FOB, sellers manage loading costs and responsibilities.',
  },
  {
    question: 'When should I use FAS Incoterms?',
    answer: 'Use FAS when dealing with bulk commodities, heavy machinery, or oversized cargo that requires special loading equipment. It\'s ideal when buyers have better loading arrangements at the port, operate chartered vessels, or want more control over the loading process.',
  },
  {
    question: 'Who handles export customs clearance in FAS?',
    answer: 'The seller handles export customs clearance under FAS terms. They must obtain all necessary export licenses, pay export duties, and complete customs formalities before delivering goods alongside the vessel. This is a key seller responsibility under FAS.',
  },
  {
    question: 'Can FAS be used for containerized cargo?',
    answer: 'While FAS can technically be used for containerized cargo, it\'s not ideal. FAS is designed for bulk commodities and break-bulk cargo where goods are placed alongside the vessel. For containers, FOB or FCA terms are typically more practical and commonly used.',
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

export default function FASIncotermsPage() {
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
              <span>FAS</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              FAS Incoterms (Free Alongside Ship)
            </h1>
            <p className="text-lg text-white/80 mb-6 max-w-3xl">
              FAS Incoterms define seller responsibilities until goods are placed alongside the vessel at the named port of shipment. This maritime-specific term is particularly attractive for bulk cargo and commodities trading where buyers control loading operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Risk Transfer</span>
                <p className="text-white font-semibold">Alongside Vessel</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Transport Mode</span>
                <p className="text-white font-semibold">Sea/Waterway Only</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Loading Costs</span>
                <p className="text-white font-semibold">Buyer Pays</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is FAS Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              What Are FAS Incoterms?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                FAS (Free Alongside Ship) is an international commercial term that defines specific responsibilities between buyers and sellers in maritime shipping transactions. Under FAS terms, the seller delivers goods alongside a nominated vessel at a designated port, completing their obligation once the cargo reaches the ship&apos;s side.
              </p>
              <p>
                The International Chamber of Commerce (ICC) established FAS as one of 11 Incoterms in their standardized framework for global trade. These terms apply exclusively to sea and inland waterway transport, making them essential for businesses involved in maritime commerce.
              </p>
              <p>
                Risk transfers from seller to buyer when goods are placed alongside the vessel at the named port of shipment. The seller bears all risks until this precise moment, after which the buyer assumes responsibility for the goods including loading, ocean transit, and final delivery.
              </p>
            </div>

            <div className="mt-8 p-6 bg-ocean/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Anchor className="h-6 w-6 text-ocean" />
                <h3 className="font-semibold text-foreground">Key Characteristics of FAS Terms</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  Risk Transfer Point: Alongside ship at the named port of shipment
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  Seller covers transportation to port, export clearance, and port handling
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  Buyer arranges and pays for loading, ocean freight, and insurance
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  Applies only to sea and inland waterway transport
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  Ideal for bulk commodities, heavy machinery, and charter party shipments
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
              Key Responsibilities Under FAS Terms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Seller Responsibilities */}
              <Card className="border-ocean/50 bg-ocean/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Seller&apos;s Obligations</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    The seller&apos;s obligations end when goods are placed alongside the vessel at the named port of shipment.
                  </p>
                  <div className="space-y-3">
                    {sellerResponsibilities.map((item) => (
                      <div key={item.task} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                        <span className="text-foreground text-sm">{item.task}</span>
                        {item.included ? (
                          <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
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
                    The buyer assumes responsibility once goods are placed alongside the vessel, including loading operations.
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
              FAS Cost Distribution
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Under FAS, the seller covers all costs until goods are placed alongside the vessel. The buyer pays for loading, ocean freight, insurance, and all subsequent costs.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-ocean text-white">
                    <th className="px-4 py-4 text-left font-semibold">Cost Component</th>
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
                      <td className="px-4 py-4 font-medium text-foreground">{item.item}</td>
                      <td className="px-4 py-4 text-center">
                        {item.seller ? (
                          <CheckCircle className="h-5 w-5 text-ocean mx-auto" />
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

      {/* Risk Transfer and Insurance */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Risk Transfer and Insurance Considerations
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-ocean/10 flex items-center justify-center">
                      <Ship className="h-5 w-5 text-ocean" />
                    </div>
                    <h3 className="font-bold text-foreground">Critical Risk Transfer Point</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Risk transfers from seller to buyer at a specific moment under FAS terms. This transfer occurs when goods rest alongside the vessel&apos;s hull—before loading operations commence.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-ocean flex-shrink-0 mt-0.5" />
                      Physical placement alongside vessel determines transfer timing
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-ocean flex-shrink-0 mt-0.5" />
                      Documentation of delivery time establishes the exact moment
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-ocean flex-shrink-0 mt-0.5" />
                      Weather conditions at transfer affect risk exposure
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-ocean/10 flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-ocean" />
                    </div>
                    <h3 className="font-bold text-foreground">Insurance Requirements</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Proper insurance coordination is essential to avoid coverage gaps during FAS transactions.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-ocean flex-shrink-0 mt-0.5" />
                      Seller: Coverage for inland transit and port storage until quayside
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-ocean flex-shrink-0 mt-0.5" />
                      Buyer: Marine cargo insurance from quayside through loading and voyage
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-ocean flex-shrink-0 mt-0.5" />
                      Coordinate overlap periods to prevent gap insurance scenarios
                    </li>
                  </ul>
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
              Advantages and Disadvantages of FAS
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

      {/* FAS vs Other Maritime Incoterms */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              FAS vs Other Maritime Incoterms
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-ocean text-white">
                    <th className="px-4 py-4 text-left font-semibold">Aspect</th>
                    <th className="px-4 py-4 text-left font-semibold">FAS</th>
                    <th className="px-4 py-4 text-left font-semibold">FOB</th>
                    <th className="px-4 py-4 text-left font-semibold">CFR</th>
                    <th className="px-4 py-4 text-left font-semibold">CIF</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={row.aspect}
                      className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
                    >
                      <td className="px-4 py-4 font-medium text-foreground">{row.aspect}</td>
                      <td className="px-4 py-4 text-ocean font-semibold">{row.fas}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.fob}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.cfr}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.cif}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">FAS vs FOB</h3>
                  <p className="text-sm text-muted-foreground">
                    FAS and FOB differ primarily in loading responsibility. Under FAS, buyers arrange and pay for loading onto the vessel, while FOB requires sellers to handle these tasks. FAS typically results in lower purchase prices since sellers exclude loading expenses.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">FAS vs CFR</h3>
                  <p className="text-sm text-muted-foreground">
                    CFR includes ocean freight in the seller&apos;s obligations, while FAS places all shipping arrangements on the buyer. FAS enables buyers to negotiate freight rates directly with shipping lines, potentially securing better rates through existing contracts.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/incoterms"
                className="inline-flex items-center text-ocean hover:text-ocean/80 font-medium transition-colors"
              >
                View All Incoterms
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use FAS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              When to Use FAS Incoterms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Suitable Cargo Types
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Bulk commodities: coal, iron ore, grain shipments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Heavy machinery and industrial equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Project cargo: wind turbines, oil rig parts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Liquid bulk: petroleum, vegetable oils, chemicals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Charter party shipments where buyer controls vessel</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Ship className="h-5 w-5 text-ocean" />
                  Port Requirements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Adequate quayside space for cargo placement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Water depth of 12-15 meters for larger vessels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Mobile harbor cranes with 100+ ton capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Storage facilities near berths (5,000-10,000 sqm)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">ISPS-certified security infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Common Challenges and How to Avoid Them
            </h2>

            <div className="space-y-4">
              {commonChallenges.map((challenge, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{challenge.title}</h3>
                        <p className="text-sm text-muted-foreground">{challenge.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-ocean">
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
        title="Need Help with FAS Shipments?"
        description="Our freight experts can help you navigate FAS terms for bulk commodities and maritime shipping. Get a quote for your sea freight needs today."
        primaryAction={{ label: 'Get Quote', href: '/quote' }}
      />
    </>
  );
}
