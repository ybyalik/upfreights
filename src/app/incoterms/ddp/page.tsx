import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, Package } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'DDP Incoterms (Delivered Duty Paid) | Complete Guide to DDP Terms',
  description: 'Complete guide to DDP (Delivered Duty Paid) Incoterms. Learn seller and buyer responsibilities, advantages, risks, and when to use DDP in international trade.',
  alternates: {
    canonical: '/incoterms/ddp',
  },
  openGraph: {
    title: 'DDP Incoterms (Delivered Duty Paid) | UpFreights',
    description: 'Complete guide to DDP Incoterms. Maximum seller obligation with all costs and duties included.',
  },
};

const sellerResponsibilities = [
  { task: 'Transportation from origin to destination', included: true },
  { task: 'Export clearance, licenses and documentation', included: true },
  { task: 'Import clearance at destination country', included: true },
  { task: 'Payment of all import duties and taxes', included: true },
  { task: 'Risk coverage until goods reach premises', included: true },
  { task: 'Insurance costs throughout entire journey', included: true },
  { task: 'Final delivery to buyer\'s location', included: true },
  { task: 'Unloading at destination', included: false },
];

const buyerResponsibilities = [
  { task: 'Provide accurate delivery address', included: true },
  { task: 'Receive goods at designated location', included: true },
  { task: 'Unload goods from delivery vehicle', included: true },
  { task: 'Inspect goods for visible damage', included: true },
  { task: 'Sign delivery receipt', included: true },
  { task: 'Export or import clearance', included: false },
  { task: 'Transportation costs', included: false },
  { task: 'Duties and taxes', included: false },
];

const costBreakdown = [
  { item: 'Product Cost', seller: true, buyer: false },
  { item: 'Export Packaging', seller: true, buyer: false },
  { item: 'Export Clearance & Documentation', seller: true, buyer: false },
  { item: 'Transportation/Freight', seller: true, buyer: false },
  { item: 'Insurance (full journey)', seller: true, buyer: false },
  { item: 'Import Clearance', seller: true, buyer: false },
  { item: 'Import Duties (2-35%)', seller: true, buyer: false },
  { item: 'VAT/GST (5-27%)', seller: true, buyer: false },
  { item: 'Final Delivery', seller: true, buyer: false },
  { item: 'Unloading at Premises', seller: false, buyer: true },
];

const comparisonData = [
  { aspect: 'Export Clearance', ddp: 'Seller', dap: 'Seller', cif: 'Seller', fob: 'Seller' },
  { aspect: 'Main Transportation', ddp: 'Seller', dap: 'Seller', cif: 'Seller', fob: 'Buyer' },
  { aspect: 'Import Clearance', ddp: 'Seller', dap: 'Buyer', cif: 'Buyer', fob: 'Buyer' },
  { aspect: 'Import Duties/Taxes', ddp: 'Seller', dap: 'Buyer', cif: 'Buyer', fob: 'Buyer' },
  { aspect: 'Risk Transfer Point', ddp: 'Buyer\'s premises', dap: 'Buyer\'s premises', cif: 'Ship\'s rail', fob: 'Ship\'s rail' },
  { aspect: 'Seller Obligation', ddp: 'Maximum', dap: 'High', cif: 'Medium', fob: 'Minimum' },
];

const advantages = [
  {
    title: 'Simplified Import Process',
    description: 'Buyers receive goods at their location without handling customs procedures, documentation, or regulatory compliance.',
  },
  {
    title: 'Predictable Total Landed Cost',
    description: 'All-inclusive pricing eliminates surprise charges. Buyers know the exact total amount before placing orders.',
  },
  {
    title: 'Reduced Administrative Burden',
    description: 'Sellers handle all paperwork, customs brokers, and regulatory compliance. Buyers can focus on core business.',
  },
  {
    title: 'Enhanced Cash Flow Management',
    description: 'Single-payment structure simplifies accounting and eliminates managing multiple payments to various providers.',
  },
];

