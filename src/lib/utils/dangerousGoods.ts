// Dangerous goods shipping rules and requirements by country and freight type

export interface DGRequirement {
  title: string;
  description: string;
  isWarning?: boolean;
}

export interface CountryDGRules {
  regulatoryBody: string;
  regulatoryAbbreviation: string;
  seaRules: DGRequirement[];
  airRules: DGRequirement[];
  keyConsiderations: string[];
}

// Universal DG requirements with description variants
const universalDGRequirementsVariants = [
  {
    title: 'MSDS/SDS Documentation',
    descriptions: [
      'Safety Data Sheet must be current (within 1 year) and provided in both English and Chinese',
      'Material Safety Data Sheet required in English and Chinese, dated within the last 12 months',
      'Current SDS documentation in dual language format is mandatory for all dangerous goods',
      'Provide recent Safety Data Sheets in English and Chinese—documents older than 1 year are rejected',
    ],
  },
  {
    title: 'UN-Rated Packaging',
    descriptions: [
      'Outer packaging must bear the UN certification mark confirming it can withstand the specific hazards',
      'All containers require UN-stamped packaging certified for the hazard class of the contents',
      'Packaging must display valid UN certification matching the dangerous goods classification',
      'UN-approved packaging with proper certification stamps is required for all hazardous shipments',
    ],
  },
  {
    title: 'Dangerous Goods Declaration',
    descriptions: [
      'Formal DGD signed by the shipper declaring the nature and classification of hazardous contents',
      'Shipper must complete and sign the official Dangerous Goods Declaration form',
      'A signed DGD is mandatory, accurately listing all hazardous materials and their classifications',
      'Complete the formal declaration document with shipper signature certifying DG compliance',
    ],
  },
  {
    title: '24-Hour Emergency Contact',
    descriptions: [
      'Provide a phone number (with country code) manned 24/7 by someone familiar with the cargo details',
      'Round-the-clock emergency contact required—must reach someone who knows the technical specifications',
      'A 24/7 emergency number is mandatory; the contact must understand the hazardous materials involved',
      'Include an emergency phone number staffed continuously by personnel with cargo knowledge',
    ],
  },
];

