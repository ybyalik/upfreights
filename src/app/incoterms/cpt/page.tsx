import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'CPT Incoterms (Carriage Paid To) | Complete Guide to CPT Terms',
  description: 'Complete guide to CPT (Carriage Paid To) Incoterms. Learn seller and buyer responsibilities, risk transfer points, and when to use CPT terms in international trade.',
  alternates: {
    canonical: '/incoterms/cpt',
  },
  openGraph: {
    title: 'CPT Incoterms (Carriage Paid To) | UpFreights',
    description: 'Complete guide to CPT (Carriage Paid To) Incoterms. Learn seller and buyer responsibilities, cost allocation, and risk transfer.',
  },
};

const sellerResponsibilities = [
  { task: 'Arrange carriage contracts with carriers', included: true },
  { task: 'Pay freight charges to named destination', included: true },
  { task: 'Clear goods for export and obtain licenses', included: true },
  { task: 'Provide commercial invoice and transport documents', included: true },
  { task: 'Notify buyer once goods reach first carrier', included: true },
  { task: 'Deliver goods to first carrier', included: true },
  { task: 'Insurance coverage during transit', included: false },
  { task: 'Import clearance at destination', included: false },
  { task: 'Unloading at destination', included: false },
];

const buyerResponsibilities = [
  { task: 'Accept delivery documents from seller', included: true },
  { task: 'Bear all risks from first carrier onwards', included: true },
  { task: 'Pay for import clearance and duties', included: true },
  { task: 'Arrange insurance coverage for transit', included: true },
  { task: 'Handle unloading costs at destination', included: true },
  { task: 'Final delivery from destination', included: true },
  { task: 'Export clearance', included: false },
  { task: 'Main carriage costs', included: false },
];

const costBreakdown = [
  { item: 'Export Clearance', seller: true, buyer: false },
  { item: 'Loading at Origin', seller: true, buyer: false },
  { item: 'Main Transportation', seller: true, buyer: false },
  { item: 'Transit Handling', seller: true, buyer: false },
  { item: 'Unloading at Destination', seller: false, buyer: true },
  { item: 'Import Clearance', seller: false, buyer: true },
  { item: 'Final Delivery', seller: false, buyer: true },
  { item: 'Insurance', seller: false, buyer: true },
];

const comparisonData = [
  { aspect: 'Risk Transfer', cpt: 'First carrier', cip: 'First carrier', cfr: 'On board vessel', dap: 'At destination' },
  { aspect: 'Cost Coverage', cpt: 'To destination', cip: 'To destination + insurance', cfr: 'To destination', dap: 'To destination' },
  { aspect: 'Transport Mode', cpt: 'Any mode', cip: 'Any mode', cfr: 'Sea/inland waterway', dap: 'Any mode' },
  { aspect: 'Insurance Required', cpt: 'None', cip: 'Mandatory (seller)', cfr: 'None', dap: 'None' },
  { aspect: 'Transit Risk', cpt: 'Buyer', cip: 'Buyer (insured)', cfr: 'Buyer', dap: 'Seller' },
];

const industryUsage = [
  { industry: 'Textiles', routes: 'Asia to Europe', usage: '45%' },
  { industry: 'Electronics', routes: 'Asia to Americas', usage: '38%' },
  { industry: 'Auto Parts', routes: 'NAFTA Region', usage: '52%' },
  { industry: 'Machinery', routes: 'Europe to Asia', usage: '41%' },
];

const advantages = [
  {
    title: 'Cost Transparency',
    description: 'Single freight cost to your named destination eliminates unexpected transportation charges and helps accurate budgeting for international purchases.',
  },
  {
    title: 'Reduced Administrative Burden',
    description: 'Seller handles all export documentation, customs clearance, and carrier arrangements at origin, letting you focus on import procedures.',
  },
  {
    title: 'Insurance Control',
    description: 'You choose coverage levels matching your risk tolerance and cargo value. Buyers can save 15-20% on premiums with tailored insurance policies.',
  },
  {
    title: 'Seller\'s Logistics Network',
    description: 'Benefit from seller\'s established freight relationships. Typically saves 8-12% on transportation costs compared to arranging shipment independently.',
  },
];

