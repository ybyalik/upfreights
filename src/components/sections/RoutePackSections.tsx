import Link from 'next/link';
import { Anchor, Compass, Calculator, ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { RoutePack, PackSource } from '@/lib/data/routePacks';
import { CUBIC_METRES_40FT, OSM_SOURCE, US_MPF, US_HMF, ROUTE_PAGE_AUTHOR } from '@/lib/data/routePacks';
import type { RoutePricing } from '@/lib/data/pricing';
import { formatPrice } from '@/lib/data/pricing';

export interface PricedRouteLink {
  label: string;
  href: string;
  /** lowest 40-foot rate on the rate sheet, if we hold one */
  price40?: number;
  days?: string;
}

interface RoutePackSectionsProps {
  pack: RoutePack;
  originCity: string;
  destinationCity: string;
  destinationCountry: string;
  pricing?: RoutePricing;
  fromOrigin: PricedRouteLink[];
  intoDestination: PricedRouteLink[];
}

function RouteLinkList({ title, links }: { title: string; links: PricedRouteLink[] }) {
  if (links.length === 0) return null;
  return (
    <div>
      <h3 className="font-heading font-bold text-lg text-foreground mb-4">{title}</h3>
      <ul className="divide-y divide-border border-y border-border">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="flex items-center justify-between gap-4 py-3 hover:text-copper">
              <span className="font-medium text-foreground">{link.label}</span>
              <span className="text-sm text-muted-foreground text-right whitespace-nowrap">
                {link.price40 != null ? `from ${formatPrice(link.price40)}` : 'quote on request'}
                {link.days ? `, ${link.days}` : ''}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function kmToMiles(km: number): number {
  return Math.round(km / 1.609344);
}

const KM_PER_NAUTICAL_MILE = 1.852;

function formatNumber(value: number): string {
  return Math.round(value).toLocaleString('en-US');
}

function toKm(nauticalMiles: number): string {
  // rounded to the nearest 10 km, like the nautical mile figures
  return formatNumber(Math.round((nauticalMiles * KM_PER_NAUTICAL_MILE) / 10) * 10);
}

/** The cheapest 40-foot rate on the route's own rate table. */
function getCheapest(pricing?: RoutePricing) {
  if (!pricing || pricing.rates.length === 0) return null;
  return pricing.rates.reduce((best, r) => (r.price40GP < best.price40GP ? r : best));
}

/**
 * The route-only sections of the new route page: how the cargo travels,
 * the destination port, a worked cost example and the sources.
 */
export function RoutePackSections({
  pack,
  originCity,
  destinationCity,
  destinationCountry,
  pricing,
  fromOrigin,
  intoDestination,
}: RoutePackSectionsProps) {
  const cheapest = getCheapest(pricing);
  const us = pack.usFeeExample;
  const mpf = us
    ? Math.min(US_MPF.maxUsd, Math.max(US_MPF.minUsd, (us.goodsValueUsd * US_MPF.ratePct) / 100))
    : null;
  const hmf = us ? (us.goodsValueUsd * US_HMF.ratePct) / 100 : null;

  // Every source used on the page, without repeats
  const allSources: PackSource[] = [];
  const addSource = (s: PackSource) => {
    if (!allSources.some((x) => x.url === s.url)) allSources.push(s);
  };
  pack.sources.forEach(addSource);
  if (pack.dutyExample) {
    addSource(pack.dutyExample.dutySource);
    addSource(pack.dutyExample.taxSource);
  }
  if (pack.inland.source === 'osm') addSource(OSM_SOURCE);
  const perCubicMetre = cheapest ? cheapest.price40GP / CUBIC_METRES_40FT : null;

  const duty = pack.dutyExample;
  const customsValue = duty && cheapest ? duty.goodsValueUsd + cheapest.price40GP : null;
  const dutyAmount = duty && customsValue != null ? (customsValue * duty.dutyRatePct) / 100 : null;
  const taxAmount =
    duty && customsValue != null && dutyAmount != null
      ? ((customsValue + dutyAmount) * duty.taxRatePct) / 100
      : null;

  return (
    <>
      {/* How the cargo travels */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <p className="text-copper font-medium text-sm uppercase tracking-wider mb-2">The journey</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                How a container gets from {originCity} to {destinationCity}
              </h2>
              <div className="space-y-4">
                {pack.travel.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center">
                      <Compass className="h-5 w-5 text-copper" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground">Distance by sea</h3>
                  </div>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-muted-foreground">By {pack.distance.via}</dt>
                      <dd className="text-2xl font-bold text-foreground">
                        {formatNumber(pack.distance.nauticalMiles)} nautical miles
                      </dd>
                      <dd className="text-sm text-muted-foreground">about {toKm(pack.distance.nauticalMiles)} km</dd>
                    </div>
                    {pack.distance.alternative && (
                      <div className="pt-4 border-t border-border">
                        <dt className="text-sm text-muted-foreground">By {pack.distance.alternative.via}</dt>
                        <dd className="text-2xl font-bold text-foreground">
                          {formatNumber(pack.distance.alternative.nauticalMiles)} nautical miles
                        </dd>
                        <dd className="text-sm text-muted-foreground">
                          about {toKm(pack.distance.alternative.nauticalMiles)} km
                        </dd>
                      </div>
                    )}
                  </dl>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-4">{pack.distance.note}</p>
                  <p className="text-xs text-muted-foreground mt-3">
                    Port to port, worked out by us with open-source routing software.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The destination port */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <p className="text-copper font-medium text-sm uppercase tracking-wider mb-2">Where it arrives</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-3">{pack.port.name}</h2>
            <p className="text-muted-foreground flex items-center gap-2">
              <Anchor className="h-4 w-4 text-copper flex-shrink-0" />
              Run by {pack.port.operator}
            </p>
          </div>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-background">
              <tbody>
                {pack.port.facts.map((fact) => (
                  <tr key={fact.label} className="border-b border-border">
                    <th scope="row" className="px-5 py-4 text-left text-sm font-medium text-muted-foreground w-1/2 align-top">
                      {fact.label}
                    </th>
                    <td className="px-5 py-4 text-foreground font-medium">{fact.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-2 max-w-3xl">
            {pack.port.notes.map((note, index) => (
              <p key={index} className="text-sm text-muted-foreground leading-relaxed">
                {note}
              </p>
            ))}
          </div>

          <div className="mt-12 max-w-3xl">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">From the port to your warehouse</h3>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Most containers finish the trip by truck. These are the road distances from {pack.inland.from}.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {pack.inland.places.map((place) => (
                <li key={place.name} className="bg-background border border-border rounded-lg px-4 py-3">
                  <p className="font-medium text-foreground">{place.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatNumber(place.km)} km ({formatNumber(kmToMiles(place.km))} miles) by road
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-3">
              {pack.inland.source === 'port'
                ? 'Distances are the port operator\'s own estimates.'
                : 'Worked out by us with OpenStreetMap routing. Truck journey times depend on traffic and driving-hour rules, so ask us for a delivery date.'}
            </p>
          </div>
        </div>
      </section>

      {/* Worked cost example */}
      {cheapest && perCubicMetre != null && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-10">
              <p className="text-copper font-medium text-sm uppercase tracking-wider mb-2">A worked example</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-3">
                What one 40-foot container costs on this route, line by line
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We took the lowest 40-foot rate in the table above ({formatPrice(cheapest.price40GP)} with{' '}
                {cheapest.carrier}) and did the sums.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center">
                      <Calculator className="h-5 w-5 text-copper" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground">Freight per cubic metre</h3>
                  </div>
                  <p className="text-3xl font-bold text-copper mb-3">
                    about ${Math.round(perCubicMetre)} per cubic metre
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {formatPrice(cheapest.price40GP)} divided by the {CUBIC_METRES_40FT} cubic metres a standard 40-foot
                    container holds is ${perCubicMetre.toFixed(2)}, if the container is full. Half full, each cubic metre
                    costs twice that.
                  </p>
                </CardContent>
              </Card>

              {duty && customsValue != null && dutyAmount != null && taxAmount != null ? (
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-1">Duty and tax on arrival</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Example: one container of {duty.product} (tariff code {duty.tariffCode}) that you paid{' '}
                      {formatPrice(duty.goodsValueUsd)} for.
                    </p>
                    {pack.dutyExample?.why && (
                      <p className="text-sm text-muted-foreground mb-4">{pack.dutyExample.why}</p>
                    )}
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-2 text-muted-foreground">Goods</td>
                          <td className="py-2 text-right text-foreground">{formatPrice(duty.goodsValueUsd)}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 text-muted-foreground">Sea freight</td>
                          <td className="py-2 text-right text-foreground">{formatPrice(cheapest.price40GP)}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 text-muted-foreground">Value for customs</td>
                          <td className="py-2 text-right text-foreground">{formatPrice(customsValue)}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 text-muted-foreground">Duty at {duty.dutyRatePct}%</td>
                          <td className="py-2 text-right text-foreground">{formatPrice(Math.round(dutyAmount))}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 text-muted-foreground">
                            {duty.taxName} at {duty.taxRatePct}%
                          </td>
                          <td className="py-2 text-right text-foreground">{formatPrice(Math.round(taxAmount))}</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-bold text-foreground">Goods, freight, duty and tax</td>
                          <td className="py-2 text-right font-bold text-copper">
                            {formatPrice(Math.round(customsValue + dutyAmount + taxAmount))}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-4">
                      Duty is charged on goods plus freight, and tax on that plus the duty. VAT-registered businesses can
                      usually reclaim import VAT. Not included: insurance, port handling, broker fees and delivery. Rates
                      from the official tariff, {pack.checked}.
                    </p>
                  </CardContent>
                </Card>
              ) : us && mpf != null && hmf != null ? (
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-1">US entry fees on arrival</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Example: one container of {us.product} that you paid {formatPrice(us.goodsValueUsd)} for.
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">{us.why}</p>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-2 text-muted-foreground">Goods</td>
                          <td className="py-2 text-right text-foreground">{formatPrice(us.goodsValueUsd)}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 text-muted-foreground">Sea freight</td>
                          <td className="py-2 text-right text-foreground">{formatPrice(cheapest.price40GP)}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 text-muted-foreground">
                            Merchandise Processing Fee ({US_MPF.ratePct}% of the goods, minimum ${US_MPF.minUsd.toFixed(2)},
                            maximum ${US_MPF.maxUsd.toFixed(2)})
                          </td>
                          <td className="py-2 text-right text-foreground">${mpf.toFixed(2)}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 text-muted-foreground">Harbor Maintenance Fee ({US_HMF.ratePct}% of the goods)</td>
                          <td className="py-2 text-right text-foreground">${hmf.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-bold text-foreground">Goods, freight and federal fees</td>
                          <td className="py-2 text-right font-bold text-copper">
                            {formatPrice(Math.round(us.goodsValueUsd + cheapest.price40GP + mpf + hmf))}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-4">
                      Both fees are set by US law, charged on the goods and not the freight, at the levels in force since
                      1 October 2026. {pack.dutyNote} Also not included: insurance, port handling, broker fees, the
                      customs bond and delivery.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                pack.dutyNote && (
                  <Card className="border-border/50">
                    <CardContent className="p-6">
                      <h3 className="font-heading font-bold text-lg text-foreground mb-3">Duty on arrival</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{pack.dutyNote}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                        Also not in the freight price: cargo insurance, port handling charges, customs broker fees and
                        delivery from the port.
                      </p>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* Other routes we price */}
      {(fromOrigin.length > 0 || intoDestination.length > 0) && (
        <section className="py-16 lg:py-20 bg-background border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-10">
              <p className="text-copper font-medium text-sm uppercase tracking-wider mb-2">Compare</p>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-3">Nearby routes and their prices</h2>
              <p className="text-muted-foreground leading-relaxed">
                The lowest 40-foot rate and the days for each route, from {pricing ? 'the same rate sheet as the table above' : 'our rate sheet'}.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <RouteLinkList title={`From ${originCity} to other ports in ${destinationCountry}`} links={fromOrigin} />
              <RouteLinkList title={`Into ${destinationCity} from other ports in China`} links={intoDestination} />
            </div>
            <p className="mt-8">
              <Link href="/all-routes" className="inline-flex items-center gap-2 text-foreground hover:text-copper font-medium">
                <ArrowRight className="h-4 w-4 text-copper" />
                All the routes we ship
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* General guides and sources */}
      <section className="py-16 lg:py-20 bg-cream border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">The general guides</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                This page covers only what is particular to {originCity} to {destinationCity}. The parts that are the
                same on every route have their own pages.
              </p>
              <ul className="space-y-3">
                {[
                  { label: `${pack.countryGuide.label}: customs, duty and tax`, href: pack.countryGuide.href },
                  { label: 'Sea freight: container sizes and how a shipment works', href: '/sea-freight' },
                  { label: 'CBM calculator: work out your shipment volume', href: '/blog/cbm-calculator' },
                  { label: 'How many CBM fit in a 40 ft container', href: '/blog/how-many-cbm-in-a-40-ft-container' },
                  { label: 'Customs clearance: the documents you need', href: '/customs-clearance' },
                  { label: 'Shipping terms (Incoterms): who pays for what', href: '/incoterms' },
                  { label: 'Door-to-door delivery', href: '/door-to-door' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="inline-flex items-center gap-2 text-foreground hover:text-copper font-medium">
                      <ArrowRight className="h-4 w-4 text-copper flex-shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Where these facts come from</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Prices and transit days are from our own rate sheet. Everything else on this page was checked against
                these sources in {pack.checked}. Page by {ROUTE_PAGE_AUTHOR.name}, {ROUTE_PAGE_AUTHOR.role}.
              </p>
              <ul className="space-y-3">
                {allSources.map((source) => (
                  <li key={source.url} className="text-sm">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-2 text-muted-foreground hover:text-copper"
                    >
                      <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{source.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
