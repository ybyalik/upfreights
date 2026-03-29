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
  price20GP?: number;
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
      { carrier: 'Maersk', price20GP: 2115, price40GP: 3250, price40HQ: 3250, transitTime: 42 },
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
      { carrier: 'Maersk', price20GP: 2115, price40GP: 3250, price40HQ: 3250, transitTime: 44 },
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
      { carrier: 'Maersk', price20GP: 2115, price40GP: 3250, price40HQ: 3250, transitTime: 44 },
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
      { carrier: 'Maersk', price20GP: 2115, price40GP: 3250, price40HQ: 3250, transitTime: 43 },
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
      { carrier: 'Maersk', price20GP: 2115, price40GP: 3250, price40HQ: 3250, transitTime: 45 },
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
      { carrier: 'Maersk', price20GP: 2115, price40GP: 3250, price40HQ: 3250, transitTime: 46 },
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
      { carrier: 'Maersk', price20GP: 2115, price40GP: 3250, price40HQ: 3250, transitTime: 43 },
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
      { carrier: 'Maersk', price20GP: 2115, price40GP: 3250, price40HQ: 3250, transitTime: 42 },
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
  // ==========================================
  // ITALY ROUTES (Trieste)
  // ==========================================

  // Shanghai to Trieste
  {
    origin: 'Shanghai',
    destination: 'Trieste',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 42 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 42 },
    ],
  },
  // Ningbo to Trieste
  {
    origin: 'Ningbo',
    destination: 'Trieste',
    rates: [
      { carrier: 'EMC', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 55 },
      { carrier: 'ONE', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 51 },
      { carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 50 },
    ],
  },
  // Shenzhen to Trieste
  {
    origin: 'Shenzhen',
    destination: 'Trieste',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 40 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 40 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 40 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 42 },
    ],
  },
  // Qingdao to Trieste
  {
    origin: 'Qingdao',
    destination: 'Trieste',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'EMC', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 60 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 64 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 55 },
    ],
  },
  // Xiamen to Trieste
  {
    origin: 'Xiamen',
    destination: 'Trieste',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 62 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 48 },
    ],
  },
  // Guangzhou to Trieste
  {
    origin: 'Guangzhou',
    destination: 'Trieste',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 52 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'MSK', price20GP: 2100, price40GP: 3000, price40HQ: 3000, transitTime: 45 },
    ],
  },
  // Tianjin to Trieste
  {
    origin: 'Tianjin',
    destination: 'Trieste',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 65 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 63 },
      { carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 55 },
    ],
  },
  // Hong Kong to Trieste
  {
    origin: 'Hong Kong',
    destination: 'Trieste',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 42 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 45 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 45 },
      { carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 42 },
    ],
  },
  // ==========================================
  // ITALY ROUTES (Naples)
  // ==========================================

  // Shanghai to Naples
  {
    origin: 'Shanghai',
    destination: 'Naples',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 58 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 58 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 58 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 53 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 59 },
      { carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 45 },
    ],
  },
  // Ningbo to Naples
  {
    origin: 'Ningbo',
    destination: 'Naples',
    rates: [
      { carrier: 'EMC', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 58 },
      { carrier: 'ONE', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 51 },
      { carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 50 },
    ],
  },
  // Shenzhen to Naples
  {
    origin: 'Shenzhen',
    destination: 'Naples',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 50 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 42 },
    ],
  },
  // Qingdao to Naples
  {
    origin: 'Qingdao',
    destination: 'Naples',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'EMC', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 60 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 64 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 55 },
    ],
  },
  // Xiamen to Naples
  {
    origin: 'Xiamen',
    destination: 'Naples',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 62 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 48 },
    ],
  },
  // Guangzhou to Naples
  {
    origin: 'Guangzhou',
    destination: 'Naples',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 58 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 58 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 58 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 53 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 59 },
      { carrier: 'MSK', price20GP: 2450, price40GP: 3500, price40HQ: 3500, transitTime: 48 },
    ],
  },
  // Tianjin to Naples
  {
    origin: 'Tianjin',
    destination: 'Naples',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 65 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 63 },
      { carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 55 },
    ],
  },
  // Hong Kong to Naples
  {
    origin: 'Hong Kong',
    destination: 'Naples',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 58 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 58 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 58 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 53 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 59 },
      { carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 42 },
    ],
  },
  // ==========================================
  // ITALY ROUTES (La Spezia)
  // ==========================================

  // Shanghai to La Spezia
  {
    origin: 'Shanghai',
    destination: 'La Spezia',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 52 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 48 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 42 },
    ],
  },
  // Ningbo to La Spezia
  {
    origin: 'Ningbo',
    destination: 'La Spezia',
    rates: [
      { carrier: 'EMC', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'ONE', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 48 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 48 },
    ],
  },
  // Shenzhen to La Spezia
  {
    origin: 'Shenzhen',
    destination: 'La Spezia',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 40 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 40 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 40 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 42 },
    ],
  },
  // Qingdao to La Spezia
  {
    origin: 'Qingdao',
    destination: 'La Spezia',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'EMC', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 60 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 64 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 52 },
    ],
  },
  // Xiamen to La Spezia
  {
    origin: 'Xiamen',
    destination: 'La Spezia',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 62 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 45 },
    ],
  },
  // Guangzhou to La Spezia
  {
    origin: 'Guangzhou',
    destination: 'La Spezia',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 52 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'MSK', price20GP: 2240, price40GP: 3200, price40HQ: 3200, transitTime: 45 },
    ],
  },
  // Tianjin to La Spezia
  {
    origin: 'Tianjin',
    destination: 'La Spezia',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 65 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 63 },
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 52 },
    ],
  },
  // Hong Kong to La Spezia
  {
    origin: 'Hong Kong',
    destination: 'La Spezia',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 42 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 45 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 45 },
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 40 },
    ],
  },
  // ==========================================
  // ITALY ROUTES (Venice)
  // ==========================================

  // Shanghai to Venice
  {
    origin: 'Shanghai',
    destination: 'Venice',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 52 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 48 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 42 },
    ],
  },
  // Ningbo to Venice
  {
    origin: 'Ningbo',
    destination: 'Venice',
    rates: [
      { carrier: 'EMC', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'ONE', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 48 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 48 },
    ],
  },
  // Shenzhen to Venice
  {
    origin: 'Shenzhen',
    destination: 'Venice',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 40 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 40 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 40 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 42 },
    ],
  },
  // Qingdao to Venice
  {
    origin: 'Qingdao',
    destination: 'Venice',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'EMC', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 60 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 64 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 55 },
    ],
  },
  // Xiamen to Venice
  {
    origin: 'Xiamen',
    destination: 'Venice',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 62 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 45 },
    ],
  },
  // Guangzhou to Venice
  {
    origin: 'Guangzhou',
    destination: 'Venice',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 52 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'MSK', price20GP: 2100, price40GP: 3000, price40HQ: 3000, transitTime: 45 },
    ],
  },
  // Tianjin to Venice
  {
    origin: 'Tianjin',
    destination: 'Venice',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 65 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 63 },
      { carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 55 },
    ],
  },
  // Hong Kong to Venice
  {
    origin: 'Hong Kong',
    destination: 'Venice',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 42 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 45 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 45 },
      { carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 42 },
    ],
  },
  // ==========================================
  // ITALY ROUTES (Genoa)
  // ==========================================

  // Shanghai to Genoa
  {
    origin: 'Shanghai',
    destination: 'Genoa',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 52 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 48 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 42 },
    ],
  },
  // Ningbo to Genoa
  {
    origin: 'Ningbo',
    destination: 'Genoa',
    rates: [
      { carrier: 'EMC', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'ONE', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 48 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 48 },
    ],
  },
  // Shenzhen to Genoa
  {
    origin: 'Shenzhen',
    destination: 'Genoa',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 40 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 40 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 40 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 50 },
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 42 },
    ],
  },
  // Qingdao to Genoa
  {
    origin: 'Qingdao',
    destination: 'Genoa',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'EMC', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 60 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 64 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 52 },
    ],
  },
  // Xiamen to Genoa
  {
    origin: 'Xiamen',
    destination: 'Genoa',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 62 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 45 },
    ],
  },
  // Guangzhou to Genoa
  {
    origin: 'Guangzhou',
    destination: 'Genoa',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 52 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 52 },
      { carrier: 'MSK', price20GP: 2240, price40GP: 3200, price40HQ: 3200, transitTime: 45 },
    ],
  },
  // Tianjin to Genoa
  {
    origin: 'Tianjin',
    destination: 'Genoa',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 62 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 65 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 60 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 63 },
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 52 },
    ],
  },
  // Hong Kong to Genoa
  {
    origin: 'Hong Kong',
    destination: 'Genoa',
    rates: [
      { carrier: 'CMA', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'OOCL', price20GP: 2000, price40GP: 2500, price40HQ: 2500, transitTime: 42 },
      { carrier: 'COSCO', price20GP: 2100, price40GP: 2600, price40HQ: 2600, transitTime: 42 },
      { carrier: 'MSC', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 45 },
      { carrier: 'MAERSK', price20GP: 1900, price40GP: 2500, price40HQ: 2500, transitTime: 45 },
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 40 },
    ],
  },
  // ==========================================
  // ITALY ROUTES (Ancona)
  // ==========================================

  // Shanghai to Ancona
  {
    origin: 'Shanghai',
    destination: 'Ancona',
    rates: [
      { carrier: 'MSK', price20GP: 2345, price40GP: 3350, price40HQ: 3350, transitTime: 45 },
    ],
  },
  // Ningbo to Ancona
  {
    origin: 'Ningbo',
    destination: 'Ancona',
    rates: [
      { carrier: 'MSK', price20GP: 2345, price40GP: 3350, price40HQ: 3350, transitTime: 50 },
    ],
  },
  // Tianjin to Ancona
  {
    origin: 'Tianjin',
    destination: 'Ancona',
    rates: [
      { carrier: 'MSK', price20GP: 2345, price40GP: 3350, price40HQ: 3350, transitTime: 55 },
    ],
  },
  // Qingdao to Ancona
  {
    origin: 'Qingdao',
    destination: 'Ancona',
    rates: [
      { carrier: 'MSK', price20GP: 2345, price40GP: 3350, price40HQ: 3350, transitTime: 55 },
    ],
  },
  // Dalian to Ancona
  {
    origin: 'Dalian',
    destination: 'Ancona',
    rates: [
      { carrier: 'MSK', price20GP: 2345, price40GP: 3350, price40HQ: 3350, transitTime: 58 },
    ],
  },
  // Hong Kong to Ancona
  {
    origin: 'Hong Kong',
    destination: 'Ancona',
    rates: [
      { carrier: 'MSK', price20GP: 2345, price40GP: 3350, price40HQ: 3350, transitTime: 42 },
    ],
  },
  // Xiamen to Ancona
  {
    origin: 'Xiamen',
    destination: 'Ancona',
    rates: [
      { carrier: 'MSK', price20GP: 2345, price40GP: 3350, price40HQ: 3350, transitTime: 48 },
    ],
  },
  // Shenzhen to Ancona
  {
    origin: 'Shenzhen',
    destination: 'Ancona',
    rates: [
      { carrier: 'MSK', price20GP: 2345, price40GP: 3350, price40HQ: 3350, transitTime: 43 },
    ],
  },
  // ==========================================
  // ITALY ROUTES (Cagliari)
  // ==========================================

  // Shanghai to Cagliari
  {
    origin: 'Shanghai',
    destination: 'Cagliari',
    rates: [
      { carrier: 'MSK', price20GP: 2552, price40GP: 3645, price40HQ: 3645, transitTime: 45 },
    ],
  },
  // Ningbo to Cagliari
  {
    origin: 'Ningbo',
    destination: 'Cagliari',
    rates: [
      { carrier: 'MSK', price20GP: 2552, price40GP: 3645, price40HQ: 3645, transitTime: 50 },
    ],
  },
  // Tianjin to Cagliari
  {
    origin: 'Tianjin',
    destination: 'Cagliari',
    rates: [
      { carrier: 'MSK', price20GP: 2552, price40GP: 3645, price40HQ: 3645, transitTime: 55 },
    ],
  },
  // Qingdao to Cagliari
  {
    origin: 'Qingdao',
    destination: 'Cagliari',
    rates: [
      { carrier: 'MSK', price20GP: 2552, price40GP: 3645, price40HQ: 3645, transitTime: 55 },
    ],
  },
  // Dalian to Cagliari
  {
    origin: 'Dalian',
    destination: 'Cagliari',
    rates: [
      { carrier: 'MSK', price20GP: 2552, price40GP: 3645, price40HQ: 3645, transitTime: 58 },
    ],
  },
  // Hong Kong to Cagliari
  {
    origin: 'Hong Kong',
    destination: 'Cagliari',
    rates: [
      { carrier: 'MSK', price20GP: 2552, price40GP: 3645, price40HQ: 3645, transitTime: 42 },
    ],
  },
  // Xiamen to Cagliari
  {
    origin: 'Xiamen',
    destination: 'Cagliari',
    rates: [
      { carrier: 'MSK', price20GP: 2552, price40GP: 3645, price40HQ: 3645, transitTime: 48 },
    ],
  },
  // Shenzhen to Cagliari
  {
    origin: 'Shenzhen',
    destination: 'Cagliari',
    rates: [
      { carrier: 'MSK', price20GP: 2552, price40GP: 3645, price40HQ: 3645, transitTime: 43 },
    ],
  },
  // ==========================================
  // ITALY ROUTES (Civitavecchia)
  // ==========================================

  // Shanghai to Civitavecchia
  {
    origin: 'Shanghai',
    destination: 'Civitavecchia',
    rates: [
      { carrier: 'MSK', price20GP: 2555, price40GP: 3650, price40HQ: 3650, transitTime: 45 },
    ],
  },
  // Ningbo to Civitavecchia
  {
    origin: 'Ningbo',
    destination: 'Civitavecchia',
    rates: [
      { carrier: 'MSK', price20GP: 2555, price40GP: 3650, price40HQ: 3650, transitTime: 50 },
    ],
  },
  // Tianjin to Civitavecchia
  {
    origin: 'Tianjin',
    destination: 'Civitavecchia',
    rates: [
      { carrier: 'MSK', price20GP: 2555, price40GP: 3650, price40HQ: 3650, transitTime: 55 },
    ],
  },
  // Qingdao to Civitavecchia
  {
    origin: 'Qingdao',
    destination: 'Civitavecchia',
    rates: [
      { carrier: 'MSK', price20GP: 2555, price40GP: 3650, price40HQ: 3650, transitTime: 55 },
    ],
  },
  // Dalian to Civitavecchia
  {
    origin: 'Dalian',
    destination: 'Civitavecchia',
    rates: [
      { carrier: 'MSK', price20GP: 2555, price40GP: 3650, price40HQ: 3650, transitTime: 58 },
    ],
  },
  // Hong Kong to Civitavecchia
  {
    origin: 'Hong Kong',
    destination: 'Civitavecchia',
    rates: [
      { carrier: 'MSK', price20GP: 2555, price40GP: 3650, price40HQ: 3650, transitTime: 42 },
    ],
  },
  // Xiamen to Civitavecchia
  {
    origin: 'Xiamen',
    destination: 'Civitavecchia',
    rates: [
      { carrier: 'MSK', price20GP: 2555, price40GP: 3650, price40HQ: 3650, transitTime: 48 },
    ],
  },
  // Shenzhen to Civitavecchia
  {
    origin: 'Shenzhen',
    destination: 'Civitavecchia',
    rates: [
      { carrier: 'MSK', price20GP: 2555, price40GP: 3650, price40HQ: 3650, transitTime: 43 },
    ],
  },
  // ==========================================
  // ITALY ROUTES (Livorno)
  // ==========================================

  // Shanghai to Livorno
  {
    origin: 'Shanghai',
    destination: 'Livorno',
    rates: [
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 42 },
    ],
  },
  // Ningbo to Livorno
  {
    origin: 'Ningbo',
    destination: 'Livorno',
    rates: [
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 48 },
    ],
  },
  // Tianjin to Livorno
  {
    origin: 'Tianjin',
    destination: 'Livorno',
    rates: [
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 52 },
    ],
  },
  // Qingdao to Livorno
  {
    origin: 'Qingdao',
    destination: 'Livorno',
    rates: [
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 52 },
    ],
  },
  // Dalian to Livorno
  {
    origin: 'Dalian',
    destination: 'Livorno',
    rates: [
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 55 },
    ],
  },
  // Hong Kong to Livorno
  {
    origin: 'Hong Kong',
    destination: 'Livorno',
    rates: [
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 40 },
    ],
  },
  // Xiamen to Livorno
  {
    origin: 'Xiamen',
    destination: 'Livorno',
    rates: [
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 45 },
    ],
  },
  // Shenzhen to Livorno
  {
    origin: 'Shenzhen',
    destination: 'Livorno',
    rates: [
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 40 },
    ],
  },
  // ==========================================
  // ITALY ROUTES (Ravenna)
  // ==========================================

  // Shanghai to Ravenna
  {
    origin: 'Shanghai',
    destination: 'Ravenna',
    rates: [
      { carrier: 'MSK', price20GP: 2293, price40GP: 3275, price40HQ: 3275, transitTime: 45 },
    ],
  },
  // Ningbo to Ravenna
  {
    origin: 'Ningbo',
    destination: 'Ravenna',
    rates: [
      { carrier: 'MSK', price20GP: 2293, price40GP: 3275, price40HQ: 3275, transitTime: 50 },
    ],
  },
  // Tianjin to Ravenna
  {
    origin: 'Tianjin',
    destination: 'Ravenna',
    rates: [
      { carrier: 'MSK', price20GP: 2293, price40GP: 3275, price40HQ: 3275, transitTime: 55 },
    ],
  },
  // Qingdao to Ravenna
  {
    origin: 'Qingdao',
    destination: 'Ravenna',
    rates: [
      { carrier: 'MSK', price20GP: 2293, price40GP: 3275, price40HQ: 3275, transitTime: 55 },
    ],
  },
  // Dalian to Ravenna
  {
    origin: 'Dalian',
    destination: 'Ravenna',
    rates: [
      { carrier: 'MSK', price20GP: 2293, price40GP: 3275, price40HQ: 3275, transitTime: 58 },
    ],
  },
  // Hong Kong to Ravenna
  {
    origin: 'Hong Kong',
    destination: 'Ravenna',
    rates: [
      { carrier: 'MSK', price20GP: 2293, price40GP: 3275, price40HQ: 3275, transitTime: 42 },
    ],
  },
  // Xiamen to Ravenna
  {
    origin: 'Xiamen',
    destination: 'Ravenna',
    rates: [
      { carrier: 'MSK', price20GP: 2293, price40GP: 3275, price40HQ: 3275, transitTime: 48 },
    ],
  },
  // Shenzhen to Ravenna
  {
    origin: 'Shenzhen',
    destination: 'Ravenna',
    rates: [
      { carrier: 'MSK', price20GP: 2293, price40GP: 3275, price40HQ: 3275, transitTime: 43 },
    ],
  },
  // ==========================================
  // ITALY ROUTES (Salerno)
  // ==========================================

  // Shanghai to Salerno
  {
    origin: 'Shanghai',
    destination: 'Salerno',
    rates: [
      { carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 45 },
    ],
  },
  // Ningbo to Salerno
  {
    origin: 'Ningbo',
    destination: 'Salerno',
    rates: [
      { carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 50 },
    ],
  },
  // Tianjin to Salerno
  {
    origin: 'Tianjin',
    destination: 'Salerno',
    rates: [
      { carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 55 },
    ],
  },
  // Qingdao to Salerno
  {
    origin: 'Qingdao',
    destination: 'Salerno',
    rates: [
      { carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 55 },
    ],
  },
  // Dalian to Salerno
  {
    origin: 'Dalian',
    destination: 'Salerno',
    rates: [
      { carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 58 },
    ],
  },
  // Hong Kong to Salerno
  {
    origin: 'Hong Kong',
    destination: 'Salerno',
    rates: [
      { carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 42 },
    ],
  },
  // Xiamen to Salerno
  {
    origin: 'Xiamen',
    destination: 'Salerno',
    rates: [
      { carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 48 },
    ],
  },
  // Shenzhen to Salerno
  {
    origin: 'Shenzhen',
    destination: 'Salerno',
    rates: [
      { carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 43 },
    ],
  },
  // ==========================================
  // ITALY ROUTES - Dalian to existing ports
  // ==========================================

  // Dalian to Trieste
  {
    origin: 'Dalian',
    destination: 'Trieste',
    rates: [
      { carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 58 },
    ],
  },
  // Dalian to Naples
  {
    origin: 'Dalian',
    destination: 'Naples',
    rates: [
      { carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 58 },
    ],
  },
  // Dalian to La Spezia
  {
    origin: 'Dalian',
    destination: 'La Spezia',
    rates: [
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 55 },
    ],
  },
  // Dalian to Venice
  {
    origin: 'Dalian',
    destination: 'Venice',
    rates: [
      { carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 58 },
    ],
  },
  // Dalian to Genoa
  {
    origin: 'Dalian',
    destination: 'Genoa',
    rates: [
      { carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 55 },
    ],
  },
  // ==========================================
  // GUANGZHOU NEW ITALY ROUTES (Nansha New Port)
  // ==========================================

  // Guangzhou to Ancona
  {
    origin: 'Guangzhou',
    destination: 'Ancona',
    rates: [
      { carrier: 'MSK', price20GP: 2275, price40GP: 3250, price40HQ: 3250, transitTime: 48 },
    ],
  },
  // Guangzhou to Cagliari
  {
    origin: 'Guangzhou',
    destination: 'Cagliari',
    rates: [
      { carrier: 'MSK', price20GP: 2482, price40GP: 3545, price40HQ: 3545, transitTime: 48 },
    ],
  },
  // Guangzhou to Civitavecchia
  {
    origin: 'Guangzhou',
    destination: 'Civitavecchia',
    rates: [
      { carrier: 'MSK', price20GP: 2485, price40GP: 3550, price40HQ: 3550, transitTime: 48 },
    ],
  },
  // Guangzhou to Livorno
  {
    origin: 'Guangzhou',
    destination: 'Livorno',
    rates: [
      { carrier: 'MSK', price20GP: 2240, price40GP: 3200, price40HQ: 3200, transitTime: 45 },
    ],
  },
  // Guangzhou to Ravenna
  {
    origin: 'Guangzhou',
    destination: 'Ravenna',
    rates: [
      { carrier: 'MSK', price20GP: 2223, price40GP: 3175, price40HQ: 3175, transitTime: 48 },
    ],
  },
  // Guangzhou to Salerno
  {
    origin: 'Guangzhou',
    destination: 'Salerno',
    rates: [
      { carrier: 'MSK', price20GP: 2450, price40GP: 3500, price40HQ: 3500, transitTime: 48 },
    ],
  },
  // ============ SWEDEN ============
  // Shanghai to Gothenburg
  {
    origin: 'Shanghai',
    destination: 'Gothenburg',
    rates: [
      { carrier: 'MSK', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 32 },
    ],
  },
  // Shanghai to Helsingborg
  {
    origin: 'Shanghai',
    destination: 'Helsingborg',
    rates: [
      { carrier: 'MSK', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 34 },
    ],
  },
  // Shanghai to Norrkoeping
  {
    origin: 'Shanghai',
    destination: 'Norrkoeping',
    rates: [
      { carrier: 'MSK', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Shanghai to Gaevle
  {
    origin: 'Shanghai',
    destination: 'Gaevle',
    rates: [
      { carrier: 'MSK', price20GP: 1595, price40GP: 2450, price40HQ: 2450, transitTime: 36 },
    ],
  },
  // Shanghai to Halmstad
  {
    origin: 'Shanghai',
    destination: 'Halmstad',
    rates: [
      { carrier: 'MSK', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 34 },
    ],
  },
  // Ningbo to Gothenburg
  {
    origin: 'Ningbo',
    destination: 'Gothenburg',
    rates: [
      { carrier: 'MSK', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 33 },
    ],
  },
  // Ningbo to Helsingborg
  {
    origin: 'Ningbo',
    destination: 'Helsingborg',
    rates: [
      { carrier: 'MSK', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 35 },
    ],
  },
  // Ningbo to Norrkoeping
  {
    origin: 'Ningbo',
    destination: 'Norrkoeping',
    rates: [
      { carrier: 'MSK', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 36 },
    ],
  },
  // Ningbo to Gaevle
  {
    origin: 'Ningbo',
    destination: 'Gaevle',
    rates: [
      { carrier: 'MSK', price20GP: 1595, price40GP: 2450, price40HQ: 2450, transitTime: 37 },
    ],
  },
  // Ningbo to Halmstad
  {
    origin: 'Ningbo',
    destination: 'Halmstad',
    rates: [
      { carrier: 'MSK', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 35 },
    ],
  },
  // Qingdao to Gothenburg
  {
    origin: 'Qingdao',
    destination: 'Gothenburg',
    rates: [
      { carrier: 'MSK', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 34 },
    ],
  },
  // Qingdao to Helsingborg
  {
    origin: 'Qingdao',
    destination: 'Helsingborg',
    rates: [
      { carrier: 'MSK', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 36 },
    ],
  },
  // Qingdao to Norrkoeping
  {
    origin: 'Qingdao',
    destination: 'Norrkoeping',
    rates: [
      { carrier: 'MSK', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 37 },
    ],
  },
  // Qingdao to Gaevle
  {
    origin: 'Qingdao',
    destination: 'Gaevle',
    rates: [
      { carrier: 'MSK', price20GP: 1595, price40GP: 2450, price40HQ: 2450, transitTime: 38 },
    ],
  },
  // Qingdao to Halmstad
  {
    origin: 'Qingdao',
    destination: 'Halmstad',
    rates: [
      { carrier: 'MSK', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 36 },
    ],
  },
  // Dalian to Gothenburg
  {
    origin: 'Dalian',
    destination: 'Gothenburg',
    rates: [
      { carrier: 'MSK', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 36 },
    ],
  },
  // Dalian to Helsingborg
  {
    origin: 'Dalian',
    destination: 'Helsingborg',
    rates: [
      { carrier: 'MSK', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 38 },
    ],
  },
  // Dalian to Norrkoeping
  {
    origin: 'Dalian',
    destination: 'Norrkoeping',
    rates: [
      { carrier: 'MSK', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 39 },
    ],
  },
  // Dalian to Gaevle
  {
    origin: 'Dalian',
    destination: 'Gaevle',
    rates: [
      { carrier: 'MSK', price20GP: 1595, price40GP: 2450, price40HQ: 2450, transitTime: 40 },
    ],
  },
  // Dalian to Halmstad
  {
    origin: 'Dalian',
    destination: 'Halmstad',
    rates: [
      { carrier: 'MSK', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 38 },
    ],
  },
  // Hong Kong to Gothenburg
  {
    origin: 'Hong Kong',
    destination: 'Gothenburg',
    rates: [
      { carrier: 'MSK', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 33 },
    ],
  },
  // Hong Kong to Helsingborg
  {
    origin: 'Hong Kong',
    destination: 'Helsingborg',
    rates: [
      { carrier: 'MSK', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 35 },
    ],
  },
  // Hong Kong to Norrkoeping
  {
    origin: 'Hong Kong',
    destination: 'Norrkoeping',
    rates: [
      { carrier: 'MSK', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 36 },
    ],
  },
  // Hong Kong to Gaevle
  {
    origin: 'Hong Kong',
    destination: 'Gaevle',
    rates: [
      { carrier: 'MSK', price20GP: 1595, price40GP: 2450, price40HQ: 2450, transitTime: 37 },
    ],
  },
  // Hong Kong to Halmstad
  {
    origin: 'Hong Kong',
    destination: 'Halmstad',
    rates: [
      { carrier: 'MSK', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 35 },
    ],
  },
  // Xiamen to Gothenburg
  {
    origin: 'Xiamen',
    destination: 'Gothenburg',
    rates: [
      { carrier: 'MSK', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 33 },
    ],
  },
  // Xiamen to Helsingborg
  {
    origin: 'Xiamen',
    destination: 'Helsingborg',
    rates: [
      { carrier: 'MSK', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 35 },
    ],
  },
  // Xiamen to Norrkoeping
  {
    origin: 'Xiamen',
    destination: 'Norrkoeping',
    rates: [
      { carrier: 'MSK', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 36 },
    ],
  },
  // Xiamen to Gaevle
  {
    origin: 'Xiamen',
    destination: 'Gaevle',
    rates: [
      { carrier: 'MSK', price20GP: 1595, price40GP: 2450, price40HQ: 2450, transitTime: 37 },
    ],
  },
  // Xiamen to Halmstad
  {
    origin: 'Xiamen',
    destination: 'Halmstad',
    rates: [
      { carrier: 'MSK', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 35 },
    ],
  },
  // Shenzhen to Gothenburg
  {
    origin: 'Shenzhen',
    destination: 'Gothenburg',
    rates: [
      { carrier: 'MSK', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 33 },
    ],
  },
  // Shenzhen to Helsingborg
  {
    origin: 'Shenzhen',
    destination: 'Helsingborg',
    rates: [
      { carrier: 'MSK', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 35 },
    ],
  },
  // Shenzhen to Norrkoeping
  {
    origin: 'Shenzhen',
    destination: 'Norrkoeping',
    rates: [
      { carrier: 'MSK', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 36 },
    ],
  },
  // Shenzhen to Gaevle
  {
    origin: 'Shenzhen',
    destination: 'Gaevle',
    rates: [
      { carrier: 'MSK', price20GP: 1595, price40GP: 2450, price40HQ: 2450, transitTime: 37 },
    ],
  },
  // Shenzhen to Halmstad
  {
    origin: 'Shenzhen',
    destination: 'Halmstad',
    rates: [
      { carrier: 'MSK', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 35 },
    ],
  },
  // Guangzhou to Gothenburg
  {
    origin: 'Guangzhou',
    destination: 'Gothenburg',
    rates: [
      { carrier: 'MSK', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 33 },
    ],
  },
  // Guangzhou to Helsingborg
  {
    origin: 'Guangzhou',
    destination: 'Helsingborg',
    rates: [
      { carrier: 'MSK', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 35 },
    ],
  },
  // Guangzhou to Norrkoeping
  {
    origin: 'Guangzhou',
    destination: 'Norrkoeping',
    rates: [
      { carrier: 'MSK', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 36 },
    ],
  },
  // Guangzhou to Gaevle
  {
    origin: 'Guangzhou',
    destination: 'Gaevle',
    rates: [
      { carrier: 'MSK', price20GP: 1595, price40GP: 2450, price40HQ: 2450, transitTime: 37 },
    ],
  },
  // Guangzhou to Halmstad
  {
    origin: 'Guangzhou',
    destination: 'Halmstad',
    rates: [
      { carrier: 'MSK', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 35 },
    ],
  },
  // Tianjin to Gothenburg
  {
    origin: 'Tianjin',
    destination: 'Gothenburg',
    rates: [
      { carrier: 'MSK', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 35 },
    ],
  },
  // Tianjin to Helsingborg
  {
    origin: 'Tianjin',
    destination: 'Helsingborg',
    rates: [
      { carrier: 'MSK', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 37 },
    ],
  },
  // Tianjin to Norrkoeping
  {
    origin: 'Tianjin',
    destination: 'Norrkoeping',
    rates: [
      { carrier: 'MSK', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 38 },
    ],
  },
  // Tianjin to Gaevle
  {
    origin: 'Tianjin',
    destination: 'Gaevle',
    rates: [
      { carrier: 'MSK', price20GP: 1595, price40GP: 2450, price40HQ: 2450, transitTime: 39 },
    ],
  },
  // Tianjin to Halmstad
  {
    origin: 'Tianjin',
    destination: 'Halmstad',
    rates: [
      { carrier: 'MSK', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 37 },
    ],
  },
  // ============ CZECH REPUBLIC ============
  // Shanghai to Awt Paskov
  {
    origin: 'Shanghai',
    destination: 'Awt Paskov',
    rates: [
      { carrier: 'MSK', price20GP: 1644, price40GP: 2525, price40HQ: 2525, transitTime: 37 },
    ],
  },
  // Shanghai to Melnik
  {
    origin: 'Shanghai',
    destination: 'Melnik',
    rates: [
      { carrier: 'MSK', price20GP: 1563, price40GP: 2400, price40HQ: 2400, transitTime: 37 },
    ],
  },
  // Ningbo to Awt Paskov
  {
    origin: 'Ningbo',
    destination: 'Awt Paskov',
    rates: [
      { carrier: 'MSK', price20GP: 1644, price40GP: 2525, price40HQ: 2525, transitTime: 38 },
    ],
  },
  // Ningbo to Melnik
  {
    origin: 'Ningbo',
    destination: 'Melnik',
    rates: [
      { carrier: 'MSK', price20GP: 1563, price40GP: 2400, price40HQ: 2400, transitTime: 38 },
    ],
  },
  // Qingdao to Awt Paskov
  {
    origin: 'Qingdao',
    destination: 'Awt Paskov',
    rates: [
      { carrier: 'MSK', price20GP: 1644, price40GP: 2525, price40HQ: 2525, transitTime: 39 },
    ],
  },
  // Qingdao to Melnik
  {
    origin: 'Qingdao',
    destination: 'Melnik',
    rates: [
      { carrier: 'MSK', price20GP: 1563, price40GP: 2400, price40HQ: 2400, transitTime: 39 },
    ],
  },
  // Dalian to Awt Paskov
  {
    origin: 'Dalian',
    destination: 'Awt Paskov',
    rates: [
      { carrier: 'MSK', price20GP: 1644, price40GP: 2525, price40HQ: 2525, transitTime: 41 },
    ],
  },
  // Dalian to Melnik
  {
    origin: 'Dalian',
    destination: 'Melnik',
    rates: [
      { carrier: 'MSK', price20GP: 1563, price40GP: 2400, price40HQ: 2400, transitTime: 41 },
    ],
  },
  // Hong Kong to Awt Paskov
  {
    origin: 'Hong Kong',
    destination: 'Awt Paskov',
    rates: [
      { carrier: 'MSK', price20GP: 1644, price40GP: 2525, price40HQ: 2525, transitTime: 38 },
    ],
  },
  // Hong Kong to Melnik
  {
    origin: 'Hong Kong',
    destination: 'Melnik',
    rates: [
      { carrier: 'MSK', price20GP: 1563, price40GP: 2400, price40HQ: 2400, transitTime: 38 },
    ],
  },
  // Xiamen to Awt Paskov
  {
    origin: 'Xiamen',
    destination: 'Awt Paskov',
    rates: [
      { carrier: 'MSK', price20GP: 1644, price40GP: 2525, price40HQ: 2525, transitTime: 38 },
    ],
  },
  // Xiamen to Melnik
  {
    origin: 'Xiamen',
    destination: 'Melnik',
    rates: [
      { carrier: 'MSK', price20GP: 1563, price40GP: 2400, price40HQ: 2400, transitTime: 38 },
    ],
  },
  // Shenzhen to Awt Paskov
  {
    origin: 'Shenzhen',
    destination: 'Awt Paskov',
    rates: [
      { carrier: 'MSK', price20GP: 1644, price40GP: 2525, price40HQ: 2525, transitTime: 38 },
    ],
  },
  // Shenzhen to Melnik
  {
    origin: 'Shenzhen',
    destination: 'Melnik',
    rates: [
      { carrier: 'MSK', price20GP: 1563, price40GP: 2400, price40HQ: 2400, transitTime: 38 },
    ],
  },
  // Guangzhou to Awt Paskov
  {
    origin: 'Guangzhou',
    destination: 'Awt Paskov',
    rates: [
      { carrier: 'MSK', price20GP: 1644, price40GP: 2525, price40HQ: 2525, transitTime: 38 },
    ],
  },
  // Guangzhou to Melnik
  {
    origin: 'Guangzhou',
    destination: 'Melnik',
    rates: [
      { carrier: 'MSK', price20GP: 1563, price40GP: 2400, price40HQ: 2400, transitTime: 38 },
    ],
  },
  // Tianjin to Awt Paskov
  {
    origin: 'Tianjin',
    destination: 'Awt Paskov',
    rates: [
      { carrier: 'MSK', price20GP: 1644, price40GP: 2525, price40HQ: 2525, transitTime: 40 },
    ],
  },
  // Tianjin to Melnik
  {
    origin: 'Tianjin',
    destination: 'Melnik',
    rates: [
      { carrier: 'MSK', price20GP: 1563, price40GP: 2400, price40HQ: 2400, transitTime: 40 },
    ],
  },
  // ============ UNITED KINGDOM (NEW PORTS) ============
  // Shanghai to London Gateway
  {
    origin: 'Shanghai',
    destination: 'London Gateway',
    rates: [
      { carrier: 'Maersk', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 30 },
    ],
  },
  // Shanghai to Teesport
  {
    origin: 'Shanghai',
    destination: 'Teesport',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 32 },
    ],
  },
  // Shanghai to Belfast
  {
    origin: 'Shanghai',
    destination: 'Belfast',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 34 },
    ],
  },
  // Shanghai to Grangemouth
  {
    origin: 'Shanghai',
    destination: 'Grangemouth',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 32 },
    ],
  },
  // Shanghai to Liverpool
  {
    origin: 'Shanghai',
    destination: 'Liverpool',
    rates: [
      { carrier: 'Maersk', price20GP: 2018, price40GP: 3100, price40HQ: 3100, transitTime: 32 },
    ],
  },
  // Shanghai to South Shields
  {
    origin: 'Shanghai',
    destination: 'South Shields',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 32 },
    ],
  },
  // Ningbo to London Gateway
  {
    origin: 'Ningbo',
    destination: 'London Gateway',
    rates: [
      { carrier: 'Maersk', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 31 },
    ],
  },
  // Ningbo to Teesport
  {
    origin: 'Ningbo',
    destination: 'Teesport',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 33 },
    ],
  },
  // Ningbo to Belfast
  {
    origin: 'Ningbo',
    destination: 'Belfast',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 35 },
    ],
  },
  // Ningbo to Grangemouth
  {
    origin: 'Ningbo',
    destination: 'Grangemouth',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 33 },
    ],
  },
  // Ningbo to Liverpool
  {
    origin: 'Ningbo',
    destination: 'Liverpool',
    rates: [
      { carrier: 'Maersk', price20GP: 2018, price40GP: 3100, price40HQ: 3100, transitTime: 33 },
    ],
  },
  // Ningbo to South Shields
  {
    origin: 'Ningbo',
    destination: 'South Shields',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 33 },
    ],
  },
  // Qingdao to London Gateway
  {
    origin: 'Qingdao',
    destination: 'London Gateway',
    rates: [
      { carrier: 'Maersk', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 33 },
    ],
  },
  // Qingdao to Teesport
  {
    origin: 'Qingdao',
    destination: 'Teesport',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 35 },
    ],
  },
  // Qingdao to Belfast
  {
    origin: 'Qingdao',
    destination: 'Belfast',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 37 },
    ],
  },
  // Qingdao to Grangemouth
  {
    origin: 'Qingdao',
    destination: 'Grangemouth',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 35 },
    ],
  },
  // Qingdao to Liverpool
  {
    origin: 'Qingdao',
    destination: 'Liverpool',
    rates: [
      { carrier: 'Maersk', price20GP: 2018, price40GP: 3100, price40HQ: 3100, transitTime: 35 },
    ],
  },
  // Qingdao to South Shields
  {
    origin: 'Qingdao',
    destination: 'South Shields',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 35 },
    ],
  },
  // Dalian to London Gateway
  {
    origin: 'Dalian',
    destination: 'London Gateway',
    rates: [
      { carrier: 'Maersk', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 35 },
    ],
  },
  // Dalian to Teesport
  {
    origin: 'Dalian',
    destination: 'Teesport',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 37 },
    ],
  },
  // Dalian to Belfast
  {
    origin: 'Dalian',
    destination: 'Belfast',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 39 },
    ],
  },
  // Dalian to Grangemouth
  {
    origin: 'Dalian',
    destination: 'Grangemouth',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 37 },
    ],
  },
  // Dalian to Liverpool
  {
    origin: 'Dalian',
    destination: 'Liverpool',
    rates: [
      { carrier: 'Maersk', price20GP: 2018, price40GP: 3100, price40HQ: 3100, transitTime: 37 },
    ],
  },
  // Dalian to South Shields
  {
    origin: 'Dalian',
    destination: 'South Shields',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 37 },
    ],
  },
  // Hong Kong to London Gateway
  {
    origin: 'Hong Kong',
    destination: 'London Gateway',
    rates: [
      { carrier: 'Maersk', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 31 },
    ],
  },
  // Hong Kong to Teesport
  {
    origin: 'Hong Kong',
    destination: 'Teesport',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 33 },
    ],
  },
  // Hong Kong to Belfast
  {
    origin: 'Hong Kong',
    destination: 'Belfast',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 35 },
    ],
  },
  // Hong Kong to Grangemouth
  {
    origin: 'Hong Kong',
    destination: 'Grangemouth',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 33 },
    ],
  },
  // Hong Kong to Liverpool
  {
    origin: 'Hong Kong',
    destination: 'Liverpool',
    rates: [
      { carrier: 'Maersk', price20GP: 2018, price40GP: 3100, price40HQ: 3100, transitTime: 33 },
    ],
  },
  // Hong Kong to South Shields
  {
    origin: 'Hong Kong',
    destination: 'South Shields',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 33 },
    ],
  },
  // Xiamen to London Gateway
  {
    origin: 'Xiamen',
    destination: 'London Gateway',
    rates: [
      { carrier: 'Maersk', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 31 },
    ],
  },
  // Xiamen to Teesport
  {
    origin: 'Xiamen',
    destination: 'Teesport',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 33 },
    ],
  },
  // Xiamen to Belfast
  {
    origin: 'Xiamen',
    destination: 'Belfast',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 35 },
    ],
  },
  // Xiamen to Grangemouth
  {
    origin: 'Xiamen',
    destination: 'Grangemouth',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 33 },
    ],
  },
  // Xiamen to Liverpool
  {
    origin: 'Xiamen',
    destination: 'Liverpool',
    rates: [
      { carrier: 'Maersk', price20GP: 2018, price40GP: 3100, price40HQ: 3100, transitTime: 33 },
    ],
  },
  // Xiamen to South Shields
  {
    origin: 'Xiamen',
    destination: 'South Shields',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 33 },
    ],
  },
  // Shenzhen to London Gateway
  {
    origin: 'Shenzhen',
    destination: 'London Gateway',
    rates: [
      { carrier: 'Maersk', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 31 },
    ],
  },
  // Shenzhen to Teesport
  {
    origin: 'Shenzhen',
    destination: 'Teesport',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 33 },
    ],
  },
  // Shenzhen to Belfast
  {
    origin: 'Shenzhen',
    destination: 'Belfast',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 35 },
    ],
  },
  // Shenzhen to Grangemouth
  {
    origin: 'Shenzhen',
    destination: 'Grangemouth',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 33 },
    ],
  },
  // Shenzhen to Liverpool
  {
    origin: 'Shenzhen',
    destination: 'Liverpool',
    rates: [
      { carrier: 'Maersk', price20GP: 2018, price40GP: 3100, price40HQ: 3100, transitTime: 33 },
    ],
  },
  // Shenzhen to South Shields
  {
    origin: 'Shenzhen',
    destination: 'South Shields',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 33 },
    ],
  },
  // Guangzhou to London Gateway
  {
    origin: 'Guangzhou',
    destination: 'London Gateway',
    rates: [
      { carrier: 'Maersk', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 31 },
    ],
  },
  // Guangzhou to Teesport
  {
    origin: 'Guangzhou',
    destination: 'Teesport',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 33 },
    ],
  },
  // Guangzhou to Belfast
  {
    origin: 'Guangzhou',
    destination: 'Belfast',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 35 },
    ],
  },
  // Guangzhou to Grangemouth
  {
    origin: 'Guangzhou',
    destination: 'Grangemouth',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 33 },
    ],
  },
  // Guangzhou to Liverpool
  {
    origin: 'Guangzhou',
    destination: 'Liverpool',
    rates: [
      { carrier: 'Maersk', price20GP: 2018, price40GP: 3100, price40HQ: 3100, transitTime: 33 },
    ],
  },
  // Guangzhou to South Shields
  {
    origin: 'Guangzhou',
    destination: 'South Shields',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 33 },
    ],
  },
  // Tianjin to London Gateway
  {
    origin: 'Tianjin',
    destination: 'London Gateway',
    rates: [
      { carrier: 'Maersk', price20GP: 1465, price40GP: 2250, price40HQ: 2250, transitTime: 34 },
    ],
  },
  // Tianjin to Teesport
  {
    origin: 'Tianjin',
    destination: 'Teesport',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 36 },
    ],
  },
  // Tianjin to Belfast
  {
    origin: 'Tianjin',
    destination: 'Belfast',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 38 },
    ],
  },
  // Tianjin to Grangemouth
  {
    origin: 'Tianjin',
    destination: 'Grangemouth',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 36 },
    ],
  },
  // Tianjin to Liverpool
  {
    origin: 'Tianjin',
    destination: 'Liverpool',
    rates: [
      { carrier: 'Maersk', price20GP: 2018, price40GP: 3100, price40HQ: 3100, transitTime: 36 },
    ],
  },
  // Tianjin to South Shields
  {
    origin: 'Tianjin',
    destination: 'South Shields',
    rates: [
      { carrier: 'Maersk', price20GP: 1920, price40GP: 2950, price40HQ: 2950, transitTime: 36 },
    ],
  },
  // ============ NORWAY ============
  // Shanghai to Drammen
  {
    origin: 'Shanghai',
    destination: 'Drammen',
    rates: [
      { carrier: 'Maersk', price20GP: 1725, price40GP: 2650, price40HQ: 2650, transitTime: 34 },
    ],
  },
  // Shanghai to Oslo
  {
    origin: 'Shanghai',
    destination: 'Oslo',
    rates: [
      { carrier: 'Maersk', price20GP: 1758, price40GP: 2700, price40HQ: 2700, transitTime: 34 },
    ],
  },
  // Shanghai to Aalesund
  {
    origin: 'Shanghai',
    destination: 'Aalesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 34 },
    ],
  },
  // Shanghai to Bergen
  {
    origin: 'Shanghai',
    destination: 'Bergen',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 34 },
    ],
  },
  // Shanghai to Brevik
  {
    origin: 'Shanghai',
    destination: 'Brevik',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 34 },
    ],
  },
  // Shanghai to Floroe
  {
    origin: 'Shanghai',
    destination: 'Floroe',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 34 },
    ],
  },
  // Shanghai to Fredrikstad
  {
    origin: 'Shanghai',
    destination: 'Fredrikstad',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 34 },
    ],
  },
  // Shanghai to Haugesund
  {
    origin: 'Shanghai',
    destination: 'Haugesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 34 },
    ],
  },
  // Shanghai to Kristiansand
  {
    origin: 'Shanghai',
    destination: 'Kristiansand',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 34 },
    ],
  },
  // Shanghai to Larvik
  {
    origin: 'Shanghai',
    destination: 'Larvik',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 34 },
    ],
  },
  // Shanghai to Maaloey
  {
    origin: 'Shanghai',
    destination: 'Maaloey',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 34 },
    ],
  },
  // Shanghai to Moss
  {
    origin: 'Shanghai',
    destination: 'Moss',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 34 },
    ],
  },
  // Shanghai to Mo I Rana
  {
    origin: 'Shanghai',
    destination: 'Mo I Rana',
    rates: [
      { carrier: 'Maersk', price20GP: 2505, price40GP: 3850, price40HQ: 3850, transitTime: 34 },
    ],
  },
  // Shanghai to Orkanger
  {
    origin: 'Shanghai',
    destination: 'Orkanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 34 },
    ],
  },
  // Shanghai to Straumen
  {
    origin: 'Shanghai',
    destination: 'Straumen',
    rates: [
      { carrier: 'Maersk', price20GP: 2960, price40GP: 4550, price40HQ: 4550, transitTime: 34 },
    ],
  },
  // Shanghai to Stavanger
  {
    origin: 'Shanghai',
    destination: 'Stavanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 34 },
    ],
  },
  // Shanghai to Svelgen
  {
    origin: 'Shanghai',
    destination: 'Svelgen',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 34 },
    ],
  },
  // Ningbo to Drammen
  {
    origin: 'Ningbo',
    destination: 'Drammen',
    rates: [
      { carrier: 'Maersk', price20GP: 1725, price40GP: 2650, price40HQ: 2650, transitTime: 35 },
    ],
  },
  // Ningbo to Oslo
  {
    origin: 'Ningbo',
    destination: 'Oslo',
    rates: [
      { carrier: 'Maersk', price20GP: 1758, price40GP: 2700, price40HQ: 2700, transitTime: 35 },
    ],
  },
  // Ningbo to Aalesund
  {
    origin: 'Ningbo',
    destination: 'Aalesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Ningbo to Bergen
  {
    origin: 'Ningbo',
    destination: 'Bergen',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Ningbo to Brevik
  {
    origin: 'Ningbo',
    destination: 'Brevik',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Ningbo to Floroe
  {
    origin: 'Ningbo',
    destination: 'Floroe',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Ningbo to Fredrikstad
  {
    origin: 'Ningbo',
    destination: 'Fredrikstad',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 35 },
    ],
  },
  // Ningbo to Haugesund
  {
    origin: 'Ningbo',
    destination: 'Haugesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Ningbo to Kristiansand
  {
    origin: 'Ningbo',
    destination: 'Kristiansand',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 35 },
    ],
  },
  // Ningbo to Larvik
  {
    origin: 'Ningbo',
    destination: 'Larvik',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 35 },
    ],
  },
  // Ningbo to Maaloey
  {
    origin: 'Ningbo',
    destination: 'Maaloey',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 35 },
    ],
  },
  // Ningbo to Moss
  {
    origin: 'Ningbo',
    destination: 'Moss',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 35 },
    ],
  },
  // Ningbo to Mo I Rana
  {
    origin: 'Ningbo',
    destination: 'Mo I Rana',
    rates: [
      { carrier: 'Maersk', price20GP: 2505, price40GP: 3850, price40HQ: 3850, transitTime: 35 },
    ],
  },
  // Ningbo to Orkanger
  {
    origin: 'Ningbo',
    destination: 'Orkanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Ningbo to Straumen
  {
    origin: 'Ningbo',
    destination: 'Straumen',
    rates: [
      { carrier: 'Maersk', price20GP: 2960, price40GP: 4550, price40HQ: 4550, transitTime: 35 },
    ],
  },
  // Ningbo to Stavanger
  {
    origin: 'Ningbo',
    destination: 'Stavanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Ningbo to Svelgen
  {
    origin: 'Ningbo',
    destination: 'Svelgen',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 35 },
    ],
  },
  // Qingdao to Drammen
  {
    origin: 'Qingdao',
    destination: 'Drammen',
    rates: [
      { carrier: 'Maersk', price20GP: 1725, price40GP: 2650, price40HQ: 2650, transitTime: 36 },
    ],
  },
  // Qingdao to Oslo
  {
    origin: 'Qingdao',
    destination: 'Oslo',
    rates: [
      { carrier: 'Maersk', price20GP: 1758, price40GP: 2700, price40HQ: 2700, transitTime: 36 },
    ],
  },
  // Qingdao to Aalesund
  {
    origin: 'Qingdao',
    destination: 'Aalesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 36 },
    ],
  },
  // Qingdao to Bergen
  {
    origin: 'Qingdao',
    destination: 'Bergen',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 36 },
    ],
  },
  // Qingdao to Brevik
  {
    origin: 'Qingdao',
    destination: 'Brevik',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 36 },
    ],
  },
  // Qingdao to Floroe
  {
    origin: 'Qingdao',
    destination: 'Floroe',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 36 },
    ],
  },
  // Qingdao to Fredrikstad
  {
    origin: 'Qingdao',
    destination: 'Fredrikstad',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 36 },
    ],
  },
  // Qingdao to Haugesund
  {
    origin: 'Qingdao',
    destination: 'Haugesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 36 },
    ],
  },
  // Qingdao to Kristiansand
  {
    origin: 'Qingdao',
    destination: 'Kristiansand',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 36 },
    ],
  },
  // Qingdao to Larvik
  {
    origin: 'Qingdao',
    destination: 'Larvik',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 36 },
    ],
  },
  // Qingdao to Maaloey
  {
    origin: 'Qingdao',
    destination: 'Maaloey',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 36 },
    ],
  },
  // Qingdao to Moss
  {
    origin: 'Qingdao',
    destination: 'Moss',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 36 },
    ],
  },
  // Qingdao to Mo I Rana
  {
    origin: 'Qingdao',
    destination: 'Mo I Rana',
    rates: [
      { carrier: 'Maersk', price20GP: 2505, price40GP: 3850, price40HQ: 3850, transitTime: 36 },
    ],
  },
  // Qingdao to Orkanger
  {
    origin: 'Qingdao',
    destination: 'Orkanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 36 },
    ],
  },
  // Qingdao to Straumen
  {
    origin: 'Qingdao',
    destination: 'Straumen',
    rates: [
      { carrier: 'Maersk', price20GP: 2960, price40GP: 4550, price40HQ: 4550, transitTime: 36 },
    ],
  },
  // Qingdao to Stavanger
  {
    origin: 'Qingdao',
    destination: 'Stavanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 36 },
    ],
  },
  // Qingdao to Svelgen
  {
    origin: 'Qingdao',
    destination: 'Svelgen',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 36 },
    ],
  },
  // Dalian to Drammen
  {
    origin: 'Dalian',
    destination: 'Drammen',
    rates: [
      { carrier: 'Maersk', price20GP: 1725, price40GP: 2650, price40HQ: 2650, transitTime: 38 },
    ],
  },
  // Dalian to Oslo
  {
    origin: 'Dalian',
    destination: 'Oslo',
    rates: [
      { carrier: 'Maersk', price20GP: 1758, price40GP: 2700, price40HQ: 2700, transitTime: 38 },
    ],
  },
  // Dalian to Aalesund
  {
    origin: 'Dalian',
    destination: 'Aalesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 38 },
    ],
  },
  // Dalian to Bergen
  {
    origin: 'Dalian',
    destination: 'Bergen',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 38 },
    ],
  },
  // Dalian to Brevik
  {
    origin: 'Dalian',
    destination: 'Brevik',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 38 },
    ],
  },
  // Dalian to Floroe
  {
    origin: 'Dalian',
    destination: 'Floroe',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 38 },
    ],
  },
  // Dalian to Fredrikstad
  {
    origin: 'Dalian',
    destination: 'Fredrikstad',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 38 },
    ],
  },
  // Dalian to Haugesund
  {
    origin: 'Dalian',
    destination: 'Haugesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 38 },
    ],
  },
  // Dalian to Kristiansand
  {
    origin: 'Dalian',
    destination: 'Kristiansand',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 38 },
    ],
  },
  // Dalian to Larvik
  {
    origin: 'Dalian',
    destination: 'Larvik',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 38 },
    ],
  },
  // Dalian to Maaloey
  {
    origin: 'Dalian',
    destination: 'Maaloey',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 38 },
    ],
  },
  // Dalian to Moss
  {
    origin: 'Dalian',
    destination: 'Moss',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 38 },
    ],
  },
  // Dalian to Mo I Rana
  {
    origin: 'Dalian',
    destination: 'Mo I Rana',
    rates: [
      { carrier: 'Maersk', price20GP: 2505, price40GP: 3850, price40HQ: 3850, transitTime: 38 },
    ],
  },
  // Dalian to Orkanger
  {
    origin: 'Dalian',
    destination: 'Orkanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 38 },
    ],
  },
  // Dalian to Straumen
  {
    origin: 'Dalian',
    destination: 'Straumen',
    rates: [
      { carrier: 'Maersk', price20GP: 2960, price40GP: 4550, price40HQ: 4550, transitTime: 38 },
    ],
  },
  // Dalian to Stavanger
  {
    origin: 'Dalian',
    destination: 'Stavanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 38 },
    ],
  },
  // Dalian to Svelgen
  {
    origin: 'Dalian',
    destination: 'Svelgen',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 38 },
    ],
  },
  // Hong Kong to Drammen
  {
    origin: 'Hong Kong',
    destination: 'Drammen',
    rates: [
      { carrier: 'Maersk', price20GP: 1725, price40GP: 2650, price40HQ: 2650, transitTime: 35 },
    ],
  },
  // Hong Kong to Oslo
  {
    origin: 'Hong Kong',
    destination: 'Oslo',
    rates: [
      { carrier: 'Maersk', price20GP: 1758, price40GP: 2700, price40HQ: 2700, transitTime: 35 },
    ],
  },
  // Hong Kong to Aalesund
  {
    origin: 'Hong Kong',
    destination: 'Aalesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Hong Kong to Bergen
  {
    origin: 'Hong Kong',
    destination: 'Bergen',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Hong Kong to Brevik
  {
    origin: 'Hong Kong',
    destination: 'Brevik',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Hong Kong to Floroe
  {
    origin: 'Hong Kong',
    destination: 'Floroe',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Hong Kong to Fredrikstad
  {
    origin: 'Hong Kong',
    destination: 'Fredrikstad',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 35 },
    ],
  },
  // Hong Kong to Haugesund
  {
    origin: 'Hong Kong',
    destination: 'Haugesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Hong Kong to Kristiansand
  {
    origin: 'Hong Kong',
    destination: 'Kristiansand',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 35 },
    ],
  },
  // Hong Kong to Larvik
  {
    origin: 'Hong Kong',
    destination: 'Larvik',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 35 },
    ],
  },
  // Hong Kong to Maaloey
  {
    origin: 'Hong Kong',
    destination: 'Maaloey',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 35 },
    ],
  },
  // Hong Kong to Moss
  {
    origin: 'Hong Kong',
    destination: 'Moss',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 35 },
    ],
  },
  // Hong Kong to Mo I Rana
  {
    origin: 'Hong Kong',
    destination: 'Mo I Rana',
    rates: [
      { carrier: 'Maersk', price20GP: 2505, price40GP: 3850, price40HQ: 3850, transitTime: 35 },
    ],
  },
  // Hong Kong to Orkanger
  {
    origin: 'Hong Kong',
    destination: 'Orkanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Hong Kong to Straumen
  {
    origin: 'Hong Kong',
    destination: 'Straumen',
    rates: [
      { carrier: 'Maersk', price20GP: 2960, price40GP: 4550, price40HQ: 4550, transitTime: 35 },
    ],
  },
  // Hong Kong to Stavanger
  {
    origin: 'Hong Kong',
    destination: 'Stavanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Hong Kong to Svelgen
  {
    origin: 'Hong Kong',
    destination: 'Svelgen',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 35 },
    ],
  },
  // Xiamen to Drammen
  {
    origin: 'Xiamen',
    destination: 'Drammen',
    rates: [
      { carrier: 'Maersk', price20GP: 1725, price40GP: 2650, price40HQ: 2650, transitTime: 35 },
    ],
  },
  // Xiamen to Oslo
  {
    origin: 'Xiamen',
    destination: 'Oslo',
    rates: [
      { carrier: 'Maersk', price20GP: 1758, price40GP: 2700, price40HQ: 2700, transitTime: 35 },
    ],
  },
  // Xiamen to Aalesund
  {
    origin: 'Xiamen',
    destination: 'Aalesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Xiamen to Bergen
  {
    origin: 'Xiamen',
    destination: 'Bergen',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Xiamen to Brevik
  {
    origin: 'Xiamen',
    destination: 'Brevik',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Xiamen to Floroe
  {
    origin: 'Xiamen',
    destination: 'Floroe',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Xiamen to Fredrikstad
  {
    origin: 'Xiamen',
    destination: 'Fredrikstad',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 35 },
    ],
  },
  // Xiamen to Haugesund
  {
    origin: 'Xiamen',
    destination: 'Haugesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Xiamen to Kristiansand
  {
    origin: 'Xiamen',
    destination: 'Kristiansand',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 35 },
    ],
  },
  // Xiamen to Larvik
  {
    origin: 'Xiamen',
    destination: 'Larvik',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 35 },
    ],
  },
  // Xiamen to Maaloey
  {
    origin: 'Xiamen',
    destination: 'Maaloey',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 35 },
    ],
  },
  // Xiamen to Moss
  {
    origin: 'Xiamen',
    destination: 'Moss',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 35 },
    ],
  },
  // Xiamen to Mo I Rana
  {
    origin: 'Xiamen',
    destination: 'Mo I Rana',
    rates: [
      { carrier: 'Maersk', price20GP: 2505, price40GP: 3850, price40HQ: 3850, transitTime: 35 },
    ],
  },
  // Xiamen to Orkanger
  {
    origin: 'Xiamen',
    destination: 'Orkanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Xiamen to Straumen
  {
    origin: 'Xiamen',
    destination: 'Straumen',
    rates: [
      { carrier: 'Maersk', price20GP: 2960, price40GP: 4550, price40HQ: 4550, transitTime: 35 },
    ],
  },
  // Xiamen to Stavanger
  {
    origin: 'Xiamen',
    destination: 'Stavanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Xiamen to Svelgen
  {
    origin: 'Xiamen',
    destination: 'Svelgen',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 35 },
    ],
  },
  // Shenzhen to Drammen
  {
    origin: 'Shenzhen',
    destination: 'Drammen',
    rates: [
      { carrier: 'Maersk', price20GP: 1725, price40GP: 2650, price40HQ: 2650, transitTime: 35 },
    ],
  },
  // Shenzhen to Oslo
  {
    origin: 'Shenzhen',
    destination: 'Oslo',
    rates: [
      { carrier: 'Maersk', price20GP: 1758, price40GP: 2700, price40HQ: 2700, transitTime: 35 },
    ],
  },
  // Shenzhen to Aalesund
  {
    origin: 'Shenzhen',
    destination: 'Aalesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Shenzhen to Bergen
  {
    origin: 'Shenzhen',
    destination: 'Bergen',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Shenzhen to Brevik
  {
    origin: 'Shenzhen',
    destination: 'Brevik',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Shenzhen to Floroe
  {
    origin: 'Shenzhen',
    destination: 'Floroe',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Shenzhen to Fredrikstad
  {
    origin: 'Shenzhen',
    destination: 'Fredrikstad',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 35 },
    ],
  },
  // Shenzhen to Haugesund
  {
    origin: 'Shenzhen',
    destination: 'Haugesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Shenzhen to Kristiansand
  {
    origin: 'Shenzhen',
    destination: 'Kristiansand',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 35 },
    ],
  },
  // Shenzhen to Larvik
  {
    origin: 'Shenzhen',
    destination: 'Larvik',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 35 },
    ],
  },
  // Shenzhen to Maaloey
  {
    origin: 'Shenzhen',
    destination: 'Maaloey',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 35 },
    ],
  },
  // Shenzhen to Moss
  {
    origin: 'Shenzhen',
    destination: 'Moss',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 35 },
    ],
  },
  // Shenzhen to Mo I Rana
  {
    origin: 'Shenzhen',
    destination: 'Mo I Rana',
    rates: [
      { carrier: 'Maersk', price20GP: 2505, price40GP: 3850, price40HQ: 3850, transitTime: 35 },
    ],
  },
  // Shenzhen to Orkanger
  {
    origin: 'Shenzhen',
    destination: 'Orkanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Shenzhen to Straumen
  {
    origin: 'Shenzhen',
    destination: 'Straumen',
    rates: [
      { carrier: 'Maersk', price20GP: 2960, price40GP: 4550, price40HQ: 4550, transitTime: 35 },
    ],
  },
  // Shenzhen to Stavanger
  {
    origin: 'Shenzhen',
    destination: 'Stavanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Shenzhen to Svelgen
  {
    origin: 'Shenzhen',
    destination: 'Svelgen',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 35 },
    ],
  },
  // Guangzhou to Drammen
  {
    origin: 'Guangzhou',
    destination: 'Drammen',
    rates: [
      { carrier: 'Maersk', price20GP: 1725, price40GP: 2650, price40HQ: 2650, transitTime: 35 },
    ],
  },
  // Guangzhou to Oslo
  {
    origin: 'Guangzhou',
    destination: 'Oslo',
    rates: [
      { carrier: 'Maersk', price20GP: 1758, price40GP: 2700, price40HQ: 2700, transitTime: 35 },
    ],
  },
  // Guangzhou to Aalesund
  {
    origin: 'Guangzhou',
    destination: 'Aalesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Guangzhou to Bergen
  {
    origin: 'Guangzhou',
    destination: 'Bergen',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Guangzhou to Brevik
  {
    origin: 'Guangzhou',
    destination: 'Brevik',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Guangzhou to Floroe
  {
    origin: 'Guangzhou',
    destination: 'Floroe',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Guangzhou to Fredrikstad
  {
    origin: 'Guangzhou',
    destination: 'Fredrikstad',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 35 },
    ],
  },
  // Guangzhou to Haugesund
  {
    origin: 'Guangzhou',
    destination: 'Haugesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Guangzhou to Kristiansand
  {
    origin: 'Guangzhou',
    destination: 'Kristiansand',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 35 },
    ],
  },
  // Guangzhou to Larvik
  {
    origin: 'Guangzhou',
    destination: 'Larvik',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 35 },
    ],
  },
  // Guangzhou to Maaloey
  {
    origin: 'Guangzhou',
    destination: 'Maaloey',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 35 },
    ],
  },
  // Guangzhou to Moss
  {
    origin: 'Guangzhou',
    destination: 'Moss',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 35 },
    ],
  },
  // Guangzhou to Mo I Rana
  {
    origin: 'Guangzhou',
    destination: 'Mo I Rana',
    rates: [
      { carrier: 'Maersk', price20GP: 2505, price40GP: 3850, price40HQ: 3850, transitTime: 35 },
    ],
  },
  // Guangzhou to Orkanger
  {
    origin: 'Guangzhou',
    destination: 'Orkanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Guangzhou to Straumen
  {
    origin: 'Guangzhou',
    destination: 'Straumen',
    rates: [
      { carrier: 'Maersk', price20GP: 2960, price40GP: 4550, price40HQ: 4550, transitTime: 35 },
    ],
  },
  // Guangzhou to Stavanger
  {
    origin: 'Guangzhou',
    destination: 'Stavanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 35 },
    ],
  },
  // Guangzhou to Svelgen
  {
    origin: 'Guangzhou',
    destination: 'Svelgen',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 35 },
    ],
  },
  // Tianjin to Drammen
  {
    origin: 'Tianjin',
    destination: 'Drammen',
    rates: [
      { carrier: 'Maersk', price20GP: 1725, price40GP: 2650, price40HQ: 2650, transitTime: 37 },
    ],
  },
  // Tianjin to Oslo
  {
    origin: 'Tianjin',
    destination: 'Oslo',
    rates: [
      { carrier: 'Maersk', price20GP: 1758, price40GP: 2700, price40HQ: 2700, transitTime: 37 },
    ],
  },
  // Tianjin to Aalesund
  {
    origin: 'Tianjin',
    destination: 'Aalesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 37 },
    ],
  },
  // Tianjin to Bergen
  {
    origin: 'Tianjin',
    destination: 'Bergen',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 37 },
    ],
  },
  // Tianjin to Brevik
  {
    origin: 'Tianjin',
    destination: 'Brevik',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 37 },
    ],
  },
  // Tianjin to Floroe
  {
    origin: 'Tianjin',
    destination: 'Floroe',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 37 },
    ],
  },
  // Tianjin to Fredrikstad
  {
    origin: 'Tianjin',
    destination: 'Fredrikstad',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 37 },
    ],
  },
  // Tianjin to Haugesund
  {
    origin: 'Tianjin',
    destination: 'Haugesund',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 37 },
    ],
  },
  // Tianjin to Kristiansand
  {
    origin: 'Tianjin',
    destination: 'Kristiansand',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 37 },
    ],
  },
  // Tianjin to Larvik
  {
    origin: 'Tianjin',
    destination: 'Larvik',
    rates: [
      { carrier: 'Maersk', price20GP: 1660, price40GP: 2550, price40HQ: 2550, transitTime: 37 },
    ],
  },
  // Tianjin to Maaloey
  {
    origin: 'Tianjin',
    destination: 'Maaloey',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 37 },
    ],
  },
  // Tianjin to Moss
  {
    origin: 'Tianjin',
    destination: 'Moss',
    rates: [
      { carrier: 'Maersk', price20GP: 1855, price40GP: 2850, price40HQ: 2850, transitTime: 37 },
    ],
  },
  // Tianjin to Mo I Rana
  {
    origin: 'Tianjin',
    destination: 'Mo I Rana',
    rates: [
      { carrier: 'Maersk', price20GP: 2505, price40GP: 3850, price40HQ: 3850, transitTime: 37 },
    ],
  },
  // Tianjin to Orkanger
  {
    origin: 'Tianjin',
    destination: 'Orkanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 37 },
    ],
  },
  // Tianjin to Straumen
  {
    origin: 'Tianjin',
    destination: 'Straumen',
    rates: [
      { carrier: 'Maersk', price20GP: 2960, price40GP: 4550, price40HQ: 4550, transitTime: 37 },
    ],
  },
  // Tianjin to Stavanger
  {
    origin: 'Tianjin',
    destination: 'Stavanger',
    rates: [
      { carrier: 'Maersk', price20GP: 1790, price40GP: 2750, price40HQ: 2750, transitTime: 37 },
    ],
  },
  // Tianjin to Svelgen
  {
    origin: 'Tianjin',
    destination: 'Svelgen',
    rates: [
      { carrier: 'Maersk', price20GP: 2310, price40GP: 3550, price40HQ: 3550, transitTime: 37 },
    ],
  },
];

