/**
 * Shared pieces for the route fact packs: types, fixed figures and helpers.
 *
 * The data is split in two:
 *  - routePorts.ts holds the facts that belong to a destination port (port facts,
 *    operator, road distances inland, the duty example and tax). Stored once per
 *    port and shared by every route into it.
 *  - routePacks.ts holds the facts that belong to one route (sea distance, how
 *    the container travels on that pair, route-only questions, the quick line).
 *
 * Every fact comes from a named source, or from the company's rate sheet in
 * pricing.ts, or is a number we worked out ourselves (sea and road distances).
 * Nothing is written from memory.
 */

export interface PackSource {
  label: string;
  url: string;
}

export interface PackFact {
  label: string;
  value: string;
}

export interface PackFaq {
  question: string;
  answer: string;
}

/** A road distance from the port to a city. */
export interface InlinePlace {
  name: string;
  km: number;
}

/** A US cost example: the federal entry fees, which are fixed by law. Duty is left out on purpose. */
export interface PackUsFeeExample {
  product: string;
  /** Why this product, with its source. */
  why: string;
  goodsValueUsd: number;
}

/** A worked duty and tax example. Left out where no single official rate applies. */
export interface PackDutyExample {
  product: string;
  tariffCode: string;
  goodsValueUsd: number;
  dutyRatePct: number;
  taxName: string;
  taxRatePct: number;
  /** Where the duty rate was read. */
  dutySource: PackSource;
  taxSource: PackSource;
}

export interface RoutePack {
  /** e.g. "shanghai-to-felixstowe" */
  slug: string;
  /** Month the facts were last checked. */
  checked: string;
  /** Day the page was last updated, YYYY-MM-DD (shown on the page and in the page data for search engines). */
  updated: string;
  /** One line for the quick answer: how the container gets there. */
  quickRoute: string;
  countryGuide: { label: string; href: string };
  distance: {
    via: string;
    nauticalMiles: number;
    alternative?: { via: string; nauticalMiles: number };
    note: string;
  };
  /** How the container really gets there. Plain paragraphs. */
  travel: string[];
  port: {
    name: string;
    operator: string;
    facts: PackFact[];
    notes: string[];
  };
  /** Why this product was picked for the duty example. */
  dutyExample?: PackDutyExample & { why: string };
  usFeeExample?: PackUsFeeExample;
  inland: {
    from: string;
    places: InlinePlace[];
    /** 'port' = the port operator's own figures, 'osm' = worked out by us with OpenStreetMap routing. */
    source: 'port' | 'osm';
  };
  /** Shown instead of a duty example when we cannot state one honestly. */
  dutyNote?: string;
  faqs: PackFaq[];
  sources: PackSource[];
}


/** Facts that belong to a destination port. One per port, shared by every route into it. */
export interface PortPack {
  /** The destination slug used in route URLs, e.g. "grangemouth". */
  id: string;
  /** Month the facts were last checked. */
  checked: string;
  countryGuide: { label: string; href: string };
  port: {
    name: string;
    operator: string;
    facts: PackFact[];
    notes: string[];
  };
  /**
   * How ships reach this port, as one or more alternative wordings of the same
   * facts. Each route into the port shows one of them, so pages into the same
   * port do not repeat each other word for word.
   */
  travel: string[][];
  dutyExample?: PackDutyExample & { why: string };
  usFeeExample?: PackUsFeeExample;
  dutyNote?: string;
  inland: RoutePack['inland'];
  /** Questions about the port. Each route shows a different selection. */
  faqs: PackFaq[];
  sources: PackSource[];
}

/** Facts that belong to one route. Merged with its PortPack to make a RoutePack. */
export interface RouteOnlyPack {
  slug: string;
  /** The PortPack id of the destination. */
  portId: string;
  /** Day the page was last updated, YYYY-MM-DD. */
  updated: string;
  quickRoute: string;
  distance: RoutePack['distance'];
  /**
   * How the container travels on this pair. Plain strings are route-only
   * paragraphs. { portTravel: n } puts in the port's own paragraphs, using
   * wording number n of PortPack.travel.
   */
  travel: Array<string | { portTravel: number }>;
  /** Route-only questions. */
  faqs: PackFaq[];
  /** Which of the port's questions to add (indexes into PortPack.faqs). */
  portFaqs?: number[];
  /** Extra sources for route-only facts. */
  sources?: PackSource[];
  /** Rare per-route replacements for port data. */
  overrides?: Partial<Pick<RoutePack, 'dutyExample' | 'usFeeExample' | 'dutyNote' | 'inland'>>;
}

