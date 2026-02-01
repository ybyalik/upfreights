import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, Ship, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'CFR Incoterms (Cost and Freight) | Complete Guide to CFR Shipping Terms',
  description: 'Complete guide to CFR (Cost and Freight) Incoterms. Learn seller and buyer responsibilities, cost distribution, risk transfer, and when to use CFR for maritime shipping.',
  alternates: {
    canonical: '/incoterms/cfr',
  },
  openGraph: {
    title: 'CFR Incoterms (Cost and Freight) | UpFreights',
    description: 'Complete guide to CFR Incoterms. Seller pays freight to destination port, but risk transfers at origin when goods are loaded on board.',
  },
};

const sellerResponsibilities = [
  { task: 'Deliver goods on board the vessel at origin port', included: true },
  { task: 'Export packaging and labeling', included: true },
  { task: 'Export customs clearance and documentation', included: true },
  { task: 'Pre-carriage transportation to port', included: true },
  { task: 'Ocean freight to destination port', included: true },
  { task: 'Loading costs at origin', included: true },
  { task: 'Marine insurance', included: false },
  { task: 'Unloading at destination', included: false },
];

const buyerResponsibilities = [
  { task: 'Marine cargo insurance', included: true },
  { task: 'Risk from ship\'s rail at origin', included: true },
  { task: 'Unloading charges at destination', included: true },
  { task: 'Import customs clearance and duties', included: true },
  { task: 'Inland transport at destination', included: true },
  { task: 'Terminal handling at destination', included: true },
  { task: 'Ocean freight payment', included: false },
  { task: 'Export clearance', included: false },
];

const costBreakdown = [
  { item: 'Product Cost', seller: true, buyer: false },
  { item: 'Export Packaging', seller: true, buyer: false },
  { item: 'Inland Transport to Port', seller: true, buyer: false },
  { item: 'Export Clearance & Documentation', seller: true, buyer: false },
  { item: 'Terminal Handling (Origin)', seller: true, buyer: false },
  { item: 'Loading onto Vessel', seller: true, buyer: false },
  { item: 'Ocean Freight', seller: true, buyer: false },
  { item: 'Marine Insurance', seller: false, buyer: true },
  { item: 'Unloading at Destination', seller: false, buyer: true },
  { item: 'Terminal Handling (Destination)', seller: false, buyer: true },
  { item: 'Import Clearance & Duties', seller: false, buyer: true },
  { item: 'Delivery to Final Destination', seller: false, buyer: true },
];

const comparisonData = [
  { aspect: 'Freight Payment', cfr: 'Seller', fob: 'Buyer', cif: 'Seller', cpt: 'Seller' },
  { aspect: 'Insurance Obligation', cfr: 'Buyer', fob: 'Buyer', cif: 'Seller', cpt: 'Buyer' },
  { aspect: 'Risk Transfer Point', cfr: 'Ship\'s rail (origin)', fob: 'Ship\'s rail (origin)', cif: 'Ship\'s rail (origin)', cpt: 'First carrier' },
  { aspect: 'Transport Mode', cfr: 'Sea only', fob: 'Sea only', cif: 'Sea only', cpt: 'Any mode' },
  { aspect: 'Carrier Selection', cfr: 'Seller', fob: 'Buyer', cif: 'Seller', cpt: 'Seller' },
  { aspect: 'Price Includes', cfr: 'Goods + Freight', fob: 'Goods only', cif: 'Goods + Freight + Insurance', cpt: 'Goods + Freight' },
];

const advantages = [
  {
    title: 'Seller Controls Shipping',
    description: 'Sellers maintain control over carrier selection and can negotiate better freight rates through established relationships with shipping lines.',
  },
  {
    title: 'Simplified Pricing',
    description: 'Single price includes goods and freight, making quotes more attractive to buyers who prefer predictable landed costs.',
  },
  {
    title: 'Insurance Flexibility for Buyers',
    description: 'Buyers select their own insurance providers, potentially saving 20-35% on premiums with tailored coverage terms.',
  },
  {
    title: 'Clear Cost Visibility',
    description: 'Buyers receive detailed freight invoices showing exact shipping charges, enabling accurate cost analysis and budgeting.',
  },
];

const disadvantages = [
  {
    title: 'Risk Transfer at Origin',
    description: 'Buyers assume risk once goods are loaded—before they have physical control. Cargo remains at buyer\'s risk for the entire ocean voyage.',
  },
  {
    title: 'Insurance Coordination Required',
    description: 'Buyers must arrange coverage before shipment departure. Delays cause 8% of CFR shipments to sail uninsured.',
  },
  {
    title: 'Hidden Destination Costs',
    description: 'Terminal handling ($150-500/container), customs examination ($200-1,000), and demurrage ($75-300/day) add to landed costs.',
  },
  {
    title: 'Document Delays',
    description: 'Original bills of lading often arrive after cargo, causing storage fees of $50-200 daily and supply chain disruptions.',
  },
];