/**
 * Sub-port pricing for terminals within larger port complexes.
 * These have distinct MSK rates from the parent port.
 * Key format: "subport:destination" (lowercase)
 */
export interface SubPortPricing {
  subPort: string;        // e.g. 'Shekou', 'Yantian', 'Nansha'
  parentCity: string;     // e.g. 'Shenzhen', 'Guangzhou'
  destination: string;
  rates: CarrierRate[];
}

export const subPortPricing: SubPortPricing[] = [
  // ==========================================
  // SHEKOU (Shenzhen) - Italy Routes
  // ==========================================
  { subPort: 'Shekou', parentCity: 'Shenzhen', destination: 'Ancona', rates: [{ carrier: 'MSK', price20GP: 2345, price40GP: 3350, price40HQ: 3350, transitTime: 43 }] },
  { subPort: 'Shekou', parentCity: 'Shenzhen', destination: 'Cagliari', rates: [{ carrier: 'MSK', price20GP: 2552, price40GP: 3645, price40HQ: 3645, transitTime: 43 }] },
  { subPort: 'Shekou', parentCity: 'Shenzhen', destination: 'Civitavecchia', rates: [{ carrier: 'MSK', price20GP: 2555, price40GP: 3650, price40HQ: 3650, transitTime: 43 }] },
  { subPort: 'Shekou', parentCity: 'Shenzhen', destination: 'Genoa', rates: [{ carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 40 }] },
  { subPort: 'Shekou', parentCity: 'Shenzhen', destination: 'Livorno', rates: [{ carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 40 }] },
  { subPort: 'Shekou', parentCity: 'Shenzhen', destination: 'La Spezia', rates: [{ carrier: 'MSK', price20GP: 2310, price40GP: 3300, price40HQ: 3300, transitTime: 40 }] },
  { subPort: 'Shekou', parentCity: 'Shenzhen', destination: 'Naples', rates: [{ carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 42 }] },
  { subPort: 'Shekou', parentCity: 'Shenzhen', destination: 'Ravenna', rates: [{ carrier: 'MSK', price20GP: 2293, price40GP: 3275, price40HQ: 3275, transitTime: 43 }] },
  { subPort: 'Shekou', parentCity: 'Shenzhen', destination: 'Salerno', rates: [{ carrier: 'MSK', price20GP: 2520, price40GP: 3600, price40HQ: 3600, transitTime: 42 }] },
  { subPort: 'Shekou', parentCity: 'Shenzhen', destination: 'Trieste', rates: [{ carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 42 }] },
  { subPort: 'Shekou', parentCity: 'Shenzhen', destination: 'Venice', rates: [{ carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 42 }] },

  // ==========================================
  // YANTIAN (Shenzhen) - Italy Routes
  // ==========================================
  { subPort: 'Yantian', parentCity: 'Shenzhen', destination: 'Ancona', rates: [{ carrier: 'MSK', price20GP: 2275, price40GP: 3250, price40HQ: 3250, transitTime: 43 }] },
  { subPort: 'Yantian', parentCity: 'Shenzhen', destination: 'Cagliari', rates: [{ carrier: 'MSK', price20GP: 2482, price40GP: 3545, price40HQ: 3545, transitTime: 43 }] },
  { subPort: 'Yantian', parentCity: 'Shenzhen', destination: 'Civitavecchia', rates: [{ carrier: 'MSK', price20GP: 2485, price40GP: 3550, price40HQ: 3550, transitTime: 43 }] },
  { subPort: 'Yantian', parentCity: 'Shenzhen', destination: 'Genoa', rates: [{ carrier: 'MSK', price20GP: 2240, price40GP: 3200, price40HQ: 3200, transitTime: 40 }] },
  { subPort: 'Yantian', parentCity: 'Shenzhen', destination: 'Livorno', rates: [{ carrier: 'MSK', price20GP: 2240, price40GP: 3200, price40HQ: 3200, transitTime: 40 }] },
  { subPort: 'Yantian', parentCity: 'Shenzhen', destination: 'La Spezia', rates: [{ carrier: 'MSK', price20GP: 2240, price40GP: 3200, price40HQ: 3200, transitTime: 40 }] },
  { subPort: 'Yantian', parentCity: 'Shenzhen', destination: 'Naples', rates: [{ carrier: 'MSK', price20GP: 2450, price40GP: 3500, price40HQ: 3500, transitTime: 42 }] },
  { subPort: 'Yantian', parentCity: 'Shenzhen', destination: 'Ravenna', rates: [{ carrier: 'MSK', price20GP: 2223, price40GP: 3175, price40HQ: 3175, transitTime: 43 }] },
  { subPort: 'Yantian', parentCity: 'Shenzhen', destination: 'Salerno', rates: [{ carrier: 'MSK', price20GP: 2450, price40GP: 3500, price40HQ: 3500, transitTime: 42 }] },
  { subPort: 'Yantian', parentCity: 'Shenzhen', destination: 'Trieste', rates: [{ carrier: 'MSK', price20GP: 2100, price40GP: 3000, price40HQ: 3000, transitTime: 42 }] },
  { subPort: 'Yantian', parentCity: 'Shenzhen', destination: 'Venice', rates: [{ carrier: 'MSK', price20GP: 2100, price40GP: 3000, price40HQ: 3000, transitTime: 42 }] },

  // ==========================================
  // NANSHA NEW PORT (Guangzhou) - Italy Routes
  // ==========================================
  { subPort: 'Nansha', parentCity: 'Guangzhou', destination: 'Ancona', rates: [{ carrier: 'MSK', price20GP: 2275, price40GP: 3250, price40HQ: 3250, transitTime: 48 }] },
  { subPort: 'Nansha', parentCity: 'Guangzhou', destination: 'Cagliari', rates: [{ carrier: 'MSK', price20GP: 2482, price40GP: 3545, price40HQ: 3545, transitTime: 48 }] },
  { subPort: 'Nansha', parentCity: 'Guangzhou', destination: 'Civitavecchia', rates: [{ carrier: 'MSK', price20GP: 2485, price40GP: 3550, price40HQ: 3550, transitTime: 48 }] },
  { subPort: 'Nansha', parentCity: 'Guangzhou', destination: 'Genoa', rates: [{ carrier: 'MSK', price20GP: 2240, price40GP: 3200, price40HQ: 3200, transitTime: 45 }] },
  { subPort: 'Nansha', parentCity: 'Guangzhou', destination: 'Livorno', rates: [{ carrier: 'MSK', price20GP: 2240, price40GP: 3200, price40HQ: 3200, transitTime: 45 }] },
  { subPort: 'Nansha', parentCity: 'Guangzhou', destination: 'La Spezia', rates: [{ carrier: 'MSK', price20GP: 2240, price40GP: 3200, price40HQ: 3200, transitTime: 45 }] },
  { subPort: 'Nansha', parentCity: 'Guangzhou', destination: 'Naples', rates: [{ carrier: 'MSK', price20GP: 2450, price40GP: 3500, price40HQ: 3500, transitTime: 48 }] },
  { subPort: 'Nansha', parentCity: 'Guangzhou', destination: 'Ravenna', rates: [{ carrier: 'MSK', price20GP: 2223, price40GP: 3175, price40HQ: 3175, transitTime: 48 }] },
  { subPort: 'Nansha', parentCity: 'Guangzhou', destination: 'Salerno', rates: [{ carrier: 'MSK', price20GP: 2450, price40GP: 3500, price40HQ: 3500, transitTime: 48 }] },
  { subPort: 'Nansha', parentCity: 'Guangzhou', destination: 'Trieste', rates: [{ carrier: 'MSK', price20GP: 2100, price40GP: 3000, price40HQ: 3000, transitTime: 45 }] },
  { subPort: 'Nansha', parentCity: 'Guangzhou', destination: 'Venice', rates: [{ carrier: 'MSK', price20GP: 2100, price40GP: 3000, price40HQ: 3000, transitTime: 45 }] },
];

