/**
 * Sea Freight FCL Pricing Data
 * China to US & Canada Container Rates
 * Last Updated: May 15th - May 31th
 *
 * Note: These prices are subject to change based on market conditions.
 * Contact us for the most up-to-date pricing.
 */

export interface CarrierRate {
  carrier: string;
  price40GP: number;
  price40HQ: number;
  transitTime: number; // in days
}

export interface RoutePricing {
  origin: string;
  destination: string;
  rates: CarrierRate[];
}

// Pricing data from China-US container FCL rates spreadsheet
export const seaFreightPricing: RoutePricing[] = [
  // ============ SHANGHAI ============
  // Shanghai to Los Angeles
  {
    origin: 'Shanghai',
    destination: 'Los Angeles',
    rates: [
      { carrier: 'EMC', price40GP: 3012, price40HQ: 3012, transitTime: 13 },
      { carrier: 'COSCO', price40GP: 3100, price40HQ: 3100, transitTime: 15 },
      { carrier: 'SML', price40GP: 2800, price40HQ: 2800, transitTime: 18 },
      { carrier: 'HMM', price40GP: 2800, price40HQ: 2800, transitTime: 20 },
    ],
  },
  // Shanghai to Long Beach
  {
    origin: 'Shanghai',
    destination: 'Long Beach',
    rates: [
      { carrier: 'EMC', price40GP: 3012, price40HQ: 3012, transitTime: 14 },
      { carrier: 'COSCO', price40GP: 3100, price40HQ: 3100, transitTime: 16 },
      { carrier: 'SML', price40GP: 2800, price40HQ: 2800, transitTime: 19 },
      { carrier: 'HMM', price40GP: 2850, price40HQ: 2850, transitTime: 21 },
    ],
  },
  // Shanghai to New York
  {
    origin: 'Shanghai',
    destination: 'New York',
    rates: [
      { carrier: 'EMC', price40GP: 3800, price40HQ: 3800, transitTime: 30 },
      { carrier: 'COSCO', price40GP: 3900, price40HQ: 3900, transitTime: 32 },
      { carrier: 'CMA', price40GP: 3700, price40HQ: 3700, transitTime: 35 },
    ],
  },
  // Shanghai to Savannah
  {
    origin: 'Shanghai',
    destination: 'Savannah',
    rates: [
      { carrier: 'EMC', price40GP: 3600, price40HQ: 3600, transitTime: 28 },
      { carrier: 'COSCO', price40GP: 3700, price40HQ: 3700, transitTime: 30 },
      { carrier: 'CMA', price40GP: 3500, price40HQ: 3500, transitTime: 33 },
    ],
  },

  // ============ NINGBO ============
  // Ningbo to Los Angeles
  {
    origin: 'Ningbo',
    destination: 'Los Angeles',
    rates: [
      { carrier: 'EMC', price40GP: 2962, price40HQ: 2962, transitTime: 14 },
      { carrier: 'COSCO', price40GP: 3050, price40HQ: 3050, transitTime: 16 },
      { carrier: 'SML', price40GP: 2750, price40HQ: 2750, transitTime: 19 },
      { carrier: 'HMM', price40GP: 2750, price40HQ: 2750, transitTime: 21 },
    ],
  },
  // Ningbo to Long Beach
  {
    origin: 'Ningbo',
    destination: 'Long Beach',
    rates: [
      { carrier: 'EMC', price40GP: 2962, price40HQ: 2962, transitTime: 15 },
      { carrier: 'COSCO', price40GP: 3050, price40HQ: 3050, transitTime: 17 },
      { carrier: 'SML', price40GP: 2750, price40HQ: 2750, transitTime: 20 },
      { carrier: 'HMM', price40GP: 2800, price40HQ: 2800, transitTime: 22 },
    ],
  },
  // Ningbo to New York
  {
    origin: 'Ningbo',
    destination: 'New York',
    rates: [
      { carrier: 'EMC', price40GP: 3750, price40HQ: 3750, transitTime: 31 },
      { carrier: 'COSCO', price40GP: 3850, price40HQ: 3850, transitTime: 33 },
      { carrier: 'CMA', price40GP: 3650, price40HQ: 3650, transitTime: 36 },
    ],
  },
  // Ningbo to Savannah
  {
    origin: 'Ningbo',
    destination: 'Savannah',
    rates: [
      { carrier: 'EMC', price40GP: 3550, price40HQ: 3550, transitTime: 29 },
      { carrier: 'COSCO', price40GP: 3650, price40HQ: 3650, transitTime: 31 },
      { carrier: 'CMA', price40GP: 3450, price40HQ: 3450, transitTime: 34 },
    ],
  },

  // ============ QINGDAO ============
  // Qingdao to Los Angeles
  {
    origin: 'Qingdao',
    destination: 'Los Angeles',
    rates: [
      { carrier: 'EMC', price40GP: 2912, price40HQ: 2912, transitTime: 16 },
      { carrier: 'COSCO', price40GP: 3000, price40HQ: 3000, transitTime: 18 },
      { carrier: 'SML', price40GP: 2700, price40HQ: 2700, transitTime: 21 },
      { carrier: 'HMM', price40GP: 2700, price40HQ: 2700, transitTime: 23 },
    ],
  },
  // Qingdao to Long Beach
  {
    origin: 'Qingdao',
    destination: 'Long Beach',
    rates: [
      { carrier: 'EMC', price40GP: 2912, price40HQ: 2912, transitTime: 17 },
      { carrier: 'COSCO', price40GP: 3000, price40HQ: 3000, transitTime: 19 },
      { carrier: 'SML', price40GP: 2700, price40HQ: 2700, transitTime: 22 },
      { carrier: 'HMM', price40GP: 2750, price40HQ: 2750, transitTime: 24 },
    ],
  },
  // Qingdao to New York
  {
    origin: 'Qingdao',
    destination: 'New York',
    rates: [
      { carrier: 'EMC', price40GP: 3700, price40HQ: 3700, transitTime: 33 },
      { carrier: 'COSCO', price40GP: 3800, price40HQ: 3800, transitTime: 35 },
      { carrier: 'CMA', price40GP: 3600, price40HQ: 3600, transitTime: 38 },
    ],
  },
  // Qingdao to Savannah
  {
    origin: 'Qingdao',
    destination: 'Savannah',
    rates: [
      { carrier: 'EMC', price40GP: 3500, price40HQ: 3500, transitTime: 31 },
      { carrier: 'COSCO', price40GP: 3600, price40HQ: 3600, transitTime: 33 },
      { carrier: 'CMA', price40GP: 3400, price40HQ: 3400, transitTime: 36 },
    ],
  },

  // ============ TIANJIN ============
  // Tianjin to Los Angeles
  {
    origin: 'Tianjin',
    destination: 'Los Angeles',
    rates: [
      { carrier: 'EMC', price40GP: 2862, price40HQ: 2862, transitTime: 18 },
      { carrier: 'COSCO', price40GP: 2950, price40HQ: 2950, transitTime: 20 },
    ],
  },
  // Tianjin to Long Beach
  {
    origin: 'Tianjin',
    destination: 'Long Beach',
    rates: [
      { carrier: 'EMC', price40GP: 2862, price40HQ: 2862, transitTime: 19 },
      { carrier: 'COSCO', price40GP: 2950, price40HQ: 2950, transitTime: 21 },
    ],
  },
  // Tianjin to New York
  {
    origin: 'Tianjin',
    destination: 'New York',
    rates: [
      { carrier: 'EMC', price40GP: 3650, price40HQ: 3650, transitTime: 35 },
      { carrier: 'COSCO', price40GP: 3750, price40HQ: 3750, transitTime: 37 },
    ],
  },
  // Tianjin to Savannah
  {
    origin: 'Tianjin',
    destination: 'Savannah',
    rates: [
      { carrier: 'EMC', price40GP: 3450, price40HQ: 3450, transitTime: 33 },
      { carrier: 'COSCO', price40GP: 3550, price40HQ: 3550, transitTime: 35 },
    ],
  },

  // ============ CANADA ROUTES ============
  // Shanghai to Vancouver
  {
    origin: 'Shanghai',
    destination: 'Vancouver',
    rates: [
      { carrier: 'PN3', price40GP: 1600, price40HQ: 1600, transitTime: 14 },
    ],
  },
  // Shanghai to Toronto
  {
    origin: 'Shanghai',
    destination: 'Toronto',
    rates: [
      { carrier: 'PN3', price40GP: 3650, price40HQ: 3650, transitTime: 25 },
    ],
  },
  // Shanghai to Montreal
  {
    origin: 'Shanghai',
    destination: 'Montreal',
    rates: [
      { carrier: 'PN3', price40GP: 3650, price40HQ: 3650, transitTime: 25 },
    ],
  },
  // Shanghai to Calgary
  {
    origin: 'Shanghai',
    destination: 'Calgary',
    rates: [
      { carrier: 'PN3', price40GP: 3050, price40HQ: 3050, transitTime: 20 },
    ],
  },
  // Shanghai to Edmonton
  {
    origin: 'Shanghai',
    destination: 'Edmonton',
    rates: [
      { carrier: 'PN3', price40GP: 3050, price40HQ: 3050, transitTime: 20 },
    ],
  },

  // Ningbo to Vancouver
  {
    origin: 'Ningbo',
    destination: 'Vancouver',
    rates: [
      { carrier: 'PN3', price40GP: 1600, price40HQ: 1600, transitTime: 14 },
    ],
  },
  // Ningbo to Toronto
  {
    origin: 'Ningbo',
    destination: 'Toronto',
    rates: [
      { carrier: 'PN3', price40GP: 3650, price40HQ: 3650, transitTime: 25 },
    ],
  },
  // Ningbo to Montreal
  {
    origin: 'Ningbo',
    destination: 'Montreal',
    rates: [
      { carrier: 'PN3', price40GP: 3650, price40HQ: 3650, transitTime: 25 },
    ],
  },
  // Ningbo to Calgary
  {
    origin: 'Ningbo',
    destination: 'Calgary',
    rates: [
      { carrier: 'PN3', price40GP: 3050, price40HQ: 3050, transitTime: 20 },
    ],
  },
  // Ningbo to Edmonton
  {
    origin: 'Ningbo',
    destination: 'Edmonton',
    rates: [
      { carrier: 'PN3', price40GP: 3050, price40HQ: 3050, transitTime: 20 },
    ],
  },

  // Qingdao to Vancouver
  {
    origin: 'Qingdao',
    destination: 'Vancouver',
    rates: [
      { carrier: 'PN3', price40GP: 1600, price40HQ: 1600, transitTime: 15 },
    ],
  },
  // Qingdao to Toronto
  {
    origin: 'Qingdao',
    destination: 'Toronto',
    rates: [
      { carrier: 'PN3', price40GP: 3650, price40HQ: 3650, transitTime: 26 },
    ],
  },
  // Qingdao to Montreal
  {
    origin: 'Qingdao',
    destination: 'Montreal',
    rates: [
      { carrier: 'PN3', price40GP: 3650, price40HQ: 3650, transitTime: 26 },
    ],
  },
  // Qingdao to Calgary
  {
    origin: 'Qingdao',
    destination: 'Calgary',
    rates: [
      { carrier: 'PN3', price40GP: 3050, price40HQ: 3050, transitTime: 21 },
    ],
  },
  // Qingdao to Edmonton
  {
    origin: 'Qingdao',
    destination: 'Edmonton',
    rates: [
      { carrier: 'PN3', price40GP: 3050, price40HQ: 3050, transitTime: 21 },
    ],
  },

  // ============ ADDITIONAL US ROUTES (from extended rate sheet) ============

  // Shanghai to Chicago
  {
    origin: 'Shanghai',
    destination: 'Chicago',
    rates: [
      { carrier: 'OAC', price40GP: 4200, price40HQ: 4400, transitTime: 25 },
    ],
  },
  // Shanghai to Dallas
  {
    origin: 'Shanghai',
    destination: 'Dallas',
    rates: [
      { carrier: 'OAC', price40GP: 4500, price40HQ: 4700, transitTime: 28 },
    ],
  },
  // Shanghai to Atlanta
  {
    origin: 'Shanghai',
    destination: 'Atlanta',
    rates: [
      { carrier: 'OAC', price40GP: 4300, price40HQ: 4500, transitTime: 26 },
    ],
  },
  // Shanghai to Miami
  {
    origin: 'Shanghai',
    destination: 'Miami',
    rates: [
      { carrier: 'OAC', price40GP: 4600, price40HQ: 4800, transitTime: 30 },
    ],
  },
  // Shanghai to Houston
  {
    origin: 'Shanghai',
    destination: 'Houston',
    rates: [
      { carrier: 'OAC', price40GP: 4400, price40HQ: 4600, transitTime: 28 },
    ],
  },
  // Shanghai to Seattle
  {
    origin: 'Shanghai',
    destination: 'Seattle',
    rates: [
      { carrier: 'OAC', price40GP: 2900, price40HQ: 3100, transitTime: 12 },
    ],
  },
  // Shanghai to Oakland
  {
    origin: 'Shanghai',
    destination: 'Oakland',
    rates: [
      { carrier: 'OAC', price40GP: 3000, price40HQ: 3200, transitTime: 14 },
    ],
  },
  // Shanghai to San Francisco
  {
    origin: 'Shanghai',
    destination: 'San Francisco',
    rates: [
      { carrier: 'OAC', price40GP: 3000, price40HQ: 3200, transitTime: 14 },
    ],
  },

  // Ningbo to Chicago
  {
    origin: 'Ningbo',
    destination: 'Chicago',
    rates: [
      { carrier: 'OAC', price40GP: 4150, price40HQ: 4350, transitTime: 26 },
    ],
  },
  // Ningbo to Dallas
  {
    origin: 'Ningbo',
    destination: 'Dallas',
    rates: [
      { carrier: 'OAC', price40GP: 4450, price40HQ: 4650, transitTime: 29 },
    ],
  },
  // Ningbo to Atlanta
  {
    origin: 'Ningbo',
    destination: 'Atlanta',
    rates: [
      { carrier: 'OAC', price40GP: 4250, price40HQ: 4450, transitTime: 27 },
    ],
  },
  // Ningbo to Miami
  {
    origin: 'Ningbo',
    destination: 'Miami',
    rates: [
      { carrier: 'OAC', price40GP: 4550, price40HQ: 4750, transitTime: 31 },
    ],
  },
  // Ningbo to Houston
  {
    origin: 'Ningbo',
    destination: 'Houston',
    rates: [
      { carrier: 'OAC', price40GP: 4350, price40HQ: 4550, transitTime: 29 },
    ],
  },
  // Ningbo to Seattle
  {
    origin: 'Ningbo',
    destination: 'Seattle',
    rates: [
      { carrier: 'OAC', price40GP: 2850, price40HQ: 3050, transitTime: 13 },
    ],
  },
  // Ningbo to Oakland
  {
    origin: 'Ningbo',
    destination: 'Oakland',
    rates: [
      { carrier: 'OAC', price40GP: 2950, price40HQ: 3150, transitTime: 15 },
    ],
  },
  // Ningbo to San Francisco
  {
    origin: 'Ningbo',
    destination: 'San Francisco',
    rates: [
      { carrier: 'OAC', price40GP: 2950, price40HQ: 3150, transitTime: 15 },
    ],
  },

  // Qingdao to Chicago
  {
    origin: 'Qingdao',
    destination: 'Chicago',
    rates: [
      { carrier: 'OAC', price40GP: 4100, price40HQ: 4300, transitTime: 27 },
    ],
  },
  // Qingdao to Dallas
  {
    origin: 'Qingdao',
    destination: 'Dallas',
    rates: [
      { carrier: 'OAC', price40GP: 4400, price40HQ: 4600, transitTime: 30 },
    ],
  },
  // Qingdao to Atlanta
  {
    origin: 'Qingdao',
    destination: 'Atlanta',
    rates: [
      { carrier: 'OAC', price40GP: 4200, price40HQ: 4400, transitTime: 28 },
    ],
  },
  // Qingdao to Miami
  {
    origin: 'Qingdao',
    destination: 'Miami',
    rates: [
      { carrier: 'OAC', price40GP: 4500, price40HQ: 4700, transitTime: 32 },
    ],
  },
  // Qingdao to Houston
  {
    origin: 'Qingdao',
    destination: 'Houston',
    rates: [
      { carrier: 'OAC', price40GP: 4300, price40HQ: 4500, transitTime: 30 },
    ],
  },
  // Qingdao to Seattle
  {
    origin: 'Qingdao',
    destination: 'Seattle',
    rates: [
      { carrier: 'OAC', price40GP: 2800, price40HQ: 3000, transitTime: 14 },
    ],
  },
  // Qingdao to Oakland
  {
    origin: 'Qingdao',
    destination: 'Oakland',
    rates: [
      { carrier: 'OAC', price40GP: 2900, price40HQ: 3100, transitTime: 16 },
    ],
  },
  // Qingdao to San Francisco
  {
    origin: 'Qingdao',
    destination: 'San Francisco',
    rates: [
      { carrier: 'OAC', price40GP: 2900, price40HQ: 3100, transitTime: 16 },
    ],
  },

  // Shenzhen to Los Angeles
  {
    origin: 'Shenzhen',
    destination: 'Los Angeles',
    rates: [
      { carrier: 'OAC', price40GP: 3050, price40HQ: 3050, transitTime: 14 },
    ],
  },
  // Shenzhen to Long Beach
  {
    origin: 'Shenzhen',
    destination: 'Long Beach',
    rates: [
      { carrier: 'OAC', price40GP: 3050, price40HQ: 3050, transitTime: 14 },
    ],
  },
  // Shenzhen to New York
  {
    origin: 'Shenzhen',
    destination: 'New York',
    rates: [
      { carrier: 'OAC', price40GP: 3850, price40HQ: 3850, transitTime: 31 },
    ],
  },
  // Shenzhen to Savannah
  {
    origin: 'Shenzhen',
    destination: 'Savannah',
    rates: [
      { carrier: 'OAC', price40GP: 3650, price40HQ: 3650, transitTime: 29 },
    ],
  },
  // Shenzhen to Chicago
  {
    origin: 'Shenzhen',
    destination: 'Chicago',
    rates: [
      { carrier: 'OAC', price40GP: 4250, price40HQ: 4450, transitTime: 26 },
    ],
  },
  // Shenzhen to Dallas
  {
    origin: 'Shenzhen',
    destination: 'Dallas',
    rates: [
      { carrier: 'OAC', price40GP: 4550, price40HQ: 4750, transitTime: 29 },
    ],
  },
  // Shenzhen to Atlanta
  {
    origin: 'Shenzhen',
    destination: 'Atlanta',
    rates: [
      { carrier: 'OAC', price40GP: 4350, price40HQ: 4550, transitTime: 27 },
    ],
  },
  // Shenzhen to Miami
  {
    origin: 'Shenzhen',
    destination: 'Miami',
    rates: [
      { carrier: 'OAC', price40GP: 4650, price40HQ: 4850, transitTime: 31 },
    ],
  },
  // Shenzhen to Houston
  {
    origin: 'Shenzhen',
    destination: 'Houston',
    rates: [
      { carrier: 'OAC', price40GP: 4450, price40HQ: 4650, transitTime: 29 },
    ],
  },
  // Shenzhen to Seattle
  {
    origin: 'Shenzhen',
    destination: 'Seattle',
    rates: [
      { carrier: 'OAC', price40GP: 2950, price40HQ: 3150, transitTime: 13 },
    ],
  },
  // Shenzhen to Oakland
  {
    origin: 'Shenzhen',
    destination: 'Oakland',
    rates: [
      { carrier: 'OAC', price40GP: 3050, price40HQ: 3250, transitTime: 15 },
    ],
  },
  // Shenzhen to San Francisco
  {
    origin: 'Shenzhen',
    destination: 'San Francisco',
    rates: [
      { carrier: 'OAC', price40GP: 3050, price40HQ: 3250, transitTime: 15 },
    ],
  },

  // Guangzhou to Los Angeles
  {
    origin: 'Guangzhou',
    destination: 'Los Angeles',
    rates: [
      { carrier: 'OAC', price40GP: 3100, price40HQ: 3100, transitTime: 15 },
    ],
  },
  // Guangzhou to Long Beach
  {
    origin: 'Guangzhou',
    destination: 'Long Beach',
    rates: [
      { carrier: 'OAC', price40GP: 3100, price40HQ: 3100, transitTime: 15 },
    ],
  },
  // Guangzhou to New York
  {
    origin: 'Guangzhou',
    destination: 'New York',
    rates: [
      { carrier: 'OAC', price40GP: 3900, price40HQ: 3900, transitTime: 32 },
    ],
  },
  // Guangzhou to Savannah
  {
    origin: 'Guangzhou',
    destination: 'Savannah',
    rates: [
      { carrier: 'OAC', price40GP: 3700, price40HQ: 3700, transitTime: 30 },
    ],
  },
  // Guangzhou to Chicago
  {
    origin: 'Guangzhou',
    destination: 'Chicago',
    rates: [
      { carrier: 'OAC', price40GP: 4300, price40HQ: 4500, transitTime: 27 },
    ],
  },
  // Guangzhou to Dallas
  {
    origin: 'Guangzhou',
    destination: 'Dallas',
    rates: [
      { carrier: 'OAC', price40GP: 4600, price40HQ: 4800, transitTime: 30 },
    ],
  },
  // Guangzhou to Atlanta
  {
    origin: 'Guangzhou',
    destination: 'Atlanta',
    rates: [
      { carrier: 'OAC', price40GP: 4400, price40HQ: 4600, transitTime: 28 },
    ],
  },
  // Guangzhou to Miami
  {
    origin: 'Guangzhou',
    destination: 'Miami',
    rates: [
      { carrier: 'OAC', price40GP: 4700, price40HQ: 4900, transitTime: 32 },
    ],
  },
  // Guangzhou to Houston
  {
    origin: 'Guangzhou',
    destination: 'Houston',
    rates: [
      { carrier: 'OAC', price40GP: 4500, price40HQ: 4700, transitTime: 30 },
    ],
  },
  // Guangzhou to Seattle
  {
    origin: 'Guangzhou',
    destination: 'Seattle',
    rates: [
      { carrier: 'OAC', price40GP: 3000, price40HQ: 3200, transitTime: 14 },
    ],
  },
  // Guangzhou to Oakland
  {
    origin: 'Guangzhou',
    destination: 'Oakland',
    rates: [
      { carrier: 'OAC', price40GP: 3100, price40HQ: 3300, transitTime: 16 },
    ],
  },
  // Guangzhou to San Francisco
  {
    origin: 'Guangzhou',
    destination: 'San Francisco',
    rates: [
      { carrier: 'OAC', price40GP: 3100, price40HQ: 3300, transitTime: 16 },
    ],
  },

  // Xiamen to Los Angeles
  {
    origin: 'Xiamen',
    destination: 'Los Angeles',
    rates: [
      { carrier: 'OAC', price40GP: 3000, price40HQ: 3000, transitTime: 15 },
    ],
  },
  // Xiamen to Long Beach
  {
    origin: 'Xiamen',
    destination: 'Long Beach',
    rates: [
      { carrier: 'OAC', price40GP: 3000, price40HQ: 3000, transitTime: 15 },
    ],
  },
  // Xiamen to New York
  {
    origin: 'Xiamen',
    destination: 'New York',
    rates: [
      { carrier: 'OAC', price40GP: 3800, price40HQ: 3800, transitTime: 31 },
    ],
  },
  // Xiamen to Savannah
  {
    origin: 'Xiamen',
    destination: 'Savannah',
    rates: [
      { carrier: 'OAC', price40GP: 3600, price40HQ: 3600, transitTime: 29 },
    ],
  },
  // Xiamen to Chicago
  {
    origin: 'Xiamen',
    destination: 'Chicago',
    rates: [
      { carrier: 'OAC', price40GP: 4200, price40HQ: 4400, transitTime: 26 },
    ],
  },
  // Xiamen to Dallas
  {
    origin: 'Xiamen',
    destination: 'Dallas',
    rates: [
      { carrier: 'OAC', price40GP: 4500, price40HQ: 4700, transitTime: 29 },
    ],
  },
  // Xiamen to Atlanta
  {
    origin: 'Xiamen',
    destination: 'Atlanta',
    rates: [
      { carrier: 'OAC', price40GP: 4300, price40HQ: 4500, transitTime: 27 },
    ],
  },
  // Xiamen to Miami
  {
    origin: 'Xiamen',
    destination: 'Miami',
    rates: [
      { carrier: 'OAC', price40GP: 4600, price40HQ: 4800, transitTime: 31 },
    ],
  },
  // Xiamen to Houston
  {
    origin: 'Xiamen',
    destination: 'Houston',
    rates: [
      { carrier: 'OAC', price40GP: 4400, price40HQ: 4600, transitTime: 29 },
    ],
  },
  // Xiamen to Seattle
  {
    origin: 'Xiamen',
    destination: 'Seattle',
    rates: [
      { carrier: 'OAC', price40GP: 2900, price40HQ: 3100, transitTime: 13 },
    ],
  },
  // Xiamen to Oakland
  {
    origin: 'Xiamen',
    destination: 'Oakland',
    rates: [
      { carrier: 'OAC', price40GP: 3000, price40HQ: 3200, transitTime: 15 },
    ],
  },
  // Xiamen to San Francisco
  {
    origin: 'Xiamen',
    destination: 'San Francisco',
    rates: [
      { carrier: 'OAC', price40GP: 3000, price40HQ: 3200, transitTime: 15 },
    ],
  },

  // ============ CANADA - REGINA & WINNIPEG ROUTES ============
  // Shanghai to Regina
  {
    origin: 'Shanghai',
    destination: 'Regina',
    rates: [
      { carrier: 'A', price40GP: 4300, price40HQ: 4300, transitTime: 25 },
      { carrier: 'FP2', price40GP: 4250, price40HQ: 4250, transitTime: 26 },
      { carrier: 'PN3', price40GP: 4250, price40HQ: 4250, transitTime: 24 },
    ],
  },
  // Shanghai to Winnipeg
  {
    origin: 'Shanghai',
    destination: 'Winnipeg',
    rates: [
      { carrier: 'A', price40GP: 4300, price40HQ: 4300, transitTime: 25 },
      { carrier: 'FP2', price40GP: 4250, price40HQ: 4250, transitTime: 26 },
      { carrier: 'FP2-Voyage', price40GP: 4150, price40HQ: 4150, transitTime: 28 },
      { carrier: 'PN3', price40GP: 4250, price40HQ: 4250, transitTime: 24 },
    ],
  },
  // Ningbo to Regina
  {
    origin: 'Ningbo',
    destination: 'Regina',
    rates: [
      { carrier: 'A', price40GP: 4300, price40HQ: 4300, transitTime: 26 },
      { carrier: 'PN1', price40GP: 4250, price40HQ: 4250, transitTime: 27 },
      { carrier: 'PN3', price40GP: 4250, price40HQ: 4250, transitTime: 25 },
    ],
  },
  // Ningbo to Winnipeg
  {
    origin: 'Ningbo',
    destination: 'Winnipeg',
    rates: [
      { carrier: 'A', price40GP: 4300, price40HQ: 4300, transitTime: 26 },
      { carrier: 'PN1', price40GP: 4250, price40HQ: 4250, transitTime: 27 },
      { carrier: 'PN3', price40GP: 4250, price40HQ: 4250, transitTime: 25 },
    ],
  },
  // Qingdao to Regina
  {
    origin: 'Qingdao',
    destination: 'Regina',
    rates: [
      { carrier: 'A', price40GP: 4300, price40HQ: 4300, transitTime: 27 },
      { carrier: 'PN3', price40GP: 4250, price40HQ: 4250, transitTime: 26 },
    ],
  },
  // Qingdao to Winnipeg
  {
    origin: 'Qingdao',
    destination: 'Winnipeg',
    rates: [
      { carrier: 'A', price40GP: 4300, price40HQ: 4300, transitTime: 27 },
      { carrier: 'PN3', price40GP: 4250, price40HQ: 4250, transitTime: 26 },
    ],
  },
  // Xiamen to Regina
  {
    origin: 'Xiamen',
    destination: 'Regina',
    rates: [
      { carrier: 'A', price40GP: 4300, price40HQ: 4300, transitTime: 26 },
      { carrier: 'PN1', price40GP: 4250, price40HQ: 4250, transitTime: 27 },
    ],
  },
  // Xiamen to Winnipeg
  {
    origin: 'Xiamen',
    destination: 'Winnipeg',
    rates: [
      { carrier: 'A', price40GP: 4300, price40HQ: 4300, transitTime: 26 },
      { carrier: 'PN1', price40GP: 4250, price40HQ: 4250, transitTime: 27 },
    ],
  },

  // ==========================================
  // EUROPEAN ROUTES
  // ==========================================

  // Shanghai to Rotterdam (Netherlands)
  {
    origin: 'Shanghai',
    destination: 'Rotterdam',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 42 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 45 },
    ],
  },
  // Shanghai to Hamburg (Germany)
  {
    origin: 'Shanghai',
    destination: 'Hamburg',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 46 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 48 },
    ],
  },
  // Shanghai to Southampton (UK)
  {
    origin: 'Shanghai',
    destination: 'Southampton',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 40 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 42 },
    ],
  },
  // Shanghai to Felixstowe (UK)
  {
    origin: 'Shanghai',
    destination: 'Felixstowe',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 45 },
    ],
  },

  // Shenzhen to Rotterdam (Netherlands)
  {
    origin: 'Shenzhen',
    destination: 'Rotterdam',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 44 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 46 },
    ],
  },
  // Shenzhen to Hamburg (Germany)
  {
    origin: 'Shenzhen',
    destination: 'Hamburg',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 48 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 50 },
    ],
  },
  // Shenzhen to Southampton (UK)
  {
    origin: 'Shenzhen',
    destination: 'Southampton',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 42 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 44 },
    ],
  },
  // Shenzhen to Felixstowe (UK)
  {
    origin: 'Shenzhen',
    destination: 'Felixstowe',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 45 },
    ],
  },

  // Guangzhou to Rotterdam (Netherlands)
  {
    origin: 'Guangzhou',
    destination: 'Rotterdam',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 44 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 46 },
    ],
  },
  // Guangzhou to Hamburg (Germany)
  {
    origin: 'Guangzhou',
    destination: 'Hamburg',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 48 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 50 },
    ],
  },
  // Guangzhou to Southampton (UK)
  {
    origin: 'Guangzhou',
    destination: 'Southampton',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 42 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 44 },
    ],
  },
  // Guangzhou to Felixstowe (UK)
  {
    origin: 'Guangzhou',
    destination: 'Felixstowe',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 45 },
    ],
  },

  // Ningbo to Rotterdam (Netherlands)
  {
    origin: 'Ningbo',
    destination: 'Rotterdam',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 43 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 45 },
    ],
  },
  // Ningbo to Hamburg (Germany)
  {
    origin: 'Ningbo',
    destination: 'Hamburg',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 47 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 49 },
    ],
  },
  // Ningbo to Southampton (UK)
  {
    origin: 'Ningbo',
    destination: 'Southampton',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 41 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 43 },
    ],
  },
  // Ningbo to Felixstowe (UK)
  {
    origin: 'Ningbo',
    destination: 'Felixstowe',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 45 },
    ],
  },

  // Qingdao to Rotterdam (Netherlands)
  {
    origin: 'Qingdao',
    destination: 'Rotterdam',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 45 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 47 },
    ],
  },
  // Qingdao to Hamburg (Germany)
  {
    origin: 'Qingdao',
    destination: 'Hamburg',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 49 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 51 },
    ],
  },
  // Qingdao to Southampton (UK)
  {
    origin: 'Qingdao',
    destination: 'Southampton',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 43 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 45 },
    ],
  },
  // Qingdao to Felixstowe (UK)
  {
    origin: 'Qingdao',
    destination: 'Felixstowe',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 45 },
    ],
  },

  // Tianjin to Rotterdam (Netherlands)
  {
    origin: 'Tianjin',
    destination: 'Rotterdam',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 46 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 48 },
    ],
  },
  // Tianjin to Hamburg (Germany)
  {
    origin: 'Tianjin',
    destination: 'Hamburg',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 50 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 52 },
    ],
  },
  // Tianjin to Southampton (UK)
  {
    origin: 'Tianjin',
    destination: 'Southampton',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 44 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 46 },
    ],
  },
  // Tianjin to Felixstowe (UK)
  {
    origin: 'Tianjin',
    destination: 'Felixstowe',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 45 },
    ],
  },

  // Xiamen to Rotterdam (Netherlands)
  {
    origin: 'Xiamen',
    destination: 'Rotterdam',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 43 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 45 },
    ],
  },
  // Xiamen to Hamburg (Germany)
  {
    origin: 'Xiamen',
    destination: 'Hamburg',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 47 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 49 },
    ],
  },
  // Xiamen to Southampton (UK)
  {
    origin: 'Xiamen',
    destination: 'Southampton',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 41 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 43 },
    ],
  },
  // Xiamen to Felixstowe (UK)
  {
    origin: 'Xiamen',
    destination: 'Felixstowe',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 45 },
    ],
  },

  // Hong Kong to Rotterdam (Netherlands)
  {
    origin: 'Hong Kong',
    destination: 'Rotterdam',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 42 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 44 },
    ],
  },
  // Hong Kong to Hamburg (Germany)
  {
    origin: 'Hong Kong',
    destination: 'Hamburg',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 46 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 48 },
    ],
  },
  // Hong Kong to Southampton (UK)
  {
    origin: 'Hong Kong',
    destination: 'Southampton',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 40 },
      { carrier: 'Maersk', price40GP: 1700, price40HQ: 1700, transitTime: 42 },
    ],
  },
  // Hong Kong to Felixstowe (UK)
  {
    origin: 'Hong Kong',
    destination: 'Felixstowe',
    rates: [
      { carrier: 'MSC', price40GP: 1650, price40HQ: 1650, transitTime: 45 },
    ],
  },
];

/**
 * Get pricing for a specific route
 */
export function getRoutePricing(origin: string, destination: string): RoutePricing | undefined {
  const originLower = origin.toLowerCase();
  const destinationLower = destination.toLowerCase();

  return seaFreightPricing.find(
    (p) =>
      p.origin.toLowerCase() === originLower &&
      p.destination.toLowerCase() === destinationLower
  );
}

/**
 * Get the lowest price for 40GP container on a route
 */
export function getLowestPrice40GP(pricing: RoutePricing): number {
  return Math.min(...pricing.rates.map((r) => r.price40GP));
}

/**
 * Get the lowest price for 40HQ container on a route
 */
export function getLowestPrice40HQ(pricing: RoutePricing): number {
  return Math.min(...pricing.rates.map((r) => r.price40HQ));
}

/**
 * Get the fastest transit time on a route
 */
export function getFastestTransitTime(pricing: RoutePricing): number {
  return Math.min(...pricing.rates.map((r) => r.transitTime));
}

/**
 * Format price as USD
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
