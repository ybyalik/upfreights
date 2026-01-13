import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Plane,
  Clock,
  Calendar,
  Package,
  ArrowRight,
  CheckCircle,
  FileText,
  Zap,
  AlertTriangle,
  Shield,
  Flame,
  ShieldAlert,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumbs,
  CTASection,
  FAQSchema,
} from '@/components/sections';
import { generateAirFreightFAQs } from '@/lib/utils/generateFAQ';
import {
  getCommonGoods,
  getGoodsSectionTitle,
  getGoodsIntroText,
} from '@/lib/utils/commonGoods';
import {
  getRequiredDocuments,
  getDocumentsSectionTitle,
  getDocumentsIntroText,
  getNuancesSectionTitle,
} from '@/lib/utils/requiredDocuments';
import {
  getCustomsClearance,
  getClearanceSectionTitle,
  getClearanceIntroText,
  getKeyFocusTitle,
} from '@/lib/utils/customsClearance';
import {
  getDangerousGoodsRules,
  getUniversalDGRequirements,
  getDGSectionTitle,
  getDGIntroText,
  getDGConsiderationsTitle,
} from '@/lib/utils/dangerousGoods';
import {
  getShippingRisks,
  getRisksSectionTitle,
  getRisksIntroText,
  getRisksCTAText,
  getSeverityClasses,
} from '@/lib/utils/shippingRisks';
import {
  getAirFreightContent,
  getAirFreightSectionTitles,
} from '@/lib/utils/airFreightContent';
import {
  getRouteByFlatSlug,
  getAllFlatRouteSlugs,
  getRoutesByOrigin,
  getRoutesByDestination,
} from '@/lib/data/routeGenerator';

interface AirFreightPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allSlugs = getAllFlatRouteSlugs();
  return allSlugs
    .filter((s) => s.type === 'air')
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: AirFreightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteByFlatSlug(slug, 'air');

  if (!route) {
    return { title: 'Route Not Found' };
  }

  return {
    title: `Air Freight from ${route.originCity} to ${route.destinationCity}`,
    description: `Fast air freight shipping from ${route.originCity} to ${route.destinationCity}. Express, standard, and economy options with ${route.transitTime} transit time.`,
    alternates: {
      canonical: `/air-freight-${slug}`,
    },
    openGraph: {
      title: `Air Freight from ${route.originCity} to ${route.destinationCity} | UpFreights`,
      description: `Ship by air from ${route.originCity} to ${route.destinationCity} with ${route.transitTime} transit time.`,
    },
  };
}

