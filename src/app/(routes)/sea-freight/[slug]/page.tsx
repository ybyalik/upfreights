import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Ship,
  Clock,
  Calendar,
  Package,
  ArrowRight,
  Box,
  CheckCircle,
  FileText,
  Anchor,
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
  HeroQuoteForm,
  RoutePackSections,
} from '@/components/sections';
import { generateSeaFreightFAQs } from '@/lib/utils/generateFAQ';
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
  getRouteByFlatSlug,
  getAllFlatRouteSlugs,
  getRoutesByOrigin,
  getRoutesByDestination,
  getAllSeaRoutes,
} from '@/lib/data/routeGenerator';
import {
  getRoutePricing,
  getSubPortPricingByParent,
  getDestSubPortPricing,
  getRateDateLine,
  getTransitDaysLabel,
  formatPrice,
} from '@/lib/data/pricing';
import {
  getSeaFreightContent,
  getSeaFreightSectionTitles,
} from '@/lib/utils/seaFreightContent';
import { generateRouteServiceSchema } from '@/lib/schema';
import { getRoutePack, ROUTE_PAGE_AUTHOR } from '@/lib/data/routePacks';
import type { PricedRouteLink } from '@/components/sections/RoutePackSections';
import type { Route } from '@/lib/types';
import type { FAQItem } from '@/lib/utils/generateFAQ';

interface SeaFreightPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const allSlugs = getAllFlatRouteSlugs();
  return allSlugs
    .filter((s) => s.type === 'sea')
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: SeaFreightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteByFlatSlug(slug, 'sea');

  if (!route) {
    return { title: 'Route Not Found' };
  }

  const metaPack = getRoutePack(slug);
  const metaPricing = getRoutePricing(route.originCity, route.destinationCity);
  const title = metaPack
    ? metaPricing
      ? `${route.originCity} to ${route.destinationCity} Sea Freight: Rates and ${route.transitTime.replace('days', 'Days')}`
      : `${route.originCity} to ${route.destinationCity} Sea Freight: Port, Distance and Quote`
    : `Sea Freight Shipping from ${route.originCity} to ${route.destinationCity}`;
  const metaLowest = metaPricing ? Math.min(...metaPricing.rates.map((r) => r.price40GP)) : null;
  const description =
    metaPack && metaLowest != null
      ? `Sea freight from ${route.originCity} to ${route.destinationCity}: from ${formatPrice(metaLowest)} per 40-foot container on our rate sheet, ${route.transitTime} port to port. Rates by shipping line, the port, the distance and a worked cost example.`
      : metaPack
      ? `Sea freight from ${route.originCity} to ${route.destinationCity}: the sea distance, how the container gets there, the port, road distances inland and how to get a quote.`
      : `Ship from ${route.originCity} to ${route.destinationCity}. Compare FCL/LCL rates, get door-to-door delivery, and 24/7 tracking. Get a free quote today!`;

  return {
    title,
    description,
    alternates: {
      canonical: `/sea-freight-${slug}`,
    },
    openGraph: {
      title,
      description,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  };
}

