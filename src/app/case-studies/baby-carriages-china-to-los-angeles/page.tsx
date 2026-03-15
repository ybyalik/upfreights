import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  MapPin,
  Ship,
  FileCheck,
  Warehouse,
  Truck,
  CheckCircle,
  Container,
  ClipboardList,
  PackageCheck,
  ArrowRight,
  Home,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Baby Carriages from China to Los Angeles | Case Study | Upfreights',
  description: 'Learn how Upfreights delivered door-to-door logistics for baby carriages from Pinghu, China to Los Angeles. Full container shipping with customs clearance.',
  alternates: {
    canonical: '/case-studies/baby-carriages-china-to-los-angeles',
  },
  openGraph: {
    title: 'Baby Carriages from China to Los Angeles | Upfreights Case Study',
    description: 'End-to-end door-to-door logistics solution for baby carriage imports from China to Los Angeles.',
  },
};

const services = [
  {
    icon: Container,
    title: 'Container Booking',
    description: 'Arranged ocean freight and secured space for the shipment based on the client\'s timeline.',
  },
  {
    icon: Truck,
    title: 'Domestic Pickup & Transport (China)',
    description: 'Coordinated the pickup of goods directly from the factory in Pinghu and transported them to the departure port.',
  },
  {
    icon: FileCheck,
    title: 'Export Customs Clearance',
    description: 'Handled all necessary export documentation and formalities to clear Chinese customs without delays.',
  },
  {
    icon: ClipboardList,
    title: 'Document Preparation',
    description: 'Issued and submitted all required shipping documents including the Bill of Lading (BL), commercial invoice, packing list, and supporting paperwork in accordance with U.S. customs requirements.',
  },
  {
    icon: PackageCheck,
    title: 'Import Customs Clearance (U.S.)',
    description: 'Collaborated with a trusted customs broker in Los Angeles to clear the goods upon arrival at the port.',
  },
  {
    icon: Home,
    title: 'Final Delivery to Client Warehouse',
    description: 'Coordinated with the client and arranged the final leg of the journey—transporting the container to the customer\'s warehouse in downtown LA.',
  },
];

const highlights = [
  'Full door-to-door service from factory to warehouse',
  'Seamless export clearance from China',
  'Compliant with both Chinese and U.S. regulations',
  'Coordinated with trusted U.S. customs broker',
  'Complete documentation management',
  'Final mile delivery to downtown LA',
];

const documents = [
  'Bill of Lading (BL)',
  'Commercial Invoice',
  'Packing List',
  'Export Declaration',
  'Import Entry Documentation',
  'Delivery Order',
];

export default function BabyCarriagesCaseStudyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>

            {/* Route Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <MapPin className="h-4 w-4 text-orange" />
              <span>Pinghu, China</span>
              <ArrowRight className="h-3 w-3" />
              <span>Los Angeles, USA</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Baby Carriages from China to Los Angeles
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Our client, a Los Angeles-based importer of baby carriages, required a reliable, end-to-end logistics solution to move goods directly from their supplier&apos;s factory in Pinghu, China, to their designated warehouse in downtown Los Angeles. We managed the entire door-to-door process, ensuring timely and compliant delivery with full visibility at each step.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Service Type</span>
                <p className="text-white font-semibold">Door-to-Door</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Commodity</span>
                <p className="text-white font-semibold">Baby Carriages</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Transport Mode</span>
                <p className="text-white font-semibold">Ocean Freight (FCL)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">The Challenge</h2>
                  <p className="text-muted-foreground">
                    The client needed a complete logistics solution that would handle every aspect of the shipment—from factory pickup in China through U.S. customs clearance to final warehouse delivery in Los Angeles—without requiring them to coordinate multiple vendors.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange/50 bg-orange/5">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">Our Solution</h2>
                  <p className="text-muted-foreground">
                    We provided a seamless door-to-door service, managing domestic transport in China, ocean freight booking, export and import customs clearance, documentation, and final delivery—giving the client complete peace of mind and full supply chain visibility.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Key Highlights */}
            <div className="bg-secondary/30 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Key Highlights</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Services */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
              Scope of Services Provided
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Our comprehensive door-to-door solution covered every step of the journey from factory floor to final destination.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-6 w-6 text-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Documentation Handled
                </h2>
                <p className="text-muted-foreground mb-6">
                  Complete documentation management ensured smooth customs clearance at both origin and destination, with all paperwork prepared in accordance with U.S. import requirements.
                </p>
                <ul className="space-y-3">
                  {documents.map((doc) => (
                    <li key={doc} className="flex items-center gap-3">
                      <FileCheck className="h-5 w-5 text-teal flex-shrink-0" />
                      <span className="text-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="border-teal/50 bg-teal/5">
                <CardContent className="p-6">
                  <Ship className="h-10 w-10 text-teal mb-4" />
                  <h3 className="font-bold text-foreground mb-3">Route Overview</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Origin:</span>
                      <p className="font-medium text-foreground">Factory in Pinghu, China</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Port of Loading:</span>
                      <p className="font-medium text-foreground">Shanghai / Ningbo Port</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Port of Discharge:</span>
                      <p className="font-medium text-foreground">Port of Los Angeles, USA</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Final Destination:</span>
                      <p className="font-medium text-foreground">Client Warehouse, Downtown LA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Warehouse className="h-12 w-12 text-orange mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Results
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Thanks to our streamlined logistics coordination, the shipment was delivered efficiently and in full compliance with both Chinese and U.S. regulations—demonstrating our ability to offer comprehensive door-to-door solutions for international importers.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Related Services
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/door-to-door" className="block group">
                <Card className="h-full border-border/50 hover:border-orange/50 hover:shadow-md transition-all">
                  <CardContent className="p-6 text-center">
                    <Home className="h-8 w-8 text-orange mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground group-hover:text-orange transition-colors">
                      Door to Door
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Complete end-to-end logistics
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/services/sea-freight" className="block group">
                <Card className="h-full border-border/50 hover:border-orange/50 hover:shadow-md transition-all">
                  <CardContent className="p-6 text-center">
                    <Ship className="h-8 w-8 text-orange mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground group-hover:text-orange transition-colors">
                      Sea Freight
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      FCL and LCL ocean shipping
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/services/customs-clearance" className="block group">
                <Card className="h-full border-border/50 hover:border-orange/50 hover:shadow-md transition-all">
                  <CardContent className="p-6 text-center">
                    <FileCheck className="h-8 w-8 text-orange mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground group-hover:text-orange transition-colors">
                      Customs Clearance
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Expert customs brokerage
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="default"
        title="Need Door-to-Door Shipping from China?"
        description="Whether you're importing consumer goods, electronics, or industrial products, our team can manage your entire supply chain from factory to warehouse."
        primaryAction={{ label: 'Get Quote', href: '/quote' }}
        secondaryAction={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
