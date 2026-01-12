// Common goods shipped by country with multiple description variants for content variety

export interface GoodsCategory {
  category: string;
  items: string[];
}

export interface CountryGoods {
  country: string;
  categories: GoodsCategory[];
}

// Country-specific goods data
const countryGoodsData: Record<string, GoodsCategory[]> = {
  'United States': [
    {
      category: 'Electronics',
      items: [
        'Smartphones and tablets, laptops and charging accessories',
        'Consumer electronics including phones, computers, and lithium-ion batteries',
        'Mobile devices, personal computers, and electronic components',
        'High-tech gadgets from smartphones to industrial circuit boards',
      ],
    },
    {
      category: 'Home & Office',
      items: [
        'Flat-pack furniture, office chairs, LED lighting, and bedding',
        'Ready-to-assemble furniture for home and office spaces',
        'Modern furniture, ergonomic office equipment, and home lighting',
        'IKEA-style furniture, LED fixtures, and mattresses',
      ],
    },
    {
      category: 'Industrial',
      items: [
        'HVAC systems, solar panels, and CNC manufacturing tools',
        'Power generators, industrial machinery, and HVAC equipment',
        'Solar energy products, manufacturing equipment, and power systems',
        'Heavy machinery, renewable energy components, and industrial tools',
      ],
    },
    {
      category: 'Retail & Fashion',
      items: [
        'Fast-fashion apparel, footwear, and synthetic textiles',
        'Sneakers, casual wear, and fashion accessories',
        'Trendy clothing, athletic footwear, and textile goods',
        'Consumer fashion including shoes, apparel, and accessories',
      ],
    },
    {
      category: 'Toys & Recreation',
      items: [
        'Video game consoles, STEM kits, and outdoor sports equipment',
        'E-bikes, electric scooters, and educational toys',
        'Gaming accessories, plush toys, and recreational gear',
        'Sports equipment, hobby electronics, and children\'s toys',
      ],
    },
    {
      category: 'Dangerous Goods',
      items: [
        'Lithium batteries and chemicals (requires MSDS documentation)',
        'Hazardous materials including batteries and industrial chemicals',
        'Regulated items such as lithium-ion cells and chemical compounds',
        'DG cargo including battery packs and chemical products',
      ],
    },
  ],
  'Canada': [
    {
      category: 'Machinery',
      items: [
        'Construction equipment parts, agricultural machinery, and pumps',
        'Industrial pumps, farming equipment, and heavy machinery components',
        'Manufacturing parts, construction tools, and agricultural systems',
        'Heavy-duty machinery, industrial components, and equipment parts',
      ],
    },
    {
      category: 'Consumer Goods',
      items: [
        'Small kitchen appliances like air fryers, blenders, and organizers',
        'Home appliances, cooking tools, and storage solutions',
        'Kitchen gadgets, silicone utensils, and household items',
        'Countertop appliances, food processors, and home organization',
      ],
    },
    {
      category: 'Textiles',
      items: [
        'Winter outerwear, heavy-duty fabrics, and upholstery materials',
        'Cold-weather apparel, insulated fabrics, and home textiles',
        'Seasonal clothing, durable textiles, and furniture fabrics',
        'Thermal wear, protective fabrics, and interior upholstery',
      ],
    },
    {
      category: 'Plastics & Materials',
      items: [
        'Plastic packaging, storage containers, and PVC components',
        'Building materials, storage bins, and packaging supplies',
        'Construction plastics, household containers, and PVC products',
        'Industrial plastics, packaging solutions, and building materials',
      ],
    },
    {
      category: 'E-commerce',
      items: [
        'Phone cases, stationery, and novelty gift items',
        'Small commodities, tech accessories, and gift products',
        'Yiwu-sourced goods including cases, office supplies, and gifts',
        'Consumer accessories, school supplies, and promotional items',
      ],
    },
    {
      category: 'Dangerous Goods',
      items: [
        'Lithium batteries and chemicals (requires MSDS documentation)',
        'Hazardous materials including batteries and industrial chemicals',
        'Regulated items such as lithium-ion cells and chemical compounds',
        'DG cargo including battery packs and chemical products',
      ],
    },
  ],
  'United Kingdom': [
    {
      category: 'E-commerce & Retail',
      items: [
        'Phone accessories, beauty tools, and LED strip lighting',
        'Tech gadgets, cosmetic devices, and smart home accessories',
        'Mobile cases, facial rollers, and decorative lighting',
        'Consumer electronics accessories and personal care tools',
      ],
    },
    {
      category: 'Fitness & Health',
      items: [
        'Resistance bands, yoga mats, dumbbells, and wearable tech',
        'Home gym equipment, exercise accessories, and fitness trackers',
        'Workout gear, wellness products, and smart fitness devices',
        'Athletic equipment, exercise mats, and health monitoring devices',
      ],
    },
    {
      category: 'Home Goods',
      items: [
        'Minimalist furniture, garden furniture, and kitchenware',
        'Modern home decor, outdoor seating, and cooking tools',
        'Contemporary furniture, patio sets, and kitchen accessories',
        'Scandinavian-style decor, garden items, and household goods',
      ],
    },
    {
      category: 'Pet Supplies',
      items: [
        'Cat trees, grooming gloves, and automatic pet feeders',
        'Pet furniture, care accessories, and smart feeding devices',
        'Animal supplies, grooming tools, and electronic pet products',
        'Pet care items, scratching posts, and automated feeders',
      ],
    },
    {
      category: 'Technology',
      items: [
        'CCTV cameras, PC components, and smart home devices',
        'Security systems, computer parts, and IoT gadgets',
        'Surveillance equipment, gaming components, and home automation',
        'Smart security, computer hardware, and connected devices',
      ],
    },
    {
      category: 'Dangerous Goods',
      items: [
        'Lithium batteries and chemicals (requires MSDS documentation)',
        'Hazardous materials including batteries and industrial chemicals',
        'Regulated items such as lithium-ion cells and chemical compounds',
        'DG cargo including battery packs and chemical products',
      ],
    },
  ],
  'Australia': [
    {
      category: 'Construction',
      items: [
        'Steel structures, aluminum window frames, and flooring materials',
        'Building components, metal frames, and SPC/laminate flooring',
        'Structural steel, architectural aluminum, and floor coverings',
        'Construction materials, window systems, and interior flooring',
      ],
    },
    {
      category: 'Vehicles & Parts',
      items: [
        'Electric vehicles (BYD/MG), spare parts, and tires',
        'EVs, automotive components, and replacement parts',
        'New energy vehicles, car accessories, and tire products',
        'Chinese EVs, auto parts, and vehicle maintenance items',
      ],
    },
    {
      category: 'Appliances',
      items: [
        'White goods including fridges, washing machines, and AC units',
        'Large appliances, laundry equipment, and climate control',
        'Refrigerators, washers, dryers, and air conditioning systems',
        'Major household appliances and HVAC equipment',
      ],
    },
    {
      category: 'Apparel',
      items: [
        'Summer fashion, swimwear, and Hi-Vis protective workwear',
        'Seasonal clothing, beachwear, and safety apparel',
        'Warm-weather fashion, swim gear, and work uniforms',
        'Casual wear, resort clothing, and industrial safety gear',
      ],
    },
    {
      category: 'Outdoor',
      items: [
        'Camping gear, gazebos, and marine/boating accessories',
        'Outdoor recreation equipment, shelters, and nautical supplies',
        'Adventure gear, outdoor structures, and boat accessories',
        'Camping supplies, patio covers, and water sports equipment',
      ],
    },
    {
      category: 'Dangerous Goods',
      items: [
        'Lithium batteries and chemicals (requires MSDS documentation)',
        'Hazardous materials including batteries and industrial chemicals',
        'Regulated items such as lithium-ion cells and chemical compounds',
        'DG cargo including battery packs and chemical products',
      ],
    },
  ],
  'Germany': [
    {
      category: 'Automotive',
      items: [
        'EV battery cells, electronic sensors, and cabin components',
        'Vehicle batteries, automotive electronics, and interior parts',
        'Electric vehicle components, sensor systems, and car interiors',
        'Battery technology, automotive sensors, and vehicle modules',
      ],
    },
    {
      category: 'Advanced Tech',
      items: [
        'Semiconductors, circuit boards, and telecom infrastructure',
        'Chips, PCBs, and communications equipment',
        'Electronic components, microprocessors, and network hardware',
        'High-tech components, integrated circuits, and 5G equipment',
      ],
    },
    {
      category: 'Industrial Machinery',
      items: [
        'Precision lathes, robotic arms, and hydraulic components',
        'CNC machines, automation robots, and hydraulic systems',
        'Manufacturing equipment, industrial robots, and fluid power',
        'Precision tools, assembly line robotics, and mechanical systems',
      ],
    },
    {
      category: 'Consumer Electronics',
      items: [
        'Audio equipment, monitors, and household robotics',
        'Sound systems, display panels, and robot vacuums',
        'Hi-fi gear, computer screens, and smart home robots',
        'Premium audio, visual displays, and automated cleaners',
      ],
    },
    {
      category: 'Textiles',
      items: [
        'Designer label manufacturing and technical textiles',
        'Fashion production materials and performance fabrics',
        'Apparel manufacturing and specialized textile products',
        'Clothing production and industrial fabric applications',
      ],
    },
    {
      category: 'Dangerous Goods',
      items: [
        'Lithium batteries and chemicals (requires MSDS documentation)',
        'Hazardous materials including batteries and industrial chemicals',
        'Regulated items such as lithium-ion cells and chemical compounds',
        'DG cargo including battery packs and chemical products',
      ],
    },
  ],
  'Netherlands': [
    {
      category: 'High-Tech',
      items: [
        'Computer servers, data storage units, and networking hardware',
        'Server equipment, storage systems, and network infrastructure',
        'Data center hardware, NAS devices, and routing equipment',
        'Enterprise servers, storage solutions, and connectivity gear',
      ],
    },
    {
      category: 'Medical Equipment',
      items: [
        'PPE (masks/gloves), diagnostic instruments, and hospital furniture',
        'Personal protective equipment, medical devices, and healthcare furniture',
        'Safety gear, testing equipment, and clinical furnishings',
        'Healthcare supplies, diagnostic tools, and medical infrastructure',
      ],
    },
    {
      category: 'Chemicals & Plastics',
      items: [
        'Raw polymer resins and specialized chemical additives',
        'Plastic raw materials and industrial chemical compounds',
        'Base polymers and chemical processing materials',
        'Resin products and specialty chemical formulations',
      ],
    },
    {
      category: 'Consumer Goods',
      items: [
        'Toys, textiles, and household goods for EU distribution',
        'Retail products destined for European fulfillment centers',
        'Consumer merchandise for Amazon EU and other distributors',
        'Mass-market goods for pan-European retail networks',
      ],
    },
    {
      category: 'Reefer Cargo',
      items: [
        'Temperature-controlled foods and organic ingredients',
        'Perishable goods and specialty food products',
        'Refrigerated commodities and fresh food items',
        'Cold-chain products and temperature-sensitive cargo',
      ],
    },
    {
      category: 'Dangerous Goods',
      items: [
        'Lithium batteries and chemicals (requires MSDS documentation)',
        'Hazardous materials including batteries and industrial chemicals',
        'Regulated items such as lithium-ion cells and chemical compounds',
        'DG cargo including battery packs and chemical products',
      ],
    },
  ],
};

