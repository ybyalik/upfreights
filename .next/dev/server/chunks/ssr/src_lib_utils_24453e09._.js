module.exports = [
"[project]/src/lib/utils/generateFAQ.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateAirFreightFAQs",
    ()=>generateAirFreightFAQs,
    "generateSeaFreightFAQs",
    ()=>generateSeaFreightFAQs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/pricing.ts [app-rsc] (ecmascript)");
;
// Get origin country based on city
function getOriginCountry(city) {
    const hongKongCities = [
        'Hong Kong'
    ];
    if (hongKongCities.includes(city)) return 'Hong Kong';
    return 'China';
}
// Get province/region for Chinese cities
function getOriginRegion(city) {
    const regions = {
        'Shanghai': 'Shanghai',
        'Shenzhen': 'Guangdong',
        'Guangzhou': 'Guangdong',
        'Ningbo': 'Zhejiang',
        'Qingdao': 'Shandong',
        'Tianjin': 'Tianjin',
        'Xiamen': 'Fujian',
        'Hong Kong': 'Hong Kong',
        'Beijing': 'Beijing'
    };
    return regions[city] || city;
}
function generateSeaFreightFAQs(route) {
    const { originCity, destinationCity, destinationCountry, transitTime } = route;
    const originCountry = getOriginCountry(originCity);
    const originRegion = getOriginRegion(originCity);
    const pricing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRoutePricing"])(originCity, destinationCity);
    // Extract numeric transit time for answers
    const transitDays = transitTime.replace(' days', '');
    // Get pricing info if available
    const hasPricing = pricing && pricing.rates.length > 0;
    const lowestRate = hasPricing ? Math.min(...pricing.rates.map((r)=>r.price40GP)) : null;
    const highestRate = hasPricing ? Math.max(...pricing.rates.map((r)=>r.price40GP)) : null;
    const faqs = [
        {
            question: `How long does sea freight take from ${originCity} to ${destinationCity}?`,
            answer: `Sea freight from ${originCity} to ${destinationCity} typically takes ${transitDays} days for port-to-port transit. Actual delivery time may vary by 2-5 days depending on vessel schedules, customs clearance, and final delivery arrangements.`
        },
        {
            question: `What is the estimated cost of shipping a container from ${originCity} to ${destinationCity}?`,
            answer: hasPricing ? `The estimated cost of shipping a 40ft container from ${originCity} to ${destinationCity} ranges from ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatPrice"])(lowestRate)} to ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatPrice"])(highestRate)} depending on the carrier and service level. LCL rates typically start around $45-85 per CBM. Contact us for current rates and a customized quote.` : `The cost of shipping a container from ${originCity} to ${destinationCity} varies based on container size, carrier, and current market conditions. FCL rates typically range from $2,800-$4,500 for a 40ft container, while LCL rates start around $45-85 per CBM. Request a quote for accurate pricing.`
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
function generateAirFreightFAQs(route) {
    const { originCity, destinationCity, destinationCountry, transitTime } = route;
    const originCountry = getOriginCountry(originCity);
    const originRegion = getOriginRegion(originCity);
    // Extract numeric transit time for answers
    const transitDays = transitTime.replace(' days', '');
    const faqs = [
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
}),
"[project]/src/lib/utils/commonGoods.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Common goods shipped by country with multiple description variants for content variety
__turbopack_context__.s([
    "getCommonGoods",
    ()=>getCommonGoods,
    "getGoodsIntroText",
    ()=>getGoodsIntroText,
    "getGoodsSectionTitle",
    ()=>getGoodsSectionTitle
]);
// Country-specific goods data
const countryGoodsData = {
    'United States': [
        {
            category: 'Electronics',
            items: [
                'Smartphones and tablets, laptops and charging accessories',
                'Consumer electronics including phones, computers, and lithium-ion batteries',
                'Mobile devices, personal computers, and electronic components',
                'High-tech gadgets from smartphones to industrial circuit boards'
            ]
        },
        {
            category: 'Home & Office',
            items: [
                'Flat-pack furniture, office chairs, LED lighting, and bedding',
                'Ready-to-assemble furniture for home and office spaces',
                'Modern furniture, ergonomic office equipment, and home lighting',
                'IKEA-style furniture, LED fixtures, and mattresses'
            ]
        },
        {
            category: 'Industrial',
            items: [
                'HVAC systems, solar panels, and CNC manufacturing tools',
                'Power generators, industrial machinery, and HVAC equipment',
                'Solar energy products, manufacturing equipment, and power systems',
                'Heavy machinery, renewable energy components, and industrial tools'
            ]
        },
        {
            category: 'Retail & Fashion',
            items: [
                'Fast-fashion apparel, footwear, and synthetic textiles',
                'Sneakers, casual wear, and fashion accessories',
                'Trendy clothing, athletic footwear, and textile goods',
                'Consumer fashion including shoes, apparel, and accessories'
            ]
        },
        {
            category: 'Toys & Recreation',
            items: [
                'Video game consoles, STEM kits, and outdoor sports equipment',
                'E-bikes, electric scooters, and educational toys',
                'Gaming accessories, plush toys, and recreational gear',
                'Sports equipment, hobby electronics, and children\'s toys'
            ]
        },
        {
            category: 'Dangerous Goods',
            items: [
                'Lithium batteries and chemicals (requires MSDS documentation)',
                'Hazardous materials including batteries and industrial chemicals',
                'Regulated items such as lithium-ion cells and chemical compounds',
                'DG cargo including battery packs and chemical products'
            ]
        }
    ],
    'Canada': [
        {
            category: 'Machinery',
            items: [
                'Construction equipment parts, agricultural machinery, and pumps',
                'Industrial pumps, farming equipment, and heavy machinery components',
                'Manufacturing parts, construction tools, and agricultural systems',
                'Heavy-duty machinery, industrial components, and equipment parts'
            ]
        },
        {
            category: 'Consumer Goods',
            items: [
                'Small kitchen appliances like air fryers, blenders, and organizers',
                'Home appliances, cooking tools, and storage solutions',
                'Kitchen gadgets, silicone utensils, and household items',
                'Countertop appliances, food processors, and home organization'
            ]
        },
        {
            category: 'Textiles',
            items: [
                'Winter outerwear, heavy-duty fabrics, and upholstery materials',
                'Cold-weather apparel, insulated fabrics, and home textiles',
                'Seasonal clothing, durable textiles, and furniture fabrics',
                'Thermal wear, protective fabrics, and interior upholstery'
            ]
        },
        {
            category: 'Plastics & Materials',
            items: [
                'Plastic packaging, storage containers, and PVC components',
                'Building materials, storage bins, and packaging supplies',
                'Construction plastics, household containers, and PVC products',
                'Industrial plastics, packaging solutions, and building materials'
            ]
        },
        {
            category: 'E-commerce',
            items: [
                'Phone cases, stationery, and novelty gift items',
                'Small commodities, tech accessories, and gift products',
                'Yiwu-sourced goods including cases, office supplies, and gifts',
                'Consumer accessories, school supplies, and promotional items'
            ]
        },
        {
            category: 'Dangerous Goods',
            items: [
                'Lithium batteries and chemicals (requires MSDS documentation)',
                'Hazardous materials including batteries and industrial chemicals',
                'Regulated items such as lithium-ion cells and chemical compounds',
                'DG cargo including battery packs and chemical products'
            ]
        }
    ],
    'United Kingdom': [
        {
            category: 'E-commerce & Retail',
            items: [
                'Phone accessories, beauty tools, and LED strip lighting',
                'Tech gadgets, cosmetic devices, and smart home accessories',
                'Mobile cases, facial rollers, and decorative lighting',
                'Consumer electronics accessories and personal care tools'
            ]
        },
        {
            category: 'Fitness & Health',
            items: [
                'Resistance bands, yoga mats, dumbbells, and wearable tech',
                'Home gym equipment, exercise accessories, and fitness trackers',
                'Workout gear, wellness products, and smart fitness devices',
                'Athletic equipment, exercise mats, and health monitoring devices'
            ]
        },
        {
            category: 'Home Goods',
            items: [
                'Minimalist furniture, garden furniture, and kitchenware',
                'Modern home decor, outdoor seating, and cooking tools',
                'Contemporary furniture, patio sets, and kitchen accessories',
                'Scandinavian-style decor, garden items, and household goods'
            ]
        },
        {
            category: 'Pet Supplies',
            items: [
                'Cat trees, grooming gloves, and automatic pet feeders',
                'Pet furniture, care accessories, and smart feeding devices',
                'Animal supplies, grooming tools, and electronic pet products',
                'Pet care items, scratching posts, and automated feeders'
            ]
        },
        {
            category: 'Technology',
            items: [
                'CCTV cameras, PC components, and smart home devices',
                'Security systems, computer parts, and IoT gadgets',
                'Surveillance equipment, gaming components, and home automation',
                'Smart security, computer hardware, and connected devices'
            ]
        },
        {
            category: 'Dangerous Goods',
            items: [
                'Lithium batteries and chemicals (requires MSDS documentation)',
                'Hazardous materials including batteries and industrial chemicals',
                'Regulated items such as lithium-ion cells and chemical compounds',
                'DG cargo including battery packs and chemical products'
            ]
        }
    ],
    'Australia': [
        {
            category: 'Construction',
            items: [
                'Steel structures, aluminum window frames, and flooring materials',
                'Building components, metal frames, and SPC/laminate flooring',
                'Structural steel, architectural aluminum, and floor coverings',
                'Construction materials, window systems, and interior flooring'
            ]
        },
        {
            category: 'Vehicles & Parts',
            items: [
                'Electric vehicles (BYD/MG), spare parts, and tires',
                'EVs, automotive components, and replacement parts',
                'New energy vehicles, car accessories, and tire products',
                'Chinese EVs, auto parts, and vehicle maintenance items'
            ]
        },
        {
            category: 'Appliances',
            items: [
                'White goods including fridges, washing machines, and AC units',
                'Large appliances, laundry equipment, and climate control',
                'Refrigerators, washers, dryers, and air conditioning systems',
                'Major household appliances and HVAC equipment'
            ]
        },
        {
            category: 'Apparel',
            items: [
                'Summer fashion, swimwear, and Hi-Vis protective workwear',
                'Seasonal clothing, beachwear, and safety apparel',
                'Warm-weather fashion, swim gear, and work uniforms',
                'Casual wear, resort clothing, and industrial safety gear'
            ]
        },
        {
            category: 'Outdoor',
            items: [
                'Camping gear, gazebos, and marine/boating accessories',
                'Outdoor recreation equipment, shelters, and nautical supplies',
                'Adventure gear, outdoor structures, and boat accessories',
                'Camping supplies, patio covers, and water sports equipment'
            ]
        },
        {
            category: 'Dangerous Goods',
            items: [
                'Lithium batteries and chemicals (requires MSDS documentation)',
                'Hazardous materials including batteries and industrial chemicals',
                'Regulated items such as lithium-ion cells and chemical compounds',
                'DG cargo including battery packs and chemical products'
            ]
        }
    ],
    'Germany': [
        {
            category: 'Automotive',
            items: [
                'EV battery cells, electronic sensors, and cabin components',
                'Vehicle batteries, automotive electronics, and interior parts',
                'Electric vehicle components, sensor systems, and car interiors',
                'Battery technology, automotive sensors, and vehicle modules'
            ]
        },
        {
            category: 'Advanced Tech',
            items: [
                'Semiconductors, circuit boards, and telecom infrastructure',
                'Chips, PCBs, and communications equipment',
                'Electronic components, microprocessors, and network hardware',
                'High-tech components, integrated circuits, and 5G equipment'
            ]
        },
        {
            category: 'Industrial Machinery',
            items: [
                'Precision lathes, robotic arms, and hydraulic components',
                'CNC machines, automation robots, and hydraulic systems',
                'Manufacturing equipment, industrial robots, and fluid power',
                'Precision tools, assembly line robotics, and mechanical systems'
            ]
        },
        {
            category: 'Consumer Electronics',
            items: [
                'Audio equipment, monitors, and household robotics',
                'Sound systems, display panels, and robot vacuums',
                'Hi-fi gear, computer screens, and smart home robots',
                'Premium audio, visual displays, and automated cleaners'
            ]
        },
        {
            category: 'Textiles',
            items: [
                'Designer label manufacturing and technical textiles',
                'Fashion production materials and performance fabrics',
                'Apparel manufacturing and specialized textile products',
                'Clothing production and industrial fabric applications'
            ]
        },
        {
            category: 'Dangerous Goods',
            items: [
                'Lithium batteries and chemicals (requires MSDS documentation)',
                'Hazardous materials including batteries and industrial chemicals',
                'Regulated items such as lithium-ion cells and chemical compounds',
                'DG cargo including battery packs and chemical products'
            ]
        }
    ],
    'Netherlands': [
        {
            category: 'High-Tech',
            items: [
                'Computer servers, data storage units, and networking hardware',
                'Server equipment, storage systems, and network infrastructure',
                'Data center hardware, NAS devices, and routing equipment',
                'Enterprise servers, storage solutions, and connectivity gear'
            ]
        },
        {
            category: 'Medical Equipment',
            items: [
                'PPE (masks/gloves), diagnostic instruments, and hospital furniture',
                'Personal protective equipment, medical devices, and healthcare furniture',
                'Safety gear, testing equipment, and clinical furnishings',
                'Healthcare supplies, diagnostic tools, and medical infrastructure'
            ]
        },
        {
            category: 'Chemicals & Plastics',
            items: [
                'Raw polymer resins and specialized chemical additives',
                'Plastic raw materials and industrial chemical compounds',
                'Base polymers and chemical processing materials',
                'Resin products and specialty chemical formulations'
            ]
        },
        {
            category: 'Consumer Goods',
            items: [
                'Toys, textiles, and household goods for EU distribution',
                'Retail products destined for European fulfillment centers',
                'Consumer merchandise for Amazon EU and other distributors',
                'Mass-market goods for pan-European retail networks'
            ]
        },
        {
            category: 'Reefer Cargo',
            items: [
                'Temperature-controlled foods and organic ingredients',
                'Perishable goods and specialty food products',
                'Refrigerated commodities and fresh food items',
                'Cold-chain products and temperature-sensitive cargo'
            ]
        },
        {
            category: 'Dangerous Goods',
            items: [
                'Lithium batteries and chemicals (requires MSDS documentation)',
                'Hazardous materials including batteries and industrial chemicals',
                'Regulated items such as lithium-ion cells and chemical compounds',
                'DG cargo including battery packs and chemical products'
            ]
        }
    ]
};
// Default goods for countries not in the list
const defaultGoods = [
    {
        category: 'Electronics',
        items: [
            'Consumer electronics, smartphones, and computer equipment',
            'Electronic devices, mobile technology, and computing hardware',
            'Tech products, gadgets, and electronic components',
            'Digital devices, communication equipment, and electronics'
        ]
    },
    {
        category: 'Furniture',
        items: [
            'Ready-to-assemble home and office furniture',
            'Flat-pack furniture for residential and commercial spaces',
            'Modern furniture, seating, and storage solutions',
            'Home decor, office equipment, and furnishings'
        ]
    },
    {
        category: 'Industrial',
        items: [
            'HVAC equipment, solar panels, and manufacturing machinery',
            'Industrial equipment, energy systems, and production tools',
            'Heavy machinery, power systems, and industrial components',
            'Manufacturing equipment, mechanical systems, and industrial gear'
        ]
    },
    {
        category: 'Retail',
        items: [
            'Toys, clothing, and fitness accessories',
            'Consumer goods, apparel, and recreational products',
            'Fashion items, sports gear, and household goods',
            'Retail merchandise, textiles, and consumer products'
        ]
    },
    {
        category: 'Oversized Cargo',
        items: [
            'Vehicles, heavy machinery, and construction materials',
            'Large equipment, industrial vehicles, and building supplies',
            'Overweight cargo, machinery, and structural materials',
            'Project cargo, specialized equipment, and bulk materials'
        ]
    },
    {
        category: 'Dangerous Goods',
        items: [
            'Lithium batteries and chemicals (requires MSDS documentation)',
            'Hazardous materials including batteries and industrial chemicals',
            'Regulated items such as lithium-ion cells and chemical compounds',
            'DG cargo including battery packs and chemical products'
        ]
    }
];
// Simple hash function for consistent but varied content
function simpleHash(str) {
    let hash = 0;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
}
function getCommonGoods(originCity, destinationCity, destinationCountry) {
    // Normalize country name for lookup
    const normalizedCountry = destinationCountry.toLowerCase();
    // Find matching country data
    let countryData;
    for (const [country, data] of Object.entries(countryGoodsData)){
        if (normalizedCountry.includes(country.toLowerCase()) || country.toLowerCase().includes(normalizedCountry.split(' ')[0])) {
            countryData = data;
            break;
        }
    }
    // Use default if no match
    const goods = countryData || defaultGoods;
    // Create unique seed from origin + destination for consistent variation
    const seed = simpleHash(`${originCity}-${destinationCity}`);
    // Select varied descriptions for each category
    return goods.map((cat, index)=>{
        const variantIndex = (seed + index) % cat.items.length;
        return {
            category: cat.category,
            description: cat.items[variantIndex]
        };
    });
}
function getGoodsSectionTitle(originCity, destinationCity) {
    const seed = simpleHash(`${originCity}-${destinationCity}`);
    const titles = [
        `Common Goods Shipped from ${originCity} to ${destinationCity}`,
        `Popular Items on the ${originCity} to ${destinationCity} Route`,
        `What Ships from ${originCity} to ${destinationCity}?`,
        `Frequently Shipped Goods: ${originCity} to ${destinationCity}`,
        `Top Cargo Categories: ${originCity} to ${destinationCity}`
    ];
    return titles[seed % titles.length];
}
function getGoodsIntroText(originCity, destinationCity, destinationCountry) {
    const seed = simpleHash(`${originCity}-${destinationCity}-intro`);
    const intros = [
        `The ${originCity} to ${destinationCity} route handles a diverse range of cargo. Here are the most commonly shipped items on this corridor:`,
        `Businesses regularly ship the following product categories from ${originCity} to ${destinationCity}, ${destinationCountry}:`,
        `This route serves as a major trade lane for various goods. Common shipments from ${originCity} to ${destinationCity} include:`,
        `From ${originCity} to ${destinationCity}, we frequently transport these cargo types:`,
        `Our ${originCity} to ${destinationCity} service regularly handles shipments across these categories:`
    ];
    return intros[seed % intros.length];
}
}),
"[project]/src/lib/utils/requiredDocuments.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Required documents for shipping by country and freight type
__turbopack_context__.s([
    "getDocumentsIntroText",
    ()=>getDocumentsIntroText,
    "getDocumentsSectionTitle",
    ()=>getDocumentsSectionTitle,
    "getNuancesSectionTitle",
    ()=>getNuancesSectionTitle,
    "getRequiredDocuments",
    ()=>getRequiredDocuments
]);
// Universal documents with description variants for content variation
const universalDocumentsVariants = [
    {
        name: 'Commercial Invoice',
        descriptions: [
            'Describes the goods, value, and buyer/seller details',
            'Lists product descriptions, pricing, and transaction parties',
            'Contains item values, quantities, and seller/buyer information',
            'Official record of goods, their value, and parties involved'
        ],
        required: true
    },
    {
        name: 'Packing List',
        descriptions: [
            'Details weights, dimensions, and packaging specifications',
            'Specifies cargo measurements, weights, and how items are packed',
            'Lists package contents, dimensions, and gross/net weights',
            'Documents packaging details and physical cargo specifications'
        ],
        required: true
    },
    {
        name: 'Contract/Purchase Order',
        descriptions: [
            'Evidence of the transaction between parties',
            'Proof of the commercial agreement between buyer and seller',
            'Documentation of the purchase terms and conditions',
            'Official record of the trade agreement'
        ],
        required: true
    },
    {
        name: 'Certificate of Origin',
        descriptions: [
            'Proves goods were manufactured in China (for duty benefits)',
            'Certifies the country of manufacture for tariff purposes',
            'Required for duty rate determination and trade agreements',
            'Verifies Chinese origin for preferential duty treatment'
        ],
        required: true
    }
];
// Country-specific document requirements
const countryDocuments = {
    'united states': {
        seaSpecific: [
            {
                name: 'ISF (10+2) Filing',
                description: 'Importer Security Filing must be submitted 24 hours before vessel departure from China',
                required: true
            },
            {
                name: 'Customs Bond',
                description: 'Single Entry or Continuous Bond required for all US imports',
                required: true
            },
            {
                name: 'Bill of Lading (B/L)',
                description: 'Title document for ocean cargo - required for cargo release',
                required: true
            }
        ],
        airSpecific: [
            {
                name: 'ACAS Filing',
                description: 'Air Cargo Advance Screening performed by carrier/forwarder',
                required: true
            },
            {
                name: 'Customs Bond',
                description: 'Single Entry or Continuous Bond required for all US imports',
                required: true
            },
            {
                name: 'Air Waybill (AWB)',
                description: 'Receipt of goods for air cargo - filed hours before arrival',
                required: true
            }
        ],
        nuances: [
            'ISF Filing is critical for sea freight - failure to file results in a $5,000 fine',
            'Customs Bond is mandatory for both sea and air imports',
            'FDA prior notice required for food products (filed 15 days before arrival)',
            'FCC certification needed for electronic devices'
        ]
    },
    'canada': {
        seaSpecific: [
            {
                name: 'e-HBL / ACI Filing',
                description: 'Advance Commercial Information filed to CBSA before vessel arrival',
                required: true
            },
            {
                name: 'CARM Portal Registration',
                description: 'Importer must be registered in the CBSA Assessment and Revenue Management system',
                required: true
            },
            {
                name: 'Bill of Lading (B/L)',
                description: 'Title document for ocean cargo - required for cargo release',
                required: true
            }
        ],
        airSpecific: [
            {
                name: 'Electronic House Air Waybill',
                description: 'Filed into the ACI system by the freight forwarder',
                required: true
            },
            {
                name: 'CARM Portal Registration',
                description: 'Importer must be registered in the CBSA Assessment and Revenue Management system',
                required: true
            },
            {
                name: 'Air Waybill (AWB)',
                description: 'Receipt of goods for air cargo - required for customs clearance',
                required: true
            }
        ],
        nuances: [
            'CARM registration is now mandatory for all importers clearing freight in Canada',
            'Canada Food Inspection Agency (CFIA) permits required for food/plant products',
            'Health Canada approval needed for medical devices and pharmaceuticals',
            'Bilingual labeling (English/French) required for consumer products'
        ]
    },
    'united kingdom': {
        seaSpecific: [
            {
                name: 'EORI Number',
                description: 'Economic Operator Registration and Identification required for all UK importers',
                required: true
            },
            {
                name: 'CDS Entry',
                description: 'Customs Declaration Service entry for UK customs clearance',
                required: true
            },
            {
                name: 'Bill of Lading (B/L)',
                description: 'Title document for ocean cargo - required for cargo release',
                required: true
            }
        ],
        airSpecific: [
            {
                name: 'EORI Number',
                description: 'Economic Operator Registration and Identification required for all UK importers',
                required: true
            },
            {
                name: 'Detailed Commercial Invoice',
                description: 'UK customs require precise HS Code classification for fast-track air clearance',
                required: true
            },
            {
                name: 'Air Waybill (AWB)',
                description: 'Receipt of goods for air cargo - required for customs clearance',
                required: true
            }
        ],
        nuances: [
            'EORI number is mandatory for both sea and air imports post-Brexit',
            'UKCA marking required for products previously using CE marking',
            'VAT is charged at import unless using postponed VAT accounting',
            'Strict HS Code accuracy requirements - errors cause clearance delays'
        ]
    },
    'germany': {
        seaSpecific: [
            {
                name: 'ENS Declaration',
                description: 'Entry Summary Declaration required under the ICS2 security system',
                required: true
            },
            {
                name: 'EORI Number',
                description: 'EU Economic Operator Registration required for all imports',
                required: true
            },
            {
                name: 'Bill of Lading (B/L)',
                description: 'Title document for ocean cargo - required for cargo release',
                required: true
            }
        ],
        airSpecific: [
            {
                name: 'MSDS Documentation',
                description: 'Material Safety Data Sheet required for checking lithium batteries/chemicals',
                required: true
            },
            {
                name: 'EORI Number',
                description: 'EU Economic Operator Registration required for all imports',
                required: true
            },
            {
                name: 'Air Waybill (AWB)',
                description: 'Receipt of goods for air cargo - required for customs clearance',
                required: true
            }
        ],
        nuances: [
            'German customs are strict on product compliance (CE marking, REACH)',
            'VAT (Einfuhrumsatzsteuer) is charged at import - typically 19%',
            'Packaging regulations (VerpackG) require registration with LUCID',
            'Battery registration required for products containing batteries'
        ]
    },
    'netherlands': {
        seaSpecific: [
            {
                name: 'ENS Declaration',
                description: 'Entry Summary Declaration for EU port entry',
                required: true
            },
            {
                name: 'T1 Document',
                description: 'Required if goods are transshipping through Rotterdam to another EU country',
                required: false
            },
            {
                name: 'Bill of Lading (B/L)',
                description: 'Title document for ocean cargo - required for cargo release',
                required: true
            }
        ],
        airSpecific: [
            {
                name: 'MSDS Documentation',
                description: 'Material Safety Data Sheet for lithium batteries and chemical products',
                required: true
            },
            {
                name: 'EORI Number',
                description: 'EU Economic Operator Registration required for all imports',
                required: true
            },
            {
                name: 'Air Waybill (AWB)',
                description: 'Receipt of goods for air cargo - required for customs clearance',
                required: true
            }
        ],
        nuances: [
            'Article 23 VAT Deferment available - improves cash flow for sea freight importers',
            'Rotterdam is a major transshipment hub - T1 documents needed for onward EU transit',
            'Dutch customs offer simplified procedures for trusted importers (AEO)',
            'EORI number is mandatory for all EU imports'
        ]
    },
    'australia': {
        seaSpecific: [
            {
                name: 'Packing Declaration',
                description: 'Mandatory declaration of straw, peat, or wood used in packaging',
                required: true
            },
            {
                name: 'Fumigation Certificate',
                description: 'Required for wooden pallets and timber packaging (ISPM-15)',
                required: true
            },
            {
                name: 'Bill of Lading (B/L)',
                description: 'Title document for ocean cargo - required for cargo release',
                required: true
            }
        ],
        airSpecific: [
            {
                name: 'Inbound Cargo Manifest',
                description: 'Must match Air Waybill for immediate quarantine release',
                required: true
            },
            {
                name: 'Biosecurity Import Conditions',
                description: 'BICON permit for regulated goods (food, plants, animals)',
                required: false
            },
            {
                name: 'Air Waybill (AWB)',
                description: 'Receipt of goods for air cargo - required for customs clearance',
                required: true
            }
        ],
        nuances: [
            'Australia has extremely strict biosecurity - fumigation is mandatory for wooden packaging',
            'Air freight typically uses plastic/cardboard pallets to avoid fumigation requirements',
            'DAFF (Department of Agriculture) inspection common for first-time importers',
            'GST (10%) charged on imported goods value + shipping + insurance'
        ]
    }
};
// Default documents for countries not specifically listed
const defaultDocuments = {
    seaSpecific: [
        {
            name: 'Bill of Lading (B/L)',
            description: 'Title document for ocean cargo - required for cargo release',
            required: true
        },
        {
            name: 'Import Declaration',
            description: 'Customs declaration form for the destination country',
            required: true
        },
        {
            name: 'Customs Entry Form',
            description: 'Country-specific customs documentation for clearance',
            required: true
        }
    ],
    airSpecific: [
        {
            name: 'Air Waybill (AWB)',
            description: 'Receipt of goods for air cargo - required for customs clearance',
            required: true
        },
        {
            name: 'Import Declaration',
            description: 'Customs declaration form for the destination country',
            required: true
        },
        {
            name: 'MSDS (if applicable)',
            description: 'Material Safety Data Sheet for batteries, chemicals, or hazardous goods',
            required: false
        }
    ],
    nuances: [
        'Contact destination customs for specific import requirements',
        'HS Code accuracy is critical for correct duty calculation',
        'Import licenses may be required for restricted goods',
        'Local agent/broker recommended for smooth customs clearance'
    ]
};
// Simple hash for content variation
function simpleHash(str) {
    let hash = 0;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}
// Shuffle array based on seed (deterministic)
function shuffleWithSeed(arr, seed) {
    const result = [
        ...arr
    ];
    for(let i = result.length - 1; i > 0; i--){
        const j = (seed + i) % (i + 1);
        [result[i], result[j]] = [
            result[j],
            result[i]
        ];
    }
    return result;
}
function getRequiredDocuments(originCity, destinationCity, destinationCountry, freightType) {
    const normalizedCountry = destinationCountry.toLowerCase();
    const seed = simpleHash(`${originCity}-${destinationCity}`);
    // Find matching country
    let countryData = defaultDocuments;
    for (const [country, data] of Object.entries(countryDocuments)){
        if (normalizedCountry.includes(country) || country.includes(normalizedCountry.split(' ')[0])) {
            countryData = data;
            break;
        }
    }
    // Generate universal documents with varied descriptions
    const universal = universalDocumentsVariants.map((doc, index)=>({
            name: doc.name,
            description: doc.descriptions[(seed + index) % doc.descriptions.length],
            required: doc.required
        }));
    // Shuffle the universal documents order based on route
    const shuffledUniversal = shuffleWithSeed(universal, seed);
    // Shuffle country-specific documents
    const specificDocs = freightType === 'sea' ? countryData.seaSpecific : countryData.airSpecific;
    const shuffledSpecific = shuffleWithSeed(specificDocs, seed);
    // Shuffle nuances
    const shuffledNuances = shuffleWithSeed(countryData.nuances, seed);
    return {
        universal: shuffledUniversal,
        seaSpecific: freightType === 'sea' ? shuffledSpecific : [],
        airSpecific: freightType === 'air' ? shuffledSpecific : [],
        nuances: shuffledNuances
    };
}
function getDocumentsSectionTitle(originCity, destinationCity) {
    const seed = simpleHash(`${originCity}-${destinationCity}-docs`);
    const titles = [
        `Required Documents to Ship from ${originCity} to ${destinationCity}`,
        `Documentation for ${originCity} to ${destinationCity} Shipments`,
        `Essential Paperwork: ${originCity} to ${destinationCity}`,
        `Shipping Documents for the ${originCity} to ${destinationCity} Route`
    ];
    return titles[seed % titles.length];
}
function getDocumentsIntroText(originCity, destinationCity, destinationCountry, freightType) {
    const seed = simpleHash(`${originCity}-${destinationCity}-docs-intro`);
    const transportDoc = freightType === 'sea' ? 'Bill of Lading (B/L)' : 'Air Waybill (AWB)';
    const transportType = freightType === 'sea' ? 'sea freight' : 'air freight';
    const intros = [
        `Proper documentation ensures smooth customs clearance for your ${transportType} shipment to ${destinationCity}. Your cargo will be accompanied by a ${transportDoc} as proof of transport.`,
        `To ship goods from ${originCity} to ${destinationCity}, you'll need these documents. For ${transportType}, you'll receive a ${transportDoc} as your transport receipt.`,
        `Every shipment to ${destinationCountry} requires proper paperwork. Here's what you need for ${transportType} from ${originCity} to ${destinationCity}.`,
        `Ensure your ${originCity} to ${destinationCity} ${transportType} clears customs quickly with these required documents.`
    ];
    return intros[seed % intros.length];
}
function getNuancesSectionTitle(destinationCountry) {
    const titles = [
        `${destinationCountry} Customs Notes`,
        `Important: ${destinationCountry} Requirements`,
        `${destinationCountry} Import Specifics`,
        `Key Points for ${destinationCountry}`
    ];
    const seed = simpleHash(destinationCountry);
    return titles[seed % titles.length];
}
}),
"[project]/src/lib/utils/customsClearance.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Customs clearance rules and procedures by country and freight type
__turbopack_context__.s([
    "getClearanceIntroText",
    ()=>getClearanceIntroText,
    "getClearanceSectionTitle",
    ()=>getClearanceSectionTitle,
    "getCustomsClearance",
    ()=>getCustomsClearance,
    "getKeyFocusTitle",
    ()=>getKeyFocusTitle,
    "getUniversalClearanceConcepts",
    ()=>getUniversalClearanceConcepts
]);
// Universal customs clearance concepts with description variants
const universalConceptsVariants = [
    {
        title: 'Customs Valuation',
        descriptions: [
            'Accurate declaration of goods value determines duty rates and taxes owed',
            'Proper valuation ensures correct calculation of import duties and fees',
            'Value assessment is critical for determining applicable tariffs',
            'Goods must be valued correctly to calculate duties and prevent penalties'
        ]
    },
    {
        title: 'HS Code Classification',
        descriptions: [
            'Correct tariff codes ensure proper duty rates and regulatory compliance',
            'Harmonized System codes determine applicable duties and restrictions',
            'Accurate classification prevents delays and unexpected charges',
            'Proper HS codes are essential for calculating duties and meeting regulations'
        ]
    },
    {
        title: 'Compliance Documentation',
        descriptions: [
            'Complete paperwork prevents holds, inspections, and clearance delays',
            'Proper documentation ensures smooth passage through customs controls',
            'All required certificates and declarations must be accurate and complete',
            'Documentation accuracy is key to avoiding customs holds and penalties'
        ]
    },
    {
        title: 'Security Screening',
        descriptions: [
            'All cargo undergoes security verification before release',
            'Shipments are screened for compliance with security regulations',
            'Security protocols apply to all international cargo movements',
            'Cargo must pass security checks as part of the clearance process'
        ]
    }
];
// Country-specific customs clearance rules
const countryClearanceData = {
    'united states': {
        agencyName: 'Customs and Border Protection',
        agencyAbbreviation: 'CBP',
        seaRules: [
            {
                title: 'ISF 10+2 Filing',
                descriptions: [
                    'Importer Security Filing must be submitted 24 hours before the vessel departs China. Non-compliance results in a $5,000 fine per violation.',
                    'The ISF filing deadline is 24 hours prior to vessel departure from origin. Missing this deadline triggers automatic penalties of $5,000.',
                    'Submit your Importer Security Filing at least 24 hours before sailing. Failure to file carries a $5,000 penalty per shipment.',
                    'ISF data must reach CBP 24 hours before the ship leaves port. Late or missing filings incur $5,000 fines.'
                ],
                isWarning: true
            },
            {
                title: 'Customs Bond Requirement',
                descriptions: [
                    'A Continuous Bond or Single Entry Bond is mandatory for all commercial imports entering the United States.',
                    'All US imports require either a Continuous Bond (for frequent importers) or a Single Entry Bond (for occasional shipments).',
                    'Commercial cargo cannot clear customs without an active Customs Bond on file with CBP.',
                    'You must have a valid Customs Bond before your sea freight arrives at a US port.'
                ]
            },
            {
                title: 'Entry Type 01',
                descriptions: [
                    'Most commercial goods enter under Entry Type 01, which requires full duty payment and formal entry procedures.',
                    'Standard commercial imports use Entry Type 01, requiring complete documentation and duty assessment.',
                    'Entry Type 01 is the standard classification for commercial sea freight requiring formal customs processing.',
                    'Commercial shipments typically clear as Entry Type 01, subject to full inspection and duty collection protocols.'
                ]
            },
            {
                title: 'UFLPA Compliance',
                descriptions: [
                    'Shipments from China must demonstrate compliance with the Uyghur Forced Labor Prevention Act. Documentation proving supply chain transparency may be required.',
                    'The UFLPA requires evidence that goods were not produced using forced labor. Be prepared to provide supply chain documentation.',
                    'CBP may request proof of UFLPA compliance for any shipment from China. Maintain detailed supplier records.',
                    'All China-origin cargo is subject to UFLPA scrutiny. Importers must be able to verify ethical sourcing.'
                ],
                isWarning: true
            }
        ],
        airRules: [
            {
                title: 'ACAS Screening',
                descriptions: [
                    'Air Cargo Advance Screening data must be transmitted before loading in China. Your freight forwarder handles this filing.',
                    'ACAS is mandatory for all air cargo to the US. Screening data is submitted by the carrier before departure.',
                    'Air shipments require ACAS filing prior to loading. This security screening is performed by your logistics provider.',
                    'The ACAS program requires pre-departure data submission for all air freight bound for the United States.'
                ]
            },
            {
                title: 'Section 321 De Minimis',
                descriptions: [
                    'Air shipments valued under $800 may qualify for duty-free entry with simplified clearance procedures—ideal for e-commerce.',
                    'The $800 de minimis threshold allows low-value air cargo to enter without duties and with minimal paperwork.',
                    'E-commerce shipments under $800 can clear quickly using Section 321, avoiding formal entry requirements.',
                    'Low-value air freight (under $800) benefits from streamlined Section 321 clearance with no duty payment.'
                ]
            },
            {
                title: 'Rapid Clearance Timeline',
                descriptions: [
                    'Air freight clears within hours of arrival. Documentation errors can result in expensive airport storage fees.',
                    'Unlike sea freight, air cargo must clear quickly. Delays mean costly holds at airport facilities.',
                    'Air shipments have tight clearance windows. Ensure all paperwork is correct to avoid airport demurrage.',
                    'The fast pace of air freight leaves little room for error. Incorrect documents lead to immediate holds.'
                ],
                isWarning: true
            }
        ],
        keyFocus: [
            'UFLPA compliance is a current CBP priority for all China shipments',
            'ISF late fees are strictly enforced without exceptions',
            'FDA prior notice is required for food and pharmaceutical products',
            'FCC certification needed for electronic devices'
        ]
    },
    'canada': {
        agencyName: 'Canada Border Services Agency',
        agencyAbbreviation: 'CBSA',
        seaRules: [
            {
                title: 'ACI Filing',
                descriptions: [
                    'Advance Commercial Information must be submitted before vessel arrival, similar to the US ISF requirement.',
                    'The ACI program requires pre-arrival data transmission. Your forwarder files this on your behalf.',
                    'CBSA requires ACI data before the ship docks. This ensures security screening can be completed.',
                    'Submit Advance Commercial Information ahead of arrival to facilitate smooth customs processing.'
                ]
            },
            {
                title: 'Wood Packaging Rules',
                descriptions: [
                    'All wooden pallets and packaging must bear the ISPM-15 stamp. Non-compliant containers face immediate deportation.',
                    'CBSA strictly enforces ISPM-15 for wood packaging. Missing stamps result in container rejection.',
                    'Wooden packaging without proper heat treatment certification will be refused entry at Canadian ports.',
                    'Ensure all wood materials carry ISPM-15 marks. Canada does not allow non-compliant packaging.'
                ],
                isWarning: true
            },
            {
                title: 'CARM Registration',
                descriptions: [
                    'Importers must register in the CBSA Assessment and Revenue Management portal to manage duties and taxes.',
                    'The CARM Client Portal is now mandatory for paying import duties directly to the government.',
                    'All importers need an active CARM account. This digital system replaces older payment methods.',
                    'Register with CARM before your first shipment arrives. It is required for duty payment processing.'
                ]
            }
        ],
        airRules: [
            {
                title: 'CARM Portal',
                descriptions: [
                    'The CARM Client Portal is required for all importers to pay duties and taxes directly to CBSA.',
                    'Air freight importers must use CARM for duty payments. Ensure your portal registration is active.',
                    'CBSA processes all import duties through CARM. Register before your air shipment arrives.',
                    'Payment of air freight duties requires an active CARM account with CBSA.'
                ]
            },
            {
                title: 'LVS Simplified Entry',
                descriptions: [
                    'Air shipments valued under CAD $3,300 qualify for Low Value Shipment simplified accounting procedures.',
                    'The LVS program streamlines clearance for air cargo under CAD $3,300 with reduced documentation.',
                    'Low-value air freight benefits from simplified LVS processing, speeding up release times.',
                    'Goods under CAD $3,300 can use LVS procedures, requiring minimal paperwork and faster clearance.'
                ]
            },
            {
                title: 'Quick Release Required',
                descriptions: [
                    'Air cargo must clear rapidly. Documentation must be prepared before the flight lands.',
                    'The short clearance window for air freight means all paperwork must be perfect upon arrival.',
                    'Air shipments clear within hours. Have all documents ready to avoid costly airport holds.',
                    'Unlike sea freight, air cargo cannot wait. Prepare documentation well in advance.'
                ],
                isWarning: true
            }
        ],
        keyFocus: [
            'CARM registration is now mandatory for all importers',
            'CFIA permits required for food and plant products',
            'Health Canada approval needed for medical devices',
            'Bilingual labeling (English/French) required for consumer products'
        ]
    },
    'united kingdom': {
        agencyName: 'His Majesty\'s Revenue and Customs',
        agencyAbbreviation: 'HMRC',
        seaRules: [
            {
                title: 'GB EORI Number',
                descriptions: [
                    'A UK EORI number starting with "GB" is mandatory for all importers post-Brexit.',
                    'You must have a GB-prefixed EORI to import into the United Kingdom.',
                    'Post-Brexit rules require all importers to hold a valid GB EORI number.',
                    'No goods can clear UK customs without a registered GB EORI number.'
                ]
            },
            {
                title: 'CDS Entry',
                descriptions: [
                    'All customs declarations go through the Customs Declaration Service (CDS), which replaced the older CHIEF system.',
                    'The CDS is the UK\'s primary customs declaration platform. Ensure your broker is CDS-registered.',
                    'HMRC processes sea freight entries via CDS. Your customs agent handles the declaration filing.',
                    'Customs Declaration Service entries are required for all commercial imports to the UK.'
                ]
            },
            {
                title: 'Postponed VAT Accounting',
                descriptions: [
                    'UK businesses can defer import VAT using PVA, declaring and recovering VAT on their return instead of paying at the port.',
                    'PVA lets you account for import VAT on your VAT return rather than paying upfront at customs.',
                    'Postponed VAT Accounting improves cash flow by eliminating the need to pay VAT at the border.',
                    'Registered businesses can use PVA to handle import VAT through their regular tax return.'
                ]
            }
        ],
        airRules: [
            {
                title: 'Simplified Frontier Declaration',
                descriptions: [
                    'Air freight often uses Simplified Frontier Declaration for rapid release, with a supplementary declaration filed later.',
                    'SFD allows quick clearance of air cargo, followed by a complete declaration within a set timeframe.',
                    'Speed up air freight release with Simplified Frontier Declaration, completing full details afterward.',
                    'The SFD process enables fast air cargo clearance while allowing time to submit full customs data.'
                ]
            },
            {
                title: 'De Minimis Rules',
                descriptions: [
                    'Goods valued under £135 are duty-free, but VAT is still charged and collected at the point of sale.',
                    'The £135 threshold waives customs duty, though VAT applies and must be collected from buyers.',
                    'Low-value air shipments under £135 avoid duty but remain subject to VAT collection.',
                    'Air cargo under £135 clears without duty, but VAT is due on all goods regardless of value.'
                ]
            },
            {
                title: 'UKCA Marking',
                descriptions: [
                    'Products previously using CE marking now require UKCA marking for the UK market.',
                    'Post-Brexit, UK-specific UKCA marks are required instead of EU CE marks.',
                    'Ensure products carry UKCA marking for UK import. CE marks alone are no longer sufficient.',
                    'The UKCA mark has replaced CE marking requirements for goods sold in the United Kingdom.'
                ],
                isWarning: true
            }
        ],
        keyFocus: [
            'EORI number is mandatory for all imports post-Brexit',
            'UKCA marking required for products previously using CE marking',
            'PVA is available to improve cash flow on import VAT',
            'Strict HS Code accuracy requirements—errors cause delays'
        ]
    },
    'australia': {
        agencyName: 'Australian Border Force & Department of Agriculture',
        agencyAbbreviation: 'ABF',
        seaRules: [
            {
                title: 'Packing Declaration',
                descriptions: [
                    'A mandatory declaration for all sea containers stating whether wood, straw, or bark is present in packaging.',
                    'You must declare all organic packing materials. Australia\'s biosecurity rules are strictly enforced.',
                    'The Packing Declaration discloses any wood or plant-based materials used in your container.',
                    'All sea freight requires a Packing Declaration listing any natural materials in the shipment.'
                ]
            },
            {
                title: 'BMSB Treatment',
                descriptions: [
                    'From September to May, sea containers from China may require heat treatment or fumigation for Brown Marmorated Stink Bug.',
                    'Seasonal BMSB requirements mean your container may need specialized treatment during risk months.',
                    'The stink bug season requires additional biosecurity measures for sea freight from high-risk regions.',
                    'Heat treatment or fumigation may be mandatory for sea containers arriving during BMSB season.'
                ],
                isWarning: true
            },
            {
                title: 'ISPM-15 Compliance',
                descriptions: [
                    'All wooden packaging must meet ISPM-15 standards with proper heat treatment certification stamps.',
                    'Non-compliant wood packaging will be fumigated at your expense or rejected entirely.',
                    'ISPM-15 stamped wood is mandatory. Australia does not accept untreated timber materials.',
                    'Ensure all pallets and crates bear ISPM-15 marks to avoid costly treatment at the port.'
                ],
                isWarning: true
            }
        ],
        airRules: [
            {
                title: 'GST at Border',
                descriptions: [
                    'Australia charges 10% GST on almost all imports, including those under AUD $1,000 if the seller is GST-registered.',
                    'A 10% GST applies to imported goods. Even low-value items may be subject to this tax.',
                    'Import GST is collected at the border at a rate of 10% on the goods value plus shipping.',
                    'All air freight is subject to 10% GST, calculated on the total landed cost of goods.'
                ]
            },
            {
                title: 'Self-Assessed Clearance',
                descriptions: [
                    'Air cargo valued at AUD $1,000 or less can use Self-Assessed Clearance (SAC) for simplified processing.',
                    'The SAC program allows quick clearance of low-value air shipments with minimal documentation.',
                    'Air freight under AUD $1,000 qualifies for streamlined SAC procedures, reducing clearance time.',
                    'Self-Assessed Clearance speeds up low-value air cargo release with simplified entry requirements.'
                ]
            },
            {
                title: 'Biosecurity Priority',
                descriptions: [
                    'Air freight is also subject to biosecurity inspection. Ensure no prohibited organic materials are included.',
                    'Australia\'s biosecurity rules apply equally to air cargo. Inspections can delay non-compliant shipments.',
                    'Even air freight must pass biosecurity screening. Prohibited items will be seized or destroyed.',
                    'The Department of Agriculture inspects air cargo for biosecurity risks. Compliance is essential.'
                ],
                isWarning: true
            }
        ],
        keyFocus: [
            'Biosecurity is Australia\'s primary customs focus—not just taxes',
            'Fumigation certificates required for all wooden packaging',
            'First-time importers often face DAFF inspection',
            'GST (10%) charged on goods value plus shipping plus insurance'
        ]
    },
    'germany': {
        agencyName: 'German Customs (Zoll) under EU Union Customs Code',
        agencyAbbreviation: 'Zoll',
        seaRules: [
            {
                title: 'CE Marking Compliance',
                descriptions: [
                    'German customs are known for seizing containers if electronics or toys lack proper CE marking or German-language manuals.',
                    'Product compliance is strictly enforced. Missing CE marks or documentation can result in cargo seizure.',
                    'CE marking and German instruction manuals are mandatory. Non-compliant goods may be confiscated.',
                    'Germany prioritizes product safety. Ensure CE certification and proper labeling before shipping.'
                ],
                isWarning: true
            },
            {
                title: 'ENS Declaration',
                descriptions: [
                    'Entry Summary Declaration is required under the EU\'s Import Control System for security purposes.',
                    'The ENS must be filed before goods arrive. This is part of EU-wide security screening requirements.',
                    'Submit your Entry Summary Declaration in advance to comply with EU import control regulations.',
                    'ENS filing ensures your cargo passes EU security protocols before entering Germany.'
                ]
            },
            {
                title: 'Einfuhrumsatzsteuer',
                descriptions: [
                    'Import VAT (Einfuhrumsatzsteuer) is charged at 19% and must be paid before cargo release.',
                    'Germany charges 19% import VAT. This is due at the time of customs clearance.',
                    'Expect to pay 19% Einfuhrumsatzsteuer on your landed goods value plus duty.',
                    'Import VAT at 19% is payable upon clearance. Registered businesses can reclaim this later.'
                ]
            }
        ],
        airRules: [
            {
                title: 'ICS2 Pre-Loading Data',
                descriptions: [
                    'High-level security data must be transmitted before air cargo is even loaded onto the plane in China.',
                    'The ICS2 system requires advance data submission for all air freight before departure.',
                    'ICS2 security filing happens before loading. Your forwarder handles this pre-departure requirement.',
                    'Air cargo requires ICS2 data transmission prior to loading at origin airport.'
                ]
            },
            {
                title: 'IOSS for E-Commerce',
                descriptions: [
                    'For e-commerce air shipments under €150, VAT is collected at the point of sale, enabling instant customs clearance.',
                    'The IOSS program allows pre-paid VAT on low-value goods, eliminating customs VAT collection.',
                    'E-commerce shipments under €150 clear instantly when VAT is collected via IOSS at checkout.',
                    'Import One-Stop Shop (IOSS) simplifies VAT for small parcels by collecting tax before shipping.'
                ]
            },
            {
                title: 'Product Documentation',
                descriptions: [
                    'German authorities may request technical documentation, test reports, and compliance certificates for air cargo.',
                    'Be prepared to provide CE certificates, test reports, and declarations of conformity.',
                    'Air freight may be inspected for product compliance. Have all technical documents ready.',
                    'German customs may require proof of product compliance even for air shipments.'
                ],
                isWarning: true
            }
        ],
        keyFocus: [
            'Product compliance (CE marking, REACH) is strictly enforced',
            'Packaging registration (VerpackG) requires LUCID registration',
            'Battery registration required for products containing batteries',
            '19% import VAT (Einfuhrumsatzsteuer) applies to all goods'
        ]
    },
    'netherlands': {
        agencyName: 'Dutch Customs under EU Union Customs Code',
        agencyAbbreviation: 'Douane',
        seaRules: [
            {
                title: 'Article 23 VAT Deferment',
                descriptions: [
                    'The Netherlands allows VAT deferment under Article 23. You don\'t pay VAT at Rotterdam—handle it on your tax return.',
                    'Article 23 is the #1 reason importers choose the Netherlands. Defer VAT until your periodic return.',
                    'VAT deferment at Rotterdam means no upfront VAT payment. Settle it later through your tax filing.',
                    'Take advantage of Article 23 to improve cash flow—no VAT due at the port of entry.'
                ]
            },
            {
                title: 'Rotterdam Transshipment',
                descriptions: [
                    'Rotterdam is a major EU transshipment hub. T1 documents are required if goods are moving onward to another EU country.',
                    'For cargo transiting through Rotterdam to elsewhere in the EU, ensure T1 transit documentation is prepared.',
                    'If your final destination isn\'t the Netherlands, you\'ll need T1 documents for EU transit.',
                    'Transshipment via Rotterdam requires proper transit paperwork for onward EU movement.'
                ]
            },
            {
                title: 'ENS Declaration',
                descriptions: [
                    'Entry Summary Declaration is required for EU port entry under the Import Control System.',
                    'Submit ENS data before arrival at Rotterdam. This is mandatory for all sea freight.',
                    'The ENS filing ensures compliance with EU security requirements at Dutch ports.',
                    'EU regulations require ENS submission before your vessel reaches Netherlands waters.'
                ]
            }
        ],
        airRules: [
            {
                title: 'ICS2 Security Filing',
                descriptions: [
                    'Air cargo security data must be submitted under ICS2 before loading at the origin airport.',
                    'The ICS2 system requires pre-departure data transmission for all air shipments to the EU.',
                    'Submit ICS2 data before your cargo is loaded. This is an EU-wide security requirement.',
                    'Air freight to the Netherlands requires ICS2 filing prior to departure from China.'
                ]
            },
            {
                title: 'IOSS Instant Clearance',
                descriptions: [
                    'E-commerce air shipments under €150 can use IOSS, where VAT is collected at purchase for instant clearance.',
                    'The IOSS system enables immediate customs release for low-value parcels with pre-paid VAT.',
                    'Small e-commerce packages clear instantly via IOSS when VAT was collected at checkout.',
                    'Import One-Stop Shop allows sub-€150 shipments to bypass customs VAT collection.'
                ]
            },
            {
                title: 'Schiphol Efficiency',
                descriptions: [
                    'Amsterdam Schiphol offers streamlined air cargo processing with efficient customs procedures.',
                    'Air freight via Schiphol benefits from modern handling and rapid customs clearance systems.',
                    'Schiphol Airport provides fast air cargo processing with advanced customs infrastructure.',
                    'Netherlands air freight typically clears quickly through Schiphol\'s efficient systems.'
                ]
            }
        ],
        keyFocus: [
            'Article 23 VAT deferment is a major advantage for importers',
            'Rotterdam is a top EU transshipment hub—T1 documents needed for transit',
            'AEO status available for simplified customs procedures',
            'EORI number is mandatory for all EU imports'
        ]
    }
};
// Default clearance rules for countries not specifically listed
const defaultClearanceData = {
    agencyName: 'National Customs Authority',
    agencyAbbreviation: 'Customs',
    seaRules: [
        {
            title: 'Import Declaration',
            descriptions: [
                'A customs declaration must be filed for all commercial sea freight before cargo release.',
                'Submit your import declaration to customs before collecting your container.',
                'All sea cargo requires formal declaration through the national customs system.',
                'Customs entry must be filed and processed before cargo can be released.'
            ]
        },
        {
            title: 'Duty Payment',
            descriptions: [
                'Import duties are calculated based on HS code classification and declared value.',
                'Pay applicable duties and taxes before your cargo can clear customs.',
                'Duty rates depend on product classification and trade agreements in effect.',
                'Complete duty assessment and payment to obtain cargo release.'
            ]
        },
        {
            title: 'Documentation Review',
            descriptions: [
                'Customs will verify all shipping documents including commercial invoice and packing list.',
                'Ensure all documentation is accurate and consistent to avoid processing delays.',
                'Document review is standard procedure for all commercial imports.',
                'Prepare complete and accurate paperwork to facilitate smooth clearance.'
            ]
        }
    ],
    airRules: [
        {
            title: 'Rapid Processing',
            descriptions: [
                'Air freight requires quick clearance. Documentation must be ready before arrival.',
                'Air cargo clears within hours. Ensure all paperwork is prepared in advance.',
                'The fast pace of air freight means documentation errors cause immediate holds.',
                'Have all documents ready for air shipments to avoid costly airport storage.'
            ]
        },
        {
            title: 'Security Screening',
            descriptions: [
                'All air cargo undergoes security screening as part of international aviation requirements.',
                'Security checks are mandatory for air freight before customs release.',
                'Air shipments must pass security protocols before entering the clearance process.',
                'Expect security screening as part of the air cargo clearance procedure.'
            ]
        },
        {
            title: 'Simplified Procedures',
            descriptions: [
                'Low-value air shipments may qualify for simplified clearance with reduced documentation.',
                'Some countries offer expedited procedures for air cargo under certain value thresholds.',
                'Check if your air shipment qualifies for simplified or de minimis clearance.',
                'Low-value goods may benefit from streamlined air freight customs procedures.'
            ]
        }
    ],
    keyFocus: [
        'Contact destination customs for specific import requirements',
        'HS Code accuracy is critical for correct duty calculation',
        'Import licenses may be required for restricted goods',
        'Local customs broker recommended for smooth clearance'
    ]
};
// Simple hash function for content variation
function simpleHash(str) {
    let hash = 0;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}