// Country-specific DG rules
const countryDGData: Record<string, {
  regulatoryBody: string;
  regulatoryAbbreviation: string;
  seaRules: Array<{ title: string; descriptions: string[]; isWarning?: boolean }>;
  airRules: Array<{ title: string; descriptions: string[]; isWarning?: boolean }>;
  keyConsiderations: string[];
}> = {
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
          'US Customs requires precise chemical identification in ISF filings—vague descriptions will be rejected.',
        ],
        isWarning: true,
      },
      {
        title: '49 CFR Compliance',
        descriptions: [
          'All hazardous materials must comply with 49 CFR (Code of Federal Regulations) requirements for shipping.',
          'Shipments must meet 49 CFR standards covering packaging, labeling, and documentation.',
          'The US follows 49 CFR for hazmat—ensure your packaging and paperwork meet these federal standards.',
          'Compliance with 49 CFR is mandatory for all dangerous goods entering US ports.',
        ],
      },
      {
        title: 'Port Security Requirements',
        descriptions: [
          'US ports have enhanced security protocols for DG vessels. Expect potential inspections and delays.',
          'Dangerous goods containers may be subject to additional security screening at US ports.',
          'Be prepared for enhanced inspections at port of entry for all hazardous cargo.',
          'Port security may require additional documentation or physical inspection of DG shipments.',
        ],
      },
    ],
    airRules: [
      {
        title: 'Lithium Battery Restrictions',
        descriptions: [
          'Lithium Ion Batteries (UN3480) are heavily restricted. High-power batteries (>100Wh) are generally Cargo Aircraft Only (CAO).',
          'Strict limits on lithium batteries—UN3480 over 100Wh cannot fly on passenger aircraft.',
          'Lithium ion batteries face severe restrictions. Most high-capacity cells require CAO designation.',
          'UN3480 batteries above 100Wh are restricted to cargo-only aircraft under US regulations.',
        ],
        isWarning: true,
      },
      {
        title: 'ACAS Screening',
        descriptions: [
          'Air Cargo Advance Screening (ACAS) rules apply to all DG shipments. Data must be transmitted before loading.',
          'DG air freight requires ACAS filing with complete hazmat details before departure.',
          'ACAS screening is mandatory—dangerous goods information must be submitted prior to loading.',
          'All hazardous air cargo must pass ACAS review before being loaded onto US-bound aircraft.',
        ],
      },
      {
        title: 'Section II Labeling',
        descriptions: [
          'Batteries contained in equipment require specific Section II labeling with Watt-hour ratings.',
          'Equipment containing lithium batteries needs Section II compliance labels showing capacity.',
          'Section II marking required for batteries packed with or in devices—include Wh rating.',
          'Proper Section II labeling is mandatory for all lithium batteries shipped with equipment.',
        ],
      },
    ],
    keyConsiderations: [
      'US requires exact chemical names—generic descriptions are rejected',
      'Lithium batteries >100Wh are Cargo Aircraft Only',
      'ISF filing must include complete DG details 24 hours before departure',
      'Random CBP inspections are common for DG shipments',
    ],
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
          'Canada enforces strict ISPM-15 compliance for any wood packaging containing hazardous materials.',
        ],
        isWarning: true,
      },
      {
        title: 'Security Management Plan',
        descriptions: [
          'Class 1 (Explosives) or Class 7 (Radioactive) imports require a formal Security Management Plan.',
          'High-risk DG classes require submission of a Security Management Plan to Transport Canada.',
          'A security plan is mandatory for explosive or radioactive materials entering Canada.',
          'Class 1 and Class 7 dangerous goods require documented security protocols before import.',
        ],
      },
      {
        title: 'TDG Standards Alignment',
        descriptions: [
          'Canadian TDG rules closely align with US DOT but have specific national variations.',
          'Transport Canada standards mirror US regulations but include additional Canadian requirements.',
          'TDG compliance required—similar to US 49 CFR but with Canadian-specific additions.',
          'Canada follows US-aligned standards with Transport Canada-specific documentation needs.',
        ],
      },
    ],
    airRules: [
      {
        title: 'e-AWB and ACI Filing',
        descriptions: [
          'Electronic Air Waybill and Advance Commercial Information filings are mandatory for DG air cargo.',
          'All dangerous goods air shipments require e-AWB and ACI data transmission.',
          'Canada requires electronic documentation—paper AWBs are not accepted for DG shipments.',
          'ACI filing with complete DG details must accompany your electronic air waybill.',
        ],
      },
      {
        title: 'Equivalency Certificates',
        descriptions: [
          'If Chinese packaging doesn\'t perfectly match Canadian TDG standards, an Equivalency Certificate may be required.',
          'Non-standard packaging may need Transport Canada Equivalency Certificate approval.',
          'Equivalency Certificates bridge gaps between Chinese and Canadian packaging requirements.',
          'Request an Equivalency Certificate if your DG packaging meets foreign but not Canadian specs.',
        ],
      },
      {
        title: 'CAO Restrictions',
        descriptions: [
          'Cargo Aircraft Only restrictions apply to high-risk dangerous goods entering Canada.',
          'Certain DG classes and quantities can only fly on dedicated cargo aircraft.',
          'CAO designations are strictly enforced—passenger aircraft have severe DG limitations.',
          'High-hazard materials require Cargo Aircraft Only routing into Canada.',
        ],
        isWarning: true,
      },
    ],
    keyConsiderations: [
      'TDG standards align with US DOT but have Canadian-specific requirements',
      'ISPM-15 strictly enforced for wooden DG packaging',
      'Equivalency Certificates available for non-standard packaging',
      'Class 1 and Class 7 goods need Security Management Plans',
    ],
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
          'Pre-arrival notification required for all dangerous goods entering UK ports.',
        ],
        isWarning: true,
      },
      {
        title: 'GB CLP Compliance',
        descriptions: [
          'Post-Brexit, the UK uses "GB CLP" (Classification, Labelling and Packaging) rules distinct from EU.',
          'UK-specific GB CLP labeling requirements apply—EU CLP labels alone are not sufficient.',
          'Dangerous goods must comply with GB CLP standards for the UK market.',
          'Ensure your DG labeling meets GB CLP requirements, which differ from EU CLP post-Brexit.',
        ],
      },
      {
        title: 'EORI and CDS Entry',
        descriptions: [
          'DG shipments require a valid GB EORI number and entry through the Customs Declaration Service.',
          'All dangerous goods must be declared through CDS with your GB EORI number.',
          'CDS declaration with EORI is mandatory for DG imports to the United Kingdom.',
          'Enter your DG shipment through the CDS system using your registered GB EORI.',
        ],
      },
    ],
    airRules: [
      {
        title: 'CAA Spot Checks',
        descriptions: [
          'The UK Civil Aviation Authority performs random spot-checks on DG paperwork from China to ensure Class matches MSDS.',
          'Expect CAA inspections verifying your dangerous goods classification matches documentation.',
          'Random CAA audits check that DG class declarations align exactly with Safety Data Sheets.',
          'The CAA regularly inspects China-origin DG shipments for documentation accuracy.',
        ],
        isWarning: true,
      },
      {
        title: 'Aerosol and Flammable Restrictions',
        descriptions: [
          'The UK is particularly strict on aerosols and flammable liquids in air freight.',
          'Enhanced scrutiny applies to aerosol products and flammable goods on UK-bound flights.',
          'Aerosols and flammables face additional restrictions for air cargo into the UK.',
          'Strict limits on aerosol quantities and flammable materials for UK air shipments.',
        ],
      },
      {
        title: 'Documentation Accuracy',
        descriptions: [
          'UK authorities require exact matching between DG class declarations and MSDS details.',
          'Your dangerous goods paperwork must precisely match the Safety Data Sheet specifications.',
          'Any discrepancy between DGD and MSDS will result in cargo holds or rejection.',
          'Ensure complete consistency between all DG documents to avoid UK customs issues.',
        ],
      },
    ],
    keyConsiderations: [
      'Post-Brexit GB CLP rules differ from EU CLP',
      '24-hour advance port notification required for DG',
      'CAA conducts random documentation audits',
      'Strict enforcement on aerosols and flammables',
    ],
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
          'Plan BMSB compliance carefully—ensure fumigation won\'t compromise your dangerous goods.',
        ],
        isWarning: true,
      },
      {
        title: 'ADG Code Compliance',
        descriptions: [
          'Australia follows the Australian Dangerous Goods Code which aligns with international standards.',
          'All DG must comply with ADG Code requirements for packaging, labeling, and documentation.',
          'ADG Code governs dangerous goods transport—ensure your shipment meets Australian standards.',
          'Comply with ADG Code specifications for all hazardous materials entering Australia.',
        ],
      },
      {
        title: 'Biosecurity Inspection',
        descriptions: [
          'DG shipments may face additional biosecurity inspection alongside safety verification.',
          'Expect dual inspection for biosecurity and dangerous goods compliance at Australian ports.',
          'Australian authorities check DG containers for both safety and quarantine concerns.',
          'Biosecurity clearance required in addition to standard DG verification.',
        ],
      },
    ],
    airRules: [
      {
        title: 'CASA Battery Restrictions',
        descriptions: [
          'Australia\'s CASA is extremely strict on lithium batteries. Even devices like iPads require Section II labeling.',
          'Lithium batteries in equipment must meet strict CASA requirements with proper Wh labeling.',
          'CASA enforces rigorous lithium battery rules—all devices need Section II compliance.',
          'Strict Watt-hour limits and labeling required for any lithium batteries entering Australia.',
        ],
        isWarning: true,
      },
      {
        title: 'Section II Requirements',
        descriptions: [
          '"Lithium batteries contained in equipment" require specific Section II labeling and Watt-hour limits.',
          'Section II marking mandatory for batteries packed with devices entering Australia.',
          'Devices containing lithium batteries must display Section II labels with capacity ratings.',
          'All equipment with batteries needs Section II compliance for Australian air freight.',
        ],
      },
      {
        title: 'Quantity Limitations',
        descriptions: [
          'Australia imposes strict quantity limits on dangerous goods in air freight.',
          'DG air shipments face per-package and per-shipment quantity restrictions.',
          'Quantity limits apply—verify your DG volumes meet Australian air cargo maximums.',
          'Check Australian quantity thresholds before shipping dangerous goods by air.',
        ],
      },
    ],
    keyConsiderations: [
      'BMSB season treatment may conflict with chemical stability',
      'CASA enforces strict lithium battery regulations',
      'Dual inspection for biosecurity and DG compliance',
      'Section II labeling required for all battery-containing devices',
    ],
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
          'German-language GHS compliance is mandatory for dangerous goods entering the retail market.',
        ],
        isWarning: true,
      },
      {
        title: 'Hamburg/Bremerhaven Entry',
        descriptions: [
          'Most China-to-Germany DG enters via Hamburg or Bremerhaven ports.',
          'Plan your DG shipments through Hamburg or Bremerhaven—Germany\'s main hazmat ports.',
          'These major ports have dedicated DG handling facilities and experienced personnel.',
          'Hamburg and Bremerhaven offer specialized infrastructure for dangerous goods.',
        ],
      },
      {
        title: 'Technical Documentation',
        descriptions: [
          'Germany requires comprehensive technical documentation for dangerous goods imports.',
          'Be prepared to provide detailed technical files supporting your DG classification.',
          'German authorities may request additional technical data beyond standard DG documents.',
          'Comprehensive technical documentation demonstrates compliance with German safety standards.',
        ],
      },
    ],
    airRules: [
      {
        title: 'Overpack Requirements',
        descriptions: [
          'If multiple DG boxes are on one pallet, the pallet must be labeled "OVERPACK" in letters at least 12mm high.',
          'Overpacks combining multiple DG packages require proper labeling with minimum 12mm text.',
          'Germany strictly enforces overpack marking—letters must be minimum 12mm height.',
          'Multi-package pallets need "OVERPACK" labels meeting German size specifications.',
        ],
        isWarning: true,
      },
      {
        title: 'Frankfurt Hub',
        descriptions: [
          'Frankfurt (FRA) is the main air cargo hub for DG entering Germany.',
          'Route your DG air freight through Frankfurt—Germany\'s primary hazmat air gateway.',
          'FRA has extensive dangerous goods handling capabilities and expedited processing.',
          'Frankfurt airport offers specialized facilities for dangerous goods clearance.',
        ],
      },
      {
        title: 'EU-Wide Compliance',
        descriptions: [
          'DG entering Germany must comply with broader EU dangerous goods regulations.',
          'European Union rules apply in addition to German national requirements.',
          'Ensure your DG meets both German and EU-level regulatory standards.',
          'Germany enforces EU dangerous goods directives alongside national rules.',
        ],
      },
    ],
    keyConsiderations: [
      'GHS labels must be in German for domestic sales',
      'Overpack labeling requires minimum 12mm letter height',
      'Hamburg and Bremerhaven are primary DG ports',
      'Frankfurt (FRA) is the main air cargo DG hub',
    ],
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
          'Rotterdam transshipment requires proper T1 transit documentation for dangerous goods.',
        ],
      },
      {
        title: 'ADR Compliance',
        descriptions: [
          'The moment DG leaves Rotterdam by truck, it must comply with ADR (European Road Rules).',
          'ADR road transport rules apply immediately when DG exits the port by ground transport.',
          'Ensure ADR compliance for any dangerous goods moving overland from Dutch ports.',
          'European road transport of DG requires ADR-compliant vehicles and documentation.',
        ],
        isWarning: true,
      },
      {
        title: 'Rotterdam Gateway',
        descriptions: [
          'Rotterdam is the "Entry Point" for most DG destined for the rest of Europe.',
          'The Netherlands serves as the primary gateway for European dangerous goods logistics.',
          'Rotterdam\'s facilities make it ideal for DG transshipment throughout Europe.',
          'Most European DG shipments route through Rotterdam\'s specialized infrastructure.',
        ],
      },
    ],
    airRules: [
      {
        title: 'Schiphol DG Area',
        descriptions: [
          'Amsterdam Schiphol has a dedicated DG Area with specialized handling capabilities.',
          'Schiphol\'s dedicated dangerous goods zone offers expert handling and storage.',
          'Route DG air cargo through Schiphol\'s specialized hazmat facilities.',
          'AMS airport provides purpose-built infrastructure for dangerous goods processing.',
        ],
      },
      {
        title: 'Bonded DG Storage',
        descriptions: [
          'The Netherlands offers bonded storage for dangerous goods—store hazardous chemicals without paying VAT/Duty until sold.',
          'Utilize Dutch bonded warehousing to defer duties on stored dangerous goods.',
          'Bonded storage allows DG to remain in Netherlands without immediate customs payment.',
          'Strategic bonded storage options for hazardous materials pending distribution.',
        ],
      },
      {
        title: 'EU Distribution Hub',
        descriptions: [
          'The Netherlands is excellent for DG distribution to other EU countries.',
          'Use Dutch facilities as your base for distributing dangerous goods across Europe.',
          'Netherlands offers efficient logistics for EU-wide DG distribution.',
          'Schiphol and Rotterdam together provide comprehensive DG gateway services.',
        ],
      },
    ],
    keyConsiderations: [
      'Rotterdam is Europe\'s primary DG gateway port',
      'T1 transit documents required for onward EU shipment',
      'ADR compliance mandatory for road transport from ports',
      'Bonded storage available for deferred duty payment',
    ],
  },
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
        'International maritime DG standards apply to all ocean freight hazardous cargo.',
      ],
    },
    {
      title: 'Port Authority Notification',
      descriptions: [
        'Most ports require advance notification before dangerous goods vessel arrival.',
        'Notify port authorities of DG cargo ahead of vessel arrival.',
        'Pre-arrival DG declarations are typically required for port entry.',
        'Contact destination port for specific DG notification requirements.',
      ],
    },
    {
      title: 'Local Compliance',
      descriptions: [
        'National regulations may add requirements beyond international IMDG standards.',
        'Check destination country rules for additional DG compliance needs.',
        'Local authorities may have specific dangerous goods handling requirements.',
        'Verify national regulations complement IMDG Code compliance.',
      ],
    },
  ],
  airRules: [
    {
      title: 'IATA DGR Compliance',
      descriptions: [
        'Air freight dangerous goods must comply with IATA Dangerous Goods Regulations.',
        'IATA DGR is stricter than maritime rules—verify compliance for air transport.',
        'All DG air cargo must meet IATA requirements for quantities and packaging.',
        'Follow IATA DGR standards for dangerous goods on aircraft.',
      ],
    },
    {
      title: 'Quantity Restrictions',
      descriptions: [
        'Air freight has strict quantity limits for dangerous goods per package and shipment.',
        'IATA imposes tighter quantity restrictions than sea freight.',
        'Verify your DG quantities meet air cargo limitations.',
        'Quantity thresholds are significantly lower for air transport.',
      ],
    },
    {
      title: 'Lithium Battery Rules',
      descriptions: [
        'Lithium batteries face strict regulations for air transport worldwide.',
        'All lithium battery shipments require proper classification and labeling.',
        'Section II requirements apply to batteries contained in equipment.',
        'High-capacity batteries may be restricted to cargo aircraft only.',
      ],
    },
  ],
  keyConsiderations: [
    'IMDG Code governs sea freight dangerous goods',
    'IATA DGR applies stricter standards for air freight',
    'Lithium batteries face enhanced restrictions',
    'Contact destination customs for specific national requirements',
  ],
};