export default async function AirFreightRoutePage({ params }: AirFreightPageProps) {
  const { slug } = await params;
  const route = getRouteByFlatSlug(slug, 'air');

  if (!route) {
    notFound();
  }

  // Get routes from same origin (excluding current route)
  const routesFromOrigin = getRoutesByOrigin(route.originCity, 'air')
    .filter((r) => r.id !== route.id)
    .slice(0, 20);

  // Get routes to same destination (excluding current route)
  const routesToDestination = getRoutesByDestination(route.destinationCity, 'air')
    .filter((r) => r.id !== route.id)
    .slice(0, 20);

  // Generate FAQs for this route
  const faqs = generateAirFreightFAQs(route);

  // Get common goods for this route
  const commonGoods = getCommonGoods(route.originCity, route.destinationCity, route.destinationCountry);
  const goodsSectionTitle = getGoodsSectionTitle(route.originCity, route.destinationCity);
  const goodsIntroText = getGoodsIntroText(route.originCity, route.destinationCity, route.destinationCountry);

  // Get required documents for this route
  const requiredDocs = getRequiredDocuments(route.originCity, route.destinationCity, route.destinationCountry, 'air');
  const docsSectionTitle = getDocumentsSectionTitle(route.originCity, route.destinationCity);
  const docsIntroText = getDocumentsIntroText(route.originCity, route.destinationCity, route.destinationCountry, 'air');
  const nuancesSectionTitle = getNuancesSectionTitle(route.destinationCountry);

  // Get customs clearance info for this route
  const customsClearance = getCustomsClearance(route.originCity, route.destinationCity, route.destinationCountry, 'air');
  const clearanceSectionTitle = getClearanceSectionTitle(route.originCity, route.destinationCity, route.destinationCountry);
  const clearanceIntroText = getClearanceIntroText(route.originCity, route.destinationCity, route.destinationCountry, 'air');
  const keyFocusTitle = getKeyFocusTitle(route.destinationCountry);

  // Get dangerous goods info for this route
  const dgRules = getDangerousGoodsRules(route.originCity, route.destinationCity, route.destinationCountry, 'air');
  const universalDGReqs = getUniversalDGRequirements(route.originCity, route.destinationCity);
  const dgSectionTitle = getDGSectionTitle(route.originCity, route.destinationCity, route.destinationCountry);
  const dgIntroText = getDGIntroText(route.originCity, route.destinationCity, route.destinationCountry, 'air');
  const dgConsiderationsTitle = getDGConsiderationsTitle(route.destinationCountry);

  // Get shipping risks for this route
  const shippingRisks = getShippingRisks(route.originCity, route.destinationCity, route.destinationCountry, 'air');
  const risksSectionTitle = getRisksSectionTitle(route.originCity, route.destinationCity, route.destinationCountry, 'air');
  const risksIntroText = getRisksIntroText(route.originCity, route.destinationCity, route.destinationCountry, 'air');
  const risksCTA = getRisksCTAText(route.destinationCountry, 'air');

  // Get AI-generated content for benefits, rates, and transit times
  const airFreightContent = getAirFreightContent(route.originCity, route.destinationCity);
  const airFreightTitles = getAirFreightSectionTitles(route.originCity, route.destinationCity);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent transform skew-x-[-12deg] origin-top-right" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 lg:col-start-1">
              <Breadcrumbs
                items={[
                  { label: 'Air Freight', href: '/air-freight' },
                  { label: `${route.originCity} to ${route.destinationCity}` },
                ]}
                variant="light"
                className="mb-8"
              />

              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-teal text-white border-0">
                  <Plane className="h-3 w-3 mr-1.5" />
                  Air Freight
                </Badge>
                {route.isPopular && (
                  <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                    Popular Route
                  </Badge>
                )}
              </div>

              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Air Freight from {route.originCity} to {route.destinationCity}
              </h1>

              <p className="text-lg lg:text-xl text-white/75 mb-8 max-w-2xl leading-relaxed">
                Fast and reliable air freight service from {route.originCity} to {route.destinationCity}.
                Express, standard, and economy options available with door-to-door delivery
                and real-time tracking.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                {['Fast Delivery', 'Express Options', 'Door-to-Door', 'Real-Time Tracking'].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-md px-4 py-2.5 border border-white/10"
                  >
                    <CheckCircle className="h-4 w-4 text-teal-light" />
                    <span className="text-white text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-teal-light" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider">Transit</p>
                    <p className="text-white font-semibold">{route.transitTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-copper/20 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-copper-light" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider">Departures</p>
                    <p className="text-white font-semibold">{route.frequency}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Generated Content Sections - Benefits, Rates, Transit Times */}
      {airFreightContent && (
        <>
          {/* Benefits Section - Feature Grid Layout */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-12 gap-8 mb-12">
                <div className="lg:col-span-8">
                  <p className="text-teal font-medium text-sm uppercase tracking-wider mb-2">Why Air Freight</p>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                    {airFreightTitles.benefits}
                  </h2>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card className="border-border/50 bg-teal/5">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-teal" />
                    </div>
                    <h4 className="font-heading font-bold text-foreground mb-2">Fast Delivery</h4>
                    <p className="text-sm text-muted-foreground">2-3 days vs 15-18 days by ocean freight</p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-teal/5">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-teal" />
                    </div>
                    <h4 className="font-heading font-bold text-foreground mb-2">Daily Flights</h4>
                    <p className="text-sm text-muted-foreground">Multiple carrier options available daily</p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-teal/5">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-teal" />
                    </div>
                    <h4 className="font-heading font-bold text-foreground mb-2">Lower Risk</h4>
                    <p className="text-sm text-muted-foreground">Reduced handling and shorter exposure time</p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-teal/5">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-teal" />
                    </div>
                    <h4 className="font-heading font-bold text-foreground mb-2">Pre-Clearance</h4>
                    <p className="text-sm text-muted-foreground">Expedited customs processing programs</p>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Text */}
              <div className="bg-cream rounded-2xl p-8 lg:p-10">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="leading-relaxed">{airFreightContent.benefits}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Rates Section - Sidebar Summary Layout */}
          <section className="py-20 lg:py-28 bg-cream">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-12 gap-8 mb-12">
                <div className="lg:col-span-8">
                  <p className="text-teal font-medium text-sm uppercase tracking-wider mb-2">Pricing Guide</p>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                    {airFreightTitles.rates}
                  </h2>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-7">
                  <div className="bg-white rounded-2xl p-8 lg:p-10 border border-border/50">
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                      <p className="leading-relaxed">{airFreightContent.rates}</p>
                    </div>
                  </div>
                </div>

                {/* Sticky Sidebar */}
                <div className="lg:col-span-5">
                  <div className="lg:sticky lg:top-24 space-y-6">
                    {/* Quick Rates Card */}
                    <Card className="border-teal border-2 bg-white">
                      <CardContent className="p-6">
                        <h4 className="font-heading font-bold text-lg text-foreground mb-4">Quick Rate Guide</h4>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center pb-3 border-b border-border/50">
                            <div>
                              <p className="font-medium text-foreground">Express</p>
                              <p className="text-xs text-muted-foreground">1-2 day priority</p>
                            </div>
                            <p className="font-bold text-teal">$6-8/kg</p>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b border-border/50">
                            <div>
                              <p className="font-medium text-foreground">Standard</p>
                              <p className="text-xs text-muted-foreground">3-5 day transit</p>
                            </div>
                            <p className="font-bold text-teal">$3.50-5/kg</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium text-foreground">Economy</p>
                              <p className="text-xs text-muted-foreground">5-7 day deferred</p>
                            </div>
                            <p className="font-bold text-teal">$3-4/kg</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Additional Costs Card */}
                    <Card className="border-border/50 bg-slate/5">
                      <CardContent className="p-6">
                        <h4 className="font-heading font-bold text-foreground mb-3">Additional Costs</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Fuel Surcharge</span>
                            <span className="font-medium">~$1.20/kg</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Security Fee</span>
                            <span className="font-medium">~$0.15/kg</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Terminal Handling</span>
                            <span className="font-medium">~$0.25/kg</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Customs Brokerage</span>
                            <span className="font-medium">$150-350</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* CTA */}
                    <Button asChild className="w-full bg-teal hover:bg-teal-dark text-white">
                      <Link href="/quote">
                        Get Exact Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Transit Times Section - Timeline Layout */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-12 gap-8 mb-12">
                <div className="lg:col-span-8">
                  <p className="text-teal font-medium text-sm uppercase tracking-wider mb-2">Delivery Timeline</p>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                    {airFreightTitles.transitTimes}
                  </h2>
                </div>
              </div>

              {/* Visual Timeline */}
              <div className="mb-12">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-teal/20 -translate-y-1/2" />

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
                    {[
                      { step: 'Cargo Acceptance', time: '4-8 hrs', icon: Package, description: 'Security screening at origin' },
                      { step: 'Flight Transit', time: '12-14 hrs', icon: Plane, description: 'Direct flight to destination' },
                      { step: 'Customs Clearance', time: '4-24 hrs', icon: FileText, description: 'TSA and CBP inspection' },
                      { step: 'Release & Sort', time: '2-4 hrs', icon: CheckCircle, description: 'Cargo release and sorting' },
                      { step: 'Final Delivery', time: 'Same/Next day', icon: ArrowRight, description: 'Door delivery' },
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="relative">
                          {/* Timeline dot - hidden on mobile */}
                          <div className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-teal border-4 border-background z-10" />

                          <Card className="border-border/50 h-full lg:mt-6">
                            <CardContent className="p-5 text-center">
                              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mx-auto mb-3">
                                <Icon className="h-5 w-5 text-teal" />
                              </div>
                              <p className="text-xs text-teal font-semibold uppercase tracking-wider mb-1">Step {index + 1}</p>
                              <h4 className="font-heading font-bold text-foreground text-sm mb-1">{item.step}</h4>
                              <p className="text-lg font-bold text-teal mb-1">{item.time}</p>
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            </CardContent>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Service Level Summary */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-teal text-white rounded-xl p-6">
                  <p className="text-teal-light text-xs uppercase tracking-wider mb-1">Express</p>
                  <p className="text-3xl font-bold mb-2">1-2 Days</p>
                  <p className="text-white/80 text-sm">Door-to-door with priority handling</p>
                </div>
                <div className="bg-slate text-white rounded-xl p-6">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Standard</p>
                  <p className="text-3xl font-bold mb-2">3-5 Days</p>
                  <p className="text-white/80 text-sm">Regular service with full tracking</p>
                </div>
                <div className="bg-cream-dark rounded-xl p-6">
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Economy</p>
                  <p className="text-3xl font-bold text-foreground mb-2">5-7 Days</p>
                  <p className="text-muted-foreground text-sm">Consolidated for cost savings</p>
                </div>
              </div>

              {/* Detailed Text */}
              <div className="bg-cream rounded-2xl p-8 lg:p-10">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="leading-relaxed">{airFreightContent.transitTimes}</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Service Stats */}
      <section className="py-20 lg:py-28 bg-slate relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal/20 transform skew-x-[-6deg] origin-top-right hidden lg:block" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="text-teal-light font-medium text-sm uppercase tracking-wider mb-2">Track Record</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
                Reliable Service
              </h2>
              <p className="text-white/70 leading-relaxed">
                Years of experience moving cargo quickly and safely between {route.originCity} and {route.destinationCity}.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="font-heading text-4xl lg:text-5xl font-bold text-teal-light mb-2">15+</p>
                <p className="text-white/60 text-sm uppercase tracking-wider">Years Experience</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 mt-6">
                <p className="font-heading text-4xl lg:text-5xl font-bold text-white mb-2">50K+</p>
                <p className="text-white/60 text-sm uppercase tracking-wider">Shipments Delivered</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="font-heading text-4xl lg:text-5xl font-bold text-copper-light mb-2">99%</p>
                <p className="text-white/60 text-sm uppercase tracking-wider">On-Time Delivery</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 mt-6">
                <p className="font-heading text-4xl lg:text-5xl font-bold text-white mb-2">24/7</p>
                <p className="text-white/60 text-sm uppercase tracking-wider">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-cream-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-5">
              <p className="text-teal font-medium text-sm uppercase tracking-wider mb-2">Process</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                How Air Freight Works
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="space-y-8">
                {[
                  { step: 1, title: 'Quote & Booking', description: 'Get a quote and book your air freight shipment.', timeline: 'Same day' },
                  { step: 2, title: 'Collection', description: 'We collect cargo from your location.', timeline: '1 day' },
                  { step: 3, title: 'Flight Transit', description: 'Your cargo flies to the destination.', timeline: '1-5 days' },
                  { step: 4, title: 'Customs Clearance', description: 'Fast customs processing at destination.', timeline: '1 day' },
                  { step: 5, title: 'Final Delivery', description: 'Cargo delivered to your door.', timeline: 'Same day' },
                ].map((step, index) => (
                  <div key={index} className="relative pl-0 md:pl-14">
                    <div className="hidden md:flex absolute left-0 top-0 w-10 h-10 rounded-full bg-teal text-white font-heading font-bold items-center justify-center z-10">
                      {step.step}
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 card-lift">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h4 className="font-heading font-bold text-foreground">{step.title}</h4>
                        <span className="text-xs bg-teal/10 text-teal px-2 py-1 rounded font-medium shrink-0">
                          {step.timeline}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="lg:sticky lg:top-24">
                <div className="bg-slate rounded-2xl p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-teal/20 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-teal-light" />
                    </div>
                    <h4 className="font-heading font-bold text-white">Key Documents</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      ...requiredDocs.universal.slice(0, 2).map(d => d.name),
                      ...requiredDocs.airSpecific.slice(0, 3).map(d => d.name),
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-light flex-shrink-0" />
                        <span className="text-sm text-white/80">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Goods Section */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-8">
              <p className="text-teal font-medium text-sm uppercase tracking-wider mb-2">Cargo Types</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {goodsSectionTitle}
              </h2>
              <p className="text-muted-foreground">
                {goodsIntroText}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonGoods.map((item, index) => (
              <Card key={index} className="border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <Package className="h-5 w-5 text-teal" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground mb-2">{item.category}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-8">
              <p className="text-teal font-medium text-sm uppercase tracking-wider mb-2">Documentation</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {docsSectionTitle}
              </h2>
              <p className="text-muted-foreground">
                {docsIntroText}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Universal Requirements */}
            <Card className="border-border/50">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-teal" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground">Universal Requirements</h3>
                </div>
                <div className="space-y-4">
                  {requiredDocs.universal.map((doc, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">{doc.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Air Freight Specific Requirements */}
            <Card className="border-border/50">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                    <Plane className="h-5 w-5 text-teal" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground">Air Freight Requirements for {route.destinationCountry}</h3>
                </div>
                <div className="space-y-4">
                  {requiredDocs.airSpecific.map((doc, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">
                          {doc.name}
                          {!doc.required && <span className="ml-2 text-xs text-muted-foreground">(if applicable)</span>}
                        </p>
                        <p className="text-sm text-muted-foreground">{doc.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Country-Specific Nuances */}
          <div className="bg-teal/5 rounded-2xl p-6 lg:p-8 border border-teal/20">
            <h3 className="font-heading font-bold text-lg text-foreground mb-4">{nuancesSectionTitle}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {requiredDocs.nuances.map((nuance, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{nuance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customs Clearance Section */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-8">
              <p className="text-teal font-medium text-sm uppercase tracking-wider mb-2">Customs</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {clearanceSectionTitle}
              </h2>
              <p className="text-muted-foreground">
                {clearanceIntroText}
              </p>
            </div>
            <div className="lg:col-span-4 flex items-end justify-end">
              <div className="flex items-center gap-2 bg-slate/10 rounded-lg px-4 py-2">
                <Shield className="h-5 w-5 text-slate" />
                <span className="text-sm font-medium text-foreground">{customsClearance.agencyAbbreviation}</span>
                <span className="text-sm text-muted-foreground">({customsClearance.agencyName})</span>
              </div>
            </div>
          </div>

          {/* Clearance Rules */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {customsClearance.airRules.map((rule, index) => (
              <Card
                key={index}
                className={`border-border/50 ${rule.isWarning ? 'border-l-4 border-l-amber-500' : ''}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      rule.isWarning ? 'bg-amber-100' : 'bg-teal/10'
                    }`}>
                      {rule.isWarning ? (
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-teal" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground mb-2">{rule.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{rule.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Focus Areas */}
          <div className="bg-slate rounded-2xl p-6 lg:p-8">
            <h3 className="font-heading font-bold text-lg text-white mb-4">
              {keyFocusTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {customsClearance.keyFocus.map((focus, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-teal-light">{index + 1}</span>
                  </div>
                  <p className="text-sm text-white/80">{focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dangerous Goods Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-8">
              <p className="text-amber-600 font-medium text-sm uppercase tracking-wider mb-2">Hazardous Materials</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {dgSectionTitle}
              </h2>
              <p className="text-muted-foreground">
                {dgIntroText}
              </p>
            </div>
            <div className="lg:col-span-4 flex items-end justify-end">
              <div className="flex items-center gap-2 bg-amber-50 rounded-lg px-4 py-2 border border-amber-200">
                <Flame className="h-5 w-5 text-amber-600" />
                <span className="text-sm font-medium text-amber-800">IATA DGR Regulated</span>
              </div>
            </div>
          </div>

          {/* Universal DG Requirements */}
          <div className="mb-8">
            <h3 className="font-heading font-bold text-lg text-foreground mb-4">Universal Requirements for All Dangerous Goods</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {universalDGReqs.map((req, index) => (
                <Card key={index} className="border-amber-200 bg-amber-50/50">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Flame className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm mb-1">{req.title}</h4>
                        <p className="text-xs text-muted-foreground">{req.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Country-Specific DG Rules */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {dgRules.airRules.map((rule, index) => (
              <Card
                key={index}
                className={`border-border/50 ${rule.isWarning ? 'border-l-4 border-l-red-500' : ''}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      rule.isWarning ? 'bg-red-100' : 'bg-teal/10'
                    }`}>
                      {rule.isWarning ? (
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-teal" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground mb-2">{rule.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{rule.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* DG Considerations */}
          <div className="bg-amber-900 rounded-2xl p-6 lg:p-8">
            <h3 className="font-heading font-bold text-lg text-white mb-4">
              {dgConsiderationsTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {dgRules.keyConsiderations.map((consideration, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-amber-100">{index + 1}</span>
                  </div>
                  <p className="text-sm text-amber-100/90">{consideration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Risks Section */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-8">
              <p className="text-red-600 font-medium text-sm uppercase tracking-wider mb-2">Risk Awareness</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {risksSectionTitle}
              </h2>
              <p className="text-muted-foreground">
                {risksIntroText}
              </p>
            </div>
            <div className="lg:col-span-4 flex items-end justify-end">
              <div className="flex items-center gap-2 bg-red-50 rounded-lg px-4 py-2 border border-red-200">
                <ShieldAlert className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium text-red-800">Current Risks</span>
              </div>
            </div>
          </div>

          {/* Risk Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {shippingRisks.map((risk, index) => {
              const severityClasses = getSeverityClasses(risk.severity);
              return (
                <Card
                  key={index}
                  className={`border-2 ${severityClasses.border} ${severityClasses.bg}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        risk.severity === 'high' ? 'bg-red-100' : risk.severity === 'medium' ? 'bg-amber-100' : 'bg-blue-100'
                      }`}>
                        <AlertTriangle className={`h-5 w-5 ${severityClasses.icon}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-heading font-bold text-foreground">{risk.title}</h4>
                          <Badge variant="outline" className={`text-xs ${severityClasses.text} ${severityClasses.border}`}>
                            {risk.severity === 'high' ? 'High' : risk.severity === 'medium' ? 'Moderate' : 'Low'}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{risk.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Box */}
          <div className="bg-slate rounded-2xl p-6 lg:p-8">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  {risksCTA.heading}
                </h3>
                <p className="text-white/80">
                  {risksCTA.description}
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Button asChild className="bg-teal hover:bg-teal-dark text-white">
                  <Link href="/quote">Get Expert Help</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema for SEO */}
      <FAQSchema faqs={faqs} />

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-6">
              <p className="text-teal font-medium text-sm uppercase tracking-wider mb-2">FAQs</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-heading font-bold text-foreground mb-3">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Other Routes */}
      {(routesFromOrigin.length > 0 || routesToDestination.length > 0) && (
        <section className="py-16 lg:py-24 bg-cream border-t border-border">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <p className="text-teal font-medium text-sm uppercase tracking-wider mb-2">More Routes</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                Explore Other Routes
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Routes from same origin */}
              {routesFromOrigin.length > 0 && (
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                    <Plane className="h-5 w-5 text-teal" />
                    Air Freight from {route.originCity}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2">
                    {routesFromOrigin.map((r) => (
                      <Link
                        key={r.id}
                        href={`/air-freight-${r.slug}`}
                        className="text-sm text-muted-foreground hover:text-teal transition-colors py-1 truncate"
                      >
                        → {r.destinationCity}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Routes to same destination */}
              {routesToDestination.length > 0 && (
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                    <Plane className="h-5 w-5 text-teal" />
                    Air Freight to {route.destinationCity}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2">
                    {routesToDestination.map((r) => (
                      <Link
                        key={r.id}
                        href={`/air-freight-${r.slug}`}
                        className="text-sm text-muted-foreground hover:text-teal transition-colors py-1 truncate"
                      >
                        ← {r.originCity}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        variant="gradient"
        title="Get Your Air Freight Quote"
        description={`Ready to ship from ${route.originCity} to ${route.destinationCity}? Get a competitive quote today.`}
        primaryAction={{ label: 'Request Quote Now', href: '/quote' }}
        secondaryAction={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
