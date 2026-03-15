import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  MapPin,
  Ship,
  FileCheck,
  Truck,
  CheckCircle,
  ClipboardCheck,
  Scale,
  MessageSquare,
  Package,
  ArrowRight,
  Factory,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Oversized Equipment from Japan to Hangzhou for GREE | Case Study | Upfreights',
  description: 'Learn how Upfreights managed import clearance and oversized cargo delivery from Japan to GREE Group\'s Hangzhou facility with expert customs coordination.',
  alternates: {
    canonical: '/case-studies/oversized-equipment-japan-to-hangzhou',
  },
  openGraph: {
    title: 'Oversized Equipment from Japan for GREE Hangzhou | Upfreights Case Study',
    description: 'Import clearance and specialized transport solution for oversized equipment from Japan to GREE\'s Hangzhou base.',
  },
};

const services = [
  {
    icon: Scale,
    title: 'Customs Classification Advisory',
    description: 'Provided expert recommendations for accurate product classification to optimize duty payments and ensure compliance.',
  },
  {
    icon: ClipboardCheck,
    title: 'Document Review',
    description: 'Carefully examined all submitted shipping and customs documents to ensure accuracy and avoid clearance delays.',
  },
  {
    icon: MessageSquare,
    title: 'On-Site Customs Coordination',
    description: 'Communicated directly with customs officers during the inspection process to facilitate smooth and timely clearance.',
  },
  {
    icon: Truck,
    title: 'Oversized Cargo Transport',
    description: 'Arranged specialized transportation to safely deliver the oversized equipment to the GREE base in Hangzhou.',
  },
];

const highlights = [
  'Expert customs classification advisory',
  'Complete document verification and review',
  'On-site customs officer coordination',
  'Specialized oversized cargo handling',
  'Seamless delivery to GREE facility',
  'Full regulatory compliance achieved',
];

export default function GREEOversizedCaseStudyPage() {
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
              <span>Japan</span>
              <ArrowRight className="h-3 w-3" />
              <span>Hangzhou, China</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Oversized Equipment from Japan for GREE Hangzhou
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              GREE Group&apos;s Hangzhou branch required a streamlined solution to import specialized equipment from Japan, including oversized cargo. Leveraging the complete set of original shipping and customs clearance documents provided by the client, we successfully managed the import process and final delivery to their facility in Hangzhou.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Client</span>
                <p className="text-white font-semibold">GREE Group</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Cargo Type</span>
                <p className="text-white font-semibold">Oversized Equipment</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Service Type</span>
                <p className="text-white font-semibold">Import Clearance + Transport</p>
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
                    Importing specialized industrial equipment from Japan to China involves strict customs classification requirements and complex documentation review. Additionally, oversized cargo requires specialized transport arrangements to ensure safe delivery without delays.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange/50 bg-orange/5">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">Our Solution</h2>
                  <p className="text-muted-foreground">
                    We provided comprehensive import clearance services, including customs classification advisory, thorough document review, on-site coordination with customs officers, and specialized oversized cargo transport to GREE&apos;s Hangzhou facility.
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
              Our specialized import clearance and logistics solution ensured compliant entry and safe delivery of oversized industrial equipment.
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

      {/* Route & Client Info Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Why Customs Classification Matters
                </h2>
                <p className="text-muted-foreground mb-6">
                  Accurate customs classification is critical for industrial equipment imports. Proper HS code assignment directly impacts duty rates, regulatory requirements, and clearance timelines. Our expert advisory ensures optimal classification that balances compliance with cost efficiency.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal flex-shrink-0" />
                    <span className="text-foreground">Optimized duty payments</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal flex-shrink-0" />
                    <span className="text-foreground">Reduced clearance delays</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal flex-shrink-0" />
                    <span className="text-foreground">Full regulatory compliance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal flex-shrink-0" />
                    <span className="text-foreground">Avoid penalties and re-classification</span>
                  </li>
                </ul>
              </div>

              <Card className="border-teal/50 bg-teal/5">
                <CardContent className="p-6">
                  <Ship className="h-10 w-10 text-teal mb-4" />
                  <h3 className="font-bold text-foreground mb-3">Route Overview</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Origin:</span>
                      <p className="font-medium text-foreground">Japan</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Port of Discharge:</span>
                      <p className="font-medium text-foreground">Shanghai / Ningbo Port</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Final Destination:</span>
                      <p className="font-medium text-foreground">GREE Group Base, Hangzhou</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Cargo Type:</span>
                      <p className="font-medium text-foreground">Specialized Oversized Equipment</p>
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
            <Factory className="h-12 w-12 text-orange mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Results
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              By managing the import clearance and logistics process end-to-end, we ensured a smooth and compliant entry of equipment into China, followed by prompt delivery to GREE&apos;s facility—supporting their operational needs without disruption.
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
              <Link href="/services/customs-clearance" className="block group">
                <Card className="h-full border-border/50 hover:border-orange/50 hover:shadow-md transition-all">
                  <CardContent className="p-6 text-center">
                    <FileCheck className="h-8 w-8 text-orange mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground group-hover:text-orange transition-colors">
                      Customs Clearance
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Expert customs brokerage services
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
                      Ocean shipping from major ports
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/services/door-to-door" className="block group">
                <Card className="h-full border-border/50 hover:border-orange/50 hover:shadow-md transition-all">
                  <CardContent className="p-6 text-center">
                    <Truck className="h-8 w-8 text-orange mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground group-hover:text-orange transition-colors">
                      Door to Door
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Complete end-to-end logistics
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
        title="Need Help with Oversized Cargo or Customs Clearance?"
        description="Whether you're importing industrial equipment, machinery, or project cargo, our team can provide expert customs advisory and specialized transport solutions."
        primaryAction={{ label: 'Get Quote', href: '/quote' }}
        secondaryAction={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
