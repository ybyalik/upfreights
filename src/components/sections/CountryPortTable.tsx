import Link from 'next/link';
import { Plane } from 'lucide-react';
import type { Route } from '@/lib/types';
import { getRoutePricing, formatPrice, getRateDateLine, getTransitDaysLabel } from '@/lib/data/pricing';
import { getPortPack } from '@/lib/data/routePorts';

interface PortRow {
  city: string;
  portName: string;
  routeCount: number;
  /** cheapest priced route into this port, if the rate sheet has one */
  cheapest?: { price: number; route: Route };
  days: string | null;
  /** where the row links: the cheapest priced route, or the first route */
  href: string;
  linkLabel: string;
}

function buildRows(seaRoutes: Route[]): PortRow[] {
  const byCity = new Map<string, Route[]>();
  for (const r of seaRoutes) {
    const list = byCity.get(r.destinationCity) ?? [];
    list.push(r);
    byCity.set(r.destinationCity, list);
  }

  const rows: PortRow[] = [];
  for (const [city, routes] of byCity) {
    let cheapest: PortRow['cheapest'];
    const allRates = [];
    for (const r of routes) {
      const p = getRoutePricing(r.originCity, r.destinationCity);
      if (!p || p.rates.length === 0) continue;
      allRates.push(...p.rates);
      const low = Math.min(...p.rates.map((x) => x.price40GP));
      if (!cheapest || low < cheapest.price) cheapest = { price: low, route: r };
    }
    const sorted = [...routes].sort((a, b) => a.originCity.localeCompare(b.originCity));
    const target = cheapest?.route ?? sorted[0];
    const portSlug = target.slug.split('-to-')[1];
    rows.push({
      city,
      portName: getPortPack(portSlug)?.port.name ?? target.destinationPort.replace(/\s*\([A-Z0-9]{5}\)$/, ''),
      routeCount: routes.length,
      cheapest,
      days: allRates.length ? getTransitDaysLabel(allRates) : null,
      href: `/sea-freight-${target.slug}`,
      linkLabel: `${target.originCity} to ${target.destinationCity}`,
    });
  }
  // priced ports first, cheapest first; then the rest by name
  return rows.sort(
    (a, b) =>
      (a.cheapest ? 0 : 1) - (b.cheapest ? 0 : 1) ||
      (a.cheapest && b.cheapest ? a.cheapest.price - b.cheapest.price : 0) ||
      a.city.localeCompare(b.city),
  );
}

/**
 * The country guide's view of its routes: one row per destination port with the
 * lowest rate on the sheet, instead of a long list of every city pair.
 * Each row links to one route; every route page links to the others into the same port.
 */
export function CountryPortTable({
  countryName,
  seaRoutes,
  airRoutes,
}: {
  countryName: string;
  seaRoutes: Route[];
  airRoutes: Route[];
}) {
  const rows = buildRows(seaRoutes);
  const anyPrice = rows.some((r) => r.cheapest);

  return (
    <div>
      {rows.length > 0 && (
        <>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-left">
                  <th className="px-4 py-3 font-semibold text-foreground">Port</th>
                  <th className="px-4 py-3 font-semibold text-foreground whitespace-nowrap">Lowest 40-foot rate</th>
                  <th className="px-4 py-3 font-semibold text-foreground">Days</th>
                  <th className="px-4 py-3 font-semibold text-foreground">Routes from China</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.city} className="border-t border-border align-top">
                    <td className="px-4 py-3">
                      <p className="font-medium text-foreground">{row.portName}</p>
                      <Link href={row.href} className="text-copper hover:underline">
                        {row.linkLabel}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-foreground whitespace-nowrap">
                      {row.cheapest ? `from ${formatPrice(row.cheapest.price)}` : 'quote on request'}
                    </td>
                    <td className="px-4 py-3 text-foreground whitespace-nowrap">{row.days ?? 'quoted per sailing'}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.routeCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
            {anyPrice
              ? `Lowest port-to-port rate for a 40-foot container into each port, from any Chinese port on our rate sheet, and the range of days the lines quoted. ${getRateDateLine(null)}`
              : `We quote routes to ${countryName} for your dates.`}{' '}
            Each route page compares the other Chinese ports into the same port.
          </p>
        </>
      )}

      {airRoutes.length > 0 && (
        <div className="mt-8">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Plane className="h-4 w-4 text-teal" />
            Air freight to {countryName}
          </h4>
          <ul className="flex flex-wrap gap-2">
            {airRoutes.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/air-freight-${r.slug}`}
                  className="inline-block px-3 py-1.5 bg-secondary rounded-full text-sm text-foreground hover:text-copper"
                >
                  {r.originCity} to {r.destinationCity}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-6 text-sm">
        <Link href="/all-routes" className="text-copper hover:underline">
          All the routes we ship
        </Link>
      </p>
    </div>
  );
}
