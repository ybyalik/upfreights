export interface RateRow {
  label: string;
  range: string;
}

export interface TransitRow {
  mode: string;
  time: string;
  indicativeCost: string;
  bestFor: string;
}

export interface CountryFaq {
  question: string;
  answer: string;
}

/**
 * Rich, country-specific landing-page content. Optional: countries without it
 * fall back to the original thin layout. See .claude/country-page/page-spec.md.
 */
export interface CountryPageContent {
  lastUpdated: string; // e.g. "June 2026"
  metaTitle: string; // 50-60 chars
  metaDescription: string; // 150-160 chars
  answerCapsule: string; // 75-90 words, no links
  intro: string; // 150-250 words
  originPorts: string[]; // named China origin ports for this lane
  cost: {
    snapshot: string;
    factors: string[];
    fcl: RateRow[];
    lcl: RateRow[];
    air: RateRow[];
    express: RateRow[];
    note: string;
  };
  seaFreightBody: string;
  airFreightBody: string;
  expressBody: string;
  transitComparison: TransitRow[];
  portsBody: string;
  customs: {
    summary: string;
    points: string[];
  };
  doorToDoor: string;
  steps: string[];
  faqs: CountryFaq[];
}

export interface CountryDestination {
  slug: string;
  name: string;
  code: string;
  description: string;
  majorPorts: string[];
  transitTime: string;
  popularGoods: string[];
  content?: CountryPageContent;
}

export const countryDestinations: CountryDestination[] = [
  {
    slug: 'shipping-china-to-australia',
    name: 'Australia',
    code: 'AU',
    description: 'Sea and air freight from China to Australia. 14-22 day transit to Sydney, Melbourne, Brisbane, and Fremantle. FCL, LCL, and door-to-door delivery.',
    majorPorts: ['Sydney', 'Melbourne', 'Brisbane', 'Fremantle'],
    transitTime: '14-22 days',
    popularGoods: ['Electronics', 'Furniture', 'Consumer Goods', 'Machinery', 'Textiles'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Australia: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Australia: compare sea, air and express freight costs, transit times, ports, ChAFTA duty and biosecurity rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Australia moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Australian gateways such as Sydney, Melbourne, Brisbane, and Fremantle. Sea freight takes about 14 to 30 days and air freight 3 to 8 days. Ten percent GST applies on arrival, but most Chinese goods enter duty-free under the ChAFTA trade agreement with a valid certificate of origin. Australia’s biosecurity rules are strict.',
      intro:
        'If you import from China, Australia is a lane with two quirks worth knowing up front: most goods come in duty-free under a free trade agreement, and the country has some of the strictest biosecurity rules in the world. This guide covers what shipping from China to Australia actually costs, how long each option takes, which ports your cargo moves through, and the customs, GST, and biosecurity rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 14 to 30 days depending on the port. Air freight costs more but lands in 3 to 8 days. The right choice comes down to how fast you need the goods and how much they weigh and measure. The good news on cost: under the China-Australia Free Trade Agreement (ChAFTA), most Chinese-origin goods enter at zero duty if you have a valid certificate of origin, so you often pay only GST. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the port, and the season. The ranges below are indicative and move week to week, with peak-season surcharges from roughly September to February. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Port: Fremantle (Perth) is the shortest and often cheapest leg from South China; Sydney, Melbourne, and Brisbane carry the bulk of volume.',
          'Season: peak runs from about September to February (pre-Christmas and pre-Chinese New Year), when rates rise and space tightens.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles customs, GST, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$1,000 - $2,200' },
          { label: '40ft container (FCL)', range: '$1,600 - $2,900' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$75 - $130' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$5.00 - $8.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$4.00 - $6.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$3.00 - $4.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$5.00 - $12.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL), with a typical LCL minimum of 1 CBM. Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include GST, the Import Processing Charge, biosecurity fees, or the forwarder’s clearance fee, which are covered in the customs section below. Peak-season surcharges can add 15 to 40 percent.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Australia shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 14 to 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Where your cargo lands changes the transit time. Fremantle (Perth) is the shortest leg from South China at about 14 to 19 days, while the east coast ports of Sydney, Melbourne, and Brisbane run about 18 to 30 days port to port. LCL adds roughly 5 to 10 days for consolidation and unpacking. A rough rule for choosing: below about 14 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Australian gateways such as Sydney and Melbourne, usually arriving in about 3 to 8 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric (dimensional) weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier, so larger air shipments earn a better rate per kilo. For most importers, air makes sense when arriving a couple of weeks sooner is worth the premium, and when it is not, sea freight moves the same goods for a fraction of the cost. We can quote both side by side so the trade-off is clear.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 2 to 6 days, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Australia. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL (Fremantle)', time: '14 - 19 days', indicativeCost: 'Lowest per unit', bestFor: 'Perth and Western Australia' },
        { mode: 'Sea freight, FCL (East coast)', time: '18 - 30 days', indicativeCost: 'Lowest per unit', bestFor: 'Sydney, Melbourne, Brisbane' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 5 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 14 CBM' },
        { mode: 'Air freight', time: '3 - 8 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '2 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao handle the bulk of Australia-bound containers, with South China factories usually shipping via the Pearl River Delta and East China via Shanghai or Ningbo. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Australian side, the five main container ports are Sydney (Port Botany), Melbourne, Brisbane, Fremantle (Perth), and Adelaide. Fremantle is the closest and often cheapest from South China, while Melbourne is the busiest overall. Sydney and Melbourne are also the main air-cargo gateways. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Australia is unusual in two ways: most Chinese goods come in duty-free under a trade agreement, and biosecurity is taken more seriously than almost anywhere else. Here is what applies when you import from China. The duty position depends on having the right certificate, so it is worth getting this right before you ship.',
        points: [
          'GST of 10 percent applies on the value of the taxable importation (the customs value of the goods plus duty and the transport and insurance to Australia). For consignments with a customs value of AUD 1,000 or less, GST is usually collected by the supplier at the point of sale instead of at the border.',
          'Import duty has a general rate of 5 percent, but under the China-Australia Free Trade Agreement (ChAFTA) most Chinese-origin goods enter at zero duty if you hold a valid certificate of origin or declaration of origin. Without it, the 5 percent general rate applies.',
          'Goods over AUD 1,000 need a formal Import Declaration (N10) lodged in the Border Force system, usually by a licensed customs broker, and you pay duty, GST, and the Import Processing Charge before release.',
          'Biosecurity is strict and assessed by the Department of Agriculture (DAFF). Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the mark, and you must lodge a packing declaration stating whether timber or other organic packaging is present.',
          'Containers and goods can be inspected, cleaned, or treated on arrival, not just the cargo. Missing ISPM-15 marks, dirty containers, or undeclared timber are common causes of holds, fees, treatment, or destruction. A biosecurity charge of around AUD 46 for air and AUD 68 for sea applies to consignments over AUD 1,000.',
          'Some goods need a biosecurity import permit; check the BICON system for your product. Food, plant, animal, and timber products often need a permit or treatment.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, the certificate of origin for ChAFTA duty-free entry, and the packing declaration. The importer or their broker pays duty, GST, charges, and any biosecurity fees before the goods are released.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Australian customs and biosecurity, GST and any duty, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs and biosecurity setup, and we can also handle the ChAFTA certificate of origin so you claim the zero-duty rate. The alternative, FOB or DAP, leaves some of the clearance, duty, or delivery for you to arrange. For most Australian SME importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Australian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'We help you get a ChAFTA certificate of origin so your goods qualify for zero duty, and check whether any biosecurity import permit is needed.',
        'We arrange pickup from your supplier and handle export clearance in China, making sure wood packaging meets ISPM-15.',
        'Your cargo sails or flies from the origin port, for example Shanghai, Shenzhen, or Guangzhou, to an Australian gateway such as Sydney, Melbourne, or Fremantle.',
        'We clear customs and biosecurity, pay GST and any duty and charges, and deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How long does shipping take from China to Australia?',
          answer:
            'Sea freight takes about 14 to 19 days to Fremantle (Perth) and 18 to 30 days to the east coast ports of Sydney, Melbourne, and Brisbane. Air freight is 3 to 8 days and express courier is 2 to 6 days. Add a few days for customs, biosecurity, and final delivery.',
        },
        {
          question: 'How much is shipping from China to Australia?',
          answer:
            'As an indicative guide, a 20ft container runs roughly $1,000 to $2,200, LCL is about $75 to $130 per cubic meter, and air freight is around $3 to $8 per kg depending on weight. GST and charges are extra, though most goods are duty-free under ChAFTA. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does sea freight take from China to Australia?',
          answer:
            'A full container by sea takes about 14 to 19 days to Fremantle and 18 to 30 days to Sydney, Melbourne, or Brisbane, port to port. Shared-container (LCL) cargo takes roughly 5 to 10 days longer for consolidation and unpacking.',
        },
        {
          question: 'What is the cheapest way to ship from China to Australia?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 14 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Shipping into Fremantle from South China is often the cheapest routing.',
        },
        {
          question: 'How much does it cost to ship a 40ft container from China to Australia?',
          answer:
            'Indicatively, a 40ft container runs about $1,600 to $2,900, and more in peak season when surcharges of 15 to 40 percent apply. The exact price depends on the ports, the season, and the market, so get a live quote for current pricing.',
        },
        {
          question: 'What is the fastest way to ship from China to Australia?',
          answer:
            'Express courier is fastest at 2 to 6 days door to door for small parcels, followed by air freight at 3 to 8 days. Sea freight is much slower but far cheaper for larger shipments.',
        },
        {
          question: 'What is the air freight cost from China to Australia per kg?',
          answer:
            'Air freight is roughly $3 to $8 per kg depending on the weight, with the rate per kilo falling as the shipment gets heavier. It is priced on chargeable weight, the greater of actual and volumetric weight.',
        },
        {
          question: 'Do I pay GST and import duty when shipping from China to Australia?',
          answer:
            'You pay 10 percent GST on most imports. Import duty has a general rate of 5 percent, but most Chinese-origin goods enter at zero duty under the ChAFTA free trade agreement if you have a valid certificate of origin, so often you pay only GST plus charges.',
        },
        {
          question: 'What is the China to Australia shipping route, and which ports?',
          answer:
            'Cargo usually leaves Shanghai, Ningbo, Shenzhen, or Guangzhou and arrives at one of Australia’s five main ports: Sydney, Melbourne, Brisbane, Fremantle, or Adelaide. South China to Fremantle is the shortest sea leg; the east coast ports carry the most volume.',
        },
        {
          question: 'Which is cheaper for shipping from China to Australia, FCL or LCL?',
          answer:
            'LCL (shared container) is usually cheaper for small loads under about 14 CBM, because you pay only for the space you use. Above that, a full container (FCL) is usually cheaper per unit and faster. We quote both so you can see the crossover for your shipment.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-belgium',
    name: 'Belgium',
    code: 'BE',
    description: 'Sea and air freight from China to Belgium. 28-35 day transit via Antwerp and Zeebrugge. FCL, LCL, customs clearance, and door-to-door delivery.',
    majorPorts: ['Antwerp', 'Zeebrugge'],
    transitTime: '28-35 days',
    popularGoods: ['Electronics', 'Textiles', 'Machinery', 'Consumer Goods', 'Chemicals'],
    content: {
      lastUpdated: 'July 2026',
      metaTitle: 'Shipping From China to Belgium: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Belgium: compare sea, air and express freight costs, transit times, the Port of Antwerp and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Belgium moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Antwerp-Bruges, one of Europe’s largest ports with direct China services. Sea freight takes about 30 to 45 days and air freight 5 to 8 days. Belgian import VAT of 21 percent and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Belgium, or into Europe through Belgium, you are shipping to one of the best-connected ports on the continent: Antwerp. This guide covers what shipping from China to Belgium actually costs, how long each option takes, which ports your cargo moves through, and the Belgian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 30 to 45 days. Air freight costs more but arrives in about 5 to 8 days. Belgium is in the EU, so you need an EORI number to clear customs and should plan for 21 percent import VAT plus any duty. One Belgian advantage worth knowing: with an ET 14000 licence you can defer import VAT and account for it on your VAT return instead of paying cash at the border. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been volatile in 2026, with Red Sea diversions around the Cape of Good Hope lengthening Asia to North Europe sailings. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Direct service: Antwerp has frequent direct China calls, so it avoids a transshipment leg and suits onward EU distribution.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to the ocean leg.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,000 - $3,500' },
          { label: '40ft container (FCL)', range: '$3,000 - $6,000' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$35 - $100' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $10.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $8.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.50 - $6.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$9.00 - $13.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Belgian import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Belgium shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Belgium’s advantage is Antwerp-Bruges, one of Europe’s two largest container ports, with frequent direct sailings from China, so it does not depend on a transshipment leg. It is also an excellent distribution gateway, with dense road, rail, and barge links across the EU. Transit is typically 30 to 45 days port to port, with LCL adding about 7 to 10 days. In 2026, Cape of Good Hope routing has added time to some sailings. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Brussels or Liège, usually arriving in about 5 to 8 days. Liège in particular is one of Europe’s top cargo airports, a 24/7 hub with scheduled China freighter services and the Cainiao European e-commerce base, so Belgium has strong air capacity from China. Air costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 6 days into Belgium, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Belgium. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '30 - 45 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 8 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Belgium-bound containers. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong, plus dedicated freighter origins that feed Liège. On the Belgian side, Antwerp-Bruges is the main container gateway, one of Europe’s two largest ports with strong direct China services and excellent onward distribution across the EU by road, rail, and barge; the Zeebrugge platform is part of the same merged port. For air freight, Brussels Airport handles belly and general cargo, while Liège is a major dedicated freight hub with scheduled China services. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Belgium sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs at Antwerp they move freely across the EU. There is no VAT-free allowance for commercial imports, so plan around 21 percent import VAT and any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Belgian import VAT is 21 percent, charged on the customs value plus duty plus transport to the EU border. VAT-registered businesses recover it as input tax.',
          'With an ET 14000 licence, an importer can defer import VAT and account for it on the periodic VAT return instead of paying cash at the border, which is a real cash-flow advantage of clearing goods in Belgium.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. It is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. Since 1 July 2026 the EUR 150 customs-duty exemption has also ended, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Belgian and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Belgian importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses with an ET 14000 licence sometimes prefer to be the importer of record so they can defer and recover the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Belgian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have an EORI number, and ask us about ET 14000 import VAT deferment if you want to ease cash flow.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails directly to Antwerp-Bruges, or flies into Brussels or Liège.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Belgium?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,000 to $3,500 for a 20ft container, LCL is about $35 to $100 per cubic meter, and air freight is around $4.50 to $10 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Belgium take?',
          answer:
            'Sea freight takes about 30 to 45 days port to port to Antwerp, helped by direct China services. Air freight is about 5 to 8 days and express courier is 3 to 6 days. In 2026, Red Sea diversions have added time to some sailings.',
        },
        {
          question: 'Why is Antwerp a good port for China imports?',
          answer:
            'Antwerp-Bruges is one of Europe’s two largest container ports, with frequent direct sailings from China, so it does not depend on a transshipment leg. It also has excellent road, rail, and barge links, which makes it a strong base for distributing across the EU.',
        },
        {
          question: 'What is the ET 14000 licence and why does it matter?',
          answer:
            'ET 14000 is a Belgian import VAT deferment licence. Instead of paying 21 percent import VAT in cash when your goods clear customs, you account for it on your periodic VAT return, where you can usually reclaim it at the same time. It removes the cash-flow hit and is a reason many importers clear European cargo in Belgium.',
        },
        {
          question: 'What is the cheapest way to ship from China to Belgium?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Belgium?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, a one-time and free registration valid across all 27 EU countries. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'Can I use Belgium as a distribution gateway for Europe?',
          answer:
            'Yes. Antwerp is a leading EU distribution gateway, and once goods clear customs there they move freely across the EU. Combined with the ET 14000 VAT deferment, Belgium is a popular entry point for importers serving several EU countries.',
        },
        {
          question: 'What documents do I need to import from China to Belgium?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-brazil',
    name: 'Brazil',
    code: 'BR',
    description: 'Sea freight from China to Brazil. 35-45 day transit via Santos, Rio de Janeiro, and Paranaguá. FCL, LCL, and customs clearance for South American imports.',
    majorPorts: ['Santos', 'Rio de Janeiro', 'Paranaguá'],
    transitTime: '35-45 days',
    popularGoods: ['Electronics', 'Machinery', 'Textiles', 'Consumer Goods', 'Auto Parts'],
    content: {
      lastUpdated: 'July 2026',
      metaTitle: 'Shipping From China to Brazil: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Brazil: sea, air and express freight costs, transit times, Santos port, and Brazil’s layered import taxes and RADAR rules. Free quote.',
      answerCapsule:
        'Shipping from China to Brazil moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Santos, the largest port in Latin America, or Paranaguá and Itajaí. Sea freight takes about 32 to 45 days and air freight 5 to 9 days. Brazil’s import taxes are high and layered, and importers must hold a RADAR licence to clear goods, so plan landed cost carefully.',
      intro:
        'If you import from China into Brazil, the freight is the easy part: the hard part is Brazil’s stacked import taxes and its customs registration. This guide covers what shipping from China to Brazil actually costs, how long each option takes, which ports your cargo moves through, and the Brazilian import rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 32 to 45 days, since this is a long haul. Air freight costs more but arrives in about 5 to 9 days. The most important thing for Brazil: the import taxes (import duty, IPI, PIS/COFINS, and state ICMS) stack on top of each other and often add more to your landed cost than the freight, and you cannot clear anything without a RADAR licence and a registered Brazilian importer. Sort those out first, then request a live quote and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been trending up in 2026 on tight capacity and rerouting. They cover freight only: Brazilian import taxes are paid on top and are often the largest cost. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Import taxes, not freight, are usually the biggest cost: import duty, IPI, PIS/COFINS, and state ICMS stack on top of each other.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing: this is a long haul, and 2026 Red Sea diversions push some services around the Cape of Good Hope, adding time and cost.',
          'Customs: Brazilian clearance can be slow and document-sensitive, and Santos can be congested, so build in buffer.',
          'Service level: door-to-door (DDP) bundles freight, taxes, and delivery into one price, which removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,500 - $4,500' },
          { label: '40ft container (FCL)', range: '$2,800 - $5,000' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$60 - $120' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$8.00 - $12.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$6.50 - $10.50' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$6.00 - $8.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$14.00 - $17.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Brazil’s import taxes (import duty, IPI, PIS/COFINS, and ICMS) or the clearance fee, which are the largest part of landed cost and are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Brazil shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. This is a long haul from China across the Pacific and Atlantic, or around the Cape of Good Hope, so transit is typically 32 to 45 days port to port, with LCL adding about 7 to 10 days. Cargo arrives at Santos, the largest port in Latin America and the main gateway serving São Paulo, with Paranaguá, Itajaí, Navegantes, and Rio de Janeiro as alternatives. Santos can be congested and Brazilian customs can be slow, so build in buffer time. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters on this long lane. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to São Paulo Guarulhos, usually arriving in about 5 to 9 days, often via a North American or European hub. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for a fraction of the cost, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 5 to 8 days into Brazil, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Brazil, though the import taxes still apply. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '32 - 45 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 9 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '5 - 8 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao handle the bulk of Brazil-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Brazilian side, Santos is by far the largest port, the main gateway for São Paulo and the industrial southeast, with Paranaguá in the south, Itajaí and Navegantes in Santa Catarina, and Rio de Janeiro as alternatives. The main air gateway is São Paulo Guarulhos. Santos is known for congestion, so an alternative port sometimes saves time for cargo not bound for São Paulo. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Brazilian customs is where this lane gets complicated. There is no free trade agreement with China, the import taxes stack in layers, and you cannot clear anything without the right registration. Here is what applies. The key is to model your full landed cost, not just the freight, before you order.',
        points: [
          'Import taxes stack on top of each other. Import Duty (II) is charged on the CIF value, roughly 0 to 35 percent by product. IPI (a tax on manufactured goods, roughly 0 to 15 percent) is added on top, then PIS/COFINS-Importação (about 11.75 percent combined), then state ICMS (a VAT-like tax, usually about 17 to 19 percent) calculated on top of everything else. Together these often add more than the freight.',
          'There is no China-Brazil free trade agreement, so goods pay the standard Mercosur common external tariff with no preference.',
          'You must hold a RADAR licence with Receita Federal, and the importer must be a registered Brazilian entity. Nothing clears without it, and it is a common first-time blocker.',
          'The import declaration is filed electronically in the Siscomex system (DI or DUIMP). Documentation errors get shipments held, and clearance can take days to weeks.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, and the import declaration, plus a certificate of origin where relevant and product licences for regulated goods (for example Anatel for electronics or Anvisa for health products).',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or the cargo can be held or rejected.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Brazilian customs and the import taxes, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. Because Brazil’s import taxes are heavy and the clearance is complex, having a clear all-in price up front avoids surprises, but the consignee still needs a RADAR licence and must be a registered Brazilian importer, since the import rights sit with them. The alternative, FOB or CIF, leaves the Brazilian clearance, taxes, and delivery for you to arrange through a local broker. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Brazilian delivery address.',
        'Make sure the importer has a RADAR licence and is registered with Receita Federal, and we help you estimate the full landed cost including the stacked import taxes.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative freight costs and transit times, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Santos, Paranaguá, or Itajaí, or flies into São Paulo Guarulhos.',
        'We file the import declaration in Siscomex, handle the import taxes, and clear your shipment, then deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Brazil?',
          answer:
            'As an indicative guide for freight only, sea runs roughly $2,500 to $4,500 for a 20ft container, LCL is about $60 to $120 per cubic meter, and air freight is around $6 to $12 per kg. Brazil’s import taxes are paid on top and are often the largest cost. Request a live quote for your exact cargo.',
        },
        {
          question: 'Why are import taxes so high in Brazil?',
          answer:
            'Brazil stacks several taxes on imports: import duty on the CIF value, then IPI, then PIS/COFINS, then state ICMS, each calculated on the running total. Together they often add more to your landed cost than the goods and freight combined, so it is essential to model the full cost before you order.',
        },
        {
          question: 'How long does shipping from China to Brazil take?',
          answer:
            'Sea freight takes about 32 to 45 days port to port to Santos, since it is a long haul across the Pacific and Atlantic or around the Cape of Good Hope. Air freight is about 5 to 9 days and express courier is 5 to 8 days. Brazilian customs can add days to weeks.',
        },
        {
          question: 'Do I need a RADAR licence to import into Brazil?',
          answer:
            'Yes. You cannot legally clear and pay import taxes in Brazil without a RADAR licence with Receita Federal, and the importer must be a registered Brazilian entity. It is a hard gate and a common first-time blocker, so arrange it before the goods ship.',
        },
        {
          question: 'What is the cheapest way to ship from China to Brazil?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time on this long lane.',
        },
        {
          question: 'Which Brazilian port should I ship into?',
          answer:
            'Santos is the largest port and the main gateway for São Paulo, but it can be congested. Paranaguá, Itajaí, and Navegantes in the south are alternatives, and Rio de Janeiro serves the southeast. The best choice depends on where your goods are going, since inland transport is part of the total cost.',
        },
        {
          question: 'How long does Brazilian customs clearance take?',
          answer:
            'It varies. Clearance runs through the Siscomex system, and with clean documents it can be a few days, but errors or inspections can extend it to weeks. Santos congestion can add more. This is why a registered importer, a RADAR licence, and accurate paperwork matter so much.',
        },
        {
          question: 'What documents do I need to import from China to Brazil?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, and the import declaration filed in Siscomex, plus a certificate of origin where relevant and product licences for regulated goods. The importer needs a RADAR licence, and wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-canada',
    name: 'Canada',
    code: 'CA',
    description: 'Sea and air freight from China to Canada. 14-30 day transit to Vancouver, Toronto, Montreal, and Halifax. FCL, LCL, customs clearance, and door-to-door delivery.',
    majorPorts: ['Vancouver', 'Toronto', 'Montreal', 'Halifax'],
    transitTime: '14-30 days',
    popularGoods: ['Consumer Goods', 'Machinery', 'Furniture', 'Electronics', 'Textiles'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Canada: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Canada: compare sea, air and express freight costs, transit times, ports and Canadian customs, duty and GST rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Canada moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Canadian gateways such as Vancouver, Prince Rupert, and Montreal. West Coast sea freight takes about 12 to 20 days and air freight 3 to 8 days. Canadian duty and 5 percent GST apply on arrival, and since 2026 every importer needs their own CARM account.',
      intro:
        'If you import from China, Canada is a lane where the routing and the customs setup matter as much as the freight rate. This guide covers what shipping from China to Canada actually costs, how long each option takes, which ports your cargo moves through, and the Canadian customs and tax rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and reaches the West Coast in about 12 to 20 days. Air freight costs more but lands in 3 to 8 days. The right choice comes down to how fast you need the goods, how much they weigh and measure, and whether they are headed to the West, the East, or central Canada. One thing every Canadian importer must sort out first: since 2026 you need your own business number and CARM account to import, and you can no longer rely on a broker’s number. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the coast you ship to, and the season. The ranges below are indicative and have been especially volatile in 2026, with ocean spot rates swinging sharply month to month. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Coast: West Coast ports (Vancouver, Prince Rupert) are fastest and usually cheapest from Asia; all-water service to Montreal or Halifax takes longer.',
          'Season: rates climb before Chinese New Year (January to February) and again in the autumn pre-holiday peak.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, GST, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,500 - $6,700' },
          { label: '40ft container (FCL)', range: '$3,500 - $8,300' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$90 - $200' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$7.00 - $14.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $10.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.00 - $8.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$6.00 - $17.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Canadian customs duty, 5 percent GST, or the forwarder’s clearance fee, which are covered in the customs section below. FCL ranges are wide because 2026 ocean rates have moved sharply.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Canada shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 13 to 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Where your cargo lands matters in Canada. West Coast ports (Vancouver and Prince Rupert) are closest to Asia and fastest, typically 12 to 20 days port to port, then move inland by rail to Alberta, the Prairies, and central Canada. For Ontario, Quebec, and the Atlantic, you can route West Coast plus rail, or all-water to Montreal or Halifax, which takes about 25 to 35 days but can avoid West Coast rail congestion. LCL adds roughly 6 to 10 days for consolidation and unpacking. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen to Canadian gateways such as Toronto Pearson, Vancouver, and Montreal, usually arriving in about 3 to 8 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric (dimensional) weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier, so larger air shipments earn a better rate per kilo. For most importers, air makes sense when arriving a couple of weeks sooner is worth the premium, and when it is not, sea freight moves the same goods for a fraction of the cost. We can quote both side by side so the trade-off is clear.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 2 to 7 days, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Canada. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL (West Coast)', time: '12 - 20 days', indicativeCost: 'Lowest per unit', bestFor: 'BC, Alberta, Prairies, central Canada by rail' },
        { mode: 'Sea freight, FCL (East Coast)', time: '25 - 35 days', indicativeCost: 'Low', bestFor: 'Ontario, Quebec, Atlantic Canada' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 6 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '3 - 8 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '2 - 7 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao handle the bulk of Canada-bound containers. For air freight, the main gateways are Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen. On the Canadian side, Vancouver is the largest port and the default West Coast gateway, with Prince Rupert offering the shortest sailing from Asia and fast rail to central Canada. For the east, Montreal is the main container gateway for Ontario and Quebec, and Halifax is the deep-water Atlantic option. Toronto is an inland destination reached by rail or truck rather than a seaport. The main air gateways are Toronto Pearson and Vancouver. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Canadian customs is manageable, but two things catch first-time importers: there is effectively no duty-free allowance on goods from China, and since 2026 you must have your own importer account. Here is what applies. Duty rates depend on your exact product, so confirm the rate for your goods’ classification before you ship.',
        points: [
          'Goods from China are charged duty under the Most-Favoured-Nation (MFN) tariff, set by your product’s HS classification. Many goods are duty-free and many run roughly 5 to 18 percent. China has no free trade agreement with Canada, so there is no preferential rate.',
          'Federal GST of 5 percent is charged on the duty-paid value (the value of the goods plus any duty). Depending on the province, additional provincial tax (PST, QST, or HST) may apply, usually handled through your own provincial registration rather than collected at the border.',
          'Since January 1, 2026, you must have your own business number with an import-export account and be registered in the CARM Client Portal. A customs broker can act for you, but can no longer clear goods under their own number.',
          'There is no helpful de minimis for China shipments. The higher CAD 150 duty and CAD 40 tax courier thresholds apply only to goods from the US or Mexico, so plan for duty and GST on essentially every China shipment.',
          'The importer of record is responsible for duty and GST, paid at the time of import. Under door-to-door (DDP) we handle and pay this for you; under FOB or DAP you pay as importer of record.',
          'Core documents are the commercial invoice (or Canada Customs Invoice), packing list, and bill of lading or air waybill, plus a certificate of origin where relevant and any permits from agencies like the CFIA or Health Canada for regulated goods.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or the border can refuse or destroy the packaging. Confirm with your supplier before the goods are loaded.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Canadian customs including duty and GST, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup, though you will still need your own business number and CARM account to be the importer of record. The alternative, FOB or DAP, leaves some of the clearance, duty, or delivery for you to arrange. For most Canadian SME importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Canadian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have a business number with an import-export account and a CARM account; we can point you in the right direction if you do not.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from the origin port, for example Shanghai, Ningbo, or Shenzhen, to a Canadian gateway such as Vancouver, Prince Rupert, or Montreal.',
        'We file the customs declaration, pay duty and GST, and clear your shipment, then deliver to your door. With DDP, duty, taxes, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How long does shipping from China to Canada take?',
          answer:
            'To the West Coast (Vancouver or Prince Rupert), sea freight takes about 12 to 20 days port to port; to the East Coast (Montreal or Halifax) about 25 to 35 days. Air freight is 3 to 8 days and express courier is 2 to 7 days. Add 1 to 3 days for customs clearance.',
        },
        {
          question: 'How much is shipping from China to Canada?',
          answer:
            'As an indicative guide, a 20ft container runs roughly $2,500 to $6,700, LCL is about $90 to $200 per cubic meter, and air freight is around $4 to $14 per kg depending on weight. Duty and 5 percent GST are extra. Rates have been volatile in 2026, so request a live quote.',
        },
        {
          question: 'How much is shipping from China to Canada per kg?',
          answer:
            'For air freight, expect roughly $4 to $14 per kg depending on weight, with the rate per kilo falling as the shipment gets heavier. Sea freight is priced per container or per cubic meter rather than per kg, which works out far cheaper for heavy cargo.',
        },
        {
          question: 'How much does a 20ft or 40ft container from China to Canada cost?',
          answer:
            'Indicatively, a 20ft container runs about $2,500 to $6,700 and a 40ft container about $3,500 to $8,300, depending on the coast, season, and market. These ranges are wide because 2026 ocean rates have moved sharply. Get a live quote for current pricing.',
        },
        {
          question: 'What is the cheapest way to ship from China to Canada?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper per unit once you have enough volume to fill it. Routing through the West Coast is usually cheaper and faster than all-water to the East.',
        },
        {
          question: 'Do I need a customs broker to import from China to Canada?',
          answer:
            'You are not legally required to use a broker, but most importers do because the broker classifies the goods, files the declaration, and arranges duty and GST payment. Since 2026 you must also have your own business number and CARM account; a broker can act for you but cannot clear goods under their own number.',
        },
        {
          question: 'How much duty and tax will I pay importing from China to Canada?',
          answer:
            'Duty depends on your product’s HS classification under the MFN tariff, with many goods duty-free and many around 5 to 18 percent. On top of that, 5 percent federal GST applies on the duty-paid value, plus any provincial tax depending on where you are. Our team or a broker can confirm your exact rate.',
        },
        {
          question: 'What documents do I need to import from China to Canada?',
          answer:
            'You need a commercial invoice (or Canada Customs Invoice), a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and any agency permits for regulated goods. You also need your own business number and CARM account as the importer of record.',
        },
        {
          question: 'Should I ship to the West Coast or the East Coast of Canada?',
          answer:
            'For British Columbia, Alberta, the Prairies, and much of central Canada, the West Coast (Vancouver or Prince Rupert) is fastest and usually cheapest, then moves inland by rail. For Ontario, Quebec, and Atlantic Canada, you can route West Coast plus rail or go all-water to Montreal or Halifax. We help you pick based on your delivery point.',
        },
        {
          question: 'How long is air freight from China to Canada?',
          answer:
            'Air freight from China to Toronto, Vancouver, or Montreal usually takes about 3 to 8 days, including export handling, the flight, and customs clearance. Express courier is faster at 2 to 7 days door to door for small parcels, but costs more per kilo.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-france',
    name: 'France',
    code: 'FR',
    description: 'Sea and air freight from China to France. 28-35 day transit via Le Havre and Marseille. FCL, LCL, customs clearance, and door-to-door delivery.',
    majorPorts: ['Le Havre', 'Marseille'],
    transitTime: '28-35 days',
    popularGoods: ['Textiles', 'Electronics', 'Furniture', 'Consumer Goods', 'Machinery'],
    content: {
      lastUpdated: 'July 2026',
      metaTitle: 'Shipping From China to France: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to France: compare sea, air and express freight costs, transit times, Le Havre and Marseille ports and EU customs and VAT. Free quote.',
      answerCapsule:
        'Shipping from China to France moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Le Havre for the north or Marseille-Fos for the south. Sea freight takes about 35 to 43 days and air freight 5 to 7 days. French import VAT of 20 percent and any EU duty apply, and since 2022 import VAT is reverse-charged on your VAT return rather than paid at the border.',
      intro:
        'If you import from China into France, one thing works in your favour: since 2022, import VAT is automatically reverse-charged on your VAT return, so you do not front the 20 percent at the border. This guide covers what shipping from China to France actually costs, how long each option takes, which ports your cargo moves through, and the French and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 35 to 43 days. Air freight costs more but arrives in about 5 to 7 days. France is in the EU, so you need an EORI number to clear customs and should plan for 20 percent import VAT plus any duty, though the VAT is accounted for on your return rather than paid in cash. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been volatile in 2026, with Red Sea diversions around the Cape of Good Hope lengthening sailings to both the Atlantic and the Mediterranean coast. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Port: Le Havre suits the Atlantic and northern France and the Paris basin; Marseille-Fos suits the south and the Rhône corridor.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost, and Marseille-Fos has lost some of its old Suez speed advantage.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,500 - $3,100' },
          { label: '40ft container (FCL)', range: '$3,700 - $4,600' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$30 - $60' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.50 - $10.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$6.00 - $8.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$5.00 - $6.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$11.00 - $14.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include French import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to France shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Where your cargo lands depends on the region. Le Havre, France’s main container port, suits the Atlantic and northern France and the Paris basin, at about 35 to 40 days port to port with current routing. Marseille-Fos on the Mediterranean suits the south and the Rhône corridor, at about 38 to 43 days now, though it used to be faster via the Suez Canal, which most services avoid in 2026. Dunkirk is a third option in the north. LCL adds about 7 to 10 days. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Paris Charles de Gaulle, one of Europe’s main cargo airports, usually arriving in about 5 to 7 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 5 to 8 days into France, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to France. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL (Le Havre)', time: '35 - 40 days', indicativeCost: 'Lowest per unit', bestFor: 'Northern France and the Paris basin' },
        { mode: 'Sea freight, FCL (Marseille-Fos)', time: '38 - 43 days', indicativeCost: 'Lowest per unit', bestFor: 'Southern France and the Rhône corridor' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 7 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '5 - 8 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of France-bound containers. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the French side, Le Havre, part of the HAROPA port group, is the main container port and the natural gateway for the Atlantic, northern France, and Paris, while Marseille-Fos on the Mediterranean serves the south and the Rhône corridor, and Dunkirk is a third northern option. Paris Charles de Gaulle is the main air gateway, one of Europe’s largest. Picking between Le Havre and Marseille-Fos depends on where your goods are going. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'France sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs they move freely across the EU. There is no VAT-free allowance for commercial imports, so plan around 20 percent import VAT and any duty, though France lets you account for the VAT on your return rather than pay it at the border. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'French import VAT is 20 percent. Since 2022 it is automatically reverse-charged on your French VAT return, so a VAT-registered business declares and deducts it on the same return with no cash paid at the border, a real cash-flow advantage.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. It is free, valid across all 27 EU countries, and usually issued within a few working days. A French VAT number is needed to use the reverse-charge on import VAT.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. Since 1 July 2026 the EUR 150 customs-duty exemption has also ended, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, French and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record, though a VAT-registered French business often prefers to be the importer of record so it can reverse-charge the import VAT on its return. For most French importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your French delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) and the right port (Le Havre or Marseille-Fos) for your delivery point, and you pick one.',
        'Make sure you have an EORI number and a French VAT number to use the import VAT reverse-charge; we can guide you.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Le Havre or Marseille-Fos, or flies into Paris Charles de Gaulle.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to France?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,500 to $3,100 for a 20ft container, LCL is about $30 to $60 per cubic meter, and air freight is around $5 to $10 per kg depending on weight. Import VAT and duty are extra, though VAT is accounted for on your return. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to France take?',
          answer:
            'Sea freight takes about 35 to 40 days to Le Havre and 38 to 43 days to Marseille-Fos, port to port. Air freight is about 5 to 7 days and express courier is 5 to 8 days. In 2026, Red Sea diversions have added time to some sailings.',
        },
        {
          question: 'Should I ship into Le Havre or Marseille-Fos?',
          answer:
            'Le Havre suits the Atlantic, northern France, and the Paris basin, and it is the main container port. Marseille-Fos suits the south and the Rhône corridor. In 2026 Marseille has lost some of its old Suez speed advantage because most services route around Africa, so match the port to your delivery region.',
        },
        {
          question: 'How does French import VAT work?',
          answer:
            'Since 2022, French import VAT of 20 percent is automatically reverse-charged on your VAT return. Instead of paying it in cash at the border, a VAT-registered business declares and deducts it on the same return, which removes the cash-flow hit. You need a French VAT number to use it.',
        },
        {
          question: 'What is the cheapest way to ship from China to France?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to France?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, a one-time and free registration valid across all 27 EU countries. To use the import VAT reverse-charge you also need a French VAT number.',
        },
        {
          question: 'How much duty will I pay importing from China to France?',
          answer:
            'Duty is set by your product’s commodity code in the EU TARIC tariff and charged on the CIF value, with many goods at low single-digit rates and some higher, plus anti-dumping duty on certain categories. Import VAT of 20 percent also applies, accounted for on your VAT return.',
        },
        {
          question: 'What documents do I need to import from China to France?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-germany',
    name: 'Germany',
    code: 'DE',
    description: 'Sea and air freight from China to Germany. 28-40 day transit via Hamburg, Bremerhaven, and Frankfurt. FCL, LCL, customs clearance, and door-to-door delivery.',
    majorPorts: ['Hamburg', 'Bremerhaven', 'Frankfurt'],
    transitTime: '28-40 days',
    popularGoods: ['Machinery', 'Electronics', 'Textiles', 'Consumer Goods', 'Auto Parts'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Germany: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Germany: compare sea, rail, air and express freight costs, transit times, ports and EU customs and VAT rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Germany moves cargo by sea freight, air freight, rail freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at German gateways such as Hamburg and Bremerhaven, or by rail to Duisburg. Sea freight takes about 28 to 40 days, rail 16 to 25, and air 5 to 8. German import VAT of 19 percent and any EU duty apply on arrival, and importers need an EORI number.',
      intro:
        'If you import from China, Germany is the main gateway into the European Union, and it gives you one option most other countries do not: rail. This guide covers what shipping from China to Germany actually costs, how long each option takes, which ports and routes your cargo moves through, and the German and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have several ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), rail freight, air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 28 to 40 days. Rail sits in the middle on both cost and speed at about 16 to 25 days, and air freight lands in 5 to 8 days. The right choice comes down to how fast you need the goods and how much they weigh and measure. One thing every German importer needs first: an EORI number to clear EU customs, plus a plan for 19 percent import VAT and any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and move week to week, especially for ocean rates, which have been volatile in 2026. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, rail sits in the middle, air is faster and dearer, express is fastest and dearest.',
          'Season: rates climb before Chinese New Year (January to February) and again in the autumn pre-holiday peak.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Routing: in 2026, Red Sea diversions have lengthened some ocean sailings, which has made rail more attractive for time-sensitive cargo.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,500 - $3,100' },
          { label: '40ft container (FCL)', range: '$4,600 - $5,700' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$40 - $120' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $10.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $8.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.00 - $6.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$8.00 - $13.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Rail freight from China to Germany runs roughly $4,000 to $7,000 for a 40ft container and lands between sea and air on both cost and speed. Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include German import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Germany shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, most cost-effective once you have roughly 13 to 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel with other importers’ cargo and you pay only for the space you use, the better deal for smaller loads. Transit is typically 28 to 40 days port to port to Hamburg or Bremerhaven, with LCL adding about 7 to 10 days for consolidation and unpacking. Rail freight is the option Germany has that the US does not. Trains run on the China-Europe network from inland Chinese hubs to Duisburg, Europe’s largest inland rail port, in roughly 16 to 25 days, about half the time of sea at a price between sea and air. It is a strong middle ground for cargo that is too time-sensitive for the ocean but too heavy or large to justify air. One caveat: most China-Europe rail still runs the northern corridor through Russia and Belarus, so factor in the geopolitical risk if that matters to you. A rough rule for sea container choice: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote sea, rail, and air so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters most. Cargo flies from hubs like Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen to German gateways such as Frankfurt and Munich, usually arriving in about 5 to 8 days. It costs several times more than sea or rail per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric (dimensional) weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier, so larger air shipments earn a better rate per kilo. For most importers, air makes sense when arriving sooner is worth the premium, and when it is not, sea or rail moves the same goods for far less. We can quote all three side by side so the trade-off is clear.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 7 days, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Germany. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '28 - 40 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Rail freight (to Duisburg)', time: '16 - 25 days', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive heavy cargo' },
        { mode: 'Air freight', time: '5 - 8 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 7 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao handle the bulk of Germany-bound containers. For air freight, the main gateways are Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen, while rail services start from inland Chinese hubs such as Yiwu, Xi’an, Chengdu, and Chongqing. On the German side, Hamburg is the dominant container gateway with excellent inland rail links, followed by Bremerhaven and the deep-water JadeWeserPort at Wilhelmshaven. Frankfurt is by far the largest air-cargo hub, with Munich second, and Duisburg is the main terminus for China-Europe rail. From any of these, your goods can move on across Germany and the rest of the EU once they clear customs. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Germany sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs here they move freely across the EU. There is no VAT-free allowance for commercial imports, so plan around 19 percent import VAT and any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'German import VAT (Einfuhrumsatzsteuer) is 19 percent, charged on the customs value plus duty plus transport to the EU border. VAT-registered businesses recover it as input tax, so for them it is a cash-flow item, not a permanent cost.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance to the EU border). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. You apply once through German customs (Zoll), it is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption for low-value parcels ended back in 2021, so import VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays import duty and VAT; under FOB, CIF, or DAP you are the importer of record and pay. Agreeing the Incoterm up front avoids the most common dispute.',
          'For sea, air, and rail the carrier or forwarder files an ICS2 security declaration before arrival; missing or poor data can hold the shipment. Core documents are the commercial invoice, packing list, and bill of lading, air waybill, or rail consignment note.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them. Confirm with your supplier before the goods are loaded.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg, German and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most German SME importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record so they can recover the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your German delivery address.',
        'We quote your options (sea FCL, sea LCL, rail, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have an EORI number; we can guide you through applying with German customs if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails, takes the train, or flies from China to a German gateway such as Hamburg, Duisburg, or Frankfurt.',
        'We file the EU customs declaration, pay duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Germany?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,500 to $3,100 for a 20ft container, LCL is about $40 to $120 per cubic meter, rail is around $4,000 to $7,000 for a 40ft container, and air freight is around $4 to $10 per kg. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'What is the cheapest way to ship from China to Germany?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Rail costs more than sea but less than air, and is worth it when you need the goods sooner.',
        },
        {
          question: 'Does Germany charge VAT on goods from China?',
          answer:
            'Yes. German import VAT (Einfuhrumsatzsteuer) of 19 percent applies on the customs value plus duty and transport, from the first euro of value. VAT-registered businesses can recover it as input tax, so for them it is a cash-flow item rather than a permanent cost.',
        },
        {
          question: 'How long does shipping from China to Germany take?',
          answer:
            'Sea freight takes about 28 to 40 days, rail freight about 16 to 25 days, air freight about 5 to 8 days, and express courier 3 to 7 days. Add 1 to 3 days for customs clearance. In 2026, Red Sea diversions have added time to some ocean sailings.',
        },
        {
          question: 'How long does sea freight from China to Germany take?',
          answer:
            'A full container by sea typically takes 28 to 40 days port to port to Hamburg or Bremerhaven. Shared-container (LCL) cargo takes about 7 to 10 days longer for consolidation and unpacking. Add a few days for customs and final delivery.',
        },
        {
          question: 'How much does it cost to ship a container from China to Germany?',
          answer:
            'Indicatively, a 20ft container runs about $2,500 to $3,100 and a 40ft container about $4,600 to $5,700 by sea, port to port. Rail is roughly $4,000 to $7,000 for a 40ft container. These ranges move with the market, so get a live quote for current pricing.',
        },
        {
          question: 'How long is air freight from China to Germany?',
          answer:
            'Air freight from China to Frankfurt or Munich usually takes about 5 to 8 days, including export handling, the flight, and customs clearance. Express courier is faster at 3 to 7 days door to door for small parcels, but costs more per kilo.',
        },
        {
          question: 'How does rail freight from China to Germany compare to sea and air?',
          answer:
            'Rail sits in the middle. It takes about 16 to 25 days, roughly half the time of sea, at a price between sea and air, and it ends at Duisburg with easy onward delivery across Germany. It suits cargo that is too time-sensitive for the ocean but too heavy or bulky to justify air freight.',
        },
        {
          question: 'What is the difference between FCL and LCL?',
          answer:
            'FCL (full container load) means you book a whole container for your cargo alone, which is most cost-effective above about 15 CBM. LCL (less than container load) means you share a container and pay only for the space you use, which is cheaper for smaller shipments. We quote both so you can compare.',
        },
        {
          question: 'What documents and duties apply when importing from China to Germany?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading, air waybill, or rail consignment note. Duty is set by your product’s TARIC commodity code and 19 percent import VAT applies. Under DDP we handle duty and VAT for you; under FOB or DAP you pay as importer of record.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-india',
    name: 'India',
    code: 'IN',
    description: 'Sea and air freight from China to India. 12-20 day transit via Mumbai, Chennai, Nhava Sheva, and Kolkata. FCL, LCL, and customs clearance services.',
    majorPorts: ['Mumbai', 'Chennai', 'Nhava Sheva', 'Kolkata'],
    transitTime: '12-20 days',
    popularGoods: ['Electronics', 'Machinery', 'Chemicals', 'Textiles', 'Consumer Goods'],
    content: {
      lastUpdated: 'July 2026',
      metaTitle: 'Shipping From China to India: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to India: sea, air and express freight costs, transit times, Nhava Sheva and Mundra ports, customs, IGST and anti-dumping duties. Free quote.',
      answerCapsule:
        'Shipping from China to India moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shenzhen, Ningbo, and Shanghai and arrive at Nhava Sheva near Mumbai or Mundra in Gujarat. Because India is close to China, sea freight is quick at about 12 to 22 days and air freight 3 to 6 days. Indian import duty plus 18 percent IGST apply, and many Chinese goods carry extra anti-dumping duties, so check your product.',
      intro:
        'If you import from China into India, you have one big advantage over most other destinations: it is a short, cheap lane, because India sits close to China across the Indian Ocean. This guide covers what shipping from China to India actually costs, how long each option takes, which ports your cargo moves through, and the Indian customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 12 to 22 days, much faster than China to Europe. Air freight is about 3 to 6 days. Two things to plan for on the tax side: there is no free trade agreement with China, and India applies anti-dumping duties on a very wide range of Chinese goods, so the duty can be higher than the base rate suggests. You also need an IEC code and, for many products, BIS certification. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shenzhen (Yantian)', 'Ningbo', 'Shanghai', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and move week to week. The good news is this is a short lane, so freight is lower than to Europe, and the 2026 Red Sea situation affects India far less because the route does not use the Suez Canal. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Duty: many Chinese goods carry anti-dumping duty on top of the base rate, so check your HS code before ordering.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Short lane: India is close to China, so both freight and transit are lower than to Europe, and Red Sea disruption has little effect.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, taxes, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$800 - $1,500' },
          { label: '40ft container (FCL)', range: '$1,300 - $2,600' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$18 - $60' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$4.00 - $6.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$3.50 - $5.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$3.00 - $4.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$7.00 - $10.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Indian customs duty, any anti-dumping duty, 18 percent IGST, or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to India shipping and the cheapest way to move anything large or heavy, and this is one of the shorter Asian sea lanes. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo sails across the Indian Ocean, arriving at Nhava Sheva (JNPT) near Mumbai, India’s largest container port, or Mundra in Gujarat, India’s largest port by total volume and often less congested, with Chennai on the east coast and Kolkata serving the east and northeast. Transit is typically 12 to 22 days port to port, with LCL adding about 7 to 10 days. Because the route does not use the Suez Canal, the 2026 Red Sea disruption affects India far less than Europe. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters, and it is quick on this lane. Cargo flies from hubs like Guangzhou, Shenzhen, Shanghai, and Hong Kong to Delhi or Mumbai, usually arriving in about 3 to 6 days. It costs more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable, though the gap to sea is smaller here than on longer lanes. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight is already fast and much cheaper, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 6 days into India, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to India, though duty, IGST, and any BIS requirement still apply. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '12 - 22 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '3 - 6 days', indicativeCost: 'Moderate to high', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shenzhen (including the Yantian terminal), Ningbo-Zhoushan, Shanghai, Guangzhou, and Qingdao handle the bulk of India-bound containers, with South China ports often having the most frequent sailings. For air freight, the main gateways are Guangzhou, Shenzhen, Shanghai, and Hong Kong. On the Indian side, Nhava Sheva (JNPT) near Mumbai is the largest container port and best connected for the western industrial belt, while Mundra in Gujarat is the largest port by total volume, often less congested, and strong for north India and Delhi by rail. Chennai serves the south and the auto and electronics sectors, and Kolkata serves the east. Delhi and Mumbai are the main air gateways. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Indian customs is where you need to do your homework, because anti-dumping duties on Chinese goods are common and the registrations are strict. Here is what applies. Check your HS code for an active anti-dumping order and confirm your registrations before you order.',
        points: [
          'Import taxes stack in sequence on the CIF value: Basic Customs Duty (BCD) by product, then a Social Welfare Surcharge of 10 percent of the BCD, then Integrated GST (IGST), most goods at 18 percent, charged on the CIF value plus BCD and surcharge, and a compensation cess on a few categories.',
          'There is no China-India free trade agreement, and India is one of the most active users of anti-dumping duties against China, on steel, chemicals, plastics, solar, electronics, ceramics, and more. These can add large extra percentages, so always check the HS code for an active order.',
          'You must have an IEC (Import Export Code) from the DGFT to import at all; there is no import without it.',
          'Many products need BIS certification (for example over 80 electronics and IT items under the Compulsory Registration Scheme, plus other regulated goods). Customs checks the BIS number and detains non-compliant shipments, so confirm certification before the goods leave China.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, IEC, GSTIN, and the Bill of Entry filed on ICEGATE, plus a certificate of origin and any BIS or agency certificates.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or the cargo can be rejected.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Indian customs, duty including any anti-dumping duty, and IGST, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. Because anti-dumping duties and BIS rules can catch importers out, having us calculate the full landed cost and check certification up front avoids surprises, but the consignee still needs an IEC and GST registration, since the import rights sit with them. The alternative, FOB or CIF, leaves the Indian clearance, duty, and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Indian delivery address.',
        'Check whether your HS code carries anti-dumping duty and whether your product needs BIS certification, and make sure you have an IEC and GST registration.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Nhava Sheva or Mundra, or flies into Delhi or Mumbai.',
        'We file the Bill of Entry on ICEGATE, handle duty and IGST, and clear your shipment, then deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to India?',
          answer:
            'As an indicative guide, sea freight runs roughly $800 to $1,500 for a 20ft container, LCL is about $18 to $60 per cubic meter, and air freight is around $3 to $6 per kg. This is a short, cheap lane compared with China to Europe. Indian duty, any anti-dumping duty, and 18 percent IGST are extra. Request a live quote.',
        },
        {
          question: 'How long does shipping from China to India take?',
          answer:
            'Sea freight takes about 12 to 22 days port to port to Nhava Sheva or Mundra, much faster than to Europe, since India is close to China. Air freight is about 3 to 6 days and express courier is 3 to 6 days. Add a couple of days for Indian customs clearance.',
        },
        {
          question: 'Do Chinese goods face anti-dumping duty in India?',
          answer:
            'Very often, yes. India is one of the most active users of anti-dumping duties against China, covering steel, chemicals, plastics, solar, many electronics, and ceramics. These are charged on top of the normal duty and can add a large amount, so it is essential to check the HS code for an active order before you order.',
        },
        {
          question: 'Do I need an IEC or BIS certification to import into India?',
          answer:
            'You need an IEC (Import Export Code) from the DGFT to import at all. Many products, especially electronics and IT items under the Compulsory Registration Scheme, also need BIS certification, and customs detains non-compliant shipments, so confirm certification before the goods leave China.',
        },
        {
          question: 'What is the cheapest way to ship from China to India?',
          answer:
            'Sea freight is the cheapest per unit and already fast on this short lane. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Shipping from South China ports often gives the best rates.',
        },
        {
          question: 'Which Indian port should I ship into?',
          answer:
            'Nhava Sheva (JNPT) near Mumbai is the largest container port and best for the western industrial belt. Mundra in Gujarat is the largest by total volume, often less congested, and strong for north India by rail. Chennai serves the south and Kolkata the east. The best choice depends on your delivery point.',
        },
        {
          question: 'How much duty and tax will I pay importing from China to India?',
          answer:
            'You pay Basic Customs Duty on the CIF value, a Social Welfare Surcharge of 10 percent of that duty, and IGST (usually 18 percent) on the total, plus a cess on some goods. On top of that, many Chinese goods carry anti-dumping duty. Check your HS code so the landed cost is clear before you order.',
        },
        {
          question: 'What documents do I need to import from China to India?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, your IEC and GSTIN, and the Bill of Entry filed on ICEGATE, plus a certificate of origin and any BIS or agency certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-italy',
    name: 'Italy',
    code: 'IT',
    description: 'Sea and air freight from China to Italy. 25-32 day transit via Genoa, La Spezia, and Trieste. FCL, LCL, customs clearance, and door-to-door delivery.',
    majorPorts: ['Genoa', 'La Spezia', 'Trieste'],
    transitTime: '25-32 days',
    popularGoods: ['Textiles', 'Machinery', 'Electronics', 'Furniture', 'Consumer Goods'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Italy: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Italy: compare sea, air and express freight costs, transit times, ports and EU customs and VAT rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Italy moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Italian gateways such as Genoa, La Spezia, and Trieste. Sea freight takes about 30 to 40 days and air freight 5 to 8 days. Italian import VAT of 22 percent and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China, Italy is a major Mediterranean gateway into the European Union, and getting the cost, timing, and customs right makes a real difference to your margin. This guide covers what shipping from China to Italy actually costs, how long each option takes, which ports your cargo moves through, and the Italian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 30 to 40 days. Air freight costs more but lands in about 5 to 8 days. The right choice comes down to how fast you need the goods and how much they weigh and measure. One thing every Italian importer needs first: an EORI number to clear EU customs, plus a plan for 22 percent import VAT and any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and move week to week, especially in 2026 when Red Sea diversions have lengthened Mediterranean sailings and pushed rates up. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Season: rates climb before Chinese New Year (January to February) and again in the autumn pre-holiday peak.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Routing: most China to Italy sea services run through the Suez Canal and the Mediterranean, so the 2026 Red Sea diversions around the Cape of Good Hope have added time and cost.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,000 - $3,200' },
          { label: '40ft container (FCL)', range: '$3,500 - $5,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$40 - $120' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $11.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $9.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.00 - $6.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$7.00 - $13.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Italian import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Italy shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 13 to 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Transit is typically 30 to 40 days port to port to Genoa, La Spezia, or Trieste, with LCL adding about 7 to 10 days for consolidation and unpacking. Most services reach Italy through the Suez Canal and the Mediterranean, so in 2026 the Red Sea diversions around the Cape of Good Hope have added time to some sailings, which hits Mediterranean ports particularly. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen to Italian gateways such as Milan Malpensa and Rome Fiumicino, usually arriving in about 5 to 8 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric (dimensional) weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier, so larger air shipments earn a better rate per kilo. For most importers, air makes sense when arriving a few weeks sooner is worth the premium, and when it is not, sea freight moves the same goods for a fraction of the cost. We can quote both side by side so the trade-off is clear.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 7 days, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Italy. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '30 - 40 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 8 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 7 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Italy-bound containers. For air freight, the main gateways are Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen. On the Italian side, Genoa and La Spezia in the northwest are the main container gateways for northern Italy and its industrial heartland, while Trieste in the northeast serves northern Italy and central Europe and has been growing fast. Gioia Tauro in the south is a major transshipment hub, and Naples and Livorno also handle cargo. The main air gateways are Milan Malpensa and Rome Fiumicino. From any of these, your goods can move on across Italy and the rest of the EU once they clear customs. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Italy sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs here they move freely across the EU. There is no VAT-free allowance for commercial imports, so plan around 22 percent import VAT and any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Italian import VAT (IVA) is 22 percent, charged on the customs value plus duty plus transport to the EU border. VAT-registered businesses recover it as input tax, so for them it is a cash-flow item, not a permanent cost.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance to the EU border). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. You apply once through Italian customs (Agenzia delle Dogane), it is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption for low-value parcels ended back in 2021, so import VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays import duty and VAT; under FOB, CIF, or DAP you are the importer of record and pay. Agreeing the Incoterm up front avoids the most common dispute.',
          'For sea and air the carrier or forwarder files an ICS2 security declaration before arrival; missing or poor data can hold the shipment. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them. Confirm with your supplier before the goods are loaded.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Italian and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Italian SME importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record so they can recover the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Italian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have an EORI number; we can guide you through applying with Italian customs if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from China to an Italian gateway such as Genoa, Trieste, or Milan Malpensa.',
        'We file the EU customs declaration, pay duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Italy?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,000 to $3,200 for a 20ft container, LCL is about $40 to $120 per cubic meter, and air freight is around $4 to $11 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Italy take?',
          answer:
            'Sea freight takes about 30 to 40 days port to port, plus a few days for customs and delivery. Air freight is about 5 to 8 days and express courier is 3 to 7 days. In 2026, Red Sea diversions have added time to some Mediterranean sailings.',
        },
        {
          question: 'How long does sea freight from China to Italy take?',
          answer:
            'A full container by sea typically takes 30 to 40 days port to port to Genoa, La Spezia, or Trieste. Shared-container (LCL) cargo takes about 7 to 10 days longer for consolidation and unpacking. Add a few days for customs and final delivery.',
        },
        {
          question: 'What is the cheapest way to ship from China to Italy?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'How much does it cost to ship a container from China to Italy?',
          answer:
            'Indicatively, a 20ft container runs about $2,000 to $3,200 and a 40ft container about $3,500 to $5,500 by sea, port to port. These ranges move with the market and have been elevated in 2026, so get a live quote for current pricing.',
        },
        {
          question: 'Does Italy charge VAT on goods from China?',
          answer:
            'Yes. Italian import VAT (IVA) of 22 percent applies on the customs value plus duty and transport, from the first euro of value. VAT-registered businesses can recover it as input tax, so for them it is a cash-flow item rather than a permanent cost.',
        },
        {
          question: 'Do I need an EORI number to import from China to Italy?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number. You apply once through Italian customs (Agenzia delle Dogane), it is free, valid across all 27 EU countries, and usually issued within a few working days.',
        },
        {
          question: 'Should I ship into Genoa or Trieste?',
          answer:
            'Genoa and La Spezia in the northwest suit northern Italy and the industrial northwest. Trieste in the northeast suits the northeast of Italy and onward delivery into central Europe. The best choice depends on where your goods are going, since inland delivery is part of the total cost.',
        },
        {
          question: 'What is the difference between FCL and LCL?',
          answer:
            'FCL (full container load) means you book a whole container for your cargo alone, which is most cost-effective above about 15 CBM. LCL (less than container load) means you share a container and pay only for the space you use, which is cheaper for smaller shipments. We quote both so you can compare.',
        },
        {
          question: 'What documents and duties apply when importing from China to Italy?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill. Duty is set by your product’s TARIC commodity code and 22 percent import VAT applies. Under DDP we handle duty and VAT for you; under FOB or DAP you pay as importer of record.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-japan',
    name: 'Japan',
    code: 'JP',
    description: 'Sea and air freight from China to Japan. 3-7 day transit to Tokyo, Yokohama, Osaka, and Kobe. FCL, LCL, express air, and door-to-door delivery.',
    majorPorts: ['Tokyo', 'Yokohama', 'Osaka', 'Kobe'],
    transitTime: '3-7 days',
    popularGoods: ['Electronics', 'Machinery', 'Consumer Goods', 'Textiles', 'Auto Parts'],
    content: {
      lastUpdated: 'July 2026',
      metaTitle: 'Shipping From China to Japan: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Japan: sea, air and express freight costs, transit times, Tokyo and Yokohama ports, consumption tax and RCEP duty. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Japan moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Tokyo, Yokohama, Kobe, Osaka, or Nagoya. Because Japan is close to China, sea freight is very quick at about 2 to 8 days and air freight 1 to 3 days. Japanese consumption tax of 10 percent applies on arrival, and under the RCEP agreement many Chinese goods get reduced or zero duty with a certificate of origin.',
      intro:
        'If you import from China into Japan, you are running one of the fastest and easiest freight lanes in the world, because the two countries are close neighbours. This guide covers what shipping from China to Japan actually costs, how long each option takes, which ports your cargo moves through, and the Japanese customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 2 to 8 days, sometimes as little as 3 or 4 days from central China. Air freight is about 1 to 3 days. Because the route stays within East Asia, it is not affected by the Red Sea disruption that hits Europe lanes. On tax, Japan charges 10 percent consumption tax, and thanks to RCEP, the first trade deal linking China and Japan, many goods now qualify for reduced or zero duty with a certificate of origin. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Dalian'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and unusually low for this short lane, and the 2026 Red Sea situation does not affect it since the route stays within East Asia. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Short lane: Japan is close to China, so both freight and transit are among the lowest of any international route from China.',
          'Duty: under RCEP, many Chinese goods qualify for reduced or zero duty with a valid certificate of origin.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, tax, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$300 - $1,500' },
          { label: '40ft container (FCL)', range: '$500 - $2,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$60 - $280' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$4.00 - $8.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$3.00 - $6.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$2.50 - $4.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$4.00 - $8.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL), with LCL minimums that make the per-CBM figure higher on small volumes. Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight. None of these ranges include Japanese customs duty or the 10 percent consumption tax, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Japan shipping and the cheapest way to move anything large or heavy, and this is one of the quickest international sea lanes anywhere. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo crosses the East China Sea and arrives at Tokyo or Yokohama in the Tokyo Bay area, or at Kobe and Osaka in the Kansai region, or Nagoya in the centre. Transit is typically 2 to 8 days port to port, as little as 3 or 4 days from Shanghai to Tokyo, with LCL adding a few days for consolidation. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is extremely fast on this lane. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Beijing to Narita, Haneda, or Kansai, usually arriving in about 1 to 3 days. It costs more than sea freight per unit, but the gap is smaller here than on longer routes, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. Since sea freight is already quick and much cheaper, we can quote both side by side so you can weigh the small time saving against the cost.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 2 to 5 days into Japan, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Japan. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '2 - 8 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 3 - 7 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '1 - 3 days', indicativeCost: 'Moderate', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '2 - 5 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Dalian handle the bulk of Japan-bound containers, with central and northern China ports especially close to Japan. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Beijing. On the Japanese side, Tokyo and Yokohama in the Tokyo Bay area are the main container gateways, with Kobe and Osaka serving the Kansai region and Nagoya serving the central industrial belt. The main air gateways are Narita and Haneda near Tokyo and Kansai near Osaka. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Japanese customs is efficient, and the RCEP agreement can lower your duty. Here is what applies when you import from China. The main planning point is the certificate of origin, since that is what unlocks the reduced RCEP tariff.',
        points: [
          'Japan charges import consumption tax at 10 percent (a reduced 8 percent on food and drink), calculated on the customs value plus duty. Consumption-tax-registered businesses can reclaim it.',
          'Customs duty is charged on the CIF value (goods plus freight and insurance). Under RCEP, the first trade deal linking China and Japan, many product categories now qualify for reduced or zero duty, but you must present a valid RCEP certificate of origin to claim it; without it the standard rate applies.',
          'There is a small de minimis: shipments with a customs value under about JPY 10,000 generally clear free of duty and consumption tax, which suits samples and very small parcels.',
          'The importer files a declaration with Japan Customs, and commercial importers usually use a licensed customs broker.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, the import declaration, and the RCEP certificate of origin to claim the tariff cut, plus any product-specific permits (for example for food, cosmetics, or electronics).',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the short sea or air leg, Japanese customs, duty, and consumption tax, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. Because this is a fast lane, DDP is often used to keep the whole thing simple, and we make sure the RCEP certificate of origin is in place so you claim any duty saving. The alternative, FOB or CIF, leaves the Japanese clearance, duty, and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Japanese delivery address.',
        'We check whether your goods qualify for reduced RCEP duty and help you get the certificate of origin.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from China to a Japanese gateway such as Tokyo, Yokohama, Kobe, or Osaka.',
        'We clear Japanese customs, handle duty and consumption tax, and deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Japan?',
          answer:
            'As an indicative guide, sea freight runs roughly $300 to $1,500 for a 20ft container, LCL is about $60 to $280 per cubic meter, and air freight is around $2.50 to $8 per kg. This is a short, low-cost lane. Japanese duty (often reduced under RCEP) and 10 percent consumption tax are extra. Request a live quote.',
        },
        {
          question: 'How long does shipping from China to Japan take?',
          answer:
            'Sea freight takes about 2 to 8 days port to port, sometimes as little as 3 or 4 days from Shanghai to Tokyo, since Japan is close to China. Air freight is about 1 to 3 days and express courier is 2 to 5 days. Add a day or two for customs.',
        },
        {
          question: 'Does RCEP reduce duty on Chinese goods into Japan?',
          answer:
            'Yes, for many products. China and Japan are both in RCEP, which gradually reduces tariffs between them, and many categories now qualify for reduced or zero duty. You must present a valid RCEP certificate of origin at import to claim the lower rate, otherwise the standard tariff applies.',
        },
        {
          question: 'What is the cheapest way to ship from China to Japan?',
          answer:
            'Sea freight is the cheapest per unit and already fast on this short lane. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but shave off a couple of days.',
        },
        {
          question: 'How much is consumption tax on imports to Japan?',
          answer:
            'Japan charges import consumption tax at 10 percent, calculated on the customs value plus duty (a reduced 8 percent applies to food and drink). Consumption-tax-registered businesses can reclaim it, so for them it is a cash-flow item rather than a permanent cost.',
        },
        {
          question: 'Which Japanese port do shipments arrive at?',
          answer:
            'Tokyo and Yokohama in the Tokyo Bay area are the main container gateways, with Kobe and Osaka serving Kansai and Nagoya serving the central industrial belt. Narita, Haneda, and Kansai are the main air gateways. The best choice depends on where your goods are going.',
        },
        {
          question: 'Is shipping to Japan affected by the Red Sea situation?',
          answer:
            'No. China to Japan is an East Asia sea lane that does not use the Suez Canal or the Red Sea, so it is not affected by the 2026 diversions that have lengthened Asia to Europe routes. Transit stays short and predictable.',
        },
        {
          question: 'What documents do I need to import from China to Japan?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, the import declaration, and a RCEP certificate of origin to claim reduced duty, plus any product-specific permits. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-mexico',
    name: 'Mexico',
    code: 'MX',
    description: 'Sea and air freight from China to Mexico. 18-25 day transit via Manzanillo, Lázaro Cárdenas, and Veracruz. FCL, LCL, and customs clearance.',
    majorPorts: ['Manzanillo', 'Lázaro Cárdenas', 'Veracruz'],
    transitTime: '18-25 days',
    popularGoods: ['Electronics', 'Machinery', 'Auto Parts', 'Consumer Goods', 'Textiles'],
    content: {
      lastUpdated: 'July 2026',
      metaTitle: 'Shipping From China to Mexico: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Mexico: sea, air and express freight costs, transit times, Manzanillo port, customs, IVA and the 2026 tariff changes. Free quote.',
      answerCapsule:
        'Shipping from China to Mexico moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and cross the Pacific to Manzanillo or Lázaro Cárdenas. Sea freight takes about 20 to 25 days and air freight 3 to 7 days. Mexican import VAT (IVA) of 16 percent plus customs duty apply, and in 2026 Mexico sharply raised tariffs on many Chinese goods, so check your product before ordering.',
      intro:
        'If you import from China into Mexico, two things shape your shipment right now: Mexico raised its tariffs on many Chinese goods at the start of 2026, and its customs process is strict, needing a registered importer and a licensed broker. This guide covers what shipping from China to Mexico actually costs, how long each option takes, which ports your cargo moves through, and the Mexican customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 20 to 25 days across the Pacific. Air freight is about 3 to 7 days. The route is transpacific, so it is not affected by the Red Sea disruption that hits Europe lanes. On the tax side, Mexico charges 16 percent IVA plus duty, and since January 2026 a big tariff decree raised duties on autos, textiles, steel, and more from countries without a Mexican trade deal, which includes China. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and cover freight only: Mexican duty and IVA are paid on top, and the 2026 tariff increases have made duty a bigger part of landed cost for many products. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Duty: Mexico raised tariffs on many Chinese goods in January 2026, so check the rate for your product before ordering.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Port congestion: Manzanillo, the main Pacific gateway, is heavily congested, so book ahead or consider Lázaro Cárdenas.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, IVA, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$1,500 - $3,500' },
          { label: '40ft container (FCL)', range: '$3,000 - $5,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$60 - $120' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $10.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $8.50' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.50 - $6.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$7.00 - $12.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Mexican customs duty (higher on many Chinese goods since 2026), 16 percent IVA, or the broker and clearance fees, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Mexico shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo crosses the Pacific and arrives mainly at Manzanillo, Mexico’s largest port, which handles most Asian imports, or at Lázaro Cárdenas, both on the Pacific coast, with Veracruz and Altamira on the Gulf side. Transit is typically 20 to 25 days port to port, plus a few days for berth waiting, since Manzanillo is often congested. Because the route is transpacific, the 2026 Red Sea situation does not affect it. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Mexico City, usually arriving in about 3 to 7 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 5 days into Mexico, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Mexico, though the duty and IVA still apply. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '20 - 25 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 5 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '3 - 7 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 5 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao handle the bulk of Mexico-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Mexican side, Manzanillo on the Pacific is the largest port and the main gateway for Asian imports, handling well over half of them, with Lázaro Cárdenas also on the Pacific, and Veracruz and Altamira on the Gulf coast. Manzanillo is known for congestion, so Lázaro Cárdenas is a useful alternative to avoid berth waiting and storage fees. The main air gateway is Mexico City. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Mexican customs is strict and, since 2026, more expensive for Chinese goods. Here is what applies when you import from China. The key steps are getting your product’s current duty right after the tariff changes and having the required registration and broker in place.',
        points: [
          'Import VAT (IVA) is 16 percent, charged on the CIF value plus duty and other import charges. The reduced 8 percent border-zone rate does not apply to imports, so the full 16 percent applies. VAT-registered businesses can recover it.',
          'Customs duty is charged on the CIF value. There is no China-Mexico free trade agreement, so Chinese goods pay the general rate, and a January 2026 decree raised tariffs across more than 1,400 product lines from countries without a Mexican trade deal, with autos and auto parts up to 25 to 50 percent, textiles and footwear 25 to 35 percent, and steel and others up to 35 percent. Check your specific product.',
          'The importer of record must be enrolled in the Padrón de Importadores, the Mexican importer registry, or the goods cannot clear.',
          'A licensed customs broker (agente aduanal) is mandatory for commercial imports, and files the official import declaration, the pedimento. A China-based shipper cannot self-clear.',
          'Core documents are the pedimento, a commercial invoice in Spanish, packing list, bill of lading or air waybill, and certificate of origin, plus any NOM standards certificates or import permits for regulated goods.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or the cargo can be rejected.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the transpacific sea or air leg, Mexican customs, duty, and IVA, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. Because Mexico’s tariffs on Chinese goods rose in 2026 and the customs process is strict, having us calculate the full landed cost up front avoids surprises, but the consignee still needs to be enrolled in the Padrón de Importadores, since the import rights sit with them, and a licensed broker is required. The alternative, FOB or CIF, leaves the Mexican clearance, duty, and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Mexican delivery address.',
        'Check your product’s current duty rate after the 2026 tariff changes, and make sure the importer is enrolled in the Padrón de Importadores.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative freight costs and transit times, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo crosses the Pacific to Manzanillo or Lázaro Cárdenas, or flies into Mexico City.',
        'A licensed customs broker files the pedimento, we handle duty and IVA, and clear your shipment, then deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Mexico?',
          answer:
            'As an indicative guide for freight only, sea runs roughly $1,500 to $3,500 for a 20ft container, LCL is about $60 to $120 per cubic meter, and air freight is around $4.50 to $10 per kg. Mexican duty (higher on many Chinese goods since 2026) and 16 percent IVA are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'Did Mexico raise tariffs on Chinese goods in 2026?',
          answer:
            'Yes. A January 2026 decree raised tariffs across more than 1,400 product lines from countries without a Mexican trade deal, which includes China, with autos up to 25 to 50 percent, textiles and footwear 25 to 35 percent, and steel and others up to 35 percent. Always price the specific HS code before ordering.',
        },
        {
          question: 'How long does shipping from China to Mexico take?',
          answer:
            'Sea freight takes about 20 to 25 days port to port to Manzanillo or Lázaro Cárdenas, plus a few days for congestion and customs. Air freight is about 3 to 7 days and express courier is 3 to 5 days. The transpacific route is not affected by the Red Sea situation.',
        },
        {
          question: 'Do I need a customs broker and importer registration for Mexico?',
          answer:
            'Yes to both. A licensed customs broker (agente aduanal) is mandatory for commercial imports and files the pedimento, and the importer of record must be enrolled in the Padrón de Importadores. A China-based shipper cannot self-clear, so the Mexican importer must be registered first.',
        },
        {
          question: 'What is the cheapest way to ship from China to Mexico?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Which Mexican port should I ship into?',
          answer:
            'Manzanillo on the Pacific is the largest port and handles most Asian imports, but it is often congested. Lázaro Cárdenas, also on the Pacific, is a useful alternative to avoid berth waiting, and Veracruz and Altamira serve the Gulf side. The best choice depends on your delivery point and current congestion.',
        },
        {
          question: 'How much duty and tax will I pay importing from China to Mexico?',
          answer:
            'Duty is charged on the CIF value at the general rate, which rose for many Chinese goods in 2026. On top of that, 16 percent IVA applies on the CIF value plus duty. Because the tariff changes are product-specific, it is essential to check your HS code before ordering.',
        },
        {
          question: 'What documents do I need to import from China to Mexico?',
          answer:
            'You need the pedimento filed by a licensed broker, a commercial invoice in Spanish, a packing list, a bill of lading or air waybill, and a certificate of origin, plus any NOM certificates for regulated goods. The importer must be in the Padrón de Importadores, and wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-netherlands',
    name: 'Netherlands',
    code: 'NL',
    description: 'Sea and air freight from China to the Netherlands via Rotterdam and Amsterdam. 28-32 day transit. FCL, LCL, customs clearance, and door-to-door delivery.',
    majorPorts: ['Rotterdam', 'Amsterdam'],
    transitTime: '28-32 days',
    popularGoods: ['Electronics', 'Machinery', 'Consumer Goods', 'Textiles', 'Food Products'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to the Netherlands: Cost 2026',
      metaDescription:
        'Shipping from China to the Netherlands: compare sea, air and express freight costs, transit times, Rotterdam, and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to the Netherlands moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive mainly at Rotterdam, Europe’s largest port, and Amsterdam. Sea freight takes about 28 to 40 days and air freight 5 to 8 days. Dutch import VAT of 21 percent and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China, the Netherlands is one of the best entry points into Europe, thanks to Rotterdam, the largest port on the continent, and a customs setup that is friendly to importers. This guide covers what shipping from China to the Netherlands actually costs, how long each option takes, which ports your cargo moves through, and the Dutch and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 28 to 40 days. Air freight costs more but lands in about 5 to 8 days. The right choice comes down to how fast you need the goods and how much they weigh and measure. One Dutch advantage worth knowing: with an Article 23 license you can defer import VAT and account for it on your VAT return instead of paying cash at the border, which helps cash flow. You still need an EORI number to clear customs. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and move week to week, especially in 2026 when Red Sea diversions around the Cape of Good Hope have lengthened ocean routes and pushed rates up. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Season: rates climb before Chinese New Year (January to February) and again in the autumn pre-holiday peak.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to ocean shipments.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,500 - $3,100' },
          { label: '40ft container (FCL)', range: '$4,600 - $5,700' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$40 - $120' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $10.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $8.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.00 - $6.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$7.00 - $13.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Dutch import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Netherlands shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 13 to 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Transit is typically 28 to 40 days port to port to Rotterdam, with LCL adding about 7 to 10 days for consolidation and unpacking. Rotterdam is the largest port in Europe and an excellent distribution hub, so it is a natural entry point not just for the Netherlands but for onward delivery into Germany, Belgium, and the rest of the EU. In 2026, ocean services routing around the Cape of Good Hope instead of the Suez Canal have added time to some sailings, so build in extra lead time. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen to Amsterdam Schiphol, one of Europe’s main cargo airports, usually arriving in about 5 to 8 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric (dimensional) weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier, so larger air shipments earn a better rate per kilo. For most importers, air makes sense when arriving a few weeks sooner is worth the premium, and when it is not, sea freight moves the same goods for a fraction of the cost. We can quote both side by side so the trade-off is clear.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 7 days, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to the Netherlands. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '28 - 40 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 8 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 7 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Netherlands-bound containers. For air freight, the main gateways are Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen. On the Dutch side, Rotterdam is the dominant gateway and the largest port in Europe, with deep-water terminals and excellent road, rail, and barge links inland; Amsterdam handles additional cargo. The main air gateway is Amsterdam Schiphol. Because Rotterdam is set up as a European distribution hub, many importers clear customs here and then truck goods on to Germany, Belgium, France, and beyond. Tell us your origin city in China and your delivery point in the Netherlands and we will map the best routing.',
      customs: {
        summary:
          'The Netherlands sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs here they move freely across the EU. The Dutch system is known for being importer-friendly, especially the Article 23 import VAT deferment. There is no VAT-free allowance for commercial imports, so plan around 21 percent import VAT and any duty, and confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Dutch import VAT (BTW) is 21 percent, charged on the customs value plus duty plus transport to the EU border. With an Article 23 license, an importer (or a forwarder acting as fiscal representative) can defer this and account for it on the VAT return instead of paying cash at the border, which is a real cash-flow advantage of importing through the Netherlands.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance to the EU border). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. You apply once through Dutch customs (Douane), it is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption for low-value parcels ended back in 2021, so import VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays import duty and VAT; under FOB, CIF, or DAP you are the importer of record and pay. Agreeing the Incoterm up front avoids the most common dispute.',
          'For sea and air the carrier or forwarder files an ICS2 security declaration before arrival; missing or poor data can hold the shipment. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them. Confirm with your supplier before the goods are loaded.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Dutch and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Dutch SME importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses with an Article 23 license sometimes prefer to be the importer of record so they can defer and recover the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Dutch delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have an EORI number, and ask us about Article 23 import VAT deferment if you want to ease cash flow.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from China to a Dutch gateway, usually Rotterdam by sea or Amsterdam Schiphol by air.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to the Netherlands?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,500 to $3,100 for a 20ft container, LCL is about $40 to $120 per cubic meter, and air freight is around $4 to $10 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to the Netherlands take?',
          answer:
            'Sea freight takes about 28 to 40 days to Rotterdam, plus a few days for customs and delivery. Air freight is about 5 to 8 days and express courier is 3 to 7 days. In 2026, Red Sea diversions have added time to some ocean sailings.',
        },
        {
          question: 'How long does sea freight from China to the Netherlands take?',
          answer:
            'A full container by sea typically takes 28 to 40 days port to port to Rotterdam. Shared-container (LCL) cargo takes about 7 to 10 days longer for consolidation and unpacking. Add a few days for customs and final delivery.',
        },
        {
          question: 'What is the cheapest way to ship from China to the Netherlands?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'How much does it cost to ship a container from China to the Netherlands?',
          answer:
            'Indicatively, a 20ft container runs about $2,500 to $3,100 and a 40ft container about $4,600 to $5,700 by sea, port to port. These ranges move with the market and have been elevated in 2026, so get a live quote for current pricing.',
        },
        {
          question: 'Does the Netherlands charge VAT on goods from China?',
          answer:
            'Yes. Dutch import VAT (BTW) of 21 percent applies on the customs value plus duty and transport. With an Article 23 license you can defer it and account for it on your VAT return instead of paying cash at the border, and VAT-registered businesses can recover it as input tax.',
        },
        {
          question: 'What is the Article 23 license and why does it matter?',
          answer:
            'Article 23 is a Dutch import VAT deferment license. Instead of paying 21 percent import VAT in cash when your goods clear customs, you account for it on your periodic VAT return, where you can usually reclaim it at the same time. It removes the cash-flow hit and is a key reason many importers route European cargo through the Netherlands.',
        },
        {
          question: 'Why do importers ship into Rotterdam for the rest of Europe?',
          answer:
            'Rotterdam is the largest port in Europe, with deep-water terminals and excellent road, rail, and barge links inland. Many importers clear customs in the Netherlands, taking advantage of the Article 23 VAT deferment, then truck goods onward to Germany, Belgium, France, and beyond.',
        },
        {
          question: 'What is the difference between FCL and LCL?',
          answer:
            'FCL (full container load) means you book a whole container for your cargo alone, which is most cost-effective above about 15 CBM. LCL (less than container load) means you share a container and pay only for the space you use, which is cheaper for smaller shipments. We quote both so you can compare.',
        },
        {
          question: 'What documents and duties apply when importing from China to the Netherlands?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill. Duty is set by your product’s TARIC commodity code and 21 percent import VAT applies, which you can defer with Article 23. Under DDP we handle duty and VAT for you; under FOB or DAP you pay as importer of record.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-new-zealand',
    name: 'New Zealand',
    code: 'NZ',
    description: 'Sea and air freight from China to New Zealand. 18-25 day transit via Auckland, Tauranga, and Wellington. FCL, LCL, and customs clearance services.',
    majorPorts: ['Auckland', 'Tauranga', 'Wellington'],
    transitTime: '18-25 days',
    popularGoods: ['Consumer Goods', 'Electronics', 'Furniture', 'Machinery', 'Textiles'],
    content: {
      lastUpdated: 'July 2026',
      metaTitle: 'Shipping From China to New Zealand: Cost 2026',
      metaDescription:
        'Shipping from China to New Zealand: sea, air and express freight costs, transit times, Auckland port, the China-NZ FTA and biosecurity rules. Free quote.',
      answerCapsule:
        'Shipping from China to New Zealand moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Auckland, Tauranga, or Lyttelton. Sea freight takes about 18 to 30 days and air freight 5 to 9 days. New Zealand GST of 15 percent applies, but most Chinese goods enter duty-free under the China-New Zealand free trade agreement, and biosecurity rules are strict.',
      intro:
        'If you import from China into New Zealand, two things work in your favour and one needs care: most goods come in duty-free under a free trade agreement, freight is not affected by the Red Sea, but biosecurity is strict. This guide covers what shipping from China to New Zealand actually costs, how long each option takes, which ports your cargo moves through, and the customs, GST, and biosecurity rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 18 to 30 days. Air freight is about 5 to 9 days. Because this is a South Pacific lane, it is not affected by the Red Sea disruption that hits Europe routes. The good news on cost: under the China-New Zealand free trade agreement, most Chinese goods enter at zero duty with a certificate of origin, so you often pay only 15 percent GST. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and move with vessel schedules and capacity, though the South Pacific lane is insulated from the 2026 Red Sea situation. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Duty: most Chinese goods enter duty-free under the China-New Zealand FTA with a certificate of origin, so your main cost is often just 15 percent GST.',
          'Biosecurity: strict MPI inspection can add time and cost if containers, goods, or wood packaging are not compliant.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles customs, GST, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$1,100 - $1,600' },
          { label: '40ft container (FCL)', range: '$2,000 - $2,800' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$20 - $50' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$5.00 - $7.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$4.50 - $6.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.00 - $5.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$7.00 - $11.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL), with a typical LCL minimum of 1 CBM. Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include 15 percent GST, biosecurity fees, or the clearance fee, and duty is often zero under the FTA, as covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to New Zealand shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo sails across the South Pacific and arrives at Auckland, the main gateway serving the largest consumer market, or Tauranga, the country’s highest-volume port with good inland rail links, with Lyttelton serving Christchurch and the South Island. Transit is typically 18 to 30 days port to port, with direct services to Auckland often around 20 to 25 days, and LCL adding a week or more. Because it is a South Pacific lane, the 2026 Red Sea situation does not affect it, though biosecurity inspection can add time on arrival. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Auckland, usually arriving in about 5 to 9 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 7 days into New Zealand, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to New Zealand. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '18 - 30 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 9 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 7 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao handle the bulk of New Zealand-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the New Zealand side, Auckland is the primary gateway serving the largest consumer market, Tauranga is the highest-volume port and a common alternative with strong inland rail links, and Lyttelton serves Christchurch and the South Island. Auckland Airport is the dominant air-cargo gateway. Which port suits you depends on where your goods are going, since inland delivery is part of the total cost. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'New Zealand is a good-value destination on cost, thanks to a free trade agreement with China, but its biosecurity is among the strictest in the world. Here is what applies when you import from China. The certificate of origin unlocks the duty-free rate, and clean, compliant cargo avoids biosecurity holds.',
        points: [
          'Under the China-New Zealand free trade agreement, in force since 2008 and upgraded in 2022, the large majority of Chinese-origin goods enter New Zealand duty-free with a valid certificate of origin. This is the main reason landed cost is low.',
          'GST of 15 percent applies on the value of the goods plus international freight, insurance, and any duty, converted to New Zealand dollars. GST-registered businesses can reclaim it.',
          'Biosecurity is strict and enforced by the Ministry for Primary Industries (MPI). Sea containers, goods, and wood packaging can be inspected on arrival, and anything unclean or non-compliant is held for cleaning or treatment at your cost.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, and containers must be clean and free of pests and soil.',
          'A commercial importer needs a Customs client code before lodging an import entry, and entries apply to shipments over NZ$1,000; below that, customs generally does not collect duty or GST at the border, except on alcohol and tobacco.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, import entry, the certificate of origin for the FTA duty-free rate, and any biosecurity or treatment certificates.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, New Zealand customs and biosecurity, GST and any duty, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is especially useful given New Zealand’s strict biosecurity, and we make sure the China-NZ FTA certificate of origin is in place so you claim the zero-duty rate and that wood packaging and containers are compliant. The alternative, FOB or CIF, leaves the New Zealand clearance, biosecurity, and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your New Zealand delivery address.',
        'We help you get the China-NZ FTA certificate of origin so your goods qualify for zero duty, and check that wood packaging meets ISPM-15.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from China to a New Zealand gateway such as Auckland, Tauranga, or Lyttelton.',
        'We clear customs and biosecurity, handle GST and any duty, and deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to New Zealand?',
          answer:
            'As an indicative guide, sea freight runs roughly $1,100 to $1,600 for a 20ft container, LCL is about $20 to $50 per cubic meter, and air freight is around $4 to $7 per kg. Most goods are duty-free under the FTA, so 15 percent GST is usually the main charge. Request a live quote for your exact cargo.',
        },
        {
          question: 'Do I pay import duty shipping from China to New Zealand?',
          answer:
            'Usually not. Under the China-New Zealand free trade agreement, the large majority of Chinese-origin goods enter duty-free with a valid certificate of origin. You still pay 15 percent GST on the value of the goods plus freight, insurance, and any duty.',
        },
        {
          question: 'How long does shipping from China to New Zealand take?',
          answer:
            'Sea freight takes about 18 to 30 days port to port, with direct services to Auckland often around 20 to 25 days. Air freight is about 5 to 9 days and express courier is 3 to 7 days. Add time for biosecurity inspection and customs. The South Pacific lane is not affected by the Red Sea.',
        },
        {
          question: 'How strict is New Zealand biosecurity?',
          answer:
            'Very strict, like Australia. The Ministry for Primary Industries can inspect containers, goods, and especially wood packaging on arrival, and anything unclean or non-compliant is held for cleaning or treatment at your cost. Wood packaging must be ISPM-15 stamped, and containers must be clean and free of pests and soil.',
        },
        {
          question: 'What is the cheapest way to ship from China to New Zealand?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. With most goods duty-free under the FTA, New Zealand is a lower landed-cost destination.',
        },
        {
          question: 'Should I ship into Auckland or Tauranga?',
          answer:
            'Auckland is the primary gateway to the largest consumer market. Tauranga is the highest-volume port and a common alternative, often with good inland rail links. Lyttelton serves Christchurch and the South Island. The best choice depends on where your goods are going.',
        },
        {
          question: 'Do I need to register to import into New Zealand?',
          answer:
            'A commercial importer needs a Customs client code before lodging an import entry, which applies to shipments over NZ$1,000. We can guide you through getting set up, or handle the clearance for you under door-to-door.',
        },
        {
          question: 'What documents do I need to import from China to New Zealand?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, an import entry, and the China-NZ FTA certificate of origin to claim zero duty, plus any biosecurity or treatment certificates. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-singapore',
    name: 'Singapore',
    code: 'SG',
    description: 'Sea and air freight from China to Singapore. 5-10 day transit through the Port of Singapore. FCL, LCL, express air, and door-to-door delivery.',
    majorPorts: ['Port of Singapore'],
    transitTime: '5-10 days',
    popularGoods: ['Electronics', 'Consumer Goods', 'Machinery', 'Chemicals', 'Textiles'],
    content: {
      lastUpdated: 'July 2026',
      metaTitle: 'Shipping From China to Singapore: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Singapore: sea, air and express freight costs, transit times, the Port of Singapore, GST and free-port duty rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Singapore moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Shenzhen, and Ningbo and arrive at the Port of Singapore, one of the world’s biggest hubs with frequent direct China services. Sea freight is quick at about 5 to 12 days and air freight 2 to 4 days. Singapore is a free port with no import duty on almost all goods, so you usually pay only 9 percent GST.',
      intro:
        'If you import from China into Singapore, you are running one of the easiest and cheapest lanes anywhere, because Singapore is close to China and is a free port. This guide covers what shipping from China to Singapore actually costs, how long each option takes, which ports your cargo moves through, and the Singapore customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 5 to 12 days. Air freight is about 2 to 4 days. Because the route stays within Southeast Asia, it is not affected by the Red Sea disruption that hits Europe lanes. On tax, the great news is that Singapore charges no import duty on the vast majority of goods, so on a typical shipment you pay only 9 percent GST on the value. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Shenzhen (Yantian)', 'Ningbo', 'Guangzhou', 'Xiamen'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and unusually low, because this is a short intra-Asia lane with frequent direct services, and the 2026 Red Sea situation does not affect it. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Free port: Singapore charges no import duty on almost all goods, so your main cost is 9 percent GST.',
          'Short lane: Singapore is close to China with very frequent direct services, so freight and transit are low.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles GST and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$350 - $650' },
          { label: '40ft container (FCL)', range: '$600 - $1,100' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$10 - $30' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$2.50 - $4.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$2.00 - $3.50' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$1.60 - $3.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$5.00 - $9.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL), with LCL minimums that make the per-CBM figure higher on very small volumes. Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight. There is no import duty on almost all goods, but 9 percent GST applies on the value, as covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Singapore shipping and the cheapest way to move anything large or heavy, and this is one of the shorter and busiest lanes from China. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo arrives at the Port of Singapore, run by PSA, one of the world’s largest and busiest container ports and the leading transshipment hub in the region, so it has very frequent direct services from all the major China ports. Transit is typically 5 to 12 days port to port, around 7 to 9 days from South China, with LCL adding a few days for consolidation. Because it is an intra-Asia lane, the 2026 Red Sea situation does not affect it, and Singapore’s customs clearance is fast. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is very fast and cheap on this lane. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Changi Airport, usually arriving in about 2 to 4 days, with daily freighter and belly capacity. It costs more than sea freight per unit, but the gap is small here, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. Since sea freight is already quick and much cheaper, we can quote both side by side so you can weigh the small time saving.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 2 to 5 days into Singapore, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Singapore. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '5 - 12 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 5 - 7 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '2 - 4 days', indicativeCost: 'Moderate', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '2 - 5 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Shenzhen (including the Yantian terminal), Ningbo-Zhoushan, Guangzhou, and Xiamen handle the bulk of Singapore-bound containers, with South China ports especially close. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the Singapore side, the Port of Singapore, run by PSA, is one of the world’s largest and busiest container ports and the leading transshipment hub in the region, so it has very frequent direct China services and short transit. Changi Airport is the main air-cargo gateway. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Singapore is one of the simplest destinations on this list, because it is a free port. Here is what applies when you import from China. The main thing to know is that almost everything is duty-free, so your cost is usually just the 9 percent GST, and clearance is fast and fully electronic.',
        points: [
          'Singapore is a free port and charges no import duty on the vast majority of goods. Customs duty applies to only four categories: intoxicating liquors, tobacco, motor vehicles, and petroleum products. Almost all other China-origin cargo enters duty-free.',
          'GST is 9 percent, charged on the CIF value plus any duty. GST-registered importers can reclaim it as input tax.',
          'The China-Singapore free trade agreement and RCEP both apply, but since most goods are already duty-free the practical benefit is mainly on documentation rather than duty savings.',
          'An import permit is mandatory before arrival and is filed electronically through TradeNet, and the importer needs an activated Customs Account. Clearance is among the fastest and most efficient in the world.',
          'Goods can sit in a Free Trade Zone or licensed warehouse with GST deferred until they enter the local market, which suits re-export and transshipment cargo.',
          'Core documents are the TradeNet import permit, commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin where relevant, plus any controlled-goods licences. Wood packaging must meet the ISPM-15 heat-treatment standard.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the short sea or air leg, Singapore customs and GST, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. Because Singapore is a free port and clearance is fast, this is a very smooth lane, and DDP keeps it fully hands-off. The alternative, FOB or CIF, leaves the Singapore import permit and GST for you to arrange, though it is a simple process. For most importers, DDP is worth it for the convenience.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Singapore delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'We make sure the import permit and Customs Account are in order; there is no duty on almost all goods, only 9 percent GST.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from China to the Port of Singapore or Changi Airport.',
        'We file the TradeNet permit, handle GST, and clear your shipment, then deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Singapore?',
          answer:
            'As an indicative guide, sea freight runs roughly $350 to $650 for a 20ft container, LCL is about $10 to $30 per cubic meter, and air freight is around $1.60 to $4 per kg. This is a short, low-cost lane. There is no duty on almost all goods, but 9 percent GST applies. Request a live quote for your exact cargo.',
        },
        {
          question: 'Do I pay import duty shipping from China to Singapore?',
          answer:
            'For almost all goods, no. Singapore is a free port and charges import duty on only four categories: liquor, tobacco, motor vehicles, and petroleum products. Everything else enters duty-free, so on a typical shipment you pay only 9 percent GST on the value.',
        },
        {
          question: 'How long does shipping from China to Singapore take?',
          answer:
            'Sea freight takes about 5 to 12 days port to port, around 7 to 9 days from South China. Air freight is about 2 to 4 days and express courier is 2 to 5 days. Singapore’s customs clearance is fast, and the intra-Asia route is not affected by the Red Sea situation.',
        },
        {
          question: 'What is the cheapest way to ship from China to Singapore?',
          answer:
            'Sea freight is the cheapest per unit and already fast on this short lane. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Shipping from South China ports gives the best rates.',
        },
        {
          question: 'How much is GST on imports to Singapore?',
          answer:
            'GST is 9 percent, charged on the CIF value plus any duty (though most goods have no duty). GST-registered importers can reclaim it as input tax, so for them it is a cash-flow item rather than a permanent cost.',
        },
        {
          question: 'How does customs clearance work in Singapore?',
          answer:
            'Everything clears electronically through TradeNet, and an import permit is required before arrival. The importer needs an activated Customs Account. It is one of the fastest and most efficient customs systems in the world, which keeps this lane smooth.',
        },
        {
          question: 'Can I store goods in Singapore before paying GST?',
          answer:
            'Yes. Goods can sit in a Free Trade Zone or a licensed warehouse with GST deferred until they enter the local market, which is useful for re-export or transshipment cargo. We can set this up if it suits your supply chain.',
        },
        {
          question: 'What documents do I need to import from China to Singapore?',
          answer:
            'You need a TradeNet import permit, a commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin where relevant, plus any controlled-goods licences. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-south-korea',
    name: 'South Korea',
    code: 'KR',
    description: 'Sea and air freight from China to South Korea. 2-5 day transit via Busan and Incheon. FCL, LCL, express air, and door-to-door delivery.',
    majorPorts: ['Busan', 'Incheon', 'Seoul'],
    transitTime: '2-5 days',
    popularGoods: ['Electronics', 'Machinery', 'Consumer Goods', 'Textiles', 'Auto Parts'],
    content: {
      lastUpdated: 'July 2026',
      metaTitle: 'Shipping From China to South Korea: Cost 2026',
      metaDescription:
        'Shipping from China to South Korea: sea, air and express freight costs, transit times, Busan port, VAT and the China-Korea FTA duty benefit. Free quote.',
      answerCapsule:
        'Shipping from China to South Korea moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Qingdao, and Shenzhen and arrive at Busan, one of the world’s biggest ports, or Incheon near Seoul. Because Korea is very close to China, sea freight is very quick at about 1 to 6 days and air freight 2 to 4 days. Korean VAT of 10 percent applies, but many Chinese goods get reduced or zero duty under the China-Korea free trade agreement.',
      intro:
        'If you import from China into South Korea, you are running one of the fastest and cheapest freight lanes in the world, and a free trade agreement can wipe out the duty. This guide covers what shipping from China to South Korea actually costs, how long each option takes, which ports your cargo moves through, and the Korean customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 1 to 6 days, sometimes just 1 to 3 days from northern China. Air freight is about 2 to 4 days. Because the route stays within East Asia, it is not affected by the Red Sea disruption that hits Europe lanes. On tax, Korea charges 10 percent VAT, and thanks to the China-Korea FTA and RCEP, many goods qualify for reduced or zero duty with a certificate of origin. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Qingdao', 'Ningbo', 'Shenzhen (Yantian)', 'Dalian'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and unusually low, since this is a short intra-Asia lane and intra-Asia capacity has been soft in 2026. The Red Sea situation does not affect it. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Duty: under the China-Korea FTA and RCEP, many Chinese goods qualify for reduced or zero duty with a certificate of origin.',
          'Short lane: Korea is very close to China, so freight and transit are among the lowest of any route from China.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, tax, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$300 - $700' },
          { label: '40ft container (FCL)', range: '$550 - $1,000' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$15 - $85' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$3.00 - $5.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$2.20 - $4.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$1.80 - $3.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$3.50 - $6.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL), with LCL minimums that make the per-CBM figure higher on very small volumes. Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight. None of these ranges include Korean customs duty (often reduced or zero under the FTA) or the 10 percent VAT, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to South Korea shipping and the cheapest way to move anything large or heavy, and this is one of the very shortest international sea lanes anywhere. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo crosses the Yellow Sea and arrives at Busan, one of the world’s largest container ports and a top global transshipment hub, or Incheon serving Seoul and the capital region, with Gwangyang also handling containers. Transit is typically 1 to 6 days port to port, as little as 1 to 3 days from northern China ports like Qingdao and Dalian, with LCL adding a few days for consolidation. Because it is an intra-Asia lane, the 2026 Red Sea situation does not affect it, and Korean customs is fast and electronic. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is extremely fast and cheap on this lane. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Beijing to Incheon Airport, usually arriving in about 2 to 4 days, often on a next-day flight plus handling. It costs a little more than sea freight per unit, but the gap is small here, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. Since sea freight is already very quick and much cheaper, we can quote both side by side so you can weigh the small time saving.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 5 days into South Korea, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to South Korea. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '1 - 6 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 4 - 7 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '2 - 4 days', indicativeCost: 'Moderate', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 5 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Qingdao, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), and Dalian handle the bulk of Korea-bound containers, with northern China ports especially close to Korea. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Beijing. On the Korean side, Busan is the main gateway and one of the world’s largest container ports and transshipment hubs, so sailing frequency is excellent, while Incheon serves Seoul and the capital region and Gwangyang handles additional volume. Incheon International Airport is the dominant air gateway. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Korean customs is efficient and fully electronic, and a free trade agreement can lower or remove your duty. Here is what applies when you import from China. The main planning point is the certificate of origin, since that is what unlocks the reduced rate.',
        points: [
          'Import VAT is a flat 10 percent, charged on the customs value plus duty. VAT-registered businesses can reclaim it.',
          'Customs duty is charged on the CIF value. Under the China-Korea FTA, in force since December 2015, and RCEP, many Chinese goods qualify for reduced or zero duty; you present whichever certificate of origin gives the better rate. Without a valid certificate the standard rate applies.',
          'The China-Korea FTA also allows third-country invoicing, so goods paid through a place like Hong Kong can still claim preference as long as they ship directly from China.',
          'The importer needs a Korean business or customs registration, and most companies use a licensed Korean customs broker to file. Clearance runs electronically through the UNI-PASS system, and duties and taxes are paid in Korean won.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, the import declaration, and the preferential certificate of origin to claim reduced duty, plus any product-specific permits.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the short sea or air leg, Korean customs, duty, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. Because this is a fast lane, DDP keeps it simple, and we make sure the FTA certificate of origin is in place so you claim any duty saving. The alternative, FOB or CIF, leaves the Korean clearance, duty, and delivery for you to arrange through a broker. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Korean delivery address.',
        'We check whether your goods qualify for reduced duty under the China-Korea FTA or RCEP and help you get the certificate of origin.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from China to a Korean gateway such as Busan or Incheon.',
        'We clear Korean customs through UNI-PASS, handle duty and VAT, and deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to South Korea?',
          answer:
            'As an indicative guide, sea freight runs roughly $300 to $700 for a 20ft container, LCL is about $15 to $85 per cubic meter, and air freight is around $1.80 to $5 per kg. This is a short, low-cost lane. Korean duty (often reduced under the FTA) and 10 percent VAT are extra. Request a live quote.',
        },
        {
          question: 'Do Chinese goods get a duty discount in South Korea?',
          answer:
            'Often yes. Under the China-Korea free trade agreement, in force since 2015, and RCEP, many Chinese goods qualify for reduced or zero duty with a valid certificate of origin. You use whichever agreement gives the better rate. Without the certificate, the standard duty applies. You still pay 10 percent VAT.',
        },
        {
          question: 'How long does shipping from China to South Korea take?',
          answer:
            'Sea freight takes about 1 to 6 days port to port, as little as 1 to 3 days from northern China ports like Qingdao. Air freight is about 2 to 4 days and express courier is 3 to 5 days. Korean customs is fast, and the East Asia route is not affected by the Red Sea.',
        },
        {
          question: 'What is the cheapest way to ship from China to South Korea?',
          answer:
            'Sea freight is the cheapest per unit and already very fast on this short lane. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost a little more but save a day or two.',
        },
        {
          question: 'Which Korean port do shipments arrive at?',
          answer:
            'Busan is the main gateway, one of the world’s largest container ports and transshipment hubs, so sailing frequency is excellent. Incheon serves Seoul and the capital region, and Gwangyang handles additional volume. Incheon International Airport is the main air gateway.',
        },
        {
          question: 'How much is VAT on imports to South Korea?',
          answer:
            'Korea charges a flat 10 percent import VAT on the customs value plus duty. VAT-registered businesses can reclaim it, so for them it is a cash-flow item rather than a permanent cost.',
        },
        {
          question: 'Is shipping to South Korea affected by the Red Sea situation?',
          answer:
            'No. China to South Korea is an East Asia sea lane that does not use the Suez Canal or the Red Sea, so it is not affected by the 2026 diversions that have lengthened Asia to Europe routes. Transit stays short and predictable.',
        },
        {
          question: 'What documents do I need to import from China to South Korea?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, the import declaration, and a China-Korea FTA or RCEP certificate of origin to claim reduced duty, plus any product-specific permits. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-sweden',
    name: 'Sweden',
    code: 'SE',
    description: 'Sea and air freight from China to Sweden. 30-39 day transit via Gothenburg, Helsingborg, and other Swedish ports. FCL, LCL, and customs clearance.',
    majorPorts: ['Gothenburg', 'Helsingborg', 'Norrkoeping', 'Gaevle', 'Halmstad'],
    transitTime: '30-39 days',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Furniture', 'Automotive Parts'],
    content: {
      lastUpdated: 'July 2026',
      metaTitle: 'Shipping From China to Sweden: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Sweden: compare sea, air and express freight costs, transit times, the Port of Gothenburg and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Sweden moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Gothenburg, the largest port in the Nordics and the only one with direct China services. Sea freight takes about 25 to 40 days and air freight 3 to 8 days. Swedish import VAT of 25 percent applies, and VAT-registered businesses account for it on their VAT return rather than paying cash at the border.',
      intro:
        'If you import from China into Sweden, you have a real advantage that other Nordic countries lack: Gothenburg has direct deep-sea services from China, so you avoid an extra transshipment leg. This guide covers what shipping from China to Sweden actually costs, how long each option takes, which ports your cargo moves through, and the Swedish and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 25 to 40 days. Air freight is about 3 to 8 days. Sweden is in the EU, so you need an EORI number to clear customs and should plan for 25 percent import VAT plus any duty, though VAT-registered businesses account for the VAT on their return rather than paying it in cash. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been volatile in 2026, with Red Sea diversions around the Cape of Good Hope lengthening Asia to North Europe sailings. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Direct service: Gothenburg has direct China deep-sea services, so it avoids the transshipment leg that other Nordic ports rely on.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to the ocean leg.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,000 - $3,500' },
          { label: '40ft container (FCL)', range: '$3,500 - $5,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$30 - $80' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$8.00 - $15.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$7.00 - $11.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$6.50 - $9.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$8.00 - $14.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Swedish import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Sweden shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Sweden’s advantage is Gothenburg, the largest port in the Nordics and the only Scandinavian port with direct deep-sea services to Asia, so unlike other Nordic ports it does not depend on a feeder from Rotterdam or Hamburg. That keeps transit to Gothenburg at about 25 to 40 days port to port, with direct or near-direct calls at the faster end, and LCL adding about 7 to 10 days. Stockholm at Norvik and Helsingborg are secondary sea gateways, mostly fed by feeder. In 2026, Cape of Good Hope routing has added time to some sailings. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Beijing to Stockholm Arlanda, the main Swedish cargo airport, usually arriving in about 3 to 8 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 6 days into Sweden, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Sweden. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '25 - 40 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '3 - 8 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Sweden-bound containers. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Beijing. On the Swedish side, Gothenburg is the largest port in the Nordics and the only Scandinavian port with direct deep-sea China services, which means fewer transshipments and more reliable schedules than feedering through Rotterdam or Hamburg. Stockholm at Norvik and Helsingborg handle additional cargo, mostly by feeder. Stockholm Arlanda is the main air-cargo gateway. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Sweden sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs they move freely across the EU. There is no VAT-free allowance for commercial imports, and Sweden has one of the higher EU VAT rates, so plan around 25 percent import VAT plus any duty, though VAT-registered businesses account for the VAT on their return. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Swedish import VAT is 25 percent. VAT-registered businesses do not pay it in cash at the border; they report it on their VAT return to the Swedish Tax Agency, effectively a reverse-charge that nets input against output VAT. Only importers not registered for VAT in Sweden pay it directly to customs.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. It is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. Since 1 July 2026 the EUR 150 customs-duty exemption has also ended, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Swedish and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record, though a VAT-registered Swedish business often prefers to be the importer of record so it can account for the import VAT on its return. For most Swedish importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Swedish delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails on a direct service to Gothenburg, or flies into Stockholm Arlanda.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Sweden?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,000 to $3,500 for a 20ft container, LCL is about $30 to $80 per cubic meter, and air freight is around $6.50 to $15 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Sweden take?',
          answer:
            'Sea freight takes about 25 to 40 days port to port to Gothenburg, helped by direct China services. Air freight is about 3 to 8 days and express courier is 3 to 6 days. In 2026, Red Sea diversions have added time to some sailings.',
        },
        {
          question: 'Why is Gothenburg a good port for China imports?',
          answer:
            'Gothenburg is the largest port in the Nordics and the only Scandinavian port with direct deep-sea services from China, so unlike other Nordic ports it does not depend on a feeder from Rotterdam or Hamburg. That usually means fewer transshipments and more reliable schedules.',
        },
        {
          question: 'How does Swedish import VAT work?',
          answer:
            'Swedish import VAT is 25 percent, but VAT-registered businesses do not pay it in cash at the border. They report it on their VAT return to the Swedish Tax Agency, netting input against output VAT, which removes the cash-flow hit. Only importers not registered for VAT in Sweden pay it directly to customs.',
        },
        {
          question: 'What is the cheapest way to ship from China to Sweden?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Direct sea to Gothenburg is usually both cheap and reasonably fast.',
        },
        {
          question: 'Do I need an EORI number to import from China to Sweden?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, a one-time and free registration valid across all 27 EU countries. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How much duty will I pay importing from China to Sweden?',
          answer:
            'Duty is set by your product’s commodity code in the EU TARIC tariff and charged on the CIF value, with many goods at low single-digit rates and some higher, plus anti-dumping duty on certain categories. On top of that, 25 percent import VAT applies, which VAT-registered businesses account for on their return.',
        },
        {
          question: 'What documents do I need to import from China to Sweden?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-norway',
    name: 'Norway',
    code: 'NO',
    description: 'Sea and air freight from China to Norway. 32-40 day transit via Oslo, Bergen, Stavanger, and 15 other Norwegian ports. FCL, LCL, and customs clearance.',
    majorPorts: ['Oslo', 'Bergen', 'Stavanger', 'Drammen', 'Kristiansand', 'Haugesund'],
    transitTime: '32-40 days',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Marine Equipment', 'Industrial Supplies'],
    content: {
      lastUpdated: 'July 2026',
      metaTitle: 'Shipping From China to Norway: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Norway: compare sea, air and express freight costs, transit times, the Port of Oslo and Norwegian customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Norway moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Oslo, usually feedered via a continental hub like Rotterdam or Hamburg. Sea freight takes about 32 to 48 days and air freight 6 to 10 days. Norwegian import VAT of 25 percent applies, and because Norway is not in the EU, goods must clear Norwegian customs separately even after entering Europe.',
      intro:
        'If you import from China into Norway, one thing catches people out: Norway is not in the EU, so unlike Sweden or Denmark it runs its own customs, and goods must be cleared for Norway even after they enter Europe. This guide covers what shipping from China to Norway actually costs, how long each option takes, which ports your cargo moves through, and the Norwegian customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 32 to 48 days, because cargo feeders in from a continental hub. Air freight is about 6 to 10 days. On tax, Norway charges 25 percent import VAT, with low or zero customs duty on most industrial goods but real duty on textiles, clothing, and food. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been elevated in 2026 because Red Sea diversions around the Cape of Good Hope have lengthened Asia to North Europe sailings, and Norway sits at the end of a feeder leg. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Own customs: Norway is not in the EU, so goods must clear Norwegian customs separately, even after entering Europe through an EU port.',
          'Routing: there is no direct China to Norway sailing, so cargo feeders in from Rotterdam, Hamburg, or Gothenburg.',
          'Duty: most industrial goods have low or zero duty, but textiles, clothing, and food carry real duty on top of the 25 percent VAT.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,900 - $3,700' },
          { label: '40ft container (FCL)', range: '$4,600 - $5,900' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$45 - $90' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$5.50 - $9.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$4.50 - $7.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$3.50 - $5.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$6.00 - $10.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Norwegian import VAT of 25 percent, any customs duty, or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Norway shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. There is no direct China to Norway container service, so cargo runs on the main Asia to North Europe route to a continental hub such as Rotterdam, Hamburg, or Gothenburg, and then a feeder vessel carries it to the Port of Oslo. Transit is typically 32 to 48 days port to port, longer than to the continental hub itself because of the feeder leg, with LCL adding a few days. In 2026, Cape of Good Hope routing has added time to some sailings. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Oslo Gardermoen, usually arriving in about 6 to 10 days, often connecting through a European hub. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 6 days into Norway, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Norway. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '32 - 48 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '6 - 10 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Norway-bound containers. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the Norwegian side, the Port of Oslo is the main container gateway, with Larvik and Kristiansand as secondary sea gateways. Because there is no direct China service, cargo is feedered in from a continental hub such as Rotterdam, Hamburg, or Gothenburg, so build the transshipment leg into your timeline. Oslo Gardermoen is the main air gateway. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'The important thing about Norway is that it is not in the EU, so it runs its own customs and sits outside the EU VAT area. A shipment cleared at an EU port is not cleared for Norway; it has to be imported again at the Norwegian border. Here is what applies. Confirm the duty for your product, since it depends on what you are importing.',
        points: [
          'Norway is in the EEA but not the EU, so it has its own customs administration (Tolletaten) and is outside the EU customs union and VAT area. Goods must be formally imported and cleared for Norway even if they entered Europe through an EU port.',
          'Import VAT (MVA) is 25 percent, charged on the CIF value plus any duty. VAT-registered Norwegian businesses self-report and can reclaim it.',
          'Customs duty is low or zero on most industrial and manufactured goods, but real duty applies to textiles, clothing, footwear, and food, so apparel and food importers should budget duty on top of the VAT. There is no China-Norway free trade agreement in force, so standard rates apply.',
          'For low-value business-to-consumer goods, the VOEC scheme lets foreign sellers collect the 25 percent VAT at checkout for items under NOK 3,000, which then skip border VAT handling. Most commercial freight clears normally at the border instead.',
          'A commercial importer needs a Norwegian organisation number and should be in the VAT register; non-resident sellers usually appoint a VAT representative or customs broker.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, the customs declaration, and a certificate of origin where relevant. Wood packaging must meet the ISPM-15 heat-treatment standard.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg and the feeder into Oslo, Norwegian customs, duty, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. Because Norway has its own customs outside the EU, having us handle the separate Norwegian clearance is especially useful. The alternative, FOB or CIF, leaves the Norwegian clearance, duty, and delivery for you to arrange, and the consignee needs a Norwegian organisation number and VAT registration. For most Norwegian importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Norwegian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure the importer has a Norwegian organisation number and is VAT registered; non-resident sellers can appoint a representative, which we can arrange.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to a continental hub and feeders to the Port of Oslo, or flies into Oslo Gardermoen.',
        'We clear Norwegian customs, handle duty and 25 percent VAT, and deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Norway?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,900 to $3,700 for a 20ft container, LCL is about $45 to $90 per cubic meter, and air freight is around $3.50 to $9 per kg depending on weight. Norwegian VAT of 25 percent and any duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'Is shipping to Norway the same as shipping to the EU?',
          answer:
            'No. Norway is in the EEA but not the EU, so it has its own customs and is outside the EU VAT area. A shipment cleared at an EU port such as Rotterdam is not cleared for Norway; it must be imported and cleared again at the Norwegian border, unlike Sweden or Denmark.',
        },
        {
          question: 'How long does shipping from China to Norway take?',
          answer:
            'Sea freight takes about 32 to 48 days, since there is no direct service and cargo feeders in from a continental hub such as Rotterdam or Hamburg. Air freight is about 6 to 10 days and express courier is 3 to 6 days. In 2026, Red Sea diversions have added time to the ocean leg.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Norway?',
          answer:
            'Norway charges 25 percent import VAT on the CIF value plus any duty. Customs duty is low or zero on most industrial goods, but real duty applies to textiles, clothing, footwear, and food. There is no China-Norway free trade agreement, so standard rates apply.',
        },
        {
          question: 'What is the cheapest way to ship from China to Norway?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Why does shipping to Norway go through another port first?',
          answer:
            'There is no direct China to Norway container service, so cargo runs on the main Asia to North Europe route to a continental hub such as Rotterdam, Hamburg, or Gothenburg, then a feeder vessel carries it to Oslo. That extra leg adds time versus reaching the continental hub itself.',
        },
        {
          question: 'Do I need to register to import into Norway?',
          answer:
            'A commercial importer needs a Norwegian organisation number and should be in the VAT register to report and reclaim import VAT. A non-resident seller usually appoints a VAT representative or customs broker, which we can arrange, or you can ship door-to-door and we handle clearance.',
        },
        {
          question: 'What documents do I need to import from China to Norway?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, the customs declaration, and a certificate of origin where relevant. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-czech-republic',
    name: 'Czech Republic',
    code: 'CZ',
    description: 'Sea and rail freight from China to the Czech Republic via Paskov and Melnik inland terminals. 35-42 day transit. FCL, LCL, and customs clearance.',
    majorPorts: ['Awt Paskov', 'Melnik'],
    transitTime: '35-42 days',
    popularGoods: ['Machinery', 'Electronics', 'Automotive Parts', 'Consumer Goods', 'Industrial Equipment'],
    content: {
      lastUpdated: 'July 2026',
      metaTitle: 'Shipping From China to Czech Republic: Cost 2026',
      metaDescription:
        'Shipping from China to the Czech Republic: compare sea, rail, air and express freight costs, transit times, gateway ports and EU customs. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to the Czech Republic moves cargo by sea freight, rail freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Czechia is landlocked, so sea cargo arrives at a port like Hamburg or Koper and moves to Prague by road or rail. Sea takes about 35 to 45 days, rail 18 to 25, and air 6 to 9. Czech import VAT is 21 percent plus any EU duty, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into the Czech Republic, two things shape your shipment: Czechia is landlocked, so you pick a gateway seaport in a neighbouring country, and China-Europe rail is a genuine option with direct Czech terminals. This guide covers what shipping from China to the Czech Republic actually costs, how long each option takes, which ports and routes your cargo moves through, and the Czech and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have several ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), rail freight, air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 35 to 45 days. Rail to Prague runs about 18 to 25 days, and air freight lands in 6 to 9 days. Czechia is in the EU, so you need an EORI number to clear customs and should plan for 21 percent import VAT plus any duty. A lot of Czech imports are automotive and manufacturing parts, so reliable transit matters. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the gateway port, the size and weight of your cargo, and the season. The ranges below are indicative and move week to week, with 2026 Red Sea diversions affecting the ocean leg. Sea rates below are to the gateway port; inland haulage to Prague is extra. Treat them as a planning guide, then request a live quote.',
        factors: [
          'Gateway port: Hamburg gives the most sailings; Koper in Slovenia often gives a shorter, cheaper inland leg into Prague. Compare total landed cost.',
          'Mode: sea is cheapest, rail sits in the middle, air is faster and dearer, express is fastest and dearest.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to the ocean leg.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, inland haulage, and delivery into one price, which removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL), to gateway port', range: '$2,400 - $3,000' },
          { label: '40ft container (FCL), to gateway port', range: '$4,500 - $5,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$40 - $90' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $9.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $7.50' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.00 - $6.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$6.00 - $12.00' }],
        note:
          'Sea freight is priced per container (FCL) to the gateway port, plus inland haulage to Prague, or per cubic meter (LCL). Rail freight from China runs roughly $5,000 to $8,000 for a 40ft container, between sea and air on cost and speed. Air and express are priced on chargeable weight. None of these ranges include Czech import VAT or EU duty, covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Czech Republic shipping and the cheapest way to move anything large or heavy, but because Czechia is landlocked, the choice of gateway port matters. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, most cost-effective once you have roughly 15 cubic meters (CBM) or more, while shared container space (LCL) means you pay only for the space you use, better for smaller loads. Most Czech-bound cargo arrives at Hamburg or Bremerhaven in Germany, the traditional default with the most sailings, or at Koper in Slovenia, which often gives a shorter and cheaper inland leg into Prague. Rotterdam, Gdansk, and Trieste are alternatives. From the port, cargo moves to Prague, Brno, or Ostrava by road or rail. Door to door is typically 35 to 45 days, with LCL adding more for consolidation. In 2026, Cape of Good Hope routing has added time to some sailings. A rough rule: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote the gateway options so you can compare.',
      airFreightBody:
        'Air freight is the fast option, and rail is a strong middle ground for Czechia. Air cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Prague, usually arriving in about 6 to 9 days, sometimes railed or trucked in from Frankfurt, Leipzig, or Vienna. Rail freight runs from inland Chinese hubs such as Xi’an, Chengdu, and Chongqing to Czech terminals in Prague, Pardubice, and Lovosice in about 18 to 25 days, and a scheduled Xi’an to Prague service is faster still, roughly between sea and air on cost and speed. Air is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size, and per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote sea, rail, and air side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 6 days into the Czech Republic, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to the Czech Republic. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL (via gateway port)', time: '35 - 45 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Rail freight (to Czech terminals)', time: '18 - 25 days', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive heavy cargo' },
        { mode: 'Air freight', time: '6 - 9 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle Czech-bound containers. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong, and rail services start from inland hubs such as Xi’an, Chengdu, and Chongqing. Because the Czech Republic is landlocked, sea cargo arrives at a gateway port in a neighbouring country: Hamburg and Bremerhaven in Germany are the default, with Koper in Slovenia often faster into Prague, and Rotterdam, Gdansk, and Trieste as alternatives, then moves inland by road or rail. China-Europe rail reaches direct Czech terminals at Prague, Pardubice, and Lovosice. Prague is the main airport. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'The Czech Republic sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs they move freely across the EU. There is no VAT-free allowance for commercial imports, so plan around 21 percent import VAT and any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Czech import VAT is 21 percent, charged on the customs value plus duty plus transport to the EU border (a reduced 12 percent rate applies to some goods). VAT-registered businesses recover it as input tax.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, bicycles, and EV-related items) carry extra anti-dumping duty, which matters for automotive imports.',
          'You need an EORI number to import into the EU. It is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. Since 1 July 2026 the EUR 150 customs-duty exemption has also ended, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'You can clear customs at the gateway port or in the Czech Republic. Clearing in Czechia keeps the goods in EU transit until they reach Prague; we set up whichever suits your routing.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading, air waybill, or rail consignment note.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg, the inland haulage from the gateway port, Czech and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is especially useful for a landlocked destination, where the gateway-port and inland legs add complexity, and for just-in-time automotive cargo. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Czech importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Czech delivery address.',
        'We recommend the best route (sea via Hamburg or Koper plus inland, rail to a Czech terminal, or air) and quote your options, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo arrives at a gateway port and moves to Prague by road or rail, takes the China-Europe rail corridor, or flies into Prague.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to the Czech Republic?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,400 to $3,000 for a 20ft container to the gateway port (inland haulage to Prague extra), LCL is about $40 to $90 per cubic meter, and air freight is around $4 to $9 per kg. Rail is roughly $5,000 to $8,000 for a 40ft. Import VAT and duty are extra. Request a live quote.',
        },
        {
          question: 'How does cargo reach the Czech Republic if it is landlocked?',
          answer:
            'Sea cargo arrives at a gateway port in a neighbouring country, usually Hamburg in Germany or Koper in Slovenia, then moves inland by road or rail to Prague, Brno, or Ostrava. Rotterdam, Gdansk, and Trieste are alternatives, and China-Europe rail reaches direct Czech terminals.',
        },
        {
          question: 'How long does shipping from China to the Czech Republic take?',
          answer:
            'Sea freight to a gateway port plus the inland leg is about 35 to 45 days. Rail to a Czech terminal is about 18 to 25 days, air freight about 6 to 9 days, and express courier 3 to 6 days. In 2026, Red Sea diversions have added time to the ocean leg.',
        },
        {
          question: 'Should I ship via Hamburg or Koper?',
          answer:
            'Hamburg gives the most sailings and consolidation options. Koper in Slovenia can be faster and cheaper into Prague because the inland leg is short. Many shipments are quoted both ways, and the right choice depends on total landed cost and schedule reliability.',
        },
        {
          question: 'How does rail freight from China to the Czech Republic compare?',
          answer:
            'Rail runs from inland Chinese hubs to Czech terminals at Prague, Pardubice, and Lovosice in about 18 to 25 days, roughly half the time of sea at a price between sea and air. A scheduled Xi’an to Prague service makes it a genuine middle option, useful when sea is too slow and air too costly.',
        },
        {
          question: 'What is the cheapest way to ship from China to the Czech Republic?',
          answer:
            'Sea freight via Koper or Hamburg is usually the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it.',
        },
        {
          question: 'Do I need an EORI number to import from China to the Czech Republic?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, a one-time and free registration valid across all 27 EU countries. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'What documents do I need to import from China to the Czech Republic?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading, air waybill, or rail consignment note, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-spain',
    name: 'Spain',
    code: 'ES',
    description: 'Sea and air freight from China to Spain. 28-35 day transit via Barcelona, Valencia, and Algeciras. FCL, LCL, customs clearance, and door-to-door delivery.',
    majorPorts: ['Barcelona', 'Valencia', 'Algeciras'],
    transitTime: '28-35 days',
    popularGoods: ['Textiles', 'Electronics', 'Furniture', 'Consumer Goods', 'Machinery'],
    content: {
      lastUpdated: 'July 2026',
      metaTitle: 'Shipping From China to Spain: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Spain: compare sea, air and express freight costs, transit times, Valencia and Algeciras ports and EU customs and VAT. Free quote.',
      answerCapsule:
        'Shipping from China to Spain moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Valencia or Barcelona, or via the Algeciras transshipment hub. Sea freight takes about 28 to 40 days and air freight 6 to 10 days. Spanish import VAT of 21 percent and any EU duty apply, and regular importers can defer the VAT to their monthly return rather than pay it at the border.',
      intro:
        'If you import from China into Spain, you are shipping to one of the Mediterranean’s best-connected gateways, with Valencia and Algeciras handling direct China services. This guide covers what shipping from China to Spain actually costs, how long each option takes, which ports your cargo moves through, and the Spanish and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 28 to 40 days. Air freight is about 6 to 10 days. Spain is in the EU, so you need an EORI number to clear customs and should plan for 21 percent import VAT plus any duty. One Spanish advantage worth knowing: regular importers on the monthly VAT return can defer import VAT to that return instead of paying it in cash at the border. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been volatile in 2026, with Red Sea diversions around the Cape of Good Hope keeping Mediterranean ocean rates high. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Direct service: Valencia and Algeciras have direct China calls, so they avoid an extra transshipment leg and suit onward Med distribution.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to Mediterranean services.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$3,000 - $4,000' },
          { label: '40ft container (FCL)', range: '$4,500 - $5,700' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$60 - $120' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $10.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $8.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.50 - $6.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$6.00 - $12.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Spanish import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Spain shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Spain has strong Mediterranean gateways: Valencia is the largest container port and has direct China services, Barcelona is often on the same rotation, and Algeciras near Gibraltar is one of Europe’s biggest transshipment hubs with direct Asia calls, while Bilbao serves the north. Transit is typically 28 to 40 days port to port, with LCL adding about 7 to 10 days. In 2026, Cape of Good Hope routing has added time to some sailings. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Madrid, the main Spanish air-cargo hub, usually arriving in about 6 to 10 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 6 days into Spain, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Spain. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '28 - 40 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '6 - 10 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Spain-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Spanish side, Valencia is the largest Mediterranean container port with direct China services, Barcelona is a major Med gateway often paired with Valencia, and Algeciras near Gibraltar is one of Europe’s biggest transshipment hubs, so goods can route on to other Mediterranean and Atlantic destinations through Spain. Bilbao is the main northern gateway, and Madrid is the primary air-cargo hub. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Spain sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs they move freely across the EU. There is no VAT-free allowance for commercial imports, so plan around 21 percent import VAT and any duty, though Spain lets regular importers defer the VAT. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Spanish import VAT (IVA) is 21 percent, charged on the customs value plus duty plus freight. Importers on the monthly VAT return can use deferred import VAT (IVA diferido) to account for it on their monthly return instead of paying cash at the border, a cash-flow advantage, though it requires near-real-time reporting.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. It is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. Since 1 July 2026 the EUR 150 customs-duty exemption has also ended, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'The Canary Islands are outside the EU VAT area and do not charge IVA; instead the local IGIC applies (a general rate of 7 percent). Treat Canary Islands shipments as a separate customs and tax flow from the mainland.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Spanish and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record, though a regular Spanish importer often prefers to be the importer of record so it can use deferred import VAT. For most Spanish importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Spanish delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) and the right port (Valencia, Barcelona, or Algeciras) for your delivery point, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet, and set up deferred import VAT if it suits you.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Valencia, Barcelona, or Algeciras, or flies into Madrid.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Spain?',
          answer:
            'As an indicative guide, sea freight runs roughly $3,000 to $4,000 for a 20ft container, LCL is about $60 to $120 per cubic meter, and air freight is around $4.50 to $10 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Spain take?',
          answer:
            'Sea freight takes about 28 to 40 days port to port to Valencia or Barcelona, with direct China services. Air freight is about 6 to 10 days and express courier is 3 to 6 days. In 2026, Red Sea diversions have added time to some sailings.',
        },
        {
          question: 'Should I ship into Valencia, Barcelona, or Algeciras?',
          answer:
            'Valencia is the largest Mediterranean container port with direct China services, Barcelona is often on the same rotation for the northeast, and Algeciras near Gibraltar is a big transshipment hub, good if goods route on to other Mediterranean or Atlantic ports. The best choice depends on your delivery point.',
        },
        {
          question: 'Can I defer import VAT in Spain?',
          answer:
            'Yes, if you are a regular importer registered for the monthly VAT return. Deferred import VAT (IVA diferido) lets you account for the 21 percent import VAT on your monthly return instead of paying it in cash at the border, which helps cash flow, though it requires near-real-time transaction reporting.',
        },
        {
          question: 'What is the cheapest way to ship from China to Spain?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Spain?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, a one-time and free registration valid across all 27 EU countries. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How does VAT work for the Canary Islands?',
          answer:
            'The Canary Islands are outside the EU VAT area, so they do not charge Spanish IVA. Instead the local IGIC applies, at a general rate of 7 percent. Shipments to the Canaries are a separate customs and tax flow from the Spanish mainland, so tell us if your delivery is in the islands.',
        },
        {
          question: 'What documents do I need to import from China to Spain?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-united-kingdom',
    name: 'United Kingdom',
    code: 'GB',
    description: 'Sea and air freight from China to the UK. 28-35 day transit via Felixstowe, Southampton, London Gateway, and Liverpool. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Felixstowe', 'Southampton', 'London Gateway', 'Liverpool', 'Teesport', 'Grangemouth', 'Belfast', 'South Shields'],
    transitTime: '28-35 days',
    popularGoods: ['Textiles', 'Electronics', 'Furniture', 'Consumer Goods', 'Machinery'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to the UK: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to the UK: compare sea, air and express freight costs, transit times, ports and UK customs and VAT rules. Free live quote from upfreights.',
      answerCapsule:
        'Shipping from China to the UK moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at UK gateways such as Felixstowe, Southampton, and London Gateway. Sea freight takes about 25 to 35 days and air freight 5 to 8 days. UK import VAT of 20 percent and any duty apply on arrival, and most commercial importers need an EORI number.',
      intro:
        'If you import from China, the UK is one of the busiest lanes you will run, and getting the cost, timing, and customs right makes a real difference to your margin. This guide covers what shipping from China to the UK actually costs, how long each option takes, which ports your cargo moves through, and the UK customs and VAT rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 25 to 35 days port to port. Air freight costs more but lands in about 5 to 8 days. The right choice comes down to how fast you need the goods and how much they weigh and measure. One thing every UK importer should know up front: there is no VAT-free allowance for commercial goods, so plan for 20 percent import VAT plus any duty, and apply for an EORI number before you ship. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and move week to week, especially in 2026 when Red Sea diversions around the Cape of Good Hope have lengthened ocean routes and pushed rates up. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Season: rates climb before Chinese New Year (January to February) and again in the autumn pre-holiday peak.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to ocean shipments.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$1,800 - $3,100' },
          { label: '40ft container (FCL)', range: '$2,800 - $4,600' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$45 - $70' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$7.00 - $12.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $9.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.00 - $6.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$6.00 - $12.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include UK import VAT, duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to UK shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 13 to 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. A full 20ft container holds around 28 to 33 CBM of usable space. Transit is typically 25 to 35 days port to port from the main China ports to Felixstowe, Southampton, or London Gateway, with LCL adding about 7 to 10 days for consolidation and unpacking. In 2026, ocean services routing around the Cape of Good Hope instead of the Suez Canal have added roughly 10 to 14 days to some sailings, so build in extra lead time. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen to UK gateways such as Heathrow, Manchester, and East Midlands, usually arriving in about 5 to 8 days door to door. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric (dimensional) weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier, so larger air shipments earn a better rate per kilo. For most importers, air makes sense when arriving a few weeks sooner is worth the premium, and when it is not, sea freight moves the same goods for a fraction of the cost. We can quote both side by side so the trade-off is clear.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 7 days, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to the UK. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '25 - 35 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 8 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 7 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of UK-bound containers. For air freight, the main gateways are Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen. On the UK side, Felixstowe is the largest container port and the default China gateway, usually the fastest to clear, followed by Southampton and London Gateway for cargo heading to London and the South. For northern England, a northern port or an onward rail leg can cut inland haulage. The main air gateway is London Heathrow, with Manchester and East Midlands also handling significant freight. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'UK customs is straightforward once you know the rules, but there is no VAT-free allowance for commercial goods, so every shipment is planned around import VAT and duty. Here is what applies when you import from China. Rates depend on your exact product, so confirm the duty rate for your goods’ commodity code before you ship.',
        points: [
          'Import VAT is charged at the standard 20 percent on the customs value (the goods plus freight, insurance, and any duty). VAT-registered businesses can reclaim it, and most use Postponed VAT Accounting (PVA) to account for it on their VAT return instead of paying cash at the border.',
          'Import duty is set by your goods’ commodity code (the UK Trade Tariff classification) and charged on the CIF value (goods plus insurance and freight to the UK border). Rates for finished goods commonly run from 0 to about 12 percent.',
          'You need a GB EORI number to import commercial goods. It is free to apply for at gov.uk and usually issued within a few working days.',
          'There is no VAT-free threshold. For consignments of £135 or less the overseas seller charges UK VAT at the point of sale; above £135, import VAT and duty are collected at the border.',
          'Some China-origin products carry anti-dumping duty on top of normal duty (for example certain ceramic tiles and tyres). Check the gov.uk trade remedies notices for your specific product.',
          'In practice the freight forwarder files the customs declaration, pays duty and import VAT to release the goods, and invoices you afterwards plus a clearance fee. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard or border officials can reject the packaging. As of June 2026 the government plans to remove the low-value (£135 and under) customs duty relief by 2029, so keep an eye on that change.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, UK customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB or DAP, leaves some of the clearance, duty, or delivery for you to arrange. For most UK SME importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to handle import VAT themselves through Postponed VAT Accounting to reclaim it cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your UK delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have a GB EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from the origin port, for example Shanghai, Ningbo, or Shenzhen, to a UK gateway such as Felixstowe, Southampton, or Heathrow.',
        'We file the UK customs declaration, pay duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does shipping from China to the UK cost?',
          answer:
            'It depends on the method and size of your shipment. As an indicative guide, sea freight runs roughly $1,800 to $3,100 for a 20ft container, LCL is about $45 to $70 per cubic meter, and air freight is around $4 to $12 per kg depending on weight. UK import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'Why is shipping from China to the UK so expensive?',
          answer:
            'Ocean rates have been elevated in 2026 because many services divert around the Cape of Good Hope instead of using the Suez Canal, which adds time and cost. Prices also rise in peak season and before Chinese New Year. Choosing sea over air, consolidating shipments, and booking ahead of peak all help bring the cost down.',
        },
        {
          question: 'Do I have to pay import duty and VAT from China to the UK?',
          answer:
            'Yes. Import VAT of 20 percent applies on the customs value, and duty applies at the rate set by your goods’ commodity code, often 0 to 12 percent for finished goods. VAT-registered businesses can reclaim the import VAT, usually through Postponed VAT Accounting.',
        },
        {
          question: 'Are there anti-dumping tariffs on goods from China?',
          answer:
            'Some specific China-origin products carry anti-dumping duty on top of normal duty, for example certain ceramic tiles and tyres. It depends entirely on the product and its commodity code, so check the gov.uk trade remedies notices, or ask us, before you commit to an order.',
        },
        {
          question: 'How long does it take to ship from China to the UK?',
          answer:
            'Sea freight takes about 25 to 35 days port to port, plus a few days for UK customs and delivery. Air freight is about 5 to 8 days door to door and express courier is 3 to 7 days. In 2026, Red Sea diversions have added time to some ocean sailings.',
        },
        {
          question: 'How long does a cargo ship take from China to the UK?',
          answer:
            'A full container by sea typically takes 25 to 35 days from the main China ports to Felixstowe, Southampton, or London Gateway. Shared-container (LCL) cargo takes about 7 to 10 days longer for consolidation and unpacking. Add a few days for customs clearance and final delivery.',
        },
        {
          question: 'What is the cheapest way to ship from China to the UK?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper per unit once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'How do I import goods from China to the UK?',
          answer:
            'Get a GB EORI number, agree the price and Incoterms with your supplier, and book a forwarder to move the goods and clear UK customs. The forwarder files the declaration, pays duty and import VAT, and arranges delivery. With door-to-door (DDP), we handle the whole process for you.',
        },
        {
          question: 'How much is shipping from China to the UK per kg?',
          answer:
            'For air freight, expect roughly $4 to $12 per kg depending on the weight, with the rate per kilo falling as the shipment gets heavier. Sea freight is not priced per kg; it is priced per container or per cubic meter, which works out far cheaper for heavy cargo.',
        },
        {
          question: 'How long does a parcel take from China to the UK?',
          answer:
            'A small parcel by express courier (DHL, FedEx, or UPS) usually takes 3 to 7 days door to door. Standard air freight takes about 5 to 8 days. For anything larger than a parcel, sea freight is far cheaper but takes several weeks.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-united-states',
    name: 'United States',
    code: 'US',
    description: 'Sea and air freight from China to the USA. 12-32 day transit to Los Angeles, Long Beach, New York, Seattle, and Savannah. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Los Angeles', 'Long Beach', 'New York', 'Seattle', 'Savannah'],
    transitTime: '12-32 days',
    popularGoods: ['Electronics', 'Furniture', 'Textiles', 'Machinery', 'Auto Parts'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to the USA: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to the USA: compare sea, air, and express freight costs, transit times, ports, and 2026 customs rules. Get a free live quote from upfreights.',
      answerCapsule:
        'Shipping from China to the USA moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Shenzhen, and Ningbo and arrive at US gateways such as Los Angeles, Long Beach, and New York. Sea freight takes about 15 to 40 days and air freight 3 to 7 days. Since 2025 every shipment is dutiable, so importers pay customs duty plus US fees on arrival.',
      intro:
        'If you are importing from China, the route to the United States is the one you will use most, and it is also the one with the most moving parts. This guide covers what shipping from China to the USA actually costs, how long each option takes, which ports your cargo moves through, and what the 2025 to 2026 customs changes mean for your bill. As a freight forwarder, we move cargo on this lane every week, so the numbers and steps below reflect how shipments really run, not a generic checklist. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 15 to 40 days depending on the coast. Air freight costs more but lands in 3 to 7 days. The right choice comes down to how fast you need the goods and how much they weigh and measure. One thing has changed for everyone importing from China: as of 2025, the old duty-free allowance for low-value parcels is gone, so every shipment now clears customs and pays duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Shenzhen (Yantian)', 'Ningbo', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the destination coast, and the season. The ranges below are indicative and move with the market, especially during peak season from August to October when ocean rates can run 50 to 100 percent above the quiet months. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Season: peak season from August to October, and the rush before Chinese New Year, push ocean rates up.',
          'Coast: East Coast and inland US delivery cost more than the West Coast.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles customs and delivery for one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL), US West Coast', range: '$1,600 - $3,500' },
          { label: '40ft container (FCL), US West Coast', range: '$2,200 - $4,800' },
          { label: '40ft container (FCL), US East Coast', range: '$3,500 - $7,000' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$40 - $150' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $12.00' },
          { label: 'Air freight, per kg (100 to 300 kg)', range: '$5.00 - $9.00' },
          { label: 'Air freight, per kg (300 kg and up)', range: '$4.00 - $7.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$7.00 - $15.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, which is the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include US customs duty, the Merchandise Processing Fee, or the Harbor Maintenance Fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to USA shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more to ship. Shared container space (LCL) means your goods travel in a container with other importers’ cargo, and you pay only for the space you use, which is the better deal for smaller loads. Transit time depends on the coast. To the US West Coast (Los Angeles, Long Beach, Seattle), a full container typically sails 15 to 25 days port to port. To the East Coast (New York, Savannah), expect 30 to 40 days, since the ship either transits the Panama Canal or routes the long way around. LCL adds about 7 to 10 days for the cargo to be consolidated before departure and unpacked after arrival. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins. Between 15 and 20 CBM it is worth pricing both, because LCL handling fees at the destination can eat the saving. We quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to US gateways such as Los Angeles, Chicago, and New York, usually arriving in 3 to 7 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, which is the greater of the actual weight and the volumetric (dimensional) weight. That means bulky-but-light cargo is charged on its size, not its scale weight, so foam, packaging, and oversized items cost more than you might expect. Per-kg rates fall as the shipment gets heavier, so larger air shipments earn a better rate per kilo. For most importers, air makes sense when the value of arriving a few weeks sooner is worth the premium. When it is not, sea freight moves the same goods for a fraction of the cost, and we can quote both side by side so the trade-off is clear.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 2 to 5 days, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest and most reliable way to move goods from China to the USA. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL (West Coast)', time: '15 - 25 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, FCL (East Coast)', time: '30 - 40 days', indicativeCost: 'Low', bestFor: 'East Coast or inland delivery' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '3 - 7 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '2 - 5 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Shenzhen (including the Yantian terminal), Ningbo, Qingdao, and Guangzhou handle the bulk of US-bound containers. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the US side, where your cargo lands depends on the coast that suits your delivery. West Coast ports (Los Angeles, Long Beach, Seattle and Tacoma) are closest to China and fastest by sea, and they handle the largest share of transpacific traffic. East Coast ports (New York and New Jersey, Savannah, Charleston) suit deliveries to the eastern half of the country, even though the sea leg is longer. Houston serves the Gulf and the south-central states. The busiest single lanes we run include Shanghai to Los Angeles, Shenzhen to Long Beach, and Ningbo to New York. You can browse the specific city-to-city routes we operate below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Customs is where China to USA shipping has changed the most. The headline: the duty-free allowance for low-value parcels (the old $800 de minimis) ended for China-origin goods in 2025, so in 2026 essentially every shipment pays duty and clears a formal customs entry. Rates and rules are changing fast, so confirm the current duty on your products with a licensed customs broker before you ship.',
        points: [
          'Import duty is charged on the customs value of your goods, based on their HTS code (the product classification number). Many China-origin goods also carry Section 301 trade-war tariffs on top, commonly 7.5 percent or 25 percent depending on the product.',
          'The de minimis exemption that let parcels under $800 enter duty-free is gone for China-origin goods as of 2025. Plan for duty on every shipment, whatever its value.',
          'Two US government fees apply: the Merchandise Processing Fee (a small percentage of cargo value, with a set minimum and maximum) and, on ocean shipments only, the Harbor Maintenance Fee. Air freight does not pay the Harbor Maintenance Fee.',
          'For ocean cargo you must file an Importer Security Filing (ISF, also called 10+2) at least 24 hours before the goods are loaded in China. Missing or late filings can mean fines and holds.',
          'Commercial shipments need a customs bond, either a single-entry bond for a one-off shipment or a continuous bond if you import regularly.',
          'Core documents are the commercial invoice, packing list, and the bill of lading (ocean) or air waybill (air). Wood pallets and crates must meet the ISPM-15 heat-treatment standard or the shipment can be refused.',
          'Goods regulated by agencies like the FDA (food, cosmetics, supplements) need that agency’s clearance too, which can add time. As of June 2026 the exact tariff stack is in flux, so verify current rates with a broker before you commit.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, US customs and duty, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs broker or US logistics setup. The alternative, DDU or DAP, stops short of duty and final delivery, leaving those for you to arrange. For most small and mid-size importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your US delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from the origin port, for example Shanghai, Shenzhen, or Ningbo, to a US gateway such as Los Angeles, Long Beach, or New York.',
        'We file customs (including the ISF for ocean cargo), pay duty and fees, and clear your shipment with CBP.',
        'We deliver to your door. With DDP, duty and delivery are already handled, so there is nothing left to arrange.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to the USA?',
          answer:
            'It depends on the method and the size of your shipment. As an indicative guide, sea freight runs roughly $1,600 to $3,500 for a 20ft container to the West Coast, LCL is about $40 to $150 per cubic meter, and air freight is around $4 to $12 per kg depending on weight. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to the USA take?',
          answer:
            'Sea freight takes about 15 to 25 days to the West Coast and 30 to 40 days to the East Coast, port to port. Air freight is 3 to 7 days and express courier is 2 to 5 days. Add a few days for US customs clearance and final delivery.',
        },
        {
          question: 'What is the cheapest way to ship from China to the USA?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper per unit once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'What is the fastest way to ship from China to the USA?',
          answer:
            'Express courier is fastest at 2 to 5 days door-to-door for small parcels, followed by air freight at 3 to 7 days. Sea freight is much slower but far cheaper for larger shipments.',
        },
        {
          question: 'Is sea freight cheaper than air freight?',
          answer:
            'Yes, sea freight is almost always cheaper than air for anything large or heavy, often by a wide margin. Air freight only wins when the goods are urgent, light, or high-value enough that speed matters more than cost.',
        },
        {
          question: 'How much does a 20ft or 40ft container cost from China to the USA?',
          answer:
            'Indicatively, a 20ft container to the US West Coast runs about $1,600 to $3,500 and a 40ft container about $2,200 to $4,800, port to port. East Coast and inland delivery cost more, and peak season from August to October pushes rates higher. Get a live quote for current pricing.',
        },
        {
          question: 'Do I have to pay import duty on goods from China, and how is it calculated?',
          answer:
            'Yes. Duty is charged on the customs value of your goods based on their HTS classification code, and many China-origin products also carry Section 301 tariffs of 7.5 or 25 percent. You also pay a Merchandise Processing Fee and, on ocean shipments, a Harbor Maintenance Fee. A customs broker can confirm your exact rate.',
        },
        {
          question: 'What changed with the de minimis (Section 321) rule in 2025?',
          answer:
            'The $800 duty-free allowance that let low-value parcels enter the USA without duty ended for China-origin goods in 2025. In 2026, essentially every shipment from China pays duty and clears a formal customs entry, regardless of its value. Budget for duty on every order.',
        },
        {
          question: 'What is DDP (door-to-door) shipping and is it worth it?',
          answer:
            'DDP (Delivered Duty Paid) means we handle everything from your supplier’s door to yours, including export clearance, freight, US customs, duty, and final delivery, for one price. For importers without their own customs broker or US logistics, it removes most of the work and risk, which usually makes it worth the cost.',
        },
        {
          question: 'Which US ports and routes are used, and what documents do I need?',
          answer:
            'Cargo from China usually arrives at West Coast ports like Los Angeles, Long Beach, and Seattle, or East Coast ports like New York and Savannah, from origin ports such as Shanghai, Shenzhen, and Ningbo. You need a commercial invoice, packing list, and a bill of lading or air waybill, plus an ISF filing and a customs bond for ocean shipments.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-algeria',
    name: 'Algeria',
    code: 'DZ',
    description: 'Sea and air freight from China to Algeria. 30-45 day sea transit to Algiers, Oran, Béjaïa, and Djen Djen. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Algiers', 'Oran', 'Béjaïa', 'Skikda', 'Djen Djen'],
    transitTime: '30-45 days',
    popularGoods: ['Machinery', 'Electronics', 'Construction Materials', 'Auto Parts', 'Consumer Goods'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Algeria: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Algeria: sea, air and express freight costs, transit times, ports, customs, TVA and bank domiciliation rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Algeria moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Algerian ports such as Algiers, Oran, and Béjaïa. Sea freight takes about 30 to 45 days and air freight 7 to 11 days. Algerian import VAT of 19 percent plus customs duty apply on arrival, and every import must be registered with an Algerian bank (domiciliation) before the goods ship.',
      intro:
        'If you import from China into Algeria, the freight is only half the job: the customs and banking rules are strict and catch out first-time importers. This guide covers what shipping from China to Algeria actually costs, how long each option takes, which ports your cargo moves through, and the Algerian customs, VAT, and bank rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 30 to 45 days. Air freight costs more but arrives in about 7 to 11 days door to door. The single most important thing for Algeria: every import must be registered (domiciled) with an Algerian bank, and since 2026 that must be done before the goods are shipped, or the bank cannot release payment. Get this right first, then request a live quote and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and move week to week, and in 2026 Red Sea disruption has pushed some sailings around the Cape of Good Hope, adding time and cost. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Duty and surcharges: Algerian customs duty runs from 0 to 30 percent by product, and some protected goods carry a large additional safeguard surcharge (DAPS), so check your product before ordering.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to some sailings.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$1,500 - $3,200' },
          { label: '40ft container (FCL)', range: '$2,700 - $5,600' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$180 - $280' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$7.00 - $12.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.50 - $9.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.50 - $7.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$8.00 - $14.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Algerian customs duty, the DAPS safeguard surcharge where it applies, 19 percent import VAT, or the forwarder’s clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Algeria shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Transit is typically 30 to 45 days port to port to Algiers, Oran, or Béjaïa, with LCL adding about 7 to 10 days for consolidation and unpacking. Algiers is the largest port and closest to the capital but can be congested, so Oran, Béjaïa, and the deepwater terminal at Djen Djen are useful alternatives for the west and to avoid backups. In 2026, some services route around the Cape of Good Hope rather than through Suez, which adds time. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong toward Algiers, usually arriving in about 7 to 11 days door to door. There are few direct freighters into Algeria, so most air cargo transfers through a hub such as Dubai, Istanbul, Doha, or Paris, which adds a little time. Air costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for a fraction of the cost, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 5 to 9 days into Algeria, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Algeria. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '30 - 45 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '7 - 11 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '5 - 9 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Algeria-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Algerian side, the Port of Algiers is the largest and serves the capital, while Oran covers the northwest, and Béjaïa, Skikda, and the deepwater container port at Djen Djen (Jijel) handle additional volume and help spread load away from a congested Algiers. The main air gateway is Algiers Houari Boumediene. Choosing the right discharge port for your final destination can save days of inland trucking. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Algerian customs is document-heavy and tied closely to the banking system, so the paperwork matters as much as the freight. Here is what applies when you import from China. Duty rates and any safeguard surcharge depend on your exact product, so check the rate before you order, and sort out your bank domiciliation before the goods ship.',
        points: [
          'Every commercial import must be registered (domiciled) with an Algerian bank. Since May 2026 the domiciliation must be completed before the goods are shipped: if the bill of lading or air waybill is dated before the domiciliation, the bank cannot release payment. Do not let cargo load until domiciliation is confirmed.',
          'Import VAT (TVA) is 19 percent, charged on the customs value plus duty (a reduced 9 percent rate applies to a few goods). VAT-registered businesses can recover it through their tax return.',
          'Customs duty is charged on the CIF value (goods plus insurance and freight), in bands of roughly 0, 5, 15, and 30 percent, with most finished consumer goods in the 15 to 30 percent range. There is no China-Algeria free trade agreement, so full duty applies.',
          'Some protected goods carry an additional safeguard surcharge (DAPS) of 30 to 200 percent on top of normal duty. The protected list changes, so confirm whether your product is affected before ordering.',
          'Payment must route through the domiciled bank under strict foreign-exchange controls, so plan your payment terms with your supplier and bank in advance.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, certificate of origin, and the domiciliation record. The Ministry of Commerce applies a fraud-inspection visa to the shipping documents before customs release.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or the cargo can be rejected or fumigated at the port at your cost.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Algerian customs, duty and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. Many Algerian importers prefer DDP because it removes the customs and clearance burden, but the consignee still needs valid import standing and a completed bank domiciliation, since payment and import rights sit with the registered importer. The alternative, FOB or CIF, leaves the Algerian clearance, duty, and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Algerian delivery address.',
        'Complete your bank domiciliation in Algeria before the goods ship; we coordinate timing so the bill of lading is not dated before it.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from China to an Algerian gateway such as Algiers, Oran, or Béjaïa.',
        'We clear Algerian customs, handle duty and VAT, and deliver to your door. With DDP, duty, taxes, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Algeria?',
          answer:
            'As an indicative guide, sea freight runs roughly $1,500 to $3,200 for a 20ft container, LCL is about $180 to $280 per cubic meter, and air freight is around $4.50 to $12 per kg depending on weight. Algerian duty and 19 percent VAT are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Algeria take?',
          answer:
            'Sea freight takes about 30 to 45 days port to port, plus clearance. Air freight is about 7 to 11 days door to door and express courier is 5 to 9 days. Algerian customs can add several days, and longer if the paperwork or bank domiciliation is incomplete.',
        },
        {
          question: 'What is bank domiciliation and why does it matter?',
          answer:
            'Domiciliation is registering your import with an Algerian bank, which then handles the payment to your supplier. Since 2026 it must be done before the goods are shipped: if the bill of lading is dated earlier than the domiciliation, the bank cannot pay. It is the single biggest blocker on this lane, so arrange it first.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Algeria?',
          answer:
            'Customs duty is charged on the CIF value in bands of about 0, 5, 15, and 30 percent, with most consumer goods at 15 to 30 percent. On top of that, 19 percent import VAT applies, and some protected goods carry a large safeguard surcharge (DAPS). Check your product’s classification before ordering.',
        },
        {
          question: 'What is the cheapest way to ship from China to Algeria?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Which Algerian port should I ship into?',
          answer:
            'Algiers is largest and closest to the capital but is often congested. Oran serves the northwest, and Béjaïa, Skikda, and the deepwater port at Djen Djen are good alternatives that can avoid backups. The best choice depends on where your goods are going, since inland trucking is part of the total cost.',
        },
        {
          question: 'Do you offer door-to-door (DDP) shipping to Algeria?',
          answer:
            'Yes. With DDP we handle pickup in China, the freight, Algerian customs, duty, and VAT, and delivery to your address for one price. The consignee still needs valid import standing and a completed bank domiciliation, since import rights and payment sit with the registered importer.',
        },
        {
          question: 'What documents do I need to import from China to Algeria?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, certificate of origin, and the bank domiciliation record. The Ministry of Commerce applies a fraud-inspection visa to the documents before customs releases the cargo. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-albania',
    name: 'Albania',
    code: 'AL',
    description: 'Sea and air freight from China to Albania. 25-35 day sea transit to Durrës via Mediterranean transshipment. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Durrës', 'Vlorë'],
    transitTime: '25-35 days',
    popularGoods: ['Textiles', 'Consumer Goods', 'Machinery', 'Electronics', 'Construction Materials'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Albania: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Albania: compare sea, air and express freight costs, transit times, Durrës port, customs, VAT and duty. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Albania moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Durrës, Albania’s main port, usually transshipped via a larger Mediterranean hub. Sea freight takes about 25 to 35 days and air freight 5 to 10 days. Albanian import VAT of 20 percent plus customs duty apply on arrival, and importers clear through a registered local agent.',
      intro:
        'If you import from China into Albania, the route almost always runs through a larger Mediterranean port before feedering into Durrës, so transit and routing matter as much as the freight rate. This guide covers what shipping from China to Albania actually costs, how long each option takes, which ports your cargo moves through, and the Albanian customs and VAT rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 25 to 35 days. Air freight costs more but arrives in about 5 to 10 days. Albania is not in the EU, so it uses its own customs system: you clear through a locally registered importer and a customs broker, and pay 20 percent VAT plus duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and move week to week, and have been elevated in 2026 because of Red Sea diversions and the feeder leg into Durrës. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Routing: nearly all China to Albania cargo transships through a larger Mediterranean port (such as Piraeus or Gioia Tauro), so feeder schedules affect transit and cost.',
          'Season: rates climb before Chinese New Year (January to February) and again in the autumn pre-holiday peak.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$3,300 - $5,000' },
          { label: '40ft container (FCL)', range: '$5,300 - $7,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$45 - $70' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$7.00 - $12.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.50 - $9.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$5.00 - $7.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$12.00 - $18.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Albanian customs duty, 20 percent import VAT, or the broker and clearance fees, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Albania shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Because there are very few direct China to Durrës services, almost everything transships through a larger Mediterranean or Adriatic hub such as Piraeus in Greece or Gioia Tauro in Italy, then feeders into Durrës. That is why transit, about 25 to 35 days port to port, can run a little longer than to Italy or Greece, with LCL adding roughly 7 to 10 days. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, and Shenzhen toward Tirana, usually arriving in about 5 to 10 days, often routed through a European hub such as Frankfurt, Vienna, or Istanbul because there are no direct freighters. Air costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 5 to 8 days into Albania, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Albania. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '25 - 35 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 10 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '5 - 8 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Albania-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, and Shenzhen. On the Albanian side, Durrës is the main and largest port and handles the great majority of imports, with Vlorë a smaller and growing alternative to the south. Because direct sailings are rare, cargo is usually transshipped through a bigger Mediterranean port and feedered into Durrës. The main air gateway is Tirana International Airport. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Albania is an EU candidate but not yet a member, so it uses its own customs system rather than the EU one. Clearance goes through a locally registered importer and a customs broker. Here is what applies when you import from China. Duty depends on your exact product, so confirm the rate before you order.',
        points: [
          'Import VAT is 20 percent, charged on the customs value plus duty. VAT-registered businesses can recover it through their tax return.',
          'Customs duty is charged on the CIF value (goods plus insurance and freight), in bands of roughly 0 to 15 percent: about 0 percent on raw materials and equipment, 5 percent on intermediate goods, 10 percent on finished consumer goods, and up to 15 percent on luxury items. There is no China-Albania free trade agreement, so full duty applies.',
          'Albania does not use the EU EORI number. The importer registers with the National Business Centre to get a tax identification number (NIPT), which is used on the customs declaration, usually filed by a licensed broker.',
          'A small per-declaration scanning fee applies (roughly EUR 5 under EUR 1,000 of value, EUR 22 above it).',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, and certificate of origin, plus any product-specific certificates (conformity, phytosanitary, or health certificates for food).',
          'Wood pallets and crates must be ISPM-15 heat-treated and stamped, or the packaging can be rejected or treated at your cost.',
          'Because Albania has its own customs and a NIPT-registered broker, many smaller importers choose door-to-door (DDP) so the forwarder handles the duty, VAT, and local clearance.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg through the transshipment hub into Durrës, Albanian customs, duty, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs and broker setup in Albania. The alternative, FOB or CIF, leaves the Albanian clearance, duty, and delivery for you to arrange through a local broker. For most Albanian importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Albanian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure the importer is registered with a NIPT tax number; we can work with your customs broker, or handle clearance for you under DDP.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails through a Mediterranean hub and feeders into Durrës, or flies into Tirana.',
        'We clear Albanian customs, handle duty and VAT, and deliver to your door. With DDP, duty, taxes, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Albania?',
          answer:
            'As an indicative guide, sea freight runs roughly $3,300 to $5,000 for a 20ft container, LCL is about $45 to $70 per cubic meter, and air freight is around $5 to $12 per kg depending on weight. Albanian duty and 20 percent VAT are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Albania take?',
          answer:
            'Sea freight takes about 25 to 35 days port to port, since cargo transships through a larger Mediterranean port before reaching Durrës. Air freight is about 5 to 10 days and express courier is 5 to 8 days. Albanian customs typically adds a few working days.',
        },
        {
          question: 'Why does shipping to Albania go through another port first?',
          answer:
            'There are very few direct China to Durrës services, so almost all cargo is transshipped through a bigger Mediterranean or Adriatic hub such as Piraeus or Gioia Tauro, then feedered into Durrës. That extra leg is why transit can run a little longer than to Italy or Greece.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Albania?',
          answer:
            'Customs duty is charged on the CIF value in bands of roughly 0 to 15 percent, depending on the product, with finished consumer goods around 10 percent. On top of that, 20 percent import VAT applies. VAT-registered businesses can recover the VAT through their tax return.',
        },
        {
          question: 'What is the cheapest way to ship from China to Albania?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need a customs broker to import from China to Albania?',
          answer:
            'In practice yes. Albania uses its own customs system, and the importer needs a NIPT tax number while a licensed broker files the declaration. Many importers avoid the hassle by choosing door-to-door (DDP), where we handle the broker, duty, and VAT for you.',
        },
        {
          question: 'Which Albanian port do shipments arrive at?',
          answer:
            'Durrës is the main port and handles the great majority of Albanian imports, with Vlorë a smaller alternative to the south. The main air gateway is Tirana International Airport. Sea cargo is usually feedered into Durrës from a larger Mediterranean hub.',
        },
        {
          question: 'What documents do I need to import from China to Albania?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin, plus any product-specific certificates for regulated goods. The importer needs a NIPT tax number, and wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-bulgaria',
    name: 'Bulgaria',
    code: 'BG',
    description: 'Sea and air freight from China to Bulgaria. 35-45 day transit to Varna and Burgas, or via Constanta and Piraeus. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Varna', 'Burgas'],
    transitTime: '35-45 days',
    popularGoods: ['Machinery', 'Electronics', 'Textiles', 'Consumer Goods', 'Auto Parts'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Bulgaria: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Bulgaria: compare sea, air and express freight costs, transit times, Black Sea ports and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Bulgaria moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at the Black Sea ports of Varna and Burgas, or via Constanta and Piraeus by road. Sea freight takes about 35 to 45 days and air freight 5 to 10 days. Bulgarian import VAT of 20 percent and any EU duty apply on arrival, and importers need an EORI number.',
      intro:
        'If you import from China into Bulgaria, routing is the thing to get right, because most cargo does not sail straight into the Black Sea. This guide covers what shipping from China to Bulgaria actually costs, how long each option takes, which ports your cargo moves through, and the Bulgarian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 35 to 45 days. Air freight costs more but arrives in about 5 to 10 days. Two things to know up front: Bulgaria adopted the euro on 1 January 2026, so duty and VAT are now stated in euros, and you need an EORI number to clear EU customs and plan for 20 percent import VAT plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Xiamen'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the routing, and the season. The ranges below are indicative and move week to week, especially with 2026 Red Sea diversions affecting Mediterranean and Black Sea services. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Routing: most China to Bulgaria cargo transships through a larger hub (Piraeus, Constanta, or Istanbul) and reaches Bulgaria by feeder, road, or rail, so the path affects transit and cost.',
          'Season: rates climb before Chinese New Year (January to February) and again in the autumn pre-holiday peak.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$1,400 - $2,200' },
          { label: '40ft container (FCL)', range: '$1,900 - $3,200' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$40 - $90' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.50 - $11.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $8.50' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.50 - $6.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$6.00 - $12.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Bulgarian import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Bulgaria shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. The routing matters in Bulgaria. Few mainline services sail straight into the Black Sea, so cargo often runs to a larger hub such as Piraeus in Greece or Constanta in Romania, then reaches Varna or Burgas by feeder, road, or rail. Constanta plus a short overland leg is one of the most common ways goods actually reach Bulgaria. Transit is typically 35 to 45 days, with LCL adding about 7 to 10 days. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Sofia, usually arriving in about 5 to 10 days, sometimes via a European hub. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 4 to 8 days into Bulgaria, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Bulgaria. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '35 - 45 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 10 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '4 - 8 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Xiamen handle the bulk of Bulgaria-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Bulgarian side, Varna and Burgas are the two Black Sea container ports. Because direct mainline calls are limited, a lot of cargo is transshipped through Piraeus in Greece or Constanta in Romania and then brought in by feeder, road, or rail, and you can sometimes clear customs at the hub or in Bulgaria depending on the routing. Sofia handles most air cargo. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Bulgaria sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs they move freely across the EU. Bulgaria also adopted the euro on 1 January 2026, so customs values, duty, and VAT are now in euros. There is no VAT-free allowance for commercial imports, so plan around 20 percent import VAT and any duty, and confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Bulgarian import VAT is 20 percent, charged on the customs value plus duty plus transport to the EU border. VAT-registered businesses recover it as input tax.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. It is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'Since 1 January 2026 Bulgaria uses the euro (fixed at 1.95583 lev), so duty and import VAT are stated in euros. This affects invoicing and landed-cost calculations, not the duty or VAT rates.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg and any feeder or overland leg into Bulgaria, EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange. For most Bulgarian importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record to recover the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Bulgarian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) and the best routing (direct Black Sea, or via Constanta or Piraeus), and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Varna or Burgas, or transships through a hub and comes in by feeder, road, or rail.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Bulgaria?',
          answer:
            'As an indicative guide, sea freight runs roughly $1,400 to $2,200 for a 20ft container, LCL is about $40 to $90 per cubic meter, and air freight is around $4.50 to $11 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Bulgaria take?',
          answer:
            'Sea freight takes about 35 to 45 days, since cargo often transships through Piraeus or Constanta before reaching Varna or Burgas. Air freight is about 5 to 10 days and express courier is 4 to 8 days. Add a few days for customs clearance.',
        },
        {
          question: 'Should I ship to Varna and Burgas directly or via Constanta?',
          answer:
            'It depends on routing. Direct Black Sea calls to Varna and Burgas are limited, so a lot of cargo is transshipped through Constanta in Romania or Piraeus in Greece and brought in by feeder, road, or rail. Constanta plus a short overland leg is one of the most common and reliable paths.',
        },
        {
          question: 'Now that Bulgaria uses the euro, how does that affect imports?',
          answer:
            'Bulgaria adopted the euro on 1 January 2026 at a fixed rate. Customs values, duty, and import VAT are now stated in euros rather than lev. The duty and VAT rates themselves did not change; it mainly affects your invoicing and landed-cost calculations.',
        },
        {
          question: 'What is the cheapest way to ship from China to Bulgaria?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Bulgaria?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, which is a one-time, free registration valid across all 27 EU countries. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Bulgaria?',
          answer:
            'Duty is set by your product’s commodity code in the EU TARIC tariff and charged on the CIF value, with many goods at low single-digit rates and some higher. On top of that, 20 percent Bulgarian import VAT applies, which VAT-registered businesses can recover.',
        },
        {
          question: 'What documents do I need to import from China to Bulgaria?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-croatia',
    name: 'Croatia',
    code: 'HR',
    description: 'Sea and air freight from China to Croatia. 35-50 day transit to Rijeka, the gateway for central Europe. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Rijeka', 'Ploče'],
    transitTime: '35-50 days',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Textiles', 'Auto Parts'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Croatia: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Croatia: compare sea, air and express freight costs, transit times, the Port of Rijeka and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Croatia moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Rijeka, Croatia’s main container port and a gateway for central Europe. Sea freight takes about 35 to 50 days and air freight 5 to 10 days. Croatian import VAT of 25 percent and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Croatia, or into central Europe through Croatia, the Port of Rijeka is the route to know. This guide covers what shipping from China to Croatia actually costs, how long each option takes, which ports your cargo moves through, and the Croatian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 35 to 50 days. Air freight costs more but arrives in about 5 to 10 days. Croatia is in the EU, so you need an EORI number to clear customs and should plan for 25 percent import VAT plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been especially volatile in 2026, with Red Sea diversions around the Cape of Good Hope lengthening Adriatic sailings and pushing rates up. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to Mediterranean and Adriatic services.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Inland leg: Rijeka serves central Europe, but the Rijeka to Zagreb rail line is still being upgraded, so inland rail capacity can affect onward delivery.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,500 - $5,500' },
          { label: '40ft container (FCL)', range: '$3,500 - $7,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$60 - $130' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.50 - $11.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $9.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.50 - $7.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$8.00 - $18.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Croatian import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Croatia shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Transit is typically 35 to 50 days port to port to Rijeka, with LCL adding about 7 to 10 days for consolidation and unpacking. Rijeka is Croatia’s main container port and, with the new Rijeka Gateway terminal, an increasingly important entry point for central Europe, including Hungary, Austria, Slovakia, and Serbia. The catch is the inland rail line to Zagreb, which is still being upgraded, so a lot of inland cargo still moves by truck. In 2026, Cape of Good Hope routing has added time to some sailings. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Zagreb, usually arriving in about 5 to 10 days, sometimes via a European hub. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 7 days into Croatia, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Croatia. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '35 - 50 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 10 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 7 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Croatia-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Croatian side, Rijeka is the main container port and, with the new Rijeka Gateway terminal, a growing entry point for central Europe via road and rail. Ploče in the south is a secondary port. Rijeka is geographically the shortest Adriatic entry for much of central Europe, though the single-track Rijeka to Zagreb rail line is a known bottleneck until its planned upgrade. Zagreb handles most air cargo. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Croatia sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs in Rijeka they move freely across the EU. There is no VAT-free allowance for commercial imports, so plan around 25 percent import VAT and any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Croatian import VAT is 25 percent, charged on the customs value plus duty plus transport to the EU border. VAT-registered businesses recover it as input tax, and deferment is available for registered importers.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. It is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Because Rijeka is a gateway for the region, importers often clear in Croatia and move goods onward across the EU, or in transit to non-EU neighbours like Bosnia and Serbia. We can set up the right clearance for your destination.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Croatian and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Croatian importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record to recover the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your delivery address in Croatia or central Europe.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Rijeka, then moves inland by truck or rail to your destination.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Croatia?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,500 to $5,500 for a 20ft container, LCL is about $60 to $130 per cubic meter, and air freight is around $4.50 to $11 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Croatia take?',
          answer:
            'Sea freight takes about 35 to 50 days port to port to Rijeka, plus a few days for customs and inland delivery. Air freight is about 5 to 10 days and express courier is 3 to 7 days. In 2026, Red Sea diversions have added time to some sailings.',
        },
        {
          question: 'Should I route central European cargo through Rijeka?',
          answer:
            'Rijeka is geographically the shortest Adriatic entry for much of central Europe, and the new Rijeka Gateway terminal added capacity. The catch is the single-track Rijeka to Zagreb rail line, a known bottleneck until its planned upgrade, so a lot of inland cargo still moves by truck. For many shipments it is faster than routing via North Sea ports.',
        },
        {
          question: 'What is the cheapest way to ship from China to Croatia?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Croatia?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, a one-time and free registration valid across all 27 EU countries. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Croatia?',
          answer:
            'Duty is set by your product’s commodity code in the EU TARIC tariff and charged on the CIF value, with many goods at low single-digit rates and some higher. On top of that, 25 percent Croatian import VAT applies, which VAT-registered businesses can recover.',
        },
        {
          question: 'Can I ship onward to Bosnia or Serbia through Croatia?',
          answer:
            'Yes. Rijeka is commonly used as a gateway for the wider region, and goods can move in customs transit to non-EU neighbours such as Bosnia and Serbia. We can set up the right clearance or transit procedure for your final destination.',
        },
        {
          question: 'What documents do I need to import from China to Croatia?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-cyprus',
    name: 'Cyprus',
    code: 'CY',
    description: 'Sea and air freight from China to Cyprus. 25-32 day transit to Limassol. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Limassol', 'Larnaca'],
    transitTime: '25-32 days',
    popularGoods: ['Consumer Goods', 'Machinery', 'Electronics', 'Building Materials', 'Furniture'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Cyprus: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Cyprus: compare sea, air and express freight costs, transit times, Limassol port and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Cyprus moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Limassol, the main port of Cyprus, often via a Mediterranean transshipment hub. Sea freight takes about 25 to 32 days and air freight 5 to 9 days. Cypriot import VAT of 19 percent and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Cyprus, you are shipping to a small island with one dominant port, so routing and sailing frequency shape your timeline. This guide covers what shipping from China to Cyprus actually costs, how long each option takes, which ports your cargo moves through, and the Cypriot and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 25 to 32 days. Air freight costs more but arrives in about 5 to 9 days. Cyprus is in the EU, so you need an EORI number to clear customs and should plan for 19 percent import VAT plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have moved sharply in 2026, with Red Sea diversions around the Cape of Good Hope affecting Eastern Mediterranean services. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Island logistics: Cyprus has one dominant container port and fewer direct sailings, so transshipment and schedule frequency affect transit.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to some Eastern Mediterranean services.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$1,500 - $4,200' },
          { label: '40ft container (FCL)', range: '$2,500 - $6,800' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$80 - $150' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$7.00 - $12.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.50 - $10.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$5.00 - $7.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$8.00 - $12.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Cypriot import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Cyprus shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Transit is typically 25 to 32 days port to port to Limassol, with LCL adding about 7 to 10 days. Cyprus sits in the Eastern Mediterranean near the Suez exit, so it would normally be one of the first EU stops after the canal, but in 2026 many carriers still divert around the Cape of Good Hope, which adds time. As a small island with one dominant container port, Cyprus has fewer direct services, so a lot of cargo transships through a larger hub such as Piraeus or Port Said before feedering into Limassol. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Larnaca, usually arriving in about 5 to 9 days, sometimes via a Gulf or European hub. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 6 days into Cyprus, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Cyprus. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '25 - 32 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 9 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao handle the bulk of Cyprus-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Cypriot side, Limassol is the main commercial port and handles the great majority of container traffic, with Larnaca a secondary option, and imports clear through the government-controlled ports in the south. Because it is a small island, Cyprus has fewer direct China services, so cargo is commonly transshipped through Piraeus or Port Said and feedered into Limassol. Larnaca International is the main air gateway. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Cyprus sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs in Limassol they move freely across the EU. There is no VAT-free allowance for commercial imports, so plan around 19 percent import VAT and any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Cypriot import VAT is 19 percent, charged on the customs value plus duty plus transport to the EU border (reduced rates of 9, 5, and 3 percent apply to specific goods). VAT-registered businesses recover it as input tax.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. It is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Imports must clear through the government-controlled ports of the Republic of Cyprus in the south, which are inside normal EU customs control.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg through the transshipment hub into Limassol, Cypriot and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup, which suits an island market with fewer direct services. The alternative, FOB or CIF, leaves the clearance, duty, and delivery for you to arrange. For most Cypriot importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Cyprus delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails through a Mediterranean hub and feeders into Limassol, or flies into Larnaca.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Cyprus?',
          answer:
            'As an indicative guide, sea freight runs roughly $1,500 to $4,200 for a 20ft container, LCL is about $80 to $150 per cubic meter, and air freight is around $5 to $12 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Cyprus take?',
          answer:
            'Sea freight takes about 25 to 32 days port to port to Limassol, plus a few days for customs and delivery. Air freight is about 5 to 9 days and express courier is 3 to 6 days. In 2026, Red Sea diversions have added time to some sailings.',
        },
        {
          question: 'Why does shipping to Cyprus often go through another port?',
          answer:
            'Cyprus is a small island with one dominant container port and fewer direct China services, so cargo is commonly transshipped through a larger hub such as Piraeus or Port Said and feedered into Limassol. This affects sailing frequency and transit reliability.',
        },
        {
          question: 'What is the cheapest way to ship from China to Cyprus?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Cyprus?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, a one-time and free registration valid across all 27 EU countries. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Cyprus?',
          answer:
            'Duty is set by your product’s commodity code in the EU TARIC tariff and charged on the CIF value, with many goods at low single-digit rates and some higher. On top of that, 19 percent Cypriot import VAT applies, which VAT-registered businesses can recover.',
        },
        {
          question: 'Which Cyprus port do shipments arrive at?',
          answer:
            'Limassol is the main commercial port and handles the great majority of container traffic, with Larnaca a secondary option. Larnaca International is the main air gateway. Imports clear through the government-controlled ports of the Republic of Cyprus in the south.',
        },
        {
          question: 'What documents do I need to import from China to Cyprus?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-denmark',
    name: 'Denmark',
    code: 'DK',
    description: 'Sea and air freight from China to Denmark. 40-50 day transit to Aarhus and Copenhagen, usually via Rotterdam or Hamburg. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Aarhus', 'Copenhagen', 'Fredericia'],
    transitTime: '40-50 days',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Furniture', 'Textiles'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Denmark: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Denmark: compare sea, air and express freight costs, transit times, Aarhus port and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Denmark moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Aarhus, Denmark’s main container port, usually feedered via Rotterdam or Hamburg. Sea freight takes about 40 to 50 days and air freight 6 to 10 days. Danish import VAT of 25 percent and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Denmark, the route almost always runs through a big North European hub before feedering up to Aarhus or Copenhagen, so transit and routing matter as much as the rate. This guide covers what shipping from China to Denmark actually costs, how long each option takes, which ports your cargo moves through, and the Danish and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 40 to 50 days. Air freight costs more but arrives in about 6 to 10 days. Denmark is in the EU, so you need an EORI number to clear customs and should plan for 25 percent import VAT plus any duty, with no reduced rate to soften it. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been elevated in 2026 because Red Sea diversions around the Cape of Good Hope have lengthened Asia to North Europe sailings and pushed rates up. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Routing: most China to Denmark cargo transships at Rotterdam or Hamburg and feeders to Aarhus or Copenhagen, so the hub leg affects transit and cost.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to ocean shipments.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,400 - $4,200' },
          { label: '40ft container (FCL)', range: '$4,000 - $6,200' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$45 - $90' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.50 - $11.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.50 - $9.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.50 - $7.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$8.00 - $13.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Danish import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Denmark shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Few mainline services call Denmark directly from Asia, so most cargo transships at a big North European hub such as Rotterdam or Hamburg and then feeders to Aarhus, Denmark’s largest container port and best nationwide distribution gateway, or to Copenhagen. Transit is typically 40 to 50 days port to port, with LCL adding about 7 to 10 days. In 2026, Cape of Good Hope routing has added time to some sailings. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Copenhagen, usually arriving in about 6 to 10 days door to door. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 6 days into Denmark, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Denmark. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '40 - 50 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '6 - 10 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Denmark-bound containers. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the Danish side, Aarhus is the largest container port and the best hub for nationwide distribution, with Copenhagen and Fredericia also handling cargo. Because direct sailings are limited, cargo is usually transshipped at Rotterdam or Hamburg and feedered into Denmark, so build a few extra days into the timeline. Copenhagen Kastrup is the main air gateway. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Denmark sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs they move freely across the EU. There is no VAT-free allowance for commercial imports, and Denmark has no reduced VAT band, so plan around the full 25 percent import VAT plus any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Danish import VAT is 25 percent with no reduced rate, charged on the customs value plus duty plus transport to the EU border. VAT-registered businesses recover it as input tax.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. A Danish EORI is your company CVR number with a DK prefix. It is free and usually issued within a few working days.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg and the feeder into Denmark, EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Danish importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record to recover the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Danish delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have a Danish EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to a North European hub and feeders to Aarhus or Copenhagen, or flies into Copenhagen.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Denmark?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,400 to $4,200 for a 20ft container, LCL is about $45 to $90 per cubic meter, and air freight is around $4.50 to $11 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Denmark take?',
          answer:
            'Sea freight takes about 40 to 50 days, since cargo usually transships at Rotterdam or Hamburg before feedering to Aarhus or Copenhagen. Air freight is about 6 to 10 days and express courier is 3 to 6 days. In 2026, Red Sea diversions have added time to some sailings.',
        },
        {
          question: 'Why does shipping to Denmark go through Rotterdam or Hamburg?',
          answer:
            'Few mainline China services call Denmark directly, so containers are usually transshipped at a big North European hub such as Rotterdam or Hamburg, then carried to Aarhus or Copenhagen on a feeder vessel. That extra leg adds a few days versus the main hub arrival.',
        },
        {
          question: 'What is the cheapest way to ship from China to Denmark?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Denmark?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number. A Danish EORI is your CVR company number with a DK prefix, and your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Denmark?',
          answer:
            'Duty is set by your product’s commodity code in the EU TARIC tariff and charged on the CIF value, with many goods at low single-digit rates and some higher. On top of that, Denmark charges 25 percent import VAT with no reduced band, which VAT-registered businesses can recover.',
        },
        {
          question: 'Which Danish port do shipments arrive at?',
          answer:
            'Aarhus is the largest container port and the best gateway for nationwide distribution, with Copenhagen and Fredericia also handling cargo. Copenhagen Kastrup is the main air gateway. Most sea cargo is feedered in from Rotterdam or Hamburg.',
        },
        {
          question: 'What documents do I need to import from China to Denmark?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-egypt',
    name: 'Egypt',
    code: 'EG',
    description: 'Sea and air freight from China to Egypt. 22-32 day transit to Alexandria, Port Said, and Sokhna. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Alexandria', 'Port Said', 'Damietta', 'Sokhna'],
    transitTime: '22-32 days',
    popularGoods: ['Machinery', 'Electronics', 'Auto Parts', 'Textiles', 'Building Materials'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Egypt: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Egypt: sea, air and express freight costs, transit times, ports, customs, VAT and the ACI Nafeza ACID rule. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Egypt moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Egyptian ports such as Alexandria, Port Said, and Sokhna. Sea freight takes about 22 to 32 days and air freight 3 to 6 days. Egyptian VAT of 14 percent plus customs duty apply on arrival, and every shipment needs an ACID number registered on the Nafeza system before it ships.',
      intro:
        'If you import from China into Egypt, the single most important thing is the paperwork: Egypt requires an advance cargo registration (the ACID number) before your goods leave China, and getting it wrong stops the shipment cold. This guide covers what shipping from China to Egypt actually costs, how long each option takes, which ports your cargo moves through, and the Egyptian customs and VAT rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 22 to 32 days. Air freight costs more but arrives in about 3 to 6 days. Before anything ships, the Egyptian importer must register the shipment on the Nafeza portal and get an ACID number, and the importer needs a valid GOEIC importer card. Sort that out first, then request a live quote and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been volatile in 2026 because of Red Sea disruption around the Suez Canal, which directly affects Egyptian ports. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing: Egypt sits on the Suez Canal, but in 2026 Red Sea security issues have pushed many carriers around the Cape of Good Hope, adding time and cost even for Egyptian ports.',
          'Duty: Egyptian customs duty runs roughly 0 to 40 percent by product (higher for luxury goods and cars), so check your product before ordering.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$3,000 - $3,700' },
          { label: '40ft container (FCL)', range: '$3,900 - $4,900' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$90 - $130' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$7.00 - $11.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.50 - $8.50' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$5.00 - $7.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$12.00 - $17.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Egyptian customs duty, 14 percent VAT, or the forwarder’s clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Egypt shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Transit is typically 22 to 32 days port to port to Alexandria, Port Said, or Sokhna, with LCL adding about 7 to 10 days. Egypt sits on the Suez Canal, normally the shortest sea route from Asia to the Mediterranean, but in 2026 the Red Sea situation has pushed many carriers around the Cape of Good Hope, which adds time and makes schedules less predictable. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Guangzhou, Shenzhen, Shanghai, and Hong Kong to Cairo, usually arriving in about 3 to 6 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 6 to 12 days into Egypt, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Egypt. Note that even express parcels still need the ACID registration. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '22 - 32 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '3 - 6 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '6 - 12 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Egypt-bound containers. For air freight, the main gateways are Guangzhou, Shenzhen, Shanghai, and Hong Kong. On the Egyptian side, Alexandria and the neighbouring El Dekheila are the main general-cargo gateways near Cairo and the Delta, Port Said sits at the northern mouth of the Suez Canal, Damietta handles additional volume, and Sokhna on the Red Sea serves Cairo and Upper Egypt. The main air gateway is Cairo International Airport. Matching the discharge port to where your goods are going can save days of inland trucking. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Egyptian customs is tied to an advance electronic registration system, so the paperwork has to be set up before the goods ship, not after they arrive. Here is what applies when you import from China. Duty depends on your exact product, so check the rate first, and make sure the ACID number and importer card are in place before loading.',
        points: [
          'Every shipment needs an ACID number. The Egyptian importer registers the shipment on the Nafeza portal to get a 19-digit ACID number before the goods ship, the Chinese supplier is verified on the CargoX platform and uploads the documents, and the ACID number must appear on the bill of lading or air waybill. No valid ACID means the cargo is refused or stuck at the port. Since January 2026 this also applies to air freight.',
          'Import VAT is 14 percent (a reduced 5 percent applies to certain production machinery), charged on the customs value plus duty.',
          'Customs duty is charged on the CIF value (goods plus insurance and freight), running roughly 0 to 40 percent for most goods and higher for luxury items and vehicles. There is no general China-Egypt free trade agreement, so full duty applies.',
          'The importer must hold a valid GOEIC importer-register card, renewed yearly, and the activity on their commercial register must match the goods.',
          'Egypt has had periods of US-dollar shortage and foreign-exchange controls, and banks often require a letter of credit rather than a simple transfer, which can affect payment and customs release. Confirm payment terms before ordering.',
          'Core documents are the commercial invoice on the Nafeza template, packing list, bill of lading or air waybill bearing the ACID number, and certificate of origin, plus any product-specific certificates.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or the cargo can be rejected or treated at your cost.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Egyptian customs, duty, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup, but the Egyptian importer still needs a valid GOEIC card and must generate the ACID number, since those sit with the registered importer. The alternative, FOB or CIF, leaves the Egyptian clearance, duty, and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Egyptian delivery address.',
        'Register the shipment on Nafeza to get the ACID number before the goods ship, and make sure your GOEIC importer card is valid; we coordinate the documents with your supplier on CargoX.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China, with the ACID number on the bill of lading.',
        'Your cargo sails or flies from China to an Egyptian gateway such as Alexandria, Port Said, or Sokhna.',
        'We clear Egyptian customs, handle duty and VAT, and deliver to your door. With DDP, duty, taxes, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Egypt?',
          answer:
            'As an indicative guide, sea freight runs roughly $3,000 to $3,700 for a 20ft container, LCL is about $90 to $130 per cubic meter, and air freight is around $5 to $11 per kg depending on weight. Egyptian duty and 14 percent VAT are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'What is the ACID number and Nafeza system?',
          answer:
            'ACID is a 19-digit advance cargo identifier that the Egyptian importer generates on the Nafeza portal before the goods ship. The supplier is verified on CargoX and uploads the documents, and the ACID number must appear on the bill of lading or air waybill. Without it, the cargo is refused. Since 2026 it applies to air freight as well as sea.',
        },
        {
          question: 'How long does shipping from China to Egypt take?',
          answer:
            'Sea freight takes about 22 to 32 days port to port, plus clearance. Air freight is about 3 to 6 days and express courier is 6 to 12 days. The 2026 Red Sea situation makes ocean schedules less predictable, even though Egypt sits on the Suez Canal.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Egypt?',
          answer:
            'Customs duty is charged on the CIF value, roughly 0 to 40 percent depending on the product and higher for luxury goods and vehicles. On top of that, 14 percent VAT applies (5 percent on certain production machinery). There is no general China-Egypt free trade agreement, so full duty applies.',
        },
        {
          question: 'What is the cheapest way to ship from China to Egypt?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Which Egyptian port should I ship into?',
          answer:
            'Alexandria and El Dekheila serve Cairo and the Delta and handle most general cargo. Port Said sits at the north mouth of the Suez Canal, and Sokhna on the Red Sea suits Cairo and Upper Egypt. Match the port to where your goods are going and to current routing, since inland trucking is part of the total cost.',
        },
        {
          question: 'Do I need to register as an importer in Egypt?',
          answer:
            'Yes. The Egyptian importer needs a valid GOEIC importer-register card, renewed yearly, and the activity on their commercial register must match the goods. Some product categories also require the foreign factory or brand to be pre-registered with GOEIC before import.',
        },
        {
          question: 'What documents do I need to import from China to Egypt?',
          answer:
            'You need the commercial invoice on the Nafeza template, a packing list, a bill of lading or air waybill showing the ACID number, and a certificate of origin, plus any product-specific certificates. The importer needs a GOEIC card, and wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-estonia',
    name: 'Estonia',
    code: 'EE',
    description: 'Sea and air freight from China to Estonia. 40-55 day transit to Tallinn (Muuga) via North European feeder. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Tallinn', 'Muuga'],
    transitTime: '40-55 days',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Textiles', 'Furniture'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Estonia: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Estonia: compare sea, air and express freight costs, transit times, Tallinn port and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Estonia moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Muuga, the main harbour of the Port of Tallinn, usually feedered via a larger North European port. Sea freight takes about 40 to 55 days and air freight 5 to 9 days. Estonian import VAT of 24 percent and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Estonia, your cargo almost always travels via a bigger North European port before reaching Tallinn, so routing and feeder schedules shape the timeline. This guide covers what shipping from China to Estonia actually costs, how long each option takes, which ports your cargo moves through, and the Estonian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 40 to 55 days. Air freight costs more but arrives in about 5 to 9 days. Estonia is in the EU and runs one of the most digital customs systems in Europe, so clearance is usually quick once your EORI number and paperwork are in order. Plan for 24 percent import VAT plus any duty, and request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been elevated in 2026 because Red Sea diversions around the Cape of Good Hope have lengthened Asia to North Europe sailings. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Routing: most China to Estonia cargo transships at a large North European port (Rotterdam, Hamburg, or Gdansk) and feeders or trucks to Tallinn, so the hub leg affects transit and cost.',
          'Season: rates climb before Chinese New Year (January to February) and again in the autumn pre-holiday peak; Baltic winter weather can also add delay.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$1,800 - $4,500' },
          { label: '40ft container (FCL)', range: '$2,800 - $6,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$45 - $110' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $11.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $9.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.00 - $6.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$6.00 - $14.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Estonian import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Estonia shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Few mainline services reach Estonia directly, so most cargo transships at a large North European hub such as Rotterdam, Hamburg, or Gdansk, then moves to Muuga, the main harbour of the Port of Tallinn, by Baltic feeder or by road. Transit is typically 40 to 55 days, with LCL adding about 7 to 10 days. In 2026, Cape of Good Hope routing has added time to some sailings. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Tallinn, usually arriving in about 5 to 9 days, often connecting through a European hub. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 6 days into Estonia, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Estonia. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '40 - 55 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 9 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Estonia-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Estonian side, Muuga harbour, part of the Port of Tallinn just east of the capital, is the country’s largest cargo port and the main container gateway. Because direct China calls are rare, cargo is usually transshipped at Rotterdam, Hamburg, or Gdansk and brought in by feeder or road, and Estonia is also used as a clearance point for onward distribution into the Baltics and beyond. Tallinn Airport handles air cargo. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Estonia sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs they move freely across the EU. Estonia also runs one of the most digital customs systems in the EU, so clearance is usually fast when your paperwork is clean. There is no VAT-free allowance for commercial imports, so plan around 24 percent import VAT and any duty, and confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Estonian import VAT is 24 percent (raised from 22 percent in mid-2025), charged on the customs value plus duty plus transport to the EU border. VAT-registered businesses recover it as input tax.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. It is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill, filed electronically.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg and the feeder into Estonia, EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Estonian importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record to recover the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Estonian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to a North European hub and feeders or trucks to Muuga, or flies into Tallinn.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Estonia?',
          answer:
            'As an indicative guide, sea freight runs roughly $1,800 to $4,500 for a 20ft container, LCL is about $45 to $110 per cubic meter, and air freight is around $4 to $11 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Estonia take?',
          answer:
            'Sea freight takes about 40 to 55 days, since cargo transships at a North European hub before reaching Tallinn by feeder or road. Air freight is about 5 to 9 days and express courier is 3 to 6 days. In 2026, Red Sea diversions have added time to some sailings.',
        },
        {
          question: 'Why does shipping to Estonia take longer than to Western Europe?',
          answer:
            'Estonia is at the eastern end of the Baltic and has few direct China services, so cargo is usually transshipped at Rotterdam, Hamburg, or Gdansk, then carried up by feeder or road. That extra leg, plus the longer sea distance, adds time versus the main Western European ports.',
        },
        {
          question: 'What is the cheapest way to ship from China to Estonia?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Estonia?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, a one-time and free registration valid across all 27 EU countries. Estonia’s customs is highly digital, so clearance is usually quick once the EORI and paperwork are in order.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Estonia?',
          answer:
            'Duty is set by your product’s commodity code in the EU TARIC tariff and charged on the CIF value, with many goods at low single-digit rates and some higher. On top of that, 24 percent Estonian import VAT applies, which VAT-registered businesses can recover.',
        },
        {
          question: 'Can I use Estonia as a gateway for the Baltics?',
          answer:
            'Yes. Because much Estonia-bound cargo already moves through larger EU ports, importers can clear customs in Estonia and distribute onward into the Baltic region. We can set up the right clearance for your destination.',
        },
        {
          question: 'What documents do I need to import from China to Estonia?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-finland',
    name: 'Finland',
    code: 'FI',
    description: 'Sea and air freight from China to Finland. 32-46 day transit to HaminaKotka and Helsinki via North European feeder. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['HaminaKotka', 'Helsinki', 'Rauma'],
    transitTime: '32-46 days',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Auto Parts', 'Textiles'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Finland: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Finland: compare sea, air and express freight costs, transit times, HaminaKotka and Helsinki ports and EU customs. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Finland moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at HaminaKotka or Helsinki, usually feedered via a larger North European port. Sea freight takes about 32 to 46 days and air freight 5 to 9 days. Finnish import VAT of 25.5 percent and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Finland, your cargo usually crosses the Baltic on a feeder from a bigger North European port, so routing and the high Finnish VAT both shape your landed cost. This guide covers what shipping from China to Finland actually costs, how long each option takes, which ports your cargo moves through, and the Finnish and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 32 to 46 days. Air freight costs more but arrives in about 5 to 9 days. Finland is in the EU, so you need an EORI number to clear customs, and you should plan for 25.5 percent import VAT, one of the highest standard rates in the EU, plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been elevated in 2026 because Red Sea diversions around the Cape of Good Hope have lengthened Asia to North Europe sailings. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Routing: most China to Finland cargo transships at a large North European hub and crosses the Baltic on a feeder, so the hub leg affects transit and cost.',
          'Season: rates climb before Chinese New Year (January to February) and again in the autumn pre-holiday peak; Baltic winter ice can add delay.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,200 - $4,500' },
          { label: '40ft container (FCL)', range: '$3,500 - $7,000' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$45 - $95' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.50 - $11.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $9.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.50 - $7.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$7.00 - $14.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Finnish import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Finland shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Direct China to Finland sailings are limited, so most cargo transships at a large North European hub such as Rotterdam, Hamburg, or Bremerhaven and crosses the Baltic to HaminaKotka, Finland’s largest container port, or to Helsinki. Transit is typically 32 to 46 days, with LCL adding about 7 to 10 days. In 2026, Cape of Good Hope routing has added time to some sailings, and Baltic winter weather can add a little more. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Helsinki-Vantaa, usually arriving in about 5 to 9 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 7 days into Finland, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Finland. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '32 - 46 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 9 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 7 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Finland-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Finnish side, HaminaKotka is the largest container port and handles roughly half the country’s container traffic, with Helsinki and its Vuosaari terminal serving the capital region and Rauma on the west coast. Because direct China calls are rare, cargo is usually transshipped at a North European hub and crosses the Baltic on a feeder. Helsinki-Vantaa is the main air gateway. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Finland sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs they move freely across the EU. There is no VAT-free allowance for commercial imports, and Finland has one of the highest standard VAT rates in the EU, so plan around 25.5 percent import VAT plus any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Finnish import VAT is 25.5 percent (raised from 24 percent in late 2024), charged on the customs value plus duty plus transport to the EU border. VAT-registered businesses recover it as input tax.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. It is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg and the Baltic feeder into Finland, EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Finnish importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record to recover the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Finnish delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to a North European hub and crosses the Baltic to HaminaKotka or Helsinki, or flies into Helsinki-Vantaa.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Finland?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,200 to $4,500 for a 20ft container, LCL is about $45 to $95 per cubic meter, and air freight is around $4.50 to $11 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Finland take?',
          answer:
            'Sea freight takes about 32 to 46 days, since cargo transships at a North European hub and crosses the Baltic to HaminaKotka or Helsinki. Air freight is about 5 to 9 days and express courier is 3 to 7 days. In 2026, Red Sea diversions have added time to some sailings.',
        },
        {
          question: 'Why is import VAT so high in Finland?',
          answer:
            'Finland raised its standard VAT to 25.5 percent in late 2024, one of the highest rates in the EU. It applies to most imports on the customs value plus duty and freight. VAT-registered Finnish businesses can normally recover it, but it is still a real cash-flow item.',
        },
        {
          question: 'What is the cheapest way to ship from China to Finland?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Finland?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, a one-time and free registration valid across all 27 EU countries. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How much duty will I pay importing from China to Finland?',
          answer:
            'Duty is set by your product’s commodity code in the EU TARIC tariff and charged on the CIF value, with many goods at low single-digit rates and some higher. On top of that, 25.5 percent Finnish import VAT applies, which VAT-registered businesses can recover.',
        },
        {
          question: 'Which Finnish port do shipments arrive at?',
          answer:
            'HaminaKotka is the largest container port and handles around half the country’s container traffic, with Helsinki and Vuosaari serving the capital region and Rauma on the west coast. Helsinki-Vantaa is the main air gateway. Most sea cargo crosses the Baltic on a feeder from a North European hub.',
        },
        {
          question: 'What documents do I need to import from China to Finland?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-georgia',
    name: 'Georgia',
    code: 'GE',
    description: 'Sea, rail, and air freight from China to Georgia. 30-45 day sea transit to Poti and Batumi, or 18-25 days by rail. Most goods duty-free under the China-Georgia FTA.',
    majorPorts: ['Poti', 'Batumi'],
    transitTime: '30-45 days',
    popularGoods: ['Consumer Goods', 'Machinery', 'Electronics', 'Building Materials', 'Auto Parts'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Georgia: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Georgia: compare sea, rail, air and express freight costs, transit times, Poti and Batumi ports and the China-Georgia FTA. Free quote.',
      answerCapsule:
        'Shipping from China to Georgia moves cargo by sea freight, air freight, rail freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave China and arrive at the Black Sea ports of Poti and Batumi, or overland by rail. Sea freight takes about 30 to 45 days, rail 18 to 25, and air 5 to 8. Georgian import VAT is 18 percent, but most Chinese goods enter duty-free under the China-Georgia free trade agreement with a valid certificate of origin.',
      intro:
        'If you import from China into Georgia, there is good news on cost: the China-Georgia free trade agreement means most Chinese goods come in duty-free, so you often pay only the 18 percent VAT. This guide covers what shipping from China to Georgia actually costs, how long each option takes, which ports and routes your cargo moves through, and the Georgian customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have several ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), rail freight, air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 30 to 45 days. Rail sits in the middle at about 18 to 25 days, and air freight lands in 5 to 8 days. Georgia is also a transit corridor, so cargo often moves onward to Armenia, Azerbaijan, Turkey, and Central Asia. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and move week to week, and in 2026 Red Sea diversions around the Cape of Good Hope have lengthened the ocean route into the Black Sea. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Duty: most Chinese goods enter Georgia duty-free under the China-Georgia FTA with a certificate of origin, so your main landed cost is often just the 18 percent VAT.',
          'Mode: sea is cheapest, rail sits in the middle, air is faster and dearer, express is fastest and dearest.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to ocean shipments into the Black Sea.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles VAT and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$1,800 - $3,500' },
          { label: '40ft container (FCL)', range: '$2,800 - $5,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$40 - $90' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $9.50' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$4.50 - $7.50' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$3.80 - $6.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$6.00 - $12.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Rail freight via the Middle Corridor is usually priced between sea and air. Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include 18 percent Georgian VAT or the forwarder’s clearance fee, though duty is often zero under the FTA, as covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Georgia shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo sails from China through the Suez Canal and the Mediterranean into the Black Sea, arriving at Poti, Georgia’s main container port, or Batumi. Transit is typically 30 to 45 days port to port, with LCL adding about 7 to 10 days. In 2026, many services route around the Cape of Good Hope rather than through Suez, which adds time. The deep-sea port at Anaklia is still under development and not yet a routine option. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters, and rail is a strong middle ground for Georgia. Air cargo flies from hubs like Guangzhou, Shenzhen, Shanghai, and Zhengzhou to Tbilisi, including a direct Urumqi to Tbilisi cargo service, usually arriving in about 5 to 8 days. Rail freight on the Middle Corridor runs from inland Chinese hubs such as Xi’an, Chengdu, and Chongqing across Kazakhstan and the Caspian into Georgia in about 18 to 25 days, roughly half the time of sea at a price between sea and air. Air is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size, and per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote sea, rail, and air side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 4 to 8 days into Georgia, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Georgia. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '30 - 45 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Rail freight (Middle Corridor)', time: '18 - 25 days', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive heavy cargo' },
        { mode: 'Air freight', time: '5 - 8 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '4 - 8 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle Georgia-bound containers, which sail through Suez into the Black Sea. For air freight, the main gateways are Guangzhou, Shenzhen, Shanghai, and Zhengzhou, and rail services start from inland hubs such as Xi’an, Chengdu, and Chongqing. On the Georgian side, Poti is the largest port and handles the bulk of container traffic, with Batumi as a secondary option, and the deep-sea Anaklia port is the future capacity story but not yet operational. Tbilisi is the main air gateway. Georgia is a land bridge on the Middle Corridor, so cargo often moves onward to Armenia, Azerbaijan, Turkey, and Central Asia. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Georgia is one of the easiest and cheapest destinations on this list, thanks to a free trade agreement with China and a simple, low tariff system. Here is what applies when you import from China. Most goods pay no duty at all, so your main cost is the 18 percent VAT, but you need the right certificate of origin to claim the zero rate.',
        points: [
          'Under the China-Georgia free trade agreement, in force since 2018, the large majority of Chinese-origin goods enter Georgia duty-free with a valid certificate of origin. This is the main reason landed cost into Georgia is low.',
          'Even without the FTA, Georgia’s tariff is simple, with only three bands of 0, 5, and 12 percent, and roughly 90 percent of goods already at 0 percent. The 5 and 12 percent bands mostly cover items Georgia produces itself, such as some agricultural and construction goods.',
          'Import VAT is 18 percent, charged on the customs value plus any duty. For most China-origin goods that means VAT on the goods value, with little or no duty.',
          'The importer registers with the Revenue Service of Georgia, and a customs broker normally files the declaration. Small declaration fees apply.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, and the China-Georgia FTA certificate of origin to claim zero duty, plus any product-specific permits.',
          'Georgia is a transit corridor, so if your goods are heading onward to Armenia, Azerbaijan, Turkey, or Central Asia, we can set up the right transit procedure rather than a full import.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg, Georgian customs and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. Because most goods are duty-free under the FTA, the main charge to handle is the 18 percent VAT, and we make sure the certificate of origin is in place so you do not pay duty you do not owe. The alternative, FOB or CIF, leaves the Georgian clearance and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes, and we can also arrange onward transit if your goods continue beyond Georgia.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your delivery address in Georgia or onward.',
        'We quote your options (sea FCL, sea LCL, rail, air, or express) with indicative costs and transit times, and you pick one.',
        'We help you get the China-Georgia FTA certificate of origin so your goods qualify for zero duty.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Poti or Batumi, takes the train via the Middle Corridor, or flies into Tbilisi.',
        'We clear Georgian customs, handle VAT and any duty, and deliver to your door, or set up onward transit if your goods continue beyond Georgia.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Georgia?',
          answer:
            'As an indicative guide, sea freight runs roughly $1,800 to $3,500 for a 20ft container, LCL is about $40 to $90 per cubic meter, and air freight is around $3.80 to $9.50 per kg depending on weight. Most goods are duty-free under the FTA, so 18 percent VAT is usually the main charge. Request a live quote for your exact cargo.',
        },
        {
          question: 'Do I pay import duty shipping from China to Georgia?',
          answer:
            'Usually not. Under the China-Georgia free trade agreement, the large majority of Chinese-origin goods enter duty-free with a valid certificate of origin. Even without it, Georgia’s tariff is just 0, 5, or 12 percent, with about 90 percent of goods at 0 percent. You still pay 18 percent import VAT.',
        },
        {
          question: 'How long does shipping from China to Georgia take?',
          answer:
            'Sea freight takes about 30 to 45 days into Poti or Batumi, rail via the Middle Corridor about 18 to 25 days, air freight about 5 to 8 days, and express courier 4 to 8 days. In 2026, Red Sea diversions have added time to ocean sailings.',
        },
        {
          question: 'How does rail freight from China to Georgia compare to sea?',
          answer:
            'Rail on the Middle Corridor takes about 18 to 25 days, roughly half the time of sea, at a price between sea and air. It runs from inland Chinese hubs across Kazakhstan and the Caspian into Georgia, and it is a good fit for time-sensitive cargo that is too heavy or bulky for air.',
        },
        {
          question: 'What is the cheapest way to ship from China to Georgia?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. With most goods duty-free under the FTA, Georgia is one of the lower landed-cost destinations.',
        },
        {
          question: 'Which Georgian port do shipments arrive at?',
          answer:
            'Poti is the largest port and handles the bulk of container traffic, with Batumi as a secondary option. The deep-sea Anaklia port is under development but not yet operational. Tbilisi is the main air gateway.',
        },
        {
          question: 'Can I ship onward from Georgia to Armenia or Central Asia?',
          answer:
            'Yes. Georgia is a land bridge on the Middle Corridor, and cargo frequently moves onward to Armenia, Azerbaijan, Turkey, and Central Asia. We can set up the right transit procedure so your goods continue beyond Georgia rather than being fully imported.',
        },
        {
          question: 'What documents do I need to import from China to Georgia?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, and the China-Georgia FTA certificate of origin to claim zero duty, plus any product-specific permits. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-greece',
    name: 'Greece',
    code: 'GR',
    description: 'Sea and air freight from China to Greece. 30-40 day transit to Piraeus, a major COSCO-operated Mediterranean gateway. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Piraeus', 'Thessaloniki'],
    transitTime: '30-40 days',
    popularGoods: ['Consumer Goods', 'Machinery', 'Electronics', 'Textiles', 'Building Materials'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Greece: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Greece: compare sea, air and express freight costs, transit times, the Port of Piraeus and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Greece moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Piraeus, one of the largest Mediterranean ports and a major China gateway operated by COSCO. Sea freight takes about 30 to 40 days and air freight 5 to 8 days. Greek import VAT of 24 percent and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Greece, you have one of the best-connected ports in the Mediterranean on your side: Piraeus. This guide covers what shipping from China to Greece actually costs, how long each option takes, which ports your cargo moves through, and the Greek and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 30 to 40 days. Air freight costs more but arrives in about 5 to 8 days. Because Piraeus is operated by COSCO and has direct main-line services from China, Greece often avoids the extra transshipment leg that smaller EU countries rely on. Greece is in the EU, so you need an EORI number to clear customs and should plan for 24 percent import VAT plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have stayed elevated in 2026 because Red Sea diversions around the Cape of Good Hope keep Mediterranean ocean rates high. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to Mediterranean services.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Direct service: Piraeus has direct China calls, which can cut a transshipment leg and save time versus smaller EU ports.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,500 - $5,000' },
          { label: '40ft container (FCL)', range: '$4,000 - $7,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$40 - $70' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $10.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$4.50 - $8.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.00 - $6.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$6.00 - $12.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Greek import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Greece shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Greece has a real advantage here: Piraeus is one of the largest container ports in the Mediterranean and is operated by COSCO, so it has direct main-line services from China rather than relying on a transshipment hub. Transit is typically 30 to 40 days port to port, with LCL adding about 7 to 10 days. In 2026, Cape of Good Hope routing has added time to some sailings. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Athens, usually arriving in about 5 to 8 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 6 days into Greece, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Greece. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '30 - 40 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 8 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Greece-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Greek side, Piraeus near Athens is by far the main port, one of the largest in the Mediterranean and a COSCO-operated hub with direct China services, while Thessaloniki in the north serves the Balkans. Piraeus is also a major transshipment hub for the wider region, so it suits onward delivery into the Balkans, the Adriatic, the Black Sea, and the eastern Mediterranean. Athens International Airport is the main air gateway. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Greece sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs they move freely across the EU. There is no VAT-free allowance for commercial imports, so plan around 24 percent import VAT and any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Greek import VAT is 24 percent, charged on the customs value plus duty plus transport to the EU border (reduced rates of 13 and 6 percent apply to specific goods). VAT-registered businesses recover it as input tax.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. It is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Because Piraeus is a regional hub, importers often clear in Greece and move goods onward across the EU and the Balkans. We can set up the right clearance or transit for your destination.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Greek and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Greek importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record to recover the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Greek delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails on a direct service to Piraeus, or flies into Athens.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Greece?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,500 to $5,000 for a 20ft container, LCL is about $40 to $70 per cubic meter, and air freight is around $4 to $10 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Greece take?',
          answer:
            'Sea freight takes about 30 to 40 days port to port to Piraeus, plus a few days for customs and delivery. Air freight is about 5 to 8 days and express courier is 3 to 6 days. In 2026, Red Sea diversions have added time to some sailings.',
        },
        {
          question: 'Why is Piraeus a good port for China imports?',
          answer:
            'Piraeus is one of the largest container ports in the Mediterranean and is operated by COSCO, so it has direct main-line services from China. That often means fewer transshipment legs and more reliable schedules than shipping into a smaller EU port that depends on feeders.',
        },
        {
          question: 'What is the cheapest way to ship from China to Greece?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Greece?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, a one-time and free registration valid across all 27 EU countries. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Greece?',
          answer:
            'Duty is set by your product’s commodity code in the EU TARIC tariff and charged on the CIF value, with many goods at low single-digit rates and some higher. On top of that, 24 percent Greek import VAT applies, which VAT-registered businesses can recover.',
        },
        {
          question: 'Can I use Piraeus as a gateway for the Balkans or Black Sea?',
          answer:
            'Yes. Piraeus is a major transshipment hub, so it suits onward delivery into the Balkans, the Adriatic, the Black Sea, and the eastern Mediterranean. We can set up the right clearance or transit for your final destination.',
        },
        {
          question: 'What documents do I need to import from China to Greece?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-hungary',
    name: 'Hungary',
    code: 'HU',
    description: 'Sea, rail, and air freight from China to Hungary. Landlocked, so cargo arrives via Koper or Rijeka and moves to Budapest, or by rail in 18-25 days. FCL, LCL, customs, and door-to-door.',
    majorPorts: ['Koper', 'Rijeka', 'Trieste', 'Hamburg'],
    transitTime: '25-35 days',
    popularGoods: ['Machinery', 'Electronics', 'Auto Parts', 'Consumer Goods', 'Textiles'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Hungary: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Hungary: compare sea, rail, air and express freight costs, transit times, gateway ports and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Hungary moves cargo by sea freight, rail freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Hungary is landlocked, so sea cargo arrives at a port like Koper or Rijeka and moves by road or rail to Budapest. Sea takes about 25 to 35 days, rail 18 to 25, and air 5 to 8. Hungarian import VAT is 27 percent, the highest in the EU, plus any duty, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Hungary, two things shape your shipment: Hungary is landlocked, so you pick a gateway seaport in a neighbouring country, and it is a major China-Europe rail terminus, which gives you a genuine middle option. This guide covers what shipping from China to Hungary actually costs, how long each option takes, which ports and routes your cargo moves through, and the Hungarian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have several ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), rail freight, air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 25 to 35 days. Rail to Budapest runs about 18 to 25 days, and air freight lands in 5 to 8 days. Hungary is in the EU, so you need an EORI number to clear customs and should plan for 27 percent import VAT, the highest standard rate in the EU, plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the gateway port or rail route, the size and weight of your cargo, and the season. The ranges below are indicative and move week to week, especially with 2026 Red Sea diversions affecting the ocean leg. Sea rates below are to the gateway port; inland haulage to Budapest is extra. Treat them as a planning guide, then request a live quote.',
        factors: [
          'Gateway port: Koper and Rijeka give the shortest inland leg to Budapest and usually the best total cost; Hamburg offers more sailings but a longer, pricier inland haul.',
          'Mode: sea is cheapest, rail sits in the middle, air is faster and dearer, express is fastest and dearest.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to the ocean leg.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, inland haulage, and delivery into one price, which removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL), to gateway port', range: '$2,450 - $3,000' },
          { label: '40ft container (FCL), to gateway port', range: '$4,500 - $5,450' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$45 - $60' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.50 - $10.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.50 - $8.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.50 - $6.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$9.00 - $13.00' }],
        note:
          'Sea freight is priced per container (FCL) to the gateway port, plus inland haulage to Budapest, or per cubic meter (LCL). Rail freight direct to Budapest runs roughly $4,000 to $5,000 for a 20ft container and $5,900 to $7,200 for a 40ft, between sea and air on cost and speed. Air and express are priced on chargeable weight. None of these ranges include Hungarian import VAT or EU duty, covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Hungary shipping and the cheapest way to move anything large or heavy, but because Hungary is landlocked, the choice of gateway port matters. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, most cost-effective once you have roughly 15 cubic meters (CBM) or more, while shared container space (LCL) means you pay only for the space you use, better for smaller loads. Most Hungary-bound cargo arrives at Koper in Slovenia or Rijeka in Croatia, the closest deep-sea ports to Budapest, and then moves by road or rail. Trieste in Italy, Constanta on the Black Sea, and Hamburg or Bremerhaven in Germany are alternatives, with Hamburg offering more sailings but a longer inland haul. Ocean transit to the gateway port plus the inland leg is typically 25 to 35 days. In 2026, Cape of Good Hope routing has added time to some sailings. Picking the right gateway port is the main way to optimise cost and time for a landlocked destination, and we quote the options so you can compare.',
      airFreightBody:
        'Air freight is the fast option, and rail is a strong middle ground for Hungary. Air cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Budapest, usually arriving in about 5 to 8 days. Rail freight runs from inland Chinese hubs such as Xi’an, Chengdu, and Chongqing to the BILK terminal in Budapest in about 18 to 25 days, roughly half the time of sea at a price between sea and air, and some express trains are faster still. Air is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size, and per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote sea, rail, and air side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 6 days into Hungary, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Hungary. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL (via gateway port)', time: '25 - 35 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 5 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Rail freight (to Budapest BILK)', time: '18 - 25 days', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive heavy cargo' },
        { mode: 'Air freight', time: '5 - 8 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle Hungary-bound containers. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong, and rail services start from inland hubs such as Xi’an, Chengdu, and Chongqing. Because Hungary is landlocked, sea cargo arrives at a gateway port in a neighbouring country: Koper in Slovenia and Rijeka in Croatia are the closest to Budapest, with Trieste, Constanta, and Hamburg as alternatives, then moves inland by road or rail. Budapest is also a major China-Europe rail terminus, with the BILK intermodal terminal as the main rail-to-road hub. Budapest Ferenc Liszt Airport is the air gateway. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Hungary sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs they move freely across the EU. There is no VAT-free allowance for commercial imports, and Hungary has the highest standard VAT in the EU, so plan around 27 percent import VAT plus any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Hungarian import VAT is 27 percent, the highest in the EU, charged on the customs value plus duty plus transport to the EU border. VAT-registered businesses recover it as input tax, but it is a real cash-flow item at clearance.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. A Hungarian EORI starts with HU. It is free and usually issued within a few working days.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'You can clear customs at the gateway port or in Hungary. Clearing in Hungary keeps the goods in EU transit until they reach Budapest; we set up whichever suits your routing.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading, air waybill, or rail consignment note.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg, the inland haulage from the gateway port, Hungarian and EU customs including duty and import VAT, and final delivery to your address in Hungary. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is especially useful for a landlocked destination, where the gateway-port and inland legs add complexity. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Hungarian importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Hungarian delivery address.',
        'We recommend the best route (sea via Koper or Rijeka plus inland, rail to Budapest, or air) and quote your options, and you pick one.',
        'Make sure you have a Hungarian EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to a gateway port and moves to Budapest by road or rail, takes the train direct to the BILK terminal, or flies into Budapest.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Hungary?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,450 to $3,000 for a 20ft container to the gateway port (inland haulage to Budapest extra), LCL is about $45 to $60 per cubic meter, and air freight is around $4.50 to $10 per kg. Rail to Budapest is roughly $4,000 to $5,000 for a 20ft. Import VAT and duty are extra. Request a live quote.',
        },
        {
          question: 'How does cargo reach Hungary if it is landlocked?',
          answer:
            'Sea cargo arrives at a gateway port in a neighbouring country, usually Koper in Slovenia or Rijeka in Croatia, which are closest to Budapest, then moves inland by road or rail. Trieste, Constanta, and Hamburg are alternatives. Rail freight can also run direct from China to the BILK terminal in Budapest.',
        },
        {
          question: 'How long does shipping from China to Hungary take?',
          answer:
            'Sea freight to a gateway port plus the inland leg is about 25 to 35 days. Rail to Budapest is about 18 to 25 days, air freight about 5 to 8 days, and express courier 3 to 6 days. In 2026, Red Sea diversions have added time to the ocean leg.',
        },
        {
          question: 'How does rail freight from China to Hungary compare?',
          answer:
            'Rail runs from inland Chinese hubs to the BILK terminal in Budapest in about 18 to 25 days, roughly half the time of sea at a price between sea and air. Hungary is a major China-Europe rail terminus, so it is a genuine middle option for time-sensitive cargo.',
        },
        {
          question: 'What is the cheapest way to ship from China to Hungary?',
          answer:
            'Sea freight via Koper or Rijeka is usually the cheapest per unit, because those ports give the shortest inland leg to Budapest. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it.',
        },
        {
          question: 'Why is import VAT so high in Hungary?',
          answer:
            'Hungary has the highest standard VAT in the EU at 27 percent, charged on the customs value plus duty and freight. VAT-registered Hungarian businesses can normally recover it, but it is a real cash-flow item to budget for at clearance.',
        },
        {
          question: 'Do I need an EORI number to import from China to Hungary?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, a one-time and free registration valid across all 27 EU countries. A Hungarian EORI starts with HU, and your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'What documents do I need to import from China to Hungary?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading, air waybill, or rail consignment note, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-ireland',
    name: 'Ireland',
    code: 'IE',
    description: 'Sea and air freight from China to Ireland. 30-40 day transit to Dublin Port via North European feeder. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Dublin', 'Cork', 'Rosslare'],
    transitTime: '30-40 days',
    popularGoods: ['Electronics', 'Machinery', 'Consumer Goods', 'Pharmaceuticals', 'Textiles'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Ireland: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Ireland: compare sea, air and express freight costs, transit times, Dublin Port and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Ireland moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Dublin Port, usually feedered via Rotterdam or Hamburg. Sea freight takes about 30 to 40 days and air freight 5 to 10 days. Irish import VAT of 23 percent and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Ireland, you are shipping to an island at the western edge of the EU, so almost all cargo feeders in from a bigger continental port. This guide covers what shipping from China to Ireland actually costs, how long each option takes, which ports your cargo moves through, and the Irish and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 30 to 40 days. Air freight costs more but arrives in about 5 to 10 days. Since Brexit, Irish importers increasingly favour direct EU-to-Ireland sea routes over trucking through Great Britain, because the UK is now a customs border, and that keeps goods inside the EU customs union end to end. Ireland is in the EU, so you need an EORI number and should plan for 23 percent import VAT plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been volatile in 2026, with Red Sea diversions and North Europe rate swings affecting the feeder leg into Dublin. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Routing: most China to Ireland cargo transships at a North European hub (Rotterdam, Hamburg, or Antwerp) and feeders to Dublin, so the hub leg affects transit and cost.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to ocean shipments.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,500 - $3,100' },
          { label: '40ft container (FCL)', range: '$4,200 - $5,200' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$65 - $120' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $10.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $8.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.00 - $6.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$10.00 - $14.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Irish import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Ireland shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. There is no direct deep-sea China to Dublin service, so cargo is almost always transshipped at a North European hub such as Rotterdam, Hamburg, or Antwerp, then carried to Dublin Port on a short-sea feeder. Transit is typically 30 to 40 days port to port, with LCL adding about 7 to 10 days. Since Brexit, importers prefer these direct EU-to-Ireland routes over the old UK landbridge, since trucking through Great Britain now means crossing a customs border twice. In 2026, Cape of Good Hope routing has added time to some sailings. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Dublin, usually arriving in about 5 to 10 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 5 to 9 days into Ireland, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Ireland. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '30 - 40 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 10 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '5 - 9 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Ireland-bound containers. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the Irish side, Dublin Port is by far the largest and handles most container traffic, with Cork (Ringaskiddy) in the south and Rosslare Europort, which has grown sharply for direct EU ferry links since Brexit. Because there is no direct deep-sea China service, cargo is feedered in from a North European hub such as Rotterdam, Hamburg, or Antwerp. Dublin Airport is the main air gateway. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Ireland sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs they move freely across the EU. There is no VAT-free allowance for commercial imports, so plan around 23 percent import VAT and any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Irish import VAT is 23 percent, charged on the customs value plus duty plus transport to the EU border (reduced rates of 13.5, 9, and 0 percent apply to specific goods). VAT-registered businesses recover it as input tax.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. An Irish EORI starts with IE and is issued free by Revenue. It is valid across all 27 EU countries.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Since Brexit, the UK is a customs border, so Irish importers favour direct EU-to-Ireland sea routes over the GB landbridge to keep goods inside the EU customs union and avoid extra checks.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg and the feeder into Dublin, Irish and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Irish importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record to recover the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Irish delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have an Irish EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to a North European hub and feeders to Dublin Port, or flies into Dublin.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Ireland?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,500 to $3,100 for a 20ft container, LCL is about $65 to $120 per cubic meter, and air freight is around $4 to $10 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Ireland take?',
          answer:
            'Sea freight takes about 30 to 40 days, since cargo transships at a North European hub before feedering to Dublin. Air freight is about 5 to 10 days and express courier is 5 to 9 days. In 2026, Red Sea diversions have added time to some sailings.',
        },
        {
          question: 'Should I ship to Ireland directly or via the UK landbridge?',
          answer:
            'Since Brexit, most importers prefer direct EU-to-Ireland sea routes over trucking through Great Britain, because the UK is now a customs border and the landbridge means crossing it twice. Direct routes keep your goods inside the EU customs union end to end, which is simpler and usually faster for clearance.',
        },
        {
          question: 'What is the cheapest way to ship from China to Ireland?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Ireland?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, issued free by Irish Revenue and starting with IE. It is valid across all 27 EU countries, and your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Ireland?',
          answer:
            'Duty is set by your product’s commodity code in the EU TARIC tariff and charged on the CIF value, with many goods at low single-digit rates and some higher. On top of that, 23 percent Irish import VAT applies, which VAT-registered businesses can recover.',
        },
        {
          question: 'Which Irish port do shipments arrive at?',
          answer:
            'Dublin Port is by far the largest and handles most container traffic, with Cork in the south and Rosslare Europort, which has grown for direct EU links since Brexit. Dublin Airport is the main air gateway. Most sea cargo is feedered in from a North European hub.',
        },
        {
          question: 'What documents do I need to import from China to Ireland?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-israel',
    name: 'Israel',
    code: 'IL',
    description: 'Sea and air freight from China to Israel. 28-40 day transit to Haifa and Ashdod. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Haifa', 'Ashdod'],
    transitTime: '28-40 days',
    popularGoods: ['Electronics', 'Machinery', 'Consumer Goods', 'Textiles', 'Building Materials'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Israel: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Israel: compare sea, air and express freight costs, transit times, Haifa and Ashdod ports, customs, VAT and SII approval. Free quote.',
      answerCapsule:
        'Shipping from China to Israel moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Haifa or Ashdod, with Haifa’s Bay Port run by Shanghai Port Group. Sea freight takes about 28 to 40 days and air freight 5 to 8 days. Israeli VAT of 18 percent plus customs duty apply on arrival, and many products need Standards Institution (SII) approval to clear.',
      intro:
        'If you import from China into Israel, two things matter beyond the freight: standards approval and the regional security situation. This guide covers what shipping from China to Israel actually costs, how long each option takes, which ports your cargo moves through, and the Israeli customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 28 to 40 days. Air freight costs more but arrives in about 5 to 8 days. Israel is not in the EU and uses its own customs system, with 18 percent VAT plus duty, and many electrical, electronic, and other products need approval from the Standards Institution of Israel (SII) before they can clear. Sort that out early, then request a live quote and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been especially volatile in 2026 because the regional security situation and Red Sea disruption affect routing, war-risk insurance, and space. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing and security: in 2026, Red Sea and regional security issues have pushed many carriers around the Cape of Good Hope and added war-risk surcharges, which move rates and schedules.',
          'Duty and purchase tax: some categories (vehicles, electronics, appliances) carry an extra purchase tax on top of duty and VAT, so check your product.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$1,800 - $3,500' },
          { label: '40ft container (FCL)', range: '$2,800 - $5,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$35 - $75' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $10.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $8.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.50 - $6.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$7.00 - $13.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Israeli customs duty, the purchase tax on some categories, 18 percent VAT, or the forwarder’s clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Israel shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo arrives at Haifa or Ashdod, the two ports that handle effectively all Israeli container traffic. Haifa now includes the deep-water Bay Port terminal operated by Shanghai Port Group, a modern, Chinese-operated facility that has added capacity on the China lane, while Ashdod has the new TIL-operated terminal. Transit is typically 28 to 40 days port to port, with LCL adding about 7 to 10 days. Israel sits just past the Suez Canal, but in 2026 the regional security situation and Red Sea disruption push many carriers around the Cape of Good Hope, which adds time and surcharges. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Ben Gurion Airport near Tel Aviv, usually arriving in about 5 to 8 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. The regional situation can affect air schedules and insurance too, so book early. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 6 days into Israel, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Israel. Note that regulated products may still need standards approval even by express. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '28 - 40 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 8 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Israel-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Israeli side, Haifa and Ashdod handle effectively all container traffic. Haifa includes the Chinese-operated Bay Port terminal run by Shanghai Port Group, a modern deep-water facility, and Ashdod has the new TIL-operated terminal, so both ports now have extra private capacity alongside the state ports. Ben Gurion International Airport near Tel Aviv is the main air gateway. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Israel uses its own customs system, and the part that catches importers out is standards approval, not just duty. Here is what applies when you import from China. Duty depends on your product, an extra purchase tax applies to some categories, and many goods need approval from the Standards Institution of Israel before they can clear.',
        points: [
          'Import VAT is 18 percent (raised from 17 percent at the start of 2025), charged on the customs value plus duty and any purchase tax.',
          'Customs duty is charged on the CIF value (goods plus insurance and freight). Many industrial inputs are duty-free, while consumer goods, textiles, footwear, and food can carry duty. There is no China-Israel free trade agreement in force, so standard tariff rates apply.',
          'A separate purchase tax applies to specific categories such as vehicles, some electronics and appliances, alcohol, and tobacco, on top of duty and VAT, so landed cost can be well above the headline duty.',
          'Many electrical, electronic, toy, food, and construction products need approval from the Standards Institution of Israel (SII), often including lab testing or type approval, before or at import. Missing SII approval is a leading cause of clearance delays, and Hebrew labelling is commonly required.',
          'The importer must be a registered Israeli entity, and the SII approval is usually issued in the local importer or representative’s name. A licensed Israeli customs broker normally files the entry.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, certificate of origin, and the insurance certificate for CIF valuation, plus SII approval and any agency permits for regulated goods.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Israeli customs, duty, purchase tax where it applies, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. The Israeli importer still needs to be a registered entity, and any required standards approval is usually issued in their name, so we coordinate that rather than replace it. The alternative, FOB or CIF, leaves the Israeli clearance, duty, and delivery for you to arrange through a local broker. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Israeli delivery address.',
        'Check whether your products need Standards Institution of Israel (SII) approval and start that process early, since it is the most common cause of delay.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Haifa or Ashdod, or flies into Ben Gurion Airport near Tel Aviv.',
        'We clear Israeli customs, handle duty, any purchase tax, and VAT, and deliver to your door. With DDP, the charges and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Israel?',
          answer:
            'As an indicative guide, sea freight runs roughly $1,800 to $3,500 for a 20ft container, LCL is about $35 to $75 per cubic meter, and air freight is around $4.50 to $10 per kg depending on weight. Israeli duty, any purchase tax, and 18 percent VAT are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Israel take?',
          answer:
            'Sea freight takes about 28 to 40 days port to port to Haifa or Ashdod, plus clearance. Air freight is about 5 to 8 days and express courier is 3 to 6 days. The 2026 regional security situation and Red Sea disruption can make ocean schedules less predictable.',
        },
        {
          question: 'Do I need standards approval to import to Israel?',
          answer:
            'Often yes. Many electrical, electronic, toy, food, and construction products need approval from the Standards Institution of Israel (SII), which can include lab testing or type approval, before they clear. Missing SII approval is a leading cause of delays, so check and start the process early. Hebrew labelling is commonly required too.',
        },
        {
          question: 'How much duty and tax will I pay importing from China to Israel?',
          answer:
            'Customs duty depends on the product and is charged on the CIF value, with many industrial inputs duty-free and consumer goods often dutiable. On top of that, 18 percent VAT applies, and some categories like vehicles and certain electronics carry an extra purchase tax. There is no China-Israel free trade agreement in force.',
        },
        {
          question: 'What is the cheapest way to ship from China to Israel?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Which Israeli port do shipments arrive at?',
          answer:
            'Haifa and Ashdod handle effectively all Israeli container traffic. Haifa includes the Chinese-operated Bay Port terminal run by Shanghai Port Group, and Ashdod has the new TIL terminal. Ben Gurion International Airport near Tel Aviv is the main air gateway.',
        },
        {
          question: 'How does the regional situation affect shipping to Israel?',
          answer:
            'In 2026, Red Sea disruption and regional security issues push many carriers around the Cape of Good Hope and add war-risk surcharges, which can change cost and transit with little notice. We advise booking early and confirming routing before you commit.',
        },
        {
          question: 'What documents do I need to import from China to Israel?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, certificate of origin, and an insurance certificate, plus SII approval and any agency permits for regulated goods. The importer must be a registered Israeli entity, and wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-latvia',
    name: 'Latvia',
    code: 'LV',
    description: 'Sea and air freight from China to Latvia. 30-40 day transit to the Freeport of Riga via North European feeder. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Riga', 'Ventspils', 'Liepāja'],
    transitTime: '30-40 days',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Textiles', 'Furniture'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Latvia: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Latvia: compare sea, air and express freight costs, transit times, the Freeport of Riga and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Latvia moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at the Freeport of Riga, usually feedered via a larger North European port. Sea freight takes about 30 to 40 days and air freight 5 to 8 days. Latvian import VAT of 21 percent and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Latvia, your cargo usually crosses the Baltic on a feeder from a bigger North European port, so routing shapes the timeline. This guide covers what shipping from China to Latvia actually costs, how long each option takes, which ports your cargo moves through, and the Latvian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 30 to 40 days. Air freight costs more but arrives in about 5 to 8 days. Latvia is in the EU, so you need an EORI number to clear customs and should plan for 21 percent import VAT plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been elevated in 2026 because Red Sea diversions around the Cape of Good Hope have lengthened Asia to North Europe sailings. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Routing: most China to Latvia cargo transships at a North Sea hub (Rotterdam, Hamburg, or Gdansk) and crosses the Baltic on a feeder, so the hub leg affects transit and cost.',
          'Season: rates climb before Chinese New Year (January to February) and again in the autumn pre-holiday peak; Baltic winter weather can add delay.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,700 - $3,400' },
          { label: '40ft container (FCL)', range: '$4,300 - $5,400' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$60 - $120' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.50 - $11.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $9.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$3.80 - $6.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$6.00 - $12.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Latvian import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Latvia shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Mainline China services rarely call Riga directly, so most cargo transships at a North Sea hub such as Rotterdam, Hamburg, or Gdansk, then crosses the Baltic to the Freeport of Riga on a feeder or comes in by road. Transit is typically 30 to 40 days, with LCL adding about 7 to 10 days. In 2026, Cape of Good Hope routing has added time to some sailings. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Riga, usually arriving in about 5 to 8 days, often connecting through a European hub. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 6 days into Latvia, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Latvia. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '30 - 40 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 8 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Latvia-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Latvian side, the Freeport of Riga is the largest port and the main container gateway, with Ventspils and Liepāja handling additional cargo. Because direct China calls are rare, cargo is usually transshipped at Rotterdam, Hamburg, or Gdansk and brought across the Baltic on a feeder. Riga historically served as a transit hub toward Russia and the CIS, but that trade has fallen sharply since 2022, and the port now focuses more on containers and other routes. Riga International Airport is the main air gateway. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Latvia sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs they move freely across the EU. There is no VAT-free allowance for commercial imports, so plan around 21 percent import VAT and any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Latvian import VAT is 21 percent, charged on the customs value plus duty plus transport to the EU border (reduced rates of 12 and 5 percent apply to specific goods). VAT-registered businesses recover it as input tax.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. It is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg and the Baltic feeder into Riga, EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Latvian importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record to recover the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Latvian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to a North Sea hub and crosses the Baltic to the Freeport of Riga, or flies into Riga.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Latvia?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,700 to $3,400 for a 20ft container, LCL is about $60 to $120 per cubic meter, and air freight is around $3.80 to $11 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Latvia take?',
          answer:
            'Sea freight takes about 30 to 40 days, since cargo transships at a North Sea hub and crosses the Baltic to Riga. Air freight is about 5 to 8 days and express courier is 3 to 6 days. In 2026, Red Sea diversions have added time to some sailings.',
        },
        {
          question: 'Why does shipping to Latvia go through another port first?',
          answer:
            'Mainline China services rarely call Riga directly, so cargo is usually transshipped at a North Sea hub such as Rotterdam, Hamburg, or Gdansk, then carried across the Baltic on a feeder or brought in by road. That extra leg adds a few days to the timeline.',
        },
        {
          question: 'What is the cheapest way to ship from China to Latvia?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Latvia?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, a one-time and free registration valid across all 27 EU countries. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Latvia?',
          answer:
            'Duty is set by your product’s commodity code in the EU TARIC tariff and charged on the CIF value, with many goods at low single-digit rates and some higher. On top of that, 21 percent Latvian import VAT applies, which VAT-registered businesses can recover.',
        },
        {
          question: 'Which Latvian port do shipments arrive at?',
          answer:
            'The Freeport of Riga is the largest and the main container gateway, with Ventspils and Liepāja handling additional cargo. Riga International Airport is the main air gateway. Most sea cargo crosses the Baltic on a feeder from a North Sea hub.',
        },
        {
          question: 'What documents do I need to import from China to Latvia?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-lebanon',
    name: 'Lebanon',
    code: 'LB',
    description: 'Sea and air freight from China to Lebanon. 25-40 day transit to Beirut and Tripoli. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Beirut', 'Tripoli'],
    transitTime: '25-40 days',
    popularGoods: ['Consumer Goods', 'Machinery', 'Electronics', 'Building Materials', 'Textiles'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Lebanon: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Lebanon: sea, air and express freight costs, transit times, Beirut port, customs, VAT and payment realities. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Lebanon moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at the Port of Beirut or Tripoli. Sea freight takes about 25 to 40 days and air freight 4 to 7 days. Lebanese VAT of 11 percent plus customs duty apply on arrival, and the banking crisis means payment usually moves in cash US dollars rather than letters of credit.',
      intro:
        'If you import from China into Lebanon, the freight is the easy part: the harder issues are payment and a customs bill that shifts with the exchange rate. This guide covers what shipping from China to Lebanon actually costs, how long each option takes, which ports your cargo moves through, and the Lebanese customs and payment realities you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 25 to 40 days. Air freight costs more but arrives in about 4 to 7 days. Lebanon is not in the EU and runs its own customs, with 11 percent VAT plus duty. Because of the banking crisis, most supplier payments move in cash US dollars rather than letters of credit, and the customs charge is converted at an official rate that has been raised several times, so confirm the figure in force before you ship. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and move week to week, and in 2026 Red Sea disruption around the Eastern Mediterranean has added time and cost. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Payment: the banking crisis means most deals settle in cash US dollars, so build payment terms and bank access into your planning.',
          'Customs valuation: the official rate used to convert the customs bill has been raised several times, so the duty and VAT in local terms can change even when the rate does not.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to some sailings.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$1,600 - $3,250' },
          { label: '40ft container (FCL)', range: '$2,250 - $3,950' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$40 - $110' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $9.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $7.50' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.50 - $6.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$7.00 - $12.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Lebanese customs duty, 11 percent VAT, or the forwarder’s clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Lebanon shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo reaches Lebanon via the Eastern Mediterranean, usually transshipped at a hub such as Port Said or Piraeus, and arrives at the Port of Beirut, the main container gateway, which has been rebuilt and is handling near pre-crisis volumes again, or at Tripoli in the north. Transit is typically 25 to 40 days port to port, with LCL adding about 7 to 10 days. In 2026, the Red Sea situation pushes many carriers around the Cape of Good Hope, which adds time. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Guangzhou, Shenzhen, Shanghai, and Hong Kong to Beirut, usually arriving in about 4 to 7 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 6 days into Lebanon, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Lebanon. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '25 - 40 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '4 - 7 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Lebanon-bound containers. For air freight, the main gateways are Guangzhou, Shenzhen, Shanghai, and Hong Kong. On the Lebanese side, the Port of Beirut is the primary container gateway and has recovered after the 2020 explosion, while Tripoli in the north is a useful alternative, especially for northern Lebanon and onward Syria-bound trade, though it has less container capacity. Beirut-Rafic Hariri International Airport is the only commercial cargo airport. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Lebanese customs itself is not unusual, but the banking crisis and a shifting customs exchange rate make the final bill less predictable. Here is what applies when you import from China. Duty depends on your product, and payment arrangements matter as much as the freight, so plan both before you ship.',
        points: [
          'Import VAT is 11 percent, charged on the customs value plus customs duty. VAT-registered businesses can recover it through their return.',
          'Customs duty is charged on the CIF value (goods plus insurance and freight), typically running from about 5 to 30 percent depending on the product, with higher bands on luxury and protected goods. There is no China-Lebanon free trade agreement, so full duty applies.',
          'The customs bill is converted to local currency at an official rate that has been raised several times during the crisis, so the amount you pay can move even when the duty rate does not. Confirm the rate in force at clearance.',
          'Because of the banking crisis, most supplier payments move in cash US dollars rather than letters of credit, since bank deposits are largely inaccessible. Plan your payment method and timing with your supplier in advance.',
          'The importer must be a registered Lebanese business with a tax number and commercial registration; some goods need prior approval or a licence from the relevant ministry.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, and certificate of origin, plus any product-specific certificates.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Lebanese customs, duty, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup, though the consignee still needs valid import standing and a workable way to settle payment given the banking situation. The alternative, FOB or CIF, leaves the Lebanese clearance, duty, and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Lebanese delivery address.',
        'Agree the payment method with your supplier up front, since most deals settle in cash US dollars given the banking situation.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails through an Eastern Mediterranean hub to Beirut or Tripoli, or flies into Beirut.',
        'We clear Lebanese customs, handle duty and VAT at the rate in force, and deliver to your door. With DDP, the charges and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Lebanon?',
          answer:
            'As an indicative guide, sea freight runs roughly $1,600 to $3,250 for a 20ft container, LCL is about $40 to $110 per cubic meter, and air freight is around $4.50 to $9 per kg depending on weight. Lebanese duty and 11 percent VAT are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Lebanon take?',
          answer:
            'Sea freight takes about 25 to 40 days port to port to Beirut or Tripoli, plus clearance. Air freight is about 4 to 7 days and express courier is 3 to 6 days. The 2026 Red Sea situation can make ocean schedules less predictable.',
        },
        {
          question: 'How do payments work for imports to Lebanon right now?',
          answer:
            'Because of the banking crisis, most bank deposits are inaccessible and letters of credit are hard to arrange, so the majority of supplier payments move in cash US dollars. Agree the payment method with your supplier before you order, and budget for it as part of the landed cost.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Lebanon?',
          answer:
            'Customs duty is charged on the CIF value, typically 5 to 30 percent depending on the product, with higher bands on luxury goods. On top of that, 11 percent VAT applies. The bill is converted to local currency at an official rate that has changed several times, so confirm the current rate at clearance.',
        },
        {
          question: 'What is the cheapest way to ship from China to Lebanon?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Should I ship into Beirut or Tripoli?',
          answer:
            'Beirut is the main container gateway, with the most services and equipment, and it has recovered after the 2020 explosion. Tripoli in the north is a useful alternative for northern Lebanon and Syria-bound cargo, but expect fewer sailings and less capacity. The best choice depends on your delivery point.',
        },
        {
          question: 'Which Lebanese port do shipments arrive at?',
          answer:
            'The Port of Beirut is the primary container gateway, with Tripoli in the north as a secondary option. Beirut-Rafic Hariri International Airport is the only commercial cargo airport. Most sea cargo is transshipped through an Eastern Mediterranean hub before reaching Lebanon.',
        },
        {
          question: 'What documents do I need to import from China to Lebanon?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin, plus any product-specific certificates. The importer must be a registered Lebanese business, and wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-libya',
    name: 'Libya',
    code: 'LY',
    description: 'Sea and air freight from China to Libya. 30-50 day transit to Misrata, Tripoli, and Benghazi. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Misrata', 'Tripoli', 'Benghazi', 'Khoms'],
    transitTime: '30-50 days',
    popularGoods: ['Building Materials', 'Machinery', 'Electronics', 'Auto Parts', 'Consumer Goods'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Libya: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Libya: sea, air and express freight costs, transit times, Misrata and Tripoli ports, customs and payment rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Libya moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Misrata, Libya’s main container port, or Tripoli and Benghazi. Sea freight takes about 30 to 50 days and air freight 5 to 10 days. Libya has no VAT, but a customs service fee of about 5 percent applies, and imports must be paid through approved bank channels under tight currency controls.',
      intro:
        'If you import from China into Libya, the practical challenges are payment and routing, not tax. This guide covers what shipping from China to Libya actually costs, how long each option takes, which ports your cargo moves through, and the Libyan customs and payment rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 30 to 50 days. Air freight costs more but arrives in about 5 to 10 days. Libya is not in the EU and has no VAT, but a customs service fee of about 5 percent of the cargo value applies, plus small dues. Two things shape every shipment: the country is split between rival administrations, so you match the port to the consignee’s region, and imports must be paid through official bank channels under strict currency controls. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the destination region, and the season. The ranges below are indicative and unusually volatile for Libya, with 2026 Red Sea disruption, transshipment-hub congestion, and security adding cost. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Region: Libya is split between western and eastern administrations, so the usable port and customs office depend on the consignee’s region.',
          'Payment: imports must be paid through approved bank channels under central-bank currency controls, so allow time for the letter of credit or transfer to be approved.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope and Mediterranean hub transshipment add time and cost.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles the customs charges and delivery into one price, which removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,500 - $4,500' },
          { label: '40ft container (FCL)', range: '$3,500 - $6,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$70 - $150' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$8.00 - $12.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$6.00 - $9.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.00 - $7.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$8.00 - $18.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Libya has no VAT, but a customs service fee of about 5 percent of the CIF value plus small dues applies, covered in the customs section below. Libya lanes also carry extra surcharges versus mainstream routes.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Libya shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Most cargo reaches Libya via the Mediterranean, transshipped at a hub such as Malta, Port Said, or Istanbul, and arrives at Misrata, the main container gateway that handles most of Libya’s box traffic and is being expanded, or at Tripoli, Khoms, or Benghazi depending on the region. A direct China to Libya container service calling Misrata and Benghazi launched in 2026, which can cut transshipment time where available. Transit is typically 30 to 50 days port to port, with LCL adding more for consolidation. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Guangzhou, Shenzhen, Shanghai, and Hong Kong toward Tripoli Mitiga in the west or Benghazi Benina in the east, usually arriving in about 5 to 10 days, generally with a connection since direct freighters are rare. Air costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 7 days into Libya where service is available, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Libya. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '30 - 50 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 10 - 20 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 10 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 7 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Libya-bound containers. For air freight, the main gateways are Guangzhou, Shenzhen, Shanghai, and Hong Kong. On the Libyan side, Misrata is the main commercial container port, handling around 60 to 65 percent of the country’s container traffic and undergoing a major expansion, while Tripoli and Khoms serve the west and Benghazi serves the east. Because Libya is split between western and eastern administrations, the usable port depends on the consignee’s region. Tripoli Mitiga and Benghazi Benina are the main air gateways. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Libya has no VAT and low customs charges, so tax is not the obstacle. The real planning is around payment and routing. Here is what applies when you import from China. Confirm the consignee’s region and banking arrangements before you ship, since those drive the outcome more than the tariff.',
        points: [
          'Libya has no value-added tax. Most traditional customs duties were abolished, and imports instead carry a customs service fee of about 5 percent of the CIF value plus roughly 0.5 percent in minor dues. Treat the exact percentages as indicative and verify per product, since published rules are limited.',
          'Imports must be paid through official bank channels, usually a letter of credit or an approved bank transfer, under central-bank currency controls. Paying outside the banking system is prohibited, and foreign-currency approval can take time, so start it early.',
          'Libya is split between western and eastern administrations, so the practical port and customs office depend on which authority controls the consignee’s area. Match the routing to the consignee.',
          'The importer must be a registered Libyan entity with commercial registration and Chamber of Commerce membership.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin that is certified by the exporter’s chamber of commerce and legalised at a Libyan embassy or consulate before shipment. Some goods need conformity certificates.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg through a Mediterranean hub, Libyan customs and the service fee, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is especially useful given Libya’s routing and documentation complexity, but the consignee still needs valid import standing and an approved bank arrangement, since payment and import rights sit with the registered importer. The alternative, FOB or CIF, leaves the Libyan clearance and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Libyan delivery address and region.',
        'Arrange your bank letter of credit or approved transfer early, since imports must be paid through official channels under currency controls.',
        'We quote your options (sea FCL, sea LCL, air, or express) and the right port for your region, and you pick one.',
        'We arrange pickup from your supplier, handle export clearance, and prepare a legalised certificate of origin.',
        'Your cargo sails through a Mediterranean hub to Misrata, Tripoli, Khoms, or Benghazi, or flies into Mitiga or Benina.',
        'We clear Libyan customs, handle the service fee, and deliver to your door. With DDP, the charges and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Libya?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,500 to $4,500 for a 20ft container, LCL is about $70 to $150 per cubic meter, and air freight is around $4 to $12 per kg depending on weight. Libya has no VAT, but a customs service fee of about 5 percent applies. Request a live quote for your exact cargo.',
        },
        {
          question: 'Does Libya charge VAT or duty on goods from China?',
          answer:
            'Libya has no VAT. Most traditional customs duties were abolished, and imports instead carry a customs service fee of about 5 percent of the CIF value plus small dues. Tax is low, so the bigger planning issues are payment and routing, not the tariff.',
        },
        {
          question: 'How long does shipping from China to Libya take?',
          answer:
            'Sea freight takes about 30 to 50 days, since cargo transships at a Mediterranean hub before reaching Misrata, Tripoli, or Benghazi. Air freight is about 5 to 10 days and express courier 3 to 7 days where available. The 2026 Red Sea situation adds volatility.',
        },
        {
          question: 'How do payments and currency controls work for Libya?',
          answer:
            'Imports must be paid through official bank channels, usually a letter of credit or an approved bank transfer, under central-bank currency controls, and paying outside the banking system is prohibited. Foreign-currency approval can take time, so confirm the consignee’s banking arrangement and start the process before you book.',
        },
        {
          question: 'Which Libyan port should I ship into?',
          answer:
            'Misrata is the main container gateway and handles most of Libya’s box traffic, with Tripoli and Khoms in the west and Benghazi in the east. Because the country is split between two administrations, the right port depends on which authority controls the consignee’s region. We match the routing to your delivery point.',
        },
        {
          question: 'What is the cheapest way to ship from China to Libya?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Is there a direct shipping service from China to Libya?',
          answer:
            'A direct China to Libya container service calling Misrata and Benghazi launched in 2026, which can cut transshipment time where it is available. Otherwise, most cargo is transshipped through a Mediterranean hub such as Malta, Port Said, or Istanbul before reaching a Libyan port.',
        },
        {
          question: 'What documents do I need to import from China to Libya?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin certified by the exporter’s chamber of commerce and legalised at a Libyan embassy or consulate before shipment, plus any conformity certificates. The importer must be a registered Libyan entity, and wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-lithuania',
    name: 'Lithuania',
    code: 'LT',
    description: 'Sea and air freight from China to Lithuania. 35-45 day transit to Klaipėda, an ice-free deep-water port. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Klaipėda'],
    transitTime: '35-45 days',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Textiles', 'Furniture'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Lithuania: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Lithuania: compare sea, air and express freight costs, transit times, the Port of Klaipėda and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Lithuania moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Klaipėda, Lithuania’s ice-free deep-water port, usually feedered via a larger North European port. Sea freight takes about 35 to 45 days and air freight 5 to 10 days. Lithuanian import VAT of 21 percent and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Lithuania, your cargo usually crosses the Baltic on a feeder from a bigger North European port, so routing shapes the timeline. This guide covers what shipping from China to Lithuania actually costs, how long each option takes, which ports your cargo moves through, and the Lithuanian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 35 to 45 days. Air freight costs more but arrives in about 5 to 10 days. Lithuania’s port, Klaipėda, is ice-free year-round, which makes it reliable through the Baltic winter. Lithuania is in the EU, so you need an EORI number to clear customs and should plan for 21 percent import VAT plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been elevated in 2026 because Red Sea diversions around the Cape of Good Hope have lengthened Asia to North Europe sailings. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Routing: most China to Lithuania cargo transships at a North Sea hub (Rotterdam, Hamburg, or Gdansk) and crosses the Baltic to Klaipėda on a feeder, so the hub leg affects transit and cost.',
          'Origin port: South China ports such as Shenzhen and Ningbo usually have the cheapest, most frequent sailings; northern ports cost more with fewer direct options.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$1,800 - $3,800' },
          { label: '40ft container (FCL)', range: '$2,800 - $4,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$55 - $130' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $11.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $9.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$3.50 - $6.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$6.00 - $14.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Lithuanian import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Lithuania shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Mainline China services rarely call Klaipėda directly, so most cargo transships at a North Sea hub such as Rotterdam, Hamburg, or Gdansk, then crosses the Baltic on a feeder. Klaipėda is Lithuania’s only major deep-water port and is ice-free year-round, which avoids the winter disruption some Baltic ports face. Transit is typically 35 to 45 days, with LCL adding about 7 to 10 days. In 2026, Cape of Good Hope routing has added time to some sailings. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Vilnius, usually arriving in about 5 to 10 days, often connecting through a European hub. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 7 days into Lithuania, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Lithuania. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '35 - 45 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 10 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 7 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Lithuania-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Lithuanian side, Klaipėda is the only major deep-water port and the single container gateway, served by the main deep-sea lines and Baltic feeders, and notably ice-free all year. Because direct China calls are rare, cargo is usually transshipped at Rotterdam, Hamburg, or Gdansk and brought across the Baltic. Klaipėda was historically a transit gateway toward Belarus and the CIS, but that flow largely ended after 2022, and the port now focuses on EU imports and containers. Vilnius is the main air gateway. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Lithuania sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs at Klaipėda they move freely across the EU. There is no VAT-free allowance for commercial imports, so plan around 21 percent import VAT and any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Lithuanian import VAT is 21 percent, charged on the customs value plus duty plus transport to the EU border. VAT-registered businesses recover it as input tax.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. It is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg and the Baltic feeder into Klaipėda, EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Lithuanian importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record to recover the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Lithuanian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to a North Sea hub and crosses the Baltic to Klaipėda, or flies into Vilnius.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Lithuania?',
          answer:
            'As an indicative guide, sea freight runs roughly $1,800 to $3,800 for a 20ft container, LCL is about $55 to $130 per cubic meter, and air freight is around $3.50 to $11 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Lithuania take?',
          answer:
            'Sea freight takes about 35 to 45 days, since cargo transships at a North Sea hub and crosses the Baltic to Klaipėda. Air freight is about 5 to 10 days and express courier is 3 to 7 days. In 2026, Red Sea diversions have added time to some sailings.',
        },
        {
          question: 'Why is Klaipėda a reliable port for imports?',
          answer:
            'Klaipėda is Lithuania’s only major deep-water port and is ice-free year-round, so unlike some Baltic competitors it does not suffer winter ice disruption. The main caveat is that direct China calls are rare, so cargo arrives via a feeder from a North Sea hub, which adds a few days.',
        },
        {
          question: 'What is the cheapest way to ship from China to Lithuania?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Shipping from South China ports such as Shenzhen often gives the best rates.',
        },
        {
          question: 'Do I need an EORI number to import from China to Lithuania?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, a one-time and free registration valid across all 27 EU countries. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Lithuania?',
          answer:
            'Duty is set by your product’s commodity code in the EU TARIC tariff and charged on the CIF value, with many goods at low single-digit rates and some higher. On top of that, 21 percent Lithuanian import VAT applies, which VAT-registered businesses can recover.',
        },
        {
          question: 'Which Lithuanian port do shipments arrive at?',
          answer:
            'Klaipėda is the only major deep-water port and the single container gateway, served by the main lines and Baltic feeders and ice-free all year. Vilnius is the main air gateway. Most sea cargo crosses the Baltic on a feeder from a North Sea hub.',
        },
        {
          question: 'What documents do I need to import from China to Lithuania?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-malta',
    name: 'Malta',
    code: 'MT',
    description: 'Sea and air freight from China to Malta. 28-40 day transit to the Malta Freeport at Marsaxlokk, a major Mediterranean hub. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Malta Freeport (Marsaxlokk)', 'Valletta'],
    transitTime: '28-40 days',
    popularGoods: ['Consumer Goods', 'Machinery', 'Electronics', 'Building Materials', 'Furniture'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Malta: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Malta: compare sea, air and express freight costs, transit times, the Malta Freeport and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Malta moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at the Malta Freeport at Marsaxlokk, one of the Mediterranean’s biggest transshipment hubs with direct China services. Sea freight takes about 28 to 40 days and air freight 5 to 9 days. Maltese import VAT of 18 percent, the lowest in the EU, and any duty apply on arrival, and importers need an EORI number.',
      intro:
        'If you import from China into Malta, you have an unusual advantage for a small island: the Malta Freeport is a top Mediterranean transshipment hub, so it often gets direct China sailings that bigger inland markets reach only by feeder. This guide covers what shipping from China to Malta actually costs, how long each option takes, which ports your cargo moves through, and the Maltese and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 28 to 40 days. Air freight costs more but arrives in about 5 to 9 days. Malta is in the EU, so you need an EORI number to clear customs, and the import VAT is 18 percent, the lowest standard rate in the EU, plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been elevated in 2026 because Red Sea diversions around the Cape of Good Hope keep Mediterranean ocean rates high. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to Mediterranean services.',
          'Island logistics: there is no road or rail backup, so a missed sailing can mean a full extra week.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,800 - $4,500' },
          { label: '40ft container (FCL)', range: '$4,500 - $7,000' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$40 - $90' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.50 - $11.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.50 - $9.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$5.00 - $7.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$7.00 - $14.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Maltese import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Malta shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Malta has a real advantage: the Malta Freeport at Marsaxlokk is one of the Mediterranean’s busiest transshipment hubs, partly Chinese-owned through a stake in the terminal, so it has direct China main-line services. Most boxes through the Freeport are transshipment for other ports, but cargo actually bound for Malta is trucked the short distance to local consignees. Transit is typically 28 to 40 days port to port, with LCL adding about 7 to 10 days. In 2026, Cape of Good Hope routing has added time to some sailings. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Malta International Airport, usually arriving in about 5 to 9 days, often via a European hub feeder. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 4 to 8 days into Malta, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Malta. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '28 - 40 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 9 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '4 - 8 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao handle the bulk of Malta-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Maltese side, the Malta Freeport at Marsaxlokk is the main deep-sea container port and one of the Mediterranean’s top transshipment hubs, with good direct China services thanks partly to Chinese co-ownership of the terminal. Most boxes are transshipment for other Mediterranean and North African ports, while cargo for the island is trucked the short distance to consignees, and some local cargo also moves via the Grand Harbour at Valletta. Malta International Airport is the air gateway. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Malta sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs they move freely across the EU. There is no VAT-free allowance for commercial imports, but Malta has the lowest standard VAT in the EU, so the rate is 18 percent plus any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Maltese import VAT is 18 percent, the lowest standard rate in the EU, charged on the customs value plus duty plus transport to the EU border. VAT-registered businesses recover it as input tax.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance), and is identical EU-wide. There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. It is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg into Malta, Maltese and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup, which suits an island market. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Maltese importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record to recover the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Malta delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails on a direct service into the Malta Freeport, or flies into Malta International Airport.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Malta?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,800 to $4,500 for a 20ft container, LCL is about $40 to $90 per cubic meter, and air freight is around $5 to $11 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Malta take?',
          answer:
            'Sea freight takes about 28 to 40 days port to port to the Malta Freeport, plus a few days for customs and local delivery. Air freight is about 5 to 9 days and express courier is 4 to 8 days. In 2026, Red Sea diversions have added time to some sailings.',
        },
        {
          question: 'Why does Malta get direct China shipping services?',
          answer:
            'The Malta Freeport at Marsaxlokk is one of the Mediterranean’s busiest transshipment hubs and is partly Chinese-owned through a stake in the terminal, so it has direct China main-line calls. That is a real advantage for an island this size, since many bigger markets reach Malta-style hubs only by feeder.',
        },
        {
          question: 'What is the cheapest way to ship from China to Malta?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Malta?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, a one-time and free registration valid across all 27 EU countries. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'Why is import VAT lower in Malta?',
          answer:
            'Malta has the lowest standard VAT in the EU at 18 percent, a modest landed-cost edge versus the 21 to 25 percent common elsewhere. Customs duty, set by the EU TARIC tariff, is the same as everywhere else in the EU.',
        },
        {
          question: 'Which Malta port do shipments arrive at?',
          answer:
            'The Malta Freeport at Marsaxlokk is the main container port and one of the Mediterranean’s top transshipment hubs. Cargo for the island is trucked the short distance to consignees, and some local cargo moves via the Grand Harbour at Valletta. Malta International Airport is the air gateway.',
        },
        {
          question: 'What documents do I need to import from China to Malta?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-morocco',
    name: 'Morocco',
    code: 'MA',
    description: 'Sea and air freight from China to Morocco. 22-35 day transit to Tanger Med and Casablanca. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Tanger Med', 'Casablanca', 'Agadir'],
    transitTime: '22-35 days',
    popularGoods: ['Machinery', 'Electronics', 'Auto Parts', 'Textiles', 'Consumer Goods'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Morocco: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Morocco: sea, air and express freight costs, transit times, Tanger Med and Casablanca ports, customs and TVA. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Morocco moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Tanger Med, Africa’s largest container port, or Casablanca for local cargo. Sea freight takes about 22 to 35 days and air freight 5 to 8 days. Moroccan import VAT (TVA) of 20 percent plus customs duty apply on arrival, and there is no China-Morocco free trade agreement, so full duty applies.',
      intro:
        'If you import from China into Morocco, you ship into one of the best-connected ports in Africa: Tanger Med. This guide covers what shipping from China to Morocco actually costs, how long each option takes, which ports your cargo moves through, and the Moroccan customs and tax rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 22 to 35 days. Air freight costs more but arrives in about 5 to 8 days. Morocco is not in the EU and runs its own customs, with 20 percent VAT (TVA) plus duty. One point to budget for: Morocco has free trade deals with the EU, the US, and others, but not with China, so Chinese-origin goods pay full duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and move week to week, with 2026 Red Sea diversions affecting routing into the Mediterranean. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Duty: there is no China-Morocco free trade agreement, so Chinese goods pay full MFN duty, which can add meaningfully to landed cost alongside the 20 percent VAT.',
          'Port choice: Tanger Med is a global hub with strong China links; Casablanca is the practical import port for cargo consumed in Morocco.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,500 - $4,800' },
          { label: '40ft container (FCL)', range: '$3,800 - $6,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$90 - $150' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $9.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $7.50' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.00 - $6.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$6.00 - $10.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Moroccan customs duty, the small import tax (TPI), 20 percent VAT, or the forwarder’s clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Morocco shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Morocco has a strong advantage in Tanger Med, on the Strait of Gibraltar, which is Africa’s largest container port and a major global transshipment hub with strong direct Asia links, so it has good China connections. For goods actually consumed in Morocco, Casablanca is the practical import port serving the Casablanca-Rabat economic core. Transit is typically 22 to 35 days port to port, with LCL adding about 7 to 10 days. In 2026, some carriers route around the Cape of Good Hope, which runs up Morocco’s Atlantic coast and can favour Atlantic calls but adds time. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Guangzhou, Shenzhen, Shanghai, and Hong Kong to Casablanca Mohammed V Airport, usually arriving in about 5 to 8 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 6 days into Morocco, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Morocco. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '22 - 35 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 8 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao handle the bulk of Morocco-bound containers. For air freight, the main gateways are Guangzhou, Shenzhen, Shanghai, and Hong Kong. On the Moroccan side, Tanger Med on the Strait of Gibraltar is Africa’s largest container port and a leading global transshipment hub with strong China services, often used for automotive and manufacturing cargo. Casablanca is the main port for local import cargo serving the Casablanca-Rabat core, with Agadir in the south and Jorf Lasfar for bulk and industrial goods. Casablanca Mohammed V is the main air gateway. Picking between Tanger Med and Casablanca depends on where your goods are going. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Moroccan customs is straightforward, but the key point for China imports is duty: there is no free trade agreement with China, so Chinese goods pay full duty plus 20 percent VAT. Here is what applies. Duty depends on your exact product, so check the rate before you order.',
        points: [
          'Import VAT (TVA) is 20 percent, charged on the customs value plus duty (a reduced 10 percent applies to some goods). VAT-registered businesses can recover it.',
          'Customs duty is charged on the CIF value (goods plus insurance and freight), with MFN bands running roughly 2.5 to 40 percent depending on the product. There is no China-Morocco free trade agreement, so Chinese goods pay full duty, unlike EU, US, or Turkish-origin goods.',
          'A small import tax (TPI, Taxe Parafiscale à l’Importation) of 0.25 percent of the import value also applies.',
          'The importer must be a registered Moroccan entity with an ICE company number, and declarations are filed through the BADR electronic customs system.',
          'Because duty is calculated on the CIF value, a correct declared value including freight is essential.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, and certificate of origin, plus any product-specific certificates or licences.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or the cargo can be held or rejected.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Moroccan customs, duty, the small import tax, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup, though the consignee still needs to be a registered Moroccan entity with an ICE number. The alternative, FOB or CIF, leaves the Moroccan clearance, duty, and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Moroccan delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) and the right port (Tanger Med or Casablanca) for your delivery point, and you pick one.',
        'Make sure the importer is a registered Moroccan entity with an ICE number; we can work with your customs agent or handle clearance under DDP.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Tanger Med or Casablanca, or flies into Casablanca Mohammed V.',
        'We clear Moroccan customs through the BADR system, handle duty and VAT, and deliver to your door. With DDP, the charges and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Morocco?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,500 to $4,800 for a 20ft container, LCL is about $90 to $150 per cubic meter, and air freight is around $4 to $9 per kg depending on weight. Moroccan duty and 20 percent VAT are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Morocco take?',
          answer:
            'Sea freight takes about 22 to 35 days port to port to Tanger Med or Casablanca, plus clearance. Air freight is about 5 to 8 days and express courier is 3 to 6 days. In 2026, Red Sea diversions can affect routing and timing.',
        },
        {
          question: 'Do Chinese goods get a duty discount in Morocco?',
          answer:
            'No. Morocco has free trade agreements with the EU, the US, Turkey, and others, but not with China, so Chinese-origin goods pay full MFN duty, charged on the CIF value at bands of roughly 2.5 to 40 percent. On top of that, 20 percent VAT and a small 0.25 percent import tax apply.',
        },
        {
          question: 'Should I ship into Tanger Med or Casablanca?',
          answer:
            'Tanger Med is a world-class transshipment hub with strong China services, good for automotive and manufacturing cargo. For goods consumed in Morocco, Casablanca is usually the practical import port, serving the Casablanca-Rabat core. The best choice depends on where your goods are going.',
        },
        {
          question: 'What is the cheapest way to ship from China to Morocco?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Morocco?',
          answer:
            'Duty is charged on the CIF value at MFN bands of roughly 2.5 to 40 percent, with no China FTA discount. On top of that, 20 percent VAT (TVA) applies, plus a small 0.25 percent import tax. A correct CIF declared value including freight is essential, since duty is based on it.',
        },
        {
          question: 'Do I need to register as an importer in Morocco?',
          answer:
            'Yes. The importer must be a registered Moroccan entity with an ICE company number, and declarations are filed through the BADR electronic customs system. With door-to-door (DDP), we can handle the clearance for you, but the consignee still needs valid import standing.',
        },
        {
          question: 'What documents do I need to import from China to Morocco?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin, plus any product-specific certificates or licences. The importer needs an ICE number, and wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-poland',
    name: 'Poland',
    code: 'PL',
    description: 'Sea, rail, and air freight from China to Poland. 25-35 day transit to Gdansk, a Baltic hub with direct China services, or 16-25 days by rail. FCL, LCL, customs, and door-to-door.',
    majorPorts: ['Gdansk', 'Gdynia', 'Szczecin'],
    transitTime: '25-35 days',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Auto Parts', 'Furniture'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Poland: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Poland: compare sea, rail, air and express freight costs, transit times, the Port of Gdansk and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Poland moves cargo by sea freight, rail freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Gdansk, a Baltic gateway with direct China services, or by rail via Malaszewicze. Sea freight takes about 25 to 35 days, rail 16 to 25, and air 5 to 8. Polish import VAT of 23 percent and any EU duty apply on arrival, and importers need an EORI number.',
      intro:
        'If you import from China into Poland, you have two strong options most countries lack: Gdansk has direct deep-sea services from Asia, and Poland is the main rail gateway for China-Europe trains into the EU. This guide covers what shipping from China to Poland actually costs, how long each option takes, which ports and routes your cargo moves through, and the Polish and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have several ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), rail freight, air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 25 to 35 days to Gdansk. Rail runs about 16 to 25 days, and air freight lands in 5 to 8 days. Poland is in the EU, so you need an EORI number to clear customs and should plan for 23 percent import VAT plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been volatile in 2026, with Red Sea diversions around the Cape of Good Hope affecting the ocean leg. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Direct service: Gdansk has direct China calls, so it is often the fastest Baltic entry and avoids a transshipment leg.',
          'Mode: sea is cheapest, rail sits in the middle, air is faster and dearer, express is fastest and dearest.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to the ocean leg.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$2,400 - $3,000' },
          { label: '40ft container (FCL)', range: '$4,000 - $5,000' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$35 - $90' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.50 - $10.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.50 - $8.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.50 - $6.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$10.00 - $14.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Rail freight from China to Poland runs roughly $5,500 to $6,500 for a 40ft container, between sea and air on cost and speed. Air and express are priced on chargeable weight. None of these ranges include Polish import VAT, EU duty, or the forwarder’s clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Poland shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Poland has a real advantage: the Baltic Hub at Gdansk has direct deep-sea services from Asia, so unlike many Baltic ports it does not depend on a transshipment leg via Rotterdam or Hamburg. That keeps transit to Gdansk at about 25 to 35 days port to port, among the fastest Baltic options, with LCL adding about 7 to 10 days. Gdynia and the Szczecin-Swinoujscie complex are the other Polish seaports. In 2026, Cape of Good Hope routing has added time to some sailings. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the fast option, and rail is a strong middle ground for Poland. Air cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Warsaw, usually arriving in about 5 to 8 days. Poland is also the main entry point for China-Europe rail: trains from hubs such as Chengdu, Chongqing, Xi’an, and Yiwu cross into the EU at Malaszewicze on the Belarus border, where they switch to standard-gauge track, in about 16 to 25 days, roughly between sea and air on cost and speed. Air is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size, and per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote sea, rail, and air side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 4 to 8 days into Poland, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Poland. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL (direct to Gdansk)', time: '25 - 35 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Rail freight (via Malaszewicze)', time: '16 - 25 days', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive heavy cargo' },
        { mode: 'Air freight', time: '5 - 8 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '4 - 8 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Poland-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong, and rail services start from inland hubs such as Chengdu, Chongqing, Xi’an, and Yiwu. On the Polish side, the Baltic Hub at Gdansk is the main container gateway and has direct Asia services, with Gdynia and the Szczecin-Swinoujscie complex also handling cargo. Malaszewicze on the Belarus border is the main rail entry point for China-Europe trains into the EU. Warsaw is the main air gateway. Poland’s central location also makes it a common distribution base for Germany, the Baltics, Czechia, Slovakia, and beyond. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Poland sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs they move freely across the EU. There is no VAT-free allowance for commercial imports, so plan around 23 percent import VAT and any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Polish import VAT is 23 percent, charged on the customs value plus duty plus transport to the EU border (reduced rates of 8 and 5 percent apply to specific goods). VAT-registered businesses recover it as input tax.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. It is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading, air waybill, or rail consignment note.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg, EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Polish importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record to recover the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Polish delivery address.',
        'We recommend the best route (direct sea to Gdansk, rail via Malaszewicze, or air) and quote your options, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails directly to Gdansk, takes the train into the EU via Malaszewicze, or flies into Warsaw.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Poland?',
          answer:
            'As an indicative guide, sea freight runs roughly $2,400 to $3,000 for a 20ft container, LCL is about $35 to $90 per cubic meter, and air freight is around $4.50 to $10 per kg. Rail is roughly $5,500 to $6,500 for a 40ft container. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Poland take?',
          answer:
            'Sea freight to Gdansk is about 25 to 35 days, helped by direct China services. Rail via Malaszewicze is about 16 to 25 days, air freight about 5 to 8 days, and express courier 4 to 8 days. In 2026, Red Sea diversions have added time to the ocean leg.',
        },
        {
          question: 'Why is Gdansk a good port for China imports?',
          answer:
            'The Baltic Hub at Gdansk has direct deep-sea services from Asia, so it does not depend on a transshipment leg through Rotterdam or Hamburg like most Baltic ports. That usually makes it the fastest Baltic entry and a natural gateway for the wider region.',
        },
        {
          question: 'How does rail freight from China to Poland compare?',
          answer:
            'Rail runs from inland Chinese hubs into the EU at Malaszewicze on the Belarus border in about 16 to 25 days, roughly half the time of sea at a price between sea and air. Poland is the main rail gateway for China-Europe trains, so it is a genuine middle option, though border congestion can add delay.',
        },
        {
          question: 'What is the cheapest way to ship from China to Poland?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Direct sea to Gdansk is usually both cheap and reasonably fast.',
        },
        {
          question: 'Do I need an EORI number to import from China to Poland?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, a one-time and free registration valid across all 27 EU countries. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'Can I use Poland as a distribution base for the region?',
          answer:
            'Yes. Poland’s central location, large warehouse capacity, and road network make it a common base for serving Germany, the Baltics, Czechia, Slovakia, and beyond. Once goods clear customs at Gdansk, they move freely across the EU.',
        },
        {
          question: 'What documents do I need to import from China to Poland?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading, air waybill, or rail consignment note, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-portugal',
    name: 'Portugal',
    code: 'PT',
    description: 'Sea and air freight from China to Portugal. 30-40 day transit to Sines, Lisbon, and Leixões. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Sines', 'Lisbon', 'Leixões'],
    transitTime: '30-40 days',
    popularGoods: ['Textiles', 'Machinery', 'Electronics', 'Consumer Goods', 'Footwear'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Portugal: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Portugal: compare sea, air and express freight costs, transit times, Sines and Lisbon ports and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Portugal moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Sines, Portugal’s deep-water Atlantic port, or Lisbon and Leixões for local cargo. Sea freight takes about 30 to 40 days and air freight 5 to 9 days. Portuguese import VAT of 23 percent on the mainland and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Portugal, you are shipping to the western edge of Europe, where the deep-water port of Sines puts you directly on the Asia-to-Atlantic route. This guide covers what shipping from China to Portugal actually costs, how long each option takes, which ports your cargo moves through, and the Portuguese and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 30 to 40 days. Air freight costs more but arrives in about 5 to 9 days. Portugal is in the EU, so you need an EORI number to clear customs and should plan for 23 percent import VAT on the mainland (the islands of Madeira and Azores have lower rates) plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and move week to week, with 2026 Red Sea diversions affecting Asia to Europe sailings. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Port: Sines takes the biggest ships on direct Asia services; Lisbon and Leixões often arrive via transshipment for local distribution.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope run up the Atlantic past Portugal, which can favour an early Sines call but still adds time overall.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$1,700 - $2,800' },
          { label: '40ft container (FCL)', range: '$2,800 - $4,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$30 - $70' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.50 - $11.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.50 - $9.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$5.00 - $7.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$8.00 - $16.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Portuguese import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Portugal shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Portugal’s strength is Sines, on the southwest Atlantic coast, the country’s largest deep-water port and a natural hub on the Asia-to-Atlantic lane, so most large China services call there directly. For distribution into Lisbon or the Porto industrial north, Lisbon and Leixões are the better delivery match, though cargo for them often arrives via transshipment, commonly through Algeciras in Spain. Transit is typically 30 to 40 days port to port, with LCL adding about 7 to 10 days. In 2026, Cape of Good Hope routing has added time to some sailings. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Lisbon, usually arriving in about 5 to 9 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 6 days into Portugal, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Portugal. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '30 - 40 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 9 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao handle the bulk of Portugal-bound containers. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the Portuguese side, Sines is the largest deep-water port and the main container hub, taking the biggest ships on direct Asia services, while Lisbon and Leixões near Porto handle more regional cargo and smaller vessels, often fed via transshipment. Lisbon is the main air gateway. Picking between Sines and Lisbon or Leixões depends on where your goods are going. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Portugal sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs they move freely across the EU. There is no VAT-free allowance for commercial imports, so plan around 23 percent import VAT on the mainland and any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Portuguese import VAT is 23 percent on the mainland, charged on the customs value plus duty plus transport to the EU border (reduced rates of 13 and 6 percent apply to some goods). Madeira and the Azores use lower rates (22 and 16 percent), which matter if delivery is in the islands.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU. It is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Portuguese and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Portuguese importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record to recover the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Portuguese delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) and the right port (Sines, Lisbon, or Leixões) for your delivery point, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Sines, Lisbon, or Leixões, or flies into Lisbon.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Portugal?',
          answer:
            'As an indicative guide, sea freight runs roughly $1,700 to $2,800 for a 20ft container, LCL is about $30 to $70 per cubic meter, and air freight is around $5 to $11 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Portugal take?',
          answer:
            'Sea freight takes about 30 to 40 days port to port, with direct Asia services calling Sines. Air freight is about 5 to 9 days and express courier is 3 to 6 days. In 2026, Red Sea diversions have added time to some sailings.',
        },
        {
          question: 'Should I ship into Sines, Lisbon, or Leixões?',
          answer:
            'Sines is the largest deep-water port and takes the biggest ships on direct Asia services, good for large volumes. For distribution into Lisbon or the Porto north, Lisbon and Leixões are usually the better match, though cargo for them often arrives via transshipment. The best choice depends on your delivery point.',
        },
        {
          question: 'What is the cheapest way to ship from China to Portugal?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Portugal?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, a one-time and free registration valid across all 27 EU countries. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Portugal?',
          answer:
            'Duty is set by your product’s commodity code in the EU TARIC tariff and charged on the CIF value, with many goods at low single-digit rates and some higher. On top of that, 23 percent mainland import VAT applies (lower in Madeira and the Azores), which VAT-registered businesses can recover.',
        },
        {
          question: 'Why is Sines important for China imports?',
          answer:
            'Sines is Portugal’s largest deep-water port, able to take ultra-large container ships, and it sits directly on the Asia-to-Atlantic route, so most big China services call there. For high-volume importers it can mean fewer transshipments than routing through northern Europe.',
        },
        {
          question: 'What documents do I need to import from China to Portugal?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-romania',
    name: 'Romania',
    code: 'RO',
    description: 'Sea and air freight from China to Romania. 40-55 day transit to Constanta, the largest Black Sea port. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Constanta'],
    transitTime: '40-55 days',
    popularGoods: ['Machinery', 'Electronics', 'Auto Parts', 'Consumer Goods', 'Textiles'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Romania: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Romania: compare sea, air and express freight costs, transit times, the Port of Constanta and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Romania moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Constanta, the largest port on the Black Sea. Sea freight takes about 40 to 55 days and air freight 5 to 9 days. Romanian import VAT of 21 percent, raised in 2025, and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Romania, your cargo sails through Suez and the Mediterranean into the Black Sea to reach Constanta, so transit runs longer than to Western Europe but the port is a strong regional gateway. This guide covers what shipping from China to Romania actually costs, how long each option takes, which ports your cargo moves through, and the Romanian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 40 to 55 days. Air freight costs more but arrives in about 5 to 9 days. Romania is in the EU, so you need an EORI number to clear customs and should plan for 21 percent import VAT, raised from 19 percent in 2025, plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and have been elevated and variable in 2026, because Constanta sits past Suez and is more exposed to Red Sea diversions than North Europe ports. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing: cargo transits Suez and the Mediterranean into the Black Sea, so 2026 Red Sea diversions around the Cape of Good Hope add the most time on this lane.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Hinterland: Constanta serves Romania and landlocked neighbours, with Danube barge and rail links inland.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$1,800 - $4,000' },
          { label: '40ft container (FCL)', range: '$2,800 - $6,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$40 - $95' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.50 - $11.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $9.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.50 - $6.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$7.00 - $13.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Romanian import VAT, EU duty, or the forwarder’s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Romania shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo from China sails through the Suez Canal and the Mediterranean, then through the Bosphorus into the Black Sea, arriving at Constanta, the largest port on the Black Sea and Romania’s main maritime gateway. Some services call directly while others transship at a Mediterranean hub such as Piraeus or Port Said. Transit is typically 40 to 55 days port to port, longer than to Western Europe because of the Black Sea routing, with LCL adding about 7 to 10 days. Because Constanta sits past Suez, the 2026 Red Sea diversions add the most time here. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Bucharest, usually arriving in about 5 to 9 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. Given that sea freight to the Black Sea is slow, air is a more common choice on this lane when time matters, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 4 to 8 days into Romania, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Romania. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '40 - 55 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '5 - 9 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '4 - 8 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Romania-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Romanian side, Constanta is the largest port on the Black Sea and the natural distribution hub for Romania and central and eastern Europe, with Danube barge and rail links that also serve landlocked neighbours such as Moldova, Serbia, and Hungary. It is a useful gateway when North Europe ports are congested. Bucharest is the main air gateway. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Romania sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs at Constanta they move freely across the EU. There is no VAT-free allowance for commercial imports, so plan around 21 percent import VAT and any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Romanian import VAT is 21 percent, raised from 19 percent on 1 August 2025, charged on the customs value plus duty plus transport to the EU border (a reduced 11 percent rate applies to some goods). VAT-registered businesses recover it as input tax.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, and bicycles) carry extra anti-dumping duty.',
          'You need an EORI number to import into the EU, and it must match your invoice and transport documents exactly. It is free and valid across all 27 EU countries.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Romanian and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Romanian importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record to recover the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Romanian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'Make sure you have an EORI number that matches your documents; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails through Suez and the Mediterranean into the Black Sea to Constanta, or flies into Bucharest.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Romania?',
          answer:
            'As an indicative guide, sea freight runs roughly $1,800 to $4,000 for a 20ft container, LCL is about $40 to $95 per cubic meter, and air freight is around $4.50 to $11 per kg depending on weight. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Romania take?',
          answer:
            'Sea freight takes about 40 to 55 days, longer than to Western Europe because cargo sails through Suez and the Mediterranean into the Black Sea to Constanta. Air freight is about 5 to 9 days and express courier is 4 to 8 days. The 2026 Red Sea situation adds the most time on this lane.',
        },
        {
          question: 'Why does shipping to Romania take longer?',
          answer:
            'Constanta sits on the Black Sea, so cargo from China has to transit the Suez Canal and the Mediterranean and pass through the Bosphorus, which is further than reaching Western Europe. The 2026 Red Sea diversions around the Cape of Good Hope add even more time on this routing.',
        },
        {
          question: 'Now that Romanian VAT is 21 percent, how does that affect imports?',
          answer:
            'Romania raised its standard VAT from 19 to 21 percent on 1 August 2025, and 21 percent applies in 2026. Import VAT is charged on the customs value plus duty, so budget the higher rate into your landed cost. VAT-registered businesses can recover it.',
        },
        {
          question: 'What is the cheapest way to ship from China to Romania?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save a lot of time on this slower lane.',
        },
        {
          question: 'Do I need an EORI number to import from China to Romania?',
          answer:
            'Yes. Any business importing into the EU needs an EORI number, and in Romania it must match your invoice and transport documents exactly. It is a one-time, free registration valid across all 27 EU countries.',
        },
        {
          question: 'Can Constanta serve as a gateway for neighbouring countries?',
          answer:
            'Yes. Constanta is the largest Black Sea port and a natural hub for central and eastern Europe, with Danube barge and rail links that serve landlocked neighbours such as Moldova, Serbia, and Hungary. We can set up the right clearance or transit for your destination.',
        },
        {
          question: 'What documents do I need to import from China to Romania?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-serbia',
    name: 'Serbia',
    code: 'RS',
    description: 'Sea, rail, and air freight from China to Serbia. Landlocked, so cargo arrives via Koper or Rijeka and moves to Belgrade. Most goods now duty-free under the China-Serbia FTA.',
    majorPorts: ['Koper', 'Rijeka', 'Thessaloniki', 'Constanta'],
    transitTime: '30-50 days',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Auto Parts', 'Solar Equipment'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Serbia: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Serbia: compare sea, rail, air and express freight costs, transit times, gateway ports, customs and the China-Serbia FTA. Free quote.',
      answerCapsule:
        'Shipping from China to Serbia moves cargo by sea freight, rail freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Serbia is landlocked, so sea cargo arrives at a port like Koper or Rijeka and moves to Belgrade by road or rail. Sea takes about 30 to 50 days and air 5 to 10. Serbian import VAT is 20 percent, but since the China-Serbia free trade agreement took effect in 2024, many Chinese goods now enter duty-free with a certificate of origin.',
      intro:
        'If you import from China into Serbia, there is a real cost advantage: the China-Serbia free trade agreement, in force since 2024, lets many Chinese goods enter duty-free, so you often pay only the 20 percent VAT. This guide covers what shipping from China to Serbia actually costs, how long each option takes, which ports and routes your cargo moves through, and the Serbian customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have several ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), rail freight, air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 30 to 50 days door to door, since Serbia is landlocked and cargo arrives at a neighbouring port first. Air freight lands in about 5 to 10 days. Serbia is not in the EU and has strong, growing trade ties with China, including major rail links. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the gateway port, the size and weight of your cargo, and the season. The ranges below are indicative and move week to week, with 2026 Red Sea diversions affecting the ocean leg. Sea rates below are to the gateway port; inland haulage to Belgrade is extra. Treat them as a planning guide, then request a live quote.',
        factors: [
          'Duty: under the China-Serbia FTA, many Chinese goods now enter duty-free with a certificate of origin, so your main cost is often just the 20 percent VAT.',
          'Gateway port: northern ports (Koper, Rijeka) usually give the best link to Belgrade; southern Piraeus and Thessaloniki suit the China-Europe Land-Sea corridor.',
          'Mode: sea is cheapest, rail sits in the middle, air is faster and dearer, express is fastest and dearest.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to the ocean leg.',
          'Service level: door-to-door (DDP) bundles VAT, inland haulage, and delivery into one price, which removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL), to gateway port', range: '$1,500 - $3,000' },
          { label: '40ft container (FCL), to gateway port', range: '$2,000 - $3,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$85 - $120' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $9.50' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $8.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.50 - $6.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$6.00 - $12.00' }],
        note:
          'Sea freight is priced per container (FCL) to the gateway port, plus inland haulage to Belgrade, or per cubic meter (LCL). Rail via the China-Europe corridor is usually priced between sea and air. Air and express are priced on chargeable weight. None of these ranges include 20 percent Serbian VAT or the clearance fee, though duty is often zero under the FTA, as covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Serbia shipping and the cheapest way to move anything large or heavy, but because Serbia is landlocked, the choice of gateway port matters. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, most cost-effective once you have roughly 15 cubic meters (CBM) or more, while shared container space (LCL) means you pay only for the space you use, better for smaller loads. Most Serbia-bound cargo arrives at Koper in Slovenia or Rijeka in Croatia, the northern ports with the best rail and road links to Belgrade, and then moves inland. Southern ports such as Thessaloniki and Piraeus in Greece suit the China-Europe Land-Sea corridor, and Constanta in Romania and Bar in Montenegro are alternatives. Direct ocean legs to a northern port run about 18 to 22 days, and door to door to Belgrade is typically 30 to 50 days. In 2026, Cape of Good Hope routing has added time to some sailings. A rough rule: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote the gateway options so you can compare.',
      airFreightBody:
        'Air freight is the fast option, and rail is a strong middle ground for Serbia. Air cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Belgrade Nikola Tesla Airport, usually arriving in about 5 to 10 days. Rail reaches Serbia via the China-Europe network and the Land-Sea Express corridor through Piraeus and up through North Macedonia, in roughly 20 to 35 days, between sea and air on cost and speed, and the Budapest to Belgrade railway is strengthening this route. Air is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size, and per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote sea, rail, and air side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 7 days into Serbia, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Serbia. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL (via gateway port)', time: '30 - 50 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 5 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Rail freight (China-Europe corridor)', time: '20 - 35 days', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive heavy cargo' },
        { mode: 'Air freight', time: '5 - 10 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 7 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle Serbia-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong, and rail services start from inland hubs such as Yiwu, Chengdu, and Xi’an. Because Serbia is landlocked, sea cargo arrives at a gateway port in a neighbouring country: Koper in Slovenia and Rijeka in Croatia are the closest to Belgrade by rail and road, with Thessaloniki and Piraeus in Greece, Constanta in Romania, and Bar in Montenegro as alternatives. The China-Europe Land-Sea Express corridor and the Budapest to Belgrade railway give Serbia strong rail links, reflecting close China-Serbia trade ties. Belgrade Nikola Tesla is the main air gateway. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Serbia is one of the better-value destinations on this list, thanks to a free trade agreement with China. Here is what applies when you import from China. Many goods now pay no duty, so your main cost is the 20 percent VAT, but you need the right certificate of origin to claim the zero rate.',
        points: [
          'Under the China-Serbia free trade agreement, in force since 1 July 2024, a large and growing share of Chinese-origin goods enters Serbia duty-free with a valid certificate of origin. Categories that benefit include machinery, electronics, telecom equipment, batteries, solar modules, and many consumer goods.',
          'Import VAT (PDV) is 20 percent, charged on the customs value plus any duty (a reduced 10 percent applies to some essentials). For most China-origin goods that means VAT on the goods value with little or no duty.',
          'To claim the FTA zero duty you need a China-Serbia FTA certificate of origin issued by the Chinese authorities. Without it, standard MFN duty applies, charged on the CIF value.',
          'Serbia is not in the EU, so it uses its own customs. The importer must be a registered Serbian company with a tax ID, and a licensed Serbian customs broker normally files the declaration.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, and the FTA certificate of origin, plus any product-specific certificates.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg, the inland haulage from the gateway port, Serbian customs and VAT, and final delivery to your address in Belgrade or elsewhere. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. Because most goods are duty-free under the FTA, the main charge to handle is the 20 percent VAT, and we make sure the certificate of origin is in place so you do not pay duty you do not owe. The alternative, FOB or CIF, leaves the Serbian clearance and delivery for you to arrange through a local broker. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Serbian delivery address.',
        'We help you get the China-Serbia FTA certificate of origin so your goods qualify for zero duty.',
        'We recommend the best route (sea via Koper or Rijeka plus inland, rail via the Land-Sea corridor, or air) and quote your options, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo arrives at a gateway port and moves to Belgrade by road or rail, takes the China-Europe rail corridor, or flies into Belgrade.',
        'We clear Serbian customs, handle VAT and any duty, and deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Serbia?',
          answer:
            'As an indicative guide, sea freight runs roughly $1,500 to $3,000 for a 20ft container to the gateway port (inland haulage to Belgrade extra), LCL is about $85 to $120 per cubic meter, and air freight is around $4.50 to $9.50 per kg. Most goods are duty-free under the FTA, so 20 percent VAT is usually the main charge. Request a live quote.',
        },
        {
          question: 'Do I pay import duty shipping from China to Serbia?',
          answer:
            'Often not. Under the China-Serbia free trade agreement, in force since July 2024, a large and growing share of Chinese-origin goods enters Serbia duty-free with a valid certificate of origin. Without the certificate, standard duty applies. You still pay 20 percent import VAT either way.',
        },
        {
          question: 'How does cargo reach Serbia if it is landlocked?',
          answer:
            'Sea cargo arrives at a gateway port in a neighbouring country, usually Koper in Slovenia or Rijeka in Croatia, which have the best links to Belgrade, then moves inland by road or rail. Thessaloniki, Piraeus, Constanta, and Bar are alternatives, and rail corridors from China also reach Serbia.',
        },
        {
          question: 'How long does shipping from China to Serbia take?',
          answer:
            'Sea freight to a gateway port plus the inland leg is about 30 to 50 days door to door. Rail via the China-Europe corridor is about 20 to 35 days, air freight about 5 to 10 days, and express courier 3 to 7 days. In 2026, Red Sea diversions have added time to the ocean leg.',
        },
        {
          question: 'What is the cheapest way to ship from China to Serbia?',
          answer:
            'Sea freight via Koper or Rijeka is usually the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. With most goods duty-free under the FTA, Serbia is a lower landed-cost destination.',
        },
        {
          question: 'Why does Serbia have such good China rail links?',
          answer:
            'Serbia has close, growing economic ties with China, including Belt and Road investment and the Budapest to Belgrade railway, plus the China-Europe Land-Sea Express corridor through Piraeus. That gives Serbia multiple rail options, not just ocean freight.',
        },
        {
          question: 'Do I need a customs broker to import from China to Serbia?',
          answer:
            'In practice yes. Serbia uses its own customs system, the importer must be a registered Serbian company, and a licensed broker normally files the declaration. With door-to-door (DDP), we handle the broker, the certificate of origin, and the VAT for you.',
        },
        {
          question: 'What documents do I need to import from China to Serbia?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, and the China-Serbia FTA certificate of origin to claim zero duty, plus any product-specific certificates. The importer must be a registered Serbian company, and wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-slovakia',
    name: 'Slovakia',
    code: 'SK',
    description: 'Sea, rail, and air freight from China to Slovakia. Landlocked, so cargo arrives via Koper or Hamburg and moves to Bratislava. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Koper', 'Hamburg', 'Rijeka', 'Constanta'],
    transitTime: '30-45 days',
    popularGoods: ['Auto Parts', 'Machinery', 'Electronics', 'Consumer Goods', 'Batteries'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Slovakia: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Slovakia: compare sea, rail, air and express freight costs, transit times, gateway ports and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Slovakia moves cargo by sea freight, rail freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Slovakia is landlocked, so sea cargo arrives at a port like Koper or Hamburg and moves to Bratislava by road or rail. Sea takes about 30 to 45 days and air 3 to 7. Slovak import VAT is 23 percent, raised in 2025, plus any EU duty, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Slovakia, the route runs through a gateway seaport in a neighbouring country, so the choice of port and the high Slovak VAT both shape your landed cost. This guide covers what shipping from China to Slovakia actually costs, how long each option takes, which ports and routes your cargo moves through, and the Slovak and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have several ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), rail freight, air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 30 to 45 days door to door. Air freight lands in about 3 to 7 days, often via Vienna nearby. Slovakia is in the EU, so you need an EORI number to clear customs and should plan for 23 percent import VAT, raised from 20 percent in 2025, plus any duty. Slovakia is also one of the world’s top car producers, so a large share of imports on this lane are automotive parts and batteries. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the gateway port, the size and weight of your cargo, and the season. The ranges below are indicative and move week to week, with 2026 Red Sea diversions affecting the ocean leg. Sea rates below are to the gateway port; inland haulage to Bratislava is extra. Treat them as a planning guide, then request a live quote.',
        factors: [
          'Gateway port: Koper in Slovenia usually gives the shortest inland leg to Bratislava and the east; Hamburg offers more sailings but a longer, pricier inland haul.',
          'Mode: sea is cheapest, rail sits in the middle, air is faster and dearer, express is fastest and dearest.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to the ocean leg.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, inland haulage, and delivery into one price, which removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL), to gateway port', range: '$1,500 - $3,000' },
          { label: '40ft container (FCL), to gateway port', range: '$2,000 - $4,500' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$60 - $150' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.00 - $9.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.00 - $7.50' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.00 - $6.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$6.00 - $12.00' }],
        note:
          'Sea freight is priced per container (FCL) to the gateway port, plus inland haulage to Bratislava, or per cubic meter (LCL). Rail freight from China runs roughly $3,000 to $6,000 for a 40ft container, between sea and air on cost and speed. Air and express are priced on chargeable weight. None of these ranges include Slovak import VAT or EU duty, covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Slovakia shipping and the cheapest way to move anything large or heavy, but because Slovakia is landlocked, the choice of gateway port matters. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, most cost-effective once you have roughly 15 cubic meters (CBM) or more, while shared container space (LCL) means you pay only for the space you use, better for smaller loads. Most Slovakia-bound cargo arrives at Koper in Slovenia, the closest port to Bratislava with the shortest inland leg, or at Hamburg and Bremerhaven in Germany, which offer more sailings but a longer haul. Rijeka, Rotterdam, Gdansk, and Constanta are alternatives. From the port, cargo moves to Bratislava in the west or Kosice in the east by road or rail. Door to door is typically 30 to 45 days, with LCL adding more for consolidation. In 2026, Cape of Good Hope routing has added time to some sailings. A rough rule: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote the gateway options so you can compare.',
      airFreightBody:
        'Air freight is the fast option, and rail is a strong middle ground for Slovakia. Air cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong toward Slovakia, usually clearing via Bratislava or nearby Vienna, Frankfurt, or Budapest and then trucked in, arriving in about 3 to 7 days. Rail freight runs from inland Chinese hubs to Central Europe, with a broad-gauge transfer terminal at Dobra near Kosice, in about 18 to 28 days, between sea and air on cost and speed, though most 2026 rail routes around Russia and Ukraine, which lengthens transit. Air is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size, and per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote sea, rail, and air side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 3 to 6 days into Slovakia, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Slovakia. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL (via gateway port)', time: '30 - 45 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Rail freight (to Central Europe)', time: '18 - 28 days', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive heavy cargo' },
        { mode: 'Air freight', time: '3 - 7 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '3 - 6 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle Slovakia-bound containers. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong, and rail services start from inland hubs such as Xi’an, Chengdu, and Chongqing. Because Slovakia is landlocked, sea cargo arrives at a gateway port in a neighbouring country: Koper in Slovenia is closest to Bratislava, with Hamburg, Rijeka, Rotterdam, Gdansk, and Constanta as alternatives, then moves inland by road or rail to Bratislava or Kosice. A broad-gauge rail terminal at Dobra, near Kosice on the Ukraine border, is a gateway for China-Europe trains. Bratislava is the main airport, though much air freight clears via nearby Vienna. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Slovakia sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs they move freely across the EU. There is no VAT-free allowance for commercial imports, and Slovakia raised its standard VAT to 23 percent in 2025, so plan around 23 percent import VAT plus any duty. Rates depend on your exact product, so confirm the duty for your goods’ commodity code in the EU TARIC database before you ship.',
        points: [
          'Slovak import VAT is 23 percent, raised from 20 percent on 1 January 2025, charged on the customs value plus duty plus transport to the EU border. VAT-registered businesses recover it as input tax, but it is a real cash-flow item at clearance.',
          'EU customs duty is set by your product’s commodity code in the TARIC database and charged on the CIF value (goods plus freight and insurance). There is no EU-China free trade agreement, so standard MFN rates apply, and some China-origin goods (certain steel, aluminium, ceramics, bicycles, and electric vehicles) carry extra anti-dumping duty, which matters for automotive imports.',
          'You need an EORI number to import into the EU. It is free, valid across all 27 EU countries, and usually issued within a few working days.',
          'The EUR 22 import VAT exemption ended in 2021, so VAT applies from the first euro. From 1 July 2026 the EUR 150 customs-duty exemption also ends, replaced by a temporary flat duty of EUR 3 per item on consignments up to EUR 150, running until 2028.',
          'You can clear customs at the gateway port or in Slovakia. Clearing in Slovakia keeps the goods in EU transit until they reach Bratislava or Kosice; we set up whichever suits your routing.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading, air waybill, or rail consignment note.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or EU border inspection can reject them.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg, the inland haulage from the gateway port, Slovak and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is especially useful for a landlocked destination, where the gateway-port and inland legs add complexity, and for just-in-time automotive cargo where timing matters. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Slovak importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Slovak delivery address.',
        'We recommend the best route (sea via Koper or Hamburg plus inland, rail to Central Europe, or air) and quote your options, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo arrives at a gateway port and moves to Bratislava or Kosice by road or rail, takes the China-Europe rail corridor, or flies in via Bratislava or Vienna.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Slovakia?',
          answer:
            'As an indicative guide, sea freight runs roughly $1,500 to $3,000 for a 20ft container to the gateway port (inland haulage to Bratislava extra), LCL is about $60 to $150 per cubic meter, and air freight is around $4 to $9 per kg. Rail is roughly $3,000 to $6,000 for a 40ft. Import VAT and duty are extra. Request a live quote.',
        },
        {
          question: 'How does cargo reach Slovakia if it is landlocked?',
          answer:
            'Sea cargo arrives at a gateway port in a neighbouring country, usually Koper in Slovenia (closest to Bratislava) or Hamburg in Germany, then moves inland by road or rail to Bratislava or Kosice. Rijeka, Rotterdam, Gdansk, and Constanta are alternatives, and China-Europe rail can also reach Central Europe.',
        },
        {
          question: 'How long does shipping from China to Slovakia take?',
          answer:
            'Sea freight to a gateway port plus the inland leg is about 30 to 45 days. Rail to Central Europe is about 18 to 28 days, air freight about 3 to 7 days, and express courier 3 to 6 days. In 2026, Red Sea diversions have added time to the ocean leg.',
        },
        {
          question: 'Should I ship via Koper or Hamburg?',
          answer:
            'Koper in Slovenia usually gives the shortest inland leg to Bratislava and the east, often the best total cost. Hamburg offers more sailings and schedule reliability but a longer, pricier inland haul. Many shipments are quoted both ways, and the right choice depends on lane reliability and total landed cost.',
        },
        {
          question: 'Now that Slovak VAT is 23 percent, how does that affect imports?',
          answer:
            'Slovakia raised its standard VAT from 20 to 23 percent on 1 January 2025, and 23 percent applies in 2026. Import VAT is charged on the customs value plus duty, so budget the higher rate into your landed cost. VAT-registered Slovak businesses can normally recover it.',
        },
        {
          question: 'What is the cheapest way to ship from China to Slovakia?',
          answer:
            'Sea freight via Koper is usually the cheapest per unit, thanks to the short inland leg. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it.',
        },
        {
          question: 'Do you handle automotive parts and batteries for Slovakia?',
          answer:
            'Yes. Slovakia is one of the world’s top per-capita car producers, and a large share of China imports on this lane are automotive parts, components, and batteries, often just-in-time. We focus on transit reliability and fast customs, and we flag any anti-dumping duties on relevant categories before you ship.',
        },
        {
          question: 'What documents do I need to import from China to Slovakia?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading, air waybill, or rail consignment note, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-tunisia',
    name: 'Tunisia',
    code: 'TN',
    description: 'Sea and air freight from China to Tunisia. 28-38 day transit to Rades, Sfax, and Bizerte. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Rades', 'Sfax', 'Bizerte'],
    transitTime: '28-38 days',
    popularGoods: ['Machinery', 'Electronics', 'Textiles', 'Consumer Goods', 'Auto Parts'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Tunisia: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Tunisia: sea, air and express freight costs, transit times, Rades port, customs, TVA and import rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Tunisia moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Rades, Tunisia’s main container port near Tunis. Sea freight takes about 28 to 38 days and air freight 4 to 8 days. Tunisian VAT (TVA) of 19 percent plus customs duty apply on arrival, and there is no China-Tunisia free trade agreement, so Chinese goods pay full duty.',
      intro:
        'If you import from China into Tunisia, the freight is straightforward but the customs and currency rules need planning. This guide covers what shipping from China to Tunisia actually costs, how long each option takes, which ports your cargo moves through, and the Tunisian customs and tax rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 28 to 38 days. Air freight costs more but arrives in about 4 to 8 days. Tunisia is not in the EU and runs its own customs, with 19 percent VAT plus duty. Two things to plan for: there is no free trade agreement with China, so Chinese goods pay full duty, and Tunisia has foreign-exchange controls and advance import authorisations on some goods, which can affect payment and clearance. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and move week to week, with 2026 Red Sea diversions affecting routing into the Mediterranean. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Duty: there is no China-Tunisia free trade agreement, so Chinese goods pay full MFN duty, and some protected goods carry very high duty bands.',
          'Routing: in 2026, Red Sea diversions around the Cape of Good Hope have added time and cost to Asia to Mediterranean services.',
          'Port congestion: Rades is known for vessel waiting and yard congestion, which can add days and demurrage risk.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$1,800 - $4,200' },
          { label: '40ft container (FCL)', range: '$2,800 - $5,800' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$45 - $120' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$7.00 - $12.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.50 - $9.00' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$5.00 - $7.00' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$8.00 - $16.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. None of these ranges include Tunisian customs duty, the roughly 3 percent customs formality fee, 19 percent VAT, or the forwarder’s clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Tunisia shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo reaches Tunisia via the Mediterranean, often transshipped at a Med hub, and arrives at Rades, the main container terminal next to Tunis that handles the great majority of containers, with Sfax in the south and Bizerte in the north as alternatives. Transit is typically 28 to 38 days port to port, with LCL adding about 7 to 10 days. Rades is known for congestion, so build in buffer time, and in 2026 Cape of Good Hope routing adds time to some sailings. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Tunis-Carthage Airport, usually arriving in about 4 to 8 days. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 4 to 7 days into Tunisia, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Tunisia. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '28 - 38 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Air freight', time: '4 - 8 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '4 - 7 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao handle the bulk of Tunisia-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Tunisian side, Rades next to Tunis is the dominant container port and handles the great majority of the country’s box traffic, with Sfax in the industrial south and Bizerte in the north as alternatives, and the deep-water Enfidha port still under development. The main air gateway is Tunis-Carthage International Airport. Because Rades can be congested, an alternative port sometimes saves time for cargo not bound for the capital. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Tunisian customs is manageable, but two things matter for China imports: there is no free trade agreement, so duty is full, and currency and import rules can slow things down. Here is what applies. Confirm your product’s duty band and whether it needs a pre-import permit before you order.',
        points: [
          'Import VAT (TVA) is 19 percent, charged on the CIF value plus duty and surcharges (reduced 13 and 7 percent rates apply to some goods). VAT-registered businesses can recover it.',
          'Customs duty is charged on the CIF value (goods plus insurance and freight). The average MFN rate is around 19 percent, but bands vary widely and some protected goods run 30 to 50 percent or higher. There is no China-Tunisia free trade agreement, so Chinese goods pay full duty.',
          'A customs formality fee of roughly 3 percent of the duties paid also applies, and VAT is calculated on the CIF value plus duty and these surcharges.',
          'Tunisia has foreign-exchange controls and advance import authorisations on certain product categories, which can delay supplier payment and clearance. Confirm whether your goods need a permit, which is usually valid for 12 months.',
          'The importer must be a registered Tunisian trader, and most commercial shipments clear through a licensed customs broker.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, and certificate of origin, plus any conformity or health certificates for regulated goods. Documents are accepted in Arabic, French, or English.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Tunisian customs, duty, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup, though the consignee still needs to be a registered Tunisian trader and, for some goods, hold the right import authorisation. The alternative, FOB or CIF, leaves the Tunisian clearance, duty, and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Tunisian delivery address.',
        'Check whether your product needs an advance import authorisation, and confirm the foreign-exchange arrangement for payment, before the goods ship.',
        'We quote your options (sea FCL, sea LCL, air, or express) with indicative costs and transit times, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails through a Mediterranean hub to Rades, Sfax, or Bizerte, or flies into Tunis-Carthage.',
        'We clear Tunisian customs, handle duty and VAT, and deliver to your door. With DDP, the charges and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Tunisia?',
          answer:
            'As an indicative guide, sea freight runs roughly $1,800 to $4,200 for a 20ft container, LCL is about $45 to $120 per cubic meter, and air freight is around $5 to $12 per kg depending on weight. Tunisian duty and 19 percent VAT are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Tunisia take?',
          answer:
            'Sea freight takes about 28 to 38 days port to port to Rades, plus clearance. Air freight is about 4 to 8 days and express courier is 4 to 7 days. Rades congestion and the 2026 Red Sea situation can add time, so build in buffer.',
        },
        {
          question: 'Do Chinese goods get a duty discount in Tunisia?',
          answer:
            'No. Tunisia has free trade deals with the EU and Arab partners but not with China, so Chinese-origin goods pay full MFN duty on the CIF value, plus a roughly 3 percent formality fee and 19 percent VAT. A certificate of origin documents origin but does not lower the rate.',
        },
        {
          question: 'What is the cheapest way to ship from China to Tunisia?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Why is Rades port often congested?',
          answer:
            'Rades is Tunisia’s dominant container port and handles the great majority of the country’s box traffic, which regularly leads to vessel waiting, yard congestion, and equipment shortages. Build buffer time into your timeline and watch for demurrage; Sfax or Bizerte can sometimes be alternatives.',
        },
        {
          question: 'Do I need an import permit for Tunisia?',
          answer:
            'For some product categories, yes. Tunisia maintains advance import authorisations on certain goods and has foreign-exchange controls, so confirm whether your specific product needs a permit, usually valid 12 months, before you ship. We can help you check.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Tunisia?',
          answer:
            'Customs duty is charged on the CIF value, averaging around 19 percent but with bands that run much higher on protected goods. On top of that, a roughly 3 percent formality fee and 19 percent VAT apply, with VAT calculated on the CIF value plus duty and surcharges.',
        },
        {
          question: 'What documents do I need to import from China to Tunisia?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin, plus any conformity or health certificates for regulated goods. The importer must be a registered Tunisian trader, and wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-turkey',
    name: 'Turkey',
    code: 'TR',
    description: 'Sea, rail, and air freight from China to Turkey. 22-40 day sea transit to Istanbul, Mersin, and Izmir, or 15-25 days by rail. FCL, LCL, customs, and door-to-door.',
    majorPorts: ['Istanbul (Ambarli)', 'Mersin', 'Izmir', 'Gemlik'],
    transitTime: '22-40 days',
    popularGoods: ['Electronics', 'Machinery', 'Textiles', 'Consumer Goods', 'Auto Parts'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Turkey: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Turkey: compare sea, rail, air and express freight costs, transit times, ports, customs, KDV and import duties. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Turkey moves cargo by sea freight, rail freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Istanbul, Mersin, or Izmir, or by rail on the Middle Corridor. Sea freight takes about 22 to 40 days, rail 15 to 25, and air 2 to 4. Turkish VAT (KDV) is 20 percent, and Chinese goods pay full duty plus, on many products, extra anti-dumping duties.',
      intro:
        'If you import from China into Turkey, one point clears up a lot of confusion: Turkey is in a customs union with the EU, but that only helps EU-origin goods, not Chinese ones, so your China cargo pays full duty. This guide covers what shipping from China to Turkey actually costs, how long each option takes, which ports and routes your cargo moves through, and the Turkish customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run. You have several ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), rail freight, air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes roughly 22 to 40 days. Rail on the Middle Corridor runs about 15 to 25 days, and air freight lands in 2 to 4 days. Turkey is not in the EU, has its own customs, and applies 20 percent VAT plus duty, and on many Chinese products extra anti-dumping or additional customs duties that can be large, so check your product before ordering. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. The ranges below are indicative and move week to week, with 2026 Red Sea and regional tension affecting routing and rates. Treat them as a planning guide, then request a live quote for pricing on your exact shipment, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, rail sits in the middle, air is faster and dearer, express is fastest and dearest.',
          'Duty: Chinese goods pay full duty, and many categories (textiles, ceramics, steel, electronics, footwear) carry extra anti-dumping or additional customs duties that can be large.',
          'Routing: in 2026, Red Sea diversions and regional tension have added volatility to Mediterranean sailings; the Middle Corridor rail is a real alternative.',
          'Port: Mersin suits central and southern Turkey; Istanbul and the Marmara ports suit the northwest industrial belt.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL)', range: '$1,300 - $2,800' },
          { label: '40ft container (FCL)', range: '$2,300 - $4,200' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$25 - $60' }],
        air: [
          { label: 'Air freight, per kg (under 100 kg)', range: '$6.50 - $9.00' },
          { label: 'Air freight, per kg (100 to 500 kg)', range: '$5.50 - $7.50' },
          { label: 'Air freight, per kg (500 kg and up)', range: '$4.50 - $6.50' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$11.00 - $13.00' }],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Rail freight on the Middle Corridor runs roughly $7,000 to $8,700 for a 40ft container, faster than sea and cheaper than air. Air and express are priced on chargeable weight. None of these ranges include Turkish customs duty, anti-dumping or additional duties, 20 percent VAT, or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Turkey shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which is most cost-effective once you have roughly 15 cubic meters (CBM) or more. Shared container space (LCL) means your goods travel in a container with other importers’ cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo from China reaches Turkey via the Mediterranean, arriving at Istanbul and its Ambarli terminal, the largest container gateway, or at Mersin on the south coast for central and southern Turkey, with Izmir and Aliaga on the Aegean and Gemlik and Kocaeli in the Marmara industrial belt near Bursa. Transit is typically 22 to 40 days port to port, commonly 25 to 35 days, with LCL adding about 7 to 10 days. In 2026, Red Sea diversions and regional tension add variability. A rough rule for choosing: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the fast option, and rail is a strong middle ground for Turkey while Red Sea risk persists. Air cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Istanbul, a major air-cargo hub, usually arriving in about 2 to 4 days plus handling. Rail freight runs on the Middle Corridor and the Baku-Tbilisi-Kars line via Kazakhstan, the Caspian, and Georgia in about 15 to 25 days, faster than sea and cheaper than air, with much-improved 2026 capacity. Air is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size, and per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote sea, rail, and air side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, usually 2 to 5 days into Turkey, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Turkey. Above roughly 100 to 150 kg, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: '22 - 40 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'FCL time + 7 - 10 days', indicativeCost: 'Low for small loads', bestFor: 'Under about 15 CBM' },
        { mode: 'Rail freight (Middle Corridor)', time: '15 - 25 days', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive heavy cargo' },
        { mode: 'Air freight', time: '2 - 4 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '2 - 5 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Turkey-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong, and rail services start from inland hubs such as Xi’an, Chengdu, and Chongqing feeding the Middle Corridor. On the Turkish side, Istanbul and its Ambarli terminal are the largest container gateway, serving the northwest and Europe-bound flows, while Mersin on the Mediterranean serves central and southern Turkey, Izmir and Aliaga cover the Aegean, and Gemlik and Kocaeli serve the Marmara industrial belt near Bursa and the auto sector. Istanbul is the main air gateway. Turkey is also a manufacturing hub and a bridge to the Middle East, North Africa, and Central Asia. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Turkish customs has one big trap for China imports: the customs union with the EU does not help Chinese goods, which pay full duty, and many Chinese products carry extra anti-dumping or additional duties. Here is what applies. Check your product’s full duty exposure before ordering, since the extra duties can be large.',
        points: [
          'Turkey is in a customs union with the EU for industrial goods, but that benefits EU-origin goods, not third-country goods. Chinese-made goods pay normal MFN import duty, charged on the CIF value.',
          'On top of base duty, Turkey applies significant Additional Customs Duties and anti-dumping or safeguard duties on many Chinese categories, including textiles, ceramics, steel, aluminium, electronics, footwear, and some chemicals. These stack on the base rate and can add a large, product-specific cost.',
          'Import VAT (KDV) is 20 percent, charged at clearance on the CIF value plus customs duty (plus any Special Consumption Tax on items like vehicles).',
          'There is no China-Turkey free trade agreement, so a certificate of origin documents origin but does not reduce duty; it is also used to apply the right anti-dumping rate.',
          'The importer must hold a Turkish tax number and be a registered company, and commercial imports clear through a licensed customs broker. Some goods need import licences or conformity approval (such as TSE).',
          'Core documents are the commercial invoice, packing list, bill of lading, air waybill, or rail consignment note, and certificate of origin, plus any conformity certificates.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp, or the cargo can be rejected.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg, Turkish customs, duty including any anti-dumping duty, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. Because Turkey’s extra duties on Chinese goods can be significant, having us calculate the full landed cost up front avoids surprises at clearance. The alternative, FOB or CIF, leaves the Turkish clearance, duty, and delivery for you to arrange through a broker. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Turkish delivery address.',
        'We check the full duty exposure for your HS code, including any anti-dumping or additional customs duties, so the landed cost is clear before you order.',
        'We quote your options (sea FCL, sea LCL, rail, air, or express) and the right port for your region, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Istanbul, Mersin, or Izmir, takes the Middle Corridor rail, or flies into Istanbul.',
        'We clear Turkish customs, handle duty and VAT, and deliver to your door. With DDP, the charges and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Turkey?',
          answer:
            'As an indicative guide, sea freight runs roughly $1,300 to $2,800 for a 20ft container, LCL is about $25 to $60 per cubic meter, and air freight is around $4.50 to $9 per kg depending on weight. Turkish duty, any anti-dumping duty, and 20 percent VAT are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'Does Turkey’s EU customs union mean my Chinese goods are duty-free?',
          answer:
            'No. The Turkey-EU customs union covers EU-origin industrial goods, not third-country goods. Chinese-made goods pay full MFN import duty plus VAT, and often extra anti-dumping or additional customs duties on top, so do not expect duty-free treatment for China cargo.',
        },
        {
          question: 'How long does shipping from China to Turkey take?',
          answer:
            'Sea freight takes about 22 to 40 days, commonly 25 to 35 to Istanbul or Mersin. Rail on the Middle Corridor is about 15 to 25 days, air freight about 2 to 4 days, and express courier 2 to 5 days. In 2026, Red Sea and regional tension add variability to ocean schedules.',
        },
        {
          question: 'Why are extra duties charged on Chinese goods in Turkey?',
          answer:
            'Turkey actively uses Additional Customs Duties and anti-dumping or safeguard duties on many Chinese categories, such as textiles, ceramics, steel, aluminium, electronics, and footwear, to protect local industry. These stack on the base duty and can be large, so it is essential to check the full duty for your HS code before ordering.',
        },
        {
          question: 'What is the cheapest way to ship from China to Turkey?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Rail on the Middle Corridor is a good middle option when you need the goods faster than sea.',
        },
        {
          question: 'How does rail freight from China to Turkey work?',
          answer:
            'Rail runs on the Middle Corridor and the Baku-Tbilisi-Kars line via Kazakhstan, the Caspian, and Georgia in about 15 to 25 days, faster than sea and cheaper than air. Its 2026 capacity upgrade has made it a stronger alternative while Red Sea risk affects ocean routes.',
        },
        {
          question: 'Should I ship into Istanbul or Mersin?',
          answer:
            'Istanbul and its Ambarli terminal are the largest gateway and suit the northwest industrial belt and Europe-bound flows. Mersin on the Mediterranean suits central and southern Turkey, and Marmara ports like Gemlik and Kocaeli serve Bursa and the auto sector. The best choice depends on your delivery point.',
        },
        {
          question: 'What documents do I need to import from China to Turkey?',
          answer:
            'You need a commercial invoice, packing list, bill of lading, air waybill, or rail consignment note, and certificate of origin, plus any conformity certificates such as TSE for regulated goods. The importer needs a Turkish tax number, and wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
  },
  {
    slug: 'shipping-china-to-ukraine',
    name: 'Ukraine',
    code: 'UA',
    description: 'Freight from China to Ukraine in 2026, mostly overland via Polish or Romanian ports given the war. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Gdansk (Poland)', 'Constanta (Romania)', 'Odesa'],
    transitTime: '40-55 days',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Auto Parts', 'Building Materials'],
    content: {
      lastUpdated: 'June 2026',
      metaTitle: 'Shipping From China to Ukraine: Cost & Transit 2026',
      metaDescription:
        'Shipping from China to Ukraine in 2026: wartime routing via Poland and Romania, transit times, costs, customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Ukraine in 2026 is shaped by the war. Most cargo travels by sea to a Polish or Romanian port such as Gdansk or Constanta, then by road or rail across the border to Lviv and Kyiv. Ukrainian airspace is closed, so there is no direct air freight; air cargo flies to a neighbouring hub and is trucked in. Total transit is about 40 to 55 days by sea and overland. Ukrainian import VAT is 20 percent plus any customs duty.',
      intro:
        'If you import from China into Ukraine in 2026, the war changes how cargo moves, so honest planning matters. This guide covers what shipping from China to Ukraine actually costs, how each option works given the current situation, which routes your cargo takes, and the Ukrainian customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the figures and steps below reflect how shipments really run today. The practical options are sea freight to a Polish or Romanian port then overland into Ukraine, rail from China to a border hub then onward, and air freight to a neighbouring country then trucked across the border. Ukraine is not in the EU, and its own Black Sea ports operate under a sea corridor but carry real security risk, so most cargo routes overland through Poland or Romania. Ukrainian airspace has been closed to civil flights since 2022, so there is no direct air freight into Kyiv or Lviv. Plan for 20 percent import VAT plus any duty, and request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the route, the size and weight of your cargo, and the security situation. The ranges below are indicative and especially volatile in wartime, with war-risk insurance, border queues, and 2026 Red Sea diversions all adding cost. The sea rates below are to the EU gateway port; the onward overland leg into Ukraine is extra. Treat them as a planning guide, then request a live quote.',
        factors: [
          'Routing: most cargo goes by sea to a Polish or Romanian port then overland into Ukraine, because direct Black Sea calls carry war risk.',
          'Air: Ukrainian airspace is closed, so air cargo flies to a neighbouring hub such as Warsaw or Chisinau and is trucked across the border.',
          'Security and insurance: war-risk insurance, congestion, and border surcharges raise cost and make timing variable.',
          'Mode: sea plus overland is cheapest, rail sits in the middle, air to a neighbour plus truck is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles the overland leg, customs, and delivery into one price, which removes the work.',
        ],
        fcl: [
          { label: '20ft container (FCL), China to EU port', range: '$2,400 - $3,000' },
          { label: '40ft container (FCL), China to EU port', range: '$4,000 - $5,200' },
        ],
        lcl: [{ label: 'Per CBM (cubic meter), shared container', range: '$40 - $90' }],
        air: [
          { label: 'Air freight to a neighbouring hub, per kg', range: '$4.00 - $8.00' },
          { label: 'Plus onward trucking across the border', range: 'Quoted per shipment' },
        ],
        express: [{ label: 'Express courier, per kg (small parcels)', range: '$7.00 - $14.00' }],
        note:
          'Sea freight is priced per container (FCL) to the EU gateway port, plus the onward overland leg into Ukraine, which commonly adds roughly $700 to $1,500 or more by road or rail, or per cubic meter (LCL). There is no direct air freight, so air cargo flies to a neighbouring hub and is trucked in. None of these ranges include Ukrainian import VAT, duty, or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the cheapest way to move anything large or heavy, but in 2026 it usually reaches Ukraine overland rather than by a direct call. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, most cost-effective once you have roughly 15 cubic meters (CBM) or more, while shared container space (LCL) means you pay only for the space you use, better for smaller loads. The common route is sea from China to a Polish port such as Gdansk or a Romanian port such as Constanta, where the goods clear EU transit, then by road or rail across the border to Lviv, Kyiv, and beyond. Total transit is typically 40 to 55 days via Poland and a little less via Romania, including the ocean leg, which is longer in 2026 because of Cape of Good Hope routing, plus the border crossing and inland haul. Ukraine’s own Black Sea ports at Odesa, Chornomorsk, and Pivdennyi do operate under a sea corridor, but the security risk and war-risk insurance make direct calls limited and route-dependent. A rough rule for container choice: below about 15 CBM, LCL is usually cheaper; above it, a full container wins, and we quote the routing options so you can compare.',
      airFreightBody:
        'There is no direct air freight into Ukraine, because Ukrainian airspace has been closed to civil aviation since 2022. The practical fast option is to fly cargo from hubs like Shanghai, Guangzhou, and Shenzhen to a neighbouring country, usually Warsaw, Krakow, or Rzeszow in Poland, or Chisinau in Moldova, and then truck it across the border into Ukraine. Flying to the neighbouring hub takes about 4 to 8 days, plus 1 to 3 days for the border crossing and onward trucking. Air is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size, and per-kg rates fall as the shipment gets heavier. We never promise direct air to Kyiv or Lviv; we quote the air-to-neighbour plus truck route honestly so you can plan around the border step.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is still available into Ukraine for small parcels, usually 5 to 12 days door to door, since the integrators route through a neighbouring hub and truck the last leg across the border. It bundles pickup, the flight, and delivery into one service, and it is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo and timing can vary with the security situation and border queues, but for a small, time-critical shipment it is often the simplest option. Above roughly 100 to 150 kg, standard air freight to a neighbouring hub usually becomes cheaper. We can compare the options for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea + overland (via Poland)', time: '40 - 55 days', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy loads to western Ukraine' },
        { mode: 'Sea + overland (via Romania)', time: '35 - 50 days', indicativeCost: 'Low', bestFor: 'Southern and central Ukraine' },
        { mode: 'Rail + onward truck', time: '20 - 30 days', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive cargo' },
        { mode: 'Air to neighbour + truck', time: '4 - 10 days', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: '5 - 12 days', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle Ukraine-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. Because of the war, the practical gateways for Ukraine are EU ports: Gdansk and Gdynia in Poland and Constanta in Romania, where cargo clears EU transit and then crosses the border to Lviv, Kyiv, and beyond by road or rail. Ukraine’s own Black Sea ports at Odesa, Chornomorsk, and Pivdennyi operate under a sea corridor but carry security risk, so direct calls are limited. There is no direct air gateway, since the airspace is closed; air cargo lands at Warsaw, Krakow, Rzeszow, or Chisinau and is trucked in. You can browse the specific city-to-city routes we run below and open any one for its own transit times and details.',
      customs: {
        summary:
          'Ukraine uses its own customs system and applies 20 percent VAT plus duty, with some wartime measures in place. Here is what applies when you import from China. The bigger planning issues on this lane are routing and security rather than the tariff, so confirm the route and the consignee’s setup before you ship.',
        points: [
          'Import VAT is 20 percent, charged on the customs value plus duty (and excise where it applies), with reduced rates on a few goods such as some medicines. VAT-registered importers can reclaim it, though refunds can be slow under martial law.',
          'Customs duty is charged on the customs value (CIF basis, the goods plus freight and insurance to the Ukrainian border), at rates set by HS code and origin. Most rates are a percentage of value.',
          'Under martial law Ukraine has used temporary measures, including duty and VAT relief on certain goods and faster clearance for some categories. The rules change often, so confirm the current status before you quote.',
          'Goods usually clear EU transit at the Polish or Romanian gateway port and then complete Ukrainian customs at the border, so clean paperwork keeps the cross-border move smooth.',
          'The importer must be registered with the Ukrainian tax authorities and VAT-registered to reclaim import VAT, and files an electronic customs declaration with the State Customs Service.',
          'Core documents are the commercial invoice, packing list, transport document (bill of lading, rail consignment note, or CMR for the road leg), contract, and certificate of origin where a preference is claimed.',
          'Wood pallets and crates must meet the ISPM-15 heat-treatment standard and carry the stamp for both the EU transit and Ukrainian entry.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), is the most practical way to ship to Ukraine right now, because it bundles the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg to the EU gateway, the EU transit, the border crossing, Ukrainian customs, duty, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the ports, the border, or the paperwork yourself. Given the wartime routing and the border step, that single point of responsibility removes a lot of risk. The consignee still needs to be a registered Ukrainian importer. The alternative, FOB or CIF to an EU port, leaves the overland leg, border crossing, and Ukrainian clearance for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier’s city in China, and your Ukrainian delivery address.',
        'We recommend the best route given the current situation (sea via Gdansk or Constanta plus overland, rail to a border hub, or air to a neighbour plus truck) and quote your options.',
        'We confirm the consignee is a registered Ukrainian importer and check any current wartime relief that applies to your goods.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to a Polish or Romanian port, clears EU transit, and crosses the border to Lviv, Kyiv, or your destination by road or rail; air cargo flies to a neighbouring hub and is trucked in.',
        'We complete Ukrainian customs, handle duty and VAT, and deliver to your door. With DDP, the whole route and the charges are already handled.',
      ],
      faqs: [
        {
          question: 'How does shipping from China to Ukraine work during the war?',
          answer:
            'Most cargo travels by sea to a Polish port like Gdansk or a Romanian port like Constanta, clears EU transit, and then crosses the border into Ukraine by road or rail to Lviv, Kyiv, and beyond. Ukraine’s own Black Sea ports operate but carry security risk, so the overland route is the practical default.',
        },
        {
          question: 'Can I ship by air directly to Ukraine?',
          answer:
            'No. Ukrainian airspace has been closed to civil aviation since 2022, so there is no direct air freight into Kyiv or Lviv. Air cargo flies to a neighbouring hub such as Warsaw, Krakow, Rzeszow, or Chisinau and is then trucked across the border, which adds 1 to 3 days for the crossing.',
        },
        {
          question: 'How long does shipping from China to Ukraine take?',
          answer:
            'By sea and overland it is about 40 to 55 days via Poland and 35 to 50 via Romania, including the longer 2026 ocean leg and the border crossing. Rail plus onward truck is about 20 to 30 days, and air to a neighbouring hub plus trucking in is about 4 to 10 days. Border queues and the security situation can add time.',
        },
        {
          question: 'How much does it cost to ship from China to Ukraine?',
          answer:
            'As an indicative guide, sea freight is roughly $2,400 to $3,000 for a 20ft container to a Polish or Romanian port, plus about $700 to $1,500 or more for the onward overland leg into Ukraine. LCL is about $40 to $90 per cubic meter to the EU port. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'Are Ukraine’s Black Sea ports open?',
          answer:
            'Odesa, Chornomorsk, and Pivdennyi do operate under a Ukrainian-run sea corridor, but they remain under attack, so the security risk and war-risk insurance make direct container calls limited and route-dependent. Most importers route via an EU port and bring goods in overland instead.',
        },
        {
          question: 'What is the cheapest way to ship from China to Ukraine?',
          answer:
            'Sea freight to a Polish or Romanian port plus overland delivery is the cheapest per unit. A shared container (LCL) is cheapest for small loads under about 15 CBM, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Rail is a faster middle option.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Ukraine?',
          answer:
            'Duty is charged on the customs value (CIF basis) at rates set by HS code, and 20 percent import VAT applies on the customs value plus duty. Under martial law some goods get temporary duty or VAT relief, so confirm the current status. VAT-registered importers can reclaim VAT, though refunds can be slow.',
        },
        {
          question: 'What documents do I need to import from China to Ukraine?',
          answer:
            'You need a commercial invoice, packing list, a transport document (bill of lading, rail consignment note, or CMR for the road leg), the contract, and a certificate of origin where a preference is claimed. The importer must be registered with the Ukrainian tax authorities, and wood packaging must be ISPM-15 compliant.',
        },
      ],
    },
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
    description: 'Ocean shipping from China to UK with reliable services to Felixstowe, Southampton, Liverpool, and more.',
    majorPorts: ['Felixstowe', 'Southampton', 'London Gateway', 'Liverpool', 'Teesport', 'Grangemouth', 'Belfast', 'South Shields'],
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
  {
    slug: 'sea-freight-from-china-to-sweden',
    country: 'Sweden',
    description: 'Ocean freight to Sweden via Gothenburg, Helsingborg, and other major Swedish ports.',
    majorPorts: ['Gothenburg', 'Helsingborg', 'Norrkoeping', 'Gaevle', 'Halmstad'],
    transitTime: '30-39 days',
  },
  {
    slug: 'sea-freight-from-china-to-czech-republic',
    country: 'Czech Republic',
    description: 'Ocean freight to Czech Republic via inland terminals at Paskov and Melnik.',
    majorPorts: ['Awt Paskov', 'Melnik'],
    transitTime: '35-42 days',
  },
  {
    slug: 'sea-freight-from-china-to-norway',
    country: 'Norway',
    description: 'Ocean freight to Norway with services to 18 ports along the Norwegian coastline.',
    majorPorts: ['Oslo', 'Bergen', 'Stavanger', 'Drammen', 'Kristiansand', 'Haugesund'],
    transitTime: '32-40 days',
  },
];

export function getSeaFreightCountryBySlug(slug: string): SeaFreightCountry | undefined {
  return seaFreightCountries.find((c) => c.slug === slug);
}

export function getAllSeaFreightCountrySlugs(): string[] {
  return seaFreightCountries.map((c) => c.slug);
}
