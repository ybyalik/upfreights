export interface CountryDestination {
  slug: string;
  name: string;
  code: string;
  description: string;
  majorPorts: string[];
  transitTime: string;
  popularGoods: string[];
}

export const countryDestinations: CountryDestination[] = [
  {
    slug: 'shipping-china-to-australia',
    name: 'Australia',
    code: 'AU',
    description: 'Sea and air freight from China to Australia. 14-22 day transit to Sydney, Melbourne, Brisbane, and Fremantle. FCL, LCL, and door-to-door delivery.',
    majorPorts: ['Sydney', 'Melbourne', 'Brisbane', 'Fremantle'],
    transitTime: '14-22 days',
    popularGoods: ['Electronics', 'Furniture', 'Consumer Goods', 'Machinery', 'Textiles'],
  },
  {
    slug: 'shipping-china-to-belgium',
    name: 'Belgium',
    code: 'BE',
    description: 'Sea and air freight from China to Belgium. 28-35 day transit via Antwerp and Zeebrugge. FCL, LCL, customs clearance, and door-to-door delivery.',
    majorPorts: ['Antwerp', 'Zeebrugge'],
    transitTime: '28-35 days',
    popularGoods: ['Electronics', 'Textiles', 'Machinery', 'Consumer Goods', 'Chemicals'],
  },
  {
    slug: 'shipping-china-to-brazil',
    name: 'Brazil',
    code: 'BR',
    description: 'Sea freight from China to Brazil. 35-45 day transit via Santos, Rio de Janeiro, and Paranaguá. FCL, LCL, and customs clearance for South American imports.',
    majorPorts: ['Santos', 'Rio de Janeiro', 'Paranaguá'],
    transitTime: '35-45 days',
    popularGoods: ['Electronics', 'Machinery', 'Textiles', 'Consumer Goods', 'Auto Parts'],
  },
  {
    slug: 'shipping-china-to-canada',
    name: 'Canada',
    code: 'CA',
    description: 'Sea and air freight from China to Canada. 14-30 day transit to Vancouver, Toronto, Montreal, and Halifax. FCL, LCL, customs clearance, and door-to-door delivery.',
    majorPorts: ['Vancouver', 'Toronto', 'Montreal', 'Halifax'],
    transitTime: '14-30 days',
    popularGoods: ['Consumer Goods', 'Machinery', 'Furniture', 'Electronics', 'Textiles'],
  },
  {
    slug: 'shipping-china-to-france',
    name: 'France',
    code: 'FR',
    description: 'Sea and air freight from China to France. 28-35 day transit via Le Havre and Marseille. FCL, LCL, customs clearance, and door-to-door delivery.',
    majorPorts: ['Le Havre', 'Marseille'],
    transitTime: '28-35 days',
    popularGoods: ['Textiles', 'Electronics', 'Furniture', 'Consumer Goods', 'Machinery'],
  },
  {
    slug: 'shipping-china-to-germany',
    name: 'Germany',
    code: 'DE',
    description: 'Sea and air freight from China to Germany. 28-40 day transit via Hamburg, Bremerhaven, and Frankfurt. FCL, LCL, customs clearance, and door-to-door delivery.',
    majorPorts: ['Hamburg', 'Bremerhaven', 'Frankfurt'],
    transitTime: '28-40 days',
    popularGoods: ['Machinery', 'Electronics', 'Textiles', 'Consumer Goods', 'Auto Parts'],
  },
  {
    slug: 'shipping-china-to-india',
    name: 'India',
    code: 'IN',
    description: 'Sea and air freight from China to India. 12-20 day transit via Mumbai, Chennai, Nhava Sheva, and Kolkata. FCL, LCL, and customs clearance services.',
    majorPorts: ['Mumbai', 'Chennai', 'Nhava Sheva', 'Kolkata'],
    transitTime: '12-20 days',
    popularGoods: ['Electronics', 'Machinery', 'Chemicals', 'Textiles', 'Consumer Goods'],
  },
  {
    slug: 'shipping-china-to-italy',
    name: 'Italy',
    code: 'IT',
    description: 'Sea and air freight from China to Italy. 25-32 day transit via Genoa, La Spezia, and Trieste. FCL, LCL, customs clearance, and door-to-door delivery.',
    majorPorts: ['Genoa', 'La Spezia', 'Trieste'],
    transitTime: '25-32 days',
    popularGoods: ['Textiles', 'Machinery', 'Electronics', 'Furniture', 'Consumer Goods'],
  },
  {
    slug: 'shipping-china-to-japan',
    name: 'Japan',
    code: 'JP',
    description: 'Sea and air freight from China to Japan. 3-7 day transit to Tokyo, Yokohama, Osaka, and Kobe. FCL, LCL, express air, and door-to-door delivery.',
    majorPorts: ['Tokyo', 'Yokohama', 'Osaka', 'Kobe'],
    transitTime: '3-7 days',
    popularGoods: ['Electronics', 'Machinery', 'Consumer Goods', 'Textiles', 'Auto Parts'],
  },
  {
    slug: 'shipping-china-to-mexico',
    name: 'Mexico',
    code: 'MX',
    description: 'Sea and air freight from China to Mexico. 18-25 day transit via Manzanillo, Lázaro Cárdenas, and Veracruz. FCL, LCL, and customs clearance.',
    majorPorts: ['Manzanillo', 'Lázaro Cárdenas', 'Veracruz'],
    transitTime: '18-25 days',
    popularGoods: ['Electronics', 'Machinery', 'Auto Parts', 'Consumer Goods', 'Textiles'],
  },
  {
    slug: 'shipping-china-to-netherlands',
    name: 'Netherlands',
    code: 'NL',
    description: 'Sea and air freight from China to the Netherlands via Rotterdam and Amsterdam. 28-32 day transit. FCL, LCL, customs clearance, and door-to-door delivery.',
    majorPorts: ['Rotterdam', 'Amsterdam'],
    transitTime: '28-32 days',
    popularGoods: ['Electronics', 'Machinery', 'Consumer Goods', 'Textiles', 'Food Products'],
  },
  {
    slug: 'shipping-china-to-new-zealand',
    name: 'New Zealand',
    code: 'NZ',
    description: 'Sea and air freight from China to New Zealand. 18-25 day transit via Auckland, Tauranga, and Wellington. FCL, LCL, and customs clearance services.',
    majorPorts: ['Auckland', 'Tauranga', 'Wellington'],
    transitTime: '18-25 days',
    popularGoods: ['Consumer Goods', 'Electronics', 'Furniture', 'Machinery', 'Textiles'],
  },
  {
    slug: 'shipping-china-to-singapore',
    name: 'Singapore',
    code: 'SG',
    description: 'Sea and air freight from China to Singapore. 5-10 day transit through the Port of Singapore. FCL, LCL, express air, and door-to-door delivery.',
    majorPorts: ['Port of Singapore'],
    transitTime: '5-10 days',
    popularGoods: ['Electronics', 'Consumer Goods', 'Machinery', 'Chemicals', 'Textiles'],
  },
  {
    slug: 'shipping-china-to-south-korea',
    name: 'South Korea',
    code: 'KR',
    description: 'Sea and air freight from China to South Korea. 2-5 day transit via Busan and Incheon. FCL, LCL, express air, and door-to-door delivery.',
    majorPorts: ['Busan', 'Incheon', 'Seoul'],
    transitTime: '2-5 days',
    popularGoods: ['Electronics', 'Machinery', 'Consumer Goods', 'Textiles', 'Auto Parts'],
  },
  {
    slug: 'shipping-china-to-sweden',
    name: 'Sweden',
    code: 'SE',
    description: 'Sea and air freight from China to Sweden. 30-39 day transit via Gothenburg, Helsingborg, and other Swedish ports. FCL, LCL, and customs clearance.',
    majorPorts: ['Gothenburg', 'Helsingborg', 'Norrkoeping', 'Gaevle', 'Halmstad'],
    transitTime: '30-39 days',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Furniture', 'Automotive Parts'],
  },
  {
    slug: 'shipping-china-to-norway',
    name: 'Norway',
    code: 'NO',
    description: 'Sea and air freight from China to Norway. 32-40 day transit via Oslo, Bergen, Stavanger, and 15 other Norwegian ports. FCL, LCL, and customs clearance.',
    majorPorts: ['Oslo', 'Bergen', 'Stavanger', 'Drammen', 'Kristiansand', 'Haugesund'],
    transitTime: '32-40 days',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Marine Equipment', 'Industrial Supplies'],
  },
  {
    slug: 'shipping-china-to-czech-republic',
    name: 'Czech Republic',
    code: 'CZ',
    description: 'Sea and rail freight from China to the Czech Republic via Paskov and Melnik inland terminals. 35-42 day transit. FCL, LCL, and customs clearance.',
    majorPorts: ['Awt Paskov', 'Melnik'],
    transitTime: '35-42 days',
    popularGoods: ['Machinery', 'Electronics', 'Automotive Parts', 'Consumer Goods', 'Industrial Equipment'],
  },
  {
    slug: 'shipping-china-to-spain',
    name: 'Spain',
    code: 'ES',
    description: 'Sea and air freight from China to Spain. 28-35 day transit via Barcelona, Valencia, and Algeciras. FCL, LCL, customs clearance, and door-to-door delivery.',
    majorPorts: ['Barcelona', 'Valencia', 'Algeciras'],
    transitTime: '28-35 days',
    popularGoods: ['Textiles', 'Electronics', 'Furniture', 'Consumer Goods', 'Machinery'],
  },
  {
    slug: 'shipping-china-to-united-kingdom',
    name: 'United Kingdom',
    code: 'GB',
    description: 'Sea and air freight from China to the UK. 28-35 day transit via Felixstowe, Southampton, London Gateway, and Liverpool. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Felixstowe', 'Southampton', 'London Gateway', 'Liverpool', 'Teesport', 'Grangemouth', 'Belfast', 'South Shields'],
    transitTime: '28-35 days',
    popularGoods: ['Textiles', 'Electronics', 'Furniture', 'Consumer Goods', 'Machinery'],
  },
  {
    slug: 'shipping-china-to-united-states',
    name: 'United States',
    code: 'US',
    description: 'Sea and air freight from China to the USA. 12-32 day transit to Los Angeles, Long Beach, New York, Seattle, and Savannah. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Los Angeles', 'Long Beach', 'New York', 'Seattle', 'Savannah'],
    transitTime: '12-32 days',
    popularGoods: ['Electronics', 'Furniture', 'Textiles', 'Machinery', 'Auto Parts'],
  },
];