// Shuffle array based on seed (deterministic)
function shuffleWithSeed(arr, seed) {
    const result = [
        ...arr
    ];
    for(let i = result.length - 1; i > 0; i--){
        const j = (seed + i) % (i + 1);
        [result[i], result[j]] = [
            result[j],
            result[i]
        ];
    }
    return result;
}
function getCustomsClearance(originCity, destinationCity, destinationCountry, freightType) {
    const normalizedCountry = destinationCountry.toLowerCase();
    const seed = simpleHash(`${originCity}-${destinationCity}-customs`);
    // Find matching country
    let countryData = defaultClearanceData;
    for (const [country, data] of Object.entries(countryClearanceData)){
        if (normalizedCountry.includes(country) || country.includes(normalizedCountry.split(' ')[0])) {
            countryData = data;
            break;
        }
    }
    // Generate rules with varied descriptions
    const rulesSource = freightType === 'sea' ? countryData.seaRules : countryData.airRules;
    const rules = rulesSource.map((rule, index)=>({
            title: rule.title,
            description: rule.descriptions[(seed + index) % rule.descriptions.length],
            isWarning: 'isWarning' in rule ? rule.isWarning : undefined
        }));
    // Shuffle the rules order based on route
    const shuffledRules = shuffleWithSeed(rules, seed);
    // Shuffle key focus points
    const shuffledFocus = shuffleWithSeed([
        ...countryData.keyFocus
    ], seed);
    return {
        agencyName: countryData.agencyName,
        agencyAbbreviation: countryData.agencyAbbreviation,
        seaRules: freightType === 'sea' ? shuffledRules : [],
        airRules: freightType === 'air' ? shuffledRules : [],
        keyFocus: shuffledFocus
    };
}
function getUniversalClearanceConcepts(originCity, destinationCity) {
    const seed = simpleHash(`${originCity}-${destinationCity}-universal`);
    const concepts = universalConceptsVariants.map((concept, index)=>({
            title: concept.title,
            description: concept.descriptions[(seed + index) % concept.descriptions.length]
        }));
    return shuffleWithSeed(concepts, seed);
}
function getClearanceSectionTitle(originCity, destinationCity, destinationCountry) {
    const seed = simpleHash(`${originCity}-${destinationCity}-clearance-title`);
    const titles = [
        `Customs Clearance for ${destinationCity} Imports`,
        `${destinationCountry} Customs Process`,
        `Clearing Customs in ${destinationCity}`,
        `Import Clearance: ${originCity} to ${destinationCity}`
    ];
    return titles[seed % titles.length];
}
function getClearanceIntroText(originCity, destinationCity, destinationCountry, freightType) {
    const seed = simpleHash(`${originCity}-${destinationCity}-clearance-intro`);
    const timingNote = freightType === 'sea' ? 'With sea freight, you have weeks to prepare documentation, but errors can lead to significant daily storage fees (demurrage) at the port.' : 'Air freight clearance happens within hours of arrival. Documentation errors result in expensive holds at airport facilities.';
    const intros = [
        `Customs clearance is more than a single step—it encompasses compliance verification, valuation assessment, and security screening. ${timingNote}`,
        `Getting your cargo through ${destinationCountry} customs involves multiple stages of verification and documentation review. ${timingNote}`,
        `Understanding ${destinationCountry}'s customs process helps ensure your ${originCity} shipment clears without delays or penalties. ${timingNote}`,
        `The customs clearance process in ${destinationCity} requires accurate documentation and regulatory compliance. ${timingNote}`
    ];
    return intros[seed % intros.length];
}
function getKeyFocusTitle(destinationCountry) {
    const seed = simpleHash(destinationCountry + '-focus');
    const titles = [
        `Current ${destinationCountry} Customs Priorities`,
        `What ${destinationCountry} Customs Is Watching`,
        `Key ${destinationCountry} Import Considerations`,
        `${destinationCountry} Clearance Focus Areas`
    ];
    return titles[seed % titles.length];
}
}),
"[project]/src/lib/utils/dangerousGoods.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Dangerous goods shipping rules and requirements by country and freight type
__turbopack_context__.s([
    "getDGConsiderationsTitle",
    ()=>getDGConsiderationsTitle,
    "getDGIntroText",
    ()=>getDGIntroText,
    "getDGSectionTitle",
    ()=>getDGSectionTitle,
    "getDangerousGoodsRules",
    ()=>getDangerousGoodsRules,
    "getUniversalDGRequirements",
    ()=>getUniversalDGRequirements
]);
// Universal DG requirements with description variants
const universalDGRequirementsVariants = [
    {
        title: 'MSDS/SDS Documentation',
        descriptions: [
            'Safety Data Sheet must be current (within 1 year) and provided in both English and Chinese',
            'Material Safety Data Sheet required in English and Chinese, dated within the last 12 months',
            'Current SDS documentation in dual language format is mandatory for all dangerous goods',
            'Provide recent Safety Data Sheets in English and Chinese—documents older than 1 year are rejected'
        ]
    },
    {
        title: 'UN-Rated Packaging',
        descriptions: [
            'Outer packaging must bear the UN certification mark confirming it can withstand the specific hazards',
            'All containers require UN-stamped packaging certified for the hazard class of the contents',
            'Packaging must display valid UN certification matching the dangerous goods classification',
            'UN-approved packaging with proper certification stamps is required for all hazardous shipments'
        ]
    },
    {
        title: 'Dangerous Goods Declaration',
        descriptions: [
            'Formal DGD signed by the shipper declaring the nature and classification of hazardous contents',
            'Shipper must complete and sign the official Dangerous Goods Declaration form',
            'A signed DGD is mandatory, accurately listing all hazardous materials and their classifications',
            'Complete the formal declaration document with shipper signature certifying DG compliance'
        ]
    },
    {
        title: '24-Hour Emergency Contact',
        descriptions: [
            'Provide a phone number (with country code) manned 24/7 by someone familiar with the cargo details',
            'Round-the-clock emergency contact required—must reach someone who knows the technical specifications',
            'A 24/7 emergency number is mandatory; the contact must understand the hazardous materials involved',
            'Include an emergency phone number staffed continuously by personnel with cargo knowledge'
        ]
    }
];
// Country-specific DG rules
const countryDGData = {
    'united states': {
        regulatoryBody: 'Department of Transportation & Pipeline and Hazardous Materials Safety Administration',
        regulatoryAbbreviation: 'DOT/PHMSA',
        seaRules: [
            {
                title: 'ISF 10+2 DG Details',
                descriptions: [
                    'ISF filing must include specific dangerous goods details. The US requires precise chemical names—"Cleaning Fluid" is rejected; you must state "Isopropanol" or the exact composition.',
                    'Detailed chemical composition required in ISF filing. Generic descriptions are not accepted—provide exact chemical names.',
                    'Your ISF 10+2 must specify exact chemical names and compositions for all hazardous materials.',
                    'US Customs requires precise chemical identification in ISF filings—vague descriptions will be rejected.'
                ],
                isWarning: true
            },
            {
                title: '49 CFR Compliance',
                descriptions: [
                    'All hazardous materials must comply with 49 CFR (Code of Federal Regulations) requirements for shipping.',
                    'Shipments must meet 49 CFR standards covering packaging, labeling, and documentation.',
                    'The US follows 49 CFR for hazmat—ensure your packaging and paperwork meet these federal standards.',
                    'Compliance with 49 CFR is mandatory for all dangerous goods entering US ports.'
                ]
            },
            {
                title: 'Port Security Requirements',
                descriptions: [
                    'US ports have enhanced security protocols for DG vessels. Expect potential inspections and delays.',
                    'Dangerous goods containers may be subject to additional security screening at US ports.',
                    'Be prepared for enhanced inspections at port of entry for all hazardous cargo.',
                    'Port security may require additional documentation or physical inspection of DG shipments.'
                ]
            }
        ],
        airRules: [
            {
                title: 'Lithium Battery Restrictions',
                descriptions: [
                    'Lithium Ion Batteries (UN3480) are heavily restricted. High-power batteries (>100Wh) are generally Cargo Aircraft Only (CAO).',
                    'Strict limits on lithium batteries—UN3480 over 100Wh cannot fly on passenger aircraft.',
                    'Lithium ion batteries face severe restrictions. Most high-capacity cells require CAO designation.',
                    'UN3480 batteries above 100Wh are restricted to cargo-only aircraft under US regulations.'
                ],
                isWarning: true
            },
            {
                title: 'ACAS Screening',
                descriptions: [
                    'Air Cargo Advance Screening (ACAS) rules apply to all DG shipments. Data must be transmitted before loading.',
                    'DG air freight requires ACAS filing with complete hazmat details before departure.',
                    'ACAS screening is mandatory—dangerous goods information must be submitted prior to loading.',
                    'All hazardous air cargo must pass ACAS review before being loaded onto US-bound aircraft.'
                ]
            },
            {
                title: 'Section II Labeling',
                descriptions: [
                    'Batteries contained in equipment require specific Section II labeling with Watt-hour ratings.',
                    'Equipment containing lithium batteries needs Section II compliance labels showing capacity.',
                    'Section II marking required for batteries packed with or in devices—include Wh rating.',
                    'Proper Section II labeling is mandatory for all lithium batteries shipped with equipment.'
                ]
            }
        ],
        keyConsiderations: [
            'US requires exact chemical names—generic descriptions are rejected',
            'Lithium batteries >100Wh are Cargo Aircraft Only',
            'ISF filing must include complete DG details 24 hours before departure',
            'Random CBP inspections are common for DG shipments'
        ]
    },
    'canada': {
        regulatoryBody: 'Transport Canada - Transportation of Dangerous Goods',
        regulatoryAbbreviation: 'TDG',
        seaRules: [
            {
                title: 'ISPM-15 for DG Packaging',
                descriptions: [
                    'If dangerous chemicals are shipped on wooden pallets, the wood must be heat-treated and ISPM-15 certified.',
                    'Wooden packaging for DG requires ISPM-15 stamps. Non-compliant pallets will be rejected.',
                    'All wood packaging used with dangerous goods must meet ISPM-15 heat treatment standards.',
                    'Canada enforces strict ISPM-15 compliance for any wood packaging containing hazardous materials.'
                ],
                isWarning: true
            },
            {
                title: 'Security Management Plan',
                descriptions: [
                    'Class 1 (Explosives) or Class 7 (Radioactive) imports require a formal Security Management Plan.',
                    'High-risk DG classes require submission of a Security Management Plan to Transport Canada.',
                    'A security plan is mandatory for explosive or radioactive materials entering Canada.',
                    'Class 1 and Class 7 dangerous goods require documented security protocols before import.'
                ]
            },
            {
                title: 'TDG Standards Alignment',
                descriptions: [
                    'Canadian TDG rules closely align with US DOT but have specific national variations.',
                    'Transport Canada standards mirror US regulations but include additional Canadian requirements.',
                    'TDG compliance required—similar to US 49 CFR but with Canadian-specific additions.',
                    'Canada follows US-aligned standards with Transport Canada-specific documentation needs.'
                ]
            }
        ],
        airRules: [
            {
                title: 'e-AWB and ACI Filing',
                descriptions: [
                    'Electronic Air Waybill and Advance Commercial Information filings are mandatory for DG air cargo.',
                    'All dangerous goods air shipments require e-AWB and ACI data transmission.',
                    'Canada requires electronic documentation—paper AWBs are not accepted for DG shipments.',
                    'ACI filing with complete DG details must accompany your electronic air waybill.'
                ]
            },
            {
                title: 'Equivalency Certificates',
                descriptions: [
                    'If Chinese packaging doesn\'t perfectly match Canadian TDG standards, an Equivalency Certificate may be required.',
                    'Non-standard packaging may need Transport Canada Equivalency Certificate approval.',
                    'Equivalency Certificates bridge gaps between Chinese and Canadian packaging requirements.',
                    'Request an Equivalency Certificate if your DG packaging meets foreign but not Canadian specs.'
                ]
            },
            {
                title: 'CAO Restrictions',
                descriptions: [
                    'Cargo Aircraft Only restrictions apply to high-risk dangerous goods entering Canada.',
                    'Certain DG classes and quantities can only fly on dedicated cargo aircraft.',
                    'CAO designations are strictly enforced—passenger aircraft have severe DG limitations.',
                    'High-hazard materials require Cargo Aircraft Only routing into Canada.'
                ],
                isWarning: true
            }
        ],
        keyConsiderations: [
            'TDG standards align with US DOT but have Canadian-specific requirements',
            'ISPM-15 strictly enforced for wooden DG packaging',
            'Equivalency Certificates available for non-standard packaging',
            'Class 1 and Class 7 goods need Security Management Plans'
        ]
    },
    'united kingdom': {
        regulatoryBody: 'Health and Safety Executive & Civil Aviation Authority',
        regulatoryAbbreviation: 'HSE/CAA',
        seaRules: [
            {
                title: 'Port Notification',
                descriptions: [
                    'The UK requires separate "Notification of Arrival" to port authorities (Felixstowe, Southampton) at least 24 hours in advance.',
                    'DG vessels must notify UK ports 24 hours before arrival with complete cargo manifests.',
                    'Advance notification to port authority is mandatory—submit DG details minimum 24 hours ahead.',
                    'Pre-arrival notification required for all dangerous goods entering UK ports.'
                ],
                isWarning: true
            },
            {
                title: 'GB CLP Compliance',
                descriptions: [
                    'Post-Brexit, the UK uses "GB CLP" (Classification, Labelling and Packaging) rules distinct from EU.',
                    'UK-specific GB CLP labeling requirements apply—EU CLP labels alone are not sufficient.',
                    'Dangerous goods must comply with GB CLP standards for the UK market.',
                    'Ensure your DG labeling meets GB CLP requirements, which differ from EU CLP post-Brexit.'
                ]
            },
            {
                title: 'EORI and CDS Entry',
                descriptions: [
                    'DG shipments require a valid GB EORI number and entry through the Customs Declaration Service.',
                    'All dangerous goods must be declared through CDS with your GB EORI number.',
                    'CDS declaration with EORI is mandatory for DG imports to the United Kingdom.',
                    'Enter your DG shipment through the CDS system using your registered GB EORI.'
                ]
            }
        ],
        airRules: [
            {
                title: 'CAA Spot Checks',
                descriptions: [
                    'The UK Civil Aviation Authority performs random spot-checks on DG paperwork from China to ensure Class matches MSDS.',
                    'Expect CAA inspections verifying your dangerous goods classification matches documentation.',
                    'Random CAA audits check that DG class declarations align exactly with Safety Data Sheets.',
                    'The CAA regularly inspects China-origin DG shipments for documentation accuracy.'
                ],
                isWarning: true
            },
            {
                title: 'Aerosol and Flammable Restrictions',
                descriptions: [
                    'The UK is particularly strict on aerosols and flammable liquids in air freight.',
                    'Enhanced scrutiny applies to aerosol products and flammable goods on UK-bound flights.',
                    'Aerosols and flammables face additional restrictions for air cargo into the UK.',
                    'Strict limits on aerosol quantities and flammable materials for UK air shipments.'
                ]
            },
            {
                title: 'Documentation Accuracy',
                descriptions: [
                    'UK authorities require exact matching between DG class declarations and MSDS details.',
                    'Your dangerous goods paperwork must precisely match the Safety Data Sheet specifications.',
                    'Any discrepancy between DGD and MSDS will result in cargo holds or rejection.',
                    'Ensure complete consistency between all DG documents to avoid UK customs issues.'
                ]
            }
        ],
        keyConsiderations: [
            'Post-Brexit GB CLP rules differ from EU CLP',
            '24-hour advance port notification required for DG',
            'CAA conducts random documentation audits',
            'Strict enforcement on aerosols and flammables'
        ]
    },
    'australia': {
        regulatoryBody: 'Civil Aviation Safety Authority & Australian Dangerous Goods Code',
        regulatoryAbbreviation: 'CASA/ADG',
        seaRules: [
            {
                title: 'BMSB and Chemical Stability',
                descriptions: [
                    'During Stink Bug Season (Sept–May), DG may require fumigation. Some chemicals react poorly to heat treatment—plan accordingly.',
                    'BMSB compliance can conflict with DG stability. Verify your chemicals can withstand fumigation heat.',
                    'Seasonal biosecurity requirements may require treatments that affect chemical stability.',
                    'Plan BMSB compliance carefully—ensure fumigation won\'t compromise your dangerous goods.'
                ],
                isWarning: true
            },
            {
                title: 'ADG Code Compliance',
                descriptions: [
                    'Australia follows the Australian Dangerous Goods Code which aligns with international standards.',
                    'All DG must comply with ADG Code requirements for packaging, labeling, and documentation.',
                    'ADG Code governs dangerous goods transport—ensure your shipment meets Australian standards.',
                    'Comply with ADG Code specifications for all hazardous materials entering Australia.'
                ]
            },
            {
                title: 'Biosecurity Inspection',
                descriptions: [
                    'DG shipments may face additional biosecurity inspection alongside safety verification.',
                    'Expect dual inspection for biosecurity and dangerous goods compliance at Australian ports.',
                    'Australian authorities check DG containers for both safety and quarantine concerns.',
                    'Biosecurity clearance required in addition to standard DG verification.'
                ]
            }
        ],
        airRules: [
            {
                title: 'CASA Battery Restrictions',
                descriptions: [
                    'Australia\'s CASA is extremely strict on lithium batteries. Even devices like iPads require Section II labeling.',
                    'Lithium batteries in equipment must meet strict CASA requirements with proper Wh labeling.',
                    'CASA enforces rigorous lithium battery rules—all devices need Section II compliance.',
                    'Strict Watt-hour limits and labeling required for any lithium batteries entering Australia.'
                ],
                isWarning: true
            },
            {
                title: 'Section II Requirements',
                descriptions: [
                    '"Lithium batteries contained in equipment" require specific Section II labeling and Watt-hour limits.',
                    'Section II marking mandatory for batteries packed with devices entering Australia.',
                    'Devices containing lithium batteries must display Section II labels with capacity ratings.',
                    'All equipment with batteries needs Section II compliance for Australian air freight.'
                ]
            },
            {
                title: 'Quantity Limitations',
                descriptions: [
                    'Australia imposes strict quantity limits on dangerous goods in air freight.',
                    'DG air shipments face per-package and per-shipment quantity restrictions.',
                    'Quantity limits apply—verify your DG volumes meet Australian air cargo maximums.',
                    'Check Australian quantity thresholds before shipping dangerous goods by air.'
                ]
            }
        ],
        keyConsiderations: [
            'BMSB season treatment may conflict with chemical stability',
            'CASA enforces strict lithium battery regulations',
            'Dual inspection for biosecurity and DG compliance',
            'Section II labeling required for all battery-containing devices'
        ]
    },
    'germany': {
        regulatoryBody: 'Federal Institute for Materials Research and Testing & EU Regulations',
        regulatoryAbbreviation: 'BAM/EU',
        seaRules: [
            {
                title: 'GHS German Language Labels',
                descriptions: [
                    'Germany requires GHS (Globally Harmonized System) labels in German if goods are being sold domestically.',
                    'DG sold in Germany must have German-language GHS hazard labels.',
                    'For German market sales, ensure all GHS labeling is translated to German.',
                    'German-language GHS compliance is mandatory for dangerous goods entering the retail market.'
                ],
                isWarning: true
            },
            {
                title: 'Hamburg/Bremerhaven Entry',
                descriptions: [
                    'Most China-to-Germany DG enters via Hamburg or Bremerhaven ports.',
                    'Plan your DG shipments through Hamburg or Bremerhaven—Germany\'s main hazmat ports.',
                    'These major ports have dedicated DG handling facilities and experienced personnel.',
                    'Hamburg and Bremerhaven offer specialized infrastructure for dangerous goods.'
                ]
            },
            {
                title: 'Technical Documentation',
                descriptions: [
                    'Germany requires comprehensive technical documentation for dangerous goods imports.',
                    'Be prepared to provide detailed technical files supporting your DG classification.',
                    'German authorities may request additional technical data beyond standard DG documents.',
                    'Comprehensive technical documentation demonstrates compliance with German safety standards.'
                ]
            }
        ],
        airRules: [
            {
                title: 'Overpack Requirements',
                descriptions: [
                    'If multiple DG boxes are on one pallet, the pallet must be labeled "OVERPACK" in letters at least 12mm high.',
                    'Overpacks combining multiple DG packages require proper labeling with minimum 12mm text.',
                    'Germany strictly enforces overpack marking—letters must be minimum 12mm height.',
                    'Multi-package pallets need "OVERPACK" labels meeting German size specifications.'
                ],
                isWarning: true
            },
            {
                title: 'Frankfurt Hub',
                descriptions: [
                    'Frankfurt (FRA) is the main air cargo hub for DG entering Germany.',
                    'Route your DG air freight through Frankfurt—Germany\'s primary hazmat air gateway.',
                    'FRA has extensive dangerous goods handling capabilities and expedited processing.',
                    'Frankfurt airport offers specialized facilities for dangerous goods clearance.'
                ]
            },
            {
                title: 'EU-Wide Compliance',
                descriptions: [
                    'DG entering Germany must comply with broader EU dangerous goods regulations.',
                    'European Union rules apply in addition to German national requirements.',
                    'Ensure your DG meets both German and EU-level regulatory standards.',
                    'Germany enforces EU dangerous goods directives alongside national rules.'
                ]
            }
        ],
        keyConsiderations: [
            'GHS labels must be in German for domestic sales',
            'Overpack labeling requires minimum 12mm letter height',
            'Hamburg and Bremerhaven are primary DG ports',
            'Frankfurt (FRA) is the main air cargo DG hub'
        ]
    },
    'netherlands': {
        regulatoryBody: 'Dutch Human Environment and Transport Inspectorate',
        regulatoryAbbreviation: 'ILT',
        seaRules: [
            {
                title: 'T1 Transit Document',
                descriptions: [
                    'DG landing in Rotterdam but destined elsewhere must have T1 Transit Documents for onward movement.',
                    'Use T1 transit paperwork if your DG is transshipping through Rotterdam to other EU countries.',
                    'T1 documentation required for DG transiting Netherlands to final EU destinations.',
                    'Rotterdam transshipment requires proper T1 transit documentation for dangerous goods.'
                ]
            },
            {
                title: 'ADR Compliance',
                descriptions: [
                    'The moment DG leaves Rotterdam by truck, it must comply with ADR (European Road Rules).',
                    'ADR road transport rules apply immediately when DG exits the port by ground transport.',
                    'Ensure ADR compliance for any dangerous goods moving overland from Dutch ports.',
                    'European road transport of DG requires ADR-compliant vehicles and documentation.'
                ],
                isWarning: true
            },
            {
                title: 'Rotterdam Gateway',
                descriptions: [
                    'Rotterdam is the "Entry Point" for most DG destined for the rest of Europe.',
                    'The Netherlands serves as the primary gateway for European dangerous goods logistics.',
                    'Rotterdam\'s facilities make it ideal for DG transshipment throughout Europe.',
                    'Most European DG shipments route through Rotterdam\'s specialized infrastructure.'
                ]
            }
        ],
        airRules: [
            {
                title: 'Schiphol DG Area',
                descriptions: [
                    'Amsterdam Schiphol has a dedicated DG Area with specialized handling capabilities.',
                    'Schiphol\'s dedicated dangerous goods zone offers expert handling and storage.',
                    'Route DG air cargo through Schiphol\'s specialized hazmat facilities.',
                    'AMS airport provides purpose-built infrastructure for dangerous goods processing.'
                ]
            },
            {
                title: 'Bonded DG Storage',
                descriptions: [
                    'The Netherlands offers bonded storage for dangerous goods—store hazardous chemicals without paying VAT/Duty until sold.',
                    'Utilize Dutch bonded warehousing to defer duties on stored dangerous goods.',
                    'Bonded storage allows DG to remain in Netherlands without immediate customs payment.',
                    'Strategic bonded storage options for hazardous materials pending distribution.'
                ]
            },
            {
                title: 'EU Distribution Hub',
                descriptions: [
                    'The Netherlands is excellent for DG distribution to other EU countries.',
                    'Use Dutch facilities as your base for distributing dangerous goods across Europe.',
                    'Netherlands offers efficient logistics for EU-wide DG distribution.',
                    'Schiphol and Rotterdam together provide comprehensive DG gateway services.'
                ]
            }
        ],
        keyConsiderations: [
            'Rotterdam is Europe\'s primary DG gateway port',
            'T1 transit documents required for onward EU shipment',
            'ADR compliance mandatory for road transport from ports',
            'Bonded storage available for deferred duty payment'
        ]
    }
};
// Default DG rules for countries not specifically listed
const defaultDGData = {
    regulatoryBody: 'National Transport Safety Authority',
    regulatoryAbbreviation: 'NTSA',
    seaRules: [
        {
            title: 'IMDG Code Compliance',
            descriptions: [
                'Sea freight dangerous goods must comply with the International Maritime Dangerous Goods Code.',
                'IMDG Code governs all maritime dangerous goods transport worldwide.',
                'Ensure your DG shipment meets IMDG requirements for packaging, marking, and documentation.',
                'International maritime DG standards apply to all ocean freight hazardous cargo.'
            ]
        },
        {
            title: 'Port Authority Notification',
            descriptions: [
                'Most ports require advance notification before dangerous goods vessel arrival.',
                'Notify port authorities of DG cargo ahead of vessel arrival.',
                'Pre-arrival DG declarations are typically required for port entry.',
                'Contact destination port for specific DG notification requirements.'
            ]
        },
        {
            title: 'Local Compliance',
            descriptions: [
                'National regulations may add requirements beyond international IMDG standards.',
                'Check destination country rules for additional DG compliance needs.',
                'Local authorities may have specific dangerous goods handling requirements.',
                'Verify national regulations complement IMDG Code compliance.'
            ]
        }
    ],
    airRules: [
        {
            title: 'IATA DGR Compliance',
            descriptions: [
                'Air freight dangerous goods must comply with IATA Dangerous Goods Regulations.',
                'IATA DGR is stricter than maritime rules—verify compliance for air transport.',
                'All DG air cargo must meet IATA requirements for quantities and packaging.',
                'Follow IATA DGR standards for dangerous goods on aircraft.'
            ]
        },
        {
            title: 'Quantity Restrictions',
            descriptions: [
                'Air freight has strict quantity limits for dangerous goods per package and shipment.',
                'IATA imposes tighter quantity restrictions than sea freight.',
                'Verify your DG quantities meet air cargo limitations.',
                'Quantity thresholds are significantly lower for air transport.'
            ]
        },
        {
            title: 'Lithium Battery Rules',
            descriptions: [
                'Lithium batteries face strict regulations for air transport worldwide.',
                'All lithium battery shipments require proper classification and labeling.',
                'Section II requirements apply to batteries contained in equipment.',
                'High-capacity batteries may be restricted to cargo aircraft only.'
            ]
        }
    ],
    keyConsiderations: [
        'IMDG Code governs sea freight dangerous goods',
        'IATA DGR applies stricter standards for air freight',
        'Lithium batteries face enhanced restrictions',
        'Contact destination customs for specific national requirements'
    ]
};
// Simple hash function for content variation
function simpleHash(str) {
    let hash = 0;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}
