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
    description: 'Reliable freight forwarding from China to Australia with competitive rates and efficient customs clearance.',
    majorPorts: ['Sydney', 'Melbourne', 'Brisbane', 'Fremantle'],
    transitTime: '14-22 days',
    popularGoods: ['Electronics', 'Furniture', 'Consumer Goods', 'Machinery', 'Textiles'],
  },
  {
    slug: 'shipping-china-to-belgium',
    name: 'Belgium',
    code: 'BE',
    description: 'Professional freight services from China to Belgium, gateway to European markets.',
    majorPorts: ['Antwerp', 'Zeebrugge'],
    transitTime: '28-35 days',
    popularGoods: ['Electronics', 'Textiles', 'Machinery', 'Consumer Goods', 'Chemicals'],
  },
  {
    slug: 'shipping-china-to-brazil',
    name: 'Brazil',
    code: 'BR',
    description: 'Comprehensive shipping solutions from China to Brazil for South American trade.',
    majorPorts: ['Santos', 'Rio de Janeiro', 'Paranaguá'],
    transitTime: '35-45 days',
    popularGoods: ['Electronics', 'Machinery', 'Textiles', 'Consumer Goods', 'Auto Parts'],
  },
  {
    slug: 'shipping-china-to-canada',
    name: 'Canada',
    code: 'CA',
    description: 'Efficient freight forwarding from China to Canada with fast transit times to major ports.',
    majorPorts: ['Vancouver', 'Toronto', 'Montreal', 'Halifax'],
    transitTime: '14-30 days',
    popularGoods: ['Consumer Goods', 'Machinery', 'Furniture', 'Electronics', 'Textiles'],
  },
  {
    slug: 'shipping-china-to-france',
    name: 'France',
    code: 'FR',
    description: 'Reliable shipping services from China to France for European distribution.',
    majorPorts: ['Le Havre', 'Marseille'],
    transitTime: '28-35 days',
    popularGoods: ['Textiles', 'Electronics', 'Furniture', 'Consumer Goods', 'Machinery'],
  },
  {
    slug: 'shipping-china-to-germany',
    name: 'Germany',
    code: 'DE',
    description: 'Professional freight forwarding from China to Germany, Europe\'s largest economy.',
    majorPorts: ['Hamburg', 'Bremerhaven', 'Frankfurt'],
    transitTime: '28-40 days',
    popularGoods: ['Machinery', 'Electronics', 'Textiles', 'Consumer Goods', 'Auto Parts'],
  },
  {
    slug: 'shipping-china-to-india',
    name: 'India',
    code: 'IN',
    description: 'Cost-effective shipping from China to India with extensive port coverage.',
    majorPorts: ['Mumbai', 'Chennai', 'Nhava Sheva', 'Kolkata'],
    transitTime: '12-20 days',
    popularGoods: ['Electronics', 'Machinery', 'Chemicals', 'Textiles', 'Consumer Goods'],
  },
  {
    slug: 'shipping-china-to-italy',
    name: 'Italy',
    code: 'IT',
    description: 'Efficient freight services from China to Italy for Mediterranean trade.',
    majorPorts: ['Genoa', 'La Spezia', 'Trieste'],
    transitTime: '25-32 days',
    popularGoods: ['Textiles', 'Machinery', 'Electronics', 'Furniture', 'Consumer Goods'],
  },
  {
    slug: 'shipping-china-to-japan',
    name: 'Japan',
    code: 'JP',
    description: 'Fast and reliable shipping from China to Japan with frequent departures.',
    majorPorts: ['Tokyo', 'Yokohama', 'Osaka', 'Kobe'],
    transitTime: '3-7 days',
    popularGoods: ['Electronics', 'Machinery', 'Consumer Goods', 'Textiles', 'Auto Parts'],
  },
  {
    slug: 'shipping-china-to-mexico',
    name: 'Mexico',
    code: 'MX',
    description: 'Comprehensive shipping solutions from China to Mexico for North American trade.',
    majorPorts: ['Manzanillo', 'Lázaro Cárdenas', 'Veracruz'],
    transitTime: '18-25 days',
    popularGoods: ['Electronics', 'Machinery', 'Auto Parts', 'Consumer Goods', 'Textiles'],
  },
  {
    slug: 'shipping-china-to-netherlands',
    name: 'Netherlands',
    code: 'NL',
    description: 'Professional freight forwarding from China to Netherlands via Rotterdam, Europe\'s largest port.',
    majorPorts: ['Rotterdam', 'Amsterdam'],
    transitTime: '28-32 days',
    popularGoods: ['Electronics', 'Machinery', 'Consumer Goods', 'Textiles', 'Food Products'],
  },
  {
    slug: 'shipping-china-to-new-zealand',
    name: 'New Zealand',
    code: 'NZ',
    description: 'Reliable shipping services from China to New Zealand with customs support.',
    majorPorts: ['Auckland', 'Tauranga', 'Wellington'],
    transitTime: '18-25 days',
    popularGoods: ['Consumer Goods', 'Electronics', 'Furniture', 'Machinery', 'Textiles'],
  },
  {
    slug: 'shipping-china-to-singapore',
    name: 'Singapore',
    code: 'SG',
    description: 'Fast freight forwarding from China to Singapore, Asia\'s shipping hub.',
    majorPorts: ['Port of Singapore'],
    transitTime: '5-10 days',
    popularGoods: ['Electronics', 'Consumer Goods', 'Machinery', 'Chemicals', 'Textiles'],
  },
  {
    slug: 'shipping-china-to-south-korea',
    name: 'South Korea',
    code: 'KR',
    description: 'Quick and efficient shipping from China to South Korea with frequent services.',
    majorPorts: ['Busan', 'Incheon', 'Seoul'],
    transitTime: '2-5 days',
    popularGoods: ['Electronics', 'Machinery', 'Consumer Goods', 'Textiles', 'Auto Parts'],
  },
  {
    slug: 'shipping-china-to-spain',
    name: 'Spain',
    code: 'ES',
    description: 'Professional freight services from China to Spain for Iberian markets.',
    majorPorts: ['Barcelona', 'Valencia', 'Algeciras'],
    transitTime: '28-35 days',
    popularGoods: ['Textiles', 'Electronics', 'Furniture', 'Consumer Goods', 'Machinery'],
  },
  {
    slug: 'shipping-china-to-uk',
    name: 'United Kingdom',
    code: 'GB',
    description: 'Comprehensive shipping from China to UK with expert customs clearance.',
    majorPorts: ['Felixstowe', 'Southampton', 'London Gateway'],
    transitTime: '28-35 days',
    popularGoods: ['Textiles', 'Electronics', 'Furniture', 'Consumer Goods', 'Machinery'],
  },
  {
    slug: 'shipping-china-to-united-kingdom',
    name: 'United Kingdom',
    code: 'GB',
    description: 'Comprehensive shipping from China to United Kingdom with expert customs clearance.',
    majorPorts: ['Felixstowe', 'Southampton', 'London Gateway'],
    transitTime: '28-35 days',
    popularGoods: ['Textiles', 'Electronics', 'Furniture', 'Consumer Goods', 'Machinery'],
  },
  {
    slug: 'shipping-china-to-united-states',
    name: 'United States',
    code: 'US',
    description: 'Full-service freight forwarding from China to USA with nationwide coverage.',
    majorPorts: ['Los Angeles', 'Long Beach', 'New York', 'Seattle', 'Savannah'],
    transitTime: '12-32 days',
    popularGoods: ['Electronics', 'Furniture', 'Textiles', 'Machinery', 'Auto Parts'],
  },
  {
    slug: 'shipping-china-to-usa',
    name: 'USA',
    code: 'US',
    description: 'Full-service freight forwarding from China to USA with nationwide coverage.',
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
    description: 'Ocean shipping from China to UK with reliable services to Felixstowe and Southampton.',
    majorPorts: ['Felixstowe', 'Southampton', 'London Gateway'],
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
];

export function getSeaFreightCountryBySlug(slug: string): SeaFreightCountry | undefined {
  return seaFreightCountries.find((c) => c.slug === slug);
}

export function getAllSeaFreightCountrySlugs(): string[] {
  return seaFreightCountries.map((c) => c.slug);
}
