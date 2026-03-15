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
  title: 'FOB Incoterms (Free On Board) | Complete Guide to FOB Shipping Terms',
  description: 'Complete guide to FOB (Free On Board) Incoterms. Learn seller and buyer responsibilities, cost distribution, risk transfer at ship\'s rail, and when to use FOB for ocean freight.',
  alternates: {
    canonical: '/incoterms/fob',
  },
  openGraph: {
    title: 'FOB Incoterms (Free On Board) | UpFreights',
    description: 'Complete guide to FOB Incoterms. Risk transfers when goods pass the ship\'s rail at the named port of shipment.',
  },
};

const sellerResponsibilities = [
  { task: 'Deliver goods on board the vessel at named port', included: true },
  { task: 'Export packaging and labeling', included: true },
  { task: 'Export customs clearance and documentation', included: true },
  { task: 'Pre-carriage transportation to port', included: true },
  { task: 'Terminal handling charges (THC) at origin', included: true },
  { task: 'Loading goods onto the vessel', included: true },
  { task: 'Ocean freight charges', included: false },
  { task: 'Marine insurance', included: false },
];

const buyerResponsibilities = [
  { task: 'Nominate the vessel and shipping line', included: true },
  { task: 'Ocean freight charges', included: true },
  { task: 'Marine cargo insurance', included: true },
  { task: 'Destination port charges', included: true },
  { task: 'Import customs clearance and duties', included: true },
  { task: 'Inland transport at destination', included: true },
  { task: 'Unloading at destination port', included: true },
  { task: 'Export clearance', included: false },
];

const costBreakdown = [
  { item: 'Product Cost', seller: true, buyer: false },
  { item: 'Export Packaging', seller: true, buyer: false },
  { item: 'Inland Transport to Port', seller: true, buyer: false },
  { item: 'Export Clearance & Documentation', seller: true, buyer: false },
  { item: 'Terminal Handling (Origin)', seller: true, buyer: false },
  { item: 'Loading onto Vessel', seller: true, buyer: false },
  { item: 'Ocean Freight', seller: false, buyer: true },
  { item: 'Marine Insurance', seller: false, buyer: true },
  { item: 'Destination Port Charges', seller: false, buyer: true },
  { item: 'Import Clearance & Duties', seller: false, buyer: true },
  { item: 'Delivery to Final Destination', seller: false, buyer: true },
];

const comparisonData = [
  { aspect: 'Risk Transfer Point', fob: 'On board vessel', fas: 'Alongside vessel', cfr: 'On board vessel', cif: 'On board vessel' },
  { aspect: 'Loading Costs', fob: 'Seller', fas: 'Buyer', cfr: 'Seller', cif: 'Seller' },
  { aspect: 'Ocean Freight', fob: 'Buyer', fas: 'Buyer', cfr: 'Seller', cif: 'Seller' },
  { aspect: 'Marine Insurance', fob: 'Buyer', fas: 'Buyer', cfr: 'Buyer', cif: 'Seller' },
  { aspect: 'Export Clearance', fob: 'Seller', fas: 'Seller', cfr: 'Seller', cif: 'Seller' },
  { aspect: 'Transport Mode', fob: 'Sea/Waterway', fas: 'Sea/Waterway', cfr: 'Sea/Waterway', cif: 'Sea/Waterway' },
];

const advantages = [
  {
    title: 'Buyer Controls Shipping',
    description: 'Buyers can negotiate their own ocean freight rates and choose preferred shipping lines, potentially securing better terms through volume commitments.',
  },
  {
    title: 'Clear Risk Transfer Point',
    description: 'The ship\'s rail provides a precise, easily documented moment when risk transfers—reducing disputes and simplifying insurance claims.',
  },
  {
    title: 'Widely Understood Terms',
    description: 'FOB is one of the most commonly used Incoterms globally (45% of ocean shipments), making it familiar to banks, insurers, and trading partners.',
  },
  {
    title: 'Balanced Responsibility',
    description: 'FOB offers a fair division of responsibilities—sellers handle export logistics, buyers manage ocean transport—suitable for most trading relationships.',
  },
];

const disadvantages = [
  {
    title: 'Sea Transport Only',
    description: 'FOB applies exclusively to ocean and inland waterway transport. For containerized cargo or multimodal shipments, FCA is often recommended instead.',
  },
  {
    title: 'Buyer Insurance Burden',
    description: 'Buyers must arrange marine cargo insurance immediately after loading. Coverage gaps during the loading process can create exposure to losses.',
  },
  {
    title: 'Complex for New Importers',
    description: 'First-time importers may struggle with arranging ocean freight, insurance, and customs clearance without established logistics relationships.',
  },
  {
    title: 'Port Dependency',
    description: 'FOB requires precise port naming in contracts. Sellers located far from ports face higher pre-carriage costs compared to inland Incoterms.',
  },
];