const commonMistakes = [
  {
    title: 'Misunderstanding Risk Transfer',
    description: 'Risk transfers at the origin port when goods are loaded—not at destination. This misconception leads to insurance gaps worth thousands in potential losses.',
  },
  {
    title: 'Insurance Coverage Gaps',
    description: 'Failing to arrange marine insurance before loading creates major financial vulnerability. Secure coverage effective from the moment goods cross the ship\'s rail.',
  },
  {
    title: 'Documentation Errors',
    description: 'Incorrect or incomplete documents cause 60% of CFR disputes. Verify all documents match your purchase order exactly—request drafts 48 hours before shipment.',
  },
  {
    title: 'Cost Calculation Oversights',
    description: 'Actual costs exceed CFR price by 15-20% due to destination charges, import duties, and taxes. Calculate total landed costs before finalizing contracts.',
  },
  {
    title: 'Communication Breakdowns',
    description: 'Poor communication causes 25% of shipment delays. Establish protocols for pre-shipment notifications, loading confirmations, and damage reporting.',
  },
];

const faqs = [
  {
    question: 'What does CFR mean in shipping terms?',
    answer: 'CFR stands for Cost and Freight, an Incoterm used in international maritime trade. Under CFR, the seller pays for shipping costs to the destination port, but the buyer assumes risk once goods are loaded onto the vessel at the origin port. This term only applies to sea and inland waterway transport.',
  },
  {
    question: 'Who pays for insurance under CFR terms?',
    answer: 'The buyer is responsible for arranging and paying for marine insurance under CFR terms. While the seller covers freight costs to the destination port, they have no obligation to provide insurance. Buyers must secure coverage before goods are loaded onto the vessel to avoid gaps in protection.',
  },
  {
    question: 'When does risk transfer from seller to buyer in CFR?',
    answer: 'Risk transfers from seller to buyer when the goods are loaded on board the vessel at the port of origin. This means the buyer bears all risks of loss or damage during ocean transit, even though the seller pays freight charges to the destination port.',
  },
  {
    question: 'How is CFR different from CIF?',
    answer: 'The main difference is insurance responsibility. Under CIF (Cost, Insurance, and Freight), the seller must provide minimum marine insurance coverage (110% of invoice value) for the buyer\'s benefit. With CFR, the seller has no insurance obligation, leaving the buyer to arrange their own coverage.',
  },
  {
    question: 'How is CFR different from FOB?',
    answer: 'The key difference is freight payment. Under FOB, the buyer arranges and pays for ocean freight. Under CFR, the seller pays freight to the destination port. However, risk transfers at the same point under both terms—when goods are loaded on board at the origin port.',
  },
  {
    question: 'Which industries commonly use CFR?',
    answer: 'CFR is popular among agricultural commodity traders, steel and metal industries, chemical companies, textile manufacturers, and mining companies. These sectors often deal with bulk shipments where buyers prefer controlling their insurance arrangements while sellers have established shipping expertise.',
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

export default function CFRIncotermsPage() {
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
              <span>CFR</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              CFR Incoterms (Cost and Freight)
            </h1>
            <p className="text-lg text-white/80 mb-6 max-w-3xl">
              CFR defines a split responsibility where the seller pays freight to the destination port, but risk transfers to the buyer once goods are loaded at the origin. Understanding this distinction between cost and risk is essential for proper contract pricing and insurance planning.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Risk Transfer</span>
                <p className="text-white font-semibold">Ship&apos;s Rail (Origin)</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Transport Mode</span>
                <p className="text-white font-semibold">Sea/Waterway Only</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Freight Payment</span>
                <p className="text-white font-semibold">Seller Pays</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is CFR Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              What Are CFR Incoterms?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                CFR (Cost and Freight) is an international commercial term that defines specific responsibilities in maritime shipping contracts. The seller pays for transportation costs to the named destination port while the buyer assumes risk once goods are loaded on board the vessel at the origin port.
              </p>
              <p>
                CFR applies exclusively to sea and inland waterway transport. The term requires sellers to arrange and pay for carriage to the agreed port of destination. Risk transfers from seller to buyer at the moment of loading onto the vessel at the port of shipment—not at the destination.
              </p>
              <p>
                This creates a crucial split: the seller bears costs further along the supply chain than they bear risk. Understanding this distinction prevents costly misunderstandings about insurance coverage and liability during ocean transit.
              </p>
            </div>

            <div className="mt-8 p-6 bg-ocean/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="h-6 w-6 text-ocean" />
                <h3 className="font-semibold text-foreground">Key CFR Components</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  Costs: Seller pays freight to destination port
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  Risk: Transfers to buyer at ship&apos;s rail (origin port)
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  Insurance: Buyer must arrange—seller has no obligation
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  Documents: Seller provides commercial invoice, B/L, packing list
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  Mode: Sea and inland waterway transport only
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
              Key Responsibilities Under CFR Terms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Seller Responsibilities */}
              <Card className="border-ocean/50 bg-ocean/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Seller&apos;s Obligations</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    The seller pays freight to destination but risk ends when goods are loaded at the origin port.
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
                    The buyer assumes risk at origin and must arrange insurance to protect cargo during ocean transit.
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
              CFR Cost Distribution
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Under CFR, the seller covers costs through ocean freight. The buyer pays for insurance, destination charges, and import clearance.
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

      {/* Risk vs Cost Split */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Understanding CFR&apos;s Risk vs Cost Split
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-amber-500/50 bg-amber-50/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-foreground">Critical Understanding</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    CFR creates a unique situation where cost responsibility and risk responsibility diverge:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Seller&apos;s costs:</strong> Extend to the destination port</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Seller&apos;s risk:</strong> Ends at the origin port</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Buyer&apos;s risk:</strong> Covers the entire ocean voyage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-ocean/10 flex items-center justify-center">
                      <Ship className="h-5 w-5 text-ocean" />
                    </div>
                    <h3 className="font-bold text-foreground">Insurance Imperative</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Because buyers bear ocean transit risk but don&apos;t control the vessel, marine insurance is essential:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-ocean flex-shrink-0 mt-0.5" />
                      Arrange coverage before goods are loaded
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-ocean flex-shrink-0 mt-0.5" />
                      Policy must activate at ship&apos;s rail (origin)
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-ocean flex-shrink-0 mt-0.5" />
                      Typical premiums: 0.2% to 2% of cargo value
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
              Advantages and Disadvantages of CFR
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

      {/* CFR vs Other Maritime Incoterms */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              CFR vs Other Incoterms
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-ocean text-white">
                    <th className="px-4 py-4 text-left font-semibold">Aspect</th>
                    <th className="px-4 py-4 text-left font-semibold">CFR</th>
                    <th className="px-4 py-4 text-left font-semibold">FOB</th>
                    <th className="px-4 py-4 text-left font-semibold">CIF</th>
                    <th className="px-4 py-4 text-left font-semibold">CPT</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={row.aspect}
                      className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
                    >
                      <td className="px-4 py-4 font-medium text-foreground">{row.aspect}</td>
                      <td className="px-4 py-4 text-ocean font-semibold">{row.cfr}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.fob}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.cif}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.cpt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">CFR vs FOB</h3>
                  <p className="text-sm text-muted-foreground">
                    The key difference is freight payment. Under FOB, buyers arrange and pay for ocean freight. Under CFR, sellers pay freight to destination. Risk transfers at the same point under both terms.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">CFR vs CIF</h3>
                  <p className="text-sm text-muted-foreground">
                    Insurance is the only difference. CIF requires sellers to provide minimum insurance (110% of invoice value). CFR leaves insurance entirely to the buyer, offering more flexibility but requiring proactive coverage.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">CFR vs CPT</h3>
                  <p className="text-sm text-muted-foreground">
                    CPT is the multimodal equivalent of CFR. CPT works for any transport mode (air, road, rail, sea), while CFR is restricted to sea and inland waterway transport only.
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

      {/* When to Use CFR */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              When to Use CFR Incoterms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Suitable Trade Scenarios
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyers with existing marine insurance policies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Sellers with dedicated shipping departments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Bulk commodity trades (grain, minerals, steel)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Countries with mandatory national insurance requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Products with stable values during transit</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Ship className="h-5 w-5 text-ocean" />
                  Industries Using CFR
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Agricultural commodities: coffee, grain, soybeans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Steel and metal industries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Chemical companies (non-hazardous bulk liquids)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Textile manufacturers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Mining companies (minerals and ores)</span>
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
              Common Mistakes to Avoid with CFR
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
        title="Need Help with CFR Shipments?"
        description="Our freight experts can help you navigate CFR terms and arrange competitive ocean freight rates from China to worldwide destinations."
        primaryAction={{ label: 'Get Quote', href: '/quote' }}
      />
    </>
  );
}
