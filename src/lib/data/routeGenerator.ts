import { Route, ContainerOption } from '@/lib/types';
import { routes as csvRoutes } from './routes';

// ============================================================================
// MEMOIZATION CACHE
// These caches ensure routes are only generated ONCE during the entire build,
// not once per page. This reduces build time from O(n²) to O(n).
// ============================================================================
let cachedSeaRoutes: Route[] | null = null;
let cachedAirRoutes: Route[] | null = null;
let cachedAllRoutes: Route[] | null = null;
let cachedFlatSlugs: Array<{ type: 'sea' | 'air'; slug: string }> | null = null;

// Route lookup maps for O(1) access instead of O(n) array filtering
let seaRoutesBySlug: Map<string, Route> | null = null;
let airRoutesBySlug: Map<string, Route> | null = null;
let seaRoutesByOrigin: Map<string, Route[]> | null = null;
let airRoutesByOrigin: Map<string, Route[]> | null = null;
let seaRoutesByDestination: Map<string, Route[]> | null = null;
let airRoutesByDestination: Map<string, Route[]> | null = null;

// Sea freight origins (8 cities)
const seaOrigins = [
  { city: 'Shanghai', port: 'Port of Shanghai (CNSHA)', code: 'CNSHA' },
  { city: 'Shenzhen', port: 'Port of Shenzhen (CNSZX)', code: 'CNSZX' },
  { city: 'Guangzhou', port: 'Port of Guangzhou (CNGZH)', code: 'CNGZH' },
  { city: 'Ningbo', port: 'Ningbo-Zhoushan Port (CNNGB)', code: 'CNNGB' },
  { city: 'Qingdao', port: 'Port of Qingdao (CNTAO)', code: 'CNTAO' },
  { city: 'Tianjin', port: 'Port of Tianjin (CNTSN)', code: 'CNTSN' },
  { city: 'Xiamen', port: 'Port of Xiamen (CNXMN)', code: 'CNXMN' },
  { city: 'Hong Kong', port: 'Port of Hong Kong (HKHKG)', code: 'HKHKG' },
];

// Air freight origins (6 cities)
const airOrigins = [
  { city: 'Shanghai', port: 'Shanghai Pudong Airport (PVG)', code: 'PVG' },
  { city: 'Shenzhen', port: "Shenzhen Bao'an Airport (SZX)", code: 'SZX' },
  { city: 'Guangzhou', port: 'Guangzhou Baiyun Airport (CAN)', code: 'CAN' },
  { city: 'Beijing', port: 'Beijing Capital Airport (PEK)', code: 'PEK' },
  { city: 'Qingdao', port: 'Qingdao Jiaodong Airport (TAO)', code: 'TAO' },
  { city: 'Xiamen', port: 'Xiamen Gaoqi Airport (XMN)', code: 'XMN' },
];

