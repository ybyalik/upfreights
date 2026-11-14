import type { RouteOnlyPack } from './routePackShared';

/**
 * Route packs written by the rollout script (gen.py). Sea distances: searoute (restrictions northwest).
 * Do not edit by hand: edit the inputs and rerun gen.py.
 */
export const generatedRoutePacks: RouteOnlyPack[] = [
  {
    slug: 'dalian-to-aalesund',
    portId: 'aalesund',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Hamburg, Rotterdam or Antwerp, then a feeder ship to Ålesund.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11610,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14920,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Dalian to Ålesund is about 11,610 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Ålesund, Dalian is the eighth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Dalian to Ålesund?',
        answer: 'About 11,610 nautical miles through the Suez Canal, or about 14,920 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Dalian to Ålesund?',
        answer: 'No. The Flatholmen terminal operator names Hamburg, Rotterdam and Antwerp as its sea links. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-ancona',
    portId: 'ancona',
    updated: '2026-11-14',
    quickRoute: 'About 8,890 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8890,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14820,
      },
      note: 'Going round the Cape adds about 5,930 nautical miles, 67% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Dalian covers about 8,890 nautical miles to Ancona through the Suez Canal. Round Africa it is about 14,820.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Dalian to Ancona shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 8,890 nautical miles, against about 14,820 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Ancona?',
        answer: 'It depends on the line. The port authority says its container traffic draws the main global container lines. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-belfast',
    portId: 'belfast',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Rotterdam or another hub, then a feeder ship to Belfast.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10930,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14240,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Dalian to Belfast is about 10,930 nautical miles through the Suez Canal. Of the 7 Chinese ports on our list for Belfast, Dalian is the sixth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Dalian to Belfast?',
        answer: 'About 10,930 nautical miles through the Suez Canal, or about 14,240 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Dalian to Belfast?',
        answer: 'No. Belfast Harbour says CMA CGM\'s feeder service links its container terminal with UK and European ports, including Dunkirk and Rotterdam. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      2,
    ],
  },
  {
    slug: 'dalian-to-bergen',
    portId: 'bergen',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Bremerhaven, a smaller feeder to Bergen.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11470,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14790,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Dalian is the seventh closest of the 8 Chinese ports on our list for Bergen: about 11,470 nautical miles through the Suez Canal, or 14,790 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Dalian to Bergen by sea?',
        answer: 'About 11,470 nautical miles through the Suez Canal, or about 14,790 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Bergen?',
        answer: 'Yes, it changes ship. Bergen Havn says MSC runs a weekly feeder from Bremerhaven and Maersk a weekly feeder along the west coast. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-brevik',
    portId: 'brevik',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Rotterdam, Bremerhaven or Hamburg, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11440,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14760,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 29% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Dalian covers about 11,440 nautical miles to Brevik through the Suez Canal. Round Africa it is about 14,760.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Dalian to Brevik shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,440 nautical miles, against about 14,760 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Brevik?',
        answer: 'Yes, it changes ship. Grenland Havn says Unifeeder calls on routes to Rotterdam, Bremerhaven and Hamburg, where much cargo is moved to ocean ships. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-cagliari',
    portId: 'cagliari',
    updated: '2026-11-14',
    quickRoute: 'About 8,940 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8940,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13960,
      },
      note: 'Going round the Cape adds about 5,020 nautical miles, 56% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Dalian covers about 8,940 nautical miles to Cagliari through the Suez Canal. Round Africa it is about 13,960.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Dalian to Cagliari shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 8,940 nautical miles, against about 13,960 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Cagliari?',
        answer: 'It depends on the line. Large ships do call at Porto Canale: in July 2025 the MSC Venice, which can carry 16,652 TEU, docked there. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'dalian-to-civitavecchia',
    portId: 'civitavecchia',
    updated: '2026-11-14',
    quickRoute: 'About 8,940 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8940,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14120,
      },
      note: 'Going round the Cape adds about 5,180 nautical miles, 58% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Dalian covers about 8,940 nautical miles to Civitavecchia through the Suez Canal. Round Africa it is about 14,120.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Dalian to Civitavecchia shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 8,940 nautical miles, against about 14,120 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Civitavecchia?',
        answer: 'It depends on the line. The port authority recorded an 11,923 TEU MSC ship loading at the RTC container terminal in 2021. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'dalian-to-drammen',
    portId: 'drammen',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub, then a feeder ship to Drammen.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11500,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14820,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Dalian to Drammen is about 11,500 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Drammen, Dalian is the seventh closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Dalian to Drammen?',
        answer: 'About 11,500 nautical miles through the Suez Canal, or about 14,820 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Drammen?',
        answer: 'Yes, it changes ship. Drammen Havn says it has access to all the major European ports. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'dalian-to-floroe',
    portId: 'floroe',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11560,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14860,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Dalian to Floroe is about 11,560 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Floroe, Dalian is the eighth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Dalian to Floroe?',
        answer: 'About 11,560 nautical miles through the Suez Canal, or about 14,860 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Floroe?',
        answer: 'It depends on the line. Florø hamn lists container ships among the vessels its Botnastranda quay handles. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-gaevle',
    portId: 'gaevle',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a larger European port, then a feeder ship to Gävle.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 12070,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15390,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Dalian to Gävle is about 12,070 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Gävle, Dalian is the furthest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Dalian to Gävle?',
        answer: 'About 12,070 nautical miles through the Suez Canal, or about 15,390 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Dalian to Gävle?',
        answer: 'No. Gävle Hamn says containers come and go on feeder ships to and from larger European ports. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'dalian-to-genoa',
    portId: 'genoa',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9130,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14100,
      },
      note: 'Which way the ship goes changes the trip by about 4,970 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Dalian to Genoa is about 9,130 nautical miles through the Suez Canal.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Dalian to Genoa?',
        answer: 'About 9,130 nautical miles through the Suez Canal, or about 14,100 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Genoa?',
        answer: 'It depends on the line. Genoa is run by the same port authority as Savona-Vado, and some lines unload at Vado Ligure instead. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-gothenburg',
    portId: 'gothenburg',
    updated: '2026-11-14',
    quickRoute: 'Direct on some lines, with a change of ship on others.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11430,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14750,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Dalian to Gothenburg is about 11,430 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Gothenburg, Dalian is the eighth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Dalian to Gothenburg?',
        answer: 'About 11,430 nautical miles through the Suez Canal, or about 14,750 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Dalian to Gothenburg?',
        answer: 'Some do. The Port of Gothenburg lists direct services to China and other parts of Asia, plus daily feeder ships to the hubs on the continent. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'dalian-to-grangemouth',
    portId: 'grangemouth',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a bigger European port, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11290,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14610,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 29% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Dalian covers about 11,290 nautical miles to Grangemouth through the Suez Canal. Round Africa it is about 14,610.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Dalian to Grangemouth shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,290 nautical miles, against about 14,610 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Grangemouth?',
        answer: 'Yes, it changes ship. Forth Ports says Grangemouth has "regular feeder connections linking Scotland to major deep-sea shipping routes". So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'dalian-to-halmstad',
    portId: 'halmstad',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Bremerhaven or Hamburg, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11530,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14850,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 29% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Dalian covers about 11,530 nautical miles to Halmstad through the Suez Canal. Round Africa it is about 14,850.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Dalian to Halmstad shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,530 nautical miles, against about 14,850 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Halmstad?',
        answer: 'Yes, it changes ship. Hallands Hamnar says it has regular feeder traffic to Bremerhaven and Hamburg. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-haugesund',
    portId: 'haugesund',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Rotterdam or Hamburg, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11390,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14710,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 29% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Dalian covers about 11,390 nautical miles to Haugesund through the Suez Canal. Round Africa it is about 14,710.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Dalian to Haugesund shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,390 nautical miles, against about 14,710 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Dalian to Haugesund?',
        answer: 'No. Karmsund Havn says Samskip runs a weekly line between Rotterdam or Hamburg and western Norway. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-helsingborg',
    portId: 'helsingborg',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Hamburg, Bremerhaven or Rotterdam, a smaller feeder to Helsingborg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11520,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14840,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Dalian is the eighth closest of the 9 Chinese ports on our list for Helsingborg: about 11,520 nautical miles through the Suez Canal, or 14,840 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Dalian to Helsingborg by sea?',
        answer: 'About 11,520 nautical miles through the Suez Canal, or about 14,840 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Helsingborg?',
        answer: 'Yes, it changes ship. The port says its container lines run via Europe\'s large logistics hubs, and its line list shows Hamburg, Bremerhaven, Rotterdam and Antwerp. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'dalian-to-kristiansand',
    portId: 'kristiansand',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub, then a feeder ship to Kristiansand.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11350,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14670,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Dalian to Kristiansand is about 11,350 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Kristiansand, Dalian is the eighth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Dalian to Kristiansand?',
        answer: 'About 11,350 nautical miles through the Suez Canal, or about 14,670 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Dalian to Kristiansand?',
        answer: 'No. Kristiansand Havn says four lines call, Baltic Line, Unifeeder, Viasea and MSC, with routes to several European ports. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'dalian-to-la-spezia',
    portId: 'la-spezia',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9090,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14120,
      },
      note: 'Which way the ship goes changes the trip by about 5,020 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Dalian to La Spezia is about 9,090 nautical miles through the Suez Canal.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Dalian to La Spezia?',
        answer: 'About 9,090 nautical miles through the Suez Canal, or about 14,120 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and La Spezia?',
        answer: 'It depends on the line. LSCT, part of Contship Italia, runs the container terminal, which handled more than 1.2 million TEU in 2025. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'dalian-to-liverpool',
    portId: 'liverpool',
    updated: '2026-11-14',
    quickRoute: 'One ship or two, depending on the line. By Suez or round Africa.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10890,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14200,
      },
      note: 'Going round the Cape adds about 3,310 nautical miles, 30% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Dalian covers about 10,890 nautical miles to Liverpool through the Suez Canal. Round Africa it is about 14,200.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Dalian to Liverpool shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,890 nautical miles, against about 14,200 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Dalian to Liverpool?',
        answer: 'Some do. Peel Ports describes Liverpool2 as "a viable call" for Far East services, and says Royal Seaforth has feeder services that connect Liverpool to the Far East. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-livorno',
    portId: 'livorno',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9060,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14120,
      },
      note: 'Which way the ship goes changes the trip by about 5,060 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Dalian to Livorno is about 9,060 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Livorno, Dalian is the eighth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Dalian to Livorno?',
        answer: 'About 9,060 nautical miles through the Suez Canal, or about 14,120 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Livorno?',
        answer: 'It depends on the line. Terminal Darsena Toscana handles both ships that call direct and containers moved on from hub ports. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      2,
    ],
  },
  {
    slug: 'dalian-to-maaloey',
    portId: 'maaloey',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11560,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14860,
      },
      note: 'The route round Africa is about 3,310 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Dalian is the eighth closest of the 9 Chinese ports on our list for Måløy: about 11,560 nautical miles through the Suez Canal, or 14,860 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Dalian to Måløy by sea?',
        answer: 'About 11,560 nautical miles through the Suez Canal, or about 14,860 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Måløy?',
        answer: 'It depends on the line. Nordfjord Havn\'s quays at Måløy are 6.5 to 10 metres deep, which suits smaller coastal ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'dalian-to-melnik',
    portId: 'melnik',
    updated: '2026-11-14',
    quickRoute: 'A ship to Hamburg, then by train to Mělník.',
    distance: {
      via: 'the Suez Canal, to Hamburg',
      nauticalMiles: 11250,
      alternative: {
        via: 'the Cape of Good Hope, to Hamburg',
        nauticalMiles: 14570,
      },
      note: 'Sea distance to Hamburg. The container then goes on by train to Mělník.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'The sea leg from Dalian ends at Hamburg, about 11,250 nautical miles away by Suez. Of the 9 Chinese ports on our list for Mělník, Dalian is the eighth closest by sea.',
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Dalian to Mělník?',
        answer: 'About 11,250 nautical miles from Dalian to Hamburg through the Suez Canal, or about 14,570 round the Cape of Good Hope. Then the container goes on by train to Mělník. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Dalian to Mělník?',
        answer: 'By sea to Hamburg, then by train. ÖBB Rail Cargo Group runs nine to eleven trains a week between Hamburg or Bremerhaven and its Mělník terminal. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-mo-i-rana',
    portId: 'mo-i-rana',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11950,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15260,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Dalian to Mo i Rana is about 11,950 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Mo i Rana, Dalian is the seventh closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Dalian to Mo i Rana?',
        answer: 'About 11,950 nautical miles through the Suez Canal, or about 15,260 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Mo i Rana?',
        answer: 'It depends on the line. Toraneskaia has 8 metres of water and one mobile crane, which suits smaller ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'dalian-to-moss',
    portId: 'moss',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a European hub, a smaller feeder to Moss.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11480,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14800,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Dalian is the eighth closest of the 9 Chinese ports on our list for Moss: about 11,480 nautical miles through the Suez Canal, or 14,800 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Dalian to Moss by sea?',
        answer: 'About 11,480 nautical miles through the Suez Canal, or about 14,800 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Moss?',
        answer: 'Yes, it changes ship. Moss Havn says it has direct calls from Europe and that MSC has set up a regular call. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-naples',
    portId: 'naples',
    updated: '2026-11-14',
    quickRoute: 'About 8,810 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8810,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14210,
      },
      note: 'Going round the Cape adds about 5,400 nautical miles, 61% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Dalian covers about 8,810 nautical miles to Naples through the Suez Canal. Round Africa it is about 14,210.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Dalian to Naples shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 8,810 nautical miles, against about 14,210 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Naples?',
        answer: 'It depends on the line. Conateco says some lines use it as a hub for moving containers between ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-norrkoeping',
    portId: 'norrkoeping',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a bigger European port, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11910,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15230,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 28% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Dalian covers about 11,910 nautical miles to Norrköping through the Suez Canal. Round Africa it is about 15,230.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Dalian to Norrköping shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,910 nautical miles, against about 15,230 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Dalian to Norrköping?',
        answer: 'No. Its Pampus terminal has 610 metres of quay and two container cranes, a size served by smaller ships from the big European ports. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-orkanger',
    portId: 'orkanger',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11810,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15120,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Dalian to Orkanger is about 11,810 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Orkanger, Dalian is the eighth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Dalian to Orkanger?',
        answer: 'About 11,810 nautical miles through the Suez Canal, or about 15,120 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Orkanger?',
        answer: 'It depends on the line. Orkanger\'s quays have 10 metres of water, which suits the smaller ships that run from European hubs. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-oslo',
    portId: 'oslo',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a European hub, a smaller feeder to Oslo.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11510,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14820,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Dalian is the eighth closest of the 9 Chinese ports on our list for Oslo: about 11,510 nautical miles through the Suez Canal, or 14,820 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Dalian to Oslo by sea?',
        answer: 'About 11,510 nautical miles through the Suez Canal, or about 14,820 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Dalian to Oslo?',
        answer: 'No. Oslo Havn says it has weekly calls from container lines sailing between Oslo and ports across Europe. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-ravenna',
    portId: 'ravenna',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8950,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14880,
      },
      note: 'The route round Africa is about 5,930 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Dalian is the seventh closest of the 8 Chinese ports on our list for Ravenna: about 8,950 nautical miles through the Suez Canal, or 14,880 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Dalian to Ravenna by sea?',
        answer: 'About 8,950 nautical miles through the Suez Canal, or about 14,880 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Ravenna?',
        answer: 'It depends on the line. Terminal Container Ravenna lists shuttle ships to Trieste and to Gioia Tauro, a big transshipment hub. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'dalian-to-salerno',
    portId: 'salerno',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Gioia Tauro or another Mediterranean hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8790,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14230,
      },
      note: 'Going round the Cape adds about 5,440 nautical miles, 62% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Dalian covers about 8,790 nautical miles to Salerno through the Suez Canal. Round Africa it is about 14,230.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Dalian to Salerno shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 8,790 nautical miles, against about 14,230 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Dalian to Salerno?',
        answer: 'No. The port authority says Salerno is linked by feeder service with the Mediterranean transshipment ports, in particular Gioia Tauro. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'dalian-to-south-shields',
    portId: 'south-shields',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Felixstowe or Rotterdam, then a feeder ship to the Port of Tyne.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11170,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14490,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Dalian to the Port of Tyne is about 11,170 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for the Port of Tyne, Dalian is the eighth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Dalian to the Port of Tyne?',
        answer: 'About 11,170 nautical miles through the Suez Canal, or about 14,490 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Dalian to the Port of Tyne?',
        answer: 'No. The port says its short-sea feeder services connect it with Felixstowe, Rotterdam and beyond. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-stavanger',
    portId: 'stavanger',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a European hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11400,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14720,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 29% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Dalian covers about 11,400 nautical miles to Stavanger through the Suez Canal. Round Africa it is about 14,720.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Dalian to Stavanger shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,400 nautical miles, against about 14,720 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Stavanger?',
        answer: 'Yes, it changes ship. Stavangerregionen Havn says several liner companies call every week, mostly with containers. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-straumen',
    portId: 'straumen',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11990,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15300,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Dalian to Straumen is about 11,990 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Straumen, Dalian is the eighth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Dalian to Straumen?',
        answer: 'About 11,990 nautical miles through the Suez Canal, or about 15,300 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Straumen?',
        answer: 'It depends on the line. North Sea Container Line uses the quay and has applied to deepen it from about 7 to 9 metres. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'dalian-to-svelgen',
    portId: 'svelgen',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11560,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14860,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Dalian to Svelgen is about 11,560 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Svelgen, Dalian is the eighth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Dalian to Svelgen?',
        answer: 'About 11,560 nautical miles through the Suez Canal, or about 14,860 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Svelgen?',
        answer: 'It depends on the line. Svelgen\'s quay mainly serves Elkem\'s plant, and Elkem applied in 2024 to upgrade it for larger container ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'dalian-to-teesport',
    portId: 'teesport',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub port, then a feeder ship to Teesport.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11150,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14470,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Dalian to Teesport is about 11,150 nautical miles through the Suez Canal. Of the 7 Chinese ports on our list for Teesport, Dalian is the sixth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Dalian to Teesport?',
        answer: 'About 11,150 nautical miles through the Suez Canal, or about 14,470 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Dalian and Teesport?',
        answer: 'Yes, it changes ship. PD Ports says Teesport has "direct connections to the major hub ports of Europe", with over 20 ship calls a week. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'dalian-to-trieste',
    portId: 'trieste',
    updated: '2026-11-14',
    quickRoute: 'Some lines sail direct to Trieste; others change ship at a hub.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9000,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14930,
      },
      note: 'The route round Africa is about 5,930 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Dalian is the furthest of the 3 Chinese ports on our list for Trieste: about 9,000 nautical miles through the Suez Canal, or 14,930 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Dalian to Trieste by sea?',
        answer: 'About 9,000 nautical miles through the Suez Canal, or about 14,930 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Dalian to Trieste?',
        answer: 'Some do. Trieste Marine Terminal lists weekly direct services from the Far East, plus links through the main Mediterranean hubs. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'dalian-to-venice',
    portId: 'venice',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Piraeus, Malta or Damietta, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8990,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14920,
      },
      note: 'Going round the Cape adds about 5,930 nautical miles, 66% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Dalian covers about 8,990 nautical miles to Venice through the Suez Canal. Round Africa it is about 14,920.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Dalian to Venice shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 8,990 nautical miles, against about 14,920 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Dalian to Venice?',
        answer: 'No. Vecon says its routes to the Far East run through the hub ports of Piraeus, Malta and Damietta. So the container travels from Dalian on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-aalesund',
    portId: 'aalesund',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Hamburg, Rotterdam or Antwerp, then a feeder ship to Ålesund.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10450,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13780,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Guangzhou to Ålesund is about 10,450 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Ålesund, Guangzhou is the third closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Ålesund?',
        answer: 'About 10,450 nautical miles through the Suez Canal, or about 13,780 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Guangzhou to Ålesund?',
        answer: 'No. The Flatholmen terminal operator names Hamburg, Rotterdam and Antwerp as its sea links. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-ancona',
    portId: 'ancona',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7740,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13680,
      },
      note: 'The route round Africa is about 5,940 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Guangzhou is the third closest of the 9 Chinese ports on our list for Ancona: about 7,740 nautical miles through the Suez Canal, or 13,680 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Guangzhou to Ancona by sea?',
        answer: 'About 7,740 nautical miles through the Suez Canal, or about 13,680 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Ancona?',
        answer: 'It depends on the line. The port authority says its container traffic draws the main global container lines. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-atlanta',
    portId: 'atlanta',
    updated: '2026-11-14',
    quickRoute: 'A ship to Savannah, then by train to Atlanta.',
    distance: {
      via: 'the Panama Canal, to Savannah',
      nauticalMiles: 11030,
      note: 'Sea distance to Savannah. The container then goes on by train to Atlanta.',
    },
    travel: [
      'An all-water service from Guangzhou to Atlanta crosses the Pacific and passes through the Panama Canal, about 11,030 nautical miles.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Guangzhou to Atlanta?',
        answer: 'About 11,030 nautical miles from Guangzhou to Savannah by the Panama Canal. Then the container goes on by train to Atlanta. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Guangzhou to Atlanta?',
        answer: 'By sea to Savannah, then by train. The Georgia Ports Authority says its Mason Mega Rail reaches key inland markets, Atlanta among them, in less than three days. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-awt-paskov',
    portId: 'awt-paskov',
    updated: '2026-11-14',
    quickRoute: 'A ship to Gdańsk, then by train to Paskov.',
    distance: {
      via: 'the Suez Canal, to Gdańsk',
      nauticalMiles: 10670,
      alternative: {
        via: 'the Cape of Good Hope, to Gdańsk',
        nauticalMiles: 14000,
      },
      note: 'Sea distance to Gdańsk. The container then goes on by train to Paskov.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'The sea leg from Guangzhou ends at Gdańsk, about 10,670 nautical miles away by Suez. Of the 8 Chinese ports on our list for Paskov, Guangzhou is the third closest by sea.',
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Guangzhou to Paskov?',
        answer: 'About 10,670 nautical miles from Guangzhou to Gdańsk through the Suez Canal, or about 14,000 round the Cape of Good Hope. Then the container goes on by train to Paskov. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Guangzhou to Paskov?',
        answer: 'By sea to Gdańsk, then by train. One rail link is ÖBB Rail Cargo Group\'s train between Gdańsk and Paskov. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-belfast',
    portId: 'belfast',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Rotterdam or another hub, a smaller feeder to Belfast.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9780,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13100,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Guangzhou is the third closest of the 7 Chinese ports on our list for Belfast: about 9,780 nautical miles through the Suez Canal, or 13,100 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Guangzhou to Belfast by sea?',
        answer: 'About 9,780 nautical miles through the Suez Canal, or about 13,100 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Belfast?',
        answer: 'Yes, it changes ship. Belfast Harbour says CMA CGM\'s feeder service links its container terminal with UK and European ports, including Dunkirk and Rotterdam. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-bergen',
    portId: 'bergen',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Bremerhaven, then a feeder ship to Bergen.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10310,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13650,
      },
      note: 'Which way the ship goes changes the trip by about 3,340 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Guangzhou to Bergen is about 10,310 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Bergen, Guangzhou is the third closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Bergen?',
        answer: 'About 10,310 nautical miles through the Suez Canal, or about 13,650 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Guangzhou to Bergen?',
        answer: 'No. Bergen Havn says MSC runs a weekly feeder from Bremerhaven and Maersk a weekly feeder along the west coast. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-boston',
    portId: 'boston',
    updated: '2026-11-14',
    quickRoute: 'Direct sailings from China call at Boston, by Suez or round Africa.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11530,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13770,
      },
      note: 'The route round Africa is about 2,240 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Guangzhou to Boston is about 11,530 nautical miles through the Suez Canal, or 13,770 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Guangzhou to Boston by sea?',
        answer: 'About 11,530 nautical miles through the Suez Canal, or about 13,770 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Guangzhou to Boston on one ship?',
        answer: 'Yes, on the lines that sail direct. Massport lists weekly services from Conley Terminal to China and South Korea. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-brevik',
    portId: 'brevik',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Rotterdam, Bremerhaven or Hamburg, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10280,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13620,
      },
      note: 'Going round the Cape adds about 3,340 nautical miles, 32% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Guangzhou covers about 10,280 nautical miles to Brevik through the Suez Canal. Round Africa it is about 13,620.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Guangzhou to Brevik shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,280 nautical miles, against about 13,620 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Brevik?',
        answer: 'Yes, it changes ship. Grenland Havn says Unifeeder calls on routes to Rotterdam, Bremerhaven and Hamburg, where much cargo is moved to ocean ships. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-charleston',
    portId: 'charleston',
    updated: '2026-11-14',
    quickRoute: 'Across the Pacific and through the Panama Canal.',
    distance: {
      via: 'the Panama Canal',
      nauticalMiles: 11030,
      note: 'Measured port to port through the Panama Canal. Of the 3 Chinese ports on our list for Charleston, Guangzhou is the furthest by sea.',
    },
    travel: [
      'An all-water service from Guangzhou to Charleston crosses the Pacific and passes through the Panama Canal, about 11,030 nautical miles.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Charleston?',
        answer: 'About 11,030 nautical miles by the Panama Canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Guangzhou to Charleston on one ship?',
        answer: 'Yes, on the lines that sail direct. SC Ports counts 11 weekly Asia services at Charleston. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-civitavecchia',
    portId: 'civitavecchia',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7790,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 12980,
      },
      note: 'The route round Africa is about 5,190 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Guangzhou is the second closest of the 5 Chinese ports on our list for Civitavecchia: about 7,790 nautical miles through the Suez Canal, or 12,980 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Guangzhou to Civitavecchia by sea?',
        answer: 'About 7,790 nautical miles through the Suez Canal, or about 12,980 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Civitavecchia?',
        answer: 'It depends on the line. The port authority recorded an 11,923 TEU MSC ship loading at the RTC container terminal in 2021. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-drammen',
    portId: 'drammen',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub, then a feeder ship to Drammen.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10340,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13680,
      },
      note: 'Which way the ship goes changes the trip by about 3,340 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Guangzhou to Drammen is about 10,340 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Drammen, Guangzhou is the third closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Drammen?',
        answer: 'About 10,340 nautical miles through the Suez Canal, or about 13,680 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Drammen?',
        answer: 'Yes, it changes ship. Drammen Havn says it has access to all the major European ports. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-floroe',
    portId: 'floroe',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10400,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13720,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Guangzhou to Floroe is about 10,400 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Floroe, Guangzhou is the third closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Floroe?',
        answer: 'About 10,400 nautical miles through the Suez Canal, or about 13,720 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Floroe?',
        answer: 'It depends on the line. Florø hamn lists container ships among the vessels its Botnastranda quay handles. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-fredrikstad',
    portId: 'fredrikstad',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Bremerhaven, Hamburg or Rotterdam, a smaller feeder to Fredrikstad.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10310,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13640,
      },
      note: 'The route round Africa is about 3,330 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Guangzhou is the third closest of the 8 Chinese ports on our list for Fredrikstad: about 10,310 nautical miles through the Suez Canal, or 13,640 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Guangzhou to Fredrikstad by sea?',
        answer: 'About 10,310 nautical miles through the Suez Canal, or about 13,640 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Guangzhou to Fredrikstad?',
        answer: 'No. Borg Havn\'s regular-calls page (August 2022) lists Unifeeder twice a week to and from Bremerhaven, Hamburg and Rotterdam. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-gaevle',
    portId: 'gaevle',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a larger European port, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10910,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14250,
      },
      note: 'Going round the Cape adds about 3,340 nautical miles, 31% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Guangzhou covers about 10,910 nautical miles to Gävle through the Suez Canal. Round Africa it is about 14,250.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Guangzhou to Gävle shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,910 nautical miles, against about 14,250 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Gävle?',
        answer: 'Yes, it changes ship. Gävle Hamn says containers come and go on feeder ships to and from larger European ports. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-gothenburg',
    portId: 'gothenburg',
    updated: '2026-11-14',
    quickRoute: 'Direct on some lines, with a change of ship on others.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10270,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13610,
      },
      note: 'Which way the ship goes changes the trip by about 3,340 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Guangzhou to Gothenburg is about 10,270 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Gothenburg, Guangzhou is the third closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Gothenburg?',
        answer: 'About 10,270 nautical miles through the Suez Canal, or about 13,610 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Guangzhou to Gothenburg?',
        answer: 'Some do. The Port of Gothenburg lists direct services to China and other parts of Asia, plus daily feeder ships to the hubs on the continent. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-halifax',
    portId: 'halifax',
    updated: '2026-11-14',
    quickRoute: 'About 11,200 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11200,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13600,
      },
      note: 'Going round the Cape adds about 2,400 nautical miles, 21% more than the Suez route.',
    },
    travel: [
      'A ship from Guangzhou covers about 11,200 nautical miles to Halifax through the Suez Canal. Round Africa it is about 13,600.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Guangzhou to Halifax shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,200 nautical miles, against about 13,600 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Halifax?',
        answer: 'It depends on the line. Halifax says it is the only port on Canada\'s East Coast that can take ships of up to 18,000 TEU. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-halmstad',
    portId: 'halmstad',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Bremerhaven or Hamburg, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10370,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13710,
      },
      note: 'Going round the Cape adds about 3,330 nautical miles, 32% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Guangzhou covers about 10,370 nautical miles to Halmstad through the Suez Canal. Round Africa it is about 13,710.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Guangzhou to Halmstad shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,370 nautical miles, against about 13,710 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Guangzhou to Halmstad?',
        answer: 'No. Hallands Hamnar says it has regular feeder traffic to Bremerhaven and Hamburg. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-haugesund',
    portId: 'haugesund',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Rotterdam or Hamburg, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10240,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13570,
      },
      note: 'Going round the Cape adds about 3,340 nautical miles, 33% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Guangzhou covers about 10,240 nautical miles to Haugesund through the Suez Canal. Round Africa it is about 13,570.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Guangzhou to Haugesund shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,240 nautical miles, against about 13,570 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Guangzhou to Haugesund?',
        answer: 'No. Karmsund Havn says Samskip runs a weekly line between Rotterdam or Hamburg and western Norway. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-helsingborg',
    portId: 'helsingborg',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Hamburg, Bremerhaven or Rotterdam, a smaller feeder to Helsingborg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10370,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13700,
      },
      note: 'The route round Africa is about 3,340 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Guangzhou is the third closest of the 9 Chinese ports on our list for Helsingborg: about 10,370 nautical miles through the Suez Canal, or 13,700 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Guangzhou to Helsingborg by sea?',
        answer: 'About 10,370 nautical miles through the Suez Canal, or about 13,700 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Helsingborg?',
        answer: 'Yes, it changes ship. The port says its container lines run via Europe\'s large logistics hubs, and its line list shows Hamburg, Bremerhaven, Rotterdam and Antwerp. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-houston',
    portId: 'houston',
    updated: '2026-11-14',
    quickRoute: 'Across the Pacific and through the Panama Canal.',
    distance: {
      via: 'the Panama Canal',
      nauticalMiles: 10960,
      note: 'Measured port to port through the Panama Canal.',
    },
    travel: [
      'An all-water service from Guangzhou to Houston crosses the Pacific and passes through the Panama Canal, about 10,960 nautical miles.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Houston?',
        answer: 'About 10,960 nautical miles by the Panama Canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Guangzhou to Houston on one ship?',
        answer: 'Yes, on the lines that sail direct. Port Houston has two container terminals, Barbours Cut and Bayport, and says it handles 75% of the containers on the US Gulf Coast. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-jacksonville',
    portId: 'jacksonville',
    updated: '2026-11-14',
    quickRoute: 'Across the Pacific and through the Panama Canal.',
    distance: {
      via: 'the Panama Canal',
      nauticalMiles: 10960,
      note: 'Measured port to port through the Panama Canal.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'An all-water service from Guangzhou to Jacksonville crosses the Pacific and passes through the Panama Canal, about 10,960 nautical miles.',
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Jacksonville?',
        answer: 'About 10,960 nautical miles by the Panama Canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Guangzhou to Jacksonville on one ship?',
        answer: 'Yes, on the lines that sail direct. JAXPORT lists direct service with Asia among the lines that call. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-kristiansand',
    portId: 'kristiansand',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub, then a feeder ship to Kristiansand.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10200,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13530,
      },
      note: 'Which way the ship goes changes the trip by about 3,330 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Guangzhou to Kristiansand is about 10,200 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Kristiansand, Guangzhou is the third closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Kristiansand?',
        answer: 'About 10,200 nautical miles through the Suez Canal, or about 13,530 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Guangzhou to Kristiansand?',
        answer: 'No. Kristiansand Havn says four lines call, Baltic Line, Unifeeder, Viasea and MSC, with routes to several European ports. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-larvik',
    portId: 'larvik',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Hamburg, Bremerhaven, Rotterdam or Antwerp, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10280,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13620,
      },
      note: 'Going round the Cape adds about 3,340 nautical miles, 32% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Guangzhou covers about 10,280 nautical miles to Larvik through the Suez Canal. Round Africa it is about 13,620.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Guangzhou to Larvik shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,280 nautical miles, against about 13,620 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Larvik?',
        answer: 'Yes, it changes ship. Larvik Havn lists weekly container calls to Hamburg, Bremerhaven, Rotterdam and Antwerp. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-liverpool',
    portId: 'liverpool',
    updated: '2026-11-14',
    quickRoute: 'One ship or two, depending on the line. By Suez or round Africa.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9740,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13060,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 34% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Guangzhou covers about 9,740 nautical miles to Liverpool through the Suez Canal. Round Africa it is about 13,060.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Guangzhou to Liverpool shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 9,740 nautical miles, against about 13,060 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Guangzhou to Liverpool?',
        answer: 'Some do. Peel Ports describes Liverpool2 as "a viable call" for Far East services, and says Royal Seaforth has feeder services that connect Liverpool to the Far East. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-livorno',
    portId: 'livorno',
    updated: '2026-11-14',
    quickRoute: 'About 7,900 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7900,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 12980,
      },
      note: 'Going round the Cape adds about 5,080 nautical miles, 64% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Guangzhou covers about 7,900 nautical miles to Livorno through the Suez Canal. Round Africa it is about 12,980.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Guangzhou to Livorno shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 7,900 nautical miles, against about 12,980 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Livorno?',
        answer: 'It depends on the line. Terminal Darsena Toscana handles both ships that call direct and containers moved on from hub ports. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      2,
    ],
  },
  {
    slug: 'guangzhou-to-maaloey',
    portId: 'maaloey',
    updated: '2026-11-14',
    quickRoute: 'About 10,400 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10400,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13720,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 32% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Guangzhou covers about 10,400 nautical miles to Måløy through the Suez Canal. Round Africa it is about 13,720.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Guangzhou to Måløy shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,400 nautical miles, against about 13,720 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Måløy?',
        answer: 'It depends on the line. Nordfjord Havn\'s quays at Måløy are 6.5 to 10 metres deep, which suits smaller coastal ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-melnik',
    portId: 'melnik',
    updated: '2026-11-14',
    quickRoute: 'A ship to Hamburg, then by train to Mělník.',
    distance: {
      via: 'the Suez Canal, to Hamburg',
      nauticalMiles: 10100,
      alternative: {
        via: 'the Cape of Good Hope, to Hamburg',
        nauticalMiles: 13430,
      },
      note: 'Sea distance to Hamburg. The container then goes on by train to Mělník.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'The sea leg from Guangzhou ends at Hamburg, about 10,100 nautical miles away by Suez. Of the 9 Chinese ports on our list for Mělník, Guangzhou is the third closest by sea.',
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Guangzhou to Mělník?',
        answer: 'About 10,100 nautical miles from Guangzhou to Hamburg through the Suez Canal, or about 13,430 round the Cape of Good Hope. Then the container goes on by train to Mělník. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Guangzhou to Mělník?',
        answer: 'By sea to Hamburg, then by train. ÖBB Rail Cargo Group runs nine to eleven trains a week between Hamburg or Bremerhaven and its Mělník terminal. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-moss',
    portId: 'moss',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub, then a feeder ship to Moss.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10320,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13660,
      },
      note: 'Which way the ship goes changes the trip by about 3,340 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Guangzhou to Moss is about 10,320 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Moss, Guangzhou is the third closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Moss?',
        answer: 'About 10,320 nautical miles through the Suez Canal, or about 13,660 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Moss?',
        answer: 'Yes, it changes ship. Moss Havn says it has direct calls from Europe and that MSC has set up a regular call. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-norrkoeping',
    portId: 'norrkoeping',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a bigger European port, then a feeder ship to Norrköping.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10750,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14090,
      },
      note: 'Which way the ship goes changes the trip by about 3,340 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Guangzhou to Norrköping is about 10,750 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Norrköping, Guangzhou is the third closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Norrköping?',
        answer: 'About 10,750 nautical miles through the Suez Canal, or about 14,090 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Norrköping?',
        answer: 'Yes, it changes ship. Its Pampus terminal has 610 metres of quay and two container cranes, a size served by smaller ships from the big European ports. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-orkanger',
    portId: 'orkanger',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10650,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13980,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Guangzhou to Orkanger is about 10,650 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Orkanger, Guangzhou is the third closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Orkanger?',
        answer: 'About 10,650 nautical miles through the Suez Canal, or about 13,980 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Orkanger?',
        answer: 'It depends on the line. Orkanger\'s quays have 10 metres of water, which suits the smaller ships that run from European hubs. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-oslo',
    portId: 'oslo',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a European hub, a smaller feeder to Oslo.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10350,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13690,
      },
      note: 'The route round Africa is about 3,340 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Guangzhou is the third closest of the 9 Chinese ports on our list for Oslo: about 10,350 nautical miles through the Suez Canal, or 13,690 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Guangzhou to Oslo by sea?',
        answer: 'About 10,350 nautical miles through the Suez Canal, or about 13,690 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Oslo?',
        answer: 'Yes, it changes ship. Oslo Havn says it has weekly calls from container lines sailing between Oslo and ports across Europe. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-ravenna',
    portId: 'ravenna',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7800,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13740,
      },
      note: 'Which way the ship goes changes the trip by about 5,940 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Guangzhou to Ravenna is about 7,800 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Ravenna, Guangzhou is the second closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Ravenna?',
        answer: 'About 7,800 nautical miles through the Suez Canal, or about 13,740 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Ravenna?',
        answer: 'It depends on the line. Terminal Container Ravenna lists shuttle ships to Trieste and to Gioia Tauro, a big transshipment hub. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-salerno',
    portId: 'salerno',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Gioia Tauro or another Mediterranean hub, a smaller feeder to Salerno.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7630,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13090,
      },
      note: 'The route round Africa is about 5,450 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Guangzhou is the third closest of the 8 Chinese ports on our list for Salerno: about 7,630 nautical miles through the Suez Canal, or 13,090 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Guangzhou to Salerno by sea?',
        answer: 'About 7,630 nautical miles through the Suez Canal, or about 13,090 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Guangzhou to Salerno?',
        answer: 'No. The port authority says Salerno is linked by feeder service with the Mediterranean transshipment ports, in particular Gioia Tauro. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-south-shields',
    portId: 'south-shields',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Felixstowe or Rotterdam, then a feeder ship to the Port of Tyne.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10020,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13350,
      },
      note: 'Which way the ship goes changes the trip by about 3,330 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Guangzhou to the Port of Tyne is about 10,020 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for the Port of Tyne, Guangzhou is the third closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to the Port of Tyne?',
        answer: 'About 10,020 nautical miles through the Suez Canal, or about 13,350 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Guangzhou to the Port of Tyne?',
        answer: 'No. The port says its short-sea feeder services connect it with Felixstowe, Rotterdam and beyond. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-southampton',
    portId: 'southampton',
    updated: '2026-11-14',
    quickRoute: 'Direct sailings from China call at Southampton, by Suez or round Africa.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9620,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 12960,
      },
      note: 'The route round Africa is about 3,340 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Guangzhou to Southampton is about 9,620 nautical miles through the Suez Canal, or 12,960 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Guangzhou to Southampton by sea?',
        answer: 'About 9,620 nautical miles through the Suez Canal, or about 12,960 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Guangzhou to Southampton on one ship?',
        answer: 'Yes, on the lines that sail direct. DP World says direct services link Southampton with major ports across Asia. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-stavanger',
    portId: 'stavanger',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub, then a feeder ship to Stavanger.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10240,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13580,
      },
      note: 'Which way the ship goes changes the trip by about 3,330 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Guangzhou to Stavanger is about 10,240 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Stavanger, Guangzhou is the third closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Stavanger?',
        answer: 'About 10,240 nautical miles through the Suez Canal, or about 13,580 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Guangzhou to Stavanger?',
        answer: 'No. Stavangerregionen Havn says several liner companies call every week, mostly with containers. So the container travels from Guangzhou on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-straumen',
    portId: 'straumen',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10840,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14160,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Guangzhou to Straumen is about 10,840 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Straumen, Guangzhou is the third closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Straumen?',
        answer: 'About 10,840 nautical miles through the Suez Canal, or about 14,160 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Straumen?',
        answer: 'It depends on the line. North Sea Container Line uses the quay and has applied to deepen it from about 7 to 9 metres. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-svelgen',
    portId: 'svelgen',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10400,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13720,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Guangzhou to Svelgen is about 10,400 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Svelgen, Guangzhou is the third closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Svelgen?',
        answer: 'About 10,400 nautical miles through the Suez Canal, or about 13,720 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Svelgen?',
        answer: 'It depends on the line. Svelgen\'s quay mainly serves Elkem\'s plant, and Elkem applied in 2024 to upgrade it for larger container ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'guangzhou-to-sydney',
    portId: 'sydney',
    updated: '2026-11-14',
    quickRoute: 'About 4,520 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the open sea, with no canal',
      nauticalMiles: 4520,
      note: 'A straight crossing with no canal.',
    },
    travel: [
      'Guangzhou to Sydney is about 4,520 nautical miles by sea, with no canal on the way.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Sydney?',
        answer: 'About 4,520 nautical miles by the open sea, with no canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Guangzhou and Sydney?',
        answer: 'It depends on the line. Port Botany has three container terminals, run by DP World, Patrick and Hutchison Ports. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'guangzhou-to-trieste',
    portId: 'trieste',
    updated: '2026-11-14',
    quickRoute: 'Direct on some lines, with a change of ship on others.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7850,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13790,
      },
      note: 'Which way the ship goes changes the trip by about 5,940 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Guangzhou to Trieste is about 7,850 nautical miles through the Suez Canal. Of the 3 Chinese ports on our list for Trieste, Guangzhou is the closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Guangzhou to Trieste?',
        answer: 'About 7,850 nautical miles through the Suez Canal, or about 13,790 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Guangzhou to Trieste?',
        answer: 'Some do. Trieste Marine Terminal lists weekly direct services from the Far East, plus links through the main Mediterranean hubs. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-aalesund',
    portId: 'aalesund',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Hamburg, Rotterdam or Antwerp, then a feeder ship to Ålesund.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10440,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13760,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Hong Kong to Ålesund is about 10,440 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Ålesund, Hong Kong is the closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Hong Kong to Ålesund?',
        answer: 'About 10,440 nautical miles through the Suez Canal, or about 13,760 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Hong Kong to Ålesund?',
        answer: 'No. The Flatholmen terminal operator names Hamburg, Rotterdam and Antwerp as its sea links. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-ancona',
    portId: 'ancona',
    updated: '2026-11-14',
    quickRoute: 'About 7,730 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7730,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13670,
      },
      note: 'Going round the Cape adds about 5,940 nautical miles, 77% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Hong Kong covers about 7,730 nautical miles to Ancona through the Suez Canal. Round Africa it is about 13,670.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Hong Kong to Ancona shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 7,730 nautical miles, against about 13,670 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Ancona?',
        answer: 'It depends on the line. The port authority says its container traffic draws the main global container lines. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-awt-paskov',
    portId: 'awt-paskov',
    updated: '2026-11-14',
    quickRoute: 'A ship to Gdańsk, then by train to Paskov.',
    distance: {
      via: 'the Suez Canal, to Gdańsk',
      nauticalMiles: 10660,
      alternative: {
        via: 'the Cape of Good Hope, to Gdańsk',
        nauticalMiles: 13990,
      },
      note: 'Sea distance to Gdańsk. The container then goes on by train to Paskov.',
    },
    travel: [
      'The sea leg from Hong Kong ends at Gdańsk, about 10,660 nautical miles away by Suez. Of the 8 Chinese ports on our list for Paskov, Hong Kong is the closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Hong Kong to Paskov?',
        answer: 'About 10,660 nautical miles from Hong Kong to Gdańsk through the Suez Canal, or about 13,990 round the Cape of Good Hope. Then the container goes on by train to Paskov. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Hong Kong to Paskov?',
        answer: 'By sea to Gdańsk, then by train. One rail link is ÖBB Rail Cargo Group\'s train between Gdańsk and Paskov. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'hong-kong-to-belfast',
    portId: 'belfast',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Rotterdam or another hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9760,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13090,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 34% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Hong Kong covers about 9,760 nautical miles to Belfast through the Suez Canal. Round Africa it is about 13,090.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Hong Kong to Belfast shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 9,760 nautical miles, against about 13,090 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Hong Kong to Belfast?',
        answer: 'No. Belfast Harbour says CMA CGM\'s feeder service links its container terminal with UK and European ports, including Dunkirk and Rotterdam. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-bergen',
    portId: 'bergen',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Bremerhaven, a smaller feeder to Bergen.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10300,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13640,
      },
      note: 'The route round Africa is about 3,330 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Hong Kong is the closest of the 8 Chinese ports on our list for Bergen: about 10,300 nautical miles through the Suez Canal, or 13,640 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Hong Kong to Bergen by sea?',
        answer: 'About 10,300 nautical miles through the Suez Canal, or about 13,640 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Hong Kong to Bergen?',
        answer: 'No. Bergen Havn says MSC runs a weekly feeder from Bremerhaven and Maersk a weekly feeder along the west coast. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'hong-kong-to-bremerhaven',
    portId: 'bremerhaven',
    updated: '2026-11-14',
    quickRoute: 'One ship can carry it all the way, through the Suez Canal or round Africa.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10040,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13370,
      },
      note: 'Which way the ship goes changes the trip by about 3,330 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Hong Kong to Bremerhaven is about 10,040 nautical miles through the Suez Canal.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Hong Kong to Bremerhaven?',
        answer: 'About 10,040 nautical miles through the Suez Canal, or about 13,370 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Hong Kong to Bremerhaven on one ship?',
        answer: 'Yes, on the lines that sail direct. The terminal sailing list shows the Gemini Asia-Europe services calling at Bremerhaven. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'hong-kong-to-brevik',
    portId: 'brevik',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Rotterdam, Bremerhaven or Hamburg, a smaller feeder to Brevik.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10270,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13610,
      },
      note: 'The route round Africa is about 3,340 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Hong Kong is the closest of the 7 Chinese ports on our list for Brevik: about 10,270 nautical miles through the Suez Canal, or 13,610 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Hong Kong to Brevik by sea?',
        answer: 'About 10,270 nautical miles through the Suez Canal, or about 13,610 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Hong Kong to Brevik?',
        answer: 'No. Grenland Havn says Unifeeder calls on routes to Rotterdam, Bremerhaven and Hamburg, where much cargo is moved to ocean ships. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'hong-kong-to-cagliari',
    portId: 'cagliari',
    updated: '2026-11-14',
    quickRoute: 'About 7,770 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7770,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 12810,
      },
      note: 'Going round the Cape adds about 5,030 nautical miles, 65% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Hong Kong covers about 7,770 nautical miles to Cagliari through the Suez Canal. Round Africa it is about 12,810.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Hong Kong to Cagliari shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 7,770 nautical miles, against about 12,810 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Cagliari?',
        answer: 'It depends on the line. Large ships do call at Porto Canale: in July 2025 the MSC Venice, which can carry 16,652 TEU, docked there. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-civitavecchia',
    portId: 'civitavecchia',
    updated: '2026-11-14',
    quickRoute: 'About 7,780 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7780,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 12970,
      },
      note: 'Going round the Cape adds about 5,190 nautical miles, 67% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Hong Kong covers about 7,780 nautical miles to Civitavecchia through the Suez Canal. Round Africa it is about 12,970.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Hong Kong to Civitavecchia shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 7,780 nautical miles, against about 12,970 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Civitavecchia?',
        answer: 'It depends on the line. The port authority recorded an 11,923 TEU MSC ship loading at the RTC container terminal in 2021. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'hong-kong-to-drammen',
    portId: 'drammen',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub, then a feeder ship to Drammen.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10330,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13670,
      },
      note: 'Which way the ship goes changes the trip by about 3,330 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Hong Kong to Drammen is about 10,330 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Drammen, Hong Kong is the closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Hong Kong to Drammen?',
        answer: 'About 10,330 nautical miles through the Suez Canal, or about 13,670 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Hong Kong to Drammen?',
        answer: 'No. Drammen Havn says it has access to all the major European ports. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'hong-kong-to-floroe',
    portId: 'floroe',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10390,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13720,
      },
      note: 'The route round Africa is about 3,330 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Hong Kong is the closest of the 9 Chinese ports on our list for Floroe: about 10,390 nautical miles through the Suez Canal, or 13,720 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Hong Kong to Floroe by sea?',
        answer: 'About 10,390 nautical miles through the Suez Canal, or about 13,720 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Floroe?',
        answer: 'It depends on the line. Florø hamn lists container ships among the vessels its Botnastranda quay handles. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-fredrikstad',
    portId: 'fredrikstad',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Bremerhaven, Hamburg or Rotterdam, then a feeder ship to Fredrikstad.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10300,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13630,
      },
      note: 'Which way the ship goes changes the trip by about 3,340 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Hong Kong to Fredrikstad is about 10,300 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Fredrikstad, Hong Kong is the closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Hong Kong to Fredrikstad?',
        answer: 'About 10,300 nautical miles through the Suez Canal, or about 13,630 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Fredrikstad?',
        answer: 'Yes, it changes ship. Borg Havn\'s regular-calls page (August 2022) lists Unifeeder twice a week to and from Bremerhaven, Hamburg and Rotterdam. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-gaevle',
    portId: 'gaevle',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a larger European port, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10900,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14240,
      },
      note: 'Going round the Cape adds about 3,340 nautical miles, 31% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Hong Kong covers about 10,900 nautical miles to Gävle through the Suez Canal. Round Africa it is about 14,240.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Hong Kong to Gävle shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,900 nautical miles, against about 14,240 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Hong Kong to Gävle?',
        answer: 'No. Gävle Hamn says containers come and go on feeder ships to and from larger European ports. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-gothenburg',
    portId: 'gothenburg',
    updated: '2026-11-14',
    quickRoute: 'Some lines sail direct to Gothenburg; others change ship at a hub.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10260,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13600,
      },
      note: 'The route round Africa is about 3,340 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Hong Kong is the closest of the 9 Chinese ports on our list for Gothenburg: about 10,260 nautical miles through the Suez Canal, or 13,600 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Hong Kong to Gothenburg by sea?',
        answer: 'About 10,260 nautical miles through the Suez Canal, or about 13,600 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Hong Kong to Gothenburg?',
        answer: 'Some do. The Port of Gothenburg lists direct services to China and other parts of Asia, plus daily feeder ships to the hubs on the continent. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      2,
    ],
  },
  {
    slug: 'hong-kong-to-grangemouth',
    portId: 'grangemouth',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a bigger European port, a smaller feeder to Grangemouth.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10120,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13460,
      },
      note: 'The route round Africa is about 3,330 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Hong Kong is the closest of the 9 Chinese ports on our list for Grangemouth: about 10,120 nautical miles through the Suez Canal, or 13,460 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Hong Kong to Grangemouth by sea?',
        answer: 'About 10,120 nautical miles through the Suez Canal, or about 13,460 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Grangemouth?',
        answer: 'Yes, it changes ship. Forth Ports says Grangemouth has "regular feeder connections linking Scotland to major deep-sea shipping routes". So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'hong-kong-to-halmstad',
    portId: 'halmstad',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Bremerhaven or Hamburg, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10360,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13700,
      },
      note: 'Going round the Cape adds about 3,340 nautical miles, 32% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Hong Kong covers about 10,360 nautical miles to Halmstad through the Suez Canal. Round Africa it is about 13,700.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Hong Kong to Halmstad shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,360 nautical miles, against about 13,700 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Hong Kong to Halmstad?',
        answer: 'No. Hallands Hamnar says it has regular feeder traffic to Bremerhaven and Hamburg. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-haugesund',
    portId: 'haugesund',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Rotterdam or Hamburg, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10220,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13560,
      },
      note: 'Going round the Cape adds about 3,340 nautical miles, 33% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Hong Kong covers about 10,220 nautical miles to Haugesund through the Suez Canal. Round Africa it is about 13,560.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Hong Kong to Haugesund shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,220 nautical miles, against about 13,560 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Haugesund?',
        answer: 'Yes, it changes ship. Karmsund Havn says Samskip runs a weekly line between Rotterdam or Hamburg and western Norway. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-helsingborg',
    portId: 'helsingborg',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Hamburg, Bremerhaven or Rotterdam, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10360,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13690,
      },
      note: 'Going round the Cape adds about 3,330 nautical miles, 32% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Hong Kong covers about 10,360 nautical miles to Helsingborg through the Suez Canal. Round Africa it is about 13,690.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Hong Kong to Helsingborg shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,360 nautical miles, against about 13,690 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Hong Kong to Helsingborg?',
        answer: 'No. The port says its container lines run via Europe\'s large logistics hubs, and its line list shows Hamburg, Bremerhaven, Rotterdam and Antwerp. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'hong-kong-to-kristiansand',
    portId: 'kristiansand',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a European hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10190,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13520,
      },
      note: 'Going round the Cape adds about 3,340 nautical miles, 33% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Hong Kong covers about 10,190 nautical miles to Kristiansand through the Suez Canal. Round Africa it is about 13,520.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Hong Kong to Kristiansand shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,190 nautical miles, against about 13,520 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Kristiansand?',
        answer: 'Yes, it changes ship. Kristiansand Havn says four lines call, Baltic Line, Unifeeder, Viasea and MSC, with routes to several European ports. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'hong-kong-to-larvik',
    portId: 'larvik',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Hamburg, Bremerhaven, Rotterdam or Antwerp, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10270,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13610,
      },
      note: 'Going round the Cape adds about 3,330 nautical miles, 32% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Hong Kong covers about 10,270 nautical miles to Larvik through the Suez Canal. Round Africa it is about 13,610.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Hong Kong to Larvik shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,270 nautical miles, against about 13,610 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Larvik?',
        answer: 'Yes, it changes ship. Larvik Havn lists weekly container calls to Hamburg, Bremerhaven, Rotterdam and Antwerp. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-liverpool',
    portId: 'liverpool',
    updated: '2026-11-14',
    quickRoute: 'Direct on some lines, with a change of ship on others.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9720,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13050,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Hong Kong to Liverpool is about 9,720 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Liverpool, Hong Kong is the closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Hong Kong to Liverpool?',
        answer: 'About 9,720 nautical miles through the Suez Canal, or about 13,050 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Hong Kong to Liverpool?',
        answer: 'Some do. Peel Ports describes Liverpool2 as "a viable call" for Far East services, and says Royal Seaforth has feeder services that connect Liverpool to the Far East. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-livorno',
    portId: 'livorno',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7890,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 12970,
      },
      note: 'Which way the ship goes changes the trip by about 5,080 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Hong Kong to Livorno is about 7,890 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Livorno, Hong Kong is the closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Hong Kong to Livorno?',
        answer: 'About 7,890 nautical miles through the Suez Canal, or about 12,970 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Livorno?',
        answer: 'It depends on the line. Terminal Darsena Toscana handles both ships that call direct and containers moved on from hub ports. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-maaloey',
    portId: 'maaloey',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10390,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13720,
      },
      note: 'The route round Africa is about 3,330 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Hong Kong is the closest of the 9 Chinese ports on our list for Måløy: about 10,390 nautical miles through the Suez Canal, or 13,720 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Hong Kong to Måløy by sea?',
        answer: 'About 10,390 nautical miles through the Suez Canal, or about 13,720 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Måløy?',
        answer: 'It depends on the line. Nordfjord Havn\'s quays at Måløy are 6.5 to 10 metres deep, which suits smaller coastal ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'hong-kong-to-melnik',
    portId: 'melnik',
    updated: '2026-11-14',
    quickRoute: 'A ship to Hamburg, then by train to Mělník.',
    distance: {
      via: 'the Suez Canal, to Hamburg',
      nauticalMiles: 10080,
      alternative: {
        via: 'the Cape of Good Hope, to Hamburg',
        nauticalMiles: 13420,
      },
      note: 'Sea distance to Hamburg. The container then goes on by train to Mělník.',
    },
    travel: [
      'The sea leg from Hong Kong ends at Hamburg, about 10,080 nautical miles away by Suez. Of the 9 Chinese ports on our list for Mělník, Hong Kong is the closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Hong Kong to Mělník?',
        answer: 'About 10,080 nautical miles from Hong Kong to Hamburg through the Suez Canal, or about 13,420 round the Cape of Good Hope. Then the container goes on by train to Mělník. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Hong Kong to Mělník?',
        answer: 'By sea to Hamburg, then by train. ÖBB Rail Cargo Group runs nine to eleven trains a week between Hamburg or Bremerhaven and its Mělník terminal. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-mo-i-rana',
    portId: 'mo-i-rana',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10790,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14110,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Hong Kong to Mo i Rana is about 10,790 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Mo i Rana, Hong Kong is the closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Hong Kong to Mo i Rana?',
        answer: 'About 10,790 nautical miles through the Suez Canal, or about 14,110 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Mo i Rana?',
        answer: 'It depends on the line. Toraneskaia has 8 metres of water and one mobile crane, which suits smaller ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-moss',
    portId: 'moss',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub, then a feeder ship to Moss.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10310,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13640,
      },
      note: 'Which way the ship goes changes the trip by about 3,330 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Hong Kong to Moss is about 10,310 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Moss, Hong Kong is the closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Hong Kong to Moss?',
        answer: 'About 10,310 nautical miles through the Suez Canal, or about 13,640 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Hong Kong to Moss?',
        answer: 'No. Moss Havn says it has direct calls from Europe and that MSC has set up a regular call. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'hong-kong-to-norrkoeping',
    portId: 'norrkoeping',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a bigger European port, then a feeder ship to Norrköping.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10740,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14080,
      },
      note: 'Which way the ship goes changes the trip by about 3,330 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Hong Kong to Norrköping is about 10,740 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Norrköping, Hong Kong is the closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Hong Kong to Norrköping?',
        answer: 'About 10,740 nautical miles through the Suez Canal, or about 14,080 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Norrköping?',
        answer: 'Yes, it changes ship. Its Pampus terminal has 610 metres of quay and two container cranes, a size served by smaller ships from the big European ports. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-orkanger',
    portId: 'orkanger',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10640,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13960,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Hong Kong is the closest of the 9 Chinese ports on our list for Orkanger: about 10,640 nautical miles through the Suez Canal, or 13,960 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Hong Kong to Orkanger by sea?',
        answer: 'About 10,640 nautical miles through the Suez Canal, or about 13,960 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Orkanger?',
        answer: 'It depends on the line. Orkanger\'s quays have 10 metres of water, which suits the smaller ships that run from European hubs. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-oslo',
    portId: 'oslo',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a European hub, a smaller feeder to Oslo.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10340,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13680,
      },
      note: 'The route round Africa is about 3,340 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Hong Kong is the closest of the 9 Chinese ports on our list for Oslo: about 10,340 nautical miles through the Suez Canal, or 13,680 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Hong Kong to Oslo by sea?',
        answer: 'About 10,340 nautical miles through the Suez Canal, or about 13,680 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Oslo?',
        answer: 'Yes, it changes ship. Oslo Havn says it has weekly calls from container lines sailing between Oslo and ports across Europe. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-ravenna',
    portId: 'ravenna',
    updated: '2026-11-14',
    quickRoute: 'About 7,790 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7790,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13730,
      },
      note: 'Going round the Cape adds about 5,940 nautical miles, 76% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Hong Kong covers about 7,790 nautical miles to Ravenna through the Suez Canal. Round Africa it is about 13,730.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Hong Kong to Ravenna shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 7,790 nautical miles, against about 13,730 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Ravenna?',
        answer: 'It depends on the line. Terminal Container Ravenna lists shuttle ships to Trieste and to Gioia Tauro, a big transshipment hub. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-regina',
    portId: 'regina',
    updated: '2026-11-14',
    quickRoute: 'By sea to Vancouver, then by train to Regina.',
    distance: {
      via: 'the North Pacific, with no canal, to Vancouver',
      nauticalMiles: 5920,
      note: 'Sea distance to Vancouver. The container then goes on by train to Regina.',
    },
    travel: [
      'By sea, Hong Kong to Vancouver is about 5,920 nautical miles, with no canal on the way.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is the sea leg from Hong Kong to Vancouver?',
        answer: 'About 5,920 nautical miles from Hong Kong to Vancouver by the North Pacific, with no canal. Then the container goes on by train to Regina. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Hong Kong to Regina?',
        answer: 'By sea to Vancouver, then by train. CN and CPKC both serve the Port of Vancouver and both run container terminals in Regina. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-salerno',
    portId: 'salerno',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Gioia Tauro or another Mediterranean hub, then a feeder ship to Salerno.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7620,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13080,
      },
      note: 'Which way the ship goes changes the trip by about 5,450 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Hong Kong to Salerno is about 7,620 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Salerno, Hong Kong is the closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Hong Kong to Salerno?',
        answer: 'About 7,620 nautical miles through the Suez Canal, or about 13,080 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Hong Kong to Salerno?',
        answer: 'No. The port authority says Salerno is linked by feeder service with the Mediterranean transshipment ports, in particular Gioia Tauro. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-seattle',
    portId: 'seattle',
    updated: '2026-11-14',
    quickRoute: 'Straight across the North Pacific. No canal.',
    distance: {
      via: 'the North Pacific, with no canal',
      nauticalMiles: 5900,
      note: 'A straight crossing with no canal. Of the 4 Chinese ports on our list for Seattle, Hong Kong is the furthest by sea.',
    },
    travel: [
      'Hong Kong to Seattle is a straight crossing of the North Pacific, about 5,900 nautical miles, with no canal on the way.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Hong Kong to Seattle?',
        answer: 'About 5,900 nautical miles by the North Pacific, with no canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Hong Kong to Seattle on one ship?',
        answer: 'Yes, on the lines that sail direct. The Northwest Seaport Alliance says it has direct services to ports throughout Asia. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      2,
    ],
  },
  {
    slug: 'hong-kong-to-south-shields',
    portId: 'south-shields',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Felixstowe or Rotterdam, then a feeder ship to the Port of Tyne.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10000,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13340,
      },
      note: 'Which way the ship goes changes the trip by about 3,340 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Hong Kong to the Port of Tyne is about 10,000 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for the Port of Tyne, Hong Kong is the closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Hong Kong to the Port of Tyne?',
        answer: 'About 10,000 nautical miles through the Suez Canal, or about 13,340 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and the Port of Tyne?',
        answer: 'Yes, it changes ship. The port says its short-sea feeder services connect it with Felixstowe, Rotterdam and beyond. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'hong-kong-to-stavanger',
    portId: 'stavanger',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a European hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10230,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13570,
      },
      note: 'Going round the Cape adds about 3,340 nautical miles, 33% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Hong Kong covers about 10,230 nautical miles to Stavanger through the Suez Canal. Round Africa it is about 13,570.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Hong Kong to Stavanger shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,230 nautical miles, against about 13,570 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Hong Kong to Stavanger?',
        answer: 'No. Stavangerregionen Havn says several liner companies call every week, mostly with containers. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'hong-kong-to-straumen',
    portId: 'straumen',
    updated: '2026-11-14',
    quickRoute: 'About 10,820 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10820,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14150,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 31% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Hong Kong covers about 10,820 nautical miles to Straumen through the Suez Canal. Round Africa it is about 14,150.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Hong Kong to Straumen shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,820 nautical miles, against about 14,150 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Straumen?',
        answer: 'It depends on the line. North Sea Container Line uses the quay and has applied to deepen it from about 7 to 9 metres. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'hong-kong-to-svelgen',
    portId: 'svelgen',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10390,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13720,
      },
      note: 'Which way the ship goes changes the trip by about 3,330 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Hong Kong to Svelgen is about 10,390 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Svelgen, Hong Kong is the closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Hong Kong to Svelgen?',
        answer: 'About 10,390 nautical miles through the Suez Canal, or about 13,720 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Svelgen?',
        answer: 'It depends on the line. Svelgen\'s quay mainly serves Elkem\'s plant, and Elkem applied in 2024 to upgrade it for larger container ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'hong-kong-to-teesport',
    portId: 'teesport',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a European hub port, a smaller feeder to Teesport.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9990,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13320,
      },
      note: 'The route round Africa is about 3,340 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Hong Kong is the closest of the 7 Chinese ports on our list for Teesport: about 9,990 nautical miles through the Suez Canal, or 13,320 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Hong Kong to Teesport by sea?',
        answer: 'About 9,990 nautical miles through the Suez Canal, or about 13,320 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Hong Kong and Teesport?',
        answer: 'Yes, it changes ship. PD Ports says Teesport has "direct connections to the major hub ports of Europe", with over 20 ship calls a week. So the container travels from Hong Kong on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'ningbo-to-aalesund',
    portId: 'aalesund',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Hamburg, Rotterdam or Antwerp, a smaller feeder to Ålesund.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11070,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14380,
      },
      note: 'The route round Africa is about 3,310 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Ningbo is the fifth closest of the 9 Chinese ports on our list for Ålesund: about 11,070 nautical miles through the Suez Canal, or 14,380 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Ningbo to Ålesund by sea?',
        answer: 'About 11,070 nautical miles through the Suez Canal, or about 14,380 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Ningbo to Ålesund?',
        answer: 'No. The Flatholmen terminal operator names Hamburg, Rotterdam and Antwerp as its sea links. So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'ningbo-to-ancona',
    portId: 'ancona',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8360,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14280,
      },
      note: 'The route round Africa is about 5,930 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Ningbo is the fifth closest of the 9 Chinese ports on our list for Ancona: about 8,360 nautical miles through the Suez Canal, or 14,280 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Ningbo to Ancona by sea?',
        answer: 'About 8,360 nautical miles through the Suez Canal, or about 14,280 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Ancona?',
        answer: 'It depends on the line. The port authority says its container traffic draws the main global container lines. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'ningbo-to-awt-paskov',
    portId: 'awt-paskov',
    updated: '2026-11-14',
    quickRoute: 'A ship to Gdańsk, then by train to Paskov.',
    distance: {
      via: 'the Suez Canal, to Gdańsk',
      nauticalMiles: 11290,
      alternative: {
        via: 'the Cape of Good Hope, to Gdańsk',
        nauticalMiles: 14610,
      },
      note: 'Sea distance to Gdańsk. The container then goes on by train to Paskov.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'The sea leg from Ningbo ends at Gdańsk, about 11,290 nautical miles away by Suez. Of the 8 Chinese ports on our list for Paskov, Ningbo is the fifth closest by sea.',
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Ningbo to Paskov?',
        answer: 'About 11,290 nautical miles from Ningbo to Gdańsk through the Suez Canal, or about 14,610 round the Cape of Good Hope. Then the container goes on by train to Paskov. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Ningbo to Paskov?',
        answer: 'By sea to Gdańsk, then by train. One rail link is ÖBB Rail Cargo Group\'s train between Gdańsk and Paskov. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'ningbo-to-belfast',
    portId: 'belfast',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Rotterdam or another hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10390,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13700,
      },
      note: 'Going round the Cape adds about 3,310 nautical miles, 32% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Ningbo covers about 10,390 nautical miles to Belfast through the Suez Canal. Round Africa it is about 13,700.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Ningbo to Belfast shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,390 nautical miles, against about 13,700 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Belfast?',
        answer: 'Yes, it changes ship. Belfast Harbour says CMA CGM\'s feeder service links its container terminal with UK and European ports, including Dunkirk and Rotterdam. So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'ningbo-to-bergen',
    portId: 'bergen',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Bremerhaven, a smaller feeder to Bergen.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10930,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14250,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Ningbo is the fifth closest of the 8 Chinese ports on our list for Bergen: about 10,930 nautical miles through the Suez Canal, or 14,250 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Ningbo to Bergen by sea?',
        answer: 'About 10,930 nautical miles through the Suez Canal, or about 14,250 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Bergen?',
        answer: 'Yes, it changes ship. Bergen Havn says MSC runs a weekly feeder from Bremerhaven and Maersk a weekly feeder along the west coast. So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'ningbo-to-cagliari',
    portId: 'cagliari',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8400,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13420,
      },
      note: 'The route round Africa is about 5,020 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Ningbo is the fifth closest of the 8 Chinese ports on our list for Cagliari: about 8,400 nautical miles through the Suez Canal, or 13,420 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Ningbo to Cagliari by sea?',
        answer: 'About 8,400 nautical miles through the Suez Canal, or about 13,420 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Cagliari?',
        answer: 'It depends on the line. Large ships do call at Porto Canale: in July 2025 the MSC Venice, which can carry 16,652 TEU, docked there. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'ningbo-to-drammen',
    portId: 'drammen',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub, then a feeder ship to Drammen.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10960,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14280,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Ningbo to Drammen is about 10,960 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Drammen, Ningbo is the fifth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Ningbo to Drammen?',
        answer: 'About 10,960 nautical miles through the Suez Canal, or about 14,280 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Ningbo to Drammen?',
        answer: 'No. Drammen Havn says it has access to all the major European ports. So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'ningbo-to-floroe',
    portId: 'floroe',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11020,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14330,
      },
      note: 'The route round Africa is about 3,310 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Ningbo is the fifth closest of the 9 Chinese ports on our list for Floroe: about 11,020 nautical miles through the Suez Canal, or 14,330 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Ningbo to Floroe by sea?',
        answer: 'About 11,020 nautical miles through the Suez Canal, or about 14,330 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Floroe?',
        answer: 'It depends on the line. Florø hamn lists container ships among the vessels its Botnastranda quay handles. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'ningbo-to-fredrikstad',
    portId: 'fredrikstad',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Bremerhaven, Hamburg or Rotterdam, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10920,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14240,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 30% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Ningbo covers about 10,920 nautical miles to Fredrikstad through the Suez Canal. Round Africa it is about 14,240.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Ningbo to Fredrikstad shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,920 nautical miles, against about 14,240 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Ningbo to Fredrikstad?',
        answer: 'No. Borg Havn\'s regular-calls page (August 2022) lists Unifeeder twice a week to and from Bremerhaven, Hamburg and Rotterdam. So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'ningbo-to-fremantle',
    portId: 'fremantle',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the open sea, with no canal',
      nauticalMiles: 3920,
      note: 'A straight crossing with no canal.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'Ningbo to Fremantle is about 3,920 nautical miles by sea, with no canal on the way.',
    ],
    faqs: [
      {
        question: 'How far is it by sea from Ningbo to Fremantle?',
        answer: 'About 3,920 nautical miles by the open sea, with no canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Fremantle?',
        answer: 'It depends on the line. Fremantle Ports says more than 99% of Western Australia\'s container trade comes through Fremantle. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'ningbo-to-gaevle',
    portId: 'gaevle',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a larger European port, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11530,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14850,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 29% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Ningbo covers about 11,530 nautical miles to Gävle through the Suez Canal. Round Africa it is about 14,850.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Ningbo to Gävle shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,530 nautical miles, against about 14,850 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Ningbo to Gävle?',
        answer: 'No. Gävle Hamn says containers come and go on feeder ships to and from larger European ports. So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'ningbo-to-gothenburg',
    portId: 'gothenburg',
    updated: '2026-11-14',
    quickRoute: 'Some lines sail direct to Gothenburg; others change ship at a hub.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10890,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14210,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Ningbo is the fifth closest of the 9 Chinese ports on our list for Gothenburg: about 10,890 nautical miles through the Suez Canal, or 14,210 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Ningbo to Gothenburg by sea?',
        answer: 'About 10,890 nautical miles through the Suez Canal, or about 14,210 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Ningbo to Gothenburg?',
        answer: 'Some do. The Port of Gothenburg lists direct services to China and other parts of Asia, plus daily feeder ships to the hubs on the continent. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'ningbo-to-grangemouth',
    portId: 'grangemouth',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a bigger European port, a smaller feeder to Grangemouth.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10750,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14070,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Ningbo is the fifth closest of the 9 Chinese ports on our list for Grangemouth: about 10,750 nautical miles through the Suez Canal, or 14,070 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Ningbo to Grangemouth by sea?',
        answer: 'About 10,750 nautical miles through the Suez Canal, or about 14,070 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Ningbo to Grangemouth?',
        answer: 'No. Forth Ports says Grangemouth has "regular feeder connections linking Scotland to major deep-sea shipping routes". So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'ningbo-to-halmstad',
    portId: 'halmstad',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Bremerhaven or Hamburg, then a feeder ship to Halmstad.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10990,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14310,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Ningbo to Halmstad is about 10,990 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Halmstad, Ningbo is the fifth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Ningbo to Halmstad?',
        answer: 'About 10,990 nautical miles through the Suez Canal, or about 14,310 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Halmstad?',
        answer: 'Yes, it changes ship. Hallands Hamnar says it has regular feeder traffic to Bremerhaven and Hamburg. So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'ningbo-to-helsingborg',
    portId: 'helsingborg',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Hamburg, Bremerhaven or Rotterdam, a smaller feeder to Helsingborg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10990,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14310,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Ningbo is the fifth closest of the 9 Chinese ports on our list for Helsingborg: about 10,990 nautical miles through the Suez Canal, or 14,310 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Ningbo to Helsingborg by sea?',
        answer: 'About 10,990 nautical miles through the Suez Canal, or about 14,310 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Ningbo to Helsingborg?',
        answer: 'No. The port says its container lines run via Europe\'s large logistics hubs, and its line list shows Hamburg, Bremerhaven, Rotterdam and Antwerp. So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'ningbo-to-kristiansand',
    portId: 'kristiansand',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a European hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10820,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14140,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 31% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Ningbo covers about 10,820 nautical miles to Kristiansand through the Suez Canal. Round Africa it is about 14,140.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Ningbo to Kristiansand shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,820 nautical miles, against about 14,140 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Kristiansand?',
        answer: 'Yes, it changes ship. Kristiansand Havn says four lines call, Baltic Line, Unifeeder, Viasea and MSC, with routes to several European ports. So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'ningbo-to-larvik',
    portId: 'larvik',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Hamburg, Bremerhaven, Rotterdam or Antwerp, a smaller feeder to Larvik.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10900,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14220,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Ningbo is the fifth closest of the 8 Chinese ports on our list for Larvik: about 10,900 nautical miles through the Suez Canal, or 14,220 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Ningbo to Larvik by sea?',
        answer: 'About 10,900 nautical miles through the Suez Canal, or about 14,220 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Ningbo to Larvik?',
        answer: 'No. Larvik Havn lists weekly container calls to Hamburg, Bremerhaven, Rotterdam and Antwerp. So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'ningbo-to-livorno',
    portId: 'livorno',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8520,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13580,
      },
      note: 'The route round Africa is about 5,060 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Ningbo is the fifth closest of the 9 Chinese ports on our list for Livorno: about 8,520 nautical miles through the Suez Canal, or 13,580 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Ningbo to Livorno by sea?',
        answer: 'About 8,520 nautical miles through the Suez Canal, or about 13,580 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Livorno?',
        answer: 'It depends on the line. Terminal Darsena Toscana handles both ships that call direct and containers moved on from hub ports. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      2,
    ],
  },
  {
    slug: 'ningbo-to-london',
    portId: 'london',
    updated: '2026-11-14',
    quickRoute: 'Big ships from China call at London themselves.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10390,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13710,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 32% more than the Suez route.',
    },
    travel: [
      'A ship from Ningbo covers about 10,390 nautical miles to London through the Suez Canal. Round Africa it is about 13,710.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Ningbo to London shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,390 nautical miles, against about 13,710 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Can a container go from Ningbo to London on one ship?',
        answer: 'Yes, on the lines that sail direct. DP World says the Gemini Cooperation\'s Asia-Europe routes now call at London Gateway. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'ningbo-to-maaloey',
    portId: 'maaloey',
    updated: '2026-11-14',
    quickRoute: 'About 11,020 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11020,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14330,
      },
      note: 'Going round the Cape adds about 3,310 nautical miles, 30% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Ningbo covers about 11,020 nautical miles to Måløy through the Suez Canal. Round Africa it is about 14,330.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Ningbo to Måløy shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,020 nautical miles, against about 14,330 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Måløy?',
        answer: 'It depends on the line. Nordfjord Havn\'s quays at Måløy are 6.5 to 10 metres deep, which suits smaller coastal ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'ningbo-to-melnik',
    portId: 'melnik',
    updated: '2026-11-14',
    quickRoute: 'A ship to Hamburg, then by train to Mělník.',
    distance: {
      via: 'the Suez Canal, to Hamburg',
      nauticalMiles: 10710,
      alternative: {
        via: 'the Cape of Good Hope, to Hamburg',
        nauticalMiles: 14030,
      },
      note: 'Sea distance to Hamburg. The container then goes on by train to Mělník.',
    },
    travel: [
      'The sea leg from Ningbo ends at Hamburg, about 10,710 nautical miles away by Suez. Of the 9 Chinese ports on our list for Mělník, Ningbo is the fifth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Ningbo to Mělník?',
        answer: 'About 10,710 nautical miles from Ningbo to Hamburg through the Suez Canal, or about 14,030 round the Cape of Good Hope. Then the container goes on by train to Mělník. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Ningbo to Mělník?',
        answer: 'By sea to Hamburg, then by train. ÖBB Rail Cargo Group runs nine to eleven trains a week between Hamburg or Bremerhaven and its Mělník terminal. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'ningbo-to-mo-i-rana',
    portId: 'mo-i-rana',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11420,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14730,
      },
      note: 'The route round Africa is about 3,310 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Ningbo is the fourth closest of the 8 Chinese ports on our list for Mo i Rana: about 11,420 nautical miles through the Suez Canal, or 14,730 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Ningbo to Mo i Rana by sea?',
        answer: 'About 11,420 nautical miles through the Suez Canal, or about 14,730 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Mo i Rana?',
        answer: 'It depends on the line. Toraneskaia has 8 metres of water and one mobile crane, which suits smaller ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'ningbo-to-moss',
    portId: 'moss',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a European hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10940,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14260,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 30% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Ningbo covers about 10,940 nautical miles to Moss through the Suez Canal. Round Africa it is about 14,260.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Ningbo to Moss shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,940 nautical miles, against about 14,260 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Ningbo to Moss?',
        answer: 'No. Moss Havn says it has direct calls from Europe and that MSC has set up a regular call. So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'ningbo-to-norrkoeping',
    portId: 'norrkoeping',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a bigger European port, then a feeder ship to Norrköping.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11370,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14690,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Ningbo to Norrköping is about 11,370 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Norrköping, Ningbo is the fifth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Ningbo to Norrköping?',
        answer: 'About 11,370 nautical miles through the Suez Canal, or about 14,690 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Ningbo to Norrköping?',
        answer: 'No. Its Pampus terminal has 610 metres of quay and two container cranes, a size served by smaller ships from the big European ports. So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'ningbo-to-orkanger',
    portId: 'orkanger',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11270,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14580,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Ningbo to Orkanger is about 11,270 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Orkanger, Ningbo is the fifth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Ningbo to Orkanger?',
        answer: 'About 11,270 nautical miles through the Suez Canal, or about 14,580 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Orkanger?',
        answer: 'It depends on the line. Orkanger\'s quays have 10 metres of water, which suits the smaller ships that run from European hubs. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'ningbo-to-oslo',
    portId: 'oslo',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub, then a feeder ship to Oslo.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10970,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14290,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Ningbo to Oslo is about 10,970 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Oslo, Ningbo is the fifth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Ningbo to Oslo?',
        answer: 'About 10,970 nautical miles through the Suez Canal, or about 14,290 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Oslo?',
        answer: 'Yes, it changes ship. Oslo Havn says it has weekly calls from container lines sailing between Oslo and ports across Europe. So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'ningbo-to-ravenna',
    portId: 'ravenna',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8420,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14340,
      },
      note: 'Which way the ship goes changes the trip by about 5,930 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Ningbo to Ravenna is about 8,420 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Ravenna, Ningbo is the fourth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Ningbo to Ravenna?',
        answer: 'About 8,420 nautical miles through the Suez Canal, or about 14,340 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Ravenna?',
        answer: 'It depends on the line. Terminal Container Ravenna lists shuttle ships to Trieste and to Gioia Tauro, a big transshipment hub. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'ningbo-to-salerno',
    portId: 'salerno',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Gioia Tauro or another Mediterranean hub, a smaller feeder to Salerno.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8250,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13690,
      },
      note: 'The route round Africa is about 5,440 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Ningbo is the fifth closest of the 8 Chinese ports on our list for Salerno: about 8,250 nautical miles through the Suez Canal, or 13,690 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Ningbo to Salerno by sea?',
        answer: 'About 8,250 nautical miles through the Suez Canal, or about 13,690 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Ningbo to Salerno?',
        answer: 'No. The port authority says Salerno is linked by feeder service with the Mediterranean transshipment ports, in particular Gioia Tauro. So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'ningbo-to-seattle',
    portId: 'seattle',
    updated: '2026-11-14',
    quickRoute: 'Straight across the North Pacific. No canal.',
    distance: {
      via: 'the North Pacific, with no canal',
      nauticalMiles: 5200,
      note: 'A straight crossing with no canal. Of the 4 Chinese ports on our list for Seattle, Ningbo is the second closest by sea.',
    },
    travel: [
      'Ningbo to Seattle is a straight crossing of the North Pacific, about 5,200 nautical miles, with no canal on the way.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Ningbo to Seattle?',
        answer: 'About 5,200 nautical miles by the North Pacific, with no canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Ningbo to Seattle on one ship?',
        answer: 'Yes, on the lines that sail direct. The Northwest Seaport Alliance says it has direct services to ports throughout Asia. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'ningbo-to-south-shields',
    portId: 'south-shields',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Felixstowe or Rotterdam, then a feeder ship to the Port of Tyne.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10630,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13950,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Ningbo to the Port of Tyne is about 10,630 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for the Port of Tyne, Ningbo is the fifth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Ningbo to the Port of Tyne?',
        answer: 'About 10,630 nautical miles through the Suez Canal, or about 13,950 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and the Port of Tyne?',
        answer: 'Yes, it changes ship. The port says its short-sea feeder services connect it with Felixstowe, Rotterdam and beyond. So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'ningbo-to-stavanger',
    portId: 'stavanger',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub, then a feeder ship to Stavanger.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10860,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14180,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Ningbo to Stavanger is about 10,860 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Stavanger, Ningbo is the fifth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Ningbo to Stavanger?',
        answer: 'About 10,860 nautical miles through the Suez Canal, or about 14,180 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Stavanger?',
        answer: 'Yes, it changes ship. Stavangerregionen Havn says several liner companies call every week, mostly with containers. So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'ningbo-to-straumen',
    portId: 'straumen',
    updated: '2026-11-14',
    quickRoute: 'About 11,450 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11450,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14760,
      },
      note: 'Going round the Cape adds about 3,310 nautical miles, 29% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Ningbo covers about 11,450 nautical miles to Straumen through the Suez Canal. Round Africa it is about 14,760.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Ningbo to Straumen shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,450 nautical miles, against about 14,760 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Straumen?',
        answer: 'It depends on the line. North Sea Container Line uses the quay and has applied to deepen it from about 7 to 9 metres. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'ningbo-to-svelgen',
    portId: 'svelgen',
    updated: '2026-11-14',
    quickRoute: 'About 11,020 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11020,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14330,
      },
      note: 'Going round the Cape adds about 3,310 nautical miles, 30% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Ningbo covers about 11,020 nautical miles to Svelgen through the Suez Canal. Round Africa it is about 14,330.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Ningbo to Svelgen shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,020 nautical miles, against about 14,330 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Svelgen?',
        answer: 'It depends on the line. Svelgen\'s quay mainly serves Elkem\'s plant, and Elkem applied in 2024 to upgrade it for larger container ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'ningbo-to-teesport',
    portId: 'teesport',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a European hub port, a smaller feeder to Teesport.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10620,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13940,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Ningbo is the fourth closest of the 7 Chinese ports on our list for Teesport: about 10,620 nautical miles through the Suez Canal, or 13,940 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Ningbo to Teesport by sea?',
        answer: 'About 10,620 nautical miles through the Suez Canal, or about 13,940 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Ningbo and Teesport?',
        answer: 'Yes, it changes ship. PD Ports says Teesport has "direct connections to the major hub ports of Europe", with over 20 ship calls a week. So the container travels from Ningbo on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'qingdao-to-aalesund',
    portId: 'aalesund',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Hamburg, Rotterdam or Antwerp, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11460,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14770,
      },
      note: 'Going round the Cape adds about 3,310 nautical miles, 29% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Qingdao covers about 11,460 nautical miles to Ålesund through the Suez Canal. Round Africa it is about 14,770.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Qingdao to Ålesund shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,460 nautical miles, against about 14,770 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Ålesund?',
        answer: 'Yes, it changes ship. The Flatholmen terminal operator names Hamburg, Rotterdam and Antwerp as its sea links. So the container travels from Qingdao on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-ancona',
    portId: 'ancona',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8750,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14680,
      },
      note: 'Which way the ship goes changes the trip by about 5,930 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Qingdao to Ancona is about 8,750 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Ancona, Qingdao is the seventh closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Qingdao to Ancona?',
        answer: 'About 8,750 nautical miles through the Suez Canal, or about 14,680 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Ancona?',
        answer: 'It depends on the line. The port authority says its container traffic draws the main global container lines. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-awt-paskov',
    portId: 'awt-paskov',
    updated: '2026-11-14',
    quickRoute: 'By sea to Gdańsk, then by train to Paskov.',
    distance: {
      via: 'the Suez Canal, to Gdańsk',
      nauticalMiles: 11680,
      alternative: {
        via: 'the Cape of Good Hope, to Gdańsk',
        nauticalMiles: 15000,
      },
      note: 'Sea distance to Gdańsk. The container then goes on by train to Paskov.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Qingdao to Gdańsk is about 11,680 nautical miles through the Suez Canal, or about 15,000 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How far is the sea leg from Qingdao to Gdańsk?',
        answer: 'About 11,680 nautical miles from Qingdao to Gdańsk through the Suez Canal, or about 15,000 round the Cape of Good Hope. Then the container goes on by train to Paskov. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Qingdao to Paskov?',
        answer: 'By sea to Gdańsk, then by train. One rail link is ÖBB Rail Cargo Group\'s train between Gdańsk and Paskov. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'qingdao-to-charleston',
    portId: 'charleston',
    updated: '2026-11-14',
    quickRoute: 'Across the Pacific and through the Panama Canal.',
    distance: {
      via: 'the Panama Canal',
      nauticalMiles: 10280,
      note: 'Measured port to port through the Panama Canal. Of the 3 Chinese ports on our list for Charleston, Qingdao is the closest by sea.',
    },
    travel: [
      'An all-water service from Qingdao to Charleston crosses the Pacific and passes through the Panama Canal, about 10,280 nautical miles.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Qingdao to Charleston?',
        answer: 'About 10,280 nautical miles by the Panama Canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Qingdao to Charleston on one ship?',
        answer: 'Yes, on the lines that sail direct. SC Ports counts 11 weekly Asia services at Charleston. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'qingdao-to-civitavecchia',
    portId: 'civitavecchia',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8800,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13980,
      },
      note: 'The route round Africa is about 5,180 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Qingdao is the third closest of the 5 Chinese ports on our list for Civitavecchia: about 8,800 nautical miles through the Suez Canal, or 13,980 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Qingdao to Civitavecchia by sea?',
        answer: 'About 8,800 nautical miles through the Suez Canal, or about 13,980 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Civitavecchia?',
        answer: 'It depends on the line. The port authority recorded an 11,923 TEU MSC ship loading at the RTC container terminal in 2021. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'qingdao-to-floroe',
    portId: 'floroe',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11410,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14720,
      },
      note: 'The route round Africa is about 3,310 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Qingdao is the seventh closest of the 9 Chinese ports on our list for Floroe: about 11,410 nautical miles through the Suez Canal, or 14,720 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Qingdao to Floroe by sea?',
        answer: 'About 11,410 nautical miles through the Suez Canal, or about 14,720 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Floroe?',
        answer: 'It depends on the line. Florø hamn lists container ships among the vessels its Botnastranda quay handles. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-fredrikstad',
    portId: 'fredrikstad',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Bremerhaven, Hamburg or Rotterdam, a smaller feeder to Fredrikstad.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11320,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14640,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Qingdao is the seventh closest of the 8 Chinese ports on our list for Fredrikstad: about 11,320 nautical miles through the Suez Canal, or 14,640 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Qingdao to Fredrikstad by sea?',
        answer: 'About 11,320 nautical miles through the Suez Canal, or about 14,640 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Qingdao to Fredrikstad?',
        answer: 'No. Borg Havn\'s regular-calls page (August 2022) lists Unifeeder twice a week to and from Bremerhaven, Hamburg and Rotterdam. So the container travels from Qingdao on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'qingdao-to-gaevle',
    portId: 'gaevle',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a larger European port, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11920,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15240,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 28% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Qingdao covers about 11,920 nautical miles to Gävle through the Suez Canal. Round Africa it is about 15,240.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Qingdao to Gävle shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,920 nautical miles, against about 15,240 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Gävle?',
        answer: 'Yes, it changes ship. Gävle Hamn says containers come and go on feeder ships to and from larger European ports. So the container travels from Qingdao on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-gothenburg',
    portId: 'gothenburg',
    updated: '2026-11-14',
    quickRoute: 'Some lines sail direct to Gothenburg; others change ship at a hub.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11280,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14600,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Qingdao is the seventh closest of the 9 Chinese ports on our list for Gothenburg: about 11,280 nautical miles through the Suez Canal, or 14,600 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Qingdao to Gothenburg by sea?',
        answer: 'About 11,280 nautical miles through the Suez Canal, or about 14,600 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Qingdao to Gothenburg?',
        answer: 'Some do. The Port of Gothenburg lists direct services to China and other parts of Asia, plus daily feeder ships to the hubs on the continent. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-grangemouth',
    portId: 'grangemouth',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a bigger European port, a smaller feeder to Grangemouth.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11140,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14460,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Qingdao is the seventh closest of the 9 Chinese ports on our list for Grangemouth: about 11,140 nautical miles through the Suez Canal, or 14,460 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Qingdao to Grangemouth by sea?',
        answer: 'About 11,140 nautical miles through the Suez Canal, or about 14,460 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Grangemouth?',
        answer: 'Yes, it changes ship. Forth Ports says Grangemouth has "regular feeder connections linking Scotland to major deep-sea shipping routes". So the container travels from Qingdao on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-halmstad',
    portId: 'halmstad',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Bremerhaven or Hamburg, then a feeder ship to Halmstad.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11380,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14700,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Qingdao to Halmstad is about 11,380 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Halmstad, Qingdao is the seventh closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Qingdao to Halmstad?',
        answer: 'About 11,380 nautical miles through the Suez Canal, or about 14,700 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Halmstad?',
        answer: 'Yes, it changes ship. Hallands Hamnar says it has regular feeder traffic to Bremerhaven and Hamburg. So the container travels from Qingdao on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-haugesund',
    portId: 'haugesund',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Rotterdam or Hamburg, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11250,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14570,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 30% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Qingdao covers about 11,250 nautical miles to Haugesund through the Suez Canal. Round Africa it is about 14,570.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Qingdao to Haugesund shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,250 nautical miles, against about 14,570 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Haugesund?',
        answer: 'Yes, it changes ship. Karmsund Havn says Samskip runs a weekly line between Rotterdam or Hamburg and western Norway. So the container travels from Qingdao on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-helsingborg',
    portId: 'helsingborg',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Hamburg, Bremerhaven or Rotterdam, a smaller feeder to Helsingborg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11380,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14700,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Qingdao is the seventh closest of the 9 Chinese ports on our list for Helsingborg: about 11,380 nautical miles through the Suez Canal, or 14,700 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Qingdao to Helsingborg by sea?',
        answer: 'About 11,380 nautical miles through the Suez Canal, or about 14,700 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Qingdao to Helsingborg?',
        answer: 'No. The port says its container lines run via Europe\'s large logistics hubs, and its line list shows Hamburg, Bremerhaven, Rotterdam and Antwerp. So the container travels from Qingdao on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'qingdao-to-kristiansand',
    portId: 'kristiansand',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a European hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11210,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14530,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 30% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Qingdao covers about 11,210 nautical miles to Kristiansand through the Suez Canal. Round Africa it is about 14,530.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Qingdao to Kristiansand shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,210 nautical miles, against about 14,530 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Kristiansand?',
        answer: 'Yes, it changes ship. Kristiansand Havn says four lines call, Baltic Line, Unifeeder, Viasea and MSC, with routes to several European ports. So the container travels from Qingdao on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-larvik',
    portId: 'larvik',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Hamburg, Bremerhaven, Rotterdam or Antwerp, a smaller feeder to Larvik.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11300,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14620,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Qingdao is the seventh closest of the 8 Chinese ports on our list for Larvik: about 11,300 nautical miles through the Suez Canal, or 14,620 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Qingdao to Larvik by sea?',
        answer: 'About 11,300 nautical miles through the Suez Canal, or about 14,620 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Qingdao to Larvik?',
        answer: 'No. Larvik Havn lists weekly container calls to Hamburg, Bremerhaven, Rotterdam and Antwerp. So the container travels from Qingdao on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-liverpool',
    portId: 'liverpool',
    updated: '2026-11-14',
    quickRoute: 'Direct on some lines, with a change of ship on others.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10750,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14060,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Qingdao to Liverpool is about 10,750 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Liverpool, Qingdao is the seventh closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Qingdao to Liverpool?',
        answer: 'About 10,750 nautical miles through the Suez Canal, or about 14,060 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Qingdao to Liverpool?',
        answer: 'Some do. Peel Ports describes Liverpool2 as "a viable call" for Far East services, and says Royal Seaforth has feeder services that connect Liverpool to the Far East. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-livorno',
    portId: 'livorno',
    updated: '2026-11-14',
    quickRoute: 'About 8,910 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8910,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13980,
      },
      note: 'Going round the Cape adds about 5,060 nautical miles, 57% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Qingdao covers about 8,910 nautical miles to Livorno through the Suez Canal. Round Africa it is about 13,980.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Qingdao to Livorno shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 8,910 nautical miles, against about 13,980 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Livorno?',
        answer: 'It depends on the line. Terminal Darsena Toscana handles both ships that call direct and containers moved on from hub ports. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'qingdao-to-maaloey',
    portId: 'maaloey',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11410,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14720,
      },
      note: 'The route round Africa is about 3,310 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Qingdao is the seventh closest of the 9 Chinese ports on our list for Måløy: about 11,410 nautical miles through the Suez Canal, or 14,720 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Qingdao to Måløy by sea?',
        answer: 'About 11,410 nautical miles through the Suez Canal, or about 14,720 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Måløy?',
        answer: 'It depends on the line. Nordfjord Havn\'s quays at Måløy are 6.5 to 10 metres deep, which suits smaller coastal ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'qingdao-to-melnik',
    portId: 'melnik',
    updated: '2026-11-14',
    quickRoute: 'By sea to Hamburg, then by train to Mělník.',
    distance: {
      via: 'the Suez Canal, to Hamburg',
      nauticalMiles: 11110,
      alternative: {
        via: 'the Cape of Good Hope, to Hamburg',
        nauticalMiles: 14430,
      },
      note: 'Sea distance to Hamburg. The container then goes on by train to Mělník.',
    },
    travel: [
      'By sea, Qingdao to Hamburg is about 11,110 nautical miles through the Suez Canal, or about 14,430 round the Cape of Good Hope.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is the sea leg from Qingdao to Hamburg?',
        answer: 'About 11,110 nautical miles from Qingdao to Hamburg through the Suez Canal, or about 14,430 round the Cape of Good Hope. Then the container goes on by train to Mělník. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Qingdao to Mělník?',
        answer: 'By sea to Hamburg, then by train. ÖBB Rail Cargo Group runs nine to eleven trains a week between Hamburg or Bremerhaven and its Mělník terminal. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'qingdao-to-mo-i-rana',
    portId: 'mo-i-rana',
    updated: '2026-11-14',
    quickRoute: 'About 11,810 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11810,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15120,
      },
      note: 'Going round the Cape adds about 3,310 nautical miles, 28% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Qingdao covers about 11,810 nautical miles to Mo i Rana through the Suez Canal. Round Africa it is about 15,120.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Qingdao to Mo i Rana shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,810 nautical miles, against about 15,120 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Mo i Rana?',
        answer: 'It depends on the line. Toraneskaia has 8 metres of water and one mobile crane, which suits smaller ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-moss',
    portId: 'moss',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a European hub, a smaller feeder to Moss.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11330,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14650,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Qingdao is the seventh closest of the 9 Chinese ports on our list for Moss: about 11,330 nautical miles through the Suez Canal, or 14,650 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Qingdao to Moss by sea?',
        answer: 'About 11,330 nautical miles through the Suez Canal, or about 14,650 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Qingdao to Moss?',
        answer: 'No. Moss Havn says it has direct calls from Europe and that MSC has set up a regular call. So the container travels from Qingdao on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-naples',
    portId: 'naples',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8670,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14070,
      },
      note: 'The route round Africa is about 5,400 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Qingdao is the second closest of the 3 Chinese ports on our list for Naples: about 8,670 nautical miles through the Suez Canal, or 14,070 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Qingdao to Naples by sea?',
        answer: 'About 8,670 nautical miles through the Suez Canal, or about 14,070 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Naples?',
        answer: 'It depends on the line. Conateco says some lines use it as a hub for moving containers between ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-norrkoeping',
    portId: 'norrkoeping',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a bigger European port, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11760,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15080,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 28% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Qingdao covers about 11,760 nautical miles to Norrköping through the Suez Canal. Round Africa it is about 15,080.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Qingdao to Norrköping shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,760 nautical miles, against about 15,080 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Qingdao to Norrköping?',
        answer: 'No. Its Pampus terminal has 610 metres of quay and two container cranes, a size served by smaller ships from the big European ports. So the container travels from Qingdao on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-orkanger',
    portId: 'orkanger',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11660,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14970,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Qingdao to Orkanger is about 11,660 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Orkanger, Qingdao is the seventh closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Qingdao to Orkanger?',
        answer: 'About 11,660 nautical miles through the Suez Canal, or about 14,970 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Orkanger?',
        answer: 'It depends on the line. Orkanger\'s quays have 10 metres of water, which suits the smaller ships that run from European hubs. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'qingdao-to-oslo',
    portId: 'oslo',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a European hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11360,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14680,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 29% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Qingdao covers about 11,360 nautical miles to Oslo through the Suez Canal. Round Africa it is about 14,680.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Qingdao to Oslo shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,360 nautical miles, against about 14,680 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Qingdao to Oslo?',
        answer: 'No. Oslo Havn says it has weekly calls from container lines sailing between Oslo and ports across Europe. So the container travels from Qingdao on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'qingdao-to-ravenna',
    portId: 'ravenna',
    updated: '2026-11-14',
    quickRoute: 'About 8,810 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8810,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14740,
      },
      note: 'Going round the Cape adds about 5,930 nautical miles, 67% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Qingdao covers about 8,810 nautical miles to Ravenna through the Suez Canal. Round Africa it is about 14,740.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Qingdao to Ravenna shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 8,810 nautical miles, against about 14,740 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Ravenna?',
        answer: 'It depends on the line. Terminal Container Ravenna lists shuttle ships to Trieste and to Gioia Tauro, a big transshipment hub. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-salerno',
    portId: 'salerno',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Gioia Tauro or another Mediterranean hub, then a feeder ship to Salerno.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8640,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14080,
      },
      note: 'Which way the ship goes changes the trip by about 5,440 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Qingdao to Salerno is about 8,640 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Salerno, Qingdao is the sixth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Qingdao to Salerno?',
        answer: 'About 8,640 nautical miles through the Suez Canal, or about 14,080 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Qingdao to Salerno?',
        answer: 'No. The port authority says Salerno is linked by feeder service with the Mediterranean transshipment ports, in particular Gioia Tauro. So the container travels from Qingdao on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'qingdao-to-seattle',
    portId: 'seattle',
    updated: '2026-11-14',
    quickRoute: 'Straight across the North Pacific. No canal.',
    distance: {
      via: 'the North Pacific, with no canal',
      nauticalMiles: 5160,
      note: 'A straight crossing with no canal. Of the 4 Chinese ports on our list for Seattle, Qingdao is the closest by sea.',
    },
    travel: [
      'Qingdao to Seattle is a straight crossing of the North Pacific, about 5,160 nautical miles, with no canal on the way.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Qingdao to Seattle?',
        answer: 'About 5,160 nautical miles by the North Pacific, with no canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Qingdao to Seattle on one ship?',
        answer: 'Yes, on the lines that sail direct. The Northwest Seaport Alliance says it has direct services to ports throughout Asia. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'qingdao-to-south-shields',
    portId: 'south-shields',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Felixstowe or Rotterdam, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11030,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14350,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 30% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Qingdao covers about 11,030 nautical miles to the Port of Tyne through the Suez Canal. Round Africa it is about 14,350.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Qingdao to the Port of Tyne shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,030 nautical miles, against about 14,350 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and the Port of Tyne?',
        answer: 'Yes, it changes ship. The port says its short-sea feeder services connect it with Felixstowe, Rotterdam and beyond. So the container travels from Qingdao on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-straumen',
    portId: 'straumen',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11850,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15160,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Qingdao to Straumen is about 11,850 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Straumen, Qingdao is the seventh closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Qingdao to Straumen?',
        answer: 'About 11,850 nautical miles through the Suez Canal, or about 15,160 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Straumen?',
        answer: 'It depends on the line. North Sea Container Line uses the quay and has applied to deepen it from about 7 to 9 metres. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-svelgen',
    portId: 'svelgen',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11410,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14720,
      },
      note: 'The route round Africa is about 3,310 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Qingdao is the seventh closest of the 9 Chinese ports on our list for Svelgen: about 11,410 nautical miles through the Suez Canal, or 14,720 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Qingdao to Svelgen by sea?',
        answer: 'About 11,410 nautical miles through the Suez Canal, or about 14,720 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Svelgen?',
        answer: 'It depends on the line. Svelgen\'s quay mainly serves Elkem\'s plant, and Elkem applied in 2024 to upgrade it for larger container ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-teesport',
    portId: 'teesport',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a European hub port, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11010,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14330,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 30% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Qingdao covers about 11,010 nautical miles to Teesport through the Suez Canal. Round Africa it is about 14,330.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Qingdao to Teesport shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,010 nautical miles, against about 14,330 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Qingdao and Teesport?',
        answer: 'Yes, it changes ship. PD Ports says Teesport has "direct connections to the major hub ports of Europe", with over 20 ship calls a week. So the container travels from Qingdao on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'qingdao-to-toronto',
    portId: 'toronto',
    updated: '2026-11-14',
    quickRoute: 'A ship to Montreal, then by train to Toronto.',
    distance: {
      via: 'the Panama Canal, to Montreal',
      nauticalMiles: 12000,
      note: 'Sea distance to Montreal. The container then goes on by train to Toronto.',
    },
    travel: [
      'An all-water service from Qingdao to Toronto crosses the Pacific and passes through the Panama Canal, about 12,000 nautical miles.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Qingdao to Toronto?',
        answer: 'About 12,000 nautical miles from Qingdao to Montreal by the Panama Canal. Then the container goes on by train to Toronto. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Qingdao to Toronto?',
        answer: 'By sea to Montreal, then by train. CN gives about one day by train from the Port of Montreal to Toronto, and about two from Halifax. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shanghai-to-aalesund',
    portId: 'aalesund',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Hamburg, Rotterdam or Antwerp, a smaller feeder to Ålesund.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11140,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14450,
      },
      note: 'The route round Africa is about 3,310 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Shanghai is the sixth closest of the 9 Chinese ports on our list for Ålesund: about 11,140 nautical miles through the Suez Canal, or 14,450 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shanghai to Ålesund by sea?',
        answer: 'About 11,140 nautical miles through the Suez Canal, or about 14,450 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shanghai to Ålesund?',
        answer: 'No. The Flatholmen terminal operator names Hamburg, Rotterdam and Antwerp as its sea links. So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shanghai-to-ancona',
    portId: 'ancona',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8420,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14350,
      },
      note: 'The route round Africa is about 5,930 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Shanghai is the sixth closest of the 9 Chinese ports on our list for Ancona: about 8,420 nautical miles through the Suez Canal, or 14,350 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shanghai to Ancona by sea?',
        answer: 'About 8,420 nautical miles through the Suez Canal, or about 14,350 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Ancona?',
        answer: 'It depends on the line. The port authority says its container traffic draws the main global container lines. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-awt-paskov',
    portId: 'awt-paskov',
    updated: '2026-11-14',
    quickRoute: 'By sea to Gdańsk, then by train to Paskov.',
    distance: {
      via: 'the Suez Canal, to Gdańsk',
      nauticalMiles: 11360,
      alternative: {
        via: 'the Cape of Good Hope, to Gdańsk',
        nauticalMiles: 14680,
      },
      note: 'Sea distance to Gdańsk. The container then goes on by train to Paskov.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Shanghai to Gdańsk is about 11,360 nautical miles through the Suez Canal, or about 14,680 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How far is the sea leg from Shanghai to Gdańsk?',
        answer: 'About 11,360 nautical miles from Shanghai to Gdańsk through the Suez Canal, or about 14,680 round the Cape of Good Hope. Then the container goes on by train to Paskov. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Shanghai to Paskov?',
        answer: 'By sea to Gdańsk, then by train. One rail link is ÖBB Rail Cargo Group\'s train between Gdańsk and Paskov. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-belfast',
    portId: 'belfast',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Rotterdam or another hub, then a feeder ship to Belfast.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10460,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13770,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shanghai to Belfast is about 10,460 nautical miles through the Suez Canal. Of the 7 Chinese ports on our list for Belfast, Shanghai is the fifth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Belfast?',
        answer: 'About 10,460 nautical miles through the Suez Canal, or about 13,770 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shanghai to Belfast?',
        answer: 'No. Belfast Harbour says CMA CGM\'s feeder service links its container terminal with UK and European ports, including Dunkirk and Rotterdam. So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      2,
    ],
  },
  {
    slug: 'shanghai-to-bergen',
    portId: 'bergen',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Bremerhaven, then a feeder ship to Bergen.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11000,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14320,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shanghai to Bergen is about 11,000 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Bergen, Shanghai is the sixth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Bergen?',
        answer: 'About 11,000 nautical miles through the Suez Canal, or about 14,320 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Bergen?',
        answer: 'Yes, it changes ship. Bergen Havn says MSC runs a weekly feeder from Bremerhaven and Maersk a weekly feeder along the west coast. So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-bremerhaven',
    portId: 'bremerhaven',
    updated: '2026-11-14',
    quickRoute: 'One ship can carry it all the way, through the Suez Canal or round Africa.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10740,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14060,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shanghai to Bremerhaven is about 10,740 nautical miles through the Suez Canal.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Bremerhaven?',
        answer: 'About 10,740 nautical miles through the Suez Canal, or about 14,060 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Shanghai to Bremerhaven on one ship?',
        answer: 'Yes, on the lines that sail direct. The terminal sailing list shows the Gemini Asia-Europe services calling at Bremerhaven. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-brevik',
    portId: 'brevik',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Rotterdam, Bremerhaven or Hamburg, then a feeder ship to Brevik.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10970,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14290,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shanghai to Brevik is about 10,970 nautical miles through the Suez Canal. Of the 7 Chinese ports on our list for Brevik, Shanghai is the fifth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Brevik?',
        answer: 'About 10,970 nautical miles through the Suez Canal, or about 14,290 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Brevik?',
        answer: 'Yes, it changes ship. Grenland Havn says Unifeeder calls on routes to Rotterdam, Bremerhaven and Hamburg, where much cargo is moved to ocean ships. So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shanghai-to-cagliari',
    portId: 'cagliari',
    updated: '2026-11-14',
    quickRoute: 'About 8,470 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8470,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13490,
      },
      note: 'Going round the Cape adds about 5,020 nautical miles, 59% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shanghai covers about 8,470 nautical miles to Cagliari through the Suez Canal. Round Africa it is about 13,490.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Shanghai to Cagliari shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 8,470 nautical miles, against about 13,490 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Cagliari?',
        answer: 'It depends on the line. Large ships do call at Porto Canale: in July 2025 the MSC Venice, which can carry 16,652 TEU, docked there. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-denver',
    portId: 'denver',
    updated: '2026-11-14',
    quickRoute: 'A ship to Los Angeles, then by train to Denver.',
    distance: {
      via: 'the North Pacific, with no canal, to Los Angeles',
      nauticalMiles: 5750,
      note: 'Sea distance to Los Angeles. The container then goes on by train to Denver.',
    },
    travel: [
      'By sea, Shanghai to Los Angeles is about 5,750 nautical miles, with no canal on the way.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Shanghai to Denver?',
        answer: 'About 5,750 nautical miles from Shanghai to Los Angeles by the North Pacific, with no canal. Then the container goes on by train to Denver. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Shanghai to Denver?',
        answer: 'By sea to Los Angeles, then by train. Union Pacific runs on-dock lanes between Denver and terminals in Los Angeles and Long Beach. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shanghai-to-drammen',
    portId: 'drammen',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a European hub, a smaller feeder to Drammen.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11030,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14350,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Shanghai is the sixth closest of the 8 Chinese ports on our list for Drammen: about 11,030 nautical miles through the Suez Canal, or 14,350 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shanghai to Drammen by sea?',
        answer: 'About 11,030 nautical miles through the Suez Canal, or about 14,350 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shanghai to Drammen?',
        answer: 'No. Drammen Havn says it has access to all the major European ports. So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-floroe',
    portId: 'floroe',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11090,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14400,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shanghai to Floroe is about 11,090 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Floroe, Shanghai is the sixth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Floroe?',
        answer: 'About 11,090 nautical miles through the Suez Canal, or about 14,400 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Floroe?',
        answer: 'It depends on the line. Florø hamn lists container ships among the vessels its Botnastranda quay handles. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-fredrikstad',
    portId: 'fredrikstad',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Bremerhaven, Hamburg or Rotterdam, a smaller feeder to Fredrikstad.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10990,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14310,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Shanghai is the sixth closest of the 8 Chinese ports on our list for Fredrikstad: about 10,990 nautical miles through the Suez Canal, or 14,310 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shanghai to Fredrikstad by sea?',
        answer: 'About 10,990 nautical miles through the Suez Canal, or about 14,310 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Fredrikstad?',
        answer: 'Yes, it changes ship. Borg Havn\'s regular-calls page (August 2022) lists Unifeeder twice a week to and from Bremerhaven, Hamburg and Rotterdam. So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shanghai-to-gaevle',
    portId: 'gaevle',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a larger European port, a smaller feeder to Gävle.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11600,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14920,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Shanghai is the sixth closest of the 8 Chinese ports on our list for Gävle: about 11,600 nautical miles through the Suez Canal, or 14,920 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shanghai to Gävle by sea?',
        answer: 'About 11,600 nautical miles through the Suez Canal, or about 14,920 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Gävle?',
        answer: 'Yes, it changes ship. Gävle Hamn says containers come and go on feeder ships to and from larger European ports. So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shanghai-to-gothenburg',
    portId: 'gothenburg',
    updated: '2026-11-14',
    quickRoute: 'Direct on some lines, with a change of ship on others.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10960,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14280,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shanghai to Gothenburg is about 10,960 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Gothenburg, Shanghai is the sixth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Gothenburg?',
        answer: 'About 10,960 nautical miles through the Suez Canal, or about 14,280 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shanghai to Gothenburg?',
        answer: 'Some do. The Port of Gothenburg lists direct services to China and other parts of Asia, plus daily feeder ships to the hubs on the continent. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      2,
    ],
  },
  {
    slug: 'shanghai-to-grangemouth',
    portId: 'grangemouth',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a bigger European port, a smaller feeder to Grangemouth.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10820,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14140,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Shanghai is the sixth closest of the 9 Chinese ports on our list for Grangemouth: about 10,820 nautical miles through the Suez Canal, or 14,140 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shanghai to Grangemouth by sea?',
        answer: 'About 10,820 nautical miles through the Suez Canal, or about 14,140 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shanghai to Grangemouth?',
        answer: 'No. Forth Ports says Grangemouth has "regular feeder connections linking Scotland to major deep-sea shipping routes". So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-halmstad',
    portId: 'halmstad',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Bremerhaven or Hamburg, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11060,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14380,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 30% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shanghai covers about 11,060 nautical miles to Halmstad through the Suez Canal. Round Africa it is about 14,380.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Shanghai to Halmstad shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,060 nautical miles, against about 14,380 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shanghai to Halmstad?',
        answer: 'No. Hallands Hamnar says it has regular feeder traffic to Bremerhaven and Hamburg. So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-haugesund',
    portId: 'haugesund',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Rotterdam or Hamburg, then a feeder ship to Haugesund.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10920,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14240,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shanghai to Haugesund is about 10,920 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Haugesund, Shanghai is the fifth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Haugesund?',
        answer: 'About 10,920 nautical miles through the Suez Canal, or about 14,240 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shanghai to Haugesund?',
        answer: 'No. Karmsund Havn says Samskip runs a weekly line between Rotterdam or Hamburg and western Norway. So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-helsingborg',
    portId: 'helsingborg',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Hamburg, Bremerhaven or Rotterdam, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11060,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14380,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 30% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shanghai covers about 11,060 nautical miles to Helsingborg through the Suez Canal. Round Africa it is about 14,380.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Shanghai to Helsingborg shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,060 nautical miles, against about 14,380 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Helsingborg?',
        answer: 'Yes, it changes ship. The port says its container lines run via Europe\'s large logistics hubs, and its line list shows Hamburg, Bremerhaven, Rotterdam and Antwerp. So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-jacksonville',
    portId: 'jacksonville',
    updated: '2026-11-14',
    quickRoute: 'Across the Pacific and through the Panama Canal.',
    distance: {
      via: 'the Panama Canal',
      nauticalMiles: 10190,
      note: 'Measured port to port through the Panama Canal.',
    },
    travel: [
      'An all-water service from Shanghai to Jacksonville crosses the Pacific and passes through the Panama Canal, about 10,190 nautical miles.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Jacksonville?',
        answer: 'About 10,190 nautical miles by the Panama Canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Shanghai to Jacksonville on one ship?',
        answer: 'Yes, on the lines that sail direct. JAXPORT lists direct service with Asia among the lines that call. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-kristiansand',
    portId: 'kristiansand',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a European hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10890,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14210,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 30% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shanghai covers about 10,890 nautical miles to Kristiansand through the Suez Canal. Round Africa it is about 14,210.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Shanghai to Kristiansand shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,890 nautical miles, against about 14,210 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shanghai to Kristiansand?',
        answer: 'No. Kristiansand Havn says four lines call, Baltic Line, Unifeeder, Viasea and MSC, with routes to several European ports. So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-larvik',
    portId: 'larvik',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Hamburg, Bremerhaven, Rotterdam or Antwerp, a smaller feeder to Larvik.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10970,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14290,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Shanghai is the sixth closest of the 8 Chinese ports on our list for Larvik: about 10,970 nautical miles through the Suez Canal, or 14,290 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shanghai to Larvik by sea?',
        answer: 'About 10,970 nautical miles through the Suez Canal, or about 14,290 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Larvik?',
        answer: 'Yes, it changes ship. Larvik Havn lists weekly container calls to Hamburg, Bremerhaven, Rotterdam and Antwerp. So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-liverpool',
    portId: 'liverpool',
    updated: '2026-11-14',
    quickRoute: 'Direct on some lines, with a change of ship on others.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10420,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13730,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shanghai to Liverpool is about 10,420 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Liverpool, Shanghai is the sixth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Liverpool?',
        answer: 'About 10,420 nautical miles through the Suez Canal, or about 13,730 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shanghai to Liverpool?',
        answer: 'Some do. Peel Ports describes Liverpool2 as "a viable call" for Far East services, and says Royal Seaforth has feeder services that connect Liverpool to the Far East. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shanghai-to-livorno',
    portId: 'livorno',
    updated: '2026-11-14',
    quickRoute: 'About 8,590 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8590,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13660,
      },
      note: 'Going round the Cape adds about 5,060 nautical miles, 59% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shanghai covers about 8,590 nautical miles to Livorno through the Suez Canal. Round Africa it is about 13,660.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Shanghai to Livorno shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 8,590 nautical miles, against about 13,660 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Livorno?',
        answer: 'It depends on the line. Terminal Darsena Toscana handles both ships that call direct and containers moved on from hub ports. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-maaloey',
    portId: 'maaloey',
    updated: '2026-11-14',
    quickRoute: 'About 11,090 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11090,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14400,
      },
      note: 'Going round the Cape adds about 3,310 nautical miles, 30% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shanghai covers about 11,090 nautical miles to Måløy through the Suez Canal. Round Africa it is about 14,400.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Shanghai to Måløy shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,090 nautical miles, against about 14,400 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Måløy?',
        answer: 'It depends on the line. Nordfjord Havn\'s quays at Måløy are 6.5 to 10 metres deep, which suits smaller coastal ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-melnik',
    portId: 'melnik',
    updated: '2026-11-14',
    quickRoute: 'A ship to Hamburg, then by train to Mělník.',
    distance: {
      via: 'the Suez Canal, to Hamburg',
      nauticalMiles: 10780,
      alternative: {
        via: 'the Cape of Good Hope, to Hamburg',
        nauticalMiles: 14100,
      },
      note: 'Sea distance to Hamburg. The container then goes on by train to Mělník.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'The sea leg from Shanghai ends at Hamburg, about 10,780 nautical miles away by Suez. Of the 9 Chinese ports on our list for Mělník, Shanghai is the sixth closest by sea.',
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Shanghai to Mělník?',
        answer: 'About 10,780 nautical miles from Shanghai to Hamburg through the Suez Canal, or about 14,100 round the Cape of Good Hope. Then the container goes on by train to Mělník. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Shanghai to Mělník?',
        answer: 'By sea to Hamburg, then by train. ÖBB Rail Cargo Group runs nine to eleven trains a week between Hamburg or Bremerhaven and its Mělník terminal. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shanghai-to-mo-i-rana',
    portId: 'mo-i-rana',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11490,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14800,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shanghai to Mo i Rana is about 11,490 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Mo i Rana, Shanghai is the fifth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Mo i Rana?',
        answer: 'About 11,490 nautical miles through the Suez Canal, or about 14,800 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Mo i Rana?',
        answer: 'It depends on the line. Toraneskaia has 8 metres of water and one mobile crane, which suits smaller ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shanghai-to-moss',
    portId: 'moss',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a European hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11010,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14330,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 30% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shanghai covers about 11,010 nautical miles to Moss through the Suez Canal. Round Africa it is about 14,330.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Shanghai to Moss shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,010 nautical miles, against about 14,330 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Moss?',
        answer: 'Yes, it changes ship. Moss Havn says it has direct calls from Europe and that MSC has set up a regular call. So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-naples',
    portId: 'naples',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8350,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13750,
      },
      note: 'Which way the ship goes changes the trip by about 5,400 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shanghai to Naples is about 8,350 nautical miles through the Suez Canal. Of the 3 Chinese ports on our list for Naples, Shanghai is the closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Naples?',
        answer: 'About 8,350 nautical miles through the Suez Canal, or about 13,750 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Naples?',
        answer: 'It depends on the line. Conateco says some lines use it as a hub for moving containers between ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      2,
    ],
  },
  {
    slug: 'shanghai-to-norrkoeping',
    portId: 'norrkoeping',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a bigger European port, a smaller feeder to Norrköping.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11440,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14760,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Shanghai is the sixth closest of the 8 Chinese ports on our list for Norrköping: about 11,440 nautical miles through the Suez Canal, or 14,760 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shanghai to Norrköping by sea?',
        answer: 'About 11,440 nautical miles through the Suez Canal, or about 14,760 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shanghai to Norrköping?',
        answer: 'No. Its Pampus terminal has 610 metres of quay and two container cranes, a size served by smaller ships from the big European ports. So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-oakland',
    portId: 'oakland',
    updated: '2026-11-14',
    quickRoute: 'Straight across the North Pacific. No canal.',
    distance: {
      via: 'the North Pacific, with no canal',
      nauticalMiles: 5410,
      note: 'A straight crossing with no canal.',
    },
    travel: [
      'Shanghai to Oakland is a straight crossing of the North Pacific, about 5,410 nautical miles, with no canal on the way.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Oakland?',
        answer: 'About 5,410 nautical miles by the North Pacific, with no canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Shanghai to Oakland on one ship?',
        answer: 'Yes, on the lines that sail direct. The Port of Oakland lists transpacific services from Asia at its terminals. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-orkanger',
    portId: 'orkanger',
    updated: '2026-11-14',
    quickRoute: 'About 11,340 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11340,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14650,
      },
      note: 'Going round the Cape adds about 3,310 nautical miles, 29% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shanghai covers about 11,340 nautical miles to Orkanger through the Suez Canal. Round Africa it is about 14,650.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Shanghai to Orkanger shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,340 nautical miles, against about 14,650 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Orkanger?',
        answer: 'It depends on the line. Orkanger\'s quays have 10 metres of water, which suits the smaller ships that run from European hubs. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-oslo',
    portId: 'oslo',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a European hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11040,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14360,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 30% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shanghai covers about 11,040 nautical miles to Oslo through the Suez Canal. Round Africa it is about 14,360.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Shanghai to Oslo shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,040 nautical miles, against about 14,360 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Oslo?',
        answer: 'Yes, it changes ship. Oslo Havn says it has weekly calls from container lines sailing between Oslo and ports across Europe. So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shanghai-to-ottawa',
    portId: 'ottawa',
    updated: '2026-11-14',
    quickRoute: 'A ship to Montreal, then by truck to Ottawa.',
    distance: {
      via: 'the Panama Canal, to Montreal',
      nauticalMiles: 11970,
      note: 'Sea distance to Montreal. The container then goes on by truck to Ottawa.',
    },
    travel: [
      'An all-water service from Shanghai to Ottawa crosses the Pacific and passes through the Panama Canal, about 11,970 nautical miles.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Shanghai to Ottawa?',
        answer: 'About 11,970 nautical miles from Shanghai to Montreal by the Panama Canal. Then the container goes on by truck to Ottawa. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Shanghai to Ottawa?',
        answer: 'By sea to Montreal, then by truck. Containers land at the Port of Montreal and finish the trip by truck. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shanghai-to-ravenna',
    portId: 'ravenna',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8490,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14420,
      },
      note: 'Which way the ship goes changes the trip by about 5,930 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shanghai to Ravenna is about 8,490 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Ravenna, Shanghai is the fifth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Ravenna?',
        answer: 'About 8,490 nautical miles through the Suez Canal, or about 14,420 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Ravenna?',
        answer: 'It depends on the line. Terminal Container Ravenna lists shuttle ships to Trieste and to Gioia Tauro, a big transshipment hub. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-regina',
    portId: 'regina',
    updated: '2026-11-14',
    quickRoute: 'A ship to Vancouver, then by train to Regina.',
    distance: {
      via: 'the North Pacific, with no canal, to Vancouver',
      nauticalMiles: 5150,
      note: 'Sea distance to Vancouver. The container then goes on by train to Regina.',
    },
    travel: [
      'By sea, Shanghai to Vancouver is about 5,150 nautical miles, with no canal on the way.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Shanghai to Regina?',
        answer: 'About 5,150 nautical miles from Shanghai to Vancouver by the North Pacific, with no canal. Then the container goes on by train to Regina. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Shanghai to Regina?',
        answer: 'By sea to Vancouver, then by train. CN and CPKC both serve the Port of Vancouver and both run container terminals in Regina. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-savannah',
    portId: 'savannah',
    updated: '2026-11-14',
    quickRoute: 'Across the Pacific and through the Panama Canal.',
    distance: {
      via: 'the Panama Canal',
      nauticalMiles: 10260,
      note: 'Measured port to port through the Panama Canal.',
    },
    travel: [
      'An all-water service from Shanghai to Savannah crosses the Pacific and passes through the Panama Canal, about 10,260 nautical miles.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Savannah?',
        answer: 'About 10,260 nautical miles by the Panama Canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Shanghai to Savannah on one ship?',
        answer: 'Yes, on the lines that sail direct. The Georgia Ports Authority lists direct Asia services to Savannah on its route maps. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      2,
    ],
  },
  {
    slug: 'shanghai-to-south-shields',
    portId: 'south-shields',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Felixstowe or Rotterdam, then a feeder ship to the Port of Tyne.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10700,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14020,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shanghai to the Port of Tyne is about 10,700 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for the Port of Tyne, Shanghai is the sixth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to the Port of Tyne?',
        answer: 'About 10,700 nautical miles through the Suez Canal, or about 14,020 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and the Port of Tyne?',
        answer: 'Yes, it changes ship. The port says its short-sea feeder services connect it with Felixstowe, Rotterdam and beyond. So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-stavanger',
    portId: 'stavanger',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a European hub, a smaller feeder to Stavanger.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10930,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14250,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Shanghai is the sixth closest of the 8 Chinese ports on our list for Stavanger: about 10,930 nautical miles through the Suez Canal, or 14,250 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shanghai to Stavanger by sea?',
        answer: 'About 10,930 nautical miles through the Suez Canal, or about 14,250 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shanghai to Stavanger?',
        answer: 'No. Stavangerregionen Havn says several liner companies call every week, mostly with containers. So the container travels from Shanghai on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shanghai-to-straumen',
    portId: 'straumen',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11520,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14830,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shanghai to Straumen is about 11,520 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Straumen, Shanghai is the sixth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Straumen?',
        answer: 'About 11,520 nautical miles through the Suez Canal, or about 14,830 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Straumen?',
        answer: 'It depends on the line. North Sea Container Line uses the quay and has applied to deepen it from about 7 to 9 metres. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shanghai-to-svelgen',
    portId: 'svelgen',
    updated: '2026-11-14',
    quickRoute: 'About 11,090 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11090,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14400,
      },
      note: 'Going round the Cape adds about 3,310 nautical miles, 30% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shanghai covers about 11,090 nautical miles to Svelgen through the Suez Canal. Round Africa it is about 14,400.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Shanghai to Svelgen shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,090 nautical miles, against about 14,400 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Svelgen?',
        answer: 'It depends on the line. Svelgen\'s quay mainly serves Elkem\'s plant, and Elkem applied in 2024 to upgrade it for larger container ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shanghai-to-sydney',
    portId: 'sydney',
    updated: '2026-11-14',
    quickRoute: 'About 4,610 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the open sea, with no canal',
      nauticalMiles: 4610,
      note: 'A straight crossing with no canal.',
    },
    travel: [
      'Shanghai to Sydney is about 4,610 nautical miles by sea, with no canal on the way.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Sydney?',
        answer: 'About 4,610 nautical miles by the open sea, with no canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Sydney?',
        answer: 'It depends on the line. Port Botany has three container terminals, run by DP World, Patrick and Hutchison Ports. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shanghai-to-tacoma',
    portId: 'tacoma',
    updated: '2026-11-14',
    quickRoute: 'Straight across the North Pacific. No canal.',
    distance: {
      via: 'the North Pacific, with no canal',
      nauticalMiles: 5150,
      note: 'A straight crossing with no canal.',
    },
    travel: [
      'Shanghai to Tacoma is a straight crossing of the North Pacific, about 5,150 nautical miles, with no canal on the way.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Tacoma?',
        answer: 'About 5,150 nautical miles by the North Pacific, with no canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Shanghai to Tacoma on one ship?',
        answer: 'Yes, on the lines that sail direct. The Northwest Seaport Alliance says it has direct services to ports throughout Asia. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shanghai-to-trieste',
    portId: 'trieste',
    updated: '2026-11-14',
    quickRoute: 'One ship or two, depending on the line. By Suez or round Africa.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8540,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14460,
      },
      note: 'Going round the Cape adds about 5,930 nautical miles, 69% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shanghai covers about 8,540 nautical miles to Trieste through the Suez Canal. Round Africa it is about 14,460.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Shanghai to Trieste shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 8,540 nautical miles, against about 14,460 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shanghai to Trieste?',
        answer: 'Some do. Trieste Marine Terminal lists weekly direct services from the Far East, plus links through the main Mediterranean hubs. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shanghai-to-wilmington',
    portId: 'wilmington',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Panama Canal',
      nauticalMiles: 10290,
      note: 'Measured port to port through the Panama Canal.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'An all-water service from Shanghai to Wilmington crosses the Pacific and passes through the Panama Canal, about 10,290 nautical miles.',
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shanghai to Wilmington?',
        answer: 'About 10,290 nautical miles by the Panama Canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shanghai and Wilmington?',
        answer: 'It depends on the line. NC Ports says Wilmington has container service to and from more than 20 international ports. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shenzhen-to-aalesund',
    portId: 'aalesund',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Hamburg, Rotterdam or Antwerp, then a feeder ship to Ålesund.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10450,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13770,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shenzhen to Ålesund is about 10,450 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Ålesund, Shenzhen is the second closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shenzhen to Ålesund?',
        answer: 'About 10,450 nautical miles through the Suez Canal, or about 13,770 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Ålesund?',
        answer: 'Yes, it changes ship. The Flatholmen terminal operator names Hamburg, Rotterdam and Antwerp as its sea links. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shenzhen-to-ancona',
    portId: 'ancona',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7730,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13670,
      },
      note: 'Which way the ship goes changes the trip by about 5,940 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shenzhen to Ancona is about 7,730 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Ancona, Shenzhen is the second closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shenzhen to Ancona?',
        answer: 'About 7,730 nautical miles through the Suez Canal, or about 13,670 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Ancona?',
        answer: 'It depends on the line. The port authority says its container traffic draws the main global container lines. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shenzhen-to-awt-paskov',
    portId: 'awt-paskov',
    updated: '2026-11-14',
    quickRoute: 'A ship to Gdańsk, then by train to Paskov.',
    distance: {
      via: 'the Suez Canal, to Gdańsk',
      nauticalMiles: 10660,
      alternative: {
        via: 'the Cape of Good Hope, to Gdańsk',
        nauticalMiles: 14000,
      },
      note: 'Sea distance to Gdańsk. The container then goes on by train to Paskov.',
    },
    travel: [
      'The sea leg from Shenzhen ends at Gdańsk, about 10,660 nautical miles away by Suez. Of the 8 Chinese ports on our list for Paskov, Shenzhen is the second closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Shenzhen to Paskov?',
        answer: 'About 10,660 nautical miles from Shenzhen to Gdańsk through the Suez Canal, or about 14,000 round the Cape of Good Hope. Then the container goes on by train to Paskov. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Shenzhen to Paskov?',
        answer: 'By sea to Gdańsk, then by train. One rail link is ÖBB Rail Cargo Group\'s train between Gdańsk and Paskov. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shenzhen-to-belfast',
    portId: 'belfast',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Rotterdam or another hub, a smaller feeder to Belfast.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9770,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13090,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Shenzhen is the second closest of the 7 Chinese ports on our list for Belfast: about 9,770 nautical miles through the Suez Canal, or 13,090 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shenzhen to Belfast by sea?',
        answer: 'About 9,770 nautical miles through the Suez Canal, or about 13,090 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Belfast?',
        answer: 'Yes, it changes ship. Belfast Harbour says CMA CGM\'s feeder service links its container terminal with UK and European ports, including Dunkirk and Rotterdam. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shenzhen-to-bergen',
    portId: 'bergen',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Bremerhaven, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10310,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13640,
      },
      note: 'Going round the Cape adds about 3,330 nautical miles, 32% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shenzhen covers about 10,310 nautical miles to Bergen through the Suez Canal. Round Africa it is about 13,640.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Shenzhen to Bergen shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,310 nautical miles, against about 13,640 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shenzhen to Bergen?',
        answer: 'No. Bergen Havn says MSC runs a weekly feeder from Bremerhaven and Maersk a weekly feeder along the west coast. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shenzhen-to-boston',
    portId: 'boston',
    updated: '2026-11-14',
    quickRoute: 'Across the Pacific and through the Panama Canal.',
    distance: {
      via: 'the Panama Canal',
      nauticalMiles: 11490,
      note: 'Measured port to port through the Panama Canal.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'An all-water service from Shenzhen to Boston crosses the Pacific and passes through the Panama Canal, about 11,490 nautical miles.',
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shenzhen to Boston?',
        answer: 'About 11,490 nautical miles by the Panama Canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Shenzhen to Boston on one ship?',
        answer: 'Yes, on the lines that sail direct. Massport lists weekly services from Conley Terminal to China and South Korea. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shenzhen-to-brevik',
    portId: 'brevik',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Rotterdam, Bremerhaven or Hamburg, a smaller feeder to Brevik.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10280,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13610,
      },
      note: 'The route round Africa is about 3,330 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Shenzhen is the second closest of the 7 Chinese ports on our list for Brevik: about 10,280 nautical miles through the Suez Canal, or 13,610 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shenzhen to Brevik by sea?',
        answer: 'About 10,280 nautical miles through the Suez Canal, or about 13,610 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shenzhen to Brevik?',
        answer: 'No. Grenland Havn says Unifeeder calls on routes to Rotterdam, Bremerhaven and Hamburg, where much cargo is moved to ocean ships. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shenzhen-to-cagliari',
    portId: 'cagliari',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7780,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 12810,
      },
      note: 'The route round Africa is about 5,040 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Shenzhen is the second closest of the 8 Chinese ports on our list for Cagliari: about 7,780 nautical miles through the Suez Canal, or 12,810 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shenzhen to Cagliari by sea?',
        answer: 'About 7,780 nautical miles through the Suez Canal, or about 12,810 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Cagliari?',
        answer: 'It depends on the line. Large ships do call at Porto Canale: in July 2025 the MSC Venice, which can carry 16,652 TEU, docked there. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shenzhen-to-drammen',
    portId: 'drammen',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub, then a feeder ship to Drammen.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10340,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13670,
      },
      note: 'Which way the ship goes changes the trip by about 3,340 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shenzhen to Drammen is about 10,340 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Drammen, Shenzhen is the second closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shenzhen to Drammen?',
        answer: 'About 10,340 nautical miles through the Suez Canal, or about 13,670 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Drammen?',
        answer: 'Yes, it changes ship. Drammen Havn says it has access to all the major European ports. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shenzhen-to-floroe',
    portId: 'floroe',
    updated: '2026-11-14',
    quickRoute: 'About 10,390 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10390,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13720,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 32% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shenzhen covers about 10,390 nautical miles to Floroe through the Suez Canal. Round Africa it is about 13,720.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Shenzhen to Floroe shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,390 nautical miles, against about 13,720 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Floroe?',
        answer: 'It depends on the line. Florø hamn lists container ships among the vessels its Botnastranda quay handles. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shenzhen-to-fredrikstad',
    portId: 'fredrikstad',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Bremerhaven, Hamburg or Rotterdam, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10300,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13630,
      },
      note: 'Going round the Cape adds about 3,340 nautical miles, 32% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shenzhen covers about 10,300 nautical miles to Fredrikstad through the Suez Canal. Round Africa it is about 13,630.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Shenzhen to Fredrikstad shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,300 nautical miles, against about 13,630 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Fredrikstad?',
        answer: 'Yes, it changes ship. Borg Havn\'s regular-calls page (August 2022) lists Unifeeder twice a week to and from Bremerhaven, Hamburg and Rotterdam. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shenzhen-to-gaevle',
    portId: 'gaevle',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a larger European port, then a feeder ship to Gävle.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10910,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14240,
      },
      note: 'Which way the ship goes changes the trip by about 3,340 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shenzhen to Gävle is about 10,910 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Gävle, Shenzhen is the second closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shenzhen to Gävle?',
        answer: 'About 10,910 nautical miles through the Suez Canal, or about 14,240 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Gävle?',
        answer: 'Yes, it changes ship. Gävle Hamn says containers come and go on feeder ships to and from larger European ports. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shenzhen-to-gothenburg',
    portId: 'gothenburg',
    updated: '2026-11-14',
    quickRoute: 'Some lines sail direct to Gothenburg; others change ship at a hub.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10270,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13600,
      },
      note: 'The route round Africa is about 3,340 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Shenzhen is the second closest of the 9 Chinese ports on our list for Gothenburg: about 10,270 nautical miles through the Suez Canal, or 13,600 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shenzhen to Gothenburg by sea?',
        answer: 'About 10,270 nautical miles through the Suez Canal, or about 13,600 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shenzhen to Gothenburg?',
        answer: 'Some do. The Port of Gothenburg lists direct services to China and other parts of Asia, plus daily feeder ships to the hubs on the continent. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      2,
    ],
  },
  {
    slug: 'shenzhen-to-grangemouth',
    portId: 'grangemouth',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a bigger European port, then a feeder ship to Grangemouth.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10130,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13460,
      },
      note: 'Which way the ship goes changes the trip by about 3,330 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shenzhen to Grangemouth is about 10,130 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Grangemouth, Shenzhen is the second closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shenzhen to Grangemouth?',
        answer: 'About 10,130 nautical miles through the Suez Canal, or about 13,460 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shenzhen to Grangemouth?',
        answer: 'No. Forth Ports says Grangemouth has "regular feeder connections linking Scotland to major deep-sea shipping routes". So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shenzhen-to-halmstad',
    portId: 'halmstad',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Bremerhaven or Hamburg, then a feeder ship to Halmstad.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10370,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13700,
      },
      note: 'Which way the ship goes changes the trip by about 3,340 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shenzhen to Halmstad is about 10,370 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Halmstad, Shenzhen is the second closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shenzhen to Halmstad?',
        answer: 'About 10,370 nautical miles through the Suez Canal, or about 13,700 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shenzhen to Halmstad?',
        answer: 'No. Hallands Hamnar says it has regular feeder traffic to Bremerhaven and Hamburg. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shenzhen-to-haugesund',
    portId: 'haugesund',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Rotterdam or Hamburg, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10230,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13560,
      },
      note: 'Going round the Cape adds about 3,330 nautical miles, 33% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shenzhen covers about 10,230 nautical miles to Haugesund through the Suez Canal. Round Africa it is about 13,560.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Shenzhen to Haugesund shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,230 nautical miles, against about 13,560 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shenzhen to Haugesund?',
        answer: 'No. Karmsund Havn says Samskip runs a weekly line between Rotterdam or Hamburg and western Norway. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shenzhen-to-helsingborg',
    portId: 'helsingborg',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Hamburg, Bremerhaven or Rotterdam, then a feeder ship to Helsingborg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10360,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13700,
      },
      note: 'Which way the ship goes changes the trip by about 3,330 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shenzhen to Helsingborg is about 10,360 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Helsingborg, Shenzhen is the second closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shenzhen to Helsingborg?',
        answer: 'About 10,360 nautical miles through the Suez Canal, or about 13,700 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Helsingborg?',
        answer: 'Yes, it changes ship. The port says its container lines run via Europe\'s large logistics hubs, and its line list shows Hamburg, Bremerhaven, Rotterdam and Antwerp. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shenzhen-to-kristiansand',
    portId: 'kristiansand',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub, then a feeder ship to Kristiansand.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10190,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13530,
      },
      note: 'Which way the ship goes changes the trip by about 3,340 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shenzhen to Kristiansand is about 10,190 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Kristiansand, Shenzhen is the second closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shenzhen to Kristiansand?',
        answer: 'About 10,190 nautical miles through the Suez Canal, or about 13,530 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Kristiansand?',
        answer: 'Yes, it changes ship. Kristiansand Havn says four lines call, Baltic Line, Unifeeder, Viasea and MSC, with routes to several European ports. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shenzhen-to-larvik',
    portId: 'larvik',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Hamburg, Bremerhaven, Rotterdam or Antwerp, then a feeder ship to Larvik.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10280,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13610,
      },
      note: 'Which way the ship goes changes the trip by about 3,330 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shenzhen to Larvik is about 10,280 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Larvik, Shenzhen is the second closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shenzhen to Larvik?',
        answer: 'About 10,280 nautical miles through the Suez Canal, or about 13,610 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shenzhen to Larvik?',
        answer: 'No. Larvik Havn lists weekly container calls to Hamburg, Bremerhaven, Rotterdam and Antwerp. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shenzhen-to-liverpool',
    portId: 'liverpool',
    updated: '2026-11-14',
    quickRoute: 'One ship or two, depending on the line. By Suez or round Africa.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9730,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13050,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 34% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shenzhen covers about 9,730 nautical miles to Liverpool through the Suez Canal. Round Africa it is about 13,050.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Shenzhen to Liverpool shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 9,730 nautical miles, against about 13,050 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shenzhen to Liverpool?',
        answer: 'Some do. Peel Ports describes Liverpool2 as "a viable call" for Far East services, and says Royal Seaforth has feeder services that connect Liverpool to the Far East. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shenzhen-to-livorno',
    portId: 'livorno',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7900,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 12980,
      },
      note: 'The route round Africa is about 5,080 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Shenzhen is the second closest of the 9 Chinese ports on our list for Livorno: about 7,900 nautical miles through the Suez Canal, or 12,980 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shenzhen to Livorno by sea?',
        answer: 'About 7,900 nautical miles through the Suez Canal, or about 12,980 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Livorno?',
        answer: 'It depends on the line. Terminal Darsena Toscana handles both ships that call direct and containers moved on from hub ports. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      2,
    ],
  },
  {
    slug: 'shenzhen-to-long-beach',
    portId: 'long-beach',
    updated: '2026-11-14',
    quickRoute: 'Straight across the North Pacific. No canal.',
    distance: {
      via: 'the North Pacific, with no canal',
      nauticalMiles: 6440,
      note: 'A straight crossing with no canal.',
    },
    travel: [
      'Shenzhen to Long Beach is a straight crossing of the North Pacific, about 6,440 nautical miles, with no canal on the way.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shenzhen to Long Beach?',
        answer: 'About 6,440 nautical miles by the North Pacific, with no canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Shenzhen to Long Beach on one ship?',
        answer: 'Yes, on the lines that sail direct. The port says East Asian trade accounts for more than 90% of its shipments. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shenzhen-to-maaloey',
    portId: 'maaloey',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10390,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13720,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shenzhen to Måløy is about 10,390 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Måløy, Shenzhen is the second closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shenzhen to Måløy?',
        answer: 'About 10,390 nautical miles through the Suez Canal, or about 13,720 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Måløy?',
        answer: 'It depends on the line. Nordfjord Havn\'s quays at Måløy are 6.5 to 10 metres deep, which suits smaller coastal ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shenzhen-to-melnik',
    portId: 'melnik',
    updated: '2026-11-14',
    quickRoute: 'By sea to Hamburg, then by train to Mělník.',
    distance: {
      via: 'the Suez Canal, to Hamburg',
      nauticalMiles: 10090,
      alternative: {
        via: 'the Cape of Good Hope, to Hamburg',
        nauticalMiles: 13420,
      },
      note: 'Sea distance to Hamburg. The container then goes on by train to Mělník.',
    },
    travel: [
      'By sea, Shenzhen to Hamburg is about 10,090 nautical miles through the Suez Canal, or about 13,420 round the Cape of Good Hope.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is the sea leg from Shenzhen to Hamburg?',
        answer: 'About 10,090 nautical miles from Shenzhen to Hamburg through the Suez Canal, or about 13,420 round the Cape of Good Hope. Then the container goes on by train to Mělník. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Shenzhen to Mělník?',
        answer: 'By sea to Hamburg, then by train. ÖBB Rail Cargo Group runs nine to eleven trains a week between Hamburg or Bremerhaven and its Mělník terminal. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shenzhen-to-mo-i-rana',
    portId: 'mo-i-rana',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10790,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14120,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Shenzhen is the second closest of the 8 Chinese ports on our list for Mo i Rana: about 10,790 nautical miles through the Suez Canal, or 14,120 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shenzhen to Mo i Rana by sea?',
        answer: 'About 10,790 nautical miles through the Suez Canal, or about 14,120 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Mo i Rana?',
        answer: 'It depends on the line. Toraneskaia has 8 metres of water and one mobile crane, which suits smaller ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shenzhen-to-moss',
    portId: 'moss',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a European hub, a smaller feeder to Moss.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10310,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13650,
      },
      note: 'The route round Africa is about 3,340 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Shenzhen is the second closest of the 9 Chinese ports on our list for Moss: about 10,310 nautical miles through the Suez Canal, or 13,650 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shenzhen to Moss by sea?',
        answer: 'About 10,310 nautical miles through the Suez Canal, or about 13,650 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Moss?',
        answer: 'Yes, it changes ship. Moss Havn says it has direct calls from Europe and that MSC has set up a regular call. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shenzhen-to-munich',
    portId: 'munich',
    updated: '2026-11-14',
    quickRoute: 'By sea to Hamburg, then by train to Munich.',
    distance: {
      via: 'the Suez Canal, to Hamburg',
      nauticalMiles: 10090,
      alternative: {
        via: 'the Cape of Good Hope, to Hamburg',
        nauticalMiles: 13420,
      },
      note: 'Sea distance to Hamburg. The container then goes on by train to Munich.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Shenzhen to Hamburg is about 10,090 nautical miles through the Suez Canal, or about 13,420 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How far is the sea leg from Shenzhen to Hamburg?',
        answer: 'About 10,090 nautical miles from Shenzhen to Hamburg through the Suez Canal, or about 13,420 round the Cape of Good Hope. Then the container goes on by train to Munich. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Shenzhen to Munich?',
        answer: 'By sea to Hamburg, then by train. METRANS runs nine trains a week from Hamburg and three from Bremerhaven to the München-Riem terminal. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shenzhen-to-orkanger',
    portId: 'orkanger',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10650,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13970,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Shenzhen is the second closest of the 9 Chinese ports on our list for Orkanger: about 10,650 nautical miles through the Suez Canal, or 13,970 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shenzhen to Orkanger by sea?',
        answer: 'About 10,650 nautical miles through the Suez Canal, or about 13,970 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Orkanger?',
        answer: 'It depends on the line. Orkanger\'s quays have 10 metres of water, which suits the smaller ships that run from European hubs. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shenzhen-to-oslo',
    portId: 'oslo',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub, then a feeder ship to Oslo.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10340,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13680,
      },
      note: 'Which way the ship goes changes the trip by about 3,330 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shenzhen to Oslo is about 10,340 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Oslo, Shenzhen is the second closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shenzhen to Oslo?',
        answer: 'About 10,340 nautical miles through the Suez Canal, or about 13,680 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shenzhen to Oslo?',
        answer: 'No. Oslo Havn says it has weekly calls from container lines sailing between Oslo and ports across Europe. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shenzhen-to-rotterdam',
    portId: 'rotterdam',
    updated: '2026-11-14',
    quickRoute: 'Big ships from China call at Rotterdam themselves.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9820,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13150,
      },
      note: 'Going round the Cape adds about 3,340 nautical miles, 34% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shenzhen covers about 9,820 nautical miles to Rotterdam through the Suez Canal. Round Africa it is about 13,150.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Shenzhen to Rotterdam shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 9,820 nautical miles, against about 13,150 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Can a container go from Shenzhen to Rotterdam on one ship?',
        answer: 'Yes, on the lines that sail direct. The port authority says Rotterdam has deep-sea connections to more than 1,000 ports and that its terminals can be reached from the sea within two hours. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      2,
    ],
  },
  {
    slug: 'shenzhen-to-salerno',
    portId: 'salerno',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Gioia Tauro or another Mediterranean hub, a smaller feeder to Salerno.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7630,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13080,
      },
      note: 'The route round Africa is about 5,450 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Shenzhen is the second closest of the 8 Chinese ports on our list for Salerno: about 7,630 nautical miles through the Suez Canal, or 13,080 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shenzhen to Salerno by sea?',
        answer: 'About 7,630 nautical miles through the Suez Canal, or about 13,080 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shenzhen to Salerno?',
        answer: 'No. The port authority says Salerno is linked by feeder service with the Mediterranean transshipment ports, in particular Gioia Tauro. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shenzhen-to-seattle',
    portId: 'seattle',
    updated: '2026-11-14',
    quickRoute: 'Straight across the North Pacific. No canal.',
    distance: {
      via: 'the North Pacific, with no canal',
      nauticalMiles: 5820,
      note: 'A straight crossing with no canal. Of the 4 Chinese ports on our list for Seattle, Shenzhen is the third closest by sea.',
    },
    travel: [
      'Shenzhen to Seattle is a straight crossing of the North Pacific, about 5,820 nautical miles, with no canal on the way.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shenzhen to Seattle?',
        answer: 'About 5,820 nautical miles by the North Pacific, with no canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Shenzhen to Seattle on one ship?',
        answer: 'Yes, on the lines that sail direct. The Northwest Seaport Alliance says it has direct services to ports throughout Asia. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      2,
    ],
  },
  {
    slug: 'shenzhen-to-south-shields',
    portId: 'south-shields',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Felixstowe or Rotterdam, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10010,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13340,
      },
      note: 'Going round the Cape adds about 3,340 nautical miles, 33% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Shenzhen covers about 10,010 nautical miles to the Port of Tyne through the Suez Canal. Round Africa it is about 13,340.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Shenzhen to the Port of Tyne shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,010 nautical miles, against about 13,340 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Shenzhen to the Port of Tyne?',
        answer: 'No. The port says its short-sea feeder services connect it with Felixstowe, Rotterdam and beyond. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shenzhen-to-stavanger',
    portId: 'stavanger',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a European hub, a smaller feeder to Stavanger.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10240,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13570,
      },
      note: 'The route round Africa is about 3,340 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Shenzhen is the second closest of the 8 Chinese ports on our list for Stavanger: about 10,240 nautical miles through the Suez Canal, or 13,570 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Shenzhen to Stavanger by sea?',
        answer: 'About 10,240 nautical miles through the Suez Canal, or about 13,570 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Stavanger?',
        answer: 'Yes, it changes ship. Stavangerregionen Havn says several liner companies call every week, mostly with containers. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'shenzhen-to-straumen',
    portId: 'straumen',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10830,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14150,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shenzhen to Straumen is about 10,830 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Straumen, Shenzhen is the second closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shenzhen to Straumen?',
        answer: 'About 10,830 nautical miles through the Suez Canal, or about 14,150 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Straumen?',
        answer: 'It depends on the line. North Sea Container Line uses the quay and has applied to deepen it from about 7 to 9 metres. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shenzhen-to-svelgen',
    portId: 'svelgen',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10390,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13720,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shenzhen to Svelgen is about 10,390 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Svelgen, Shenzhen is the second closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shenzhen to Svelgen?',
        answer: 'About 10,390 nautical miles through the Suez Canal, or about 13,720 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Svelgen?',
        answer: 'It depends on the line. Svelgen\'s quay mainly serves Elkem\'s plant, and Elkem applied in 2024 to upgrade it for larger container ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'shenzhen-to-teesport',
    portId: 'teesport',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub port, then a feeder ship to Teesport.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9990,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13320,
      },
      note: 'Which way the ship goes changes the trip by about 3,330 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Shenzhen to Teesport is about 9,990 nautical miles through the Suez Canal. Of the 7 Chinese ports on our list for Teesport, Shenzhen is the second closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Shenzhen to Teesport?',
        answer: 'About 9,990 nautical miles through the Suez Canal, or about 13,320 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Shenzhen and Teesport?',
        answer: 'Yes, it changes ship. PD Ports says Teesport has "direct connections to the major hub ports of Europe", with over 20 ship calls a week. So the container travels from Shenzhen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-aalesund',
    portId: 'aalesund',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Hamburg, Rotterdam or Antwerp, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11760,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15060,
      },
      note: 'Going round the Cape adds about 3,310 nautical miles, 28% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Tianjin covers about 11,760 nautical miles to Ålesund through the Suez Canal. Round Africa it is about 15,060.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Tianjin to Ålesund shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,760 nautical miles, against about 15,060 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Ålesund?',
        answer: 'Yes, it changes ship. The Flatholmen terminal operator names Hamburg, Rotterdam and Antwerp as its sea links. So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-ancona',
    portId: 'ancona',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9040,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14970,
      },
      note: 'The route round Africa is about 5,930 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Tianjin is the furthest of the 9 Chinese ports on our list for Ancona: about 9,040 nautical miles through the Suez Canal, or 14,970 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Tianjin to Ancona by sea?',
        answer: 'About 9,040 nautical miles through the Suez Canal, or about 14,970 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Ancona?',
        answer: 'It depends on the line. The port authority says its container traffic draws the main global container lines. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-awt-paskov',
    portId: 'awt-paskov',
    updated: '2026-11-14',
    quickRoute: 'A ship to Gdańsk, then by train to Paskov.',
    distance: {
      via: 'the Suez Canal, to Gdańsk',
      nauticalMiles: 11970,
      alternative: {
        via: 'the Cape of Good Hope, to Gdańsk',
        nauticalMiles: 15290,
      },
      note: 'Sea distance to Gdańsk. The container then goes on by train to Paskov.',
    },
    travel: [
      'The sea leg from Tianjin ends at Gdańsk, about 11,970 nautical miles away by Suez. Of the 8 Chinese ports on our list for Paskov, Tianjin is the furthest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Tianjin to Paskov?',
        answer: 'About 11,970 nautical miles from Tianjin to Gdańsk through the Suez Canal, or about 15,290 round the Cape of Good Hope. Then the container goes on by train to Paskov. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Tianjin to Paskov?',
        answer: 'By sea to Gdańsk, then by train. One rail link is ÖBB Rail Cargo Group\'s train between Gdańsk and Paskov. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-belfast',
    portId: 'belfast',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Rotterdam or another hub, a smaller feeder to Belfast.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11080,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14380,
      },
      note: 'The route round Africa is about 3,310 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Tianjin is the furthest of the 7 Chinese ports on our list for Belfast: about 11,080 nautical miles through the Suez Canal, or 14,380 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Tianjin to Belfast by sea?',
        answer: 'About 11,080 nautical miles through the Suez Canal, or about 14,380 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Belfast?',
        answer: 'Yes, it changes ship. Belfast Harbour says CMA CGM\'s feeder service links its container terminal with UK and European ports, including Dunkirk and Rotterdam. So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-bergen',
    portId: 'bergen',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Bremerhaven, then a feeder ship to Bergen.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11610,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14930,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Tianjin to Bergen is about 11,610 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Bergen, Tianjin is the furthest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Tianjin to Bergen?',
        answer: 'About 11,610 nautical miles through the Suez Canal, or about 14,930 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Tianjin to Bergen?',
        answer: 'No. Bergen Havn says MSC runs a weekly feeder from Bremerhaven and Maersk a weekly feeder along the west coast. So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-brevik',
    portId: 'brevik',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Rotterdam, Bremerhaven or Hamburg, then a feeder ship to Brevik.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11590,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14910,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Tianjin to Brevik is about 11,590 nautical miles through the Suez Canal. Of the 7 Chinese ports on our list for Brevik, Tianjin is the furthest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Tianjin to Brevik?',
        answer: 'About 11,590 nautical miles through the Suez Canal, or about 14,910 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Brevik?',
        answer: 'Yes, it changes ship. Grenland Havn says Unifeeder calls on routes to Rotterdam, Bremerhaven and Hamburg, where much cargo is moved to ocean ships. So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-cagliari',
    portId: 'cagliari',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9090,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14110,
      },
      note: 'Which way the ship goes changes the trip by about 5,020 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Tianjin to Cagliari is about 9,090 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Cagliari, Tianjin is the furthest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Tianjin to Cagliari?',
        answer: 'About 9,090 nautical miles through the Suez Canal, or about 14,110 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Cagliari?',
        answer: 'It depends on the line. Large ships do call at Porto Canale: in July 2025 the MSC Venice, which can carry 16,652 TEU, docked there. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-civitavecchia',
    portId: 'civitavecchia',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9090,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14270,
      },
      note: 'The route round Africa is about 5,180 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Tianjin is the furthest of the 5 Chinese ports on our list for Civitavecchia: about 9,090 nautical miles through the Suez Canal, or 14,270 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Tianjin to Civitavecchia by sea?',
        answer: 'About 9,090 nautical miles through the Suez Canal, or about 14,270 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Civitavecchia?',
        answer: 'It depends on the line. The port authority recorded an 11,923 TEU MSC ship loading at the RTC container terminal in 2021. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-drammen',
    portId: 'drammen',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a European hub, a smaller feeder to Drammen.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11640,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14960,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Tianjin is the furthest of the 8 Chinese ports on our list for Drammen: about 11,640 nautical miles through the Suez Canal, or 14,960 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Tianjin to Drammen by sea?',
        answer: 'About 11,640 nautical miles through the Suez Canal, or about 14,960 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Tianjin to Drammen?',
        answer: 'No. Drammen Havn says it has access to all the major European ports. So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-floroe',
    portId: 'floroe',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11700,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15010,
      },
      note: 'The route round Africa is about 3,310 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Tianjin is the furthest of the 9 Chinese ports on our list for Floroe: about 11,700 nautical miles through the Suez Canal, or 15,010 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Tianjin to Floroe by sea?',
        answer: 'About 11,700 nautical miles through the Suez Canal, or about 15,010 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Floroe?',
        answer: 'It depends on the line. Florø hamn lists container ships among the vessels its Botnastranda quay handles. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-frankfurt',
    portId: 'frankfurt',
    updated: '2026-11-14',
    quickRoute: 'A ship to Hamburg, then by train to Frankfurt.',
    distance: {
      via: 'the Suez Canal, to Hamburg',
      nauticalMiles: 11400,
      alternative: {
        via: 'the Cape of Good Hope, to Hamburg',
        nauticalMiles: 14720,
      },
      note: 'Sea distance to Hamburg. The container then goes on by train to Frankfurt.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'The sea leg from Tianjin ends at Hamburg, about 11,400 nautical miles away by Suez.',
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Tianjin to Frankfurt?',
        answer: 'About 11,400 nautical miles from Tianjin to Hamburg through the Suez Canal, or about 14,720 round the Cape of Good Hope. Then the container goes on by train to Frankfurt. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Tianjin to Frankfurt?',
        answer: 'By sea to Hamburg, then by train. Contargo\'s Frankfurt Ost terminal has four trains a week to and from Hamburg, plus trains and barges to Antwerp and Rotterdam. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-fredrikstad',
    portId: 'fredrikstad',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Bremerhaven, Hamburg or Rotterdam, then a feeder ship to Fredrikstad.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11610,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14930,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Tianjin to Fredrikstad is about 11,610 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Fredrikstad, Tianjin is the furthest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Tianjin to Fredrikstad?',
        answer: 'About 11,610 nautical miles through the Suez Canal, or about 14,930 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Fredrikstad?',
        answer: 'Yes, it changes ship. Borg Havn\'s regular-calls page (August 2022) lists Unifeeder twice a week to and from Bremerhaven, Hamburg and Rotterdam. So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-gothenburg',
    portId: 'gothenburg',
    updated: '2026-11-14',
    quickRoute: 'Direct on some lines, with a change of ship on others.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11580,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14900,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Tianjin to Gothenburg is about 11,580 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Gothenburg, Tianjin is the furthest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Tianjin to Gothenburg?',
        answer: 'About 11,580 nautical miles through the Suez Canal, or about 14,900 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Tianjin to Gothenburg?',
        answer: 'Some do. The Port of Gothenburg lists direct services to China and other parts of Asia, plus daily feeder ships to the hubs on the continent. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-grangemouth',
    portId: 'grangemouth',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a bigger European port, a smaller feeder to Grangemouth.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11440,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14760,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Tianjin is the furthest of the 9 Chinese ports on our list for Grangemouth: about 11,440 nautical miles through the Suez Canal, or 14,760 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Tianjin to Grangemouth by sea?',
        answer: 'About 11,440 nautical miles through the Suez Canal, or about 14,760 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Grangemouth?',
        answer: 'Yes, it changes ship. Forth Ports says Grangemouth has "regular feeder connections linking Scotland to major deep-sea shipping routes". So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-halmstad',
    portId: 'halmstad',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Bremerhaven or Hamburg, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11680,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15000,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 28% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Tianjin covers about 11,680 nautical miles to Halmstad through the Suez Canal. Round Africa it is about 15,000.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Tianjin to Halmstad shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,680 nautical miles, against about 15,000 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Halmstad?',
        answer: 'Yes, it changes ship. Hallands Hamnar says it has regular feeder traffic to Bremerhaven and Hamburg. So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-haugesund',
    portId: 'haugesund',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Rotterdam or Hamburg, then a feeder ship to Haugesund.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11540,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14860,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Tianjin to Haugesund is about 11,540 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Haugesund, Tianjin is the furthest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Tianjin to Haugesund?',
        answer: 'About 11,540 nautical miles through the Suez Canal, or about 14,860 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Tianjin to Haugesund?',
        answer: 'No. Karmsund Havn says Samskip runs a weekly line between Rotterdam or Hamburg and western Norway. So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-helsingborg',
    portId: 'helsingborg',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Hamburg, Bremerhaven or Rotterdam, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11670,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14990,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 28% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Tianjin covers about 11,670 nautical miles to Helsingborg through the Suez Canal. Round Africa it is about 14,990.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Tianjin to Helsingborg shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,670 nautical miles, against about 14,990 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Helsingborg?',
        answer: 'Yes, it changes ship. The port says its container lines run via Europe\'s large logistics hubs, and its line list shows Hamburg, Bremerhaven, Rotterdam and Antwerp. So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-kristiansand',
    portId: 'kristiansand',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a European hub, a smaller feeder to Kristiansand.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11500,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14820,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Tianjin is the furthest of the 9 Chinese ports on our list for Kristiansand: about 11,500 nautical miles through the Suez Canal, or 14,820 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Tianjin to Kristiansand by sea?',
        answer: 'About 11,500 nautical miles through the Suez Canal, or about 14,820 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Tianjin to Kristiansand?',
        answer: 'No. Kristiansand Havn says four lines call, Baltic Line, Unifeeder, Viasea and MSC, with routes to several European ports. So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-la-spezia',
    portId: 'la-spezia',
    updated: '2026-11-14',
    quickRoute: 'About 9,240 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9240,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14260,
      },
      note: 'Going round the Cape adds about 5,020 nautical miles, 54% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Tianjin covers about 9,240 nautical miles to La Spezia through the Suez Canal. Round Africa it is about 14,260.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Tianjin to La Spezia shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 9,240 nautical miles, against about 14,260 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and La Spezia?',
        answer: 'It depends on the line. LSCT, part of Contship Italia, runs the container terminal, which handled more than 1.2 million TEU in 2025. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-larvik',
    portId: 'larvik',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Hamburg, Bremerhaven, Rotterdam or Antwerp, a smaller feeder to Larvik.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11580,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14900,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Tianjin is the furthest of the 8 Chinese ports on our list for Larvik: about 11,580 nautical miles through the Suez Canal, or 14,900 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Tianjin to Larvik by sea?',
        answer: 'About 11,580 nautical miles through the Suez Canal, or about 14,900 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Larvik?',
        answer: 'Yes, it changes ship. Larvik Havn lists weekly container calls to Hamburg, Bremerhaven, Rotterdam and Antwerp. So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-livorno',
    portId: 'livorno',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9200,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14270,
      },
      note: 'The route round Africa is about 5,060 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Tianjin is the furthest of the 9 Chinese ports on our list for Livorno: about 9,200 nautical miles through the Suez Canal, or 14,270 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Tianjin to Livorno by sea?',
        answer: 'About 9,200 nautical miles through the Suez Canal, or about 14,270 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Livorno?',
        answer: 'It depends on the line. Terminal Darsena Toscana handles both ships that call direct and containers moved on from hub ports. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-maaloey',
    portId: 'maaloey',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11700,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15010,
      },
      note: 'The route round Africa is about 3,310 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Tianjin is the furthest of the 9 Chinese ports on our list for Måløy: about 11,700 nautical miles through the Suez Canal, or 15,010 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Tianjin to Måløy by sea?',
        answer: 'About 11,700 nautical miles through the Suez Canal, or about 15,010 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Måløy?',
        answer: 'It depends on the line. Nordfjord Havn\'s quays at Måløy are 6.5 to 10 metres deep, which suits smaller coastal ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-melnik',
    portId: 'melnik',
    updated: '2026-11-14',
    quickRoute: 'A ship to Hamburg, then by train to Mělník.',
    distance: {
      via: 'the Suez Canal, to Hamburg',
      nauticalMiles: 11400,
      alternative: {
        via: 'the Cape of Good Hope, to Hamburg',
        nauticalMiles: 14720,
      },
      note: 'Sea distance to Hamburg. The container then goes on by train to Mělník.',
    },
    travel: [
      'The sea leg from Tianjin ends at Hamburg, about 11,400 nautical miles away by Suez. Of the 9 Chinese ports on our list for Mělník, Tianjin is the furthest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Tianjin to Mělník?',
        answer: 'About 11,400 nautical miles from Tianjin to Hamburg through the Suez Canal, or about 14,720 round the Cape of Good Hope. Then the container goes on by train to Mělník. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Tianjin to Mělník?',
        answer: 'By sea to Hamburg, then by train. ÖBB Rail Cargo Group runs nine to eleven trains a week between Hamburg or Bremerhaven and its Mělník terminal. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-mo-i-rana',
    portId: 'mo-i-rana',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 12100,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15410,
      },
      note: 'The route round Africa is about 3,310 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Tianjin is the furthest of the 8 Chinese ports on our list for Mo i Rana: about 12,100 nautical miles through the Suez Canal, or 15,410 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Tianjin to Mo i Rana by sea?',
        answer: 'About 12,100 nautical miles through the Suez Canal, or about 15,410 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Mo i Rana?',
        answer: 'It depends on the line. Toraneskaia has 8 metres of water and one mobile crane, which suits smaller ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-montreal',
    portId: 'montreal',
    updated: '2026-11-14',
    quickRoute: 'About 12,210 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Panama Canal',
      nauticalMiles: 12210,
      note: 'Measured port to port through the Panama Canal.',
    },
    travel: [
      'An all-water service from Tianjin to Montreal crosses the Pacific and passes through the Panama Canal, about 12,210 nautical miles.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Tianjin to Montreal?',
        answer: 'About 12,210 nautical miles by the Panama Canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Montreal?',
        answer: 'It depends on the line. Montreal\'s terminals are linked straight to CN, which gives one day by train to Toronto. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-moss',
    portId: 'moss',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a European hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11620,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14940,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 29% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Tianjin covers about 11,620 nautical miles to Moss through the Suez Canal. Round Africa it is about 14,940.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Tianjin to Moss shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,620 nautical miles, against about 14,940 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Moss?',
        answer: 'Yes, it changes ship. Moss Havn says it has direct calls from Europe and that MSC has set up a regular call. So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-munich',
    portId: 'munich',
    updated: '2026-11-14',
    quickRoute: 'By sea to Hamburg, then by train to Munich.',
    distance: {
      via: 'the Suez Canal, to Hamburg',
      nauticalMiles: 11400,
      alternative: {
        via: 'the Cape of Good Hope, to Hamburg',
        nauticalMiles: 14720,
      },
      note: 'Sea distance to Hamburg. The container then goes on by train to Munich.',
    },
    travel: [
      'By sea, Tianjin to Hamburg is about 11,400 nautical miles through the Suez Canal, or about 14,720 round the Cape of Good Hope.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is the sea leg from Tianjin to Hamburg?',
        answer: 'About 11,400 nautical miles from Tianjin to Hamburg through the Suez Canal, or about 14,720 round the Cape of Good Hope. Then the container goes on by train to Munich. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Tianjin to Munich?',
        answer: 'By sea to Hamburg, then by train. METRANS runs nine trains a week from Hamburg and three from Bremerhaven to the München-Riem terminal. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-orkanger',
    portId: 'orkanger',
    updated: '2026-11-14',
    quickRoute: 'About 11,960 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11960,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15260,
      },
      note: 'Going round the Cape adds about 3,310 nautical miles, 28% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Tianjin covers about 11,960 nautical miles to Orkanger through the Suez Canal. Round Africa it is about 15,260.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Tianjin to Orkanger shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,960 nautical miles, against about 15,260 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Orkanger?',
        answer: 'It depends on the line. Orkanger\'s quays have 10 metres of water, which suits the smaller ships that run from European hubs. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-oslo',
    portId: 'oslo',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a European hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11650,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14970,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 28% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Tianjin covers about 11,650 nautical miles to Oslo through the Suez Canal. Round Africa it is about 14,970.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Tianjin to Oslo shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,650 nautical miles, against about 14,970 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Tianjin to Oslo?',
        answer: 'No. Oslo Havn says it has weekly calls from container lines sailing between Oslo and ports across Europe. So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-ravenna',
    portId: 'ravenna',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9100,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15030,
      },
      note: 'Which way the ship goes changes the trip by about 5,930 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Tianjin to Ravenna is about 9,100 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Ravenna, Tianjin is the furthest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Tianjin to Ravenna?',
        answer: 'About 9,100 nautical miles through the Suez Canal, or about 15,030 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Ravenna?',
        answer: 'It depends on the line. Terminal Container Ravenna lists shuttle ships to Trieste and to Gioia Tauro, a big transshipment hub. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-salerno',
    portId: 'salerno',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Gioia Tauro or another Mediterranean hub, a smaller feeder to Salerno.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8940,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14370,
      },
      note: 'The route round Africa is about 5,440 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Tianjin is the furthest of the 8 Chinese ports on our list for Salerno: about 8,940 nautical miles through the Suez Canal, or 14,370 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Tianjin to Salerno by sea?',
        answer: 'About 8,940 nautical miles through the Suez Canal, or about 14,370 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Salerno?',
        answer: 'Yes, it changes ship. The port authority says Salerno is linked by feeder service with the Mediterranean transshipment ports, in particular Gioia Tauro. So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-san-francisco',
    portId: 'san-francisco',
    updated: '2026-11-14',
    quickRoute: 'A ship to Oakland, then by truck across the bay to San Francisco.',
    distance: {
      via: 'the North Pacific, with no canal, to Oakland',
      nauticalMiles: 5650,
      note: 'Sea distance to Oakland. The container then goes on by truck across the bay to San Francisco.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Tianjin to Oakland is about 5,650 nautical miles, with no canal on the way.',
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Tianjin to San Francisco?',
        answer: 'About 5,650 nautical miles from Tianjin to Oakland by the North Pacific, with no canal. Then the container goes on by truck across the bay to San Francisco. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Tianjin to San Francisco?',
        answer: 'By sea to Oakland, then by truck across the bay. The Port of Oakland handles more than 99% of Northern California\'s container cargo. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-south-shields',
    portId: 'south-shields',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Felixstowe or Rotterdam, then a feeder ship to the Port of Tyne.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11320,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14640,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Tianjin to the Port of Tyne is about 11,320 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for the Port of Tyne, Tianjin is the furthest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Tianjin to the Port of Tyne?',
        answer: 'About 11,320 nautical miles through the Suez Canal, or about 14,640 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Tianjin to the Port of Tyne?',
        answer: 'No. The port says its short-sea feeder services connect it with Felixstowe, Rotterdam and beyond. So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-stavanger',
    portId: 'stavanger',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a European hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11540,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14860,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 29% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Tianjin covers about 11,540 nautical miles to Stavanger through the Suez Canal. Round Africa it is about 14,860.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Tianjin to Stavanger shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,540 nautical miles, against about 14,860 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Tianjin to Stavanger?',
        answer: 'No. Stavangerregionen Havn says several liner companies call every week, mostly with containers. So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-straumen',
    portId: 'straumen',
    updated: '2026-11-14',
    quickRoute: 'About 12,140 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 12140,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15440,
      },
      note: 'Going round the Cape adds about 3,310 nautical miles, 27% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Tianjin covers about 12,140 nautical miles to Straumen through the Suez Canal. Round Africa it is about 15,440.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Tianjin to Straumen shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 12,140 nautical miles, against about 15,440 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Straumen?',
        answer: 'It depends on the line. North Sea Container Line uses the quay and has applied to deepen it from about 7 to 9 metres. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-svelgen',
    portId: 'svelgen',
    updated: '2026-11-14',
    quickRoute: 'About 11,700 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11700,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 15010,
      },
      note: 'Going round the Cape adds about 3,310 nautical miles, 28% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Tianjin covers about 11,700 nautical miles to Svelgen through the Suez Canal. Round Africa it is about 15,010.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Tianjin to Svelgen shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,700 nautical miles, against about 15,010 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Svelgen?',
        answer: 'It depends on the line. Svelgen\'s quay mainly serves Elkem\'s plant, and Elkem applied in 2024 to upgrade it for larger container ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'tianjin-to-teesport',
    portId: 'teesport',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub port, then a feeder ship to Teesport.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11300,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14620,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Tianjin to Teesport is about 11,300 nautical miles through the Suez Canal. Of the 7 Chinese ports on our list for Teesport, Tianjin is the furthest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Tianjin to Teesport?',
        answer: 'About 11,300 nautical miles through the Suez Canal, or about 14,620 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Tianjin and Teesport?',
        answer: 'Yes, it changes ship. PD Ports says Teesport has "direct connections to the major hub ports of Europe", with over 20 ship calls a week. So the container travels from Tianjin on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'tianjin-to-vancouver',
    portId: 'vancouver',
    updated: '2026-11-14',
    quickRoute: 'Straight across the North Pacific. No canal.',
    distance: {
      via: 'the North Pacific, with no canal',
      nauticalMiles: 5390,
      note: 'A straight crossing with no canal.',
    },
    travel: [
      'Tianjin to Vancouver is a straight crossing of the North Pacific, about 5,390 nautical miles, with no canal on the way.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Tianjin to Vancouver?',
        answer: 'About 5,390 nautical miles by the North Pacific, with no canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Tianjin to Vancouver on one ship?',
        answer: 'Yes, on the lines that sail direct. The port authority says China is its largest source of inbound cargo, and terminal operators advertise direct trans-Pacific services. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-aalesund',
    portId: 'aalesund',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Hamburg, Rotterdam or Antwerp, a smaller feeder to Ålesund.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10660,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13970,
      },
      note: 'The route round Africa is about 3,310 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Xiamen is the fourth closest of the 9 Chinese ports on our list for Ålesund: about 10,660 nautical miles through the Suez Canal, or 13,970 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Xiamen to Ålesund by sea?',
        answer: 'About 10,660 nautical miles through the Suez Canal, or about 13,970 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Ålesund?',
        answer: 'Yes, it changes ship. The Flatholmen terminal operator names Hamburg, Rotterdam and Antwerp as its sea links. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-ancona',
    portId: 'ancona',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7950,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13880,
      },
      note: 'The route round Africa is about 5,930 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Xiamen is the fourth closest of the 9 Chinese ports on our list for Ancona: about 7,950 nautical miles through the Suez Canal, or 13,880 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Xiamen to Ancona by sea?',
        answer: 'About 7,950 nautical miles through the Suez Canal, or about 13,880 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Ancona?',
        answer: 'It depends on the line. The port authority says its container traffic draws the main global container lines. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'xiamen-to-awt-paskov',
    portId: 'awt-paskov',
    updated: '2026-11-14',
    quickRoute: 'A ship to Gdańsk, then by train to Paskov.',
    distance: {
      via: 'the Suez Canal, to Gdańsk',
      nauticalMiles: 10880,
      alternative: {
        via: 'the Cape of Good Hope, to Gdańsk',
        nauticalMiles: 14200,
      },
      note: 'Sea distance to Gdańsk. The container then goes on by train to Paskov.',
    },
    travel: [
      'The sea leg from Xiamen ends at Gdańsk, about 10,880 nautical miles away by Suez. Of the 8 Chinese ports on our list for Paskov, Xiamen is the fourth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How long is the sea part of the trip from Xiamen to Paskov?',
        answer: 'About 10,880 nautical miles from Xiamen to Gdańsk through the Suez Canal, or about 14,200 round the Cape of Good Hope. Then the container goes on by train to Paskov. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Xiamen to Paskov?',
        answer: 'By sea to Gdańsk, then by train. One rail link is ÖBB Rail Cargo Group\'s train between Gdańsk and Paskov. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'xiamen-to-bergen',
    portId: 'bergen',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Bremerhaven, a smaller feeder to Bergen.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10520,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13840,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Xiamen is the fourth closest of the 8 Chinese ports on our list for Bergen: about 10,520 nautical miles through the Suez Canal, or 13,840 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Xiamen to Bergen by sea?',
        answer: 'About 10,520 nautical miles through the Suez Canal, or about 13,840 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Bergen?',
        answer: 'Yes, it changes ship. Bergen Havn says MSC runs a weekly feeder from Bremerhaven and Maersk a weekly feeder along the west coast. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-brevik',
    portId: 'brevik',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Rotterdam, Bremerhaven or Hamburg, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10490,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13810,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 32% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Xiamen covers about 10,490 nautical miles to Brevik through the Suez Canal. Round Africa it is about 13,810.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Xiamen to Brevik shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,490 nautical miles, against about 13,810 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Brevik?',
        answer: 'Yes, it changes ship. Grenland Havn says Unifeeder calls on routes to Rotterdam, Bremerhaven and Hamburg, where much cargo is moved to ocean ships. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-cagliari',
    portId: 'cagliari',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8000,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13010,
      },
      note: 'The route round Africa is about 5,020 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Xiamen is the fourth closest of the 8 Chinese ports on our list for Cagliari: about 8,000 nautical miles through the Suez Canal, or 13,010 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Xiamen to Cagliari by sea?',
        answer: 'About 8,000 nautical miles through the Suez Canal, or about 13,010 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Cagliari?',
        answer: 'It depends on the line. Large ships do call at Porto Canale: in July 2025 the MSC Venice, which can carry 16,652 TEU, docked there. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-charleston',
    portId: 'charleston',
    updated: '2026-11-14',
    quickRoute: 'Across the Pacific and through the Panama Canal.',
    distance: {
      via: 'the Panama Canal',
      nauticalMiles: 10700,
      note: 'Measured port to port through the Panama Canal. Of the 3 Chinese ports on our list for Charleston, Xiamen is the second closest by sea.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'An all-water service from Xiamen to Charleston crosses the Pacific and passes through the Panama Canal, about 10,700 nautical miles.',
    ],
    faqs: [
      {
        question: 'How far is it by sea from Xiamen to Charleston?',
        answer: 'About 10,700 nautical miles by the Panama Canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Xiamen to Charleston on one ship?',
        answer: 'Yes, on the lines that sail direct. SC Ports counts 11 weekly Asia services at Charleston. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'xiamen-to-drammen',
    portId: 'drammen',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a European hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10550,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13870,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 31% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Xiamen covers about 10,550 nautical miles to Drammen through the Suez Canal. Round Africa it is about 13,870.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Xiamen to Drammen shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,550 nautical miles, against about 13,870 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Drammen?',
        answer: 'Yes, it changes ship. Drammen Havn says it has access to all the major European ports. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'xiamen-to-floroe',
    portId: 'floroe',
    updated: '2026-11-14',
    quickRoute: 'About 10,610 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10610,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13920,
      },
      note: 'Going round the Cape adds about 3,310 nautical miles, 31% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Xiamen covers about 10,610 nautical miles to Floroe through the Suez Canal. Round Africa it is about 13,920.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Xiamen to Floroe shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,610 nautical miles, against about 13,920 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Floroe?',
        answer: 'It depends on the line. Florø hamn lists container ships among the vessels its Botnastranda quay handles. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-fredrikstad',
    portId: 'fredrikstad',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to Bremerhaven, Hamburg or Rotterdam, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10520,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13840,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 32% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Xiamen covers about 10,520 nautical miles to Fredrikstad through the Suez Canal. Round Africa it is about 13,840.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Xiamen to Fredrikstad shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,520 nautical miles, against about 13,840 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Fredrikstad?',
        answer: 'Yes, it changes ship. Borg Havn\'s regular-calls page (August 2022) lists Unifeeder twice a week to and from Bremerhaven, Hamburg and Rotterdam. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-fremantle',
    portId: 'fremantle',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the open sea, with no canal',
      nauticalMiles: 3560,
      note: 'A straight crossing with no canal.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'Xiamen to Fremantle is about 3,560 nautical miles by sea, with no canal on the way.',
    ],
    faqs: [
      {
        question: 'How far is it by sea from Xiamen to Fremantle?',
        answer: 'About 3,560 nautical miles by the open sea, with no canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Fremantle?',
        answer: 'It depends on the line. Fremantle Ports says more than 99% of Western Australia\'s container trade comes through Fremantle. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'xiamen-to-gaevle',
    portId: 'gaevle',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a larger European port, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11120,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14440,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 30% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Xiamen covers about 11,120 nautical miles to Gävle through the Suez Canal. Round Africa it is about 14,440.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Xiamen to Gävle shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 11,120 nautical miles, against about 14,440 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Gävle?',
        answer: 'Yes, it changes ship. Gävle Hamn says containers come and go on feeder ships to and from larger European ports. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-gothenburg',
    portId: 'gothenburg',
    updated: '2026-11-14',
    quickRoute: 'One ship or two, depending on the line. By Suez or round Africa.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10480,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13800,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 32% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Xiamen covers about 10,480 nautical miles to Gothenburg through the Suez Canal. Round Africa it is about 13,800.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Xiamen to Gothenburg shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,480 nautical miles, against about 13,800 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Xiamen to Gothenburg?',
        answer: 'Some do. The Port of Gothenburg lists direct services to China and other parts of Asia, plus daily feeder ships to the hubs on the continent. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-grangemouth',
    portId: 'grangemouth',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a bigger European port, a smaller feeder to Grangemouth.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10340,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13660,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Xiamen is the fourth closest of the 9 Chinese ports on our list for Grangemouth: about 10,340 nautical miles through the Suez Canal, or 13,660 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Xiamen to Grangemouth by sea?',
        answer: 'About 10,340 nautical miles through the Suez Canal, or about 13,660 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Xiamen to Grangemouth?',
        answer: 'No. Forth Ports says Grangemouth has "regular feeder connections linking Scotland to major deep-sea shipping routes". So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-halmstad',
    portId: 'halmstad',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Bremerhaven or Hamburg, a smaller feeder to Halmstad.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10580,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13900,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Xiamen is the fourth closest of the 9 Chinese ports on our list for Halmstad: about 10,580 nautical miles through the Suez Canal, or 13,900 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Xiamen to Halmstad by sea?',
        answer: 'About 10,580 nautical miles through the Suez Canal, or about 13,900 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Halmstad?',
        answer: 'Yes, it changes ship. Hallands Hamnar says it has regular feeder traffic to Bremerhaven and Hamburg. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-haugesund',
    portId: 'haugesund',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Rotterdam or Hamburg, a smaller feeder to Haugesund.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10450,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13770,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Xiamen is the fourth closest of the 8 Chinese ports on our list for Haugesund: about 10,450 nautical miles through the Suez Canal, or 13,770 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Xiamen to Haugesund by sea?',
        answer: 'About 10,450 nautical miles through the Suez Canal, or about 13,770 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Haugesund?',
        answer: 'Yes, it changes ship. Karmsund Havn says Samskip runs a weekly line between Rotterdam or Hamburg and western Norway. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-helsingborg',
    portId: 'helsingborg',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Hamburg, Bremerhaven or Rotterdam, a smaller feeder to Helsingborg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10580,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13900,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Xiamen is the fourth closest of the 9 Chinese ports on our list for Helsingborg: about 10,580 nautical miles through the Suez Canal, or 13,900 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Xiamen to Helsingborg by sea?',
        answer: 'About 10,580 nautical miles through the Suez Canal, or about 13,900 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Xiamen to Helsingborg?',
        answer: 'No. The port says its container lines run via Europe\'s large logistics hubs, and its line list shows Hamburg, Bremerhaven, Rotterdam and Antwerp. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'xiamen-to-kristiansand',
    portId: 'kristiansand',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a European hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10410,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13730,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 32% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Xiamen covers about 10,410 nautical miles to Kristiansand through the Suez Canal. Round Africa it is about 13,730.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Xiamen to Kristiansand shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,410 nautical miles, against about 13,730 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Xiamen to Kristiansand?',
        answer: 'No. Kristiansand Havn says four lines call, Baltic Line, Unifeeder, Viasea and MSC, with routes to several European ports. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-larvik',
    portId: 'larvik',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to Hamburg, Bremerhaven, Rotterdam or Antwerp, a smaller feeder to Larvik.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10490,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13810,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Xiamen is the fourth closest of the 8 Chinese ports on our list for Larvik: about 10,490 nautical miles through the Suez Canal, or 13,810 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Xiamen to Larvik by sea?',
        answer: 'About 10,490 nautical miles through the Suez Canal, or about 13,810 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Xiamen to Larvik?',
        answer: 'No. Larvik Havn lists weekly container calls to Hamburg, Bremerhaven, Rotterdam and Antwerp. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-liverpool',
    portId: 'liverpool',
    updated: '2026-11-14',
    quickRoute: 'Some lines sail direct to Liverpool; others change ship at a hub.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 9940,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13250,
      },
      note: 'The route round Africa is about 3,310 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Xiamen is the fourth closest of the 8 Chinese ports on our list for Liverpool: about 9,940 nautical miles through the Suez Canal, or 13,250 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Xiamen to Liverpool by sea?',
        answer: 'About 9,940 nautical miles through the Suez Canal, or about 13,250 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Xiamen to Liverpool?',
        answer: 'Some do. Peel Ports describes Liverpool2 as "a viable call" for Far East services, and says Royal Seaforth has feeder services that connect Liverpool to the Far East. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'xiamen-to-livorno',
    portId: 'livorno',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8110,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13180,
      },
      note: 'The route round Africa is about 5,060 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Xiamen is the fourth closest of the 9 Chinese ports on our list for Livorno: about 8,110 nautical miles through the Suez Canal, or 13,180 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Xiamen to Livorno by sea?',
        answer: 'About 8,110 nautical miles through the Suez Canal, or about 13,180 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Livorno?',
        answer: 'It depends on the line. Terminal Darsena Toscana handles both ships that call direct and containers moved on from hub ports. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      2,
    ],
  },
  {
    slug: 'xiamen-to-maaloey',
    portId: 'maaloey',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10610,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13920,
      },
      note: 'The route round Africa is about 3,310 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Xiamen is the fourth closest of the 9 Chinese ports on our list for Måløy: about 10,610 nautical miles through the Suez Canal, or 13,920 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Xiamen to Måløy by sea?',
        answer: 'About 10,610 nautical miles through the Suez Canal, or about 13,920 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Måløy?',
        answer: 'It depends on the line. Nordfjord Havn\'s quays at Måløy are 6.5 to 10 metres deep, which suits smaller coastal ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-melnik',
    portId: 'melnik',
    updated: '2026-11-14',
    quickRoute: 'By sea to Hamburg, then by train to Mělník.',
    distance: {
      via: 'the Suez Canal, to Hamburg',
      nauticalMiles: 10300,
      alternative: {
        via: 'the Cape of Good Hope, to Hamburg',
        nauticalMiles: 13620,
      },
      note: 'Sea distance to Hamburg. The container then goes on by train to Mělník.',
    },
    travel: [
      'By sea, Xiamen to Hamburg is about 10,300 nautical miles through the Suez Canal, or about 13,620 round the Cape of Good Hope.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is the sea leg from Xiamen to Hamburg?',
        answer: 'About 10,300 nautical miles from Xiamen to Hamburg through the Suez Canal, or about 13,620 round the Cape of Good Hope. Then the container goes on by train to Mělník. We worked out the sea distance with open-source routing software.',
      },
      {
        question: 'How does a container get from Xiamen to Mělník?',
        answer: 'By sea to Hamburg, then by train. ÖBB Rail Cargo Group runs nine to eleven trains a week between Hamburg or Bremerhaven and its Mělník terminal. Ask us for the door-to-door time to your address.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'xiamen-to-mo-i-rana',
    portId: 'mo-i-rana',
    updated: '2026-11-14',
    quickRoute: 'By Suez or the Cape, then direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11010,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14320,
      },
      note: 'The route round Africa is about 3,310 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Xiamen is the third closest of the 8 Chinese ports on our list for Mo i Rana: about 11,010 nautical miles through the Suez Canal, or 14,320 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Xiamen to Mo i Rana by sea?',
        answer: 'About 11,010 nautical miles through the Suez Canal, or about 14,320 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Mo i Rana?',
        answer: 'It depends on the line. Toraneskaia has 8 metres of water and one mobile crane, which suits smaller ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'xiamen-to-moss',
    portId: 'moss',
    updated: '2026-11-14',
    quickRoute: 'By Suez Canal to a European hub, then a feeder ship for the last leg.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10530,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13850,
      },
      note: 'Going round the Cape adds about 3,320 nautical miles, 32% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Xiamen covers about 10,530 nautical miles to Moss through the Suez Canal. Round Africa it is about 13,850.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Xiamen to Moss shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 10,530 nautical miles, against about 13,850 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Xiamen to Moss?',
        answer: 'No. Moss Havn says it has direct calls from Europe and that MSC has set up a regular call. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-norfolk',
    portId: 'norfolk',
    updated: '2026-11-14',
    quickRoute: 'Across the Pacific and through the Panama Canal.',
    distance: {
      via: 'the Panama Canal',
      nauticalMiles: 10920,
      note: 'Measured port to port through the Panama Canal.',
    },
    travel: [
      'An all-water service from Xiamen to Norfolk crosses the Pacific and passes through the Panama Canal, about 10,920 nautical miles.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Xiamen to Norfolk?',
        answer: 'About 10,920 nautical miles by the Panama Canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Xiamen to Norfolk on one ship?',
        answer: 'Yes, on the lines that sail direct. The Port of Virginia lists a growing number of direct connections to Asia. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'xiamen-to-norrkoeping',
    portId: 'norrkoeping',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a bigger European port, a smaller feeder to Norrköping.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10960,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14280,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'By sea, Xiamen is the fourth closest of the 8 Chinese ports on our list for Norrköping: about 10,960 nautical miles through the Suez Canal, or 14,280 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Xiamen to Norrköping by sea?',
        answer: 'About 10,960 nautical miles through the Suez Canal, or about 14,280 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Xiamen to Norrköping?',
        answer: 'No. Its Pampus terminal has 610 metres of quay and two container cranes, a size served by smaller ships from the big European ports. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-orkanger',
    portId: 'orkanger',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10860,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14170,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Xiamen to Orkanger is about 10,860 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Orkanger, Xiamen is the fourth closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Xiamen to Orkanger?',
        answer: 'About 10,860 nautical miles through the Suez Canal, or about 14,170 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Orkanger?',
        answer: 'It depends on the line. Orkanger\'s quays have 10 metres of water, which suits the smaller ships that run from European hubs. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'xiamen-to-oslo',
    portId: 'oslo',
    updated: '2026-11-14',
    quickRoute: 'Two ships: a large one to a European hub, a smaller feeder to Oslo.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10560,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13880,
      },
      note: 'The route round Africa is about 3,320 nautical miles longer. Lines switch between the two, so ask us which one the sailing we quote takes.',
    },
    travel: [
      {
        portTravel: 1,
      },
      'By sea, Xiamen is the fourth closest of the 9 Chinese ports on our list for Oslo: about 10,560 nautical miles through the Suez Canal, or 13,880 round the Cape of Good Hope.',
    ],
    faqs: [
      {
        question: 'How many nautical miles is Xiamen to Oslo by sea?',
        answer: 'About 10,560 nautical miles through the Suez Canal, or about 13,880 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Do ships sail direct from Xiamen to Oslo?',
        answer: 'No. Oslo Havn says it has weekly calls from container lines sailing between Oslo and ports across Europe. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'xiamen-to-ravenna',
    portId: 'ravenna',
    updated: '2026-11-14',
    quickRoute: 'About 8,010 nautical miles by Suez. Direct or via a hub, depending on the line.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 8010,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13940,
      },
      note: 'Going round the Cape adds about 5,930 nautical miles, 74% more than the Suez route. The days in our table are what each line quoted.',
    },
    travel: [
      'A ship from Xiamen covers about 8,010 nautical miles to Ravenna through the Suez Canal. Round Africa it is about 13,940.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'Is Xiamen to Ravenna shorter through Suez or round Africa?',
        answer: 'Suez is shorter: about 8,010 nautical miles, against about 13,940 round the Cape of Good Hope. Which way a line goes is its choice, so ask us about the sailing we quote. We worked out both distances with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Ravenna?',
        answer: 'It depends on the line. Terminal Container Ravenna lists shuttle ships to Trieste and to Gioia Tauro, a big transshipment hub. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'xiamen-to-salerno',
    portId: 'salerno',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Gioia Tauro or another Mediterranean hub, then a feeder ship to Salerno.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 7840,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13280,
      },
      note: 'Which way the ship goes changes the trip by about 5,440 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Xiamen to Salerno is about 7,840 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Salerno, Xiamen is the fourth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Xiamen to Salerno?',
        answer: 'About 7,840 nautical miles through the Suez Canal, or about 13,280 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Salerno?',
        answer: 'Yes, it changes ship. The port authority says Salerno is linked by feeder service with the Mediterranean transshipment ports, in particular Gioia Tauro. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-south-shields',
    portId: 'south-shields',
    updated: '2026-11-14',
    quickRoute: 'A large ship to Felixstowe or Rotterdam, then a feeder ship to the Port of Tyne.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10230,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13550,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Xiamen to the Port of Tyne is about 10,230 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for the Port of Tyne, Xiamen is the fourth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Xiamen to the Port of Tyne?',
        answer: 'About 10,230 nautical miles through the Suez Canal, or about 13,550 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and the Port of Tyne?',
        answer: 'Yes, it changes ship. The port says its short-sea feeder services connect it with Felixstowe, Rotterdam and beyond. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'xiamen-to-stavanger',
    portId: 'stavanger',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub, then a feeder ship to Stavanger.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10450,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13770,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Xiamen to Stavanger is about 10,450 nautical miles through the Suez Canal. Of the 8 Chinese ports on our list for Stavanger, Xiamen is the fourth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Xiamen to Stavanger?',
        answer: 'About 10,450 nautical miles through the Suez Canal, or about 13,770 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Stavanger?',
        answer: 'Yes, it changes ship. Stavangerregionen Havn says several liner companies call every week, mostly with containers. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-straumen',
    portId: 'straumen',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 11050,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 14350,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Xiamen to Straumen is about 11,050 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Straumen, Xiamen is the fourth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Xiamen to Straumen?',
        answer: 'About 11,050 nautical miles through the Suez Canal, or about 14,350 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Straumen?',
        answer: 'It depends on the line. North Sea Container Line uses the quay and has applied to deepen it from about 7 to 9 metres. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      1,
    ],
  },
  {
    slug: 'xiamen-to-svelgen',
    portId: 'svelgen',
    updated: '2026-11-14',
    quickRoute: 'Through the Suez Canal or round Africa, depending on how the line is sailing.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10610,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13920,
      },
      note: 'Which way the ship goes changes the trip by about 3,310 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Xiamen to Svelgen is about 10,610 nautical miles through the Suez Canal. Of the 9 Chinese ports on our list for Svelgen, Xiamen is the fourth closest by sea.',
      {
        portTravel: 1,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Xiamen to Svelgen?',
        answer: 'About 10,610 nautical miles through the Suez Canal, or about 13,920 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Svelgen?',
        answer: 'It depends on the line. Svelgen\'s quay mainly serves Elkem\'s plant, and Elkem applied in 2024 to upgrade it for larger container ships. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'xiamen-to-teesport',
    portId: 'teesport',
    updated: '2026-11-14',
    quickRoute: 'A large ship to a European hub port, then a feeder ship to Teesport.',
    distance: {
      via: 'the Suez Canal',
      nauticalMiles: 10210,
      alternative: {
        via: 'the Cape of Good Hope',
        nauticalMiles: 13530,
      },
      note: 'Which way the ship goes changes the trip by about 3,320 nautical miles. Ask us which way the line is sailing this month, because it moves the arrival date.',
    },
    travel: [
      'Xiamen to Teesport is about 10,210 nautical miles through the Suez Canal. Of the 7 Chinese ports on our list for Teesport, Xiamen is the third closest by sea.',
      {
        portTravel: 0,
      },
    ],
    faqs: [
      {
        question: 'How far is it by sea from Xiamen to Teesport?',
        answer: 'About 10,210 nautical miles through the Suez Canal, or about 13,530 round the Cape of Good Hope. We worked these out port to port with open-source routing software.',
      },
      {
        question: 'Will my container change ships between Xiamen and Teesport?',
        answer: 'Yes, it changes ship. PD Ports says Teesport has "direct connections to the major hub ports of Europe", with over 20 ship calls a week. So the container travels from Xiamen on a large ship to a hub port, then moves to a smaller ship for the last leg. The days in our table include the change.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
  {
    slug: 'xiamen-to-vancouver',
    portId: 'vancouver',
    updated: '2026-11-14',
    quickRoute: 'Straight across the North Pacific. No canal.',
    distance: {
      via: 'the North Pacific, with no canal',
      nauticalMiles: 5600,
      note: 'A straight crossing with no canal.',
    },
    travel: [
      {
        portTravel: 0,
      },
      'Xiamen to Vancouver is a straight crossing of the North Pacific, about 5,600 nautical miles, with no canal on the way.',
    ],
    faqs: [
      {
        question: 'How far is it by sea from Xiamen to Vancouver?',
        answer: 'About 5,600 nautical miles by the North Pacific, with no canal. We worked this out port to port with open-source routing software.',
      },
      {
        question: 'Can a container go from Xiamen to Vancouver on one ship?',
        answer: 'Yes, on the lines that sail direct. The port authority says China is its largest source of inbound cargo, and terminal operators advertise direct trans-Pacific services. Ask us whether the sailing we quote is direct.',
      },
    ],
    portFaqs: [
      0,
    ],
  },
];
