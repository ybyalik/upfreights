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
        ? `The estimated cost of shipping a 40ft container from ${originCity} to ${destinationCity} ranges from ${formatPrice(lowestRate!)} to ${formatPrice(highestRate!)} depending on the carrier and service level. LCL rates typically start around $45-85 per CBM. Contact us for current rates and a customized quote.`
        : `The cost of shipping a container from ${originCity} to ${destinationCity} varies based on container size, carrier, and current market conditions. FCL rates typically range from $2,800-$4,500 for a 40ft container, while LCL rates start around $45-85 per CBM. Request a quote for accurate pricing.`
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
      answer: `Import duty from ${originCity} to ${destinationCity} is calculated based on the HS code of your goods, the declared value (CIF), and ${destinationCountry}'s tariff rates. ${destinationCountry === 'United States' ? 'US import duties vary from 0-25% depending on product classification. Use the USITC database or consult a customs broker for accurate duty calculations.' : destinationCountry === 'Canada' ? 'Canadian duties range from 0-20% based on the product. The CBSA tariff finder can help estimate costs.' : `${destinationCountry} applies duties based on product classification. A customs broker can provide accurate duty estimates.`}`
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
  const { originCity, destinationCity, destinationCountry, transitTime } = route;
  const originCountry = getOriginCountry(originCity);
  const originRegion = getOriginRegion(originCity);

  // Extract numeric transit time for answers
  const transitDays = transitTime.replace(' days', '');

  const faqs: FAQItem[] = [
    {
      question: `How long does air freight take from ${originCity} to ${destinationCity}?`,
      answer: `Air freight from ${originCity} to ${destinationCity} typically takes ${transitDays} days for airport-to-airport transit. Express services can deliver in 1-2 days, while economy options may take 5-7 days. Add 1-2 days for customs clearance and final delivery.`
    },
    {
      question: `What is the estimated cost of air freight from ${originCity} to ${destinationCity}?`,
      answer: `The estimated cost of air freight from ${originCity} to ${destinationCity} ranges from $3-12 per kg depending on service level. Express service costs $8-12/kg with 1-2 day delivery, standard service is $4.50-7/kg with 3-5 days, and economy service runs $3-5/kg with 5-7 days transit.`
    },
    {
      question: `Should I choose air freight or sea freight for shipping from ${originCity} to ${destinationCity}?`,
      answer: `Choosing between air and sea freight from ${originCity} to ${destinationCity} depends on your priorities. Air freight (${transitDays} days) is ideal for urgent, high-value, or time-sensitive goods. Sea freight (15-35 days) is more economical for large shipments where speed is less critical. Air is best for cargo under 500kg.`
    },
    {
      question: `What documents do I need for air freight from ${originCountry} to ${destinationCountry}?`,
      answer: `Documents required for air freight from ${originCountry} to ${destinationCountry} include: Air Waybill (AWB), Commercial Invoice, Packing List, and Export Declaration. ${destinationCountry === 'United States' ? 'US-bound shipments require advance cargo information filing.' : ''} Dangerous goods require MSDS and special documentation.`
    },
    {
      question: `What items cannot be shipped by air freight from ${originCity}?`,
      answer: `Items that cannot be shipped by air freight from ${originCity} include explosives, flammable gases and liquids, toxic substances, radioactive materials, and certain lithium batteries. Restricted items like perfumes, aerosols, and some electronics require special handling and documentation. Contact us to verify if your goods qualify.`
    },
    {
      question: `Which airport in ${originRegion} offers the best air freight services to ${destinationCity}?`,
      answer: `${originCity}'s airport offers excellent air freight connectivity to ${destinationCity} with ${transitDays} days transit time. ${originCity === 'Shanghai' ? 'Shanghai Pudong (PVG) is China\'s largest air cargo hub with extensive carrier options.' : originCity === 'Guangzhou' ? 'Guangzhou Baiyun (CAN) provides strong service for South China cargo.' : originCity === 'Shenzhen' ? 'Shenzhen Bao\'an (SZX) offers competitive rates and good connectivity.' : 'This airport provides reliable service with multiple weekly flights.'}`
    },
    {
      question: `Are there direct flights for cargo from ${originCity} to ${destinationCity}?`,
      answer: `Yes, there are direct cargo flights from ${originCity} to ${destinationCity} operated by carriers including Cathay Pacific, Singapore Airlines, EVA Air, and China Airlines. Direct flights offer the fastest transit at ${transitDays} days. Connecting flights via hub airports may be available at lower rates.`
    },
    {
      question: `How is air freight calculated from ${originCity} to ${destinationCity}?`,
      answer: `Air freight from ${originCity} to ${destinationCity} is calculated using either actual weight or volumetric weight (L x W x H cm / 6000), whichever is greater. This is called chargeable weight. Rates are then applied per kg based on your chosen service level. Fuel surcharges and security fees may also apply.`
    },
    {
      question: `Do I need insurance for air freight from ${originCity} to ${destinationCity}?`,
      answer: `Insurance for air freight from ${originCity} to ${destinationCity} is recommended for valuable cargo. While airlines provide limited liability coverage, comprehensive cargo insurance (typically 0.5-1% of value) protects against loss, damage, or delays during the ${transitDays}-day transit.`
    },
    {
      question: `What factors affect air freight costs from ${originCity} to ${destinationCity}?`,
      answer: `Air freight costs from ${originCity} to ${destinationCity} are affected by cargo weight and dimensions, service level (express vs economy), fuel surcharges, peak season demand, and special handling requirements. Rates are typically higher during Q4 holiday season and Chinese New Year.`
    },
    {
      question: `How can I track my air freight shipment from ${originCity} to ${destinationCity}?`,
      answer: `The best way to track your air freight from ${originCity} to ${destinationCity} is using your Air Waybill (AWB) number on our tracking portal or the carrier's website. You'll receive real-time updates on flight status, customs clearance, and delivery. SMS and email notifications keep you informed at each milestone.`
    }
  ];

  return faqs;
}