const disadvantages = [
  {
    title: 'Financial Risk for Sellers',
    description: 'Import duties (0-25%) and VAT (5-27%) can significantly impact margins. Currency fluctuations add uncertainty.',
  },
  {
    title: 'Complex Regulations',
    description: 'Sellers must navigate foreign customs regulations that change frequently. Documentation errors cause costly delays.',
  },
  {
    title: 'Hidden Costs',
    description: 'Terminal handling ($150-400), broker fees ($200-500), and inspection costs ($300-1,000) can erode profits.',
  },
  {
    title: 'Limited Delivery Control',
    description: 'Local carriers in destination countries may not meet service standards, creating problems beyond seller control.',
  },
];

const commonMistakes = [
  {
    title: 'Underestimating Tax Liability',
    description: 'Import duties vary from 0% to 25% depending on product classification. VAT rates range from 5% to 27%. Calculate total landed costs including all applicable taxes before quoting DDP prices.',
  },
  {
    title: 'Documentation Errors',
    description: 'Incorrect or incomplete documentation causes 40% of customs delays. Submit accurate commercial invoices, certificates of origin, and import licenses 72 hours before arrival.',
  },
  {
    title: 'Ignoring Local Regulations',
    description: 'Each country maintains unique import restrictions. Non-compliance results in shipment rejection and return costs averaging $2,500 per container.',
  },
  {
    title: 'Poor Cost Calculation',
    description: 'Sellers lose 15-20% profit margins through inadequate DDP pricing. Build 25% buffer into quotes to cover unexpected expenses like terminal handling and storage fees.',
  },
  {
    title: 'Inadequate Insurance Coverage',
    description: 'Standard cargo insurance excludes many DDP-specific risks. Comprehensive coverage requires all-risk, duty insurance, delay insurance, and political risk coverage.',
  },
];

