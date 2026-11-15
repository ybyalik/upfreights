/**
 * Fact packs for the air route pages (rebuilt 15 November 2026).
 *
 * Airport facts live once per airport in airportsGenerated.ts, written by
 * ~/Desktop/upfreights-review-2026-11/air-rollout/gen_air.py from the research files
 * (each fact with an exact quote and the airport's own page, checked by port_quote_check.py).
 * The flight distance is worked out by us from the airports' positions (OurAirports data).
 * No transit days and no prices are stored here: there are no air rates on the company sheet.
 */
import type { PackSource } from './routePackShared';
import { AIRPORTS, AIR_ROUTE_DISTANCES } from './airportsGenerated';

export interface AirportFact {
  label: string;
  value: string;
  source: PackSource;
}

export interface AirportPack {
  code: string;
  name: string;
  operator: string;
  facts: AirportFact[];
}

export interface AirPack {
  slug: string;
  updated: string;
  origin: AirportPack;
  destination: AirportPack;
  /** Great-circle distance between the two airports, in km (our own figure). */
  distanceKm: number;
}

export const OURAIRPORTS_SOURCE: PackSource = {
  label: 'OurAirports: airport positions (public domain data), distance worked out by us',
  url: 'https://ourairports.com/data/',
};

export const CHARGEABLE_WEIGHT_SOURCE: PackSource = {
  label: 'Maersk: air cargo chargeable weight (IATA 6,000 divisor)',
  url: 'https://www.maersk.com/logistics-explained/transportation-and-freight/2025/03/10/air-cargo-chargeable-weight',
};

export const AIR_PACK_UPDATED = '2026-11-15';

/** The pack for one air route, or undefined if either airport has no researched facts. */
export function getAirPack(slug: string): AirPack | undefined {
  const d = AIR_ROUTE_DISTANCES[slug];
  if (!d) return undefined;
  const origin = AIRPORTS[d.origin];
  const destination = AIRPORTS[d.destination];
  if (!origin || !destination) return undefined;
  return { slug, updated: AIR_PACK_UPDATED, origin, destination, distanceKm: d.km };
}