// Default goods for countries not in the list
const defaultGoods: GoodsCategory[] = [
  {
    category: 'Electronics',
    items: [
      'Consumer electronics, smartphones, and computer equipment',
      'Electronic devices, mobile technology, and computing hardware',
      'Tech products, gadgets, and electronic components',
      'Digital devices, communication equipment, and electronics',
    ],
  },
  {
    category: 'Furniture',
    items: [
      'Ready-to-assemble home and office furniture',
      'Flat-pack furniture for residential and commercial spaces',
      'Modern furniture, seating, and storage solutions',
      'Home decor, office equipment, and furnishings',
    ],
  },
  {
    category: 'Industrial',
    items: [
      'HVAC equipment, solar panels, and manufacturing machinery',
      'Industrial equipment, energy systems, and production tools',
      'Heavy machinery, power systems, and industrial components',
      'Manufacturing equipment, mechanical systems, and industrial gear',
    ],
  },
  {
    category: 'Retail',
    items: [
      'Toys, clothing, and fitness accessories',
      'Consumer goods, apparel, and recreational products',
      'Fashion items, sports gear, and household goods',
      'Retail merchandise, textiles, and consumer products',
    ],
  },
  {
    category: 'Oversized Cargo',
    items: [
      'Vehicles, heavy machinery, and construction materials',
      'Large equipment, industrial vehicles, and building supplies',
      'Overweight cargo, machinery, and structural materials',
      'Project cargo, specialized equipment, and bulk materials',
    ],
  },
  {
    category: 'Dangerous Goods',
    items: [
      'Lithium batteries and chemicals (requires MSDS documentation)',
      'Hazardous materials including batteries and industrial chemicals',
      'Regulated items such as lithium-ion cells and chemical compounds',
      'DG cargo including battery packs and chemical products',
    ],
  },
];

