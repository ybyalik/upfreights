import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, Ship, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'CIF Incoterms (Cost, Insurance and Freight) | Complete Guide',
  description: 'Complete guide to CIF (Cost, Insurance and Freight) Incoterms. Learn seller and buyer responsibilities, insurance requirements, and when to use CIF for maritime shipping.',
  alternates: {
    canonical: '/incoterms/cif',
  },
  openGraph: {
    title: 'CIF Incoterms (Cost, Insurance and Freight) | UpFreights',
    description: 'Complete guide to CIF Incoterms. Seller pays freight and insurance to destination port, but risk transfers at origin.',
  },
};

const sellerResponsibilities = [
  { task: 'Deliver goods on board vessel at origin port', included: true },
  { task: 'Export packaging and labeling', included: true },
  { task: 'Export customs clearance and documentation', included: true },
  { task: 'Ocean freight to destination port', included: true },
  { task: 'Marine insurance (110% of invoice value)', included: true },
  { task: 'Provide bill of lading and insurance certificate', included: true },
  { task: 'Unloading at destination port', included: false },
  { task: 'Import customs clearance', included: false },
];

const buyerResponsibilities = [
  { task: 'Accept risk from ship\'s rail at origin', included: true },
  { task: 'Unloading charges at destination port', included: true },
  { task: 'Import customs clearance and duties', included: true },
  { task: 'Terminal handling at destination', included: true },
  { task: 'Inland transport from destination port', included: true },
  { task: 'Additional insurance if desired', included: true },
  { task: 'Ocean freight payment', included: false },
  { task: 'Basic marine insurance', included: false },
];

const costBreakdown = [
  { item: 'Product Cost', seller: true, buyer: false },
  { item: 'Export Packaging', seller: true, buyer: false },
  { item: 'Inland Transport to Origin Port', seller: true, buyer: false },
  { item: 'Export Clearance & Documentation', seller: true, buyer: false },
  { item: 'Loading onto Vessel', seller: true, buyer: false },
  { item: 'Ocean Freight', seller: true, buyer: false },
  { item: 'Marine Insurance (110%)', seller: true, buyer: false },
  { item: 'Unloading at Destination', seller: false, buyer: true },
  { item: 'Terminal Handling (Destination)', seller: false, buyer: true },
  { item: 'Import Clearance & Duties', seller: false, buyer: true },
  { item: 'Inland Transport to Final Destination', seller: false, buyer: true },
];

const comparisonData = [
  { aspect: 'Freight Payment', cif: 'Seller', cfr: 'Seller', fob: 'Buyer', ddp: 'Seller' },
  { aspect: 'Insurance', cif: 'Seller (110%)', cfr: 'Buyer', fob: 'Buyer', ddp: 'Seller' },
  { aspect: 'Risk Transfer', cif: 'Ship\'s rail (origin)', cfr: 'Ship\'s rail (origin)', fob: 'Ship\'s rail (origin)', ddp: 'Buyer\'s premises' },
  { aspect: 'Import Clearance', cif: 'Buyer', cfr: 'Buyer', fob: 'Buyer', ddp: 'Seller' },
  { aspect: 'Transport Mode', cif: 'Sea only', cfr: 'Sea only', fob: 'Sea only', ddp: 'Any mode' },
  { aspect: 'Seller Obligation', cif: 'High', cfr: 'Medium-High', fob: 'Medium', ddp: 'Maximum' },
];

const advantages = [
  {
    title: 'Simplified Pricing for Buyers',
    description: 'Single invoice covers goods, freight, and insurance. Buyers receive predictable all-inclusive pricing for easier budgeting.',
  },
  {
    title: 'Guaranteed Insurance Coverage',
    description: 'Marine insurance at 110% of invoice value is automatically included. Buyers are protected without arranging separate policies.',
  },
  {
    title: 'Seller Controls Shipping',
    description: 'Sellers leverage established carrier relationships for better freight rates. Volume discounts can result in competitive CIF pricing.',
  },
  {
    title: 'Ideal for Inexperienced Importers',
    description: 'First-time importers benefit from sellers handling complex logistics, insurance procurement, and export documentation.',
  },
];

const disadvantages = [
  {
    title: 'Limited Insurance Coverage',
    description: 'Institute Cargo Clauses (C) provides only basic protection. Excludes theft, contamination, and temperature damage.',
  },
  {
    title: 'Early Risk Transfer',
    description: 'Risk transfers at origin port despite seller paying freight and insurance. Buyers bear loss during entire ocean voyage.',
  },
  {
    title: 'Hidden Cost Markups',
    description: 'Sellers typically add 5-15% markup on freight and insurance charges. Less transparency than FOB arrangements.',
  },
  {
    title: 'Limited Buyer Control',
    description: 'Buyers cannot select carriers or negotiate freight rates directly. No control over shipping arrangements.',
  },
];

