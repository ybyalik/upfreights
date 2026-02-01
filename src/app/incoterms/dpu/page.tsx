import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, Package, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'DPU Incoterms (Delivered at Place Unloaded) | Complete Guide',
  description: 'Complete guide to DPU (Delivered at Place Unloaded) Incoterms. Learn seller and buyer responsibilities, unloading obligations, and when to use DPU for international trade.',
  alternates: {
    canonical: '/incoterms/dpu',
  },
  openGraph: {
    title: 'DPU Incoterms (Delivered at Place Unloaded) | UpFreights',
    description: 'Complete guide to DPU Incoterms. Seller delivers and unloads goods at the named destination before risk transfers to buyer.',
  },
};

const sellerResponsibilities = [
  { task: 'Transport goods to the named destination', included: true },
  { task: 'Export packaging and labeling', included: true },
  { task: 'Export customs clearance and documentation', included: true },
  { task: 'All transportation costs to destination', included: true },
  { task: 'Unloading at destination (unique to DPU)', included: true },
  { task: 'Risk until goods are unloaded', included: true },
  { task: 'Import customs clearance', included: false },
  { task: 'Import duties and taxes', included: false },
];

const buyerResponsibilities = [
  { task: 'Accept goods once unloaded', included: true },
  { task: 'Import customs clearance', included: true },
  { task: 'Import duties and taxes', included: true },
  { task: 'Onward transportation from destination', included: true },
  { task: 'Provide import documentation to seller', included: true },
  { task: 'Arrange import licenses and permits', included: true },
  { task: 'Transportation to destination', included: false },
  { task: 'Unloading operations', included: false },
];

const costBreakdown = [
  { item: 'Product Cost', seller: true, buyer: false },
  { item: 'Export Packaging', seller: true, buyer: false },
  { item: 'Inland Transport to Port (Origin)', seller: true, buyer: false },
  { item: 'Export Clearance & Documentation', seller: true, buyer: false },
  { item: 'Main Carriage/Freight', seller: true, buyer: false },
  { item: 'Destination Terminal Charges', seller: true, buyer: false },
  { item: 'Unloading at Destination', seller: true, buyer: false },
  { item: 'Import Clearance & Documentation', seller: false, buyer: true },
  { item: 'Import Duties & Taxes', seller: false, buyer: true },
  { item: 'Onward Transportation', seller: false, buyer: true },
];

const comparisonData = [
  { aspect: 'Risk Transfer Point', dpu: 'After unloading', dap: 'Before unloading', ddp: 'Before unloading' },
  { aspect: 'Unloading Responsibility', dpu: 'Seller', dap: 'Buyer', ddp: 'Buyer' },
  { aspect: 'Import Clearance', dpu: 'Buyer', dap: 'Buyer', ddp: 'Seller' },
  { aspect: 'Import Duties', dpu: 'Buyer', dap: 'Buyer', ddp: 'Seller' },
  { aspect: 'Transport Mode', dpu: 'Any', dap: 'Any', ddp: 'Any' },
  { aspect: 'Seller Obligation Level', dpu: 'High', dap: 'High', ddp: 'Maximum' },
];

const advantages = [
  {
    title: 'Complete Delivery Control',
    description: 'Sellers control the entire transportation process from origin to unloading, optimizing routes and carrier selection for better freight rates.',
  },
  {
    title: 'Buyer Convenience',
    description: 'Buyers avoid investing in unloading equipment or specialized handling crews. Goods arrive ready for immediate use or storage.',
  },
  {
    title: 'Clear Risk Transfer',
    description: 'Risk transfers only after unloading completion, providing clear documentation and reducing disputes about cargo condition.',
  },
  {
    title: 'Simplified Buyer Operations',
    description: 'Buyers focus on import clearance and local distribution while sellers manage complex logistics and unloading operations.',
  },
];

const disadvantages = [
  {
    title: 'Extended Seller Liability',
    description: 'Sellers bear risk through unloading phase, including potential equipment failures or damage during unloading operations.',
  },
  {
    title: 'Variable Unloading Costs',
    description: 'Unloading expenses fluctuate 15-30% between destinations. Terminal handling and equipment rental costs vary significantly by location.',
  },
  {
    title: 'Coordination Complexity',
    description: 'Sellers must coordinate with local unloading crews at unfamiliar destinations, navigating language barriers and different business practices.',
  },
  {
    title: 'Reduced Buyer Control',
    description: 'Buyers depend on seller-arranged unloading services without direct oversight, creating risks for fragile or specialized goods.',
  },
];

