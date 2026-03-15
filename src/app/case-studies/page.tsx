import { Metadata } from 'next';
import { Briefcase, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { CaseStudyCard, CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Case Studies | Upfreights Success Stories',
  description: 'Explore real-world examples of how Upfreights helps businesses navigate complex international logistics challenges. From import agency services to multimodal transportation solutions.',
  alternates: {
    canonical: '/case-studies',
  },
  openGraph: {
    title: 'Case Studies | Upfreights Success Stories',
    description: 'Real-world examples of successful international logistics solutions from China and beyond.',
  },
};

const caseStudies = [
  {
    slug: 'nigerian-sesame-to-qingdao',
    title: 'Nigerian Sesame Import to China',
    subtitle: 'Full-service import agency solution for sourcing and transporting sesame from Nigeria to Qingdao, handling everything from supplier sourcing to customs clearance.',
    origin: 'Nigeria',
    destination: 'Qingdao, China',
    services: ['Import Agency', 'LC Financing', 'Multimodal Transport', 'Customs Clearance', 'Warehousing'],
  },
  {
    slug: 'baby-carriages-china-to-los-angeles',
    title: 'Baby Carriages from China to Los Angeles',
    subtitle: 'End-to-end door-to-door logistics solution from factory in Pinghu, China to warehouse in downtown Los Angeles with full customs compliance.',
    origin: 'Pinghu, China',
    destination: 'Los Angeles, USA',
    services: ['Door-to-Door', 'Sea Freight', 'Export Clearance', 'Import Clearance', 'Final Delivery'],
  },
  {
    slug: 'oversized-equipment-japan-to-hangzhou',
    title: 'Oversized Equipment from Japan for GREE',
    subtitle: 'Import clearance and specialized oversized cargo transport for GREE Group\'s Hangzhou facility, including customs classification advisory.',
    origin: 'Japan',
    destination: 'Hangzhou, China',
    services: ['Customs Clearance', 'Classification Advisory', 'Oversized Transport', 'Document Review'],
  },
];

const stats = [
  { value: '100+', label: 'Successful Projects' },
  { value: '50+', label: 'Countries Served' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-orange" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Case Studies
              </h1>
            </div>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Discover how we help businesses navigate complex international logistics challenges. Each case study showcases our comprehensive approach to freight forwarding, customs compliance, and supply chain optimization.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Approach Works */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Our Approach Works
            </h2>
            <p className="text-muted-foreground">
              We combine deep industry expertise with a client-centric approach to deliver logistics solutions that drive real business results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-7 w-7 text-orange" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Global Network</h3>
              <p className="text-sm text-muted-foreground">
                Extensive partnerships with carriers, customs brokers, and warehouses across 100+ countries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-7 w-7 text-teal" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Compliance Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Deep knowledge of international trade regulations, customs procedures, and documentation requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-copper/10 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-7 w-7 text-copper" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">End-to-End Service</h3>
              <p className="text-sm text-muted-foreground">
                From supplier sourcing to final delivery, we manage every aspect of your supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Featured Case Studies
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((study) => (
                <CaseStudyCard
                  key={study.slug}
                  slug={study.slug}
                  title={study.title}
                  subtitle={study.subtitle}
                  origin={study.origin}
                  destination={study.destination}
                  services={study.services}
                />
              ))}
            </div>

            {caseStudies.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Case studies coming soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Have a Complex Logistics Challenge?"
        description="Our team of experts is ready to develop a customized solution for your business. Share your requirements and we'll provide a detailed proposal."
        primaryAction={{ label: 'Get Quote', href: '/quote' }}
        secondaryAction={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
