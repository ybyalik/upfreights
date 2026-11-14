/**
 * Route fact packs.
 *
 * A route that has a pack here shows the new route page layout. A route pack
 * holds only the facts that belong to that one pair of ports (sea distance,
 * how the container travels, route-only questions). Facts about the
 * destination port live once per port in routePorts.ts and are merged in by
 * getRoutePack. See routePackShared.ts for the sourcing rules.
 *
 * Prices and transit days are NOT stored here. They are read from pricing.ts
 * at build time, so a new rate sheet updates these pages too.
 *
 * Sea distances were worked out with the open-source "searoute" tool
 * (port entrance to port entrance, rounded to the nearest 10 nautical miles).
 */

import type { RouteOnlyPack, RoutePack } from './routePackShared';
import { CONTAINER_SOURCE, SEAROUTE_SOURCE } from './routePackShared';
import { getPortPack } from './routePorts';
import { generatedRoutePacks } from './routePacksGenerated';

export type { RoutePack, PackSource, PackFact, PackFaq, PortPack, RouteOnlyPack } from './routePackShared';
export {
  ROUTE_PAGE_AUTHOR,
  US_MPF,
  US_HMF,
  OSM_SOURCE,
  CUBIC_METRES_40FT,
} from './routePackShared';

const handWrittenRoutes: RouteOnlyPack[] = [
  // ---------------------------------------------------------------- UK
  {
    slug: 'shanghai-to-felixstowe',
    portId: 'felixstowe',
    updated: '2026-11-14',
    quickRoute: 'One ship can carry it all the way. Felixstowe takes the largest container ships.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10460,
      alternative: { via: 'the Cape of Good Hope', nauticalMiles: 13780 },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      { portTravel: 0 },
      'So a container loaded in Shanghai can stay on one ship all the way. Our rate sheet lists one line for this pair, MSC.',
    ],
    faqs: [
      {
        question: 'Does a container from Shanghai to Felixstowe change ships on the way?',
        answer: 'It does not have to. Felixstowe takes the large ships that sail from China, and its operator says four berths can handle the largest container ships in the world. Ask us whether the sailing we quote is direct.',
      },
      {
        question: 'How far is it by sea from Shanghai to Felixstowe?',
        answer: 'About 10,460 nautical miles through the Suez Canal, or about 13,780 nautical miles round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Why does your table show only one shipping line for Shanghai to Felixstowe?',
        answer: 'The rate sheet we hold lists one line for this pair, MSC. Tell us your dates and we will check what other lines can offer.',
      },
    ],
  },
  {
    slug: 'ningbo-to-liverpool',
    portId: 'liverpool',
    updated: '2026-11-14',
    quickRoute: 'Direct, or with a change to a smaller feeder ship on the way, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10360,
      alternative: { via: 'the Cape of Good Hope', nauticalMiles: 13670 },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [{ portTravel: 0 }],
    faqs: [
      {
        question: 'Do ships sail direct from Ningbo to Liverpool?',
        answer: 'Sometimes. Peel Ports says Liverpool2 can take Far East services directly, and that its other terminal has feeder ships linking Liverpool to the Far East through a hub port. Ask us which applies to the sailing we quote.',
      },
      {
        question: 'How far is it by sea from Ningbo to Liverpool?',
        answer: 'About 10,360 nautical miles through the Suez Canal, or about 13,670 nautical miles round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
    ],
    portFaqs: [0],
  },
  {
    slug: 'guangzhou-to-grangemouth',
    portId: 'grangemouth',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a bigger European port, then a smaller feeder ship to Grangemouth.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10130,
      alternative: { via: 'the Cape of Good Hope', nauticalMiles: 13470 },
      note: 'These are the distances for the whole trip, including the last leg on a smaller ship.',
    },
    travel: [{ portTravel: 0 }],
    faqs: [
      {
        question: 'Do ships sail direct from Guangzhou to Grangemouth?',
        answer: 'No. Grangemouth is served by feeder ships. Your container travels from Guangzhou on a large ship to a bigger port, then moves to a smaller ship for the last leg to Grangemouth. The transit time in our table includes the change.',
      },
      {
        question: 'How far is it by sea from Guangzhou to Grangemouth?',
        answer: 'About 10,130 nautical miles through the Suez Canal, or about 13,470 nautical miles round the Cape of Good Hope, counting the last leg on the feeder. We worked these out with open-source routing software.',
      },
    ],
    portFaqs: [0, 1],
  },
  // ---------------------------------------------------------------- US
  {
    slug: 'qingdao-to-los-angeles',
    portId: 'los-angeles',
    updated: '2026-11-14',
    quickRoute: 'Straight across the North Pacific. No canal.',
    distance: {
      via: 'the North Pacific, with no canal',
      nauticalMiles: 5780,
      note: 'There is no canal and no detour on this crossing, which is why the transit days in the table are low.',
    },
    travel: [
      'Qingdao to Los Angeles is a straight crossing of the North Pacific. There is no canal on the way.',
      { portTravel: 0 },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Qingdao to Los Angeles?',
        answer: 'About 5,780 nautical miles across the North Pacific, with no canal. We worked this out port to port with open-source routing software.',
      },
    ],
    portFaqs: [0, 1, 2],
  },
  {
    slug: 'qingdao-to-houston',
    portId: 'houston',
    updated: '2026-11-14',
    quickRoute: 'Across the Pacific and through the Panama Canal to the Gulf of Mexico.',
    distance: {
      via: 'the Panama Canal',
      nauticalMiles: 10190,
      note: 'That is about 1.8 times the sea distance from Qingdao to Los Angeles (about 5,780 nautical miles), which is why the price and the days are both higher.',
    },
    travel: [
      'An all-water service from Qingdao to Houston crosses the Pacific, passes through the Panama Canal and comes up the Gulf of Mexico.',
      { portTravel: 0 },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Qingdao to Houston?',
        answer: 'About 10,190 nautical miles through the Panama Canal. We worked this out port to port with open-source routing software. For comparison, Qingdao to Los Angeles is about 5,780.',
      },
    ],
    portFaqs: [0, 1],
  },
  // ---------------------------------------------------------------- Italy
  {
    slug: 'qingdao-to-genoa',
    portId: 'genoa',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8980,
      alternative: { via: 'the Cape of Good Hope', nauticalMiles: 13960 },
      note: 'For a Mediterranean port the gap is very large: about 4,980 nautical miles more by the Cape. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Genoa is in the north of Italy, on the Mediterranean. By the Suez Canal a ship from China enters the Mediterranean from the east. If ships go round Africa instead, they enter from the west, through the Strait of Gibraltar.',
      { portTravel: 0 },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Qingdao to Genoa?',
        answer: 'About 8,980 nautical miles through the Suez Canal, or about 13,960 nautical miles round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Why do the lines in your table take between 52 and 64 days?',
        answer: 'Each line has its own schedule and its own stops on the way. The table shows the days each line gave on our rate sheet. If the date matters more than the price, tell us and we will quote the fastest sailing.',
      },
    ],
    portFaqs: [0],
  },
  {
    slug: 'guangzhou-to-cagliari',
    portId: 'cagliari',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, to the container terminal at Porto Canale.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7780,
      alternative: { via: 'the Cape of Good Hope', nauticalMiles: 12820 },
      note: 'About 5,040 nautical miles more by the Cape. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [{ portTravel: 0 }],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Cagliari?',
        answer: 'About 7,780 nautical miles through the Suez Canal, or about 12,820 nautical miles round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
    ],
    portFaqs: [0, 1],
  },
  // ---------------------------------------------------------------- Sweden
  {
    slug: 'shenzhen-to-norrkoeping',
    portId: 'norrkoeping',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a bigger European port, then a smaller ship into the Baltic Sea.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10740,
      alternative: { via: 'the Cape of Good Hope', nauticalMiles: 14080 },
      note: 'These are the distances for the whole trip, including the last leg into the Baltic Sea.',
    },
    travel: [{ portTravel: 0 }],
    faqs: [
      {
        question: 'Do ships sail direct from Shenzhen to Norrköping?',
        answer: 'No. The container travels from Shenzhen on a large ship to a bigger European port, then moves to a smaller ship for the last leg into the Baltic Sea. The transit time in our table includes the change.',
      },
      {
        question: 'How far is it by sea from Shenzhen to Norrköping?',
        answer: 'About 10,740 nautical miles through the Suez Canal, or about 14,080 nautical miles round the Cape of Good Hope, counting the last leg into the Baltic. We worked these out with open-source routing software.',
      },
    ],
    portFaqs: [0, 1],
  },
];

