import { Metadata } from 'next';
import Link from 'next/link';
import { Handshake, CheckCircle, ArrowRight, Search, ShoppingCart, Truck, FileCheck, CreditCard, Package, DollarSign, Users, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumbs, CTASection, HeroQuoteForm } from '@/components/sections';
import { generateServiceSchema, ORGANIZATION_INFO } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'China Trade Agency Services | Sourcing & Procurement',
  description: 'Comprehensive China trade agency services including product sourcing, procurement, export transportation, customs clearance, and LC negotiation. One-stop solution for international trade.',
  alternates: {
    canonical: '/trade-agency',
  },
  openGraph: {
    title: 'China Trade Agency Services | UpFreights',
    description: 'Comprehensive China trade agency services including product sourcing, procurement, export transportation, customs clearance, and LC negotiation.',
  },
};

const tradeAgencyServices = [
  {
    title: 'Product Sourcing',
    description: 'Expert sourcing agents locate reliable manufacturers and suppliers across China to find the best products at competitive prices.',
    icon: Search,
  },
  {
    title: 'Procurement Management',
    description: 'Complete procurement handling including supplier negotiations, order placement, production monitoring, and quality control.',
    icon: ShoppingCart,
  },
  {
    title: 'Export Transportation',
    description: 'Seamless coordination of domestic and international transportation to get your goods from factory to destination.',
    icon: Truck,
  },
  {
    title: 'Customs Clearance',
    description: 'Professional handling of export documentation, customs declarations, and regulatory compliance for smooth clearance.',
    icon: FileCheck,
  },
  {
    title: 'LC Negotiation',
    description: 'Expert assistance with Letter of Credit negotiations, documentation, and banking processes for secure transactions.',
    icon: CreditCard,
  },
  {
    title: 'Delivery Coordination',
    description: 'End-to-end delivery management ensuring your goods arrive at the final destination on time and in perfect condition.',
    icon: Package,
  },
];

const costComparison = {
  traditional: {
    title: 'Traditional Approach',
    subtitle: '4 Separate Vendors',
    items: [
      { service: 'Factory/Supplier', cost: 'Negotiated Price' },
      { service: 'Sourcing Agent', cost: '3-5% Commission' },
      { service: 'Freight Forwarder', cost: 'Separate Quote' },
      { service: 'Customs Broker', cost: 'Additional Fees' },
    ],
    total: 'Multiple invoices, complex coordination',
  },
  integrated: {
    title: 'UpFreights Trade Agency',
    subtitle: 'Single Vendor Solution',
    items: [
      { service: 'Product Sourcing', cost: 'Included' },
      { service: 'Procurement', cost: 'Included' },
      { service: 'Freight & Logistics', cost: 'Included' },
      { service: 'Customs Clearance', cost: 'Included' },
    ],
    total: 'One invoice, streamlined process',
  },
};

const benefits = [
  {
    title: 'Cost Savings',
    description: 'Eliminate middleman fees and reduce overall procurement costs by up to 15-20%.',
    icon: DollarSign,
  },
  {
    title: 'Single Point of Contact',
    description: 'One dedicated team handles everything from sourcing to delivery, simplifying communication.',
    icon: Users,
  },
  {
    title: 'Reduced Risk',
    description: 'Integrated quality control and supplier verification minimize the risk of defective products.',
    icon: TrendingDown,
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Requirements Analysis',
    description: 'We analyze your product requirements, target prices, quality standards, and delivery timelines to create a sourcing strategy.',
  },
  {
    step: 2,
    title: 'Supplier Identification',
    description: 'Our team identifies and vets potential suppliers, conducts factory audits, and negotiates the best terms on your behalf.',
  },
  {
    step: 3,
    title: 'Order Management',
    description: 'We place orders, monitor production progress, conduct quality inspections, and ensure everything meets your specifications.',
  },
  {
    step: 4,
    title: 'Export & Delivery',
    description: 'Complete handling of export documentation, customs clearance, shipping arrangements, and delivery to your warehouse.',
  },
];

