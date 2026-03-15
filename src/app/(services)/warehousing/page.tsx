import { Metadata } from 'next';
import Link from 'next/link';
import { Warehouse, CheckCircle, ArrowRight, Package, Scale, Tag, Shield, Eye, Truck, Box, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumbs, CTASection, HeroQuoteForm } from '@/components/sections';
import { generateServiceSchema, ORGANIZATION_INFO } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'China Warehousing Services | Secure Storage & Logistics',
  description: 'Professional warehousing services in China including secure storage, loading/unloading, weighing, packing, palletizing, labeling, and quality inspection for international shipments.',
  alternates: {
    canonical: '/warehousing',
  },
  openGraph: {
    title: 'China Warehousing Services | UpFreights',
    description: 'Professional warehousing services in China including secure storage, loading/unloading, weighing, packing, palletizing, labeling, and quality inspection.',
  },
};

const warehousingServices = [
  {
    title: 'Secure Storage',
    description: 'Climate-controlled warehouses with 24/7 security monitoring, fire suppression systems, and access control for your valuable cargo.',
    icon: Shield,
  },
  {
    title: 'Loading & Unloading',
    description: 'Professional handling of goods with modern equipment including forklifts, pallet jacks, and container loading/unloading services.',
    icon: Truck,
  },
  {
    title: 'Weighing Services',
    description: 'Accurate weight verification for all shipments using calibrated industrial scales to ensure compliance with shipping regulations.',
    icon: Scale,
  },
  {
    title: 'Packing Services',
    description: 'Expert packing solutions using quality materials to protect your goods during international transit and handling.',
    icon: Package,
  },
  {
    title: 'Palletizing',
    description: 'Professional palletization services to optimize container space, reduce handling damage, and streamline loading/unloading.',
    icon: Box,
  },
  {
    title: 'Labeling',
    description: 'Comprehensive labeling services including barcoding, shipping labels, compliance marks, and country-specific requirements.',
    icon: Tag,
  },
  {
    title: 'Temporary Care',
    description: 'Short and long-term storage solutions with inventory management, stock rotation, and order fulfillment services.',
    icon: Warehouse,
  },
  {
    title: 'Quality Inspection',
    description: 'Thorough inspection services to verify product quality, quantity, and condition before shipping to your destination.',
    icon: Eye,
  },
  {
    title: 'Packing & Loading Supervision',
    description: 'On-site supervision of packing and container loading to ensure proper handling and maximize container utilization.',
    icon: ClipboardCheck,
  },
];

const warehouseFeatures = [
  {
    title: 'Strategic Locations',
    description: 'Warehouses located near major Chinese ports and manufacturing hubs for efficient logistics.',
  },
  {
    title: 'Modern Facilities',
    description: 'State-of-the-art warehouses with advanced inventory management systems.',
  },
  {
    title: 'Flexible Storage',
    description: 'Short-term and long-term storage options to match your supply chain needs.',
  },
  {
    title: 'Real-Time Tracking',
    description: 'Online inventory visibility and status updates for complete transparency.',
  },
];

const warehouseLocations = [
  { city: 'Shenzhen', region: 'Guangdong', specialty: 'Electronics & Tech Products' },
  { city: 'Shanghai', region: 'East China', specialty: 'General Merchandise' },
  { city: 'Ningbo', region: 'Zhejiang', specialty: 'Manufacturing Goods' },
  { city: 'Guangzhou', region: 'Guangdong', specialty: 'Consumer Products' },
  { city: 'Qingdao', region: 'Shandong', specialty: 'Industrial Equipment' },
  { city: 'Yiwu', region: 'Zhejiang', specialty: 'Small Commodities' },
];

const warehousingServiceSchema = generateServiceSchema({
  name: 'China Warehousing Services',
  description: 'Professional warehousing services in China including secure storage, loading/unloading, weighing, packing, palletizing, labeling, and quality inspection for international shipments.',
  url: `${ORGANIZATION_INFO.url}/warehousing`,
  features: [
    'Secure climate-controlled storage',
    'Loading and unloading services',
    'Weighing and measurement',
    'Professional packing',
    'Palletizing services',
    'Labeling and barcoding',
    'Quality inspection',
    'Inventory management',
    'Container loading supervision',
  ],
});

export default function WarehousingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(warehousingServiceSchema),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Warehousing' },
            ]}
            variant="light"
            className="mb-6"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                  <Warehouse className="h-8 w-8 text-orange" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  China Warehousing Services
                </h1>
              </div>
              <p className="text-lg text-white/80 mb-8 max-w-3xl">
                Professional warehousing and logistics services across China. From secure storage to quality inspection, we provide comprehensive solutions to support your international supply chain.
              </p>
              <Button asChild className="bg-orange hover:bg-orange-dark text-white lg:hidden">
                <Link href="/quote">
                  Get Warehousing Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <HeroQuoteForm defaultService="warehousing" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Comprehensive Warehousing Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our China warehousing services cover every aspect of storage and handling, ensuring your goods are properly managed from arrival to shipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {warehousingServices.map((service) => {
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

      {/* Why Choose Our Warehousing Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Why Choose Our China Warehousing?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our strategically located warehouses across China provide the infrastructure and expertise needed for efficient international trade operations. We handle your goods with care and precision.
              </p>

              <div className="space-y-4">
                {warehouseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-white mb-2">50,000+</div>
                    <div className="text-white/80">Square Meters of Storage</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-orange mb-2">6</div>
                    <div className="text-white/80">Strategic Locations in China</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl font-bold text-white mb-2">24/7</div>
                    <div className="text-white/80">Security Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Locations Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Warehouse Locations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategically positioned near major ports and manufacturing centers for efficient logistics operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {warehouseLocations.map((location) => (
              <Card key={location.city} className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{location.city}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{location.region}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange/10 text-orange text-sm">
                    {location.specialty}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value-Added Services Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Value-Added Services
              </h2>
              <p className="text-muted-foreground">
                Beyond basic storage, we offer comprehensive services to streamline your supply chain.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Consolidation Services</h3>
                    <p className="text-muted-foreground text-sm">Combine shipments from multiple suppliers into single containers for cost-effective shipping.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Kitting & Assembly</h3>
                    <p className="text-muted-foreground text-sm">Light assembly and product bundling services to prepare goods for retail distribution.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Repackaging</h3>
                    <p className="text-muted-foreground text-sm">Custom repackaging services to meet destination country requirements or retail specifications.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Photo Documentation</h3>
                    <p className="text-muted-foreground text-sm">Detailed photographic records of goods at various stages for quality assurance and claims prevention.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Cross-Docking</h3>
                    <p className="text-muted-foreground text-sm">Rapid transfer of goods from inbound to outbound transportation with minimal storage time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Returns Processing</h3>
                    <p className="text-muted-foreground text-sm">Efficient handling of returned goods including inspection, sorting, and restocking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Need Warehousing in China?"
        description="Get secure storage and comprehensive logistics services for your international shipments. Contact us for a customized warehousing solution."
        primaryAction={{ label: 'Get Warehousing Quote', href: '/quote' }}
      />
    </>
  );
}