// All destinations with their info
const allDestinations: Record<string, { city: string; seaPort?: string; airPort?: string; country: string; countrySlug: string; seaTransit?: string; airTransit?: string }> = {
  // United States
  'los-angeles': { city: 'Los Angeles', seaPort: 'Port of Los Angeles (USLAX)', airPort: 'Los Angeles International Airport (LAX)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '15-18', airTransit: '2-3' },
  'long-beach': { city: 'Long Beach', seaPort: 'Port of Long Beach (USLGB)', airPort: 'Long Beach Airport (LGB)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '15-18', airTransit: '2-3' },
  'new-york': { city: 'New York', seaPort: 'Port of New York/New Jersey (USNYC)', airPort: 'JFK International Airport (JFK)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '22-28', airTransit: '3-4' },
  'oakland': { city: 'Oakland', seaPort: 'Port of Oakland (USOAK)', airPort: 'Oakland International Airport (OAK)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '14-17', airTransit: '2-3' },
  'seattle': { city: 'Seattle', seaPort: 'Port of Seattle (USSEA)', airPort: 'Seattle-Tacoma Airport (SEA)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '12-15', airTransit: '2-3' },
  'tacoma': { city: 'Tacoma', seaPort: 'Port of Tacoma (USTAC)', airPort: 'Seattle-Tacoma Airport (SEA)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '12-15', airTransit: '2-3' },
  'savannah': { city: 'Savannah', seaPort: 'Port of Savannah (USSAV)', airPort: 'Savannah/Hilton Head Airport (SAV)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '25-30', airTransit: '3-5' },
  'houston': { city: 'Houston', seaPort: 'Port of Houston (USHOU)', airPort: 'George Bush Airport (IAH)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '28-32', airTransit: '3-4' },
  'dallas': { city: 'Dallas', seaPort: 'Dallas Logistics Hub (via Houston)', airPort: 'Dallas/Fort Worth Airport (DFW)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '30-35', airTransit: '3-4' },
  'salt-lake-city': { city: 'Salt Lake City', seaPort: 'Salt Lake City Inland Port', airPort: 'Salt Lake City Airport (SLC)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '18-22', airTransit: '3-4' },
  'charleston': { city: 'Charleston', seaPort: 'Port of Charleston (USCHS)', airPort: 'Charleston Airport (CHS)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '28-32', airTransit: '3-5' },
  'norfolk': { city: 'Norfolk', seaPort: 'Port of Virginia (USNFK)', airPort: 'Norfolk Airport (ORF)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '26-30', airTransit: '3-5' },
  'jacksonville': { city: 'Jacksonville', seaPort: 'Port of Jacksonville (USJAX)', airPort: 'Jacksonville Airport (JAX)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '28-32', airTransit: '3-5' },
  'wilmington': { city: 'Wilmington', seaPort: 'Port of Wilmington (USILM)', airPort: 'Wilmington Airport (ILM)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '28-32', airTransit: '3-5' },
  'atlanta': { city: 'Atlanta', seaPort: 'Atlanta Logistics Hub (via Savannah)', airPort: 'Hartsfield-Jackson Airport (ATL)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '27-32', airTransit: '3-4' },
  'boston': { city: 'Boston', seaPort: 'Port of Boston (USBOS)', airPort: 'Logan International Airport (BOS)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '28-33', airTransit: '3-4' },
  'chicago': { city: 'Chicago', seaPort: 'Chicago Logistics Hub (via rail)', airPort: "O'Hare International Airport (ORD)", country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '20-25', airTransit: '3-4' },
  'denver': { city: 'Denver', seaPort: 'Denver Logistics Hub (via rail)', airPort: 'Denver International Airport (DEN)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '22-27', airTransit: '3-4' },
  'miami': { city: 'Miami', seaPort: 'Port of Miami (USMIA)', airPort: 'Miami International Airport (MIA)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '30-35', airTransit: '3-5' },
  'san-francisco': { city: 'San Francisco', seaPort: 'Port of San Francisco (USSFO)', airPort: 'San Francisco International Airport (SFO)', country: 'United States', countrySlug: 'china-to-united-states', seaTransit: '14-17', airTransit: '2-3' },
  // Canada
  'vancouver': { city: 'Vancouver', seaPort: 'Port of Vancouver (CAVAN)', airPort: 'Vancouver International Airport (YVR)', country: 'Canada', countrySlug: 'china-to-canada', seaTransit: '14-17', airTransit: '2-3' },
  'toronto': { city: 'Toronto', seaPort: 'Port of Toronto (via rail)', airPort: 'Toronto Pearson Airport (YYZ)', country: 'Canada', countrySlug: 'china-to-canada', seaTransit: '20-25', airTransit: '3-4' },
  'montreal': { city: 'Montreal', seaPort: 'Port of Montreal (CAMTR)', airPort: 'Montreal-Trudeau Airport (YUL)', country: 'Canada', countrySlug: 'china-to-canada', seaTransit: '25-30', airTransit: '3-4' },
  'halifax': { city: 'Halifax', seaPort: 'Port of Halifax (CAHAL)', airPort: 'Halifax Stanfield Airport (YHZ)', country: 'Canada', countrySlug: 'china-to-canada', seaTransit: '28-32', airTransit: '4-5' },
  'calgary': { city: 'Calgary', seaPort: 'Calgary Logistics Hub (via Vancouver)', airPort: 'Calgary International Airport (YYC)', country: 'Canada', countrySlug: 'china-to-canada', seaTransit: '18-22', airTransit: '2-3' },
  'prince-rupert': { city: 'Prince Rupert', seaPort: 'Port of Prince Rupert (CAPRR)', airPort: 'Prince Rupert Airport (YPR)', country: 'Canada', countrySlug: 'china-to-canada', seaTransit: '10-13', airTransit: '3-4' },
  'ottawa': { city: 'Ottawa', seaPort: 'Ottawa Logistics Hub (via Montreal)', airPort: 'Ottawa International Airport (YOW)', country: 'Canada', countrySlug: 'china-to-canada', seaTransit: '27-32', airTransit: '3-4' },
  'regina': { city: 'Regina', seaPort: 'Regina Logistics Hub (via Vancouver)', airPort: 'Regina International Airport (YQR)', country: 'Canada', countrySlug: 'china-to-canada', seaTransit: '20-25', airTransit: '3-4' },
  'winnipeg': { city: 'Winnipeg', seaPort: 'Winnipeg Logistics Hub (via Vancouver)', airPort: 'Winnipeg James Armstrong Richardson Airport (YWG)', country: 'Canada', countrySlug: 'china-to-canada', seaTransit: '20-25', airTransit: '3-4' },
  // United Kingdom
  'felixstowe': { city: 'Felixstowe', seaPort: 'Port of Felixstowe (GBFXT)', country: 'United Kingdom', countrySlug: 'china-to-united-kingdom', seaTransit: '28-32' },
  'southampton': { city: 'Southampton', seaPort: 'Port of Southampton (GBSOU)', country: 'United Kingdom', countrySlug: 'china-to-united-kingdom', seaTransit: '30-35' },
  'london-gateway': { city: 'London Gateway', seaPort: 'London Gateway (GBLGP)', country: 'United Kingdom', countrySlug: 'china-to-united-kingdom', seaTransit: '28-32' },
  'london': { city: 'London', seaPort: 'Port of London (GBLON)', airPort: 'London Heathrow Airport (LHR)', country: 'United Kingdom', countrySlug: 'china-to-united-kingdom', seaTransit: '28-32', airTransit: '3-4' },
  // Australia
  'sydney': { city: 'Sydney', seaPort: 'Port Botany (AUSYD)', airPort: 'Sydney Kingsford Smith Airport (SYD)', country: 'Australia', countrySlug: 'china-to-australia', seaTransit: '18-22', airTransit: '2-3' },
  'melbourne': { city: 'Melbourne', seaPort: 'Port of Melbourne (AUMEL)', airPort: 'Melbourne Airport (MEL)', country: 'Australia', countrySlug: 'china-to-australia', seaTransit: '18-22', airTransit: '2-3' },
  'brisbane': { city: 'Brisbane', seaPort: 'Port of Brisbane (AUBNE)', airPort: 'Brisbane Airport (BNE)', country: 'Australia', countrySlug: 'china-to-australia', seaTransit: '16-20', airTransit: '2-3' },
  'fremantle': { city: 'Fremantle', seaPort: 'Port of Fremantle (AUFRE)', airPort: 'Perth Airport (PER)', country: 'Australia', countrySlug: 'china-to-australia', seaTransit: '14-18', airTransit: '2-3' },
  'canberra': { city: 'Canberra', airPort: 'Canberra Airport (CBR)', country: 'Australia', countrySlug: 'china-to-australia', airTransit: '3-4' },
  // Germany
  'hamburg': { city: 'Hamburg', seaPort: 'Port of Hamburg (DEHAM)', airPort: 'Hamburg Airport (HAM)', country: 'Germany', countrySlug: 'china-to-germany', seaTransit: '30-35', airTransit: '3-5' },
  'bremerhaven': { city: 'Bremerhaven', seaPort: 'Port of Bremerhaven (DEBRV)', country: 'Germany', countrySlug: 'china-to-germany', seaTransit: '30-35' },
  'frankfurt': { city: 'Frankfurt', seaPort: 'Frankfurt Logistics Hub (via Hamburg)', airPort: 'Frankfurt Airport (FRA)', country: 'Germany', countrySlug: 'china-to-germany', seaTransit: '32-38', airTransit: '3-4' },
  'munich': { city: 'Munich', seaPort: 'Munich Logistics Hub (via Hamburg)', airPort: 'Munich Airport (MUC)', country: 'Germany', countrySlug: 'china-to-germany', seaTransit: '33-40', airTransit: '3-5' },
  // Netherlands
  'rotterdam': { city: 'Rotterdam', seaPort: 'Port of Rotterdam (NLRTM)', country: 'Netherlands', countrySlug: 'china-to-netherlands', seaTransit: '28-32' },
};

// Define exact sea freight routes from existing site (259 total)
const seaRouteMatrix: Record<string, string[]> = {
  'shanghai': ['los-angeles', 'long-beach', 'new-york', 'oakland', 'seattle', 'tacoma', 'savannah', 'houston', 'dallas', 'salt-lake-city', 'charleston', 'norfolk', 'jacksonville', 'wilmington', 'atlanta', 'boston', 'chicago', 'denver', 'miami', 'san-francisco', 'vancouver', 'toronto', 'montreal', 'halifax', 'calgary', 'prince-rupert', 'ottawa', 'regina', 'winnipeg', 'felixstowe', 'southampton', 'london-gateway', 'london', 'sydney', 'melbourne', 'brisbane', 'fremantle', 'hamburg', 'bremerhaven', 'rotterdam'],
  'shenzhen': ['los-angeles', 'long-beach', 'new-york', 'oakland', 'seattle', 'tacoma', 'savannah', 'houston', 'dallas', 'salt-lake-city', 'charleston', 'norfolk', 'jacksonville', 'atlanta', 'boston', 'san-francisco', 'vancouver', 'toronto', 'montreal', 'halifax', 'calgary', 'prince-rupert', 'ottawa', 'regina', 'winnipeg', 'felixstowe', 'southampton', 'london-gateway', 'sydney', 'melbourne', 'brisbane', 'fremantle', 'hamburg', 'bremerhaven', 'frankfurt', 'munich', 'rotterdam'],
  'guangzhou': ['los-angeles', 'long-beach', 'new-york', 'oakland', 'seattle', 'tacoma', 'savannah', 'houston', 'dallas', 'salt-lake-city', 'charleston', 'norfolk', 'jacksonville', 'atlanta', 'boston', 'chicago', 'denver', 'miami', 'san-francisco', 'vancouver', 'toronto', 'montreal', 'halifax', 'calgary', 'prince-rupert', 'ottawa', 'regina', 'winnipeg', 'felixstowe', 'southampton', 'london-gateway', 'london', 'sydney', 'melbourne', 'brisbane', 'fremantle', 'hamburg', 'bremerhaven', 'munich', 'rotterdam'],
  'ningbo': ['los-angeles', 'long-beach', 'new-york', 'oakland', 'seattle', 'tacoma', 'savannah', 'houston', 'dallas', 'salt-lake-city', 'charleston', 'norfolk', 'jacksonville', 'chicago', 'miami', 'san-francisco', 'vancouver', 'toronto', 'montreal', 'halifax', 'calgary', 'prince-rupert', 'ottawa', 'regina', 'winnipeg', 'felixstowe', 'southampton', 'london-gateway', 'london', 'sydney', 'melbourne', 'brisbane', 'fremantle', 'hamburg', 'bremerhaven', 'frankfurt', 'munich', 'rotterdam'],
  'qingdao': ['los-angeles', 'long-beach', 'new-york', 'oakland', 'seattle', 'tacoma', 'savannah', 'houston', 'dallas', 'salt-lake-city', 'charleston', 'norfolk', 'jacksonville', 'atlanta', 'boston', 'denver', 'san-francisco', 'vancouver', 'toronto', 'montreal', 'halifax', 'calgary', 'prince-rupert', 'ottawa', 'regina', 'winnipeg', 'felixstowe', 'southampton', 'london-gateway', 'london', 'sydney', 'melbourne', 'brisbane', 'fremantle', 'hamburg', 'bremerhaven', 'frankfurt', 'munich', 'rotterdam'],
  'tianjin': ['los-angeles', 'long-beach', 'new-york', 'oakland', 'seattle', 'tacoma', 'savannah', 'houston', 'dallas', 'salt-lake-city', 'charleston', 'norfolk', 'jacksonville', 'atlanta', 'boston', 'chicago', 'denver', 'miami', 'san-francisco', 'vancouver', 'toronto', 'montreal', 'halifax', 'calgary', 'prince-rupert', 'ottawa', 'regina', 'winnipeg', 'felixstowe', 'southampton', 'london-gateway', 'london', 'sydney', 'melbourne', 'brisbane', 'fremantle', 'hamburg', 'bremerhaven', 'frankfurt', 'munich', 'rotterdam'],
  'xiamen': ['los-angeles', 'long-beach', 'new-york', 'oakland', 'seattle', 'tacoma', 'savannah', 'houston', 'dallas', 'salt-lake-city', 'charleston', 'norfolk', 'jacksonville', 'atlanta', 'boston', 'chicago', 'denver', 'san-francisco', 'vancouver', 'toronto', 'montreal', 'halifax', 'calgary', 'prince-rupert', 'ottawa', 'regina', 'winnipeg', 'felixstowe', 'southampton', 'london-gateway', 'london', 'sydney', 'melbourne', 'brisbane', 'fremantle', 'hamburg', 'bremerhaven', 'munich', 'rotterdam'],
  'hong-kong': ['los-angeles', 'long-beach', 'new-york', 'oakland', 'seattle', 'tacoma', 'savannah', 'houston', 'dallas', 'salt-lake-city', 'charleston', 'norfolk', 'jacksonville', 'vancouver', 'toronto', 'montreal', 'halifax', 'calgary', 'prince-rupert', 'regina', 'winnipeg', 'felixstowe', 'southampton', 'london-gateway', 'sydney', 'melbourne', 'brisbane', 'fremantle', 'hamburg', 'bremerhaven', 'rotterdam'],
};

// Define exact air freight routes from existing site (161 total)
const airRouteMatrix: Record<string, string[]> = {
  'shanghai': ['los-angeles', 'long-beach', 'new-york', 'chicago', 'san-francisco', 'atlanta', 'dallas', 'seattle', 'miami', 'houston', 'boston', 'denver', 'oakland', 'tacoma', 'savannah', 'vancouver', 'toronto', 'montreal', 'calgary', 'ottawa', 'halifax', 'prince-rupert', 'london', 'sydney', 'melbourne', 'brisbane', 'canberra', 'fremantle', 'frankfurt', 'munich', 'hamburg'],
  'shenzhen': ['los-angeles', 'long-beach', 'new-york', 'chicago', 'san-francisco', 'atlanta', 'dallas', 'seattle', 'miami', 'houston', 'boston', 'denver', 'oakland', 'tacoma', 'savannah', 'vancouver', 'toronto', 'montreal', 'calgary', 'ottawa', 'halifax', 'prince-rupert', 'london', 'sydney', 'melbourne', 'brisbane', 'canberra', 'fremantle', 'frankfurt', 'munich', 'hamburg'],
  'guangzhou': ['los-angeles', 'long-beach', 'new-york', 'chicago', 'san-francisco', 'atlanta', 'dallas', 'seattle', 'miami', 'oakland', 'tacoma', 'savannah', 'vancouver', 'toronto', 'montreal', 'calgary', 'ottawa', 'halifax', 'london', 'sydney', 'melbourne', 'brisbane', 'canberra', 'fremantle', 'frankfurt', 'munich', 'hamburg'],
  'beijing': ['los-angeles', 'long-beach', 'new-york', 'chicago', 'san-francisco', 'atlanta', 'dallas', 'seattle', 'miami', 'houston', 'boston', 'denver', 'oakland', 'tacoma', 'savannah', 'vancouver', 'toronto', 'montreal', 'calgary', 'ottawa', 'halifax', 'prince-rupert', 'london', 'sydney', 'melbourne', 'brisbane', 'canberra', 'fremantle', 'frankfurt', 'munich', 'hamburg'],
  'qingdao': ['los-angeles', 'new-york', 'chicago', 'san-francisco', 'atlanta', 'dallas', 'miami', 'boston', 'denver', 'vancouver', 'toronto', 'montreal', 'calgary', 'ottawa', 'london', 'sydney', 'melbourne', 'brisbane', 'canberra', 'frankfurt', 'munich'],
  'xiamen': ['los-angeles', 'new-york', 'chicago', 'san-francisco', 'atlanta', 'dallas', 'miami', 'boston', 'denver', 'vancouver', 'toronto', 'montreal', 'calgary', 'ottawa', 'london', 'sydney', 'melbourne', 'brisbane', 'canberra', 'frankfurt', 'munich'],
};

// Popular goods by destination country
const popularGoodsByCountry: Record<string, string[]> = {
  'united-states': ['Electronics', 'Furniture', 'Textiles', 'Machinery', 'Auto Parts'],
  'canada': ['Consumer Goods', 'Machinery', 'Furniture', 'Electronics', 'Textiles'],
  'united-kingdom': ['Textiles', 'Electronics', 'Furniture', 'Consumer Goods', 'Machinery'],
  'australia': ['Consumer Electronics', 'Furniture', 'Machinery', 'Textiles', 'Home Goods'],
  'germany': ['Machinery', 'Electronics', 'Textiles', 'Consumer Goods', 'Automotive Parts'],
  'netherlands': ['Electronics', 'Machinery', 'Consumer Goods', 'Textiles', 'Food Products'],
};

// Standard container options
const standardContainerOptions: ContainerOption[] = [
  {
    type: '20ft Standard',
    dimensions: '5.9m x 2.35m x 2.39m',
    maxWeight: '28,200 kg',
    description: 'Standard container for general cargo, ideal for heavy goods.',
  },
  {
    type: '40ft Standard',
    dimensions: '12.03m x 2.35m x 2.39m',
    maxWeight: '26,680 kg',
    description: 'Most popular container size, double the capacity of 20ft.',
  },
  {
    type: '40ft High Cube',
    dimensions: '12.03m x 2.35m x 2.69m',
    maxWeight: '26,460 kg',
    description: 'Extra height for voluminous cargo, 30cm taller than standard.',
  },
];

// Standard pricing structures
const seaPricingStructure = [
  'Base ocean freight per container',
  'Origin terminal handling charges',
  'Destination terminal handling',
  'Fuel surcharge (BAF)',
  'Customs clearance fees',
];

const airPricingStructure = [
  'Chargeable weight rate',
  'Fuel surcharge',
  'Security handling fee',
  'Terminal handling charges',
  'Customs clearance',
];

// Helper to slugify city names
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Get origin info by slug
function getSeaOriginBySlug(slug: string) {
  return seaOrigins.find(o => slugify(o.city) === slug);
}

function getAirOriginBySlug(slug: string) {
  return airOrigins.find(o => slugify(o.city) === slug);
}

// Try to find matching CSV route for enhanced data
function findCsvRoute(originSlug: string, destSlug: string, serviceType: 'sea' | 'air'): Route | undefined {
  const slug = `${originSlug}-to-${destSlug}-${serviceType}`;
  return csvRoutes.find(r => r.slug === slug || r.id === slug);
}

// Generate sea freight routes (259 routes matching existing site)
// MEMOIZED: Routes are only generated once and cached
export function generateSeaRoutes(): Route[] {
  if (cachedSeaRoutes) return cachedSeaRoutes;

  const routes: Route[] = [];

  for (const [originSlug, destSlugs] of Object.entries(seaRouteMatrix)) {
    const origin = getSeaOriginBySlug(originSlug);
    if (!origin) continue;

    for (const destSlug of destSlugs) {
      const dest = allDestinations[destSlug];
      if (!dest || !dest.seaPort) continue;

      const slug = `${originSlug}-to-${destSlug}`;
      const id = `${slug}-sea`;
      const csvRoute = findCsvRoute(originSlug, destSlug, 'sea');
      const countryKey = dest.countrySlug.replace('china-to-', '');

      const route: Route = {
        id,
        slug,
        originCity: origin.city,
        originPort: origin.port,
        originCountry: 'China',
        destinationCity: dest.city,
        destinationPort: dest.seaPort,
        destinationCountry: dest.country,
        destinationSlug: dest.countrySlug,
        serviceType: 'sea',
        transitTime: `${dest.seaTransit} days`,
        frequency: 'Weekly departures',
        containerOptions: standardContainerOptions,
        pricingStructure: seaPricingStructure,
        popularGoods: popularGoodsByCountry[countryKey] || popularGoodsByCountry['united-states'],
        isPopular: ['los-angeles', 'new-york', 'vancouver', 'melbourne', 'felixstowe', 'hamburg'].includes(destSlug),
        // Include enhanced data from CSV if available
        ...(csvRoute?.faqs && { faqs: csvRoute.faqs }),
        ...(csvRoute?.containerPricing && { containerPricing: csvRoute.containerPricing }),
        ...(csvRoute?.serviceTiers && { serviceTiers: csvRoute.serviceTiers }),
        ...(csvRoute?.shippingProcess && { shippingProcess: csvRoute.shippingProcess }),
        ...(csvRoute?.requiredDocuments && { requiredDocuments: csvRoute.requiredDocuments }),
        ...(csvRoute?.corridorInfo && { corridorInfo: csvRoute.corridorInfo }),
        ...(csvRoute?.routeStats && { routeStats: csvRoute.routeStats }),
      };

      routes.push(route);
    }
  }

  cachedSeaRoutes = routes;
  return routes;
}

// Generate air freight routes (161 routes matching existing site)
// MEMOIZED: Routes are only generated once and cached
export function generateAirRoutes(): Route[] {
  if (cachedAirRoutes) return cachedAirRoutes;

  const routes: Route[] = [];

  for (const [originSlug, destSlugs] of Object.entries(airRouteMatrix)) {
    const origin = getAirOriginBySlug(originSlug);
    if (!origin) continue;

    for (const destSlug of destSlugs) {
      const dest = allDestinations[destSlug];
      if (!dest || !dest.airPort) continue;

      const slug = `${originSlug}-to-${destSlug}`;
      const id = `${slug}-air`;
      const csvRoute = findCsvRoute(originSlug, destSlug, 'air');

      const route: Route = {
        id,
        slug,
        originCity: origin.city,
        originPort: origin.port,
        originCountry: 'China',
        destinationCity: dest.city,
        destinationPort: dest.airPort,
        destinationCountry: dest.country,
        destinationSlug: dest.countrySlug,
        serviceType: 'air',
        transitTime: `${dest.airTransit} days`,
        frequency: 'Daily flights',
        airCargoOptions: [
          { type: 'General Cargo', maxWeight: '1000+ kg', description: 'Standard air freight for general goods' },
          { type: 'Express', maxWeight: '500 kg', description: 'Priority handling with faster transit' },
        ],
        pricingStructure: airPricingStructure,
        popularGoods: ['Electronics', 'Fashion', 'E-commerce', 'Medical Devices', 'Urgent Parts'],
        isPopular: ['los-angeles', 'new-york', 'london', 'sydney', 'toronto'].includes(destSlug),
        // Include enhanced data from CSV if available
        ...(csvRoute?.faqs && { faqs: csvRoute.faqs }),
      };

      routes.push(route);
    }
  }

  cachedAirRoutes = routes;
  return routes;
}

// Generate all routes - MEMOIZED
export function generateAllRoutes(): Route[] {
  if (cachedAllRoutes) return cachedAllRoutes;
  cachedAllRoutes = [...generateSeaRoutes(), ...generateAirRoutes()];
  return cachedAllRoutes;
}

// Build lookup maps for O(1) access - called once, then cached
function buildLookupMaps(): void {
  if (seaRoutesBySlug) return; // Already built

  const seaRoutes = generateSeaRoutes();
  const airRoutes = generateAirRoutes();

  // Build slug lookup maps
  seaRoutesBySlug = new Map(seaRoutes.map(r => [r.slug, r]));
  airRoutesBySlug = new Map(airRoutes.map(r => [r.slug, r]));

  // Build origin lookup maps
  seaRoutesByOrigin = new Map<string, Route[]>();
  airRoutesByOrigin = new Map<string, Route[]>();

  for (const route of seaRoutes) {
    const key = route.originCity.toLowerCase();
    const existing = seaRoutesByOrigin.get(key) || [];
    existing.push(route);
    seaRoutesByOrigin.set(key, existing);
  }

  for (const route of airRoutes) {
    const key = route.originCity.toLowerCase();
    const existing = airRoutesByOrigin.get(key) || [];
    existing.push(route);
    airRoutesByOrigin.set(key, existing);
  }

  // Build destination lookup maps
  seaRoutesByDestination = new Map<string, Route[]>();
  airRoutesByDestination = new Map<string, Route[]>();

  for (const route of seaRoutes) {
    const key = route.destinationCity.toLowerCase();
    const existing = seaRoutesByDestination.get(key) || [];
    existing.push(route);
    seaRoutesByDestination.set(key, existing);
  }

  for (const route of airRoutes) {
    const key = route.destinationCity.toLowerCase();
    const existing = airRoutesByDestination.get(key) || [];
    existing.push(route);
    airRoutesByDestination.set(key, existing);
  }
}

// Get route by flat slug (e.g., "shanghai-to-new-york") - O(1) lookup
export function getRouteByFlatSlug(slug: string, serviceType: 'sea' | 'air'): Route | undefined {
  buildLookupMaps();
  return serviceType === 'sea'
    ? seaRoutesBySlug!.get(slug)
    : airRoutesBySlug!.get(slug);
}

// Get all route slugs for static generation - MEMOIZED
export function getAllFlatRouteSlugs(): Array<{ type: 'sea' | 'air'; slug: string }> {
  if (cachedFlatSlugs) return cachedFlatSlugs;
  const allRoutes = generateAllRoutes();
  cachedFlatSlugs = allRoutes.map((r) => ({ type: r.serviceType, slug: r.slug }));
  return cachedFlatSlugs;
}

// Get routes by destination country
export function getRoutesByCountry(countrySlug: string): Route[] {
  const allRoutes = generateAllRoutes();
  return allRoutes.filter((r) => r.destinationSlug === countrySlug);
}

// Get sea routes only
export function getAllSeaRoutes(): Route[] {
  return generateSeaRoutes();
}

// Get air routes only
export function getAllAirRoutes(): Route[] {
  return generateAirRoutes();
}

// Get routes by origin city - O(1) lookup
export function getRoutesByOrigin(originCity: string, serviceType: 'sea' | 'air'): Route[] {
  buildLookupMaps();
  const key = originCity.toLowerCase();
  return serviceType === 'sea'
    ? seaRoutesByOrigin!.get(key) || []
    : airRoutesByOrigin!.get(key) || [];
}

// Get routes by destination city - O(1) lookup
export function getRoutesByDestination(destinationCity: string, serviceType: 'sea' | 'air'): Route[] {
  buildLookupMaps();
  const key = destinationCity.toLowerCase();
  return serviceType === 'sea'
    ? seaRoutesByDestination!.get(key) || []
    : airRoutesByDestination!.get(key) || [];
}