/** The person named as the author of the route pages (the owner's choice, 14 November 2026). */
export const ROUTE_PAGE_AUTHOR = { name: 'David Fan', role: 'Owner of UpFreights' };

/** US federal entry fees for fiscal year 2027 (from 1 October 2026). */
export const US_MPF = { ratePct: 0.3464, minUsd: 34.58, maxUsd: 670.86 };
export const US_HMF = { ratePct: 0.125 };

export const US_FEE_SOURCES: PackSource[] = [
  {
    label: 'Merchandise Processing Fee for fiscal year 2027: 0.3464%, minimum $34.58, maximum $670.86 (US Customs and Border Protection notice, summarised by Mohawk Global)',
    url: 'https://mohawkglobal.com/trade-translation/cbp-adjusts-customs-user-fees-for-fiscal-year-2027-10-1-2026/',
  },
  {
    label: 'Harbor Maintenance Fee, 0.125%: US Code of Federal Regulations, 19 CFR 24.24',
    url: 'https://www.ecfr.gov/current/title-19/chapter-I/part-24/section-24.24',
  },
];

export const OSM_SOURCE: PackSource = {
  label: 'Road distances worked out by UpFreights with OpenStreetMap routing (OSRM)',
  url: 'https://project-osrm.org/',
};

export function ukDuty(product: string, code: string, value: number, rate: number, why: string): PackDutyExample & { why: string } {
  return {
    product,
    tariffCode: code,
    goodsValueUsd: value,
    dutyRatePct: rate,
    taxName: 'UK import VAT',
    taxRatePct: 20,
    why,
    dutySource: {
      label: `UK Integrated Online Tariff, commodity ${code.replace(/ /g, '')}`,
      url: `https://www.trade-tariff.service.gov.uk/commodities/${code.replace(/ /g, '')}`,
    },
    taxSource: { label: 'GOV.UK, VAT rates', url: 'https://www.gov.uk/vat-rates' },
  };
}

export function euDuty(product: string, code: string, value: number, rate: number, taxName: string, tax: number, why: string): PackDutyExample & { why: string } {
  return {
    product,
    tariffCode: code,
    goodsValueUsd: value,
    dutyRatePct: rate,
    taxName,
    taxRatePct: tax,
    why,
    dutySource: {
      label: `EU tariff rate as published in the UK Government Northern Ireland (EU) Online Tariff, commodity ${code.replace(/ /g, '')}`,
      url: `https://www.trade-tariff.service.gov.uk/xi/commodities/${code.replace(/ /g, '')}`,
    },
    taxSource: {
      label: 'European Union, Your Europe: VAT rules and rates',
      url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm',
    },
  };
}

/** Norway: duty from the Norwegian Customs tariff (Tolltariffen), VAT 25%. `code` is written like "61.10.2000". */
export function noDuty(product: string, code: string, value: number, rate: number, why: string): PackDutyExample & { why: string } {
  return {
    product,
    tariffCode: code,
    goodsValueUsd: value,
    dutyRatePct: rate,
    taxName: 'Norwegian import VAT',
    taxRatePct: 25,
    why,
    dutySource: {
      label: `Norwegian Customs (Tolletaten), customs tariff, commodity ${code}, ordinary rate for goods from China`,
      url: `https://tolltariffen.toll.no/tolltariff-vareoppslag-api/commodities/${code}?countryCode=CN`,
    },
    taxSource: { label: 'Norwegian Tax Administration (Skatteetaten), VAT rates', url: 'https://www.skatteetaten.no/en/rates/value-added-tax/' },
  };
}

export const NO_DUTY_PRINCIPLE_SOURCE: PackSource = {
  label: 'Norwegian Customs, import guide for beginners: "Most goods are free of customs duty"',
  url: 'https://www.toll.no/en/corporate/import/import-guide-for-beginners',
};

export const US_DUTY_NOTE =
  'We have not put a duty figure on this page. US duty on goods from China depends on the tariff code of the product and on extra tariffs that have changed several times. We work it out for your product when we quote.';

export const SEAROUTE_SOURCE: PackSource = {
  label: 'Sea distance worked out by UpFreights with the open-source searoute tool',
  url: 'https://github.com/genthalili/searoute-py',
};

export const CONTAINER_SOURCE: PackSource = {
  label: 'Hapag-Lloyd container specification, 40-foot standard (67.7 cubic metres)',
  url: 'https://www.hapag-lloyd.com/en/services-information/cargo-fleet/container/40-standard.html',
};


/** Usable inside volume of a standard 40-foot container, in cubic metres. */
export const CUBIC_METRES_40FT = 67.7;