export default async function SeaFreightRoutePage({ params }: SeaFreightPageProps) {
  const { slug } = await params;
  const route = getRouteByFlatSlug(slug, 'sea');

  if (!route) {
    notFound();
  }

  // Get routes from same origin (excluding current route)
  const routesFromOrigin = getRoutesByOrigin(route.originCity, 'sea')
    .filter((r) => r.id !== route.id)
    .slice(0, 20);

  // Get routes to same destination (excluding current route)
  const routesToDestination = getRoutesByDestination(route.destinationCity, 'sea')
    .filter((r) => r.id !== route.id)
    .slice(0, 20);

  // Get real pricing data if available
  const routePricing = getRoutePricing(route.originCity, route.destinationCity);

  // Get sub-port pricing (Shekou/Yantian for Shenzhen, Nansha for Guangzhou)
  const subPortPricingData = getSubPortPricingByParent(route.originCity, route.destinationCity);

  // Get destination sub-port pricing (Vado Ligure for Genoa)
  const destSubPortPricingData = getDestSubPortPricing(route.originCity, route.destinationCity);

  // Routes with a fact pack show the new route page layout
  const pack = getRoutePack(slug);
  const lowestRate = routePricing
    ? routePricing.rates.reduce((best, r) => (r.price40GP < best.price40GP ? r : best))
    : null;
  const rateDateLine = getRateDateLine(routePricing);
  // A pack route with no rates on the sheet: no price and no transit figure is shown
  const noPricePack = !!pack && !lowestRate;

  // Priced links to nearby routes (pack routes only)
  const toLink = (r: Route, label: string): PricedRouteLink => {
    const p = getRoutePricing(r.originCity, r.destinationCity);
    return {
      label,
      href: `/sea-freight-${r.slug}`,
      price40: p ? Math.min(...p.rates.map((x) => x.price40GP)) : undefined,
      // days only where the rate sheet backs them
      days: p ? r.transitTime : undefined,
    };
  };
  const byPriceFirst = (a: PricedRouteLink, b: PricedRouteLink) =>
    (a.price40 == null ? 1 : 0) - (b.price40 == null ? 1 : 0) || a.label.localeCompare(b.label);
  const packFromOrigin: PricedRouteLink[] = pack
    ? getRoutesByOrigin(route.originCity, 'sea')
        .filter((r) => r.id !== route.id && r.destinationCountry === route.destinationCountry)
        .map((r) => toLink(r, `${r.originCity} to ${r.destinationCity}`))
        .sort(byPriceFirst)
        .slice(0, 10)
    : [];
  const packIntoDestination: PricedRouteLink[] = pack
    ? getRoutesByDestination(route.destinationCity, 'sea')
        .filter((r) => r.id !== route.id)
        .map((r) => toLink(r, `${r.originCity} to ${r.destinationCity}`))
        .sort(byPriceFirst)
        .slice(0, 10)
    : [];

  // For routes with no rate: the cheapest priced route into the same port, or from the same origin to the same country
  const nearestPriced =
    [...packIntoDestination, ...packFromOrigin]
      .filter((l) => l.price40 != null)
      .sort((a, b) => (a.price40 as number) - (b.price40 as number))[0] ?? null;

  // Country-wide figures from the rate sheet, for the general questions Google shows
  const countryPriced = pack
    ? getAllSeaRoutes()
        .filter((r) => r.destinationCountry === route.destinationCountry)
        .map((r) => getRoutePricing(r.originCity, r.destinationCity))
        .filter((p): p is NonNullable<typeof p> => !!p && p.rates.length > 0)
    : [];
  const countryDays = countryPriced.flatMap((p) => p.rates.map((r) => r.transitTime));
  const countryPrices = countryPriced.flatMap((p) => p.rates.map((r) => r.price40GP));
  const countryName = route.destinationCountry === 'United Kingdom' || route.destinationCountry === 'United States'
    ? `the ${route.destinationCountry}`
    : route.destinationCountry;
  const countryFaqs: FAQItem[] =
    countryPriced.length >= 2
      ? [
          {
            question: `How long does sea freight take from China to ${countryName}?`,
            answer: `Across the ${countryPriced.length} China to ${countryName} port pairs on our rate sheet, port-to-port transit runs from ${Math.min(...countryDays)} to ${Math.max(...countryDays)} days.${routePricing ? ` ${route.originCity} to ${route.destinationCity} is ${route.transitTime}.` : ''} Add time for customs and delivery.`,
          },
          {
            question: `How much does it cost to ship a 40-foot container from China to ${countryName}?`,
            answer: `Across those ${countryPriced.length} port pairs, our rate sheet shows 40-foot rates from ${formatPrice(Math.min(...countryPrices))} to ${formatPrice(Math.max(...countryPrices))}, port to port, before duty, tax and local charges. ${rateDateLine}`,
          },
        ]
      : [];

  // FAQs: pack routes get two answers worked out from the rate table, then
  // the route's own questions. Other routes keep the generated set.
  const packFaqs: FAQItem[] | null =
    pack && routePricing && lowestRate
      ? [
          {
            question: `How much does a 40-foot container cost from ${route.originCity} to ${route.destinationCity}?`,
            answer:
              routePricing.rates.length === 1
                ? `Our rate sheet shows ${formatPrice(lowestRate.price40GP)} for a 40-foot container with ${lowestRate.carrier}, port to port. ${rateDateLine}`
                : `Our rate sheet shows 40-foot rates from ${formatPrice(lowestRate.price40GP)} (${lowestRate.carrier}) to ${formatPrice(Math.max(...routePricing.rates.map((r) => r.price40GP)))}, port to port, across ${routePricing.rates.length} shipping lines. ${rateDateLine}`,
          },
          {
            question: `How long does sea freight take from ${route.originCity} to ${route.destinationCity}?`,
            answer: `${route.transitTime} port to port, by the transit days on our rate sheet. Add time for customs and for delivery from the port.`,
          },
          ...pack.faqs,
          ...countryFaqs,
        ]
      : pack
      ? [
          {
            question: `How much does a container cost from ${route.originCity} to ${route.destinationCity}?`,
            answer: `Our rate sheet has no price for ${route.originCity} to ${route.destinationCity}, so we quote it for your dates.${
              nearestPriced
                ? ` For comparison, it shows ${nearestPriced.label} from ${formatPrice(nearestPriced.price40 as number)} for a 40-foot container, port to port. ${rateDateLine}`
                : ''
            }`,
          },
          ...pack.faqs,
          ...countryFaqs,
        ]
      : null;
  const faqs = packFaqs ?? generateSeaFreightFAQs(route);

  // Get common goods for this route
  const commonGoods = getCommonGoods(route.originCity, route.destinationCity, route.destinationCountry);
  const goodsSectionTitle = getGoodsSectionTitle(route.originCity, route.destinationCity);
  const goodsIntroText = getGoodsIntroText(route.originCity, route.destinationCity, route.destinationCountry);

  // Get required documents for this route
  const requiredDocs = getRequiredDocuments(route.originCity, route.destinationCity, route.destinationCountry, 'sea');
  const docsSectionTitle = getDocumentsSectionTitle(route.originCity, route.destinationCity);
  const docsIntroText = getDocumentsIntroText(route.originCity, route.destinationCity, route.destinationCountry, 'sea');
  const nuancesTitle = getNuancesSectionTitle(route.destinationCountry);

  // Get customs clearance info for this route
  const customsClearance = getCustomsClearance(route.originCity, route.destinationCity, route.destinationCountry, 'sea');
  const clearanceSectionTitle = getClearanceSectionTitle(route.originCity, route.destinationCity, route.destinationCountry);
  const clearanceIntroText = getClearanceIntroText(route.originCity, route.destinationCity, route.destinationCountry, 'sea');
  const keyFocusTitle = getKeyFocusTitle(route.destinationCountry);

  // Get dangerous goods info for this route
  const dgRules = getDangerousGoodsRules(route.originCity, route.destinationCity, route.destinationCountry, 'sea');
  const universalDGReqs = getUniversalDGRequirements(route.originCity, route.destinationCity);
  const dgSectionTitle = getDGSectionTitle(route.originCity, route.destinationCity, route.destinationCountry);
  const dgIntroText = getDGIntroText(route.originCity, route.destinationCity, route.destinationCountry, 'sea');
  const dgConsiderationsTitle = getDGConsiderationsTitle(route.destinationCountry);

  // Get shipping risks for this route
  const shippingRisks = getShippingRisks(route.originCity, route.destinationCity, route.destinationCountry, 'sea');
  const risksSectionTitle = getRisksSectionTitle(route.originCity, route.destinationCity, route.destinationCountry, 'sea');
  const risksIntroText = getRisksIntroText(route.originCity, route.destinationCity, route.destinationCountry, 'sea');
  const risksCTA = getRisksCTAText(route.destinationCountry, 'sea');

  // Get AI-generated content for benefits, rates, and transit times
  const seaFreightContent = getSeaFreightContent(route.originCity, route.destinationCity);
  const seaFreightTitles = getSeaFreightSectionTitles(route.originCity, route.destinationCity);

  // Default pricing for display (when no real pricing available)
  const containerPricing = [
    { type: '20ft FCL', label: 'Standard', dimensions: '6.1m × 2.4m × 2.6m', transitTime: route.transitTime, priceRange: '$2,400 - $3,200' },
    { type: '40ft FCL', label: 'Popular', dimensions: '12.2m × 2.4m × 2.6m', transitTime: route.transitTime, priceRange: '$2,800 - $4,000' },
    { type: '40ft HC FCL', dimensions: '12.2m × 2.4m × 2.9m', transitTime: route.transitTime, priceRange: '$3,000 - $4,300' },
    { type: 'LCL Shipment', dimensions: 'Per CBM', transitTime: route.transitTime, priceRange: '$45 - $85 /CBM' },
  ];

  // Generate route-specific service schema
  const routeServiceSchema = generateRouteServiceSchema({
    origin: route.originCity,
    destination: route.destinationCity,
    originCountry: route.originCountry,
    destinationCountry: route.destinationCountry,
    slug: slug,
    serviceType: 'sea-freight',
    transitTime: noPricePack ? undefined : route.transitTime,
    frequency: route.frequency,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(routeServiceSchema),
        }}
      />
      {pack && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: `Sea freight from ${route.originCity} to ${route.destinationCity}`,
              url: `https://upfreights.com/sea-freight-${slug}`,
              dateModified: pack.updated,
              author: { '@type': 'Person', name: ROUTE_PAGE_AUTHOR.name, jobTitle: ROUTE_PAGE_AUTHOR.role },
              publisher: { '@type': 'Organization', name: 'UpFreights', url: 'https://upfreights.com' },
            }),
          }}
        />
      )}
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent transform skew-x-[-12deg] origin-top-right" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <Breadcrumbs
                items={[
                  // The country guide is the parent of every route into that country
                  { label: `China to ${route.destinationCountry}`, href: `/shipping-${route.destinationSlug}` },
                  { label: `${route.originCity} to ${route.destinationCity}` },
                ]}
                variant="light"
                className="mb-8"
              />

              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-copper text-white border-0">
                  <Ship className="h-3 w-3 mr-1.5" />
                  Sea Freight
                </Badge>
                {route.isPopular && (
                  <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                    Popular Route
                  </Badge>
                )}
              </div>

              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Sea Freight from {route.originCity} to {route.destinationCity}
              </h1>

              {pack ? (
                <div className="mb-10 max-w-2xl">
                  <p className="text-sm text-white/70 mb-5">
                    By {ROUTE_PAGE_AUTHOR.name}, {ROUTE_PAGE_AUTHOR.role}. Updated{' '}
                    {new Date(`${pack.updated}T12:00:00Z`).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      timeZone: 'UTC',
                    })}
                    .
                  </p>
                  <div className="bg-white/10 border border-white/15 rounded-lg p-5">
                    <p className="text-copper-light text-xs font-semibold uppercase tracking-wider mb-3">Quick answer</p>
                    <dl className="space-y-2 text-white">
                      <div className="flex gap-3">
                        <dt className="w-16 flex-shrink-0 text-white/60 text-sm pt-0.5">Cost</dt>
                        {lowestRate ? (
                          <dd>
                            From <span className="font-bold">{formatPrice(lowestRate.price40GP)}</span> for a 40-foot
                            container with {lowestRate.carrier}, port to port.
                          </dd>
                        ) : (
                          <dd>
                            Quoted for your dates. Our rate sheet has no price for this pair yet.
                            {nearestPriced && (
                              <>
                                {' '}Nearest on the sheet: {nearestPriced.label} from{' '}
                                <span className="font-bold">{formatPrice(nearestPriced.price40 as number)}</span>.
                              </>
                            )}
                          </dd>
                        )}
                      </div>
                      {lowestRate ? (
                        <div className="flex gap-3">
                          <dt className="w-16 flex-shrink-0 text-white/60 text-sm pt-0.5">Time</dt>
                          <dd>
                            <span className="font-bold">{route.transitTime}</span> port to port.
                          </dd>
                        </div>
                      ) : (
                        <div className="flex gap-3">
                          <dt className="w-16 flex-shrink-0 text-white/60 text-sm pt-0.5">Distance</dt>
                          <dd>
                            About <span className="font-bold">{pack.distance.nauticalMiles.toLocaleString('en-US')} nautical miles</span> by {pack.distance.via}.
                          </dd>
                        </div>
                      )}
                      <div className="flex gap-3">
                        <dt className="w-16 flex-shrink-0 text-white/60 text-sm pt-0.5">Route</dt>
                        <dd>{pack.quickRoute}</dd>
                      </div>
                      <div className="flex gap-3">
                        <dt className="w-16 flex-shrink-0 text-white/60 text-sm pt-0.5">Customs</dt>
                        <dd>
                          Duty, tax and the papers you need are in our{' '}
                          <Link href={pack.countryGuide.href} className="underline underline-offset-2 hover:text-copper-light">
                            China to {route.destinationCountry} guide
                          </Link>
                          .
                        </dd>
                      </div>
                    </dl>
                    {(lowestRate || nearestPriced) && (
                      <p className="text-xs text-white/60 leading-relaxed mt-4">{rateDateLine}</p>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-lg lg:text-xl text-white/75 mb-8 max-w-2xl leading-relaxed">
                    Cost-effective ocean shipping service from {route.originCity} port to {route.destinationCity}.
                    Comprehensive FCL and LCL container shipping solutions with reliable transit times
                    and professional cargo handling throughout the journey.
                  </p>

                  {/* Feature Badges */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {['Cost-Effective', 'FCL & LCL Options', 'Port-to-Port', 'Reliable Transit'].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-md px-4 py-2.5 border border-white/10"
                      >
                        <CheckCircle className="h-4 w-4 text-copper-light" />
                        <span className="text-white text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/20">
                {!noPricePack && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-copper/20 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-copper-light" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider">Transit</p>
                    <p className="text-white font-semibold">{route.transitTime}</p>
                  </div>
                </div>
                )}
                {pack ? (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center">
                      <Anchor className="h-5 w-5 text-teal-light" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider">Shortest sea route</p>
                      <p className="text-white font-semibold">
                        {pack.distance.nauticalMiles.toLocaleString('en-US')} nautical miles
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-teal-light" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider">Departures</p>
                      <p className="text-white font-semibold">{route.frequency}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-5 hidden lg:block">
              <HeroQuoteForm defaultService="sea" />
            </div>
          </div>
        </div>
      </section>

      {/* AI-Generated Content Sections - Benefits, Rates, Transit Times */}
      {seaFreightContent && !pack && (
        <>
          {/* Benefits Section - Feature Grid Layout */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-12 gap-8 mb-12">
                <div className="lg:col-span-8">
                  <p className="text-copper font-medium text-sm uppercase tracking-wider mb-2">Why Sea Freight</p>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                    {seaFreightTitles.benefits}
                  </h2>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card className="border-border/50 bg-copper/5">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center mb-4">
                      <Package className="h-6 w-6 text-copper" />
                    </div>
                    <h4 className="font-heading font-bold text-foreground mb-2">Cost Effective</h4>
                    <p className="text-sm text-muted-foreground">80-90% cheaper than air freight for bulk cargo</p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-copper/5">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center mb-4">
                      <Box className="h-6 w-6 text-copper" />
                    </div>
                    <h4 className="font-heading font-bold text-foreground mb-2">High Capacity</h4>
                    <p className="text-sm text-muted-foreground">FCL and LCL options for any shipment size</p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-copper/5">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center mb-4">
                      <Anchor className="h-6 w-6 text-copper" />
                    </div>
                    <h4 className="font-heading font-bold text-foreground mb-2">Reliable Service</h4>
                    <p className="text-sm text-muted-foreground">Weekly sailings from major carriers</p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-copper/5">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center mb-4">
                      <Ship className="h-6 w-6 text-copper" />
                    </div>
                    <h4 className="font-heading font-bold text-foreground mb-2">Global Network</h4>
                    <p className="text-sm text-muted-foreground">Direct routes to major ports worldwide</p>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Text with Highlights Sidebar */}
              <div className="bg-cream rounded-2xl p-8 lg:p-10">
                <div className="grid lg:grid-cols-12 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-8">
                    <div className="prose prose-xl max-w-none text-muted-foreground space-y-6">
                      {(() => {
                        const text = seaFreightContent.benefits;
                        const sentences = text.split(/(?<=[.!?])\s+/);
                        const midpoint = Math.ceil(sentences.length / 2);
                        const firstParagraph = sentences.slice(0, midpoint).join(' ');
                        const secondParagraph = sentences.slice(midpoint).join(' ');
                        return (
                          <>
                            <p className="leading-relaxed">{firstParagraph}</p>
                            {secondParagraph && <p className="leading-relaxed">{secondParagraph}</p>}
                          </>
                        );
                      })()}
                    </div>
                  </div>

                  {/* Highlights Sidebar */}
                  <div className="lg:col-span-4">
                    <div className="bg-white rounded-xl p-6 border border-border/50 lg:sticky lg:top-24">
                      <h4 className="font-heading font-bold text-foreground mb-4 text-sm uppercase tracking-wider">
                        Route Highlights
                      </h4>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-copper/10 flex items-center justify-center flex-shrink-0">
                            <Clock className="h-4 w-4 text-copper" />
                          </div>
                          <div>
                            <p className="font-bold text-foreground">{route.transitTime}</p>
                            <p className="text-xs text-muted-foreground">Transit Time</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-copper/10 flex items-center justify-center flex-shrink-0">
                            <Calendar className="h-4 w-4 text-copper" />
                          </div>
                          <div>
                            <p className="font-bold text-foreground">{route.frequency}</p>
                            <p className="text-xs text-muted-foreground">Sailing Frequency</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-copper/10 flex items-center justify-center flex-shrink-0">
                            <Ship className="h-4 w-4 text-copper" />
                          </div>
                          <div>
                            <p className="font-bold text-foreground">FCL & LCL</p>
                            <p className="text-xs text-muted-foreground">Container Options</p>
                          </div>
                        </div>
                      </div>

                      <Button asChild className="w-full bg-copper hover:bg-copper-dark text-white">
                        <Link href="/quote">
                          Get a Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Container Options & Pricing (left out on pack pages with no rates) */}
      {!noPricePack && (
      <section className="py-20 lg:py-28 pattern-dots">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-5">
              <p className="text-copper font-medium text-sm uppercase tracking-wider mb-2">Pricing</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                Container Options & Pricing
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-7 flex items-end">
              <p className="text-muted-foreground">
                {pack
                  ? 'Rates by shipping line from our own rate sheet, port to port, for a full container.'
                  : 'Transparent pricing for FCL and LCL shipments. All rates include standard handling.'}
              </p>
            </div>
          </div>

          {/* Show real carrier pricing if available */}
          {routePricing ? (
            <>
              <div className="overflow-x-auto mb-3">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate text-white">
                      <th className="px-6 py-4 text-left font-heading font-bold text-sm uppercase tracking-wider">Carrier</th>
                      {routePricing.rates.some(r => r.price20GP != null) && (
                        <th className="px-6 py-4 text-right font-heading font-bold text-sm uppercase tracking-wider">20GP (USD)</th>
                      )}
                      <th className="px-6 py-4 text-right font-heading font-bold text-sm uppercase tracking-wider">40GP (USD)</th>
                      <th className="px-6 py-4 text-right font-heading font-bold text-sm uppercase tracking-wider">40HQ (USD)</th>
                      <th className="px-6 py-4 text-right font-heading font-bold text-sm uppercase tracking-wider">Transit Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {routePricing.rates.map((rate, index) => (
                      <tr
                        key={rate.carrier}
                        className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-white' : 'bg-cream/50'} hover:bg-copper/5 transition-colors`}
                      >
                        <td className="px-6 py-4">
                          <span className="font-heading font-bold text-foreground">{rate.carrier}</span>
                        </td>
                        {routePricing.rates.some(r => r.price20GP != null) && (
                          <td className="px-6 py-4 text-right">
                            <span className="text-2xl font-bold text-copper">{rate.price20GP != null ? formatPrice(rate.price20GP) : '—'}</span>
                          </td>
                        )}
                        <td className="px-6 py-4 text-right">
                          <span className="text-2xl font-bold text-copper">{formatPrice(rate.price40GP)}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-2xl font-bold text-copper">{formatPrice(rate.price40HQ)}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-foreground font-medium">{rate.transitTime} days</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mb-8">{getRateDateLine(routePricing)}</p>

              {/* Price disclaimer (pack pages carry the date line instead) */}
              {!pack && (
              <Card className="border-copper/30 bg-copper/5 mb-8">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-copper/20 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-5 w-5 text-copper" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground mb-2">Pricing Disclaimer</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        These prices are subject to change based on market conditions, fuel surcharges, and seasonal demand.
                        Contact us for the most up-to-date pricing and a customized quote for your specific shipment needs.
                        Prices shown are for standard cargo and may vary for special cargo types.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              )}

              {/* Additional container options */}
              {!pack && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { type: '20ft FCL', label: 'Standard', dimensions: '6.1m × 2.4m × 2.6m', note: routePricing.rates.some(r => r.price20GP != null) ? 'See 20GP rates above' : 'Contact for pricing' },
                  { type: '40ft High Cube', label: 'Extra Height', dimensions: '12.2m × 2.4m × 2.9m', note: 'See 40HQ rates above' },
                  { type: 'LCL Shipment', label: 'Less than Container', dimensions: 'Per CBM', note: 'From $45/CBM' },
                  { type: 'Special Cargo', label: 'Custom', dimensions: 'Various', note: 'Get custom quote' },
                ].map((container, index) => (
                  <Card key={index} className="border-border/50 card-lift">
                    <CardContent className="p-6">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {container.label}
                      </p>
                      <h4 className="font-heading font-bold text-lg text-foreground mb-2">
                        {container.type}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">{container.dimensions}</p>
                      <p className="text-sm font-medium text-copper">{container.note}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              )}
            </>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {containerPricing.map((container, index) => (
                  <Card
                    key={index}
                    className={`border-border/50 card-lift relative overflow-hidden ${
                      container.label === 'Popular' ? 'border-copper border-2' : ''
                    }`}
                  >
                    {container.label === 'Popular' && (
                      <div className="absolute top-0 right-0 bg-copper text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
                        Popular
                      </div>
                    )}
                    <CardContent className="p-6">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {container.label || 'Standard'}
                      </p>
                      <h4 className="font-heading font-bold text-lg text-foreground mb-4">
                        {container.type}
                      </h4>

                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Dimensions</span>
                          <span className="text-foreground">{container.dimensions}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Transit</span>
                          <span className="text-foreground">{container.transitTime}</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="text-2xl font-bold text-copper">{container.priceRange}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mt-8 max-w-2xl">
                <span className="font-medium text-foreground">Note:</span> Rates are estimates
                and may vary based on cargo type, seasonal demand, and market conditions.
              </p>
            </>
          )}
        </div>
      </section>
      )}

      {/* Sub-port Sections (Shekou, Yantian for Shenzhen; Nansha for Guangzhou) */}
      {subPortPricingData.map((spPricing) => {
        const subPortDescriptions: Record<string, { chinese: string; description: string; locode: string; location: string }> = {
          'Shekou': {
            chinese: '蛇口',
            description: 'a major container terminal within the Port of Shenzhen, located in the Nanshan District. It is one of the busiest container terminals in southern China, operated by China Merchants Port.',
            locode: 'CNSHK',
            location: 'Nanshan District, Shenzhen',
          },
          'Yantian': {
            chinese: '盐田',
            description: 'one of the largest and most efficient container terminals in South China, located in the eastern part of Shenzhen. Operated by Hutchison Ports, it is a key hub for international trade.',
            locode: 'CNYTN',
            location: 'Yantian District, Shenzhen',
          },
          'Nansha': {
            chinese: '南沙',
            description: 'a modern deep-water port in the Nansha District of Guangzhou, serving as a major gateway for the Pearl River Delta region. It handles significant container throughput with state-of-the-art facilities.',
            locode: 'CNNSA',
            location: 'Nansha District, Guangzhou',
          },
        };
        const info = subPortDescriptions[spPricing.subPort] || { chinese: '', description: `a terminal within the Port of ${spPricing.parentCity}.`, locode: '', location: spPricing.parentCity };
        const anchorId = spPricing.subPort.toLowerCase();

        return (
        <section key={anchorId} id={anchorId} className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-8 mb-12">
              <div className="lg:col-span-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Sea Freight from {spPricing.subPort} to {route.destinationCity}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {spPricing.subPort} ({info.chinese}) is {info.description}{' '}
                  Shipments from {spPricing.subPort} to {route.destinationCity} are available
                  as an alternative loading port for exporters in the Pearl River Delta region.
                </p>
              </div>
            </div>

            {/* Sub-port pricing table */}
            {spPricing.rates.length > 0 && (
              <>
              <div className="overflow-x-auto mb-3">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate text-white">
                      <th className="px-6 py-4 text-left font-heading font-bold text-sm uppercase tracking-wider">Carrier</th>
                      {spPricing.rates.some(r => r.price20GP != null) && (
                        <th className="px-6 py-4 text-right font-heading font-bold text-sm uppercase tracking-wider">20GP (USD)</th>
                      )}
                      <th className="px-6 py-4 text-right font-heading font-bold text-sm uppercase tracking-wider">40GP (USD)</th>
                      <th className="px-6 py-4 text-right font-heading font-bold text-sm uppercase tracking-wider">40HQ (USD)</th>
                      <th className="px-6 py-4 text-right font-heading font-bold text-sm uppercase tracking-wider">Transit Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {spPricing.rates.map((rate, index) => (
                      <tr
                        key={rate.carrier}
                        className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-white' : 'bg-cream/50'} hover:bg-copper/5 transition-colors`}
                      >
                        <td className="px-6 py-4">
                          <span className="font-heading font-bold text-foreground">{rate.carrier}</span>
                        </td>
                        {spPricing.rates.some(r => r.price20GP != null) && (
                          <td className="px-6 py-4 text-right">
                            <span className="text-2xl font-bold text-copper">{rate.price20GP != null ? formatPrice(rate.price20GP) : '—'}</span>
                          </td>
                        )}
                        <td className="px-6 py-4 text-right">
                          <span className="text-2xl font-bold text-copper">{formatPrice(rate.price40GP)}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-2xl font-bold text-copper">{formatPrice(rate.price40HQ)}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-foreground font-medium">{rate.transitTime} days</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mb-8">{getRateDateLine(spPricing)}</p>
              </>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-ocean/10 flex items-center justify-center">
                      <Anchor className="h-5 w-5 text-ocean" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground">Port of {spPricing.subPort}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    UN/LOCODE: {info.locode}. Located in {info.location}. Direct services to Mediterranean ports.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-ocean/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-ocean" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground">Transit Time</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {getTransitDaysLabel(spPricing.rates) ?? route.transitTime} from {spPricing.subPort} to {route.destinationCity}.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-ocean/10 flex items-center justify-center">
                      <Ship className="h-5 w-5 text-ocean" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground">Loading Port</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {spPricing.subPort} is a terminal within {spPricing.parentCity}, offering competitive FCL rates
                    for shipments to {route.destinationCity}.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        );
      })}

      {/* Destination Sub-port Sections (e.g. Vado Ligure for Genoa) */}
      {destSubPortPricingData.map((dspPricing) => {
        const destSubPortDescriptions: Record<string, { description: string; locode: string; location: string }> = {
          'Vado Ligure': {
            description: 'a modern automated container terminal located approximately 50km west of Genoa, part of the wider Ligurian port system. Operated by APM Terminals, it features state-of-the-art automated handling equipment and is one of the most technologically advanced container terminals in the Mediterranean.',
            locode: 'ITVDL',
            location: 'Vado Ligure, Liguria, Italy',
          },
        };
        const info = destSubPortDescriptions[dspPricing.destSubPort] || { description: `a terminal near ${dspPricing.parentCity}.`, locode: '', location: dspPricing.parentCity };
        const anchorId = dspPricing.destSubPort.toLowerCase().replace(/\s+/g, '-');

        return (
        <section key={anchorId} id={anchorId} className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-8 mb-12">
              <div className="lg:col-span-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Sea Freight from {route.originCity} to {dspPricing.destSubPort}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {dspPricing.destSubPort} is {info.description}{' '}
                  Shipments to {dspPricing.destSubPort} are available
                  as an alternative discharge port for importers in the {dspPricing.parentCity} and wider Ligurian region.
                </p>
              </div>
            </div>

            {/* Destination sub-port pricing table */}
            <div className="bg-card border border-border/50 rounded-xl overflow-hidden mb-3">
              <div className="bg-ocean/5 border-b border-border/50 p-4">
                <h3 className="font-heading font-bold text-foreground flex items-center gap-2">
                  <Anchor className="h-5 w-5 text-ocean" />
                  {route.originCity} to {dspPricing.destSubPort}: MSK rates
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50 bg-secondary/30">
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Carrier</th>
                      <th className="px-4 py-3 text-right font-medium text-muted-foreground">20GP</th>
                      <th className="px-4 py-3 text-right font-medium text-muted-foreground">40GP</th>
                      <th className="px-4 py-3 text-right font-medium text-muted-foreground">40HQ</th>
                      <th className="px-4 py-3 text-right font-medium text-muted-foreground">Transit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dspPricing.rates.map((rate, idx) => (
                      <tr key={idx} className="border-b border-border/30 last:border-0">
                        <td className="px-4 py-3 font-medium text-foreground">{rate.carrier}</td>
                        <td className="px-4 py-3 text-right text-foreground">{rate.price20GP ? formatPrice(rate.price20GP) : '—'}</td>
                        <td className="px-4 py-3 text-right text-foreground">{formatPrice(rate.price40GP)}</td>
                        <td className="px-4 py-3 text-right text-foreground">{formatPrice(rate.price40HQ)}</td>
                        <td className="px-4 py-3 text-right text-muted-foreground">{rate.transitTime} days</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-8">{getRateDateLine(dspPricing)}</p>

            {/* Info cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-ocean/10 flex items-center justify-center">
                      <Anchor className="h-5 w-5 text-ocean" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground">Port of {dspPricing.destSubPort}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    UN/LOCODE: {info.locode}. Located in {info.location}. Automated container handling.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-ocean/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-ocean" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground">Transit Time</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {dspPricing.rates[0]?.transitTime} days from {route.originCity} to {dspPricing.destSubPort}.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-ocean/10 flex items-center justify-center">
                      <Ship className="h-5 w-5 text-ocean" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground">Discharge Port</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {dspPricing.destSubPort} is a terminal near {dspPricing.parentCity}, offering competitive FCL rates
                    from {route.originCity}.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        );
      })}

      {/* New layout: the route-only sections */}
      {pack && (
        <RoutePackSections
          pack={pack}
          originCity={route.originCity}
          destinationCity={route.destinationCity}
          destinationCountry={route.destinationCountry}
          fromOrigin={packFromOrigin}
          intoDestination={packIntoDestination}
          pricing={routePricing}
        />
      )}

      {/* General sections, the same on every route. Pack routes link to the shared guides instead. */}
      {!pack && (
      <>
      {/* Container Types */}
      <section className="py-20 lg:py-28 bg-cream pattern-dots">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-6">
              <p className="text-copper font-medium text-sm uppercase tracking-wider mb-2">Equipment</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                Container Types Available
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: '20ft Dry Container', description: 'Standard general cargo container', icon: Box },
              { name: '40ft Dry Container', description: 'High capacity for large shipments', icon: Box },
              { name: '40ft High Cube', description: 'Extra height for bulky cargo', icon: Box },
              { name: '20ft Refrigerated', description: 'Temperature-controlled cargo', icon: Package },
              { name: 'Open Top Container', description: 'For oversized cargo loading', icon: Package },
              { name: 'Flat Rack Container', description: 'Heavy machinery and equipment', icon: Package },
            ].map((container, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 border border-border/50 card-lift group ${index % 2 === 1 ? 'lg:mt-8' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate/10 flex items-center justify-center flex-shrink-0 group-hover:bg-copper/10 transition-colors">
                    <container.icon className="h-6 w-6 text-slate group-hover:text-copper transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">{container.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{container.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Process */}
      <section className="py-20 lg:py-28 bg-cream-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-5">
              <p className="text-copper font-medium text-sm uppercase tracking-wider mb-2">Process</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                How Our Sea Freight Process Works
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="space-y-8">
                {[
                  { step: 1, title: 'Quote & Booking', description: 'Get a customized quote and book your container.', timeline: '1-2 days' },
                  { step: 2, title: 'Collection & Export', description: 'We collect cargo and handle export documentation.', timeline: '2-3 days' },
                  { step: 3, title: 'Ocean Transit', description: 'Your cargo travels safely across the ocean.', timeline: route.transitTime },
                  { step: 4, title: 'Port Handling', description: 'Customs clearance and port procedures completed.', timeline: '2-3 days' },
                  { step: 5, title: 'Final Delivery', description: 'Cargo delivered to your specified destination.', timeline: '1-2 days' },
                ].map((step, index) => (
                  <div key={index} className="relative pl-0 md:pl-14">
                    <div className="hidden md:flex absolute left-0 top-0 w-10 h-10 rounded-full bg-slate text-white font-heading font-bold items-center justify-center z-10">
                      {step.step}
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 card-lift">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h4 className="font-heading font-bold text-foreground">{step.title}</h4>
                        <span className="text-xs bg-copper/10 text-copper px-2 py-1 rounded font-medium shrink-0">
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
                    <div className="w-10 h-10 rounded-xl bg-copper/20 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-copper-light" />
                    </div>
                    <h4 className="font-heading font-bold text-white">Key Documents</h4>
                  </div>
                  <div className="space-y-3">
                    {[...requiredDocs.universal.slice(0, 3), ...requiredDocs.seaSpecific.slice(0, 2)].map((doc, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-copper-light flex-shrink-0" />
                        <span className="text-sm text-white/80">{doc.name}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-white/60 mt-4">See full documentation requirements below</p>
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
              <p className="text-copper font-medium text-sm uppercase tracking-wider mb-2">Cargo Types</p>
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
                    <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center flex-shrink-0">
                      <Package className="h-5 w-5 text-copper" />
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
              <p className="text-copper font-medium text-sm uppercase tracking-wider mb-2">Documentation</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {docsSectionTitle}
              </h2>
              <p className="text-muted-foreground">
                {docsIntroText}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Universal Documents */}
            <div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-copper" />
                Universal Requirements
              </h3>
              <div className="space-y-3">
                {requiredDocs.universal.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-copper flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">{doc.name}</span>
                      <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sea Freight Specific Documents */}
            <div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <Ship className="h-5 w-5 text-copper" />
                Sea Freight Requirements for {route.destinationCountry}
              </h3>
              <div className="space-y-3">
                {requiredDocs.seaSpecific.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-copper/5 rounded-lg border border-copper/10">
                    <CheckCircle className="h-5 w-5 text-copper flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{doc.name}</span>
                        {doc.required && (
                          <Badge variant="outline" className="text-xs border-copper/30 text-copper">Required</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Country-Specific Nuances */}
          <div className="bg-slate rounded-2xl p-6 lg:p-8">
            <h3 className="font-heading font-bold text-lg text-white mb-4">
              {nuancesTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {requiredDocs.nuances.map((nuance, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-copper/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-copper-light">{index + 1}</span>
                  </div>
                  <p className="text-sm text-white/80">{nuance}</p>
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
              <p className="text-copper font-medium text-sm uppercase tracking-wider mb-2">Customs</p>
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
            {customsClearance.seaRules.map((rule, index) => (
              <Card
                key={index}
                className={`border-border/50 ${rule.isWarning ? 'border-l-4 border-l-amber-500' : ''}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      rule.isWarning ? 'bg-amber-100' : 'bg-copper/10'
                    }`}>
                      {rule.isWarning ? (
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-copper" />
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
                  <div className="w-6 h-6 rounded-full bg-copper/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-copper-light">{index + 1}</span>
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
              <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
                <Flame className="h-5 w-5 text-amber-600" />
                <span className="text-sm font-medium text-amber-800">{dgRules.regulatoryAbbreviation}</span>
              </div>
            </div>
          </div>

          {/* Universal DG Requirements */}
          <div className="mb-8">
            <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-copper" />
              Universal Requirements for All DG Shipments
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {universalDGReqs.map((req, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-amber-50/50 rounded-lg border border-amber-100">
                  <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">{req.title}</span>
                    <p className="text-sm text-muted-foreground mt-1">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Country-Specific DG Rules */}
          <div className="mb-8">
            <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <Ship className="h-5 w-5 text-copper" />
              Sea Freight DG Rules for {route.destinationCountry}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dgRules.seaRules.map((rule, index) => (
                <Card
                  key={index}
                  className={`border-border/50 ${rule.isWarning ? 'border-l-4 border-l-amber-500' : ''}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        rule.isWarning ? 'bg-amber-100' : 'bg-copper/10'
                      }`}>
                        {rule.isWarning ? (
                          <AlertTriangle className="h-5 w-5 text-amber-600" />
                        ) : (
                          <CheckCircle className="h-5 w-5 text-copper" />
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
          </div>

          {/* DG Considerations */}
          <div className="bg-amber-50 rounded-2xl p-6 lg:p-8 border border-amber-200">
            <h3 className="font-heading font-bold text-lg text-amber-900 mb-4">
              {dgConsiderationsTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {dgRules.keyConsiderations.map((consideration, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-amber-800">{index + 1}</span>
                  </div>
                  <p className="text-sm text-amber-800">{consideration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      </>
      )}

      {/* FAQ Schema for SEO */}
      <FAQSchema faqs={faqs} />

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-6">
              <p className="text-copper font-medium text-sm uppercase tracking-wider mb-2">FAQs</p>
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
      {!pack && (routesFromOrigin.length > 0 || routesToDestination.length > 0) && (
        <section className="py-16 lg:py-24 bg-cream border-t border-border">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <p className="text-copper font-medium text-sm uppercase tracking-wider mb-2">More Routes</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                Explore Other Routes
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Routes from same origin */}
              {routesFromOrigin.length > 0 && (
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                    <Ship className="h-5 w-5 text-copper" />
                    Sea Freight from {route.originCity}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2">
                    {routesFromOrigin.map((r) => (
                      <Link
                        key={r.id}
                        href={`/sea-freight-${r.slug}`}
                        className="text-sm text-muted-foreground hover:text-copper transition-colors py-1 truncate"
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
                    <Ship className="h-5 w-5 text-copper" />
                    Sea Freight to {route.destinationCity}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2">
                    {routesToDestination.map((r) => (
                      <Link
                        key={r.id}
                        href={`/sea-freight-${r.slug}`}
                        className="text-sm text-muted-foreground hover:text-copper transition-colors py-1 truncate"
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
        title="Get Your Sea Freight Quote"
        description={`Ready to ship from ${route.originCity} to ${route.destinationCity}? Get a competitive quote for your cargo. Our team will respond within 24 hours.`}
        primaryAction={{ label: 'Request Quote Now', href: '/quote' }}
        secondaryAction={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