const commonMistakes = [
  {
    title: 'Misunderstanding the Transfer Point',
    description: 'Risk transfers when goods pass the ship\'s rail—not when leaving the warehouse or arriving at port. This misunderstanding creates insurance gaps and potential financial losses.',
  },
  {
    title: 'Incorrect Port Naming',
    description: 'Generic terms like "FOB Chinese Port" create legal ambiguities. Always specify the exact port: "FOB Shanghai, China" to ensure contract enforceability.',
  },
  {
    title: 'Documentation Errors',
    description: 'Incomplete export documents trigger costly delays and penalties averaging $2,500. Create comprehensive document checklists and verify against ICC requirements.',
  },
  {
    title: 'Insurance Coverage Gaps',
    description: '31% of cargo damage occurs during loading operations. Buyers should activate marine insurance 48 hours before vessel arrival to avoid coverage gaps.',
  },
  {
    title: 'Cost Allocation Confusion',
    description: '40% of FOB shipments experience payment disputes over unclear cost allocations. Itemize all charges in your sales contract to prevent conflicts.',
  },
];

const faqs = [
  {
    question: 'What does FOB mean in shipping terms?',
    answer: 'FOB stands for "Free On Board," one of the 11 standardized Incoterms established by the International Chamber of Commerce. Under FOB terms, the seller\'s responsibility ends when goods are loaded on board the vessel at the named port of shipment. From that point, the buyer assumes all risks and costs for the remainder of the journey.',
  },
  {
    question: 'When does risk transfer from seller to buyer under FOB?',
    answer: 'Risk transfers at the precise moment when goods pass the ship\'s rail (are loaded on board) at the named port of shipment. This specific point marks the critical transition where the seller\'s obligations end and the buyer\'s responsibilities begin, including all risks of loss or damage during ocean transit.',
  },
  {
    question: 'What\'s the difference between FOB and CIF?',
    answer: 'Under FOB, the buyer arranges and pays for ocean freight and insurance. Under CIF (Cost, Insurance, and Freight), the seller handles these costs—arranging freight to the destination port and providing marine insurance covering 110% of cargo value. However, risk still transfers at the ship\'s rail under both terms.',
  },
  {
    question: 'Who pays for loading under FOB terms?',
    answer: 'The seller pays for loading goods onto the vessel under FOB terms. This is a key difference from FAS (Free Alongside Ship), where the buyer handles loading costs. The seller\'s responsibility includes terminal handling charges (THC) at the origin port and loading supervision.',
  },
  {
    question: 'Is FOB suitable for container shipments?',
    answer: 'While FOB can be used for containers, the ICC recommends FCA (Free Carrier) instead. Containers typically arrive at terminals days before vessel loading, creating ambiguity about the exact transfer point. FCA transfers risk when cargo reaches the terminal, providing clearer documentation.',
  },
  {
    question: 'What documents does the seller provide under FOB?',
    answer: 'The seller provides the commercial invoice, packing list, certificate of origin, export license (if required), and assists with the bill of lading. Export customs clearance documentation and any certificates required for the goods are also the seller\'s responsibility.',
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

export default function FOBIncotermsPage() {
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
              <span>FOB</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              FOB Incoterms (Free On Board)
            </h1>
            <p className="text-lg text-white/80 mb-6 max-w-3xl">
              FOB is one of the most widely used Incoterms in global commerce, defining exactly when ownership and risk transfer from seller to buyer during ocean freight transactions. The seller loads goods onto the vessel at the named port, after which the buyer assumes all risks and costs.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Risk Transfer</span>
                <p className="text-white font-semibold">On Board Vessel</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Transport Mode</span>
                <p className="text-white font-semibold">Sea/Waterway Only</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Usage Rate</span>
                <p className="text-white font-semibold">45% of Ocean Shipments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is FOB Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              What Are FOB Incoterms?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                FOB (Free On Board) represents one of the 11 standardized trade terms established by the International Chamber of Commerce (ICC) in their Incoterms® 2020 rules. This maritime-specific term applies exclusively to ocean and inland waterway transport, defining the exact moment when costs, risks, and responsibilities shift from seller to buyer.
              </p>
              <p>
                Under FOB terms, the seller fulfills their obligation once goods are loaded on board the vessel at the named port of shipment. The buyer assumes all risks and costs from that precise point forward, including main carriage, insurance, and import procedures.
              </p>
              <p>
                FOB differs from FAS (Free Alongside Ship) in one crucial aspect: loading responsibility. With FOB, the seller loads cargo on board before transferring risk. This makes FOB the preferred choice when sellers have better loading arrangements at the port.
              </p>
            </div>

            <div className="mt-8 p-6 bg-ocean/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Anchor className="h-6 w-6 text-ocean" />
                <h3 className="font-semibold text-foreground">Key Components of FOB Terms</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  Named Port of Shipment: Specific port where seller delivers goods on board (e.g., FOB Shanghai)
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  Ship&apos;s Rail Rule: Risk transfers when goods are loaded on board the vessel
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  Seller provides: Commercial invoice, packing list, export clearance, bill of lading
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  Buyer arranges: Marine insurance, ocean freight, import clearance
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  Applies only to sea and inland waterway transport
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
              Key Responsibilities Under FOB Terms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Seller Responsibilities */}
              <Card className="border-ocean/50 bg-ocean/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Seller&apos;s Obligations</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    The seller&apos;s obligations end when goods are loaded on board the vessel at the named port of shipment.
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
                    The buyer assumes responsibility once goods are on board the vessel, managing ocean transport and import.
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
              FOB Cost Distribution
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Under FOB, the seller covers all costs until goods are loaded on board. The buyer pays for ocean freight, insurance, and all subsequent costs.
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

      {/* Risk Transfer Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Risk Transfer Under FOB
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-ocean/10 flex items-center justify-center">
                      <Ship className="h-5 w-5 text-ocean" />
                    </div>
                    <h3 className="font-bold text-foreground">Point of Transfer</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    The critical transfer moment occurs when goods are physically loaded on board the vessel at the named port of shipment. Modern ports use EDI systems to record transfer times within 30-second intervals.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-ocean flex-shrink-0 mt-0.5" />
                      Risk transfers when goods are on board the vessel
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-ocean flex-shrink-0 mt-0.5" />
                      Bill of lading documents the exact transfer moment
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-ocean flex-shrink-0 mt-0.5" />
                      Container terminals use OCR to track movements
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
                    <h3 className="font-bold text-foreground">Insurance Considerations</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    22% of cargo claims occur during ocean transit according to IUMI data. Proper insurance coordination is essential to avoid coverage gaps.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-ocean flex-shrink-0 mt-0.5" />
                      Seller: Coverage until goods are on board
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-ocean flex-shrink-0 mt-0.5" />
                      Buyer: Marine insurance from loading through voyage
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-ocean flex-shrink-0 mt-0.5" />
                      Activate buyer&apos;s policy 48 hours before vessel arrival
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
              Advantages and Disadvantages of FOB
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

      {/* FOB vs Other Maritime Incoterms */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              FOB vs Other Maritime Incoterms
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-ocean text-white">
                    <th className="px-4 py-4 text-left font-semibold">Aspect</th>
                    <th className="px-4 py-4 text-left font-semibold">FOB</th>
                    <th className="px-4 py-4 text-left font-semibold">FAS</th>
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
                      <td className="px-4 py-4 text-ocean font-semibold">{row.fob}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.fas}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.cfr}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.cif}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">FOB vs FAS</h3>
                  <p className="text-sm text-muted-foreground">
                    FOB includes loading costs while FAS ends alongside the vessel. FOB transfers risk later (on board) while FAS transfers earlier (alongside). FOB is preferred when sellers have better loading arrangements.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">FOB vs CIF</h3>
                  <p className="text-sm text-muted-foreground">
                    CIF includes ocean freight and insurance in the seller&apos;s price. FOB gives buyers more control over shipping costs. CIF suits buyers wanting simplified logistics; FOB suits buyers with freight relationships.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">FOB vs FCA</h3>
                  <p className="text-sm text-muted-foreground">
                    FCA works for any transport mode while FOB is sea-only. For containerized cargo, the ICC recommends FCA since containers reach terminals days before loading, making FCA&apos;s transfer point clearer.
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

      {/* When to Use FOB */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              When to Use FOB Incoterms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Ideal Scenarios for FOB
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Bulk commodities: grains, minerals, chemicals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Sellers located within 50km of major ports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyers with established freight forwarder relationships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Long-term supply contracts with repeat shipments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Transactions requiring documentary credit (L/C)</span>
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
                    <span className="text-muted-foreground">Shipping containerized cargo (use FCA instead)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyer lacks logistics capabilities or experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Multimodal transport is required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Seller located far from port (high pre-carriage costs)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">New trading relationships without established trust</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Common Mistakes to Avoid with FOB
            </h2>

            <div className="space-y-4">
              {commonMistakes.map((mistake, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{mistake.title}</h3>
                        <p className="text-sm text-muted-foreground">{mistake.description}</p>
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
        title="Need Help with FOB Shipments?"
        description="Our freight experts can help you navigate FOB terms for your ocean freight needs. Get competitive rates and reliable service from China to worldwide destinations."
        primaryAction={{ label: 'Get Quote', href: '/quote' }}
      />
    </>
  );
}