const insuranceDetails = {
  included: [
    'Fire or explosion',
    'Vessel stranding, grounding, or sinking',
    'Overturning or derailment of land conveyance',
    'Collision with external objects',
    'General average sacrifice',
    'Jettison of cargo',
  ],
  excluded: [
    'Theft and pilferage',
    'Water damage from rain',
    'Contamination',
    'Temperature changes',
    'Rough handling',
    'War and strikes (require SRCC clauses)',
  ],
};

const commonMistakes = [
  {
    title: 'Underestimating Insurance Limitations',
    description: 'Institute Cargo Clauses (C) excludes theft, pilferage, contamination, and temperature damage. Purchase additional coverage for comprehensive protection.',
  },
  {
    title: 'Misunderstanding Risk Transfer',
    description: 'Risk transfers when cargo crosses the ship\'s rail at the loading port—not at destination. Document loading time and photograph container conditions.',
  },
  {
    title: 'Overlooking Hidden Markups',
    description: 'Sellers include 5-15% markups on freight and insurance. Request itemized breakdowns and compare with market indices like SCFI.',
  },
  {
    title: 'Failing to Verify Documentation',
    description: 'Mismatched cargo descriptions, incorrect HS codes, and missing endorsements cause customs delays. Review all documents within 24 hours of receipt.',
  },
  {
    title: 'Neglecting Import Preparations',
    description: 'Delays in customs clearance generate $50-200/day storage charges. Begin clearance procedures 5-7 days before vessel arrival.',
  },
];

