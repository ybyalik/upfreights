// Required documents for shipping by country and freight type

export interface DocumentItem {
  name: string;
  description: string;
  required: boolean;
}

export interface CountryDocuments {
  universal: DocumentItem[];
  seaSpecific: DocumentItem[];
  airSpecific: DocumentItem[];
  nuances: string[];
}

// Universal documents with description variants for content variation
const universalDocumentsVariants = [
  {
    name: 'Commercial Invoice',
    descriptions: [
      'Describes the goods, value, and buyer/seller details',
      'Lists product descriptions, pricing, and transaction parties',
      'Contains item values, quantities, and seller/buyer information',
      'Official record of goods, their value, and parties involved',
    ],
    required: true,
  },
  {
    name: 'Packing List',
    descriptions: [
      'Details weights, dimensions, and packaging specifications',
      'Specifies cargo measurements, weights, and how items are packed',
      'Lists package contents, dimensions, and gross/net weights',
      'Documents packaging details and physical cargo specifications',
    ],
    required: true,
  },
  {
    name: 'Contract/Purchase Order',
    descriptions: [
      'Evidence of the transaction between parties',
      'Proof of the commercial agreement between buyer and seller',
      'Documentation of the purchase terms and conditions',
      'Official record of the trade agreement',
    ],
    required: true,
  },
  {
    name: 'Certificate of Origin',
    descriptions: [
      'Proves goods were manufactured in China (for duty benefits)',
      'Certifies the country of manufacture for tariff purposes',
      'Required for duty rate determination and trade agreements',
      'Verifies Chinese origin for preferential duty treatment',
    ],
    required: true,
  },
];

