import { Metadata } from 'next';
import Link from 'next/link';
import { Home, CheckCircle, ArrowRight, Package, MapPin, Truck, FileCheck, Ship, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumbs, CTASection, HeroQuoteForm } from '@/components/sections';
import { generateServiceSchema, ORGANIZATION_INFO } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Door-to-Door Delivery Services | UpFreights',
  description: 'Complete end-to-end logistics solutions from your supplier\'s door in China to your warehouse or business address worldwide.',
  alternates: {
    canonical: '/door-to-door',
  },
  openGraph: {
    title: 'Door-to-Door Delivery Services | UpFreights',
    description: 'Complete end-to-end logistics solutions from your supplier\'s door in China to your warehouse or business address worldwide.',
  },
};

const logisticsFeatures = [
  {
    title: 'Pickup Service',
    description: 'Direct collection from your supplier or manufacturer with professional handling and documentation.',
    icon: Package,
  },
  {
    title: 'End-to-End Tracking',
    description: 'Real-time visibility from pickup to final delivery with status updates at every milestone.',
    icon: MapPin,
  },
  {
    title: 'Final Delivery',
    description: 'Professional delivery to your specified address with proof of delivery and signature confirmation.',
    icon: Truck,
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Supplier Pickup',
    description: 'We collect your cargo directly from your supplier\'s facility in China with proper documentation and handling.',
    icon: Package,
  },
  {
    step: 2,
    title: 'Export Processing',
    description: 'Complete export documentation, customs clearance, and preparation for international shipping.',
    icon: FileCheck,
  },
  {
    step: 3,
    title: 'International Transit',
    description: 'Your cargo travels via sea or air freight with full tracking and insurance coverage.',
    icon: Ship,
  },
  {
    step: 4,
    title: 'Import Clearance',
    description: 'We handle all import documentation, customs duties, and regulatory compliance in destination country.',
    icon: ClipboardCheck,
  },
  {
    step: 5,
    title: 'Final Delivery',
    description: 'Professional delivery to your specified address with appointment scheduling and proof of delivery.',
    icon: Home,
  },
];

const convenienceBenefits = [
  'Simplified shipping process',
  'Single point of contact for entire shipment',
  'No need to coordinate multiple vendors',
  'Complete handling of documentation',
  'End-to-end cargo tracking',
];

const costTimeBenefits = [
  'Reduced administrative overhead',
  'Faster customs clearance',
  'Optimized routing and scheduling',
  'Consolidated billing and invoicing',
];

const doorToDoorServiceSchema = generateServiceSchema({
  name: 'Door-to-Door Delivery Services',
  description: 'Complete end-to-end logistics solutions from your supplier\'s door in China to your warehouse or business address worldwide.',
  url: `${ORGANIZATION_INFO.url}/door-to-door`,
  features: [
    'Direct supplier pickup in China',
    'End-to-end cargo tracking',
    'Export and import customs clearance',
    'International sea or air transit',
    'Final mile delivery to your address',
    'Single point of contact',
    'Complete documentation handling',
    'Flexible delivery scheduling',
  ],
});

export default function DoorToDoorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(doorToDoorServiceSchema),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Door to Door' },
            ]}
            variant="light"
            className="mb-6"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                  <Home className="h-8 w-8 text-orange" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Door-to-Door Delivery Services
                </h1>
              </div>
              <p className="text-lg text-white/80 mb-8 max-w-3xl">
                Complete end-to-end logistics solutions from your supplier&apos;s door in China to your warehouse or business address worldwide.
              </p>
              <Button asChild className="bg-orange hover:bg-orange-dark text-white lg:hidden">
                <Link href="/quote">
                  Get Door-to-Door Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <HeroQuoteForm defaultService="door-to-door" />
            </div>
          </div>
        </div>
      </section>

      {/* Complete Logistics Management Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Complete Logistics Management
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {logisticsFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-border/50 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              How Door-to-Door Service Works
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
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
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-orange" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Benefits of Door-to-Door Service
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Convenience Benefits */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">Convenience Benefits</h3>
                <p className="text-sm text-muted-foreground mb-6">Simplified shipping process</p>
                <ul className="space-y-3">
                  {convenienceBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Cost & Time Savings */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">Cost & Time Savings</h3>
                <p className="text-sm text-muted-foreground mb-6">Efficiency advantages</p>
                <ul className="space-y-3">
                  {costTimeBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Ready for Hassle-Free Door-to-Door Service?"
        description="Let us handle the entire shipping process while you focus on your business growth."
        primaryAction={{ label: 'Get Complete Quote', href: '/quote' }}
      />
    </>
  );
}