const faqs = [
  {
    question: 'What does CIF mean in shipping?',
    answer: 'CIF stands for Cost, Insurance, and Freight. It\'s an Incoterm for sea and inland waterway shipping where the seller pays for goods, marine insurance (110% of invoice value), and freight to the buyer\'s destination port. Risk transfers to the buyer when goods cross the ship\'s rail at the origin port.',
  },
  {
    question: 'Who pays for insurance under CIF terms?',
    answer: 'The seller pays for marine insurance under CIF terms. They must provide coverage at 110% of the invoice value under Institute Cargo Clauses (C) or equivalent. This basic coverage protects against major risks but excludes theft, contamination, and temperature damage.',
  },
  {
    question: 'When does risk transfer from seller to buyer in CIF?',
    answer: 'Risk transfers the moment cargo crosses the ship\'s rail at the port of loading (origin port). Despite the seller paying freight and insurance to destination, buyers bear the risk of loss or damage during the entire ocean voyage.',
  },
  {
    question: 'How is CIF different from CFR?',
    answer: 'The main difference is insurance. CIF includes marine insurance paid by the seller at 110% of invoice value. CFR (Cost and Freight) covers only goods and freight—buyers must arrange their own insurance. Both terms transfer risk when goods cross the ship\'s rail at origin.',
  },
  {
    question: 'How is CIF different from FOB?',
    answer: 'Under CIF, sellers pay freight and insurance to the destination port. Under FOB (Free On Board), buyers arrange and pay for ocean freight and insurance themselves. Risk transfers at the same point (ship\'s rail at origin) under both terms.',
  },
  {
    question: 'Should I purchase additional insurance beyond CIF coverage?',
    answer: 'Yes, for high-value or sensitive cargo. CIF provides only basic Institute Cargo Clauses (C) coverage. Consider upgrading to Institute Cargo Clauses (A) for "all risks" protection including theft, water damage, and handling mishaps. Additional coverage typically costs 0.2-0.5% of cargo value.',
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

export default function CIFIncotermsPage() {
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
              <span>CIF</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              CIF Incoterms (Cost, Insurance and Freight)
            </h1>
            <p className="text-lg text-white/80 mb-6 max-w-3xl">
              CIF is one of the most widely used Incoterms in global maritime trade. The seller pays for goods, freight, and marine insurance to the destination port. Risk transfers to the buyer at the origin port when goods are loaded on board the vessel.
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
                <span className="text-white/60 text-sm">Insurance</span>
                <p className="text-white font-semibold">110% Included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is CIF Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              What Are CIF Incoterms?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                CIF (Cost, Insurance and Freight) represents one of 11 Incoterms established by the International Chamber of Commerce (ICC) for global trade transactions. This Incoterm applies exclusively to sea and inland waterway transport where the seller delivers goods to the buyer&apos;s designated port.
              </p>
              <p>
                Under CIF terms, the seller covers three primary components: the cost of goods plus export clearance, marine insurance at 110% of the goods&apos; value, and freight charges to the named destination port.
              </p>
              <p>
                The seller fulfills their obligation when goods cross the ship&apos;s rail at the origin port. Risk transfers to the buyer at this exact moment, even though the seller pays for freight and insurance to the destination port. This creates a unique situation where cost responsibility extends further than risk responsibility.
              </p>
            </div>

            <div className="mt-8 p-6 bg-ocean/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-6 w-6 text-ocean" />
                <h3 className="font-semibold text-foreground">CIF Key Components</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  <strong>Cost:</strong> Purchase price of goods plus export clearance
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  <strong>Insurance:</strong> Marine insurance at 110% of invoice value
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  <strong>Freight:</strong> Transportation charges to named destination port
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  <strong>Risk Transfer:</strong> At ship&apos;s rail, origin port
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-ocean flex-shrink-0" />
                  <strong>Transport Mode:</strong> Sea and inland waterway only
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
              Key Responsibilities Under CIF Terms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Seller Responsibilities */}
              <Card className="border-ocean/50 bg-ocean/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Seller&apos;s Obligations</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Seller pays freight and insurance to destination, but risk ends when goods are loaded at origin.
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
                    Buyer assumes risk at origin port and handles import clearance at destination.
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
              CIF Cost Distribution
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Under CIF, the seller covers costs through ocean freight and insurance. Buyers pay for destination handling and import clearance.
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

      {/* Insurance Coverage Details */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              CIF Insurance Coverage Details
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-500/50 bg-green-50/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="font-bold text-foreground">Covered by Institute Clauses (C)</h3>
                  </div>
                  <ul className="space-y-2">
                    {insuranceDetails.included.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-500/50 bg-red-50/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                      <XCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <h3 className="font-bold text-foreground">NOT Covered (Exclusions)</h3>
                  </div>
                  <ul className="space-y-2">
                    {insuranceDetails.excluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Consider Additional Coverage</h4>
                  <p className="text-sm text-muted-foreground">
                    For high-value or sensitive cargo, upgrade to Institute Cargo Clauses (A) for &quot;all risks&quot; protection.
                    This comprehensive coverage includes theft, water damage, and handling mishaps.
                    Additional cost is typically 0.2-0.5% of cargo value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages and Disadvantages */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Advantages and Disadvantages of CIF
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

      {/* CIF vs Other Incoterms */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              CIF vs Other Incoterms
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-ocean text-white">
                    <th className="px-4 py-4 text-left font-semibold">Aspect</th>
                    <th className="px-4 py-4 text-left font-semibold">CIF</th>
                    <th className="px-4 py-4 text-left font-semibold">CFR</th>
                    <th className="px-4 py-4 text-left font-semibold">FOB</th>
                    <th className="px-4 py-4 text-left font-semibold">DDP</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={row.aspect}
                      className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
                    >
                      <td className="px-4 py-4 font-medium text-foreground">{row.aspect}</td>
                      <td className="px-4 py-4 text-ocean font-semibold">{row.cif}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.cfr}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.fob}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.ddp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">CIF vs CFR</h3>
                  <p className="text-sm text-muted-foreground">
                    The only difference is insurance. CIF includes marine insurance at 110% of invoice value. CFR covers only goods and freight—buyers must arrange their own insurance.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">CIF vs FOB</h3>
                  <p className="text-sm text-muted-foreground">
                    Under CIF, sellers pay freight and insurance. Under FOB, buyers arrange and pay for ocean freight and insurance. Risk transfers at the same point under both terms.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">CIF vs DDP</h3>
                  <p className="text-sm text-muted-foreground">
                    DDP transfers risk at buyer&apos;s premises and includes import duties. CIF transfers risk at origin and excludes import clearance. DDP provides maximum seller obligation.
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

      {/* When to Use CIF */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              When to Use CIF Incoterms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Ideal Scenarios for CIF
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">First-time importers lacking shipping expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyers preferring all-inclusive, predictable pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Volatile freight rate periods when sellers have better rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Letter of credit transactions requiring insurance documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Shipments to developing countries with limited port infrastructure</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Ship className="h-5 w-5 text-ocean" />
                  Industries Using CIF
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Manufacturing: machinery and equipment (35% of CIF trades)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Agricultural commodities: grain, soybeans, sugar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Textile and apparel: 40% of ocean shipments use CIF</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Chemicals: petrochemical and pharmaceutical raw materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-ocean flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Steel and metals: construction materials and project cargo</span>
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
              Common Mistakes to Avoid with CIF
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
        title="Need Help with CIF Shipments?"
        description="Our freight experts can help you navigate CIF terms, arrange competitive ocean freight rates, and ensure proper insurance coverage for your cargo."
        primaryAction={{ label: 'Get Quote', href: '/quote' }}
      />
    </>
  );
}