// Simple hash function for consistent but varied content
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

// Get goods for a specific country with varied descriptions based on route
export function getCommonGoods(
  originCity: string,
  destinationCity: string,
  destinationCountry: string
): { category: string; description: string }[] {
  // Normalize country name for lookup
  const normalizedCountry = destinationCountry.toLowerCase();

  // Find matching country data
  let countryData: GoodsCategory[] | undefined;

  for (const [country, data] of Object.entries(countryGoodsData)) {
    if (normalizedCountry.includes(country.toLowerCase()) ||
        country.toLowerCase().includes(normalizedCountry.split(' ')[0])) {
      countryData = data;
      break;
    }
  }

  // Use default if no match
  const goods = countryData || defaultGoods;

  // Create unique seed from origin + destination for consistent variation
  const seed = simpleHash(`${originCity}-${destinationCity}`);

  // Select varied descriptions for each category
  return goods.map((cat, index) => {
    const variantIndex = (seed + index) % cat.items.length;
    return {
      category: cat.category,
      description: cat.items[variantIndex],
    };
  });
}

// Get section title variations
export function getGoodsSectionTitle(
  originCity: string,
  destinationCity: string
): string {
  const seed = simpleHash(`${originCity}-${destinationCity}`);
  const titles = [
    `Common Goods Shipped from ${originCity} to ${destinationCity}`,
    `Popular Items on the ${originCity} to ${destinationCity} Route`,
    `What Ships from ${originCity} to ${destinationCity}?`,
    `Frequently Shipped Goods: ${originCity} to ${destinationCity}`,
    `Top Cargo Categories: ${originCity} to ${destinationCity}`,
  ];
  return titles[seed % titles.length];
}

// Get intro text variations
export function getGoodsIntroText(
  originCity: string,
  destinationCity: string,
  destinationCountry: string
): string {
  const seed = simpleHash(`${originCity}-${destinationCity}-intro`);
  const intros = [
    `The ${originCity} to ${destinationCity} route handles a diverse range of cargo. Here are the most commonly shipped items on this corridor:`,
    `Businesses regularly ship the following product categories from ${originCity} to ${destinationCity}, ${destinationCountry}:`,
    `This route serves as a major trade lane for various goods. Common shipments from ${originCity} to ${destinationCity} include:`,
    `From ${originCity} to ${destinationCity}, we frequently transport these cargo types:`,
    `Our ${originCity} to ${destinationCity} service regularly handles shipments across these categories:`,
  ];
  return intros[seed % intros.length];
}