// Shuffle array based on seed (deterministic)
function shuffleWithSeed(arr, seed) {
    const result = [
        ...arr
    ];
    for(let i = result.length - 1; i > 0; i--){
        const j = (seed + i) % (i + 1);
        [result[i], result[j]] = [
            result[j],
            result[i]
        ];
    }
    return result;
}
function getDangerousGoodsRules(originCity, destinationCity, destinationCountry, freightType) {
    const normalizedCountry = destinationCountry.toLowerCase();
    const seed = simpleHash(`${originCity}-${destinationCity}-dg`);
    // Find matching country
    let countryData = defaultDGData;
    for (const [country, data] of Object.entries(countryDGData)){
        if (normalizedCountry.includes(country) || country.includes(normalizedCountry.split(' ')[0])) {
            countryData = data;
            break;
        }
    }
    // Generate rules with varied descriptions
    const rulesSource = freightType === 'sea' ? countryData.seaRules : countryData.airRules;
    const rules = rulesSource.map((rule, index)=>({
            title: rule.title,
            description: rule.descriptions[(seed + index) % rule.descriptions.length],
            isWarning: 'isWarning' in rule ? rule.isWarning : undefined
        }));
    // Shuffle the rules order based on route
    const shuffledRules = shuffleWithSeed(rules, seed);
    // Shuffle key considerations
    const shuffledConsiderations = shuffleWithSeed([
        ...countryData.keyConsiderations
    ], seed);
    return {
        regulatoryBody: countryData.regulatoryBody,
        regulatoryAbbreviation: countryData.regulatoryAbbreviation,
        seaRules: freightType === 'sea' ? shuffledRules : [],
        airRules: freightType === 'air' ? shuffledRules : [],
        keyConsiderations: shuffledConsiderations
    };
}
function getUniversalDGRequirements(originCity, destinationCity) {
    const seed = simpleHash(`${originCity}-${destinationCity}-dg-universal`);
    const requirements = universalDGRequirementsVariants.map((req, index)=>({
            title: req.title,
            description: req.descriptions[(seed + index) % req.descriptions.length]
        }));
    return shuffleWithSeed(requirements, seed);
}
function getDGSectionTitle(originCity, destinationCity, destinationCountry) {
    const seed = simpleHash(`${originCity}-${destinationCity}-dg-title`);
    const titles = [
        `Dangerous Goods Shipping to ${destinationCity}`,
        `Hazardous Materials: ${originCity} to ${destinationCity}`,
        `${destinationCountry} Dangerous Goods Requirements`,
        `Shipping Hazmat to ${destinationCity}`
    ];
    return titles[seed % titles.length];
}
function getDGIntroText(originCity, destinationCity, destinationCountry, freightType) {
    const seed = simpleHash(`${originCity}-${destinationCity}-dg-intro`);
    const codeType = freightType === 'sea' ? 'IMDG Code (International Maritime Dangerous Goods)' : 'IATA DGR (Dangerous Goods Regulations)';
    const strictnessNote = freightType === 'air' ? 'Air freight regulations are stricter than sea, with tighter quantity limits and enhanced battery restrictions.' : 'Sea freight allows larger quantities but requires careful planning for extended transit times.';
    const intros = [
        `Shipping dangerous goods from ${originCity} to ${destinationCity} requires compliance with ${codeType} standards and ${destinationCountry}-specific regulations. ${strictnessNote}`,
        `Hazardous materials shipments to ${destinationCity} are governed by ${codeType}. ${strictnessNote}`,
        `${destinationCountry} has specific requirements for dangerous goods in addition to international ${codeType} standards. ${strictnessNote}`,
        `Transporting dangerous goods from ${originCity} requires careful compliance with ${codeType} and ${destinationCountry} import rules. ${strictnessNote}`
    ];
    return intros[seed % intros.length];
}
function getDGConsiderationsTitle(destinationCountry) {
    const seed = simpleHash(destinationCountry + '-dg-considerations');
    const titles = [
        `${destinationCountry} DG Shipping Considerations`,
        `Key Points for ${destinationCountry} Hazmat`,
        `${destinationCountry} Dangerous Goods Notes`,
        `Important ${destinationCountry} DG Factors`
    ];
    return titles[seed % titles.length];
}
}),
"[project]/src/lib/utils/shippingRisks.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shipping risks and challenges by country and freight type
__turbopack_context__.s([
    "getRisksCTAText",
    ()=>getRisksCTAText,
    "getRisksIntroText",
    ()=>getRisksIntroText,
    "getRisksSectionTitle",
    ()=>getRisksSectionTitle,
    "getSeverityClasses",
    ()=>getSeverityClasses,
    "getSeverityLabel",
    ()=>getSeverityLabel,
    "getShippingRisks",
    ()=>getShippingRisks
]);
// Country-specific shipping risks with description variants
const countryRisksData = {
    'united states': {
        seaRisks: [
            {
                title: 'West Coast Port Congestion',
                descriptions: [
                    'Los Angeles and Long Beach frequently experience vessel "bunching," where multiple ships arrive simultaneously, causing delays that can stretch for weeks.',
                    'LA/Long Beach ports often see ships stacking up at anchor—when congestion peaks, containers can sit for 2-3 weeks before unloading.',
                    'West Coast ports are prone to severe backlogs. Vessel bunching at LA/Long Beach can add weeks to your delivery timeline.',
                    'The busiest US ports (LA and Long Beach) regularly face congestion spikes that create multi-week delays for incoming cargo.'
                ],
                severity: 'high'
            },
            {
                title: 'UFLPA Seizure Risk',
                descriptions: [
                    'US Customs (CBP) aggressively seizes cargo suspected of links to forced labor in Xinjiang. Without proof of raw material sourcing, your shipment may be forfeited.',
                    'The Uyghur Forced Labor Prevention Act empowers CBP to seize goods that cannot prove supply chain transparency—cargo can be permanently confiscated.',
                    'CBP is actively enforcing UFLPA compliance. If your supplier cannot document the origin of raw materials, expect potential seizure and forfeiture.',
                    'Forced labor concerns under UFLPA mean any goods with Xinjiang connections face seizure. Supply chain documentation is now mandatory.'
                ],
                severity: 'high'
            },
            {
                title: 'Panama Canal Restrictions',
                descriptions: [
                    'For East Coast deliveries (NYC, Savannah), drought conditions in the Panama Canal can impose weight restrictions or force diversions around South America, adding 15+ days.',
                    'Low water levels in the Panama Canal are causing ships to either lighten loads or reroute via Cape Horn—expect potential delays of two weeks or more to East Coast ports.',
                    'Panama Canal drought conditions mean East Coast-bound cargo may face transit restrictions, with some vessels adding 15+ days by sailing around South America.',
                    'East Coast shipments face Panama Canal bottlenecks due to drought. Weight limits or Cape Horn diversions can extend transit by over two weeks.'
                ],
                severity: 'medium'
            }
        ],
        airRisks: [
            {
                title: 'ACAS Security Holds',
                descriptions: [
                    'Air Cargo Advance Screening (ACAS) frequently triggers security holds at JFK, LAX, and ORD, causing 2-3 day delays for inspected shipments.',
                    'US customs security screening under ACAS is causing increased holds at major airports—expect potential 2-3 day delays if your cargo is flagged.',
                    'High-frequency security scrutiny through ACAS means air cargo at LAX, JFK, or Chicago O\'Hare can be held for 2-3 days for additional screening.',
                    'ACAS security protocols are adding delays at major US airports. Flagged shipments face 2-3 day holds for inspection at JFK, LAX, and ORD.'
                ],
                severity: 'medium'
            },
            {
                title: 'Space Volatility & Rate Spikes',
                descriptions: [
                    'During major product launches (like Apple iPhone releases), tech giants buy up cargo space, causing rates for regular shippers to triple overnight.',
                    'Air freight capacity can disappear instantly during big tech launches. When Apple or similar companies ship, expect rates to spike 2-3x with limited availability.',
                    'Cargo space volatility is extreme—a single iPhone launch can triple air freight rates overnight as capacity gets absorbed by major shippers.',
                    'Tech product releases create massive space shortages. Regular shippers face rate increases of 200-300% when major companies book capacity.'
                ],
                severity: 'medium'
            }
        ]
    },
    'canada': {
        seaRisks: [
            {
                title: 'Rail Network Bottlenecks',
                descriptions: [
                    'Most sea cargo landing in Vancouver or Prince Rupert must travel by rail to Toronto or Montreal. Winter weather or labor strikes at CN/CPKC can freeze your entire supply chain.',
                    'Canadian rail is the lifeline for West Coast ports—any disruption from weather or strikes at CN/CPKC railways can halt cargo movement for weeks.',
                    'The rail dependency from Vancouver/Prince Rupert to Eastern Canada creates vulnerability. Winter storms or labor disputes regularly cause supply chain freezes.',
                    'Sea cargo at West Coast ports faces rail bottleneck risks. CN/CPKC disruptions from strikes or weather can strand containers for extended periods.'
                ],
                severity: 'high'
            },
            {
                title: 'Winter Port Closures',
                descriptions: [
                    'Extreme ice conditions in Eastern Canada can delay arrivals at the Port of Montreal, sometimes for days or weeks during harsh winter months.',
                    'The Port of Montreal faces seasonal ice challenges—severe winter conditions can close or restrict port operations for extended periods.',
                    'Eastern Canadian ports contend with ice-related delays. Montreal in particular may see operations disrupted during extreme winter weather.',
                    'Winter ice poses real threats to Eastern Canadian ports. Montreal arrivals can be delayed significantly when ice conditions turn severe.'
                ],
                severity: 'medium'
            }
        ],
        airRisks: [
            {
                title: 'Limited Direct Capacity',
                descriptions: [
                    'Compared to the US, fewer direct cargo flights operate from China to Canada. Cargo often transits through US hubs (like Chicago), creating double-handling risks and potential damage.',
                    'Canada lacks the direct air cargo capacity of its southern neighbor—most shipments transit through US airports, increasing handling and damage risk.',
                    'Direct China-Canada air cargo routes are limited. Transshipment through US hubs adds handling stages and increases the chance of cargo damage.',
                    'Air freight to Canada frequently routes through American airports due to limited direct capacity, exposing cargo to additional handling and delays.'
                ],
                severity: 'medium'
            },
            {
                title: 'Strict Goods Description Requirements',
                descriptions: [
                    'Canada is very strict on "Description of Goods." Vague terms like "Sample" or "Parts" will trigger an immediate air freight hold and delays.',
                    'Canadian customs demand precise cargo descriptions—generic terms cause immediate holds. Every item must be clearly and accurately described.',
                    'Imprecise goods descriptions (like "Sample" or "Parts") guarantee delays at Canadian customs. Detailed, accurate descriptions are mandatory.',
                    'CBSA requires explicit goods descriptions for air cargo. Any vagueness in documentation will result in holds and clearance delays.'
                ],
                severity: 'medium'
            }
        ]
    },
    'germany': {
        seaRisks: [
            {
                title: 'Red Sea/Suez Canal Diversions',
                descriptions: [
                    'Most ships from China to Hamburg are currently avoiding the Suez Canal due to conflict. Routing around Africa (Cape of Good Hope) adds 10-14 days and significant fuel surcharges.',
                    'Ongoing Red Sea tensions mean vessels are sailing around Africa instead of through Suez—expect 10-14 extra days transit time plus substantial surcharges.',
                    'Suez Canal diversions are impacting Germany-bound cargo. Ships rerouting via Cape of Good Hope face 10-14 day delays and steep fuel cost increases.',
                    'Conflict-related Suez avoidance is the new normal. Hamburg-bound cargo from China now takes 10-14 days longer via the Cape of Good Hope route.'
                ],
                severity: 'high'
            },
            {
                title: 'Strict Product Compliance',
                descriptions: [
                    'German customs are the "police" of the EU. If a toy or electronic item lacks a CE mark or proper manuals, the entire container can be ordered for destruction.',
                    'Germany enforces EU product standards rigorously—missing CE marks, improper labeling, or inadequate documentation can result in container-wide destruction orders.',
                    'Non-compliant products face harsh treatment at German customs. A single item without proper CE marking can put your entire shipment at risk of destruction.',
                    'German authorities take product compliance seriously. Toys, electronics, and other regulated goods without proper CE marks face confiscation or destruction.'
                ],
                severity: 'high'
            }
        ],
        airRisks: [
            {
                title: 'Night Flight Bans',
                descriptions: [
                    'Frankfurt (FRA) has strict noise regulations and night flight bans. If a flight from China is delayed by just 1 hour, it may be forced to land elsewhere or wait 12 hours.',
                    'FRA\'s noise curfew means even minor delays can cause 12-hour holds or diversions to other airports—timing is critical for Frankfurt-bound air cargo.',
                    'Night landing restrictions at Frankfurt create scheduling fragility. A one-hour delay from China can result in a 12-hour wait or forced diversion.',
                    'German airports enforce strict noise curfews. Late arrivals at Frankfurt face either extended ground holds or costly diversions to alternate airports.'
                ],
                severity: 'medium'
            },
            {
                title: 'High-Value Cargo Theft Risk',
                descriptions: [
                    'Air freight often contains electronics, making it a higher target for organized theft at airport warehouses. High-value shipments require extra security measures.',
                    'Airport warehouse theft is a genuine concern in Europe. Electronics and valuable goods in air cargo face elevated risk from organized criminal groups.',
                    'Valuable air cargo is vulnerable to theft at transit points. Electronics shipments through German airports warrant enhanced security and insurance coverage.',
                    'Organized theft targeting air cargo is a documented risk. High-value electronics moving through airport warehouses require additional protective measures.'
                ],
                severity: 'medium'
            }
        ]
    },
    'netherlands': {
        seaRisks: [
            {
                title: 'Red Sea/Suez Canal Diversions',
                descriptions: [
                    'Most ships from China to Rotterdam are currently avoiding the Suez Canal due to conflict. Routing around Africa (Cape of Good Hope) adds 10-14 days and massive fuel surcharges.',
                    'Red Sea tensions are forcing Rotterdam-bound vessels to sail around Africa—expect 10-14 additional transit days plus significant emergency surcharges.',
                    'Suez Canal diversions significantly impact Rotterdam arrivals. The Cape of Good Hope route adds nearly two weeks and substantial fuel cost increases.',
                    'Ongoing conflict has made Suez transit unreliable. Rotterdam-bound cargo from China now faces 10-14 day delays via the African Cape route.'
                ],
                severity: 'high'
            },
            {
                title: 'Strict EU Product Standards',
                descriptions: [
                    'Dutch customs enforce EU standards rigorously. Products lacking CE marks, proper manuals, or compliant packaging can be held, rejected, or destroyed.',
                    'The Netherlands serves as an EU gateway with strict compliance enforcement. Non-conforming products face seizure, rejection, or destruction orders.',
                    'As a major EU entry point, Dutch customs are unforgiving on compliance. Missing CE marks or documentation errors can doom your entire shipment.',
                    'Rotterdam\'s role as EU hub means strict product scrutiny. Compliance failures result in cargo holds, expensive remediation, or outright destruction.'
                ],
                severity: 'high'
            }
        ],
        airRisks: [
            {
                title: 'Night Flight Restrictions',
                descriptions: [
                    'Schiphol (AMS) has strict noise regulations and night flight bans. A delayed flight from China may be forced to land elsewhere or wait until morning.',
                    'Amsterdam Schiphol\'s night curfew creates scheduling risks—late arrivals from China face 12-hour holds or costly diversions to alternate airports.',
                    'Strict noise regulations at AMS mean timing is critical. Flight delays can trigger forced diversions or overnight holds until operations resume.',
                    'Schiphol\'s night landing restrictions add fragility to schedules. Even minor delays from China can result in significant cargo delays or reroutings.'
                ],
                severity: 'medium'
            },
            {
                title: 'Warehouse Security Concerns',
                descriptions: [
                    'High-value air cargo, especially electronics, faces elevated theft risk at airport warehouses. Consider enhanced security and comprehensive insurance.',
                    'Airport facility theft is a documented concern in the region. Electronics and valuable goods warrant additional protective measures and insurance.',
                    'Valuable air freight is a target for organized theft. High-value shipments through Schiphol should include extra security provisions.',
                    'Warehouse security at major airports requires attention. Valuable cargo, particularly electronics, benefits from enhanced protection and coverage.'
                ],
                severity: 'medium'
            }
        ]
    },
    'united kingdom': {
        seaRisks: [
            {
                title: 'Post-Brexit Port Congestion',
                descriptions: [
                    'Felixstowe and Southampton still face occasional backlogs due to new customs systems (CDS). Additional documentation requirements create processing delays.',
                    'Brexit-era customs changes continue to cause friction. CDS system issues at major UK ports lead to periodic congestion and clearance delays.',
                    'UK ports are still adapting to post-Brexit realities. New customs procedures at Felixstowe and Southampton create intermittent backlogs.',
                    'The transition to CDS customs systems hasn\'t been seamless. UK ports experience periodic congestion as the new processes continue bedding in.'
                ],
                severity: 'medium'
            },
            {
                title: 'High Demurrage Fees',
                descriptions: [
                    'UK ports have very high storage fees. If your customs broker makes a mistake on VAT/Duty filing, your container can rack up £150+ per day in demurrage.',
                    'Demurrage costs at UK ports are punishing—£150+ daily. Any clearance delays from documentation errors quickly become expensive.',
                    'A filing error at UK customs can trigger a costly demurrage trap. With fees exceeding £150 per day, even small mistakes have big financial consequences.',
                    'UK port storage fees are among the highest. Customs filing mistakes can lead to £150+ daily charges while issues are resolved.'
                ],
                severity: 'high'
            }
        ],
        airRisks: [
            {
                title: 'Heathrow Congestion',
                descriptions: [
                    'Heathrow handles the vast majority of UK air cargo with aging infrastructure. Truck wait times to collect cargo can exceed 8-12 hours.',
                    'LHR\'s dominance in UK air cargo creates bottlenecks. Old infrastructure means truck collection queues of 8-12 hours are not uncommon.',
                    'Heathrow\'s cargo facilities strain under volume. Expect extended truck wait times—often 8-12 hours—to retrieve your shipments.',
                    'UK air cargo funnels through congested Heathrow. Collection delays of 8-12 hours are a regular occurrence due to infrastructure limitations.'
                ],
                severity: 'high'
            },
            {
                title: 'Strict Lithium Battery Requirements',
                descriptions: [
                    'UK airlines are among the strictest regarding lithium batteries. Even with correct MSDS documentation, slight packaging errors will ground your cargo.',
                    'Battery compliance at UK airports is exceptionally rigorous. Minor packaging deviations—even with proper paperwork—result in cargo rejection.',
                    'Lithium battery shipments face intense scrutiny from UK carriers. Perfect packaging is mandatory; any error grounds the shipment regardless of documentation.',
                    'UK airlines maintain zero tolerance on battery packaging. A slight deviation from requirements will prevent your cargo from flying, even with valid MSDS.'
                ],
                severity: 'high'
            }
        ]
    },
    'australia': {
        seaRisks: [
            {
                title: 'Brown Marmorated Stink Bug (BMSB)',
                descriptions: [
                    'From September to May, Australia is vigilant against the Brown Marmorated Stink Bug. Untreated containers from China will be turned away or held for expensive fumigation.',
                    'BMSB season (Sept-May) means mandatory treatment. If your container isn\'t fumigated in China or upon arrival, expect rejection or costly quarantine.',
                    'Australia\'s BMSB biosecurity measures are strict. During high-risk season, untreated cargo faces turning away at port or mandatory fumigation.',
                    'Biosecurity concerns over BMSB require proactive treatment. Containers arriving during season without proper treatment face rejection or expensive fumigation.'
                ],
                severity: 'high'
            },
            {
                title: 'End-of-Line Vessel Bunching',
                descriptions: [
                    'Because Australia is at the "end of the line," delays in Asian ports often cause ships to arrive all at once, overwhelming Australian ports.',
                    'Australia\'s position at the end of shipping routes means port congestion spikes when Asian delays cause multiple vessels to bunch up on arrival.',
                    'Vessel bunching is an ongoing challenge for Australian ports. As the final destination on many routes, delays upstream cause simultaneous arrivals.',
                    'Australian ports suffer from cascading delays. When ships are held up in Asia, they arrive together, creating sudden and severe congestion.'
                ],
                severity: 'medium'
            }
        ],
        airRisks: [
            {
                title: 'Limited Backup Flight Options',
                descriptions: [
                    'Flights from China to Australia are long. If there\'s a mechanical issue or cancellation, fewer backup flights are available compared to busy China-Europe routes.',
                    'The long distance from China means limited alternatives if flights are cancelled. Mechanical issues can cause multi-day delays due to scarce backup capacity.',
                    'Australia\'s distance from China creates vulnerability. Flight disruptions have fewer recovery options compared to higher-frequency routes to Europe.',
                    'Route distance limits contingency options. A cancelled China-Australia flight may mean waiting days for the next available cargo capacity.'
                ],
                severity: 'medium'
            },
            {
                title: 'Air Cargo Biosecurity Screening',
                descriptions: [
                    'Even air cargo undergoes X-ray screening for biosecurity. Any organic matter (seeds, soil) found in a shipment can lead to destruction of the entire cargo.',
                    'Australian biosecurity applies to air freight too. X-ray detection of organic contamination (seeds, soil) triggers immediate cargo destruction.',
                    'Air cargo faces strict quarantine screening in Australia. Discovery of organic matter during inspection can result in complete shipment destruction.',
                    'Biosecurity X-rays catch everything. Seeds, soil, or any organic contamination in your air cargo means the entire shipment may be destroyed.'
                ],
                severity: 'high'
            }
        ]
    }
};
// Default risks for countries not specifically listed
const defaultRisksData = {
    seaRisks: [
        {
            title: 'Transit Delays',
            descriptions: [
                'International shipping routes can experience unpredictable delays due to port congestion, weather, or operational issues.',
                'Sea freight transit times are estimates—port backlogs, weather events, and operational challenges can extend delivery timelines.',
                'Expect potential delays in ocean freight due to various factors including port efficiency, weather conditions, and vessel schedules.',
                'Maritime shipping involves inherent timing uncertainty. Port conditions and weather can impact your cargo\'s arrival date.'
            ],
            severity: 'medium'
        },
        {
            title: 'Documentation Requirements',
            descriptions: [
                'Each country has specific customs documentation requirements. Incomplete or inaccurate paperwork can cause clearance delays.',
                'Customs documentation standards vary by destination. Ensuring accuracy and completeness is essential to avoid clearance issues.',
                'Proper documentation is critical for smooth customs clearance. Missing or incorrect paperwork leads to holds and delays.',
                'Every destination has unique paperwork requirements. Documentation errors are a leading cause of customs delays.'
            ],
            severity: 'medium'
        }
    ],
    airRisks: [
        {
            title: 'Capacity Fluctuations',
            descriptions: [
                'Air freight capacity and rates can fluctuate significantly based on seasonal demand and market conditions.',
                'Air cargo space availability varies with demand. Peak seasons and market events can rapidly change rates and availability.',
                'Expect air freight capacity and pricing to shift based on global demand patterns and seasonal shipping volumes.',
                'Air cargo markets are dynamic. Capacity constraints during busy periods can affect both availability and pricing.'
            ],
            severity: 'medium'
        },
        {
            title: 'Customs Inspection Delays',
            descriptions: [
                'Air cargo may be selected for security screening or customs inspection, causing potential delays at destination airports.',
                'Random inspections and security screening can hold air cargo at customs. Factor in potential delays for time-sensitive shipments.',
                'Air freight clearance can be delayed by security checks or customs examinations. Build buffer time into critical schedules.',
                'Customs and security protocols may delay air cargo clearance. Inspections are routine but can impact delivery timing.'
            ],
            severity: 'medium'
        }
    ]
};
// Simple hash function for content variation
function simpleHash(str) {
    let hash = 0;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}