// Country-specific document requirements
const countryDocuments: Record<string, {
  seaSpecific: DocumentItem[];
  airSpecific: DocumentItem[];
  nuances: string[];
}> = {
  'united states': {
    seaSpecific: [
      {
        name: 'ISF (10+2) Filing',
        description: 'Importer Security Filing must be submitted 24 hours before vessel departure from China',
        required: true,
      },
      {
        name: 'Customs Bond',
        description: 'Single Entry or Continuous Bond required for all US imports',
        required: true,
      },
      {
        name: 'Bill of Lading (B/L)',
        description: 'Title document for ocean cargo - required for cargo release',
        required: true,
      },
    ],
    airSpecific: [
      {
        name: 'ACAS Filing',
        description: 'Air Cargo Advance Screening performed by carrier/forwarder',
        required: true,
      },
      {
        name: 'Customs Bond',
        description: 'Single Entry or Continuous Bond required for all US imports',
        required: true,
      },
      {
        name: 'Air Waybill (AWB)',
        description: 'Receipt of goods for air cargo - filed hours before arrival',
        required: true,
      },
    ],
    nuances: [
      'ISF Filing is critical for sea freight - failure to file results in a $5,000 fine',
      'Customs Bond is mandatory for both sea and air imports',
      'FDA prior notice required for food products (filed 15 days before arrival)',
      'FCC certification needed for electronic devices',
    ],
  },
  'canada': {
    seaSpecific: [
      {
        name: 'e-HBL / ACI Filing',
        description: 'Advance Commercial Information filed to CBSA before vessel arrival',
        required: true,
      },
      {
        name: 'CARM Portal Registration',
        description: 'Importer must be registered in the CBSA Assessment and Revenue Management system',
        required: true,
      },
      {
        name: 'Bill of Lading (B/L)',
        description: 'Title document for ocean cargo - required for cargo release',
        required: true,
      },
    ],
    airSpecific: [
      {
        name: 'Electronic House Air Waybill',
        description: 'Filed into the ACI system by the freight forwarder',
        required: true,
      },
      {
        name: 'CARM Portal Registration',
        description: 'Importer must be registered in the CBSA Assessment and Revenue Management system',
        required: true,
      },
      {
        name: 'Air Waybill (AWB)',
        description: 'Receipt of goods for air cargo - required for customs clearance',
        required: true,
      },
    ],
    nuances: [
      'CARM registration is now mandatory for all importers clearing freight in Canada',
      'Canada Food Inspection Agency (CFIA) permits required for food/plant products',
      'Health Canada approval needed for medical devices and pharmaceuticals',
      'Bilingual labeling (English/French) required for consumer products',
    ],
  },
  'united kingdom': {
    seaSpecific: [
      {
        name: 'EORI Number',
        description: 'Economic Operator Registration and Identification required for all UK importers',
        required: true,
      },
      {
        name: 'CDS Entry',
        description: 'Customs Declaration Service entry for UK customs clearance',
        required: true,
      },
      {
        name: 'Bill of Lading (B/L)',
        description: 'Title document for ocean cargo - required for cargo release',
        required: true,
      },
    ],
    airSpecific: [
      {
        name: 'EORI Number',
        description: 'Economic Operator Registration and Identification required for all UK importers',
        required: true,
      },
      {
        name: 'Detailed Commercial Invoice',
        description: 'UK customs require precise HS Code classification for fast-track air clearance',
        required: true,
      },
      {
        name: 'Air Waybill (AWB)',
        description: 'Receipt of goods for air cargo - required for customs clearance',
        required: true,
      },
    ],
    nuances: [
      'EORI number is mandatory for both sea and air imports post-Brexit',
      'UKCA marking required for products previously using CE marking',
      'VAT is charged at import unless using postponed VAT accounting',
      'Strict HS Code accuracy requirements - errors cause clearance delays',
    ],
  },
  'germany': {
    seaSpecific: [
      {
        name: 'ENS Declaration',
        description: 'Entry Summary Declaration required under the ICS2 security system',
        required: true,
      },
      {
        name: 'EORI Number',
        description: 'EU Economic Operator Registration required for all imports',
        required: true,
      },
      {
        name: 'Bill of Lading (B/L)',
        description: 'Title document for ocean cargo - required for cargo release',
        required: true,
      },
    ],
    airSpecific: [
      {
        name: 'MSDS Documentation',
        description: 'Material Safety Data Sheet required for checking lithium batteries/chemicals',
        required: true,
      },
      {
        name: 'EORI Number',
        description: 'EU Economic Operator Registration required for all imports',
        required: true,
      },
      {
        name: 'Air Waybill (AWB)',
        description: 'Receipt of goods for air cargo - required for customs clearance',
        required: true,
      },
    ],
    nuances: [
      'German customs are strict on product compliance (CE marking, REACH)',
      'VAT (Einfuhrumsatzsteuer) is charged at import - typically 19%',
      'Packaging regulations (VerpackG) require registration with LUCID',
      'Battery registration required for products containing batteries',
    ],
  },
  'netherlands': {
    seaSpecific: [
      {
        name: 'ENS Declaration',
        description: 'Entry Summary Declaration for EU port entry',
        required: true,
      },
      {
        name: 'T1 Document',
        description: 'Required if goods are transshipping through Rotterdam to another EU country',
        required: false,
      },
      {
        name: 'Bill of Lading (B/L)',
        description: 'Title document for ocean cargo - required for cargo release',
        required: true,
      },
    ],
    airSpecific: [
      {
        name: 'MSDS Documentation',
        description: 'Material Safety Data Sheet for lithium batteries and chemical products',
        required: true,
      },
      {
        name: 'EORI Number',
        description: 'EU Economic Operator Registration required for all imports',
        required: true,
      },
      {
        name: 'Air Waybill (AWB)',
        description: 'Receipt of goods for air cargo - required for customs clearance',
        required: true,
      },
    ],
    nuances: [
      'Article 23 VAT Deferment available - improves cash flow for sea freight importers',
      'Rotterdam is a major transshipment hub - T1 documents needed for onward EU transit',
      'Dutch customs offer simplified procedures for trusted importers (AEO)',
      'EORI number is mandatory for all EU imports',
    ],
  },
  'australia': {
    seaSpecific: [
      {
        name: 'Packing Declaration',
        description: 'Mandatory declaration of straw, peat, or wood used in packaging',
        required: true,
      },
      {
        name: 'Fumigation Certificate',
        description: 'Required for wooden pallets and timber packaging (ISPM-15)',
        required: true,
      },
      {
        name: 'Bill of Lading (B/L)',
        description: 'Title document for ocean cargo - required for cargo release',
        required: true,
      },
    ],
    airSpecific: [
      {
        name: 'Inbound Cargo Manifest',
        description: 'Must match Air Waybill for immediate quarantine release',
        required: true,
      },
      {
        name: 'Biosecurity Import Conditions',
        description: 'BICON permit for regulated goods (food, plants, animals)',
        required: false,
      },
      {
        name: 'Air Waybill (AWB)',
        description: 'Receipt of goods for air cargo - required for customs clearance',
        required: true,
      },
    ],
    nuances: [
      'Australia has extremely strict biosecurity - fumigation is mandatory for wooden packaging',
      'Air freight typically uses plastic/cardboard pallets to avoid fumigation requirements',
      'DAFF (Department of Agriculture) inspection common for first-time importers',
      'GST (10%) charged on imported goods value + shipping + insurance',
    ],
  },
};

