import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'CIP Incoterms (Carriage and Insurance Paid To) | Complete Guide',
  description: 'Complete guide to CIP (Carriage and Insurance Paid To) Incoterms. Learn seller and buyer responsibilities, insurance requirements, and when to use CIP in international trade.',
  alternates: {
    canonical: '/incoterms/cip',
  },
  openGraph: {
    title: 'CIP Incoterms (Carriage and Insurance Paid To) | UpFreights',
    description: 'Complete guide to CIP Incoterms. Learn seller and buyer responsibilities, insurance requirements, and risk transfer.',
  },
};

const sellerResponsibilities = [
  { task: 'Arrange and pay for main carriage to destination', included: true },
  { task: 'Obtain insurance covering 110% of contract value', included: true },
  { task: 'Provide Institute Cargo Clauses (A) coverage', included: true },
  { task: 'Handle export customs clearance', included: true },
  { task: 'Deliver goods to first carrier', included: true },
  { task: 'Provide transport and insurance documents', included: true },
  { task: 'Notify buyer of delivery to carrier', included: true },
  { task: 'Import clearance at destination', included: false },
  { task: 'Unloading at destination', included: false },
];

const buyerResponsibilities = [
  { task: 'Accept risk from first carrier handover', included: true },
  { task: 'Handle import customs clearance', included: true },
  { task: 'Pay import duties and taxes', included: true },
  { task: 'Arrange unloading at destination', included: true },
  { task: 'Final delivery from named destination', included: true },
  { task: 'Additional insurance if required', included: true },
  { task: 'Export clearance', included: false },
  { task: 'Main carriage costs', included: false },
  { task: 'Basic insurance coverage', included: false },
];

const comparisonData = [
  { aspect: 'Transport Modes', cip: 'All modes', cif: 'Sea/inland waterway only', cpt: 'All modes', dap: 'All modes' },
  { aspect: 'Insurance Level', cip: '110% (Clause A)', cif: '110% (Clause C)', cpt: 'None required', dap: 'None required' },
  { aspect: 'Risk Transfer', cip: 'First carrier', cif: 'Ship\'s rail', cpt: 'First carrier', dap: 'At destination' },
  { aspect: 'Delivery Point', cip: 'Named destination', cif: 'Port of destination', cpt: 'Named destination', dap: 'Named destination' },
  { aspect: 'Insurance Beneficiary', cip: 'Buyer', cif: 'Buyer', cpt: 'N/A', dap: 'N/A' },
];

const insuranceCoverage = [
  { type: 'Physical Damage', description: 'Protection during handling and transport' },
  { type: 'Theft and Pilferage', description: 'Coverage against theft during transit' },
  { type: 'Natural Disasters', description: 'Weather-related incidents and acts of God' },
  { type: 'General Average', description: 'Contribution to general average and salvage charges' },
  { type: 'War and Strikes', description: 'If included in the insurance policy terms' },
];

const additionalInsurance = [
  { coverage: 'Consequential Loss', purpose: 'Covers indirect losses from delays', costAddition: '5-10% of base premium' },
  { coverage: 'Temperature Control', purpose: 'Protects perishable goods', costAddition: '15-20% of base premium' },
  { coverage: 'Rejection Insurance', purpose: 'Covers buyer rejection risks', costAddition: '10-15% of base premium' },
  { coverage: 'Extended Storage', purpose: 'Protects during warehouse delays', costAddition: '8-12% of base premium' },
];

const advantages = [
  {
    title: 'Comprehensive Insurance Protection',
    description: 'Buyers receive 110% contract value coverage with Institute Cargo Clauses (A), the broadest protection available without arranging insurance themselves.',
  },
  {
    title: 'Simplified Logistics for Buyers',
    description: 'Sellers manage entire transportation chain and insurance procurement, allowing buyers to focus on core business activities.',
  },
  {
    title: 'Cost Transparency',
    description: 'Single-price quotations include goods, transportation, and insurance, making budget planning straightforward with predictable costs.',
  },
  {
    title: 'Multimodal Flexibility',
    description: 'CIP applies to all transport modes—sea, air, road, rail, and combinations—unlike CIF which only covers maritime transport.',
  },
];

const disadvantages = [
  {
    title: 'Limited Logistics Control for Buyers',
    description: 'Buyers sacrifice direct oversight of carrier selection and routing decisions, depending entirely on seller\'s choices.',
  },
  {
    title: 'Early Risk Transfer',
    description: 'Risk transfers at first carrier handover even though seller pays for transport. Damage during transit becomes buyer\'s responsibility.',
  },
  {
    title: 'Insurance Claim Complexity',
    description: 'Disputes after risk transfer require coordination between multiple parties, potentially delaying settlements by 30-60 days.',
  },
  {
    title: 'Currency Exchange Risks',
    description: 'Transportation and insurance cost fluctuations can impact profitability by 2-5% on international transactions.',
  },
];