const tradeAgencyServiceSchema = generateServiceSchema({
  name: 'China Trade Agency Services',
  description: 'Comprehensive China trade agency services including product sourcing, procurement, export transportation, customs clearance, and LC negotiation. One-stop solution for international trade.',
  url: `${ORGANIZATION_INFO.url}/trade-agency`,
  features: [
    'Product sourcing and supplier verification',
    'Procurement and order management',
    'Factory audits and quality control',
    'Export documentation handling',
    'Customs clearance services',
    'Letter of Credit negotiation',
    'International freight coordination',
    'Door-to-door delivery',
  ],
});

export default function TradeAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(tradeAgencyServiceSchema),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Trade Agency' },
            ]}
            variant="light"
            className="mb-6"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                  <Handshake className="h-8 w-8 text-orange" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  China Trade Agency
                </h1>
              </div>
              <p className="text-lg text-white/80 mb-8 max-w-3xl">
                Your integrated trade partner in China. From product sourcing to doorstep delivery, we handle every aspect of your import operations with a single-vendor approach that saves time and money.
              </p>
              <Button asChild className="bg-orange hover:bg-orange-dark text-white lg:hidden">
                <Link href="/quote">
                  Get Trade Agency Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <HeroQuoteForm defaultService="trade-agency" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Complete Trade Agency Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide end-to-end trade services that eliminate the complexity of working with multiple vendors in China.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tradeAgencyServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-orange" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Choose an Integrated Trade Agency?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compare the traditional multi-vendor approach with our streamlined single-vendor solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Traditional Approach */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{costComparison.traditional.title}</h3>
                  <p className="text-sm text-muted-foreground">{costComparison.traditional.subtitle}</p>
                </div>
                <div className="space-y-4 mb-6">
                  {costComparison.traditional.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="text-foreground">{item.service}</span>
                      <span className="text-muted-foreground text-sm">{item.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground">{costComparison.traditional.total}</p>
                </div>
              </CardContent>
            </Card>

            {/* Integrated Solution */}
            <Card className="border-orange/50 bg-orange/5">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{costComparison.integrated.title}</h3>
                  <p className="text-sm text-orange font-medium">{costComparison.integrated.subtitle}</p>
                </div>
                <div className="space-y-4 mb-6">
                  {costComparison.integrated.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="text-foreground">{item.service}</span>
                      <span className="text-orange font-medium text-sm">{item.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-orange/10 rounded-lg p-4 text-center">
                  <p className="text-sm text-orange font-medium">{costComparison.integrated.total}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Benefits of Our Trade Agency
              </h2>
              <p className="text-muted-foreground mb-8">
                Working with a single trade agency streamlines your entire import process, reduces costs, and gives you peace of mind knowing experienced professionals are handling every detail.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-white mb-2">15-20%</div>
                    <div className="text-white/80">Average Cost Savings</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-orange mb-2">1</div>
                    <div className="text-white/80">Single Point of Contact</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-white mb-2">500+</div>
                    <div className="text-white/80">Verified Suppliers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              How Our Trade Agency Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined process from initial requirements to final delivery.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={step.step} className="flex gap-6">
                  {/* Step Number */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-orange text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-orange/20 mt-2" />
                    )}
                  </div>

                  {/* Step Content */}
                  <Card className="border-border/50 flex-1 mb-2">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Industries We Serve
              </h2>
              <p className="text-muted-foreground">
                Our trade agency services cater to businesses across diverse industries.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Electronics & Technology',
                'Textiles & Apparel',
                'Home & Garden',
                'Industrial Equipment',
                'Consumer Goods',
                'Auto Parts',
                'Medical Supplies',
                'Building Materials',
              ].map((industry) => (
                <div
                  key={industry}
                  className="flex items-center gap-2 p-4 rounded-lg bg-secondary/50"
                >
                  <CheckCircle className="h-4 w-4 text-orange flex-shrink-0" />
                  <span className="text-sm text-foreground">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Ready to Simplify Your China Imports?"
        description="Let our trade agency handle everything from sourcing to delivery. Get a customized quote for your import requirements."
        primaryAction={{ label: 'Get Trade Agency Quote', href: '/quote' }}
      />
    </>
  );
}