// Simple hash function for content variation
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

// Get DG rules for a specific route and freight type
export function getDangerousGoodsRules(
  originCity: string,
  destinationCity: string,
  destinationCountry: string,
  freightType: 'sea' | 'air'
): CountryDGRules {
  const normalizedCountry = destinationCountry.toLowerCase();
  const seed = simpleHash(`${originCity}-${destinationCity}-dg`);

  // Find matching country
  let countryData = defaultDGData;
  for (const [country, data] of Object.entries(countryDGData)) {
    if (normalizedCountry.includes(country) || country.includes(normalizedCountry.split(' ')[0])) {
      countryData = data;
      break;
    }
  }

  // Generate rules with varied descriptions
  const rulesSource = freightType === 'sea' ? countryData.seaRules : countryData.airRules;
  const rules: DGRequirement[] = rulesSource.map((rule, index) => ({
    title: rule.title,
    description: rule.descriptions[(seed + index) % rule.descriptions.length],
    isWarning: 'isWarning' in rule ? (rule.isWarning as boolean) : undefined,
  }));

  // Shuffle the rules order based on route
  const shuffledRules = shuffleWithSeed(rules, seed);

  // Shuffle key considerations
  const shuffledConsiderations = shuffleWithSeed([...countryData.keyConsiderations], seed);

  return {
    regulatoryBody: countryData.regulatoryBody,
    regulatoryAbbreviation: countryData.regulatoryAbbreviation,
    seaRules: freightType === 'sea' ? shuffledRules : [],
    airRules: freightType === 'air' ? shuffledRules : [],
    keyConsiderations: shuffledConsiderations,
  };
}