const commonMistakes = [
  {
    title: 'Misunderstanding Risk Transfer Points',
    description: 'Many sellers incorrectly assume risk remains with them until the named destination. Risk transfers when goods reach the first carrier, not the final destination.',
  },
  {
    title: 'Inadequate Insurance Documentation',
    description: 'Failure to deliver insurance certificates to buyers before cargo handover creates problems during claims processing. Always name the buyer as beneficiary explicitly.',
  },
  {
    title: 'Incorrect Cost Calculations',
    description: 'Sellers often underestimate total CIP obligations. Include terminal handling charges, documentation fees, insurance premiums (0.5-2% of shipment value), and carrier surcharges.',
  },
  {
    title: 'Ambiguous Destination Naming',
    description: 'Vague descriptions like "New York area" create disputes. Specify exact addresses: "JFK Airport, Terminal 4" or "HHLA Container Terminal Altenwerder, Hamburg."',
  },
  {
    title: 'Mixing CIP with Other Incoterms',
    description: 'You cannot combine CIP obligations with terms from other Incoterms. Each Incoterm stands alone—use CPT if you don\'t want insurance, or DAP for extended seller risk.',
  },
];

const faqs = [
  {
    question: 'What does CIP mean in shipping terms?',
    answer: 'CIP stands for "Carriage and Insurance Paid To" and is one of the 11 Incoterms® 2020 rules. Under CIP, the seller pays for transportation and insurance to deliver goods to a named destination. The seller must obtain comprehensive insurance coverage equal to 110% of the contract value. Risk transfers to the buyer when goods are handed to the first carrier, even though the seller continues paying transportation costs.',
  },
  {
    question: 'What\'s the difference between CIP and CIF?',
    answer: 'CIP applies to all transport modes while CIF only covers sea and inland waterway transport. CIP requires comprehensive insurance coverage (Institute Cargo Clauses A) at 110% of contract value, whereas CIF offers more limited coverage (Clause C). Risk transfer occurs at the first carrier for CIP but at the ship\'s rail for CIF. CIP provides greater flexibility for containerized cargo, air freight, and road transport.',
  },
  {
    question: 'Who pays for insurance under CIP terms?',
    answer: 'The seller pays for and arranges insurance under CIP terms. They must secure comprehensive coverage equal to 110% of the contract value, protecting against physical loss or damage during transit. The insurance must name the buyer as beneficiary and cover risks including theft, natural disasters, and war. The seller delivers insurance documents to the buyer before or when handing goods to the first carrier.',
  },
  {
    question: 'When does risk transfer from seller to buyer in CIP?',
    answer: 'Risk transfers from seller to buyer the moment goods are handed over to the first carrier. This happens even though the seller continues paying transportation and insurance costs to the named destination. After this point, the buyer assumes responsibility for any loss or damage. Understanding this risk transfer point is crucial for managing liabilities during international shipping.',
  },
  {
    question: 'When should I use CIP Incoterms?',
    answer: 'CIP works best for high-value shipments requiring multimodal transportation, containerized cargo, and time-sensitive deliveries. It\'s ideal when buyers want minimal logistics involvement and comprehensive insurance protection. Industries like technology, pharmaceuticals, automotive parts, textiles, and machinery manufacturing commonly use CIP for goods valued between $100,000 and $10 million per shipment.',
  },
  {
    question: 'What insurance coverage is required under CIP?',
    answer: 'CIP requires sellers to provide Institute Cargo Clauses (A) or equivalent all-risk coverage for 110% of the contract value. This covers physical damage during handling and transport, theft and pilferage, natural disasters, and general average charges. War and strikes coverage may be included. Buyers can arrange additional coverage for consequential losses, temperature control, or extended storage if needed.',
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

export default function CIPIncotermsPage() {
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
              <span>CIP</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              CIP Incoterms (Carriage and Insurance Paid To)
            </h1>
            <p className="text-lg text-white/80 mb-6 max-w-3xl">
              CIP simplifies global transactions by clearly outlining who handles transportation costs and insurance coverage. Under this arrangement, the seller pays for carriage and insurance to deliver goods to a carrier or designated location, making CIP attractive for balanced risk management.
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
                <span className="text-white/60 text-sm">Insurance</span>
                <p className="text-white font-semibold">110% Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is CIP Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              What Are CIP Incoterms?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                CIP (Carriage and Insurance Paid To) represents one of the 11 Incoterms® 2020 rules published by the International Chamber of Commerce (ICC). Under CIP terms, the seller arranges and pays for both transportation and insurance coverage to deliver goods to a carrier or agreed location.
              </p>
              <p>
                The seller fulfills their delivery obligation when they hand over the goods to the first carrier, not when the goods reach the destination. Risk transfers from seller to buyer at this point of delivery, even though the seller continues paying for transportation and insurance.
              </p>
              <p>
                CIP applies to all transport modes including multimodal shipments. This flexibility makes CIP suitable for containerized cargo, air freight, road transport, and any combination of transportation methods.
              </p>
            </div>

            <div className="mt-8 p-6 bg-orange/10 rounded-xl">
              <h3 className="font-semibold text-foreground mb-3">Key Components of CIP:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  <strong>Transportation Costs:</strong>&nbsp;Seller pays all freight charges to named destination
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  <strong>Insurance Coverage:</strong>&nbsp;Seller purchases cargo insurance covering 110% of contract value
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  <strong>Risk Transfer Point:</strong>&nbsp;Risk passes when goods reach the first carrier
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  <strong>Named Place:</strong>&nbsp;Specific destination where seller&apos;s cost obligations end
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Requirements Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="h-8 w-8 text-orange" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Insurance Requirements in CIP
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Minimum Coverage (110% of Contract Value)</h3>
                <p className="text-muted-foreground mb-6">
                  CIP requires sellers to provide Institute Cargo Clauses (A) or equivalent all-risk coverage. The policy names the buyer as beneficiary and remains valid throughout the entire journey.
                </p>
                <div className="space-y-3">
                  {insuranceCoverage.map((item) => (
                    <div key={item.type} className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border/50">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-foreground">{item.type}</span>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Additional Insurance Options</h3>
                <p className="text-muted-foreground mb-6">
                  Buyers may require coverage beyond the minimum 110% for high-value cargo, temperature-sensitive goods, or shipments through high-risk regions.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="px-3 py-3 text-left font-semibold text-sm">Coverage Type</th>
                        <th className="px-3 py-3 text-left font-semibold text-sm">Cost Addition</th>
                      </tr>
                    </thead>
                    <tbody>
                      {additionalInsurance.map((item, index) => (
                        <tr
                          key={item.coverage}
                          className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
                        >
                          <td className="px-3 py-3">
                            <span className="font-medium text-foreground text-sm">{item.coverage}</span>
                            <p className="text-xs text-muted-foreground">{item.purpose}</p>
                          </td>
                          <td className="px-3 py-3 text-orange font-semibold text-sm">{item.costAddition}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Key Responsibilities Under CIP Terms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Seller Responsibilities */}
              <Card className="border-orange/50 bg-orange/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Seller&apos;s Obligations</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    The seller arranges transportation, provides comprehensive insurance, handles export clearance, and delivers goods to the first carrier.
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
                    The buyer bears risk from first carrier onwards, handles import formalities, and arranges final delivery from the named destination.
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
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Advantages and Disadvantages of CIP
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

      {/* CIP vs Other Incoterms */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              CIP vs Other Incoterms
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left font-semibold">Aspect</th>
                    <th className="px-4 py-4 text-left font-semibold">CIP</th>
                    <th className="px-4 py-4 text-left font-semibold">CIF</th>
                    <th className="px-4 py-4 text-left font-semibold">CPT</th>
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
                      <td className="px-4 py-4 text-orange font-semibold">{row.cip}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.cif}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.cpt}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.dap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">CIP vs CIF</h3>
                  <p className="text-sm text-muted-foreground">
                    Both require seller-provided insurance, but CIP applies to all transport modes while CIF is sea/inland waterway only. CIP mandates comprehensive Institute Cargo Clauses (A) coverage; CIF uses more limited Clause (C). CIP offers greater flexibility for containerized and multimodal shipments.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">CIP vs CPT</h3>
                  <p className="text-sm text-muted-foreground">
                    CIP builds upon CPT by adding mandatory insurance coverage. Both share identical risk transfer and cost allocation structures. The insurance component in CIP typically adds 0.5-2% to total shipping costs. Use CPT when buyers prefer arranging their own insurance.
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

      {/* When to Use CIP */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              When to Use CIP Incoterms
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Ideal Scenarios for CIP
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">High-value shipments like electronics, machinery, or pharmaceuticals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Multimodal transportation requiring seamless carrier coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyers lacking logistics expertise who want insurance included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Time-sensitive deliveries where seller has established carrier relationships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Containerized cargo, air freight, or road transport shipments</span>
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
                    <span className="text-muted-foreground">Buyer wants to retain risk until destination (use DAP or DDP)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Sea-only shipments where CIF may be more standard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyer prefers arranging own insurance coverage (use CPT)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Low-value goods where insurance cost outweighs benefit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyer wants to select their own carriers (use FCA)</span>
                  </li>
                </ul>
              </div>
            </div>

            <Card className="border-border/50 bg-background">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-3">Industries Commonly Using CIP</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <p className="font-semibold text-orange">Technology</p>
                    <p className="text-xs text-muted-foreground">35% of CIP transactions</p>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <p className="font-semibold text-orange">Pharmaceuticals</p>
                    <p className="text-xs text-muted-foreground">70% vaccine exports</p>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <p className="font-semibold text-orange">Automotive</p>
                    <p className="text-xs text-muted-foreground">60% parts suppliers</p>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <p className="font-semibold text-orange">Textiles</p>
                    <p className="text-xs text-muted-foreground">45% Asian suppliers</p>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <p className="font-semibold text-orange">Machinery</p>
                    <p className="text-xs text-muted-foreground">$250K+ equipment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Common Mistakes to Avoid with CIP
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
        title="Need Help with CIP Shipments?"
        description="Our freight experts can help you navigate CIP terms and manage your international shipments from China with comprehensive insurance coverage. Get a quote today."
        primaryAction={{ label: 'Get Quote', href: '/quote' }}
      />
    </>
  );
}
