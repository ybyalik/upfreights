import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  MapPin,
  Ship,
  FileCheck,
  Warehouse,
  Handshake,
  CheckCircle,
  CreditCard,
  ClipboardCheck,
  Truck,
  Package,
  Bell,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Nigerian Sesame Import to Qingdao, China | Case Study | Upfreights',
  description: 'Learn how Upfreights provided full-service import agency for Nigerian sesame to Qingdao, China. From supplier sourcing to customs clearance and delivery.',
  alternates: {
    canonical: '/case-studies/nigerian-sesame-to-qingdao',
  },
  openGraph: {
    title: 'Nigerian Sesame Import to Qingdao | Upfreights Case Study',
    description: 'Full-service import agency solution for sourcing and transporting sesame from Nigeria to Qingdao, China.',
  },
};

const services = [
  {
    icon: Handshake,
    title: 'Supplier Sourcing in Nigeria',
    description: 'Identified reputable sesame suppliers through the China Import and Export Chamber of Commerce and other trusted channels to ensure product quality and reliability.',
  },
  {
    icon: CreditCard,
    title: 'Import Agency Agreement & LC Financing',
    description: 'Signed a formal import agency agreement with the client, provided a Letter of Credit (LC) financing plan, and opened the LC on behalf of the buyer.',
  },
  {
    icon: ClipboardCheck,
    title: 'Inspection & Loading at Origin',
    description: 'Coordinated on-site inspection and supervised loading at the sesame production facility in Nigeria to verify quality and reduce risk.',
  },
  {
    icon: Truck,
    title: 'Multimodal Transportation',
    description: 'Arranged land and sea transport from the Port of Lagos to Qingdao, managing the full multimodal logistics chain.',
  },
  {
    icon: FileCheck,
    title: 'Customs Documentation Coordination',
    description: 'Worked closely with the Nigerian seller to ensure all China Customs documentation was accurate and complete—including certificate of origin, FREE DFT (0-tariff certificate), phytosanitary certificate, commercial invoice, bill of lading, and other supporting documents.',
  },
  {
    icon: CreditCard,
    title: 'LC Negotiation & Document Payment',
    description: 'Facilitated timely LC negotiation and document settlement to meet contractual terms and prevent delays.',
  },
  {
    icon: Warehouse,
    title: 'Customs Clearance & Warehousing in Qingdao',
    description: 'Completed customs clearance upon arrival, arranged cargo pickup, and coordinated storage at a designated warehouse.',
  },
  {
    icon: Bell,
    title: 'Client Notification & Payment Coordination',
    description: 'Promptly notified the client upon successful import and assisted with final payment settlement.',
  },
];

const highlights = [
  'Full regulatory compliance with China Customs requirements',
  'Letter of Credit financing support',
  'End-to-end supply chain visibility',
  'Quality inspection at origin',
  '0-tariff certificate (FREE DFT) coordination',
  'Seamless multimodal logistics',
];

const documents = [
  'Certificate of Origin',
  'FREE DFT (0-tariff certificate)',
  'Phytosanitary Certificate',
  'Commercial Invoice',
  'Bill of Lading',
  'Packing List',
];

export default function NigerianSesameCaseStudyPage() {
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
              <span>Nigeria</span>
              <ArrowRight className="h-3 w-3" />
              <span>Qingdao, China</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Nigerian Sesame Import to Qingdao, China
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Our client required a reliable and compliant import solution for sourcing and transporting sesame from Nigeria to Qingdao, China. Acting as the full-service import agent, we handled every step—from supplier sourcing to customs clearance and delivery—ensuring a smooth, efficient, and legally compliant process.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Service Type</span>
                <p className="text-white font-semibold">Full Import Agency</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Commodity</span>
                <p className="text-white font-semibold">Sesame Seeds</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white/60 text-sm">Transport Mode</span>
                <p className="text-white font-semibold">Multimodal (Land + Sea)</p>
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
                    Importing agricultural commodities from Africa to China involves complex regulatory requirements, quality verification challenges, and intricate payment structures. Our client needed a partner who could manage the entire process while ensuring compliance with Chinese customs regulations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange/50 bg-orange/5">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">Our Solution</h2>
                  <p className="text-muted-foreground">
                    We provided comprehensive import agency services, taking full responsibility for supplier sourcing, LC financing, documentation coordination, multimodal logistics, customs clearance, and warehousing—delivering a turnkey import solution.
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
              Our comprehensive import agency solution covered every aspect of the supply chain, from origin to final delivery.
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
                  Proper documentation is critical for agricultural imports into China. We coordinated all required documents to ensure smooth customs clearance and regulatory compliance.
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
                      <p className="font-medium text-foreground">Nigeria (Sesame Production Facility)</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Port of Loading:</span>
                      <p className="font-medium text-foreground">Port of Lagos, Nigeria</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Port of Discharge:</span>
                      <p className="font-medium text-foreground">Qingdao Port, China</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Final Destination:</span>
                      <p className="font-medium text-foreground">Designated Warehouse, Qingdao</p>
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
            <Package className="h-12 w-12 text-orange mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Results
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              This comprehensive import agency solution enabled our client to successfully source and import high-quality sesame from Nigeria with full regulatory compliance, financial support, and logistical efficiency—paving the way for ongoing trade opportunities.
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
              <Link href="/services/trade-agency" className="block group">
                <Card className="h-full border-border/50 hover:border-orange/50 hover:shadow-md transition-all">
                  <CardContent className="p-6 text-center">
                    <Handshake className="h-8 w-8 text-orange mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground group-hover:text-orange transition-colors">
                      Trade Agency
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Full sourcing and procurement services
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="default"
        title="Need Import Agency Services?"
        description="Whether you're importing agricultural commodities, manufactured goods, or raw materials, our team can provide end-to-end import agency solutions tailored to your needs."
        primaryAction={{ label: 'Get Quote', href: '/quote' }}
        secondaryAction={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
