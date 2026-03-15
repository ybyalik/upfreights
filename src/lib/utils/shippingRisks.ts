// Shipping risks and challenges by country and freight type

export interface ShippingRisk {
  title: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
}

export interface CountryRisks {
  seaRisks: ShippingRisk[];
  airRisks: ShippingRisk[];
}

// Country-specific shipping risks with description variants
const countryRisksData: Record<string, {
  seaRisks: Array<{ title: string; descriptions: string[]; severity: 'high' | 'medium' | 'low' }>;
  airRisks: Array<{ title: string; descriptions: string[]; severity: 'high' | 'medium' | 'low' }>;
}> = {
  'united states': {
    seaRisks: [
      {
        title: 'West Coast Port Congestion',
        descriptions: [
          'Los Angeles and Long Beach frequently experience vessel "bunching," where multiple ships arrive simultaneously, causing delays that can stretch for weeks.',
          'LA/Long Beach ports often see ships stacking up at anchor—when congestion peaks, containers can sit for 2-3 weeks before unloading.',
          'West Coast ports are prone to severe backlogs. Vessel bunching at LA/Long Beach can add weeks to your delivery timeline.',
          'The busiest US ports (LA and Long Beach) regularly face congestion spikes that create multi-week delays for incoming cargo.',
        ],
        severity: 'high',
      },
      {
        title: 'UFLPA Seizure Risk',
        descriptions: [
          'US Customs (CBP) aggressively seizes cargo suspected of links to forced labor in Xinjiang. Without proof of raw material sourcing, your shipment may be forfeited.',
          'The Uyghur Forced Labor Prevention Act empowers CBP to seize goods that cannot prove supply chain transparency—cargo can be permanently confiscated.',
          'CBP is actively enforcing UFLPA compliance. If your supplier cannot document the origin of raw materials, expect potential seizure and forfeiture.',
          'Forced labor concerns under UFLPA mean any goods with Xinjiang connections face seizure. Supply chain documentation is now mandatory.',
        ],
        severity: 'high',
      },
      {
        title: 'Panama Canal Restrictions',
        descriptions: [
          'For East Coast deliveries (NYC, Savannah), drought conditions in the Panama Canal can impose weight restrictions or force diversions around South America, adding 15+ days.',
          'Low water levels in the Panama Canal are causing ships to either lighten loads or reroute via Cape Horn—expect potential delays of two weeks or more to East Coast ports.',
          'Panama Canal drought conditions mean East Coast-bound cargo may face transit restrictions, with some vessels adding 15+ days by sailing around South America.',
          'East Coast shipments face Panama Canal bottlenecks due to drought. Weight limits or Cape Horn diversions can extend transit by over two weeks.',
        ],
        severity: 'medium',
      },
    ],
    airRisks: [
      {
        title: 'ACAS Security Holds',
        descriptions: [
          'Air Cargo Advance Screening (ACAS) frequently triggers security holds at JFK, LAX, and ORD, causing 2-3 day delays for inspected shipments.',
          'US customs security screening under ACAS is causing increased holds at major airports—expect potential 2-3 day delays if your cargo is flagged.',
          'High-frequency security scrutiny through ACAS means air cargo at LAX, JFK, or Chicago O\'Hare can be held for 2-3 days for additional screening.',
          'ACAS security protocols are adding delays at major US airports. Flagged shipments face 2-3 day holds for inspection at JFK, LAX, and ORD.',
        ],
        severity: 'medium',
      },
      {
        title: 'Space Volatility & Rate Spikes',
        descriptions: [
          'During major product launches (like Apple iPhone releases), tech giants buy up cargo space, causing rates for regular shippers to triple overnight.',
          'Air freight capacity can disappear instantly during big tech launches. When Apple or similar companies ship, expect rates to spike 2-3x with limited availability.',
          'Cargo space volatility is extreme—a single iPhone launch can triple air freight rates overnight as capacity gets absorbed by major shippers.',
          'Tech product releases create massive space shortages. Regular shippers face rate increases of 200-300% when major companies book capacity.',
        ],
        severity: 'medium',
      },
    ],
  },
  'canada': {
    seaRisks: [
      {
        title: 'Rail Network Bottlenecks',
        descriptions: [
          'Most sea cargo landing in Vancouver or Prince Rupert must travel by rail to Toronto or Montreal. Winter weather or labor strikes at CN/CPKC can freeze your entire supply chain.',
          'Canadian rail is the lifeline for West Coast ports—any disruption from weather or strikes at CN/CPKC railways can halt cargo movement for weeks.',
          'The rail dependency from Vancouver/Prince Rupert to Eastern Canada creates vulnerability. Winter storms or labor disputes regularly cause supply chain freezes.',
          'Sea cargo at West Coast ports faces rail bottleneck risks. CN/CPKC disruptions from strikes or weather can strand containers for extended periods.',
        ],
        severity: 'high',
      },
      {
        title: 'Winter Port Closures',
        descriptions: [
          'Extreme ice conditions in Eastern Canada can delay arrivals at the Port of Montreal, sometimes for days or weeks during harsh winter months.',
          'The Port of Montreal faces seasonal ice challenges—severe winter conditions can close or restrict port operations for extended periods.',
          'Eastern Canadian ports contend with ice-related delays. Montreal in particular may see operations disrupted during extreme winter weather.',
          'Winter ice poses real threats to Eastern Canadian ports. Montreal arrivals can be delayed significantly when ice conditions turn severe.',
        ],
        severity: 'medium',
      },
    ],
    airRisks: [
      {
        title: 'Limited Direct Capacity',
        descriptions: [
          'Compared to the US, fewer direct cargo flights operate from China to Canada. Cargo often transits through US hubs (like Chicago), creating double-handling risks and potential damage.',
          'Canada lacks the direct air cargo capacity of its southern neighbor—most shipments transit through US airports, increasing handling and damage risk.',
          'Direct China-Canada air cargo routes are limited. Transshipment through US hubs adds handling stages and increases the chance of cargo damage.',
          'Air freight to Canada frequently routes through American airports due to limited direct capacity, exposing cargo to additional handling and delays.',
        ],
        severity: 'medium',
      },
      {
        title: 'Strict Goods Description Requirements',
        descriptions: [
          'Canada is very strict on "Description of Goods." Vague terms like "Sample" or "Parts" will trigger an immediate air freight hold and delays.',
          'Canadian customs demand precise cargo descriptions—generic terms cause immediate holds. Every item must be clearly and accurately described.',
          'Imprecise goods descriptions (like "Sample" or "Parts") guarantee delays at Canadian customs. Detailed, accurate descriptions are mandatory.',
          'CBSA requires explicit goods descriptions for air cargo. Any vagueness in documentation will result in holds and clearance delays.',
        ],
        severity: 'medium',
      },
    ],
  },
  'germany': {
    seaRisks: [
      {
        title: 'Red Sea/Suez Canal Diversions',
        descriptions: [
          'Most ships from China to Hamburg are currently avoiding the Suez Canal due to conflict. Routing around Africa (Cape of Good Hope) adds 10-14 days and significant fuel surcharges.',
          'Ongoing Red Sea tensions mean vessels are sailing around Africa instead of through Suez—expect 10-14 extra days transit time plus substantial surcharges.',
          'Suez Canal diversions are impacting Germany-bound cargo. Ships rerouting via Cape of Good Hope face 10-14 day delays and steep fuel cost increases.',
          'Conflict-related Suez avoidance is the new normal. Hamburg-bound cargo from China now takes 10-14 days longer via the Cape of Good Hope route.',
        ],
        severity: 'high',
      },
      {
        title: 'Strict Product Compliance',
        descriptions: [
          'German customs are the "police" of the EU. If a toy or electronic item lacks a CE mark or proper manuals, the entire container can be ordered for destruction.',
          'Germany enforces EU product standards rigorously—missing CE marks, improper labeling, or inadequate documentation can result in container-wide destruction orders.',
          'Non-compliant products face harsh treatment at German customs. A single item without proper CE marking can put your entire shipment at risk of destruction.',
          'German authorities take product compliance seriously. Toys, electronics, and other regulated goods without proper CE marks face confiscation or destruction.',
        ],
        severity: 'high',
      },
    ],
    airRisks: [
      {
        title: 'Night Flight Bans',
        descriptions: [
          'Frankfurt (FRA) has strict noise regulations and night flight bans. If a flight from China is delayed by just 1 hour, it may be forced to land elsewhere or wait 12 hours.',
          'FRA\'s noise curfew means even minor delays can cause 12-hour holds or diversions to other airports—timing is critical for Frankfurt-bound air cargo.',
          'Night landing restrictions at Frankfurt create scheduling fragility. A one-hour delay from China can result in a 12-hour wait or forced diversion.',
          'German airports enforce strict noise curfews. Late arrivals at Frankfurt face either extended ground holds or costly diversions to alternate airports.',
        ],
        severity: 'medium',
      },
      {
        title: 'High-Value Cargo Theft Risk',
        descriptions: [
          'Air freight often contains electronics, making it a higher target for organized theft at airport warehouses. High-value shipments require extra security measures.',
          'Airport warehouse theft is a genuine concern in Europe. Electronics and valuable goods in air cargo face elevated risk from organized criminal groups.',
          'Valuable air cargo is vulnerable to theft at transit points. Electronics shipments through German airports warrant enhanced security and insurance coverage.',
          'Organized theft targeting air cargo is a documented risk. High-value electronics moving through airport warehouses require additional protective measures.',
        ],
        severity: 'medium',
      },
    ],
  },
  'netherlands': {
    seaRisks: [
      {
        title: 'Red Sea/Suez Canal Diversions',
        descriptions: [
          'Most ships from China to Rotterdam are currently avoiding the Suez Canal due to conflict. Routing around Africa (Cape of Good Hope) adds 10-14 days and massive fuel surcharges.',
          'Red Sea tensions are forcing Rotterdam-bound vessels to sail around Africa—expect 10-14 additional transit days plus significant emergency surcharges.',
          'Suez Canal diversions significantly impact Rotterdam arrivals. The Cape of Good Hope route adds nearly two weeks and substantial fuel cost increases.',
          'Ongoing conflict has made Suez transit unreliable. Rotterdam-bound cargo from China now faces 10-14 day delays via the African Cape route.',
        ],
        severity: 'high',
      },
      {
        title: 'Strict EU Product Standards',
        descriptions: [
          'Dutch customs enforce EU standards rigorously. Products lacking CE marks, proper manuals, or compliant packaging can be held, rejected, or destroyed.',
          'The Netherlands serves as an EU gateway with strict compliance enforcement. Non-conforming products face seizure, rejection, or destruction orders.',
          'As a major EU entry point, Dutch customs are unforgiving on compliance. Missing CE marks or documentation errors can doom your entire shipment.',
          'Rotterdam\'s role as EU hub means strict product scrutiny. Compliance failures result in cargo holds, expensive remediation, or outright destruction.',
        ],
        severity: 'high',
      },
    ],
    airRisks: [
      {
        title: 'Night Flight Restrictions',
        descriptions: [
          'Schiphol (AMS) has strict noise regulations and night flight bans. A delayed flight from China may be forced to land elsewhere or wait until morning.',
          'Amsterdam Schiphol\'s night curfew creates scheduling risks—late arrivals from China face 12-hour holds or costly diversions to alternate airports.',
          'Strict noise regulations at AMS mean timing is critical. Flight delays can trigger forced diversions or overnight holds until operations resume.',
          'Schiphol\'s night landing restrictions add fragility to schedules. Even minor delays from China can result in significant cargo delays or reroutings.',
        ],
        severity: 'medium',
      },
      {
        title: 'Warehouse Security Concerns',
        descriptions: [
          'High-value air cargo, especially electronics, faces elevated theft risk at airport warehouses. Consider enhanced security and comprehensive insurance.',
          'Airport facility theft is a documented concern in the region. Electronics and valuable goods warrant additional protective measures and insurance.',
          'Valuable air freight is a target for organized theft. High-value shipments through Schiphol should include extra security provisions.',
          'Warehouse security at major airports requires attention. Valuable cargo, particularly electronics, benefits from enhanced protection and coverage.',
        ],
        severity: 'medium',
      },
    ],
  },
  'united kingdom': {
    seaRisks: [
      {
        title: 'Post-Brexit Port Congestion',
        descriptions: [
          'Felixstowe and Southampton still face occasional backlogs due to new customs systems (CDS). Additional documentation requirements create processing delays.',
          'Brexit-era customs changes continue to cause friction. CDS system issues at major UK ports lead to periodic congestion and clearance delays.',
          'UK ports are still adapting to post-Brexit realities. New customs procedures at Felixstowe and Southampton create intermittent backlogs.',
          'The transition to CDS customs systems hasn\'t been seamless. UK ports experience periodic congestion as the new processes continue bedding in.',
        ],
        severity: 'medium',
      },
      {
        title: 'High Demurrage Fees',
        descriptions: [
          'UK ports have very high storage fees. If your customs broker makes a mistake on VAT/Duty filing, your container can rack up £150+ per day in demurrage.',
          'Demurrage costs at UK ports are punishing—£150+ daily. Any clearance delays from documentation errors quickly become expensive.',
          'A filing error at UK customs can trigger a costly demurrage trap. With fees exceeding £150 per day, even small mistakes have big financial consequences.',
          'UK port storage fees are among the highest. Customs filing mistakes can lead to £150+ daily charges while issues are resolved.',
        ],
        severity: 'high',
      },
    ],
    airRisks: [
      {
        title: 'Heathrow Congestion',
        descriptions: [
          'Heathrow handles the vast majority of UK air cargo with aging infrastructure. Truck wait times to collect cargo can exceed 8-12 hours.',
          'LHR\'s dominance in UK air cargo creates bottlenecks. Old infrastructure means truck collection queues of 8-12 hours are not uncommon.',
          'Heathrow\'s cargo facilities strain under volume. Expect extended truck wait times—often 8-12 hours—to retrieve your shipments.',
          'UK air cargo funnels through congested Heathrow. Collection delays of 8-12 hours are a regular occurrence due to infrastructure limitations.',
        ],
        severity: 'high',
      },
      {
        title: 'Strict Lithium Battery Requirements',
        descriptions: [
          'UK airlines are among the strictest regarding lithium batteries. Even with correct MSDS documentation, slight packaging errors will ground your cargo.',
          'Battery compliance at UK airports is exceptionally rigorous. Minor packaging deviations—even with proper paperwork—result in cargo rejection.',
          'Lithium battery shipments face intense scrutiny from UK carriers. Perfect packaging is mandatory; any error grounds the shipment regardless of documentation.',
          'UK airlines maintain zero tolerance on battery packaging. A slight deviation from requirements will prevent your cargo from flying, even with valid MSDS.',
        ],
        severity: 'high',
      },
    ],
  },
  'australia': {
    seaRisks: [
      {
        title: 'Brown Marmorated Stink Bug (BMSB)',
        descriptions: [
          'From September to May, Australia is vigilant against the Brown Marmorated Stink Bug. Untreated containers from China will be turned away or held for expensive fumigation.',
          'BMSB season (Sept-May) means mandatory treatment. If your container isn\'t fumigated in China or upon arrival, expect rejection or costly quarantine.',
          'Australia\'s BMSB biosecurity measures are strict. During high-risk season, untreated cargo faces turning away at port or mandatory fumigation.',
          'Biosecurity concerns over BMSB require proactive treatment. Containers arriving during season without proper treatment face rejection or expensive fumigation.',
        ],
        severity: 'high',
      },
      {
        title: 'End-of-Line Vessel Bunching',
        descriptions: [
          'Because Australia is at the "end of the line," delays in Asian ports often cause ships to arrive all at once, overwhelming Australian ports.',
          'Australia\'s position at the end of shipping routes means port congestion spikes when Asian delays cause multiple vessels to bunch up on arrival.',
          'Vessel bunching is an ongoing challenge for Australian ports. As the final destination on many routes, delays upstream cause simultaneous arrivals.',
          'Australian ports suffer from cascading delays. When ships are held up in Asia, they arrive together, creating sudden and severe congestion.',
        ],
        severity: 'medium',
      },
    ],
    airRisks: [
      {
        title: 'Limited Backup Flight Options',
        descriptions: [
          'Flights from China to Australia are long. If there\'s a mechanical issue or cancellation, fewer backup flights are available compared to busy China-Europe routes.',
          'The long distance from China means limited alternatives if flights are cancelled. Mechanical issues can cause multi-day delays due to scarce backup capacity.',
          'Australia\'s distance from China creates vulnerability. Flight disruptions have fewer recovery options compared to higher-frequency routes to Europe.',
          'Route distance limits contingency options. A cancelled China-Australia flight may mean waiting days for the next available cargo capacity.',
        ],
        severity: 'medium',
      },
      {
        title: 'Air Cargo Biosecurity Screening',
        descriptions: [
          'Even air cargo undergoes X-ray screening for biosecurity. Any organic matter (seeds, soil) found in a shipment can lead to destruction of the entire cargo.',
          'Australian biosecurity applies to air freight too. X-ray detection of organic contamination (seeds, soil) triggers immediate cargo destruction.',
          'Air cargo faces strict quarantine screening in Australia. Discovery of organic matter during inspection can result in complete shipment destruction.',
          'Biosecurity X-rays catch everything. Seeds, soil, or any organic contamination in your air cargo means the entire shipment may be destroyed.',
        ],
        severity: 'high',
      },
    ],
  },
};

