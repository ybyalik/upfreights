import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'EXW Incoterms (Ex Works) | Complete Guide to Ex Works Terms',
  description: 'Complete guide to EXW (Ex Works) Incoterms. Learn seller and buyer responsibilities, advantages, risks, and when to use Ex Works terms in international trade.',
  alternates: {
    canonical: '/incoterms/exw',
  },
  openGraph: {
    title: 'EXW Incoterms (Ex Works) | UpFreights',
    description: 'Complete guide to EXW (Ex Works) Incoterms. Learn seller and buyer responsibilities, advantages, and risks.',
  },
};

const sellerResponsibilities = [
  { task: 'Packaging goods', included: true },
  { task: 'Loading at origin', included: false },
  { task: 'Export clearance', included: false },
  { task: 'Main carriage', included: false },
  { task: 'Import clearance', included: false },
  { task: 'Delivery to destination', included: false },
];

const buyerResponsibilities = [
  { task: 'Packaging goods', included: false },
  { task: 'Loading at origin', included: true },
  { task: 'Export clearance', included: true },
  { task: 'Main carriage', included: true },
  { task: 'Import clearance', included: true },
  { task: 'Delivery to destination', included: true },
];

const commonMistakes = [
  {
    title: 'Documentation Errors',
    description: 'Missing export declarations cause 35% of EXW shipment delays. Incorrect HS codes on customs forms result in penalties ranging from $1,000 to $10,000 per violation.',
  },
  {
    title: 'Risk Transfer Misconceptions',
    description: 'Assuming risk transfers upon payment is a critical error. Risk passes once goods become available at the seller\'s premises, regardless of payment status.',
  },
  {
    title: 'Cost Calculation Oversights',
    description: 'Underestimating total landed costs leads to budget overruns of 20-40%. Hidden costs include export duties, terminal handling charges, and documentation fees.',
  },
  {
    title: 'Communication Gaps',
    description: 'Failing to establish clear communication protocols results in 40% of EXW disputes. Written confirmation of goods availability and pickup details is essential.',
  },
  {
    title: 'Legal Compliance Failures',
    description: 'Violating export control regulations can result in fines exceeding $250,000 per violation. Understanding both origin and destination country regulations is critical.',
  },
];

const hiddenCosts = [
  { category: 'Export clearance fees', amount: '$150-500', frequency: 'Per shipment' },
  { category: 'Loading charges', amount: '$200-800', frequency: 'Per container' },
  { category: 'Documentation fees', amount: '$75-300', frequency: 'Per document' },
  { category: 'Facility access fees', amount: '$50-150', frequency: 'Per visit' },
  { category: 'Storage penalties', amount: '$50-200', frequency: 'Per day' },
];

