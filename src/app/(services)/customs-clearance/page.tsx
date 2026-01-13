import { Metadata } from 'next';
import Link from 'next/link';
import { FileCheck, CheckCircle, ArrowRight, FileText, Shield, Clock, Calculator, ClipboardList, Receipt, Award, FileWarning } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumbs, CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Customs Clearance Services | UpFreights',
  description: 'Expert customs brokerage services for smooth import/export processes with full regulatory compliance and documentation handling from China to worldwide destinations.',
  alternates: {
    canonical: '/customs-clearance',
  },
  openGraph: {
    title: 'Customs Clearance Services | UpFreights',
    description: 'Expert customs brokerage services for smooth import/export processes with full regulatory compliance and documentation handling.',
  },
};

const brokerageFeatures = [
  {
    title: 'Documentation',
    description: 'Complete preparation and filing of all import/export documentation with accuracy and compliance.',
    icon: FileText,
  },
  {
    title: 'Compliance',
    description: 'Expert knowledge of international trade regulations and customs requirements for all countries.',
    icon: Shield,
  },
  {
    title: 'Fast Processing',
    description: 'Expedited customs clearance with established relationships at major ports and airports.',
    icon: Clock,
  },
];

const customsSolutions = [
  {
    title: 'Import/Export Documentation',
    description: 'Commercial invoices, packing lists, bills of lading, certificates of origin',
  },
  {
    title: 'Duty & Tax Calculation',
    description: 'Accurate assessment of customs duties, taxes, and fees for cost planning',
  },
  {
    title: 'Regulatory Compliance',
    description: 'FDA, FCC, DOT, and other agency requirements handling',
  },
  {
    title: 'Classification Services',
    description: 'Proper HS code classification for accurate customs processing',
  },
];

const essentialDocuments = [
  {
    title: 'Commercial Invoice',
    description: 'Detailed invoice showing item descriptions, values, and terms of sale.',
    icon: Receipt,
    details: [
      'Seller and buyer information',
      'Product descriptions',
      'Unit prices and totals',
      'Payment terms',
    ],
  },
  {
    title: 'Packing List',
    description: 'Detailed list of package contents, weights, and dimensions.',
    icon: ClipboardList,
    details: [
      'Package numbers and marks',
      'Contents of each package',
      'Gross and net weights',
      'Dimensions',
    ],
  },
  {
    title: 'Bill of Lading',
    description: 'Transport document and receipt for shipped goods.',
    icon: FileText,
    details: [
      'Consignee information',
      'Port of loading/discharge',
      'Vessel details',
      'Freight charges',
    ],
  },
  {
    title: 'Certificate of Origin',
    description: 'Document certifying the country where goods were manufactured.',
    icon: Award,
    details: [
      'Country of manufacture',
      'Product classification',
      'Authorized signatures',
      'Chamber of commerce seal',
    ],
  },
  {
    title: 'Insurance Certificate',
    description: 'Proof of cargo insurance coverage during transit.',
    icon: Shield,
    details: [
      'Coverage amount',
      'Policy details',
      'Covered risks',
      'Validity period',
    ],
  },
  {
    title: 'Special Permits',
    description: 'Additional documents for regulated or restricted goods.',
    icon: FileWarning,
    details: [
      'FDA approvals',
      'FCC certifications',
      'Import licenses',
      'Quarantine permits',
    ],
  },
];

const clearanceProcess = [
  {
    step: 1,
    title: 'Document Review & Preparation',
    description: 'We review all shipping documents for accuracy and completeness, prepare customs declarations, and ensure all required permits and certificates are in order.',
    timeline: '1-2 business days',
  },
  {
    step: 2,
    title: 'Customs Declaration Filing',
    description: 'Electronic submission of customs entries with proper classification codes, duty calculations, and regulatory compliance documentation to customs authorities.',
    timeline: 'Same day processing',
  },
  {
    step: 3,
    title: 'Examination & Inspection',
    description: 'Coordination with customs officers for any required physical inspections, X-ray scans, or document verifications while ensuring minimal delays.',
    timeline: '1-3 business days (if selected)',
  },
  {
    step: 4,
    title: 'Duty Payment & Release',
    description: 'Processing of duty and tax payments, final customs approval, and coordinating cargo release for onward transportation to final destination.',
    timeline: 'Same day after payment',
  },
];

export default function CustomsClearancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Customs Clearance' },
            ]}
            variant="light"
            className="mb-6"
          />
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                <FileCheck className="h-8 w-8 text-orange" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Customs Clearance Services
              </h1>
            </div>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Expert customs brokerage services for smooth import/export processes with full regulatory compliance and documentation handling from China to worldwide destinations.
            </p>
            <Button asChild className="bg-orange hover:bg-orange-dark text-white">
              <Link href="/quote">
                Get Customs Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Professional Brokerage Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Professional Customs Brokerage
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {brokerageFeatures.map((feature) => {
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

      {/* Comprehensive Solutions Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Comprehensive Customs Solutions
              </h2>
              <p className="text-muted-foreground mb-8">
                Our licensed customs brokers handle all aspects of import and export clearance, ensuring your cargo moves through customs efficiently while maintaining full compliance with international trade regulations.
              </p>

              <div className="space-y-4">
                {customsSolutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                      <Calculator className="h-5 w-5 text-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{solution.title}</h3>
                      <p className="text-muted-foreground text-sm">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-white mb-2">24hr</div>
                    <div className="text-white/80">Average Clearance Time</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-orange mb-2">100%</div>
                    <div className="text-white/80">Compliance Rate</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-white mb-2">50+</div>
                    <div className="text-white/80">Countries Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Documents Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Essential Import Documents
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {essentialDocuments.map((doc) => {
              const Icon = doc.icon;
              return (
                <Card key={doc.title} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-orange" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{doc.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{doc.description}</p>
                    <ul className="space-y-1">
                      {doc.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-orange flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clearance Process Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Customs Clearance Process
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {clearanceProcess.map((step, index) => (
                <div key={step.step} className="flex gap-6">
                  {/* Step Number */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-orange text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    {index < clearanceProcess.length - 1 && (
                      <div className="w-0.5 h-full bg-orange/20 mt-2" />
                    )}
                  </div>

                  {/* Step Content */}
                  <Card className="border-border/50 flex-1 mb-2">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-3">{step.description}</p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange/10 text-orange text-sm font-medium">
                        <Clock className="h-3.5 w-3.5 mr-1.5" />
                        Timeline: {step.timeline}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Need Expert Customs Clearance?"
        description="Let our licensed customs brokers handle your import/export documentation and clearance processes."
        primaryButtonText="Get Customs Quote"
      />
    </>
  );
}
