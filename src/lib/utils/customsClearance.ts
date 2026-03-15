// Customs clearance rules and procedures by country and freight type

export interface ClearanceRule {
  title: string;
  description: string;
  isWarning?: boolean;
}

export interface CountryClearance {
  agencyName: string;
  agencyAbbreviation: string;
  seaRules: ClearanceRule[];
  airRules: ClearanceRule[];
  keyFocus: string[];
}

// Universal customs clearance concepts with description variants
const universalConceptsVariants = [
  {
    title: 'Customs Valuation',
    descriptions: [
      'Accurate declaration of goods value determines duty rates and taxes owed',
      'Proper valuation ensures correct calculation of import duties and fees',
      'Value assessment is critical for determining applicable tariffs',
      'Goods must be valued correctly to calculate duties and prevent penalties',
    ],
  },
  {
    title: 'HS Code Classification',
    descriptions: [
      'Correct tariff codes ensure proper duty rates and regulatory compliance',
      'Harmonized System codes determine applicable duties and restrictions',
      'Accurate classification prevents delays and unexpected charges',
      'Proper HS codes are essential for calculating duties and meeting regulations',
    ],
  },
  {
    title: 'Compliance Documentation',
    descriptions: [
      'Complete paperwork prevents holds, inspections, and clearance delays',
      'Proper documentation ensures smooth passage through customs controls',
      'All required certificates and declarations must be accurate and complete',
      'Documentation accuracy is key to avoiding customs holds and penalties',
    ],
  },
  {
    title: 'Security Screening',
    descriptions: [
      'All cargo undergoes security verification before release',
      'Shipments are screened for compliance with security regulations',
      'Security protocols apply to all international cargo movements',
      'Cargo must pass security checks as part of the clearance process',
    ],
  },
];