const faqs = [
  {
    question: 'What does EXW mean in shipping terms?',
    answer: 'EXW stands for "Ex Works," meaning "from the works" or "from the factory." It\'s an Incoterm where the seller\'s only responsibility is to make goods available at their premises. The buyer handles everything else, including loading, transportation, export customs clearance, and all associated risks from the moment goods are made available.',
  },
  {
    question: 'Who pays for shipping under EXW terms?',
    answer: 'The buyer pays for all shipping costs under EXW terms. This includes loading at the seller\'s premises, inland transportation, international freight, customs duties, insurance, and delivery to the final destination. The seller has no financial obligation for any transportation or logistics costs after making the goods available.',
  },
  {
    question: 'What are the main risks for buyers using EXW?',
    answer: 'Buyers face maximum risk under EXW terms, including responsibility for export documentation, customs compliance in unfamiliar countries, all transportation arrangements, and financial liability from the moment goods are available. They also risk hidden costs, loading restrictions at seller facilities, and potential legal penalties for export compliance failures.',
  },
  {
    question: 'When should I use EXW instead of FCA?',
    answer: 'Use EXW when you\'re an experienced buyer with strong logistics capabilities and want maximum control over shipping. Choose FCA instead if you need seller assistance with export clearance, prefer balanced risk distribution, or lack expertise in the seller\'s country\'s export regulations. FCA is generally better for small and medium enterprises.',
  },
  {
    question: 'What documents does the seller provide under EXW?',
    answer: 'Under EXW, sellers provide minimal documentation – typically just a commercial invoice and basic proof that goods are available. They\'re not obligated to provide export licenses, customs documentation, or certificates of origin. Buyers must arrange for all export-related paperwork independently.',
  },
  {
    question: 'Is EXW suitable for small businesses?',
    answer: 'EXW is generally not recommended for small businesses due to high logistics demands and risks. Small importers often face higher transportation costs, difficulty accessing seller facilities, challenges with export compliance, and increased insurance expenses. Alternative terms like FCA or FOB typically offer better support.',
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

export default function EXWIncotermsPage() {
  return (
    <>
      {/* FAQ Schema */}
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
              <span>EXW</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              EXW Incoterms (Ex Works)
            </h1>
            <p className="text-lg text-white/80 mb-6 max-w-3xl">
              EXW represents the minimum obligation for sellers, making it a popular choice for businesses looking to streamline their export processes. Under this arrangement, the seller simply makes goods available at their premises while the buyer handles everything else.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Risk Transfer</span>
                <p className="text-white font-semibold">At Seller&apos;s Premises</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Transport Mode</span>
                <p className="text-white font-semibold">Any Mode</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Seller Obligation</span>
                <p className="text-white font-semibold">Minimum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is EXW Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              What Are EXW Incoterms?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                EXW (Ex Works) represents the most basic delivery term among the 11 Incoterms 2020 rules established by the International Chamber of Commerce (ICC). Under EXW terms, the seller fulfills their obligation by making goods available at their premises—typically a factory, warehouse, or office. The buyer assumes responsibility for all transportation costs, risks, and formalities from that point forward.
              </p>
              <p>
                Ex Works translates to &quot;from the works&quot; or &quot;from the factory&quot; in English. This Incoterm places maximum responsibility on the buyer and minimum obligation on the seller. The seller&apos;s sole duty involves preparing goods and making them accessible at a named place, usually their own facility.
              </p>
            </div>

            <div className="mt-8 p-6 bg-orange/10 rounded-xl">
              <h3 className="font-semibold text-foreground mb-3">The buyer handles everything else, including:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Loading goods onto the transport vehicle
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Export customs clearance and documentation
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Transportation to the final destination
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Import customs procedures and duties
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Insurance coverage during transit
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
              Key Responsibilities Under EXW Terms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Seller Responsibilities */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Seller&apos;s Obligations</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Your obligations as a seller under EXW terms are minimal compared to other Incoterms. You&apos;re responsible for preparing goods and making them available at your designated premises.
                  </p>
                  <div className="space-y-3">
                    {sellerResponsibilities.map((item) => (
                      <div key={item.task} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                        <span className="text-foreground">{item.task}</span>
                        {item.included ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-muted-foreground/40" />
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Risk transfer point: At seller&apos;s premises
                  </p>
                </CardContent>
              </Card>

              {/* Buyer Responsibilities */}
              <Card className="border-orange/50 bg-orange/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Buyer&apos;s Obligations</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Your responsibilities as a buyer under EXW terms are extensive and begin immediately after the seller makes the goods available.
                  </p>
                  <div className="space-y-3">
                    {buyerResponsibilities.map((item) => (
                      <div key={item.task} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                        <span className="text-foreground">{item.task}</span>
                        {item.included ? (
                          <CheckCircle className="h-5 w-5 text-orange" />
                        ) : (
                          <XCircle className="h-5 w-5 text-muted-foreground/40" />
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Risk transfer point: From seller&apos;s premises
                  </p>
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
              Advantages and Disadvantages of EXW
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Advantages */}
              <div>
                <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6" />
                  Advantages
                </h3>
                <div className="space-y-4">
                  <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Maximum Control for Buyers</h4>
                      <p className="text-sm text-muted-foreground">
                        Buyers gain complete control over the shipping process, selecting preferred freight forwarders, negotiating rates, and choosing transportation routes.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Reduced Seller Liability</h4>
                      <p className="text-sm text-muted-foreground">
                        Sellers benefit from minimal risk exposure since responsibility ends at their premises. This reduces insurance costs and eliminates export documentation needs.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Cost Transparency</h4>
                      <p className="text-sm text-muted-foreground">
                        EXW provides complete visibility into logistics costs. Buyers see exact charges for transportation, insurance, customs duties, and handling fees.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Shipment Consolidation</h4>
                      <p className="text-sm text-muted-foreground">
                        Buyers can consolidate shipments from multiple EXW suppliers, reducing per-unit shipping costs by up to 40%.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Disadvantages */}
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                  <XCircle className="h-6 w-6" />
                  Disadvantages
                </h3>
                <div className="space-y-4">
                  <Card className="border-red-200 bg-red-50/50 dark:bg-red-950/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Limited Seller Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Buyers receive no assistance with loading, export documentation, or customs clearance, creating operational challenges for inexperienced importers.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-red-200 bg-red-50/50 dark:bg-red-950/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Maximum Financial Risk</h4>
                      <p className="text-sm text-muted-foreground">
                        Buyers assume all risks from the moment goods are available, including loading damage. Insurance costs increase 15-20% compared to FCA or FOB.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-red-200 bg-red-50/50 dark:bg-red-950/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Export Compliance Risks</h4>
                      <p className="text-sm text-muted-foreground">
                        Managing export compliance without seller support creates legal exposure. Penalties can range from $1,000 to $250,000 per violation.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-red-200 bg-red-50/50 dark:bg-red-950/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Challenges for Small Buyers</h4>
                      <p className="text-sm text-muted-foreground">
                        Small importers face higher per-unit costs, facility access restrictions, and limited negotiating power with carriers.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Costs Table */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
              Hidden Costs to Watch For
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Underestimating total landed costs leads to budget overruns of 20-40% in EXW transactions.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left font-semibold">Cost Category</th>
                    <th className="px-4 py-4 text-left font-semibold">Average Amount</th>
                    <th className="px-4 py-4 text-left font-semibold">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {hiddenCosts.map((cost, index) => (
                    <tr
                      key={cost.category}
                      className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
                    >
                      <td className="px-4 py-4 font-medium text-foreground">{cost.category}</td>
                      <td className="px-4 py-4 text-orange font-semibold">{cost.amount}</td>
                      <td className="px-4 py-4 text-muted-foreground">{cost.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use EXW */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              When to Use EXW in International Trade
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Ideal Scenarios for EXW
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyer operates their own logistics network</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Large multinationals with global shipping contracts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Trade within free trade zones or economic unions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Companies without dedicated export departments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">High-volume domestic operations accepting international orders</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Scenarios to Avoid EXW
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Government contracts requiring specific delivery terms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Perishable goods needing coordinated logistics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Custom manufacturing requiring seller involvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Restricted export items requiring special documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">First-time importers or small businesses</span>
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
              Common Mistakes to Avoid with EXW
            </h2>

            <div className="space-y-4">
              {commonMistakes.map((mistake, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
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

      {/* EXW vs Other Incoterms */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              EXW vs Other Incoterms
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left font-semibold">Aspect</th>
                    <th className="px-4 py-4 text-left font-semibold">EXW</th>
                    <th className="px-4 py-4 text-left font-semibold">FCA</th>
                    <th className="px-4 py-4 text-left font-semibold">FOB</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-card">
                    <td className="px-4 py-4 font-medium text-foreground">Export Clearance</td>
                    <td className="px-4 py-4 text-muted-foreground">Buyer</td>
                    <td className="px-4 py-4 text-muted-foreground">Seller</td>
                    <td className="px-4 py-4 text-muted-foreground">Seller</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-secondary/20">
                    <td className="px-4 py-4 font-medium text-foreground">Loading Obligation</td>
                    <td className="px-4 py-4 text-muted-foreground">Buyer</td>
                    <td className="px-4 py-4 text-muted-foreground">Seller</td>
                    <td className="px-4 py-4 text-muted-foreground">Seller</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-card">
                    <td className="px-4 py-4 font-medium text-foreground">Risk Transfer</td>
                    <td className="px-4 py-4 text-muted-foreground">Seller&apos;s premises</td>
                    <td className="px-4 py-4 text-muted-foreground">Delivery to carrier</td>
                    <td className="px-4 py-4 text-muted-foreground">Ship&apos;s rail at port</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-secondary/20">
                    <td className="px-4 py-4 font-medium text-foreground">Transport Mode</td>
                    <td className="px-4 py-4 text-muted-foreground">Any mode</td>
                    <td className="px-4 py-4 text-muted-foreground">Any mode</td>
                    <td className="px-4 py-4 text-muted-foreground">Sea only</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="px-4 py-4 font-medium text-foreground">Cost Distribution</td>
                    <td className="px-4 py-4 text-muted-foreground">90% buyer / 10% seller</td>
                    <td className="px-4 py-4 text-muted-foreground">70% buyer / 30% seller</td>
                    <td className="px-4 py-4 text-muted-foreground">60% buyer / 40% seller</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center">
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
        title="Need Help with EXW Shipments?"
        description="Our freight experts can help you navigate EXW terms and manage your international shipments from China. Get a quote today."
        primaryAction={{ label: 'Get Quote', href: '/quote' }}
      />
    </>
  );
}