export const routeOnlyPacks: RouteOnlyPack[] = [...handWrittenRoutes, ...generatedRoutePacks];

/** Joins a route pack with its destination port pack into what the page shows. */
function resolve(route: RouteOnlyPack): RoutePack {
  const port = getPortPack(route.portId);
  if (!port) throw new Error(`Route pack ${route.slug} points at unknown port ${route.portId}`);

  const travel: string[] = [];
  for (const item of route.travel) {
    if (typeof item === 'string') travel.push(item);
    else travel.push(...(port.travel[item.portTravel] ?? port.travel[0] ?? []));
  }

  const portFaqs = (route.portFaqs ?? []).map((i) => port.faqs[i]).filter(Boolean);

  return {
    slug: route.slug,
    checked: port.checked,
    updated: route.updated,
    quickRoute: route.quickRoute,
    countryGuide: port.countryGuide,
    distance: route.distance,
    travel,
    port: port.port,
    dutyExample: route.overrides?.dutyExample ?? port.dutyExample,
    usFeeExample: route.overrides?.usFeeExample ?? port.usFeeExample,
    dutyNote: route.overrides?.dutyNote ?? port.dutyNote,
    inland: route.overrides?.inland ?? port.inland,
    faqs: [...route.faqs, ...portFaqs],
    sources: [...port.sources, ...(route.sources ?? []), CONTAINER_SOURCE, SEAROUTE_SOURCE],
  };
}

const packBySlug = new Map(routeOnlyPacks.map((r) => [r.slug, resolve(r)]));

export function getRoutePack(slug: string): RoutePack | undefined {
  return packBySlug.get(slug);
}

/** Every route that has a pack. */
export function getRoutePackSlugs(): string[] {
  return [...packBySlug.keys()];
}
