import type { PortPack } from './routePackShared';
import { ukDuty, euDuty, noDuty, US_DUTY_NOTE, US_FEE_SOURCES, NO_DUTY_PRINCIPLE_SOURCE } from './routePackShared';

/**
 * Port packs written by the rollout script (gen.py) from checked research.
 * Every fact's quote was found on its source page by port_quote_check.py.
 * Do not edit by hand: edit ports_edit.py and rerun gen.py.
 */
export const generatedPortPacks: PortPack[] = [
  {
    id: 'belfast',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United Kingdom', href: '/shipping-china-to-united-kingdom' },
    port: {
      name: 'Belfast Harbour, Victoria Terminal 3',
      operator: 'Belfast Container Terminal (Irish Continental Group), in Belfast Harbour',
      facts: [
        {
          label: 'Container terminal',
          value: 'One: Victoria Terminal 3 (VT3)',
        },
        {
          label: 'Terminal size and cranes',
          value: '27 acres, 3 ship-to-shore cranes, 8 electric yard cranes',
        },
        {
          label: 'Containers handled',
          value: '126,000 container units in 2022 (a record 132,000 in 2021)',
        },
        {
          label: 'Gate opening hours',
          value: 'Monday to Friday 7:00 to 18:30, Saturday 7:00 to 11:30, closed Sunday',
        },
        {
          label: 'Warehousing in the harbour',
          value: '2,000,000 square feet',
        },
        {
          label: 'All goods through the port, 2025',
          value: '24.3 million tonnes',
        },
      ],
      notes: [
        'Figures are from Belfast Harbour and the terminal operator. The container count is in container units, not TEU, as the port publishes it.',
      ],
    },
    travel: [
      [
        'Belfast is reached by feeder ship. A feeder is a smaller ship that carries containers between a big hub port and a smaller one. Belfast Harbour says CMA CGM\'s Irish Sea feeder links its container terminal with UK and European ports, "including Dunkirk and Rotterdam".',
      ],
      [
        'The last leg into Belfast is on a feeder ship from a hub port. Belfast Harbour names Dunkirk and Rotterdam among the ports on CMA CGM\'s feeder service to its Victoria Terminal 3.',
      ],
    ],
    dutyNote: 'We have not put a single duty figure on this page. Goods from China landed in Northern Ireland pay UK duty if they are declared "not at risk" of moving into the EU, and the EU rate if they are "at risk" (GOV.UK). Which one applies depends on where the goods go next, so we work it out for your shipment when we quote. Import VAT is due either way.',
    inland: {
      from: 'Belfast Container Terminal',
      source: 'osm',
      places: [
        {
          name: 'Lisburn',
          km: 22,
        },
        {
          name: 'Ballymena',
          km: 43,
        },
        {
          name: 'Craigavon',
          km: 50,
        },
        {
          name: 'Derry~Londonderry',
          km: 113,
        },
      ],
    },
    faqs: [
      {
        question: 'When can my haulier collect a container in Belfast?',
        answer: 'Belfast Container Terminal gives its opening hours as Monday to Friday 7:00 to 18:30 and Saturday 7:00 to 11:30. It is closed on Sundays.',
      },
      {
        question: 'Which duty applies to goods from China landed in Belfast?',
        answer: 'Northern Ireland has its own rules. GOV.UK says UK duty applies to goods entering Northern Ireland from outside the EU and the UK when they are declared "not at risk" of moving into the EU, and that "at risk" goods are charged the EU rate. Tell us where the goods are going and we will work out which applies.',
      },
      {
        question: 'Is there warehousing at Belfast Harbour?',
        answer: 'Yes. Belfast Harbour lists 2,000,000 square feet of warehousing in the harbour estate.',
      },
    ],
    sources: [
      {
        label: 'Belfast Container Terminal (BCT) : ICG Terminals',
        url: 'https://icgterminals.com/belfast-container-terminal/',
      },
      {
        label: 'Container and Terminal Division : Irish Continental Group',
        url: 'https://www.icg.ie/our-businesses/container-terminal/',
      },
      {
        label: 'Belfast Harbour | New container feeder service operated by CMA-CGM to connect Belfast Harbour with key European hub ports',
        url: 'https://www.belfast-harbour.co.uk/news/new-container-feeder-service-to-connect-belfast-harbour/',
      },
      {
        label: 'Belfast Harbour | Facilities',
        url: 'https://www.belfast-harbour.co.uk/port/facilities/',
      },
      {
        label: 'Belfast Harbour | Port',
        url: 'https://www.belfast-harbour.co.uk/port/',
      },
      {
        label: 'GOV.UK, Check if you can declare goods you bring into Northern Ireland "not at risk" of moving to the EU',
        url: 'https://www.gov.uk/guidance/check-if-you-can-declare-goods-you-bring-into-northern-ireland-not-at-risk-of-moving-to-the-eu',
      },
    ],
  },
  {
    id: 'teesport',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United Kingdom', href: '/shipping-china-to-united-kingdom' },
    port: {
      name: 'Teesport',
      operator: 'PD Ports',
      facts: [
        {
          label: 'Container terminals',
          value: '2, with capacity for 650,000 TEU a year',
        },
        {
          label: 'Rail',
          value: 'Own rail terminal at the port',
        },
        {
          label: 'Customs',
          value: 'First port in the North of England with AEO status (a recognised customs quality mark), with its own clearance team',
        },
        {
          label: 'Truck gate',
          value: 'Automated gate and vehicle booking system for the TCT2 terminal',
        },
        {
          label: 'Roads',
          value: 'Straight onto the A66, A19 and A1(M)',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'Figures are from PD Ports, the port\'s owner and operator.',
      ],
    },
    travel: [
      [
        'Teesport is a feeder port. PD Ports says it offers "direct connections to the major hub ports of Europe", with over 20 ship calls a week. A feeder is a smaller ship that carries containers between a big hub port and a smaller one.',
      ],
      [
        'Ships from Asia unload at a big European hub, and a feeder ship brings the container on to Teesport. PD Ports describes the port as having "direct connections to the major hub ports of Europe" and more than 20 ship calls a week.',
      ],
    ],
    dutyExample: ukDuty('fully automatic front-loading washing machines', '8450 11 11 00', 45000, 2,
      'Washing machines are heavy and bulky for their value, so freight is a big share of the landed cost.'),
    inland: {
      from: 'Teesport',
      source: 'osm',
      places: [
        {
          name: 'Middlesbrough',
          km: 10,
        },
        {
          name: 'Newcastle upon Tyne',
          km: 74,
        },
        {
          name: 'Leeds',
          km: 116,
        },
        {
          name: 'Manchester',
          km: 199,
        },
      ],
    },
    faqs: [
      {
        question: 'Can my container leave Teesport by train?',
        answer: 'Yes. PD Ports runs its own rail terminal at the port. Tell us the final destination and we will price the rail leg.',
      },
      {
        question: 'Does Teesport handle customs clearance itself?',
        answer: 'PD Ports says it was the first port in the North of England to hold AEO status (an internationally recognised customs quality mark) and has its own customs clearance team at Teesport.',
      },
    ],
    sources: [
      {
        label: 'PD Ports: PD Ports Unitised 2022 Brochure (PDF)',
        url: 'https://pdports.co.uk/wp-content/uploads/2024/08/PD-Ports-Unitised-2022-Brochure.pdf',
      },
      {
        label: 'Teesport - PD Ports',
        url: 'https://www.pdports.co.uk/locations/teesport/',
      },
      {
        label: 'Customs Clearance - PD Ports',
        url: 'https://www.pdports.co.uk/services/freight-forwarding/customs-clearance/',
      },
      {
        label: 'Driver Information - PD Ports',
        url: 'https://www.pdports.co.uk/visitor-information/driver-information/',
      },
      {
        label: 'Containers - PD Ports',
        url: 'https://pdports.co.uk/commodities/containers',
      },
    ],
  },
  {
    id: 'south-shields',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United Kingdom', href: '/shipping-china-to-united-kingdom' },
    port: {
      name: 'Port of Tyne, South Shields',
      operator: 'Port of Tyne',
      facts: [
        {
          label: 'Container services',
          value: 'Short-sea feeder services, with connections to Felixstowe, Rotterdam and beyond',
        },
        {
          label: 'At the terminal',
          value: 'Container handling, warehousing and onward delivery as one package',
        },
        {
          label: 'Usual cargo coming in',
          value: 'Retail products, parts for manufacturing, and 40% of the UK\'s tea imports',
        },
      ],
      notes: [
        'From the Port of Tyne\'s own annual review. Its website blocks automated reading, so we used the review the port published.',
      ],
    },
    travel: [
      [
        'The Port of Tyne is a feeder port. It says its short-sea feeder services connect it with "Felixstowe, Rotterdam and beyond". A feeder is a smaller ship that carries containers between a big hub port and a smaller one.',
      ],
      [
        'Containers reach the Tyne on a feeder ship, a smaller ship that runs between a hub port and a smaller one. The port names Felixstowe and Rotterdam as its connections to the wider world.',
      ],
    ],
    dutyExample: ukDuty('cordless electric drills', '8467 21 10 00', 40000, 2,
      'Cordless drills pay 2% UK duty. As with most goods, import VAT is the larger tax.'),
    inland: {
      from: 'the Port of Tyne',
      source: 'osm',
      places: [
        {
          name: 'Sunderland',
          km: 15,
        },
        {
          name: 'Newcastle upon Tyne',
          km: 16,
        },
        {
          name: 'Durham',
          km: 29,
        },
        {
          name: 'Carlisle',
          km: 110,
        },
      ],
    },
    faqs: [
      {
        question: 'What usually comes in through the Port of Tyne\'s container terminal?',
        answer: 'The port lists retail products, parts for manufacturing and 40% of the UK\'s tea imports.',
      },
      {
        question: 'Can the Port of Tyne store my goods after unloading?',
        answer: 'The port says it offers container handling, warehousing and distribution as one package. Ask us to add storage to the quote.',
      },
    ],
    sources: [
      {
        label: 'Port of Tyne: 5b33986a6ad97945068468 (PDF)',
        url: 'https://site-port-of-tyne.s3.amazonaws.com/uploads/public/5b3/398/6a6/5b33986a6ad97945068468.pdf',
      },
    ],
  },
  {
    id: 'rotterdam',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the Netherlands', href: '/shipping-china-to-netherlands' },
    port: {
      name: 'Port of Rotterdam',
      operator: 'Port of Rotterdam Authority',
      facts: [
        {
          label: 'Containers in 2025',
          value: '14.2 million TEU, up 3.1%',
        },
        {
          label: 'Full containers from Asia, 2025',
          value: 'Up 9.3% on 2024',
        },
        {
          label: 'Water depth',
          value: 'More than 20 metres, so the largest container ships can call',
        },
        {
          label: 'By train',
          value: 'Cargo crosses the German border within three hours',
        },
        {
          label: 'Customs',
          value: 'Cleared goods move freely through the EU',
        },
        {
          label: 'Tracking',
          value: 'Cargo Controller app with real-time arrival and discharge times',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are the Port of Rotterdam Authority\'s own.',
      ],
    },
    travel: [
      [
        'Rotterdam is where the big ships from Asia call. The port authority says its water is more than 20 metres deep and that its terminals on the Maas Entrance can be reached from the sea within two hours of sailing.',
      ],
      [
        'Container ships from China sail straight into Rotterdam. The port authority says its water, more than 20 metres deep, lets shipping lines use their largest ships to the full.',
      ],
    ],
    dutyExample: euDuty('LED lamps', '8539 52 00 00', 30000, 3.7, 'Dutch import VAT', 21,
      'LED lamps pay a 3.7% EU duty rate.'),
    inland: {
      from: 'the Port of Rotterdam (Maasvlakte)',
      source: 'osm',
      places: [
        {
          name: 'Utrecht',
          km: 90,
        },
        {
          name: 'Amsterdam',
          km: 108,
        },
        {
          name: 'Venlo',
          km: 198,
        },
        {
          name: 'Duisburg, Germany',
          km: 236,
        },
      ],
    },
    faqs: [
      {
        question: 'Once my goods clear customs in Rotterdam, can they go on to another EU country?',
        answer: 'Yes. The port authority says Rotterdam is the EU\'s external border here, so after clearance in Rotterdam the goods can travel freely through the EU.',
      },
      {
        question: 'Can my container go on by train from Rotterdam?',
        answer: 'Yes. The port authority says cargo crosses the German border within three hours by rail and reaches many European destinations within 24 hours.',
      },
      {
        question: 'Are imports from Asia through Rotterdam growing?',
        answer: 'Yes. The port authority reports that full containers from Asia rose by 9.3% in 2025.',
      },
    ],
    sources: [
      {
        label: 'Throughput in the port of Rotterdam shows a slight decline | Port of Rotterdam',
        url: 'https://www.portofrotterdam.com/en/news-and-press-releases/throughput-port-rotterdam-shows-slight-decline',
      },
      {
        label: 'Between growth and pressure: Rotterdam\'s 2025 container year under review | Port of Rotterdam',
        url: 'https://www.portofrotterdam.com/en/news-and-press-releases/between-growth-and-pressure-rotterdams-2025-container-year-under-review',
      },
      {
        label: 'Deep sea and feeder | Port of Rotterdam',
        url: 'https://www.portofrotterdam.com/en/logistics/connections/deep-sea-and-feeder',
      },
      {
        label: 'Rail transport | Port of Rotterdam',
        url: 'https://www.portofrotterdam.com/en/logistics/connections/intermodal-transportation/rail-transport',
      },
      {
        label: 'Port Customs | Port of Rotterdam',
        url: 'https://www.portofrotterdam.com/en/services/port-customs',
      },
      {
        label: 'Containers | Port of Rotterdam',
        url: 'https://www.portofrotterdam.com/en/logistics/cargo/containers',
      },
    ],
  },
  {
    id: 'seattle',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United States', href: '/shipping-china-to-united-states' },
    port: {
      name: 'Seattle Harbor (The Northwest Seaport Alliance)',
      operator: 'The Northwest Seaport Alliance (Port of Seattle and Port of Tacoma)',
      facts: [
        {
          label: 'Who runs the terminals',
          value: 'The Northwest Seaport Alliance, a partnership of the Ports of Seattle and Tacoma',
        },
        {
          label: 'Water depth at Terminal 5',
          value: '55 feet (17 metres)',
        },
        {
          label: 'Largest ships at Terminal 5',
          value: '18,000 TEU',
        },
        {
          label: 'Rail at Terminal 18',
          value: 'On-dock rail yard',
        },
        {
          label: 'Storage after free time at SSA Seattle',
          value: '$50 per container per day for days 1 to 5',
        },
        {
          label: 'Warehouses nearby',
          value: 'Over 100 within 15 miles',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'Figures are The Northwest Seaport Alliance\'s own. Storage charges are from the terminal operator\'s tariff on the Alliance\'s site.',
      ],
    },
    travel: [
      [
        'Ships from China call at Seattle directly. The Northwest Seaport Alliance says it has direct services to "ports throughout Asia", and Terminal 5 can take ships of 18,000 TEU.',
      ],
      [
        'The Northwest Seaport Alliance runs the container terminals in Seattle and Tacoma together, and says Terminal 18 has an on-dock rail yard.',
      ],
    ],
    dutyNote: US_DUTY_NOTE,
    usFeeExample: {
      product: 'furniture',
      why: 'Furniture was the top import through the Northwest Seaport Alliance in 2024: 212,907 TEU, 16.1% of the total, by the Port of Seattle\'s own count.',
      goodsValueUsd: 30000,
    },
    inland: {
      from: 'Terminal 18, Seattle',
      source: 'osm',
      places: [
        {
          name: 'Tacoma',
          km: 54,
        },
        {
          name: 'Portland, Oregon',
          km: 280,
        },
        {
          name: 'Spokane',
          km: 456,
        },
        {
          name: 'Boise, Idaho',
          km: 797,
        },
      ],
    },
    faqs: [
      {
        question: 'What does it cost if my container stays too long at the Seattle terminal?',
        answer: 'The terminal operator\'s tariff for Terminals 18 and 5 charges $50 per container per day for the first five days after free time, rising after that. Ask us to book collection before free time runs out.',
      },
      {
        question: 'Can my container go inland by train from Seattle?',
        answer: 'Yes. Terminal 18 has an on-dock rail yard. Tell us the final city and we will price the rail leg.',
      },
      {
        question: 'Is there warehousing near the Seattle port?',
        answer: 'The Northwest Seaport Alliance says more than 100 warehouses operate within 15 miles of its terminals.',
      },
    ],
    sources: [
      {
        label: 'About Us | The Northwest Seaport Alliance',
        url: 'https://www.nwseaportalliance.com/about-us',
      },
      {
        label: 'Terminal 5 | The Northwest Seaport Alliance',
        url: 'https://www.nwseaportalliance.com/cargo-operations/terminals/terminal-5',
      },
      {
        label: 'Terminal 18 | The Northwest Seaport Alliance',
        url: 'https://www.nwseaportalliance.com/cargo-operations/terminals/terminal-18',
      },
      {
        label: 'The Northwest Seaport Alliance: Terminal Long Stay Fee Summary 1.12.26 (PDF)',
        url: 'https://s3.us-west-2.amazonaws.com/nwseaportalliance.com.if-us-west-2-or/s3fs-public/2026-01/Terminal%20Long%20Stay%20Fee%20Summary%201.12.26.pdf',
      },
      {
        label: 'Terminals | The Northwest Seaport Alliance',
        url: 'https://www.nwseaportalliance.com/cargo-operations/terminals',
      },
      {
        label: 'Cargo Statistics | The Northwest Seaport Alliance',
        url: 'https://www.nwseaportalliance.com/about-us/cargo-statistics',
      },
      {
        label: 'Port of Seattle, Maritime cargo comings and goings 2024',
        url: 'https://www.portseattle.org/blog/maritime-cargo-comings-and-goings-2024',
      },
      ...US_FEE_SOURCES,
    ],
  },
  {
    id: 'savannah',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United States', href: '/shipping-china-to-united-states' },
    port: {
      name: 'Port of Savannah, Garden City Terminal',
      operator: 'Georgia Ports Authority',
      facts: [
        {
          label: 'Terminal size',
          value: '1,345 acres, the largest single-operator container terminal in the US',
        },
        {
          label: 'Containers, fiscal year 2026',
          value: '5.67 million TEU (5.7 million in fiscal year 2025)',
        },
        {
          label: 'Harbour depth',
          value: '47 feet at low tide',
        },
        {
          label: 'Rail on the terminal',
          value: '42 trains a week',
        },
        {
          label: 'Customs',
          value: 'US Customs and Border Protection runs a 300,000 square foot facility on the terminal',
        },
        {
          label: 'Gate 4 hours',
          value: 'Opens 4:00, closes 18:00',
        },
        {
          label: 'Container services',
          value: '40 a week',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are the Georgia Ports Authority\'s own.',
      ],
    },
    travel: [
      [
        'Savannah is on the US East Coast, so an all-water service from China crosses the Pacific and passes through the Panama Canal. The Georgia Ports Authority lists its Asia services on its route maps, including the North Asia to US East Coast services.',
      ],
      [
        'To reach Savannah by sea, ships from China go through the Panama Canal. Garden City Terminal is one terminal with one operator, the Georgia Ports Authority, which says it handles 40 container services a week.',
      ],
    ],
    dutyNote: US_DUTY_NOTE,
    usFeeExample: {
      product: 'machinery, appliances and electronics',
      why: 'Machinery, appliances and electronics were the top import group through Savannah in fiscal year 2025, by the Georgia Ports Authority\'s own figures.',
      goodsValueUsd: 60000,
    },
    inland: {
      from: 'Garden City Terminal',
      source: 'osm',
      places: [
        {
          name: 'Jacksonville, Florida',
          km: 226,
        },
        {
          name: 'Atlanta',
          km: 402,
        },
        {
          name: 'Charlotte, North Carolina',
          km: 403,
        },
        {
          name: 'Memphis',
          km: 1013,
        },
      ],
    },
    faqs: [
      {
        question: 'Can my container go inland by train from Savannah?',
        answer: 'Yes. The Georgia Ports Authority says Garden City Terminal works 42 trains a week. Tell us the final city and we will price the rail leg.',
      },
      {
        question: 'Where is my container inspected if US customs picks it?',
        answer: 'On the terminal. The Georgia Ports Authority says US Customs and Border Protection runs a 300,000 square foot facility at Garden City Terminal.',
      },
      {
        question: 'What comes into Savannah most?',
        answer: 'By the Georgia Ports Authority\'s figures for fiscal year 2025, the top import group was machinery, appliances and electronics, with 415,685 TEU, followed by retail consumer goods and furniture.',
      },
    ],
    sources: [
      {
        label: 'Garden City Terminal | Port of Savannah | Georgia Ports Authority',
        url: 'https://gaports.com/facilities/port-of-savannah/garden-city-terminal/',
      },
      {
        label: 'Georgia Ports Authority: FY26 Annual Container Trade (PDF)',
        url: 'https://gaports.com/wp-content/uploads/2026/08/FY26-Annual-Container-Trade.pdf',
      },
      {
        label: 'Port of Savannah marks milestone: Harbor deepening complete - Georgia Ports Authority',
        url: 'https://gaports.com/press-releases/port-of-savannah-marks-milestone-harbor-deepening-complete/',
      },
      {
        label: 'Garden City Terminal Holiday Hours & Gate Closings - Georgia Ports Authority',
        url: 'https://gaports.com/facilities/port-of-savannah/garden-city-terminal/garden-city-terminal-holiday-hours-gate-closings/',
      },
      {
        label: 'Georgia Ports Authority: Port of Savannah Cont Svc Route Maps 12 5 25 (PDF)',
        url: 'https://gaports.com/wp-content/uploads/2025/12/Port-of-Savannah-Cont-Svc-Route-Maps_12-5-25.pdf',
      },
      {
        label: 'Georgia Ports Authority, FY25 Top 10 Commodity Groups: Imports',
        url: 'https://gaports.com/wp-content/uploads/2025/09/FY25-Top-10-Commodity-Groups-Imports.pdf',
      },
      ...US_FEE_SOURCES,
    ],
  },
  {
    id: 'livorno',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Italy', href: '/shipping-china-to-italy' },
    port: {
      name: 'Port of Livorno, Terminal Darsena Toscana',
      operator: 'Terminal Darsena Toscana (TDT)',
      facts: [
        {
          label: 'Containers at TDT in 2025',
          value: '450,281 TEU, up 18.1%',
        },
        {
          label: 'Terminal capacity',
          value: '900,000 TEU a year',
        },
        {
          label: 'Quay length',
          value: '1,430 metres',
        },
        {
          label: 'Water depth at the quay',
          value: '13 metres',
        },
        {
          label: 'Rail',
          value: 'Direct rail link to the Tyrrhenian main line since December 2016',
        },
        {
          label: 'Truck gate hours',
          value: 'Monday to Friday 7:30 to 19:30, Saturday 7:30 to 13:30',
        },
        {
          label: 'Border inspection',
          value: 'Inspection post and inspection area on the terminal',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'Figures are from Terminal Darsena Toscana. The 2025 count is for TDT, the main container terminal, not the whole port.',
      ],
    },
    travel: [
      [
        'Containers for Livorno arrive at Terminal Darsena Toscana (TDT), the port\'s main container terminal. It has 1,430 metres of quay and 13 metres of water. Whether your container comes on one ship or changes at a Mediterranean hub depends on the line.',
      ],
      [
        'Livorno\'s main container terminal, TDT, sits on the Tuscan coast with its own rail link to the main line. Some lines call direct from Asia and some move containers through a Mediterranean hub. Ask us which applies to the sailing we quote.',
      ],
    ],
    dutyExample: euDuty('upholstered seats with wooden frames', '9401 61 00 00', 35000, 0, 'Italian import VAT', 22,
      'Upholstered wooden-frame seats pay no EU duty, but Italian VAT is still due on the full value.'),
    inland: {
      from: 'Terminal Darsena Toscana, Livorno',
      source: 'osm',
      places: [
        {
          name: 'Pisa',
          km: 24,
        },
        {
          name: 'Florence',
          km: 89,
        },
        {
          name: 'Bologna',
          km: 194,
        },
        {
          name: 'Milan',
          km: 294,
        },
      ],
    },
    faqs: [
      {
        question: 'When can a truck collect a container at Livorno?',
        answer: 'Terminal Darsena Toscana gives its gate hours as Monday to Friday 7:30 to 19:30 and Saturday 7:30 to 13:30.',
      },
      {
        question: 'Can my container leave Livorno by train?',
        answer: 'Yes. TDT says it has had a direct link to the Tyrrhenian main line since December 2016. Tell us the final city and we will price the rail leg.',
      },
      {
        question: 'Which parts of Italy does Livorno serve?',
        answer: 'TDT says its hinterland is mainly Tuscany, Emilia-Romagna, Veneto, Marche and northern Lazio.',
      },
    ],
    sources: [
      {
        label: 'Tdt Livorno, +7,2% nel semestre per i container e nuovi investimenti in equipment di ultima generazione - TDT - Terminal Darsena Toscana',
        url: 'https://www.tdt.it/tdt-livorno-72-nel-semestre-per-i-container-e-nuovi-investimenti-in-equipment-di-ultima-generazione/',
      },
      {
        label: 'Chi siamo - TDT - Terminal Darsena Toscana',
        url: 'https://www.tdt.it/chi-siamo/',
      },
    ],
  },
  {
    id: 'ancona',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Italy', href: '/shipping-china-to-italy' },
    port: {
      name: 'Port of Ancona',
      operator: 'Central Adriatic Ports Authority',
      facts: [
        {
          label: 'Containers in 2025',
          value: '154,868 TEU, up 2%',
        },
        {
          label: 'Container cargo in 2025',
          value: '1,163,597 tonnes loaded and unloaded',
        },
        {
          label: 'European transport corridors',
          value: 'On the Scandinavian-Mediterranean and Baltic-Adriatic corridors',
        },
        {
          label: 'Motorway',
          value: 'Reached from the A14 (Ancona Nord and Ancona Sud exits)',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'Figures are the Central Adriatic Ports Authority\'s own.',
      ],
    },
    travel: [
      [
        'Ancona is on Italy\'s Adriatic coast, so a ship from China comes through the Suez Canal and up the Adriatic Sea. The port authority says its container traffic draws the main global container lines. Ask us whether the sailing we quote calls direct or changes ship at a hub.',
      ],
      [
        'Ships for Ancona come up the Adriatic after the Suez Canal. Whether your container stays on one ship or changes at a Mediterranean hub depends on the line, so ask us about the sailing we quote.',
      ],
    ],
    dutyExample: euDuty('toy sets', '9503 00 70 00', 30000, 4.7, 'Italian import VAT', 22,
      'Toy sets pay a 4.7% EU duty rate.'),
    inland: {
      from: 'the Port of Ancona',
      source: 'osm',
      places: [
        {
          name: 'Pesaro',
          km: 84,
        },
        {
          name: 'Perugia',
          km: 135,
        },
        {
          name: 'Bologna',
          km: 220,
        },
        {
          name: 'Rome',
          km: 307,
        },
      ],
    },
    faqs: [
      {
        question: 'How much container traffic does Ancona handle?',
        answer: 'The Central Adriatic Ports Authority reports 154,868 TEU in 2025, up 2% on 2024.',
      },
      {
        question: 'How do trucks reach the port of Ancona?',
        answer: 'The port authority says the port is reached from the A14 motorway, at the Ancona Nord and Ancona Sud exits.',
      },
    ],
    sources: [
      {
        label: 'Il 2025 annata positiva per il sistema portuale del mare Adriatico centrale - Autorità di Sistema Portuale del Mare Adriatico Centrale',
        url: 'https://www.porto.ancona.it/it/news/1958453',
      },
      {
        label: 'Porto di Ancona - Autorità di Sistema Portuale del Mare Adriatico Centrale',
        url: 'https://www.porto.ancona.it/it/page/porto-di-ancona',
      },
      {
        label: 'Come raggiungerci - Autorità di Sistema Portuale del Mare Adriatico Centrale',
        url: 'https://www.porto.ancona.it/it/page/come-raggiungerci-ancona',
      },
    ],
  },
  {
    id: 'naples',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Italy', href: '/shipping-china-to-italy' },
    port: {
      name: 'Port of Naples, Conateco terminal',
      operator: 'Conateco (Consorzio Napoletano Terminal Containers)',
      facts: [
        {
          label: 'Containers at the port in 2025',
          value: '638,585 TEU, down 1.2% on 2024',
        },
        {
          label: 'Main container terminal',
          value: 'Conateco, the largest in the port',
        },
        {
          label: 'Deepest berths',
          value: '295 metres long, 13.3 metres of water',
        },
        {
          label: 'Customs inspection',
          value: 'A 5,000 square metre inspection area with X-ray scanners',
        },
        {
          label: 'Truck gate hours',
          value: 'Monday to Friday 6:30 to 20:30, Saturday 7:00 to 13:00',
        },
        {
          label: 'Rail inside the port',
          value: '1.8 km of track',
        },
        {
          label: 'Tracking',
          value: 'Online container tracking on the terminal\'s site',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'The 2025 count is from the Central Tyrrhenian Sea Port Authority. Terminal facts are Conateco\'s own.',
      ],
    },
    travel: [
      [
        'Containers for Naples are handled at Conateco, the largest terminal in the port. Its deepest berths are 295 metres long with 13.3 metres of water. Conateco says some lines also use it as a hub to move containers between ships.',
      ],
      [
        'Naples is on Italy\'s Tyrrhenian coast. Its largest container terminal, Conateco, has a 5,000 square metre customs inspection area with X-ray scanners. Whether your container arrives direct or changes ship on the way depends on the line.',
      ],
    ],
    dutyExample: euDuty('hairdryers', '8516 31 00 00', 30000, 2.7, 'Italian import VAT', 22,
      'Hairdryers pay a 2.7% EU duty rate.'),
    inland: {
      from: 'the Port of Naples',
      source: 'osm',
      places: [
        {
          name: 'Caserta',
          km: 34,
        },
        {
          name: 'Salerno',
          km: 53,
        },
        {
          name: 'Rome',
          km: 220,
        },
        {
          name: 'Bari',
          km: 262,
        },
      ],
    },
    faqs: [
      {
        question: 'When can a truck collect a container in Naples?',
        answer: 'Conateco gives its gate hours as Monday to Friday 6:30 to 20:30 and Saturday 7:00 to 13:00. It is closed on Sundays.',
      },
      {
        question: 'Can I track my container at the Naples terminal?',
        answer: 'Yes. Conateco has an online tracking page where you can look up an import or export container by its number.',
      },
      {
        question: 'Where are containers inspected in Naples?',
        answer: 'At the terminal. Conateco has a reserved 5,000 square metre inspection area with X-ray scanners.',
      },
    ],
    sources: [
      {
        label: 'Conateco: 12 Bollettino statistico 12 mesi 2025 (PDF)',
        url: 'https://adsptirrenocentrale.it/wp-content/uploads/2026/03/12_Bollettino-statistico-12-mesi-2025.pdf',
      },
      {
        label: 'Chi Siamo - CO.NA.TE.CO. S.p.A.',
        url: 'https://www.conateco.it/chi-siamo/',
      },
      {
        label: 'Il Terminal - CO.NA.TE.CO. S.p.A.',
        url: 'https://www.conateco.it/il-terminal/',
      },
      {
        label: 'Servizi - CO.NA.TE.CO. S.p.A.',
        url: 'https://www.conateco.it/servizi/',
      },
      {
        label: 'I PORTI DELL\'ADSP ~ ADSP Mar Tirreno Centrale',
        url: 'https://adsptirrenocentrale.it/adsp/porto-di-napoli/',
      },
      {
        label: 'Tracking Container - CO.NA.TE.CO. S.p.A.',
        url: 'https://www.conateco.it/tracking-container/',
      },
    ],
  },
  {
    id: 'ravenna',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Italy', href: '/shipping-china-to-italy' },
    port: {
      name: 'Port of Ravenna, Terminal Container Ravenna',
      operator: 'Terminal Container Ravenna (TCR)',
      facts: [
        {
          label: 'Terminal capacity',
          value: '380,000 TEU a year',
        },
        {
          label: 'Quay length',
          value: '670 metres',
        },
        {
          label: 'Water depth',
          value: '11.5 metres',
        },
        {
          label: 'Rail at the terminal',
          value: '5 tracks of 420 metres',
        },
        {
          label: 'Trains',
          value: 'To Melzo and Segrate (Milan) and Marzaglia (Modena)',
        },
        {
          label: 'Where its traffic comes from',
          value: 'About 60% Mediterranean ports, 20% Asia',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are Terminal Container Ravenna\'s own.',
      ],
    },
    travel: [
      [
        'Ravenna is on the northern Adriatic. Its container terminal, TCR, has 11.5 metres of water, and TCR says 60% of its traffic is with other Mediterranean ports. TCR also lists shuttle ships to Trieste and Gioia Tauro, a big transshipment hub. So a container from China often changes ship in the Mediterranean on the way.',
      ],
      [
        'Most of what Terminal Container Ravenna handles comes from other Mediterranean ports, by its own figures (about 60%, with Asia about 20%). Your container may change ship at a hub such as Gioia Tauro, which TCR links by shuttle. Ask us which way the sailing we quote goes.',
      ],
    ],
    dutyExample: euDuty('exercise machines with adjustable resistance', '9506 91 10 00', 40000, 2.7, 'Italian import VAT', 22,
      'Exercise machines pay a 2.7% EU duty rate.'),
    inland: {
      from: 'the Port of Ravenna',
      source: 'osm',
      places: [
        {
          name: 'Forlì',
          km: 42,
        },
        {
          name: 'Ferrara',
          km: 80,
        },
        {
          name: 'Bologna',
          km: 88,
        },
        {
          name: 'Padua',
          km: 158,
        },
      ],
    },
    faqs: [
      {
        question: 'Can my container go on by train from Ravenna?',
        answer: 'Yes. TCR has five tracks of 420 metres at the terminal and lists trains to Melzo and Segrate near Milan and to Marzaglia near Modena.',
      },
      {
        question: 'Why might a container for Ravenna change ships?',
        answer: 'Ravenna has 11.5 metres of water at its container terminal, and TCR links it by shuttle with Gioia Tauro, a large hub.',
      },
    ],
    sources: [
      {
        label: 'T.C.R. Terminal Container Ravenna',
        url: 'https://www.tcravenna.it/en/',
      },
      {
        label: 'connections - TCRavenna',
        url: 'https://www.tcravenna.it/en/connections/',
      },
    ],
  },
  {
    id: 'trieste',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Italy', href: '/shipping-china-to-italy' },
    port: {
      name: 'Port of Trieste, Trieste Marine Terminal',
      operator: 'Trieste Marine Terminal (TMT)',
      facts: [
        {
          label: 'Containers at TMT in 2025',
          value: '522,661 TEU (730,451 in 2024)',
        },
        {
          label: 'Quay and water depth',
          value: '770 metres of quay, 18 metres of natural depth, 7 large cranes',
        },
        {
          label: 'Direct call from Asia',
          value: 'MSC\'s Dragon service, first arrival due 10 April 2026',
        },
        {
          label: 'Rail inside the terminal',
          value: '5 tracks of 600 metres',
        },
        {
          label: 'Truck gate hours',
          value: 'Monday to Friday 7:00 to 21:00, Saturday 7:00 to 13:00',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are Trieste Marine Terminal\'s own.',
      ],
    },
    travel: [
      [
        'Trieste is at the top of the Adriatic, with 18 metres of natural depth at Trieste Marine Terminal. TMT lists weekly direct services from the Far East, and says MSC\'s Dragon service from Asia calls there direct.',
      ],
      [
        'Ships from China reach Trieste through the Suez Canal and up the Adriatic. Trieste Marine Terminal says it has weekly direct services to and from the Far East, plus connections through the main Mediterranean hubs.',
      ],
    ],
    dutyExample: euDuty('food mixers and blenders', '8509 40 00 00', 30000, 2.2, 'Italian import VAT', 22,
      'Kitchen mixers pay a 2.2% EU duty rate.'),
    inland: {
      from: 'Trieste Marine Terminal',
      source: 'osm',
      places: [
        {
          name: 'Udine',
          km: 87,
        },
        {
          name: 'Ljubljana, Slovenia',
          km: 103,
        },
        {
          name: 'Venice',
          km: 174,
        },
        {
          name: 'Vienna, Austria',
          km: 481,
        },
      ],
    },
    faqs: [
      {
        question: 'Can my container leave Trieste by train?',
        answer: 'Yes. Trieste Marine Terminal has a rail park inside the terminal with five tracks of 600 metres. Tell us the final city and we will price it.',
      },
      {
        question: 'When can a truck collect a container in Trieste?',
        answer: 'TMT gives its truck gate hours as Monday to Friday 7:00 to 21:00 and Saturday 7:00 to 13:00. It is closed on Sundays and holidays.',
      },
    ],
    sources: [
      {
        label: 'Trieste Marine Terminal: Statistics   History 2004 2025 1 (PDF)',
        url: 'https://www.trieste-marine-terminal.com/sites/default/files/attachment/Statistics%20-%20History%202004-2025_1.pdf',
      },
      {
        label: 'Berths and cranes | Trieste Marine Terminal',
        url: 'https://www.trieste-marine-terminal.com/en/content/berths-and-cranes',
      },
      {
        label: 'New Direct Call at TMT for the Asia–Mediterranean Trade | Trieste Marine Terminal',
        url: 'https://www.trieste-marine-terminal.com/en/news/new-direct-call-tmt-asia%E2%80%93mediterranean-trade',
      },
      {
        label: 'Rail Connections | Trieste Marine Terminal',
        url: 'https://www.trieste-marine-terminal.com/en/rail-connections',
      },
      {
        label: 'Personnel and Working Time | Trieste Marine Terminal',
        url: 'https://www.trieste-marine-terminal.com/en/personnel-and-working-time',
      },
      {
        label: 'Maritime Services | Trieste Marine Terminal',
        url: 'https://www.trieste-marine-terminal.com/en/maritime-services',
      },
    ],
  },
  {
    id: 'gothenburg',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Sweden', href: '/shipping-china-to-sweden' },
    port: {
      name: 'Port of Gothenburg, APM Terminals Gothenburg',
      operator: 'APM Terminals Gothenburg (for the Gothenburg Port Authority)',
      facts: [
        {
          label: 'Containers in 2025',
          value: '934,000 TEU, up 4%',
        },
        {
          label: 'January to September 2026',
          value: '698,000 TEU',
        },
        {
          label: 'Quay and water depth',
          value: '1.8 km of quay, 14.2 metres draft',
        },
        {
          label: 'Largest ships',
          value: 'The only terminal in Sweden for ships of 24,000 TEU and more',
        },
        {
          label: 'Free storage',
          value: '3 working days for imports',
        },
        {
          label: 'Rail',
          value: 'More than 70 rail shuttles a week to Swedish logistics hubs',
        },
        {
          label: 'Open',
          value: '365 days a year, free of tides and ice',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'Figures are from the Port of Gothenburg and APM Terminals Gothenburg.',
      ],
    },
    travel: [
      [
        'Ships from China can call at Gothenburg directly. The port lists direct services to China and other parts of Asia, and APM Terminals says it is the only terminal in Sweden that can take ships of 24,000 TEU and more.',
        'Not every line sails direct. The port also runs daily feeder ships to the big hubs on the continent, so some containers change ship on the way.',
      ],
      [
        'The Port of Gothenburg lists direct services to China, and its container terminal has 14.2 metres of water. Other lines unload at a continental hub and send the container on by one of the daily feeder ships. Ask us which applies to the sailing we quote.',
      ],
    ],
    dutyExample: euDuty('mattresses', '9404 29 90 00', 25000, 3.7, 'Swedish import VAT', 25,
      'Mattresses are bulky for their value, so the freight per item matters. They pay a 3.7% EU duty rate.'),
    inland: {
      from: 'APM Terminals Gothenburg',
      source: 'osm',
      places: [
        {
          name: 'Borås',
          km: 75,
        },
        {
          name: 'Jönköping',
          km: 157,
        },
        {
          name: 'Malmö',
          km: 280,
        },
        {
          name: 'Oslo, Norway',
          km: 302,
        },
      ],
    },
    faqs: [
      {
        question: 'How long can an import container stay at the Gothenburg terminal for free?',
        answer: 'APM Terminals Gothenburg gives import containers 3 working days free of port storage. After that, storage is charged.',
      },
      {
        question: 'Can my container go on by train from Gothenburg?',
        answer: 'Yes. APM Terminals says more than 70 rail shuttles a week link the terminal with Sweden\'s main logistics hubs.',
      },
      {
        question: 'Is Gothenburg open in winter?',
        answer: 'Yes. APM Terminals says the terminal is free of tides and ice and works 365 days a year.',
      },
    ],
    sources: [
      {
        label: 'APM Terminals Gothenburg: sustainability report 2025 eng (PDF)',
        url: 'https://www.portofgothenburg.com/globalassets/dokument/publikationer/engelska/sustainability_report_2025_eng.pdf',
      },
      {
        label: 'Port of Gothenburg cargo volumes Jan–Sep 2026: 5 insights',
        url: 'https://www.portofgothenburg.com/about/articles/5-insights-into-cargo-volumes/',
      },
      {
        label: 'Our Terminal - APM Terminals',
        url: 'https://www.apmterminals.com/en/gothenburg/about/our-terminal',
      },
      {
        label: 'Gothenburg - APM Terminals',
        url: 'https://www.apmterminals.com/en/gothenburg',
      },
      {
        label: 'Scandinavia’s biggest container port.',
        url: 'https://www.portofgothenburg.com/services/cargo/container/',
      },
    ],
  },
  {
    id: 'helsingborg',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Sweden', href: '/shipping-china-to-sweden' },
    port: {
      name: 'Port of Helsingborg, West Harbour',
      operator: 'Helsingborgs Hamn AB',
      facts: [
        {
          label: 'Containers by sea in 2025',
          value: '265,000 TEU (247,000 in 2024)',
        },
        {
          label: 'Rank in Sweden',
          value: 'Second-largest container port',
        },
        {
          label: 'Container terminal',
          value: 'West Harbour, with three container cranes and a mobile crane',
        },
        {
          label: 'Container gate',
          value: 'Monday to Friday 6:00 to 20:00, for pre-booked collections',
        },
        {
          label: 'Rail',
          value: 'Intermodal terminal next to the container harbour, with daily rail shuttles',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are the port\'s own.',
      ],
    },
    travel: [
      [
        'Helsingborg is reached by feeder ship. The port says goods move through shipping lines that run "via Europe\'s large logistics hubs". Its line list shows container services to Hamburg, Bremerhaven, Rotterdam and Antwerp. A feeder is a smaller ship that carries containers between a big hub port and a smaller one.',
      ],
      [
        'Helsingborg\'s line list has no direct service from Asia. The container is unloaded at a hub such as Hamburg, Bremerhaven, Rotterdam or Antwerp, the ports on Helsingborg\'s own line list, and comes up on a feeder ship.',
      ],
    ],
    dutyExample: euDuty('toothbrushes', '9603 21 00 00', 20000, 3.7, 'Swedish import VAT', 25,
      'Toothbrushes pay a 3.7% EU duty rate.'),
    inland: {
      from: 'the Port of Helsingborg',
      source: 'osm',
      places: [
        {
          name: 'Lund',
          km: 56,
        },
        {
          name: 'Malmö',
          km: 65,
        },
        {
          name: 'Gothenburg',
          km: 216,
        },
        {
          name: 'Jönköping',
          km: 235,
        },
      ],
    },
    faqs: [
      {
        question: 'When can a truck collect a container in Helsingborg?',
        answer: 'The port\'s container gate is open Monday to Friday 6:00 to 20:00 for pick-ups and drop-offs booked in advance.',
      },
      {
        question: 'Can my container go on by train from Helsingborg?',
        answer: 'Yes. The port has an intermodal terminal next to the container harbour with daily rail shuttles.',
      },
    ],
    sources: [
      {
        label: 'Helsingborgs Hamn AB: Arsredovisning Helsingborgs Hamn 2025 (PDF)',
        url: 'https://www.port.helsingborg.se/wp-content/uploads/2026/03/Arsredovisning-Helsingborgs-Hamn-2025.pdf',
      },
      {
        label: 'Våra hamnar - Helsingborgs Hamn',
        url: 'https://www.port.helsingborg.se/sjotjanster/vara-hamnar/',
      },
      {
        label: 'Centralgate - Helsingborgs Hamn',
        url: 'https://www.port.helsingborg.se/landtjanster/centralgate/',
      },
      {
        label: 'Kombiterminal - Helsingborgs Hamn',
        url: 'https://www.port.helsingborg.se/landtjanster/kombiterminal/',
      },
      {
        label: 'Om hamnen - Helsingborgs Hamn',
        url: 'https://www.port.helsingborg.se/om-hamnen/',
      },
      {
        label: 'Port of Helsingborg, destinations and shipping lines',
        url: 'https://www.port.helsingborg.se/sjotjanster/destinationer/',
      },
    ],
  },
  {
    id: 'halmstad',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Sweden', href: '/shipping-china-to-sweden' },
    port: {
      name: 'Port of Halmstad, Kattegatt terminal',
      operator: 'Hallands Hamnar',
      facts: [
        {
          label: 'Container terminal',
          value: 'Kattegatt terminal, over 100,000 square metres',
        },
        {
          label: 'Quay depth',
          value: '6.5 to 11 metres; ships up to 200 metres long',
        },
        {
          label: 'Rail at the terminal',
          value: '600 metres of track on two lines',
        },
        {
          label: 'Container growth in 2025',
          value: 'Up 12%, with a new CMA CGM line and MSC and Maersk flows',
        },
        {
          label: 'Warehousing',
          value: '21,000 square metres indoors, with container loading and unloading',
        },
        {
          label: 'Sea access',
          value: 'Ice-free, with a short fairway of three nautical miles',
        },
      ],
      notes: [
        'All figures are Hallands Hamnar\'s own.',
      ],
    },
    travel: [
      [
        'Halmstad is a feeder port. Hallands Hamnar says it has regular feeder traffic to the big transshipment hubs on the continent, Bremerhaven and Hamburg. A feeder is a smaller ship that carries containers between a big hub port and a smaller one.',
      ],
      [
        'The last leg into Halmstad is on a feeder ship from Bremerhaven or Hamburg, the hubs Hallands Hamnar names. The port is ice-free and only three nautical miles from open sea.',
      ],
    ],
    dutyExample: euDuty('party and carnival goods (not Christmas)', '9505 90 00 00', 20000, 2.7, 'Swedish import VAT', 25,
      'Party goods pay a 2.7% EU duty rate.'),
    inland: {
      from: 'the Port of Halmstad',
      source: 'osm',
      places: [
        {
          name: 'Värnamo',
          km: 116,
        },
        {
          name: 'Växjö',
          km: 132,
        },
        {
          name: 'Gothenburg',
          km: 141,
        },
        {
          name: 'Jönköping',
          km: 182,
        },
      ],
    },
    faqs: [
      {
        question: 'Is Halmstad open in winter?',
        answer: 'Yes. Hallands Hamnar says the port is ice-free, with a short fairway of three nautical miles.',
      },
      {
        question: 'Can I have a container unpacked and stored at Halmstad?',
        answer: 'Yes. Hallands Hamnar has 21,000 square metres of indoor warehouse space and offers container loading and unloading.',
      },
    ],
    sources: [
      {
        label: 'Terminalinformation - Hallands Hamnar',
        url: 'https://hallandshamnar.se/vara-hamnar/halmstads-hamn/terminalinformation.html',
      },
      {
        label: 'Hallands Hamnar levererar stabila volymer i en orolig omvärld - Hallands Hamnar',
        url: 'https://hallandshamnar.se/nyheter--press/nyheter/2026-01-27-hallands-hamnar-levererar-stabila-volymer-i-en-orolig-omvarld.html',
      },
      {
        label: 'Sjötransport - Hallands Hamnar',
        url: 'https://hallandshamnar.se/vara-tjanster/sjotransport.html',
      },
    ],
  },
  {
    id: 'gaevle',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Sweden', href: '/shipping-china-to-sweden' },
    port: {
      name: 'Port of Gävle, container terminal',
      operator: 'Yilport Gävle (for Gävle Hamn)',
      facts: [
        {
          label: 'Rank',
          value: 'Largest container terminal on Sweden\'s east coast',
        },
        {
          label: 'Containers a year',
          value: 'About 200,000 TEU; capacity 600,000 TEU',
        },
        {
          label: 'First half of 2026',
          value: 'Container volume up 16%',
        },
        {
          label: 'Water depth',
          value: 'Two quays, 12.2 and 10.0 metres permitted draft',
        },
        {
          label: 'Rail',
          value: 'Rail shuttle to Stockholm Nord in Rosersberg',
        },
        {
          label: 'Terminal and cranes',
          value: '156,000 square metres, three Super-post Panamax cranes',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are Gävle Hamn\'s own.',
      ],
    },
    travel: [
      [
        'Gävle is a feeder port. Gävle Hamn says containers are handled year round by feeder ships that run to and from larger European ports, where cargo is moved on. A feeder is a smaller ship that carries containers between a big hub port and a smaller one.',
      ],
      [
        'Containers reach Gävle on feeder ships from larger European ports, as the port itself describes. It is the largest container terminal on Sweden\'s east coast, with a rail shuttle to Stockholm.',
      ],
    ],
    dutyExample: euDuty('men\'s cotton jumpers', '6110 20 91 00', 50000, 12, 'Swedish import VAT', 25,
      'Cotton jumpers pay 12% EU duty, so duty adds more than the freight here.'),
    inland: {
      from: 'the Port of Gävle',
      source: 'osm',
      places: [
        {
          name: 'Uppsala',
          km: 114,
        },
        {
          name: 'Borlänge',
          km: 119,
        },
        {
          name: 'Stockholm',
          km: 179,
        },
        {
          name: 'Sundsvall',
          km: 213,
        },
      ],
    },
    faqs: [
      {
        question: 'Can my container go from Gävle to Stockholm by train?',
        answer: 'Yes. Gävle Hamn says a rail shuttle links the container terminal with Stockholm Nord in Rosersberg.',
      },
      {
        question: 'Why ship to Gävle instead of Gothenburg?',
        answer: 'It puts the container on Sweden\'s east coast, closer to Uppsala, Stockholm and the north. Gävle says it is the largest container terminal on that coast. Ask us to price both.',
      },
    ],
    sources: [
      {
        label: 'Service och terminaler - Gävle Hamn',
        url: 'https://gavlehamn.se/service-och-terminaler/',
      },
      {
        label: 'Gävle Hamn - Mellansveriges logistiknav',
        url: 'https://gavlehamn.se/en/home/',
      },
    ],
  },
  {
    id: 'melnik',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the Czech Republic', href: '/shipping-china-to-czech-republic' },
    port: {
      name: 'Terminal Mělník',
      operator: 'Rail Cargo Operator CSKD (ÖBB Rail Cargo Group)',
      facts: [
        {
          label: 'Terminal',
          value: 'Rail Cargo Group\'s own terminal in Mělník, its main one in the Czech Republic',
        },
        {
          label: 'Seaports it connects to',
          value: 'Hamburg and Bremerhaven, by rail',
        },
        {
          label: 'Trains',
          value: 'Nine to eleven departures a week to and from Hamburg and Bremerhaven',
        },
        {
          label: 'Terminal size',
          value: '33,000 square metres, 4 container stackers, room for 5,600 TEU',
        },
        {
          label: 'Onward delivery',
          value: 'By truck to northern, southern and central Bohemia',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are ÖBB Rail Cargo Group\'s own.',
      ],
    },
    travel: [
      [
        'Mělník is inland, north of Prague, so the trip has two parts. The container sails from China to Hamburg or Bremerhaven, then goes on by train. ÖBB Rail Cargo Group says it runs nine to eleven trains a week between those ports and its terminal in Mělník.',
      ],
      [
        'There is no sea route to Mělník. Your container is unloaded at Hamburg or Bremerhaven and finishes the trip by rail to the Rail Cargo Group terminal, which the operator says has nine to eleven departures a week to and from those two ports.',
      ],
    ],
    dutyExample: euDuty('women\'s plastic shoes', '6402 99 98 00', 30000, 16.8, 'Czech import VAT', 21,
      'Footwear pays a high EU duty rate, 16.8% on this code, so duty is a big part of the landed cost.'),
    inland: {
      from: 'Terminal Mělník',
      source: 'osm',
      places: [
        {
          name: 'Mladá Boleslav',
          km: 42,
        },
        {
          name: 'Prague',
          km: 48,
        },
        {
          name: 'Ústí nad Labem',
          km: 70,
        },
        {
          name: 'Liberec',
          km: 91,
        },
      ],
    },
    faqs: [
      {
        question: 'How often do trains run from Hamburg to Mělník?',
        answer: 'ÖBB Rail Cargo Group says it runs nine to eleven departures a week between its Mělník terminal and the ports of Hamburg and Bremerhaven.',
      },
      {
        question: 'Can the container be delivered from Mělník to my warehouse?',
        answer: 'Yes. The terminal operator offers truck delivery to northern, southern and central Bohemia. Give us the address and we will include it.',
      },
    ],
    sources: [
      {
        label: 'Mělník - Rail Cargo Group',
        url: 'https://www.railcargo.com/en/services/intermodal-logistics/terminals/standorte/melnik',
      },
      {
        label: '20 years of TransFER Melnik–Hamburg/Bremerhaven - Rail Cargo Group',
        url: 'https://www.railcargo.com/en/news/20-years-of-transfer-melnik-hamburg-bremerhaven',
      },
    ],
  },
  {
    id: 'awt-paskov',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the Czech Republic', href: '/shipping-china-to-czech-republic' },
    port: {
      name: 'Terminal Paskov',
      operator: 'PKP CARGO INTERNATIONAL (formerly AWT)',
      facts: [
        {
          label: 'Operator',
          value: 'PKP CARGO INTERNATIONAL; AWT was renamed in 2019',
        },
        {
          label: 'Terminal size',
          value: '70,000 square metres, room for 4,800 TEU, 5 rail tracks',
        },
        {
          label: 'Customs',
          value: 'Customs office on the terminal',
        },
        {
          label: 'Location',
          value: 'Near Ostrava, close to the Polish and Slovak borders and the motorway',
        },
        {
          label: 'Dangerous goods',
          value: 'No explosives (class 1) or radioactive goods (class 7)',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'Terminal figures are PKP CARGO INTERNATIONAL\'s own. The Gdańsk rail link is from ÖBB Rail Cargo Group\'s factsheet for its Paskov to Gdańsk train.',
      ],
    },
    travel: [
      [
        'Paskov is inland, near Ostrava, so the trip has two parts. The container sails from China to a seaport and goes on by train. ÖBB Rail Cargo Group runs a train between Paskov and Gdańsk in Poland, so the sea distance below is to Gdańsk.',
      ],
      [
        'There is no sea route to Paskov. The container is unloaded at a Baltic or North Sea port and taken on by rail. One link is ÖBB Rail Cargo Group\'s Gdańsk to Paskov train. Ask us which port and train the shipment we quote uses.',
      ],
    ],
    dutyExample: euDuty('cordless electric drills', '8467 21 10 00', 40000, 2.7, 'Czech import VAT', 21,
      'Cordless drills pay a 2.7% EU duty rate.'),
    inland: {
      from: 'Terminal Paskov',
      source: 'osm',
      places: [
        {
          name: 'Ostrava',
          km: 15,
        },
        {
          name: 'Žilina, Slovakia',
          km: 97,
        },
        {
          name: 'Olomouc',
          km: 98,
        },
        {
          name: 'Brno',
          km: 171,
        },
      ],
    },
    faqs: [
      {
        question: 'Is there a customs office at Paskov?',
        answer: 'Yes. PKP CARGO INTERNATIONAL says there is a customs office on the terminal premises.',
      },
      {
        question: 'Can dangerous goods go through Paskov?',
        answer: 'Some can. The terminal says it does not accept class 1 (explosives), class 7 (radioactive) or high-consequence dangerous goods. Tell us the class and we will check.',
      },
    ],
    sources: [
      {
        label: 'Milníky PKP CARGO INTERNATIONAL a.s. | PKP CARGO INTERNATIONAL | Komplexní dopravní a logistické služby',
        url: 'https://www.pkpcargointernational.com/kdo-jsme/historie/advanced-world-transport-a-s/milniky-pkp-cargo-international',
      },
      {
        label: 'Intermodal transport | PKP CARGO INTERNATIONAL | Comprehensive transport and logistics services',
        url: 'https://www.pkpcargointernational.com/en/what-are-we-doing/intermodal-transport',
      },
    ],
  },
  {
    id: 'oslo',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Norway', href: '/shipping-china-to-norway' },
    port: {
      name: 'Port of Oslo, Yilport Oslo container terminal',
      operator: 'Yilport Oslo (for Oslo Havn)',
      facts: [
        {
          label: 'Containers in 2025',
          value: '262,530 TEU, up 10%',
        },
        {
          label: 'Quay and depth',
          value: '665 metres of quay, 12 metres draft',
        },
        {
          label: 'Terminal capacity',
          value: '600,000 TEU a year',
        },
        {
          label: 'Where the goods go',
          value: 'About 80% to Oslo and the region around it',
        },
        {
          label: 'Depot hours',
          value: 'Monday to Thursday 6:00 to 17:00, Friday 6:00 to 15:45 (2026 tariff)',
        },
        {
          label: 'Lines calling every week',
          value: 'Samskip, Viasea, MSC, Unifeeder and NCL',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'Figures are from Oslo Havn and Yilport Oslo.',
      ],
    },
    travel: [
      [
        'Oslo is reached by short-sea ships from other European ports. The port says it has weekly calls from container lines sailing between Oslo and ports across Europe, including Samskip, MSC and Unifeeder. Your container leaves China on a large ship, is unloaded at a hub, and finishes the trip on one of these smaller ships.',
      ],
      [
        'The port names no direct services from Asia. The container changes at a European hub and comes in on one of the weekly lines the port names, such as Unifeeder, MSC or Samskip.',
      ],
    ],
    dutyExample: noDuty('cotton bed linen', '63.02.3100', 30000, 10.7,
      'Textiles are one of the few goods groups that pay duty in Norway: 10.7% on cotton bed linen.'),
    inland: {
      from: 'Yilport Oslo, Sjursøya',
      source: 'osm',
      places: [
        {
          name: 'Lillestrøm',
          km: 33,
        },
        {
          name: 'Drammen',
          km: 57,
        },
        {
          name: 'Hamar',
          km: 154,
        },
        {
          name: 'Gjøvik',
          km: 173,
        },
      ],
    },
    faqs: [
      {
        question: 'Which lines bring containers into Oslo?',
        answer: 'The port lists weekly calls by Samskip, Viasea, MSC, Unifeeder and NCL.',
      },
      {
        question: 'When is the Oslo container depot open?',
        answer: 'Yilport Oslo\'s 2026 tariff gives depot hours as Monday to Thursday 6:00 to 17:00 and Friday 6:00 to 15:45.',
      },
    ],
    sources: [
      {
        label: 'Oslo Havn - A Stable and Future-Oriented Port',
        url: 'https://www.oslohavn.no/en/news/a-stable-and-future-oriented-port/',
      },
      {
        label: 'Oslo - Norway - Nordic Terminals',
        url: 'https://www.yilport.com/en/ports/default/Oslo/86/0/0',
      },
      {
        label: 'Oslo Havn - Container',
        url: 'https://www.oslohavn.no/en/menu/gods/container/',
      },
      {
        label: 'Yilport Oslo: 2026 yilport oslo container terminal general tariff (PDF)',
        url: 'https://www.yilport.com/en/images/PartDocuments/2026_yilport_oslo_container_terminal_general_tariff.pdf',
      },
      {
        label: 'Oslo Havn - Liner services',
        url: 'https://www.oslohavn.no/en/menu/gods/regular-routes/',
      },
      NO_DUTY_PRINCIPLE_SOURCE,
    ],
  },
  {
    id: 'drammen',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Norway', href: '/shipping-china-to-norway' },
    port: {
      name: 'Port of Drammen, Kattegat quay',
      operator: 'Drammen Havn',
      facts: [
        {
          label: 'Container quay',
          value: 'Kattegat quay, 340 metres long, 10 metres deep',
        },
        {
          label: 'Container cranes',
          value: 'Two mobile cranes, lifting 104 and 144 tonnes',
        },
        {
          label: 'Rail',
          value: 'Tracks run to the quay edge, so containers can go straight from ship to train',
        },
        {
          label: 'Rail links',
          value: 'Seven tracks 200 metres from the quay, connecting to Narvik, Bodø, Trondheim, Bergen and Stavanger',
        },
        {
          label: 'Customs',
          value: 'Norwegian Customs office at the port, weekdays 8:00 to 15:30',
        },
        {
          label: 'Free storage on the quay',
          value: 'Up to 48 hours after unloading (2026 tariff)',
        },
      ],
      notes: [
        'All figures are Drammen Havn\'s own.',
      ],
    },
    travel: [
      [
        'Drammen is reached on short-sea ships from the big European ports. Drammen Havn says it has access to all the major European ports. Your container leaves China on a large ship and changes at a hub for the last leg.',
      ],
      [
        'Ships from China unload at a big European port, and a smaller ship brings the container into Drammen. The port\'s rail tracks run to the quay edge, which is why many containers here go on by train.',
      ],
    ],
    dutyExample: noDuty('LED lamps', '85.39.5200', 30000, 0,
      'Most goods enter Norway free of customs duty; Norwegian Customs says duty applies mainly to clothing, textiles and food. VAT at 25% is the main tax.'),
    inland: {
      from: 'the Port of Drammen',
      source: 'osm',
      places: [
        {
          name: 'Oslo',
          km: 41,
        },
        {
          name: 'Kongsberg',
          km: 52,
        },
        {
          name: 'Tønsberg',
          km: 52,
        },
        {
          name: 'Hønefoss',
          km: 60,
        },
      ],
    },
    faqs: [
      {
        question: 'Can my container go from Drammen by train?',
        answer: 'Yes. Drammen Havn says its tracks run to the quay edge and that seven tracks 200 metres from the quay connect to Narvik, Bodø, Trondheim, Bergen and Stavanger.',
      },
      {
        question: 'How long can a container stay on the quay in Drammen for free?',
        answer: 'Drammen Havn\'s 2026 tariff says the goods charge covers storage on the quay for up to 48 hours after unloading.',
      },
    ],
    sources: [
      {
        label: 'Fasiliteter – Drammen Havn',
        url: 'https://drammenhavn.no/tjenester/fasiliteter/',
      },
      {
        label: 'Togtransport – Drammen Havn',
        url: 'https://drammenhavn.no/tjenester/togtransport/',
      },
      {
        label: 'Her får du en grønn logistikk som kombinerer sjø og jernbane',
        url: 'https://drammenhavn.no/nyheter-arkiv/her-far-du-en-gronn-og-baerekraftig-logistikk-som-kombinerer-sjo-og-jernbane/',
      },
      {
        label: 'Offentlige tjenester – Drammen Havn',
        url: 'https://drammenhavn.no/tjenester/offentlige-tjenester/',
      },
      {
        label: 'Drammen Havn: Port of Drammen Tariffs Terms Conditions 2026 (PDF)',
        url: 'https://drammenhavn.no/wp-content/uploads/2025/02/Port-of-Drammen-Tariffs-Terms-Conditions-2026.pdf',
      },
      NO_DUTY_PRINCIPLE_SOURCE,
    ],
  },
  {
    id: 'moss',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Norway', href: '/shipping-china-to-norway' },
    port: {
      name: 'Port of Moss',
      operator: 'Westport Moss (for Moss Havn)',
      facts: [
        {
          label: 'Terminal operator',
          value: 'Westport, since 1 January 2025',
        },
        {
          label: 'Quay and depth',
          value: '670 metres of quay, 10 metres deep',
        },
        {
          label: 'MSC',
          value: 'MSC has set up a regular call at Moss',
        },
        {
          label: 'Inland port',
          value: 'Norway\'s first inland container port, opened 2018 near the E6',
        },
        {
          label: 'Terminal working hours',
          value: 'Monday to Friday 7:00 to 15:00',
        },
        {
          label: 'Electric handling',
          value: 'All container handling electric since 2025',
        },
      ],
      notes: [
        'All figures are Moss Havn\'s own.',
      ],
    },
    travel: [
      [
        'Moss is on the east side of the Oslofjord. The port says it has direct calls from Europe, and that MSC has set up a regular call. Your container leaves China on a large ship, changes at a European hub, and comes into Moss on the shorter leg.',
      ],
      [
        'Containers reach Moss from European hub ports. Moss Havn says MSC now calls regularly, so goods that used to come in through other Norwegian ports can come straight to Moss.',
      ],
    ],
    dutyExample: noDuty('fully automatic washing machines', '84.50.1100', 40000, 0,
      'Most goods enter Norway free of customs duty; Norwegian Customs says duty applies mainly to clothing, textiles and food. VAT at 25% is the main tax.'),
    inland: {
      from: 'the Port of Moss',
      source: 'osm',
      places: [
        {
          name: 'Vestby',
          km: 22,
        },
        {
          name: 'Fredrikstad',
          km: 39,
        },
        {
          name: 'Sarpsborg',
          km: 53,
        },
        {
          name: 'Oslo',
          km: 67,
        },
      ],
    },
    faqs: [
      {
        question: 'Can a container be stored near Moss for longer?',
        answer: 'Yes. Moss Havn opened Norway\'s first inland container port in 2018, in Moss Næringspark near the E6, for longer storage.',
      },
      {
        question: 'When does the Moss terminal work?',
        answer: 'Moss Havn gives normal hours as Monday to Friday 7:00 to 15:00, with overtime outside that.',
      },
    ],
    sources: [
      {
        label: 'Om oss – Westport',
        url: 'https://westport.no/om-oss/',
      },
      {
        label: 'Moss Havn',
        url: 'https://www.moss-havn.no/',
      },
      {
        label: 'Nytt, fast anløp i Moss havn fra MSC',
        url: 'https://www.moss-havn.no/nyheter/nytt-fast-anlop-i-moss-havn-fra-msc',
      },
      {
        label: 'Prisinformasjon – Westport',
        url: 'https://westport.no/prisinformasjon/',
      },
      {
        label: 'Westport Moss: 69cb8d2164361854b0a56cce Moss havn arsrapport 2025 (PDF)',
        url: 'https://cdn.prod.website-files.com/60225928096cfe1d1bf96088/69cb8d2164361854b0a56cce_Moss_havn_arsrapport_2025.pdf',
      },
      NO_DUTY_PRINCIPLE_SOURCE,
    ],
  },
  {
    id: 'fredrikstad',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Norway', href: '/shipping-china-to-norway' },
    port: {
      name: 'Borg Havn, Øra terminal (Fredrikstad)',
      operator: 'Borg Havn',
      facts: [
        {
          label: 'Containers in 2024',
          value: '63,625 TEU, up 6%',
        },
        {
          label: 'Quay and depth',
          value: '1,125 metres of quay, 9.5 to 12 metres deep, ships up to 250 metres',
        },
        {
          label: 'Cranes',
          value: 'A ship-to-shore container crane and two yard cranes',
        },
        {
          label: 'Feeder service',
          value: 'Unifeeder twice a week to Bremerhaven, Hamburg and Rotterdam (port page dated August 2022)',
        },
        {
          label: 'Warehousing',
          value: 'About 36,000 square metres at Øra, cold and heated',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are Borg Havn\'s own.',
      ],
    },
    travel: [
      [
        'Borg Havn\'s container terminal is at Øra in Fredrikstad. The port\'s list of regular calls, dated August 2022, shows Unifeeder sailing twice a week to and from Bremerhaven, Hamburg and Rotterdam. So the container leaves China on a large ship and comes in from one of those hubs.',
      ],
      [
        'Containers for Fredrikstad change ship at a North Sea hub. Borg Havn\'s regular-calls page, dated 2022, names Bremerhaven, Hamburg and Rotterdam, with a Unifeeder service twice a week.',
      ],
    ],
    dutyExample: noDuty('cotton jumpers', '61.10.2000', 45000, 10.7,
      'Clothing is one of the few goods groups that pay duty in Norway: 10.7% on cotton jumpers.'),
    inland: {
      from: 'Øra terminal, Fredrikstad',
      source: 'osm',
      places: [
        {
          name: 'Sarpsborg',
          km: 24,
        },
        {
          name: 'Moss',
          km: 49,
        },
        {
          name: 'Halden',
          km: 49,
        },
        {
          name: 'Oslo',
          km: 111,
        },
      ],
    },
    faqs: [
      {
        question: 'How big is the container port at Fredrikstad?',
        answer: 'Borg Havn handled 63,625 TEU in 2024, up 6%. Its Øra terminal has 1,125 metres of quay.',
      },
      {
        question: 'Is there warehousing at Borg Havn?',
        answer: 'Yes. The port lists about 36,000 square metres of warehouse buildings at Øra, cold and heated.',
      },
    ],
    sources: [
      {
        label: 'Borg Havn: Arsrapport 2024 BIKS 1 (PDF)',
        url: 'https://www.borg-havn.no/wp-content/uploads/2025/04/Arsrapport-2024_BIKS-1.pdf',
      },
      {
        label: 'Gods Fredrikstad ⟶ Borg Havn',
        url: 'https://www.borg-havn.no/gods-fredrikstad/',
      },
      {
        label: 'Faste anløp ⟶ Borg Havn',
        url: 'https://www.borg-havn.no/faste-anlop/',
      },
      {
        label: 'Innendørs lagring ⟶ Borg Havn',
        url: 'https://www.borg-havn.no/innendors-lagring/',
      },
      NO_DUTY_PRINCIPLE_SOURCE,
    ],
  },
  {
    id: 'kristiansand',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Norway', href: '/shipping-china-to-norway' },
    port: {
      name: 'Port of Kristiansand',
      operator: 'Kristiansand Havn',
      facts: [
        {
          label: 'Containers in 2025',
          value: '41,520 TEU (43,210 in 2024)',
        },
        {
          label: 'Lines calling',
          value: 'Baltic Line, Unifeeder, Viasea and MSC',
        },
        {
          label: 'Opening hours',
          value: 'Open 24 hours a day, every day',
        },
        {
          label: 'Road and rail',
          value: 'Close to the E18 and E39; terminal linked to the rail network',
        },
        {
          label: 'Terminal move',
          value: 'The container terminal is moving from the city centre to Kongsgård/Vige',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are Kristiansand Havn\'s own.',
      ],
    },
    travel: [
      [
        'Kristiansand is served by four lines, Baltic Line, Unifeeder, Viasea and MSC, sailing to several European ports, the port says. Your container leaves China on a large ship and finishes the trip on one of them.',
      ],
      [
        'The last leg into Kristiansand is on one of the four lines that call there: Baltic Line, Unifeeder, Viasea or MSC, by the port\'s own list. The container changes ship at a European hub on the way.',
      ],
    ],
    dutyExample: noDuty('hairdryers', '85.16.3100', 25000, 0,
      'Most goods enter Norway free of customs duty; Norwegian Customs says duty applies mainly to clothing, textiles and food. VAT at 25% is the main tax.'),
    inland: {
      from: 'the Port of Kristiansand',
      source: 'osm',
      places: [
        {
          name: 'Mandal',
          km: 38,
        },
        {
          name: 'Grimstad',
          km: 53,
        },
        {
          name: 'Arendal',
          km: 80,
        },
        {
          name: 'Stavanger',
          km: 228,
        },
      ],
    },
    faqs: [
      {
        question: 'Which lines bring containers to Kristiansand?',
        answer: 'The port names four: Baltic Line, Unifeeder, Viasea and MSC.',
      },
      {
        question: 'Is the Kristiansand container terminal moving?',
        answer: 'Yes. Kristiansand Havn says the container terminal will move from the city centre to Kongsgård/Vige. Ask us which quay the sailing we quote uses.',
      },
    ],
    sources: [
      {
        label: 'Kristiansand Havn: %C3%85rsmelding 2025 Kristiansand Havn IKS (PDF)',
        url: 'https://www.portofkristiansand.no/filer/%C3%85rsmelding_2025_-_Kristiansand_Havn_IKS.pdf',
      },
      {
        label: 'Container | Port of Kristiansand',
        url: 'https://en.portofkristiansand.no/maritimt-og-trafikk/container',
      },
      {
        label: 'Konsekvenser av flyttingen av container-terminalen | Kristiansand Havn',
        url: 'https://www.portofkristiansand.no/aktuelt/nyheter/konsekvenser-av-flyttingen-av-containerterminalen',
      },
      NO_DUTY_PRINCIPLE_SOURCE,
    ],
  },
  {
    id: 'stavanger',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Norway', href: '/shipping-china-to-norway' },
    port: {
      name: 'Risavika cargo terminal (Stavanger region)',
      operator: 'Westport (for Stavangerregionen Havn)',
      facts: [
        {
          label: 'Containers in 2025, whole port district',
          value: '60,008 TEU',
        },
        {
          label: 'Quays at Risavika',
          value: 'Over 575 metres on 2 quays, over 280 metres with more than 13 metres depth',
        },
        {
          label: 'Liner calls',
          value: 'Several lines every week, about 70% container and 30% roll-on roll-off',
        },
        {
          label: 'Hours',
          value: 'Westport handles containers around the clock, all year',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'Figures are from Stavangerregionen Havn and Westport.',
      ],
    },
    travel: [
      [
        'Containers for the Stavanger region come in at the Risavika cargo terminal, near Sola. The port says several liner companies call every week. Your container leaves China on a large ship and is brought on from a European hub.',
      ],
      [
        'The port names no direct services from Asia. The container changes at a European hub and arrives on one of the lines that call every week, by the port\'s own description.',
      ],
    ],
    dutyExample: noDuty('cordless electric drills', '84.67.2100', 40000, 0,
      'Most goods enter Norway free of customs duty; Norwegian Customs says duty applies mainly to clothing, textiles and food. VAT at 25% is the main tax.'),
    inland: {
      from: 'Risavika cargo terminal',
      source: 'osm',
      places: [
        {
          name: 'Sandnes',
          km: 16,
        },
        {
          name: 'Stavanger',
          km: 17,
        },
        {
          name: 'Egersund',
          km: 74,
        },
        {
          name: 'Haugesund',
          km: 95,
        },
      ],
    },
    faqs: [
      {
        question: 'When can a container be collected at Risavika?',
        answer: 'Westport says it handles containers around the clock, all year.',
      },
      {
        question: 'How much container traffic does the Stavanger region handle?',
        answer: 'Stavangerregionen Havn reports 60,008 TEU in 2025 for the whole port district.',
      },
    ],
    sources: [
      {
        label: 'Westport: Vedlegg sak 3 26 Bilag 1 Arsrapport 2025 Stavangerregionen Havn IKS med konsern signert versjon m link 2 (PDF)',
        url: 'https://www.stavangerhavn.no/wp-content/uploads/Vedlegg-sak-3_26_Bilag-1_Arsrapport-2025-Stavangerregionen-Havn-IKS-med-konsern_signert-versjon-m-link-2.pdf',
      },
      {
        label: 'Risavika - Stavangerregionen Havn IKS',
        url: 'https://www.stavangerhavn.no/maritimt/terminaler/risavika/',
      },
      {
        label: 'SmartPort – Westport',
        url: 'https://westport.no/smart-logistikk/',
      },
      NO_DUTY_PRINCIPLE_SOURCE,
    ],
  },
  {
    id: 'haugesund',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Norway', href: '/shipping-china-to-norway' },
    port: {
      name: 'Haugesund Cargo Terminals, Husøy',
      operator: 'Karmsund Havn',
      facts: [
        {
          label: 'Containers in 2025',
          value: '58,413 TEU, up 18%',
        },
        {
          label: 'Ships and hours',
          value: 'Container ships of 4,500 TEU and more, 24 hours a day, 4 berths',
        },
        {
          label: 'Reefer plugs',
          value: '320',
        },
        {
          label: 'Cranes',
          value: 'Two Liebherr mobile cranes of 154 tonnes each',
        },
        {
          label: 'Border control',
          value: 'Food Safety Authority border post inside the terminal',
        },
        {
          label: 'Roads',
          value: 'Straight onto the E134 and E39',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are Karmsund Havn\'s own.',
      ],
    },
    travel: [
      [
        'Haugesund\'s container terminal is at Husøy on Karmøy. Lines such as Samskip, Maersk and North Sea Container Line call there, and Karmsund Havn says Samskip sails every week between Rotterdam or Hamburg and western Norway. Your container changes at one of those hubs.',
      ],
      [
        'The container from China is unloaded at a hub such as Rotterdam or Hamburg and comes on to Husøy on a weekly line. Karmsund Havn lists Samskip, Maersk, North Sea Container Line and others among the lines that call.',
      ],
    ],
    dutyExample: noDuty('synthetic blankets', '63.01.4000', 25000, 10.7,
      'Textiles are one of the few goods groups that pay duty in Norway: 10.7% on synthetic blankets.'),
    inland: {
      from: 'Haugesund Cargo Terminals, Husøy',
      source: 'osm',
      places: [
        {
          name: 'Haugesund',
          km: 21,
        },
        {
          name: 'Leirvik (Stord)',
          km: 66,
        },
        {
          name: 'Stavanger',
          km: 75,
        },
        {
          name: 'Bergen',
          km: 227,
        },
      ],
    },
    faqs: [
      {
        question: 'Can Haugesund take refrigerated containers?',
        answer: 'Yes. Karmsund Havn says the terminal has 320 reefer plugs and is strong in chilled and frozen cargo.',
      },
      {
        question: 'Is there a border control post for food at Haugesund?',
        answer: 'Yes. The Food Safety Authority has a border control post inside the terminal, for food of animal origin from outside the EU and EEA.',
      },
    ],
    sources: [
      {
        label: 'Karmsund Havn: Arsrapport 2025 (PDF)',
        url: 'https://karmsundhavn.no/wp-content/uploads/2026/10/Arsrapport-2025.pdf',
      },
      {
        label: 'Container - Karmsund Havn',
        url: 'https://karmsundhavn.no/forretningsomrader/haugesund-cargo-terminals/containers/',
      },
      {
        label: 'Havnekran - Karmsund Havn',
        url: 'https://karmsundhavn.no/maritimt/havnekran/',
      },
      {
        label: 'Grensekontrollstasjon Haugesund Havn - Karmsund Havn',
        url: 'https://karmsundhavn.no/forretningsomrader/haugesund-cargo-terminals/grensekontrollstasjon-haugesund-havn/',
      },
      {
        label: 'Samskip AS - Karmsund Havn',
        url: 'https://karmsundhavn.no/linjerederier/samskip-as/',
      },
      NO_DUTY_PRINCIPLE_SOURCE,
    ],
  },
  {
    id: 'bergen',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Norway', href: '/shipping-china-to-norway' },
    port: {
      name: 'Port of Bergen, freight terminal at Dokken',
      operator: 'Bergen Havn',
      facts: [
        {
          label: 'Containers in 2024',
          value: '31,019 TEU',
        },
        {
          label: 'Where containers are handled',
          value: 'At Dokken; a move to Ågotnes is planned',
        },
        {
          label: 'MSC feeder',
          value: 'Weekly, from Bremerhaven',
        },
        {
          label: 'Maersk feeder',
          value: 'Weekly, along the west coast of Norway',
        },
        {
          label: 'North Sea Container Line',
          value: 'Weekly, to Moerdijk (near Rotterdam), Bremerhaven and Hamburg',
        },
        {
          label: 'Customs office',
          value: 'At Jekteviken, open 9:00 to 15:00',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are Bergen Havn\'s own.',
      ],
    },
    travel: [
      [
        'Bergen is reached by feeder ship. Bergen Havn says MSC runs its own weekly feeder from Bremerhaven, and Maersk a weekly feeder along the Norwegian west coast. So your container leaves China on a large ship, is unloaded at a hub, and finishes the trip on one of these.',
      ],
      [
        'Bergen Havn names no direct services from Asia. The container comes in on a weekly feeder: MSC\'s from Bremerhaven, Maersk\'s west coast service, or North Sea Container Line from Moerdijk, Bremerhaven or Hamburg, all named by Bergen Havn.',
      ],
    ],
    dutyExample: noDuty('leather handbags', '42.02.2100', 60000, 0,
      'Most goods enter Norway free of customs duty; Norwegian Customs says duty applies mainly to clothing, textiles and food. VAT at 25% is the main tax.'),
    inland: {
      from: 'Dokken, Bergen',
      source: 'osm',
      places: [
        {
          name: 'Voss',
          km: 108,
        },
        {
          name: 'Leirvik (Stord)',
          km: 162,
        },
        {
          name: 'Førde',
          km: 175,
        },
        {
          name: 'Oslo',
          km: 460,
        },
      ],
    },
    faqs: [
      {
        question: 'Where are containers handled in Bergen?',
        answer: 'At the freight terminal at Dokken. Bergen Havn plans to move the cargo port to Ågotnes and is building a temporary container port at Jekteviken.',
      },
      {
        question: 'Where is the customs office in Bergen?',
        answer: 'Bergen Havn says the customs office is at Jekteviken and is open from 9:00 to 15:00.',
      },
    ],
    sources: [
      {
        label: 'Cargo terminal at the Port of Bergen',
        url: 'https://www.bergenhavn.no/en/docks/freight-harbor',
      },
      NO_DUTY_PRINCIPLE_SOURCE,
    ],
  },
  {
    id: 'aalesund',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Norway', href: '/shipping-china-to-norway' },
    port: {
      name: 'Port of Ålesund, Flatholmen container terminal',
      operator: 'Tyrholm & Farstad (for Ålesundregionens Havn)',
      facts: [
        {
          label: 'Rank',
          value: 'Norway\'s third-largest container port (port\'s own claim, 2025)',
        },
        {
          label: 'Container terminal',
          value: 'Flatholmen, the new container terminal area',
        },
        {
          label: 'Flatholmen terminal',
          value: '82,000 square metres, 700 metres of quay',
        },
        {
          label: 'Working hours',
          value: 'Loading and unloading around the clock',
        },
        {
          label: 'Storage',
          value: 'Cold, frozen and dry storage, with a border control post for animal products',
        },
        {
          label: 'Sea links',
          value: 'Shipping to Hamburg, Rotterdam and Antwerp, and on to Asia',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'Figures are from Ålesundregionens Havn and Tyrholm & Farstad.',
      ],
    },
    travel: [
      [
        'Containers for Ålesund arrive at the Flatholmen terminal. The terminal operator says it ships to Hamburg, Rotterdam and Antwerp, and on to Asia, through a network of shipping lines. So the container leaves China on a large ship and changes at one of those ports.',
      ],
      [
        'The last leg into Ålesund is on a smaller ship from a hub such as Hamburg, Rotterdam or Antwerp, the ports the Flatholmen operator names. The port says it is Norway\'s third-largest container port.',
      ],
    ],
    dutyExample: noDuty('mattresses', '94.04.2900', 25000, 0,
      'Most goods enter Norway free of customs duty; Norwegian Customs says duty applies mainly to clothing, textiles and food. VAT at 25% is the main tax.'),
    inland: {
      from: 'Flatholmen, Ålesund',
      source: 'osm',
      places: [
        {
          name: 'Ulsteinvik',
          km: 46,
        },
        {
          name: 'Ørsta',
          km: 52,
        },
        {
          name: 'Molde',
          km: 173,
        },
        {
          name: 'Trondheim',
          km: 386,
        },
      ],
    },
    faqs: [
      {
        question: 'Can goods be kept cold or frozen at Ålesund?',
        answer: 'Yes. Flatholmen has cold, frozen and dry storage, and its own border control post for animal products.',
      },
      {
        question: 'Is there a charge for trucks at Flatholmen?',
        answer: 'Yes. From 1 May 2026, vehicles over 3.5 tonnes pay NOK 27 per entry, before VAT.',
      },
    ],
    sources: [
      {
        label: 'Året 2025 i korte trekk – en havn i verdensklasse - Ålesund havn',
        url: 'https://alesund.havn.no/siste-nytt/aret-2025-i-korte-trekk-en-havn-i-verdensklasse.16123.aspx',
      },
      {
        label: 'Containerterminal og lager i Ålesund – Flatholmen | Tyrholm & Farstad',
        url: 'https://www.tyrholm.no/terminal-lager',
      },
      {
        label: 'Gods og fiskeri - Ålesund havn',
        url: 'https://alesund.havn.no/havna/gods-og-fiskeri/',
      },
      {
        label: 'Logistikk inn og ut av Møre og Romsdal | Tyrholm & Farstad',
        url: 'https://www.tyrholm.no/',
      },
      {
        label: 'Sjøfrakt og containertransport fra Ålesund | Tyrholm & Farstad',
        url: 'https://www.tyrholm.no/sjofrakt',
      },
      NO_DUTY_PRINCIPLE_SOURCE,
    ],
  },
  {
    id: 'orkanger',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Norway', href: '/shipping-china-to-norway' },
    port: {
      name: 'Port of Orkanger',
      operator: 'Trondheim Havn',
      facts: [
        {
          label: 'Role',
          value: 'Trøndelag\'s largest container terminal',
        },
        {
          label: 'Containers in 2025',
          value: '21,440 TEU, of 25,437 TEU for all Trondheim Havn ports',
        },
        {
          label: 'Quays',
          value: 'Krankaia, 82 metres and 10 metres deep, and Vigor Quay, 85 metres and 10 metres deep, both with cranes',
        },
        {
          label: 'Capacity',
          value: 'Three active quays, almost full; expansion planned at Grønøra West',
        },
        {
          label: 'Warehousing',
          value: 'New warehouse built in 2024, fully let',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are Trondheim Havn\'s own.',
      ],
    },
    travel: [
      [
        'Orkanger, west of Trondheim, is Trøndelag\'s largest container terminal. Its quays have 10 metres of water, which suits the smaller ships that run from European hub ports. Your container leaves China on a large ship and changes on the way.',
      ],
      [
        'Trondheim Havn names no direct services from Asia to Orkanger. With 10-metre quays, the port is served by smaller ships from European hubs, and Trondheim Havn says it is the main container port for Trøndelag.',
      ],
    ],
    dutyExample: noDuty('microwave ovens', '85.16.5000', 30000, 0,
      'Most goods enter Norway free of customs duty; Norwegian Customs says duty applies mainly to clothing, textiles and food. VAT at 25% is the main tax.'),
    inland: {
      from: 'the Port of Orkanger',
      source: 'osm',
      places: [
        {
          name: 'Trondheim',
          km: 43,
        },
        {
          name: 'Melhus',
          km: 46,
        },
        {
          name: 'Stjørdal',
          km: 84,
        },
        {
          name: 'Kristiansund',
          km: 153,
        },
      ],
    },
    faqs: [
      {
        question: 'Is Orkanger the container port for Trondheim?',
        answer: 'Yes. Trondheim Havn calls Orkanger Trøndelag\'s largest container terminal. It handled 21,440 TEU of the 25,437 TEU across all Trondheim Havn ports in 2025.',
      },
      {
        question: 'Is Orkanger busy?',
        answer: 'Trondheim Havn says its three active quays at Grønøra East are almost full, and an expansion is planned at Grønøra West.',
      },
    ],
    sources: [
      {
        label: 'Orkanger - Trondheim Port Authority',
        url: 'https://trondheimhavn.no/en/havn/orkanger-2',
      },
      {
        label: 'Trondheim Havn: arsrapport 2025 (PDF)',
        url: 'https://trondheimhavn.no/wp-content/uploads/2026/10/arsrapport-2025.pdf',
      },
      {
        label: 'Grønøra west, Orkanger - Trondheim Port Authority',
        url: 'https://trondheimhavn.no/en/prosjekt/gronora-west-orkanger',
      },
      NO_DUTY_PRINCIPLE_SOURCE,
    ],
  },
  {
    id: 'mo-i-rana',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Norway', href: '/shipping-china-to-norway' },
    port: {
      name: 'Mo i Rana, Toraneskaia terminal',
      operator: 'Mo i Rana Havn',
      facts: [
        {
          label: 'Container terminal',
          value: 'Toraneskaia, the town\'s general cargo and container terminal',
        },
        {
          label: 'Quay and depth',
          value: '330 metres of quay, 8 metres deep',
        },
        {
          label: 'Cranes',
          value: 'Mobile harbour crane (52 tonnes) with a container spreader, plus a 45-tonne reach stacker',
        },
        {
          label: 'Storage',
          value: '30 decares of open storage and 14 decares of warehouse',
        },
        {
          label: 'Main industry',
          value: 'Mo Industripark, served by Rana Industriterminal',
        },
      ],
      notes: [
        'All figures are Mo i Rana Havn\'s own. A decare is 1,000 square metres.',
      ],
    },
    travel: [
      [
        'Mo i Rana is at the head of the Ranfjord in Nordland. Its container terminal, Toraneskaia, has 8 metres of water, so it is served by small ships from hub ports further south. Your container leaves China on a large ship and changes on the way.',
      ],
      [
        'Mo i Rana Havn names no direct services from Asia. The Toraneskaia quay has 8 metres of water and one mobile crane, which suits the smaller ships that bring containers north from European hubs.',
      ],
    ],
    dutyExample: noDuty('plastic shoes', '64.02.9910', 25000, 0,
      'Most goods enter Norway free of customs duty; Norwegian Customs says duty applies mainly to clothing, textiles and food. VAT at 25% is the main tax.'),
    inland: {
      from: 'Toraneskaia, Mo i Rana',
      source: 'osm',
      places: [
        {
          name: 'Mosjøen',
          km: 87,
        },
        {
          name: 'Sandnessjøen',
          km: 111,
        },
        {
          name: 'Bodø',
          km: 231,
        },
        {
          name: 'Trondheim',
          km: 473,
        },
      ],
    },
    faqs: [
      {
        question: 'Can Mo i Rana handle containers?',
        answer: 'Yes. Mo i Rana Havn says Toraneskaia is the town\'s general cargo and container terminal, with full container handling and a 52-tonne mobile crane with a container spreader.',
      },
      {
        question: 'Is there storage at the Mo i Rana port?',
        answer: 'Yes. Toraneskaia has 30 decares of open storage and 14 decares of warehouse. A decare is 1,000 square metres.',
      },
    ],
    sources: [
      {
        label: 'Mo i Rana Havn KF',
        url: 'https://www.moiranahavn.no/anlegg-og-fasiliteter',
      },
      NO_DUTY_PRINCIPLE_SOURCE,
    ],
  },
  {
    id: 'straumen',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Norway', href: '/shipping-china-to-norway' },
    port: {
      name: 'Straumen (Sørfold), container quay at Salten Verk',
      operator: 'Elkem (quay owner)',
      facts: [
        {
          label: 'Container quay',
          value: 'An existing container quay at Elkem\'s Salten Verk plant in Sørfold',
        },
        {
          label: 'Who uses it',
          value: 'North Sea Container Line applied to deepen the quay for bigger container ships',
        },
        {
          label: 'Water depth',
          value: 'About 7 metres at the quay today; dredging to 9 metres planned',
        },
        {
          label: 'Main industry',
          value: 'Elkem Salten, one of the world\'s largest silicon plants',
        },
      ],
      notes: [
        'From a dredging application filed in October 2024 and published by the County Governor of Nordland. There is no port authority website for Straumen.',
      ],
    },
    travel: [
      [
        'Straumen is in Sørfold, Nordland, at Elkem\'s Salten Verk silicon plant. The container quay has about 7 metres of water, and North Sea Container Line has applied to deepen it so bigger ships can call. A container from China reaches it on a small ship from a hub port, after changing ship on the way.',
      ],
      [
        'The quay at Straumen is an industrial one, at Elkem\'s Salten Verk plant, with about 7 metres of water today. That means small ships only. Your container changes at a European hub and comes north on a line such as North Sea Container Line, which uses the quay.',
      ],
    ],
    dutyExample: noDuty('toothbrushes', '96.03.2100', 20000, 0,
      'Most goods enter Norway free of customs duty; Norwegian Customs says duty applies mainly to clothing, textiles and food. VAT at 25% is the main tax.'),
    inland: {
      from: 'Straumen, Sørfold',
      source: 'osm',
      places: [
        {
          name: 'Fauske',
          km: 34,
        },
        {
          name: 'Bodø',
          km: 69,
        },
        {
          name: 'Mo i Rana',
          km: 191,
        },
        {
          name: 'Narvik',
          km: 234,
        },
      ],
    },
    faqs: [
      {
        question: 'Which Straumen is this?',
        answer: 'Straumen in Sørfold municipality, Nordland, where Elkem\'s Salten Verk plant has a container quay. If you meant another Straumen, tell us and we will find the nearest port.',
      },
      {
        question: 'Can big container ships reach Straumen?',
        answer: 'No. The quay has about 7 metres of water today. North Sea Container Line has applied to dredge it to 9 metres so ships with more capacity can call.',
      },
    ],
    sources: [
      {
        label: 'Elkem: soknadsskjema mudring salten verk oktober 2024 (PDF)',
        url: 'https://statsforvalteren.no/contentassets/95ba7d3083a24f77b3deb397cc2fbb12/soknadsskjema-mudring-salten-verk_oktober-2024.pdf',
      },
      {
        label: 'Elkem Silicon Products Salten | Elkem.com',
        url: 'https://www.elkem.com/about-elkem/worldwide-presence/norway/elkem-salten/',
      },
      NO_DUTY_PRINCIPLE_SOURCE,
    ],
  },
  {
    id: 'southampton',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United Kingdom', href: '/shipping-china-to-united-kingdom' },
    port: {
      name: 'Port of Southampton, Southampton Container Terminals',
      operator: 'DP World Southampton (in the port run by Associated British Ports)',
      facts: [
        {
          label: 'Containers in 2025',
          value: 'More than 2 million TEU',
        },
        {
          label: 'Berths and depth',
          value: '5 berths on 1,920 metres of quay, 16 metres deep',
        },
        {
          label: 'Largest ships',
          value: 'New cranes can work ships of 24,000 TEU',
        },
        {
          label: 'Rail',
          value: '22 trains a day inland, including 6 a day to the Birmingham area and 5 to Manchester',
        },
        {
          label: 'Truck turnaround',
          value: '35 minutes on average over the last 12 months',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are DP World Southampton\'s own.',
      ],
    },
    travel: [
      [
        'Ships from Asia call at Southampton directly. DP World says its direct services link Southampton with major ports across Asia, and its new cranes can work ships of 24,000 TEU.',
      ],
      [
        'Southampton is on the Asia to Europe main line: DP World lists direct services to major Asian ports. From the quay, 22 trains a day run inland, so many containers go on by rail.',
      ],
    ],
    dutyExample: ukDuty('cotton bed linen', '6302 31 00 00', 30000, 12,
      'Cotton bed linen pays 12% UK duty, so duty costs more than the freight here.'),
    inland: {
      from: 'Southampton Container Terminals',
      source: 'osm',
      places: [
        {
          name: 'Bristol',
          km: 167,
        },
        {
          name: 'Birmingham',
          km: 234,
        },
        {
          name: 'Manchester',
          km: 362,
        },
        {
          name: 'Leeds',
          km: 383,
        },
      ],
    },
    faqs: [
      {
        question: 'Can my container go from Southampton to the Midlands by train?',
        answer: 'Yes. DP World says three rail operators run 22 trains a day from the terminal, including six a day to the Birmingham area and five a day to Manchester.',
      },
      {
        question: 'How long do trucks wait at Southampton?',
        answer: 'DP World reports an average truck turnaround of 35 minutes over the last 12 months.',
      },
    ],
    sources: [
      {
        label: 'LONDON GATEWAY CONTAINER VOLUMES UP MORE THAN 50% TO SET NEW ANNUAL RECORD',
        url: 'https://www.dpworld.com/en/news/london-gateway-container-volumes-up-more-than-50-to-set-new-annual-record',
      },
      {
        label: 'Logistics Infrastructure & Facts At Southampton Port | DP World',
        url: 'https://www.dpworld.com/en/ports-terminals/united-kingdom/southampton/infrastructure-facts',
      },
      {
        label: 'FOUR OF EUROPE’S LARGEST QUAY CRANES ARRIVE AT DP WORLD’S UK PORTS',
        url: 'https://www.dpworld.com/en/news/four-of-europes-largest-quay-cranes-arrive-at-dp-worlds-uk-ports',
      },
    ],
  },
  {
    id: 'london',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United Kingdom', href: '/shipping-china-to-united-kingdom' },
    port: {
      name: 'DP World London Gateway (Port of London)',
      operator: 'DP World London Gateway',
      facts: [
        {
          label: 'Containers in 2025',
          value: 'More than 3 million TEU, up from 1.9 million in 2024',
        },
        {
          label: 'Berths and depth',
          value: '4 berths on 1,690 metres of quay, 16.5 metres deep',
        },
        {
          label: 'Capacity and cranes',
          value: '3.4 million TEU a year, 16 quay cranes, over 3,000 reefer points',
        },
        {
          label: 'Expansion',
          value: 'Berth 5 due to open in 2027',
        },
        {
          label: 'Rail',
          value: '775-metre on-dock rail terminal with 8 tracks and 22 daily rail services',
        },
        {
          label: 'All trade on the Thames, 2025',
          value: 'Almost 57 million tonnes, with container cargo up 23% (Port of London Authority)',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'Container figures are DP World London Gateway\'s own. There is no single "Port of London" terminal: London Gateway takes the deep-sea ships, and the Port of Tilbury has a smaller container terminal.',
      ],
    },
    travel: [
      [
        'Containers for London arrive at DP World London Gateway, on the Thames in Essex. It takes the deep-sea ships: DP World says its fourth berth and the Gemini Cooperation\'s Asia-Europe routes lifted it past 3 million TEU in 2025.',
      ],
      [
        'The deep-sea container port for London is DP World London Gateway, 16.5 metres deep. Asia-Europe services from the Gemini Cooperation call there, by DP World\'s own account, so a container from China can arrive on one ship.',
      ],
    ],
    dutyExample: ukDuty('LED lamps', '8539 52 00 00', 30000, 0,
      'LED lamps pay no UK duty, but import VAT is still due on the full value.'),
    inland: {
      from: 'DP World London Gateway',
      source: 'osm',
      places: [
        {
          name: 'Basildon',
          km: 17,
        },
        {
          name: 'Chelmsford',
          km: 37,
        },
        {
          name: 'Central London',
          km: 46,
        },
        {
          name: 'Milton Keynes',
          km: 126,
        },
      ],
    },
    faqs: [
      {
        question: 'Which port is the Port of London for containers from China?',
        answer: 'In practice, DP World London Gateway, on the Thames in Essex. It takes the deep-sea ships from Asia. The Port of Tilbury also has a container terminal. We tell you which one the sailing we quote uses.',
      },
      {
        question: 'Can my container leave London Gateway by train?',
        answer: 'Yes. DP World says the port has a 775-metre on-dock rail terminal with eight tracks and 22 daily rail services, and a second rail terminal opened in 2025.',
      },
    ],
    sources: [
      {
        label: 'LONDON GATEWAY CONTAINER VOLUMES UP MORE THAN 50% TO SET NEW ANNUAL RECORD',
        url: 'https://www.dpworld.com/en/news/london-gateway-container-volumes-up-more-than-50-to-set-new-annual-record',
      },
      {
        label: 'Logistics Infrastructure & Facts At London Gateway | DP World',
        url: 'https://www.dpworld.com/en/ports-terminals/united-kingdom/london-gateway/infrastructure-facts',
      },
      {
        label: 'FOUR OF EUROPE’S LARGEST QUAY CRANES ARRIVE AT DP WORLD’S UK PORTS',
        url: 'https://www.dpworld.com/en/news/four-of-europes-largest-quay-cranes-arrive-at-dp-worlds-uk-ports',
      },
      {
        label: 'Port of London trade reaches a 50-year high | Port of London Authority',
        url: 'https://pla.co.uk/port-london-trade-reaches-50-year-high',
      },
    ],
  },
  {
    id: 'bremerhaven',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Germany', href: '/shipping-china-to-germany' },
    port: {
      name: 'Port of Bremerhaven, container terminals',
      operator: 'EUROGATE (CTB), North Sea Terminal Bremerhaven (Maersk) and MSC Gate',
      facts: [
        {
          label: 'Containers in 2025',
          value: '4.9 million TEU, up more than 10% (Bremen state government)',
        },
        {
          label: 'Terminals',
          value: 'Three: CTB for all lines, NTB for Maersk, MSC Gate for MSC',
        },
        {
          label: 'Berths',
          value: '14 berths for the largest container ships, on 4,930 metres of quay',
        },
        {
          label: 'Water depth',
          value: '14 to 16.5 metres',
        },
        {
          label: 'By rail',
          value: 'About 2 million TEU went inland in 2025, 53.1% of it by train',
        },
        {
          label: 'New rail terminal',
          value: 'Rail Gate Bremerhaven, opened 1 July 2025, six tracks of 762 metres',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'The 2025 volume is the Bremen state government\'s figure; the port\'s own pages give different totals, so we used the government one.',
      ],
    },
    travel: [
      [
        'Bremerhaven is one of the North Sea ports where the big ships from Asia call. Its terminal sailing list shows the Gemini Asia-Europe services of Maersk and Hapag-Lloyd calling at North Sea Terminal Bremerhaven.',
      ],
      [
        'Ships from China sail straight into Bremerhaven. The port has 14 berths for the largest container ships, and the Gemini Asia-Europe loops call there, by the terminal\'s own sailing list.',
      ],
    ],
    dutyExample: euDuty('cordless electric drills', '8467 21 10 00', 40000, 2.7, 'German import VAT', 19,
      'Cordless drills pay a 2.7% EU duty rate.'),
    inland: {
      from: 'Bremerhaven Container Terminal',
      source: 'osm',
      places: [
        {
          name: 'Bremen',
          km: 70,
        },
        {
          name: 'Hamburg',
          km: 185,
        },
        {
          name: 'Hannover',
          km: 187,
        },
        {
          name: 'Berlin',
          km: 454,
        },
      ],
    },
    faqs: [
      {
        question: 'Do most containers leave Bremerhaven by train?',
        answer: 'Just over half. Of about 2 million TEU that went inland from Bremerhaven in 2025, 53.1% went by rail.',
      },
      {
        question: 'Which terminal will my container use in Bremerhaven?',
        answer: 'It depends on the line. CTB serves all lines, North Sea Terminal Bremerhaven serves Maersk and MSC Gate serves MSC. We tell you when we confirm the booking.',
      },
    ],
    sources: [
      {
        label: 'Bremische Häfen mit 5,4 Prozent Umschlagswachstum - Pressestelle des Senats',
        url: 'https://www.senatspressestelle.bremen.de/pressemitteilungen/bremische-haefen-mit-5-4-prozent-umschlagswachstum-481937',
      },
      {
        label: 'Terminals - Eurogate',
        url: 'https://www1.eurogate.de/en/terminals/',
      },
      {
        label: 'Containers',
        url: 'https://www.bremenports.de/en/ports/competences/containers',
      },
      {
        label: 'New Rail Gate Bremerhaven rail transhipment facility officially opened - Eurogate',
        url: 'https://www1.eurogate.de/en/new-rail-gate-bremerhaven-rail-transhipment-facility-officially-opened/',
      },
      {
        label: 'EUROGATE: NTBSailingList (PDF)',
        url: 'https://tracking.ntb.eu/NTBSailingList.pdf',
      },
    ],
  },
  {
    id: 'munich',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Germany', href: '/shipping-china-to-germany' },
    port: {
      name: 'München-Riem rail container terminal',
      operator: 'DUSS (Deutsche Bahn)',
      facts: [
        {
          label: 'Rail terminal',
          value: 'DUSS Terminal München-Riem, opened 1992, cranes renewed in 2019',
        },
        {
          label: 'Seaport traffic',
          value: 'Direct mainline rail links in all directions, used for seaport traffic',
        },
        {
          label: 'Trains from Hamburg (METRANS)',
          value: '9 a week',
        },
        {
          label: 'Trains from Bremerhaven (METRANS)',
          value: '3 a week',
        },
        {
          label: 'Roads',
          value: 'Next to the A94 and the A99 Munich-East interchange',
        },
      ],
      notes: [
        'Terminal facts are DUSS\'s own. Train counts are METRANS\'s own timetable, one of several rail operators, so the real total is higher.',
      ],
    },
    travel: [
      [
        'Munich is inland, so the trip has two parts. The container sails from China to Hamburg (or Bremerhaven), then goes south by train to the DUSS terminal at München-Riem. METRANS alone runs nine trains a week from Hamburg to Riem.',
      ],
      [
        'There is no sea route to Munich. Your container is unloaded at Hamburg or Bremerhaven and finishes the trip by rail to München-Riem, which DUSS says has direct mainline links in all directions.',
      ],
    ],
    dutyExample: euDuty('exercise machines with adjustable resistance', '9506 91 10 00', 40000, 2.7, 'German import VAT', 19,
      'Exercise machines pay a 2.7% EU duty rate.'),
    inland: {
      from: 'Terminal München-Riem',
      source: 'osm',
      places: [
        {
          name: 'Munich city centre',
          km: 10,
        },
        {
          name: 'Rosenheim',
          km: 76,
        },
        {
          name: 'Augsburg',
          km: 88,
        },
        {
          name: 'Ingolstadt',
          km: 88,
        },
      ],
    },
    faqs: [
      {
        question: 'How often do container trains run from Hamburg to Munich?',
        answer: 'METRANS\'s own timetable shows nine departures a week from Hamburg to München-Riem and three from Bremerhaven. Other rail operators run more.',
      },
      {
        question: 'Where in Munich is the container terminal?',
        answer: 'At Riem, in the east of the city. DUSS says it sits next to the A94 and the A99 Munich-East interchange.',
      },
    ],
    sources: [
      {
        label: 'DUSS-Terminal München-Riem',
        url: 'https://duss-terminal.deutschebahn.com/duss/terminals_uebersicht/terminal_muenchen_riem-8728292',
      },
      {
        label: 'Timetable - METRANS',
        url: 'https://metrans.eu/solutions/metrans-rail-solutions/timetable/',
      },
      {
        label: 'From Bremerhaven [DE] - METRANS',
        url: 'https://metrans.eu/solutions/metrans-intermodal-solutions/import-from-sea-port-hub-terminals/from-bremerhaven-de/',
      },
    ],
  },
  {
    id: 'frankfurt',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Germany', href: '/shipping-china-to-germany' },
    port: {
      name: 'Contargo Frankfurt Ost terminal',
      operator: 'Contargo Rhein-Main',
      facts: [
        {
          label: 'Terminal',
          value: 'Contargo Frankfurt Ost, in the East Port, linking Frankfurt with Rotterdam, Antwerp, Hamburg and Wilhelmshaven',
        },
        {
          label: 'Trains',
          value: '4 a week to Hamburg, 1 to Wilhelmshaven, 3 to Antwerp',
        },
        {
          label: 'Barges',
          value: '3 a week to Rotterdam, 2 to Antwerp',
        },
        {
          label: 'Terminal kit',
          value: 'Two container cranes, two barge berths, two 270-metre rail tracks, room for 3,500 TEU',
        },
        {
          label: 'Opening hours',
          value: 'Monday to Friday 7:00 to 17:00',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are Contargo\'s own, for its own services.',
      ],
    },
    travel: [
      [
        'Frankfurt is inland, so the trip has two parts. The container sails from China to a North Sea port and goes on by train or barge. Contargo\'s Frankfurt Ost terminal has four trains a week to and from Hamburg, and barges to Rotterdam and Antwerp. The sea distance below is to Hamburg.',
      ],
      [
        'There is no sea route to Frankfurt. Containers come up from Hamburg by train, or from Rotterdam and Antwerp by train or Rhine barge, to Contargo\'s terminal in the East Port. Ask us which way the shipment we quote goes.',
      ],
    ],
    dutyExample: euDuty('hairdryers', '8516 31 00 00', 30000, 2.7, 'German import VAT', 19,
      'Hairdryers pay a 2.7% EU duty rate.'),
    inland: {
      from: 'Contargo Frankfurt Ost',
      source: 'osm',
      places: [
        {
          name: 'Frankfurt city centre',
          km: 4,
        },
        {
          name: 'Darmstadt',
          km: 33,
        },
        {
          name: 'Wiesbaden',
          km: 47,
        },
        {
          name: 'Mainz',
          km: 48,
        },
      ],
    },
    faqs: [
      {
        question: 'Can my container reach Frankfurt by river barge?',
        answer: 'Yes. Contargo runs barges three times a week between its Frankfurt Ost terminal and Rotterdam and twice a week to Antwerp.',
      },
      {
        question: 'When is the Frankfurt Ost terminal open?',
        answer: 'Contargo gives its hours as Monday to Friday 7:00 to 17:00, with longer hours on request.',
      },
    ],
    sources: [
      {
        label: 'Terminal Frankfurt Ost - Container Transportlogistik | Contargo',
        url: 'https://www.contargo.net/en/locations/terminals-a-k/frankfurt-ost/',
      },
    ],
  },
  {
    id: 'civitavecchia',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Italy', href: '/shipping-china-to-italy' },
    port: {
      name: 'Port of Civitavecchia (Port of Rome)',
      operator: 'Central Northern Tyrrhenian Sea Port Authority; containers at Roma Terminal Container (RTC)',
      facts: [
        {
          label: 'Containers in 2025',
          value: '114,662 TEU, up 7.6% on 2024',
        },
        {
          label: 'Container cargo in 2025',
          value: '874,658 tonnes',
        },
        {
          label: 'Berths',
          value: 'About 34 working berths, over 16 km of quays, depths up to 18 metres',
        },
        {
          label: 'Container berth',
          value: 'Berth 25 at the RTC terminal, more than 13.5 metres deep (2021)',
        },
        {
          label: 'Ferry links',
          value: 'Roll-on roll-off links to Spain, Sardinia, Sicily and Tunisia',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are the port authority\'s own.',
      ],
    },
    travel: [
      [
        'Civitavecchia is the port of Rome, on the Tyrrhenian coast. Containers are handled at the RTC terminal on berth 25. The port authority recorded an 11,923 TEU MSC ship loading there in 2021. Whether your container comes direct or via a Mediterranean hub depends on the line.',
      ],
      [
        'Ships for Civitavecchia come through the Suez Canal into the Mediterranean. The port handled 114,662 TEU in 2025, by the port authority\'s figures. Ask us whether the sailing we quote is direct.',
      ],
    ],
    dutyExample: euDuty('mattresses', '9404 29 90 00', 25000, 3.7, 'Italian import VAT', 22,
      'Mattresses pay a 3.7% EU duty rate.'),
    inland: {
      from: 'the Port of Civitavecchia',
      source: 'osm',
      places: [
        {
          name: 'Viterbo',
          km: 49,
        },
        {
          name: 'Rome',
          km: 86,
        },
        {
          name: 'Terni',
          km: 103,
        },
        {
          name: 'Perugia',
          km: 172,
        },
      ],
    },
    faqs: [
      {
        question: 'Is Civitavecchia the port for Rome?',
        answer: 'Yes. The port authority presents Civitavecchia as the Port of Rome (its site is portidiroma.it).',
      },
      {
        question: 'How much container traffic does Civitavecchia handle?',
        answer: 'The port authority reports 114,662 TEU in 2025, up 7.6% on 2024.',
      },
    ],
    sources: [
      {
        label: 'Central Northern Tyrrhenian Sea Port Authority; containers at Roma Terminal Container: Traffici Porto di Civitavecchia   Anno 2025 (PDF)',
        url: 'https://www.portidiroma.it/sites/default/files/allegati/Traffici%20Porto%20di%20Civitavecchia%20-%20Anno%202025.pdf',
      },
      {
        label: 'Porto di Civitavecchia | Porti di Civitavecchia - Fiumicino - Gaeta',
        url: 'https://www.portidiroma.it/porto-di-civitavecchia',
      },
      {
        label: 'La MSC SIYA B al terminal container del Porto di Civitavecchia | Porti di Civitavecchia - Fiumicino - Gaeta',
        url: 'https://www.portidiroma.it/notizia/la-msc-siya-b-al-terminal-container-del-porto-di-civitavecchia',
      },
    ],
  },
  {
    id: 'salerno',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Italy', href: '/shipping-china-to-italy' },
    port: {
      name: 'Port of Salerno, Salerno Container Terminal',
      operator: 'Salerno Container Terminal (SCT), in the port run by the Central Tyrrhenian Sea Port Authority',
      facts: [
        {
          label: 'Containers in 2025',
          value: '416,941 TEU, up 16.4% on 2024',
        },
        {
          label: 'Container terminal',
          value: 'Molo Trapezio, 120,975 square metres',
        },
        {
          label: 'Feeder links',
          value: 'Feeder services to the Mediterranean transshipment ports, especially Gioia Tauro',
        },
        {
          label: 'Warehousing and customs',
          value: '90,500 cubic metres of warehouses and a customs shed',
        },
        {
          label: 'Roads',
          value: 'Port gates lead straight to the A3 motorway',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are the port authority\'s own.',
      ],
    },
    travel: [
      [
        'Salerno is a feeder port. The port authority says it is linked by feeder service with the Mediterranean transshipment ports, "in particular" Gioia Tauro. A feeder is a smaller ship that carries containers between a big hub port and a smaller one.',
      ],
      [
        'A container from China for Salerno usually changes ship at a Mediterranean hub such as Gioia Tauro, which the port authority names, and comes in on a feeder. Salerno\'s traffic grew 16.4% in 2025.',
      ],
    ],
    dutyExample: euDuty('women\'s plastic shoes', '6402 99 98 00', 30000, 16.8, 'Italian import VAT', 22,
      'Footwear pays a high EU duty rate, 16.8% on this code.'),
    inland: {
      from: 'the Port of Salerno',
      source: 'osm',
      places: [
        {
          name: 'Avellino',
          km: 41,
        },
        {
          name: 'Naples',
          km: 57,
        },
        {
          name: 'Caserta',
          km: 78,
        },
        {
          name: 'Potenza',
          km: 108,
        },
      ],
    },
    faqs: [
      {
        question: 'How do trucks get out of the port of Salerno?',
        answer: 'The port authority says the port gates lead straight onto the viaduct to the A3 motorway.',
      },
      {
        question: 'Is Salerno busy?',
        answer: 'It handled 416,941 TEU in 2025, up 16.4% on 2024, by the port authority\'s figures.',
      },
    ],
    sources: [
      {
        label: 'Salerno Container Terminal: 12 Report gennaio dicembre 2025 (PDF)',
        url: 'https://adsptirrenocentrale.it/wp-content/uploads/2026/03/12_Report-gennaio-dicembre-2025.pdf',
      },
      {
        label: 'I PORTI DELL\'ADSP ~ ADSP Mar Tirreno Centrale',
        url: 'https://adsptirrenocentrale.it/porto-di-salerno/',
      },
    ],
  },
  {
    id: 'venice',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Italy', href: '/shipping-china-to-italy' },
    port: {
      name: 'Port of Venice, Porto Marghera',
      operator: 'PSA Venice - Vecon (main container terminal), in the port run by the Northern Adriatic Sea Port Authority',
      facts: [
        {
          label: 'Containers in 2025',
          value: '532,762 TEU',
        },
        {
          label: 'Main container terminal',
          value: 'Vecon, majority-owned by PSA since 1997',
        },
        {
          label: 'Where it is',
          value: 'Molo B, Porto Marghera, inside the Venice lagoon',
        },
        {
          label: 'Second terminal',
          value: 'Terminal Intermodale Venezia (TIV), Molo A',
        },
        {
          label: 'Links to hubs',
          value: 'Routes to the hub ports of Piraeus, Malta and Damietta, and on to the Far East',
        },
        {
          label: 'Inland reach',
          value: 'Veneto and northern Italy, Austria, Slovenia, Germany, the Czech Republic and Slovakia',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'Figures are from the Port of Venice and Vecon.',
      ],
    },
    travel: [
      [
        'Venice is at the top of the Adriatic. Vecon, its main container terminal, says cargo for the Far East moves through the hub ports of Piraeus, Malta and Damietta. So a container from China usually changes ship at one of those hubs.',
      ],
      [
        'Containers reach Porto Marghera, inside the Venice lagoon, on ships from Mediterranean hubs. Vecon names Piraeus, Malta and Damietta as the hubs for its routes to the Far East.',
      ],
    ],
    dutyExample: euDuty('LED lamps', '8539 52 00 00', 30000, 3.7, 'Italian import VAT', 22,
      'LED lamps pay a 3.7% EU duty rate.'),
    inland: {
      from: 'Porto Marghera, Venice',
      source: 'osm',
      places: [
        {
          name: 'Padua',
          km: 33,
        },
        {
          name: 'Treviso',
          km: 33,
        },
        {
          name: 'Vicenza',
          km: 64,
        },
        {
          name: 'Verona',
          km: 114,
        },
      ],
    },
    faqs: [
      {
        question: 'Which hub does a container for Venice change at?',
        answer: 'Vecon names Piraeus, Malta and Damietta as the hubs for its Far East routes. Ask us which one the sailing we quote uses.',
      },
      {
        question: 'Does Venice serve Austria and southern Germany?',
        answer: 'Vecon says it serves the Veneto and northern Italy and reaches Austria, Slovenia, Germany, the Czech Republic and Slovakia.',
      },
    ],
    sources: [
      {
        label: 'Dati statistici sui traffici 2025 - Autorità di Sistema Portuale del Mare Adriatico Settentrionale',
        url: 'https://www.port.venice.it/statistiche/dati-statistici-sui-traffici-2025/',
      },
      {
        label: 'Terminal Container Porto di Venezia | Vecon',
        url: 'https://www.vecon.it/chi-siamo/la-societa/',
      },
      {
        label: 'TIV | Terminal Intermodale Venezia S.p.a | Home',
        url: 'https://tiv.it/it',
      },
    ],
  },
  {
    id: 'la-spezia',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Italy', href: '/shipping-china-to-italy' },
    port: {
      name: 'Port of La Spezia, La Spezia Container Terminal',
      operator: 'La Spezia Container Terminal (Contship Italia)',
      facts: [
        {
          label: 'Containers in 2025',
          value: '1,217,461 TEU (Assoporti, the association of Italian port authorities)',
        },
        {
          label: 'Container cargo in 2025',
          value: '11,066,632 tonnes',
        },
        {
          label: 'Terminal operator',
          value: 'LSCT, part of the Contship Italia group (European Investment Bank, 2022)',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'The terminal\'s own site blocks automated reading, so these figures come from Assoporti and a 2022 European Investment Bank release.',
      ],
    },
    travel: [
      [
        'La Spezia is on the Ligurian coast, between Genoa and Livorno, and handled more than 1.2 million TEU in 2025. Its container terminal is run by LSCT, part of Contship Italia. Whether your container comes direct or through a hub depends on the line.',
      ],
      [
        'Ships for La Spezia come through the Suez Canal or round Africa into the Mediterranean. It is one of Italy\'s busiest container ports by Assoporti\'s 2025 figures. Ask us whether the sailing we quote is direct.',
      ],
    ],
    dutyExample: euDuty('fully automatic front-loading washing machines', '8450 11 11 00', 45000, 3, 'Italian import VAT', 22,
      'Washing machines pay a 3% EU duty rate.'),
    inland: {
      from: 'La Spezia Container Terminal',
      source: 'osm',
      places: [
        {
          name: 'Genoa',
          km: 95,
        },
        {
          name: 'Parma',
          km: 113,
        },
        {
          name: 'Florence',
          km: 140,
        },
        {
          name: 'Milan',
          km: 214,
        },
      ],
    },
    faqs: [
      {
        question: 'How big is the port of La Spezia?',
        answer: 'Assoporti, the association of Italian port authorities, reports 1,217,461 TEU in 2025.',
      },
      {
        question: 'La Spezia or Genoa?',
        answer: 'Both serve northern Italy. Our table shows the price for each pair, so you can compare. Tell us the delivery address and we will price both.',
      },
    ],
    sources: [
      {
        label: 'La Spezia Container Terminal: adsp gen dic 2025 (PDF)',
        url: 'https://www.assoporti.it/media/17143/adsp_-gen_dic_2025.pdf',
      },
      {
        label: 'Italy: EIB, CDP and Intesa Sanpaolo provide €160 million for the Port of La Spezia',
        url: 'https://www.eib.org/en/press/all/2022-390-da-bei-cdp-intesa-sanpaolo-160-milioni-per-il-porto-di-la-spezia',
      },
    ],
  },
  {
    id: 'brevik',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Norway', href: '/shipping-china-to-norway' },
    port: {
      name: 'Port of Brevik (Grenland Havn)',
      operator: 'Grenland Havn',
      facts: [
        {
          label: 'Container quay',
          value: 'Tangenkaia, 200 metres at 15 metres depth, three 100-tonne mobile cranes',
        },
        {
          label: 'Rail',
          value: 'Rail siding off the Brevik line',
        },
        {
          label: 'Storage',
          value: '100,000 square metres open, 1,200 square metres indoors',
        },
        {
          label: 'Container terminal move',
          value: 'From December 2026, container lines move to the new Frier Vest terminal in Bamble',
        },
        {
          label: 'Frier Vest quay',
          value: '180 metres, 12.5 metres deep',
        },
        {
          label: 'Cargo over Grenland Havn quays, 2025',
          value: '3.4 million tonnes, a record',
        },
      ],
      notes: [
        'All figures are Grenland Havn\'s own.',
      ],
    },
    travel: [
      [
        'Brevik is a feeder port. Grenland Havn says Unifeeder calls with container ships on routes to Rotterdam, Bremerhaven and Hamburg, where much of the cargo is moved to ocean ships. Your container from China comes the other way: a big ship to one of those hubs, then the feeder.',
      ],
      [
        'Containers for Grenland change ship at Rotterdam, Bremerhaven or Hamburg, the hubs Grenland Havn names for Unifeeder\'s service. Note that from December 2026 the container lines move from Brevik to the new Frier Vest terminal in Bamble.',
      ],
    ],
    dutyExample: noDuty('party and carnival goods', '95.05.9000', 20000, 0,
      'Most goods enter Norway free of customs duty; Norwegian Customs says duty applies mainly to clothing, textiles and food. VAT at 25% is the main tax.'),
    inland: {
      from: 'the Port of Brevik',
      source: 'osm',
      places: [
        {
          name: 'Porsgrunn',
          km: 13,
        },
        {
          name: 'Skien',
          km: 31,
        },
        {
          name: 'Tønsberg',
          km: 72,
        },
        {
          name: 'Oslo',
          km: 162,
        },
      ],
    },
    faqs: [
      {
        question: 'Is the Brevik container terminal moving?',
        answer: 'Yes. Grenland Havn says the container lines move from Breviksterminalen to the new Frier Vest terminal in Bamble from December 2026. We will tell you which terminal the sailing we quote uses.',
      },
      {
        question: 'Can my container go on by train from Brevik?',
        answer: 'Grenland Havn says Breviksterminalen has a rail siding off the Brevik line.',
      },
    ],
    sources: [
      {
        label: 'Breviksterminalen - Grenland havn',
        url: 'https://grenland-havn.no/havneterminaler/breviksterminalen/',
      },
      {
        label: 'Sammen om fremtidens containerhavn - Grenland havn',
        url: 'https://grenland-havn.no/aktuelt/sammen-om-fremtidens-containerhavn/',
      },
      {
        label: 'Kort vei til Danmark fra Frier Vest Havneterminal - Grenland havn',
        url: 'https://grenland-havn.no/havneterminaler/frier-vest-havneterminal/',
      },
      {
        label: 'Grenland Havns årsrapport for 2025 er klar - Grenland havn',
        url: 'https://grenland-havn.no/aktuelt/grenland-havns-arsrapport-for-2025-er-klar/',
      },
      {
        label: 'Linjetilbud for næring og persontrafikk - Grenland havn',
        url: 'https://grenland-havn.no/linjetilbud/',
      },
      NO_DUTY_PRINCIPLE_SOURCE,
    ],
  },
  {
    id: 'larvik',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Norway', href: '/shipping-china-to-norway' },
    port: {
      name: 'Port of Larvik',
      operator: 'Larvik Havn (container terminal run by Greenport Services)',
      facts: [
        {
          label: 'Containers in 2024',
          value: '51,400 TEU',
        },
        {
          label: 'Container lines',
          value: 'Weekly calls to Hamburg, Bremerhaven, Rotterdam and Antwerp by MSC, DP World and Samskip/Viasea',
        },
        {
          label: 'Cranes and area',
          value: 'Two gantry cranes, a 104-tonne mobile crane, about 100,000 square metres of port area',
        },
        {
          label: 'Border control',
          value: 'Border control post for animal and non-animal products',
        },
        {
          label: 'Customs',
          value: 'Norwegian Customs office at the port',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'Figures are Larvik Havn\'s own; the customs office is listed by Norwegian Customs.',
      ],
    },
    travel: [
      [
        'Larvik has weekly container calls to Hamburg, Bremerhaven, Rotterdam and Antwerp, by MSC, DP World and Samskip/Viasea, the port says. Your container from China changes at one of those hubs and comes in on the weekly ship.',
      ],
      [
        'The last leg into Larvik is on a weekly line from Hamburg, Bremerhaven, Rotterdam or Antwerp, the hubs Larvik Havn names. The port handled 51,400 TEU in 2024.',
      ],
    ],
    dutyExample: noDuty('cotton T-shirts', '61.09.1000', 40000, 10.7,
      'Clothing is one of the few goods groups that pay duty in Norway: 10.7% on cotton T-shirts.'),
    inland: {
      from: 'the Port of Larvik',
      source: 'osm',
      places: [
        {
          name: 'Sandefjord',
          km: 29,
        },
        {
          name: 'Tønsberg',
          km: 45,
        },
        {
          name: 'Skien',
          km: 47,
        },
        {
          name: 'Oslo',
          km: 134,
        },
      ],
    },
    faqs: [
      {
        question: 'Is there a customs office at Larvik port?',
        answer: 'Yes. Norwegian Customs lists an office at the port, at Revet 8.',
      },
      {
        question: 'Which lines call at Larvik?',
        answer: 'The port names MSC, DP World and Samskip/Viasea, with weekly calls to Hamburg, Bremerhaven, Rotterdam and Antwerp.',
      },
    ],
    sources: [
      {
        label: 'Om Larvik Havn - Larvik Havn',
        url: 'https://larvik.havn.no/om-oss/',
      },
      {
        label: 'Container - Larvik Havn',
        url: 'https://larvik.havn.no/vare-tjenester/containerhavn/',
      },
      {
        label: 'Larvik port - Tolletaten',
        url: 'https://toll.no/en/about-norwegian-customs/contact-us/all-customs-offices/larvik-port',
      },
      NO_DUTY_PRINCIPLE_SOURCE,
    ],
  },
  {
    id: 'floroe',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Norway', href: '/shipping-china-to-norway' },
    port: {
      name: 'Port of Florø',
      operator: 'Florø hamn (Kinn municipality)',
      facts: [
        {
          label: 'Quay for containers',
          value: 'Botnastranda quay G, 150 metres, takes container ships',
        },
        {
          label: 'Town-centre cargo quay',
          value: 'Fugleskjærkaia, 185 metres long, 8 metres deep',
        },
        {
          label: 'Office hours',
          value: 'Weekdays 7:30 to 15:00, with a port watch at other times',
        },
        {
          label: 'Location',
          value: 'Midway between Bergen and Ålesund',
        },
      ],
      notes: [
        'All figures are Florø hamn\'s own.',
      ],
    },
    travel: [
      [
        'Florø is on the coast midway between Bergen and Ålesund. Its Botnastranda quay takes container ships among other cargo. A container from China reaches it on a smaller ship after changing at a European hub.',
      ],
      [
        'Florø hamn lists container ships among the vessels at its Botnastranda quay. Ships from Asia unload at a European hub first, so the last leg is on a smaller coastal ship.',
      ],
    ],
    dutyExample: noDuty('microwave ovens', '85.16.5000', 30000, 0,
      'Most goods enter Norway free of customs duty; Norwegian Customs says duty applies mainly to clothing, textiles and food. VAT at 25% is the main tax.'),
    inland: {
      from: 'Florø',
      source: 'osm',
      places: [
        {
          name: 'Førde',
          km: 57,
        },
        {
          name: 'Nordfjordeid',
          km: 120,
        },
        {
          name: 'Bergen',
          km: 230,
        },
        {
          name: 'Ålesund',
          km: 247,
        },
      ],
    },
    faqs: [
      {
        question: 'Who runs the port of Florø?',
        answer: 'Florø hamn, a municipal port company owned by Kinn municipality.',
      },
      {
        question: 'Where is Florø?',
        answer: 'On the west coast of Norway, midway between Bergen and Ålesund, as the port describes it.',
      },
    ],
    sources: [
      {
        label: 'Botnastranda kai G - Florø hamn',
        url: 'https://florohamn.no/kaioversikt/botnastranda-kai-g/',
      },
      {
        label: 'Fugleskjærkaia E - Florø hamn',
        url: 'https://florohamn.no/kaioversikt/fugleskjaerkaia-e/',
      },
      {
        label: 'Florø hamn',
        url: 'https://florohamn.no/',
      },
      NO_DUTY_PRINCIPLE_SOURCE,
    ],
  },
  {
    id: 'svelgen',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Norway', href: '/shipping-china-to-norway' },
    port: {
      name: 'Svelgen, industrial quay',
      operator: 'Elkem Bremanger (industrial quay); Bremanger hamn (public quay)',
      facts: [
        {
          label: 'Main industry',
          value: 'Elkem Bremanger\'s plant makes silicon-based products for the world market',
        },
        {
          label: 'Shipping conditions',
          value: 'Ice-free fjord',
        },
        {
          label: 'Quay upgrade',
          value: 'In 2024 Elkem applied for sea works so larger container ships can berth',
        },
        {
          label: 'Public quay',
          value: '35-metre concrete quay',
        },
        {
          label: 'Harbour office',
          value: 'Weekdays 7:30 to 15:00, in Svelgen',
        },
      ],
      notes: [
        'From Elkem, Bremanger municipality and an application published by the County Governor.',
      ],
    },
    travel: [
      [
        'Svelgen, in Bremanger on the west coast, is an industrial port for Elkem\'s silicon plant. In 2024 Elkem applied to upgrade its quay so larger container ships can berth. A container from China reaches it on a small ship after changing at a European hub.',
      ],
      [
        'The quay at Svelgen mainly serves Elkem Bremanger\'s plant, on an ice-free fjord, Elkem says. Elkem names no direct services from Asia; the container changes at a European hub and comes up the coast on a smaller ship.',
      ],
    ],
    dutyExample: noDuty('cordless electric drills', '84.67.2100', 40000, 0,
      'Most goods enter Norway free of customs duty; Norwegian Customs says duty applies mainly to clothing, textiles and food. VAT at 25% is the main tax.'),
    inland: {
      from: 'Svelgen',
      source: 'osm',
      places: [
        {
          name: 'Nordfjordeid',
          km: 52,
        },
        {
          name: 'Florø',
          km: 57,
        },
        {
          name: 'Førde',
          km: 80,
        },
        {
          name: 'Ålesund',
          km: 180,
        },
      ],
    },
    faqs: [
      {
        question: 'Can container ships berth at Svelgen?',
        answer: 'Small ones. In 2024 Elkem Bremanger applied to the County Governor for sea works so larger container ships can berth at its quay.',
      },
      {
        question: 'Is the fjord at Svelgen ice-free?',
        answer: 'Yes. Elkem says the ice-free fjord gives reliable shipping conditions.',
      },
    ],
    sources: [
      {
        label: 'Elkem Bremanger Production Plant | Elkem.com',
        url: 'https://www.elkem.com/about-elkem/worldwide-presence/norway/elkem-bremanger/',
      },
      {
        label: 'Elkem Bremanger: elkem bremanger hoyringsbrev (PDF)',
        url: 'https://www.statsforvalteren.no/contentassets/9ae3326b79aa4363b4eb6df5d1739e94/elkem-bremanger-hoyringsbrev.pdf',
      },
      {
        label: 'Offentlege kaianlegg - Bremanger kommune',
        url: 'https://www.bremanger.kommune.no/tenester/hamn/offentlege-kaianlegg/',
      },
      {
        label: 'Kontaktinformasjon - Bremanger kommune',
        url: 'https://www.bremanger.kommune.no/tenester/hamn/kontaktinformasjon/',
      },
      NO_DUTY_PRINCIPLE_SOURCE,
    ],
  },
  {
    id: 'maaloey',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Norway', href: '/shipping-china-to-norway' },
    port: {
      name: 'Port of Måløy',
      operator: 'Nordfjord Havn',
      facts: [
        {
          label: 'Port authority',
          value: 'Nordfjord Havn, with a 24-hour watch',
        },
        {
          label: 'Main role',
          value: 'Norway\'s fourth-largest fishing port',
        },
        {
          label: 'Largest quay',
          value: 'Trollebø Nord, 345 metres, at least 10 metres deep',
        },
        {
          label: 'Other cargo quays',
          value: 'ICT Nord 1 (120 m, 8 m deep), ICT Syd (127 m, 6.5 m deep)',
        },
        {
          label: 'Industrial land',
          value: 'Seaside industrial land, used for pipe and wind-turbine part storage',
        },
      ],
      notes: [
        'All figures are Nordfjord Havn\'s own.',
      ],
    },
    travel: [
      [
        'Måløy is Norway\'s fourth-largest fishing port and also handles cargo. Its largest quay, Trollebø Nord, is 345 metres long and at least 10 metres deep. A container from China reaches it on a smaller ship after changing at a European hub.',
      ],
      [
        'Nordfjord Havn names no direct services from Asia. The container changes at a European hub and comes up the coast on a smaller ship to one of Nordfjord Havn\'s cargo quays.',
      ],
    ],
    dutyExample: noDuty('leather handbags', '42.02.2100', 60000, 0,
      'Most goods enter Norway free of customs duty; Norwegian Customs says duty applies mainly to clothing, textiles and food. VAT at 25% is the main tax.'),
    inland: {
      from: 'Måløy',
      source: 'osm',
      places: [
        {
          name: 'Nordfjordeid',
          km: 55,
        },
        {
          name: 'Stryn',
          km: 118,
        },
        {
          name: 'Florø',
          km: 134,
        },
        {
          name: 'Ålesund',
          km: 182,
        },
      ],
    },
    faqs: [
      {
        question: 'Who runs the port of Måløy?',
        answer: 'Nordfjord Havn, which manages the sea areas of three Nordfjord municipalities and keeps a 24-hour watch.',
      },
      {
        question: 'How big are the quays at Måløy?',
        answer: 'The largest, Trollebø Nord, is 345 metres long and at least 10 metres deep, by Nordfjord Havn\'s own figures.',
      },
    ],
    sources: [
      {
        label: 'Om Nordfjord Havn – Nordfjord Havn',
        url: 'https://www.nordfjordhavn.no/om-nordfjord-havn/',
      },
      {
        label: 'Trollebø Nord – Nordfjord Havn',
        url: 'https://www.nordfjordhavn.no/vare-havner/trollebo-nord/',
      },
      {
        label: 'Våre havner – Nordfjord Havn',
        url: 'https://www.nordfjordhavn.no/varehavner/',
      },
      {
        label: 'Industri & Offshore – Nordfjord Havn',
        url: 'https://www.nordfjordhavn.no/industri-offshore/',
      },
      NO_DUTY_PRINCIPLE_SOURCE,
    ],
  },
  {
    id: 'long-beach',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United States', href: '/shipping-china-to-united-states' },
    port: {
      name: 'Port of Long Beach',
      operator: 'City of Long Beach Harbor Department',
      facts: [
        {
          label: 'Container terminals',
          value: '6, out of 22 shipping terminals',
        },
        {
          label: 'January to September 2026',
          value: '7,675,255 TEU, up 3.9%',
        },
        {
          label: 'Record month',
          value: '997,177 TEU in September 2026',
        },
        {
          label: 'Trade with East Asia',
          value: 'More than 90% of shipments',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are the Port of Long Beach\'s own.',
      ],
    },
    travel: [
      [
        'Long Beach is built for trade with Asia: the port says East Asian trade is more than 90% of its shipments. It has six container terminals.',
      ],
      [
        'Ships from China call at Long Beach directly, next door to Los Angeles. The port had its busiest month ever in September 2026, at 997,177 TEU.',
      ],
    ],
    dutyNote: US_DUTY_NOTE,
    usFeeExample: {
      product: 'furniture and bedding',
      why: 'Furniture and bedding are first on the Port of Long Beach\'s own list of its top imports.',
      goodsValueUsd: 30000,
    },
    inland: {
      from: 'the Port of Long Beach',
      source: 'osm',
      places: [
        {
          name: 'Downtown Los Angeles',
          km: 45,
        },
        {
          name: 'Ontario, California (Inland Empire)',
          km: 90,
        },
        {
          name: 'Las Vegas',
          km: 459,
        },
        {
          name: 'Phoenix',
          km: 616,
        },
      ],
    },
    faqs: [
      {
        question: 'Is Long Beach mainly an Asia port?',
        answer: 'Yes. The port says East Asian trade accounts for more than 90% of its shipments.',
      },
      {
        question: 'How busy is Long Beach?',
        answer: 'The port handled 7,675,255 TEU from January to September 2026, up 3.9%, and a record 997,177 TEU in September alone.',
      },
    ],
    sources: [
      {
        label: 'City of Long Beach Harbor Department: port facts faqs',
        url: 'https://polb.com/port-info/port-facts-faqs/',
      },
      {
        label: 'City of Long Beach Harbor Department: port of long beach breaks all time cargo record in september 10 15 2026',
        url: 'https://polb.com/port-info/news-and-press/port-of-long-beach-breaks-all-time-cargo-record-in-september-10-15-2026/',
      },
      ...US_FEE_SOURCES,
    ],
  },
  {
    id: 'oakland',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United States', href: '/shipping-china-to-united-states' },
    port: {
      name: 'Port of Oakland',
      operator: 'Port of Oakland (terminals run by TraPac, Everport and SSA)',
      facts: [
        {
          label: 'Containers in 2025',
          value: '2,253,976 TEU (2,262,921 in 2024)',
        },
        {
          label: 'Share of Northern California',
          value: 'More than 99% of its container cargo',
        },
        {
          label: 'Terminals',
          value: 'TraPac, Everport, and Oakland International Container Terminal (SSA)',
        },
        {
          label: 'Berth depth',
          value: '50 feet (15.2 metres)',
        },
        {
          label: 'Rail',
          value: 'BNSF and Union Pacific rail yards next to the terminals',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are the Port of Oakland\'s own.',
      ],
    },
    travel: [
      [
        'Oakland is the container port for Northern California: it says it handles more than 99% of the region\'s container cargo. Its terminals list transpacific services from Asia.',
      ],
      [
        'Ships from China cross the Pacific straight to Oakland. The port has three container terminals, with BNSF and Union Pacific rail yards next to them.',
      ],
    ],
    dutyNote: US_DUTY_NOTE,
    usFeeExample: {
      product: 'household goods',
      why: 'An example only: both fees are a share of the value of the goods, so the sums work the same way for any product.',
      goodsValueUsd: 30000,
    },
    inland: {
      from: 'the Port of Oakland',
      source: 'osm',
      places: [
        {
          name: 'San Jose',
          km: 65,
        },
        {
          name: 'Stockton',
          km: 115,
        },
        {
          name: 'Sacramento',
          km: 133,
        },
        {
          name: 'Reno, Nevada',
          km: 343,
        },
      ],
    },
    faqs: [
      {
        question: 'Can my container leave Oakland by train?',
        answer: 'Yes. BNSF and Union Pacific both have rail yards next to the Oakland terminals.',
      },
      {
        question: 'Which terminal will my container use in Oakland?',
        answer: 'It depends on the line: TraPac, Everport or Oakland International Container Terminal. We tell you when we confirm the booking.',
      },
    ],
    sources: [
      {
        label: 'Port of Oakland: Website TEUs 2026 Updated 110626 (PDF)',
        url: 'https://www.oaklandseaport.com/wp-content/uploads/2026/11/Website-TEUs-2026-Updated_110626.pdf',
      },
      {
        label: 'Facts & Figures - Oakland Seaport',
        url: 'https://www.oaklandseaport.com/business/facts-figures',
      },
      {
        label: 'Seaport Facilities - Oakland Seaport',
        url: 'https://www.oaklandseaport.com/facilities/seaport-facilities',
      },
      {
        label: 'Port of Oakland: Port of Oakland Ocean Carrier Services updated August 14 2026 (PDF)',
        url: 'https://www.oaklandseaport.com/wp-content/uploads/2026/08/Port-of-Oakland-Ocean-Carrier-Services-updated-August-14-2026.pdf',
      },
      ...US_FEE_SOURCES,
    ],
  },
  {
    id: 'san-francisco',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United States', href: '/shipping-china-to-united-states' },
    port: {
      name: 'Port of Oakland, for San Francisco',
      operator: 'Port of Oakland',
      facts: [
        {
          label: 'Port of San Francisco cargo today',
          value: 'Vehicles at Pier 80, sand at Piers 92 and 94; Pier 96 is offered for new cargo',
        },
        {
          label: 'Container port for the region',
          value: 'Oakland handles more than 99% of Northern California\'s container cargo',
        },
      ],
      notes: [
        'From the Port of San Francisco\'s cargo page and the Port of Oakland.',
      ],
    },
    travel: [
      [
        'Containers for San Francisco land across the bay in Oakland. The Port of Oakland says it handles more than 99% of Northern California\'s container cargo, while the Port of San Francisco\'s cargo page lists vehicles at Pier 80 and sand at Piers 92 and 94. From Oakland it is a truck ride across the bay.',
      ],
      [
        'The ship from China goes to Oakland: by the Port of Oakland\'s own figure, it handles more than 99% of Northern California\'s containers. The last leg into San Francisco is by truck.',
      ],
    ],
    dutyNote: US_DUTY_NOTE,
    usFeeExample: {
      product: 'consumer electronics',
      why: 'An example only: both fees are a share of the value of the goods, so the sums work the same way for any product.',
      goodsValueUsd: 50000,
    },
    inland: {
      from: 'the Port of Oakland',
      source: 'osm',
      places: [
        {
          name: 'San Francisco',
          km: 18,
        },
        {
          name: 'Palo Alto',
          km: 53,
        },
        {
          name: 'San Jose',
          km: 65,
        },
        {
          name: 'Sacramento',
          km: 133,
        },
      ],
    },
    faqs: [
      {
        question: 'Do container ships go to San Francisco itself?',
        answer: 'Almost all Bay Area containers land at Oakland, which says it handles more than 99% of Northern California\'s container cargo. The Port of San Francisco\'s cargo page lists vehicles and sand, and offers Pier 96 for new cargo.',
      },
      {
        question: 'How far is Oakland\'s port from San Francisco?',
        answer: 'Across the bay by road. The road distances from the Port of Oakland are on this page.',
      },
    ],
    sources: [
      {
        label: 'Port of Oakland: cargo shipping',
        url: 'https://www.sfport.com/maritime/cargo-shipping',
      },
      {
        label: 'Facts & Figures - Oakland Seaport',
        url: 'https://www.oaklandseaport.com/business/facts-figures',
      },
      ...US_FEE_SOURCES,
    ],
  },
  {
    id: 'tacoma',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United States', href: '/shipping-china-to-united-states' },
    port: {
      name: 'Port of Tacoma (The Northwest Seaport Alliance)',
      operator: 'The Northwest Seaport Alliance',
      facts: [
        {
          label: 'Container terminals',
          value: 'Husky, Washington United and Pierce County',
        },
        {
          label: 'Largest ships',
          value: 'Husky: 24,000 TEU; Washington United: 18,000 TEU',
        },
        {
          label: 'Berth depth',
          value: '51 feet (15 metres) at all three',
        },
        {
          label: 'Rail',
          value: 'On-dock rail yard at each terminal',
        },
        {
          label: 'Rail reach',
          value: 'BNSF and Union Pacific, 40+ departures a week',
        },
        {
          label: 'Storage after free time at Husky',
          value: '$195 per container from day 11 for local imports',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are The Northwest Seaport Alliance\'s own.',
      ],
    },
    travel: [
      [
        'Ships from China call at Tacoma directly. The Northwest Seaport Alliance, which runs Tacoma and Seattle together, lists direct services to "ports throughout Asia", and Husky Terminal takes ships of 24,000 TEU.',
      ],
      [
        'Tacoma\'s three container terminals each have their own on-dock rail yard, and the Alliance lists more than 40 train departures a week inland. Asia services call directly.',
      ],
    ],
    dutyNote: US_DUTY_NOTE,
    usFeeExample: {
      product: 'furniture',
      why: 'Furniture was the top import through The Northwest Seaport Alliance (Seattle and Tacoma) in 2024, by the Port of Seattle\'s count.',
      goodsValueUsd: 30000,
    },
    inland: {
      from: 'the Port of Tacoma',
      source: 'osm',
      places: [
        {
          name: 'Seattle',
          km: 51,
        },
        {
          name: 'Portland, Oregon',
          km: 233,
        },
        {
          name: 'Spokane',
          km: 468,
        },
        {
          name: 'Boise, Idaho',
          km: 809,
        },
      ],
    },
    faqs: [
      {
        question: 'What does it cost if my container stays too long at Tacoma?',
        answer: 'At Husky Terminal, the Alliance\'s figures show a $195 per container long-stay charge from day 11 for local imports. We book collection before then.',
      },
      {
        question: 'Can my container go inland by train from Tacoma?',
        answer: 'Yes. Each Tacoma terminal has an on-dock rail yard, with BNSF and Union Pacific running more than 40 departures a week.',
      },
    ],
    sources: [
      {
        label: 'Terminals | The Northwest Seaport Alliance',
        url: 'https://www.nwseaportalliance.com/cargo-operations/terminals',
      },
      {
        label: 'Husky Terminal (Husky) | The Northwest Seaport Alliance',
        url: 'https://www.nwseaportalliance.com/cargo-operations/terminals/husky-terminal-husky',
      },
      {
        label: 'Rail service links PNW to U.S. Midwest | The Northwest Seaport Alliance',
        url: 'https://www.nwseaportalliance.com/cargo-operations/rail-service-links-pnw-us-midwest',
      },
      {
        label: 'The Northwest Seaport Alliance: Terminal Long Stay Fee Summary 1.12.26 (PDF)',
        url: 'https://s3.us-west-2.amazonaws.com/nwseaportalliance.com.if-us-west-2-or/s3fs-public/2026-01/Terminal%20Long%20Stay%20Fee%20Summary%201.12.26.pdf',
      },
      {
        label: 'Cargo Statistics | The Northwest Seaport Alliance',
        url: 'https://www.nwseaportalliance.com/about-us/cargo-statistics',
      },
      {
        label: 'Port of Seattle, Maritime cargo comings and goings 2024',
        url: 'https://www.portseattle.org/blog/maritime-cargo-comings-and-goings-2024',
      },
      ...US_FEE_SOURCES,
    ],
  },
  {
    id: 'boston',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United States', href: '/shipping-china-to-united-states' },
    port: {
      name: 'Port of Boston, Conley Container Terminal',
      operator: 'Massachusetts Port Authority (Massport)',
      facts: [
        {
          label: 'Rank',
          value: 'New England\'s only full-service container terminal',
        },
        {
          label: 'Ship size',
          value: '12,000 to 16,000 TEU ships',
        },
        {
          label: 'Asia services',
          value: 'Weekly services to China and South Korea',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are Massport\'s own.',
      ],
    },
    travel: [
      [
        'Boston\'s Conley Terminal is New England\'s only full-service container terminal, and Massport lists weekly services to China and South Korea. So a container from China can arrive on one ship.',
      ],
      [
        'Ships from China call at Conley Terminal directly on weekly Asia services, by Massport\'s account. The terminal handles ships of 12,000 to 16,000 TEU.',
      ],
    ],
    dutyNote: US_DUTY_NOTE,
    usFeeExample: {
      product: 'household goods',
      why: 'An example only: both fees are a share of the value of the goods, so the sums work the same way for any product.',
      goodsValueUsd: 25000,
    },
    inland: {
      from: 'Conley Terminal, Boston',
      source: 'osm',
      places: [
        {
          name: 'Worcester',
          km: 73,
        },
        {
          name: 'Providence',
          km: 81,
        },
        {
          name: 'Manchester, New Hampshire',
          km: 88,
        },
        {
          name: 'Hartford',
          km: 164,
        },
      ],
    },
    faqs: [
      {
        question: 'Is Conley the only container terminal in New England?',
        answer: 'Yes. Massport calls it New England\'s only full-service container terminal.',
      },
      {
        question: 'How big are the ships at Conley Terminal?',
        answer: 'Massport says the terminal handles ships of 12,000 to 16,000 TEU.',
      },
    ],
    sources: [
      {
        label: 'Massachusetts Port Authority: conley terminal',
        url: 'https://www.massport.com/conley-terminal',
      },
      {
        label: 'Massachusetts Port Authority: ocean carrier directory',
        url: 'https://www.massport.com/conley-terminal/shipping-directory/ocean-carrier-directory',
      },
      ...US_FEE_SOURCES,
    ],
  },
  {
    id: 'charleston',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United States', href: '/shipping-china-to-united-states' },
    port: {
      name: 'Port of Charleston (SC Ports)',
      operator: 'South Carolina Ports Authority',
      facts: [
        {
          label: 'Containers in 2025',
          value: '2,565,297 TEU',
        },
        {
          label: 'Main terminal',
          value: 'Wando Welch, about 80% of volume, ships up to 20,000 TEU',
        },
        {
          label: 'Harbour depth',
          value: '52 feet to the container terminals',
        },
        {
          label: 'Leatherman Terminal',
          value: 'Opened 2021, 700,000 TEU first-phase capacity',
        },
        {
          label: 'Asia services',
          value: '11 a week (September 2025)',
        },
        {
          label: 'Rail',
          value: 'CSX and Norfolk Southern; imports moved to rail within 24 hours',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are SC Ports\' own.',
      ],
    },
    travel: [
      [
        'Charleston has 11 weekly Asia services, by SC Ports\' count, so a container from China can come on one ship. Its harbour is 52 feet deep to the container terminals.',
      ],
      [
        'Ships from China call at Charleston directly. SC Ports\' main terminal, Wando Welch, can work ships of up to 20,000 TEU, and the newer Leatherman Terminal opened in 2021.',
      ],
    ],
    dutyNote: US_DUTY_NOTE,
    usFeeExample: {
      product: 'machinery parts',
      why: 'Machinery parts were the top import through Charleston in 2025, 228,988 TEU by SC Ports\' own figures.',
      goodsValueUsd: 60000,
    },
    inland: {
      from: 'Wando Welch Terminal, Charleston',
      source: 'osm',
      places: [
        {
          name: 'Columbia',
          km: 189,
        },
        {
          name: 'Charlotte',
          km: 337,
        },
        {
          name: 'Greenville',
          km: 347,
        },
        {
          name: 'Atlanta',
          km: 488,
        },
      ],
    },
    faqs: [
      {
        question: 'Can my container go inland by train from Charleston?',
        answer: 'Yes. SC Ports is served by CSX and Norfolk Southern, and says its RapidRail service moves imports to rail within 24 hours.',
      },
      {
        question: 'What comes into Charleston most?',
        answer: 'By SC Ports\' 2025 figures, machinery parts led imports with 228,988 TEU, then furniture, sporting goods and toys with 136,986 TEU.',
      },
    ],
    sources: [
      {
        label: 'South Carolina Ports Authority: teu history (PDF)',
        url: 'https://scspa.com/wp-content/uploads/teu-history.pdf',
      },
      {
        label: 'Wando Welch Terminal - SC Ports Authority',
        url: 'https://scspa.com/facilities/wando-welch-terminal/',
      },
      {
        label: 'Charleston has deepest harbor on East Coast at 52 feet - SC Ports Authority',
        url: 'https://scspa.com/news/charleston-has-deepest-harbor-on-east-coast-at-52-feet/',
      },
      {
        label: 'Leatherman Terminal - SC Ports Authority',
        url: 'https://scspa.com/facilities/hugh-k-leatherman-terminal/',
      },
      {
        label: 'Port of Charleston boasts quick berth access, efficient gateway to Southeast - SC Ports Authority',
        url: 'https://scspa.com/news/port-of-charleston-boasts-quick-berth-access-efficient-gateway-to-southeast/',
      },
      {
        label: 'SC Ports, Charleston top commodities, calendar year 2025 (PDF)',
        url: 'https://scspa.com/wp-content/uploads/chs-commodites-cy25.pdf',
      },
      ...US_FEE_SOURCES,
    ],
  },
  {
    id: 'jacksonville',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United States', href: '/shipping-china-to-united-states' },
    port: {
      name: 'JAXPORT (Port of Jacksonville)',
      operator: 'Jacksonville Port Authority',
      facts: [
        {
          label: 'Containers in fiscal 2025',
          value: '1,388,841 TEU, up 4%',
        },
        {
          label: 'Channel depth',
          value: '47 feet to Blount Island',
        },
        {
          label: 'Main container terminal',
          value: 'Blount Island, 11 container cranes',
        },
        {
          label: 'Asia service',
          value: 'Direct service with Asia',
        },
        {
          label: 'Rail',
          value: 'CSX, Norfolk Southern and Florida East Coast, 40 trains a day',
        },
        {
          label: 'Warehousing nearby',
          value: '175 million square feet',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are JAXPORT\'s own.',
      ],
    },
    travel: [
      [
        'JAXPORT lists direct service with Asia among the dozens of lines that call. Containers arrive at the Blount Island terminal, which has a 47-foot channel.',
      ],
      [
        'Ships from China reach Jacksonville on direct Asia services, by JAXPORT\'s account. Three railroads serve the port, with 40 trains a day.',
      ],
    ],
    dutyNote: US_DUTY_NOTE,
    usFeeExample: {
      product: 'household goods',
      why: 'An example only: both fees are a share of the value of the goods, so the sums work the same way for any product.',
      goodsValueUsd: 30000,
    },
    inland: {
      from: 'Blount Island, Jacksonville',
      source: 'osm',
      places: [
        {
          name: 'Savannah',
          km: 221,
        },
        {
          name: 'Orlando',
          km: 236,
        },
        {
          name: 'Tampa',
          km: 349,
        },
      ],
    },
    faqs: [
      {
        question: 'Which railroads serve the port of Jacksonville?',
        answer: 'JAXPORT names CSX, Norfolk Southern and Florida East Coast, with 40 trains a day.',
      },
      {
        question: 'Is there warehousing near JAXPORT?',
        answer: 'JAXPORT says there are 175 million square feet of distribution and warehouse space nearby.',
      },
    ],
    sources: [
      {
        label: 'Jacksonville Port Authority: FY25 Annual Report (PDF)',
        url: 'https://www.jaxport.com/wp-content/uploads/2026/03/FY25-Annual-Report.pdf',
      },
      {
        label: 'Jacksonville Port Authority: harbor deepening',
        url: 'https://www.jaxport.com/cargo/port-improvements/harbor-deepening/',
      },
      {
        label: 'Jacksonville Port Authority: blount island marine terminal',
        url: 'https://www.jaxport.com/cargo/facilities/blount-island-marine-terminal/',
      },
      {
        label: 'Jacksonville Port Authority: containerized',
        url: 'https://www.jaxport.com/cargo/cargo-types/containerized/',
      },
      {
        label: 'Jacksonville Port Authority: rail connections',
        url: 'https://www.jaxport.com/cargo/rail-connections/',
      },
      ...US_FEE_SOURCES,
    ],
  },
  {
    id: 'norfolk',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United States', href: '/shipping-china-to-united-states' },
    port: {
      name: 'The Port of Virginia (Norfolk)',
      operator: 'Virginia Port Authority',
      facts: [
        {
          label: 'Containers in 2025',
          value: '3,239,638 TEU',
        },
        {
          label: 'Channel depth',
          value: '55 feet, the deepest on the US East Coast (February 2026)',
        },
        {
          label: 'Norfolk International Terminals',
          value: 'Largest terminal, with on-dock rail',
        },
        {
          label: 'Rail',
          value: 'On-dock double-stack trains to Detroit, Chicago, Kansas City and Columbus',
        },
        {
          label: 'China',
          value: 'Number one import partner by tonnage in 2025',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are The Port of Virginia\'s own.',
      ],
    },
    travel: [
      [
        'The Port of Virginia has direct connections to Asia and a 55-foot channel, the deepest on the US East Coast since February 2026. China was its number one import partner by tonnage in 2025.',
      ],
      [
        'Ships from China call at Norfolk directly on Asia services, by the port\'s account. From there, on-dock trains run to Detroit, Chicago, Kansas City and Columbus.',
      ],
    ],
    dutyNote: US_DUTY_NOTE,
    usFeeExample: {
      product: 'household goods',
      why: 'An example only: both fees are a share of the value of the goods, so the sums work the same way for any product.',
      goodsValueUsd: 35000,
    },
    inland: {
      from: 'Norfolk International Terminals',
      source: 'osm',
      places: [
        {
          name: 'Virginia Beach',
          km: 39,
        },
        {
          name: 'Richmond',
          km: 146,
        },
        {
          name: 'Raleigh',
          km: 303,
        },
        {
          name: 'Washington, DC',
          km: 307,
        },
      ],
    },
    faqs: [
      {
        question: 'Can my container go from Norfolk to the Midwest by train?',
        answer: 'Yes. The Port of Virginia runs on-dock double-stack trains to Detroit, Chicago, Kansas City and Columbus.',
      },
      {
        question: 'How deep is the Port of Virginia?',
        answer: 'The port says its channel is 55 feet deep, the deepest on the US East Coast, since dredging finished in February 2026.',
      },
    ],
    sources: [
      {
        label: 'Virginia Port Authority: 2025 Trade Overview (PDF)',
        url: 'https://wp.portofvirginia.com/wp-content/uploads/2026/03/2025-Trade-Overview.pdf',
      },
      {
        label: 'Port Debuts the Deepest Harbor on US East Coast, Marks Progress on North Berth Project - Port of Virginia',
        url: 'https://www.portofvirginia.com/news/port-debuts-the-deepest-harbor-on-us-east-coast-marks-progress-on-north-berth-project/',
      },
      {
        label: 'Our Capabilities | The Port of Virginia',
        url: 'https://www.portofvirginia.com/gateway/capabilities/',
      },
      {
        label: 'Rail Capabilities | The Port of Virginia',
        url: 'https://www.portofvirginia.com/gateway/rail/',
      },
      {
        label: 'Virginia is First US East Coast Stop for CMA CGM’s Upgraded Chesapeake Bay Express Vessel Service - Port of Virginia',
        url: 'https://www.portofvirginia.com/news/virginia-is-first-us-east-coast-stop-for-cma-cgms-upgraded-chesapeake-bay-express-vessel-service/',
      },
      ...US_FEE_SOURCES,
    ],
  },
  {
    id: 'wilmington',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United States', href: '/shipping-china-to-united-states' },
    port: {
      name: 'Port of Wilmington (North Carolina)',
      operator: 'North Carolina State Ports Authority',
      facts: [
        {
          label: 'Channel and berths',
          value: '42-foot channel, nine berths, 7 container cranes',
        },
        {
          label: 'Terminal capacity',
          value: '600,000 TEU',
        },
        {
          label: 'Container gate',
          value: 'Monday to Friday 7:00 to 18:00',
        },
        {
          label: 'Truck turn times',
          value: 'About 18 minutes for a single move',
        },
        {
          label: 'Rail',
          value: 'CSX; next-day service to Charlotte, 5 days to Chicago',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'All figures are NC Ports\' own.',
      ],
    },
    travel: [
      [
        'The Port of Wilmington has container service to and from more than 20 international ports, NC Ports says, with a 42-foot channel. Whether your container comes direct from China or changes at another port depends on the line.',
      ],
      [
        'Wilmington is North Carolina\'s container port. Ask us whether the sailing we quote calls direct or connects through another US East Coast port.',
      ],
    ],
    dutyNote: US_DUTY_NOTE,
    usFeeExample: {
      product: 'household goods',
      why: 'An example only: both fees are a share of the value of the goods, so the sums work the same way for any product.',
      goodsValueUsd: 25000,
    },
    inland: {
      from: 'the Port of Wilmington',
      source: 'osm',
      places: [
        {
          name: 'Fayetteville, North Carolina',
          km: 146,
        },
        {
          name: 'Raleigh',
          km: 213,
        },
        {
          name: 'Charlotte',
          km: 321,
        },
        {
          name: 'Greensboro',
          km: 338,
        },
      ],
    },
    faqs: [
      {
        question: 'When is the Wilmington container gate open?',
        answer: 'NC Ports gives the container gate hours as Monday to Friday 7:00 to 18:00, with last receiving at 17:30.',
      },
      {
        question: 'Can my container go from Wilmington to Charlotte by train?',
        answer: 'Yes. NC Ports lists CSX\'s Queen City Express, with next-day service to Charlotte.',
      },
    ],
    sources: [
      {
        label: 'Port of Wilmington - NC Ports',
        url: 'https://ncports.com/port-facilities/port-of-wilmington/',
      },
      {
        label: 'Furniture - NC Ports',
        url: 'https://ncports.com/furniture/',
      },
      ...US_FEE_SOURCES,
    ],
  },
  {
    id: 'atlanta',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United States', href: '/shipping-china-to-united-states' },
    port: {
      name: 'Atlanta, by rail from the Port of Savannah',
      operator: 'Georgia Ports Authority (Savannah) and Norfolk Southern (Atlanta)',
      facts: [
        {
          label: 'Seaport',
          value: 'Port of Savannah; the Georgia Ports Authority names Atlanta as a key rail market',
        },
        {
          label: 'Rail to inland markets',
          value: 'Less than three days on Mason Mega Rail',
        },
        {
          label: 'Ship to rail',
          value: 'About 20 hours',
        },
        {
          label: 'Rail at the port',
          value: '42 trains a week',
        },
        {
          label: 'Rail terminals in Atlanta',
          value: 'Norfolk Southern, Inman and Austell; Austell takes ocean containers',
        },
      ],
      notes: [
        'Figures are from the Georgia Ports Authority and Norfolk Southern.',
      ],
    },
    travel: [
      [
        'Atlanta is inland, so the container sails from China to Savannah and goes on by train. The Georgia Ports Authority says its Mason Mega Rail moves cargo to key inland markets in less than three days, and names Atlanta among them.',
      ],
      [
        'There is no sea route to Atlanta. The container lands at the Port of Savannah and goes by rail to Norfolk Southern\'s Austell terminal, which handles ocean containers.',
      ],
    ],
    dutyNote: US_DUTY_NOTE,
    usFeeExample: {
      product: 'household goods',
      why: 'An example only: both fees are a share of the value of the goods, so the sums work the same way for any product.',
      goodsValueUsd: 30000,
    },
    inland: {
      from: 'Norfolk Southern\'s Austell terminal',
      source: 'osm',
      places: [
        {
          name: 'Marietta',
          km: 23,
        },
        {
          name: 'Gainesville, Georgia',
          km: 111,
        },
        {
          name: 'Chattanooga',
          km: 174,
        },
        {
          name: 'Birmingham, Alabama',
          km: 218,
        },
      ],
    },
    faqs: [
      {
        question: 'How long does the train take from Savannah to Atlanta?',
        answer: 'The Georgia Ports Authority says Mason Mega Rail moves cargo to key inland markets in less than three days, with about 20 hours from ship to rail.',
      },
      {
        question: 'Where do containers arrive in Atlanta?',
        answer: 'At Norfolk Southern\'s intermodal terminals; Austell is the one that handles ocean containers.',
      },
    ],
    sources: [
      {
        label: 'Mason Mega Rail - Georgia Ports Authority',
        url: 'https://gaports.com/rail/megarail/',
      },
      {
        label: 'A Stronger Southeast Network: Improved Service, Greater Reliability, and Room to Grow – Changes effective October 5, 2026 | Norfolk Southern',
        url: 'https://www.norfolksouthern.com/en/customer-alerts/service-alerts/a-stronger-southeast-network--improved-service--greater-reliability--and-room-to-grow',
      },
      ...US_FEE_SOURCES,
    ],
  },
  {
    id: 'denver',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to the United States', href: '/shipping-china-to-united-states' },
    port: {
      name: 'Denver, by rail from the West Coast',
      operator: 'Union Pacific and BNSF Railway',
      facts: [
        {
          label: 'Union Pacific Denver terminal',
          value: '4085 York Street, open 24 hours',
        },
        {
          label: 'Union Pacific to Los Angeles and Long Beach',
          value: 'On-dock lanes from Denver to four marine terminals (2021)',
        },
        {
          label: 'BNSF Denver terminal',
          value: '585 W. 53rd Place',
        },
      ],
      notes: [
        'From Union Pacific and BNSF Railway.',
      ],
    },
    travel: [
      [
        'Denver is inland, so the container sails from China to the West Coast and goes on by train. Union Pacific runs on-dock lanes between Denver and terminals in Los Angeles and Long Beach. The sea distance below is to Los Angeles.',
      ],
      [
        'There is no sea route to Denver. Your container lands at Los Angeles or Long Beach and finishes the trip on Union Pacific\'s on-dock lanes to Denver. BNSF also has a Denver terminal. Ask us which route the shipment we quote uses.',
      ],
    ],
    dutyNote: US_DUTY_NOTE,
    usFeeExample: {
      product: 'household goods',
      why: 'An example only: both fees are a share of the value of the goods, so the sums work the same way for any product.',
      goodsValueUsd: 30000,
    },
    inland: {
      from: 'Union Pacific\'s Denver terminal',
      source: 'osm',
      places: [
        {
          name: 'Aurora',
          km: 12,
        },
        {
          name: 'Fort Collins',
          km: 100,
        },
        {
          name: 'Colorado Springs',
          km: 113,
        },
        {
          name: 'Cheyenne, Wyoming',
          km: 159,
        },
      ],
    },
    faqs: [
      {
        question: 'Which seaport do containers for Denver come through?',
        answer: 'Union Pacific runs on-dock lanes from Los Angeles and Long Beach to Denver. BNSF also has an intermodal terminal in Denver. Ask us which route the shipment we quote uses.',
      },
      {
        question: 'Where is Union Pacific\'s Denver terminal?',
        answer: 'At 4085 York Street. Union Pacific lists it as open 24 hours a day, seven days a week.',
      },
    ],
    sources: [
      {
        label: 'Union Pacific and BNSF Railway: pdf up cust prem comp terminal (PDF)',
        url: 'https://www.up.com/cs/groups/public/@uprr/@customers/documents/up_pdf_nativedocs/pdf_up_cust_prem_comp_terminal.pdf',
      },
      {
        label: 'UP: All Intermodal',
        url: 'https://www.up.com/customers/announcements/intermodal/allintermodal/IM2021-47.html',
      },
      {
        label: 'Intermodal Service Options & Details | BNSF',
        url: 'https://www.bnsf.com/ship-with-bnsf/intermodal/service-options-and-details.html',
      },
      {
        label: 'Union Pacific and BNSF Railway: intermodal resource guide (PDF)',
        url: 'https://www.bnsf.com/bnsf-resources/pdf/ship-with-bnsf/intermodal/intermodal-resource-guide.pdf',
      },
      ...US_FEE_SOURCES,
    ],
  },
  {
    id: 'vancouver',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Canada', href: '/shipping-china-to-canada' },
    port: {
      name: 'Port of Vancouver',
      operator: 'Vancouver Fraser Port Authority',
      facts: [
        {
          label: 'Containers in 2024',
          value: '3,473,822 TEU, up 11%',
        },
        {
          label: 'Largest source of inbound cargo',
          value: 'China, 9,913,021 tonnes in 2024',
        },
        {
          label: 'Container terminals',
          value: 'Centerm, Fraser Surrey (DP World), Vanterm and Deltaport (GCT)',
        },
        {
          label: 'Railways',
          value: 'CN, CPKC and BNSF',
        },
        {
          label: 'Rail at Deltaport',
          value: 'Served by CN and CPKC, 1.9 million TEU a year of rail capacity',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'Figures are from the Vancouver Fraser Port Authority and GCT.',
      ],
    },
    travel: [
      [
        'Vancouver is Canada\'s main door for goods from China: the port authority says China is its largest source of inbound cargo. Ships cross the North Pacific and call directly at its four container terminals.',
      ],
      [
        'Ships from China sail straight across the Pacific to Vancouver. Three railways, CN, CPKC and BNSF, take containers on inland from its terminals.',
      ],
    ],
    dutyNote: 'We have not put a single duty figure on this page. Canada charges duty on the value for duty, which in most cases is the price you paid the seller, and then 5% GST on the value plus the duty (Canada Border Services Agency). The duty rate depends on the product\'s tariff code, and a surtax can apply on top. We work it out for your product when we quote.',
    inland: {
      from: 'Centerm, Port of Vancouver',
      source: 'osm',
      places: [
        {
          name: 'Surrey',
          km: 26,
        },
        {
          name: 'Abbotsford',
          km: 67,
        },
        {
          name: 'Kelowna',
          km: 390,
        },
        {
          name: 'Calgary',
          km: 974,
        },
      ],
    },
    faqs: [
      {
        question: 'Can my container go from Vancouver to the rest of Canada by train?',
        answer: 'Yes. The port is served by CN, CPKC and BNSF, and Deltaport has on-dock rail with CN and CPKC.',
      },
      {
        question: 'Which terminal will my container use in Vancouver?',
        answer: 'It depends on the line: Centerm, Vanterm, Deltaport or Fraser Surrey. We tell you when we confirm the booking.',
      },
    ],
    sources: [
      {
        label: 'Vancouver Fraser Port Authority: 2024 Port of Vancouver Statistics Overview %28EN%29 (PDF)',
        url: 'https://www.portvancouver.com/sites/default/files/2025-03/2024%20Port%20of%20Vancouver%20Statistics%20Overview%20%28EN%29.pdf',
      },
      {
        label: 'Port of Vancouver: Helping CN connect customers to the world|cn.ca',
        url: 'https://www.cn.ca/en/stories/20241213-port-of-vancouver/',
      },
      {
        label: 'Vancouver Fraser Port Authority: 2025 03 07 2024 Key facts brochure EN web (PDF)',
        url: 'https://www.portvancouver.com/sites/default/files/2025-03/2025-03-07%202024%20Key%20facts%20brochure_EN-web.pdf',
      },
      {
        label: 'Vancouver Fraser Port Authority: GCT TerminalOverview FactsSheet 3B (PDF)',
        url: 'https://globalterminals.com/wp-content/uploads/2026/02/GCT_TerminalOverview-FactsSheet_3B.pdf',
      },
      {
        label: 'Canada Border Services Agency, Importing commercial goods into Canada (guide)',
        url: 'https://www.cbsa-asfc.gc.ca/import/guide-3-eng.html',
      },
    ],
  },
  {
    id: 'montreal',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Canada', href: '/shipping-china-to-canada' },
    port: {
      name: 'Port of Montreal',
      operator: 'Montreal Port Authority (terminals run by MGTP and Termont)',
      facts: [
        {
          label: 'Containers in 2024',
          value: '1,464,300 TEU (preliminary, Transport Canada)',
        },
        {
          label: 'Rail on the docks',
          value: 'About 100 km of port rail, linked straight to CN',
        },
        {
          label: 'CN rail times',
          value: 'Toronto 1 day, Chicago 2 days',
        },
        {
          label: 'Terminal operators',
          value: 'MGTP and Termont',
        },
        {
          label: 'Free storage at Termont',
          value: 'First 5 calendar days for imports',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'From the Montreal Port Authority, Termont, CN and Transport Canada.',
      ],
    },
    travel: [
      [
        'Montreal is up the St. Lawrence River. Its terminals are linked to CN by about 100 km of port rail, and CN gives one day by train to Toronto. Whether your container comes direct from Asia or changes ship on the way depends on the line.',
      ],
      [
        'Ships for Montreal sail up the St. Lawrence. Ask us whether the sailing we quote is direct or transships at another port; either way, the port\'s own rail puts Toronto a day away by CN.',
      ],
    ],
    dutyNote: 'We have not put a single duty figure on this page. Canada charges duty on the value for duty, which in most cases is the price you paid the seller, and then 5% GST on the value plus the duty (Canada Border Services Agency). The duty rate depends on the product\'s tariff code, and a surtax can apply on top. We work it out for your product when we quote.',
    inland: {
      from: 'the Port of Montreal',
      source: 'osm',
      places: [
        {
          name: 'Laval',
          km: 21,
        },
        {
          name: 'Sherbrooke',
          km: 163,
        },
        {
          name: 'Ottawa',
          km: 206,
        },
        {
          name: 'Quebec City',
          km: 248,
        },
      ],
    },
    faqs: [
      {
        question: 'How long can an import container stay free at Montreal?',
        answer: 'At Termont\'s terminals, the first 5 calendar days are free of storage, then a daily fee applies.',
      },
      {
        question: 'How long is the train from Montreal to Toronto?',
        answer: 'CN gives about one day from the Port of Montreal to Toronto, and two days to Chicago.',
      },
    ],
    sources: [
      {
        label: 'Table M18: Containerized Freight Volumes for Selected Ports, 2015-2024',
        url: 'https://tdih-cdit.tc.canada.ca/en/addendum-tables-2024/M18',
      },
      {
        label: 'The Port of Montreal: A Key North American Trade Gateway |cn.ca',
        url: 'https://www.cn.ca/en/stories/20260303-the-port-of-montreal/',
      },
      {
        label: 'Costs & Tariffs | Termont Montreal',
        url: 'https://termont.com/costs/',
      },
      {
        label: 'Canada Border Services Agency, Importing commercial goods into Canada (guide)',
        url: 'https://www.cbsa-asfc.gc.ca/import/guide-3-eng.html',
      },
    ],
  },
  {
    id: 'halifax',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Canada', href: '/shipping-china-to-canada' },
    port: {
      name: 'Port of Halifax',
      operator: 'Halifax Port Authority',
      facts: [
        {
          label: 'Containers in 2024',
          value: '509,300 TEU (preliminary, Transport Canada)',
        },
        {
          label: 'Largest ships',
          value: 'The only port on Canada\'s East Coast for ships of up to 18,000 TEU',
        },
        {
          label: 'Cranes and rail',
          value: '10 ship-to-shore cranes, 18,000 feet of on-dock rail',
        },
        {
          label: 'CN rail times',
          value: 'Montreal 1 day, Toronto 2 days, Chicago 3 days',
        },
        {
          label: 'Inland rail',
          value: 'CN only',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'From the Halifax Port Authority, CN and Transport Canada.',
      ],
    },
    travel: [
      [
        'Halifax has a natural deep harbour and says it is the only port on Canada\'s East Coast that can take ships of up to 18,000 TEU. Whether your container comes on one ship from Asia or changes on the way depends on the line.',
      ],
      [
        'Ships from China reach Halifax on Canada\'s Atlantic coast. From the port, CN trains reach Montreal in a day and Toronto in two.',
      ],
    ],
    dutyNote: 'We have not put a single duty figure on this page. Canada charges duty on the value for duty, which in most cases is the price you paid the seller, and then 5% GST on the value plus the duty (Canada Border Services Agency). The duty rate depends on the product\'s tariff code, and a surtax can apply on top. We work it out for your product when we quote.',
    inland: {
      from: 'the Port of Halifax',
      source: 'osm',
      places: [
        {
          name: 'Truro',
          km: 97,
        },
        {
          name: 'Moncton',
          km: 265,
        },
        {
          name: 'Montreal',
          km: 1200,
        },
      ],
    },
    faqs: [
      {
        question: 'How long is the train from Halifax to Toronto?',
        answer: 'CN gives about two days from Halifax to Toronto, one day to Montreal and three days to Chicago.',
      },
      {
        question: 'Can Halifax take the largest ships?',
        answer: 'The port says it is the only one on Canada\'s East Coast that can handle ships of up to 18,000 TEU.',
      },
    ],
    sources: [
      {
        label: 'Table M18: Containerized Freight Volumes for Selected Ports, 2015-2024',
        url: 'https://tdih-cdit.tc.canada.ca/en/addendum-tables-2024/M18',
      },
      {
        label: 'Halifax Port Authority: nr260520 (PDF)',
        url: 'https://www.globalpsa.com/wp-content/uploads/2026/05/nr260520.pdf',
      },
      {
        label: 'Anchor in Halifax: The Atlantic Gateway to Trade |cn.ca',
        url: 'https://www.cn.ca/en/stories/20240307-the-port-of-halifax',
      },
      {
        label: 'Canada Border Services Agency, Importing commercial goods into Canada (guide)',
        url: 'https://www.cbsa-asfc.gc.ca/import/guide-3-eng.html',
      },
    ],
  },
  {
    id: 'toronto',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Canada', href: '/shipping-china-to-canada' },
    port: {
      name: 'Toronto rail terminals (CN Brampton, CPKC Vaughan)',
      operator: 'CN and CPKC',
      facts: [
        {
          label: 'CN Brampton terminal',
          value: 'Open 24 hours every day',
        },
        {
          label: 'Size',
          value: 'CN\'s biggest intermodal terminal',
        },
        {
          label: 'CPKC Vaughan',
          value: 'Serves Toronto, Brampton, Mississauga, Markham and Vaughan',
        },
        {
          label: 'Free time at CPKC Vaughan',
          value: '24 hours for shipping-line containers',
        },
        {
          label: 'Rail from Montreal',
          value: 'About 1 day by CN',
        },
        {
          label: 'Rail from Halifax',
          value: 'About 2 days by CN',
        },
      ],
      notes: [
        'From CN and CPKC.',
      ],
    },
    travel: [
      [
        'Toronto is inland, so the container sails from China to a seaport and finishes the trip by train. From the Port of Montreal, CN gives about one day to Toronto; from Halifax, about two. The sea distance below is to Montreal.',
      ],
      [
        'There is no deep-sea route to Toronto. The container lands at Montreal, Halifax or Vancouver and goes by train to CN\'s Brampton terminal or CPKC\'s Vaughan terminal. Ask us which way the shipment we quote goes.',
      ],
    ],
    dutyNote: 'We have not put a single duty figure on this page. Canada charges duty on the value for duty, which in most cases is the price you paid the seller, and then 5% GST on the value plus the duty (Canada Border Services Agency). The duty rate depends on the product\'s tariff code, and a surtax can apply on top. We work it out for your product when we quote.',
    inland: {
      from: 'CN Brampton Intermodal Terminal',
      source: 'osm',
      places: [
        {
          name: 'Mississauga',
          km: 21,
        },
        {
          name: 'Downtown Toronto',
          km: 41,
        },
        {
          name: 'Hamilton',
          km: 66,
        },
        {
          name: 'Kitchener',
          km: 85,
        },
      ],
    },
    faqs: [
      {
        question: 'Where do containers arrive in Toronto?',
        answer: 'At the railway terminals: CN Brampton, CN\'s biggest, or CPKC Vaughan, which serves Toronto, Brampton, Mississauga, Markham and Vaughan.',
      },
      {
        question: 'How much free time is there at CPKC Vaughan?',
        answer: 'CPKC gives shipping-line containers 24 hours of free time at Vaughan, so book collection early.',
      },
    ],
    sources: [
      {
        label: 'Intermodal Terminals | Our Network | Our Business | cn.ca',
        url: 'https://www.cn.ca/en/our-services/maps-and-network/intermodal-terminals/',
      },
      {
        label: 'Network and Facts| Community | Delivering Responsibly | cn.ca',
        url: 'https://www.cn.ca/en/delivering-responsibly/community/network-and-facts/',
      },
      {
        label: 'CN and CPKC: CPKC 3 Effective 2025 11 01 (PDF)',
        url: 'https://www.cpkcr.com/content/dam/cpkc/documents/english/pdfs/tariffs/cp/CPKC-3-Effective-2025-11-01.pdf',
      },
      {
        label: 'The Port of Montreal: A Key North American Trade Gateway |cn.ca',
        url: 'https://www.cn.ca/en/stories/20260303-the-port-of-montreal/',
      },
      {
        label: 'Anchor in Halifax: The Atlantic Gateway to Trade |cn.ca',
        url: 'https://www.cn.ca/en/stories/20240307-the-port-of-halifax',
      },
      {
        label: 'Canada Border Services Agency, Importing commercial goods into Canada (guide)',
        url: 'https://www.cbsa-asfc.gc.ca/import/guide-3-eng.html',
      },
    ],
  },
  {
    id: 'ottawa',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Canada', href: '/shipping-china-to-canada' },
    port: {
      name: 'Ottawa, via the Port of Montreal',
      operator: 'Montreal Port Authority (seaport)',
      facts: [
        {
          label: 'Seaport volume',
          value: 'Port of Montreal, 1,464,300 TEU in 2024 (preliminary)',
        },
        {
          label: 'Free storage at Termont (Montreal)',
          value: 'First 5 calendar days for imports',
        },
        {
          label: 'Termont truck hours',
          value: '6 a.m. to 10 p.m., Monday to Friday',
        },
      ],
      notes: [
        'From the Montreal Port Authority, Termont and Transport Canada.',
      ],
    },
    travel: [
      [
        'Ottawa is inland. Containers for Ottawa land at the Port of Montreal and finish the trip by truck. Neither railway lists a container terminal in Ottawa.',
      ],
      [
        'There is no sea route to Ottawa. The container is unloaded at Montreal, where Termont\'s truck hours are 6 a.m. to 10 p.m. on weekdays, and driven on to Ottawa.',
      ],
    ],
    dutyNote: 'We have not put a single duty figure on this page. Canada charges duty on the value for duty, which in most cases is the price you paid the seller, and then 5% GST on the value plus the duty (Canada Border Services Agency). The duty rate depends on the product\'s tariff code, and a surtax can apply on top. We work it out for your product when we quote.',
    inland: {
      from: 'the Port of Montreal',
      source: 'osm',
      places: [
        {
          name: 'Cornwall',
          km: 122,
        },
        {
          name: 'Ottawa',
          km: 206,
        },
        {
          name: 'Gatineau',
          km: 207,
        },
        {
          name: 'Kingston',
          km: 295,
        },
      ],
    },
    faqs: [
      {
        question: 'Is there a container rail terminal in Ottawa?',
        answer: 'We found none listed by CN or CPKC. Containers for Ottawa usually come by truck from the Port of Montreal.',
      },
      {
        question: 'When can a truck collect at the Montreal terminal?',
        answer: 'Termont gives normal truck hours as 6 a.m. to 10 p.m., Monday to Friday.',
      },
    ],
    sources: [
      {
        label: 'Table M18: Containerized Freight Volumes for Selected Ports, 2015-2024',
        url: 'https://tdih-cdit.tc.canada.ca/en/addendum-tables-2024/M18',
      },
      {
        label: 'Costs & Tariffs | Termont Montreal',
        url: 'https://termont.com/costs/',
      },
      {
        label: 'Canada Border Services Agency, Importing commercial goods into Canada (guide)',
        url: 'https://www.cbsa-asfc.gc.ca/import/guide-3-eng.html',
      },
    ],
  },
  {
    id: 'regina',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Canada', href: '/shipping-china-to-canada' },
    port: {
      name: 'Regina rail terminals (CPKC at the Global Transportation Hub, CN East Regina)',
      operator: 'CPKC and CN',
      facts: [
        {
          label: 'CPKC terminal',
          value: 'At the Global Transportation Hub in Regina',
        },
        {
          label: 'Railways at the hub',
          value: 'CPKC main line plus a new link to CN',
        },
        {
          label: 'CN East Regina hours',
          value: 'Monday to Saturday 6:00 to 18:00, Sunday 8:00 to 16:00',
        },
        {
          label: 'Roads',
          value: '15 minutes to downtown Regina, 4 to the Trans-Canada Highway',
        },
      ],
      notes: [
        'From CPKC, CN and the Global Transportation Hub Authority.',
      ],
    },
    travel: [
      [
        'Regina is inland, so the container sails from China to Vancouver and goes on by train. CN and CPKC both serve Vancouver and both reach Regina: CPKC at the Global Transportation Hub and CN at East Regina.',
      ],
      [
        'There is no sea route to Regina. The container lands at Vancouver after a North Pacific crossing and finishes the trip by rail to Regina.',
      ],
    ],
    dutyNote: 'We have not put a single duty figure on this page. Canada charges duty on the value for duty, which in most cases is the price you paid the seller, and then 5% GST on the value plus the duty (Canada Border Services Agency). The duty rate depends on the product\'s tariff code, and a surtax can apply on top. We work it out for your product when we quote.',
    inland: {
      from: 'the Global Transportation Hub, Regina',
      source: 'osm',
      places: [
        {
          name: 'Downtown Regina',
          km: 12,
        },
        {
          name: 'Moose Jaw',
          km: 68,
        },
        {
          name: 'Yorkton',
          km: 212,
        },
        {
          name: 'Saskatoon',
          km: 260,
        },
      ],
    },
    faqs: [
      {
        question: 'Which railway brings containers to Regina?',
        answer: 'Either. CPKC has its terminal at the Global Transportation Hub, and CN has its East Regina terminal.',
      },
      {
        question: 'When is CN\'s East Regina terminal open?',
        answer: 'Monday to Saturday 6:00 to 18:00 and Sunday 8:00 to 16:00, by CN\'s own listing.',
      },
    ],
    sources: [
      {
        label: 'CPKC and CN: 2025 10 29 GTH One Pager Factsheet (PDF)',
        url: 'https://thegth.com/wp-content/uploads/2025/11/2025-10-29-GTH-One-Pager-Factsheet.pdf',
      },
      {
        label: 'Intermodal Terminals | Our Network | Our Business | cn.ca',
        url: 'https://www.cn.ca/en/our-services/maps-and-network/intermodal-terminals/',
      },
      {
        label: 'Vancouver Fraser Port Authority: 2025 03 07 2024 Key facts brochure EN web (PDF)',
        url: 'https://www.portvancouver.com/sites/default/files/2025-03/2025-03-07%202024%20Key%20facts%20brochure_EN-web.pdf',
      },
      {
        label: 'Canada Border Services Agency, Importing commercial goods into Canada (guide)',
        url: 'https://www.cbsa-asfc.gc.ca/import/guide-3-eng.html',
      },
    ],
  },
  {
    id: 'sydney',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Australia', href: '/shipping-china-to-australia' },
    port: {
      name: 'Port Botany, Sydney',
      operator: 'NSW Ports (terminals run by DP World, Patrick and Hutchison Ports)',
      facts: [
        {
          label: 'Volume',
          value: 'Over 2.8 million containers a year (Port Authority of NSW, 2024-25)',
        },
        {
          label: 'Ship visits',
          value: '1,566 in the year to June 2025',
        },
        {
          label: 'Container terminals',
          value: 'DP World, Patrick and Hutchison Ports',
        },
        {
          label: 'Largest terminal',
          value: 'Patrick, 1.4 km of quay, 1.6 million TEU capacity',
        },
        {
          label: 'Hutchison Ports Sydney',
          value: '1,300 m of quay, two 600 m rail sidings, generally open 24/7',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'From the Port Authority of New South Wales and the terminal operators.',
      ],
    },
    travel: [
      [
        'Port Botany is Sydney\'s container port, with three terminals run by DP World, Patrick and Hutchison Ports. Whether your container comes on one ship from China or changes at an Asian hub depends on the line.',
      ],
      [
        'Ships from China sail south to Port Botany, with no canal on the way. The port takes about 1,600 ship visits a year. Ask us whether the sailing we quote is direct.',
      ],
    ],
    dutyNote: 'We have not put a single duty figure on this page. Under the China-Australia Free Trade Agreement, goods from China can enter duty-free or at a reduced rate if the origin paperwork is right; if the claim fails, the general rate applies (Australian Border Force). GST is 10% of the value of the taxable importation, which adds the duty, sea freight and insurance to the customs value. We work it out for your product when we quote.',
    inland: {
      from: 'Port Botany',
      source: 'osm',
      places: [
        {
          name: 'Parramatta',
          km: 34,
        },
        {
          name: 'Wollongong',
          km: 79,
        },
        {
          name: 'Newcastle',
          km: 175,
        },
        {
          name: 'Canberra',
          km: 290,
        },
      ],
    },
    faqs: [
      {
        question: 'Which terminal will my container use at Port Botany?',
        answer: 'It depends on the line: DP World, Patrick or Hutchison Ports. We tell you when we confirm the booking.',
      },
      {
        question: 'Do goods from China pay duty in Australia?',
        answer: 'Often not, or less. Under the China-Australia Free Trade Agreement, goods from China can enter duty-free or at a reduced rate with the right origin paperwork, by the Australian Border Force\'s rules. GST of 10% still applies.',
      },
    ],
    sources: [
      {
        label: 'NSW Ports: Port Authority of NSW Annual Report 2024 25 (PDF)',
        url: 'https://www.portauthoritynsw.com.au/sites/default/files/2025-12/Port%20Authority%20of%20NSW%20Annual%20Report%202024-25.pdf',
      },
      {
        label: 'Port Botany berths and facilities | Port Authority of NSW',
        url: 'https://www.portauthoritynsw.com.au/port-operations/port-botany/port-services-and-facilities/port-botany-berths-and-facilities',
      },
      {
        label: 'Patrick Terminals - Sydney AutoStrad - Patrick Terminals',
        url: 'https://patrick.com.au/locations/sydney/',
      },
      {
        label: 'Hutchisonports Sydney - Hutchison Ports Australia',
        url: 'https://www.hutchisonports.com.au/hutchisonports-sydney/',
      },
      {
        label: 'Australian Border Force, Importing: GST and the value of the taxable importation',
        url: 'https://www.abf.gov.au/importing-exporting-and-manufacturing/importing',
      },
      {
        label: 'Australian Border Force, Customs Notice 2015/41: China-Australia Free Trade Agreement',
        url: 'https://www.abf.gov.au/help-and-support-subsite/CustomsNotices/2015-41',
      },
    ],
  },
  {
    id: 'fremantle',
    checked: 'November 2026',
    countryGuide: { label: 'Shipping from China to Australia', href: '/shipping-china-to-australia' },
    port: {
      name: 'Port of Fremantle, Inner Harbour',
      operator: 'Fremantle Ports (Western Australian government)',
      facts: [
        {
          label: 'Containers in 2025-26',
          value: '920,521 TEU, a record, up 3.7%',
        },
        {
          label: 'By rail',
          value: '26.4% of container trade, more than 240,000 TEU',
        },
        {
          label: 'Share of Western Australia',
          value: 'More than 99% of its container trade',
        },
        {
          label: 'Largest ships',
          value: 'Up to 12,000 TEU',
        },
        {
          label: 'Patrick terminal',
          value: '700,000 TEU capacity, 646 m of quay, 4 cranes',
        },
      ],
      notes: [
        'TEU is the standard count for containers. One 40-foot container is 2 TEU.',
        'From Fremantle Ports and Patrick.',
      ],
    },
    travel: [
      [
        'Fremantle is Western Australia\'s container port: Fremantle Ports says more than 99% of the state\'s container trade comes through it. Whether your container comes on one ship or changes at an Asian hub depends on the line.',
      ],
      [
        'Ships from China sail south to Fremantle, with no canal on the way. The harbour takes ships of up to 12,000 TEU, and about a quarter of its containers go on by rail.',
      ],
    ],
    dutyNote: 'We have not put a single duty figure on this page. Under the China-Australia Free Trade Agreement, goods from China can enter duty-free or at a reduced rate if the origin paperwork is right; if the claim fails, the general rate applies (Australian Border Force). GST is 10% of the value of the taxable importation, which adds the duty, sea freight and insurance to the customs value. We work it out for your product when we quote.',
    inland: {
      from: 'the Port of Fremantle',
      source: 'osm',
      places: [
        {
          name: 'Perth',
          km: 18,
        },
        {
          name: 'Rockingham',
          km: 33,
        },
        {
          name: 'Mandurah',
          km: 71,
        },
        {
          name: 'Bunbury',
          km: 171,
        },
      ],
    },
    faqs: [
      {
        question: 'Can my container go from Fremantle by train?',
        answer: 'Yes. Fremantle Ports says 26.4% of container trade, more than 240,000 TEU, went by rail in 2025-26, to terminals at Forrestfield, Kwinana, Rockingham and Kenwick.',
      },
      {
        question: 'Do goods from China pay duty in Australia?',
        answer: 'Often not, or less. Under the China-Australia Free Trade Agreement, goods from China can enter duty-free or at a reduced rate with the right origin paperwork, by the Australian Border Force\'s rules. GST of 10% still applies.',
      },
    ],
    sources: [
      {
        label: 'Western Australia sets national record for container freight on rail | Western Australian Government',
        url: 'https://www.wa.gov.au/government/media-statements/Cook%20Labor%20Government/Western-Australia-sets-national-record-for-container-freight-on-rail--20260809',
      },
      {
        label: 'Why Westport – Planning WA’s Future Container Port in Kwinana',
        url: 'https://westport.wa.gov.au/about/why-westport',
      },
      {
        label: 'Patrick Terminals - Fremantle - Patrick Terminals',
        url: 'https://patrick.com.au/locations/patrick-terminals-fremantle/',
      },
      {
        label: 'Australian Border Force, Importing: GST and the value of the taxable importation',
        url: 'https://www.abf.gov.au/importing-exporting-and-manufacturing/importing',
      },
      {
        label: 'Australian Border Force, Customs Notice 2015/41: China-Australia Free Trade Agreement',
        url: 'https://www.abf.gov.au/help-and-support-subsite/CustomsNotices/2015-41',
      },
    ],
  },
];