/**
 * Get sub-port pricing for a specific sub-port and destination
 */
export function getSubPortPricing(subPort: string, destination: string): SubPortPricing | undefined {
  return subPortPricing.find(
    (p) =>
      p.subPort.toLowerCase() === subPort.toLowerCase() &&
      p.destination.toLowerCase() === destination.toLowerCase()
  );
}

/**
 * Get all sub-port pricing entries for a parent city and destination
 */
export function getSubPortPricingByParent(parentCity: string, destination: string): SubPortPricing[] {
  return subPortPricing.filter(
    (p) =>
      p.parentCity.toLowerCase() === parentCity.toLowerCase() &&
      p.destination.toLowerCase() === destination.toLowerCase()
  );
}

/**
 * Destination sub-port pricing for terminals within larger destination port complexes.
 * e.g. Vado Ligure is a terminal near Genoa.
 */
export interface DestSubPortPricing {
  destSubPort: string;     // e.g. 'Vado Ligure'
  parentCity: string;      // e.g. 'Genoa'
  origin: string;
  rates: CarrierRate[];
}

export const destSubPortPricing: DestSubPortPricing[] = [
  // ==========================================
  // VADO LIGURE (Genoa) - All Origins
  // ==========================================
  { destSubPort: 'Vado Ligure', parentCity: 'Genoa', origin: 'Shanghai', rates: [{ carrier: 'MSK', price20GP: 2240, price40GP: 3200, price40HQ: 3200, transitTime: 42 }] },
  { destSubPort: 'Vado Ligure', parentCity: 'Genoa', origin: 'Ningbo', rates: [{ carrier: 'MSK', price20GP: 2240, price40GP: 3200, price40HQ: 3200, transitTime: 48 }] },
  { destSubPort: 'Vado Ligure', parentCity: 'Genoa', origin: 'Tianjin', rates: [{ carrier: 'MSK', price20GP: 2240, price40GP: 3200, price40HQ: 3200, transitTime: 52 }] },
  { destSubPort: 'Vado Ligure', parentCity: 'Genoa', origin: 'Qingdao', rates: [{ carrier: 'MSK', price20GP: 2240, price40GP: 3200, price40HQ: 3200, transitTime: 52 }] },
  { destSubPort: 'Vado Ligure', parentCity: 'Genoa', origin: 'Dalian', rates: [{ carrier: 'MSK', price20GP: 2240, price40GP: 3200, price40HQ: 3200, transitTime: 55 }] },
  { destSubPort: 'Vado Ligure', parentCity: 'Genoa', origin: 'Hong Kong', rates: [{ carrier: 'MSK', price20GP: 2240, price40GP: 3200, price40HQ: 3200, transitTime: 40 }] },
  { destSubPort: 'Vado Ligure', parentCity: 'Genoa', origin: 'Xiamen', rates: [{ carrier: 'MSK', price20GP: 2240, price40GP: 3200, price40HQ: 3200, transitTime: 45 }] },
  { destSubPort: 'Vado Ligure', parentCity: 'Genoa', origin: 'Shenzhen', rates: [{ carrier: 'MSK', price20GP: 2240, price40GP: 3200, price40HQ: 3200, transitTime: 40 }] },
  { destSubPort: 'Vado Ligure', parentCity: 'Genoa', origin: 'Guangzhou', rates: [{ carrier: 'MSK', price20GP: 2170, price40GP: 3100, price40HQ: 3100, transitTime: 45 }] },
];

/**
 * Get destination sub-port pricing for a specific origin and parent destination city
 */
export function getDestSubPortPricing(origin: string, parentCity: string): DestSubPortPricing[] {
  return destSubPortPricing.filter(
    (p) =>
      p.origin.toLowerCase() === origin.toLowerCase() &&
      p.parentCity.toLowerCase() === parentCity.toLowerCase()
  );
}

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