const faqs = [
  {
    question: 'What does DDP mean in shipping terms?',
    answer: 'DDP stands for Delivered Duty Paid, an Incoterm where the seller assumes all responsibilities, costs, and risks for delivering goods to the buyer\'s location. This includes transportation, insurance, export and import clearance, customs duties, and taxes. The seller handles everything until the goods arrive at the buyer\'s designated premises.',
  },
  {
    question: 'Who pays for customs duties under DDP?',
    answer: 'Under DDP terms, the seller pays all customs duties, taxes, and import fees. This is a key feature that distinguishes DDP from other Incoterms. The seller must handle the entire customs clearance process in both the export and import countries, covering all associated costs.',
  },
  {
    question: 'What\'s the difference between DDP and DAP?',
    answer: 'The main difference is import clearance responsibility. Under DDP, sellers handle import clearance and pay all duties and taxes. With DAP (Delivered at Place), sellers deliver goods to the destination but buyers must manage import clearance and pay duties themselves.',
  },
  {
    question: 'When should I use DDP Incoterms?',
    answer: 'Use DDP when buyers want a hassle-free import experience, particularly for e-commerce, high-value goods, or time-sensitive deliveries. It\'s ideal for businesses entering new markets, dealing with complex import procedures, or when buyers lack import expertise.',
  },
  {
    question: 'What are the main risks for sellers using DDP?',
    answer: 'Sellers face substantial financial risks including unpredictable import duties (up to 25-30% of shipment value), currency fluctuations, and hidden costs. They must navigate complex international regulations, manage extensive documentation, and handle potential customs delays.',
  },
  {
    question: 'Can DDP be used for all types of transportation?',
    answer: 'Yes, DDP applies to all modes of transport including sea, air, road, and rail freight. It\'s also suitable for multimodal transportation where goods travel using multiple methods, making DDP versatile for various shipping needs.',
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

export default function DDPIncotermsPage() {
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
              <span>DDP</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              DDP Incoterms (Delivered Duty Paid)
            </h1>
            <p className="text-lg text-white/80 mb-6 max-w-3xl">
              DDP places maximum responsibility on the seller, making it ideal for buyers who want a hassle-free import experience. Under this arrangement, the seller handles everything from shipping and insurance to customs clearance and import duties at the destination country.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Seller Obligation</span>
                <p className="text-white font-semibold">Maximum</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Transport Mode</span>
                <p className="text-white font-semibold">Any Mode</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Duties & Taxes</span>
                <p className="text-white font-semibold">Seller Pays</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is DDP Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              What Are DDP Incoterms?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                DDP (Delivered Duty Paid) Incoterms represent the maximum obligation for sellers in international trade contracts. The seller delivers goods to your specified destination and covers all transportation costs, export and import duties, insurance, and any other expenses incurred during delivery.
              </p>
              <p>
                Under DDP Incoterms 2020, the seller bears all risks until goods arrive at your premises—whether that&apos;s your warehouse, distribution center, or retail facility. DDP applies to any mode of transport including sea freight, air cargo, road transport, and rail delivery.
              </p>
              <p>
                Risk transfers from seller to buyer at the moment of delivery at your designated location. The seller maintains responsibility for goods during loading, main transportation, customs procedures, and final mile delivery.
              </p>
            </div>

            <div className="mt-8 p-6 bg-orange/10 rounded-xl">
              <h3 className="font-semibold text-foreground mb-3">DDP Coverage Includes:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  All transportation arrangements from origin to your named destination
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Export clearance including licenses and documentation
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Import clearance at the destination country
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Payment of all duties and taxes in both countries
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Insurance costs throughout the entire journey
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
              Key Responsibilities Under DDP Terms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Seller Responsibilities */}
              <Card className="border-orange/50 bg-orange/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Seller&apos;s Obligations (Maximum)</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    The seller assumes complete responsibility for the entire shipping process including all duties and taxes.
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
                  <h3 className="text-xl font-bold text-foreground mb-4">Buyer&apos;s Obligations (Minimum)</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    The buyer&apos;s responsibilities are minimal—primarily receiving goods and providing accurate information.
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
              DDP Cost Breakdown
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Under DDP, the seller covers virtually all costs. Import duties can range from 2-35% and VAT from 5-27% depending on the product and destination country.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
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
              Advantages and Disadvantages of DDP
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Advantages */}
              <div>
                <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6" />
                  Advantages for Buyers
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
                  Challenges for Sellers
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

      {/* DDP vs Other Incoterms */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              DDP vs Other Incoterms
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left font-semibold">Aspect</th>
                    <th className="px-4 py-4 text-left font-semibold">DDP</th>
                    <th className="px-4 py-4 text-left font-semibold">DAP</th>
                    <th className="px-4 py-4 text-left font-semibold">CIF</th>
                    <th className="px-4 py-4 text-left font-semibold">FOB</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={row.aspect}
                      className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
                    >
                      <td className="px-4 py-4 font-medium text-foreground">{row.aspect}</td>
                      <td className="px-4 py-4 text-orange font-semibold">{row.ddp}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.dap}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.cif}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.fob}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">DDP vs DAP</h3>
                  <p className="text-sm text-muted-foreground">
                    DAP offers buyers more control over import procedures while reducing sellers&apos; administrative burden. Under DAP, buyers handle import clearance and pay duties. Choose DDP when buyers want completely hands-off importing.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">DDP vs CIF</h3>
                  <p className="text-sm text-muted-foreground">
                    CIF applies only to sea/waterway transport. Risk transfers at ship&apos;s rail, not at destination. CIF pricing is typically 15-20% lower than DDP as it excludes destination charges and import costs.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">DDP vs FOB</h3>
                  <p className="text-sm text-muted-foreground">
                    FOB represents the opposite end of seller obligation. FOB pricing is 30-40% lower than DDP. Large importers with logistics departments prefer FOB to leverage carrier relationships.
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

      {/* When to Use DDP */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              When to Use DDP Incoterms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Ideal Scenarios for DDP
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">E-commerce businesses selling directly to consumers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">High-value goods requiring enhanced security and accountability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Time-sensitive deliveries requiring streamlined processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Markets with complex import procedures (Brazil, India, Russia)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyers without import experience entering new markets</span>
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
                    <span className="text-muted-foreground">Buyer has preferential duty rates or established import procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Seller lacks expertise in destination country regulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyer wants to leverage existing logistics relationships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Low-value goods where DDP premium isn&apos;t justified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Destination has unpredictable duty rates or regulations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Common Mistakes to Avoid with DDP
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
        title="Need Help with DDP Shipments?"
        description="Our freight experts can help you navigate DDP terms and manage complete door-to-door delivery with all duties and taxes included. Get a quote today."
        primaryAction={{ label: 'Get Quote', href: '/quote' }}
      />
    </>
  );
}