// Default risks for countries not specifically listed
const defaultRisksData: {
  seaRisks: Array<{ title: string; descriptions: string[]; severity: 'high' | 'medium' | 'low' }>;
  airRisks: Array<{ title: string; descriptions: string[]; severity: 'high' | 'medium' | 'low' }>;
} = {
  seaRisks: [
    {
      title: 'Transit Delays',
      descriptions: [
        'International shipping routes can experience unpredictable delays due to port congestion, weather, or operational issues.',
        'Sea freight transit times are estimates—port backlogs, weather events, and operational challenges can extend delivery timelines.',
        'Expect potential delays in ocean freight due to various factors including port efficiency, weather conditions, and vessel schedules.',
        'Maritime shipping involves inherent timing uncertainty. Port conditions and weather can impact your cargo\'s arrival date.',
      ],
      severity: 'medium' as const,
    },
    {
      title: 'Documentation Requirements',
      descriptions: [
        'Each country has specific customs documentation requirements. Incomplete or inaccurate paperwork can cause clearance delays.',
        'Customs documentation standards vary by destination. Ensuring accuracy and completeness is essential to avoid clearance issues.',
        'Proper documentation is critical for smooth customs clearance. Missing or incorrect paperwork leads to holds and delays.',
        'Every destination has unique paperwork requirements. Documentation errors are a leading cause of customs delays.',
      ],
      severity: 'medium' as const,
    },
  ],
  airRisks: [
    {
      title: 'Capacity Fluctuations',
      descriptions: [
        'Air freight capacity and rates can fluctuate significantly based on seasonal demand and market conditions.',
        'Air cargo space availability varies with demand. Peak seasons and market events can rapidly change rates and availability.',
        'Expect air freight capacity and pricing to shift based on global demand patterns and seasonal shipping volumes.',
        'Air cargo markets are dynamic. Capacity constraints during busy periods can affect both availability and pricing.',
      ],
      severity: 'medium' as const,
    },
    {
      title: 'Customs Inspection Delays',
      descriptions: [
        'Air cargo may be selected for security screening or customs inspection, causing potential delays at destination airports.',
        'Random inspections and security screening can hold air cargo at customs. Factor in potential delays for time-sensitive shipments.',
        'Air freight clearance can be delayed by security checks or customs examinations. Build buffer time into critical schedules.',
        'Customs and security protocols may delay air cargo clearance. Inspections are routine but can impact delivery timing.',
      ],
      severity: 'medium' as const,
    },
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

// Get shipping risks for a specific route and freight type
export function getShippingRisks(
  originCity: string,
  destinationCity: string,
  destinationCountry: string,
  freightType: 'sea' | 'air'
): ShippingRisk[] {
  const normalizedCountry = destinationCountry.toLowerCase();
  const seed = simpleHash(`${originCity}-${destinationCity}-risks`);

  // Find matching country
  let countryData = defaultRisksData;
  for (const [country, data] of Object.entries(countryRisksData)) {
    if (normalizedCountry.includes(country) || country.includes(normalizedCountry.split(' ')[0])) {
      countryData = data;
      break;
    }
  }

  // Generate risks with varied descriptions
  const risksSource = freightType === 'sea' ? countryData.seaRisks : countryData.airRisks;
  const risks: ShippingRisk[] = risksSource.map((risk, index) => ({
    title: risk.title,
    description: risk.descriptions[(seed + index) % risk.descriptions.length],
    severity: risk.severity,
  }));

  // Shuffle the risks order based on route
  return shuffleWithSeed(risks, seed);
}

// Get section title variations
export function getRisksSectionTitle(
  originCity: string,
  destinationCity: string,
  destinationCountry: string,
  freightType: 'sea' | 'air'
): string {
  const seed = simpleHash(`${originCity}-${destinationCity}-risk-title`);
  const transportType = freightType === 'sea' ? 'Sea Freight' : 'Air Freight';
  const titles = [
    `${transportType} Risks to ${destinationCountry}`,
    `Potential Challenges: ${originCity} to ${destinationCity}`,
    `${destinationCountry} Shipping Risks to Consider`,
    `What Could Go Wrong: ${transportType} to ${destinationCity}`,
  ];
  return titles[seed % titles.length];
}

// Get intro text for the risks section
export function getRisksIntroText(
  originCity: string,
  destinationCity: string,
  destinationCountry: string,
  freightType: 'sea' | 'air'
): string {
  const seed = simpleHash(`${originCity}-${destinationCity}-risk-intro`);
  const transportType = freightType === 'sea' ? 'sea freight' : 'air freight';

  const intros = [
    `Every ${transportType} route has unique challenges. Here are the current risks for shipments from ${originCity} to ${destinationCity} that you should be aware of.`,
    `Understanding potential obstacles helps you plan better. These are the key ${transportType} risks affecting the ${originCity} to ${destinationCountry} corridor.`,
    `Being prepared means knowing what could go wrong. Here are the ${transportType} risks specific to shipments arriving in ${destinationCountry}.`,
    `Successful shipping requires risk awareness. These challenges commonly affect ${transportType} from ${originCity} to ${destinationCity}.`,
  ];
  return intros[seed % intros.length];
}

// Get CTA text variations
export function getRisksCTAText(
  destinationCountry: string,
  freightType: 'sea' | 'air'
): { heading: string; description: string } {
  const seed = simpleHash(`${destinationCountry}-${freightType}-cta`);
  const transportType = freightType === 'sea' ? 'sea freight' : 'air freight';

  const ctas = [
    {
      heading: 'Need Help Navigating These Risks?',
      description: `Our team specializes in ${transportType} to ${destinationCountry}. We help shippers avoid delays, stay compliant, and protect their cargo.`,
    },
    {
      heading: 'Don\'t Let These Challenges Derail Your Shipment',
      description: `We handle ${transportType} to ${destinationCountry} daily and know how to mitigate these risks. Let us help you ship with confidence.`,
    },
    {
      heading: 'We Can Help You Ship Safely',
      description: `Our experience with ${destinationCountry} ${transportType} means we anticipate problems before they occur. Get expert guidance for your shipment.`,
    },
    {
      heading: 'Avoid These Pitfalls With Expert Support',
      description: `Shipping to ${destinationCountry} doesn't have to be risky. Our team knows these challenges inside out and can guide you through them.`,
    },
  ];
  return ctas[seed % ctas.length];
}

// Get severity label
export function getSeverityLabel(severity: 'high' | 'medium' | 'low'): string {
  const labels = {
    high: 'High Risk',
    medium: 'Moderate Risk',
    low: 'Low Risk',
  };
  return labels[severity];
}

// Get severity color classes
export function getSeverityClasses(severity: 'high' | 'medium' | 'low'): {
  bg: string;
  text: string;
  border: string;
  icon: string;
} {
  const classes = {
    high: {
      bg: 'bg-red-50',
      text: 'text-red-700',
      border: 'border-red-200',
      icon: 'text-red-600',
    },
    medium: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      icon: 'text-amber-600',
    },
    low: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      icon: 'text-blue-600',
    },
  };
  return classes[severity];
}