const disadvantages = [
  {
    title: 'Risk-Cost Divergence',
    description: 'Buyers assume risk when goods reach first carrier but don\'t control transportation until destination. This gap can create disputes over damage claims.',
  },
  {
    title: 'Insurance Gaps',
    description: 'Neither party has mandatory insurance obligations. Uninsured shipments face total loss exposure, particularly problematic for high-value cargo.',
  },
  {
    title: 'Visibility Challenges',
    description: 'Buyers may lose visibility once goods leave origin, complicating inventory planning and customs preparation without real-time updates.',
  },
  {
    title: 'Multi-Modal Complexity',
    description: 'Determining exact risk transfer point becomes challenging when goods move through multiple carriers, especially for containerized shipments.',
  },
];

const faqs = [
  {
    question: 'What does CPT mean in shipping terms?',
    answer: 'CPT stands for "Carriage Paid To" and is an Incoterm where the seller pays for transportation to a named destination. However, the risk transfers to the buyer once goods are handed to the first carrier. This means the seller covers shipping costs, but the buyer assumes responsibility for any damage or loss during transit.',
  },
  {
    question: 'Who pays for insurance under CPT terms?',
    answer: 'Under CPT terms, neither party is obligated to provide insurance. The buyer typically arranges and pays for cargo insurance since they bear the risk from the moment goods are handed to the first carrier. This differs from CIP terms, where the seller must provide minimum insurance coverage.',
  },
  {
    question: 'When does risk transfer from seller to buyer in CPT?',
    answer: 'Risk transfers from seller to buyer when the goods are handed over to the first carrier, not when they reach the final destination. This early risk transfer is a defining feature of CPT and occurs regardless of who pays for transportation.',
  },
  {
    question: 'What\'s the difference between CPT and DAP?',
    answer: 'The main difference is risk and cost responsibility. Under CPT, risk transfers to the buyer at the first carrier while the seller pays freight. With DAP, the seller retains both risk and cost responsibility until goods arrive at the named destination.',
  },
  {
    question: 'Which industries commonly use CPT Incoterms?',
    answer: 'CPT is widely used in textiles (45% of Asia-Europe shipments), automotive parts (52% in NAFTA region), electronics, and agriculture. It\'s particularly popular for high-value goods, multi-modal transportation, and when sellers have strong logistics networks.',
  },
  {
    question: 'What documents are required for CPT transactions?',
    answer: 'Essential documents include commercial invoices with CPT notation, packing lists, transport documents (bills of lading, air waybills, or road transport documents), export licenses, customs declarations, and proof of origin certificates when required.',
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

export default function CPTIncotermsPage() {
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
              <span>CPT</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              CPT Incoterms (Carriage Paid To)
            </h1>
            <p className="text-lg text-white/80 mb-6 max-w-3xl">
              Under CPT terms, the seller arranges and pays for transportation to a specified destination, but the risk transfers to the buyer once goods are handed to the first carrier. This split between cost and risk makes CPT unique among shipping terms.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Risk Transfer</span>
                <p className="text-white font-semibold">At First Carrier</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Transport Mode</span>
                <p className="text-white font-semibold">Any Mode</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Freight Paid By</span>
                <p className="text-white font-semibold">Seller</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is CPT Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              What Are CPT Incoterms?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                CPT (Carriage Paid To) represents one of the 11 Incoterms established by the International Chamber of Commerce (ICC) for international trade contracts. Under CPT terms, the seller delivers goods to a carrier at an agreed location and pays freight costs to transport the goods to the named destination.
              </p>
              <p>
                The unique characteristic of CPT is the divergence between cost responsibility and risk transfer. While the seller pays for transportation to the destination, the risk of loss or damage transfers to the buyer at an earlier point—when goods are handed to the first carrier.
              </p>
              <p>
                CPT applies to all transportation modes including multimodal transport. You select CPT when you want the seller to manage transportation logistics while accepting risk during transit.
              </p>
            </div>

            <div className="mt-8 p-6 bg-orange/10 rounded-xl">
              <h3 className="font-semibold text-foreground mb-3">Key Components of CPT:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  <strong>Delivery Point:</strong>&nbsp;Location where seller hands goods to first carrier
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  <strong>Named Destination:</strong>&nbsp;Place specified where goods arrive
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  <strong>Cost Responsibility:</strong>&nbsp;Seller pays transportation to destination
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  <strong>Risk Transfer:</strong>&nbsp;Occurs at first carrier, not final destination
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
              Key Responsibilities Under CPT Terms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Seller Responsibilities */}
              <Card className="border-orange/50 bg-orange/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Seller&apos;s Obligations</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    The seller arranges and pays for carriage to the named destination while handling export formalities.
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
                    The buyer bears risk from first carrier onwards and handles import formalities and insurance.
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
              CPT Cost Breakdown
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Understanding who pays for what under CPT terms helps avoid disputes and budget surprises.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left font-semibold">Cost Item</th>
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
              Advantages and Disadvantages of CPT
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

      {/* CPT vs Other Incoterms */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              CPT vs Other Incoterms
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left font-semibold">Aspect</th>
                    <th className="px-4 py-4 text-left font-semibold">CPT</th>
                    <th className="px-4 py-4 text-left font-semibold">CIP</th>
                    <th className="px-4 py-4 text-left font-semibold">CFR</th>
                    <th className="px-4 py-4 text-left font-semibold">DAP</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={row.aspect}
                      className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
                    >
                      <td className="px-4 py-4 font-medium text-foreground">{row.aspect}</td>
                      <td className="px-4 py-4 text-orange font-semibold">{row.cpt}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.cip}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.cfr}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.dap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">CPT vs CIP</h3>
                  <p className="text-sm text-muted-foreground">
                    CPT and CIP share identical risk transfer points but differ in insurance coverage. Under CPT, you&apos;re not obligated to provide cargo insurance. CIP requires sellers to purchase minimum insurance coverage (110% of invoice value). Both terms transfer risk at the first carrier.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">CPT vs CFR</h3>
                  <p className="text-sm text-muted-foreground">
                    CPT applies to all transport modes while CFR exclusively covers sea and inland waterway shipments. Risk transfer occurs at different points—CPT transfers risk at the first carrier anywhere, CFR transfers risk when goods cross the ship&apos;s rail at the port of origin.
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

      {/* Industry Usage */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
              When to Use CPT Incoterms
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              CPT terms work best when you want control over transportation costs while transferring risk early in the shipment process.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left font-semibold">Industry</th>
                    <th className="px-4 py-4 text-left font-semibold">Common Trade Routes</th>
                    <th className="px-4 py-4 text-left font-semibold">CPT Usage Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {industryUsage.map((item, index) => (
                    <tr
                      key={item.industry}
                      className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
                    >
                      <td className="px-4 py-4 font-medium text-foreground">{item.industry}</td>
                      <td className="px-4 py-4 text-muted-foreground">{item.routes}</td>
                      <td className="px-4 py-4 text-orange font-semibold">{item.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Ideal Scenarios for CPT
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Sellers with strong logistics networks in destination regions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Shipping to landlocked countries where seller has better rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">High-value goods with stable demand patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Multi-modal transportation requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Consolidated shipments for better freight rates</span>
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
                    <span className="text-muted-foreground">Buyer needs seller to retain transit risk (use DAP)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Insurance coverage is critical and must be guaranteed (use CIP)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Sea-only shipments with traditional port-to-port (use CFR)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyer wants to arrange their own freight (use FCA)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Full door-to-door service including duties (use DDP)</span>
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
              Best Practices for CPT Transactions
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center mb-4">
                    <Truck className="h-6 w-6 text-orange" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">Contract Clarity</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Define exact delivery point and named destination</li>
                    <li>List acceptable carriers by name</li>
                    <li>Itemize freight and handling charges</li>
                    <li>Set clear timelines for each phase</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-orange" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">Insurance Considerations</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Arrange coverage after risk transfers</li>
                    <li>Calculate coverage at 110% of invoice value</li>
                    <li>Document pre-shipment cargo conditions</li>
                    <li>Coordinate responsibilities with trading partner</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-orange" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">Communication Guidelines</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Establish real-time tracking systems</li>
                    <li>Share tracking numbers within 24 hours</li>
                    <li>Schedule regular check-ins during transit</li>
                    <li>Implement 48-hour response protocol</li>
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
        title="Need Help with CPT Shipments?"
        description="Our freight experts can help you navigate CPT terms and manage your international shipments from China. Get a quote today."
        primaryAction={{ label: 'Get Quote', href: '/quote' }}
      />
    </>
  );
}
