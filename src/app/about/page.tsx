import { Metadata } from 'next';
import {
  Globe,
  MapPin,
  Ship,
  Users,
  Award,
  CheckCircle,
  Building,
  Clock,
  Star,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/components/sections';
import { generateAboutPageSchema, generatePersonSchema, TEAM_MEMBERS, generateOrganizationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Us | Upfreights - China Freight Forwarding',
  description:
    'Your Premier China Freight Forwarding Partner in the Yangtze River Delta. 22 years of experience, 11+ million shipments annually, 100+ countries global network.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Upfreights | China Freight Forwarding Partner',
    description:
      'Premier China freight forwarding with 22 years experience. Headquartered in Jiaxing with strategic access to Shanghai and Ningbo ports.',
  },
};

const stats = [
  { value: '22', label: 'Years of Experience' },
  { value: '11+ Million', label: 'Successful Shipments Annually' },
  { value: '100+', label: 'Countries Global Network' },
];

const locations = [
  {
    title: 'Jiaxing Headquarters',
    description: 'Located in Zhejiang province, in the heart of the Yangtze River Delta economic circle.',
  },
  {
    title: 'Shanghai Access',
    description: 'Just 98.5km from Shanghai - accessible within one hour drive for seamless port operations.',
  },
  {
    title: 'Ningbo Proximity',
    description: '148km from Ningbo port with convenient one-hour access to major container terminals.',
  },
  {
    title: 'Zhapu Port',
    description: 'Close to Zhapu Port with combined sea-river transportation capabilities for enhanced logistics.',
  },
];

const team = [
  {
    name: 'David Fan',
    role: 'Co-founder & CEO',
    description: 'Strategic leadership and business development with extensive experience in international trade and logistics operations.',
  },
  {
    name: 'Victoria Lang',
    role: 'Chief Operational Officer',
    description: 'Operational excellence and process optimization expert, ensuring smooth logistics operations across all service lines.',
  },
  {
    name: 'Kaylee Zhang',
    role: 'Sales Manager',
    description: 'Client relationship management and business development specialist with deep understanding of market dynamics.',
  },
  {
    name: 'Richard Wang',
    role: 'Senior Sales',
    description: 'Senior sales professional with expertise in complex logistics solutions and international market development.',
  },
];

const qualityFirst = [
  'Reject race-to-bottom pricing strategies',
  'Meticulous attention to operational details',
  'Action-oriented problem-solving approach',
  'Comprehensive quality management systems',
  'Continuous process improvement initiatives',
];

const economicAdvantages = [
  'Yiwu Small Commodity Market access',
  'Suzhou Electronics Industrial Park connections',
  'Yangtze River Delta economic circle presence',
  'Multi-modal transportation capabilities',
  'Strategic supplier network relationships',
];

const whyChoose = [
  {
    icon: Clock,
    title: '22 Years of Excellence',
    description: 'Nearly two decades of logistics industry expertise with partners who understand the complexities of international trade and shipping.',
  },
  {
    icon: Globe,
    title: 'Global Network Coverage',
    description: 'Comprehensive reach spanning South Asia, Middle East, Africa, Central Asia, Europe, and the Americas with over 100 countries in our network.',
  },
  {
    icon: MapPin,
    title: 'Strategic Location Advantage',
    description: 'Headquartered in Jiaxing with one-hour access to Shanghai and Ningbo ports, positioned in the heart of China\'s economic powerhouse region.',
  },
  {
    icon: Star,
    title: 'Widespread Recognition',
    description: 'Our meticulous attention to detail and action-oriented approach have earned us widespread recognition in the freight forwarding industry.',
  },
];

// Generate about page schemas
const aboutPageSchema = generateAboutPageSchema();
const teamPersonSchemas = TEAM_MEMBERS.map((member) => generatePersonSchema(member));

// Combine all schemas
const aboutSchemas = {
  '@context': 'https://schema.org',
  '@graph': [
    aboutPageSchema,
    ...teamPersonSchemas,
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchemas),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Upfreights
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Your Premier China Freight Forwarding Partner in the{' '}
              <span className="text-orange">Yangtze River Delta</span>
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border/50 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-orange mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Upfreights Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              About Upfreights
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                Upfreights.com, a global logistics platform focused on modernizing international trade,
                proudly operates Zhejiang Twings Supply Chain Co., Ltd. (Twings) as its specialized
                freight forwarding subsidiary in China.
              </p>
              <p>
                Founded in 2016, Twings draws its name—Twings = Tiger + Wings—from the Chinese idiom
                &quot;adding wings to a tiger,&quot; reflecting our mission to empower clients&apos; import and
                export operations with enhanced strength and efficiency.
              </p>
              <p>
                Backed by nearly two decades of industry expertise, Twings delivers end-to-end freight
                forwarding solutions for both China&apos;s outbound exports and its growing import trade.
                Our global service coverage spans South Asia, the Middle East, North and Sub-Saharan
                Africa, Central Asia, Europe, and the Americas.
              </p>
              <p>
                In a competitive logistics landscape, Twings distinguishes itself by rejecting
                low-quality, low-price tactics. Instead, we focus on delivering operational excellence,
                precision, and reliability—values that have earned us lasting trust and recognition
                in the freight forwarding industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Location Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange text-sm font-medium mb-4">
                <MapPin className="h-4 w-4" />
                Strategic Location
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Yangtze River Delta Logistics Operations
              </h2>
              <p className="text-muted-foreground mb-8">
                Perfectly positioned in the heart of China&apos;s most dynamic economic region.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {locations.map((location, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{location.title}</h3>
                      <p className="text-sm text-muted-foreground">{location.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-ocean/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Building className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Jiaxing, Zhejiang</h3>
                  <p className="text-muted-foreground text-sm">Yangtze River Delta Economic Circle</p>
                  <div className="mt-6 space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Ship className="h-4 w-4 text-orange" />
                      <span>98.5km to Shanghai Port</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Ship className="h-4 w-4 text-ocean" />
                      <span>148km to Ningbo Port</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals with deep expertise in international logistics and trade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-orange mb-3">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Philosophy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quality and efficiency drive everything we do, setting us apart in the competitive freight forwarding market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-orange" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Quality First Approach</h3>
                <ul className="space-y-3">
                  {qualityFirst.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Globe className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Economic Zone Advantages</h3>
                <ul className="space-y-3">
                  {economicAdvantages.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Businesses Choose Twings
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The mutual trust we&apos;ve built with our customers forms the foundation of our continued business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-orange" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Ready to Ship With Us?"
        description="Partner with Twings for reliable, quality-focused freight forwarding from China. Get a free quote today."
      />
    </>
  );
}
