import Link from 'next/link';
import { NEARBY_COUNTRIES } from '@/lib/data/nearbyCountries';
import { getCountryBySlug } from '@/lib/data/countries';
import { Ship, MapPin, Clock, ArrowRight, CheckCircle, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from './Breadcrumbs';
import { CTASection } from './CTASection';
import { CountryPortTable } from './CountryPortTable';
import { HeroQuoteForm } from './HeroQuoteForm';
import type { Route } from '@/lib/types';
import type { CountryDestination } from '@/lib/data/countries';
import { generateFaqSchema } from '@/lib/schema';
import { getRoutePricing, formatPrice, getRateDateLine, getTransitDaysLabel } from '@/lib/data/pricing';
import type { CarrierRate } from '@/lib/data/pricing';

function RateTable({ title, rows }: { title: string; rows: { label: string; range: string }[] }) {
  if (rows.length === 0) return null;
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <div className="overflow-hidden rounded-lg border border-border/50">
        <table className="w-full text-sm">
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-border/50 last:border-0">
                <td className="px-4 py-3 text-muted-foreground">{row.label}</td>
                <td className="px-4 py-3 text-right font-medium text-foreground whitespace-nowrap">
                  {row.range}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * Rich, content-driven country landing page. Rendered when a CountryDestination
 * has a `content` object. See .claude/country-page/page-spec.md.
 */
export function RichCountryPage({
  country,
  seaRoutes,
  airRoutes,
  serviceSchema,
}: {
  country: CountryDestination;
  seaRoutes: Route[];
  airRoutes: Route[];
  serviceSchema: Record<string, unknown> | null;
}) {
  const c = country.content;
  if (!c) return null;
  const faqSchema = generateFaqSchema(c.faqs);
  const h2 = 'text-2xl md:text-3xl font-bold text-foreground mb-4 mt-12';

  // Prices and days from the company rate sheet, for countries we hold rates for.
  // Typed-in ranges were removed from the guides in November 2026.
  const sheetRates: CarrierRate[] = seaRoutes.flatMap((r) => getRoutePricing(r.originCity, r.destinationCity)?.rates ?? []);
  const hasSheet = sheetRates.length > 0;
  const sheetDays = hasSheet ? getTransitDaysLabel(sheetRates) : null;
  const p40 = sheetRates.map((r) => r.price40GP);
  const p20 = sheetRates.flatMap((r) => (r.price20GP != null ? [r.price20GP] : []));
  const range = (xs: number[]) =>
    Math.min(...xs) === Math.max(...xs) ? formatPrice(Math.min(...xs)) : `${formatPrice(Math.min(...xs))} - ${formatPrice(Math.max(...xs))}`;
  const fclRows = hasSheet
    ? [
        ...(p20.length ? [{ label: '20-foot container, port to port', range: range(p20) }] : []),
        { label: '40-foot container, port to port', range: range(p40) },
      ]
    : c.cost.fcl;
  const heroTransit = sheetDays ? `${sheetDays} port to port` : country.transitTime ? `${country.transitTime} transit` : null;

  return (
    <>
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[{ label: 'Destinations', href: '/all-routes' }, { label: country.name }]}
            variant="light"
            className="mb-6"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-white/70 mb-3">Updated {c.lastUpdated}</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Shipping from China to {country.name}
              </h1>
              <p className="text-lg text-white/80 mb-8">{country.description}</p>
              <div className="flex flex-wrap gap-4 text-white/80 mb-8">
                {heroTransit && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-orange" />
                    <span>{heroTransit}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Ship className="h-5 w-5 text-orange" />
                  <span>Sea, air &amp; express</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-orange" />
                  <span>{country.majorPorts.length} major ports</span>
                </div>
              </div>
              <Button asChild className="bg-orange hover:bg-orange-dark text-white lg:hidden">
                <Link href="/quote">
                  Request a Live Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <HeroQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Answer capsule */}
            <div className="mb-10 p-6 rounded-xl bg-secondary/40 border border-border/50">
              <p className="text-base text-foreground leading-relaxed">{c.answerCapsule}</p>
            </div>

            {/* Intro */}
            <p className="text-muted-foreground leading-relaxed">{c.intro}</p>

            {/* Cost */}
            <h2 className={h2}>Cost of Shipping From China to {country.name}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{c.cost.snapshot}</p>
            <ul className="space-y-2 mb-8">
              {c.cost.factors.map((f) => (
                <li key={f} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-orange mt-1 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="grid md:grid-cols-2 md:gap-x-8">
              <RateTable title="Sea freight, full container (FCL)" rows={fclRows} />
              <RateTable title="Sea freight, shared container (LCL)" rows={c.cost.lcl} />
              <RateTable title="Air freight" rows={c.cost.air} />
              <RateTable title="Express courier" rows={c.cost.express} />
            </div>
            <p className="text-sm text-muted-foreground mb-3">{c.cost.note}</p>
            <p className="text-sm font-medium text-foreground">
              {hasSheet
                ? `Container prices are the lowest and highest 40-foot (and 20-foot) rates across the ${seaRoutes.length} routes to ${country.name} on our rate sheet. ${getRateDateLine(null)} `
                : 'We price each shipment for your dates. '}
              <Link href="/quote" className="text-orange hover:underline">
                Request a live quote
              </Link>{' '}
              for your exact shipment.
            </p>

            {/* Sea freight */}
            <h2 className={h2}>Sea Freight From China to {country.name}</h2>
            <p className="text-muted-foreground leading-relaxed">{c.seaFreightBody}</p>

            {/* Air freight */}
            <h2 className={h2}>Air Freight From China to {country.name}</h2>
            <p className="text-muted-foreground leading-relaxed">{c.airFreightBody}</p>

            {/* Express */}
            <h2 className={h2}>Express Courier From China to {country.name}</h2>
            <p className="text-muted-foreground leading-relaxed">{c.expressBody}</p>

            {/* Transit comparison */}
            <h2 className={h2}>Transit Times Compared</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border/50 rounded-lg">
                <thead>
                  <tr className="bg-secondary/50 text-left">
                    <th className="px-4 py-3 font-semibold">Method</th>
                    <th className="px-4 py-3 font-semibold">Transit time</th>
                    <th className="px-4 py-3 font-semibold">Relative cost</th>
                    <th className="px-4 py-3 font-semibold">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {c.transitComparison.map((row) => (
                    <tr key={row.mode} className="border-t border-border/50">
                      <td className="px-4 py-3 font-medium text-foreground">{row.mode}</td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                        {sheetDays && /^sea freight, fcl/i.test(row.mode) ? `${sheetDays} (rate sheet)` : row.time}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{row.indicativeCost}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Sea times from our rate sheet are port to port. Customs clearance and delivery to your door come on top.
            </p>

            {/* Ports and routes */}
            <h2 className={h2}>Main Ports and Routes</h2>
            <p className="text-muted-foreground leading-relaxed">{c.portsBody}</p>
            <div className="grid sm:grid-cols-2 gap-6 mt-6 mb-10">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Main China origin ports</h3>
                <div className="flex flex-wrap gap-2">
                  {c.originPorts.map((p) => (
                    <span key={p} className="px-3 py-1.5 bg-secondary rounded-full text-sm text-foreground">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Main destination ports and gateways</h3>
                <div className="flex flex-wrap gap-2">
                  {country.majorPorts.map((p) => (
                    <span key={p} className="px-3 py-1.5 bg-secondary rounded-full text-sm text-foreground">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {seaRoutes.length + airRoutes.length > 0 && (
              <div id="all-routes" className="mb-4 scroll-mt-24">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Ports in {country.name} we ship to, and what they cost
                </h3>
                <p className="text-muted-foreground mb-6">
                  One row per port. Open a route for its rates by shipping line, the sea distance, the port and
                  a worked cost example.
                </p>
                <CountryPortTable countryName={country.name} seaRoutes={seaRoutes} airRoutes={airRoutes} />
              </div>
            )}

            {/* Customs */}
            <h2 id="customs" className={`${h2} scroll-mt-24`}>Customs, Duties and Taxes in {country.name}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{c.customs.summary}</p>
            <ul className="space-y-3">
              {c.customs.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-muted-foreground">
                  <FileCheck className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            {/* Door to door */}
            <h2 className={h2}>Door-to-Door and DDP Shipping to {country.name}</h2>
            <p className="text-muted-foreground leading-relaxed">{c.doorToDoor}</p>

            {/* Steps */}
            <h2 className={h2}>How to Ship From China to {country.name}, Step by Step</h2>
            <ol className="space-y-4">
              {c.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-orange">{i + 1}</span>
                  </div>
                  <span className="text-foreground pt-1">{step}</span>
                </li>
              ))}
            </ol>

            {/* FAQ */}
            <h2 className={h2}>Frequently Asked Questions</h2>
            <div className="space-y-6">
              {c.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            {/* Nearby country guides */}
            {(NEARBY_COUNTRIES[country.slug.replace('shipping-china-to-', '')] ?? []).length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-bold text-foreground mb-3">Nearby country guides</h2>
                <ul className="flex flex-wrap gap-2">
                  {(NEARBY_COUNTRIES[country.slug.replace('shipping-china-to-', '')] ?? []).map((slug) => {
                    const near = getCountryBySlug(`shipping-china-to-${slug}`);
                    if (!near) return null;
                    return (
                      <li key={slug}>
                        <Link href={`/shipping-china-to-${slug}`} className="inline-block px-3 py-1.5 bg-secondary rounded-full text-sm text-foreground hover:text-orange">
                          Shipping from China to {near.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {/* Sources */}
            {(hasSheet || (c.sources && c.sources.length > 0)) && (
              <div className="mt-12 pt-8 border-t border-border">
                <h2 className="text-xl font-bold text-foreground mb-3">Where these facts come from</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {hasSheet && <li>Container prices and days: our own rate sheet.</li>}
                  {(c.sources ?? []).map((src) => (
                    <li key={src.url}>
                      <a href={src.url} target="_blank" rel="noopener noreferrer" className="hover:text-orange underline underline-offset-2">
                        {src.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-3">Checked in {c.lastUpdated}.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection
        variant="gradient"
        title={`Ship From China to ${country.name} Today`}
        description={`Request a free, no-obligation live quote for shipping from China to ${country.name}. We will help you choose the cheapest or fastest option for your cargo.`}
      />
    </>
  );
}