export function getCountryBySlug(slug: string): CountryDestination | undefined {
  return countryDestinations.find((c) => c.slug === slug);
}

export function getAllCountrySlugs(): string[] {
  return countryDestinations.map((c) => c.slug);
}

// Sea freight country pages
export interface SeaFreightCountry {
  slug: string;
  country: string;
  description: string;
  majorPorts: string[];
  transitTime: string;
}

export const seaFreightCountries: SeaFreightCountry[] = [
  {
    slug: 'sea-freight-from-china-to-usa',
    country: 'USA',
    description: 'Ocean freight shipping from China to USA with FCL and LCL options to all major US ports.',
    majorPorts: ['Los Angeles', 'Long Beach', 'New York', 'Seattle', 'Savannah', 'Houston'],
    transitTime: '12-32 days',
  },
  {
    slug: 'sea-freight-from-china-to-canada',
    country: 'Canada',
    description: 'Sea freight services from China to Canada via Vancouver, Toronto, and other major ports.',
    majorPorts: ['Vancouver', 'Toronto', 'Montreal', 'Halifax'],
    transitTime: '14-30 days',
  },
  {
    slug: 'sea-freight-from-china-to-uk',
    country: 'United Kingdom',
    description: 'Ocean shipping from China to UK with reliable services to Felixstowe, Southampton, Liverpool, and more.',
    majorPorts: ['Felixstowe', 'Southampton', 'London Gateway', 'Liverpool', 'Teesport', 'Grangemouth', 'Belfast', 'South Shields'],
    transitTime: '28-35 days',
  },
  {
    slug: 'sea-freight-from-china-to-australia',
    country: 'Australia',
    description: 'Sea freight from China to Australia covering all major Australian ports.',
    majorPorts: ['Sydney', 'Melbourne', 'Brisbane', 'Fremantle'],
    transitTime: '14-22 days',
  },
  {
    slug: 'sea-freight-from-china-to-germany',
    country: 'Germany',
    description: 'Ocean freight to Germany via Hamburg and Bremerhaven, Europe\'s gateway.',
    majorPorts: ['Hamburg', 'Bremerhaven'],
    transitTime: '28-40 days',
  },
  {
    slug: 'sea-freight-from-china-to-sweden',
    country: 'Sweden',
    description: 'Ocean freight to Sweden via Gothenburg, Helsingborg, and other major Swedish ports.',
    majorPorts: ['Gothenburg', 'Helsingborg', 'Norrkoeping', 'Gaevle', 'Halmstad'],
    transitTime: '30-39 days',
  },
  {
    slug: 'sea-freight-from-china-to-czech-republic',
    country: 'Czech Republic',
    description: 'Ocean freight to Czech Republic via inland terminals at Paskov and Melnik.',
    majorPorts: ['Awt Paskov', 'Melnik'],
    transitTime: '35-42 days',
  },
  {
    slug: 'sea-freight-from-china-to-norway',
    country: 'Norway',
    description: 'Ocean freight to Norway with services to 18 ports along the Norwegian coastline.',
    majorPorts: ['Oslo', 'Bergen', 'Stavanger', 'Drammen', 'Kristiansand', 'Haugesund'],
    transitTime: '32-40 days',
  },
];

export function getSeaFreightCountryBySlug(slug: string): SeaFreightCountry | undefined {
  return seaFreightCountries.find((c) => c.slug === slug);
}

export function getAllSeaFreightCountrySlugs(): string[] {
  return seaFreightCountries.map((c) => c.slug);
}
