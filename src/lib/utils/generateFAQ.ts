import type { Route } from '@/lib/types';
import { getRoutePricing, formatPrice } from '@/lib/data/pricing';

export interface FAQItem {
  question: string;
  answer: string;
}

// Get origin country based on city
function getOriginCountry(city: string): string {
  const hongKongCities = ['Hong Kong'];
  if (hongKongCities.includes(city)) return 'Hong Kong';
  return 'China';
}

// Get province/region for Chinese cities
function getOriginRegion(city: string): string {
  const regions: Record<string, string> = {
    'Shanghai': 'Shanghai',
    'Shenzhen': 'Guangdong',
    'Guangzhou': 'Guangdong',
    'Ningbo': 'Zhejiang',
    'Qingdao': 'Shandong',
    'Tianjin': 'Tianjin',
    'Xiamen': 'Fujian',
    'Hong Kong': 'Hong Kong',
    'Beijing': 'Beijing',
  };
  return regions[city] || city;
}

// Generate sea freight FAQs for a route
export function generateSeaFreightFAQs(route: Route): FAQItem[] {
  const { originCity, destinationCity, destinationCountry, transitTime } = route;
  const originCountry = getOriginCountry(originCity);
  const originRegion = getOriginRegion(originCity);
  const pricing = getRoutePricing(originCity, destinationCity);

  // Extract numeric transit time for answers
  const transitDays = transitTime.replace(' days', '');

  // Get pricing info if available
  const hasPricing = pricing && pricing.rates.length > 0;
  const lowestRate = hasPricing ? Math.min(...pricing.rates.map(r => r.price40GP)) : null;
  const highestRate = hasPricing ? Math.max(...pricing.rates.map(r => r.price40GP)) : null;

  const faqs: FAQItem[] = [
    {
      question: `How long does sea freight take from ${originCity} to ${destinationCity}?`,
      answer: `Sea freight from ${originCity} to ${destinationCity} typically takes ${transitDays} days for port-to-port transit. Actual delivery time may vary by 2-5 days depending on vessel schedules, customs clearance, and final delivery arrangements.`
    },
    {
      question: `What is the estimated cost of shipping a container from ${originCity} to ${destinationCity}?`,
      answer: hasPricing
        ? `The estimated cost of shipping a 40ft container from ${originCity} to ${destinationCity} ${lowestRate === highestRate ? `is about ${formatPrice(lowestRate!)}` : `ranges from ${formatPrice(lowestRate!)} to ${formatPrice(highestRate!)} depending on the carrier`}. LCL rates typically start around $45-85 per CBM. Contact us for current rates and a customized quote.`
        : `The cost of shipping a container from ${originCity} to ${destinationCity} varies based on container size, carrier, and current market conditions. LCL rates start around $45-85 per CBM. Request a quote for accurate pricing.`
    },
    {
      question: `Should I choose FCL or LCL for my ${originCity} to ${destinationCity} shipment?`,
      answer: `Choosing between FCL and LCL for your ${originCity} to ${destinationCity} shipment depends on cargo volume. FCL (Full Container Load) is more cost-effective for shipments over 15 CBM, while LCL (Less than Container Load) is better for smaller volumes under 10 CBM. FCL also offers faster transit and lower risk of damage.`
    },
    {
      question: `What documents do I need to ship from ${originCountry} to ${destinationCountry}?`,
      answer: `Documents required to ship from ${originCountry} to ${destinationCountry} include: Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, and customs declaration forms. ${destinationCountry === 'United States' ? 'US imports also require an ISF (Importer Security Filing) submitted 24 hours before loading.' : destinationCountry === 'Canada' ? 'Canadian imports require a Canada Customs Invoice and may need import permits for certain goods.' : 'Additional certificates may be required depending on your product type.'}`
    },
    {
      question: `What factors can cause delays on the ${originCity} to ${destinationCity} route?`,
      answer: `Factors that can cause delays on the ${originCity} to ${destinationCity} route include port congestion, adverse weather conditions, customs inspections, incomplete documentation, and peak season volume. ${destinationCountry === 'United States' ? 'US West Coast ports occasionally experience congestion during peak shipping seasons.' : ''} Planning ahead and ensuring accurate documentation helps minimize delays.`
    },
    {
      question: `Which port in ${originRegion} should I choose for the fastest service to ${destinationCity}?`,
      answer: `For the fastest sea freight service to ${destinationCity}, ${originCity} is an excellent choice with ${transitDays} days transit time. ${originCity === 'Shanghai' || originCity === 'Ningbo' ? 'Shanghai and Ningbo ports offer frequent sailings and excellent connectivity.' : originCity === 'Shenzhen' || originCity === 'Guangzhou' ? 'South China ports like Shenzhen and Guangzhou provide competitive transit times with multiple weekly departures.' : 'This port offers regular services with reliable transit times.'}`
    },
    {
      question: `Are there direct sea freight services from ${originCity} to ${destinationCity}?`,
      answer: `Yes, there are direct sea freight services from ${originCity} to ${destinationCity} offered by major carriers including COSCO, MSC, Maersk, and Evergreen. Direct services provide the fastest transit times of ${transitDays} days. Transshipment options via hub ports may also be available at competitive rates.`
    },
    {
      question: `How can I calculate import duty from ${originCity}, ${originRegion} to ${destinationCity}?`,
      answer: `Import duty from ${originCity} to ${destinationCity} is calculated based on the HS code of your goods, the declared value (CIF), and ${destinationCountry}'s tariff rates. ${destinationCountry === 'United States' ? 'US import duties depend on the product classification and on any extra tariffs that apply to goods from China. Use the USITC tariff database or consult a customs broker for the current rate.' : destinationCountry === 'Canada' ? 'Canadian duties range from 0-20% based on the product. The CBSA tariff finder can help estimate costs.' : `${destinationCountry} applies duties based on product classification. A customs broker can provide accurate duty estimates.`}`
    },
    {
      question: `Do I need insurance to ship from ${originCity}, ${originRegion} to ${destinationCity}?`,
      answer: `Insurance for shipping from ${originCity} to ${destinationCity} is highly recommended though not legally required. Marine cargo insurance typically costs 0.3-0.5% of cargo value and covers loss or damage during transit. Given the ${transitDays}-day journey, insurance provides valuable protection against unforeseen events.`
    },
    {
      question: `What factors affect the cost of shipping from ${originCity} to ${destinationCity}?`,
      answer: `The cost of shipping from ${originCity} to ${destinationCity} is affected by container type and size, cargo weight and volume, fuel surcharges, seasonal demand, carrier selection, and additional services like customs clearance. Peak seasons (August-October) typically see higher rates due to increased demand.`
    },
    {
      question: `What is the best way to track my shipment from ${originCity} to ${destinationCity}?`,
      answer: `The best way to track your shipment from ${originCity} to ${destinationCity} is through our online tracking portal using your Bill of Lading number. You'll receive real-time updates on vessel location, estimated arrival, and customs status. Our team also provides proactive notifications for any schedule changes.`
    }
  ];

  return faqs;
}