// Get universal DG requirements with varied descriptions
export function getUniversalDGRequirements(
  originCity: string,
  destinationCity: string
): Array<{ title: string; description: string }> {
  const seed = simpleHash(`${originCity}-${destinationCity}-dg-universal`);

  const requirements = universalDGRequirementsVariants.map((req, index) => ({
    title: req.title,
    description: req.descriptions[(seed + index) % req.descriptions.length],
  }));

  return shuffleWithSeed(requirements, seed);
}

// Get section title variations
export function getDGSectionTitle(
  originCity: string,
  destinationCity: string,
  destinationCountry: string
): string {
  const seed = simpleHash(`${originCity}-${destinationCity}-dg-title`);
  const titles = [
    `Dangerous Goods Shipping to ${destinationCity}`,
    `Hazardous Materials: ${originCity} to ${destinationCity}`,
    `${destinationCountry} Dangerous Goods Requirements`,
    `Shipping Hazmat to ${destinationCity}`,
  ];
  return titles[seed % titles.length];
}

// Get intro text variations
export function getDGIntroText(
  originCity: string,
  destinationCity: string,
  destinationCountry: string,
  freightType: 'sea' | 'air'
): string {
  const seed = simpleHash(`${originCity}-${destinationCity}-dg-intro`);
  const codeType = freightType === 'sea'
    ? 'IMDG Code (International Maritime Dangerous Goods)'
    : 'IATA DGR (Dangerous Goods Regulations)';
  const strictnessNote = freightType === 'air'
    ? 'Air freight regulations are stricter than sea, with tighter quantity limits and enhanced battery restrictions.'
    : 'Sea freight allows larger quantities but requires careful planning for extended transit times.';

  const intros = [
    `Shipping dangerous goods from ${originCity} to ${destinationCity} requires compliance with ${codeType} standards and ${destinationCountry}-specific regulations. ${strictnessNote}`,
    `Hazardous materials shipments to ${destinationCity} are governed by ${codeType}. ${strictnessNote}`,
    `${destinationCountry} has specific requirements for dangerous goods in addition to international ${codeType} standards. ${strictnessNote}`,
    `Transporting dangerous goods from ${originCity} requires careful compliance with ${codeType} and ${destinationCountry} import rules. ${strictnessNote}`,
  ];
  return intros[seed % intros.length];
}

// Get considerations section title
export function getDGConsiderationsTitle(destinationCountry: string): string {
  const seed = simpleHash(destinationCountry + '-dg-considerations');
  const titles = [
    `${destinationCountry} DG Shipping Considerations`,
    `Key Points for ${destinationCountry} Hazmat`,
    `${destinationCountry} Dangerous Goods Notes`,
    `Important ${destinationCountry} DG Factors`,
  ];
  return titles[seed % titles.length];
}
