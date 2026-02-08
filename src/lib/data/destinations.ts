import { Destination } from '@/lib/types';

export const destinations: Destination[] = [
  {
    id: 'united-states',
    slug: 'china-to-united-states',
    country: 'United States',
    countryCode: 'US',
    flag: '🇺🇸',
    description: 'The United States is China\'s largest trading partner, with over $500 billion in annual trade. We offer comprehensive shipping solutions to all major US ports and cities, with optimized transit times and competitive rates.',
    transitTimeAir: '2-5 days',
    transitTimeSea: '15-25 days',
    majorPorts: ['Los Angeles', 'Long Beach', 'New York', 'Savannah', 'Seattle'],
    majorAirports: ['Los Angeles (LAX)', 'Chicago (ORD)', 'New York (JFK)', 'Atlanta (ATL)'],
    customsInfo: 'US Customs and Border Protection (CBP) requires advance filing through the Automated Commercial Environment (ACE). ISF filing required 24 hours before vessel departure.',
    documentation: [
      'Commercial Invoice',
      'Packing List',
      'Bill of Lading / Air Waybill',
      'ISF Filing (10+2)',
      'Certificate of Origin (if applicable)',
      'FDA Prior Notice (for food products)',
      'FCC Declaration (for electronics)',
    ],
    routes: [],
    faqs: [
      {
        question: 'What is the transit time for sea freight from China to the US?',
        answer: 'Transit times vary by route: West Coast (Los Angeles, Long Beach) takes 15-20 days, while East Coast (New York, Savannah) takes 25-35 days via direct service or 20-25 days via West Coast transshipment.',
      },
      {
        question: 'What are the customs duties for importing from China?',
        answer: 'US import duties vary by product classification (HS code). Many goods are subject to additional Section 301 tariffs ranging from 7.5% to 25%. We provide duty estimation as part of our quote process.',
      },
      {
        question: 'Do I need a customs broker for US imports?',
        answer: 'While not legally required for personal shipments under $2,500, commercial shipments typically require a licensed customs broker. Our team includes licensed US customs brokers to handle your clearance.',
      },
      {
        question: 'What is ISF filing and when is it required?',
        answer: 'Importer Security Filing (ISF) is required for all ocean shipments to the US. It must be filed at least 24 hours before the vessel departs from the origin port. Failure to comply can result in fines of $5,000+ per shipment.',
      },
    ],
    image: '/images/destinations/united-states.jpg',
  },
  {
    id: 'canada',
    slug: 'china-to-canada',
    country: 'Canada',
    countryCode: 'CA',
    flag: '🇨🇦',
    description: 'Canada offers excellent trade opportunities with growing e-commerce and manufacturing sectors. Our shipping services connect Chinese manufacturers with Canadian businesses through efficient Pacific and Atlantic routes.',
    transitTimeAir: '2-4 days',
    transitTimeSea: '14-22 days',
    majorPorts: ['Vancouver', 'Montreal', 'Toronto', 'Prince Rupert'],
    majorAirports: ['Toronto (YYZ)', 'Vancouver (YVR)', 'Montreal (YUL)'],
    customsInfo: 'Canada Border Services Agency (CBSA) requires advance cargo information. Release Prior to Payment program available for qualified importers.',
    documentation: [
      'Commercial Invoice',
      'Packing List',
      'Bill of Lading / Air Waybill',
      'Canada Customs Invoice (CCI)',
      'Certificate of Origin (for FTA benefits)',
      'CFIA permits (for food/agricultural products)',
    ],
    routes: [],
    faqs: [
      {
        question: 'What is the fastest shipping option from China to Canada?',
        answer: 'Air freight offers 2-4 day transit times to major Canadian airports. For sea freight, Vancouver offers the shortest transit at 14-18 days due to its Pacific location.',
      },
      {
        question: 'Are there import restrictions for Chinese goods in Canada?',
        answer: 'Canada has specific regulations for certain products including food, health products, and electronics. Some goods require permits from agencies like CFIA or Health Canada.',
      },
      {
        question: 'What duties apply to imports from China to Canada?',
        answer: 'Duties vary by product classification. GST of 5% applies to most imports, plus provincial sales tax for some provinces. We provide duty estimates in our quotes.',
      },
    ],
    image: '/images/destinations/canada.jpg',
  },
  {
    id: 'united-kingdom',
    slug: 'china-to-united-kingdom',
    country: 'United Kingdom',
    countryCode: 'GB',
    flag: '🇬🇧',
    description: 'The United Kingdom remains a major trading partner with China, especially for e-commerce, fashion, and technology products. Post-Brexit customs procedures require experienced handling, which our team provides.',
    transitTimeAir: '3-5 days',
    transitTimeSea: '28-35 days',
    majorPorts: ['Felixstowe', 'Southampton', 'London Gateway', 'Liverpool'],
    majorAirports: ['London Heathrow (LHR)', 'East Midlands (EMA)', 'Manchester (MAN)'],
    customsInfo: 'UK customs declarations are processed through the Customs Declaration Service (CDS). EORI number required for all importers. VAT and duties payable before goods release.',
    documentation: [
      'Commercial Invoice',
      'Packing List',
      'Bill of Lading / Air Waybill',
      'EORI Number',
      'Customs Declaration (CDS)',
      'Certificate of Origin',
      'UKCA marking documents (where applicable)',
    ],
    routes: [],
    faqs: [
      {
        question: 'How has Brexit affected shipping from China to the UK?',
        answer: 'Brexit requires separate customs declarations for UK imports. EU transit routes now require additional documentation. Our team handles all post-Brexit requirements seamlessly.',
      },
      {
        question: 'What is EORI and do I need one?',
        answer: 'An EORI (Economic Operators Registration and Identification) number is required for all businesses importing or exporting goods to/from the UK. Application is free through HMRC.',
      },
      {
        question: 'What are the transit times to the UK?',
        answer: 'Air freight takes 3-5 days. Sea freight via the Suez Canal takes 28-35 days, though some services route via the Cape of Good Hope at 35-42 days.',
      },
    ],
    image: '/images/destinations/united-kingdom.jpg',
  },
  {
    id: 'australia',
    slug: 'china-to-australia',
    country: 'Australia',
    countryCode: 'AU',
    flag: '🇦🇺',
    description: 'Australia\'s proximity to China makes it an ideal destination for fast sea freight. Strong demand for consumer goods, machinery, and electronics drives consistent shipping volumes.',
    transitTimeAir: '2-4 days',
    transitTimeSea: '12-18 days',
    majorPorts: ['Melbourne', 'Sydney', 'Brisbane', 'Fremantle'],
    majorAirports: ['Sydney (SYD)', 'Melbourne (MEL)', 'Brisbane (BNE)'],
    customsInfo: 'Australian Border Force (ABF) enforces strict biosecurity controls. Integrated Cargo System (ICS) required for all import declarations.',
    documentation: [
      'Commercial Invoice',
      'Packing List',
      'Bill of Lading / Air Waybill',
      'Import Declaration (via ICS)',
      'Biosecurity documentation',
      'Certificate of Origin',
      'Conformance certificates (where applicable)',
    ],
    routes: [],
    faqs: [
      {
        question: 'Why are Australia\'s biosecurity rules so strict?',
        answer: 'Australia\'s unique ecosystem requires protection from invasive species and diseases. All wooden packaging must be treated and marked with ISPM-15. Food and plant products require additional permits.',
      },
      {
        question: 'What is the Integrated Cargo System (ICS)?',
        answer: 'ICS is Australia\'s electronic system for processing import declarations. All commercial imports must be declared through ICS, and duties paid before goods can be released.',
      },
      {
        question: 'How competitive are shipping rates to Australia?',
        answer: 'Australia\'s proximity to China means competitive rates, especially for sea freight. High shipping volumes ensure frequent sailings and reliable schedules.',
      },
    ],
    image: '/images/destinations/australia.jpg',
  },
  {
    id: 'germany',
    slug: 'china-to-germany',
    country: 'Germany',
    countryCode: 'DE',
    flag: '🇩🇪',
    description: 'Germany is Europe\'s largest economy and a manufacturing powerhouse. Strong demand for machinery, electronics, and consumer goods makes it a key destination for Chinese exports.',
    transitTimeAir: '3-5 days',
    transitTimeSea: '28-35 days',
    majorPorts: ['Hamburg', 'Bremerhaven', 'Wilhelmshaven'],
    majorAirports: ['Frankfurt (FRA)', 'Munich (MUC)', 'Leipzig (LEJ)'],
    customsInfo: 'German customs operates within the EU customs union. ATLAS system used for electronic customs declarations. EORI number required for all importers.',
    documentation: [
      'Commercial Invoice',
      'Packing List',
      'Bill of Lading / Air Waybill',
      'EORI Number',
      'Customs Declaration',
      'CE marking documentation',
      'Certificate of Origin',
    ],
    routes: [],
    faqs: [
      {
        question: 'What is the rail freight option from China to Germany?',
        answer: 'The China-Europe Railway Express offers 14-18 day transit times, faster than sea and cheaper than air. Services run from multiple Chinese cities to Hamburg and Duisburg.',
      },
      {
        question: 'What CE marking requirements apply?',
        answer: 'Products sold in the EU must comply with CE marking requirements. This includes electrical equipment, machinery, toys, and many other product categories. Documentation must accompany shipments.',
      },
      {
        question: 'How does Hamburg compare to Rotterdam for European distribution?',
        answer: 'Hamburg is Germany\'s largest port and offers excellent rail connections to Central and Eastern Europe. Rotterdam may be preferred for distribution to France, UK, and Benelux countries.',
      },
    ],
    image: '/images/destinations/germany.jpg',
  },
  {
    id: 'netherlands',
    slug: 'china-to-netherlands',
    country: 'Netherlands',
    countryCode: 'NL',
    flag: '🇳🇱',
    description: 'The Netherlands, with the Port of Rotterdam, serves as Europe\'s primary gateway. Excellent logistics infrastructure makes it ideal for European distribution.',
    transitTimeAir: '3-5 days',
    transitTimeSea: '26-32 days',
    majorPorts: ['Rotterdam', 'Amsterdam'],
    majorAirports: ['Amsterdam Schiphol (AMS)'],
    customsInfo: 'Dutch customs operates within the EU framework. Rotterdam offers efficient customs processing with options for deferred duties and bonded warehousing.',
    documentation: [
      'Commercial Invoice',
      'Packing List',
      'Bill of Lading / Air Waybill',
      'EORI Number',
      'EU Customs Declaration',
      'CE marking documentation',
      'Certificate of Origin',
    ],
    routes: [],
    faqs: [
      {
        question: 'Why is Rotterdam popular for European distribution?',
        answer: 'Rotterdam is Europe\'s largest port with direct connections to 500+ ports worldwide. Extensive barge, rail, and road networks enable efficient distribution to all EU countries.',
      },
      {
        question: 'What are the advantages of Amsterdam Schiphol for air cargo?',
        answer: 'Schiphol is Europe\'s third largest cargo airport with dedicated cargo facilities, 24/7 operations, and excellent road connections. It specializes in high-value and perishable goods.',
      },
      {
        question: 'Can I use the Netherlands as a bonded warehouse location?',
        answer: 'Yes, the Netherlands offers excellent bonded warehouse facilities. Goods can be stored duty-free until needed for EU distribution or re-export to other destinations.',
      },
    ],
    image: '/images/destinations/netherlands.jpg',
  },
  {
    id: 'italy',
    slug: 'china-to-italy',
    country: 'Italy',
    countryCode: 'IT',
    flag: '🇮🇹',
    description: 'Italy is a key Mediterranean trading partner for China, with Trieste serving as a strategic gateway to Central and Southern Europe. Strong demand for machinery, electronics, textiles, and fashion goods drives consistent shipping volumes on this route.',
    transitTimeAir: '3-5 days',
    transitTimeSea: '40-65 days',
    majorPorts: ['Genoa', 'Trieste', 'Naples', 'La Spezia', 'Venice'],
    majorAirports: ['Milan Malpensa (MXP)', 'Rome Fiumicino (FCO)', 'Venice Marco Polo (VCE)'],
    customsInfo: 'Italian customs operates within the EU customs union. AIDA system used for electronic customs declarations. EORI number required for all importers. VAT and duties payable before goods release.',
    documentation: [
      'Commercial Invoice',
      'Packing List',
      'Bill of Lading / Air Waybill',
      'EORI Number',
      'EU Customs Declaration',
      'CE marking documentation (where applicable)',
      'Certificate of Origin',
    ],
    routes: [],
    faqs: [
      {
        question: 'What is the transit time for sea freight from China to Italy?',
        answer: 'Sea freight from major Chinese ports to Trieste typically takes 40-65 days depending on the origin port and carrier. Shanghai and Shenzhen offer the fastest transit times at around 40-42 days, while northern ports like Qingdao and Tianjin may take 60-65 days.',
      },
      {
        question: 'Why is Trieste a strategic port for European imports?',
        answer: 'Trieste is the northernmost Mediterranean port and serves as a key gateway for Central and Eastern European distribution. It offers excellent rail and road connections to Austria, Germany, and the Balkans, reducing inland transportation costs.',
      },
      {
        question: 'What duties and taxes apply to Italian imports from China?',
        answer: 'Italy applies EU common external tariff duties based on HS code classification, plus Italian VAT at 22% on most goods. An EORI number is required for all commercial imports. We provide duty estimation as part of our quote process.',
      },
      {
        question: 'Which carriers operate on the China to Trieste route?',
        answer: 'Major carriers including CMA CGM, MSC, Maersk, COSCO, OOCL, Evergreen (EMC), and ONE operate regular services from Chinese ports to Trieste, with weekly departures from most origin ports.',
      },
    ],
    image: '/images/destinations/italy.jpg',
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((dest) => dest.slug === slug);
}

export function getDestinationByCountryId(id: string): Destination | undefined {
  return destinations.find((dest) => dest.id === id);
}

export function getAllDestinationSlugs(): string[] {
  return destinations.map((dest) => dest.slug);
}