// Generate air freight FAQs for a route
export function generateAirFreightFAQs(route: Route): FAQItem[] {
  // Rewritten 15 Nov 2026: no typed transit days, no unsourced carrier, insurance or tracking claims.
  // The one price guide stays (owner's option B, 14 Nov 2026) until real air rates arrive.
  const { originCity, destinationCity, destinationCountry } = route;
  const originCountry = getOriginCountry(originCity);

  const faqs: FAQItem[] = [
    {
      question: `How long does air freight take from ${originCity} to ${destinationCity}?`,
      answer: `We quote the transit time for each shipment. It depends on the airline and flight you book, whether the cargo flies direct or changes planes at a hub, and how quickly it clears customs in ${destinationCountry}. Send us your dates and we will give you the options.`
    },
    {
      question: `What is the estimated cost of air freight from ${originCity} to ${destinationCity}?`,
      answer: `As a rough guide until we publish air rates: express about $8-12 per kg, standard about $4.50-7 per kg and economy about $3-5 per kg. Your price depends on the chargeable weight, the season and the airline, so ask us for a quote.`
    },
    {
      question: `How is the air freight price worked out from ${originCity} to ${destinationCity}?`,
      answer: `Airlines charge on the higher of the actual weight and the volume weight. Volume weight is length × width × height in centimetres divided by 6,000, the IATA standard (Maersk explains it on its air cargo page). Light, bulky goods are charged on their size.`
    },
    {
      question: `What documents do I need for air freight from ${originCountry} to ${destinationCountry}?`,
      answer: `Every air shipment travels on an air waybill, with a commercial invoice and a packing list. The import rules and taxes for ${destinationCountry} are in our China to ${destinationCountry} guide, with links to the official pages.`
    },
    {
      question: `Should I send this shipment from ${originCity} to ${destinationCity} by air or by sea?`,
      answer: `Air suits goods that are urgent, valuable or light for their size. Sea suits large or heavy loads where time matters less. We can quote both for the same goods so you can compare.`
    },
  ];

  return faqs;
}
