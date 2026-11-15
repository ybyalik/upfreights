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
  /** Official pages that back the facts kept in this guide (added November 2026). */
  sources?: { label: string; url: string }[];
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
    description: 'Sea and air freight from China to Australia, into ports such as Sydney, Melbourne, Brisbane, and Fremantle. FCL, LCL, express, customs clearance and door-to-door delivery.',
    majorPorts: ['Sydney', 'Melbourne', 'Brisbane', 'Fremantle'],
    transitTime: '',
    popularGoods: ['Electronics', 'Furniture', 'Consumer Goods', 'Machinery', 'Textiles'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Australia: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Australia: sea, air and express options, the main ports, GST, ChAFTA duty rules and biosecurity. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Australia moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Australian ports such as Sydney, Melbourne, Brisbane, and Fremantle. Sea is the cheapest and slowest, air and express are faster. GST of 10% applies to imported goods, and Chinese-origin goods can claim a lower duty rate under the China-Australia Free Trade Agreement (ChAFTA) if you hold a certificate or declaration of origin. Australia\'s biosecurity rules are strict.',
      intro:
        'If you import from China, Australia is a lane with two things worth knowing up front: a free trade agreement can lower your duty, and biosecurity checks are strict. This guide covers how pricing works, how the shipping options compare, which ports your cargo moves through, and the customs, GST, and biosecurity rules you need to plan for. As a freight forwarder, we move cargo on this lane every week. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy but takes the longest. Air freight costs more but arrives much sooner. The right choice comes down to how fast you need the goods and how much they weigh and measure. On cost, the China-Australia Free Trade Agreement (ChAFTA) gives Chinese-origin goods a preferential duty rate, but only if you hold a certificate or declaration of origin when the goods are imported. Request a live quote any time and we will price your exact shipment for your dates.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, the port, and the season. Rates move week to week, so we quote each shipment for your exact cargo, ports, and dates.',
        factors: [
          'Port: the Australian port you ship into changes the sailing and the inland delivery cost, so pick the one closest to where the goods are going.',
          'Season: demand, and so rates, tend to rise before Chinese New Year and in the busy months before Christmas.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles customs, GST, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include GST, duty, the import processing charge, biosecurity fees, or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Australia shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL takes longer than FCL, because the cargo has to be grouped with other shipments before sailing and split out again on arrival. Where your cargo lands changes the timing. The east coast ports of Sydney, Melbourne, and Brisbane serve most of the population, while Fremantle serves Perth and Western Australia. Timing depends on the line, the origin port, and the Australian port, so we confirm it for your sailing when we quote. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Australian airports such as Sydney and Melbourne. It costs much more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric (dimensional) weight, so bulky-but-light cargo is charged on its size. Per-kg rates usually fall as the shipment gets heavier. For most importers, air makes sense when arriving sooner is worth the premium, and when it is not, sea freight moves the same goods for far less. We can quote both side by side so the trade-off is clear.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Australia. As shipments get heavier, standard air freight usually becomes the cheaper fast option, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL (Fremantle)', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Perth and Western Australia' },
        { mode: 'Sea freight, FCL (East coast)', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Sydney, Melbourne, Brisbane' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao handle much of the Australia-bound cargo, with South China factories usually shipping via the Pearl River Delta and East China via Shanghai or Ningbo. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Australian side, the main container ports include Sydney (Port Botany), Melbourne, Brisbane, and Fremantle. The Port Authority of NSW says over 2.8 million containers move through Port Botany each year. In the west, more than 99 per cent of Western Australia\'s container trade arrives through Fremantle, according to the WA Government\'s Westport program. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Australia has two things to plan for: a free trade agreement can lower your duty, and biosecurity is taken very seriously. Here is what applies when you import from China. The duty position depends on having the right origin paperwork, so it is worth getting this right before you ship.',
        points: [
          'GST is 10% of the value of the taxable importation. That value is the customs value of the goods, plus any duty, plus the cost to transport and insure the goods to Australia. Some importers can defer GST on imports; ask your accountant whether this suits you.',
          'Under the China-Australia Free Trade Agreement (ChAFTA), Chinese-origin goods can get a preferential duty rate. To claim it you must hold a certificate of origin or a declaration of origin when the goods are imported. If the claim fails, the general rate of duty is payable instead.',
          'Goods worth over AUD1,000 need an Import Declaration (N10), usually lodged by a licensed customs broker, and you must pay all duties, taxes, and charges, including an import processing charge, before the goods are released. For most goods worth AUD1,000 or less there are no duties, taxes, or charges to pay at the border, though alcohol and tobacco are taxed whatever their value.',
          'Dumping and countervailing duties may be collected on certain imported goods, so check your product before you order.',
          'Biosecurity checks are strict, and some goods need a permit or treatment before they can enter. Ask us to check the import conditions for your product before you ship, and ask your supplier to use treated and marked wood packaging.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, and the certificate or declaration of origin for the ChAFTA rate. The importer or their broker pays duty, GST, charges, and any biosecurity fees before the goods are released.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Australian customs and biosecurity, GST and any duty, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs and biosecurity setup, and we can also help with the ChAFTA origin paperwork so you claim the preferential rate. The alternative, FOB or DAP, leaves some of the clearance, duty, or delivery for you to arrange. For most Australian importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Australian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'We help you get a ChAFTA certificate or declaration of origin so your goods can claim the preferential duty rate, and check the biosecurity conditions for your product.',
        'We arrange pickup from your supplier and handle export clearance in China, and ask the supplier to use treated wood packaging.',
        'Your cargo sails or flies from the origin port, for example Shanghai, Shenzhen, or Guangzhou, to an Australian gateway such as Sydney, Melbourne, or Fremantle.',
        'We clear customs and biosecurity, pay GST and any duty and charges, and deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How long does shipping take from China to Australia?',
          answer:
            'It depends on the mode, the line, and the port. Sea freight is the slowest and air and express are much faster. Fremantle and the east coast ports are served by different sailings, so we confirm the timing for your sailing when we quote. Allow extra time for customs, biosecurity, and final delivery.',
        },
        {
          question: 'How much is shipping from China to Australia?',
          answer:
            'It depends on the mode, the size and weight of your cargo, the port, and the season, and rates move week to week. We quote each shipment for your exact cargo and dates. GST, any duty, and import charges are extra, and ChAFTA can lower the duty if you hold origin paperwork.',
        },
        {
          question: 'How long does sea freight take from China to Australia?',
          answer:
            'It depends on the line and the port, so we confirm it for your sailing when we quote. Shared-container (LCL) cargo takes longer than a full container, because it has to be grouped with other cargo before sailing and split out again on arrival.',
        },
        {
          question: 'What is the cheapest way to ship from China to Australia?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill most of it. We quote both so you can compare.',
        },
        {
          question: 'How much does it cost to ship a full container from China to Australia?',
          answer:
            'Container rates depend on the ports, the season, and the market, and they change week to week. Ask us for a live quote for your container size, ports, and dates.',
        },
        {
          question: 'What is the fastest way to ship from China to Australia?',
          answer:
            'Express courier is usually fastest for small parcels, followed by air freight. Sea freight is much slower but far cheaper for larger shipments.',
        },
        {
          question: 'What is the air freight cost from China to Australia per kg?',
          answer:
            'Air freight is priced on chargeable weight, the greater of actual and volumetric weight, and the rate per kilo usually falls as the shipment gets heavier. We quote each air shipment for your weight, size, and dates.',
        },
        {
          question: 'Do I pay GST and import duty when shipping from China to Australia?',
          answer:
            'GST of 10% applies to the value of the taxable importation, which includes the goods, any duty, and the transport and insurance to Australia. Chinese-origin goods can get a preferential duty rate under ChAFTA if you hold a certificate or declaration of origin; without it, the general rate applies. Goods worth over AUD1,000 also need a formal Import Declaration and an import processing charge.',
        },
        {
          question: 'What is the China to Australia shipping route, and which ports?',
          answer:
            'Cargo usually leaves Shanghai, Ningbo, Shenzhen, or Guangzhou and arrives at an Australian port such as Sydney, Melbourne, Brisbane, or Fremantle. The best port is usually the one closest to where your goods are going.',
        },
        {
          question: 'Which is cheaper for shipping from China to Australia, FCL or LCL?',
          answer:
            'LCL (shared container) is usually cheaper for small loads, because you pay only for the space you use. Once you have enough to fill most of a container, a full container (FCL) is usually cheaper per unit and faster. We quote both so you can see the crossover for your shipment.',
        },
      ],
      sources: [
        { label: 'Australian Border Force: GST and other taxes', url: 'https://www.abf.gov.au/importing-exporting-and-manufacturing/importing/cost-of-importing-goods/gst-and-other-taxes' },
        { label: 'Australian Border Force: Import declarations', url: 'https://www.abf.gov.au/imports/Pages/How-to-import/Import-declarations.aspx' },
        { label: 'Australian Border Force: Other importing charges', url: 'https://www.abf.gov.au/importing-exporting-and-manufacturing/importing/cost-of-importing-goods/charges' },
        { label: 'Australian Border Force: ChAFTA rules of origin instruction and guideline', url: 'https://www.abf.gov.au/free-trade-agreements/files/instructions-guidelines-australia-china-fta.pdf' },
        { label: 'Port Authority of NSW: Annual Report 2024-25', url: 'https://www.portauthoritynsw.com.au/sites/default/files/2025-12/Port%20Authority%20of%20NSW%20Annual%20Report%202024-25.pdf' },
        { label: 'Westport (WA Government): Why Westport', url: 'https://westport.wa.gov.au/about/why-westport' },
      ],
    },
  },
  {
    slug: 'shipping-china-to-belgium',
    name: 'Belgium',
    code: 'BE',
    description: 'Sea and air freight from China to Belgium through the Port of Antwerp-Bruges, which covers Antwerp and Zeebrugge. FCL, LCL, express, customs clearance and door-to-door delivery.',
    majorPorts: ['Antwerp', 'Zeebrugge'],
    transitTime: '',
    popularGoods: ['Electronics', 'Textiles', 'Machinery', 'Consumer Goods', 'Chemicals'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Belgium: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Belgium: sea, air and express options, the Port of Antwerp-Bruges, and Belgian VAT and EU customs rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Belgium moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at the Port of Antwerp-Bruges, the joint name for the ports of Antwerp and Zeebrugge. Sea is the cheapest and slowest, air and express are faster. Belgian VAT at the standard 21 percent rate and any EU duty apply, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Belgium, or into Europe through Belgium, your sea cargo will most likely land at the Port of Antwerp-Bruges. This guide covers how pricing works, how the shipping options compare, which ports your cargo moves through, and the Belgian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy but takes the longest. Air freight costs more but arrives much sooner. Belgium is in the EU, so you need an EORI number to clear customs and should plan for VAT at the standard 21 percent rate plus any duty. Request a live quote any time and we will price your exact shipment for your dates.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, and the season. Rates move week to week, so we quote each shipment for your exact cargo, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Season: demand, and so rates, tend to rise before Chinese New Year and in the autumn peak before the holidays.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time and the cost; ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include import VAT, duty, or the customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the cheapest way to move anything large or heavy from China. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL takes longer than FCL, because the cargo has to be grouped with other shipments before sailing and split out again on arrival. For Belgium, the ship usually calls at Antwerp or Zeebrugge, which now operate together as the Port of Antwerp-Bruges. Timing depends on the line and the route, so we confirm it for your sailing when we quote. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Brussels or Liège. It costs much more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates usually fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Belgium. As shipments get heavier, standard air freight usually becomes the cheaper fast option, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any urgent shipment.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Belgium-bound containers. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the Belgian side, the ports of Antwerp and Zeebrugge operate under one name, Port of Antwerp-Bruges, so a booking to either goes through the same port company. From there, goods go on by truck or other inland transport to the rest of Belgium and beyond. For air freight, Brussels Airport and Liège Airport both handle cargo. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Belgium is in the EU, so the EU customs tariff applies, and EU tariff measures apply the same way in every EU country. Plan every commercial shipment around import VAT and any duty. Duty depends on your exact product, so confirm the rate for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'The standard VAT rate in Belgium is 21 percent. Plan for import VAT as well as any duty, and ask your accountant how your business accounts for it.',
          'EU customs duty is set by your product\'s commodity code. The EU\'s TARIC database gives an overview of the requirements for importing your goods into the EU, so look up your code there, or ask us, before you ship.',
          'You need an EORI number to import into the EU. One EORI number is valid throughout the EU, so you only need one even if you clear goods in more than one EU country.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Ask your supplier to use wood pallets and crates that are treated and stamped to ISPM 15, the international standard for wood packaging, so the packaging does not cause problems at the border.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Belgian and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For many Belgian importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record and handle import VAT themselves.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Belgian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from the origin port, for example Shanghai, Ningbo, or Shenzhen, to Antwerp, Zeebrugge, Brussels, or Liège.',
        'We file the Belgian customs declaration, pay duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Belgium?',
          answer:
            'It depends on the method, the size and weight of your shipment, and the season. Sea freight is priced per container or per cubic meter, and air and express per kilo of chargeable weight. VAT and any duty are extra. We quote each shipment for your exact cargo and dates.',
        },
        {
          question: 'How long does shipping from China to Belgium take?',
          answer:
            'Sea freight is the slowest option, air freight is much faster, and express courier is the fastest. Sea timing depends on the line and on whether it routes via the Suez Canal or round Africa. We confirm the timing for your shipment when we quote.',
        },
        {
          question: 'Why is Antwerp a good port for China imports?',
          answer:
            'Antwerp and Zeebrugge now operate together as the Port of Antwerp-Bruges, so Belgian importers have two port platforms under one port company. Tell us your delivery point and we will suggest the best landing port.',
        },
        {
          question: 'Is Zeebrugge part of the Port of Antwerp-Bruges?',
          answer:
            'Yes. The ports of Antwerp and Zeebrugge operate under one name, Port of Antwerp-Bruges. If your line calls at Zeebrugge instead of Antwerp, it is still the same port company.',
        },
        {
          question: 'What is the cheapest way to ship from China to Belgium?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper per unit once you have enough volume to fill most of it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Belgium?',
          answer:
            'Yes. Any trader who imports goods into the EU needs an EORI number, and it is valid throughout the EU. We can guide you through getting one before your first shipment.',
        },
        {
          question: 'Can I use Belgium as a distribution gateway for Europe?',
          answer:
            'Yes. Many importers land goods at Antwerp-Bruges and send them on to other EU countries. The EU tariff applies the same way in every EU country, so the duty does not change with the country where you clear. Tell us where the goods are going and we will plan the routing.',
        },
        {
          question: 'What documents do I need to import from China to Belgium?',
          answer:
            'The core documents are the commercial invoice, the packing list, and the bill of lading for sea or the air waybill for air, plus your EORI number. Some goods need extra certificates or licences, so tell us what you are shipping and we will check.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rules and rates', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'Irish Revenue: EORI system (EORI valid throughout the EU)', url: 'https://www.revenue.ie/en/customs/businesses/electronic-systems/eori-system.aspx' },
        { label: 'European Commission: EU Customs Tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/customs-4/calculation-customs-duties/customs-tariff/eu-customs-tariff-taric_en' },
        { label: 'Irish Department of Agriculture: Wood packaging material and ISPM 15', url: 'https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/publications/wood-packaging-material-and-ispm-15/' },
        { label: 'Port of Antwerp-Bruges: merger press release', url: 'https://newsroom.portofantwerpbruges.com/en/press-releases/merger-of-the-ports-of-antwerp-and-zeebrugge-creates-europes-largest-export-port' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-brazil',
    name: 'Brazil',
    code: 'BR',
    description: 'Sea freight from China to Brazil via Santos, Rio de Janeiro and Paranaguá. FCL, LCL, air, express and customs clearance for Brazilian imports.',
    majorPorts: ['Santos', 'Rio de Janeiro', 'Paranaguá'],
    transitTime: '',
    popularGoods: ['Electronics', 'Machinery', 'Textiles', 'Consumer Goods', 'Auto Parts'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Brazil: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Brazil: sea, air and express freight, Santos and other ports, Brazil\'s layered import taxes and Siscomex registration. Free quote.',
      answerCapsule:
        'Shipping from China to Brazil moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Santos, which its port authority calls the largest port complex in Latin America, or at Paranaguá and Itajaí. Sea freight is the cheapest and slowest on this long haul, air is faster and dearer, and we quote the timing for your exact sailing or flight. Brazil\'s import taxes are layered, and importers must be registered (habilitação) to use the Siscomex customs system, so plan landed cost carefully.',
      intro:
        'If you import from China into Brazil, the freight is the easy part: the hard part is Brazil\'s stacked import taxes and its customs registration. This guide covers what drives the cost of shipping from China to Brazil, how the options compare on speed, which ports your cargo moves through, and the Brazilian import rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy, but this is a long haul. Air freight costs more but arrives much sooner. The most important thing for Brazil: the import taxes (import duty, IPI, PIS/Cofins-Importação, and state ICMS) build on each other and can add a lot to your landed cost, and you cannot import through Siscomex without first registering (habilitação, known as Radar Siscomex). Sort those out first, then request a live quote and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. Freight is only part of the bill: Brazilian import taxes are paid on top and are often a large share of landed cost. Ocean and air rates move with the market, so request a live quote and we will price your exact shipment, ports, and dates.',
        factors: [
          'Import taxes are often a bigger cost than freight: import duty, IPI, PIS/Cofins-Importação, and state ICMS all apply, and some are worked out on top of the others.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing: this is a long haul, and lines can route via different oceans and canals, which changes the transit time; ask us which way your sailing goes.',
          'Customs: Brazilian clearance is document-sensitive, so build in buffer time.',
          'Service level: door-to-door (DDP) bundles freight, taxes, and delivery into one price, which removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Brazil\'s import taxes (import duty, IPI, PIS/Cofins-Importação, and ICMS) or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Brazil shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which pays off once you have enough cargo to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. This is one of the longest lanes from China, and lines can route round the Cape of Good Hope or by other routes, which changes the transit time, so ask us which way your sailing goes. LCL takes extra time for consolidation and unpacking. Cargo arrives at Santos, the main gateway serving São Paulo, with Paranaguá, Itajaí, Navegantes, and Rio de Janeiro as alternatives. Brazilian customs is document-sensitive, so build in buffer time. For smaller loads LCL is usually cheaper, and once you can fill most of a box a full container wins. We quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters on this long lane. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to São Paulo Guarulhos, often via a hub in another country. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for a fraction of the cost, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Brazil, though the import taxes still apply. Once a shipment gets heavier, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao are the usual starting points for Brazil-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Brazilian side, the Port of Santos says it is the largest port complex in Latin America, and it is the main gateway for São Paulo and the industrial southeast. Paranaguá in the south, Itajaí and Navegantes in Santa Catarina, and Rio de Janeiro are alternatives. The main air gateway is São Paulo Guarulhos. For cargo not bound for São Paulo, another port can save inland transport. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Brazilian customs is where this lane gets complicated. The import taxes build on each other, and you cannot clear anything without the right registration. Here is what applies. The key is to model your full landed cost, not just the freight, before you order.',
        points: [
          'Import Duty (II) is worked out by applying the Mercosur Common External Tariff (TEC) rate for your product to the customs value of the goods.',
          'IPI (a federal tax on manufactured goods) is charged on the customs value plus the import duty, at the rate in the IPI table (TIPI) for your product.',
          'PIS-Importação and Cofins-Importação are federal contributions. Receita Federal says that in almost all imports the rates are 2.10 percent for PIS and 9.65 percent for Cofins, with some exceptions set by law.',
          'ICMS is a state tax. Each state sets its own rates, which Receita Federal says can range from zero for essential goods up to 25 percent in some cases. The ICMS base adds up the customs value, II, IPI, the ICMS itself, other import taxes and customs costs such as storage and handling.',
          'Before importing through Siscomex, the importer must be registered to use the system (habilitação, known as Radar Siscomex) with Receita Federal. It is a common first-time blocker, so arrange it before the goods ship.',
          'Customs clearance is processed in the Siscomex system. Core documents are the commercial invoice, packing list, bill of lading or air waybill, and the import declaration, plus a certificate of origin where relevant and product licences for regulated goods.',
          'Ask us to confirm the rules for wood pallets and crates before your goods are loaded.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Brazilian customs and the import taxes, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. Because Brazil\'s import taxes are heavy and the clearance is complex, having a clear all-in price up front avoids surprises, but the consignee still needs its Siscomex registration (habilitação) as the Brazilian importer, since the import rights sit with them. The alternative, FOB or CIF, leaves the Brazilian clearance, taxes, and delivery for you to arrange through a local broker. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Brazilian delivery address.',
        'Make sure the importer is registered (habilitação) with Receita Federal to use Siscomex, and we help you estimate the full landed cost including the import taxes.',
        'We quote your options (sea FCL, sea LCL, air, or express) with prices and timing for your dates, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Santos, Paranaguá, or Itajaí, or flies into São Paulo Guarulhos.',
        'We file the import declaration in Siscomex, handle the import taxes, and clear your shipment, then deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Brazil?',
          answer:
            'It depends on the method, the size of your shipment, and the season. Sea freight is the cheapest per unit and air costs more per kilo. Brazil\'s import taxes are paid on top and are often a large part of the cost. Request a live quote for your exact cargo.',
        },
        {
          question: 'Why are import taxes so high in Brazil?',
          answer:
            'Brazil charges several taxes on imports. Import duty is charged on the customs value, IPI on the customs value plus duty, PIS and Cofins-Importação on the customs value, and state ICMS on a base that includes all of these and the ICMS itself. Together they can add a lot to your landed cost, so model the full cost before you order.',
        },
        {
          question: 'How long does shipping from China to Brazil take?',
          answer:
            'Sea freight is the slowest option on this long haul, and the route a line takes changes the transit time. Air and express are much faster. Brazilian customs adds time on top. We give you the timing for your exact sailing or flight when we quote.',
        },
        {
          question: 'Do I need a RADAR licence to import into Brazil?',
          answer:
            'Yes. Radar Siscomex is the registration (habilitação) with Receita Federal that lets a company operate in foreign trade. Receita Federal says that to import goods through Siscomex, the importer must first arrange its registration to use the system, though some types of operation are exempt. Arrange it before the goods ship.',
        },
        {
          question: 'What is the cheapest way to ship from China to Brazil?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time on this long lane.',
        },
        {
          question: 'Which Brazilian port should I ship into?',
          answer:
            'Santos is the largest port complex in Latin America according to its port authority, and the main gateway for São Paulo. Paranaguá, Itajaí, and Navegantes in the south are alternatives, and Rio de Janeiro serves the southeast. The best choice depends on where your goods are going, since inland transport is part of the total cost.',
        },
        {
          question: 'How long does Brazilian customs clearance take?',
          answer:
            'It varies. Clearance runs through the Siscomex system, and clean documents keep it moving, while errors or inspections slow it down. This is why a registered importer and accurate paperwork matter so much.',
        },
        {
          question: 'What documents do I need to import from China to Brazil?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, and the import declaration filed in Siscomex, plus a certificate of origin where relevant and product licences for regulated goods. The importer needs its Siscomex registration (habilitação).',
        },
      ],
      sources: [
        { label: 'Receita Federal: Simulador glossary (import taxes)', url: 'https://www4.receita.fazenda.gov.br/simulador/glossario.html' },
        { label: 'Receita Federal: Habilitação (import clearance manual)', url: 'https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/despacho-de-importacao/topicos-1/Habilitacao%20e%20Credenciamento/habilitacao' },
        { label: 'Receita Federal: Manual de Habilitação no Siscomex', url: 'https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/manuais/habilitacao' },
        { label: 'Siscomex: Etapas da operacionalização da exportação (Radar Siscomex)', url: 'https://www.gov.br/siscomex/pt-br/servicos/aprendendo-a-exportar/9-operacionalizacao-da-exportacao/etapas-da-operacionalizacao-da-exportacao' },
        { label: 'Port of Santos: Conheça o Porto', url: 'https://www.portodesantos.com.br/conheca-o-porto/' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-canada',
    name: 'Canada',
    code: 'CA',
    description: 'Sea and air freight from China to Canada, through Vancouver, Montreal and Halifax and by rail to Toronto. FCL, LCL, express, customs clearance and door-to-door delivery.',
    majorPorts: ['Vancouver', 'Toronto', 'Montreal', 'Halifax'],
    transitTime: '',
    popularGoods: ['Consumer Goods', 'Machinery', 'Furniture', 'Electronics', 'Textiles'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Canada: Cost & Transit Times',
      metaDescription:
        'Shipping from China to Canada: compare sea, air and express freight, ports, and Canadian customs, duty, GST and CARM rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Canada moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Canadian gateways such as Vancouver, Prince Rupert, and Montreal. Sea freight is the cheapest and slowest, air is faster and dearer, and we quote the timing for your exact sailing or flight. Canadian duty and 5 percent GST apply on arrival, and every importer needs a business number and a CARM account.',
      intro:
        'If you import from China, Canada is a lane where the routing and the customs setup matter as much as the freight rate. This guide covers what drives the cost of shipping from China to Canada, how the options compare on speed, which ports your cargo moves through, and the Canadian customs and tax rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy, and the West Coast is the shorter sea leg from Asia. Air freight costs more but lands much sooner. The right choice comes down to how fast you need the goods, how much they weigh and measure, and whether they are headed to the West, the East, or central Canada. One thing every Canadian importer must sort out first: the CBSA says all importers of commercial goods need a CARM account and a business number with an import program account. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the coast you ship to, and the season. Ocean and air rates move with the market, so we do not print fixed prices here. Request a live quote and we will price your exact shipment, ports, and dates.',
        factors: [
          'Coast: West Coast ports (Vancouver, Prince Rupert) are the shorter sea leg from Asia; all-water service to Montreal or Halifax is a longer voyage.',
          'Season: rates climb before Chinese New Year and again in the autumn pre-holiday peak.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, GST, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Canadian customs duty, 5 percent GST, or the forwarder\'s clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Canada shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which pays off once you have enough cargo to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. Where your cargo lands matters in Canada. West Coast ports (Vancouver and Prince Rupert) are the closest to Asia, then cargo moves inland by rail to Alberta, the Prairies, and central Canada. For Ontario, Quebec, and the Atlantic, you can route West Coast plus rail, or all-water to Montreal or Halifax, which is a longer voyage but can avoid the long rail leg. LCL takes extra time for consolidation and unpacking. For smaller loads LCL is usually cheaper, and once you can fill most of a box a full container wins. We quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen to Canadian gateways such as Toronto Pearson, Vancouver, and Montreal. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric (dimensional) weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier, so larger air shipments earn a better rate per kilo. For most importers, air makes sense when arriving weeks sooner is worth the premium, and when it is not, sea freight moves the same goods for a fraction of the cost. We can quote both side by side so the trade-off is clear.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Canada. Once a shipment gets heavier, standard air freight usually becomes cheaper while still being fast, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL (West Coast)', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'BC, Alberta, Prairies, central Canada by rail' },
        { mode: 'Sea freight, FCL (East Coast)', time: 'Quoted per sailing', indicativeCost: 'Low', bestFor: 'Ontario, Quebec, Atlantic Canada' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao are the usual starting points for Canada-bound containers. For air freight, the main gateways are Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen. On the Canadian side, Vancouver is the main West Coast gateway and is served by three Class 1 railways, CN, CPKC and BNSF. The Port of Prince Rupert describes itself as North America\'s closest port to Asia. For the east, Montreal serves Quebec and Ontario, and the Halifax terminal operator says it is the only port on Canada\'s East Coast that can handle ships of up to 18,000 TEU (twenty-foot container units). Toronto is an inland destination reached by rail or truck rather than a seaport. The main air gateways are Toronto Pearson and Vancouver. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Canadian customs is manageable, but two things catch first-time importers: plan for duty and GST on goods from China, and set up your own importer account before the goods arrive. Here is what applies. Duty rates depend on your exact product, so confirm the rate for your goods\' classification before you ship.',
        points: [
          'Duty is set by your product\'s tariff classification number (HS code) and the tariff treatment for its country of origin. In the CBSA\'s list of countries and tariff treatments, China is listed only for the Most-Favoured-Nation (MFN) tariff, so goods from China pay MFN rates. Many goods are duty-free; check the rate for your HS code.',
          'A surtax can be charged on top of customs duty under the Customs Tariff, usually as a temporary emergency measure. Check whether any surtax order covers your product.',
          'Federal GST of 5 percent is charged on the total value of the goods plus any duty.',
          'To import commercial goods, all importers need an account in the CBSA\'s CARM Client Portal, a 9-digit business number (BN9) and an import program (RM) account. Non-resident importers get their business number from the Canada Revenue Agency first.',
          'You can file your own release and accounting documents with the CBSA, or delegate the work to a licensed customs broker through CARM.',
          'Core documents are the commercial invoice (or Canada Customs Invoice), packing list, and bill of lading or air waybill, plus any permits, certificates or licences that other government departments require for regulated goods.',
          'Wood packaging such as pallets and crates from China must be made of debarked wood, treated by an approved method, and carry the IPPC mark, under the CFIA\'s ISPM 15 rules. Confirm with your supplier before the goods are loaded.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Canadian customs including duty and GST, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup, though you will still need your own business number and CARM account to be the importer of record. The alternative, FOB or DAP, leaves some of the clearance, duty, or delivery for you to arrange. For most Canadian SME importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Canadian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with prices and timing for your dates, and you pick one.',
        'Make sure you have a business number with an import program account and a CARM account; we can point you in the right direction if you do not.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from the origin port, for example Shanghai, Ningbo, or Shenzhen, to a Canadian gateway such as Vancouver, Prince Rupert, or Montreal.',
        'We file the customs declaration, pay duty and GST, and clear your shipment, then deliver to your door. With DDP, duty, taxes, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How long does shipping from China to Canada take?',
          answer:
            'It depends on the mode and the coast. Sea freight to the West Coast (Vancouver or Prince Rupert) is quicker than all-water to Montreal or Halifax, and air and express are much faster than sea. Customs clearance adds time on top. We give you the timing for your exact sailing or flight when we quote.',
        },
        {
          question: 'How much is shipping from China to Canada?',
          answer:
            'It depends on the method, the size of your shipment, the coast, and the season. Sea freight is the cheapest per unit and air costs more per kilo. Duty and 5 percent GST are extra. Rates change with the market, so request a live quote for your exact cargo.',
        },
        {
          question: 'How much is shipping from China to Canada per kg?',
          answer:
            'Air freight is priced per kg on chargeable weight, and the rate per kilo falls as the shipment gets heavier. Sea freight is priced per container or per cubic meter rather than per kg, which works out far cheaper for heavy cargo. We quote your exact weight and dates.',
        },
        {
          question: 'How much does a 20ft or 40ft container from China to Canada cost?',
          answer:
            'Container prices change with the coast, the season, and the market. We quote each container for your ports and dates, so ask us for a live price.',
        },
        {
          question: 'What is the cheapest way to ship from China to Canada?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper per unit once you have enough volume to fill it. For western and central Canada, the West Coast route is usually the cheaper and faster one.',
        },
        {
          question: 'Do I need a customs broker to import from China to Canada?',
          answer:
            'No. The CBSA says you can prepare and submit your own release and accounting documents, but most importers use a licensed broker for the classification and filing. Either way, you need your own CARM account and business number, and you can delegate authority to a broker in the CARM Client Portal.',
        },
        {
          question: 'How much duty and tax will I pay importing from China to Canada?',
          answer:
            'Duty depends on your product\'s HS classification under the MFN tariff, and many goods are duty-free. A surtax can apply on top for some goods. Then 5 percent federal GST applies on the value of the goods plus duty. Our team or a broker can confirm your exact rate.',
        },
        {
          question: 'What documents do I need to import from China to Canada?',
          answer:
            'You need a commercial invoice (or Canada Customs Invoice), a packing list, and a bill of lading or air waybill, plus any permits or certificates other government departments require for regulated goods. You also need your own business number and CARM account as the importer of record.',
        },
        {
          question: 'Should I ship to the West Coast or the East Coast of Canada?',
          answer:
            'For British Columbia, Alberta, the Prairies, and much of central Canada, the West Coast (Vancouver or Prince Rupert) is usually the better route, then cargo moves inland by rail. For Ontario, Quebec, and Atlantic Canada, you can route West Coast plus rail or go all-water to Montreal or Halifax. We help you pick based on your delivery point.',
        },
        {
          question: 'How long is air freight from China to Canada?',
          answer:
            'Air freight to Toronto, Vancouver, or Montreal is far faster than sea, and the total time includes export handling, the flight, and customs clearance. Express courier is faster still for small parcels, but costs more per kilo. We quote the timing for your shipment.',
        },
      ],
      sources: [
        { label: 'CBSA: Guide to importing commercial goods, duties and taxes', url: 'https://www.cbsa-asfc.gc.ca/import/guide-3-eng.html' },
        { label: 'CBSA: Guide to importing commercial goods, set up your business', url: 'https://www.cbsa-asfc.gc.ca/import/guide-4-eng.html' },
        { label: 'CBSA: Guide to importing commercial goods, release and payment', url: 'https://www.cbsa-asfc.gc.ca/import/guide-6-eng.html' },
        { label: 'CBSA: Customs Tariff 2026, countries and tariff treatments', url: 'https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/2026/html/countries-pays-eng.html' },
        { label: 'CFIA: D-98-08 entry requirements for wood packaging', url: 'https://inspection.canada.ca/en/plant-health/invasive-pests-and-plants/directives/forest-products/98-08' },
        { label: 'Port of Vancouver: 2024 key facts', url: 'https://www.portvancouver.com/sites/default/files/2025-03/2025-03-07%202024%20Key%20facts%20brochure_EN-web.pdf' },
        { label: 'Port of Prince Rupert', url: 'https://www.rupertport.com/' },
        { label: 'PSA: Halifax news release', url: 'https://www.globalpsa.com/wp-content/uploads/2026/05/nr260520.pdf' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-france',
    name: 'France',
    code: 'FR',
    description: 'Sea and air freight from China to France through Le Havre in the north and Marseille-Fos in the south. FCL, LCL, express, customs clearance and door-to-door delivery.',
    majorPorts: ['Le Havre', 'Marseille'],
    transitTime: '',
    popularGoods: ['Textiles', 'Electronics', 'Furniture', 'Consumer Goods', 'Machinery'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to France: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to France: sea, air and express options, Le Havre and Marseille-Fos, and French import VAT and EU customs rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to France moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Le Havre for the north or Marseille-Fos for the south. Sea is the cheapest and slowest, air and express are faster. French VAT at the standard 20 percent rate and any EU duty apply, and since 2022 businesses registered for VAT in France account for import VAT on their VAT return rather than paying it at the border.',
      intro:
        'If you import from China into France, one rule works in your favour: since 1 January 2022, businesses registered for VAT in France must account for import VAT themselves on their VAT return (autoliquidation), so you do not pay it in cash at the border. This guide covers how pricing works, how the shipping options compare, which ports your cargo moves through, and the French and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy but takes the longest. Air freight costs more but arrives much sooner. France is in the EU, so you need an EORI number to clear customs and should plan for VAT at the standard 20 percent rate plus any duty. Request a live quote any time and we will price your exact shipment for your dates.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, and the season. Rates move week to week, so we quote each shipment for your exact cargo, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Season: demand, and so rates, tend to rise before Chinese New Year and in the autumn peak before the holidays.',
          'Port choice: Le Havre on the Channel and Marseille-Fos on the Mediterranean sit on different sides of the country, so the right one depends on where the goods are going inland.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time and the cost; ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include import VAT, duty, or the customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the cheapest way to move anything large or heavy from China. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL takes longer than FCL, because the cargo has to be grouped with other shipments before sailing and split out again on arrival. For France, ships for the north and the Paris region usually call at Le Havre, while cargo for the south and the Rhône valley often lands at Marseille-Fos. Timing depends on the line, the route, and the port, so we confirm it for your sailing when we quote. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Paris Charles de Gaulle. It costs much more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates usually fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to France. As shipments get heavier, standard air freight usually becomes the cheaper fast option, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any urgent shipment.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of France-bound containers. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the French side, Le Havre sits on the Channel coast and is the natural gateway for northern France and Paris. Marseille-Fos, on the Mediterranean, describes itself as France\'s leading port and serves the south. Dunkirk is another northern option. Paris Charles de Gaulle is the usual air gateway. Picking between Le Havre and Marseille-Fos depends on where your goods are going. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'France is in the EU, so the EU customs tariff applies, and EU tariff measures apply the same way in every EU country. Plan every commercial shipment around import VAT and any duty, though businesses registered for VAT in France account for import VAT on their return rather than paying it at the border. Duty depends on your exact product, so confirm the rate for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'The standard VAT rate in France is 20 percent. Since 1 January 2022, self-accounting for import VAT (autoliquidation) is compulsory and automatic for all businesses registered for VAT in France. You report the import VAT on your VAT return to the tax office (DGFiP) instead of paying it at customs, which eases cash flow.',
          'EU customs duty is set by your product\'s commodity code. The EU\'s TARIC database gives an overview of the requirements for importing your goods into the EU, so look up your code there, or ask us, before you ship.',
          'You need an EORI number to import into the EU. One EORI number is valid throughout the EU, so you only need one even if you clear goods in more than one EU country. To use autoliquidation, your business also needs to be registered for VAT in France.',
          'If the importer is a private person rather than a VAT-registered business, French customs still collects the import VAT.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Ask your supplier to use wood pallets and crates that are treated and stamped to ISPM 15, the international standard for wood packaging, so the packaging does not cause problems at the border.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, French and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record, though a VAT-registered French business often prefers to be the importer of record so it can self-account for the import VAT on its return. For many French importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your French delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'Make sure you have an EORI number and a French VAT number; we can guide you if you do not have them yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from the origin port, for example Shanghai, Ningbo, or Shenzhen, to Le Havre, Marseille-Fos, or Paris Charles de Gaulle.',
        'We file the French customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to France?',
          answer:
            'It depends on the method, the size and weight of your shipment, the season, and which French port you use. Sea freight is priced per container or per cubic meter, and air and express per kilo of chargeable weight. VAT and any duty are extra. We quote each shipment for your exact cargo and dates.',
        },
        {
          question: 'How long does shipping from China to France take?',
          answer:
            'Sea freight is the slowest option, air freight is much faster, and express courier is the fastest. Sea timing depends on the line, the port, and whether the ship routes via the Suez Canal or round Africa. We confirm the timing for your shipment when we quote.',
        },
        {
          question: 'Should I ship into Le Havre or Marseille-Fos?',
          answer:
            'It depends on where your goods are going. Le Havre, on the Channel coast, is the natural gateway for northern France and Paris. Marseille-Fos, on the Mediterranean, serves the south and the Rhône valley. We compare both routes, including the inland leg, when we quote.',
        },
        {
          question: 'How does French import VAT work?',
          answer:
            'The standard VAT rate is 20 percent. Since 1 January 2022, businesses registered for VAT in France must self-account for import VAT (autoliquidation): they report it on their VAT return instead of paying it at customs. For private importers, customs still collects it.',
        },
        {
          question: 'What is the cheapest way to ship from China to France?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper per unit once you have enough volume to fill most of it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to France?',
          answer:
            'Yes. Any trader who imports goods into the EU needs an EORI number, and it is valid throughout the EU. To self-account for import VAT you also need to be registered for VAT in France.',
        },
        {
          question: 'How much duty will I pay importing from China to France?',
          answer:
            'EU duty depends on your product\'s commodity code, which you can check in the EU TARIC database. The EU tariff applies the same way in every EU country. Tell us what you are shipping and we will check the code and duty for you.',
        },
        {
          question: 'What documents do I need to import from China to France?',
          answer:
            'The core documents are the commercial invoice, the packing list, and the bill of lading for sea or the air waybill for air, plus your EORI number and French VAT number. Some goods need extra certificates or licences, so tell us what you are shipping and we will check.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rules and rates', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'Irish Revenue: EORI system (EORI valid throughout the EU)', url: 'https://www.revenue.ie/en/customs/businesses/electronic-systems/eori-system.aspx' },
        { label: 'European Commission: EU Customs Tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/customs-4/calculation-customs-duties/customs-tariff/eu-customs-tariff-taric_en' },
        { label: 'Irish Department of Agriculture: Wood packaging material and ISPM 15', url: 'https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/publications/wood-packaging-material-and-ispm-15/' },
        { label: 'French customs: TVA a l\'importation, les essentiels', url: 'https://www.douane.gouv.fr/articles/a10884-tva-a-l-importation-generalites' },
        { label: 'French customs: Les facilitations en matiere de TVA', url: 'https://www.douane.gouv.fr/dossier/les-facilitations-en-matiere-de-tva' },
        { label: 'Port of Marseille Fos: home page', url: 'https://www.marseille-port.fr/en' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-germany',
    name: 'Germany',
    code: 'DE',
    description: 'Sea, rail and air freight from China to Germany via Hamburg, Bremerhaven and Frankfurt. FCL, LCL, customs clearance and door-to-door delivery.',
    majorPorts: ['Hamburg', 'Bremerhaven', 'Frankfurt'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Textiles', 'Consumer Goods', 'Auto Parts'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Germany: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Germany: compare sea, rail, air and express freight, the main ports, and EU customs and VAT rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Germany moves cargo by sea freight, air freight, rail freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at German gateways such as Hamburg and Bremerhaven, or by rail. We quote the transit time for your sailing or flight. German import VAT of 19 percent and any EU duty apply on arrival, and importers need an EORI number.',
      intro:
        'If you import from China into Germany, you can choose between sea, air, express and rail. This guide covers what drives the cost of shipping from China to Germany, how the options compare on speed, which ports and routes your cargo moves through, and the German and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have several ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), rail freight, air freight, and express courier. Sea freight is the cheapest for anything large or heavy, but also the slowest. Rail sits between sea and air on both cost and speed, and air freight is the fastest of the bulk options. The right choice comes down to how fast you need the goods and how much they weigh and measure. One thing every German importer needs first: an EORI number to clear EU customs, plus a plan for 19 percent import VAT and any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. Ocean rates in particular move week to week. We quote each shipment for your goods, ports and dates.',
        factors: [
          'Mode: sea is cheapest, rail sits in the middle, air is faster and dearer, express is fastest and dearest.',
          'Season: rates climb before Chinese New Year (January to February) and again in the autumn pre-holiday peak.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time and cost. Ask us which way your sailing goes.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Rail freight is priced per container and lands between sea and air on both cost and speed. Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include German import VAT, EU duty, or the forwarder\'s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Germany shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel with other importers\' cargo and you pay only for the space you use, the better deal for smaller loads. LCL takes longer than FCL, because the cargo has to be grouped at origin and unpacked on arrival. We quote the transit time for each sailing to Hamburg or Bremerhaven. Rail freight is another option. Trains on the China-Europe network run from inland Chinese hubs to rail terminals in Germany, at a price between sea and air. It is a strong middle ground for cargo that is too time-sensitive for the ocean but too heavy or large to justify air. Ask us about the route your train takes. For sea, small loads usually go LCL and larger loads go in a full container, and we quote sea, rail, and air so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters most. Cargo flies from hubs like Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen to German gateways such as Frankfurt. It costs several times more than sea or rail per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric (dimensional) weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier, so larger air shipments earn a better rate per kilo. For most importers, air makes sense when arriving sooner is worth the premium, and when it is not, sea or rail moves the same goods for far less. We can quote all three side by side so the trade-off is clear.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Germany. Once a shipment gets heavier, standard air freight usually becomes cheaper while still being fast, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Rail freight (to Duisburg)', time: 'Quoted per shipment', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive heavy cargo' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Sea cargo for Germany can leave from Chinese ports such as Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao. For air freight, common departure airports are Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen, while rail services start from inland Chinese hubs. On the German side, Hamburg is Germany\'s biggest multipurpose port and calls itself Europe\'s largest rail port, with container trains to the European hinterland. Bremerhaven is one of the most important container hubs in north-western Europe, and JadeWeserPort at Wilhelmshaven is Germany\'s only deep-water container port. Frankfurt Airport is the main air-cargo gateway, and its operator aims to keep it Europe\'s top cargo hub by freight throughput. Duisburg, home to what its operator calls the largest inland container port in the world, is a major inland hub. From any of these, your goods can move on across Germany once they clear customs. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Germany is part of the EU customs union, so the same EU tariff applies here as in every other EU country. There is no VAT-free allowance on imports, so plan around 19 percent import VAT and any duty. Rates depend on your exact product, so confirm the duty for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'German import VAT (Einfuhrumsatzsteuer) is 19 percent. It is charged on the customs value plus duties and other charges, such as shipping and insurance. If you are a VAT-registered business, you can usually deduct the VAT you pay on business purchases in your VAT return.',
          'EU customs duty is usually a percentage of the customs value of the goods, and the rate depends on your product\'s commodity code in the TARIC database. TARIC also lists anti-dumping duties, which apply to some goods from some countries, so check your code before you ship.',
          'You need an EORI number to clear goods through EU customs. You request it from German customs (Zoll), and it is free of charge. One EORI number covers customs operations across the EU.',
          'The old VAT exemption for imported goods below EUR 22 was abolished on 1 July 2021, so import VAT applies from the first euro. Since 1 July 2026 the EU also charges a temporary customs duty of EUR 3 per item on low-value parcels worth up to EUR 150, counted by tariff classification, not by quantity.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays import duty and VAT; under FOB, CIF, or DAP you are the importer of record and pay. Agreeing the Incoterm up front avoids the most common dispute.',
          'For every shipment to the EU, an Entry Summary Declaration must be filed in the ICS2 system before the goods arrive; the carrier or forwarder usually does this. Core documents are the commercial invoice, packing list, and bill of lading, air waybill, or rail consignment note.',
          'Wood pallets and crates entering the EU must be treated and marked to the ISPM 15 standard. Confirm this with your supplier before the goods are loaded.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg, German and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most German SME importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record so they can deduct the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your German delivery address.',
        'We quote your options (sea FCL, sea LCL, rail, air, or express) with prices and transit times for your dates, and you pick one.',
        'Make sure you have an EORI number; we can guide you through applying with German customs if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails, takes the train, or flies from China to a German gateway such as Hamburg, a rail terminal, or Frankfurt.',
        'We file the EU customs declaration, pay duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Germany?',
          answer:
            'It depends on the mode, the size and weight of your cargo, and the season. Sea is the cheapest per unit, rail sits between sea and air, and air and express cost the most. Import VAT and duty are extra. Request a live quote and we will price your exact cargo.',
        },
        {
          question: 'What is the cheapest way to ship from China to Germany?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Rail costs more than sea but less than air, and is worth it when you need the goods sooner.',
        },
        {
          question: 'Does Germany charge VAT on goods from China?',
          answer:
            'Yes. German import VAT (Einfuhrumsatzsteuer) of 19 percent applies on the customs value plus duties and other charges such as shipping and insurance, from the first euro of value. VAT-registered businesses can usually deduct it in their VAT return.',
        },
        {
          question: 'How long does shipping from China to Germany take?',
          answer:
            'Sea is the slowest option, rail is faster, air is faster again, and express is quickest for small parcels. Customs clearance adds a little time on top. Lines can route via the Suez Canal or round Africa, which changes the transit time, so we quote the time for your sailing or flight.',
        },
        {
          question: 'How long does sea freight from China to Germany take?',
          answer:
            'It depends on the sailing and the route the line takes. Shared-container (LCL) cargo takes longer than a full container, because it is grouped at origin and unpacked on arrival. We give you the transit time for each sailing when we quote.',
        },
        {
          question: 'How much does it cost to ship a container from China to Germany?',
          answer:
            'Container rates move with the market, and they depend on the container size, the ports, and the date. Rail is another way to move a container, at a price between sea and air. Get a live quote for current pricing on your dates.',
        },
        {
          question: 'How long is air freight from China to Germany?',
          answer:
            'Air freight to a German airport such as Frankfurt is much faster than sea or rail, and the time includes export handling, the flight, and customs clearance. Express courier is faster again for small parcels, but costs more per kilo. We quote the time for your shipment.',
        },
        {
          question: 'How does rail freight from China to Germany compare to sea and air?',
          answer:
            'Rail sits in the middle. It is faster than sea and cheaper than air, and it ends at an inland rail terminal with onward delivery by truck. It suits cargo that is too time-sensitive for the ocean but too heavy or bulky to justify air freight.',
        },
        {
          question: 'What is the difference between FCL and LCL?',
          answer:
            'FCL (full container load) means you book a whole container for your cargo alone, which pays off for larger loads. LCL (less than container load) means you share a container and pay only for the space you use, which is cheaper for smaller shipments. We quote both so you can compare.',
        },
        {
          question: 'What documents and duties apply when importing from China to Germany?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading, air waybill, or rail consignment note. Duty is set by your product\'s TARIC commodity code and 19 percent import VAT applies. Under DDP we handle duty and VAT for you; under FOB or DAP you pay as importer of record.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rates in EU countries', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'Your Europe: Charging and deducting VAT', url: 'https://europa.eu/youreurope/business/finance-and-tax/vat/charging-deducting-vat/index_en.htm' },
        { label: 'European Commission: Buying goods from outside the EU (import VAT and duty)', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/importation/buying-goods-online-coming-non-european-union-country_en' },
        { label: 'European Commission: EU Customs Tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/online-services/online-services-and-databases-customs/eu-customs-tariff-taric_en' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-operation/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'German Customs (Zoll): Requesting an EORI number', url: 'https://www.zoll.de/EN/Businesses/Movement-of-goods/Import/Duties-and-taxes/EORI-number/Requesting-EORI-number-amending-operator-particulars/requesting-eori-number-amending-operator-particulars_node.html' },
        { label: 'European Commission: Customs formalities for low value consignments', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-operation/customs-formalities-low-value-consignments_en' },
        { label: 'European Commission: EUR 3 customs duty for low-value parcels', url: 'https://commission.europa.eu/news-and-media/news/ensuring-fairness-and-safety-eur3-customs-duty-low-value-parcels-2026-06-29_en' },
        { label: 'European Commission: Import Control System 2 (ICS2)', url: 'https://taxation-customs.ec.europa.eu/customs/customs-security/import-control-system-2_en' },
        { label: 'Polish plant health service (PIORIN): Wood packaging and ISPM 15', url: 'https://www.gov.pl/web/piorin-en/wood-packaging' },
        { label: 'Port of Hamburg', url: 'https://www.hafen-hamburg.de/en/portofhamburg/port-of-hamburg/' },
        { label: 'bremenports: Container handling in Bremerhaven', url: 'https://www.bremenports.de/en/ports/competences/containers' },
        { label: 'JadeWeserPort Wilhelmshaven', url: 'https://www.jadeweserport.de/en/hafen-en/' },
        { label: 'Fraport: Frankfurt CargoHub masterplan', url: 'https://www.fraport.com/en/newsroom/press-releases/2024/q2/frankfurt-cargohub--fraport-launches-masterplan-and-comprehensiv.html' },
        { label: 'duisport: Port of Duisburg', url: 'https://duisport.de/en/' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-india',
    name: 'India',
    code: 'IN',
    description: 'Sea and air freight from China to India, into ports such as Nhava Sheva near Mumbai, Chennai, and Kolkata. FCL, LCL, express, and door-to-door delivery.',
    majorPorts: ['Mumbai', 'Chennai', 'Nhava Sheva', 'Kolkata'],
    transitTime: '',
    popularGoods: ['Electronics', 'Machinery', 'Chemicals', 'Textiles', 'Consumer Goods'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to India: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to India: sea, air and express options, the main ports, customs duty, IGST, anti-dumping checks and the IEC code. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to India moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shenzhen, Ningbo, and Shanghai and arrive at Indian ports such as Nhava Sheva near Mumbai, Chennai, or Kolkata. Sea is the cheapest and slowest, air and express are faster. India charges basic customs duty, a social welfare surcharge, and IGST on imports, and some goods also carry anti-dumping or safeguard duty, so check your product.',
      intro:
        'If you import from China into India, the tax side is where you need to do your homework, because several duties stack on top of each other and some products carry extra duties. This guide covers how pricing works, how the shipping options compare, which ports your cargo moves through, and the Indian customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy but takes the longest. Air freight costs more but arrives sooner. On the tax side, India levies basic customs duty, a social welfare surcharge, and IGST, and goods-specific duties such as anti-dumping or safeguard duty can apply on top. You also need an Import Export Code (IEC) before you can import, and some products need extra licences. Request a live quote any time and we will price your exact shipment for your dates.',
      originPorts: ['Shenzhen (Yantian)', 'Ningbo', 'Shanghai', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, and the season. Rates move week to week, so we quote each shipment for your exact cargo, ports, and dates.',
        factors: [
          'Duty: goods-specific duties such as anti-dumping or safeguard duty can apply on top of basic customs duty, so check your HS code before ordering.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Port: the Indian port you ship into changes the sailing and the inland delivery cost, so pick the one closest to where the goods are going.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, taxes, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include customs duty, the social welfare surcharge, IGST, any anti-dumping duty, or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to India shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL takes longer than FCL, because the cargo has to be grouped with other shipments before sailing and split out again on arrival. Cargo arrives at an Indian port such as Nhava Sheva near Mumbai or Mundra in Gujarat on the west coast, or Chennai and Kolkata on the east coast. Timing depends on the line, the origin port, and the Indian port, so we confirm it for your sailing when we quote. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Guangzhou, Shenzhen, Shanghai, and Hong Kong to Indian airports such as Delhi or Mumbai. It costs more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates usually fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to India. As shipments get heavier, standard air freight usually becomes the cheaper fast option. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'Moderate to high', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shenzhen (including the Yantian terminal), Ningbo-Zhoushan, Shanghai, Guangzhou, and Qingdao handle much of the India-bound cargo. For air freight, the main gateways are Guangzhou, Shenzhen, Shanghai, and Hong Kong. On the Indian side, Nhava Sheva (JNPT) near Mumbai and Mundra in Gujarat serve the west, Chennai serves the south, and Kolkata serves the east. Delhi and Mumbai are common air gateways. Which port suits you depends on where your goods are going, since inland delivery is part of the total cost. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Indian customs is where you need to do your homework, because several duties stack and some products carry extra duties or need licences. Here is what applies. Check your HS code and your licences before you order.',
        points: [
          'India levies basic customs duty (BCD) on imported goods, set by the Customs Tariff Act. A social welfare surcharge (SWS) is added on top, for example at 10 percent of the BCD. IGST is then charged on the value plus BCD plus SWS, at a rate set by the product\'s classification.',
          'Goods-specific duties such as anti-dumping duty and safeguard duty can also apply, and they can add a lot to the cost, so always check your HS code for an active order before you buy.',
          'Every business must get an Import Export Code (IEC) from the Directorate General of Foreign Trade (DGFT) before importing. The application is made online at the DGFT website.',
          'Some items are restricted, canalised, or prohibited and need extra permission or a licence from the DGFT or the central government. Confirm what your product needs before the goods leave China.',
          'The importer files the import declaration in a Bill of Entry. Core documents include the commercial invoice cum packing list, the bill of lading or air waybill, a certificate of origin, any inspection certificates, and your IEC.',
          'Ask your supplier to use treated and marked wood packaging, so the packaging does not cause problems at the border.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Indian customs, duty including any anti-dumping duty, and IGST, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. Because extra duties and licence rules can catch importers out, having us work out the full landed cost and check licences up front avoids surprises. The consignee still needs an IEC, since the import rights sit with them. The alternative, FOB or CIF, leaves the Indian clearance, duty, and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Indian delivery address.',
        'Check whether your HS code carries anti-dumping or safeguard duty and whether your product needs a licence or certification, and make sure you have an IEC.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to an Indian port such as Nhava Sheva or Chennai, or flies into Delhi or Mumbai.',
        'We file the Bill of Entry, handle duty and IGST, and clear your shipment, then deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to India?',
          answer:
            'It depends on the mode, the size and weight of your cargo, and the season, and rates move week to week. We quote each shipment for your exact cargo and dates. Customs duty, the social welfare surcharge, IGST, and any anti-dumping duty are extra.',
        },
        {
          question: 'How long does shipping from China to India take?',
          answer:
            'It depends on the mode, the line, and the ports. Sea freight is the slowest and air and express are faster, so we confirm the timing for your sailing or flight when we quote. Allow time for customs clearance on arrival.',
        },
        {
          question: 'Do Chinese goods face anti-dumping duty in India?',
          answer:
            'Some do. India can levy goods-specific duties such as anti-dumping duty and safeguard duty on top of basic customs duty, and they can add a lot to the cost. Always check your HS code for an active order before you order.',
        },
        {
          question: 'Do I need an IEC or BIS certification to import into India?',
          answer:
            'You need an IEC (Import Export Code) from the DGFT before you can import at all. Some restricted items need an extra licence from the DGFT or the central government. Whether your product also needs BIS certification depends on the product, so ask us to check before the goods leave China.',
        },
        {
          question: 'What is the cheapest way to ship from China to India?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill most of it. We quote both so you can compare.',
        },
        {
          question: 'Which Indian port should I ship into?',
          answer:
            'Nhava Sheva near Mumbai and Mundra in Gujarat serve the west, Chennai serves the south, and Kolkata serves the east. The best choice depends on where your goods are going, since inland delivery is part of the total cost.',
        },
        {
          question: 'How much duty and tax will I pay importing from China to India?',
          answer:
            'Taxes stack. You pay basic customs duty by product, then a social welfare surcharge (for example 10 percent of the BCD), then IGST on the value plus BCD plus surcharge, at a rate set by the product\'s classification. Any anti-dumping or safeguard duty is added on top.',
        },
        {
          question: 'What documents do I need to import from China to India?',
          answer:
            'You need the Bill of Entry, commercial invoice cum packing list, bill of lading or air waybill, your IEC, a certificate of origin, and any inspection certificates or licences your product needs.',
        },
      ],
      sources: [
        { label: 'DGFT (Office of Additional DGFT, Ahmedabad): Customs import export procedures', url: 'https://content.dgft.gov.in/Website/CIEP.pdf' },
        { label: 'CBIC Bengaluru Customs: Public notice on duty structure', url: 'https://courier.cbic.gov.in/PN%20Bengaluru/PN%20issued%20by%20Bangalore%20Customs%20on%20duty%20structure.pdf' },
      ],
    },
  },
  {
    slug: 'shipping-china-to-italy',
    name: 'Italy',
    code: 'IT',
    description: 'Sea and air freight from China to Italy via Genoa, La Spezia and Trieste. FCL, LCL, customs clearance and door-to-door delivery.',
    majorPorts: ['Genoa', 'La Spezia', 'Trieste'],
    transitTime: '',
    popularGoods: ['Textiles', 'Machinery', 'Electronics', 'Furniture', 'Consumer Goods'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Italy: Cost & Transit Times',
      metaDescription:
        'Shipping from China to Italy: compare sea, air and express freight, the main ports, and EU customs and VAT rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Italy moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Italian gateways such as Genoa, La Spezia, and Trieste. We quote the transit time for your sailing or flight. Italian import VAT of 22 percent and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China, Italy is a Mediterranean gateway into the European Union, and getting the cost, timing, and customs right makes a real difference to your margin. This guide covers what drives the cost of shipping from China to Italy, how the options compare on speed, which ports your cargo moves through, and the Italian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy, but also the slowest. Air freight costs more but lands much sooner. The right choice comes down to how fast you need the goods and how much they weigh and measure. One thing every Italian importer needs first: an EORI number to clear EU customs, plus a plan for 22 percent import VAT and any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. Ocean rates in particular move week to week. We quote each shipment for your goods, ports and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Season: rates climb before Chinese New Year (January to February) and again in the autumn pre-holiday peak.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time and cost. Ask us which way your sailing goes.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Italian import VAT, EU duty, or the forwarder\'s customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Italy shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL takes longer than FCL, because the cargo has to be grouped at origin and unpacked on arrival. We quote the transit time for each sailing to Genoa, La Spezia, or Trieste. Lines can route via the Suez Canal or round Africa, which changes the transit time a lot for Mediterranean ports; ask us which way your sailing goes. As a rule, small loads usually go LCL and larger loads go in a full container, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen to Italian airports such as Milan Malpensa, which has passenger and all-cargo flights carrying freight. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric (dimensional) weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier, so larger air shipments earn a better rate per kilo. For most importers, air makes sense when arriving much sooner is worth the premium, and when it is not, sea freight moves the same goods for a fraction of the cost. We can quote both side by side so the trade-off is clear.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Italy. Once a shipment gets heavier, standard air freight usually becomes cheaper while still being fast, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Sea cargo for Italy can leave from Chinese ports such as Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou. For air freight, common departure airports are Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen. On the Italian side, Genoa calls itself the premier Italian gateway port, and La Spezia, also in the northwest, has the La Spezia Container Terminal run by the Contship Italia Group. Trieste in the northeast has a direct call from Asia on MSC\'s Dragon service at Trieste Marine Terminal. Naples and Livorno also handle containers: Conateco is the largest terminal in Naples, and Terminal Darsena Toscana is the main container terminal in Livorno. Milan Malpensa handles passenger and all-cargo flights carrying freight. From any of these, your goods can move on across Italy once they clear customs. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Italy is part of the EU customs union, so the same EU tariff applies here as in every other EU country. There is no VAT-free allowance on imports, so plan around 22 percent import VAT and any duty. Rates depend on your exact product, so confirm the duty for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'Italian import VAT (IVA) is 22 percent. It is charged on the customs value plus duties and other charges, such as shipping and insurance. If you are a VAT-registered business, you can usually deduct the VAT you pay on business purchases in your VAT return.',
          'EU customs duty is usually a percentage of the customs value of the goods, and the rate depends on your product\'s commodity code in the TARIC database. TARIC also lists anti-dumping duties, which apply to some goods from some countries, so check your code before you ship.',
          'You need an EORI number to clear goods through EU customs. A business established in Italy gets it from the Italian customs authority (Agenzia delle Dogane e dei Monopoli). One EORI number covers customs operations across the EU.',
          'The old VAT exemption for imported goods below EUR 22 was abolished on 1 July 2021, so import VAT applies from the first euro. Since 1 July 2026 the EU also charges a temporary customs duty of EUR 3 per item on low-value parcels worth up to EUR 150, counted by tariff classification, not by quantity.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays import duty and VAT; under FOB, CIF, or DAP you are the importer of record and pay. Agreeing the Incoterm up front avoids the most common dispute.',
          'For every shipment to the EU, an Entry Summary Declaration must be filed in the ICS2 system before the goods arrive; the carrier or forwarder usually does this. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates entering the EU must be treated and marked to the ISPM 15 standard. Confirm this with your supplier before the goods are loaded.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Italian and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Italian SME importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record so they can deduct the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Italian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with prices and transit times for your dates, and you pick one.',
        'Make sure you have an EORI number; we can guide you through applying with Italian customs if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from China to an Italian gateway such as Genoa, Trieste, or Milan Malpensa.',
        'We file the EU customs declaration, pay duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Italy?',
          answer:
            'It depends on the mode, the size and weight of your cargo, and the season. Sea is the cheapest per unit, and air and express cost the most. Import VAT and duty are extra. Request a live quote and we will price your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Italy take?',
          answer:
            'Sea is the slowest option, air is much faster, and express is quickest for small parcels. Customs and delivery add a little time on top. Lines can route via the Suez Canal or round Africa, which changes the transit time, so we quote the time for your sailing or flight.',
        },
        {
          question: 'How long does sea freight from China to Italy take?',
          answer:
            'It depends on the sailing and the route the line takes to Genoa, La Spezia, or Trieste. Shared-container (LCL) cargo takes longer than a full container, because it is grouped at origin and unpacked on arrival. We give you the transit time for each sailing when we quote.',
        },
        {
          question: 'What is the cheapest way to ship from China to Italy?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'How much does it cost to ship a container from China to Italy?',
          answer:
            'Container rates move with the market, and they depend on the container size, the ports, and the date. Get a live quote for current pricing on your dates.',
        },
        {
          question: 'Does Italy charge VAT on goods from China?',
          answer:
            'Yes. Italian import VAT (IVA) of 22 percent applies on the customs value plus duties and other charges such as shipping and insurance, from the first euro of value. VAT-registered businesses can usually deduct it in their VAT return.',
        },
        {
          question: 'Do I need an EORI number to import from China to Italy?',
          answer:
            'Yes. An EORI number is required to clear goods through EU customs. A business established in Italy gets it from the Italian customs authority (Agenzia delle Dogane e dei Monopoli), and one number covers customs operations across the EU.',
        },
        {
          question: 'Should I ship into Genoa or Trieste?',
          answer:
            'Genoa and La Spezia are in the northwest of Italy. Trieste is in the northeast. The best choice depends on where your goods are going, since inland delivery is part of the total cost, so we can quote both.',
        },
        {
          question: 'What is the difference between FCL and LCL?',
          answer:
            'FCL (full container load) means you book a whole container for your cargo alone, which pays off for larger loads. LCL (less than container load) means you share a container and pay only for the space you use, which is cheaper for smaller shipments. We quote both so you can compare.',
        },
        {
          question: 'What documents and duties apply when importing from China to Italy?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill. Duty is set by your product\'s TARIC commodity code and 22 percent import VAT applies. Under DDP we handle duty and VAT for you; under FOB or DAP you pay as importer of record.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rates in EU countries', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'Your Europe: Charging and deducting VAT', url: 'https://europa.eu/youreurope/business/finance-and-tax/vat/charging-deducting-vat/index_en.htm' },
        { label: 'European Commission: Buying goods from outside the EU (import VAT and duty)', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/importation/buying-goods-online-coming-non-european-union-country_en' },
        { label: 'European Commission: EU Customs Tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/online-services/online-services-and-databases-customs/eu-customs-tariff-taric_en' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-operation/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: Customs formalities for low value consignments', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-operation/customs-formalities-low-value-consignments_en' },
        { label: 'European Commission: EUR 3 customs duty for low-value parcels', url: 'https://commission.europa.eu/news-and-media/news/ensuring-fairness-and-safety-eur3-customs-duty-low-value-parcels-2026-06-29_en' },
        { label: 'European Commission: Import Control System 2 (ICS2)', url: 'https://taxation-customs.ec.europa.eu/customs/customs-security/import-control-system-2_en' },
        { label: 'Polish plant health service (PIORIN): Wood packaging and ISPM 15', url: 'https://www.gov.pl/web/piorin-en/wood-packaging' },
        { label: 'Italian Customs and Monopolies Agency: EOS (EORI + AEO)', url: 'https://www.adm.gov.it/portale/en/dogane/operatore/ecustoms-aida/progetti-aida/eos' },
        { label: 'Ports of Genoa', url: 'https://www.portsofgenoa.com/en/' },
        { label: 'European Investment Bank: Financing for the port of La Spezia', url: 'https://www.eib.org/en/press/all/2022-390-da-bei-cdp-intesa-sanpaolo-160-milioni-per-il-porto-di-la-spezia' },
        { label: 'Trieste Marine Terminal: New direct call from Asia', url: 'https://www.trieste-marine-terminal.com/en/news/new-direct-call-tmt-asia%E2%80%93mediterranean-trade' },
        { label: 'Conateco (Port of Naples): About us', url: 'https://www.conateco.it/chi-siamo/' },
        { label: 'Terminal Darsena Toscana (Livorno): About us', url: 'https://www.tdt.it/chi-siamo/' },
        { label: 'Milano Malpensa Cargo', url: 'https://www.milanomalpensacargo.com/en' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-japan',
    name: 'Japan',
    code: 'JP',
    description: 'Sea and air freight from China to Japan, into ports such as Tokyo, Yokohama, Osaka, and Kobe. FCL, LCL, express, and door-to-door delivery.',
    majorPorts: ['Tokyo', 'Yokohama', 'Osaka', 'Kobe'],
    transitTime: '',
    popularGoods: ['Electronics', 'Machinery', 'Consumer Goods', 'Textiles', 'Auto Parts'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Japan: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Japan: sea, air and express options, the main ports, consumption tax, RCEP duty rules and customs documents. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Japan moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Tokyo, Yokohama, Kobe, Osaka, or Nagoya. Sea is the cheapest and slowest, air and express are faster. Japanese consumption tax applies to imports, at 10 percent standard or 8 percent for food and drink, and under the RCEP agreement Chinese-origin goods can claim a preferential duty rate with proof of origin.',
      intro:
        'If you import from China into Japan, you are shipping between close neighbours, and a regional trade agreement can lower your duty. This guide covers how pricing works, how the shipping options compare, which ports your cargo moves through, and the Japanese customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy but takes the longest. Air freight costs more but arrives sooner. On tax, Japan charges consumption tax on imports, at 10 percent standard or 8 percent on food and drink. China and Japan are both in the RCEP agreement, so Chinese-origin goods can claim a preferential duty rate with proof of origin. Request a live quote any time and we will price your exact shipment for your dates.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Dalian'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, and the season. Rates move week to week, so we quote each shipment for your exact cargo, ports, and dates.',
        factors: [
          'Port: the Japanese port you ship into changes the sailing and the inland delivery cost, so pick the one closest to where the goods are going.',
          'Duty: under RCEP, Chinese-origin goods can claim a preferential rate if you have proof of origin, so check the rate for your product.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, tax, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include duty, consumption tax, or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Japan shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL takes longer than FCL, because the cargo has to be grouped with other shipments before sailing and split out again on arrival. Cargo crosses the East China Sea and arrives at Tokyo or Yokohama in the Tokyo Bay area, at Kobe or Osaka in the Kansai region, or at Nagoya in central Japan. Timing depends on the line, the origin port, and the Japanese port, so we confirm it for your sailing when we quote. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Beijing to Narita, Haneda, or Kansai. It costs more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates usually fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for less, and we can quote both side by side so you can weigh the time saving against the cost.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Japan. As shipments get heavier, standard air freight usually becomes the cheaper fast option. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'Moderate', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Dalian handle much of the Japan-bound cargo. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Beijing. On the Japanese side, Tokyo and Yokohama serve the Tokyo Bay area, Kobe and Osaka serve the Kansai region, and Nagoya serves central Japan. Air cargo usually lands at Narita or Haneda near Tokyo, or Kansai near Osaka. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Japanese customs follows a clear process, and the RCEP agreement can lower your duty. Here is what applies when you import from China. The main planning point is proof of origin, since that is what unlocks the RCEP preferential rate.',
        points: [
          'Imported goods are subject to consumption tax (national and local combined). The standard rate is 10 percent, and a reduced rate of 8 percent applies to food and drink, excluding alcoholic drinks and dining out.',
          'China and Japan are both parties to RCEP, where it is in force. Chinese-origin goods can claim the RCEP preferential tariff rate if they meet the rules of origin and you have documentary evidence of origin, either a certificate of origin or a declaration of origin.',
          'Goods with a total customs value of 10,000 yen or less are exempt from customs duty and consumption tax. Some items are excluded, such as leather bags, knitted apparel, and leather shoes, and other taxes such as liquor and tobacco tax still apply.',
          'Anyone importing goods must lodge an import declaration with Japan Customs and get an import permit. Usually, a customs broker files the declaration for the importer.',
          'Core documents are the commercial invoice, the bill of lading or air waybill, the import declaration, and proof of origin to claim the RCEP rate, plus packing lists, freight and insurance papers where needed, and any permits required under other laws (for example for food, medicines, or chemicals).',
          'Ask your supplier to use treated and marked wood packaging, so the packaging does not cause problems at the border.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Japanese customs, duty, and consumption tax, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. DDP keeps the whole thing simple, and we make sure the RCEP proof of origin is in place so you claim any duty saving. The alternative, FOB or CIF, leaves the Japanese clearance, duty, and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Japanese delivery address.',
        'We check whether your goods qualify for the RCEP preferential rate and help you get the proof of origin.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from China to a Japanese gateway such as Tokyo, Yokohama, Kobe, or Osaka.',
        'We clear Japanese customs, handle duty and consumption tax, and deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Japan?',
          answer:
            'It depends on the mode, the size and weight of your cargo, and the season, and rates move week to week. We quote each shipment for your exact cargo and dates. Duty and consumption tax are extra, and RCEP can lower the duty.',
        },
        {
          question: 'How long does shipping from China to Japan take?',
          answer:
            'It depends on the mode, the line, and the ports. Sea freight is the slowest and air and express are faster, so we confirm the timing for your sailing or flight when we quote.',
        },
        {
          question: 'Does RCEP reduce duty on Chinese goods into Japan?',
          answer:
            'It can. China and Japan are both RCEP parties, so Chinese-origin goods that meet the rules of origin can claim the RCEP preferential tariff rate. You need documentary evidence of origin, a certificate of origin or a declaration of origin. Check the rate for your product before you ship.',
        },
        {
          question: 'What is the cheapest way to ship from China to Japan?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill most of it. We quote both so you can compare.',
        },
        {
          question: 'How much is consumption tax on imports to Japan?',
          answer:
            'The standard consumption tax rate is 10 percent, national and local combined. A reduced rate of 8 percent applies to food and drink, excluding alcoholic drinks and dining out. Imported goods are subject to it as well as any duty.',
        },
        {
          question: 'Which Japanese port do shipments arrive at?',
          answer:
            'Tokyo and Yokohama serve the Tokyo Bay area, Kobe and Osaka serve Kansai, and Nagoya serves central Japan. The best port is the one closest to where your goods are going, since inland delivery is part of the total cost.',
        },
        {
          question: 'Can small shipments to Japan clear free of duty and tax?',
          answer:
            'Yes, in many cases. Goods with a total customs value of 10,000 yen or less are exempt from customs duty and consumption tax. Some items are excluded, such as leather bags, knitted apparel, and leather shoes, and you cannot split one invoice into several declarations to stay under the limit.',
        },
        {
          question: 'What documents do I need to import from China to Japan?',
          answer:
            'You need a commercial invoice, bill of lading or air waybill, the import declaration, and proof of origin to claim the RCEP rate, plus a packing list where needed and any permits required for your product under other laws.',
        },
      ],
      sources: [
        { label: 'National Tax Agency Japan: Consumption tax basic knowledge', url: 'https://www.nta.go.jp/english/taxes/consumption_tax/01.htm' },
        { label: 'Tokyo Customs: Why were duties and taxes assessed on my parcels?', url: 'https://www.customs.go.jp/tokyo/english/yuubin/postal_qa/yuubinnbutunizeikkingakakaru.htm' },
        { label: 'Japan Customs: Duty exemption for goods of 10,000 yen or less', url: 'https://www.customs.go.jp/english/c-answer_e/imtsukan/1006_e.htm' },
        { label: 'Japan Customs: Import procedures', url: 'https://www.customs.go.jp/english/summary/import.htm' },
        { label: 'Japan Customs: RCEP preferential tariff guide', url: 'https://www.customs.go.jp/english/epa/rcep/rcep.html' },
      ],
    },
  },
  {
    slug: 'shipping-china-to-mexico',
    name: 'Mexico',
    code: 'MX',
    description: 'Sea and air freight from China to Mexico via Manzanillo, Lázaro Cárdenas and Veracruz. FCL, LCL, express and customs clearance.',
    majorPorts: ['Manzanillo', 'Lázaro Cárdenas', 'Veracruz'],
    transitTime: '',
    popularGoods: ['Electronics', 'Machinery', 'Auto Parts', 'Consumer Goods', 'Textiles'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Mexico: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Mexico: sea, air and express freight, Pacific and Gulf ports, customs, IVA and the new tariffs on many imported goods. Free quote.',
      answerCapsule:
        'Shipping from China to Mexico moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and cross the Pacific to Manzanillo or Lázaro Cárdenas. Sea freight is the cheapest and slowest, air is faster and dearer, and we quote the timing for your exact sailing or flight. Mexican import VAT (IVA) of 16 percent plus customs duty apply, and from January 2026 Mexico raised duties on 1,463 tariff lines from countries it has no trade agreement with, so check your product before ordering.',
      intro:
        'If you import from China into Mexico, two things shape your shipment right now: Mexico raised its import duties on many goods from countries without a Mexican trade agreement from January 2026, and its customs process needs a registered importer working through a customs broker or other authorised representative. This guide covers what drives the cost of shipping from China to Mexico, how the options compare on speed, which ports your cargo moves through, and the Mexican customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and crosses the Pacific straight to Mexico\'s west coast. Air freight lands much sooner. On the tax side, Mexico charges 16 percent IVA plus duty, and the January 2026 tariff decree raised duties in sectors such as autos, textiles, clothing, steel, footwear and furniture. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. Freight is only part of the bill: Mexican duty and IVA are paid on top, and the 2026 tariff increases have made duty a bigger part of landed cost for many products. Ocean and air rates move with the market, so request a live quote and we will price your exact shipment, ports, and dates.',
        factors: [
          'Duty: Mexico raised duties on 1,463 tariff lines from January 2026 for goods from countries without a Mexican trade agreement, so check the rate for your product before ordering.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Port choice: Manzanillo and Lázaro Cárdenas are the Pacific options; the right one depends on your delivery point and the sailing.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, IVA, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Mexican customs duty, 16 percent IVA, or the broker and clearance fees, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Mexico shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which pays off once you have enough cargo to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo crosses the Pacific and arrives at Manzanillo or Lázaro Cárdenas on the Pacific coast, with Veracruz and Altamira on the Gulf side. Because the route crosses the Pacific, it does not pass through the Suez Canal or the Red Sea. Allow time for berth waiting and customs at the port. For smaller loads LCL is usually cheaper, and once you can fill most of a box a full container wins. We quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Mexico City. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Mexico, though duty and IVA still apply. Once a shipment gets heavier, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao are the usual starting points for Mexico-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Mexican side, Manzanillo and Lázaro Cárdenas are the Pacific gateways that face Asia, and Veracruz and Altamira serve the Gulf coast. The best port depends on where your goods are going and on the sailing, since storage and inland trucking are part of the total cost. The main air gateway is Mexico City. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Mexican customs is strict and, since January 2026, more expensive for many goods from countries without a Mexican trade agreement. Here is what applies when you import from China. The key steps are getting your product\'s current duty right after the tariff changes and having the required registration and customs representative in place.',
        points: [
          'Import VAT (IVA) is 16 percent. Mexico\'s VAT law applies the 16 percent rate to the import of goods and services. VAT-registered businesses should ask their accountant how to claim it back.',
          'Customs duty is set by your product\'s tariff line. Mexico\'s list of trade agreements shows only an investment protection agreement with China, not a free trade agreement. A decree in force from January 1, 2026 raised duties on 1,463 tariff lines in sectors such as autos, textiles, clothing, plastics, steel, appliances, aluminium, toys, furniture, footwear, leather goods, paper, motorcycles, trailers and glass, for goods from countries with which Mexico has no trade agreement. Check your specific product.',
          'People and companies that want to import goods into Mexico register in the Padrón de Importadores, the SAT importer registry, before they start importing.',
          'To register, the importer needs a customs broker (agente aduanal), customs attorney (apoderado aduanal) or legal representative to carry out its foreign trade operations.',
          'Core documents are the import declaration filed by the broker, a commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin, plus any standards certificates or import permits for regulated goods.',
          'Ask us to confirm the rules for wood pallets and crates before your goods are loaded.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the transpacific sea or air leg, Mexican customs, duty, and IVA, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. Because Mexico\'s duties rose in 2026 for many goods and the customs process is strict, having us calculate the full landed cost up front avoids surprises, but the consignee still needs to be enrolled in the Padrón de Importadores, since the import rights sit with them, and a customs broker or other authorised representative is required. The alternative, FOB or CIF, leaves the Mexican clearance, duty, and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Mexican delivery address.',
        'Check your product\'s current duty rate after the 2026 tariff changes, and make sure the importer is enrolled in the Padrón de Importadores.',
        'We quote your options (sea FCL, sea LCL, air, or express) with prices and timing for your dates, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo crosses the Pacific to Manzanillo or Lázaro Cárdenas, or flies into Mexico City.',
        'A customs broker files the import declaration, we handle duty and IVA, and clear your shipment, then deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Mexico?',
          answer:
            'It depends on the method, the size of your shipment, and the season. Sea freight is the cheapest per unit and air costs more per kilo. Mexican duty (higher on many goods since 2026) and 16 percent IVA are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'Did Mexico raise tariffs on Chinese goods in 2026?',
          answer:
            'Mexico\'s Ministry of Economy says a decree in force from January 1, 2026 raised import duties on 1,463 tariff lines, in sectors such as autos, textiles, clothing, steel, footwear and furniture, for goods from countries with which Mexico has no trade agreement. Mexico has no free trade agreement with China, so always price the specific tariff code before ordering.',
        },
        {
          question: 'How long does shipping from China to Mexico take?',
          answer:
            'It depends on the mode and the sailing. Sea freight across the Pacific to Manzanillo or Lázaro Cárdenas is the slowest option, and port waiting and customs add time. Air and express are much faster. We give you the timing for your exact sailing or flight when we quote.',
        },
        {
          question: 'Do I need a customs broker and importer registration for Mexico?',
          answer:
            'Yes. The importer registers in the Padrón de Importadores before importing, and the SAT requires a customs broker (agente aduanal), customs attorney or legal representative to carry out its foreign trade operations. The Mexican importer must be registered first.',
        },
        {
          question: 'What is the cheapest way to ship from China to Mexico?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Which Mexican port should I ship into?',
          answer:
            'Manzanillo and Lázaro Cárdenas are the Pacific gateways that face Asia, and Veracruz and Altamira serve the Gulf side. The best choice depends on your delivery point and the sailing, since storage and inland transport are part of the total cost.',
        },
        {
          question: 'How much duty and tax will I pay importing from China to Mexico?',
          answer:
            'Duty depends on your product\'s tariff line, and it rose for many goods in 2026. On top of that, 16 percent IVA applies to imports. Because the tariff changes are product-specific, it is essential to check your tariff code before ordering.',
        },
        {
          question: 'What documents do I need to import from China to Mexico?',
          answer:
            'You need the import declaration filed by your customs broker, a commercial invoice, a packing list, a bill of lading or air waybill, and a certificate of origin, plus any standards certificates for regulated goods. The importer must be in the Padrón de Importadores.',
        },
      ],
      sources: [
        { label: 'Secretaría de Economía: tariff decree in force January 2026', url: 'https://www.gob.mx/se/prensa/se-publica-en-el-dof-la-modificacion-de-aranceles-de-la-ligie' },
        { label: 'Secretaría de Economía: countries with trade agreements with Mexico', url: 'https://www.gob.mx/se/acciones-y-programas/comercio-exterior-paises-con-tratados-y-acuerdos-firmados-con-mexico' },
        { label: 'Government of Mexico: Lo que debes saber del IVA (PDF)', url: 'https://www.gob.mx/cms/uploads/attachment/file/850660/Dato-3_IVA.pdf' },
        { label: 'SAT: Inscripción al Padrón de Importadores', url: 'https://www.sat.gob.mx/gobmx/Paginas/SAT_01_042.html' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-netherlands',
    name: 'Netherlands',
    code: 'NL',
    description: 'Sea and air freight from China to the Netherlands through Rotterdam and Amsterdam. FCL, LCL, express, customs clearance and door-to-door delivery.',
    majorPorts: ['Rotterdam', 'Amsterdam'],
    transitTime: '',
    popularGoods: ['Electronics', 'Machinery', 'Consumer Goods', 'Textiles', 'Food Products'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to the Netherlands: Costs & Times',
      metaDescription:
        'Shipping from China to the Netherlands: sea, air and express options, the Port of Rotterdam, and Dutch import VAT and EU customs rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to the Netherlands moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive mainly at Rotterdam, which has deep-sea connections to more than 1,000 ports. Sea is the cheapest and slowest, air and express are faster. Dutch VAT at the standard 21 percent rate and any EU duty apply, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China, the Netherlands is a common entry point into Europe, thanks to the Port of Rotterdam. This guide covers how pricing works, how the shipping options compare, which ports your cargo moves through, and the Dutch and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy but takes the longest. Air freight costs more but arrives much sooner. The right choice comes down to how fast you need the goods and how much they weigh and measure. One Dutch rule worth knowing: with an Article 23 authorisation you can file import VAT in your VAT return instead of paying it at customs, which helps cash flow. You still need an EORI number to clear customs. Request a live quote any time and we will price your exact shipment for your dates.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, and the season. Rates move week to week, so we quote each shipment for your exact cargo, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Season: demand, and so rates, tend to rise before Chinese New Year and in the autumn peak before the holidays.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time and the cost; ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include import VAT, duty, or the customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the cheapest way to move anything large or heavy from China. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL takes longer than FCL, because the cargo has to be grouped with other shipments before sailing and split out again on arrival. Rotterdam is the usual sea gateway. The Port of Rotterdam says it is the first and last port of call in Europe for the largest container ships, so many Asia to Europe services call there. Timing depends on the line and the route, so we confirm it for your sailing when we quote. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Amsterdam Schiphol. It costs much more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates usually fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to the Netherlands. As shipments get heavier, standard air freight usually becomes the cheaper fast option, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any urgent shipment.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Netherlands-bound containers. For air freight, the main gateways are Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen. On the Dutch side, Rotterdam is the main gateway. The port says it has deep-sea connections to more than 1,000 international ports and is the first and last port of call for the largest container ships. Amsterdam handles additional cargo, and Amsterdam Schiphol is the usual air gateway. Rotterdam acts as an outer border of the EU, so once goods clear customs there they can travel freely to other EU countries, which is why many importers clear in Rotterdam and truck goods on to Germany, Belgium, France, and beyond. Tell us your origin city in China and your delivery point and we will map the best routing.',
      customs: {
        summary:
          'The Netherlands sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs here they move freely across the EU. The Article 23 authorisation lets you file import VAT in your VAT return instead of paying it at customs. Plan every commercial shipment around import VAT and any duty, and confirm the duty for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'The standard VAT rate in the Netherlands (BTW) is 21 percent. When you import goods from outside the EU you pay VAT at customs, unless you hold an Article 23 authorisation (Vergunning artikel 23). With it, the Dutch Tax Administration lets you file that VAT in your VAT return instead, a cash-flow advantage of importing through the Netherlands. This is also called the reverse-charge mechanism.',
          'EU customs duty is set by your product\'s commodity code. The EU\'s TARIC database gives an overview of the requirements for importing your goods into the EU, so look up your code there, or ask us, before you ship.',
          'You need an EORI number to import into the EU. One EORI number is valid throughout the EU, so you only need one even if you clear goods in more than one EU country.',
          'Rotterdam is an outer border of the EU. After customs clearance in Rotterdam, goods can travel freely through the other EU countries.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill. Agreeing the Incoterm up front avoids the most common dispute.',
          'Ask your supplier to use wood pallets and crates that are treated and stamped to ISPM 15, the international standard for wood packaging, so the packaging does not cause problems at the border.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Dutch and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For many Dutch importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses with an Article 23 authorisation sometimes prefer to be the importer of record so they can file the import VAT in their VAT return.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your delivery address in the Netherlands.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'Make sure you have an EORI number, and check whether an Article 23 authorisation suits your business.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from the origin port, for example Shanghai, Ningbo, or Shenzhen, to Rotterdam or Amsterdam Schiphol.',
        'We file the Dutch customs declaration, pay duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to the Netherlands?',
          answer:
            'It depends on the method, the size and weight of your shipment, and the season. Sea freight is priced per container or per cubic meter, and air and express per kilo of chargeable weight. VAT and any duty are extra. We quote each shipment for your exact cargo and dates.',
        },
        {
          question: 'How long does shipping from China to the Netherlands take?',
          answer:
            'Sea freight is the slowest option, air freight is much faster, and express courier is the fastest. Sea timing depends on the line and on whether it routes via the Suez Canal or round Africa. We confirm the timing for your shipment when we quote.',
        },
        {
          question: 'How long does sea freight from China to the Netherlands take?',
          answer:
            'It depends on the line, the route, and the ports. A full container (FCL) goes straight onto the ship, while shared-container (LCL) cargo takes longer because it is grouped with other shipments before sailing and split out on arrival. Allow extra time for customs clearance and delivery. We give you the timing for your sailing when we quote.',
        },
        {
          question: 'What is the cheapest way to ship from China to the Netherlands?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper per unit once you have enough volume to fill most of it. Air and express cost more but save time.',
        },
        {
          question: 'How much does it cost to ship a container from China to the Netherlands?',
          answer:
            'Container rates change week to week with demand, the season, and the route the line takes. We quote your container for your exact ports and dates, and we can compare it with a shared-container (LCL) option if your load is smaller.',
        },
        {
          question: 'Does the Netherlands charge VAT on goods from China?',
          answer:
            'Yes. The standard Dutch VAT rate is 21 percent, and you pay import VAT at customs unless you hold an Article 23 authorisation, which lets you file it in your VAT return instead. EU duty may also apply, depending on your product\'s commodity code.',
        },
        {
          question: 'What is the Article 23 license and why does it matter?',
          answer:
            'An Article 23 authorisation (Vergunning artikel 23) comes from the Dutch Tax Administration. With it, you file the import VAT in your VAT return instead of paying it at customs when the goods arrive. That means you do not have to pay the VAT up front at the border, which helps cash flow.',
        },
        {
          question: 'Why do importers ship into Rotterdam for the rest of Europe?',
          answer:
            'Rotterdam is an outer border of the EU, so after customs clearance there, goods can travel freely to the other EU countries. It also has deep-sea connections to more than 1,000 international ports.',
        },
        {
          question: 'What is the difference between FCL and LCL?',
          answer:
            'FCL (full container load) means you book a whole container for your goods alone. LCL (less than container load) means your goods share a container with other importers\' cargo and you pay only for the space you use. LCL suits smaller loads, takes a little longer, and FCL becomes cheaper per unit once you can fill most of a container.',
        },
        {
          question: 'What documents and duties apply when importing from China to the Netherlands?',
          answer:
            'The core documents are the commercial invoice, the packing list, and the bill of lading or air waybill, plus your EORI number. Duty depends on your product\'s commodity code in the EU TARIC database, and import VAT is charged at the Dutch rate unless you file it through an Article 23 authorisation.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rules and rates', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'Irish Revenue: EORI system (EORI valid throughout the EU)', url: 'https://www.revenue.ie/en/customs/businesses/electronic-systems/eori-system.aspx' },
        { label: 'European Commission: EU Customs Tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/customs-4/calculation-customs-duties/customs-tariff/eu-customs-tariff-taric_en' },
        { label: 'Irish Department of Agriculture: Wood packaging material and ISPM 15', url: 'https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/publications/wood-packaging-material-and-ispm-15/' },
        { label: 'Belastingdienst: Reverse-charging VAT when doing business abroad (Article 23)', url: 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/business/eu-rights-and-rules-in-the-netherlands/eu-businesses/reverse-charging-vat-when-doing-business-abroad' },
        { label: 'Port of Rotterdam: deep sea and feeder connections', url: 'https://www.portofrotterdam.com/en/logistics/connections/deep-sea-and-feeder' },
        { label: 'Port of Rotterdam: port customs', url: 'https://www.portofrotterdam.com/en/services/port-customs' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-new-zealand',
    name: 'New Zealand',
    code: 'NZ',
    description: 'Sea and air freight from China to New Zealand, into ports such as Auckland, Tauranga, and Wellington. FCL, LCL, express, and customs clearance services.',
    majorPorts: ['Auckland', 'Tauranga', 'Wellington'],
    transitTime: '',
    popularGoods: ['Consumer Goods', 'Electronics', 'Furniture', 'Machinery', 'Textiles'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to New Zealand: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to New Zealand: sea, air and express options, the main ports, GST, the China-NZ FTA and customs rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to New Zealand moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at New Zealand ports such as Auckland, Tauranga, or Lyttelton. Sea is the cheapest and slowest, air and express are faster. New Zealand GST of 15% applies to imports, and Chinese-origin goods can claim a preferential duty rate under the New Zealand-China Free Trade Agreement.',
      intro:
        'If you import from China into New Zealand, a free trade agreement can lower your duty, and border checks on biosecurity need care. This guide covers how pricing works, how the shipping options compare, which ports your cargo moves through, and the customs and GST rules you need to plan for. As a freight forwarder, we move cargo on this lane every week. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy but takes the longest. Air freight costs more but arrives much sooner. On cost, the New Zealand-China Free Trade Agreement gives Chinese-origin goods a preferential duty rate, and GST of 15% applies on top. Request a live quote any time and we will price your exact shipment for your dates.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, and the season. Rates move with vessel schedules and capacity, so we quote each shipment for your exact cargo, ports, and dates.',
        factors: [
          'Duty: Chinese-origin goods can claim a preferential rate under the New Zealand-China FTA, so check the rate for your product. GST of 15% applies on top.',
          'Border checks: Customs and MPI goods levies apply to each consignment, and cargo that is not clean or compliant can cost time and money.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles customs, GST, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include GST, any duty, the goods levies, or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to New Zealand shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL takes longer than FCL, because the cargo has to be grouped with other shipments before sailing and split out again on arrival. Cargo sails across the Pacific and arrives at a New Zealand port such as Auckland, Tauranga, or Lyttelton, which serves Christchurch and the South Island. Timing depends on the line, the origin port, and the New Zealand port, so we confirm it for your sailing when we quote. Border checks on arrival can add time. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Auckland. It costs much more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates usually fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to New Zealand. As shipments get heavier, standard air freight usually becomes the cheaper fast option. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao handle much of the New Zealand-bound cargo. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the New Zealand side, Auckland serves the Auckland region, Tauranga serves the Bay of Plenty and is a common alternative for the upper North Island, Wellington serves the lower North Island, and Lyttelton serves Christchurch and the South Island. Which port suits you depends on where your goods are going, since inland delivery is part of the total cost. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'New Zealand has a free trade agreement with China, so Chinese-origin goods can get a lower duty rate, and border checks on biosecurity are careful. Here is what applies when you import from China. Holding the right origin evidence unlocks the preferential rate, and clean, compliant cargo avoids holds.',
        points: [
          'Under the New Zealand-China Free Trade Agreement, Chinese-origin goods can be imported at the applicable preferential tariff rate. A certificate of origin is not required: you can claim the preference on a certificate of origin, or on an origin declaration from the exporter in China. You must be able to show evidence of origin if Customs asks.',
          'GST of 15% applies to imports. It is calculated on the customs value, plus any duty, plus your shipping and insurance costs.',
          'Customs does not collect duty or GST unless the value of the shipment is over NZ$1000, except on alcohol and tobacco. Overseas suppliers may charge GST on goods of NZ$1000 or less.',
          'A commercial importer needs a Customs client code for imports valued at NZ$1000 or more. You can apply for one yourself, or a customs broker or freight forwarder can help with the import entry.',
          'New Zealand Customs and the Ministry for Primary Industries (MPI) charge goods levies on each consignment to recover the cost of border checks, unless exempt. MPI is the border agency for biosecurity, so ask your supplier to use clean containers and treated wood packaging, and ask us to check the rules for your product.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, the import entry, and your evidence of Chinese origin for the FTA rate, plus any treatment certificates.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, New Zealand customs and border checks, GST and any duty, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is especially useful given the careful border checks, and we make sure the origin evidence for the New Zealand-China FTA is in place so you claim the preferential rate, and that wood packaging and containers are clean. The alternative, FOB or CIF, leaves the New Zealand clearance and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your New Zealand delivery address.',
        'We help you get the origin evidence for the New Zealand-China FTA so your goods can claim the preferential rate, and ask the supplier to use treated wood packaging.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from China to a New Zealand gateway such as Auckland, Tauranga, or Lyttelton.',
        'We clear customs and border checks, handle GST and any duty, and deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to New Zealand?',
          answer:
            'It depends on the mode, the size and weight of your cargo, and the season, and rates move week to week. We quote each shipment for your exact cargo and dates. GST of 15% applies on top, and the FTA can lower any duty.',
        },
        {
          question: 'Do I pay import duty shipping from China to New Zealand?',
          answer:
            'Chinese-origin goods can be imported at the preferential rate under the New Zealand-China Free Trade Agreement, which you claim with a certificate of origin or an exporter\'s origin declaration. Check the rate for your product. You still pay GST of 15% on the customs value plus any duty, shipping, and insurance.',
        },
        {
          question: 'How long does shipping from China to New Zealand take?',
          answer:
            'It depends on the mode, the line, and the port. Sea freight is the slowest and air and express are much faster, so we confirm the timing for your sailing or flight when we quote. Allow time for border checks and customs on arrival.',
        },
        {
          question: 'How strict are New Zealand border checks?',
          answer:
            'Careful. The Ministry for Primary Industries (MPI) manages biosecurity at the border alongside Customs, and both charge goods levies on each consignment. Ask your supplier to use clean containers and treated wood packaging, and ask us to check the rules for your product before you ship.',
        },
        {
          question: 'What is the cheapest way to ship from China to New Zealand?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill most of it. We quote both so you can compare.',
        },
        {
          question: 'Should I ship into Auckland or Tauranga?',
          answer:
            'Both serve the upper North Island. Wellington serves the lower North Island and Lyttelton serves Christchurch and the South Island. The best choice depends on where your goods are going, since inland delivery is part of the total cost.',
        },
        {
          question: 'Do I need to register to import into New Zealand?',
          answer:
            'A commercial importer needs a Customs client code for imports valued at NZ$1000 or more. You can apply for one yourself, or we can help you get set up, or handle the clearance for you under door-to-door.',
        },
        {
          question: 'What documents do I need to import from China to New Zealand?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, an import entry, and evidence of Chinese origin to claim the FTA rate, plus any treatment certificates. Treated wood packaging helps avoid holds.',
        },
      ],
      sources: [
        { label: 'New Zealand Customs: Duty and allowances', url: 'https://www.customs.govt.nz/sending-and-receiving/duty-and-gst/duty-and-allowances/' },
        { label: 'New Zealand Customs: Import payments', url: 'https://www.customs.govt.nz/business/import/import-payments/' },
        { label: 'New Zealand Customs: Client codes', url: 'https://www.customs.govt.nz/business/import/lodge-your-import-entry/client-codes/' },
        { label: 'New Zealand Customs: Fact Sheet 37, NZ-China FTA rules of origin for imports', url: 'https://www.customs.govt.nz/media/owrb5euc/fact-sheet-37-new-zealand-china-free-trade-agreement-nzcfta-information-about-rules-of-origin.pdf' },
        { label: 'New Zealand Customs: Start importing', url: 'https://www.customs.govt.nz/business/import/start-importing/' },
      ],
    },
  },
  {
    slug: 'shipping-china-to-singapore',
    name: 'Singapore',
    code: 'SG',
    description: 'Sea and air freight from China to Singapore through the Port of Singapore and Changi Airport. FCL, LCL, express air, and door-to-door delivery.',
    majorPorts: ['Port of Singapore'],
    transitTime: '',
    popularGoods: ['Electronics', 'Consumer Goods', 'Machinery', 'Chemicals', 'Textiles'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Singapore: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Singapore: sea, air and express options, the Port of Singapore, GST, dutiable goods and import permit rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Singapore moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Shenzhen, and Ningbo and arrive at the Port of Singapore or Changi Airport. Sea is the cheapest and slowest, air and express are faster. Singapore charges customs duty on only four categories of goods, so most cargo pays only GST, which is 9%.',
      intro:
        'If you import from China into Singapore, you are running one of the simpler lanes on the tax side, because most goods carry no customs duty. This guide covers how pricing works, how the shipping options compare, which ports your cargo moves through, and the Singapore customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy but takes the longest. Air freight costs more but arrives sooner. On tax, Singapore charges duty only on intoxicating liquors, tobacco products, motor vehicles, and petroleum products, so on a typical shipment you pay only GST, at 9%. Request a live quote any time and we will price your exact shipment for your dates.',
      originPorts: ['Shanghai', 'Shenzhen (Yantian)', 'Ningbo', 'Guangzhou', 'Xiamen'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, and the season. Rates move week to week, so we quote each shipment for your exact cargo, ports, and dates.',
        factors: [
          'Duty: Singapore charges customs duty on only four categories of goods, so for most cargo your main tax is GST at 9%.',
          'Season: demand, and so rates, tend to rise before Chinese New Year and in the busy months before the year-end holidays.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles GST and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL), with LCL minimums that make the per-CBM cost higher on very small volumes. Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight. Freight prices do not include GST or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Singapore shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL takes longer than FCL, because the cargo has to be grouped with other shipments before sailing and split out again on arrival. Cargo arrives at the Port of Singapore. Timing depends on the line, the origin port, and whether the sailing is direct, so we confirm it for your sailing when we quote. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Changi Airport. It costs more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates usually fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for less, and we can quote both side by side so you can weigh the time saving against the cost.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Singapore. As shipments get heavier, standard air freight usually becomes the cheaper fast option. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'Moderate', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Shenzhen (including the Yantian terminal), Ningbo-Zhoushan, Guangzhou, and Xiamen handle much of the Singapore-bound cargo. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the Singapore side, sea cargo arrives at the Port of Singapore and air cargo at Changi Airport. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Singapore is one of the simpler destinations on the tax side, because most goods carry no customs duty. Here is what applies when you import from China. The main things to know are that most goods pay only GST, and that you need a customs permit through TradeNet before the goods arrive.',
        points: [
          'Customs duty applies to only four categories of goods: intoxicating liquors, tobacco products, motor vehicles, and petroleum products. All other goods are non-dutiable and pay GST only.',
          'GST is 9%. On imports it is charged on the CIF value (cost, insurance, and freight), which includes any duty and all costs of selling and delivering the goods into Singapore. GST-registered companies should check with the Inland Revenue Authority of Singapore (IRAS) on how to account for it.',
          'Singapore and China are both in the RCEP agreement, but since most goods carry no duty, the saving from origin paperwork is usually small.',
          'You must get a customs import permit before the goods arrive. To do this, the importer registers for a Unique Entity Number (UEN), activates a Customs Account with Singapore Customs, and applies for the permit through TradeNet.',
          'Goods can be stored in a licensed warehouse or a zero-GST warehouse with duty and GST suspended until they are removed for local use, which suits re-export cargo.',
          'Core documents are the TradeNet import permit, commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin where relevant, plus any licences for controlled goods. Ask your supplier to use treated and marked wood packaging.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Singapore customs and GST, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. Because most goods carry no duty and the permit is filed electronically, this is a smooth lane, and DDP keeps it fully hands-off. The alternative, FOB or CIF, leaves the Singapore import permit and GST for you to arrange. For most importers, DDP is worth it for the convenience.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Singapore delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'We make sure the UEN, Customs Account, and import permit are in order. Most goods carry no duty, only GST.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from China to the Port of Singapore or Changi Airport.',
        'We file the TradeNet permit, handle GST, and clear your shipment, then deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Singapore?',
          answer:
            'It depends on the mode, the size and weight of your cargo, and the season, and rates move week to week. We quote each shipment for your exact cargo and dates. Most goods carry no duty, but GST of 9% applies.',
        },
        {
          question: 'Do I pay import duty shipping from China to Singapore?',
          answer:
            'For most goods, no. Singapore charges customs duty on only four categories: intoxicating liquors, tobacco products, motor vehicles, and petroleum products. All other goods are non-dutiable and pay GST only.',
        },
        {
          question: 'How long does shipping from China to Singapore take?',
          answer:
            'It depends on the mode, the line, and the origin port. Sea freight is the slowest and air and express are faster, so we confirm the timing for your sailing or flight when we quote.',
        },
        {
          question: 'What is the cheapest way to ship from China to Singapore?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill most of it. We quote both so you can compare.',
        },
        {
          question: 'How much is GST on imports to Singapore?',
          answer:
            'The GST rate in Singapore is 9%. On imports it is charged on the CIF value, which includes any duty and the costs of delivering the goods into Singapore. GST-registered companies should check with IRAS on how to account for it.',
        },
        {
          question: 'How does customs clearance work in Singapore?',
          answer:
            'You need a customs import permit before the goods arrive. The importer registers for a UEN, activates a Customs Account with Singapore Customs, and applies for the permit through TradeNet. We can handle this for you.',
        },
        {
          question: 'Can I store goods in Singapore before paying GST?',
          answer:
            'Yes. In a licensed warehouse or a zero-GST warehouse, duty and GST are suspended until the goods are removed for local use, which is useful for re-export cargo. We can help set this up if it suits your supply chain.',
        },
        {
          question: 'What documents do I need to import from China to Singapore?',
          answer:
            'You need a TradeNet import permit, a commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin where relevant, plus any licences for controlled goods.',
        },
      ],
      sources: [
        { label: 'Singapore Customs: Duties and dutiable goods overview', url: 'https://www.customs.gov.sg/doing-business/valuation-duties-and-fees/duties-and-dutiable-goods/duties-and-dutiable-goods-overview/' },
        { label: 'Singapore Customs: Import procedures overview', url: 'https://www.customs.gov.sg/doing-business/import-operations/import-procedures/import-procedures-overview/' },
        { label: 'Singapore Customs: Obtain a customs import permit', url: 'https://www.customs.gov.sg/doing-business/import-operations/import-procedures/obtain-a-customs-import-permit/' },
        { label: 'Singapore Customs: Licensed or zero-GST warehouses', url: 'https://www.customs.gov.sg/doing-business/import-operations/import-procedures/depositing-goods-in-licensed-or-zero-gst-warehouses/' },
        { label: 'IRAS: Current GST rates', url: 'https://www.iras.gov.sg/taxes/goods-services-tax-(gst)/basics-of-gst/current-gst-rates' },
        { label: 'Japan Customs: RCEP guide (list of RCEP members)', url: 'https://www.customs.go.jp/english/epa/rcep/rcep.html' },
      ],
    },
  },
  {
    slug: 'shipping-china-to-south-korea',
    name: 'South Korea',
    code: 'KR',
    description: 'Sea and air freight from China to South Korea through Busan, Incheon, and the Seoul area. FCL, LCL, express, and door-to-door delivery.',
    majorPorts: ['Busan', 'Incheon', 'Seoul'],
    transitTime: '',
    popularGoods: ['Electronics', 'Machinery', 'Consumer Goods', 'Textiles', 'Auto Parts'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to South Korea: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to South Korea: sea, air and express options, Busan and Incheon, VAT, the Korea-China FTA and UNI-PASS clearance. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to South Korea moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Qingdao, and Shenzhen and arrive at Busan or Incheon near Seoul. Sea is the cheapest and slowest, air and express are faster. Korean VAT of 10 percent applies to imports, and Chinese-origin goods can claim a preferential duty rate under the Korea-China FTA or RCEP with proof of origin.',
      intro:
        'If you import from China into South Korea, you are shipping between close neighbours, and a free trade agreement can lower your duty. This guide covers how pricing works, how the shipping options compare, which ports your cargo moves through, and the Korean customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy but takes the longest. Air freight costs more but arrives sooner. On tax, Korea charges VAT of 10 percent on imports, and the Korea-China FTA and RCEP can give Chinese-origin goods a preferential duty rate with proof of origin. Request a live quote any time and we will price your exact shipment for your dates.',
      originPorts: ['Shanghai', 'Qingdao', 'Ningbo', 'Shenzhen (Yantian)', 'Dalian'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, and the season. Rates move week to week, so we quote each shipment for your exact cargo, ports, and dates.',
        factors: [
          'Duty: under the Korea-China FTA and RCEP, Chinese-origin goods can claim a preferential rate with proof of origin, so check the rate for your product.',
          'Port: Busan and Incheon serve different parts of the country, so the port you pick changes the inland delivery cost.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, tax, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include duty, VAT, or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to South Korea shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL takes longer than FCL, because the cargo has to be grouped with other shipments before sailing and split out again on arrival. Cargo crosses the Yellow Sea or the East China Sea and arrives at Busan on the south coast, or at Incheon, which serves Seoul and the capital region. Timing depends on the line, the origin port, and the Korean port, so we confirm it for your sailing when we quote. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Beijing to Incheon Airport. It costs more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates usually fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for less, and we can quote both side by side so you can weigh the time saving against the cost.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to South Korea. As shipments get heavier, standard air freight usually becomes the cheaper fast option. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'Moderate', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Qingdao, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), and Dalian handle much of the Korea-bound cargo, with northern China ports closest to Korea. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Beijing. On the Korean side, Busan is the main sea gateway on the south coast, and Incheon serves Seoul and the capital region. Air cargo usually lands at Incheon International Airport. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Korean customs is fully electronic, and a free trade agreement can lower or remove your duty. Here is what applies when you import from China. The main planning point is proof of origin, since that is what unlocks the preferential rate.',
        points: [
          'VAT is 10 percent. On imports, the tax base is the customs value plus customs duty and any other taxes on the goods, such as individual consumption tax or liquor tax. VAT on goods imported for your own business can usually be claimed back as input tax.',
          'The Korea-China FTA has been in force since December 20, 2015, and China and Korea are also both in RCEP. Chinese-origin goods can claim a preferential duty rate under either agreement with valid proof of origin, so check which gives the better rate for your product.',
          'Import declarations are filed electronically through the Korea Customs Service UNI-PASS system, by a customs broker or the owner of the goods. Importers usually declare after the goods arrive, but can file before arrival to speed things up.',
          'Customs duties and taxes are paid with the duty payment declaration, and declared duties can be audited after clearance.',
          'Core documents are the import declaration, commercial invoice, packing list, bill of lading or air waybill, the certificate of origin to claim the preferential rate, and any inspection or quarantine certificates.',
          'Ask your supplier to use treated and marked wood packaging, so the packaging does not cause problems at the border.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Korean customs, duty, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. DDP keeps it simple, and we make sure the FTA certificate of origin is in place so you claim any duty saving. The alternative, FOB or CIF, leaves the Korean clearance, duty, and delivery for you to arrange through a broker. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Korean delivery address.',
        'We check whether your goods qualify for a preferential rate under the Korea-China FTA or RCEP and help you get the certificate of origin.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from China to a Korean gateway such as Busan or Incheon.',
        'We clear Korean customs through UNI-PASS, handle duty and VAT, and deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to South Korea?',
          answer:
            'It depends on the mode, the size and weight of your cargo, and the season, and rates move week to week. We quote each shipment for your exact cargo and dates. Duty and VAT are extra, and the Korea-China FTA can lower the duty.',
        },
        {
          question: 'Do Chinese goods get a duty discount in South Korea?',
          answer:
            'Often, yes. The Korea-China FTA has been in force since December 20, 2015, and both countries are also in RCEP. Chinese-origin goods with valid proof of origin can claim a preferential rate under either agreement. Check which one gives the better rate for your product.',
        },
        {
          question: 'How long does shipping from China to South Korea take?',
          answer:
            'It depends on the mode, the line, and the ports. Sea freight is the slowest and air and express are faster, so we confirm the timing for your sailing or flight when we quote.',
        },
        {
          question: 'What is the cheapest way to ship from China to South Korea?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill most of it. We quote both so you can compare.',
        },
        {
          question: 'Which Korean port do shipments arrive at?',
          answer:
            'Busan is the main sea gateway on the south coast, and Incheon serves Seoul and the capital region. The best choice depends on where your goods are going, since inland delivery is part of the total cost.',
        },
        {
          question: 'How much is VAT on imports to South Korea?',
          answer:
            'VAT is 10 percent. On imports it is charged on the customs value plus customs duty and any other taxes on the goods. If you import goods for your own business, the VAT can usually be claimed back as input tax.',
        },
        {
          question: 'Do I need a customs broker to import into South Korea?',
          answer:
            'Not by law. The import declaration can be filed by a customs broker or by the owner of the goods, through the UNI-PASS system. Most companies use a broker, or we handle it for you under door-to-door.',
        },
        {
          question: 'What documents do I need to import from China to South Korea?',
          answer:
            'You need an import declaration, commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin to claim the preferential rate, plus any inspection or quarantine certificates your product needs.',
        },
      ],
      sources: [
        { label: 'Korea Value-Added Tax Act (official English text)', url: 'https://www.law.go.kr/LSW/eng/engLsInfoR.do?lsiSeq=257973' },
        { label: 'Korea Customs Service FTA Portal: FTA trend in Korea', url: 'https://www.customs.go.kr/engportal/cm/cntnts/cntntsView.do?mi=7304&cntntsId=2329' },
        { label: 'Korea Customs Service: Export-import clearance', url: 'https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=8054&cntntsId=2731' },
        { label: 'Korea Customs Service: Tax payment report and making payment', url: 'https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=8060&cntntsId=2736' },
      ],
    },
  },
  {
    slug: 'shipping-china-to-sweden',
    name: 'Sweden',
    code: 'SE',
    description: 'Sea and air freight from China to Sweden through Gothenburg, Helsingborg, and other Swedish ports. FCL, LCL, express, and customs clearance.',
    majorPorts: ['Gothenburg', 'Helsingborg', 'Norrkoeping', 'Gaevle', 'Halmstad'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Furniture', 'Automotive Parts'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Sweden: Cost & Transit Times',
      metaDescription:
        'Shipping from China to Sweden: compare sea, air and express freight, the Port of Gothenburg, and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Sweden moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Gothenburg, the biggest container port in Scandinavia and the only Swedish port with direct container services to and from Asia. Sea freight is the cheapest and slowest option, and air and express are faster. Swedish import VAT is 25 percent, and VAT-registered businesses report and pay it to the Swedish Tax Agency rather than to customs.',
      intro:
        'If you import from China into Sweden, you have a real advantage: Gothenburg has direct sea services from China, so your cargo can skip the extra transshipment leg. This guide covers what shapes the cost of shipping from China to Sweden, how the options compare on speed, which ports your cargo moves through, and the Swedish and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy, and air freight is much faster. Sweden is in the EU, so you need an EORI number to clear customs and should plan for 25 percent import VAT plus any duty. VAT-registered businesses report that VAT to the Swedish Tax Agency instead of paying it to customs. Request a quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the route, and the season. Freight prices change often, so we quote each shipment for your dates, ports, and cargo. Where we have current prices from our rate sheet, they are shown on this page.',
        factors: [
          'Direct service: Gothenburg has direct China sea services, so cargo for Gothenburg can avoid the transshipment leg that feeder ports rely on.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing: lines can sail via the Suez Canal or round Africa, which changes time and cost on the ocean leg.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Swedish import VAT, any customs duty, or the customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Sweden shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. Sweden has one big advantage: Gothenburg, the biggest container port in Scandinavia, has direct services to China and other parts of Asia, and the port says it is the only port in Sweden with direct container services to and from Asia. Other Swedish ports such as Helsingborg, Gaevle, and Halmstad are linked to the big European hubs by feeder ships, so cargo for them changes ship on the way. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. For smaller loads LCL is usually cheaper, and for larger loads a full container wins, so we quote both and you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Stockholm Arlanda, sometimes connecting through another airport on the way. It costs much more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is usually the fastest door-to-door option into Sweden, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Sweden. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Main Chinese export ports include Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou. For air freight, the main Chinese gateways include Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the Swedish side, Gothenburg is the biggest container port in Scandinavia. Its routes include direct services to China and other parts of Asia, plus daily feeder services to the big transshipment hubs on the continent. Helsingborg, Gaevle, and Halmstad also handle containers, mostly through feeder lines to larger European ports. Stockholm Arlanda is a common airport for air cargo into Sweden. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Sweden is in the EU, so EU customs rules and the EU tariff apply. Plan for 25 percent import VAT plus any duty. VAT-registered businesses report and pay the import VAT to the Swedish Tax Agency. Duty depends on your exact product, so check the commodity code for your goods in the EU TARIC database before you ship.',
        points: [
          'Swedish import VAT is 25 percent, the standard rate. If you are registered for Swedish VAT, you report and pay the import VAT to the Swedish Tax Agency, also when a customs representative files the declaration for you. If you are not registered for Swedish VAT, you pay it to Swedish Customs.',
          'EU customs duty depends on your product\'s commodity code. The EU\'s TARIC database lists the tariff and other measures for each code, and they apply the same way in every EU country.',
          'You need an EORI number to import into the EU. You get it from the customs authority of the EU country where your business is established.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM 15 standard: treated against pests and stamped with the official mark.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Swedish and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. A VAT-registered Swedish business often prefers to be the importer of record, because it reports the import VAT to the Swedish Tax Agency itself. For most Swedish importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Swedish delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Gothenburg, on a direct service where one fits your dates, or flies into Stockholm Arlanda.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Sweden?',
          answer:
            'It depends on the mode, the size and weight of your cargo, the route, and the season. Sea freight is the cheapest per unit, while air and express cost more. Import VAT and any duty are extra. We quote each shipment for your dates, so request a quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Sweden take?',
          answer:
            'It depends on the mode and the sailing or flight. Sea freight is the slowest and cheapest, air freight is much faster, and express courier is usually the fastest door to door. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We quote transit times per shipment.',
        },
        {
          question: 'Why is Gothenburg a good port for China imports?',
          answer:
            'Gothenburg is the biggest container port in Scandinavia, and its routes include direct services to China and other parts of Asia. The port says it is the only port in Sweden with direct container services to and from Asia, so cargo can avoid changing ship at a feeder hub.',
        },
        {
          question: 'How does Swedish import VAT work?',
          answer:
            'Swedish import VAT is 25 percent. If you are registered for Swedish VAT, you report and pay it to the Swedish Tax Agency, not to customs. If you are not registered for Swedish VAT, you pay it to Swedish Customs.',
        },
        {
          question: 'What is the cheapest way to ship from China to Sweden?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill most of it. Air and express cost more but save time. A direct sailing to Gothenburg is often a good balance of price and speed.',
        },
        {
          question: 'Do I need an EORI number to import from China to Sweden?',
          answer:
            'Yes. The EU says an EORI number is mandatory for all customs operations in the EU, including imports. Your forwarder or broker needs it to clear your goods, and you get it from the customs authority of the EU country where your business is established.',
        },
        {
          question: 'How much duty will I pay importing from China to Sweden?',
          answer:
            'Duty depends on your product\'s commodity code in the EU TARIC database, and the same EU measures apply in every EU country. On top of any duty, 25 percent import VAT applies, which VAT-registered businesses report to the Swedish Tax Agency.',
        },
        {
          question: 'What documents do I need to import from China to Sweden?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wooden pallets and crates must meet the ISPM 15 standard.',
        },
      ],
      sources: [
        { label: 'EU Your Europe: VAT rates in EU countries', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'Skatteverket: Purchasing goods from non-EU countries (imports)', url: 'https://www.skatteverket.se/servicelankar/otherlanguages/englishengelska/businessesandemployers/startingandrunningaswedishbusiness/vat/purchasesfromcountriesoutsidetheeu/purchasinggoodsfromnoneucountries.4.70685bee19c85dd5dd0257e.html' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs-4/customs-procedures-import-and-export/customs-procedures/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: EU customs tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/customs-4/calculation-customs-duties/customs-tariff/eu-customs-tariff-taric_en' },
        { label: 'Swedish Board of Agriculture: Wood packaging material', url: 'https://jordbruksverket.se/wpm' },
        { label: 'Port of Gothenburg: Container', url: 'https://www.portofgothenburg.com/services/cargo/container/' },
        { label: 'Port of Gothenburg: Direct traffic to Asia increases', url: 'https://www.portofgothenburg.com/about/articles/direct-traffic-between-the-port-of-gothenburg-and-asia-increases/' },
        { label: 'Helsingborgs Hamn: Om hamnen', url: 'https://www.port.helsingborg.se/om-hamnen/' },
        { label: 'Helsingborgs Hamn: Våra hamnar', url: 'https://www.port.helsingborg.se/sjotjanster/vara-hamnar/' },
        { label: 'Gävle Hamn: Service och terminaler', url: 'https://gavlehamn.se/service-och-terminaler/' },
        { label: 'Hallands Hamnar: Sjötransport', url: 'https://hallandshamnar.se/vara-tjanster/sjotransport.html' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-norway',
    name: 'Norway',
    code: 'NO',
    description: 'Sea and air freight from China to Norway through Oslo, Larvik, Kristiansand, and other Norwegian ports, with feeder links from Europe. FCL, LCL, and customs clearance.',
    majorPorts: ['Oslo', 'Bergen', 'Stavanger', 'Drammen', 'Kristiansand', 'Haugesund'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Marine Equipment', 'Industrial Supplies'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Norway: Cost & Transit Times',
      metaDescription:
        'Shipping from China to Norway: compare sea, air and express freight, the Port of Oslo, and Norwegian customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Norway moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and reach Norway on a feeder from a larger European port, for example into Oslo. Sea freight is the cheapest and slowest option, and air and express are faster. Norwegian import VAT is 25 percent, and because Norway is outside the EU customs union, goods must clear Norwegian customs even after they enter Europe.',
      intro:
        'If you import from China into Norway, one thing catches people out: Norway is outside the EU customs union, so unlike Sweden or Denmark it runs its own customs, and goods must be cleared for Norway even after they enter Europe. This guide covers what shapes the cost of shipping from China to Norway, how the options compare on speed, which ports your cargo moves through, and the Norwegian customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy, though cargo feeders in from a larger European port. Air freight is much faster. On tax, Norway charges 25 percent import VAT. Norwegian Customs says most goods are free of customs duty, with duty mainly on textiles, such as clothing, and food. Request a quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the route, and the season. Freight prices change often, so we quote each shipment for your dates, ports, and cargo. Where we have current prices from our rate sheet, they are shown on this page.',
        factors: [
          'Own customs: Norway is outside the EU customs union, so goods must clear Norwegian customs, even after entering Europe through an EU port.',
          'Routing: cargo feeders in from a larger European port, so the feeder leg affects transit and cost.',
          'Duty: most goods are free of customs duty, but textiles and foodstuffs can carry duty on top of the 25 percent VAT.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Norwegian import VAT, any customs duty, or the customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Norway shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. The container lines listed by the Port of Oslo run between Oslo and other European ports, and Larvik has weekly container calls to Hamburg, Bremerhaven, Rotterdam, and Antwerp. So cargo from China sails on the main Asia to Europe route to a larger European port, then a feeder ship carries it to Norway. Build that extra leg into your timeline. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. For smaller loads LCL is usually cheaper, and for larger loads a full container wins, so we quote both and you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Oslo Gardermoen, sometimes connecting through another airport on the way. It costs much more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is usually the fastest door-to-door option into Norway, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Norway. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Main Chinese export ports include Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou. For air freight, the main Chinese gateways include Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the Norwegian side, the Port of Oslo has a container terminal run by Yilport Oslo, with weekly calls from container lines that link Oslo to ports across Europe. Larvik and Kristiansand also handle containers on routes to European ports. Because cargo connects at a larger European port first, build the feeder leg into your timeline. Oslo Gardermoen is a common airport for air cargo. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'The important thing about Norway is that it is outside the EU customs union, so it runs its own customs. Customs borders and procedures stay in place between Norway and the EU, so a shipment cleared at an EU port is not cleared for Norway. Here is what applies. Confirm the duty for your product, since it depends on what you are importing.',
        points: [
          'Norway is in the EEA but outside the EU customs union, which the EU says does not extend to Norway. Customs borders and procedures stay in place, so goods must be cleared for Norway even if they entered Europe through an EU port.',
          'Import VAT (MVA) is charged at the normal rate of 25 percent. If you are in the Norwegian VAT register, you calculate and report the import VAT to the Norwegian Tax Administration on your return. If you are not, you pay it to Norwegian Customs at import.',
          'Norwegian Customs says most goods are free of customs duty, and duty applies mainly to textiles, such as clothing, and foodstuffs. Norway has free trade agreements with several countries, which can lower duty on some goods, so check the Customs Tariff for your product.',
          'For low-value sales to consumers, online stores in the VOEC register charge Norwegian VAT at checkout on goods under NOK 3,000 per item. Commercial freight is declared to Norwegian Customs in the normal way.',
          'As a rule, all goods must be declared to Norwegian Customs on a customs declaration at import. Core documents are the commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin where relevant.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg and the feeder into Norway, Norwegian customs, duty, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. Because Norway has its own customs outside the EU, having us handle the separate Norwegian clearance is especially useful. The alternative, FOB or CIF, leaves the Norwegian clearance, duty, and delivery for you to arrange as the importer. For most Norwegian importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Norwegian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'Check how the importer will handle import VAT: a business in the Norwegian VAT register reports it on its return, while others pay it to customs. We can help if you are unsure.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to a larger European port and feeders to Norway, for example to Oslo, or flies into Oslo Gardermoen.',
        'We clear Norwegian customs, handle duty and 25 percent VAT, and deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Norway?',
          answer:
            'It depends on the mode, the size and weight of your cargo, the route, and the season. Sea freight is the cheapest per unit, while air and express cost more. Import VAT and any duty are extra. We quote each shipment for your dates, so request a quote for your exact cargo.',
        },
        {
          question: 'Is shipping to Norway the same as shipping to the EU?',
          answer:
            'No. Norway is in the EEA but the EU customs union does not extend to it, so customs borders and procedures stay in place. A shipment cleared at an EU port such as Rotterdam is not cleared for Norway; it must be declared and cleared again for Norway, unlike Sweden or Denmark.',
        },
        {
          question: 'How long does shipping from China to Norway take?',
          answer:
            'It depends on the mode and the sailing or flight. Sea freight is the slowest and cheapest, air freight is much faster, and express courier is usually the fastest door to door. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We quote transit times per shipment.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Norway?',
          answer:
            'Norway charges import VAT at the normal rate of 25 percent. Norwegian Customs says most goods are free of customs duty, and duty applies mainly to textiles, such as clothing, and foodstuffs. Check the Customs Tariff for your exact product.',
        },
        {
          question: 'What is the cheapest way to ship from China to Norway?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill most of it. Air and express cost more but save time.',
        },
        {
          question: 'Why does shipping to Norway go through another port first?',
          answer:
            'The container lines listed by the Port of Oslo run between Oslo and other European ports, and Larvik\'s weekly calls go to Hamburg, Bremerhaven, Rotterdam, and Antwerp. So cargo from China sails to a larger European port first, then a feeder ship carries it to Norway. That extra leg adds time.',
        },
        {
          question: 'Do I need to register to import into Norway?',
          answer:
            'If you are in the Norwegian VAT register, you report the import VAT on your return to the Norwegian Tax Administration. If you are not, for example a foreign company, you pay import VAT to Norwegian Customs at import. On a door-to-door shipment we handle clearance for you.',
        },
        {
          question: 'What documents do I need to import from China to Norway?',
          answer:
            'You need a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods.',
        },
      ],
      sources: [
        { label: 'Norwegian Tax Administration: VAT rates', url: 'https://www.skatteetaten.no/en/rates/value-added-tax/' },
        { label: 'Norwegian Tax Administration: VOEC', url: 'https://www.skatteetaten.no/en/business-and-organisation/vat-and-duties/vat/foreign/e-commerce-voec/' },
        { label: 'Norwegian Customs: Import guide for beginners', url: 'https://toll.no/en/corporate/import/import-guide-for-beginners' },
        { label: 'European Commission Access2Markets: EEA Agreement', url: 'https://trade.ec.europa.eu/access-to-markets/en/content/european-economic-area-eea-agreement' },
        { label: 'Port of Oslo: Regular routes', url: 'https://www.oslohavn.no/en/menu/gods/regular-routes/' },
        { label: 'Larvik Havn: Containerhavn', url: 'https://larvik.havn.no/vare-tjenester/containerhavn/' },
        { label: 'Kristiansand Havn: Annual report 2025', url: 'https://www.portofkristiansand.no/filer/%C3%85rsmelding_2025_-_Kristiansand_Havn_IKS.pdf' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-czech-republic',
    name: 'Czech Republic',
    code: 'CZ',
    description: 'Sea and rail freight from China to the Czech Republic via the Paskov and Melnik inland terminals. FCL, LCL, and customs clearance.',
    majorPorts: ['Awt Paskov', 'Melnik'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Automotive Parts', 'Consumer Goods', 'Industrial Equipment'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Czech Republic: Costs & Times',
      metaDescription:
        'Shipping from China to the Czech Republic: compare sea, rail, air and express freight, gateway ports, inland terminals and EU customs. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to the Czech Republic moves cargo by sea freight, rail freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Czechia is landlocked, so sea cargo arrives at a port like Hamburg or Koper and moves inland by road or rail. We quote the transit time for your route. Czech import VAT is 21 percent plus any EU duty, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into the Czech Republic, two things shape your shipment: Czechia is landlocked, so you pick a gateway seaport in another country, and China-Europe rail is another option. This guide covers what drives the cost of shipping from China to the Czech Republic, how the options compare on speed, which ports and routes your cargo moves through, and the Czech and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have several ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), rail freight, air freight, and express courier. Sea freight is the cheapest for anything large or heavy, but also the slowest. Rail sits between sea and air on cost and speed, and air freight is the fastest of the bulk options. Czechia is in the EU, so you need an EORI number to clear customs and should plan for 21 percent import VAT plus any duty. A lot of Czech imports are automotive and manufacturing parts, so reliable transit matters. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the gateway port, the size and weight of your cargo, and the season. Ocean rates in particular move week to week, and inland haulage from the port to your address is part of the total. We quote each shipment for your goods, route and dates.',
        factors: [
          'Gateway port: Hamburg and Bremerhaven in Germany and Koper in Slovenia are common choices. Each gives a different inland leg, so compare the total landed cost.',
          'Mode: sea is cheapest, rail sits in the middle, air is faster and dearer, express is fastest and dearest.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time and cost. Ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, inland haulage, and delivery into one price, which removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) to the gateway port, plus inland haulage, or per cubic meter (LCL). Rail freight is priced per container and sits between sea and air on cost and speed. Air and express are priced on chargeable weight. Freight prices do not include Czech import VAT or EU duty, covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Czech Republic shipping and the cheapest way to move anything large or heavy, but because Czechia is landlocked, the choice of gateway port matters. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it, while shared container space (LCL) means you pay only for the space you use, better for smaller loads. Common gateways are Hamburg and Bremerhaven in Germany, which have rail links to the Melnik terminal, and Koper in Slovenia, which is building up its business in the Czech market. Polish ports are another option for Moravia through the Paskov terminal near Ostrava. From the port, cargo moves to Prague, Brno, or Ostrava by road or rail. LCL takes longer than FCL, because the cargo has to be grouped and unpacked. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. As a rule, small loads usually go LCL and larger loads go in a full container, and we quote the gateway options so you can compare.',
      airFreightBody:
        'Air freight is the fast option, and rail is a middle ground for Czechia. Air cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Prague, or to a larger European airport and on by truck. Rail freight runs on the China-Europe network from inland Chinese hubs to Central Europe, between sea and air on cost and speed. Air is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size, and per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote sea, rail, and air side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into the Czech Republic, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to the Czech Republic. Once a shipment gets heavier, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL (via gateway port)', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Rail freight (to Czech terminals)', time: 'Quoted per shipment', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive heavy cargo' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Sea cargo for the Czech Republic can leave from Chinese ports such as Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou. For air freight, common departure airports are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong, and rail services start from inland Chinese hubs. Because the Czech Republic is landlocked, sea cargo arrives at a gateway port in another country and then moves inland. Hamburg connects markets in Germany and Central and Eastern Europe by rail, barge and truck, and river barges from Hamburg reach as far as the Czech Republic. Melnik is the Rail Cargo Group\'s main intermodal terminal in the Czech Republic and a hub for trains from Hamburg and Bremerhaven. Paskov, near Ostrava and the Polish and Slovak borders, is run by PKP CARGO INTERNATIONAL as a hub linking Czech industry with Polish ports, and it has a customs office on site. Koper in Slovenia counts the Visegrad countries, which include Czechia, among its most important hinterland markets. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'The Czech Republic is part of the EU customs union, so the same EU tariff applies here as in every other EU country. There is no VAT-free allowance on imports, so plan around 21 percent import VAT and any duty. Rates depend on your exact product, so confirm the duty for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'Czech import VAT is 21 percent, with a reduced 12 percent rate for some goods. It is charged on the customs value plus duties and other charges, such as shipping and insurance. If you are a VAT-registered business, you can usually deduct the VAT you pay on business purchases in your VAT return.',
          'EU customs duty is usually a percentage of the customs value of the goods, and the rate depends on your product\'s commodity code in the TARIC database. TARIC also lists anti-dumping duties, which apply to some goods from some countries, so check your code before you ship, especially for automotive parts.',
          'You need an EORI number to clear goods through EU customs. A business established in the Czech Republic gets it from Czech customs. One EORI number covers customs operations across the EU.',
          'The old VAT exemption for imported goods below EUR 22 was abolished on 1 July 2021, so import VAT applies from the first euro. Since 1 July 2026 the EU also charges a temporary customs duty of EUR 3 per item on low-value parcels worth up to EUR 150, counted by tariff classification, not by quantity.',
          'You can clear customs at the gateway port or in the Czech Republic. EU customs transit suspends duties and taxes while the goods travel, so clearance can happen at the destination instead of the port where they entered the EU. We set up whichever suits your routing.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading, air waybill, or rail consignment note.',
          'Wood pallets and crates entering the EU must be treated and marked to the ISPM 15 standard.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg, the inland haulage from the gateway port, Czech and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is especially useful for a landlocked destination, where the gateway-port and inland legs add complexity, and for just-in-time automotive cargo. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Czech importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Czech delivery address.',
        'We recommend the best route (sea via Hamburg or Koper plus inland, rail, or air) and quote your options, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo arrives at a gateway port and moves inland by road or rail, takes the China-Europe rail corridor, or flies in.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to the Czech Republic?',
          answer:
            'It depends on the mode, the gateway port, the inland leg, and the size and weight of your cargo. Sea is the cheapest per unit, rail sits between sea and air, and air and express cost the most. Import VAT and duty are extra. Request a live quote.',
        },
        {
          question: 'How does cargo reach the Czech Republic if it is landlocked?',
          answer:
            'Sea cargo arrives at a gateway port in another country, such as Hamburg or Bremerhaven in Germany or Koper in Slovenia, then moves inland by road or rail to Prague, Brno, or Ostrava. The Melnik terminal has trains from Hamburg and Bremerhaven, and the Paskov terminal links Czech industry with Polish ports.',
        },
        {
          question: 'How long does shipping from China to the Czech Republic take?',
          answer:
            'Sea plus the inland leg is the slowest option, rail is faster, air is faster again, and express is quickest for small parcels. Lines can route via the Suez Canal or round Africa, which changes the transit time, so we quote the time for your route.',
        },
        {
          question: 'Should I ship via Hamburg or Koper?',
          answer:
            'Hamburg is Germany\'s biggest multipurpose port with rail links into the Czech Republic. Koper in Slovenia is the Adriatic option. We can quote both ways, and the right choice depends on total landed cost and schedule reliability.',
        },
        {
          question: 'How does rail freight from China to the Czech Republic compare?',
          answer:
            'Rail runs from inland Chinese hubs to Central Europe and is faster than sea at a price between sea and air. It is useful when sea is too slow and air too costly. We quote it alongside sea and air.',
        },
        {
          question: 'What is the cheapest way to ship from China to the Czech Republic?',
          answer:
            'Sea freight is usually the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it.',
        },
        {
          question: 'Do I need an EORI number to import from China to the Czech Republic?',
          answer:
            'Yes. An EORI number is required to clear goods through EU customs, and one number covers customs operations across the EU. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'What documents do I need to import from China to the Czech Republic?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading, air waybill, or rail consignment note, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must meet the ISPM 15 standard.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rates in EU countries', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'Your Europe: Charging and deducting VAT', url: 'https://europa.eu/youreurope/business/finance-and-tax/vat/charging-deducting-vat/index_en.htm' },
        { label: 'European Commission: Buying goods from outside the EU (import VAT and duty)', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/importation/buying-goods-online-coming-non-european-union-country_en' },
        { label: 'European Commission: EU Customs Tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/online-services/online-services-and-databases-customs/eu-customs-tariff-taric_en' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-operation/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: Customs formalities for low value consignments', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-operation/customs-formalities-low-value-consignments_en' },
        { label: 'European Commission: EUR 3 customs duty for low-value parcels', url: 'https://commission.europa.eu/news-and-media/news/ensuring-fairness-and-safety-eur3-customs-duty-low-value-parcels-2026-06-29_en' },
        { label: 'European Commission: Customs transit', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-transit_en' },
        { label: 'Polish plant health service (PIORIN): Wood packaging and ISPM 15', url: 'https://www.gov.pl/web/piorin-en/wood-packaging' },
        { label: 'Port of Hamburg', url: 'https://www.hafen-hamburg.de/en/portofhamburg/port-of-hamburg/' },
        { label: 'Rail Cargo Group: Terminal Melnik', url: 'https://www.railcargo.com/en/services/intermodal-logistics/terminals/standorte/melnik' },
        { label: 'PKP CARGO INTERNATIONAL: Intermodal transport and Terminal Paskov', url: 'https://www.pkpcargointernational.com/en/what-are-we-doing/intermodal-transport' },
        { label: 'PKP CARGO INTERNATIONAL: Baltic Sea to Central Europe logistics debate', url: 'https://www.pkpcargointernational.com/en/news/from-the-baltic-sea-to-central-europe-a-debate-on-new-logistics-routes-is-to-be-held-in-ostrava' },
        { label: 'Port of Koper: Koper, the sea gateway for Visegrad countries', url: 'https://www.luka-kp.si/en/news/koper-the-sea-gateway-for-visegrad-countries/' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-spain',
    name: 'Spain',
    code: 'ES',
    description: 'Sea and air freight from China to Spain through Valencia, Barcelona and Algeciras. FCL, LCL, express, customs clearance and door-to-door delivery.',
    majorPorts: ['Barcelona', 'Valencia', 'Algeciras'],
    transitTime: '',
    popularGoods: ['Textiles', 'Electronics', 'Furniture', 'Consumer Goods', 'Machinery'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Spain: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Spain: sea, air and express options, Valencia, Barcelona and Algeciras, and Spanish import VAT and EU customs rules. Free quote.',
      answerCapsule:
        'Shipping from China to Spain moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Valencia, Barcelona, or Algeciras. Sea is the cheapest and slowest, air and express are faster. Spanish VAT at the standard 21 percent rate and any EU duty apply, and businesses that meet certain conditions can defer import VAT to their VAT return instead of paying it at the border.',
      intro:
        'If you import from China into Spain, you are shipping to a country with several big Mediterranean gateways, and China is Valencia\'s largest international market for container traffic. This guide covers how pricing works, how the shipping options compare, which ports your cargo moves through, and the Spanish and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy but takes the longest. Air freight costs more but arrives much sooner. Spain is in the EU, so you need an EORI number to clear customs and should plan for VAT at the standard 21 percent rate plus any duty. One Spanish rule worth knowing: businesses that meet certain conditions can choose to pay import VAT through their VAT return instead of at the border. Request a live quote any time and we will price your exact shipment for your dates.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, and the season. Rates move week to week, so we quote each shipment for your exact cargo, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Season: demand, and so rates, tend to rise before Chinese New Year and in the autumn peak before the holidays.',
          'Port choice: Valencia, Barcelona, and Algeciras serve different parts of the country, so the right one depends on where the goods are going inland.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time and the cost; ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include import VAT, duty, or the customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the cheapest way to move anything large or heavy from China. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL takes longer than FCL, because the cargo has to be grouped with other shipments before sailing and split out again on arrival. For Spain, ships usually call at Valencia, Barcelona, or Algeciras, and the best port depends on where your goods are going. Timing depends on the line, the route, and the port, so we confirm it for your sailing when we quote. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Madrid or Barcelona. It costs much more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates usually fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Spain. As shipments get heavier, standard air freight usually becomes the cheaper fast option, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any urgent shipment.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Spain-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Spanish side, Valencia says China is its largest international market for container traffic. Barcelona is the other big Mediterranean gateway, often used for Catalonia and the northeast, and Algeciras, near Gibraltar, serves the south. Bilbao is a northern option, and Madrid is the usual air-cargo gateway. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Spain is in the EU, so the EU customs tariff applies, and EU tariff measures apply the same way in every EU country. Plan every commercial shipment around import VAT and any duty, though Spain lets businesses that meet certain conditions defer the VAT. Duty depends on your exact product, so confirm the rate for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'The standard VAT rate in Spain (IVA) is 21 percent. Under certain conditions, a business can pay import VAT through its VAT return for the period in which it receives the customs assessment, instead of paying it at the border (IVA diferido). This helps cash flow.',
          'To use deferred import VAT you must opt in with a census declaration to the Spanish Tax Agency during November, before the calendar year in which it should apply. The choice then rolls over to later years unless you give it up.',
          'EU customs duty is set by your product\'s commodity code. The EU\'s TARIC database gives an overview of the requirements for importing your goods into the EU, so look up your code there, or ask us, before you ship.',
          'You need an EORI number to import into the EU. One EORI number is valid throughout the EU, so you only need one even if you clear goods in more than one EU country.',
          'The EU VAT rates table does not cover special regions such as the Canary Islands, which follow their own tax rules. Treat Canary Islands shipments as a separate flow from the mainland and ask us before you ship.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Ask your supplier to use wood pallets and crates that are treated and stamped to ISPM 15, the international standard for wood packaging, so the packaging does not cause problems at the border.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Spanish and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record, though a regular Spanish importer often prefers to be the importer of record so it can use deferred import VAT. For many Spanish importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Spanish delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from the origin port, for example Shanghai, Ningbo, or Shenzhen, to Valencia, Barcelona, Algeciras, or Madrid.',
        'We file the Spanish customs declaration, pay duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Spain?',
          answer:
            'It depends on the method, the size and weight of your shipment, the season, and which Spanish port you use. Sea freight is priced per container or per cubic meter, and air and express per kilo of chargeable weight. VAT and any duty are extra. We quote each shipment for your exact cargo and dates.',
        },
        {
          question: 'How long does shipping from China to Spain take?',
          answer:
            'Sea freight is the slowest option, air freight is much faster, and express courier is the fastest. Sea timing depends on the line, the port, and whether the ship routes via the Suez Canal or round Africa. We confirm the timing for your shipment when we quote.',
        },
        {
          question: 'Should I ship into Valencia, Barcelona, or Algeciras?',
          answer:
            'It depends on where your goods are going. Valencia suits central and eastern Spain, Barcelona suits Catalonia and the northeast, and Algeciras suits the south. We compare the routes, including the inland leg, when we quote.',
        },
        {
          question: 'Can I defer import VAT in Spain?',
          answer:
            'Yes, if your business meets the conditions. You opt in with a census declaration to the Spanish Tax Agency during November, before the year in which it should apply. You then pay import VAT through your VAT return instead of at the border.',
        },
        {
          question: 'What is the cheapest way to ship from China to Spain?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper per unit once you have enough volume to fill most of it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Spain?',
          answer:
            'Yes. Any trader who imports goods into the EU needs an EORI number, and it is valid throughout the EU. We can guide you through getting one before your first shipment.',
        },
        {
          question: 'How does VAT work for the Canary Islands?',
          answer:
            'The Canary Islands follow their own tax rules, separate from the standard Spanish VAT rate, and the EU VAT rates table lists them as a special region it does not cover. Treat a Canary Islands shipment as a separate customs and tax flow, and ask us before you ship.',
        },
        {
          question: 'What documents do I need to import from China to Spain?',
          answer:
            'The core documents are the commercial invoice, the packing list, and the bill of lading for sea or the air waybill for air, plus your EORI number. Some goods need extra certificates or licences, so tell us what you are shipping and we will check.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rules and rates', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'Irish Revenue: EORI system (EORI valid throughout the EU)', url: 'https://www.revenue.ie/en/customs/businesses/electronic-systems/eori-system.aspx' },
        { label: 'European Commission: EU Customs Tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/customs-4/calculation-customs-duties/customs-tariff/eu-customs-tariff-taric_en' },
        { label: 'Irish Department of Agriculture: Wood packaging material and ISPM 15', url: 'https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/publications/wood-packaging-material-and-ispm-15/' },
        { label: 'Spanish Tax Agency: IVA a la importacion, como diferir su pago', url: 'https://sede.agenciatributaria.gob.es/Sede/iva/iva-operaciones-comercio-exterior/iva-importacion-diferir-pago.html' },
        { label: 'Valenciaport: Valenciaport and Port of Shanghai reinforce their strategic connection', url: 'https://www.valenciaport.com/en/valenciaport-and-port-of-shanghai-reinforce-their-strategic-connection/' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-united-kingdom',
    name: 'United Kingdom',
    code: 'GB',
    description: 'Sea and air freight from China to the UK through Felixstowe, Southampton, London Gateway and Liverpool. FCL, LCL, express, customs clearance and door-to-door delivery.',
    majorPorts: ['Felixstowe', 'Southampton', 'London Gateway', 'Liverpool', 'Teesport', 'Grangemouth', 'Belfast', 'South Shields'],
    transitTime: '',
    popularGoods: ['Textiles', 'Electronics', 'Furniture', 'Consumer Goods', 'Machinery'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to the UK: Cost & Transit Times',
      metaDescription:
        'Shipping from China to the UK: sea, air and express options, UK ports, and the import VAT, duty and EORI rules you need to know. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to the UK moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at UK gateways such as Felixstowe, Southampton, and London Gateway. Sea is the cheapest and slowest, air and express are faster. UK import VAT at the standard 20 percent rate and any duty apply, and you may need a GB EORI number to import.',
      intro:
        'If you import from China, the UK is one of the busiest lanes you will run, and getting the cost, timing, and customs right makes a real difference to your margin. This guide covers how pricing works, how the shipping options compare, which ports your cargo moves through, and the UK customs and VAT rules you need to plan for. As a freight forwarder, we move cargo on this lane every week. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy but takes the longest. Air freight costs more but arrives much sooner. The right choice comes down to how fast you need the goods and how much they weigh and measure. One thing every UK importer should know up front: plan for import VAT at the standard 20 percent rate plus any duty, and check whether you need a GB EORI number before you ship. Request a live quote any time and we will price your exact shipment for your dates.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, and the season. Rates move week to week, so we quote each shipment for your exact cargo, ports, and dates.',
        factors: [
          'Season: demand, and so rates, tend to rise before Chinese New Year and in the autumn peak before the holidays.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time and the cost; ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include UK import VAT, duty, or the customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to UK shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL takes longer than FCL, because the cargo has to be grouped with other shipments before sailing and split out again on arrival. Sailing times change with the route the line takes, so we confirm the timing for your sailing when we quote. If you are not sure which suits you, we quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen to UK airports such as Heathrow, Manchester, and East Midlands. It costs much more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric (dimensional) weight, so bulky-but-light cargo is charged on its size. Per-kg rates usually fall as the shipment gets heavier. For most importers, air makes sense when getting the goods sooner is worth the premium, and when it is not, sea freight moves the same goods for far less. We can quote both side by side so the trade-off is clear.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to the UK. As shipments get heavier, standard air freight usually becomes the cheaper fast option, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of UK-bound containers. For air freight, the main gateways are Shanghai Pudong, Hong Kong, Guangzhou, and Shenzhen. On the UK side, Felixstowe, Southampton, and London Gateway are the usual deep-sea gateways for cargo from China. DP World says its Southampton terminal has direct services to major ports across Asia, and that London Gateway now takes calls on the Gemini Cooperation\'s Asia-Europe routes. For northern England, a northern port or an onward rail leg can cut inland haulage. UK airports such as Heathrow, Manchester, and East Midlands handle air cargo. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'UK customs is straightforward once you know the rules. Every commercial shipment is planned around import VAT and duty. Here is what applies when you import from China. Duty depends on your exact product, so confirm the rate for your goods\' commodity code on the UK Trade Tariff before you ship.',
        points: [
          'The standard UK VAT rate is 20 percent, and most goods are charged at it. VAT-registered businesses can account for import VAT on their VAT Return instead of paying it at the border, which is called postponed VAT accounting. You do not need approval to use it.',
          'Import duty depends on your goods\' commodity code. The commodity code works out the rate of Customs Duty and import VAT for your goods, so find the right code on the UK Trade Tariff before you ship.',
          'You may need a GB EORI number to move goods between Great Britain and any other country. HMRC usually issues it straight away, but if it needs to make checks it can take up to 5 working days.',
          'For consignments worth £135 or less, the overseas seller must charge and account for UK VAT at the point of sale. For consignments worth more than £135, normal import VAT and customs rules apply when the goods arrive.',
          'Some China-origin products carry anti-dumping duty on top of normal duty, for example ceramic tiles and bus and lorry tyres. Check the gov.uk trade remedies notices for your specific product.',
          'In practice the freight forwarder files the customs declaration, pays duty and import VAT to release the goods, and invoices you afterwards plus a clearance fee. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Solid wood packaging, such as pallets and crates, must meet the ISPM15 international standards if you use it to import goods into Great Britain. Ask your supplier to confirm this before the goods are loaded.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, UK customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB or DAP, leaves some of the clearance, duty, or delivery for you to arrange. For many UK importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to handle import VAT themselves through postponed VAT accounting.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your UK delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'Check whether you need a GB EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from the origin port, for example Shanghai, Ningbo, or Shenzhen, to a UK gateway such as Felixstowe, Southampton, or Heathrow.',
        'We file the UK customs declaration, pay duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does shipping from China to the UK cost?',
          answer:
            'It depends on the method, the size and weight of your shipment, and the season. Sea freight is priced per container or per cubic meter, and air and express per kilo of chargeable weight. UK import VAT and duty are extra. We quote each shipment for your exact cargo and dates, so request a live quote.',
        },
        {
          question: 'Why is shipping from China to the UK so expensive?',
          answer:
            'Ocean rates move with demand, the season, and the route the line takes. Lines can route via the Suez Canal or round Africa, and the longer route adds time and cost. Prices also tend to rise in peak season and before Chinese New Year. Choosing sea over air, consolidating shipments, and booking ahead of peak all help bring the cost down.',
        },
        {
          question: 'Do I have to pay import duty and VAT from China to the UK?',
          answer:
            'Yes. Most goods are charged VAT at the standard 20 percent rate, and duty applies at the rate set by your goods\' commodity code. VAT-registered businesses can account for import VAT on their VAT Return through postponed VAT accounting instead of paying it at the border.',
        },
        {
          question: 'Are there anti-dumping tariffs on goods from China?',
          answer:
            'Some specific China-origin products carry anti-dumping duty on top of normal duty, for example ceramic tiles and bus and lorry tyres. It depends entirely on the product and its commodity code, so check the gov.uk trade remedies notices, or ask us, before you commit to an order.',
        },
        {
          question: 'How long does it take to ship from China to the UK?',
          answer:
            'Sea freight is the slowest option, air freight is much faster, and express courier is the fastest. Sea timing depends on the route the line takes, via the Suez Canal or round Africa. We confirm the timing for your sailing or flight when we quote.',
        },
        {
          question: 'How long does a cargo ship take from China to the UK?',
          answer:
            'It depends on the line, the route, and the ports. A full container (FCL) goes straight onto the ship, while shared-container (LCL) cargo takes longer because it is grouped with other shipments before sailing and split out on arrival. Allow extra time for customs clearance and final delivery. We give you the timing for your sailing when we quote.',
        },
        {
          question: 'What is the cheapest way to ship from China to the UK?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper per unit once you have enough volume to fill most of it. Air and express cost more but save time.',
        },
        {
          question: 'How do I import goods from China to the UK?',
          answer:
            'Check whether you need a GB EORI number, agree the price and Incoterms with your supplier, and book a forwarder to move the goods and clear UK customs. The forwarder files the declaration, pays duty and import VAT, and arranges delivery. With door-to-door (DDP), we handle the whole process for you.',
        },
        {
          question: 'How much is shipping from China to the UK per kg?',
          answer:
            'Air freight and express are priced per kilo of chargeable weight, and the rate per kilo usually falls as the shipment gets heavier. Sea freight is not priced per kg; it is priced per container or per cubic meter, which works out far cheaper for heavy cargo. We quote your exact shipment.',
        },
        {
          question: 'How long does a parcel take from China to the UK?',
          answer:
            'A small parcel by express courier (DHL, FedEx, or UPS) is the fastest option, followed by standard air freight. For anything larger than a parcel, sea freight is far cheaper but takes several times longer. We confirm the timing when we quote.',
        },
      ],
      sources: [
        { label: 'GOV.UK: VAT rates', url: 'https://www.gov.uk/vat-rates' },
        { label: 'GOV.UK: Check when you can account for import VAT on your VAT Return', url: 'https://www.gov.uk/guidance/check-when-you-can-account-for-import-vat-on-your-vat-return' },
        { label: 'GOV.UK: Get an EORI number', url: 'https://www.gov.uk/eori' },
        { label: 'GOV.UK: Apply for an EORI number', url: 'https://www.gov.uk/eori/apply-for-eori' },
        { label: 'GOV.UK: VAT and overseas goods sold directly to customers in the UK', url: 'https://www.gov.uk/guidance/vat-and-overseas-goods-sold-directly-to-customers-in-the-uk' },
        { label: 'GOV.UK: Finding commodity codes for imports or exports', url: 'https://www.gov.uk/guidance/finding-commodity-codes-for-imports-or-exports' },
        { label: 'GOV.UK: Wood packaging for import and export', url: 'https://www.gov.uk/guidance/requirements-for-wood-packaging-used-for-imports-and-exports' },
        { label: 'GOV.UK: Trade remedies notice, anti-dumping duty on ceramic tiles from China', url: 'https://www.gov.uk/government/publications/trade-remedies-notices-anti-dumping-duty-on-ceramic-tiles-from-china/6071e2c4-3785-4b33-aba7-a53cefd64655' },
        { label: 'GOV.UK: Trade remedies notice, anti-dumping duty on bus and lorry tyres from China', url: 'https://www.gov.uk/government/publications/trade-remedies-notices-anti-dumping-duty-on-bus-and-lorry-tyres-from-china/trade-remedies-notice-202517-anti-dumping-duty-on-certain-pneumatic-tyres-new-or-retreaded-of-rubber-of-a-kind-used-for-buses-or-lorries-with-a' },
        { label: 'DP World Southampton: infrastructure facts', url: 'https://www.dpworld.com/en/ports-terminals/united-kingdom/southampton/infrastructure-facts' },
        { label: 'DP World: London Gateway container volumes record', url: 'https://www.dpworld.com/en/news/london-gateway-container-volumes-up-more-than-50-to-set-new-annual-record' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-united-states',
    name: 'United States',
    code: 'US',
    description: 'Sea and air freight from China to the USA, to ports such as Los Angeles, Long Beach, New York, Seattle and Savannah. FCL, LCL, express, customs and door-to-door delivery.',
    majorPorts: ['Los Angeles', 'Long Beach', 'New York', 'Seattle', 'Savannah'],
    transitTime: '',
    popularGoods: ['Electronics', 'Furniture', 'Textiles', 'Machinery', 'Auto Parts'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to the USA: Cost & Transit Times',
      metaDescription:
        'Shipping from China to the USA: compare sea, air and express freight, US ports, the ISF filing, duty and the end of duty-free de minimis. Get a free quote from upfreights.',
      answerCapsule:
        'Shipping from China to the USA moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Shenzhen, and Ningbo and arrive at US gateways such as Los Angeles, Long Beach, and New York. Sea freight is the cheapest and slowest, air is faster and dearer, and we quote the time and price for your exact sailing or flight. The old duty-free allowance for low-value shipments is suspended, so plan for duty and US fees on every shipment.',
      intro:
        'If you are importing from China, the route to the United States is the one you will use most, and it is also the one with the most moving parts. This guide covers what drives the cost of shipping from China to the USA, how the options compare on speed, which ports your cargo moves through, and what the customs rules mean for your bill. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run, not a generic checklist. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy and takes longest, more so to the East Coast. Air freight costs more but lands much sooner. The right choice comes down to how fast you need the goods and how much they weigh and measure. One thing has changed for everyone importing: US Customs has suspended the old duty-free treatment for low-value shipments, for goods of all countries, so every shipment now goes through a customs entry. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Shenzhen (Yantian)', 'Ningbo', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the destination coast, and the season. Ocean and air rates move with the market, so we do not print fixed prices here. Request a live quote and we will price your exact shipment, ports, and dates.',
        factors: [
          'Season: the late-summer and autumn peak, and the rush before Chinese New Year, push ocean rates up.',
          'Coast: East Coast and inland US delivery usually cost more than the West Coast.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles customs and delivery for one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, which is the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include US customs duty, the Merchandise Processing Fee, or the Harbor Maintenance Fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to USA shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which pays off once you have enough cargo to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo, and you pay only for the space you use, which is the better deal for smaller loads. Transit time depends on the coast. The West Coast (Los Angeles, Long Beach, Seattle) faces Asia across the Pacific, so it is the shorter sea leg. The East Coast (New York, Savannah) is a longer voyage, since the ship either goes through the Panama Canal or takes a longer route. LCL takes extra time, because the cargo is consolidated before departure and unpacked after arrival. Near the point where LCL and FCL cost about the same, it is worth pricing both, because LCL handling fees at the destination can eat the saving. We quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to US gateways such as Los Angeles, Chicago, and New York. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, which is the greater of the actual weight and the volumetric (dimensional) weight. That means bulky-but-light cargo is charged on its size, not its scale weight, so foam, packaging, and oversized items cost more than you might expect. Per-kg rates fall as the shipment gets heavier, so larger air shipments earn a better rate per kilo. For most importers, air makes sense when the value of arriving weeks sooner is worth the premium. When it is not, sea freight moves the same goods for a fraction of the cost, and we can quote both side by side so the trade-off is clear.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest and most reliable way to move goods from China to the USA. Once a shipment gets heavier, standard air freight usually becomes cheaper while still being fast, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL (West Coast)', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, FCL (East Coast)', time: 'Quoted per sailing', indicativeCost: 'Low', bestFor: 'East Coast or inland delivery' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Shenzhen (including the Yantian terminal), Ningbo, Qingdao, and Guangzhou are the usual starting points for US-bound containers. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the US side, where your cargo lands depends on the coast that suits your delivery. West Coast ports (Los Angeles, Long Beach, Seattle and Tacoma) face Asia and have the shorter sea leg. East Coast ports (New York and New Jersey, Savannah, Charleston) suit deliveries to the eastern half of the country, even though the sea leg is longer. Houston serves the Gulf and the south-central states. The busiest single lanes we run include Shanghai to Los Angeles, Shenzhen to Long Beach, and Ningbo to New York. You can browse the specific city-to-city routes we operate below and open any one for its own details.',
      customs: {
        summary:
          'Customs is where China to USA shipping has changed the most. The headline: US Customs and Border Protection (CBP) has suspended the duty-free de minimis treatment for shipments valued at $800 or less, for goods of all countries, so every shipment needs a customs entry. Tariffs on China-origin goods change often, so confirm the current duty on your products with a licensed customs broker before you ship.',
        points: [
          'Import duty is set by your product\'s HTS code (the product classification number) in the US tariff. Products of China can also owe extra Section 301 duties on top of the normal rate. Goods that are truly made in Hong Kong or Macau are not subject to these extra Section 301 duties.',
          'CBP says the de minimis suspension applies to merchandise valued at $800 or less arriving by all modes, including the postal network. Plan for duty on every shipment, whatever its value.',
          'Two CBP user fees are paid as part of the customs entry. On formal entries, the Merchandise Processing Fee is 0.3464 percent of the goods\' value, with a set minimum and maximum. The Harbor Maintenance Fee on imports is 0.125 percent of the value of the goods.',
          'For ocean cargo, the importer or their agent must file an Importer Security Filing (ISF, also called 10+2) with CBP. CBP counts an ISF as late if it is filed less than 24 hours before the goods are loaded on the ship in China, and late or wrong filings can bring penalties and holds. The ISF rule does not apply to air cargo.',
          'An ISF and a customs entry are backed by a customs bond, either a single transaction bond for one shipment or a continuous bond if you import regularly.',
          'Core documents are the commercial invoice, packing list, and the bill of lading (ocean) or air waybill (air). Wood pallets and crates must meet the ISPM 15 standard: treated by an approved method such as heat treatment or fumigation, and stamped with the IPPC mark.',
          'CBP does not require an import licence, but other agencies may need a permit or licence for some goods, such as food, cosmetics and supplements. Even when you use a broker, you as the importer of record stay responsible for the entry and all duties and fees.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, US customs and duty, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs broker or US logistics setup. The alternative, DDU or DAP, stops short of duty and final delivery, leaving those for you to arrange. For most small and mid-size importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your US delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with prices and timing for your dates, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from the origin port, for example Shanghai, Shenzhen, or Ningbo, to a US gateway such as Los Angeles, Long Beach, or New York.',
        'We file customs (including the ISF for ocean cargo), pay duty and fees, and clear your shipment with CBP.',
        'We deliver to your door. With DDP, duty and delivery are already handled, so there is nothing left to arrange.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to the USA?',
          answer:
            'It depends on the method, the size of your shipment, the coast, and the season. Sea freight is the cheapest per unit, LCL suits small loads, and air costs more per kilo. Rates change with the market, so request a live quote and we will price your exact cargo for your dates.',
        },
        {
          question: 'How long does shipping from China to the USA take?',
          answer:
            'It depends on the mode and the coast. Sea freight to the West Coast is quicker than to the East Coast, and air and express are much faster than sea. Customs clearance and final delivery add time on top. We give you the timing for your exact sailing or flight when we quote.',
        },
        {
          question: 'What is the cheapest way to ship from China to the USA?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper per unit once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'What is the fastest way to ship from China to the USA?',
          answer:
            'Express courier is fastest for small parcels, door to door, followed by air freight. Sea freight is much slower but far cheaper for larger shipments.',
        },
        {
          question: 'Is sea freight cheaper than air freight?',
          answer:
            'Yes, sea freight is almost always cheaper than air for anything large or heavy, often by a wide margin. Air freight only wins when the goods are urgent, light, or high-value enough that speed matters more than cost.',
        },
        {
          question: 'How much does a 20ft or 40ft container cost from China to the USA?',
          answer:
            'Container prices change with the season and the market, and East Coast and inland delivery usually cost more than the West Coast. We quote each container for your ports and dates, so ask us for a live price.',
        },
        {
          question: 'Do I have to pay import duty on goods from China, and how is it calculated?',
          answer:
            'Yes. Duty is set by your goods\' HTS classification code, and products of China can also owe extra Section 301 duties. CBP also charges a Merchandise Processing Fee of 0.3464 percent of value (with a minimum and maximum) and a Harbor Maintenance Fee of 0.125 percent of value. A customs broker can confirm your exact rate.',
        },
        {
          question: 'What changed with the de minimis (Section 321) rule?',
          answer:
            'CBP has suspended duty-free de minimis treatment for shipments valued at $800 or less, for goods of all countries and all modes, including post. These shipments now need a formal or informal entry and pay duty. Budget for duty on every order.',
        },
        {
          question: 'What is DDP (door-to-door) shipping and is it worth it?',
          answer:
            'DDP (Delivered Duty Paid) means we handle everything from your supplier\'s door to yours, including export clearance, freight, US customs, duty, and final delivery, for one price. For importers without their own customs broker or US logistics, it removes most of the work and risk, which usually makes it worth the cost.',
        },
        {
          question: 'Which US ports and routes are used, and what documents do I need?',
          answer:
            'Cargo from China usually arrives at West Coast ports like Los Angeles, Long Beach, and Seattle, or East Coast ports like New York and Savannah, from origin ports such as Shanghai, Shenzhen, and Ningbo. You need a commercial invoice, packing list, and a bill of lading or air waybill, plus an ISF filing for ocean shipments and a customs bond.',
        },
      ],
      sources: [
        { label: 'CBP: E-Commerce FAQs (de minimis suspension)', url: 'https://www.cbp.gov/trade/basic-import-export/e-commerce/faqs' },
        { label: 'CBP: User Fee Table', url: 'https://www.cbp.gov/trade/basic-import-export/user-fee-table' },
        { label: 'CBP: Importer Security Filing FAQ (PDF)', url: 'https://www.cbp.gov/sites/default/files/assets/documents/2023-May/ISF%20FAQ%202.0%20%28508%29.pdf' },
        { label: 'CBP: Tips for New Importers and Exporters', url: 'https://www.cbp.gov/trade/basic-import-export/importer-exporter-tips' },
        { label: 'CBP: Section 301 Trade Remedies FAQs', url: 'https://www.cbp.gov/trade/programs-administration/entry-summary/section-301-trade-remedies/faqs' },
        { label: 'CBP: Wood Packaging Materials', url: 'https://www.cbp.gov/border-security/protecting-agriculture/wpm' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-algeria',
    name: 'Algeria',
    code: 'DZ',
    description: 'Sea and air freight from China to Algeria, with sea cargo landing at Algiers, Oran, Béjaïa, Skikda, and Djen Djen. FCL, LCL, customs help, and door-to-door delivery.',
    majorPorts: ['Algiers', 'Oran', 'Béjaïa', 'Skikda', 'Djen Djen'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Construction Materials', 'Auto Parts', 'Consumer Goods'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Algeria: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Algeria: sea, air and express freight, Algerian ports, customs duty, TVA and bank paperwork to plan for. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Algeria moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Algerian ports such as Algiers, Oran, and Béjaïa. We quote transit time for each sailing or flight. Algerian customs duty and import TVA apply on arrival, with TVA charged on the customs value plus duty.',
      intro:
        'If you import from China into Algeria, the freight is only half the job. The customs and banking paperwork is strict and catches out first-time importers. This guide covers what drives the cost of shipping from China to Algeria, which ports your cargo moves through, and the Algerian customs and TVA rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Air freight costs more but arrives much sooner. Before your supplier ships, talk to your Algerian bank about the paperwork it needs to pay for the goods. Get that right first, then request a live quote and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. Rates move week to week, and the route a line takes into the Mediterranean also changes the cost. We quote each shipment for your exact cargo, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Duty and surcharges: Algerian customs duty depends on your product\'s tariff code, and some goods also carry an extra safeguard duty, so check your product before ordering.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, TVA, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky but light cargo costs more than it looks. Freight quotes do not include Algerian customs duty, TVA, or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Algeria shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo arrives at an Algerian port such as Algiers, Oran, Béjaïa, Skikda, or Djen Djen, and the right one depends on where your goods are going. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. LCL takes longer than FCL because the box has to be filled and then unpacked. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from Chinese hubs such as Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong toward Algiers, often with a change of plane at a hub on the way. Air costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky but light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for a fraction of the cost, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Algeria, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Algeria. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle Algeria-bound containers. For air freight, the main gateways include Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Algerian side, sea cargo arrives at ports such as Algiers, Oran, Béjaïa, Skikda, and Djen Djen, spread along the coast. The main air gateway is Algiers. Choosing the discharge port closest to your final destination can cut inland trucking. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Algerian customs is document-heavy and tied closely to the banking system, so the paperwork matters as much as the freight. Here is what applies when you import from China. Duty rates and any safeguard duty depend on your exact product, so check the rate before you order, and sort out your bank paperwork before the goods ship.',
        points: [
          'Talk to your Algerian bank before your supplier ships. Ask which papers it needs to pay for the goods, and by when.',
          'Import TVA is charged on the customs value plus the customs duty. The customs service\'s own worked example uses a TVA rate of 19 percent; we confirm the rate for your goods.',
          'Customs duty is worked out on the customs value of the goods, and the rate depends on the tariff code. Algerian customs uses the Harmonized System for its tariff codes, so getting the code right is the first step.',
          'Some goods carry an extra provisional safeguard duty (DAPS) on top of normal duty. The list of goods and rates is set by official order and can change, so confirm whether your product is affected before ordering.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, certificate of origin, and the papers your bank asks for.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Algerian customs, duty and TVA, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. Many Algerian importers like DDP because it removes the customs work, but the consignee still needs to be able to import and to have the bank side in order, since payment and import rights sit with the registered importer. The alternative, FOB or CIF, leaves the Algerian clearance, duty, and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Algerian delivery address.',
        'Ask your Algerian bank what it needs before the goods ship; we time the booking around it.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails or flies from China to an Algerian gateway such as Algiers, Oran, or Béjaïa.',
        'We clear Algerian customs, handle duty and TVA, and deliver to your door. With DDP, duty, taxes, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Algeria?',
          answer:
            'It depends on the mode, the size and weight of your cargo, and the season. We quote each shipment for your dates. Sea freight is the cheapest per unit, and air and express cost more. Algerian duty and TVA come on top of the freight. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Algeria take?',
          answer:
            'It depends on the mode and the sailing. Air and express are much faster than sea. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. Customs can take longer if the paperwork is incomplete. We give you the time with each quote.',
        },
        {
          question: 'Why does my Algerian bank matter before shipping?',
          answer:
            'Banks set their own paperwork for paying a foreign supplier. Ask your bank what it needs before the goods ship, so the payment and the cargo are not held up.',
        },
        {
          question: 'How much duty and TVA will I pay importing from China to Algeria?',
          answer:
            'Duty depends on your product\'s tariff code and is worked out on the customs value. TVA is then charged on the customs value plus duty. The customs service\'s worked example uses a 19 percent TVA rate. Some goods also carry a safeguard duty (DAPS). Check your product\'s classification before ordering.',
        },
        {
          question: 'What is the cheapest way to ship from China to Algeria?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Which Algerian port should I ship into?',
          answer:
            'Algiers serves the capital, Oran the northwest, and Béjaïa, Skikda, and Djen Djen the east. The best choice depends on where your goods are going, since inland trucking is part of the total cost. We check the options when we quote.',
        },
        {
          question: 'Do you offer door-to-door (DDP) shipping to Algeria?',
          answer:
            'Yes. With DDP we handle pickup in China, the freight, Algerian customs, duty, and TVA, and delivery to your address for one price. The consignee still needs to be able to import and to have the bank side in order, since import rights and payment sit with the registered importer.',
        },
        {
          question: 'What documents do I need to import from China to Algeria?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, certificate of origin, and the papers your bank asks for. Product-specific certificates may also be needed for some goods.',
        },
      ],
      sources: [
        { label: 'Algerian Customs, estimating duties and taxes on imports', url: 'https://www.douane.gov.dz/spip.php?article215' },
        { label: 'Algerian Customs, orders and decisions (safeguard duty list)', url: 'https://www.douane.gov.dz/spip.php?article24' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-albania',
    name: 'Albania',
    code: 'AL',
    description: 'Sea and air freight from China to Albania, with sea cargo arriving at Durrës, often after transshipment at a larger Mediterranean hub. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Durrës', 'Vlorë'],
    transitTime: '',
    popularGoods: ['Textiles', 'Consumer Goods', 'Machinery', 'Electronics', 'Construction Materials'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Albania: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Albania: compare sea, air and express freight, Durrës port, routing, customs, VAT and duty. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Albania moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Durrës, often after changing ship at a larger Mediterranean hub. Transit time depends on the sailing and the feeder connection, so we quote it for each shipment. Albania has its own customs system, and import VAT and customs duty apply on arrival.',
      intro:
        'If you import from China into Albania, the route often runs through a larger Mediterranean port before a feeder ship brings the cargo into Durrës, so routing matters as much as the freight rate. This guide covers what drives the cost of shipping from China to Albania, how each option works, which ports your cargo moves through, and the Albanian customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Air freight costs more but is much faster. Albania is not in the EU, so it uses its own customs system: you clear through a locally registered importer, usually with a customs broker, and pay import VAT plus any duty. Request a quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the routing, and the season. Where we have current prices from our rate sheet, they show on this page. Otherwise we quote each shipment for your dates, ports, and cargo.',
        factors: [
          'Routing: much China to Albania cargo transships at a larger Mediterranean port, so feeder schedules affect transit and cost.',
          'Season: rates often climb before Chinese New Year and again in the autumn peak.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Albanian customs duty, import VAT, or the broker and clearance fees, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Albania shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. Many sailings do not run straight to Durrës, so cargo often changes ship at a larger Mediterranean or Adriatic hub and then comes in on a feeder ship. Lines can also route via the Suez Canal or round Africa, which changes the transit time, so ask us which way your sailing goes. LCL usually takes longer than FCL because the container has to be filled and emptied at each end. We quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, and Shenzhen toward Tirana, often via a hub in Europe or Turkey. Air costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Albania, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Albania. Once a shipment gets heavier, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou are common starting points for Albania-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, and Shenzhen. On the Albanian side, sea cargo usually arrives at Durrës, with Vlorë further south on the coast. Because many sailings transship first, cargo is often brought into Durrës on a feeder ship from a bigger Mediterranean port. Air cargo flies into Tirana. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Albania is not in the EU, so it uses its own customs system rather than the EU one. Clearance goes through a locally registered importer, usually with a customs broker. Here is what applies when you import from China. Duty and VAT depend on your exact product, so we confirm the current rates for your goods before you order.',
        points: [
          'Import VAT is charged when your goods clear customs. The rate depends on the product, so we confirm the current rate for your goods with the quote.',
          'Customs duty is set by the Customs Tariff of Albania, based on your product\'s classification. Check your product code before you order, since rates differ from one product to another.',
          'Albania does not use the EU EORI number. Albanian customs says each company must first register its NIPT tax number in the customs system (Asycuda World) before it can carry out customs procedures. A customs broker usually files the declaration.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, and certificate of origin, plus any product-specific certificates (conformity, phytosanitary, or health certificates for food).',
          'Ask us about packaging rules for wood pallets and crates before your goods are packed.',
          'Because Albania has its own customs and clearance usually runs through a local broker, many smaller importers choose door-to-door (DDP) so the forwarder handles the duty, VAT, and local clearance.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg through any transshipment hub into Durrës, Albanian customs, duty, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs and broker setup in Albania. The alternative, FOB or CIF, leaves the Albanian clearance, duty, and delivery for you to arrange through a local broker. For most Albanian importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Albanian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'Make sure the importer has its NIPT tax number; we can work with your customs broker, or handle clearance for you under DDP.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Durrës, often through a Mediterranean hub and a feeder ship, or flies into Tirana.',
        'We clear Albanian customs, handle duty and VAT, and deliver to your door. With DDP, duty, taxes, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Albania?',
          answer:
            'It depends on the mode, the size and weight of your cargo, the routing, and the season. Where we have current prices from our rate sheet, they show on this page; otherwise we quote each shipment for your dates. Albanian duty and VAT are extra.',
        },
        {
          question: 'How long does shipping from China to Albania take?',
          answer:
            'It depends on the sailing and the feeder connection into Durrës. Lines can route via the Suez Canal or round Africa, which changes the transit time, and Albanian customs adds time at the end. Air and express are much faster. We give you the time for your exact shipment with the quote.',
        },
        {
          question: 'Why does shipping to Albania often go through another port first?',
          answer:
            'Many sailings from China do not call at Durrës directly, so cargo changes ship at a bigger Mediterranean or Adriatic hub and comes in on a feeder ship. That extra leg can add time, which is why we check the routing for each sailing.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Albania?',
          answer:
            'Customs duty depends on your product\'s classification in the Albanian customs tariff, and import VAT is added at clearance. Because both depend on the exact product, we confirm the current rates for your goods before you order.',
        },
        {
          question: 'What is the cheapest way to ship from China to Albania?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need a customs broker to import from China to Albania?',
          answer:
            'In practice yes. Albania uses its own customs system, the importer needs a NIPT tax number, and a licensed broker usually files the declaration. Many importers avoid the hassle by choosing door-to-door (DDP), where we handle the broker, duty, and VAT for you.',
        },
        {
          question: 'Which Albanian port do shipments arrive at?',
          answer:
            'Sea cargo usually arrives at Durrës, with Vlorë further south on the coast. Air cargo flies into Tirana. Sea cargo is often brought into Durrës on a feeder ship from a larger Mediterranean hub.',
        },
        {
          question: 'What documents do I need to import from China to Albania?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin, plus any product-specific certificates for regulated goods. The importer needs a NIPT tax number. Ask us about packaging rules for wood pallets and crates.',
        },
      ],
      sources: [
        { label: 'Albanian Customs Administration: NIPT registration', url: 'https://dogana.gov.al/english/c/181/325/nipt-registration' },
        { label: 'Albanian Customs Administration: Customs Code', url: 'https://dogana.gov.al/english/dokument/2860/law-no-102-2014-dated-3172014-perkthim-jozyrtar' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-bulgaria',
    name: 'Bulgaria',
    code: 'BG',
    description: 'Sea and air freight from China to Bulgaria, with sea cargo arriving at the Black Sea ports of Varna and Burgas. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Varna', 'Burgas'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Textiles', 'Consumer Goods', 'Auto Parts'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Bulgaria: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Bulgaria: compare sea, air and express freight, Black Sea ports, routing, and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Bulgaria moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at the Black Sea ports of Varna or Burgas. Transit time depends on the sailing and the routing, so we quote it for each shipment. Bulgaria is in the EU: standard VAT is 20 percent, EU customs duty may apply, and importers need an EORI number.',
      intro:
        'If you import from China into Bulgaria, routing is the thing to get right, because the path your cargo takes into the Black Sea shapes both the time and the cost. This guide covers what drives the cost of shipping from China to Bulgaria, how each option works, which ports your cargo moves through, and the Bulgarian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Air freight costs more but is much faster. Two things to know up front: Bulgaria joined the euro area on 1 January 2026, so customs values, duty, and VAT are now in euros, and you need an EORI number to clear EU customs. Request a quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Xiamen'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the routing, and the season. Where we have current prices from our rate sheet, they show on this page. Otherwise we quote each shipment for your dates, ports, and cargo.',
        factors: [
          'Routing: many sailings to Bulgaria transship at a larger hub and finish by feeder ship, road, or rail, so the path affects transit and cost.',
          'Season: rates often climb before Chinese New Year and again in the autumn peak.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Bulgarian import VAT, EU duty, or the customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Bulgaria shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. The routing matters in Bulgaria. Many sailings do not run straight into the Black Sea, so cargo often changes ship at a larger hub and then reaches Varna or Burgas by feeder ship, road, or rail. Lines can also route via the Suez Canal or round Africa, which changes the transit time, so ask us which way your sailing goes. LCL usually takes longer than FCL because the container has to be filled and emptied at each end. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Bulgaria, sometimes via a European hub. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Bulgaria, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Bulgaria. Once a shipment gets heavier, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Xiamen are common starting points for Bulgaria-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Bulgarian side, the Port of Varna says it can handle all types of cargo, including containers, and describes its Varna West terminal as Bulgaria\'s container hub. Burgas, further south on the same coast, has its own port terminals, including Burgas East and Burgas West. Because many sailings transship first, cargo is often brought in by feeder ship, road, or rail, and you can sometimes clear customs at the hub or in Bulgaria depending on the routing. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Bulgaria sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs they move freely across the EU. Bulgaria joined the euro area on 1 January 2026, so customs values, duty, and VAT are now in euros. Plan around 20 percent VAT and any duty, and check the duty for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'Bulgaria\'s standard VAT rate is 20 percent, with a reduced rate of 9 percent for some goods and services. Import VAT is collected when your goods clear customs.',
          'EU customs duty depends on how your product is classified. The commodity code sets the duty rate, and the EU TARIC database lists the measures for each code, including any anti-dumping duty.',
          'You need an EORI number to deal with EU customs. It is issued by the customs authority of the EU country where your business is established.',
          'Bulgaria\'s lev was converted at a fixed rate of 1.95583 lev to 1 euro. This affects invoicing and landed-cost sums, not the duty or VAT rates.',
          'For low-value e-commerce parcels sold to consumers (up to EUR 150), the EU charges a temporary flat customs duty of EUR 3 per item from 1 July 2026 until 1 July 2028. Normal commercial freight pays the regular tariff.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates from outside the EU must be heat treated or fumigated in line with ISPM15 and carry the ISPM15 stamp.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg and any feeder or overland leg into Bulgaria, EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange. For most Bulgarian importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record so they can handle the import VAT themselves.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Bulgarian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) and the best routing for your sailing, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Varna or Burgas, or transships at a hub and comes in by feeder ship, road, or rail.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Bulgaria?',
          answer:
            'It depends on the mode, the size and weight of your cargo, the routing, and the season. Where we have current prices from our rate sheet, they show on this page; otherwise we quote each shipment for your dates. Import VAT and any duty are extra.',
        },
        {
          question: 'How long does shipping from China to Bulgaria take?',
          answer:
            'It depends on the sailing. Many services transship at a hub before reaching Varna or Burgas, and lines can route via the Suez Canal or round Africa, which changes the transit time. Air and express are much faster than sea. We give you the time for your exact shipment with the quote.',
        },
        {
          question: 'Should I ship to Varna or Burgas directly or through a hub?',
          answer:
            'It depends on which services are running when you ship. Some sailings call at Bulgarian ports, while others transship at a larger hub and finish by feeder ship, road, or rail. We compare the options for your cargo and dates.',
        },
        {
          question: 'Now that Bulgaria uses the euro, how does that affect imports?',
          answer:
            'Bulgaria joined the euro area on 1 January 2026, and the lev was converted at a fixed rate of 1.95583 to 1 euro. Customs values, duty, and import VAT are now stated in euros. It mainly affects your invoicing and landed-cost sums.',
        },
        {
          question: 'What is the cheapest way to ship from China to Bulgaria?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Bulgaria?',
          answer:
            'Yes. Businesses established in the EU need an EORI number for customs. It is issued by the customs authority of the EU country where you are established, and your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Bulgaria?',
          answer:
            'Duty depends on your product\'s commodity code, which you can check in the EU TARIC database. On top of that, Bulgarian VAT applies, at a standard rate of 20 percent. We can work out the full landed cost before you order.',
        },
        {
          question: 'What documents do I need to import from China to Bulgaria?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must meet the ISPM15 rules.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rates in EU countries', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'European Central Bank: Bulgaria joins the euro area', url: 'https://www.ecb.europa.eu/euro/changeover/bulgaria/html/index.en.html' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs-4/customs-procedures-import-and-export-0/customs-procedures/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: Tariff classification of goods', url: 'https://taxation-customs.ec.europa.eu/customs/common-customs-tariff-cct/tariff-classification-goods_en' },
        { label: 'European Commission: Temporary EUR 3 duty on low-value imports', url: 'https://taxation-customs.ec.europa.eu/news/guidance-and-legal-text-temporary-flat-fee-low-value-imports-which-will-apply-until-1-july-2028-2026-06-08_en' },
        { label: 'European Commission: Requirements for wood packaging', url: 'https://food.ec.europa.eu/plants/plant-health-and-biosecurity/trade-plants-plant-products-non-eu-countries/requirements-wood-packaging-dunnage_en' },
        { label: 'Port of Varna: Port today', url: 'https://port-varna.bg/en/About-us/Port-today' },
        { label: 'Port of Varna: Varna West terminal', url: 'https://port-varna.bg/en/TERMINALS/Varna-Zapad' },
        { label: 'Bulgarian Ports Infrastructure Company: Port of Burgas branch', url: 'https://www.bgports.bg/en/about-us/structure/operational-activity/branch-burgas-port-territorial-unit/' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-croatia',
    name: 'Croatia',
    code: 'HR',
    description: 'Sea and air freight from China to Croatia through Rijeka and Ploče, with onward delivery into central Europe. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Rijeka', 'Ploče'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Textiles', 'Auto Parts'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Croatia: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Croatia: compare sea, air and express freight, the Port of Rijeka, and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Croatia moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Rijeka on the North Adriatic, where the Rijeka Gateway container terminal is run by APM Terminals with Enna Logic. Croatia\'s standard VAT rate of 25 percent and any EU duty apply on import, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Croatia, or into central Europe through Croatia, the Port of Rijeka is the route to know. This guide covers what drives the cost of shipping from China to Croatia, how each option compares, which ports your cargo moves through, and the Croatian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Air freight costs more but is much faster. Croatia is in the EU, so you need an EORI number to clear customs and should plan for 25 percent VAT plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, the route, and the season. Prices move often, so we quote each shipment for your goods, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Inland leg: if your goods are going on from Rijeka into central Europe, the truck or rail leg adds to the time and cost.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Croatian import VAT, EU duty, or customs clearance, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Croatia shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL also takes longer, because the container has to be filled and unpacked. Rijeka\'s container terminals include Adriatic Gate and Rijeka Gateway, which opened in 2025 and is run by APM Terminals with Enna Logic. Rijeka Gateway presents itself as a link between Croatia, Central and Southeast Europe, and global trade lanes. Inland cargo moves on by truck or rail. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Zagreb, often connecting through another hub on the way. It costs much more per kilo than sea freight, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Croatia, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Croatia. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Common departure ports in China include Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Croatian side, the Port of Rijeka Authority lists two container terminals at Rijeka: Container terminal Adriatic Gate and the Zagreb Deep Sea container terminal. From Rijeka, goods move on by road and rail. Ploče, further south, is the other port in this guide. Air cargo can land in Zagreb. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Croatia is part of the EU customs union, so the same EU tariff applies as in every other EU country, and no customs duty is due when goods later move from one EU country to another. All goods imported into the EU are subject to VAT, so plan around Croatia\'s 25 percent standard rate and any duty. Duty depends on your exact product, so confirm the rate for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'Croatia\'s standard VAT rate is 25 percent, with reduced rates of 5 and 13 percent for some goods. Import VAT is charged and due in the country of import.',
          'EU customs duty is set by your product\'s commodity code. Look it up in TARIC, the EU\'s tariff database, which also lists extra measures such as anti-dumping duty on some goods.',
          'You need an EORI number for customs in the EU, including imports. It is one common type of number used across the EU.',
          'There is no longer a EUR 22 VAT-free allowance: since July 2021 all goods imported into the EU are subject to VAT. For low-value goods sold to consumers in consignments worth EUR 150 or less, a temporary customs duty of EUR 3 per item applies from 1 July 2026 to 1 July 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'If your goods are going on from Croatia to another EU country, or to a non-EU neighbour such as Bosnia and Herzegovina or Serbia, we can set up the right clearance or transit for your destination.',
          'Wood pallets and crates from outside the EU must be heat treated or fumigated in line with ISPM15 and carry the ISPM15 stamp.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Croatian and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Croatian importers, DDP is worth it for the time and risk it removes, though some VAT-registered businesses prefer to be the importer of record themselves.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your delivery address in Croatia or central Europe.',
        'We quote your options (sea FCL, sea LCL, air, or express) with prices and timings for your dates, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Rijeka, then moves inland by truck or rail to your destination.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Croatia?',
          answer:
            'It depends on the method, the size and weight of your cargo, the route, and the season, and prices move often. We quote each shipment for your dates. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Croatia take?',
          answer:
            'Sea freight is the slowest option, air freight is much faster, and express courier is the fastest. Sea transit depends on the sailing, on whether the line routes via the Suez Canal or round Africa, and on the inland leg after Rijeka. Ask us which way your sailing goes and we will give you the timing.',
        },
        {
          question: 'Should I route central European cargo through Rijeka?',
          answer:
            'It can make sense. Rijeka Gateway, the container terminal run by APM Terminals with Enna Logic since 2025, presents itself as a link between Croatia, Central and Southeast Europe, and global trade lanes. Whether Rijeka beats a North Sea port for your cargo depends on the sailing and the inland leg, so we compare the options when we quote.',
        },
        {
          question: 'What is the cheapest way to ship from China to Croatia?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Croatia?',
          answer:
            'Yes. An EORI number is required for customs operations in the EU, including imports. It is one common type of number used across the EU. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Croatia?',
          answer:
            'Duty is set by your product\'s commodity code in the EU TARIC tariff, so it varies by product. On top of that, Croatia\'s standard VAT rate of 25 percent applies on import.',
        },
        {
          question: 'Can I ship onward to Bosnia or Serbia through Croatia?',
          answer:
            'Yes. Goods can move on from Rijeka to non-EU neighbours such as Bosnia and Herzegovina and Serbia under a customs transit procedure. We can set up the right clearance or transit for your final destination.',
        },
        {
          question: 'What documents do I need to import from China to Croatia?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must meet ISPM15.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rules and rates', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs-4/customs-procedures-import-and-export/customs-procedures/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: EU Customs Tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/customs-4/calculation-customs-duties/customs-tariff/eu-customs-tariff-taric_en' },
        { label: 'European Union: The EU customs union in action', url: 'https://european-union.europa.eu/priorities-and-actions/actions-topic/customs_en' },
        { label: 'EU Delegation: Changes to EU VAT rules for e-commerce', url: 'https://www.eeas.europa.eu/delegations/new-zealand/changes-eu-rules-value-added-tax-vat-e-commerce-transactions_en' },
        { label: 'Access2Markets: EUR 3 customs duty on low-value consignments', url: 'https://trade.ec.europa.eu/access-to-markets/en/news/eu-applies-eu3-customs-duty-item-low-value-e-commerce-consignments' },
        { label: 'European Commission: Requirements for wood packaging', url: 'https://food.ec.europa.eu/plants/plant-health-and-biosecurity/trade-plants-plant-products-non-eu-countries/requirements-wood-packaging-dunnage_en' },
        { label: 'Port of Rijeka Authority', url: 'https://www.portauthority.hr/en/' },
        { label: 'Rijeka Gateway (APM Terminals)', url: 'https://www.rijekagateway.com/' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-cyprus',
    name: 'Cyprus',
    code: 'CY',
    description: 'Sea and air freight from China to Cyprus through Limassol, the main port. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Limassol', 'Larnaca'],
    transitTime: '',
    popularGoods: ['Consumer Goods', 'Machinery', 'Electronics', 'Building Materials', 'Furniture'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Cyprus: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Cyprus: compare sea, air and express freight, Limassol port, and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Cyprus moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Limassol, the main port of Cyprus, sometimes after a connection at a larger Mediterranean hub. The standard VAT rate in Cyprus is 19 percent, and it applies on import along with any EU duty. Importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Cyprus, you are shipping to an island with one main port, so routing and sailing frequency shape your timeline. This guide covers what drives the cost of shipping from China to Cyprus, how each option compares, which ports your cargo moves through, and the Cypriot and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Air freight costs more but is much faster. Cyprus is in the EU, so you need an EORI number to clear customs and should plan for 19 percent VAT plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, the route, and the season. Prices move often, so we quote each shipment for your goods, ports, and dates.',
        factors: [
          'Island logistics: Cyprus has one main port, and some services reach it through a transshipment hub, so the routing and how often ships call affect transit.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Cypriot import VAT, EU duty, or customs clearance, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Cyprus shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL also takes longer, because the container has to be filled and unpacked. Limassol is the main port of Cyprus, and its container terminal is run by Eurogate Container Terminal Limassol. Some services reach Limassol after a connection at a larger Mediterranean hub, so ask us how your sailing is routed. Lines can also route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Larnaca, often connecting through another hub on the way. It costs much more per kilo than sea freight, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Cyprus, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Cyprus. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Common departure ports in China include Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Cypriot side, the Cyprus Ports Authority describes Limassol as a multi-purpose port and the main port of Cyprus, and Larnaca as the second largest. The authority lists the ports in the north, such as Famagusta and Kyrenia, as closed ports. Some services reach Limassol after a connection at a larger Mediterranean hub, and we tell you the routing when we quote. Air cargo can land at Larnaca. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Cyprus is part of the EU customs union, so the same EU tariff applies as in every other EU country, and no customs duty is due when goods later move from one EU country to another. All goods imported into the EU are subject to VAT, so plan around the 19 percent standard rate in Cyprus and any duty. Duty depends on your exact product, so confirm the rate for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'The standard VAT rate in Cyprus is 19 percent, with reduced rates of 5 and 9 percent and a super-reduced rate of 3 percent for some goods. Import VAT is charged and due in the country of import.',
          'EU customs duty is set by your product\'s commodity code. Look it up in TARIC, the EU\'s tariff database, which also lists extra measures such as anti-dumping duty on some goods.',
          'You need an EORI number for customs in the EU, including imports. It is one common type of number used across the EU.',
          'There is no longer a EUR 22 VAT-free allowance: since July 2021 all goods imported into the EU are subject to VAT. For low-value goods sold to consumers in consignments worth EUR 150 or less, a temporary customs duty of EUR 3 per item applies from 1 July 2026 to 1 July 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Ship through the open ports in the south, such as Limassol and Larnaca. The Cyprus Ports Authority lists ports in the north, such as Famagusta and Kyrenia, as closed.',
          'Wood pallets and crates from outside the EU must be heat treated or fumigated in line with ISPM15 and carry the ISPM15 stamp.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg into Cyprus, Cypriot and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup, which suits an island market. The alternative, FOB or CIF, leaves the clearance, duty, and delivery for you to arrange. For most Cypriot importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Cyprus delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with prices and timings for your dates, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Limassol, directly or through a Mediterranean hub, or flies into Larnaca.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Cyprus?',
          answer:
            'It depends on the method, the size and weight of your cargo, the route, and the season, and prices move often. We quote each shipment for your dates. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Cyprus take?',
          answer:
            'Sea freight is the slowest option, air freight is much faster, and express courier is the fastest. Sea transit depends on whether your sailing connects through a hub, and on whether the line routes via the Suez Canal or round Africa. Ask us which way your sailing goes and we will give you the timing.',
        },
        {
          question: 'Why does shipping to Cyprus sometimes go through another port?',
          answer:
            'Cyprus is an island with one main port, and some services reach Limassol after a connection at a larger Mediterranean hub. This affects how often ships call and how long the trip takes. We tell you the routing for each sailing when we quote.',
        },
        {
          question: 'What is the cheapest way to ship from China to Cyprus?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Cyprus?',
          answer:
            'Yes. An EORI number is required for customs operations in the EU, including imports. It is one common type of number used across the EU. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Cyprus?',
          answer:
            'Duty is set by your product\'s commodity code in the EU TARIC tariff, so it varies by product. On top of that, the 19 percent standard VAT rate in Cyprus applies on import.',
        },
        {
          question: 'Which Cyprus port do shipments arrive at?',
          answer:
            'Limassol is the main port of Cyprus, and Larnaca is the second largest. Air cargo can land at Larnaca. Ship through the open ports in the south, since the Cyprus Ports Authority lists ports in the north, such as Famagusta and Kyrenia, as closed.',
        },
        {
          question: 'What documents do I need to import from China to Cyprus?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must meet ISPM15.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rules and rates', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs-4/customs-procedures-import-and-export/customs-procedures/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: EU Customs Tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/customs-4/calculation-customs-duties/customs-tariff/eu-customs-tariff-taric_en' },
        { label: 'European Union: The EU customs union in action', url: 'https://european-union.europa.eu/priorities-and-actions/actions-topic/customs_en' },
        { label: 'EU Delegation: Changes to EU VAT rules for e-commerce', url: 'https://www.eeas.europa.eu/delegations/new-zealand/changes-eu-rules-value-added-tax-vat-e-commerce-transactions_en' },
        { label: 'Access2Markets: EUR 3 customs duty on low-value consignments', url: 'https://trade.ec.europa.eu/access-to-markets/en/news/eu-applies-eu3-customs-duty-item-low-value-e-commerce-consignments' },
        { label: 'European Commission: Requirements for wood packaging', url: 'https://food.ec.europa.eu/plants/plant-health-and-biosecurity/trade-plants-plant-products-non-eu-countries/requirements-wood-packaging-dunnage_en' },
        { label: 'Cyprus Ports Authority: New Limassol Port', url: 'https://www.cpa.gov.cy/en/new-lemesos-port' },
        { label: 'Cyprus Ports Authority: Larnaca Port', url: 'https://www.cpa.gov.cy/en/larnaka-port' },
        { label: 'Cyprus Ports Authority: Open ports', url: 'https://www.cpa.gov.cy/en/open-ports' },
        { label: 'Cyprus Ports Authority: Closed ports', url: 'https://www.cpa.gov.cy/en/closed-ports' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-denmark',
    name: 'Denmark',
    code: 'DK',
    description: 'Sea and air freight from China to Denmark through Aarhus, Copenhagen, and other Danish ports. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Aarhus', 'Copenhagen', 'Fredericia'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Furniture', 'Textiles'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Denmark: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Denmark: compare sea, air and express freight, the Port of Aarhus, and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Denmark moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Aarhus, Denmark\'s largest container port, or another Danish port, often after changing ship at a larger European hub. Sea freight is the cheapest and slowest option, and air and express are faster. Danish import VAT of 25 percent and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Denmark, your cargo often changes ship at a big North European hub before reaching Aarhus or another Danish port, so routing matters as much as the rate. This guide covers what shapes the cost of shipping from China to Denmark, how the options compare on speed, which ports your cargo moves through, and the Danish and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy, and air freight is much faster. Denmark is in the EU, so you need an EORI number to clear customs and should plan for 25 percent import VAT plus any duty. Request a quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the route, and the season. Freight prices change often, so we quote each shipment for your dates, ports, and cargo. Where we have current prices from our rate sheet, they are shown on this page.',
        factors: [
          'Routing: some China to Denmark cargo changes ship at a larger North European hub and feeders to Denmark, so the hub leg affects transit and cost.',
          'Routing: lines can sail via the Suez Canal or round Africa, which changes time and cost on the ocean leg.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Danish import VAT, any customs duty, or the customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Denmark shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. Port of Aarhus is Denmark\'s largest container port, with a terminal run by APM Terminals. Depending on the line, cargo may sail direct or change ship at a larger North European hub and come in on a feeder, to Aarhus or to another Danish port such as Copenhagen. Ask us how your sailing runs. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. For smaller loads LCL is usually cheaper, and for larger loads a full container wins, so we quote both and you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Copenhagen, sometimes connecting through another airport on the way. It costs much more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is usually the fastest door-to-door option into Denmark, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Denmark. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Main Chinese export ports include Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou. For air freight, the main Chinese gateways include Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the Danish side, Port of Aarhus is Denmark\'s largest container port, and its terminal is run by APM Terminals. Other Danish ports include Copenhagen and Fredericia. Depending on the line, cargo may come direct or change ship at a larger North European hub, so ask us how your sailing runs. Copenhagen Airport is a common airport for air cargo. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Denmark is in the EU, so EU customs rules and the EU tariff apply. Plan for 25 percent import VAT plus any duty. Duty depends on your exact product, so check the commodity code for your goods in the EU TARIC database before you ship.',
        points: [
          'Danish import VAT is 25 percent, the standard VAT rate in the country, charged on top of any duty.',
          'EU customs duty depends on your product\'s commodity code. The EU\'s TARIC database lists the tariff and other measures for each code, and they apply the same way in every EU country.',
          'You need an EORI number to import into the EU. You get it from the customs authority of the EU country where your business is established.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM 15 standard: properly treated and stamped with the official mark.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg and any feeder into Denmark, EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record, and some VAT-registered businesses prefer that so they handle the import VAT themselves. For most Danish importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Danish delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Aarhus or another Danish port, directly or through a North European hub, or flies into Copenhagen.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Denmark?',
          answer:
            'It depends on the mode, the size and weight of your cargo, the route, and the season. Sea freight is the cheapest per unit, while air and express cost more. Import VAT and any duty are extra. We quote each shipment for your dates, so request a quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Denmark take?',
          answer:
            'It depends on the mode and the sailing or flight. Sea freight is the slowest and cheapest, air freight is much faster, and express courier is usually the fastest door to door. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We quote transit times per shipment.',
        },
        {
          question: 'Does shipping to Denmark go through another port first?',
          answer:
            'It depends on the line. Some sailings change ship at a larger North European hub, and a feeder then carries the cargo to Aarhus or another Danish port. That extra leg adds time, so ask us how your sailing runs.',
        },
        {
          question: 'What is the cheapest way to ship from China to Denmark?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill most of it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Denmark?',
          answer:
            'Yes. The EU says an EORI number is mandatory for all customs operations in the EU, including imports. Your forwarder or broker needs it to clear your goods, and you get it from the customs authority of the EU country where your business is established.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Denmark?',
          answer:
            'Denmark\'s standard VAT rate is 25 percent, and it applies as import VAT on top of any duty. Duty depends on your product\'s commodity code in the EU TARIC database, and the same EU measures apply in every EU country.',
        },
        {
          question: 'Which Danish port do shipments arrive at?',
          answer:
            'Most container cargo goes to Port of Aarhus, Denmark\'s largest container port. Other Danish ports include Copenhagen and Fredericia. We pick the port that best fits your delivery address.',
        },
        {
          question: 'What documents do I need to import from China to Denmark?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wooden pallets and crates must meet the ISPM 15 standard.',
        },
      ],
      sources: [
        { label: 'EU Your Europe: VAT rates in EU countries', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs-4/customs-procedures-import-and-export/customs-procedures/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: EU customs tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/customs-4/calculation-customs-duties/customs-tariff/eu-customs-tariff-taric_en' },
        { label: 'Financial Administration of Slovenia (EU customs): wood packaging material', url: 'https://fu.gov.si/en/customs/prohibitions_and_restrictions/wood_packaging_material' },
        { label: 'Port of Aarhus: Container', url: 'https://www.portofaarhus.dk/en/forretningsomrader/containergods' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-egypt',
    name: 'Egypt',
    code: 'EG',
    description: 'Sea and air freight from China to Egypt, to Alexandria, Port Said, Damietta and Sokhna. FCL, LCL, express, customs and door-to-door delivery.',
    majorPorts: ['Alexandria', 'Port Said', 'Damietta', 'Sokhna'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Auto Parts', 'Textiles', 'Building Materials'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Egypt: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Egypt: sea, air and express freight, Egyptian ports, customs, VAT and the ACI ACID rule on the Nafeza platform. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Egypt moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Egyptian ports such as Alexandria, Port Said, and Sokhna. Sea freight is the cheapest and slowest, air is faster and dearer, and we quote the timing for your exact sailing or flight. Egyptian VAT of 14 percent plus customs duty apply on arrival, and each import shipment needs an ACID number issued on the Nafeza platform under the Advance Cargo Information (ACI) system.',
      intro:
        'If you import from China into Egypt, the single most important thing is the paperwork: Egypt runs an advance cargo registration system (ACI), and each import shipment needs an ACID number. Set it up before the goods leave China. This guide covers what drives the cost of shipping from China to Egypt, how the options compare on speed, which ports your cargo moves through, and the Egyptian customs and VAT rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Air freight costs more but arrives much sooner. Before anything ships, the Egyptian importer registers on the Nafeza platform and requests the ACID number, and the exporter in China registers on the CargoX platform. Sort that out first, then request a live quote and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the season, and the route your line takes. Ocean and air rates move with the market, so we do not print fixed prices here. Request a live quote and we will price your exact shipment, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time and cost; ask us which way your sailing goes.',
          'Duty: Egyptian customs duty depends on the product, so check your rate before ordering.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Egyptian customs duty, 14 percent VAT, or the forwarder\'s clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Egypt shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which pays off once you have enough cargo to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo arrives at Alexandria, Port Said, or Sokhna, and LCL takes extra time for consolidation and unpacking. Egypt sits on the Suez Canal, the shortest sea route from Asia to the Mediterranean. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. For smaller loads LCL is usually cheaper, and once you can fill most of a box a full container wins. We quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Guangzhou, Shenzhen, Shanghai, and Hong Kong to Cairo. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. The ACI system also covers air shipments, so the paperwork still has to be in place. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is a door-to-door option that bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Egypt. Ask us how the ACI rules apply to your parcel before it ships. Once a shipment gets heavier, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou are the usual starting points for Egypt-bound containers. For air freight, the main gateways are Guangzhou, Shenzhen, Shanghai, and Hong Kong. On the Egyptian side, Alexandria and the neighbouring El Dekheila are on the Mediterranean near Cairo and the Delta, Port Said sits at the northern mouth of the Suez Canal, Damietta is further along the Delta coast, and Sokhna is on the Red Sea coast east of Cairo. The main air gateway is Cairo International Airport. Matching the discharge port to where your goods are going can save inland trucking. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Egyptian customs is tied to an advance electronic registration system, so the paperwork has to be set up before the goods ship, not after they arrive. Here is what applies when you import from China. Duty depends on your exact product, so check the rate first, and make sure the ACID number is issued before loading.',
        points: [
          'Each import shipment needs an ACID number under the Advance Cargo Information (ACI) system. The importer registers on the Nafeza platform and requests the ACID for the shipment. The foreign exporter shipping goods to Egypt is responsible for registering on the CargoX platform.',
          'The ACI system also applies to air shipments on the Nafeza platform, not only sea freight.',
          'The standard VAT rate is 14 percent. Egypt\'s VAT law sets a rate of 5 percent for machines and equipment used in manufacturing a product or providing a service, except buses and passenger cars. Ask us to check whether any later change affects your goods.',
          'For imported goods, VAT is charged on the value used for customs duty plus the customs duty and any other taxes and duties.',
          'Customs duty depends on the product and its tariff line. Check your rate with us or a broker before ordering.',
          'Check with GOEIC (the General Organization for Export and Import Control) whether your company and your products need any registration or approval before you ship.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, and certificate of origin, plus any product-specific certificates. Ask us to confirm the rules for wood pallets and crates before loading.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Egyptian customs, duty, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup, but the Egyptian importer still has to register on Nafeza and request the ACID number, since those sit with the importer. The alternative, FOB or CIF, leaves the Egyptian clearance, duty, and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Egyptian delivery address.',
        'Request the ACID number on Nafeza before the goods ship; we coordinate the documents with your supplier, who must be registered on CargoX.',
        'We quote your options (sea FCL, sea LCL, air, or express) with prices and timing for your dates, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China, with the ACID number on the bill of lading.',
        'Your cargo sails or flies from China to an Egyptian gateway such as Alexandria, Port Said, or Sokhna.',
        'We clear Egyptian customs, handle duty and VAT, and deliver to your door. With DDP, duty, taxes, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Egypt?',
          answer:
            'It depends on the method, the size of your shipment, the season, and the route. Sea freight is the cheapest per unit and air costs more per kilo. Egyptian duty and 14 percent VAT are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'What is the ACID number and Nafeza system?',
          answer:
            'Nafeza is Egypt\'s national single window for foreign trade. Under its Advance Cargo Information (ACI) system, the Egyptian importer requests an ACID number for each import shipment, and the foreign exporter registers on the CargoX platform to send the shipment documents. ACI covers air shipments as well as sea.',
        },
        {
          question: 'How long does shipping from China to Egypt take?',
          answer:
            'It depends on the mode and the route. Lines can route via the Suez Canal or round Africa, which changes the sea transit time. Air and express are much faster. Clearance adds time on top. We give you the timing for your exact sailing or flight when we quote.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Egypt?',
          answer:
            'Customs duty depends on the product. On top of that, VAT applies at the standard 14 percent rate (the law sets 5 percent for machines and equipment used in manufacturing or services, except buses and passenger cars), on the customs value plus duty and other taxes. We or a broker can confirm your exact rate.',
        },
        {
          question: 'What is the cheapest way to ship from China to Egypt?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Which Egyptian port should I ship into?',
          answer:
            'Alexandria and El Dekheila are on the Mediterranean near Cairo and the Delta. Port Said sits at the north mouth of the Suez Canal, and Sokhna is on the Red Sea coast east of Cairo. Match the port to where your goods are going and to the routing, since inland trucking is part of the total cost.',
        },
        {
          question: 'Do I need to register as an importer in Egypt?',
          answer:
            'Yes. The importer must register on the Nafeza platform to request ACID numbers. Check with GOEIC whether your company or your products need any extra registration or approval before you ship.',
        },
        {
          question: 'What documents do I need to import from China to Egypt?',
          answer:
            'You need a commercial invoice, a packing list, a bill of lading or air waybill, and a certificate of origin, plus any product-specific certificates, all tied to the shipment\'s ACID number. Your supplier must be registered on CargoX to send the documents.',
        },
      ],
      sources: [
        { label: 'Nafeza: home page (ACID request service)', url: 'https://www.nafeza.gov.eg/en' },
        { label: 'Nafeza: frequently asked questions', url: 'https://www.nafeza.gov.eg/en/faq' },
        { label: 'Nafeza: seminar on the ACI system for air shipments', url: 'https://www.nafeza.gov.eg/en/news/72/Introductory%20and%20Training%20Seminar%20for%20the%20ECEA%20on%20the%20Export%20and%20ACI%20Air%20Systems%20on%20%E2%80%9CNafeza%E2%80%9D%20Platform' },
        { label: 'Egyptian Tax Authority: VAT Law No. 67 of 2016 (English, PDF)', url: 'https://www.eta.gov.eg/sites/default/files/2024-02/Law-english-no.67-2016.pdf.pdf' },
        { label: 'GOEIC: General Organization for Export and Import Control', url: 'https://www.goeic.gov.eg/en' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-estonia',
    name: 'Estonia',
    code: 'EE',
    description: 'Sea and air freight from China to Estonia through Muuga Harbour at the Port of Tallinn, with feeder links from European ports. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Tallinn', 'Muuga'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Textiles', 'Furniture'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Estonia: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Estonia: compare sea, air and express freight, Muuga Harbour at the Port of Tallinn, and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Estonia moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Muuga, the main cargo harbour of the Port of Tallinn, usually on a feeder from a larger European port. Sea freight is the cheapest and slowest option, and air and express are faster. Estonian import VAT of 24 percent and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Estonia, your cargo usually travels via a bigger European port before reaching Tallinn, so routing and feeder schedules shape the timeline. This guide covers what shapes the cost of shipping from China to Estonia, how the options compare on speed, which ports your cargo moves through, and the Estonian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy, and air freight is much faster. Estonia is in the EU, so you need an EORI number to clear customs and should plan for 24 percent import VAT plus any duty. Request a quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the route, and the season. Freight prices change often, so we quote each shipment for your dates, ports, and cargo. Where we have current prices from our rate sheet, they are shown on this page.',
        factors: [
          'Routing: China to Estonia cargo usually changes ship at a larger European port and comes in by feeder or truck, so the hub leg affects transit and cost.',
          'Season: demand and rates can change around Chinese New Year and before the holiday peak.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Estonian import VAT, any customs duty, or the customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Estonia shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. Muuga Harbour, the main cargo harbour of the Port of Tallinn, is the biggest cargo harbour in Estonia and handles containers among other cargo. Cargo from China usually changes ship at a larger European port and reaches Muuga by Baltic feeder, or comes the last part of the way by road. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. For smaller loads LCL is usually cheaper, and for larger loads a full container wins, so we quote both and you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Tallinn, sometimes connecting through another airport on the way. It costs much more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is usually the fastest door-to-door option into Estonia, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Estonia. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Main Chinese export ports include Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou. For air freight, the main Chinese gateways include Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the Estonian side, Muuga Harbour, east of the capital, is the main cargo harbour of the Port of Tallinn and the biggest cargo harbour in Estonia. It handles containers as well as bulk and RoRo cargo, and it has a free zone with more flexible customs procedures for transit and distribution companies. Cargo usually changes ship at a larger European port and comes in by feeder or road. Tallinn Airport is a common airport for air cargo. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Estonia is in the EU, so EU customs rules and the EU tariff apply. Plan for 24 percent import VAT plus any duty. Duty depends on your exact product, so check the commodity code for your goods in the EU TARIC database before you ship.',
        points: [
          'Estonian import VAT is 24 percent, the standard VAT rate in the country, charged on top of any duty.',
          'EU customs duty depends on your product\'s commodity code. The EU\'s TARIC database lists the tariff and other measures for each code, and they apply the same way in every EU country.',
          'You need an EORI number to import into the EU. You get it from the customs authority of the EU country where your business is established.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM 15 standard: properly treated and stamped with the official mark.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg and the feeder into Estonia, EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record, and some VAT-registered businesses prefer that so they handle the import VAT themselves. For most Estonian importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Estonian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to a larger European port and feeders or trucks to Muuga, or flies into Tallinn.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Estonia?',
          answer:
            'It depends on the mode, the size and weight of your cargo, the route, and the season. Sea freight is the cheapest per unit, while air and express cost more. Import VAT and any duty are extra. We quote each shipment for your dates, so request a quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Estonia take?',
          answer:
            'It depends on the mode and the sailing or flight. Sea freight is the slowest and cheapest, air freight is much faster, and express courier is usually the fastest door to door. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We quote transit times per shipment.',
        },
        {
          question: 'Why does shipping to Estonia take longer than to Western Europe?',
          answer:
            'Cargo for Estonia usually changes ship at a larger European port and then comes in on a Baltic feeder or by road. That extra leg adds time compared with ports where the big ocean ships call. Ask us how your sailing runs.',
        },
        {
          question: 'What is the cheapest way to ship from China to Estonia?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill most of it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Estonia?',
          answer:
            'Yes. The EU says an EORI number is mandatory for all customs operations in the EU, including imports. Your forwarder or broker needs it to clear your goods, and you get it from the customs authority of the EU country where your business is established.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Estonia?',
          answer:
            'Estonia\'s standard VAT rate is 24 percent, and it applies as import VAT on top of any duty. Duty depends on your product\'s commodity code in the EU TARIC database, and the same EU measures apply in every EU country.',
        },
        {
          question: 'Can I use Estonia as a gateway for the Baltics?',
          answer:
            'Muuga Harbour has a free zone that, in the port\'s words, grants more flexible customs procedures for companies providing transit and distribution services. Whether it suits you depends on your goods and where they go next, so ask us before you ship.',
        },
        {
          question: 'What documents do I need to import from China to Estonia?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wooden pallets and crates must meet the ISPM 15 standard.',
        },
      ],
      sources: [
        { label: 'EU Your Europe: VAT rates in EU countries', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs-4/customs-procedures-import-and-export/customs-procedures/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: EU customs tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/customs-4/calculation-customs-duties/customs-tariff/eu-customs-tariff-taric_en' },
        { label: 'Financial Administration of Slovenia (EU customs): wood packaging material', url: 'https://fu.gov.si/en/customs/prohibitions_and_restrictions/wood_packaging_material' },
        { label: 'Port of Tallinn: Muuga Harbour', url: 'https://www.ts.ee/en/muuga-harbour/' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-finland',
    name: 'Finland',
    code: 'FI',
    description: 'Sea and air freight from China to Finland through HaminaKotka and Helsinki, with feeder links from European ports. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['HaminaKotka', 'Helsinki', 'Rauma'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Auto Parts', 'Textiles'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Finland: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Finland: compare sea, air and express freight, HaminaKotka and Helsinki ports, and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Finland moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at HaminaKotka or Helsinki, usually on a feeder from a larger European port. Sea freight is the cheapest and slowest option, and air and express are faster. Finnish import VAT of 25.5 percent and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Finland, your cargo usually crosses the Baltic on a feeder from a bigger European port, so routing and the Finnish VAT rate both shape your landed cost. This guide covers what shapes the cost of shipping from China to Finland, how the options compare on speed, which ports your cargo moves through, and the Finnish and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy, and air freight is much faster. Finland is in the EU, so you need an EORI number to clear customs, and you should plan for 25.5 percent import VAT plus any duty. Request a quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the route, and the season. Freight prices change often, so we quote each shipment for your dates, ports, and cargo. Where we have current prices from our rate sheet, they are shown on this page.',
        factors: [
          'Routing: China to Finland cargo usually changes ship at a large European port and crosses the Baltic on a feeder, so the hub leg affects transit and cost.',
          'Season: demand and rates can change around Chinese New Year and before the holiday peak.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Finnish import VAT, any customs duty, or the customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Finland shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. The Port of HaminaKotka, the biggest container port in Finland, has daily connections to all significant ocean ports in Europe. So cargo from China usually sails to a large European port first and crosses the Baltic on a feeder to HaminaKotka or to Helsinki, whose Vuosaari harbour mainly serves container and RoRo traffic. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. For smaller loads LCL is usually cheaper, and for larger loads a full container wins, so we quote both and you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Helsinki-Vantaa, sometimes connecting through another airport on the way. It costs much more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is usually the fastest door-to-door option into Finland, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Finland. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Main Chinese export ports include Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou. For air freight, the main Chinese gateways include Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the Finnish side, HaminaKotka is the biggest container port in Finland, and the port says almost half of all container transport to and from Finland goes through it. Helsinki\'s Vuosaari harbour mainly serves container and RoRo traffic for the capital region, and Rauma is another Finnish port. Cargo usually changes ship at a large European port and crosses the Baltic on a feeder. Helsinki-Vantaa is a common airport for air cargo. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Finland is in the EU, so EU customs rules and the EU tariff apply. Plan for 25.5 percent import VAT plus any duty. Duty depends on your exact product, so check the commodity code for your goods in the EU TARIC database before you ship.',
        points: [
          'Finnish import VAT is 25.5 percent, the standard VAT rate in the country, charged on top of any duty.',
          'EU customs duty depends on your product\'s commodity code. The EU\'s TARIC database lists the tariff and other measures for each code, and they apply the same way in every EU country.',
          'You need an EORI number to import into the EU. You get it from the customs authority of the EU country where your business is established.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM 15 standard: properly treated and stamped with the official mark.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg and the Baltic feeder into Finland, EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record, and some VAT-registered businesses prefer that so they handle the import VAT themselves. For most Finnish importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Finnish delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to a large European port and crosses the Baltic to HaminaKotka or Helsinki, or flies into Helsinki-Vantaa.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Finland?',
          answer:
            'It depends on the mode, the size and weight of your cargo, the route, and the season. Sea freight is the cheapest per unit, while air and express cost more. Import VAT and any duty are extra. We quote each shipment for your dates, so request a quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Finland take?',
          answer:
            'It depends on the mode and the sailing or flight. Sea freight is the slowest and cheapest, air freight is much faster, and express courier is usually the fastest door to door. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We quote transit times per shipment.',
        },
        {
          question: 'What is the import VAT rate in Finland?',
          answer:
            'Finland\'s standard VAT rate is 25.5 percent, and it applies as import VAT on top of any duty. Plan for it in your landed cost.',
        },
        {
          question: 'What is the cheapest way to ship from China to Finland?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill most of it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Finland?',
          answer:
            'Yes. The EU says an EORI number is mandatory for all customs operations in the EU, including imports. Your forwarder or broker needs it to clear your goods, and you get it from the customs authority of the EU country where your business is established.',
        },
        {
          question: 'How much duty will I pay importing from China to Finland?',
          answer:
            'Duty depends on your product\'s commodity code in the EU TARIC database, and the same EU measures apply in every EU country. On top of any duty, 25.5 percent import VAT applies.',
        },
        {
          question: 'Which Finnish port do shipments arrive at?',
          answer:
            'Most container cargo goes to HaminaKotka, the biggest container port in Finland, or to Helsinki\'s Vuosaari harbour. Rauma is another option on the west coast. We pick the port that best fits your delivery address.',
        },
        {
          question: 'What documents do I need to import from China to Finland?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wooden pallets and crates must meet the ISPM 15 standard.',
        },
      ],
      sources: [
        { label: 'EU Your Europe: VAT rates in EU countries', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs-4/customs-procedures-import-and-export/customs-procedures/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: EU customs tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/customs-4/calculation-customs-duties/customs-tariff/eu-customs-tariff-taric_en' },
        { label: 'Financial Administration of Slovenia (EU customs): wood packaging material', url: 'https://fu.gov.si/en/customs/prohibitions_and_restrictions/wood_packaging_material' },
        { label: 'Port of HaminaKotka: Containers', url: 'https://www.haminakotka.com/services-and-price-list/containers' },
        { label: 'Port of Helsinki: Vuosaari Harbour', url: 'https://www.portofhelsinki.fi/en/professionals/cargo-and-passenger-harbours/vuosaari-harbour/' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-georgia',
    name: 'Georgia',
    code: 'GE',
    description: 'Sea, rail, and air freight from China to Georgia, with sea cargo landing at Poti and Batumi. FCL, LCL, customs help, and door-to-door delivery.',
    majorPorts: ['Poti', 'Batumi'],
    transitTime: '',
    popularGoods: ['Consumer Goods', 'Machinery', 'Electronics', 'Building Materials', 'Auto Parts'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Georgia: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Georgia: compare sea, rail, air and express freight, the Poti and Batumi ports, Georgian VAT and customs rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Georgia moves cargo by sea freight, air freight, rail freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Sea cargo arrives at the Black Sea ports of Poti and Batumi. We quote transit time for each sailing or flight. Georgia charges 18 percent VAT on imports, and Georgia and China signed a free trade agreement in 2017, which may lower duty on some goods with the right proof of origin.',
      intro:
        'If you import from China into Georgia, the customs side is fairly simple. Georgian import duty comes in a few low bands, and VAT is 18 percent. This guide covers what drives the cost of shipping from China to Georgia, which ports and routes your cargo moves through, and the Georgian customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have several ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), rail freight, air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Rail sits between sea and air on speed and price, and air is the fastest for urgent stock. Georgia is also a transit country, so cargo often moves onward to its neighbours. Request a live quote any time and we will price your exact shipment for your dates.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. Rates move week to week, and the route a line takes into the Black Sea also changes the cost. We quote each shipment for your exact cargo, ports, and dates.',
        factors: [
          'Duty and VAT: Georgian import duty is set in a few bands by product, and VAT is 18 percent of the import value. Some Chinese goods may qualify for lower duty under the China-Georgia free trade agreement, so we check your goods before you ship.',
          'Mode: sea is cheapest, rail sits in the middle, air is faster and dearer, express is fastest and dearest.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles VAT and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Rail freight is usually priced between sea and air. Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky but light cargo costs more than it looks. Freight quotes do not include Georgian VAT, any duty, or the clearance fee, as covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Georgia shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo sails from China into the Black Sea and arrives at Poti or Batumi. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. LCL takes longer than FCL because the box has to be filled and then unpacked. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters, and rail is a middle ground for Georgia. Air cargo flies from Chinese hubs such as Guangzhou, Shenzhen, and Shanghai to Tbilisi. Rail freight runs overland from inland China to Georgia, slower than air but faster than sea, at a price between the two. Air is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky but light cargo is charged on its size, and per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote sea, rail, and air side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Georgia, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Georgia. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Rail freight', time: 'Quoted per shipment', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive heavy cargo' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle Georgia-bound containers. For air freight, the main gateways include Guangzhou, Shenzhen, and Shanghai, and rail services start from inland Chinese hubs. On the Georgian side, sea cargo arrives at Poti or Batumi, both on the Black Sea, and Tbilisi is the main air gateway. Georgia sits between Europe and Asia, so cargo often moves onward to neighbouring countries. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Georgia has a simple tariff with a few low bands, so customs is fairly easy to plan. Here is what applies when you import from China. Your main tax cost is usually the 18 percent VAT, and the duty depends on your product.',
        points: [
          'Georgia and China signed a free trade agreement on 13 May 2017. Whether your goods pay less duty under it depends on the product and on having the right proof of origin, so we check each tariff code before you ship.',
          'Georgian import duty is 0, 5, or 12 percent of the customs value, or a fixed rate, depending on the type of goods.',
          'Import VAT is 18 percent of the import value. Excise also applies to some goods.',
          'The Revenue Service of Georgia runs customs, and a clearance service fee is charged per customs declaration. We or your own broker file the declaration for you.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin if you want to claim a lower duty, plus any product-specific permits.',
          'Georgia is a transit country, so if your goods are heading onward to a neighbouring country, we can set up a transit procedure rather than a full import.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg, Georgian customs and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. The main tax to handle is usually the 18 percent VAT, and we check whether your goods can use the free trade agreement so you do not pay duty you do not owe. The alternative, FOB or CIF, leaves the Georgian clearance and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes, and we can also arrange onward transit if your goods continue beyond Georgia.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your delivery address in Georgia or onward.',
        'We quote your options (sea FCL, sea LCL, rail, air, or express) for your dates, and you pick one.',
        'We check whether your goods can use the China-Georgia free trade agreement and help you get the certificate of origin if they can.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Poti or Batumi, travels by rail, or flies into Tbilisi.',
        'We clear Georgian customs, handle VAT and any duty, and deliver to your door, or set up onward transit if your goods continue beyond Georgia.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Georgia?',
          answer:
            'It depends on the mode, the size and weight of your cargo, and the season. We quote each shipment for your dates. Sea freight is the cheapest per unit, and air and express cost more. Georgian VAT of 18 percent, plus any duty, comes on top of the freight. Request a live quote for your exact cargo.',
        },
        {
          question: 'Do I pay import duty shipping from China to Georgia?',
          answer:
            'It depends on the product. Georgian import duty is 0, 5, or 12 percent of the customs value, or a fixed rate for some goods. Georgia and China also have a free trade agreement, which may lower the duty on some goods with the right proof of origin. You pay 18 percent import VAT either way.',
        },
        {
          question: 'How long does shipping from China to Georgia take?',
          answer:
            'It depends on the mode and the sailing. Air and express are the fastest, rail is in the middle, and sea is the slowest. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We give you the time with each quote.',
        },
        {
          question: 'How does rail freight from China to Georgia compare to sea?',
          answer:
            'Rail is faster than sea and cheaper than air, so it sits in the middle on both speed and price. It runs overland from inland China to Georgia, and it is a good fit for time-sensitive cargo that is too heavy or bulky for air. We can quote rail next to sea and air.',
        },
        {
          question: 'What is the cheapest way to ship from China to Georgia?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. We quote both so you can compare.',
        },
        {
          question: 'Which Georgian port do shipments arrive at?',
          answer:
            'Sea cargo arrives at Poti or Batumi on the Black Sea. Tbilisi is the main air gateway. The best choice depends on your delivery address and the sailing.',
        },
        {
          question: 'Can I ship onward from Georgia to neighbouring countries?',
          answer:
            'Yes. Georgia sits between Europe and Asia, and cargo often moves onward to neighbouring countries. We can set up a transit procedure so your goods continue beyond Georgia rather than being fully imported.',
        },
        {
          question: 'What documents do I need to import from China to Georgia?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin if you want to claim a lower duty under the free trade agreement, plus any product-specific permits.',
        },
      ],
      sources: [
        { label: 'Revenue Service of Georgia, export and import brochure', url: 'https://rs.ge/Media/Default/Images/CustomsBrochures/exsport%20import.pdf' },
        { label: 'Ministry of Foreign Affairs of Georgia, Georgia and China free trade agreement', url: 'https://mfa.gov.ge/en/news/478980-saqartvelosa-da-chinets-shoris-tavisufali-vach-rob' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-greece',
    name: 'Greece',
    code: 'GR',
    description: 'Sea and air freight from China to Greece through Piraeus and Thessaloniki. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Piraeus', 'Thessaloniki'],
    transitTime: '',
    popularGoods: ['Consumer Goods', 'Machinery', 'Electronics', 'Textiles', 'Building Materials'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Greece: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Greece: compare sea, air and express freight, the Port of Piraeus, and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Greece moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Piraeus, Greece\'s main port, where the container terminal on Piers II and III is run by a COSCO SHIPPING Ports subsidiary. Greece\'s standard VAT rate of 24 percent and any EU duty apply on import, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Greece, Piraeus is the port to know. Its port authority calls it the natural port of Athens and the first major European port after the Suez Canal. This guide covers what drives the cost of shipping from China to Greece, how each option compares, which ports your cargo moves through, and the Greek and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Air freight costs more but is much faster. Greece is in the EU, so you need an EORI number to clear customs and should plan for 24 percent VAT plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, the route, and the season. Prices move often, so we quote each shipment for your goods, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Port: Piraeus and Thessaloniki have different sailings, so the port you pick affects time and cost.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Greek import VAT, EU duty, or customs clearance, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Greece shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL also takes longer, because the container has to be filled and unpacked. Piraeus is Greece\'s main gateway. The Piraeus Port Authority runs the container terminal on Pier I, and Piraeus Container Terminal (PCT), a subsidiary of COSCO SHIPPING Ports, runs Piers II and III. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Athens, often connecting through another hub on the way. It costs much more per kilo than sea freight, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Greece, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Greece. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Common departure ports in China include Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Greek side, Piraeus near Athens is the main gateway, and Thessaloniki is in the north. The Piraeus Port Authority lists feeder links from Piraeus to the Mediterranean, the Black Sea, and the Adriatic, and train or road links to the Balkans and Central Europe, so it can suit onward delivery across the region. Air cargo can land at Athens International Airport. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Greece is part of the EU customs union, so the same EU tariff applies as in every other EU country, and no customs duty is due when goods later move from one EU country to another. All goods imported into the EU are subject to VAT, so plan around Greece\'s 24 percent standard rate and any duty. Duty depends on your exact product, so confirm the rate for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'Greece\'s standard VAT rate is 24 percent, with lower rates for some goods. Import VAT is charged and due in the country of import.',
          'EU customs duty is set by your product\'s commodity code. Look it up in TARIC, the EU\'s tariff database, which also lists extra measures such as anti-dumping duty on some goods.',
          'You need an EORI number for customs in the EU, including imports. It is one common type of number used across the EU.',
          'There is no longer a EUR 22 VAT-free allowance: since July 2021 all goods imported into the EU are subject to VAT. For low-value goods sold to consumers in consignments worth EUR 150 or less, a temporary customs duty of EUR 3 per item applies from 1 July 2026 to 1 July 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'If your goods are going on from Greece to another EU country or beyond, we can set up the right clearance or transit for your destination.',
          'Wood pallets and crates from outside the EU must be heat treated or fumigated in line with ISPM15 and carry the ISPM15 stamp.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Greek and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Greek importers, DDP is worth it for the time and risk it removes, though some VAT-registered businesses prefer to be the importer of record themselves.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Greek delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with prices and timings for your dates, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Piraeus or Thessaloniki, or flies into Athens.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Greece?',
          answer:
            'It depends on the method, the size and weight of your cargo, the route, and the season, and prices move often. We quote each shipment for your dates. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Greece take?',
          answer:
            'Sea freight is the slowest option, air freight is much faster, and express courier is the fastest. Sea transit depends on the sailing and on whether the line routes via the Suez Canal or round Africa. Ask us which way your sailing goes and we will give you the timing.',
        },
        {
          question: 'Why is Piraeus a good port for China imports?',
          answer:
            'Its port authority describes Piraeus as Greece\'s main gateway and the first major European port after the Suez Canal. The container terminal on Piers II and III is run by Piraeus Container Terminal, a subsidiary of COSCO SHIPPING Ports, and the port has feeder links across the Mediterranean, the Black Sea, and the Adriatic.',
        },
        {
          question: 'What is the cheapest way to ship from China to Greece?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Greece?',
          answer:
            'Yes. An EORI number is required for customs operations in the EU, including imports. It is one common type of number used across the EU. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Greece?',
          answer:
            'Duty is set by your product\'s commodity code in the EU TARIC tariff, so it varies by product. On top of that, Greece\'s standard VAT rate of 24 percent applies on import.',
        },
        {
          question: 'Can I use Piraeus as a gateway for the Balkans or Black Sea?',
          answer:
            'Yes. The Piraeus Port Authority lists feeder links to the Mediterranean, the Black Sea, and the Adriatic, and train or road links to the Balkans and Central Europe. We can set up the right clearance or transit for your final destination.',
        },
        {
          question: 'What documents do I need to import from China to Greece?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must meet ISPM15.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rules and rates', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs-4/customs-procedures-import-and-export/customs-procedures/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: EU Customs Tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/customs-4/calculation-customs-duties/customs-tariff/eu-customs-tariff-taric_en' },
        { label: 'European Union: The EU customs union in action', url: 'https://european-union.europa.eu/priorities-and-actions/actions-topic/customs_en' },
        { label: 'EU Delegation: Changes to EU VAT rules for e-commerce', url: 'https://www.eeas.europa.eu/delegations/new-zealand/changes-eu-rules-value-added-tax-vat-e-commerce-transactions_en' },
        { label: 'Access2Markets: EUR 3 customs duty on low-value consignments', url: 'https://trade.ec.europa.eu/access-to-markets/en/news/eu-applies-eu3-customs-duty-item-low-value-e-commerce-consignments' },
        { label: 'European Commission: Requirements for wood packaging', url: 'https://food.ec.europa.eu/plants/plant-health-and-biosecurity/trade-plants-plant-products-non-eu-countries/requirements-wood-packaging-dunnage_en' },
        { label: 'Piraeus Port Authority: Container Terminal', url: 'https://www.olp.gr/en/services-olp/container-terminal' },
        { label: 'Piraeus Container Terminal: About us', url: 'https://www.pct.com.gr/about-us' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-hungary',
    name: 'Hungary',
    code: 'HU',
    description: 'Sea, rail, and air freight from China to Hungary. Landlocked, so cargo arrives via Koper or Rijeka and moves to Budapest, or comes direct by rail to the BILK terminal. FCL, LCL, customs, and door-to-door.',
    majorPorts: ['Koper', 'Rijeka', 'Trieste', 'Hamburg'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Auto Parts', 'Consumer Goods', 'Textiles'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Hungary: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Hungary: compare sea, rail, air and express freight, gateway ports, and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Hungary moves cargo by sea freight, rail freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Hungary is landlocked, so sea cargo arrives at a port like Koper or Rijeka and moves by road or rail to Budapest. We quote the transit time for your route. Hungarian import VAT is 27 percent plus any duty, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Hungary, two things shape your shipment: Hungary is landlocked, so you pick a gateway seaport in another country, and there is a direct China-Europe rail service to Budapest, which gives you a genuine middle option. This guide covers what drives the cost of shipping from China to Hungary, how the options compare on speed, which ports and routes your cargo moves through, and the Hungarian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have several ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), rail freight, air freight, and express courier. Sea freight is the cheapest for anything large or heavy, but also the slowest. Rail to Budapest sits between sea and air on cost and speed, and air freight is the fastest of the bulk options. Hungary is in the EU, so you need an EORI number to clear customs and should plan for 27 percent import VAT plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the gateway port or rail route, the size and weight of your cargo, and the season. Ocean rates in particular move week to week, and inland haulage from the port to your address is part of the total. We quote each shipment for your goods, route and dates.',
        factors: [
          'Gateway port: Koper and Rijeka on the Adriatic and Hamburg on the North Sea are common choices. Each gives a different sailing schedule and inland leg, so compare the total landed cost.',
          'Mode: sea is cheapest, rail sits in the middle, air is faster and dearer, express is fastest and dearest.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time and cost. Ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, inland haulage, and delivery into one price, which removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) to the gateway port, plus inland haulage to Budapest, or per cubic meter (LCL). Rail freight direct to Budapest is priced per container and sits between sea and air on cost and speed. Air and express are priced on chargeable weight. Freight prices do not include Hungarian import VAT or EU duty, covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Hungary shipping and the cheapest way to move anything large or heavy, but because Hungary is landlocked, the choice of gateway port matters. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it, while shared container space (LCL) means you pay only for the space you use, better for smaller loads. Much Hungary-bound cargo arrives at Koper in Slovenia, which says it has high market shares in Hungary, especially for containers, or at Rijeka in Croatia, and then moves by road or rail. The BILK terminal in Budapest has direct container trains to ports including Koper, Rijeka, Hamburg and Bremerhaven. Trieste in Italy and Constanta on the Black Sea are alternatives. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. Picking the right gateway port is the main way to optimise cost and time for a landlocked destination, and we quote the options so you can compare.',
      airFreightBody:
        'Air freight is the fast option, and rail is a strong middle ground for Hungary. Air cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Budapest. Rail freight runs from China to Rail Cargo Group\'s BILK terminal in Budapest. Its Xian to Budapest service is a direct full-container link along the Silk Road, crossing into the EU at Malaszewicze, at a price between sea and air. Air is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size, and per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote sea, rail, and air side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Hungary, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Hungary. Once a shipment gets heavier, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL (via gateway port)', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Rail freight (to Budapest BILK)', time: 'Quoted per shipment', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive heavy cargo' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Sea cargo for Hungary can leave from Chinese ports such as Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou. For air freight, common departure airports are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong, and rail services start from inland Chinese hubs such as Xi\'an. Because Hungary is landlocked, sea cargo arrives at a gateway port in another country and then moves inland by road or rail. Koper in Slovenia counts Hungary among its most important hinterland markets, and Rijeka in Croatia, Trieste, Constanta, and Hamburg are other options. Budapest is a China-Europe rail destination, with Rail Cargo Group\'s BILK terminal as a central hub for conventional and intermodal transport to and from Central and Southeastern Europe. Air freight can fly into Budapest Ferenc Liszt Airport. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Hungary is part of the EU customs union, so the same EU tariff applies here as in every other EU country. There is no VAT-free allowance on imports, and Hungary\'s standard VAT rate is 27 percent, so plan around 27 percent import VAT plus any duty. Rates depend on your exact product, so confirm the duty for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'Hungarian import VAT is 27 percent. It is charged on the customs value plus duties and other charges, such as shipping and insurance. If you are a VAT-registered business, you can usually deduct the VAT you pay on business purchases in your VAT return, but it is still a real cash-flow item at clearance.',
          'EU customs duty is usually a percentage of the customs value of the goods, and the rate depends on your product\'s commodity code in the TARIC database. TARIC also lists anti-dumping duties, which apply to some goods from some countries, so check your code before you ship.',
          'You need an EORI number to clear goods through EU customs. A business established in Hungary gets it from Hungarian customs, and the number starts with the country code of the issuing country, HU for Hungary.',
          'The old VAT exemption for imported goods below EUR 22 was abolished on 1 July 2021, so import VAT applies from the first euro. Since 1 July 2026 the EU also charges a temporary customs duty of EUR 3 per item on low-value parcels worth up to EUR 150, counted by tariff classification, not by quantity.',
          'You can clear customs at the gateway port or in Hungary. EU customs transit suspends duties and taxes while the goods travel, so clearance can happen at the destination instead of the port where they entered the EU. We set up whichever suits your routing.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading, air waybill, or rail consignment note.',
          'Wood pallets and crates entering the EU must be treated and marked to the ISPM 15 standard.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg, the inland haulage from the gateway port, Hungarian and EU customs including duty and import VAT, and final delivery to your address in Hungary. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is especially useful for a landlocked destination, where the gateway-port and inland legs add complexity. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Hungarian importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Hungarian delivery address.',
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
            'It depends on the mode, the gateway port, the inland leg, and the size and weight of your cargo. Sea is the cheapest per unit, rail to Budapest sits between sea and air, and air and express cost the most. Import VAT and duty are extra. Request a live quote.',
        },
        {
          question: 'How does cargo reach Hungary if it is landlocked?',
          answer:
            'Sea cargo arrives at a gateway port in another country, usually Koper in Slovenia or Rijeka in Croatia, then moves inland by road or rail. Trieste, Constanta, and Hamburg are alternatives. Rail freight can also run direct from China to the BILK terminal in Budapest.',
        },
        {
          question: 'How long does shipping from China to Hungary take?',
          answer:
            'Sea plus the inland leg is the slowest option, rail to Budapest is faster, air is faster again, and express is quickest for small parcels. Lines can route via the Suez Canal or round Africa, which changes the transit time, so we quote the time for your route.',
        },
        {
          question: 'How does rail freight from China to Hungary compare?',
          answer:
            'Rail Cargo Group runs a direct full-container service from Xian to its BILK terminal in Budapest, crossing into the EU at Malaszewicze. It is faster than sea at a price between sea and air, so it is a genuine middle option for time-sensitive cargo.',
        },
        {
          question: 'What is the cheapest way to ship from China to Hungary?',
          answer:
            'Sea freight is usually the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. We compare gateway ports so the inland leg does not eat the saving.',
        },
        {
          question: 'Why is import VAT so high in Hungary?',
          answer:
            'Hungary\'s standard VAT rate is 27 percent, charged on the customs value plus duties and other charges such as shipping and insurance. VAT-registered Hungarian businesses can usually deduct it in their VAT return, but it is a real cash-flow item to budget for at clearance.',
        },
        {
          question: 'Do I need an EORI number to import from China to Hungary?',
          answer:
            'Yes. An EORI number is required to clear goods through EU customs, and one number covers customs operations across the EU. A Hungarian EORI starts with HU, and your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'What documents do I need to import from China to Hungary?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading, air waybill, or rail consignment note, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must meet the ISPM 15 standard.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rates in EU countries', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'Your Europe: Charging and deducting VAT', url: 'https://europa.eu/youreurope/business/finance-and-tax/vat/charging-deducting-vat/index_en.htm' },
        { label: 'European Commission: Buying goods from outside the EU (import VAT and duty)', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/importation/buying-goods-online-coming-non-european-union-country_en' },
        { label: 'European Commission: EU Customs Tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/online-services/online-services-and-databases-customs/eu-customs-tariff-taric_en' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-operation/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: Customs formalities for low value consignments', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-operation/customs-formalities-low-value-consignments_en' },
        { label: 'European Commission: EUR 3 customs duty for low-value parcels', url: 'https://commission.europa.eu/news-and-media/news/ensuring-fairness-and-safety-eur3-customs-duty-low-value-parcels-2026-06-29_en' },
        { label: 'European Commission: Customs transit', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-transit_en' },
        { label: 'Polish plant health service (PIORIN): Wood packaging and ISPM 15', url: 'https://www.gov.pl/web/piorin-en/wood-packaging' },
        { label: 'Port of Koper: Koper, the sea gateway for Visegrad countries', url: 'https://www.luka-kp.si/en/news/koper-the-sea-gateway-for-visegrad-countries/' },
        { label: 'Rail Cargo Group: Xian to Budapest rail service', url: 'https://www.railcargo.com/en/network/transfer/xian-budapest' },
        { label: 'Rail Cargo Group: Budapest BILK terminal services', url: 'https://www.railcargo.com/en/services/intermodal-logistics/terminals/standorte/budapest/services' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-ireland',
    name: 'Ireland',
    code: 'IE',
    description: 'Sea and air freight from China to Ireland, with sea cargo usually feedered into Dublin Port from a North European hub. FCL, LCL, express, customs clearance and door-to-door delivery.',
    majorPorts: ['Dublin', 'Cork', 'Rosslare'],
    transitTime: '',
    popularGoods: ['Electronics', 'Machinery', 'Consumer Goods', 'Pharmaceuticals', 'Textiles'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Ireland: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Ireland: sea, air and express options, Dublin Port feeder routes, and EU customs, VAT and EORI rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Ireland moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and usually reach Dublin Port on a feeder ship from a North European hub such as Rotterdam. Sea is the cheapest and slowest, air and express are faster. Irish VAT at the standard 23 percent rate and any EU duty apply, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Ireland, you are shipping to an island at the western edge of the EU, so most sea cargo feeders in from a bigger continental port. This guide covers how pricing works, how the shipping options compare, which ports your cargo moves through, and the Irish and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy but takes the longest. Air freight costs more but arrives much sooner. The UK has left the EU, so trucking goods through Great Britain means extra customs steps, and many importers prefer a sea route that stays inside the EU. Ireland is in the EU, so you need an EORI number and should plan for VAT at the standard 23 percent rate plus any duty. Request a live quote any time and we will price your exact shipment for your dates.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, and the season. Rates move week to week, so we quote each shipment for your exact cargo, ports, and dates. For Ireland, the feeder leg from the continental hub is part of the price.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Season: demand, and so rates, tend to rise before Chinese New Year and in the autumn peak before the holidays.',
          'Hub: most China to Ireland sea cargo changes ship at a North European hub such as Rotterdam and feeders to Dublin, so the hub leg affects timing and cost.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time and the cost; ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include import VAT, duty, or the customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the cheapest way to move anything large or heavy from China. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL takes longer than FCL, because the cargo has to be grouped with other shipments before sailing and split out again on arrival. For Ireland, the deep-sea ship usually unloads at a continental hub, and a feeder ship carries the container on to Dublin. The Port of Rotterdam, for example, runs high-frequency feeder services to Ireland that link with its deep-sea calls. Timing depends on the line, the hub, and the feeder connection, so we confirm it for your sailing when we quote. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Dublin Airport. It costs much more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates usually fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Ireland. As shipments get heavier, standard air freight usually becomes the cheaper fast option, so express is best kept for the genuinely small and urgent. We can compare express against air freight for any urgent shipment.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle the bulk of Ireland-bound containers. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the Irish side, Dublin Port describes itself as the largest freight and passenger port in Ireland, and it is where most containers from China arrive. Cork (Ringaskiddy) serves the south and Rosslare Europort the southeast. Sea cargo usually reaches Ireland on a feeder ship from a North European hub; Rotterdam, for example, runs feeder services to Ireland. Dublin Airport is the usual air gateway. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Ireland is in the EU, so the EU customs tariff applies, and EU tariff measures apply the same way in every EU country. Plan every commercial shipment around import VAT and any duty. Duty depends on your exact product, so confirm the rate for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'The standard VAT rate in Ireland is 23 percent. Plan for import VAT as well as any duty, and ask your accountant how your business accounts for it.',
          'EU customs duty is set by your product\'s commodity code. The EU\'s TARIC database gives an overview of the requirements for importing your goods into the EU, so look up your code there, or ask us, before you ship.',
          'You need an EORI number to import into the EU. One EORI number is valid throughout the EU, so you only need one even if you clear goods in more than one EU country. In Ireland you register for it with Revenue through the Revenue Online Service (ROS).',
          'The UK has left the EU, so goods trucked through Great Britain (the landbridge) leave and re-enter the EU customs area, which adds customs steps. A sea route from a continental EU hub straight to Ireland keeps the goods inside the EU.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Ask your supplier to use wood pallets and crates that are treated and stamped to ISPM 15, the international standard for wood packaging, so the packaging does not cause problems at the border.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg and the feeder into Dublin, Irish and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For many Irish importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record and handle import VAT themselves.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Irish delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'Make sure you have an EORI number; we can guide you through registering with Revenue if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails from the origin port, for example Shanghai, Ningbo, or Shenzhen, to a North European hub and on by feeder to Dublin, or flies to Dublin Airport.',
        'We file the Irish customs declaration, pay duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Ireland?',
          answer:
            'It depends on the method, the size and weight of your shipment, the season, and the feeder leg into Ireland. Sea freight is priced per container or per cubic meter, and air and express per kilo of chargeable weight. VAT and any duty are extra. We quote each shipment for your exact cargo and dates.',
        },
        {
          question: 'How long does shipping from China to Ireland take?',
          answer:
            'Sea freight is the slowest option, because most cargo changes ship at a continental hub before a feeder takes it to Dublin. Air freight is much faster and express courier is the fastest. Sea timing also depends on whether the line routes via the Suez Canal or round Africa. We confirm the timing for your shipment when we quote.',
        },
        {
          question: 'Should I ship to Ireland directly or via the UK landbridge?',
          answer:
            'The UK has left the EU, so goods trucked through Great Britain leave and re-enter the EU customs area, which adds customs steps. A sea route from a continental EU hub straight to Ireland keeps the goods inside the EU. We can advise on the best route for your cargo.',
        },
        {
          question: 'What is the cheapest way to ship from China to Ireland?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper per unit once you have enough volume to fill most of it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Ireland?',
          answer:
            'Yes. Any trader who imports goods into the EU needs an EORI number, and it is valid throughout the EU. In Ireland you register with Revenue through the Revenue Online Service (ROS).',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Ireland?',
          answer:
            'The standard VAT rate in Ireland is 23 percent, and import VAT is due as well as any duty. EU duty depends on your product\'s commodity code, which you can check in the EU TARIC database, or ask us.',
        },
        {
          question: 'Which Irish port do shipments arrive at?',
          answer:
            'Most containers from China arrive at Dublin Port, which describes itself as the largest freight and passenger port in Ireland. Cork (Ringaskiddy) serves the south and Rosslare Europort the southeast. Dublin Airport is the usual gateway for air freight.',
        },
        {
          question: 'What documents do I need to import from China to Ireland?',
          answer:
            'The core documents are the commercial invoice, the packing list, and the bill of lading for sea or the air waybill for air, plus your EORI number. Some goods need extra certificates or licences, so tell us what you are shipping and we will check.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rules and rates', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'Irish Revenue: EORI system (EORI valid throughout the EU)', url: 'https://www.revenue.ie/en/customs/businesses/electronic-systems/eori-system.aspx' },
        { label: 'European Commission: EU Customs Tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/customs-4/calculation-customs-duties/customs-tariff/eu-customs-tariff-taric_en' },
        { label: 'Irish Department of Agriculture: Wood packaging material and ISPM 15', url: 'https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/publications/wood-packaging-material-and-ispm-15/' },
        { label: 'Dublin Port: home page', url: 'https://www.dublinport.ie/' },
        { label: 'Port of Rotterdam: deep sea and feeder connections', url: 'https://www.portofrotterdam.com/en/logistics/connections/deep-sea-and-feeder' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-israel',
    name: 'Israel',
    code: 'IL',
    description: 'Sea and air freight from China to Israel, to Haifa and Ashdod. FCL, LCL, express, customs and door-to-door delivery.',
    majorPorts: ['Haifa', 'Ashdod'],
    transitTime: '',
    popularGoods: ['Electronics', 'Machinery', 'Consumer Goods', 'Textiles', 'Building Materials'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Israel: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Israel: compare sea, air and express freight, Haifa and Ashdod ports, customs, VAT, purchase tax and SII approval. Free quote.',
      answerCapsule:
        'Shipping from China to Israel moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Haifa or Ashdod. Sea freight is the cheapest and slowest, air is faster and dearer, and we quote the timing for your exact sailing or flight. Israel\'s VAT rate is 18 percent, customs duty and sometimes purchase tax apply, and many products need approval from the Standards Institution of Israel (SII) to clear.',
      intro:
        'If you import from China into Israel, two things matter beyond the freight: standards approval and routing. This guide covers what drives the cost of shipping from China to Israel, how the options compare on speed, which ports your cargo moves through, and the Israeli customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Air freight costs more but arrives much sooner. Israel uses its own customs tariff, with VAT at 18 percent plus duty, and many imported products need approval from the Standards Institution of Israel (SII) before they can be released. Sort that out early, then request a live quote and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the season, and the route your line takes. Ocean and air rates, insurance and space all move with the market, so we do not print fixed prices here. Request a live quote and we will price your exact shipment, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing and insurance: lines can route via the Suez Canal or round Africa, which changes the transit time and cost, and some lines add risk surcharges; ask us which way your sailing goes.',
          'Duty and purchase tax: some products carry purchase tax on top of duty and VAT, so check your product.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Israeli customs duty, the purchase tax on some products, 18 percent VAT, or the forwarder\'s clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Israel shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which pays off once you have enough cargo to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo arrives at Haifa or Ashdod, Israel\'s two main container ports on the Mediterranean, and LCL takes extra time for consolidation and unpacking. Israel sits just past the Suez Canal, but lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. For smaller loads LCL is usually cheaper, and once you can fill most of a box a full container wins. We quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Ben Gurion Airport near Tel Aviv. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. Air schedules and insurance can change at short notice, so book early. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Israel. Regulated products may still need standards approval even by express. Once a shipment gets heavier, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou are the usual starting points for Israel-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Israeli side, container ships call at Haifa in the north and Ashdod in the south, both on the Mediterranean coast. Ben Gurion International Airport near Tel Aviv is the main air gateway. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Israel uses its own customs tariff, and the part that catches importers out is standards approval, not just duty. Here is what applies when you import from China. Duty depends on your product, purchase tax applies to some products, and many goods need approval from the Standards Institution of Israel before they can be released.',
        points: [
          'Israel\'s standard VAT rate is 18 percent. The Bank of Israel reports that the rate rose by one percentage point to 18 percent from January 2025.',
          'Customs duty depends on the product and its line in the Israel Tax Authority\'s Customs and Purchase Tax Tariff. Check your rate before ordering.',
          'Purchase tax applies to some goods. In the tariff, purchase tax applies when a purchase tax rate is shown for that line, on top of duty and VAT, so landed cost can be well above the headline duty.',
          'Many imported products need approval from the Standards Institution of Israel (SII). SII runs importer service centres for electrical, electronics, chemicals and health, and mechanics and hydraulics products, and importers submit requests for the approval of imported goods in its Maslol Plus system. Start this early, since missing approval delays clearance.',
          'A licensed Israeli customs broker can file the entry for you.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, certificate of origin, and the insurance certificate, plus SII approval and any agency permits for regulated goods.',
          'Ask us to confirm the rules for wood pallets and crates before your goods are loaded.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Israeli customs, duty, purchase tax where it applies, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. If your goods need standards approval, we coordinate that with the Israeli importer rather than replace it. The alternative, FOB or CIF, leaves the Israeli clearance, duty, and delivery for you to arrange through a local broker. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Israeli delivery address.',
        'Check whether your products need Standards Institution of Israel (SII) approval and start that process early, since it is a common cause of delay.',
        'We quote your options (sea FCL, sea LCL, air, or express) with prices and timing for your dates, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Haifa or Ashdod, or flies into Ben Gurion Airport near Tel Aviv.',
        'We clear Israeli customs, handle duty, any purchase tax, and VAT, and deliver to your door. With DDP, the charges and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Israel?',
          answer:
            'It depends on the method, the size of your shipment, the season, and the route. Sea freight is the cheapest per unit and air costs more per kilo. Israeli duty, any purchase tax, and 18 percent VAT are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Israel take?',
          answer:
            'It depends on the mode and the route. Lines can route via the Suez Canal or round Africa, which changes the sea transit time. Air and express are much faster. Clearance adds time on top. We give you the timing for your exact sailing or flight when we quote.',
        },
        {
          question: 'Do I need standards approval to import to Israel?',
          answer:
            'Often yes. Many imported products, including many electrical, electronic, chemical and mechanical goods, need approval from the Standards Institution of Israel (SII), which can include lab testing. Importers file approval requests in SII\'s Maslol Plus system. Check early, since missing approval delays release.',
        },
        {
          question: 'How much duty and tax will I pay importing from China to Israel?',
          answer:
            'Customs duty depends on the product and its line in the Israel Tax Authority\'s tariff. VAT is 18 percent, and some products also carry purchase tax where the tariff shows a purchase tax rate. Our team or a broker can confirm your exact rate.',
        },
        {
          question: 'What is the cheapest way to ship from China to Israel?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Which Israeli port do shipments arrive at?',
          answer:
            'Container ships call at Haifa in the north and Ashdod in the south, both on the Mediterranean. Ben Gurion International Airport near Tel Aviv is the main air gateway.',
        },
        {
          question: 'How does routing affect shipping to Israel?',
          answer:
            'Lines can route via the Suez Canal or round Africa, which changes the transit time, and some add risk surcharges, so cost and timing can change with little notice. We advise booking early and confirming routing before you commit.',
        },
        {
          question: 'What documents do I need to import from China to Israel?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, certificate of origin, and an insurance certificate, plus SII approval and any agency permits for regulated goods.',
        },
      ],
      sources: [
        { label: 'Bank of Israel: Annual Report 2025, chapter 6 (VAT rate)', url: 'https://www.boi.org.il/media/5bjix5v4/2025-chap-6e.pdf' },
        { label: 'Israel Tax Authority: Customs and Purchase Tax Tariff, order frame', url: 'https://shaarolami-query.customs.mof.gov.il/CustomspilotWeb/en/CustomsBook/Import/OrderFrame' },
        { label: 'Standards Institution of Israel: Importers', url: 'https://www.sii.org.il/en/importers/' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-latvia',
    name: 'Latvia',
    code: 'LV',
    description: 'Sea and air freight from China to Latvia through the Freeport of Riga, with feeder links from European ports. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Riga', 'Ventspils', 'Liepāja'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Textiles', 'Furniture'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Latvia: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Latvia: compare sea, air and express freight, the Freeport of Riga, and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Latvia moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at the Freeport of Riga, usually on a feeder from a larger European port. Sea freight is the cheapest and slowest option, and air and express are faster. Latvian import VAT of 21 percent and any EU duty apply on arrival, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Latvia, your cargo usually crosses the Baltic on a feeder from a bigger European port, so routing shapes the timeline. This guide covers what shapes the cost of shipping from China to Latvia, how the options compare on speed, which ports your cargo moves through, and the Latvian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy, and air freight is much faster. Latvia is in the EU, so you need an EORI number to clear customs and should plan for 21 percent import VAT plus any duty. Request a quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the route, and the season. Freight prices change often, so we quote each shipment for your dates, ports, and cargo. Where we have current prices from our rate sheet, they are shown on this page.',
        factors: [
          'Routing: China to Latvia cargo usually changes ship at a larger European port and crosses the Baltic on a feeder, so the hub leg affects transit and cost.',
          'Season: demand and rates can change around Chinese New Year and before the holiday peak.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Latvian import VAT, any customs duty, or the customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Latvia shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. The port of Riga is the largest port in Latvia, and containers are among its main cargo types. Cargo from China usually changes ship at a larger European port and crosses the Baltic to the Freeport of Riga on a feeder, or comes the last part of the way by road. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. For smaller loads LCL is usually cheaper, and for larger loads a full container wins, so we quote both and you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Riga, sometimes connecting through another airport on the way. It costs much more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is usually the fastest door-to-door option into Latvia, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Latvia. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Main Chinese export ports include Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou. For air freight, the main Chinese gateways include Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the Latvian side, the port of Riga is the largest port in Latvia and the second largest in the Baltic States, and containers are among its main cargo types. Ventspils and Liepāja are other Latvian ports. Cargo usually changes ship at a larger European port and crosses the Baltic on a feeder. Riga International Airport is a common airport for air cargo. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Latvia is in the EU, so EU customs rules and the EU tariff apply. Plan for 21 percent import VAT plus any duty. Duty depends on your exact product, so check the commodity code for your goods in the EU TARIC database before you ship.',
        points: [
          'Latvian import VAT is 21 percent, the standard rate, charged on top of any duty. Latvia also has reduced rates of 12 and 5 percent, which apply only to specific goods and services.',
          'EU customs duty depends on your product\'s commodity code. The EU\'s TARIC database lists the tariff and other measures for each code, and they apply the same way in every EU country.',
          'You need an EORI number to import into the EU. You get it from the customs authority of the EU country where your business is established.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates must meet the ISPM 15 standard: properly treated and stamped with the official mark.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg and the Baltic feeder into Riga, EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record, and some VAT-registered businesses prefer that so they handle the import VAT themselves. For most Latvian importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Latvian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to a larger European port and crosses the Baltic to the Freeport of Riga, or flies into Riga.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Latvia?',
          answer:
            'It depends on the mode, the size and weight of your cargo, the route, and the season. Sea freight is the cheapest per unit, while air and express cost more. Import VAT and any duty are extra. We quote each shipment for your dates, so request a quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Latvia take?',
          answer:
            'It depends on the mode and the sailing or flight. Sea freight is the slowest and cheapest, air freight is much faster, and express courier is usually the fastest door to door. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We quote transit times per shipment.',
        },
        {
          question: 'Why does shipping to Latvia go through another port first?',
          answer:
            'Cargo for Latvia usually changes ship at a larger European port, and a feeder then carries it across the Baltic to the Freeport of Riga. That extra leg adds time, so ask us how your sailing runs.',
        },
        {
          question: 'What is the cheapest way to ship from China to Latvia?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill most of it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Latvia?',
          answer:
            'Yes. The EU says an EORI number is mandatory for all customs operations in the EU, including imports. Your forwarder or broker needs it to clear your goods, and you get it from the customs authority of the EU country where your business is established.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Latvia?',
          answer:
            'Latvia\'s standard VAT rate is 21 percent, and it applies as import VAT on top of any duty. Duty depends on your product\'s commodity code in the EU TARIC database, and the same EU measures apply in every EU country.',
        },
        {
          question: 'Which Latvian port do shipments arrive at?',
          answer:
            'Most container cargo goes to the Freeport of Riga, the largest port in Latvia. Ventspils and Liepāja are other Latvian ports. We pick the port that best fits your delivery address.',
        },
        {
          question: 'What documents do I need to import from China to Latvia?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wooden pallets and crates must meet the ISPM 15 standard.',
        },
      ],
      sources: [
        { label: 'EU Your Europe: VAT rates in EU countries', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs-4/customs-procedures-import-and-export/customs-procedures/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: EU customs tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/customs-4/calculation-customs-duties/customs-tariff/eu-customs-tariff-taric_en' },
        { label: 'Financial Administration of Slovenia (EU customs): wood packaging material', url: 'https://fu.gov.si/en/customs/prohibitions_and_restrictions/wood_packaging_material' },
        { label: 'Freeport of Riga: Port performance', url: 'https://rop.lv/en/port-performance' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-lebanon',
    name: 'Lebanon',
    code: 'LB',
    description: 'Sea and air freight from China to Lebanon, with sea cargo landing at Beirut and Tripoli. FCL, LCL, customs help, and door-to-door delivery.',
    majorPorts: ['Beirut', 'Tripoli'],
    transitTime: '',
    popularGoods: ['Consumer Goods', 'Machinery', 'Electronics', 'Building Materials', 'Textiles'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Lebanon: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Lebanon: sea, air and express freight, Beirut and Tripoli ports, customs, VAT and payment planning. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Lebanon moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at the Port of Beirut or Tripoli. We quote transit time for each sailing or flight. Lebanese customs duty and VAT apply on arrival, and we confirm the rates for your goods before you ship.',
      intro:
        'If you import from China into Lebanon, the freight is the easy part. The harder parts are payment and a customs bill you need to check before you ship. This guide covers what drives the cost of shipping from China to Lebanon, which ports your cargo moves through, and the Lebanese customs points you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Air freight costs more but arrives much sooner. Lebanon runs its own customs, with duty and VAT on imports. Agree how you will pay your supplier early, and confirm the duty and VAT for your goods before you ship. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. Rates move week to week, and the route a line takes into the Eastern Mediterranean also changes the cost. We quote each shipment for your exact cargo, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Payment: agree the payment method with your supplier and your bank early, so the money side does not hold up your cargo.',
          'Duty and VAT: both depend on your product and are worked out at clearance, so we confirm them before you ship.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky but light cargo costs more than it looks. Freight quotes do not include Lebanese customs duty, VAT, or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Lebanon shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo reaches Lebanon through the Eastern Mediterranean, often changing ships at a regional hub, and arrives at the Port of Beirut or at Tripoli in the north. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. LCL takes longer than FCL because the box has to be filled and then unpacked. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from Chinese hubs such as Guangzhou, Shenzhen, Shanghai, and Hong Kong to Beirut. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky but light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Lebanon, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Lebanon. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle Lebanon-bound containers. For air freight, the main gateways include Guangzhou, Shenzhen, Shanghai, and Hong Kong. On the Lebanese side, sea cargo arrives at the Port of Beirut or at Tripoli in the north, and air cargo lands at Beirut. The best port depends on where your goods are going inside Lebanon. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Lebanese customs is not unusual, but the final bill is worth checking before you ship. Here is what to plan for when you import from China. Duty depends on your product, and payment arrangements matter as much as the freight, so plan both early.',
        points: [
          'Customs duty and VAT both apply to imports. The rates depend on your product, so we confirm them for your tariff code before you ship.',
          'The customs bill is worked out at clearance, so confirm the amount in force at that time rather than relying on an old figure.',
          'Agree how you will pay your supplier, and check what your bank needs, before you place the order.',
          'You need a Lebanese importer of record. Lebanese Customs publishes a table of restricted and banned goods, so we check your product against it first.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, and certificate of origin, plus any product-specific certificates.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Lebanese customs, duty, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup, though the consignee still needs to be able to import and a workable way to pay. The alternative, FOB or CIF, leaves the Lebanese clearance, duty, and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Lebanese delivery address.',
        'Agree the payment method with your supplier and your bank up front.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Beirut or Tripoli, or flies into Beirut.',
        'We clear Lebanese customs, handle duty and VAT at the rates in force, and deliver to your door. With DDP, the charges and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Lebanon?',
          answer:
            'It depends on the mode, the size and weight of your cargo, and the season. We quote each shipment for your dates. Sea freight is the cheapest per unit, and air and express cost more. Lebanese duty and VAT come on top of the freight. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Lebanon take?',
          answer:
            'It depends on the mode and the sailing. Air and express are much faster than sea. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We give you the time with each quote.',
        },
        {
          question: 'How should I plan payment for imports to Lebanon?',
          answer:
            'Agree the payment method with your supplier before you order, and check with your bank what it needs. Build the payment timing into your plan so the money side does not hold up your cargo.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Lebanon?',
          answer:
            'Both depend on your product. Duty is set by tariff code, and VAT is added at clearance. We confirm the rates for your goods before you ship, so there are no surprises at the port.',
        },
        {
          question: 'What is the cheapest way to ship from China to Lebanon?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Should I ship into Beirut or Tripoli?',
          answer:
            'Beirut serves the capital and most of the country, and Tripoli is in the north. The best choice depends on your delivery point and on which sailings are available for your dates. We check both when we quote.',
        },
        {
          question: 'Which Lebanese port do shipments arrive at?',
          answer:
            'Sea cargo arrives at the Port of Beirut or at Tripoli. Air cargo lands at Beirut. Many sailings change ships at an Eastern Mediterranean hub before reaching Lebanon.',
        },
        {
          question: 'What documents do I need to import from China to Lebanon?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin, plus any product-specific certificates. You also need a Lebanese importer of record.',
        },
      ],
      sources: [
        { label: 'Lebanese Customs, table of restrictions and prohibitions', url: 'https://www.customs.gov.lb/Government_Controls/Government_Controls.aspx' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-libya',
    name: 'Libya',
    code: 'LY',
    description: 'Sea and air freight from China to Libya, with sea cargo landing at Misrata, Tripoli, Benghazi, and Khoms. FCL, LCL, customs help, and door-to-door delivery.',
    majorPorts: ['Misrata', 'Tripoli', 'Benghazi', 'Khoms'],
    transitTime: '',
    popularGoods: ['Building Materials', 'Machinery', 'Electronics', 'Auto Parts', 'Consumer Goods'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Libya: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Libya: sea, air and express freight, Misrata, Tripoli and Benghazi ports, customs and payment planning. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Libya moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Misrata, Tripoli, Khoms, or Benghazi. We quote transit time for each sailing or flight. Customs charges depend on your goods, and payment must be planned with your bank before you ship.',
      intro:
        'If you import from China into Libya, the practical challenges are payment and routing. This guide covers what drives the cost of shipping from China to Libya, which ports your cargo moves through, and the customs and payment points you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Air freight costs more but arrives much sooner. Two things shape every shipment: the port has to suit the consignee\'s location, and payment has to be set up with your bank early. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. Rates move week to week, and the route a line takes into the Mediterranean also changes the cost. We quote each shipment for your exact cargo, ports, and dates.',
        factors: [
          'Location: the best port and customs office depend on where the consignee is in Libya.',
          'Payment: set up the payment to your supplier with your bank early, since approval can take time.',
          'Routing: lines can route via the Suez Canal or round Africa, and many sailings change ships at a Mediterranean hub, which changes the transit time; ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles the customs charges and delivery into one price, which removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky but light cargo costs more than it looks. Freight quotes do not include Libyan customs charges or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Libya shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. Most cargo reaches Libya through the Mediterranean, often changing ships at a regional hub, and arrives at Misrata, Tripoli, Khoms, or Benghazi depending on where it is going. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. LCL takes longer than FCL because the box has to be filled and then unpacked. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from Chinese hubs such as Guangzhou, Shenzhen, Shanghai, and Hong Kong toward Tripoli in the west or Benghazi in the east, usually with a change of plane on the way. Air costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky but light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Libya where service is available, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Libya. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou handle Libya-bound containers. For air freight, the main gateways include Guangzhou, Shenzhen, Shanghai, and Hong Kong. On the Libyan side, sea cargo arrives at Misrata, Tripoli, or Khoms in the west, or Benghazi in the east. The right port depends on where the consignee is. Air cargo lands at Tripoli or Benghazi. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'For Libya, the real planning is around payment and routing. Here is what to sort out when you import from China. Confirm the consignee\'s location and banking arrangements before you ship, since those drive the outcome as much as the customs charges.',
        points: [
          'Customs charges depend on your goods. We confirm them for your product before you ship, so you can budget for them.',
          'Set up the payment to your supplier through your bank early. Ask your bank which method it will use and how long approval takes.',
          'The practical port and customs office depend on where the consignee is, so we match the routing to the delivery point.',
          'You need a registered Libyan importer of record.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin. Ask us early whether your certificate of origin needs extra stamps before shipment, and whether your goods need conformity certificates.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Libyan customs charges, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is especially useful given the routing and paperwork, though the consignee still needs to be able to import and to have the payment side in order. The alternative, FOB or CIF, leaves the Libyan clearance and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Libyan delivery address.',
        'Set up the payment to your supplier with your bank early, since approval can take time.',
        'We quote your options (sea FCL, sea LCL, air, or express) and the right port for your delivery point, and you pick one.',
        'We arrange pickup from your supplier, handle export clearance, and prepare the certificate of origin.',
        'Your cargo sails to Misrata, Tripoli, Khoms, or Benghazi, or flies into Tripoli or Benghazi.',
        'We clear Libyan customs, handle the charges, and deliver to your door. With DDP, the charges and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Libya?',
          answer:
            'It depends on the mode, the size and weight of your cargo, and the season. We quote each shipment for your dates. Sea freight is the cheapest per unit, and air and express cost more. Libyan customs charges come on top of the freight. Request a live quote for your exact cargo.',
        },
        {
          question: 'Does Libya charge duty on goods from China?',
          answer:
            'Customs charges depend on the goods. We confirm what applies to your product before you ship, so the bill at the port is not a surprise. For many importers, payment and routing take more planning than the tax.',
        },
        {
          question: 'How long does shipping from China to Libya take?',
          answer:
            'It depends on the mode and the sailing. Many sea shipments change ships at a Mediterranean hub, and lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. Air and express are much faster. We give you the time with each quote.',
        },
        {
          question: 'How do I plan payment for imports to Libya?',
          answer:
            'Talk to your bank before you order. Ask which payment method it will use for your supplier and how long approval takes, and start the process before you book the freight.',
        },
        {
          question: 'Which Libyan port should I ship into?',
          answer:
            'Misrata, Tripoli, and Khoms serve the west, and Benghazi serves the east. The right port depends on where the consignee is. We match the routing to your delivery point.',
        },
        {
          question: 'What is the cheapest way to ship from China to Libya?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Is there a direct shipping service from China to Libya?',
          answer:
            'Services change often. Many sailings change ships at a Mediterranean hub before reaching a Libyan port. We check which services are running for your dates when we quote.',
        },
        {
          question: 'What documents do I need to import from China to Libya?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin, plus any conformity certificates your goods need. Ask us early whether the certificate of origin needs extra stamps. You also need a registered Libyan importer of record.',
        },
      ],
      sources: [],
    },
  },

  {
    slug: 'shipping-china-to-lithuania',
    name: 'Lithuania',
    code: 'LT',
    description: 'Sea and air freight from China to Lithuania through the port of Klaipėda. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Klaipėda'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Textiles', 'Furniture'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Lithuania: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Lithuania: compare sea, air and express freight, the Port of Klaipėda, and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Lithuania moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Klaipėda, Lithuania\'s seaport. Some sailings connect through a larger European hub on the way. Lithuania\'s standard VAT rate of 21 percent and any EU duty apply on import, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Lithuania, your cargo may connect through a bigger European port before it reaches Klaipėda, so the routing shapes the timeline. This guide covers what drives the cost of shipping from China to Lithuania, how each option compares, which ports your cargo moves through, and the Lithuanian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Air freight costs more but is much faster. Lithuania is in the EU, so you need an EORI number to clear customs and should plan for 21 percent VAT plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, the route, and the season. Prices move often, so we quote each shipment for your goods, ports, and dates.',
        factors: [
          'Routing: some China to Lithuania sailings connect through a larger European hub before reaching Klaipėda, and that extra leg affects time and cost.',
          'Origin port: the port your supplier ships from changes how many sailings you can choose from and what they cost.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Lithuanian import VAT, EU duty, or customs clearance, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Lithuania shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL also takes longer, because the container has to be filled and unpacked. Some sailings reach Klaipėda after a stop at a larger European hub, so ask us how your sailing is routed. Lines can also route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Vilnius, often connecting through another hub on the way. It costs much more per kilo than sea freight, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Lithuania, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Lithuania. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Common departure ports in China include Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Lithuanian side, sea cargo arrives at Klaipėda on the Baltic coast. Some services connect through a larger European hub first, and we tell you the routing when we quote. Air cargo can land in Vilnius. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Lithuania is part of the EU customs union, so the same EU tariff applies as in every other EU country, and no customs duty is due when goods later move from one EU country to another. All goods imported into the EU are subject to VAT, so plan around Lithuania\'s 21 percent standard rate and any duty. Duty depends on your exact product, so confirm the rate for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'Lithuania\'s standard VAT rate is 21 percent, and import VAT is charged and due in the country of import.',
          'EU customs duty is set by your product\'s commodity code. Look it up in TARIC, the EU\'s tariff database, which also lists extra measures such as anti-dumping duty on some goods.',
          'You need an EORI number for customs in the EU, including imports. It is one common type of number used across the EU.',
          'There is no longer a EUR 22 VAT-free allowance: since July 2021 all goods imported into the EU are subject to VAT. For low-value goods sold to consumers in consignments worth EUR 150 or less, a temporary customs duty of EUR 3 per item applies from 1 July 2026 to 1 July 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates from outside the EU must be heat treated or fumigated in line with ISPM15 and carry the ISPM15 stamp.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg into Lithuania, EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Lithuanian importers, DDP is worth it for the time and risk it removes, though some VAT-registered businesses prefer to be the importer of record themselves.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Lithuanian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with prices and timings for your dates, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Klaipėda, directly or through a European hub, or flies into Vilnius.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Lithuania?',
          answer:
            'It depends on the method, the size and weight of your cargo, the route, and the season, and prices move often. We quote each shipment for your dates. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Lithuania take?',
          answer:
            'Sea freight is the slowest option, air freight is much faster, and express courier is the fastest. Sea transit depends on whether your sailing connects through a European hub, and on whether the line routes via the Suez Canal or round Africa. Ask us which way your sailing goes and we will give you the timing.',
        },
        {
          question: 'Do sea shipments to Lithuania go direct?',
          answer:
            'It depends on the sailing. Some services connect through a larger European hub before reaching Klaipėda, which adds time. We tell you the routing for each sailing when we quote.',
        },
        {
          question: 'What is the cheapest way to ship from China to Lithuania?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. We quote both so you can compare.',
        },
        {
          question: 'Do I need an EORI number to import from China to Lithuania?',
          answer:
            'Yes. An EORI number is required for customs operations in the EU, including imports. It is one common type of number used across the EU. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Lithuania?',
          answer:
            'Duty is set by your product\'s commodity code in the EU TARIC tariff, so it varies by product. On top of that, Lithuania\'s standard VAT rate of 21 percent applies on import.',
        },
        {
          question: 'Which Lithuanian port do shipments arrive at?',
          answer:
            'Sea cargo arrives at Klaipėda on the Baltic coast, either directly or after a connection at a larger European hub. Air cargo can land in Vilnius.',
        },
        {
          question: 'What documents do I need to import from China to Lithuania?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must meet ISPM15.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rules and rates', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs-4/customs-procedures-import-and-export/customs-procedures/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: EU Customs Tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/customs-4/calculation-customs-duties/customs-tariff/eu-customs-tariff-taric_en' },
        { label: 'European Union: The EU customs union in action', url: 'https://european-union.europa.eu/priorities-and-actions/actions-topic/customs_en' },
        { label: 'EU Delegation: Changes to EU VAT rules for e-commerce', url: 'https://www.eeas.europa.eu/delegations/new-zealand/changes-eu-rules-value-added-tax-vat-e-commerce-transactions_en' },
        { label: 'Access2Markets: EUR 3 customs duty on low-value consignments', url: 'https://trade.ec.europa.eu/access-to-markets/en/news/eu-applies-eu3-customs-duty-item-low-value-e-commerce-consignments' },
        { label: 'European Commission: Requirements for wood packaging', url: 'https://food.ec.europa.eu/plants/plant-health-and-biosecurity/trade-plants-plant-products-non-eu-countries/requirements-wood-packaging-dunnage_en' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-malta',
    name: 'Malta',
    code: 'MT',
    description: 'Sea and air freight from China to Malta through the Malta Freeport at Marsaxlokk, a Mediterranean transhipment hub. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Malta Freeport (Marsaxlokk)', 'Valletta'],
    transitTime: '',
    popularGoods: ['Consumer Goods', 'Machinery', 'Electronics', 'Building Materials', 'Furniture'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Malta: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Malta: compare sea, air and express freight, the Malta Freeport, and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Malta moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at the Malta Freeport at Marsaxlokk, which its operator describes as a strategic transhipment hub in the Mediterranean. Malta\'s standard VAT rate of 18 percent, one of the lowest in the EU, and any duty apply on import, and importers need an EORI number.',
      intro:
        'If you import from China into Malta, you are shipping to a small island that is also home to a Mediterranean transhipment hub, the Malta Freeport. This guide covers what drives the cost of shipping from China to Malta, how each option compares, which ports your cargo moves through, and the Maltese and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Air freight costs more but is much faster. Malta is in the EU, so you need an EORI number to clear customs. Its standard VAT rate is 18 percent, lower than every EU country except Luxembourg, plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, the route, and the season. Prices move often, so we quote each shipment for your goods, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes.',
          'Island logistics: there is no road or rail link to the mainland, so a missed sailing means waiting for the next one.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Maltese import VAT, EU duty, or customs clearance, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Malta shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL also takes longer, because the container has to be filled and unpacked. Sea cargo comes in through the Malta Freeport at Marsaxlokk, run by Malta Freeport Terminals, which describes it as a strategic transhipment hub in the Mediterranean. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Malta International Airport, often connecting through another hub on the way. It costs much more per kilo than sea freight, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Malta, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Malta. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Common departure ports in China include Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Maltese side, container cargo arrives at the Malta Freeport at Marsaxlokk, which its operator describes as a strategic transhipment hub in the Mediterranean. Some cargo can also come in through the Grand Harbour at Valletta. Air cargo can land at Malta International Airport. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Malta is part of the EU customs union, so the same EU tariff applies as in every other EU country, and no customs duty is due when goods later move from one EU country to another. All goods imported into the EU are subject to VAT. Malta\'s standard rate is 18 percent, lower than every EU country except Luxembourg, plus any duty. Duty depends on your exact product, so confirm the rate for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'Malta\'s standard VAT rate is 18 percent, with reduced rates of 5 and 7 percent for some goods. Only Luxembourg, at 17 percent, has a lower standard rate in the EU. Import VAT is charged and due in the country of import.',
          'EU customs duty is set by your product\'s commodity code. Look it up in TARIC, the EU\'s tariff database, which also lists extra measures such as anti-dumping duty on some goods. The same measures apply across all EU countries.',
          'You need an EORI number for customs in the EU, including imports. It is one common type of number used across the EU.',
          'There is no longer a EUR 22 VAT-free allowance: since July 2021 all goods imported into the EU are subject to VAT. For low-value goods sold to consumers in consignments worth EUR 150 or less, a temporary customs duty of EUR 3 per item applies from 1 July 2026 to 1 July 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates from outside the EU must be heat treated or fumigated in line with ISPM15 and carry the ISPM15 stamp.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg into Malta, Maltese and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup, which suits an island market. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Maltese importers, DDP is worth it for the time and risk it removes, though some VAT-registered businesses prefer to be the importer of record themselves.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Malta delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) with prices and timings for your dates, and you pick one.',
        'Make sure you have an EORI number; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails into the Malta Freeport, or flies into Malta International Airport.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Malta?',
          answer:
            'It depends on the method, the size and weight of your cargo, the route, and the season, and prices move often. We quote each shipment for your dates. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Malta take?',
          answer:
            'Sea freight is the slowest option, air freight is much faster, and express courier is the fastest. Sea transit depends on the sailing and on whether the line routes via the Suez Canal or round Africa. Ask us which way your sailing goes and we will give you the timing.',
        },
        {
          question: 'What is the Malta Freeport?',
          answer:
            'The Malta Freeport is a container terminal at Marsaxlokk in the south of Malta. Its operator, Malta Freeport Terminals, describes it as a strategic transhipment hub in the Mediterranean, so many ships call there to swap containers for other ports. Cargo for Malta itself is cleared and delivered on the island.',
        },
        {
          question: 'What is the cheapest way to ship from China to Malta?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Malta?',
          answer:
            'Yes. An EORI number is required for customs operations in the EU, including imports. It is one common type of number used across the EU. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'Why is import VAT lower in Malta?',
          answer:
            'Malta\'s standard VAT rate is 18 percent. In the EU, only Luxembourg has a lower standard rate, at 17 percent. Customs duty, set by the EU TARIC tariff, is the same as everywhere else in the EU.',
        },
        {
          question: 'Which Malta port do shipments arrive at?',
          answer:
            'Container cargo arrives at the Malta Freeport at Marsaxlokk. Some cargo can also come in through the Grand Harbour at Valletta. Air cargo can land at Malta International Airport.',
        },
        {
          question: 'What documents do I need to import from China to Malta?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must meet ISPM15.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rules and rates', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs-4/customs-procedures-import-and-export/customs-procedures/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: EU Customs Tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/customs-4/calculation-customs-duties/customs-tariff/eu-customs-tariff-taric_en' },
        { label: 'European Union: The EU customs union in action', url: 'https://european-union.europa.eu/priorities-and-actions/actions-topic/customs_en' },
        { label: 'EU Delegation: Changes to EU VAT rules for e-commerce', url: 'https://www.eeas.europa.eu/delegations/new-zealand/changes-eu-rules-value-added-tax-vat-e-commerce-transactions_en' },
        { label: 'Access2Markets: EUR 3 customs duty on low-value consignments', url: 'https://trade.ec.europa.eu/access-to-markets/en/news/eu-applies-eu3-customs-duty-item-low-value-e-commerce-consignments' },
        { label: 'European Commission: Requirements for wood packaging', url: 'https://food.ec.europa.eu/plants/plant-health-and-biosecurity/trade-plants-plant-products-non-eu-countries/requirements-wood-packaging-dunnage_en' },
        { label: 'Malta Freeport Terminals', url: 'https://www.maltafreeport.com.mt/' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-morocco',
    name: 'Morocco',
    code: 'MA',
    description: 'Sea and air freight from China to Morocco, with sea cargo landing at Tanger Med, Casablanca, and Agadir. FCL, LCL, customs help, and door-to-door delivery.',
    majorPorts: ['Tanger Med', 'Casablanca', 'Agadir'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Auto Parts', 'Textiles', 'Consumer Goods'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Morocco: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Morocco: sea, air and express freight, Tanger Med and Casablanca ports, customs duty and TVA to plan for. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Morocco moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Tanger Med on the Strait of Gibraltar or at Casablanca. We quote transit time for each sailing or flight. Moroccan customs duty and import TVA apply on arrival, and we confirm the rates for your goods before you ship.',
      intro:
        'If you import from China into Morocco, you ship into Tanger Med, which its operator describes as the leading port in the Mediterranean and Africa. This guide covers what drives the cost of shipping from China to Morocco, which ports your cargo moves through, and the Moroccan customs points you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Air freight costs more but arrives much sooner. Morocco runs its own customs, with duty and TVA on imports. Check your product\'s duty before you order. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. Rates move week to week, and the route a line takes also changes the cost. We quote each shipment for your exact cargo, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Duty and TVA: Moroccan duty depends on your product\'s tariff code, and TVA is added on import, so we confirm both before you order.',
          'Port choice: Tanger Med and Casablanca suit different delivery points inside Morocco, and the inland leg is part of the cost.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, TVA, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky but light cargo costs more than it looks. Freight quotes do not include Moroccan customs duty, TVA, or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Morocco shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo arrives at Tanger Med on the Strait of Gibraltar, at Casablanca, or at Agadir in the south. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. LCL takes longer than FCL because the box has to be filled and then unpacked. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from Chinese hubs such as Guangzhou, Shenzhen, Shanghai, and Hong Kong to Casablanca Mohammed V Airport. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky but light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Morocco, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Morocco. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao handle Morocco-bound containers. For air freight, the main gateways include Guangzhou, Shenzhen, Shanghai, and Hong Kong. On the Moroccan side, Tanger Med sits on the Strait of Gibraltar, and its operator describes the complex as the leading port in the Mediterranean and Africa. Casablanca serves the Casablanca-Rabat area, and Agadir is in the south. Casablanca Mohammed V is the main air gateway. Picking between Tanger Med and Casablanca depends on where your goods are going. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Moroccan customs is straightforward to plan if you check your product first. Here is what applies when you import from China. Duty depends on your exact product, so check the rate before you order.',
        points: [
          'Import TVA applies on arrival, on top of customs duty. We confirm the rate that applies to your goods.',
          'Customs duty depends on your product\'s tariff code and is worked out on the declared value, so a correct declared value, including freight, matters.',
          'Duty can also depend on where the goods were made, so we check your product and its origin before you order.',
          'You need a registered Moroccan importer of record. We can work with your customs agent or handle clearance under DDP.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, and certificate of origin, plus any product-specific certificates or licences.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Moroccan customs, duty, and TVA, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup, though the consignee still needs to be able to import. The alternative, FOB or CIF, leaves the Moroccan clearance, duty, and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Moroccan delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) and the right port (Tanger Med or Casablanca) for your delivery point, and you pick one.',
        'Make sure you have a registered Moroccan importer of record; we can work with your customs agent or handle clearance under DDP.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Tanger Med or Casablanca, or flies into Casablanca Mohammed V.',
        'We clear Moroccan customs, handle duty and TVA, and deliver to your door. With DDP, the charges and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Morocco?',
          answer:
            'It depends on the mode, the size and weight of your cargo, and the season. We quote each shipment for your dates. Sea freight is the cheapest per unit, and air and express cost more. Moroccan duty and TVA come on top of the freight. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Morocco take?',
          answer:
            'It depends on the mode and the sailing. Air and express are much faster than sea. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We give you the time with each quote.',
        },
        {
          question: 'Do Chinese goods get a duty discount in Morocco?',
          answer:
            'Duty depends on the product and where it was made. We check the rate for your tariff code before you order and tell you whether your certificate of origin changes it. TVA then applies on top of the duty.',
        },
        {
          question: 'Should I ship into Tanger Med or Casablanca?',
          answer:
            'Tanger Med sits on the Strait of Gibraltar, and its operator calls it the leading port in the Mediterranean and Africa. Casablanca serves the Casablanca-Rabat area. The best choice depends on where your goods are going.',
        },
        {
          question: 'What is the cheapest way to ship from China to Morocco?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'How much duty and TVA will I pay importing from China to Morocco?',
          answer:
            'Duty depends on your product\'s tariff code and is worked out on the declared value, and TVA is added on import. We confirm both for your goods before you ship. A correct declared value, including freight, matters.',
        },
        {
          question: 'Do I need to register as an importer in Morocco?',
          answer:
            'Yes, you need a registered Moroccan importer of record. With door-to-door (DDP), we can handle the clearance for you, but the consignee still needs to be able to import. We confirm what your business needs before you ship.',
        },
        {
          question: 'What documents do I need to import from China to Morocco?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin, plus any product-specific certificates or licences. You also need a registered Moroccan importer of record.',
        },
      ],
      sources: [
        { label: 'Tanger Med Group, home page', url: 'https://www.tangermed.ma/en/' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-poland',
    name: 'Poland',
    code: 'PL',
    description: 'Sea, rail, and air freight from China to Poland, with weekly Far East container calls at Gdansk and rail via Malaszewicze. FCL, LCL, customs, and door-to-door.',
    majorPorts: ['Gdansk', 'Gdynia', 'Szczecin'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Auto Parts', 'Furniture'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Poland: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Poland: compare sea, rail, air and express freight, the Port of Gdansk, and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Poland moves cargo by sea freight, rail freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Gdansk, where container ships from the Far East call every week, or by rail via Malaszewicze. We quote the transit time for your sailing, train or flight. Polish import VAT of 23 percent and any EU duty apply on arrival, and importers need an EORI number.',
      intro:
        'If you import from China into Poland, you have two strong options: the Baltic Hub terminal at Gdansk has direct container services from Asia, and China-Europe trains enter the EU at Malaszewicze on the Belarus border. This guide covers what drives the cost of shipping from China to Poland, how the options compare on speed, which ports and routes your cargo moves through, and the Polish and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have several ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), rail freight, air freight, and express courier. Sea freight is the cheapest for anything large or heavy, but also the slowest. Rail sits between sea and air on cost and speed, and air freight is the fastest of the bulk options. Poland is in the EU, so you need an EORI number to clear customs and should plan for 23 percent import VAT plus any duty. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. Ocean rates in particular move week to week. We quote each shipment for your goods, ports and dates.',
        factors: [
          'Direct service: Gdansk has direct container services from Asia, so many sailings reach Poland without a transshipment leg.',
          'Mode: sea is cheapest, rail sits in the middle, air is faster and dearer, express is fastest and dearest.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time and cost. Ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Rail freight is priced per container and sits between sea and air on cost and speed. Air and express are priced on chargeable weight. Freight prices do not include Polish import VAT, EU duty, or the forwarder\'s clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Poland shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. Poland has a real advantage: container ships from the Far East have called at Gdansk every week since January 2010, and the port lists weekly services from Chinese ports such as Shanghai and Qingdao. LCL takes longer than FCL, because the cargo has to be grouped and unpacked. Gdynia and the Szczecin-Swinoujscie complex are the other Polish seaports. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. As a rule, small loads usually go LCL and larger loads go in a full container, and we quote both so you can compare.',
      airFreightBody:
        'Air freight is the fast option, and rail is a middle ground for Poland. Air cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Warsaw. Rail is the other route: China-Europe trains cross into the EU at Malaszewicze on the Belarus border, which rail operators use as the European border crossing point, at a price between sea and air. Air is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size, and per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote sea, rail, and air side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Poland, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Poland. Once a shipment gets heavier, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL (direct to Gdansk)', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Rail freight (via Malaszewicze)', time: 'Quoted per shipment', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive heavy cargo' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Sea cargo for Poland can leave from Chinese ports such as Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou. For air freight, common departure airports are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong, and rail services start from inland Chinese hubs. On the Polish side, the Baltic Hub container terminal at Gdansk has had weekly calls from the Far East since January 2010, and the port says direct connection with Asia helped it grow. Gdynia and the Szczecin-Swinoujscie complex also handle cargo. Malaszewicze, on the Belarus border, is where China-Europe trains cross into the EU, and PKP CARGO runs logistics centres there. Air freight can fly into Warsaw. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Poland is part of the EU customs union, so the same EU tariff applies here as in every other EU country. There is no VAT-free allowance on imports, so plan around 23 percent import VAT and any duty. Rates depend on your exact product, so confirm the duty for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'Polish import VAT is 23 percent, with reduced rates of 8 and 5 percent for specific goods. It is charged on the customs value plus duties and other charges, such as shipping and insurance. If you are a VAT-registered business, you can usually deduct the VAT you pay on business purchases in your VAT return.',
          'EU customs duty is usually a percentage of the customs value of the goods, and the rate depends on your product\'s commodity code in the TARIC database. TARIC also lists anti-dumping duties, which apply to some goods from some countries, so check your code before you ship.',
          'You need an EORI number to clear goods through EU customs. A business established in Poland gets it from Polish customs. One EORI number covers customs operations across the EU.',
          'The old VAT exemption for imported goods below EUR 22 was abolished on 1 July 2021, so import VAT applies from the first euro. Since 1 July 2026 the EU also charges a temporary customs duty of EUR 3 per item on low-value parcels worth up to EUR 150, counted by tariff classification, not by quantity.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading, air waybill, or rail consignment note.',
          'Wood pallets and crates entering the EU must be treated and marked to the ISPM 15 standard.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg, EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Polish importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record to deduct the import VAT cleanly.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Polish delivery address.',
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
            'It depends on the mode, the size and weight of your cargo, and the season. Sea is the cheapest per unit, rail sits between sea and air, and air and express cost the most. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Poland take?',
          answer:
            'Sea to Gdansk is the slowest option, rail via Malaszewicze is faster, air is faster again, and express is quickest for small parcels. Lines can route via the Suez Canal or round Africa, which changes the transit time, so we quote the time for your sailing, train or flight.',
        },
        {
          question: 'Why is Gdansk a good port for China imports?',
          answer:
            'Container ships from the Far East have called at Gdansk every week since January 2010, and the port lists weekly services from Chinese ports such as Shanghai and Qingdao. That means many sailings reach Poland without a transshipment leg through another European port.',
        },
        {
          question: 'How does rail freight from China to Poland compare?',
          answer:
            'Rail runs from inland Chinese hubs into the EU at Malaszewicze on the Belarus border. It is faster than sea at a price between sea and air, so it is a genuine middle option.',
        },
        {
          question: 'What is the cheapest way to ship from China to Poland?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Direct sea to Gdansk is usually both cheap and reasonably fast.',
        },
        {
          question: 'Do I need an EORI number to import from China to Poland?',
          answer:
            'Yes. An EORI number is required to clear goods through EU customs, and one number covers customs operations across the EU. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'Can I use Poland as a distribution base for the region?',
          answer:
            'You can. Poland is part of the EU customs union, so the same EU tariff applies whichever EU country you import into. Ask us to quote onward delivery from Poland to your customers in other EU countries.',
        },
        {
          question: 'What documents do I need to import from China to Poland?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading, air waybill, or rail consignment note, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must meet the ISPM 15 standard.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rates in EU countries', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'Your Europe: Charging and deducting VAT', url: 'https://europa.eu/youreurope/business/finance-and-tax/vat/charging-deducting-vat/index_en.htm' },
        { label: 'European Commission: Buying goods from outside the EU (import VAT and duty)', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/importation/buying-goods-online-coming-non-european-union-country_en' },
        { label: 'European Commission: EU Customs Tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/online-services/online-services-and-databases-customs/eu-customs-tariff-taric_en' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-operation/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: Customs formalities for low value consignments', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-operation/customs-formalities-low-value-consignments_en' },
        { label: 'European Commission: EUR 3 customs duty for low-value parcels', url: 'https://commission.europa.eu/news-and-media/news/ensuring-fairness-and-safety-eur3-customs-duty-low-value-parcels-2026-06-29_en' },
        { label: 'Polish plant health service (PIORIN): Wood packaging and ISPM 15', url: 'https://www.gov.pl/web/piorin-en/wood-packaging' },
        { label: 'Port of Gdansk: Baltic Hub container terminal', url: 'https://www.portgdansk.pl/en/about-port/terminals-and-quays/baltic-hub-container-terminal/' },
        { label: 'Port of Gdansk: Shipping connections', url: 'https://www.portgdansk.pl/en/about-port/shipping-connections/' },
        { label: 'PKP CARGO: Terminals', url: 'https://www.pkpcargo.com/segmenty-biznesowe/terminale/' },
        { label: 'Rail Cargo Group: Xian to Budapest rail service (via Malaszewicze)', url: 'https://www.railcargo.com/en/network/transfer/xian-budapest' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-portugal',
    name: 'Portugal',
    code: 'PT',
    description: 'Sea and air freight from China to Portugal through Sines, Lisbon, and Leixões. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Sines', 'Lisbon', 'Leixões'],
    transitTime: '',
    popularGoods: ['Textiles', 'Machinery', 'Electronics', 'Consumer Goods', 'Footwear'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Portugal: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Portugal: compare sea, air and express freight, the ports of Sines, Lisbon and Leixões, and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Portugal moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Sines, Lisbon, or Leixões, depending on where the goods are going. Portugal\'s standard VAT rate of 23 percent and any EU duty apply on import, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Portugal, you can bring sea cargo into Sines on the southwest coast, Lisbon, or Leixões in the north. This guide covers what drives the cost of shipping from China to Portugal, how each option compares, which ports your cargo moves through, and the Portuguese and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Air freight costs more but is much faster. Portugal is in the EU, so you need an EORI number to clear customs and should plan for the 23 percent standard VAT rate plus any duty. The islands can have their own VAT rates. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'What you pay depends on the method, the size and weight of your cargo, the route, and the season. Prices move often, so we quote each shipment for your goods, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Port: Sines, Lisbon, and Leixões have different sailings, and some services reach them through a transshipment hub, so the port you pick affects time and cost.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Portuguese import VAT, EU duty, or customs clearance, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Portugal shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. LCL also takes longer, because the container has to be filled and unpacked. Portugal has three main seaports for this trade. Sines is on the southwest Atlantic coast. Lisbon has its own container terminals. Leixões is in Matosinhos, next to Porto. The best port depends on where your goods are going and which sailings fit your dates. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong to Lisbon, often connecting through another hub on the way. It costs much more per kilo than sea freight, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Portugal, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Portugal. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Common departure ports in China include Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao. For air freight, the main gateways are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong. On the Portuguese side, sea cargo can arrive at Sines on the southwest coast, at Lisbon, or at Leixões. The Port of Lisbon lists two container terminals, Alcântara (Liscont) and Santa Apolónia (Sotagus). Its port authority describes Leixões, in Matosinhos, as the largest artificial port in Portugal. Air cargo can land in Lisbon. Picking between Sines, Lisbon, and Leixões depends on where your goods are going. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Portugal is part of the EU customs union, so the same EU tariff applies as in every other EU country, and no customs duty is due when goods later move from one EU country to another. All goods imported into the EU are subject to VAT, so plan around Portugal\'s 23 percent standard rate and any duty. Duty depends on your exact product, so confirm the rate for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'Portugal\'s standard VAT rate is 23 percent, with reduced rates of 6 and 13 percent for some goods. Import VAT is charged and due in the country of import. Regions such as the Azores have their own VAT rates, which matter if delivery is to the islands.',
          'EU customs duty is set by your product\'s commodity code. Look it up in TARIC, the EU\'s tariff database, which also lists extra measures such as anti-dumping duty on some goods.',
          'You need an EORI number for customs in the EU, including imports. It is one common type of number used across the EU.',
          'There is no longer a EUR 22 VAT-free allowance: since July 2021 all goods imported into the EU are subject to VAT. For low-value goods sold to consumers in consignments worth EUR 150 or less, a temporary customs duty of EUR 3 per item applies from 1 July 2026 to 1 July 2028.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates from outside the EU must be heat treated or fumigated in line with ISPM15 and carry the ISPM15 stamp.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Portuguese and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Portuguese importers, DDP is worth it for the time and risk it removes, though some VAT-registered businesses prefer to be the importer of record themselves.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Portuguese delivery address.',
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
            'It depends on the method, the size and weight of your cargo, the port, and the season, and prices move often. We quote each shipment for your dates. Import VAT and duty are extra. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Portugal take?',
          answer:
            'Sea freight is the slowest option, air freight is much faster, and express courier is the fastest. Sea transit depends on the port, on whether your sailing connects through a hub, and on whether the line routes via the Suez Canal or round Africa. Ask us which way your sailing goes and we will give you the timing.',
        },
        {
          question: 'Should I ship into Sines, Lisbon, or Leixões?',
          answer:
            'It depends on where your goods are going and which sailings fit your dates. Lisbon is the capital\'s port, Leixões is next to Porto, and Sines is on the southwest coast. We compare the options when we quote.',
        },
        {
          question: 'What is the cheapest way to ship from China to Portugal?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'Do I need an EORI number to import from China to Portugal?',
          answer:
            'Yes. An EORI number is required for customs operations in the EU, including imports. It is one common type of number used across the EU. Your forwarder or broker needs it to clear your goods.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Portugal?',
          answer:
            'Duty is set by your product\'s commodity code in the EU TARIC tariff, so it varies by product. On top of that, Portugal\'s standard VAT rate of 23 percent applies on import. Regions such as the Azores have their own rates.',
        },
        {
          question: 'What do I need to know about Lisbon and Leixões?',
          answer:
            'The Port of Lisbon lists two container terminals, Alcântara (Liscont) and Santa Apolónia (Sotagus). Leixões, in Matosinhos, is described by its port authority as the largest artificial port in Portugal.',
        },
        {
          question: 'What documents do I need to import from China to Portugal?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must meet ISPM15.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rules and rates', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs-4/customs-procedures-import-and-export/customs-procedures/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: EU Customs Tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/customs-4/calculation-customs-duties/customs-tariff/eu-customs-tariff-taric_en' },
        { label: 'European Union: The EU customs union in action', url: 'https://european-union.europa.eu/priorities-and-actions/actions-topic/customs_en' },
        { label: 'EU Delegation: Changes to EU VAT rules for e-commerce', url: 'https://www.eeas.europa.eu/delegations/new-zealand/changes-eu-rules-value-added-tax-vat-e-commerce-transactions_en' },
        { label: 'Access2Markets: EUR 3 customs duty on low-value consignments', url: 'https://trade.ec.europa.eu/access-to-markets/en/news/eu-applies-eu3-customs-duty-item-low-value-e-commerce-consignments' },
        { label: 'European Commission: Requirements for wood packaging', url: 'https://food.ec.europa.eu/plants/plant-health-and-biosecurity/trade-plants-plant-products-non-eu-countries/requirements-wood-packaging-dunnage_en' },
        { label: 'Port of Lisbon (APL)', url: 'https://www.portodelisboa.pt/en/' },
        { label: 'APDL: Ports of Douro, Leixões and Viana do Castelo', url: 'https://www.apdl.pt/en/' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-romania',
    name: 'Romania',
    code: 'RO',
    description: 'Sea and air freight from China to Romania, with sea cargo arriving at the Black Sea port of Constanta. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Constanta'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Auto Parts', 'Consumer Goods', 'Textiles'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Romania: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Romania: compare sea, air and express freight, the Port of Constanta, routing, and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Romania moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Constanta on the Black Sea. Transit time depends on the sailing and the routing, so we quote it for each shipment. Romania is in the EU: standard VAT is 21 percent, EU customs duty may apply, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Romania, your sea cargo has to pass through the Bosphorus into the Black Sea to reach Constanta, so the routing matters. This guide covers what drives the cost of shipping from China to Romania, how each option works, which ports your cargo moves through, and the Romanian and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Air freight costs more but is much faster. Romania is in the EU, so you need an EORI number to clear customs and should plan for 21 percent standard VAT plus any duty. Request a quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the routing, and the season. Where we have current prices from our rate sheet, they show on this page. Otherwise we quote each shipment for your dates, ports, and cargo.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time and the cost; ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Hinterland: Constanta links to the Danube through the Danube-Black Sea Canal, so some cargo can move inland by river as well as by road or rail.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky-but-light cargo costs more than it looks. Freight prices do not include Romanian import VAT, EU duty, or the customs clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Romania shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo from China reaches the Mediterranean, then passes through the Bosphorus into the Black Sea and on to Constanta, Romania\'s port on the Black Sea coast. Some services call directly while others transship at a larger hub on the way. Lines can route via the Suez Canal or round Africa, which changes the transit time, so ask us which way your sailing goes. LCL usually takes longer than FCL because the container has to be filled and emptied at each end. We quote both so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Romania. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. Because the sea route to the Black Sea is long, air is worth comparing when time matters, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Romania, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Romania. Once a shipment gets heavier, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou are common starting points for Romania-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Romanian side, Constanta is the sea port on the Black Sea coast. The port authority notes that the port connects to the Danube river through the Danube-Black Sea Canal, so cargo can carry on inland by river barge as well as by road or rail. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Romania sits inside the EU customs union, so the same EU rules and tariff apply, and once your goods clear customs at Constanta they move freely across the EU. Plan around 21 percent standard VAT and any duty. Duty depends on your exact product, so check the duty for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'Romania\'s standard VAT rate is 21 percent, with a reduced rate of 11 percent for some goods and services. Import VAT is collected when your goods clear customs.',
          'EU customs duty depends on how your product is classified. The commodity code sets the duty rate, and the EU TARIC database lists the measures for each code, including any anti-dumping duty.',
          'You need an EORI number to deal with EU customs. It is issued by the customs authority of the EU country where your business is established, and it should match your invoice and transport documents.',
          'For low-value e-commerce parcels sold to consumers (up to EUR 150), the EU charges a temporary flat customs duty of EUR 3 per item from 1 July 2026 until 1 July 2028. Normal commercial freight pays the regular tariff.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading or air waybill.',
          'Wood pallets and crates from outside the EU must be heat treated or fumigated in line with ISPM15 and carry the ISPM15 stamp.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Romanian and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Romanian importers, DDP is worth it for the time and risk it removes, though VAT-registered businesses sometimes prefer to be the importer of record so they can handle the import VAT themselves.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Romanian delivery address.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'Make sure you have an EORI number that matches your documents; we can guide you if you do not have one yet.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails through the Mediterranean and the Bosphorus to Constanta, or flies into Romania.',
        'We file the EU customs declaration, handle duty and import VAT, and clear your shipment, then deliver to your door. With DDP, duty, VAT, and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Romania?',
          answer:
            'It depends on the mode, the size and weight of your cargo, the routing, and the season. Where we have current prices from our rate sheet, they show on this page; otherwise we quote each shipment for your dates. Import VAT and any duty are extra.',
        },
        {
          question: 'How long does shipping from China to Romania take?',
          answer:
            'It depends on the sailing. Cargo has to reach the Black Sea through the Bosphorus, and lines can route via the Suez Canal or round Africa, which changes the transit time. Air and express are much faster than sea. We give you the time for your exact shipment with the quote.',
        },
        {
          question: 'Why can shipping to Romania take longer than to Western Europe?',
          answer:
            'Constanta sits on the Black Sea, so cargo from China has to cross the Mediterranean and pass through the Bosphorus before it arrives. Some services also transship on the way. Ask us which route your sailing takes.',
        },
        {
          question: 'What VAT rate applies to imports into Romania?',
          answer:
            'Romania\'s standard VAT rate is 21 percent, with a reduced rate of 11 percent for some goods. Import VAT is charged when your goods clear customs, so budget it into your landed cost. Ask your accountant how it fits your own VAT position.',
        },
        {
          question: 'What is the cheapest way to ship from China to Romania?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save a lot of time on this long sea route.',
        },
        {
          question: 'Do I need an EORI number to import from China to Romania?',
          answer:
            'Yes. Businesses established in the EU need an EORI number for customs. It is issued by the customs authority of the EU country where you are established, and it should match your invoice and transport documents.',
        },
        {
          question: 'Can cargo continue inland from Constanta by river?',
          answer:
            'Yes, that is one option. The port connects to the Danube river through the Danube-Black Sea Canal, so goods can move inland by barge as well as by road or rail. We can set up the right onward leg for your destination.',
        },
        {
          question: 'What documents do I need to import from China to Romania?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading or air waybill, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must meet the ISPM15 rules.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rates in EU countries', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs-4/customs-procedures-import-and-export-0/customs-procedures/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: Tariff classification of goods', url: 'https://taxation-customs.ec.europa.eu/customs/common-customs-tariff-cct/tariff-classification-goods_en' },
        { label: 'European Commission: Temporary EUR 3 duty on low-value imports', url: 'https://taxation-customs.ec.europa.eu/news/guidance-and-legal-text-temporary-flat-fee-low-value-imports-which-will-apply-until-1-july-2028-2026-06-08_en' },
        { label: 'European Commission: Requirements for wood packaging', url: 'https://food.ec.europa.eu/plants/plant-health-and-biosecurity/trade-plants-plant-products-non-eu-countries/requirements-wood-packaging-dunnage_en' },
        { label: 'Maritime Ports Administration Constanta: Annual report', url: 'https://www.portofconstantza.com/pn/portal/static.do?x=get&package_id=np_statistici_port&resource=AR2019.pdf' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-serbia',
    name: 'Serbia',
    code: 'RS',
    description: 'Sea, rail, and air freight from China to Serbia. Serbia is landlocked, so sea cargo lands at a neighbouring port and moves inland. FCL, LCL, customs, and the China-Serbia FTA.',
    majorPorts: ['Koper', 'Rijeka', 'Thessaloniki', 'Constanta'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Auto Parts', 'Solar Equipment'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Serbia: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Serbia: compare sea, rail, air and express freight, gateway ports, customs, VAT and the China-Serbia FTA. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Serbia moves cargo by sea freight, rail freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Serbia is landlocked, so sea cargo arrives at a port in a neighbouring country and moves on by road or rail. Transit time depends on the route, so we quote it for each shipment. Serbia\'s general VAT rate is 20 percent, and the China-Serbia free trade agreement, in force since 1 July 2024, can cut or remove duty on goods that qualify.',
      intro:
        'If you import from China into Serbia, there can be a real cost advantage: the China-Serbia free trade agreement entered into force on 1 July 2024, and goods that qualify can enter with lower or no duty when you have the right proof of origin. This guide covers what drives the cost of shipping from China to Serbia, how each option works, which ports and routes your cargo moves through, and the Serbian customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have several ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), rail freight, air freight, and express courier. Sea freight is the cheapest for anything large or heavy, but because Serbia is landlocked, cargo lands at a neighbouring port first and then travels inland. Air freight is much faster. Serbia is not in the EU and has its own customs system. Request a quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the gateway port, the size and weight of your cargo, and the season. Where we have current prices from our rate sheet, they show on this page. Otherwise we quote each shipment for your dates, route, and cargo, including the inland leg to Serbia.',
        factors: [
          'Duty: under the China-Serbia FTA, goods that qualify can pay lower or no duty, but only with valid proof of origin.',
          'Gateway port: the choice of port (for example Koper, Rijeka, Thessaloniki, or Constanta) changes the inland leg to Serbia and the total cost.',
          'Mode: sea is cheapest, rail sits in the middle, air is faster and dearer, express is fastest and dearest.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes.',
          'Service level: door-to-door (DDP) bundles VAT, any duty, inland haulage, and delivery into one price, which removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) to the gateway port, plus inland haulage into Serbia, or per cubic meter (LCL). Rail is usually priced between sea and air. Air and express are priced on chargeable weight. Freight prices do not include Serbian VAT, any duty, or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Serbia shipping and the cheapest way to move anything large or heavy, but because Serbia is landlocked, the choice of gateway port matters. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it, while shared container space (LCL) means you pay only for the space you use, better for smaller loads. Serbia-bound cargo lands at a port in a neighbouring country, such as Koper in Slovenia, Rijeka in Croatia, Thessaloniki in Greece, or Constanta in Romania, and then moves into Serbia by road or rail. Lines can route via the Suez Canal or round Africa, which changes the transit time, so ask us which way your sailing goes. We compare the gateway options for your cargo, and quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the fast option, and rail can be a middle ground for Serbia. Air cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Belgrade. Rail freight from China to Europe can also reach Serbia for some loads, usually sitting between sea and air on cost and speed; ask us whether it suits your cargo. Air is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size, and per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote sea, rail, and air side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Serbia, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Serbia. Once a shipment gets heavier, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL (via gateway port)', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Rail freight (China-Europe corridor)', time: 'Quoted per shipment', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive heavy cargo' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou are common starting points for Serbia-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. Because Serbia is landlocked, sea cargo arrives at a gateway port in a neighbouring country, such as Koper in Slovenia, Rijeka in Croatia, Thessaloniki in Greece, or Constanta in Romania, and then travels into Serbia by road or rail. Air cargo flies into Belgrade. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Serbia can be a good-value destination for China imports, thanks to its free trade agreement with China. Here is what applies when you import from China. Goods that qualify can pay lower or no duty, but you need valid proof of origin to claim it, and VAT applies either way.',
        points: [
          'The China-Serbia free trade agreement entered into force on 1 July 2024. Whether your goods pay lower or no duty depends on the tariff line, so check your product code before you order.',
          'Serbia\'s general VAT rate on the import of goods is 20 percent, and a special rate of 10 percent applies to a list of goods such as bread and dairy products.',
          'To claim the FTA rate, the agreement requires proof of origin for the customs authority of the importing country: either a certificate of origin or an origin declaration made out by an approved exporter. Without it, the normal duty applies.',
          'Serbia is not in the EU, so it uses its own customs system. A local customs broker normally files the declaration for the Serbian importer.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, and the FTA proof of origin, plus any product-specific certificates.',
          'Ask us about packaging rules for wood pallets and crates before your goods are packed.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg, the inland haulage from the gateway port, Serbian customs and VAT, and final delivery to your address in Belgrade or elsewhere. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. If your goods qualify under the FTA, we make sure the proof of origin is in place so you do not pay duty you do not owe. The alternative, FOB or CIF, leaves the Serbian clearance and delivery for you to arrange through a local broker. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Serbian delivery address.',
        'We check whether your goods qualify under the China-Serbia FTA and help you get the right proof of origin.',
        'We recommend the best route (sea via a gateway port plus inland, rail, or air) and quote your options, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo arrives at a gateway port and moves into Serbia by road or rail, travels by rail from China, or flies into Belgrade.',
        'We clear Serbian customs, handle VAT and any duty, and deliver to your door. With DDP, everything is already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Serbia?',
          answer:
            'It depends on the mode, the gateway port, the inland leg, the size and weight of your cargo, and the season. Where we have current prices from our rate sheet, they show on this page; otherwise we quote each shipment for your dates. VAT and any duty are extra.',
        },
        {
          question: 'Do I pay import duty shipping from China to Serbia?',
          answer:
            'It depends on your product. The China-Serbia free trade agreement entered into force on 1 July 2024, and goods that qualify can pay lower or no duty with valid proof of origin. Without it, normal duty applies. Import VAT applies either way.',
        },
        {
          question: 'How does cargo reach Serbia if it is landlocked?',
          answer:
            'Sea cargo arrives at a gateway port in a neighbouring country, such as Koper, Rijeka, Thessaloniki, or Constanta, then moves into Serbia by road or rail. Rail freight from China and air freight into Belgrade are other options.',
        },
        {
          question: 'How long does shipping from China to Serbia take?',
          answer:
            'It depends on the route: the sea leg, the gateway port, and the inland leg all add up. Lines can route via the Suez Canal or round Africa, which changes the transit time. Rail sits between sea and air, and air and express are fastest. We give you the time for your exact shipment with the quote.',
        },
        {
          question: 'What is the cheapest way to ship from China to Serbia?',
          answer:
            'Sea freight through a gateway port is usually the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. If your goods qualify under the FTA, lower duty also cuts your landed cost.',
        },
        {
          question: 'Can I ship from China to Serbia by rail?',
          answer:
            'For some loads, yes. Rail freight from China to Europe can reach Serbia and usually sits between sea and air on cost and speed. Ask us whether it suits your cargo and dates.',
        },
        {
          question: 'Do I need a customs broker to import from China to Serbia?',
          answer:
            'In practice yes. Serbia uses its own customs system, and a local broker normally files the declaration for the importer. With door-to-door (DDP), we handle the broker, the proof of origin, and the VAT for you.',
        },
        {
          question: 'What documents do I need to import from China to Serbia?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, and the FTA proof of origin if you want the lower duty, plus any product-specific certificates. Ask us about packaging rules for wood pallets and crates.',
        },
      ],
      sources: [
        { label: 'Government of Serbia: Free Trade Agreement with China enters into force', url: 'https://www.srbija.gov.rs/vest/en/226315/free-trade-agreement-between-serbia-peoples-republic-of-china-enters-into-force.php' },
        { label: 'China Ministry of Commerce: China-Serbia FTA text', url: 'https://fta.mofcom.gov.cn/upload/agreementFiles/serbia/xieyi/sewy_xdzw_en.pdf' },
        { label: 'Serbian Tax Administration: Law on Value Added Tax', url: 'https://purs.gov.rs/upload/media/2025/11/28/760480/Law_on_value_added_tax_-_Zakon_o_porezu_na_dodatu_vrednost.pdf' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-slovakia',
    name: 'Slovakia',
    code: 'SK',
    description: 'Sea, rail, and air freight from China to Slovakia. Landlocked, so cargo arrives via Koper or Hamburg and moves to Bratislava. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Koper', 'Hamburg', 'Rijeka', 'Constanta'],
    transitTime: '',
    popularGoods: ['Auto Parts', 'Machinery', 'Electronics', 'Consumer Goods', 'Batteries'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Slovakia: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Slovakia: compare sea, rail, air and express freight, gateway ports, and EU customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Slovakia moves cargo by sea freight, rail freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Slovakia is landlocked, so sea cargo arrives at a port like Koper or Hamburg and moves to Bratislava by road or rail. We quote the transit time for your route. Slovak import VAT is 23 percent, raised in 2025, plus any EU duty, and importers need an EORI number to clear customs.',
      intro:
        'If you import from China into Slovakia, the route runs through a gateway seaport in another country, so the choice of port and the Slovak VAT rate both shape your landed cost. This guide covers what drives the cost of shipping from China to Slovakia, how the options compare on speed, which ports and routes your cargo moves through, and the Slovak and EU customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have several ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), rail freight, air freight, and express courier. Sea freight is the cheapest for anything large or heavy, but also the slowest. Air freight is much faster and can come in via a nearby hub such as Vienna. Slovakia is in the EU, so you need an EORI number to clear customs and should plan for 23 percent import VAT, raised from 20 percent on 1 January 2025, plus any duty. Many imports on this lane are automotive parts and batteries. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the gateway port, the size and weight of your cargo, and the season. Ocean rates in particular move week to week, and inland haulage from the port to your address is part of the total. We quote each shipment for your goods, route and dates.',
        factors: [
          'Gateway port: Koper in Slovenia and Hamburg in Germany are common choices. Each gives a different sailing schedule and inland leg, so compare the total landed cost.',
          'Mode: sea is cheapest, rail sits in the middle, air is faster and dearer, express is fastest and dearest.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time and cost. Ask us which way your sailing goes.',
          'Volume: the more you ship, the lower your cost per unit, especially once you fill a container.',
          'Service level: door-to-door (DDP) bundles duty, VAT, inland haulage, and delivery into one price, which removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) to the gateway port, plus inland haulage to Bratislava, or per cubic meter (LCL). Rail freight is priced per container and sits between sea and air on cost and speed. Air and express are priced on chargeable weight. Freight prices do not include Slovak import VAT or EU duty, covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Slovakia shipping and the cheapest way to move anything large or heavy, but because Slovakia is landlocked, the choice of gateway port matters. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it, while shared container space (LCL) means you pay only for the space you use, better for smaller loads. Much Slovakia-bound cargo arrives at Koper in Slovenia, which says it has high market shares in Slovakia, especially for containers, or at Hamburg and Bremerhaven in Germany. Rijeka, Rotterdam, Gdansk, and Constanta are alternatives. From the port, cargo moves to Bratislava in the west or Kosice in the east by road or rail. LCL takes longer than FCL, because the cargo has to be grouped and unpacked. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. As a rule, small loads usually go LCL and larger loads go in a full container, and we quote the gateway options so you can compare.',
      airFreightBody:
        'Air freight is the fast option, and rail is a middle ground for Slovakia. Air cargo flies from hubs like Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong toward Slovakia, either into Bratislava or into a nearby hub such as Vienna, Frankfurt, or Budapest and then by truck. Rail freight runs on the China-Europe network from inland Chinese hubs to Central Europe, between sea and air on cost and speed. Ask us about the route your train takes, since it affects the transit time. Air is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size, and per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote sea, rail, and air side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Slovakia, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Slovakia. Once a shipment gets heavier, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL (via gateway port)', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Rail freight (to Central Europe)', time: 'Quoted per shipment', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive heavy cargo' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Sea cargo for Slovakia can leave from Chinese ports such as Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou. For air freight, common departure airports are Shanghai Pudong, Shenzhen, Guangzhou, and Hong Kong, and rail services start from inland Chinese hubs. Because Slovakia is landlocked, sea cargo arrives at a gateway port in another country and then moves inland by road or rail to Bratislava or Kosice. Koper in Slovenia counts the Visegrad countries, which include Slovakia, among its most important hinterland markets. Hamburg connects markets in Germany and Central and Eastern Europe by rail, barge and truck. Rijeka, Rotterdam, Gdansk, and Constanta are other options. Air freight can come into Bratislava or through a nearby hub such as Vienna. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Slovakia is part of the EU customs union, so the same EU tariff applies here as in every other EU country. There is no VAT-free allowance on imports, and Slovakia raised its standard VAT to 23 percent in 2025, so plan around 23 percent import VAT plus any duty. Rates depend on your exact product, so confirm the duty for your goods\' commodity code in the EU TARIC database before you ship.',
        points: [
          'Slovak import VAT is 23 percent, raised from 20 percent on 1 January 2025. It is charged on the customs value plus duties and other charges, such as shipping and insurance. If you are a VAT-registered business, you can usually deduct the VAT you pay on business purchases in your VAT return, but it is still a real cash-flow item at clearance.',
          'EU customs duty is usually a percentage of the customs value of the goods, and the rate depends on your product\'s commodity code in the TARIC database. TARIC also lists anti-dumping duties, which apply to some goods from some countries, so check your code before you ship, especially for automotive parts.',
          'You need an EORI number to clear goods through EU customs. A business established in Slovakia gets it from Slovak customs. One EORI number covers customs operations across the EU.',
          'The old VAT exemption for imported goods below EUR 22 was abolished on 1 July 2021, so import VAT applies from the first euro. Since 1 July 2026 the EU also charges a temporary customs duty of EUR 3 per item on low-value parcels worth up to EUR 150, counted by tariff classification, not by quantity.',
          'You can clear customs at the gateway port or in Slovakia. EU customs transit suspends duties and taxes while the goods travel, so clearance can happen at the destination instead of the port where they entered the EU. We set up whichever suits your routing.',
          'Who pays depends on the Incoterm. Under DDP the seller or forwarder clears and pays duty and VAT; under FOB, CIF, or DAP you are the importer of record. Core documents are the commercial invoice, packing list, and bill of lading, air waybill, or rail consignment note.',
          'Wood pallets and crates entering the EU must be treated and marked to the ISPM 15 standard.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg, the inland haulage from the gateway port, Slovak and EU customs including duty and import VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is especially useful for a landlocked destination, where the gateway-port and inland legs add complexity, and for just-in-time automotive cargo where timing matters. The alternative, FOB, CIF, or DAP, leaves some of the clearance, duty, or delivery for you to arrange as the importer of record. For most Slovak importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Slovak delivery address.',
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
            'It depends on the mode, the gateway port, the inland leg, and the size and weight of your cargo. Sea is the cheapest per unit, rail sits between sea and air, and air and express cost the most. Import VAT and duty are extra. Request a live quote.',
        },
        {
          question: 'How does cargo reach Slovakia if it is landlocked?',
          answer:
            'Sea cargo arrives at a gateway port in another country, usually Koper in Slovenia or Hamburg in Germany, then moves inland by road or rail to Bratislava or Kosice. Rijeka, Rotterdam, Gdansk, and Constanta are alternatives, and China-Europe rail can also reach Central Europe.',
        },
        {
          question: 'How long does shipping from China to Slovakia take?',
          answer:
            'Sea plus the inland leg is the slowest option, rail is faster, air is faster again, and express is quickest for small parcels. Lines can route via the Suez Canal or round Africa, which changes the transit time, so we quote the time for your route.',
        },
        {
          question: 'Should I ship via Koper or Hamburg?',
          answer:
            'Koper in Slovenia says it has high market shares in Slovakia, especially for containers. Hamburg is Germany\'s biggest multipurpose port with rail links across Central Europe. We can quote both ways, and the right choice depends on schedule reliability and total landed cost.',
        },
        {
          question: 'Now that Slovak VAT is 23 percent, how does that affect imports?',
          answer:
            'Slovakia raised its standard VAT from 20 to 23 percent on 1 January 2025. Import VAT is charged on the customs value plus duties and other charges, so budget the higher rate into your landed cost. VAT-registered Slovak businesses can usually deduct it in their VAT return.',
        },
        {
          question: 'What is the cheapest way to ship from China to Slovakia?',
          answer:
            'Sea freight is usually the cheapest per unit. A shared container (LCL) is cheapest for small loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. We compare gateway ports so the inland leg does not eat the saving.',
        },
        {
          question: 'Do you handle automotive parts and batteries for Slovakia?',
          answer:
            'Yes. Many China imports on this lane are automotive parts, components, and batteries, often just-in-time. We focus on transit reliability and fast customs, and we flag any anti-dumping duties on relevant categories before you ship.',
        },
        {
          question: 'What documents do I need to import from China to Slovakia?',
          answer:
            'You need an EORI number, a commercial invoice, a packing list, and a bill of lading, air waybill, or rail consignment note, plus a certificate of origin where relevant and product certificates for regulated goods. Wood packaging must meet the ISPM 15 standard.',
        },
      ],
      sources: [
        { label: 'Your Europe: VAT rates in EU countries', url: 'https://europa.eu/youreurope/business/taxation/vat/vat-rules-rates/index_en.htm' },
        { label: 'Slovak Financial Administration: VAT changes from 1 January 2025', url: 'https://www.financnasprava.sk/sk/pre-media/novinky/archiv-noviniek/detail-novinky/_konsolidacia-dph-ts' },
        { label: 'Your Europe: Charging and deducting VAT', url: 'https://europa.eu/youreurope/business/finance-and-tax/vat/charging-deducting-vat/index_en.htm' },
        { label: 'European Commission: Buying goods from outside the EU (import VAT and duty)', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/importation/buying-goods-online-coming-non-european-union-country_en' },
        { label: 'European Commission: EU Customs Tariff (TARIC)', url: 'https://taxation-customs.ec.europa.eu/online-services/online-services-and-databases-customs/eu-customs-tariff-taric_en' },
        { label: 'European Commission: EORI number', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-operation/economic-operators-registration-and-identification-number-eori_en' },
        { label: 'European Commission: Customs formalities for low value consignments', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-operation/customs-formalities-low-value-consignments_en' },
        { label: 'European Commission: EUR 3 customs duty for low-value parcels', url: 'https://commission.europa.eu/news-and-media/news/ensuring-fairness-and-safety-eur3-customs-duty-low-value-parcels-2026-06-29_en' },
        { label: 'European Commission: Customs transit', url: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-transit_en' },
        { label: 'Polish plant health service (PIORIN): Wood packaging and ISPM 15', url: 'https://www.gov.pl/web/piorin-en/wood-packaging' },
        { label: 'Port of Koper: Koper, the sea gateway for Visegrad countries', url: 'https://www.luka-kp.si/en/news/koper-the-sea-gateway-for-visegrad-countries/' },
        { label: 'Port of Hamburg', url: 'https://www.hafen-hamburg.de/en/portofhamburg/port-of-hamburg/' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-tunisia',
    name: 'Tunisia',
    code: 'TN',
    description: 'Sea and air freight from China to Tunisia, with sea cargo landing at Rades, Sfax, and Bizerte. FCL, LCL, customs help, and door-to-door delivery.',
    majorPorts: ['Rades', 'Sfax', 'Bizerte'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Textiles', 'Consumer Goods', 'Auto Parts'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Tunisia: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Tunisia: sea, air and express freight, Rades, Sfax and Bizerte ports, customs duty, TVA and import rules. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Tunisia moves cargo by sea freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Rades near Tunis, Sfax, or Bizerte. We quote transit time for each sailing or flight. Tunisian customs duty and TVA apply to imports, with TVA charged on the customs value including duties and taxes.',
      intro:
        'If you import from China into Tunisia, the freight is straightforward but the customs and payment side needs planning. This guide covers what drives the cost of shipping from China to Tunisia, which ports your cargo moves through, and the Tunisian customs and tax rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have four main ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Air freight costs more but arrives much sooner. Tunisia runs its own customs, with duty and TVA on imports. Check your product\'s duty and any import permit before you order, and agree payment with your bank early. Request a live quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Guangzhou', 'Qingdao'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, and the season. Rates move week to week, and the route a line takes into the Mediterranean also changes the cost. We quote each shipment for your exact cargo, ports, and dates.',
        factors: [
          'Mode: sea is cheapest, air is faster and dearer, express is fastest and dearest.',
          'Duty: Tunisian customs duty depends on your product\'s tariff code, so we check the rate before you order.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes.',
          'Port waiting time: busy periods at the port can add time and storage risk, so build some buffer into your plan.',
          'Service level: door-to-door (DDP) bundles duty, TVA, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Air and express are priced on chargeable weight, the greater of actual weight or volumetric weight, so bulky but light cargo costs more than it looks. Freight quotes do not include Tunisian customs duty, TVA, or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Tunisia shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole 20ft or 40ft box for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo reaches Tunisia through the Mediterranean, often changing ships at a regional hub, and arrives at Rades near Tunis, Sfax in the south, or Bizerte in the north. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. LCL takes longer than FCL because the box has to be filled and then unpacked. We quote both FCL and LCL so you can compare.',
      airFreightBody:
        'Air freight is the option when speed matters. Cargo flies from Chinese hubs such as Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Tunis-Carthage Airport. It costs several times more than sea freight per unit, so it pays off for urgent restocks, high-value goods, samples, or products small and light enough that the weight cost stays reasonable. Air freight is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky but light cargo is charged on its size. Per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote both side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Tunisia, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Tunisia. For heavier shipments, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Guangzhou, and Qingdao handle Tunisia-bound containers. For air freight, the main gateways include Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Tunisian side, sea cargo arrives at Rades next to Tunis, Sfax in the south, or Bizerte in the north. The main air gateway is Tunis-Carthage. For cargo not bound for the capital, another port can sometimes save time. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Tunisian customs is manageable, but duty, TVA, and permits need checking before you order. Here is what applies when you import from China. Confirm your product\'s duty rate and whether it needs a permit before you ship.',
        points: [
          'Imports are subject to TVA unless they are exempt. On imports, TVA is charged on the customs value, including all costs, duties, and taxes except the TVA itself. We confirm the rate for your goods.',
          'The Tunisian tax system includes customs duties, TVA, and a consumption duty on some goods. Duty depends on the tariff code, so we check the rate for your product.',
          'If the importer is not registered for TVA, the TVA base on imports is marked up, so it pays to check your registration first.',
          'Before you order, ask us whether your goods need an import permit, and ask your bank how payment to a foreign supplier must be made.',
          'We or a licensed customs broker clear the goods for you, and you need a registered Tunisian importer of record.',
          'Core documents are the commercial invoice, packing list, bill of lading or air waybill, and certificate of origin, plus any conformity or health certificates for regulated goods.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea or air leg, Tunisian customs, duty, and TVA, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. It is the simplest option for importers who do not have their own customs setup, though the consignee still needs to be able to import. The alternative, FOB or CIF, leaves the Tunisian clearance, duty, and delivery for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Tunisian delivery address.',
        'Check whether your product needs an import permit, and agree the payment method with your bank, before the goods ship.',
        'We quote your options (sea FCL, sea LCL, air, or express) for your dates, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Rades, Sfax, or Bizerte, or flies into Tunis-Carthage.',
        'We clear Tunisian customs, handle duty and TVA, and deliver to your door. With DDP, the charges and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Tunisia?',
          answer:
            'It depends on the mode, the size and weight of your cargo, and the season. We quote each shipment for your dates. Sea freight is the cheapest per unit, and air and express cost more. Tunisian duty and TVA come on top of the freight. Request a live quote for your exact cargo.',
        },
        {
          question: 'How long does shipping from China to Tunisia take?',
          answer:
            'It depends on the mode and the sailing. Air and express are much faster than sea. Lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes. Busy periods at the port can add time, so build in some buffer.',
        },
        {
          question: 'Do Chinese goods get a duty discount in Tunisia?',
          answer:
            'Duty depends on the product and its origin. We check the rate for your tariff code before you order. A certificate of origin shows where the goods were made, and we tell you whether it changes the duty on your goods.',
        },
        {
          question: 'What is the cheapest way to ship from China to Tunisia?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Air and express cost more but save time.',
        },
        {
          question: 'What if the port is busy when my cargo arrives?',
          answer:
            'Busy periods can mean waiting time and storage charges. Build buffer time into your plan, and ask us whether Sfax or Bizerte could suit your delivery point better than Rades.',
        },
        {
          question: 'Do I need an import permit for Tunisia?',
          answer:
            'It depends on the goods. Confirm whether your product needs a permit before you ship, and check the payment rules with your bank. We can help you check.',
        },
        {
          question: 'How much duty and TVA will I pay importing from China to Tunisia?',
          answer:
            'Duty depends on your product\'s tariff code. TVA is then charged on the customs value, including costs, duties, and taxes. If the importer is not registered for TVA, the base is marked up. We confirm the rates for your goods before you ship.',
        },
        {
          question: 'What documents do I need to import from China to Tunisia?',
          answer:
            'You need a commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin, plus any conformity or health certificates for regulated goods. You also need a registered Tunisian importer of record.',
        },
      ],
      sources: [
        { label: 'Tunisian Ministry of Finance, overview of the tax system', url: 'https://www.finances.gov.tn/fr/apercu-general-sur-la-fiscalite' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-turkey',
    name: 'Turkey',
    code: 'TR',
    description: 'Sea, rail, and air freight from China to Turkey, with sea cargo arriving at Istanbul (Ambarli), Mersin, Izmir, and Gemlik. FCL, LCL, customs, and door-to-door.',
    majorPorts: ['Istanbul (Ambarli)', 'Mersin', 'Izmir', 'Gemlik'],
    transitTime: '',
    popularGoods: ['Electronics', 'Machinery', 'Textiles', 'Consumer Goods', 'Auto Parts'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Turkey: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Turkey: compare sea, rail, air and express freight, ports, customs, KDV and import duties. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Turkey moves cargo by sea freight, rail freight, air freight, or express courier, with full-container (FCL), shared-container (LCL), and door-to-door (DDP) options. Goods leave ports like Shanghai, Ningbo, and Shenzhen and arrive at Istanbul, Mersin, or Izmir, or travel overland by rail. Transit time depends on the sailing and the route, so we quote it for each shipment. Turkish VAT (KDV) rates are 1, 10, and 20 percent depending on the product, and Chinese goods pay Turkish import duty, sometimes with extra trade defence duties on top.',
      intro:
        'If you import from China into Turkey, one point clears up a lot of confusion: Turkey is in a customs union with the EU, but that does not make goods from China duty-free. This guide covers what drives the cost of shipping from China to Turkey, how each option works, which ports and routes your cargo moves through, and the Turkish customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run. You have several ways to ship: sea freight in a full container (FCL), sea freight in shared container space (LCL), rail freight, air freight, and express courier. Sea freight is the cheapest for anything large or heavy. Rail usually sits between sea and air, and air freight is the fastest. Turkey is not in the EU, has its own customs, and charges VAT plus duty, and some products also face anti-dumping or safeguard measures, so check your product before ordering. Request a quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the method, the size and weight of your cargo, the routing, and the season. Where we have current prices from our rate sheet, they show on this page. Otherwise we quote each shipment for your dates, ports, and cargo.',
        factors: [
          'Mode: sea is cheapest, rail sits in the middle, air is faster and dearer, express is fastest and dearest.',
          'Duty: Chinese goods pay Turkish import duty, and some products also face anti-dumping or safeguard measures that add to the cost.',
          'Routing: lines can route via the Suez Canal or round Africa, which changes the transit time; ask us which way your sailing goes, and whether rail is worth comparing.',
          'Port: Mersin on the Mediterranean coast is closer to southern Turkey; Istanbul and the Marmara ports are closer to the northwest.',
          'Service level: door-to-door (DDP) bundles duty, VAT, and delivery into one price, which costs more than port-to-port but removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) or per cubic meter (LCL). Rail freight is usually priced between sea and air. Air and express are priced on chargeable weight. Freight prices do not include Turkish customs duty, any trade defence duty, VAT, or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the backbone of China to Turkey shipping and the cheapest way to move anything large or heavy. You have two choices. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it. Shared container space (LCL) means your goods travel in a container with other importers\' cargo and you pay only for the space you use, which is the better deal for smaller loads. Cargo from China reaches Turkey through the Mediterranean, arriving at Istanbul and its Ambarli terminal in the Marmara region, at Mersin on the south coast, at Izmir on the Aegean, or at Gemlik near Bursa. Lines can route via the Suez Canal or round Africa, which changes the transit time, so ask us which way your sailing goes. LCL usually takes longer than FCL because the container has to be filled and emptied at each end. We quote both so you can compare.',
      airFreightBody:
        'Air freight is the fast option, and rail can be a middle ground for Turkey. Air cargo flies from hubs like Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong to Istanbul. Rail freight from China can also reach Turkey overland for some loads, usually sitting between sea and air on cost and speed; ask us whether it suits your cargo. Air is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size, and per-kg rates fall as the shipment gets heavier. When speed is not essential, sea freight moves the same goods for far less, and we can quote sea, rail, and air side by side.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) is the fastest door-to-door option into Turkey, and it bundles pickup, the flight, and delivery into one service. It is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo, but for a small, time-critical shipment it is often the simplest way to move goods from China to Turkey. Once a shipment gets heavier, standard air freight usually becomes cheaper while still being fast. We can compare express against air freight for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea freight, FCL', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy, non-urgent loads' },
        { mode: 'Sea freight, LCL', time: 'Quoted per sailing', indicativeCost: 'Low for small loads', bestFor: 'Smaller loads' },
        { mode: 'Rail freight (Middle Corridor)', time: 'Quoted per shipment', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive heavy cargo' },
        { mode: 'Air freight', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou are common starting points for Turkey-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. On the Turkish side, Istanbul and its Ambarli terminal sit in the Marmara region in the northwest, Mersin is on the Mediterranean coast in the south, Izmir is on the Aegean coast in the west, and Gemlik is on the Marmara Sea near Bursa. The best port depends on where your goods are going. Air cargo flies into Istanbul. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Turkish customs has one big trap for China imports: the customs union with the EU does not make Chinese goods duty-free, and some products also face trade defence duties. Here is what applies. Check your product\'s full duty before ordering.',
        points: [
          'The EU-Turkey customs union covers industrial products and processed agricultural products, and Turkey aligns with the EU\'s common customs tariff. That does not make goods from China duty-free; they pay Turkish import duty for their product code.',
          'Turkey also applies trade defence measures (anti-dumping, anti-subsidy, anti-circumvention, and safeguard) to some imports. These come on top of the base duty, so check your product code before ordering.',
          'Turkish VAT (KDV) rates are 1, 10, and 20 percent, depending on the product, and goods imported into the country are subject to VAT.',
          'China is not on the Ministry of Trade\'s list of Turkey\'s free trade agreements in force, so do not expect a lower preferential rate for China cargo. A certificate of origin is still useful to show where the goods were made.',
          'Commercial imports usually clear through a licensed customs broker, and some goods need extra approvals or conformity checks. We check this for your product.',
          'Core documents are the commercial invoice, packing list, bill of lading, air waybill, or rail consignment note, and certificate of origin, plus any conformity certificates.',
          'Ask us about packaging rules for wood pallets and crates before your goods are packed.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), means we handle the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg, Turkish customs, duty including any trade defence duty, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the port or the paperwork yourself. Because extra duties on some products can be significant, having us work out the full landed cost up front avoids surprises at clearance. The alternative, FOB or CIF, leaves the Turkish clearance, duty, and delivery for you to arrange through a broker. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Turkish delivery address.',
        'We check the full duty for your HS code, including any anti-dumping or safeguard duty, so the landed cost is clear before you order.',
        'We quote your options (sea FCL, sea LCL, rail, air, or express) and the right port for your region, and you pick one.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to Istanbul, Mersin, or Izmir, travels by rail, or flies into Istanbul.',
        'We clear Turkish customs, handle duty and VAT, and deliver to your door. With DDP, the charges and delivery are already handled.',
      ],
      faqs: [
        {
          question: 'How much does it cost to ship from China to Turkey?',
          answer:
            'It depends on the mode, the size and weight of your cargo, the routing, and the season. Where we have current prices from our rate sheet, they show on this page; otherwise we quote each shipment for your dates. Turkish duty, any trade defence duty, and VAT are extra.',
        },
        {
          question: 'Does Turkey\'s EU customs union mean my Chinese goods are duty-free?',
          answer:
            'No. The customs union lets goods move freely between Turkey and the EU, and Turkey lines up its tariff with the EU\'s, but goods from China still pay Turkish import duty plus VAT, and some products also face trade defence duties.',
        },
        {
          question: 'How long does shipping from China to Turkey take?',
          answer:
            'It depends on the sailing and the port. Lines can route via the Suez Canal or round Africa, which changes the transit time. Rail usually sits between sea and air, and air and express are fastest. We give you the time for your exact shipment with the quote.',
        },
        {
          question: 'Why are extra duties charged on some Chinese goods in Turkey?',
          answer:
            'Turkey uses trade defence measures, such as anti-dumping and safeguard duties, to protect local producers from imports that harm them. These come on top of the base duty, so it is important to check the full duty for your HS code before ordering.',
        },
        {
          question: 'What is the cheapest way to ship from China to Turkey?',
          answer:
            'Sea freight is the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Rail can be a middle option when you need the goods faster than sea.',
        },
        {
          question: 'Can I ship from China to Turkey by rail?',
          answer:
            'For some loads, yes. Rail freight from China can reach Turkey overland and usually sits between sea and air on cost and speed. Ask us whether it suits your cargo and dates.',
        },
        {
          question: 'Should I ship into Istanbul or Mersin?',
          answer:
            'It depends on where your goods are going. Istanbul and its Ambarli terminal are in the northwest, Mersin is on the Mediterranean coast in the south, and Izmir and Gemlik serve the west and the Bursa area. We pick the port that keeps the inland leg short.',
        },
        {
          question: 'What documents do I need to import from China to Turkey?',
          answer:
            'You need a commercial invoice, packing list, bill of lading, air waybill, or rail consignment note, and certificate of origin, plus any conformity certificates for regulated goods. Ask us about packaging rules for wood pallets and crates.',
        },
      ],
      sources: [
        { label: 'Invest in Türkiye: Tax guide', url: 'https://www.invest.gov.tr/en/investmentguide/pages/tax-guide.aspx' },
        { label: 'EU Access2Markets: EU-Türkiye Customs Union', url: 'https://trade.ec.europa.eu/access-to-markets/en/content/eu-turkiye-customs-union' },
        { label: 'Türkiye Ministry of Trade: Trade defence policy', url: 'https://www.trade.gov.tr/legislation/import/trade-defence-policy' },
        { label: 'Türkiye Ministry of Trade: Free trade agreements', url: 'https://www.trade.gov.tr/free-trade-agreements' },
      ],
    },
  },

  {
    slug: 'shipping-china-to-ukraine',
    name: 'Ukraine',
    code: 'UA',
    description: 'Freight from China to Ukraine, routed by sea to a Polish or Romanian port and then overland into Ukraine. FCL, LCL, customs, and door-to-door delivery.',
    majorPorts: ['Gdansk (Poland)', 'Constanta (Romania)', 'Odesa'],
    transitTime: '',
    popularGoods: ['Machinery', 'Electronics', 'Consumer Goods', 'Auto Parts', 'Building Materials'],
    content: {
      lastUpdated: 'November 2026',
      metaTitle: 'Shipping From China to Ukraine: Ports, Customs & Quotes',
      metaDescription:
        'Shipping from China to Ukraine: routing via Poland and Romania, what drives cost and timing, customs and VAT. Free quote from upfreights.',
      answerCapsule:
        'Shipping from China to Ukraine is shaped by the war. A common route is by sea to a Polish or Romanian port such as Gdansk or Constanta, then by road or rail across the border into Ukraine. Ukrainian airspace is closed to civil flights, so air cargo flies to a neighbouring country and is trucked in. Timing depends on the route and the border, so we quote it for each shipment. Ukraine\'s basic VAT rate is 20 percent, plus any customs duty.',
      intro:
        'If you import from China into Ukraine, the war changes how cargo moves, so honest planning matters. This guide covers what drives the cost of shipping from China to Ukraine, how each option works given the current situation, which routes your cargo takes, and the Ukrainian customs rules you need to plan for. As a freight forwarder, we move cargo on this lane every week, so the steps below reflect how shipments really run today. The practical options are sea freight to a Polish or Romanian port then overland into Ukraine, rail from China to a border hub then onward, and air freight to a neighbouring country then trucked across the border. Ukraine is not in the EU. Its own Black Sea ports are in a war zone, so ask us what is possible for your sailing. Ukrainian airspace is closed to civil flights, so there is no direct air freight into Ukraine. Plan for import VAT plus any duty, and request a quote any time and we will price your exact shipment.',
      originPorts: ['Shanghai', 'Ningbo', 'Shenzhen (Yantian)', 'Qingdao', 'Guangzhou'],
      cost: {
        snapshot:
          'How much you pay depends on the route, the size and weight of your cargo, and the security situation. War-risk insurance and border queues can add cost. Where we have current prices from our rate sheet, they show on this page. Otherwise we quote each shipment, including the onward overland leg into Ukraine.',
        factors: [
          'Routing: a common path is by sea to a Polish or Romanian port and then overland into Ukraine.',
          'Air: Ukrainian airspace is closed to civil flights, so air cargo flies to a neighbouring country and is trucked across the border.',
          'Security and insurance: war-risk insurance, congestion, and border surcharges raise cost and make timing variable.',
          'Mode: sea plus overland is cheapest, rail sits in the middle, air to a neighbour plus truck is fastest and dearest.',
          'Service level: door-to-door (DDP) bundles the overland leg, customs, and delivery into one price, which removes the work.',
        ],
        fcl: [],
        lcl: [],
        air: [],
        express: [],
        note:
          'Sea freight is priced per container (FCL) to the EU gateway port, plus the onward overland leg into Ukraine by road or rail, or per cubic meter (LCL). There is no direct air freight, so air cargo flies to a neighbouring country and is trucked in. Freight prices do not include Ukrainian import VAT, duty, or the clearance fee, which are covered in the customs section below.',
      },
      seaFreightBody:
        'Sea freight is the cheapest way to move anything large or heavy, and for Ukraine it usually means an EU port plus an overland leg. A full container (FCL) means you book a whole container for your cargo alone, which pays off once you have enough goods to fill most of it, while shared container space (LCL) means you pay only for the space you use, better for smaller loads. A common route is sea from China to a Polish port such as Gdansk or a Romanian port such as Constanta, where the goods move under EU transit, then by road or rail across the border into Ukraine. Lines can route via the Suez Canal or round Africa, which changes the transit time, and the border crossing adds its own time. Ukraine\'s own Black Sea ports, such as Odesa, are in a war zone, so ask us what is possible for your sailing. We quote the routing options so you can compare.',
      airFreightBody:
        'There is no direct air freight into Ukraine, because Ukrainian airspace is closed to civil flights. The practical fast option is to fly cargo from hubs like Shanghai, Guangzhou, and Shenzhen to a neighbouring country, such as Poland or Moldova, and then truck it across the border into Ukraine. The border crossing and onward trucking add time after the flight. Air is priced on chargeable weight, the greater of the actual weight and the volumetric weight, so bulky-but-light cargo is charged on its size, and per-kg rates fall as the shipment gets heavier. We never promise direct air to Kyiv or Lviv; we quote the air-to-neighbour plus truck route honestly so you can plan around the border step.',
      expressBody:
        'Express courier (the service behind DHL, FedEx, and UPS) can still be an option into Ukraine for small parcels, with the last leg going by road across the border. It bundles pickup, the flight, and delivery into one service, and it is built for small parcels, samples, and urgent documents rather than pallets of stock. Express is the priciest choice per kilo and timing can vary with the security situation and border queues, but for a small, time-critical shipment it is often the simplest option. Once a shipment gets heavier, standard air freight to a neighbouring country usually becomes cheaper. We can compare the options for any shipment where speed is the priority.',
      transitComparison: [
        { mode: 'Sea + overland (via Poland)', time: 'Quoted per sailing', indicativeCost: 'Lowest per unit', bestFor: 'Large or heavy loads to western Ukraine' },
        { mode: 'Sea + overland (via Romania)', time: 'Quoted per sailing', indicativeCost: 'Low', bestFor: 'Southern and central Ukraine' },
        { mode: 'Rail + onward truck', time: 'Quoted per shipment', indicativeCost: 'Between sea and air', bestFor: 'Time-sensitive cargo' },
        { mode: 'Air to neighbour + truck', time: 'Quoted per shipment', indicativeCost: 'High', bestFor: 'Urgent or high-value goods' },
        { mode: 'Express courier', time: 'Quoted per shipment', indicativeCost: 'Highest per kg', bestFor: 'Small, fast parcels' },
      ],
      portsBody:
        'Most cargo from China leaves through a handful of major ports. On the ocean side, Shanghai, Ningbo-Zhoushan, Shenzhen (including the Yantian terminal), Qingdao, and Guangzhou are common starting points for Ukraine-bound containers. For air freight, the main gateways are Shanghai Pudong, Guangzhou, Shenzhen, and Hong Kong. Because of the war, EU ports are the practical gateways for much Ukraine-bound cargo: Gdansk in Poland and Constanta in Romania, where cargo moves under EU transit and then crosses the border into Ukraine by road or rail. Ukraine\'s own Black Sea ports, such as Odesa, are in a war zone, so ask us what is possible for your sailing. There is no direct air gateway, since the airspace is closed to civil flights; air cargo lands in a neighbouring country and is trucked in. You can browse the specific city-to-city routes we run below and open any one for its own details.',
      customs: {
        summary:
          'Ukraine uses its own customs system and charges VAT on imported goods plus any duty. Here is what applies when you import from China. The bigger planning issues on this lane are routing and security rather than the tariff, so confirm the route and the consignee\'s setup before you ship.',
        points: [
          'The import of goods into Ukraine is subject to VAT, and the basic VAT rate is 20 percent. Some goods may have other rates, so we check the rate for your product.',
          'Customs duty depends on your product\'s code and origin. We check the duty for your goods before you order.',
          'Wartime tax rules have changed more than once, so we check the current position for your goods before you ship.',
          'Goods usually move under EU transit from the Polish or Romanian port and then clear Ukrainian customs, so clean paperwork keeps the cross-border move smooth.',
          'The consignee needs to be set up to import into Ukraine. We confirm the importer\'s details before the cargo leaves China.',
          'Core documents are the commercial invoice, packing list, transport document (bill of lading, rail consignment note, or CMR for the road leg), contract, and certificate of origin where a preference is claimed.',
          'Wood pallets and crates must meet the EU rules for the transit leg (heat treated or fumigated in line with ISPM15 and stamped); ask us about Ukrainian packaging rules too.',
        ],
      },
      doorToDoor:
        'Door-to-door, often sold as DDP (Delivered Duty Paid), is the most practical way to ship to Ukraine right now, because it bundles the whole journey: pickup at your supplier in China, export clearance, the sea, rail, or air leg to the EU gateway, the EU transit, the border crossing, Ukrainian customs, duty, and VAT, and final delivery to your address. You get one price and one point of contact, and you never deal with the ports, the border, or the paperwork yourself. Given the wartime routing and the border step, that single point of responsibility removes a lot of risk. The consignee still needs to be set up as a Ukrainian importer. The alternative, FOB or CIF to an EU port, leaves the overland leg, border crossing, and Ukrainian clearance for you to arrange. For most importers, DDP is worth it for the time and risk it removes.',
      steps: [
        'Tell us what you are shipping: the goods, their weight and volume (CBM), the supplier\'s city in China, and your Ukrainian delivery address.',
        'We recommend the best route given the current situation (sea via Gdansk or Constanta plus overland, rail to a border hub, or air to a neighbour plus truck) and quote your options.',
        'We confirm the consignee is set up to import into Ukraine and check the current tax rules for your goods.',
        'We arrange pickup from your supplier and handle export clearance in China.',
        'Your cargo sails to a Polish or Romanian port, moves under EU transit, and crosses the border into Ukraine by road or rail; air cargo flies to a neighbouring country and is trucked in.',
        'We complete Ukrainian customs, handle duty and VAT, and deliver to your door. With DDP, the whole route and the charges are already handled.',
      ],
      faqs: [
        {
          question: 'How does shipping from China to Ukraine work during the war?',
          answer:
            'A common route is by sea to a Polish port like Gdansk or a Romanian port like Constanta, under EU transit, and then across the border into Ukraine by road or rail. Ukraine\'s own Black Sea ports are in a war zone, so ask us what is possible for your sailing.',
        },
        {
          question: 'Can I ship by air directly to Ukraine?',
          answer:
            'No. Ukrainian airspace is closed to civil flights, so there is no direct air freight into Kyiv or Lviv. Air cargo flies to a neighbouring country such as Poland or Moldova and is then trucked across the border, which adds time for the crossing.',
        },
        {
          question: 'How long does shipping from China to Ukraine take?',
          answer:
            'It depends on the route: the sea or rail leg, the gateway, and the border crossing all add up. Lines can route via the Suez Canal or round Africa, which changes the transit time, and border queues and the security situation can add more. We give you the time for your exact shipment with the quote.',
        },
        {
          question: 'How much does it cost to ship from China to Ukraine?',
          answer:
            'It depends on the route, the size and weight of your cargo, insurance, and the overland leg into Ukraine. Where we have current prices from our rate sheet, they show on this page; otherwise we quote each shipment for your dates. Import VAT and duty are extra.',
        },
        {
          question: 'Are Ukraine\'s Black Sea ports open?',
          answer:
            'Ukraine\'s Black Sea ports, such as Odesa, are in a war zone, and what is possible changes with the security situation and insurance. Ask us what is possible for your sailing. Many importers route through an EU port and bring goods in overland instead.',
        },
        {
          question: 'What is the cheapest way to ship from China to Ukraine?',
          answer:
            'Sea freight to a Polish or Romanian port plus overland delivery is usually the cheapest per unit. A shared container (LCL) is usually cheapest for smaller loads, while a full container (FCL) becomes cheaper once you have enough volume to fill it. Rail is a faster middle option.',
        },
        {
          question: 'How much duty and VAT will I pay importing from China to Ukraine?',
          answer:
            'Ukraine charges VAT on imported goods, with a basic rate of 20 percent, plus customs duty set by your product\'s code and origin. Wartime tax rules have changed more than once, so we check the current position for your goods.',
        },
        {
          question: 'What documents do I need to import from China to Ukraine?',
          answer:
            'You need a commercial invoice, packing list, a transport document (bill of lading, rail consignment note, or CMR for the road leg), the contract, and a certificate of origin where a preference is claimed. The consignee must be set up to import into Ukraine, and wood packaging must meet the ISPM15 rules for the EU transit leg.',
        },
      ],
      sources: [
        { label: 'UkraineInvest: Overview of taxation', url: 'https://ukraineinvest.gov.ua/en/analytics-research/overview-of-taxation/' },
        { label: 'EASA: Conflict Zone Information Bulletin, airspace of Ukraine', url: 'https://www.easa.europa.eu/en/domains/air-operations/czibs/czib-2022-01r14' },
        { label: 'European Commission: Requirements for wood packaging', url: 'https://food.ec.europa.eu/plants/plant-health-and-biosecurity/trade-plants-plant-products-non-eu-countries/requirements-wood-packaging-dunnage_en' },
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
