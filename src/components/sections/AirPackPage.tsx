import Link from 'next/link';
import { Plane, MapPin, Scale, FileCheck, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Breadcrumbs } from './Breadcrumbs';
import { CTASection } from './CTASection';
import { HeroQuoteForm } from './HeroQuoteForm';
import { FAQSchema } from './FAQSchema';
import { ChargeableWeightCalculator } from '@/components/tools/ChargeableWeightCalculator';
import type { Route } from '@/lib/types';
import type { AirPack, AirportPack } from '@/lib/data/airPacks';
import { OURAIRPORTS_SOURCE, CHARGEABLE_WEIGHT_SOURCE } from '@/lib/data/airPacks';
import { ROUTE_PAGE_AUTHOR } from '@/lib/data/routePackShared';
import type { PackSource } from '@/lib/data/routePackShared';

interface Faq {
  question: string;
  answer: string;
}

function AirportBlock({ title, airport }: { title: string; airport: AirportPack }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <p className="text-teal font-medium text-sm uppercase tracking-wider mb-1">{title}</p>
      <h3 className="font-heading text-lg md:text-xl font-bold text-foreground">
        {airport.name} ({airport.code})
      </h3>
      {airport.operator && <p className="text-sm text-muted-foreground mt-1">Run by {airport.operator}</p>}
      {airport.facts.length > 0 ? (
        <dl className="mt-5 space-y-4">
          {airport.facts.map((f) => (
            <div key={f.label}>
              <dt className="text-sm font-semibold text-foreground">{f.label}</dt>
              <dd className="text-sm text-muted-foreground leading-relaxed">
                {f.value}{' '}
                <a href={f.source.url} target="_blank" rel="noopener" className="text-copper hover:underline whitespace-nowrap">
                  source
                </a>
              </dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="mt-4 text-sm text-muted-foreground">
          We could not confirm cargo facts for this airport on its own official pages, so we show none.
        </p>
      )}
    </div>
  );
}

/** The rebuilt air route page: sourced airport facts, our own distance, the chargeable weight tool, no typed days or prices. */
export function AirPackPage({
  route,
  pack,
  faqs,
  schema,
  sameDestination,
  sameCountry,
}: {
  route: Route;
  pack: AirPack;
  faqs: Faq[];
  schema: object;
  sameDestination: Route[];
  sameCountry: Route[];
}) {
  const { origin, destination } = pack;
  const km = pack.distanceKm.toLocaleString('en-US');
  const miles = Math.round(pack.distanceKm * 0.621371).toLocaleString('en-US');
  const guideHref = `/shipping-${route.destinationSlug}`;

  const routeFaqs: Faq[] = [
    {
      question: `How far is it from ${origin.code} to ${destination.code}?`,
      answer: `About ${km} km (${miles} miles) in a straight line between ${origin.name} and ${destination.name}, worked out by us from the two airports' positions. Flights that change planes at a hub fly further.`,
    },
    ...faqs,
  ];

  const sources: PackSource[] = [];
  const seen = new Set<string>();
  for (const s of [...origin.facts, ...destination.facts].map((f) => f.source).concat([OURAIRPORTS_SOURCE, CHARGEABLE_WEIGHT_SOURCE])) {
    if (!seen.has(s.url)) {
      seen.add(s.url);
      sources.push(s);
    }
  }
  const updated = new Date(pack.updated + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <FAQSchema faqs={routeFaqs} />

      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <Breadcrumbs
                items={[
                  { label: `China to ${route.destinationCountry}`, href: guideHref },
                  { label: `${route.originCity} to ${route.destinationCity}` },
                ]}
                variant="light"
                className="mb-6"
              />
              <Badge className="bg-teal text-white border-0 mb-4">
                <Plane className="h-3 w-3 mr-1.5" />
                Air Freight
              </Badge>
              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Air Freight from {route.originCity} to {route.destinationCity}
              </h1>
              <p className="text-white/70 text-sm mb-6">
                By {ROUTE_PAGE_AUTHOR.name}, {ROUTE_PAGE_AUTHOR.role}. Updated {updated}.
              </p>
              <div className="rounded-xl bg-white/10 border border-white/15 p-5 text-white">
                <p className="text-xs uppercase tracking-wider text-white/60 mb-3">Quick answer</p>
                <dl className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-white/60">Airports</dt>
                    <dd className="font-semibold">
                      {origin.code} to {destination.code}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-white/60">Distance</dt>
                    <dd className="font-semibold">
                      About {km} km in a straight line
                    </dd>
                  </div>
                  <div>
                    <dt className="text-white/60">Transit time</dt>
                    <dd className="font-semibold">Quoted per shipment</dd>
                  </div>
                  <div>
                    <dt className="text-white/60">Price</dt>
                    <dd className="font-semibold">On chargeable weight (tool below)</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="lg:col-span-5">
              <HeroQuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-2 mb-2 text-teal">
            <Scale className="h-5 w-5" />
            <p className="font-medium text-sm uppercase tracking-wider">Work out what you pay for</p>
          </div>
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-3">
            Chargeable weight for {route.originCity} to {route.destinationCity}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Airlines price air freight on the higher of the actual weight and the volume weight. Enter your boxes to see
            which one your {origin.code} to {destination.code} shipment will be charged on.
          </p>
          <ChargeableWeightCalculator />
          <Link href="/blog/chargeable-weight-calculator" className="inline-flex items-center gap-2 mt-4 text-copper font-medium hover:underline">
            More on chargeable weight <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/blog/air-freight-packaging-requirements" className="inline-flex items-center gap-2 mt-4 ml-6 text-copper font-medium hover:underline">
            Air freight packaging rules <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-2 mb-2 text-teal">
            <MapPin className="h-5 w-5" />
            <p className="font-medium text-sm uppercase tracking-wider">The two airports</p>
          </div>
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Where your cargo leaves and lands
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <AirportBlock title={`Departs ${route.originCity}`} airport={origin} />
            <AirportBlock title={`Arrives ${route.destinationCity}`} airport={destination} />
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-2 mb-2 text-teal">
            <FileCheck className="h-5 w-5" />
            <p className="font-medium text-sm uppercase tracking-wider">Customs</p>
          </div>
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-3">
            Clearing customs in {route.destinationCountry}
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            Air cargo clears {route.destinationCountry} customs the same way as sea cargo: the same import tax, duty and
            paperwork. Our China to {route.destinationCountry} guide sets out each rule with a link to the official page.
          </p>
          <Link href={`${guideHref}#customs`} className="inline-flex items-center gap-2 mt-4 text-copper font-medium hover:underline">
            Customs, duties and taxes in {route.destinationCountry} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Questions about air freight from {route.originCity} to {route.destinationCity}
          </h2>
          <div className="space-y-4">
            {routeFaqs.map((f) => (
              <div key={f.question} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-base font-semibold text-foreground mb-2">{f.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {(sameDestination.length > 0 || sameCountry.length > 0) && (
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Nearby air routes</h2>
            <ul className="flex flex-wrap gap-2">
              {[...sameDestination, ...sameCountry].map((r) => (
                <li key={r.slug}>
                  <Link href={`/air-freight-${r.slug}`} className="inline-block px-3 py-1.5 bg-secondary rounded-full text-sm text-foreground hover:text-copper">
                    {r.originCity} to {r.destinationCity}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              <Link href={guideHref} className="text-copper hover:underline">
                Shipping from China to {route.destinationCountry}: sea and air
              </Link>
            </p>
          </div>
        </section>
      )}

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">Where these facts come from</h2>
          <ul className="space-y-1 text-sm">
            {sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener" className="text-copper hover:underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground mt-3">
            Checked on these sources in November 2026. Page by {ROUTE_PAGE_AUTHOR.name}, {ROUTE_PAGE_AUTHOR.role}.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
