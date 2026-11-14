/**
 * Destination port packs: the facts that belong to a port, stored once and
 * shared by every route into it. See routePackShared.ts for the rules.
 */

import type { PortPack } from './routePackShared';
import { ukDuty, euDuty, US_DUTY_NOTE, US_FEE_SOURCES } from './routePackShared';
import { generatedPortPacks } from './routePortsGenerated';

const UK_GUIDE = { label: 'Shipping from China to the United Kingdom', href: '/shipping-china-to-united-kingdom' };
const US_GUIDE = { label: 'Shipping from China to the United States', href: '/shipping-china-to-united-states' };
const IT_GUIDE = { label: 'Shipping from China to Italy', href: '/shipping-china-to-italy' };
const SE_GUIDE = { label: 'Shipping from China to Sweden', href: '/shipping-china-to-sweden' };

const handWrittenPorts: PortPack[] = [
  // ---------------------------------------------------------------- UK
  {
    id: 'felixstowe',
    checked: 'November 2026',
    countryGuide: UK_GUIDE,
    port: {
      name: 'Port of Felixstowe',
      operator: 'Hutchison Ports',
      facts: [
        { label: 'Rank in the UK', value: 'Largest container port (operator statement)' },
        { label: 'Berths for the largest ships', value: '4' },
        { label: 'Containers handled since the 1960s', value: 'Over 100 million TEU by December 2021' },
      ],
      notes: [
        'TEU is the standard count for containers. One 20-foot container is 1 TEU and one 40-foot container is 2.',
      ],
    },
    travel: [
      ['Felixstowe is a port the big ships from China call at themselves. Its operator says four of its berths can take the largest container ships in the world.'],
    ],
    dutyExample: ukDuty('laptops', '8471 30 00 00', 80000, 0,
      'Laptops pay no UK duty at all, but import VAT is still due on the full value.'),
    inland: {
      from: 'the Port of Felixstowe',
      source: 'osm',
      places: [
        { name: 'London', km: 140 },
        { name: 'Birmingham', km: 266 },
        { name: 'Leeds', km: 352 },
        { name: 'Manchester', km: 397 },
      ],
    },
    faqs: [],
    sources: [
      { label: 'Hutchison Ports Port of Felixstowe statement, 6 December 2021 (published by The Maritime Executive)', url: 'https://maritime-executive.com/corporate/port-of-felixstowe-tops-100-million-teu' },
    ],
  },
  {
    id: 'liverpool',
    checked: 'November 2026',
    countryGuide: UK_GUIDE,
    port: {
      name: 'Port of Liverpool',
      operator: 'Peel Ports',
      facts: [
        { label: 'Container terminals', value: '2, both at Seaforth (Liverpool2 and Royal Seaforth)' },
        { label: 'Deepest water for ships', value: '16.5 metres' },
        { label: 'Opening hours', value: 'Open 24 hours' },
        { label: 'Rail', value: 'Rail terminal on site' },
      ],
      notes: [],
    },
    travel: [
      [
        'Liverpool has two container terminals, both at Seaforth: Liverpool2, the deep-water terminal, and the older Royal Seaforth Container Terminal.',
        'The port operator, Peel Ports, describes Liverpool2 as "a viable call" for Far East services, and says Royal Seaforth has feeder services that connect Liverpool to the Far East. A feeder is a smaller ship that carries containers between a big hub port and a smaller one. So your container may arrive on one ship, or change to a feeder at a hub on the way. Ask us which applies to the sailing we quote.',
      ],
    ],
    dutyExample: ukDuty('wooden dining and living room furniture', '9403 60 10 00', 25000, 0,
      'Furniture is bulky for its value, so the freight is a bigger share of the total than on most goods.'),
    inland: {
      from: 'the Port of Liverpool',
      source: 'port',
      places: [
        { name: 'Manchester city centre', km: 59 },
        { name: 'Birmingham', km: 169 },
        { name: 'London', km: 349 },
        { name: 'Glasgow', km: 351 },
      ],
    },
    faqs: [
      {
        question: 'Why ship to Liverpool instead of a south coast port?',
        answer: 'Distance to your warehouse. By the port operator\'s own figures, Liverpool is 36.6 miles from Manchester and 105 miles from Birmingham, and it has a rail terminal on site. If your goods are going to the North West or the Midlands, that can mean a shorter truck journey.',
      },
    ],
    sources: [
      { label: 'Peel Ports, Port of Liverpool', url: 'https://www.peelports.com/port-locations/liverpool/' },
      { label: 'Peel Ports, Liverpool Container Terminal', url: 'https://www.peelports.com/port-locations/liverpool-container-terminal/' },
    ],
  },
  {
    id: 'grangemouth',
    checked: 'November 2026',
    countryGuide: UK_GUIDE,
    port: {
      name: 'Port of Grangemouth',
      operator: 'Forth Ports',
      facts: [
        { label: 'Rank in Scotland', value: 'Largest container terminal' },
        { label: 'Containers a year', value: 'Over 250,000 TEU' },
        { label: 'People within a one-hour drive', value: 'About 70% of Scotland\'s population' },
        { label: 'Warehousing at the port', value: '600,000 square feet' },
        { label: 'Rail', value: '775-metre rail siding' },
        { label: 'Customs', value: 'Border Control Post on site' },
      ],
      notes: [
        'All figures are the port operator\'s own. TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'Forth Ports has an online tracker where you can look up a container at Grangemouth by its number.',
      ],
    },
    travel: [
      [
        'Grangemouth is a feeder port. A feeder is a smaller ship that carries containers between a big hub port and a smaller one. The port operator, Forth Ports, says Grangemouth has "regular feeder connections linking Scotland to major deep-sea shipping routes".',
        'In practice your container leaves China on a large ship, is unloaded at a bigger port, and finishes the trip to Grangemouth on a feeder. The change of ship is part of the transit time in our table. Ask us where the change happens on the sailing we quote.',
      ],
      [
        'Big ships from Asia do not sail into the Firth of Forth. Forth Ports describes Grangemouth as having "regular feeder connections linking Scotland to major deep-sea shipping routes". A feeder is a smaller ship that shuttles containers between a hub port and a smaller one.',
        'So the trip has two legs: a large ship to a hub port, then a feeder to Grangemouth. The days in our table cover both legs. Ask us which hub the sailing we quote uses.',
      ],
    ],
    dutyExample: ukDuty('adult cotton T-shirts', '6109 10 00 10', 60000, 12,
      'Cotton T-shirts pay 12% UK duty, so duty adds more than the freight here.'),
    inland: {
      from: 'the Port of Grangemouth',
      source: 'osm',
      places: [
        { name: 'Edinburgh', km: 40 },
        { name: 'Glasgow', km: 50 },
        { name: 'Dundee', km: 97 },
        { name: 'Aberdeen', km: 212 },
      ],
    },
    faqs: [
      {
        question: 'Why ship to Grangemouth instead of an English port?',
        answer: 'It puts the container in Scotland. Forth Ports says about 70% of Scotland\'s population is within a one-hour drive of Grangemouth. The other choice is an English port and a long truck journey north. Ask us to price both.',
      },
      {
        question: 'Can I track my container once it reaches Grangemouth?',
        answer: 'Yes. Forth Ports has an online tracker that shows the status of a container at Grangemouth by container number or booking reference.',
      },
    ],
    sources: [
      { label: 'Forth Ports, Grangemouth', url: 'https://forthports.co.uk/our-ports/grangemouth/' },
    ],
  },
  // ---------------------------------------------------------------- US
  {
    id: 'los-angeles',
    checked: 'November 2026',
    countryGuide: US_GUIDE,
    port: {
      name: 'Port of Los Angeles',
      operator: 'City of Los Angeles Harbor Department',
      facts: [
        { label: 'Containers in 2025', value: '10.2 million TEU' },
        { label: 'Container terminals', value: '7' },
        { label: 'Rail yards on the docks', value: '5' },
        { label: 'Main channel depth', value: '53 feet' },
        { label: 'Top import by container count, 2025', value: 'Furniture (680,016 TEU)' },
        { label: 'Next four imports, 2025', value: 'Auto parts, plastic products, apparel, electronics' },
        { label: 'Trade with China and Hong Kong by cargo value, 2025', value: '$82 billion, down from $120 billion in 2024' },
      ],
      notes: [
        'All figures are from the port\'s own facts and figures page. TEU is the standard count for containers. One 40-foot container is 2 TEU.',
      ],
    },
    travel: [
      ['The Port of Los Angeles has seven container terminals and five rail yards on the docks, so a container can go straight from the ship to a train for inland cities.'],
    ],
    dutyNote: US_DUTY_NOTE,
    usFeeExample: {
      product: 'furniture',
      why: 'Furniture was the top import through the Port of Los Angeles in 2025, by the port\'s own count.',
      goodsValueUsd: 25000,
    },
    inland: {
      from: 'the Port of Los Angeles',
      source: 'osm',
      places: [
        { name: 'Ontario, California (Inland Empire warehouses)', km: 85 },
        { name: 'Las Vegas', km: 461 },
        { name: 'Phoenix', km: 616 },
        { name: 'Salt Lake City', km: 1134 },
      ],
    },
    faqs: [
      {
        question: 'What do importers bring into the Port of Los Angeles most?',
        answer: 'By the port\'s own 2025 figures, the top five imports by container count were furniture, auto parts, plastic products, apparel and electronics. Furniture alone was 680,016 TEU.',
      },
      {
        question: 'Can my container go inland by train from Los Angeles?',
        answer: 'Yes. The port says it has five rail yards on the docks. Tell us the final city and we will price the rail leg with the sea freight.',
      },
      {
        question: 'Has trade from China through Los Angeles fallen?',
        answer: 'Yes, by value. The port reports $82 billion of trade with China and Hong Kong in 2025, down from $120 billion in 2024. China and Hong Kong were still its largest trading partner.',
      },
    ],
    sources: [
      { label: 'Port of Los Angeles, Facts and Figures', url: 'https://www.portoflosangeles.org/business/statistics/facts-and-figures' },
      ...US_FEE_SOURCES,
    ],
  },
  {
    id: 'houston',
    checked: 'November 2026',
    countryGuide: US_GUIDE,
    port: {
      name: 'Port Houston',
      operator: 'Port of Houston Authority',
      facts: [
        { label: 'Containers in 2025', value: '4,303,345 TEU, a record, up 4% on 2024' },
        { label: 'Container terminals', value: '2 (Barbours Cut and Bayport)' },
        { label: 'Rank among US container ports', value: '5th by total TEU' },
        { label: 'Share of US Gulf Coast containers', value: '75%' },
        { label: 'Share of Texas containers', value: '97%' },
      ],
      notes: [
        'All figures are Port Houston\'s own. TEU is the standard count for containers. One 40-foot container is 2 TEU.',
      ],
    },
    travel: [
      ['Port Houston has two container terminals, Barbours Cut and Bayport. Ask us which one the sailing we quote uses, because your trucker needs to know.'],
    ],
    dutyNote: US_DUTY_NOTE,
    usFeeExample: {
      product: 'machinery, appliances and electronics',
      why: 'Machinery, appliances and electronics were the largest group of containers imported through Port Houston in 2025: 329,624 TEU, 17% of the total, by the port\'s own report.',
      goodsValueUsd: 70000,
    },
    inland: {
      from: 'Port Houston (Barbours Cut)',
      source: 'osm',
      places: [
        { name: 'Austin', km: 302 },
        { name: 'San Antonio', km: 355 },
        { name: 'Dallas', km: 424 },
        { name: 'New Orleans', km: 537 },
      ],
    },
    faqs: [
      {
        question: 'Which terminal will my container arrive at in Houston?',
        answer: 'Port Houston has two container terminals, Barbours Cut and Bayport. It depends on the shipping line. We tell you the terminal when we confirm the booking.',
      },
      {
        question: 'Is Houston a big enough port for regular container services from China?',
        answer: 'Yes. Port Houston handled a record 4,303,345 TEU in 2025 and says it handles 75% of all containers on the US Gulf Coast.',
      },
    ],
    sources: [
      { label: 'Port Houston, Statistics', url: 'https://porthouston.com/about/our-port/statistics/' },
      { label: 'Port Houston news release, January 2026: "Port Houston Celebrates Best Year Yet"', url: 'https://porthouston.com/wp-content/uploads/2026/01/Port-Houston-Celebrates-Best-Year-Yet.pdf' },
      { label: 'Port Houston, Container Volume by Commodity 2025 (Journal of Commerce / PIERS data)', url: 'https://porthouston.com/wp-content/uploads/2026/04/4-Container-Volume-by-Commodity-2025.pdf' },
      ...US_FEE_SOURCES,
    ],
  },
  // ---------------------------------------------------------------- Italy
  {
    id: 'genoa',
    checked: 'November 2026',
    countryGuide: IT_GUIDE,
    port: {
      name: 'Port of Genoa',
      operator: 'Western Ligurian Sea Port Authority (Ports of Genoa)',
      facts: [
        { label: 'Containers in 2025, Genoa and Savona-Vado together', value: '2,999,486 TEU, a record, up 6.3% on 2024' },
        { label: 'Of which import and export containers', value: '1,919,700 TEU, up 4.8%' },
        { label: 'Of which moved from ship to ship', value: '547,790 TEU, up 31.5%' },
        { label: 'Savona-Vado alone', value: 'About 590,000 TEU, up 58.4%' },
      ],
      notes: [
        'All figures are from the port authority\'s own 2025 results, published on 4 February 2026. TEU is the standard count for containers. One 40-foot container is 2 TEU.',
      ],
    },
    travel: [
      ['Genoa is run by the same port authority as the port of Savona-Vado. Some lines unload at Vado Ligure instead of Genoa. Where we hold rates for Vado Ligure, they are in their own table on this page.'],
    ],
    dutyExample: euDuty('leather handbags', '4202 21 00 90', 90000, 3, 'Italian import VAT', 22,
      'Handbags are light and valuable, so duty and VAT matter far more than the freight.'),
    inland: {
      from: 'the Port of Genoa',
      source: 'osm',
      places: [
        { name: 'Milan', km: 137 },
        { name: 'Turin', km: 166 },
        { name: 'Bologna', km: 291 },
        { name: 'Zurich, Switzerland', km: 413 },
      ],
    },
    faqs: [
      {
        question: 'Genoa or Vado Ligure: which should I ship to?',
        answer: 'They are run by the same port authority. Savona-Vado grew by 58.4% in 2025, to about 590,000 TEU. Which one you use depends on the shipping line. Where we hold rates for both, they are in separate tables on this page.',
      },
    ],
    sources: [
      { label: 'Ports of Genoa, "Three million TEUs: Ports of Genoa hit a record high in container volumes in 2025", 4 February 2026', url: 'https://www.portsofgenoa.com/en/magazine/news/three-million-teus-ports-of-genoa-hit-record-high-container-volumes-2025.html' },
    ],
  },
  {
    id: 'cagliari',
    checked: 'November 2026',
    countryGuide: IT_GUIDE,
    port: {
      name: 'Cagliari, Porto Canale (MITO terminal)',
      operator: 'Grendi Group',
      facts: [
        { label: 'Containers lifted on and off ships, January to June 2025', value: '67,865 TEU' },
        { label: 'Total including roll-on roll-off traffic, January to June 2025', value: 'Over 96,000 TEU' },
        { label: 'Largest ship to call', value: 'MSC Venice, 16,652 TEU, July 2025' },
      ],
      notes: [
        'Figures are those given by the Grendi Group\'s chief executive, reported by L\'Unione Sarda on 13 July 2025. TEU is the standard count for containers. One 40-foot container is 2 TEU.',
      ],
    },
    travel: [
      [
        'Cagliari is on the south coast of Sardinia. Containers arrive at Porto Canale, the industrial port, at a terminal called MITO that is run by the Italian Grendi Group.',
        'Large ships do call there. In July 2025 the MSC Venice, a 399-metre ship that can carry 16,652 TEU, became the largest ship ever to dock at Porto Canale. Whether your container arrives direct or changes ship on the way depends on the line. Ask us about the sailing we quote.',
      ],
    ],
    dutyExample: euDuty('microwave ovens', '8516 50 00 00', 35000, 5, 'Italian import VAT', 22,
      'Microwave ovens pay a 5% EU duty rate.'),
    inland: {
      from: 'Porto Canale, Cagliari',
      source: 'osm',
      places: [
        { name: 'Oristano', km: 106 },
        { name: 'Sassari', km: 222 },
        { name: 'Olbia', km: 270 },
      ],
    },
    faqs: [
      {
        question: 'Can a container be shipped by sea straight to Sardinia?',
        answer: 'Yes. Cagliari has its own container terminal at Porto Canale, so the container does not have to be unloaded on the Italian mainland and trucked onto a ferry.',
      },
      {
        question: 'Is Cagliari big enough for ships from Asia?',
        answer: 'Yes. In July 2025 the MSC Venice, which can carry 16,652 TEU, docked at Porto Canale. It was the largest ship ever to call there.',
      },
    ],
    sources: [
      { label: 'L\'Unione Sarda, "Cagliari, the record-breaking ship docks at Porto Canale", 13 July 2025', url: 'https://www.unionesarda.it/en/sardinia/cagliari-the-record-breaking-ship-docks-at-porto-canale-kblywikt' },
    ],
  },
  // ---------------------------------------------------------------- Sweden
  {
    id: 'norrkoeping',
    checked: 'November 2026',
    countryGuide: SE_GUIDE,
    port: {
      name: 'Port of Norrköping, Pampus Terminal',
      operator: 'Norrköpings Hamn',
      facts: [
        { label: 'Quay length', value: '610 metres' },
        { label: 'Container cranes', value: '2 ship-to-shore cranes' },
        { label: 'Rail', value: '6 rail tracks, up to 650 metres, with a rail terminal on site' },
        { label: 'Warehouses', value: '38,000 square metres' },
        { label: 'Gate hours for containers', value: 'Monday to Thursday 6 am to 8 pm, Friday 6 am to 6 pm' },
        { label: 'Usual cargo coming in', value: 'Consumer goods for the region\'s warehouses, and materials for industry' },
      ],
      notes: [
        'All figures are the port\'s own. Trucks must arrive 30 minutes before closing. The port lists no weekend gate hours.',
      ],
    },
    travel: [
      [
        'Norrköping is on Sweden\'s east coast, inside the Baltic Sea. Its container terminal, Pampus, has 610 metres of quay and two container cranes.',
        'A terminal of that size is served by smaller ships. So your container leaves China on a large ship, is unloaded at a bigger European port, and finishes the trip to Norrköping on a smaller ship. The change is part of the transit time in our table. Ask us where the change happens on the sailing we quote.',
      ],
    ],
    dutyExample: euDuty('plastic household goods', '3924 90 00 90', 30000, 6.5, 'Swedish import VAT', 25,
      'The port says most of what arrives is consumer goods for the region\'s warehouses. Sweden\'s standard VAT rate is 25%.'),
    inland: {
      from: 'the Port of Norrköping',
      source: 'osm',
      places: [
        { name: 'Linköping', km: 48 },
        { name: 'Stockholm', km: 164 },
        { name: 'Jönköping', km: 173 },
        { name: 'Gothenburg', km: 319 },
      ],
    },
    faqs: [
      {
        question: 'When can a truck collect a container at Norrköping?',
        answer: 'The port gives its container gate hours as Monday to Thursday 6 am to 8 pm and Friday 6 am to 6 pm. Trucks must arrive 30 minutes before closing. The port lists no weekend hours, so plan around the weekend.',
      },
      {
        question: 'Can my container go on by train from Norrköping?',
        answer: 'Yes. The port says the Pampus terminal has six rail tracks of up to 650 metres and a rail terminal on site.',
      },
    ],
    sources: [
      { label: 'Port of Norrköping, Pampus Terminal', url: 'https://www.norrkopingshamn.se/en/terminals-goods/pampus-terminal/' },
      { label: 'Port of Norrköping, Container and Intermodal', url: 'https://www.norrkopingshamn.se/en/services/container-intermodal/' },
    ],
  },
];

export const portPacks: PortPack[] = [...handWrittenPorts, ...generatedPortPacks];

const portById = new Map(portPacks.map((p) => [p.id, p]));

export function getPortPack(id: string): PortPack | undefined {
  return portById.get(id);
}