// Country-specific customs clearance rules
const countryClearanceData: Record<string, {
  agencyName: string;
  agencyAbbreviation: string;
  seaRules: Array<{ title: string; descriptions: string[]; isWarning?: boolean }>;
  airRules: Array<{ title: string; descriptions: string[]; isWarning?: boolean }>;
  keyFocus: string[];
}> = {
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
          'ISF data must reach CBP 24 hours before the ship leaves port. Late or missing filings incur $5,000 fines.',
        ],
        isWarning: true,
      },
      {
        title: 'Customs Bond Requirement',
        descriptions: [
          'A Continuous Bond or Single Entry Bond is mandatory for all commercial imports entering the United States.',
          'All US imports require either a Continuous Bond (for frequent importers) or a Single Entry Bond (for occasional shipments).',
          'Commercial cargo cannot clear customs without an active Customs Bond on file with CBP.',
          'You must have a valid Customs Bond before your sea freight arrives at a US port.',
        ],
      },
      {
        title: 'Entry Type 01',
        descriptions: [
          'Most commercial goods enter under Entry Type 01, which requires full duty payment and formal entry procedures.',
          'Standard commercial imports use Entry Type 01, requiring complete documentation and duty assessment.',
          'Entry Type 01 is the standard classification for commercial sea freight requiring formal customs processing.',
          'Commercial shipments typically clear as Entry Type 01, subject to full inspection and duty collection protocols.',
        ],
      },
      {
        title: 'UFLPA Compliance',
        descriptions: [
          'Shipments from China must demonstrate compliance with the Uyghur Forced Labor Prevention Act. Documentation proving supply chain transparency may be required.',
          'The UFLPA requires evidence that goods were not produced using forced labor. Be prepared to provide supply chain documentation.',
          'CBP may request proof of UFLPA compliance for any shipment from China. Maintain detailed supplier records.',
          'All China-origin cargo is subject to UFLPA scrutiny. Importers must be able to verify ethical sourcing.',
        ],
        isWarning: true,
      },
    ],
    airRules: [
      {
        title: 'ACAS Screening',
        descriptions: [
          'Air Cargo Advance Screening data must be transmitted before loading in China. Your freight forwarder handles this filing.',
          'ACAS is mandatory for all air cargo to the US. Screening data is submitted by the carrier before departure.',
          'Air shipments require ACAS filing prior to loading. This security screening is performed by your logistics provider.',
          'The ACAS program requires pre-departure data submission for all air freight bound for the United States.',
        ],
      },
      {
        title: 'Section 321 De Minimis',
        descriptions: [
          'Air shipments valued under $800 may qualify for duty-free entry with simplified clearance procedures—ideal for e-commerce.',
          'The $800 de minimis threshold allows low-value air cargo to enter without duties and with minimal paperwork.',
          'E-commerce shipments under $800 can clear quickly using Section 321, avoiding formal entry requirements.',
          'Low-value air freight (under $800) benefits from streamlined Section 321 clearance with no duty payment.',
        ],
      },
      {
        title: 'Rapid Clearance Timeline',
        descriptions: [
          'Air freight clears within hours of arrival. Documentation errors can result in expensive airport storage fees.',
          'Unlike sea freight, air cargo must clear quickly. Delays mean costly holds at airport facilities.',
          'Air shipments have tight clearance windows. Ensure all paperwork is correct to avoid airport demurrage.',
          'The fast pace of air freight leaves little room for error. Incorrect documents lead to immediate holds.',
        ],
        isWarning: true,
      },
    ],
    keyFocus: [
      'UFLPA compliance is a current CBP priority for all China shipments',
      'ISF late fees are strictly enforced without exceptions',
      'FDA prior notice is required for food and pharmaceutical products',
      'FCC certification needed for electronic devices',
    ],
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
          'Submit Advance Commercial Information ahead of arrival to facilitate smooth customs processing.',
        ],
      },
      {
        title: 'Wood Packaging Rules',
        descriptions: [
          'All wooden pallets and packaging must bear the ISPM-15 stamp. Non-compliant containers face immediate deportation.',
          'CBSA strictly enforces ISPM-15 for wood packaging. Missing stamps result in container rejection.',
          'Wooden packaging without proper heat treatment certification will be refused entry at Canadian ports.',
          'Ensure all wood materials carry ISPM-15 marks. Canada does not allow non-compliant packaging.',
        ],
        isWarning: true,
      },
      {
        title: 'CARM Registration',
        descriptions: [
          'Importers must register in the CBSA Assessment and Revenue Management portal to manage duties and taxes.',
          'The CARM Client Portal is now mandatory for paying import duties directly to the government.',
          'All importers need an active CARM account. This digital system replaces older payment methods.',
          'Register with CARM before your first shipment arrives. It is required for duty payment processing.',
        ],
      },
    ],
    airRules: [
      {
        title: 'CARM Portal',
        descriptions: [
          'The CARM Client Portal is required for all importers to pay duties and taxes directly to CBSA.',
          'Air freight importers must use CARM for duty payments. Ensure your portal registration is active.',
          'CBSA processes all import duties through CARM. Register before your air shipment arrives.',
          'Payment of air freight duties requires an active CARM account with CBSA.',
        ],
      },
      {
        title: 'LVS Simplified Entry',
        descriptions: [
          'Air shipments valued under CAD $3,300 qualify for Low Value Shipment simplified accounting procedures.',
          'The LVS program streamlines clearance for air cargo under CAD $3,300 with reduced documentation.',
          'Low-value air freight benefits from simplified LVS processing, speeding up release times.',
          'Goods under CAD $3,300 can use LVS procedures, requiring minimal paperwork and faster clearance.',
        ],
      },
      {
        title: 'Quick Release Required',
        descriptions: [
          'Air cargo must clear rapidly. Documentation must be prepared before the flight lands.',
          'The short clearance window for air freight means all paperwork must be perfect upon arrival.',
          'Air shipments clear within hours. Have all documents ready to avoid costly airport holds.',
          'Unlike sea freight, air cargo cannot wait. Prepare documentation well in advance.',
        ],
        isWarning: true,
      },
    ],
    keyFocus: [
      'CARM registration is now mandatory for all importers',
      'CFIA permits required for food and plant products',
      'Health Canada approval needed for medical devices',
      'Bilingual labeling (English/French) required for consumer products',
    ],
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
          'No goods can clear UK customs without a registered GB EORI number.',
        ],
      },
      {
        title: 'CDS Entry',
        descriptions: [
          'All customs declarations go through the Customs Declaration Service (CDS), which replaced the older CHIEF system.',
          'The CDS is the UK\'s primary customs declaration platform. Ensure your broker is CDS-registered.',
          'HMRC processes sea freight entries via CDS. Your customs agent handles the declaration filing.',
          'Customs Declaration Service entries are required for all commercial imports to the UK.',
        ],
      },
      {
        title: 'Postponed VAT Accounting',
        descriptions: [
          'UK businesses can defer import VAT using PVA, declaring and recovering VAT on their return instead of paying at the port.',
          'PVA lets you account for import VAT on your VAT return rather than paying upfront at customs.',
          'Postponed VAT Accounting improves cash flow by eliminating the need to pay VAT at the border.',
          'Registered businesses can use PVA to handle import VAT through their regular tax return.',
        ],
      },
    ],
    airRules: [
      {
        title: 'Simplified Frontier Declaration',
        descriptions: [
          'Air freight often uses Simplified Frontier Declaration for rapid release, with a supplementary declaration filed later.',
          'SFD allows quick clearance of air cargo, followed by a complete declaration within a set timeframe.',
          'Speed up air freight release with Simplified Frontier Declaration, completing full details afterward.',
          'The SFD process enables fast air cargo clearance while allowing time to submit full customs data.',
        ],
      },
      {
        title: 'De Minimis Rules',
        descriptions: [
          'Goods valued under £135 are duty-free, but VAT is still charged and collected at the point of sale.',
          'The £135 threshold waives customs duty, though VAT applies and must be collected from buyers.',
          'Low-value air shipments under £135 avoid duty but remain subject to VAT collection.',
          'Air cargo under £135 clears without duty, but VAT is due on all goods regardless of value.',
        ],
      },
      {
        title: 'UKCA Marking',
        descriptions: [
          'Products previously using CE marking now require UKCA marking for the UK market.',
          'Post-Brexit, UK-specific UKCA marks are required instead of EU CE marks.',
          'Ensure products carry UKCA marking for UK import. CE marks alone are no longer sufficient.',
          'The UKCA mark has replaced CE marking requirements for goods sold in the United Kingdom.',
        ],
        isWarning: true,
      },
    ],
    keyFocus: [
      'EORI number is mandatory for all imports post-Brexit',
      'UKCA marking required for products previously using CE marking',
      'PVA is available to improve cash flow on import VAT',
      'Strict HS Code accuracy requirements—errors cause delays',
    ],
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
          'All sea freight requires a Packing Declaration listing any natural materials in the shipment.',
        ],
      },
      {
        title: 'BMSB Treatment',
        descriptions: [
          'From September to May, sea containers from China may require heat treatment or fumigation for Brown Marmorated Stink Bug.',
          'Seasonal BMSB requirements mean your container may need specialized treatment during risk months.',
          'The stink bug season requires additional biosecurity measures for sea freight from high-risk regions.',
          'Heat treatment or fumigation may be mandatory for sea containers arriving during BMSB season.',
        ],
        isWarning: true,
      },
      {
        title: 'ISPM-15 Compliance',
        descriptions: [
          'All wooden packaging must meet ISPM-15 standards with proper heat treatment certification stamps.',
          'Non-compliant wood packaging will be fumigated at your expense or rejected entirely.',
          'ISPM-15 stamped wood is mandatory. Australia does not accept untreated timber materials.',
          'Ensure all pallets and crates bear ISPM-15 marks to avoid costly treatment at the port.',
        ],
        isWarning: true,
      },
    ],
    airRules: [
      {
        title: 'GST at Border',
        descriptions: [
          'Australia charges 10% GST on almost all imports, including those under AUD $1,000 if the seller is GST-registered.',
          'A 10% GST applies to imported goods. Even low-value items may be subject to this tax.',
          'Import GST is collected at the border at a rate of 10% on the goods value plus shipping.',
          'All air freight is subject to 10% GST, calculated on the total landed cost of goods.',
        ],
      },
      {
        title: 'Self-Assessed Clearance',
        descriptions: [
          'Air cargo valued at AUD $1,000 or less can use Self-Assessed Clearance (SAC) for simplified processing.',
          'The SAC program allows quick clearance of low-value air shipments with minimal documentation.',
          'Air freight under AUD $1,000 qualifies for streamlined SAC procedures, reducing clearance time.',
          'Self-Assessed Clearance speeds up low-value air cargo release with simplified entry requirements.',
        ],
      },
      {
        title: 'Biosecurity Priority',
        descriptions: [
          'Air freight is also subject to biosecurity inspection. Ensure no prohibited organic materials are included.',
          'Australia\'s biosecurity rules apply equally to air cargo. Inspections can delay non-compliant shipments.',
          'Even air freight must pass biosecurity screening. Prohibited items will be seized or destroyed.',
          'The Department of Agriculture inspects air cargo for biosecurity risks. Compliance is essential.',
        ],
        isWarning: true,
      },
    ],
    keyFocus: [
      'Biosecurity is Australia\'s primary customs focus—not just taxes',
      'Fumigation certificates required for all wooden packaging',
      'First-time importers often face DAFF inspection',
      'GST (10%) charged on goods value plus shipping plus insurance',
    ],
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
          'Germany prioritizes product safety. Ensure CE certification and proper labeling before shipping.',
        ],
        isWarning: true,
      },
      {
        title: 'ENS Declaration',
        descriptions: [
          'Entry Summary Declaration is required under the EU\'s Import Control System for security purposes.',
          'The ENS must be filed before goods arrive. This is part of EU-wide security screening requirements.',
          'Submit your Entry Summary Declaration in advance to comply with EU import control regulations.',
          'ENS filing ensures your cargo passes EU security protocols before entering Germany.',
        ],
      },
      {
        title: 'Einfuhrumsatzsteuer',
        descriptions: [
          'Import VAT (Einfuhrumsatzsteuer) is charged at 19% and must be paid before cargo release.',
          'Germany charges 19% import VAT. This is due at the time of customs clearance.',
          'Expect to pay 19% Einfuhrumsatzsteuer on your landed goods value plus duty.',
          'Import VAT at 19% is payable upon clearance. Registered businesses can reclaim this later.',
        ],
      },
    ],
    airRules: [
      {
        title: 'ICS2 Pre-Loading Data',
        descriptions: [
          'High-level security data must be transmitted before air cargo is even loaded onto the plane in China.',
          'The ICS2 system requires advance data submission for all air freight before departure.',
          'ICS2 security filing happens before loading. Your forwarder handles this pre-departure requirement.',
          'Air cargo requires ICS2 data transmission prior to loading at origin airport.',
        ],
      },
      {
        title: 'IOSS for E-Commerce',
        descriptions: [
          'For e-commerce air shipments under €150, VAT is collected at the point of sale, enabling instant customs clearance.',
          'The IOSS program allows pre-paid VAT on low-value goods, eliminating customs VAT collection.',
          'E-commerce shipments under €150 clear instantly when VAT is collected via IOSS at checkout.',
          'Import One-Stop Shop (IOSS) simplifies VAT for small parcels by collecting tax before shipping.',
        ],
      },
      {
        title: 'Product Documentation',
        descriptions: [
          'German authorities may request technical documentation, test reports, and compliance certificates for air cargo.',
          'Be prepared to provide CE certificates, test reports, and declarations of conformity.',
          'Air freight may be inspected for product compliance. Have all technical documents ready.',
          'German customs may require proof of product compliance even for air shipments.',
        ],
        isWarning: true,
      },
    ],
    keyFocus: [
      'Product compliance (CE marking, REACH) is strictly enforced',
      'Packaging registration (VerpackG) requires LUCID registration',
      'Battery registration required for products containing batteries',
      '19% import VAT (Einfuhrumsatzsteuer) applies to all goods',
    ],
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
          'Take advantage of Article 23 to improve cash flow—no VAT due at the port of entry.',
        ],
      },
      {
        title: 'Rotterdam Transshipment',
        descriptions: [
          'Rotterdam is a major EU transshipment hub. T1 documents are required if goods are moving onward to another EU country.',
          'For cargo transiting through Rotterdam to elsewhere in the EU, ensure T1 transit documentation is prepared.',
          'If your final destination isn\'t the Netherlands, you\'ll need T1 documents for EU transit.',
          'Transshipment via Rotterdam requires proper transit paperwork for onward EU movement.',
        ],
      },
      {
        title: 'ENS Declaration',
        descriptions: [
          'Entry Summary Declaration is required for EU port entry under the Import Control System.',
          'Submit ENS data before arrival at Rotterdam. This is mandatory for all sea freight.',
          'The ENS filing ensures compliance with EU security requirements at Dutch ports.',
          'EU regulations require ENS submission before your vessel reaches Netherlands waters.',
        ],
      },
    ],
    airRules: [
      {
        title: 'ICS2 Security Filing',
        descriptions: [
          'Air cargo security data must be submitted under ICS2 before loading at the origin airport.',
          'The ICS2 system requires pre-departure data transmission for all air shipments to the EU.',
          'Submit ICS2 data before your cargo is loaded. This is an EU-wide security requirement.',
          'Air freight to the Netherlands requires ICS2 filing prior to departure from China.',
        ],
      },
      {
        title: 'IOSS Instant Clearance',
        descriptions: [
          'E-commerce air shipments under €150 can use IOSS, where VAT is collected at purchase for instant clearance.',
          'The IOSS system enables immediate customs release for low-value parcels with pre-paid VAT.',
          'Small e-commerce packages clear instantly via IOSS when VAT was collected at checkout.',
          'Import One-Stop Shop allows sub-€150 shipments to bypass customs VAT collection.',
        ],
      },
      {
        title: 'Schiphol Efficiency',
        descriptions: [
          'Amsterdam Schiphol offers streamlined air cargo processing with efficient customs procedures.',
          'Air freight via Schiphol benefits from modern handling and rapid customs clearance systems.',
          'Schiphol Airport provides fast air cargo processing with advanced customs infrastructure.',
          'Netherlands air freight typically clears quickly through Schiphol\'s efficient systems.',
        ],
      },
    ],
    keyFocus: [
      'Article 23 VAT deferment is a major advantage for importers',
      'Rotterdam is a top EU transshipment hub—T1 documents needed for transit',
      'AEO status available for simplified customs procedures',
      'EORI number is mandatory for all EU imports',
    ],
  },
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
        'Customs entry must be filed and processed before cargo can be released.',
      ],
    },
    {
      title: 'Duty Payment',
      descriptions: [
        'Import duties are calculated based on HS code classification and declared value.',
        'Pay applicable duties and taxes before your cargo can clear customs.',
        'Duty rates depend on product classification and trade agreements in effect.',
        'Complete duty assessment and payment to obtain cargo release.',
      ],
    },
    {
      title: 'Documentation Review',
      descriptions: [
        'Customs will verify all shipping documents including commercial invoice and packing list.',
        'Ensure all documentation is accurate and consistent to avoid processing delays.',
        'Document review is standard procedure for all commercial imports.',
        'Prepare complete and accurate paperwork to facilitate smooth clearance.',
      ],
    },
  ],
  airRules: [
    {
      title: 'Rapid Processing',
      descriptions: [
        'Air freight requires quick clearance. Documentation must be ready before arrival.',
        'Air cargo clears within hours. Ensure all paperwork is prepared in advance.',
        'The fast pace of air freight means documentation errors cause immediate holds.',
        'Have all documents ready for air shipments to avoid costly airport storage.',
      ],
    },
    {
      title: 'Security Screening',
      descriptions: [
        'All air cargo undergoes security screening as part of international aviation requirements.',
        'Security checks are mandatory for air freight before customs release.',
        'Air shipments must pass security protocols before entering the clearance process.',
        'Expect security screening as part of the air cargo clearance procedure.',
      ],
    },
    {
      title: 'Simplified Procedures',
      descriptions: [
        'Low-value air shipments may qualify for simplified clearance with reduced documentation.',
        'Some countries offer expedited procedures for air cargo under certain value thresholds.',
        'Check if your air shipment qualifies for simplified or de minimis clearance.',
        'Low-value goods may benefit from streamlined air freight customs procedures.',
      ],
    },
  ],
  keyFocus: [
    'Contact destination customs for specific import requirements',
    'HS Code accuracy is critical for correct duty calculation',
    'Import licenses may be required for restricted goods',
    'Local customs broker recommended for smooth clearance',
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

// Get customs clearance info for a specific route and freight type
export function getCustomsClearance(
  originCity: string,
  destinationCity: string,
  destinationCountry: string,
  freightType: 'sea' | 'air'
): CountryClearance {
  const normalizedCountry = destinationCountry.toLowerCase();
  const seed = simpleHash(`${originCity}-${destinationCity}-customs`);

  // Find matching country
  let countryData = defaultClearanceData;
  for (const [country, data] of Object.entries(countryClearanceData)) {
    if (normalizedCountry.includes(country) || country.includes(normalizedCountry.split(' ')[0])) {
      countryData = data;
      break;
    }
  }

  // Generate rules with varied descriptions
  const rulesSource = freightType === 'sea' ? countryData.seaRules : countryData.airRules;
  const rules: ClearanceRule[] = rulesSource.map((rule, index) => ({
    title: rule.title,
    description: rule.descriptions[(seed + index) % rule.descriptions.length],
    isWarning: 'isWarning' in rule ? (rule.isWarning as boolean) : undefined,
  }));

  // Shuffle the rules order based on route
  const shuffledRules = shuffleWithSeed(rules, seed);

  // Shuffle key focus points
  const shuffledFocus = shuffleWithSeed([...countryData.keyFocus], seed);

  return {
    agencyName: countryData.agencyName,
    agencyAbbreviation: countryData.agencyAbbreviation,
    seaRules: freightType === 'sea' ? shuffledRules : [],
    airRules: freightType === 'air' ? shuffledRules : [],
    keyFocus: shuffledFocus,
  };
}

// Get universal customs concepts with varied descriptions
export function getUniversalClearanceConcepts(
  originCity: string,
  destinationCity: string
): Array<{ title: string; description: string }> {
  const seed = simpleHash(`${originCity}-${destinationCity}-universal`);

  const concepts = universalConceptsVariants.map((concept, index) => ({
    title: concept.title,
    description: concept.descriptions[(seed + index) % concept.descriptions.length],
  }));

  return shuffleWithSeed(concepts, seed);
}

// Get section title variations
export function getClearanceSectionTitle(
  originCity: string,
  destinationCity: string,
  destinationCountry: string
): string {
  const seed = simpleHash(`${originCity}-${destinationCity}-clearance-title`);
  const titles = [
    `Customs Clearance for ${destinationCity} Imports`,
    `${destinationCountry} Customs Process`,
    `Clearing Customs in ${destinationCity}`,
    `Import Clearance: ${originCity} to ${destinationCity}`,
  ];
  return titles[seed % titles.length];
}

// Get intro text variations
export function getClearanceIntroText(
  originCity: string,
  destinationCity: string,
  destinationCountry: string,
  freightType: 'sea' | 'air'
): string {
  const seed = simpleHash(`${originCity}-${destinationCity}-clearance-intro`);
  const timingNote = freightType === 'sea'
    ? 'With sea freight, you have weeks to prepare documentation, but errors can lead to significant daily storage fees (demurrage) at the port.'
    : 'Air freight clearance happens within hours of arrival. Documentation errors result in expensive holds at airport facilities.';

  const intros = [
    `Customs clearance is more than a single step—it encompasses compliance verification, valuation assessment, and security screening. ${timingNote}`,
    `Getting your cargo through ${destinationCountry} customs involves multiple stages of verification and documentation review. ${timingNote}`,
    `Understanding ${destinationCountry}'s customs process helps ensure your ${originCity} shipment clears without delays or penalties. ${timingNote}`,
    `The customs clearance process in ${destinationCity} requires accurate documentation and regulatory compliance. ${timingNote}`,
  ];
  return intros[seed % intros.length];
}

// Get key focus section title
export function getKeyFocusTitle(destinationCountry: string): string {
  const seed = simpleHash(destinationCountry + '-focus');
  const titles = [
    `Current ${destinationCountry} Customs Priorities`,
    `What ${destinationCountry} Customs Is Watching`,
    `Key ${destinationCountry} Import Considerations`,
    `${destinationCountry} Clearance Focus Areas`,
  ];
  return titles[seed % titles.length];
}