// Default documents for countries not specifically listed
const defaultDocuments = {
  seaSpecific: [
    {
      name: 'Bill of Lading (B/L)',
      description: 'Title document for ocean cargo - required for cargo release',
      required: true,
    },
    {
      name: 'Import Declaration',
      description: 'Customs declaration form for the destination country',
      required: true,
    },
    {
      name: 'Customs Entry Form',
      description: 'Country-specific customs documentation for clearance',
      required: true,
    },
  ],
  airSpecific: [
    {
      name: 'Air Waybill (AWB)',
      description: 'Receipt of goods for air cargo - required for customs clearance',
      required: true,
    },
    {
      name: 'Import Declaration',
      description: 'Customs declaration form for the destination country',
      required: true,
    },
    {
      name: 'MSDS (if applicable)',
      description: 'Material Safety Data Sheet for batteries, chemicals, or hazardous goods',
      required: false,
    },
  ],
  nuances: [
    'Contact destination customs for specific import requirements',
    'HS Code accuracy is critical for correct duty calculation',
    'Import licenses may be required for restricted goods',
    'Local agent/broker recommended for smooth customs clearance',
  ],
};

// Simple hash for content variation
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

// Shuffle array based on seed (deterministic)
function shuffleWithSeed<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = (seed + i) % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Get documents for a specific route and freight type
export function getRequiredDocuments(
  originCity: string,
  destinationCity: string,
  destinationCountry: string,
  freightType: 'sea' | 'air'
): CountryDocuments {
  const normalizedCountry = destinationCountry.toLowerCase();
  const seed = simpleHash(`${originCity}-${destinationCity}`);

  // Find matching country
  let countryData = defaultDocuments;
  for (const [country, data] of Object.entries(countryDocuments)) {
    if (normalizedCountry.includes(country) || country.includes(normalizedCountry.split(' ')[0])) {
      countryData = data;
      break;
    }
  }

  // Generate universal documents with varied descriptions
  const universal = universalDocumentsVariants.map((doc, index) => ({
    name: doc.name,
    description: doc.descriptions[(seed + index) % doc.descriptions.length],
    required: doc.required,
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
    nuances: shuffledNuances,
  };
}

// Get section title variations
export function getDocumentsSectionTitle(
  originCity: string,
  destinationCity: string
): string {
  const seed = simpleHash(`${originCity}-${destinationCity}-docs`);
  const titles = [
    `Required Documents to Ship from ${originCity} to ${destinationCity}`,
    `Documentation for ${originCity} to ${destinationCity} Shipments`,
    `Essential Paperwork: ${originCity} to ${destinationCity}`,
    `Shipping Documents for the ${originCity} to ${destinationCity} Route`,
  ];
  return titles[seed % titles.length];
}

// Get intro text for the documents section
export function getDocumentsIntroText(
  originCity: string,
  destinationCity: string,
  destinationCountry: string,
  freightType: 'sea' | 'air'
): string {
  const seed = simpleHash(`${originCity}-${destinationCity}-docs-intro`);
  const transportDoc = freightType === 'sea' ? 'Bill of Lading (B/L)' : 'Air Waybill (AWB)';
  const transportType = freightType === 'sea' ? 'sea freight' : 'air freight';

  const intros = [
    `Proper documentation ensures smooth customs clearance for your ${transportType} shipment to ${destinationCity}. Your cargo will be accompanied by a ${transportDoc} as proof of transport.`,
    `To ship goods from ${originCity} to ${destinationCity}, you'll need these documents. For ${transportType}, you'll receive a ${transportDoc} as your transport receipt.`,
    `Every shipment to ${destinationCountry} requires proper paperwork. Here's what you need for ${transportType} from ${originCity} to ${destinationCity}.`,
    `Ensure your ${originCity} to ${destinationCity} ${transportType} clears customs quickly with these required documents.`,
  ];
  return intros[seed % intros.length];
}

// Get nuances section title
export function getNuancesSectionTitle(destinationCountry: string): string {
  const titles = [
    `${destinationCountry} Customs Notes`,
    `Important: ${destinationCountry} Requirements`,
    `${destinationCountry} Import Specifics`,
    `Key Points for ${destinationCountry}`,
  ];
  const seed = simpleHash(destinationCountry);
  return titles[seed % titles.length];
}