const practicalExamples = [
  {
    title: 'Manufacturing Equipment',
    description: 'German CNC machinery delivered to Mexican automotive plant. Seller coordinates specialized crane unloading inside the production hall.',
  },
  {
    title: 'Agricultural Commodities',
    description: 'Brazilian soybeans shipped to Chinese processing facility. Seller manages discharge using pneumatic conveyor systems into buyer\'s silos.',
  },
  {
    title: 'Construction Materials',
    description: 'Italian marble blocks delivered to Dubai construction site. Seller supervises careful placement of each 4-ton block to prevent damage.',
  },
  {
    title: 'Wind Turbine Components',
    description: 'Danish wind farm equipment delivered to South African project site. Seller uses 500-ton mobile cranes for precise component placement.',
  },
];

const faqs = [
  {
    question: 'What is DPU Incoterm and when was it introduced?',
    answer: 'DPU (Delivered at Place Unloaded) is an Incoterm where sellers deliver goods to a specified destination and handle unloading. It replaced DAT (Delivered at Terminal) in 2020, expanding delivery location options beyond terminals. Under DPU, sellers have maximum responsibility for transportation, export clearance, and unloading operations.',
  },
  {
    question: 'When does risk transfer from seller to buyer under DPU?',
    answer: 'Risk transfers at the precise moment goods are unloaded at the designated destination. Sellers bear all transportation risks including damage, loss, or delays during transit and unloading operations. Buyers assume risk only after goods are placed on the ground or unloading platform.',
  },
  {
    question: 'How does DPU differ from DAP?',
    answer: 'The key difference is unloading responsibility. Under DPU, sellers must unload goods at the destination before risk transfers. Under DAP (Delivered at Place), risk transfers when goods arrive still loaded on the transport vehicle—buyers handle unloading. DPU extends seller liability through the entire unloading process.',
  },
  {
    question: 'How does DPU differ from DDP?',
    answer: 'DDP (Delivered Duty Paid) goes further than DPU by requiring sellers to handle import clearance, duties, and taxes. DPU excludes import formalities—buyers handle customs clearance. DDP represents maximum seller obligation while DPU offers comprehensive delivery without import responsibilities.',
  },
  {
    question: 'Which industries commonly use DPU?',
    answer: 'Construction, manufacturing, energy, agriculture, retail, and mining industries frequently use DPU. It\'s ideal for heavy machinery, project cargo, bulk commodities, and situations where buyers lack unloading equipment. Remote project sites and first-time importers particularly benefit from DPU\'s comprehensive delivery service.',
  },
  {
    question: 'Is insurance required under DPU terms?',
    answer: 'DPU doesn\'t mandate insurance coverage, leaving protection decisions to each party. Sellers typically purchase cargo insurance covering goods until unloading completion (usually 110% of cargo value). Buyers should consider gap insurance for post-unloading risks and coverage for import clearance delays.',
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

export default function DPUIncotermsPage() {
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
              <span>DPU</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              DPU Incoterms (Delivered at Place Unloaded)
            </h1>
            <p className="text-lg text-white/80 mb-6 max-w-3xl">
              DPU is unique among Incoterms as the only term requiring sellers to unload goods at the destination. Introduced in 2020 to replace DAT, DPU extends seller responsibility through the entire unloading process, making it ideal for buyers who want minimal logistical involvement.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Risk Transfer</span>
                <p className="text-white font-semibold">After Unloading</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Transport Mode</span>
                <p className="text-white font-semibold">Any Mode</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Unloading</span>
                <p className="text-white font-semibold">Seller&apos;s Duty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is DPU Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              What Are DPU Incoterms?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                DPU (Delivered at Place Unloaded) represents one of the 11 Incoterms 2020 rules that govern international trade transactions. The International Chamber of Commerce (ICC) introduced DPU in 2020 to replace the previous DAT (Delivered at Terminal) term, expanding delivery location options beyond terminals to any agreed place.
              </p>
              <p>
                Under DPU terms, sellers bear complete responsibility for arranging transportation to the agreed destination, covering all export clearance costs, and critically, unloading goods at the delivery point. Risk transfers to buyers only after goods are unloaded at the specified location.
              </p>
              <p>
                The delivery point can include warehouses, ports, airports, construction sites, or any accessible location agreed upon by both parties. This flexibility makes DPU particularly attractive for project cargo and specialized deliveries.
              </p>
            </div>

            <div className="mt-8 p-6 bg-orange/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Package className="h-6 w-6 text-orange" />
                <h3 className="font-semibold text-foreground">Key DPU Characteristics</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Risk Transfer: Occurs when goods are unloaded at destination
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Unloading: Seller&apos;s unique obligation under DPU
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Cost Division: Seller pays until unloading; buyer pays afterward
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Insurance: Not mandatory—each party decides coverage
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                  Transport Modes: Applicable to all transportation methods
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
              Key Responsibilities Under DPU Terms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Seller Responsibilities */}
              <Card className="border-orange/50 bg-orange/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Seller&apos;s Obligations</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Seller bears complete responsibility through unloading at the named destination.
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
                    Buyer assumes control once goods are unloaded, handling import formalities.
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
              DPU Cost Distribution
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Under DPU, sellers cover all costs through unloading at the destination. Buyers pay for import clearance, duties, and onward transportation.
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

      {/* Unique Unloading Obligation */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              DPU&apos;s Unique Unloading Obligation
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-orange/50 bg-orange/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center">
                      <Truck className="h-5 w-5 text-orange" />
                    </div>
                    <h3 className="font-bold text-foreground">What Makes DPU Unique</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    DPU is the only Incoterm requiring sellers to unload goods. This distinguishes it from all other terms:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange flex-shrink-0 mt-0.5" />
                      Sellers coordinate with terminal operators or warehouses
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange flex-shrink-0 mt-0.5" />
                      Specialized equipment may be required (cranes, forklifts)
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange flex-shrink-0 mt-0.5" />
                      Risk remains with seller through entire unloading process
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-foreground">Unloading Considerations</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Sellers must carefully plan unloading operations:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      Factor unloading time into delivery schedules
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      Account for demurrage if unloading is delayed
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      Obtain proof of unloading (terminal receipts)
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
              Advantages and Disadvantages of DPU
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

      {/* DPU vs Other Incoterms */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              DPU vs Other D-Terms
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left font-semibold">Aspect</th>
                    <th className="px-4 py-4 text-left font-semibold">DPU</th>
                    <th className="px-4 py-4 text-left font-semibold">DAP</th>
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
                      <td className="px-4 py-4 text-orange font-semibold">{row.dpu}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.dap}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.ddp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">DPU vs DAP</h3>
                  <p className="text-sm text-muted-foreground">
                    The primary distinction is unloading responsibility. Under DPU, sellers complete unloading before risk transfers. DAP transfers risk when goods arrive still loaded—buyers handle unloading. DPU extends seller liability through the entire unloading process.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">DPU vs DDP</h3>
                  <p className="text-sm text-muted-foreground">
                    DDP goes further by requiring sellers to handle import clearance, duties, and taxes. DPU excludes import formalities—buyers handle customs clearance. DDP represents maximum seller obligation while DPU offers comprehensive delivery without import responsibilities.
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

      {/* Practical Examples */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              DPU in Practice: Industry Examples
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {practicalExamples.map((example, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-2">{example.title}</h3>
                    <p className="text-sm text-muted-foreground">{example.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When to Use DPU */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              When to Use DPU Incoterms
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Ideal Scenarios for DPU
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Buyers lack unloading equipment or expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Heavy machinery requiring specialized handling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Remote project sites without infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">First-time importers wanting simplicity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">High-value cargo requiring careful handling</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Package className="h-5 w-5 text-orange" />
                  Industries Using DPU
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Construction: equipment and materials to project sites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Manufacturing: production line installations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Energy: wind turbines, solar panels, generators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Agriculture: bulk commodities to processing facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Mining: extraction equipment to remote sites</span>
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
        title="Need Help with DPU Shipments?"
        description="Our freight experts can help you navigate DPU terms and coordinate complete delivery with unloading at your specified destination."
        primaryAction={{ label: 'Get Quote', href: '/quote' }}
      />
    </>
  );
}