// Shuffle array based on seed (deterministic)
function shuffleWithSeed(arr, seed) {
    const result = [
        ...arr
    ];
    for(let i = result.length - 1; i > 0; i--){
        const j = (seed + i) % (i + 1);
        [result[i], result[j]] = [
            result[j],
            result[i]
        ];
    }
    return result;
}
function getShippingRisks(originCity, destinationCity, destinationCountry, freightType) {
    const normalizedCountry = destinationCountry.toLowerCase();
    const seed = simpleHash(`${originCity}-${destinationCity}-risks`);
    // Find matching country
    let countryData = defaultRisksData;
    for (const [country, data] of Object.entries(countryRisksData)){
        if (normalizedCountry.includes(country) || country.includes(normalizedCountry.split(' ')[0])) {
            countryData = data;
            break;
        }
    }
    // Generate risks with varied descriptions
    const risksSource = freightType === 'sea' ? countryData.seaRisks : countryData.airRisks;
    const risks = risksSource.map((risk, index)=>({
            title: risk.title,
            description: risk.descriptions[(seed + index) % risk.descriptions.length],
            severity: risk.severity
        }));
    // Shuffle the risks order based on route
    return shuffleWithSeed(risks, seed);
}
function getRisksSectionTitle(originCity, destinationCity, destinationCountry, freightType) {
    const seed = simpleHash(`${originCity}-${destinationCity}-risk-title`);
    const transportType = freightType === 'sea' ? 'Sea Freight' : 'Air Freight';
    const titles = [
        `${transportType} Risks to ${destinationCountry}`,
        `Potential Challenges: ${originCity} to ${destinationCity}`,
        `${destinationCountry} Shipping Risks to Consider`,
        `What Could Go Wrong: ${transportType} to ${destinationCity}`
    ];
    return titles[seed % titles.length];
}
function getRisksIntroText(originCity, destinationCity, destinationCountry, freightType) {
    const seed = simpleHash(`${originCity}-${destinationCity}-risk-intro`);
    const transportType = freightType === 'sea' ? 'sea freight' : 'air freight';
    const intros = [
        `Every ${transportType} route has unique challenges. Here are the current risks for shipments from ${originCity} to ${destinationCity} that you should be aware of.`,
        `Understanding potential obstacles helps you plan better. These are the key ${transportType} risks affecting the ${originCity} to ${destinationCountry} corridor.`,
        `Being prepared means knowing what could go wrong. Here are the ${transportType} risks specific to shipments arriving in ${destinationCountry}.`,
        `Successful shipping requires risk awareness. These challenges commonly affect ${transportType} from ${originCity} to ${destinationCity}.`
    ];
    return intros[seed % intros.length];
}
function getRisksCTAText(destinationCountry, freightType) {
    const seed = simpleHash(`${destinationCountry}-${freightType}-cta`);
    const transportType = freightType === 'sea' ? 'sea freight' : 'air freight';
    const ctas = [
        {
            heading: 'Need Help Navigating These Risks?',
            description: `Our team specializes in ${transportType} to ${destinationCountry}. We help shippers avoid delays, stay compliant, and protect their cargo.`
        },
        {
            heading: 'Don\'t Let These Challenges Derail Your Shipment',
            description: `We handle ${transportType} to ${destinationCountry} daily and know how to mitigate these risks. Let us help you ship with confidence.`
        },
        {
            heading: 'We Can Help You Ship Safely',
            description: `Our experience with ${destinationCountry} ${transportType} means we anticipate problems before they occur. Get expert guidance for your shipment.`
        },
        {
            heading: 'Avoid These Pitfalls With Expert Support',
            description: `Shipping to ${destinationCountry} doesn't have to be risky. Our team knows these challenges inside out and can guide you through them.`
        }
    ];
    return ctas[seed % ctas.length];
}
function getSeverityLabel(severity) {
    const labels = {
        high: 'High Risk',
        medium: 'Moderate Risk',
        low: 'Low Risk'
    };
    return labels[severity];
}
function getSeverityClasses(severity) {
    const classes = {
        high: {
            bg: 'bg-red-50',
            text: 'text-red-700',
            border: 'border-red-200',
            icon: 'text-red-600'
        },
        medium: {
            bg: 'bg-amber-50',
            text: 'text-amber-700',
            border: 'border-amber-200',
            icon: 'text-amber-600'
        },
        low: {
            bg: 'bg-blue-50',
            text: 'text-blue-700',
            border: 'border-blue-200',
            icon: 'text-blue-600'
        }
    };
    return classes[severity];
}
}),
"[project]/src/lib/utils/seaFreightContent.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSeaFreightBenefits",
    ()=>getSeaFreightBenefits,
    "getSeaFreightContent",
    ()=>getSeaFreightContent,
    "getSeaFreightRates",
    ()=>getSeaFreightRates,
    "getSeaFreightSectionTitles",
    ()=>getSeaFreightSectionTitles,
    "getSeaFreightTransitTimes",
    ()=>getSeaFreightTransitTimes,
    "hasSeaFreightContent",
    ()=>hasSeaFreightContent
]);
/**
 * Sea Freight Generated Content
 *
 * This module provides generated content for sea freight route pages.
 * Content is loaded from a pre-generated JSON file created by the
 * scripts/generate-route-content.ts script using the Claude API.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$generated$2f$sea$2d$freight$2d$content$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/data/generated/sea-freight-content.json (json)");
;
// Type assertion for the imported JSON
const contentData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$generated$2f$sea$2d$freight$2d$content$2e$json__$28$json$29$__["default"];
function getSeaFreightContent(originCity, destinationCity) {
    const slug = `${originCity.toLowerCase().replace(/\s+/g, '-')}-to-${destinationCity.toLowerCase().replace(/\s+/g, '-')}`;
    return contentData[slug] || null;
}
function getSeaFreightBenefits(originCity, destinationCity) {
    const content = getSeaFreightContent(originCity, destinationCity);
    return content?.benefits || null;
}
function getSeaFreightRates(originCity, destinationCity) {
    const content = getSeaFreightContent(originCity, destinationCity);
    return content?.rates || null;
}
function getSeaFreightTransitTimes(originCity, destinationCity) {
    const content = getSeaFreightContent(originCity, destinationCity);
    return content?.transitTimes || null;
}
function hasSeaFreightContent(originCity, destinationCity) {
    return getSeaFreightContent(originCity, destinationCity) !== null;
}
function getSeaFreightSectionTitles(originCity, destinationCity) {
    return {
        benefits: `Benefits of Sea Freight Shipping from ${originCity} to ${destinationCity}`,
        rates: `Sea Freight Shipping Rates from ${originCity} to ${destinationCity}`,
        transitTimes: `Transit Times for Sea Freight from ${originCity} to ${destinationCity}`
    };
}
}),
];

//# sourceMappingURL=src_lib_utils_24453e09._.js.map