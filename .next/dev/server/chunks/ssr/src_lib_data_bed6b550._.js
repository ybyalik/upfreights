module.exports = [
"[project]/src/lib/data/pricing.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Sea Freight FCL Pricing Data
 * China to US & Canada Container Rates
 * Last Updated: May 15th - May 31th
 *
 * Note: These prices are subject to change based on market conditions.
 * Contact us for the most up-to-date pricing.
 */ __turbopack_context__.s([
    "formatPrice",
    ()=>formatPrice,
    "getFastestTransitTime",
    ()=>getFastestTransitTime,
    "getLowestPrice40GP",
    ()=>getLowestPrice40GP,
    "getLowestPrice40HQ",
    ()=>getLowestPrice40HQ,
    "getRoutePricing",
    ()=>getRoutePricing,
    "seaFreightPricing",
    ()=>seaFreightPricing
]);
const seaFreightPricing = [
    // ============ SHANGHAI ============
    // Shanghai to Los Angeles
    {
        origin: 'Shanghai',
        destination: 'Los Angeles',
        rates: [
            {
                carrier: 'EMC',
                price40GP: 3012,
                price40HQ: 3012,
                transitTime: 13
            },
            {
                carrier: 'COSCO',
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 15
            },
            {
                carrier: 'SML',
                price40GP: 2800,
                price40HQ: 2800,
                transitTime: 18
            },
            {
                carrier: 'HMM',
                price40GP: 2800,
                price40HQ: 2800,
                transitTime: 20
            }
        ]
    },
    // Shanghai to Long Beach
    {
        origin: 'Shanghai',
        destination: 'Long Beach',
        rates: [
            {
                carrier: 'EMC',
                price40GP: 3012,
                price40HQ: 3012,
                transitTime: 14
            },
            {
                carrier: 'COSCO',
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 16
            },
            {
                carrier: 'SML',
                price40GP: 2800,
                price40HQ: 2800,
                transitTime: 19
            },
            {
                carrier: 'HMM',
                price40GP: 2850,
                price40HQ: 2850,
                transitTime: 21
            }
        ]
    },
    // Shanghai to New York
    {
        origin: 'Shanghai',
        destination: 'New York',
        rates: [
            {
                carrier: 'EMC',
                price40GP: 3800,
                price40HQ: 3800,
                transitTime: 30
            },
            {
                carrier: 'COSCO',
                price40GP: 3900,
                price40HQ: 3900,
                transitTime: 32
            },
            {
                carrier: 'CMA',
                price40GP: 3700,
                price40HQ: 3700,
                transitTime: 35
            }
        ]
    },
    // Shanghai to Savannah
    {
        origin: 'Shanghai',
        destination: 'Savannah',
        rates: [
            {
                carrier: 'EMC',
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 28
            },
            {
                carrier: 'COSCO',
                price40GP: 3700,
                price40HQ: 3700,
                transitTime: 30
            },
            {
                carrier: 'CMA',
                price40GP: 3500,
                price40HQ: 3500,
                transitTime: 33
            }
        ]
    },
    // ============ NINGBO ============
    // Ningbo to Los Angeles
    {
        origin: 'Ningbo',
        destination: 'Los Angeles',
        rates: [
            {
                carrier: 'EMC',
                price40GP: 2962,
                price40HQ: 2962,
                transitTime: 14
            },
            {
                carrier: 'COSCO',
                price40GP: 3050,
                price40HQ: 3050,
                transitTime: 16
            },
            {
                carrier: 'SML',
                price40GP: 2750,
                price40HQ: 2750,
                transitTime: 19
            },
            {
                carrier: 'HMM',
                price40GP: 2750,
                price40HQ: 2750,
                transitTime: 21
            }
        ]
    },
    // Ningbo to Long Beach
    {
        origin: 'Ningbo',
        destination: 'Long Beach',
        rates: [
            {
                carrier: 'EMC',
                price40GP: 2962,
                price40HQ: 2962,
                transitTime: 15
            },
            {
                carrier: 'COSCO',
                price40GP: 3050,
                price40HQ: 3050,
                transitTime: 17
            },
            {
                carrier: 'SML',
                price40GP: 2750,
                price40HQ: 2750,
                transitTime: 20
            },
            {
                carrier: 'HMM',
                price40GP: 2800,
                price40HQ: 2800,
                transitTime: 22
            }
        ]
    },
    // Ningbo to New York
    {
        origin: 'Ningbo',
        destination: 'New York',
        rates: [
            {
                carrier: 'EMC',
                price40GP: 3750,
                price40HQ: 3750,
                transitTime: 31
            },
            {
                carrier: 'COSCO',
                price40GP: 3850,
                price40HQ: 3850,
                transitTime: 33
            },
            {
                carrier: 'CMA',
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 36
            }
        ]
    },
    // Ningbo to Savannah
    {
        origin: 'Ningbo',
        destination: 'Savannah',
        rates: [
            {
                carrier: 'EMC',
                price40GP: 3550,
                price40HQ: 3550,
                transitTime: 29
            },
            {
                carrier: 'COSCO',
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 31
            },
            {
                carrier: 'CMA',
                price40GP: 3450,
                price40HQ: 3450,
                transitTime: 34
            }
        ]
    },
    // ============ QINGDAO ============
    // Qingdao to Los Angeles
    {
        origin: 'Qingdao',
        destination: 'Los Angeles',
        rates: [
            {
                carrier: 'EMC',
                price40GP: 2912,
                price40HQ: 2912,
                transitTime: 16
            },
            {
                carrier: 'COSCO',
                price40GP: 3000,
                price40HQ: 3000,
                transitTime: 18
            },
            {
                carrier: 'SML',
                price40GP: 2700,
                price40HQ: 2700,
                transitTime: 21
            },
            {
                carrier: 'HMM',
                price40GP: 2700,
                price40HQ: 2700,
                transitTime: 23
            }
        ]
    },
    // Qingdao to Long Beach
    {
        origin: 'Qingdao',
        destination: 'Long Beach',
        rates: [
            {
                carrier: 'EMC',
                price40GP: 2912,
                price40HQ: 2912,
                transitTime: 17
            },
            {
                carrier: 'COSCO',
                price40GP: 3000,
                price40HQ: 3000,
                transitTime: 19
            },
            {
                carrier: 'SML',
                price40GP: 2700,
                price40HQ: 2700,
                transitTime: 22
            },
            {
                carrier: 'HMM',
                price40GP: 2750,
                price40HQ: 2750,
                transitTime: 24
            }
        ]
    },
    // Qingdao to New York
    {
        origin: 'Qingdao',
        destination: 'New York',
        rates: [
            {
                carrier: 'EMC',
                price40GP: 3700,
                price40HQ: 3700,
                transitTime: 33
            },
            {
                carrier: 'COSCO',
                price40GP: 3800,
                price40HQ: 3800,
                transitTime: 35
            },
            {
                carrier: 'CMA',
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 38
            }
        ]
    },
    // Qingdao to Savannah
    {
        origin: 'Qingdao',
        destination: 'Savannah',
        rates: [
            {
                carrier: 'EMC',
                price40GP: 3500,
                price40HQ: 3500,
                transitTime: 31
            },
            {
                carrier: 'COSCO',
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 33
            },
            {
                carrier: 'CMA',
                price40GP: 3400,
                price40HQ: 3400,
                transitTime: 36
            }
        ]
    },
    // ============ TIANJIN ============
    // Tianjin to Los Angeles
    {
        origin: 'Tianjin',
        destination: 'Los Angeles',
        rates: [
            {
                carrier: 'EMC',
                price40GP: 2862,
                price40HQ: 2862,
                transitTime: 18
            },
            {
                carrier: 'COSCO',
                price40GP: 2950,
                price40HQ: 2950,
                transitTime: 20
            }
        ]
    },
    // Tianjin to Long Beach
    {
        origin: 'Tianjin',
        destination: 'Long Beach',
        rates: [
            {
                carrier: 'EMC',
                price40GP: 2862,
                price40HQ: 2862,
                transitTime: 19
            },
            {
                carrier: 'COSCO',
                price40GP: 2950,
                price40HQ: 2950,
                transitTime: 21
            }
        ]
    },
    // Tianjin to New York
    {
        origin: 'Tianjin',
        destination: 'New York',
        rates: [
            {
                carrier: 'EMC',
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 35
            },
            {
                carrier: 'COSCO',
                price40GP: 3750,
                price40HQ: 3750,
                transitTime: 37
            }
        ]
    },
    // Tianjin to Savannah
    {
        origin: 'Tianjin',
        destination: 'Savannah',
        rates: [
            {
                carrier: 'EMC',
                price40GP: 3450,
                price40HQ: 3450,
                transitTime: 33
            },
            {
                carrier: 'COSCO',
                price40GP: 3550,
                price40HQ: 3550,
                transitTime: 35
            }
        ]
    },
    // ============ CANADA ROUTES ============
    // Shanghai to Vancouver
    {
        origin: 'Shanghai',
        destination: 'Vancouver',
        rates: [
            {
                carrier: 'PN3',
                price40GP: 1600,
                price40HQ: 1600,
                transitTime: 14
            }
        ]
    },
    // Shanghai to Toronto
    {
        origin: 'Shanghai',
        destination: 'Toronto',
        rates: [
            {
                carrier: 'PN3',
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 25
            }
        ]
    },
    // Shanghai to Montreal
    {
        origin: 'Shanghai',
        destination: 'Montreal',
        rates: [
            {
                carrier: 'PN3',
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 25
            }
        ]
    },
    // Shanghai to Calgary
    {
        origin: 'Shanghai',
        destination: 'Calgary',
        rates: [
            {
                carrier: 'PN3',
                price40GP: 3050,
                price40HQ: 3050,
                transitTime: 20
            }
        ]
    },
    // Shanghai to Edmonton
    {
        origin: 'Shanghai',
        destination: 'Edmonton',
        rates: [
            {
                carrier: 'PN3',
                price40GP: 3050,
                price40HQ: 3050,
                transitTime: 20
            }
        ]
    },
    // Ningbo to Vancouver
    {
        origin: 'Ningbo',
        destination: 'Vancouver',
        rates: [
            {
                carrier: 'PN3',
                price40GP: 1600,
                price40HQ: 1600,
                transitTime: 14
            }
        ]
    },
    // Ningbo to Toronto
    {
        origin: 'Ningbo',
        destination: 'Toronto',
        rates: [
            {
                carrier: 'PN3',
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 25
            }
        ]
    },
    // Ningbo to Montreal
    {
        origin: 'Ningbo',
        destination: 'Montreal',
        rates: [
            {
                carrier: 'PN3',
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 25
            }
        ]
    },
    // Ningbo to Calgary
    {
        origin: 'Ningbo',
        destination: 'Calgary',
        rates: [
            {
                carrier: 'PN3',
                price40GP: 3050,
                price40HQ: 3050,
                transitTime: 20
            }
        ]
    },
    // Ningbo to Edmonton
    {
        origin: 'Ningbo',
        destination: 'Edmonton',
        rates: [
            {
                carrier: 'PN3',
                price40GP: 3050,
                price40HQ: 3050,
                transitTime: 20
            }
        ]
    },
    // Qingdao to Vancouver
    {
        origin: 'Qingdao',
        destination: 'Vancouver',
        rates: [
            {
                carrier: 'PN3',
                price40GP: 1600,
                price40HQ: 1600,
                transitTime: 15
            }
        ]
    },
    // Qingdao to Toronto
    {
        origin: 'Qingdao',
        destination: 'Toronto',
        rates: [
            {
                carrier: 'PN3',
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 26
            }
        ]
    },
    // Qingdao to Montreal
    {
        origin: 'Qingdao',
        destination: 'Montreal',
        rates: [
            {
                carrier: 'PN3',
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 26
            }
        ]
    },
    // Qingdao to Calgary
    {
        origin: 'Qingdao',
        destination: 'Calgary',
        rates: [
            {
                carrier: 'PN3',
                price40GP: 3050,
                price40HQ: 3050,
                transitTime: 21
            }
        ]
    },
    // Qingdao to Edmonton
    {
        origin: 'Qingdao',
        destination: 'Edmonton',
        rates: [
            {
                carrier: 'PN3',
                price40GP: 3050,
                price40HQ: 3050,
                transitTime: 21
            }
        ]
    },
    // ============ ADDITIONAL US ROUTES (from extended rate sheet) ============
    // Shanghai to Chicago
    {
        origin: 'Shanghai',
        destination: 'Chicago',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4200,
                price40HQ: 4400,
                transitTime: 25
            }
        ]
    },
    // Shanghai to Dallas
    {
        origin: 'Shanghai',
        destination: 'Dallas',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4500,
                price40HQ: 4700,
                transitTime: 28
            }
        ]
    },
    // Shanghai to Atlanta
    {
        origin: 'Shanghai',
        destination: 'Atlanta',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4300,
                price40HQ: 4500,
                transitTime: 26
            }
        ]
    },
    // Shanghai to Miami
    {
        origin: 'Shanghai',
        destination: 'Miami',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4600,
                price40HQ: 4800,
                transitTime: 30
            }
        ]
    },
    // Shanghai to Houston
    {
        origin: 'Shanghai',
        destination: 'Houston',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4400,
                price40HQ: 4600,
                transitTime: 28
            }
        ]
    },
    // Shanghai to Seattle
    {
        origin: 'Shanghai',
        destination: 'Seattle',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 2900,
                price40HQ: 3100,
                transitTime: 12
            }
        ]
    },
    // Shanghai to Oakland
    {
        origin: 'Shanghai',
        destination: 'Oakland',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3000,
                price40HQ: 3200,
                transitTime: 14
            }
        ]
    },
    // Shanghai to San Francisco
    {
        origin: 'Shanghai',
        destination: 'San Francisco',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3000,
                price40HQ: 3200,
                transitTime: 14
            }
        ]
    },
    // Ningbo to Chicago
    {
        origin: 'Ningbo',
        destination: 'Chicago',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4150,
                price40HQ: 4350,
                transitTime: 26
            }
        ]
    },
    // Ningbo to Dallas
    {
        origin: 'Ningbo',
        destination: 'Dallas',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4450,
                price40HQ: 4650,
                transitTime: 29
            }
        ]
    },
    // Ningbo to Atlanta
    {
        origin: 'Ningbo',
        destination: 'Atlanta',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4250,
                price40HQ: 4450,
                transitTime: 27
            }
        ]
    },
    // Ningbo to Miami
    {
        origin: 'Ningbo',
        destination: 'Miami',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4550,
                price40HQ: 4750,
                transitTime: 31
            }
        ]
    },
    // Ningbo to Houston
    {
        origin: 'Ningbo',
        destination: 'Houston',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4350,
                price40HQ: 4550,
                transitTime: 29
            }
        ]
    },
    // Ningbo to Seattle
    {
        origin: 'Ningbo',
        destination: 'Seattle',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 2850,
                price40HQ: 3050,
                transitTime: 13
            }
        ]
    },
    // Ningbo to Oakland
    {
        origin: 'Ningbo',
        destination: 'Oakland',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 2950,
                price40HQ: 3150,
                transitTime: 15
            }
        ]
    },
    // Ningbo to San Francisco
    {
        origin: 'Ningbo',
        destination: 'San Francisco',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 2950,
                price40HQ: 3150,
                transitTime: 15
            }
        ]
    },
    // Qingdao to Chicago
    {
        origin: 'Qingdao',
        destination: 'Chicago',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4100,
                price40HQ: 4300,
                transitTime: 27
            }
        ]
    },
    // Qingdao to Dallas
    {
        origin: 'Qingdao',
        destination: 'Dallas',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4400,
                price40HQ: 4600,
                transitTime: 30
            }
        ]
    },
    // Qingdao to Atlanta
    {
        origin: 'Qingdao',
        destination: 'Atlanta',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4200,
                price40HQ: 4400,
                transitTime: 28
            }
        ]
    },
    // Qingdao to Miami
    {
        origin: 'Qingdao',
        destination: 'Miami',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4500,
                price40HQ: 4700,
                transitTime: 32
            }
        ]
    },
    // Qingdao to Houston
    {
        origin: 'Qingdao',
        destination: 'Houston',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4300,
                price40HQ: 4500,
                transitTime: 30
            }
        ]
    },
    // Qingdao to Seattle
    {
        origin: 'Qingdao',
        destination: 'Seattle',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 2800,
                price40HQ: 3000,
                transitTime: 14
            }
        ]
    },
    // Qingdao to Oakland
    {
        origin: 'Qingdao',
        destination: 'Oakland',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 2900,
                price40HQ: 3100,
                transitTime: 16
            }
        ]
    },
    // Qingdao to San Francisco
    {
        origin: 'Qingdao',
        destination: 'San Francisco',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 2900,
                price40HQ: 3100,
                transitTime: 16
            }
        ]
    },
    // Shenzhen to Los Angeles
    {
        origin: 'Shenzhen',
        destination: 'Los Angeles',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3050,
                price40HQ: 3050,
                transitTime: 14
            }
        ]
    },
    // Shenzhen to Long Beach
    {
        origin: 'Shenzhen',
        destination: 'Long Beach',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3050,
                price40HQ: 3050,
                transitTime: 14
            }
        ]
    },
    // Shenzhen to New York
    {
        origin: 'Shenzhen',
        destination: 'New York',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3850,
                price40HQ: 3850,
                transitTime: 31
            }
        ]
    },
    // Shenzhen to Savannah
    {
        origin: 'Shenzhen',
        destination: 'Savannah',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 29
            }
        ]
    },
    // Shenzhen to Chicago
    {
        origin: 'Shenzhen',
        destination: 'Chicago',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4250,
                price40HQ: 4450,
                transitTime: 26
            }
        ]
    },
    // Shenzhen to Dallas
    {
        origin: 'Shenzhen',
        destination: 'Dallas',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4550,
                price40HQ: 4750,
                transitTime: 29
            }
        ]
    },
    // Shenzhen to Atlanta
    {
        origin: 'Shenzhen',
        destination: 'Atlanta',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4350,
                price40HQ: 4550,
                transitTime: 27
            }
        ]
    },
    // Shenzhen to Miami
    {
        origin: 'Shenzhen',
        destination: 'Miami',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4650,
                price40HQ: 4850,
                transitTime: 31
            }
        ]
    },
    // Shenzhen to Houston
    {
        origin: 'Shenzhen',
        destination: 'Houston',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4450,
                price40HQ: 4650,
                transitTime: 29
            }
        ]
    },
    // Shenzhen to Seattle
    {
        origin: 'Shenzhen',
        destination: 'Seattle',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 2950,
                price40HQ: 3150,
                transitTime: 13
            }
        ]
    },
    // Shenzhen to Oakland
    {
        origin: 'Shenzhen',
        destination: 'Oakland',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3050,
                price40HQ: 3250,
                transitTime: 15
            }
        ]
    },
    // Shenzhen to San Francisco
    {
        origin: 'Shenzhen',
        destination: 'San Francisco',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3050,
                price40HQ: 3250,
                transitTime: 15
            }
        ]
    },
    // Guangzhou to Los Angeles
    {
        origin: 'Guangzhou',
        destination: 'Los Angeles',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 15
            }
        ]
    },
    // Guangzhou to Long Beach
    {
        origin: 'Guangzhou',
        destination: 'Long Beach',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 15
            }
        ]
    },
    // Guangzhou to New York
    {
        origin: 'Guangzhou',
        destination: 'New York',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3900,
                price40HQ: 3900,
                transitTime: 32
            }
        ]
    },
    // Guangzhou to Savannah
    {
        origin: 'Guangzhou',
        destination: 'Savannah',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3700,
                price40HQ: 3700,
                transitTime: 30
            }
        ]
    },
    // Guangzhou to Chicago
    {
        origin: 'Guangzhou',
        destination: 'Chicago',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4300,
                price40HQ: 4500,
                transitTime: 27
            }
        ]
    },
    // Guangzhou to Dallas
    {
        origin: 'Guangzhou',
        destination: 'Dallas',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4600,
                price40HQ: 4800,
                transitTime: 30
            }
        ]
    },
    // Guangzhou to Atlanta
    {
        origin: 'Guangzhou',
        destination: 'Atlanta',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4400,
                price40HQ: 4600,
                transitTime: 28
            }
        ]
    },
    // Guangzhou to Miami
    {
        origin: 'Guangzhou',
        destination: 'Miami',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4700,
                price40HQ: 4900,
                transitTime: 32
            }
        ]
    },
    // Guangzhou to Houston
    {
        origin: 'Guangzhou',
        destination: 'Houston',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4500,
                price40HQ: 4700,
                transitTime: 30
            }
        ]
    },
    // Guangzhou to Seattle
    {
        origin: 'Guangzhou',
        destination: 'Seattle',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3000,
                price40HQ: 3200,
                transitTime: 14
            }
        ]
    },
    // Guangzhou to Oakland
    {
        origin: 'Guangzhou',
        destination: 'Oakland',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3100,
                price40HQ: 3300,
                transitTime: 16
            }
        ]
    },
    // Guangzhou to San Francisco
    {
        origin: 'Guangzhou',
        destination: 'San Francisco',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3100,
                price40HQ: 3300,
                transitTime: 16
            }
        ]
    },
    // Xiamen to Los Angeles
    {
        origin: 'Xiamen',
        destination: 'Los Angeles',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3000,
                price40HQ: 3000,
                transitTime: 15
            }
        ]
    },
    // Xiamen to Long Beach
    {
        origin: 'Xiamen',
        destination: 'Long Beach',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3000,
                price40HQ: 3000,
                transitTime: 15
            }
        ]
    },
    // Xiamen to New York
    {
        origin: 'Xiamen',
        destination: 'New York',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3800,
                price40HQ: 3800,
                transitTime: 31
            }
        ]
    },
    // Xiamen to Savannah
    {
        origin: 'Xiamen',
        destination: 'Savannah',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 29
            }
        ]
    },
    // Xiamen to Chicago
    {
        origin: 'Xiamen',
        destination: 'Chicago',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4200,
                price40HQ: 4400,
                transitTime: 26
            }
        ]
    },
    // Xiamen to Dallas
    {
        origin: 'Xiamen',
        destination: 'Dallas',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4500,
                price40HQ: 4700,
                transitTime: 29
            }
        ]
    },
    // Xiamen to Atlanta
    {
        origin: 'Xiamen',
        destination: 'Atlanta',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4300,
                price40HQ: 4500,
                transitTime: 27
            }
        ]
    },
    // Xiamen to Miami
    {
        origin: 'Xiamen',
        destination: 'Miami',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4600,
                price40HQ: 4800,
                transitTime: 31
            }
        ]
    },
    // Xiamen to Houston
    {
        origin: 'Xiamen',
        destination: 'Houston',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 4400,
                price40HQ: 4600,
                transitTime: 29
            }
        ]
    },
    // Xiamen to Seattle
    {
        origin: 'Xiamen',
        destination: 'Seattle',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 2900,
                price40HQ: 3100,
                transitTime: 13
            }
        ]
    },
    // Xiamen to Oakland
    {
        origin: 'Xiamen',
        destination: 'Oakland',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3000,
                price40HQ: 3200,
                transitTime: 15
            }
        ]
    },
    // Xiamen to San Francisco
    {
        origin: 'Xiamen',
        destination: 'San Francisco',
        rates: [
            {
                carrier: 'OAC',
                price40GP: 3000,
                price40HQ: 3200,
                transitTime: 15
            }
        ]
    },
    // ============ CANADA - REGINA & WINNIPEG ROUTES ============
    // Shanghai to Regina
    {
        origin: 'Shanghai',
        destination: 'Regina',
        rates: [
            {
                carrier: 'A',
                price40GP: 4300,
                price40HQ: 4300,
                transitTime: 25
            },
            {
                carrier: 'FP2',
                price40GP: 4250,
                price40HQ: 4250,
                transitTime: 26
            },
            {
                carrier: 'PN3',
                price40GP: 4250,
                price40HQ: 4250,
                transitTime: 24
            }
        ]
    },
    // Shanghai to Winnipeg
    {
        origin: 'Shanghai',
        destination: 'Winnipeg',
        rates: [
            {
                carrier: 'A',
                price40GP: 4300,
                price40HQ: 4300,
                transitTime: 25
            },
            {
                carrier: 'FP2',
                price40GP: 4250,
                price40HQ: 4250,
                transitTime: 26
            },
            {
                carrier: 'FP2-Voyage',
                price40GP: 4150,
                price40HQ: 4150,
                transitTime: 28
            },
            {
                carrier: 'PN3',
                price40GP: 4250,
                price40HQ: 4250,
                transitTime: 24
            }
        ]
    },
    // Ningbo to Regina
    {
        origin: 'Ningbo',
        destination: 'Regina',
        rates: [
            {
                carrier: 'A',
                price40GP: 4300,
                price40HQ: 4300,
                transitTime: 26
            },
            {
                carrier: 'PN1',
                price40GP: 4250,
                price40HQ: 4250,
                transitTime: 27
            },
            {
                carrier: 'PN3',
                price40GP: 4250,
                price40HQ: 4250,
                transitTime: 25
            }
        ]
    },
    // Ningbo to Winnipeg
    {
        origin: 'Ningbo',
        destination: 'Winnipeg',
        rates: [
            {
                carrier: 'A',
                price40GP: 4300,
                price40HQ: 4300,
                transitTime: 26
            },
            {
                carrier: 'PN1',
                price40GP: 4250,
                price40HQ: 4250,
                transitTime: 27
            },
            {
                carrier: 'PN3',
                price40GP: 4250,
                price40HQ: 4250,
                transitTime: 25
            }
        ]
    },
    // Qingdao to Regina
    {
        origin: 'Qingdao',
        destination: 'Regina',
        rates: [
            {
                carrier: 'A',
                price40GP: 4300,
                price40HQ: 4300,
                transitTime: 27
            },
            {
                carrier: 'PN3',
                price40GP: 4250,
                price40HQ: 4250,
                transitTime: 26
            }
        ]
    },
    // Qingdao to Winnipeg
    {
        origin: 'Qingdao',
        destination: 'Winnipeg',
        rates: [
            {
                carrier: 'A',
                price40GP: 4300,
                price40HQ: 4300,
                transitTime: 27
            },
            {
                carrier: 'PN3',
                price40GP: 4250,
                price40HQ: 4250,
                transitTime: 26
            }
        ]
    },
    // Xiamen to Regina
    {
        origin: 'Xiamen',
        destination: 'Regina',
        rates: [
            {
                carrier: 'A',
                price40GP: 4300,
                price40HQ: 4300,
                transitTime: 26
            },
            {
                carrier: 'PN1',
                price40GP: 4250,
                price40HQ: 4250,
                transitTime: 27
            }
        ]
    },
    // Xiamen to Winnipeg
    {
        origin: 'Xiamen',
        destination: 'Winnipeg',
        rates: [
            {
                carrier: 'A',
                price40GP: 4300,
                price40HQ: 4300,
                transitTime: 26
            },
            {
                carrier: 'PN1',
                price40GP: 4250,
                price40HQ: 4250,
                transitTime: 27
            }
        ]
    },
    // ==========================================
    // EUROPEAN ROUTES
    // ==========================================
    // Shanghai to Rotterdam (Netherlands)
    {
        origin: 'Shanghai',
        destination: 'Rotterdam',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 42
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 45
            }
        ]
    },
    // Shanghai to Hamburg (Germany)
    {
        origin: 'Shanghai',
        destination: 'Hamburg',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 46
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 48
            }
        ]
    },
    // Shanghai to Southampton (UK)
    {
        origin: 'Shanghai',
        destination: 'Southampton',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 40
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 42
            }
        ]
    },
    // Shanghai to Felixstowe (UK)
    {
        origin: 'Shanghai',
        destination: 'Felixstowe',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 45
            }
        ]
    },
    // Shenzhen to Rotterdam (Netherlands)
    {
        origin: 'Shenzhen',
        destination: 'Rotterdam',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 44
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 46
            }
        ]
    },
    // Shenzhen to Hamburg (Germany)
    {
        origin: 'Shenzhen',
        destination: 'Hamburg',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 48
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 50
            }
        ]
    },
    // Shenzhen to Southampton (UK)
    {
        origin: 'Shenzhen',
        destination: 'Southampton',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 42
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 44
            }
        ]
    },
    // Shenzhen to Felixstowe (UK)
    {
        origin: 'Shenzhen',
        destination: 'Felixstowe',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 45
            }
        ]
    },
    // Guangzhou to Rotterdam (Netherlands)
    {
        origin: 'Guangzhou',
        destination: 'Rotterdam',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 44
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 46
            }
        ]
    },
    // Guangzhou to Hamburg (Germany)
    {
        origin: 'Guangzhou',
        destination: 'Hamburg',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 48
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 50
            }
        ]
    },
    // Guangzhou to Southampton (UK)
    {
        origin: 'Guangzhou',
        destination: 'Southampton',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 42
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 44
            }
        ]
    },
    // Guangzhou to Felixstowe (UK)
    {
        origin: 'Guangzhou',
        destination: 'Felixstowe',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 45
            }
        ]
    },
    // Ningbo to Rotterdam (Netherlands)
    {
        origin: 'Ningbo',
        destination: 'Rotterdam',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 43
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 45
            }
        ]
    },
    // Ningbo to Hamburg (Germany)
    {
        origin: 'Ningbo',
        destination: 'Hamburg',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 47
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 49
            }
        ]
    },
    // Ningbo to Southampton (UK)
    {
        origin: 'Ningbo',
        destination: 'Southampton',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 41
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 43
            }
        ]
    },
    // Ningbo to Felixstowe (UK)
    {
        origin: 'Ningbo',
        destination: 'Felixstowe',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 45
            }
        ]
    },
    // Qingdao to Rotterdam (Netherlands)
    {
        origin: 'Qingdao',
        destination: 'Rotterdam',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 45
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 47
            }
        ]
    },
    // Qingdao to Hamburg (Germany)
    {
        origin: 'Qingdao',
        destination: 'Hamburg',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 49
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 51
            }
        ]
    },
    // Qingdao to Southampton (UK)
    {
        origin: 'Qingdao',
        destination: 'Southampton',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 43
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 45
            }
        ]
    },
    // Qingdao to Felixstowe (UK)
    {
        origin: 'Qingdao',
        destination: 'Felixstowe',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 45
            }
        ]
    },
    // Tianjin to Rotterdam (Netherlands)
    {
        origin: 'Tianjin',
        destination: 'Rotterdam',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 46
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 48
            }
        ]
    },
    // Tianjin to Hamburg (Germany)
    {
        origin: 'Tianjin',
        destination: 'Hamburg',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 50
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 52
            }
        ]
    },
    // Tianjin to Southampton (UK)
    {
        origin: 'Tianjin',
        destination: 'Southampton',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 44
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 46
            }
        ]
    },
    // Tianjin to Felixstowe (UK)
    {
        origin: 'Tianjin',
        destination: 'Felixstowe',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 45
            }
        ]
    },
    // Xiamen to Rotterdam (Netherlands)
    {
        origin: 'Xiamen',
        destination: 'Rotterdam',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 43
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 45
            }
        ]
    },
    // Xiamen to Hamburg (Germany)
    {
        origin: 'Xiamen',
        destination: 'Hamburg',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 47
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 49
            }
        ]
    },
    // Xiamen to Southampton (UK)
    {
        origin: 'Xiamen',
        destination: 'Southampton',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 41
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 43
            }
        ]
    },
    // Xiamen to Felixstowe (UK)
    {
        origin: 'Xiamen',
        destination: 'Felixstowe',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 45
            }
        ]
    },
    // Hong Kong to Rotterdam (Netherlands)
    {
        origin: 'Hong Kong',
        destination: 'Rotterdam',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 42
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 44
            }
        ]
    },
    // Hong Kong to Hamburg (Germany)
    {
        origin: 'Hong Kong',
        destination: 'Hamburg',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 46
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 48
            }
        ]
    },
    // Hong Kong to Southampton (UK)
    {
        origin: 'Hong Kong',
        destination: 'Southampton',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 40
            },
            {
                carrier: 'Maersk',
                price40GP: 1700,
                price40HQ: 1700,
                transitTime: 42
            }
        ]
    },
    // Hong Kong to Felixstowe (UK)
    {
        origin: 'Hong Kong',
        destination: 'Felixstowe',
        rates: [
            {
                carrier: 'MSC',
                price40GP: 1650,
                price40HQ: 1650,
                transitTime: 45
            }
        ]
    },
    // ==========================================
    // ITALY ROUTES (Trieste)
    // ==========================================
    // Shanghai to Trieste
    {
        origin: 'Shanghai',
        destination: 'Trieste',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 42
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'MSK',
                price20GP: 2170,
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 42
            }
        ]
    },
    // Ningbo to Trieste
    {
        origin: 'Ningbo',
        destination: 'Trieste',
        rates: [
            {
                carrier: 'EMC',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 55
            },
            {
                carrier: 'ONE',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 51
            },
            {
                carrier: 'MSK',
                price20GP: 2170,
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 50
            }
        ]
    },
    // Shenzhen to Trieste
    {
        origin: 'Shenzhen',
        destination: 'Trieste',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 40
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 40
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 40
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'MSK',
                price20GP: 2170,
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 42
            }
        ]
    },
    // Qingdao to Trieste
    {
        origin: 'Qingdao',
        destination: 'Trieste',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'EMC',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 60
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 64
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'MSK',
                price20GP: 2170,
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 55
            }
        ]
    },
    // Xiamen to Trieste
    {
        origin: 'Xiamen',
        destination: 'Trieste',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 62
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'MSK',
                price20GP: 2170,
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 48
            }
        ]
    },
    // Guangzhou to Trieste
    {
        origin: 'Guangzhou',
        destination: 'Trieste',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 52
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'MSK',
                price20GP: 2100,
                price40GP: 3000,
                price40HQ: 3000,
                transitTime: 45
            }
        ]
    },
    // Tianjin to Trieste
    {
        origin: 'Tianjin',
        destination: 'Trieste',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 65
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 63
            },
            {
                carrier: 'MSK',
                price20GP: 2170,
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 55
            }
        ]
    },
    // Hong Kong to Trieste
    {
        origin: 'Hong Kong',
        destination: 'Trieste',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 42
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 45
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 45
            },
            {
                carrier: 'MSK',
                price20GP: 2170,
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 42
            }
        ]
    },
    // ==========================================
    // ITALY ROUTES (Naples)
    // ==========================================
    // Shanghai to Naples
    {
        origin: 'Shanghai',
        destination: 'Naples',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 58
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 58
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 58
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 53
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 59
            },
            {
                carrier: 'MSK',
                price20GP: 2520,
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 45
            }
        ]
    },
    // Ningbo to Naples
    {
        origin: 'Ningbo',
        destination: 'Naples',
        rates: [
            {
                carrier: 'EMC',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 58
            },
            {
                carrier: 'ONE',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 51
            },
            {
                carrier: 'MSK',
                price20GP: 2520,
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 50
            }
        ]
    },
    // Shenzhen to Naples
    {
        origin: 'Shenzhen',
        destination: 'Naples',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 50
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'MSK',
                price20GP: 2520,
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 42
            }
        ]
    },
    // Qingdao to Naples
    {
        origin: 'Qingdao',
        destination: 'Naples',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'EMC',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 60
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 64
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'MSK',
                price20GP: 2520,
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 55
            }
        ]
    },
    // Xiamen to Naples
    {
        origin: 'Xiamen',
        destination: 'Naples',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 62
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'MSK',
                price20GP: 2520,
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 48
            }
        ]
    },
    // Guangzhou to Naples
    {
        origin: 'Guangzhou',
        destination: 'Naples',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 58
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 58
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 58
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 53
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 59
            },
            {
                carrier: 'MSK',
                price20GP: 2450,
                price40GP: 3500,
                price40HQ: 3500,
                transitTime: 48
            }
        ]
    },
    // Tianjin to Naples
    {
        origin: 'Tianjin',
        destination: 'Naples',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 65
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 63
            },
            {
                carrier: 'MSK',
                price20GP: 2520,
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 55
            }
        ]
    },
    // Hong Kong to Naples
    {
        origin: 'Hong Kong',
        destination: 'Naples',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 58
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 58
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 58
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 53
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 59
            },
            {
                carrier: 'MSK',
                price20GP: 2520,
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 42
            }
        ]
    },
    // ==========================================
    // ITALY ROUTES (La Spezia)
    // ==========================================
    // Shanghai to La Spezia
    {
        origin: 'Shanghai',
        destination: 'La Spezia',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 52
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 48
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 42
            }
        ]
    },
    // Ningbo to La Spezia
    {
        origin: 'Ningbo',
        destination: 'La Spezia',
        rates: [
            {
                carrier: 'EMC',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'ONE',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 48
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 48
            }
        ]
    },
    // Shenzhen to La Spezia
    {
        origin: 'Shenzhen',
        destination: 'La Spezia',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 40
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 40
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 40
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 42
            }
        ]
    },
    // Qingdao to La Spezia
    {
        origin: 'Qingdao',
        destination: 'La Spezia',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'EMC',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 60
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 64
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 52
            }
        ]
    },
    // Xiamen to La Spezia
    {
        origin: 'Xiamen',
        destination: 'La Spezia',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 62
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 45
            }
        ]
    },
    // Guangzhou to La Spezia
    {
        origin: 'Guangzhou',
        destination: 'La Spezia',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 52
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'MSK',
                price20GP: 2240,
                price40GP: 3200,
                price40HQ: 3200,
                transitTime: 45
            }
        ]
    },
    // Tianjin to La Spezia
    {
        origin: 'Tianjin',
        destination: 'La Spezia',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 65
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 63
            },
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 52
            }
        ]
    },
    // Hong Kong to La Spezia
    {
        origin: 'Hong Kong',
        destination: 'La Spezia',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 42
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 45
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 45
            },
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 40
            }
        ]
    },
    // ==========================================
    // ITALY ROUTES (Venice)
    // ==========================================
    // Shanghai to Venice
    {
        origin: 'Shanghai',
        destination: 'Venice',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 52
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 48
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'MSK',
                price20GP: 2170,
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 42
            }
        ]
    },
    // Ningbo to Venice
    {
        origin: 'Ningbo',
        destination: 'Venice',
        rates: [
            {
                carrier: 'EMC',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'ONE',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 48
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'MSK',
                price20GP: 2170,
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 48
            }
        ]
    },
    // Shenzhen to Venice
    {
        origin: 'Shenzhen',
        destination: 'Venice',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 40
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 40
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 40
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'MSK',
                price20GP: 2170,
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 42
            }
        ]
    },
    // Qingdao to Venice
    {
        origin: 'Qingdao',
        destination: 'Venice',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'EMC',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 60
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 64
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'MSK',
                price20GP: 2170,
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 55
            }
        ]
    },
    // Xiamen to Venice
    {
        origin: 'Xiamen',
        destination: 'Venice',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 62
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'MSK',
                price20GP: 2170,
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 45
            }
        ]
    },
    // Guangzhou to Venice
    {
        origin: 'Guangzhou',
        destination: 'Venice',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 52
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'MSK',
                price20GP: 2100,
                price40GP: 3000,
                price40HQ: 3000,
                transitTime: 45
            }
        ]
    },
    // Tianjin to Venice
    {
        origin: 'Tianjin',
        destination: 'Venice',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 65
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 63
            },
            {
                carrier: 'MSK',
                price20GP: 2170,
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 55
            }
        ]
    },
    // Hong Kong to Venice
    {
        origin: 'Hong Kong',
        destination: 'Venice',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 42
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 45
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 45
            },
            {
                carrier: 'MSK',
                price20GP: 2170,
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 42
            }
        ]
    },
    // ==========================================
    // ITALY ROUTES (Genoa)
    // ==========================================
    // Shanghai to Genoa
    {
        origin: 'Shanghai',
        destination: 'Genoa',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 52
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 48
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 42
            }
        ]
    },
    // Ningbo to Genoa
    {
        origin: 'Ningbo',
        destination: 'Genoa',
        rates: [
            {
                carrier: 'EMC',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'ONE',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 48
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 48
            }
        ]
    },
    // Shenzhen to Genoa
    {
        origin: 'Shenzhen',
        destination: 'Genoa',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 40
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 40
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 40
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 50
            },
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 42
            }
        ]
    },
    // Qingdao to Genoa
    {
        origin: 'Qingdao',
        destination: 'Genoa',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'EMC',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 60
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 64
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 52
            }
        ]
    },
    // Xiamen to Genoa
    {
        origin: 'Xiamen',
        destination: 'Genoa',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 62
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 45
            }
        ]
    },
    // Guangzhou to Genoa
    {
        origin: 'Guangzhou',
        destination: 'Genoa',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 52
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 52
            },
            {
                carrier: 'MSK',
                price20GP: 2240,
                price40GP: 3200,
                price40HQ: 3200,
                transitTime: 45
            }
        ]
    },
    // Tianjin to Genoa
    {
        origin: 'Tianjin',
        destination: 'Genoa',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 62
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 65
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 60
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 63
            },
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 52
            }
        ]
    },
    // Hong Kong to Genoa
    {
        origin: 'Hong Kong',
        destination: 'Genoa',
        rates: [
            {
                carrier: 'CMA',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'OOCL',
                price20GP: 2000,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 42
            },
            {
                carrier: 'COSCO',
                price20GP: 2100,
                price40GP: 2600,
                price40HQ: 2600,
                transitTime: 42
            },
            {
                carrier: 'MSC',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 45
            },
            {
                carrier: 'MAERSK',
                price20GP: 1900,
                price40GP: 2500,
                price40HQ: 2500,
                transitTime: 45
            },
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 40
            }
        ]
    },
    // ==========================================
    // ITALY ROUTES (Ancona)
    // ==========================================
    // Shanghai to Ancona
    {
        origin: 'Shanghai',
        destination: 'Ancona',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2345,
                price40GP: 3350,
                price40HQ: 3350,
                transitTime: 45
            }
        ]
    },
    // Ningbo to Ancona
    {
        origin: 'Ningbo',
        destination: 'Ancona',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2345,
                price40GP: 3350,
                price40HQ: 3350,
                transitTime: 50
            }
        ]
    },
    // Tianjin to Ancona
    {
        origin: 'Tianjin',
        destination: 'Ancona',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2345,
                price40GP: 3350,
                price40HQ: 3350,
                transitTime: 55
            }
        ]
    },
    // Qingdao to Ancona
    {
        origin: 'Qingdao',
        destination: 'Ancona',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2345,
                price40GP: 3350,
                price40HQ: 3350,
                transitTime: 55
            }
        ]
    },
    // Dalian to Ancona
    {
        origin: 'Dalian',
        destination: 'Ancona',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2345,
                price40GP: 3350,
                price40HQ: 3350,
                transitTime: 58
            }
        ]
    },
    // Hong Kong to Ancona
    {
        origin: 'Hong Kong',
        destination: 'Ancona',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2345,
                price40GP: 3350,
                price40HQ: 3350,
                transitTime: 42
            }
        ]
    },
    // Xiamen to Ancona
    {
        origin: 'Xiamen',
        destination: 'Ancona',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2345,
                price40GP: 3350,
                price40HQ: 3350,
                transitTime: 48
            }
        ]
    },
    // Shenzhen to Ancona
    {
        origin: 'Shenzhen',
        destination: 'Ancona',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2345,
                price40GP: 3350,
                price40HQ: 3350,
                transitTime: 43
            }
        ]
    },
    // ==========================================
    // ITALY ROUTES (Genoa Vado Ligure)
    // ==========================================
    // Shanghai to Genoa Vado Ligure
    {
        origin: 'Shanghai',
        destination: 'Genoa Vado Ligure',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2240,
                price40GP: 3200,
                price40HQ: 3200,
                transitTime: 42
            }
        ]
    },
    // Ningbo to Genoa Vado Ligure
    {
        origin: 'Ningbo',
        destination: 'Genoa Vado Ligure',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2240,
                price40GP: 3200,
                price40HQ: 3200,
                transitTime: 48
            }
        ]
    },
    // Tianjin to Genoa Vado Ligure
    {
        origin: 'Tianjin',
        destination: 'Genoa Vado Ligure',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2240,
                price40GP: 3200,
                price40HQ: 3200,
                transitTime: 52
            }
        ]
    },
    // Qingdao to Genoa Vado Ligure
    {
        origin: 'Qingdao',
        destination: 'Genoa Vado Ligure',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2240,
                price40GP: 3200,
                price40HQ: 3200,
                transitTime: 52
            }
        ]
    },
    // Dalian to Genoa Vado Ligure
    {
        origin: 'Dalian',
        destination: 'Genoa Vado Ligure',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2240,
                price40GP: 3200,
                price40HQ: 3200,
                transitTime: 55
            }
        ]
    },
    // Hong Kong to Genoa Vado Ligure
    {
        origin: 'Hong Kong',
        destination: 'Genoa Vado Ligure',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2240,
                price40GP: 3200,
                price40HQ: 3200,
                transitTime: 40
            }
        ]
    },
    // Xiamen to Genoa Vado Ligure
    {
        origin: 'Xiamen',
        destination: 'Genoa Vado Ligure',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2240,
                price40GP: 3200,
                price40HQ: 3200,
                transitTime: 45
            }
        ]
    },
    // Shenzhen to Genoa Vado Ligure
    {
        origin: 'Shenzhen',
        destination: 'Genoa Vado Ligure',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2240,
                price40GP: 3200,
                price40HQ: 3200,
                transitTime: 40
            }
        ]
    },
    // ==========================================
    // ITALY ROUTES (Cagliari)
    // ==========================================
    // Shanghai to Cagliari
    {
        origin: 'Shanghai',
        destination: 'Cagliari',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2552,
                price40GP: 3645,
                price40HQ: 3645,
                transitTime: 45
            }
        ]
    },
    // Ningbo to Cagliari
    {
        origin: 'Ningbo',
        destination: 'Cagliari',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2552,
                price40GP: 3645,
                price40HQ: 3645,
                transitTime: 50
            }
        ]
    },
    // Tianjin to Cagliari
    {
        origin: 'Tianjin',
        destination: 'Cagliari',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2552,
                price40GP: 3645,
                price40HQ: 3645,
                transitTime: 55
            }
        ]
    },
    // Qingdao to Cagliari
    {
        origin: 'Qingdao',
        destination: 'Cagliari',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2552,
                price40GP: 3645,
                price40HQ: 3645,
                transitTime: 55
            }
        ]
    },
    // Dalian to Cagliari
    {
        origin: 'Dalian',
        destination: 'Cagliari',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2552,
                price40GP: 3645,
                price40HQ: 3645,
                transitTime: 58
            }
        ]
    },
    // Hong Kong to Cagliari
    {
        origin: 'Hong Kong',
        destination: 'Cagliari',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2552,
                price40GP: 3645,
                price40HQ: 3645,
                transitTime: 42
            }
        ]
    },
    // Xiamen to Cagliari
    {
        origin: 'Xiamen',
        destination: 'Cagliari',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2552,
                price40GP: 3645,
                price40HQ: 3645,
                transitTime: 48
            }
        ]
    },
    // Shenzhen to Cagliari
    {
        origin: 'Shenzhen',
        destination: 'Cagliari',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2552,
                price40GP: 3645,
                price40HQ: 3645,
                transitTime: 43
            }
        ]
    },
    // ==========================================
    // ITALY ROUTES (Civitavecchia)
    // ==========================================
    // Shanghai to Civitavecchia
    {
        origin: 'Shanghai',
        destination: 'Civitavecchia',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2555,
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 45
            }
        ]
    },
    // Ningbo to Civitavecchia
    {
        origin: 'Ningbo',
        destination: 'Civitavecchia',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2555,
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 50
            }
        ]
    },
    // Tianjin to Civitavecchia
    {
        origin: 'Tianjin',
        destination: 'Civitavecchia',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2555,
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 55
            }
        ]
    },
    // Qingdao to Civitavecchia
    {
        origin: 'Qingdao',
        destination: 'Civitavecchia',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2555,
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 55
            }
        ]
    },
    // Dalian to Civitavecchia
    {
        origin: 'Dalian',
        destination: 'Civitavecchia',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2555,
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 58
            }
        ]
    },
    // Hong Kong to Civitavecchia
    {
        origin: 'Hong Kong',
        destination: 'Civitavecchia',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2555,
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 42
            }
        ]
    },
    // Xiamen to Civitavecchia
    {
        origin: 'Xiamen',
        destination: 'Civitavecchia',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2555,
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 48
            }
        ]
    },
    // Shenzhen to Civitavecchia
    {
        origin: 'Shenzhen',
        destination: 'Civitavecchia',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2555,
                price40GP: 3650,
                price40HQ: 3650,
                transitTime: 43
            }
        ]
    },
    // ==========================================
    // ITALY ROUTES (Leghorn)
    // ==========================================
    // Shanghai to Leghorn
    {
        origin: 'Shanghai',
        destination: 'Leghorn',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 42
            }
        ]
    },
    // Ningbo to Leghorn
    {
        origin: 'Ningbo',
        destination: 'Leghorn',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 48
            }
        ]
    },
    // Tianjin to Leghorn
    {
        origin: 'Tianjin',
        destination: 'Leghorn',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 52
            }
        ]
    },
    // Qingdao to Leghorn
    {
        origin: 'Qingdao',
        destination: 'Leghorn',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 52
            }
        ]
    },
    // Dalian to Leghorn
    {
        origin: 'Dalian',
        destination: 'Leghorn',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 55
            }
        ]
    },
    // Hong Kong to Leghorn
    {
        origin: 'Hong Kong',
        destination: 'Leghorn',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 40
            }
        ]
    },
    // Xiamen to Leghorn
    {
        origin: 'Xiamen',
        destination: 'Leghorn',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 45
            }
        ]
    },
    // Shenzhen to Leghorn
    {
        origin: 'Shenzhen',
        destination: 'Leghorn',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 40
            }
        ]
    },
    // ==========================================
    // ITALY ROUTES (Ravenna)
    // ==========================================
    // Shanghai to Ravenna
    {
        origin: 'Shanghai',
        destination: 'Ravenna',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2293,
                price40GP: 3275,
                price40HQ: 3275,
                transitTime: 45
            }
        ]
    },
    // Ningbo to Ravenna
    {
        origin: 'Ningbo',
        destination: 'Ravenna',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2293,
                price40GP: 3275,
                price40HQ: 3275,
                transitTime: 50
            }
        ]
    },
    // Tianjin to Ravenna
    {
        origin: 'Tianjin',
        destination: 'Ravenna',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2293,
                price40GP: 3275,
                price40HQ: 3275,
                transitTime: 55
            }
        ]
    },
    // Qingdao to Ravenna
    {
        origin: 'Qingdao',
        destination: 'Ravenna',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2293,
                price40GP: 3275,
                price40HQ: 3275,
                transitTime: 55
            }
        ]
    },
    // Dalian to Ravenna
    {
        origin: 'Dalian',
        destination: 'Ravenna',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2293,
                price40GP: 3275,
                price40HQ: 3275,
                transitTime: 58
            }
        ]
    },
    // Hong Kong to Ravenna
    {
        origin: 'Hong Kong',
        destination: 'Ravenna',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2293,
                price40GP: 3275,
                price40HQ: 3275,
                transitTime: 42
            }
        ]
    },
    // Xiamen to Ravenna
    {
        origin: 'Xiamen',
        destination: 'Ravenna',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2293,
                price40GP: 3275,
                price40HQ: 3275,
                transitTime: 48
            }
        ]
    },
    // Shenzhen to Ravenna
    {
        origin: 'Shenzhen',
        destination: 'Ravenna',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2293,
                price40GP: 3275,
                price40HQ: 3275,
                transitTime: 43
            }
        ]
    },
    // ==========================================
    // ITALY ROUTES (Salerno)
    // ==========================================
    // Shanghai to Salerno
    {
        origin: 'Shanghai',
        destination: 'Salerno',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2520,
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 45
            }
        ]
    },
    // Ningbo to Salerno
    {
        origin: 'Ningbo',
        destination: 'Salerno',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2520,
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 50
            }
        ]
    },
    // Tianjin to Salerno
    {
        origin: 'Tianjin',
        destination: 'Salerno',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2520,
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 55
            }
        ]
    },
    // Qingdao to Salerno
    {
        origin: 'Qingdao',
        destination: 'Salerno',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2520,
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 55
            }
        ]
    },
    // Dalian to Salerno
    {
        origin: 'Dalian',
        destination: 'Salerno',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2520,
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 58
            }
        ]
    },
    // Hong Kong to Salerno
    {
        origin: 'Hong Kong',
        destination: 'Salerno',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2520,
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 42
            }
        ]
    },
    // Xiamen to Salerno
    {
        origin: 'Xiamen',
        destination: 'Salerno',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2520,
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 48
            }
        ]
    },
    // Shenzhen to Salerno
    {
        origin: 'Shenzhen',
        destination: 'Salerno',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2520,
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 43
            }
        ]
    },
    // ==========================================
    // ITALY ROUTES - Dalian to existing ports
    // ==========================================
    // Dalian to Trieste
    {
        origin: 'Dalian',
        destination: 'Trieste',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2170,
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 58
            }
        ]
    },
    // Dalian to Naples
    {
        origin: 'Dalian',
        destination: 'Naples',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2520,
                price40GP: 3600,
                price40HQ: 3600,
                transitTime: 58
            }
        ]
    },
    // Dalian to La Spezia
    {
        origin: 'Dalian',
        destination: 'La Spezia',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 55
            }
        ]
    },
    // Dalian to Venice
    {
        origin: 'Dalian',
        destination: 'Venice',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2170,
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 58
            }
        ]
    },
    // Dalian to Genoa
    {
        origin: 'Dalian',
        destination: 'Genoa',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2310,
                price40GP: 3300,
                price40HQ: 3300,
                transitTime: 55
            }
        ]
    },
    // ==========================================
    // GUANGZHOU NEW ITALY ROUTES (Nansha New Port)
    // ==========================================
    // Guangzhou to Ancona
    {
        origin: 'Guangzhou',
        destination: 'Ancona',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2275,
                price40GP: 3250,
                price40HQ: 3250,
                transitTime: 48
            }
        ]
    },
    // Guangzhou to Genoa Vado Ligure
    {
        origin: 'Guangzhou',
        destination: 'Genoa Vado Ligure',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2170,
                price40GP: 3100,
                price40HQ: 3100,
                transitTime: 45
            }
        ]
    },
    // Guangzhou to Cagliari
    {
        origin: 'Guangzhou',
        destination: 'Cagliari',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2482,
                price40GP: 3545,
                price40HQ: 3545,
                transitTime: 48
            }
        ]
    },
    // Guangzhou to Civitavecchia
    {
        origin: 'Guangzhou',
        destination: 'Civitavecchia',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2485,
                price40GP: 3550,
                price40HQ: 3550,
                transitTime: 48
            }
        ]
    },
    // Guangzhou to Leghorn
    {
        origin: 'Guangzhou',
        destination: 'Leghorn',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2240,
                price40GP: 3200,
                price40HQ: 3200,
                transitTime: 45
            }
        ]
    },
    // Guangzhou to Ravenna
    {
        origin: 'Guangzhou',
        destination: 'Ravenna',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2223,
                price40GP: 3175,
                price40HQ: 3175,
                transitTime: 48
            }
        ]
    },
    // Guangzhou to Salerno
    {
        origin: 'Guangzhou',
        destination: 'Salerno',
        rates: [
            {
                carrier: 'MSK',
                price20GP: 2450,
                price40GP: 3500,
                price40HQ: 3500,
                transitTime: 48
            }
        ]
    }
];
function getRoutePricing(origin, destination) {
    const originLower = origin.toLowerCase();
    const destinationLower = destination.toLowerCase();
    return seaFreightPricing.find((p)=>p.origin.toLowerCase() === originLower && p.destination.toLowerCase() === destinationLower);
}
function getLowestPrice40GP(pricing) {
    return Math.min(...pricing.rates.map((r)=>r.price40GP));
}
function getLowestPrice40HQ(pricing) {
    return Math.min(...pricing.rates.map((r)=>r.price40HQ));
}
function getFastestTransitTime(pricing) {
    return Math.min(...pricing.rates.map((r)=>r.transitTime));
}
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}
}),
"[project]/src/lib/data/routeGenerator.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateAirRoutes",
    ()=>generateAirRoutes,
    "generateAllRoutes",
    ()=>generateAllRoutes,
    "generateSeaRoutes",
    ()=>generateSeaRoutes,
    "getAllAirRoutes",
    ()=>getAllAirRoutes,
    "getAllFlatRouteSlugs",
    ()=>getAllFlatRouteSlugs,
    "getAllSeaRoutes",
    ()=>getAllSeaRoutes,
    "getRouteByFlatSlug",
    ()=>getRouteByFlatSlug,
    "getRoutesByCountry",
    ()=>getRoutesByCountry,
    "getRoutesByDestination",
    ()=>getRoutesByDestination,
    "getRoutesByOrigin",
    ()=>getRoutesByOrigin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/routes.ts [app-rsc] (ecmascript)");
;
// ============================================================================
// MEMOIZATION CACHE
// These caches ensure routes are only generated ONCE during the entire build,
// not once per page. This reduces build time from O(n²) to O(n).
// ============================================================================
let cachedSeaRoutes = null;
let cachedAirRoutes = null;
let cachedAllRoutes = null;
let cachedFlatSlugs = null;
// Route lookup maps for O(1) access instead of O(n) array filtering
let seaRoutesBySlug = null;
let airRoutesBySlug = null;
let seaRoutesByOrigin = null;
let airRoutesByOrigin = null;
let seaRoutesByDestination = null;
let airRoutesByDestination = null;
// Sea freight origins (8 cities)
const seaOrigins = [
    {
        city: 'Shanghai',
        port: 'Port of Shanghai (CNSHA)',
        code: 'CNSHA'
    },
    {
        city: 'Shenzhen',
        port: 'Port of Shenzhen (CNSZX)',
        code: 'CNSZX'
    },
    {
        city: 'Guangzhou',
        port: 'Port of Guangzhou (CNGZH)',
        code: 'CNGZH'
    },
    {
        city: 'Ningbo',
        port: 'Ningbo-Zhoushan Port (CNNGB)',
        code: 'CNNGB'
    },
    {
        city: 'Qingdao',
        port: 'Port of Qingdao (CNTAO)',
        code: 'CNTAO'
    },
    {
        city: 'Tianjin',
        port: 'Port of Tianjin (CNTSN)',
        code: 'CNTSN'
    },
    {
        city: 'Xiamen',
        port: 'Port of Xiamen (CNXMN)',
        code: 'CNXMN'
    },
    {
        city: 'Hong Kong',
        port: 'Port of Hong Kong (HKHKG)',
        code: 'HKHKG'
    },
    {
        city: 'Dalian',
        port: 'Port of Dalian (CNDLC)',
        code: 'CNDLC'
    }
];
// Air freight origins (6 cities)
const airOrigins = [
    {
        city: 'Shanghai',
        port: 'Shanghai Pudong Airport (PVG)',
        code: 'PVG'
    },
    {
        city: 'Shenzhen',
        port: "Shenzhen Bao'an Airport (SZX)",
        code: 'SZX'
    },
    {
        city: 'Guangzhou',
        port: 'Guangzhou Baiyun Airport (CAN)',
        code: 'CAN'
    },
    {
        city: 'Beijing',
        port: 'Beijing Capital Airport (PEK)',
        code: 'PEK'
    },
    {
        city: 'Qingdao',
        port: 'Qingdao Jiaodong Airport (TAO)',
        code: 'TAO'
    },
    {
        city: 'Xiamen',
        port: 'Xiamen Gaoqi Airport (XMN)',
        code: 'XMN'
    }
];
// All destinations with their info
const allDestinations = {
    // United States
    'los-angeles': {
        city: 'Los Angeles',
        seaPort: 'Port of Los Angeles (USLAX)',
        airPort: 'Los Angeles International Airport (LAX)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '15-18',
        airTransit: '2-3'
    },
    'long-beach': {
        city: 'Long Beach',
        seaPort: 'Port of Long Beach (USLGB)',
        airPort: 'Long Beach Airport (LGB)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '15-18',
        airTransit: '2-3'
    },
    'new-york': {
        city: 'New York',
        seaPort: 'Port of New York/New Jersey (USNYC)',
        airPort: 'JFK International Airport (JFK)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '22-28',
        airTransit: '3-4'
    },
    'oakland': {
        city: 'Oakland',
        seaPort: 'Port of Oakland (USOAK)',
        airPort: 'Oakland International Airport (OAK)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '14-17',
        airTransit: '2-3'
    },
    'seattle': {
        city: 'Seattle',
        seaPort: 'Port of Seattle (USSEA)',
        airPort: 'Seattle-Tacoma Airport (SEA)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '12-15',
        airTransit: '2-3'
    },
    'tacoma': {
        city: 'Tacoma',
        seaPort: 'Port of Tacoma (USTAC)',
        airPort: 'Seattle-Tacoma Airport (SEA)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '12-15',
        airTransit: '2-3'
    },
    'savannah': {
        city: 'Savannah',
        seaPort: 'Port of Savannah (USSAV)',
        airPort: 'Savannah/Hilton Head Airport (SAV)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '25-30',
        airTransit: '3-5'
    },
    'houston': {
        city: 'Houston',
        seaPort: 'Port of Houston (USHOU)',
        airPort: 'George Bush Airport (IAH)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '28-32',
        airTransit: '3-4'
    },
    'dallas': {
        city: 'Dallas',
        seaPort: 'Dallas Logistics Hub (via Houston)',
        airPort: 'Dallas/Fort Worth Airport (DFW)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '30-35',
        airTransit: '3-4'
    },
    'salt-lake-city': {
        city: 'Salt Lake City',
        seaPort: 'Salt Lake City Inland Port',
        airPort: 'Salt Lake City Airport (SLC)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '18-22',
        airTransit: '3-4'
    },
    'charleston': {
        city: 'Charleston',
        seaPort: 'Port of Charleston (USCHS)',
        airPort: 'Charleston Airport (CHS)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '28-32',
        airTransit: '3-5'
    },
    'norfolk': {
        city: 'Norfolk',
        seaPort: 'Port of Virginia (USNFK)',
        airPort: 'Norfolk Airport (ORF)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '26-30',
        airTransit: '3-5'
    },
    'jacksonville': {
        city: 'Jacksonville',
        seaPort: 'Port of Jacksonville (USJAX)',
        airPort: 'Jacksonville Airport (JAX)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '28-32',
        airTransit: '3-5'
    },
    'wilmington': {
        city: 'Wilmington',
        seaPort: 'Port of Wilmington (USILM)',
        airPort: 'Wilmington Airport (ILM)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '28-32',
        airTransit: '3-5'
    },
    'atlanta': {
        city: 'Atlanta',
        seaPort: 'Atlanta Logistics Hub (via Savannah)',
        airPort: 'Hartsfield-Jackson Airport (ATL)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '27-32',
        airTransit: '3-4'
    },
    'boston': {
        city: 'Boston',
        seaPort: 'Port of Boston (USBOS)',
        airPort: 'Logan International Airport (BOS)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '28-33',
        airTransit: '3-4'
    },
    'chicago': {
        city: 'Chicago',
        seaPort: 'Chicago Logistics Hub (via rail)',
        airPort: "O'Hare International Airport (ORD)",
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '20-25',
        airTransit: '3-4'
    },
    'denver': {
        city: 'Denver',
        seaPort: 'Denver Logistics Hub (via rail)',
        airPort: 'Denver International Airport (DEN)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '22-27',
        airTransit: '3-4'
    },
    'miami': {
        city: 'Miami',
        seaPort: 'Port of Miami (USMIA)',
        airPort: 'Miami International Airport (MIA)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '30-35',
        airTransit: '3-5'
    },
    'san-francisco': {
        city: 'San Francisco',
        seaPort: 'Port of San Francisco (USSFO)',
        airPort: 'San Francisco International Airport (SFO)',
        country: 'United States',
        countrySlug: 'china-to-united-states',
        seaTransit: '14-17',
        airTransit: '2-3'
    },
    // Canada
    'vancouver': {
        city: 'Vancouver',
        seaPort: 'Port of Vancouver (CAVAN)',
        airPort: 'Vancouver International Airport (YVR)',
        country: 'Canada',
        countrySlug: 'china-to-canada',
        seaTransit: '14-17',
        airTransit: '2-3'
    },
    'toronto': {
        city: 'Toronto',
        seaPort: 'Port of Toronto (via rail)',
        airPort: 'Toronto Pearson Airport (YYZ)',
        country: 'Canada',
        countrySlug: 'china-to-canada',
        seaTransit: '20-25',
        airTransit: '3-4'
    },
    'montreal': {
        city: 'Montreal',
        seaPort: 'Port of Montreal (CAMTR)',
        airPort: 'Montreal-Trudeau Airport (YUL)',
        country: 'Canada',
        countrySlug: 'china-to-canada',
        seaTransit: '25-30',
        airTransit: '3-4'
    },
    'halifax': {
        city: 'Halifax',
        seaPort: 'Port of Halifax (CAHAL)',
        airPort: 'Halifax Stanfield Airport (YHZ)',
        country: 'Canada',
        countrySlug: 'china-to-canada',
        seaTransit: '28-32',
        airTransit: '4-5'
    },
    'calgary': {
        city: 'Calgary',
        seaPort: 'Calgary Logistics Hub (via Vancouver)',
        airPort: 'Calgary International Airport (YYC)',
        country: 'Canada',
        countrySlug: 'china-to-canada',
        seaTransit: '18-22',
        airTransit: '2-3'
    },
    'prince-rupert': {
        city: 'Prince Rupert',
        seaPort: 'Port of Prince Rupert (CAPRR)',
        airPort: 'Prince Rupert Airport (YPR)',
        country: 'Canada',
        countrySlug: 'china-to-canada',
        seaTransit: '10-13',
        airTransit: '3-4'
    },
    'ottawa': {
        city: 'Ottawa',
        seaPort: 'Ottawa Logistics Hub (via Montreal)',
        airPort: 'Ottawa International Airport (YOW)',
        country: 'Canada',
        countrySlug: 'china-to-canada',
        seaTransit: '27-32',
        airTransit: '3-4'
    },
    'regina': {
        city: 'Regina',
        seaPort: 'Regina Logistics Hub (via Vancouver)',
        airPort: 'Regina International Airport (YQR)',
        country: 'Canada',
        countrySlug: 'china-to-canada',
        seaTransit: '20-25',
        airTransit: '3-4'
    },
    'winnipeg': {
        city: 'Winnipeg',
        seaPort: 'Winnipeg Logistics Hub (via Vancouver)',
        airPort: 'Winnipeg James Armstrong Richardson Airport (YWG)',
        country: 'Canada',
        countrySlug: 'china-to-canada',
        seaTransit: '20-25',
        airTransit: '3-4'
    },
    // United Kingdom
    'felixstowe': {
        city: 'Felixstowe',
        seaPort: 'Port of Felixstowe (GBFXT)',
        country: 'United Kingdom',
        countrySlug: 'china-to-united-kingdom',
        seaTransit: '28-32'
    },
    'southampton': {
        city: 'Southampton',
        seaPort: 'Port of Southampton (GBSOU)',
        country: 'United Kingdom',
        countrySlug: 'china-to-united-kingdom',
        seaTransit: '30-35'
    },
    'london-gateway': {
        city: 'London Gateway',
        seaPort: 'London Gateway (GBLGP)',
        country: 'United Kingdom',
        countrySlug: 'china-to-united-kingdom',
        seaTransit: '28-32'
    },
    'london': {
        city: 'London',
        seaPort: 'Port of London (GBLON)',
        airPort: 'London Heathrow Airport (LHR)',
        country: 'United Kingdom',
        countrySlug: 'china-to-united-kingdom',
        seaTransit: '28-32',
        airTransit: '3-4'
    },
    // Australia
    'sydney': {
        city: 'Sydney',
        seaPort: 'Port Botany (AUSYD)',
        airPort: 'Sydney Kingsford Smith Airport (SYD)',
        country: 'Australia',
        countrySlug: 'china-to-australia',
        seaTransit: '18-22',
        airTransit: '2-3'
    },
    'melbourne': {
        city: 'Melbourne',
        seaPort: 'Port of Melbourne (AUMEL)',
        airPort: 'Melbourne Airport (MEL)',
        country: 'Australia',
        countrySlug: 'china-to-australia',
        seaTransit: '18-22',
        airTransit: '2-3'
    },
    'brisbane': {
        city: 'Brisbane',
        seaPort: 'Port of Brisbane (AUBNE)',
        airPort: 'Brisbane Airport (BNE)',
        country: 'Australia',
        countrySlug: 'china-to-australia',
        seaTransit: '16-20',
        airTransit: '2-3'
    },
    'fremantle': {
        city: 'Fremantle',
        seaPort: 'Port of Fremantle (AUFRE)',
        airPort: 'Perth Airport (PER)',
        country: 'Australia',
        countrySlug: 'china-to-australia',
        seaTransit: '14-18',
        airTransit: '2-3'
    },
    'canberra': {
        city: 'Canberra',
        airPort: 'Canberra Airport (CBR)',
        country: 'Australia',
        countrySlug: 'china-to-australia',
        airTransit: '3-4'
    },
    // Germany
    'hamburg': {
        city: 'Hamburg',
        seaPort: 'Port of Hamburg (DEHAM)',
        airPort: 'Hamburg Airport (HAM)',
        country: 'Germany',
        countrySlug: 'china-to-germany',
        seaTransit: '30-35',
        airTransit: '3-5'
    },
    'bremerhaven': {
        city: 'Bremerhaven',
        seaPort: 'Port of Bremerhaven (DEBRV)',
        country: 'Germany',
        countrySlug: 'china-to-germany',
        seaTransit: '30-35'
    },
    'frankfurt': {
        city: 'Frankfurt',
        seaPort: 'Frankfurt Logistics Hub (via Hamburg)',
        airPort: 'Frankfurt Airport (FRA)',
        country: 'Germany',
        countrySlug: 'china-to-germany',
        seaTransit: '32-38',
        airTransit: '3-4'
    },
    'munich': {
        city: 'Munich',
        seaPort: 'Munich Logistics Hub (via Hamburg)',
        airPort: 'Munich Airport (MUC)',
        country: 'Germany',
        countrySlug: 'china-to-germany',
        seaTransit: '33-40',
        airTransit: '3-5'
    },
    // Netherlands
    'rotterdam': {
        city: 'Rotterdam',
        seaPort: 'Port of Rotterdam (NLRTM)',
        country: 'Netherlands',
        countrySlug: 'china-to-netherlands',
        seaTransit: '28-32'
    },
    // Italy
    'trieste': {
        city: 'Trieste',
        seaPort: 'Port of Trieste (ITTRS)',
        country: 'Italy',
        countrySlug: 'china-to-italy',
        seaTransit: '40-65'
    },
    'naples': {
        city: 'Naples',
        seaPort: 'Port of Naples (ITNAP)',
        country: 'Italy',
        countrySlug: 'china-to-italy',
        seaTransit: '50-65'
    },
    'la-spezia': {
        city: 'La Spezia',
        seaPort: 'Port of La Spezia (ITSPE)',
        country: 'Italy',
        countrySlug: 'china-to-italy',
        seaTransit: '40-65'
    },
    'venice': {
        city: 'Venice',
        seaPort: 'Port of Venice (ITVCE)',
        country: 'Italy',
        countrySlug: 'china-to-italy',
        seaTransit: '40-65'
    },
    'genoa': {
        city: 'Genoa',
        seaPort: 'Port of Genoa (ITGOA)',
        country: 'Italy',
        countrySlug: 'china-to-italy',
        seaTransit: '40-65'
    },
    'ancona': {
        city: 'Ancona',
        seaPort: 'Port of Ancona (ITAOI)',
        country: 'Italy',
        countrySlug: 'china-to-italy',
        seaTransit: '40-65'
    },
    'genoa-vado-ligure': {
        city: 'Genoa Vado Ligure',
        seaPort: 'Port of Vado Ligure (ITVDL)',
        country: 'Italy',
        countrySlug: 'china-to-italy',
        seaTransit: '40-65'
    },
    'cagliari': {
        city: 'Cagliari',
        seaPort: 'Port of Cagliari (ITCAG)',
        country: 'Italy',
        countrySlug: 'china-to-italy',
        seaTransit: '40-65'
    },
    'civitavecchia': {
        city: 'Civitavecchia',
        seaPort: 'Port of Civitavecchia (ITCVV)',
        country: 'Italy',
        countrySlug: 'china-to-italy',
        seaTransit: '40-65'
    },
    'leghorn': {
        city: 'Leghorn',
        seaPort: 'Port of Livorno (ITLIV)',
        country: 'Italy',
        countrySlug: 'china-to-italy',
        seaTransit: '40-65'
    },
    'ravenna': {
        city: 'Ravenna',
        seaPort: 'Port of Ravenna (ITRAN)',
        country: 'Italy',
        countrySlug: 'china-to-italy',
        seaTransit: '40-65'
    },
    'salerno': {
        city: 'Salerno',
        seaPort: 'Port of Salerno (ITSAL)',
        country: 'Italy',
        countrySlug: 'china-to-italy',
        seaTransit: '40-65'
    }
};
// Define exact sea freight routes from existing site (259 total)
const seaRouteMatrix = {
    'shanghai': [
        'los-angeles',
        'long-beach',
        'new-york',
        'oakland',
        'seattle',
        'tacoma',
        'savannah',
        'houston',
        'dallas',
        'salt-lake-city',
        'charleston',
        'norfolk',
        'jacksonville',
        'wilmington',
        'atlanta',
        'boston',
        'chicago',
        'denver',
        'miami',
        'san-francisco',
        'vancouver',
        'toronto',
        'montreal',
        'halifax',
        'calgary',
        'prince-rupert',
        'ottawa',
        'regina',
        'winnipeg',
        'felixstowe',
        'southampton',
        'london-gateway',
        'london',
        'sydney',
        'melbourne',
        'brisbane',
        'fremantle',
        'hamburg',
        'bremerhaven',
        'rotterdam',
        'trieste',
        'naples',
        'la-spezia',
        'venice',
        'genoa',
        'ancona',
        'genoa-vado-ligure',
        'cagliari',
        'civitavecchia',
        'leghorn',
        'ravenna',
        'salerno'
    ],
    'shenzhen': [
        'los-angeles',
        'long-beach',
        'new-york',
        'oakland',
        'seattle',
        'tacoma',
        'savannah',
        'houston',
        'dallas',
        'salt-lake-city',
        'charleston',
        'norfolk',
        'jacksonville',
        'atlanta',
        'boston',
        'san-francisco',
        'vancouver',
        'toronto',
        'montreal',
        'halifax',
        'calgary',
        'prince-rupert',
        'ottawa',
        'regina',
        'winnipeg',
        'felixstowe',
        'southampton',
        'london-gateway',
        'sydney',
        'melbourne',
        'brisbane',
        'fremantle',
        'hamburg',
        'bremerhaven',
        'frankfurt',
        'munich',
        'rotterdam',
        'trieste',
        'naples',
        'la-spezia',
        'venice',
        'genoa',
        'ancona',
        'genoa-vado-ligure',
        'cagliari',
        'civitavecchia',
        'leghorn',
        'ravenna',
        'salerno'
    ],
    'guangzhou': [
        'los-angeles',
        'long-beach',
        'new-york',
        'oakland',
        'seattle',
        'tacoma',
        'savannah',
        'houston',
        'dallas',
        'salt-lake-city',
        'charleston',
        'norfolk',
        'jacksonville',
        'atlanta',
        'boston',
        'chicago',
        'denver',
        'miami',
        'san-francisco',
        'vancouver',
        'toronto',
        'montreal',
        'halifax',
        'calgary',
        'prince-rupert',
        'ottawa',
        'regina',
        'winnipeg',
        'felixstowe',
        'southampton',
        'london-gateway',
        'london',
        'sydney',
        'melbourne',
        'brisbane',
        'fremantle',
        'hamburg',
        'bremerhaven',
        'munich',
        'rotterdam',
        'trieste',
        'naples',
        'la-spezia',
        'venice',
        'genoa',
        'ancona',
        'genoa-vado-ligure',
        'cagliari',
        'civitavecchia',
        'leghorn',
        'ravenna',
        'salerno'
    ],
    'ningbo': [
        'los-angeles',
        'long-beach',
        'new-york',
        'oakland',
        'seattle',
        'tacoma',
        'savannah',
        'houston',
        'dallas',
        'salt-lake-city',
        'charleston',
        'norfolk',
        'jacksonville',
        'chicago',
        'miami',
        'san-francisco',
        'vancouver',
        'toronto',
        'montreal',
        'halifax',
        'calgary',
        'prince-rupert',
        'ottawa',
        'regina',
        'winnipeg',
        'felixstowe',
        'southampton',
        'london-gateway',
        'london',
        'sydney',
        'melbourne',
        'brisbane',
        'fremantle',
        'hamburg',
        'bremerhaven',
        'frankfurt',
        'munich',
        'rotterdam',
        'trieste',
        'naples',
        'la-spezia',
        'venice',
        'genoa',
        'ancona',
        'genoa-vado-ligure',
        'cagliari',
        'civitavecchia',
        'leghorn',
        'ravenna',
        'salerno'
    ],
    'qingdao': [
        'los-angeles',
        'long-beach',
        'new-york',
        'oakland',
        'seattle',
        'tacoma',
        'savannah',
        'houston',
        'dallas',
        'salt-lake-city',
        'charleston',
        'norfolk',
        'jacksonville',
        'atlanta',
        'boston',
        'denver',
        'san-francisco',
        'vancouver',
        'toronto',
        'montreal',
        'halifax',
        'calgary',
        'prince-rupert',
        'ottawa',
        'regina',
        'winnipeg',
        'felixstowe',
        'southampton',
        'london-gateway',
        'london',
        'sydney',
        'melbourne',
        'brisbane',
        'fremantle',
        'hamburg',
        'bremerhaven',
        'frankfurt',
        'munich',
        'rotterdam',
        'trieste',
        'naples',
        'la-spezia',
        'venice',
        'genoa',
        'ancona',
        'genoa-vado-ligure',
        'cagliari',
        'civitavecchia',
        'leghorn',
        'ravenna',
        'salerno'
    ],
    'tianjin': [
        'los-angeles',
        'long-beach',
        'new-york',
        'oakland',
        'seattle',
        'tacoma',
        'savannah',
        'houston',
        'dallas',
        'salt-lake-city',
        'charleston',
        'norfolk',
        'jacksonville',
        'atlanta',
        'boston',
        'chicago',
        'denver',
        'miami',
        'san-francisco',
        'vancouver',
        'toronto',
        'montreal',
        'halifax',
        'calgary',
        'prince-rupert',
        'ottawa',
        'regina',
        'winnipeg',
        'felixstowe',
        'southampton',
        'london-gateway',
        'london',
        'sydney',
        'melbourne',
        'brisbane',
        'fremantle',
        'hamburg',
        'bremerhaven',
        'frankfurt',
        'munich',
        'rotterdam',
        'trieste',
        'naples',
        'la-spezia',
        'venice',
        'genoa',
        'ancona',
        'genoa-vado-ligure',
        'cagliari',
        'civitavecchia',
        'leghorn',
        'ravenna',
        'salerno'
    ],
    'xiamen': [
        'los-angeles',
        'long-beach',
        'new-york',
        'oakland',
        'seattle',
        'tacoma',
        'savannah',
        'houston',
        'dallas',
        'salt-lake-city',
        'charleston',
        'norfolk',
        'jacksonville',
        'atlanta',
        'boston',
        'chicago',
        'denver',
        'san-francisco',
        'vancouver',
        'toronto',
        'montreal',
        'halifax',
        'calgary',
        'prince-rupert',
        'ottawa',
        'regina',
        'winnipeg',
        'felixstowe',
        'southampton',
        'london-gateway',
        'london',
        'sydney',
        'melbourne',
        'brisbane',
        'fremantle',
        'hamburg',
        'bremerhaven',
        'munich',
        'rotterdam',
        'trieste',
        'naples',
        'la-spezia',
        'venice',
        'genoa',
        'ancona',
        'genoa-vado-ligure',
        'cagliari',
        'civitavecchia',
        'leghorn',
        'ravenna',
        'salerno'
    ],
    'hong-kong': [
        'los-angeles',
        'long-beach',
        'new-york',
        'oakland',
        'seattle',
        'tacoma',
        'savannah',
        'houston',
        'dallas',
        'salt-lake-city',
        'charleston',
        'norfolk',
        'jacksonville',
        'vancouver',
        'toronto',
        'montreal',
        'halifax',
        'calgary',
        'prince-rupert',
        'regina',
        'winnipeg',
        'felixstowe',
        'southampton',
        'london-gateway',
        'sydney',
        'melbourne',
        'brisbane',
        'fremantle',
        'hamburg',
        'bremerhaven',
        'rotterdam',
        'trieste',
        'naples',
        'la-spezia',
        'venice',
        'genoa',
        'ancona',
        'genoa-vado-ligure',
        'cagliari',
        'civitavecchia',
        'leghorn',
        'ravenna',
        'salerno'
    ],
    'dalian': [
        'trieste',
        'naples',
        'la-spezia',
        'venice',
        'genoa',
        'ancona',
        'genoa-vado-ligure',
        'cagliari',
        'civitavecchia',
        'leghorn',
        'ravenna',
        'salerno'
    ]
};
// Define exact air freight routes from existing site (161 total)
const airRouteMatrix = {
    'shanghai': [
        'los-angeles',
        'long-beach',
        'new-york',
        'chicago',
        'san-francisco',
        'atlanta',
        'dallas',
        'seattle',
        'miami',
        'houston',
        'boston',
        'denver',
        'oakland',
        'tacoma',
        'savannah',
        'vancouver',
        'toronto',
        'montreal',
        'calgary',
        'ottawa',
        'halifax',
        'prince-rupert',
        'london',
        'sydney',
        'melbourne',
        'brisbane',
        'canberra',
        'fremantle',
        'frankfurt',
        'munich',
        'hamburg'
    ],
    'shenzhen': [
        'los-angeles',
        'long-beach',
        'new-york',
        'chicago',
        'san-francisco',
        'atlanta',
        'dallas',
        'seattle',
        'miami',
        'houston',
        'boston',
        'denver',
        'oakland',
        'tacoma',
        'savannah',
        'vancouver',
        'toronto',
        'montreal',
        'calgary',
        'ottawa',
        'halifax',
        'prince-rupert',
        'london',
        'sydney',
        'melbourne',
        'brisbane',
        'canberra',
        'fremantle',
        'frankfurt',
        'munich',
        'hamburg'
    ],
    'guangzhou': [
        'los-angeles',
        'long-beach',
        'new-york',
        'chicago',
        'san-francisco',
        'atlanta',
        'dallas',
        'seattle',
        'miami',
        'oakland',
        'tacoma',
        'savannah',
        'vancouver',
        'toronto',
        'montreal',
        'calgary',
        'ottawa',
        'halifax',
        'london',
        'sydney',
        'melbourne',
        'brisbane',
        'canberra',
        'fremantle',
        'frankfurt',
        'munich',
        'hamburg'
    ],
    'beijing': [
        'los-angeles',
        'long-beach',
        'new-york',
        'chicago',
        'san-francisco',
        'atlanta',
        'dallas',
        'seattle',
        'miami',
        'houston',
        'boston',
        'denver',
        'oakland',
        'tacoma',
        'savannah',
        'vancouver',
        'toronto',
        'montreal',
        'calgary',
        'ottawa',
        'halifax',
        'prince-rupert',
        'london',
        'sydney',
        'melbourne',
        'brisbane',
        'canberra',
        'fremantle',
        'frankfurt',
        'munich',
        'hamburg'
    ],
    'qingdao': [
        'los-angeles',
        'new-york',
        'chicago',
        'san-francisco',
        'atlanta',
        'dallas',
        'miami',
        'boston',
        'denver',
        'vancouver',
        'toronto',
        'montreal',
        'calgary',
        'ottawa',
        'london',
        'sydney',
        'melbourne',
        'brisbane',
        'canberra',
        'frankfurt',
        'munich'
    ],
    'xiamen': [
        'los-angeles',
        'new-york',
        'chicago',
        'san-francisco',
        'atlanta',
        'dallas',
        'miami',
        'boston',
        'denver',
        'vancouver',
        'toronto',
        'montreal',
        'calgary',
        'ottawa',
        'london',
        'sydney',
        'melbourne',
        'brisbane',
        'canberra',
        'frankfurt',
        'munich'
    ]
};
// Popular goods by destination country
const popularGoodsByCountry = {
    'united-states': [
        'Electronics',
        'Furniture',
        'Textiles',
        'Machinery',
        'Auto Parts'
    ],
    'canada': [
        'Consumer Goods',
        'Machinery',
        'Furniture',
        'Electronics',
        'Textiles'
    ],
    'united-kingdom': [
        'Textiles',
        'Electronics',
        'Furniture',
        'Consumer Goods',
        'Machinery'
    ],
    'australia': [
        'Consumer Electronics',
        'Furniture',
        'Machinery',
        'Textiles',
        'Home Goods'
    ],
    'germany': [
        'Machinery',
        'Electronics',
        'Textiles',
        'Consumer Goods',
        'Automotive Parts'
    ],
    'netherlands': [
        'Electronics',
        'Machinery',
        'Consumer Goods',
        'Textiles',
        'Food Products'
    ],
    'italy': [
        'Machinery',
        'Electronics',
        'Textiles',
        'Fashion Goods',
        'Consumer Products'
    ]
};
// Standard container options
const standardContainerOptions = [
    {
        type: '20ft Standard',
        dimensions: '5.9m x 2.35m x 2.39m',
        maxWeight: '28,200 kg',
        description: 'Standard container for general cargo, ideal for heavy goods.'
    },
    {
        type: '40ft Standard',
        dimensions: '12.03m x 2.35m x 2.39m',
        maxWeight: '26,680 kg',
        description: 'Most popular container size, double the capacity of 20ft.'
    },
    {
        type: '40ft High Cube',
        dimensions: '12.03m x 2.35m x 2.69m',
        maxWeight: '26,460 kg',
        description: 'Extra height for voluminous cargo, 30cm taller than standard.'
    }
];
// Standard pricing structures
const seaPricingStructure = [
    'Base ocean freight per container',
    'Origin terminal handling charges',
    'Destination terminal handling',
    'Fuel surcharge (BAF)',
    'Customs clearance fees'
];
const airPricingStructure = [
    'Chargeable weight rate',
    'Fuel surcharge',
    'Security handling fee',
    'Terminal handling charges',
    'Customs clearance'
];
// Helper to slugify city names
function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
// Get origin info by slug
function getSeaOriginBySlug(slug) {
    return seaOrigins.find((o)=>slugify(o.city) === slug);
}
function getAirOriginBySlug(slug) {
    return airOrigins.find((o)=>slugify(o.city) === slug);
}
// Try to find matching CSV route for enhanced data
function findCsvRoute(originSlug, destSlug, serviceType) {
    const slug = `${originSlug}-to-${destSlug}-${serviceType}`;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].find((r)=>r.slug === slug || r.id === slug);
}
function generateSeaRoutes() {
    if (cachedSeaRoutes) return cachedSeaRoutes;
    const routes = [];
    for (const [originSlug, destSlugs] of Object.entries(seaRouteMatrix)){
        const origin = getSeaOriginBySlug(originSlug);
        if (!origin) continue;
        for (const destSlug of destSlugs){
            const dest = allDestinations[destSlug];
            if (!dest || !dest.seaPort) continue;
            const slug = `${originSlug}-to-${destSlug}`;
            const id = `${slug}-sea`;
            const csvRoute = findCsvRoute(originSlug, destSlug, 'sea');
            const countryKey = dest.countrySlug.replace('china-to-', '');
            const route = {
                id,
                slug,
                originCity: origin.city,
                originPort: origin.port,
                originCountry: 'China',
                destinationCity: dest.city,
                destinationPort: dest.seaPort,
                destinationCountry: dest.country,
                destinationSlug: dest.countrySlug,
                serviceType: 'sea',
                transitTime: `${dest.seaTransit} days`,
                frequency: 'Weekly departures',
                containerOptions: standardContainerOptions,
                pricingStructure: seaPricingStructure,
                popularGoods: popularGoodsByCountry[countryKey] || popularGoodsByCountry['united-states'],
                isPopular: [
                    'los-angeles',
                    'new-york',
                    'vancouver',
                    'melbourne',
                    'felixstowe',
                    'hamburg'
                ].includes(destSlug),
                // Include enhanced data from CSV if available
                ...csvRoute?.faqs && {
                    faqs: csvRoute.faqs
                },
                ...csvRoute?.containerPricing && {
                    containerPricing: csvRoute.containerPricing
                },
                ...csvRoute?.serviceTiers && {
                    serviceTiers: csvRoute.serviceTiers
                },
                ...csvRoute?.shippingProcess && {
                    shippingProcess: csvRoute.shippingProcess
                },
                ...csvRoute?.requiredDocuments && {
                    requiredDocuments: csvRoute.requiredDocuments
                },
                ...csvRoute?.corridorInfo && {
                    corridorInfo: csvRoute.corridorInfo
                },
                ...csvRoute?.routeStats && {
                    routeStats: csvRoute.routeStats
                }
            };
            routes.push(route);
        }
    }
    cachedSeaRoutes = routes;
    return routes;
}
function generateAirRoutes() {
    if (cachedAirRoutes) return cachedAirRoutes;
    const routes = [];
    for (const [originSlug, destSlugs] of Object.entries(airRouteMatrix)){
        const origin = getAirOriginBySlug(originSlug);
        if (!origin) continue;
        for (const destSlug of destSlugs){
            const dest = allDestinations[destSlug];
            if (!dest || !dest.airPort) continue;
            const slug = `${originSlug}-to-${destSlug}`;
            const id = `${slug}-air`;
            const csvRoute = findCsvRoute(originSlug, destSlug, 'air');
            const route = {
                id,
                slug,
                originCity: origin.city,
                originPort: origin.port,
                originCountry: 'China',
                destinationCity: dest.city,
                destinationPort: dest.airPort,
                destinationCountry: dest.country,
                destinationSlug: dest.countrySlug,
                serviceType: 'air',
                transitTime: `${dest.airTransit} days`,
                frequency: 'Daily flights',
                airCargoOptions: [
                    {
                        type: 'General Cargo',
                        maxWeight: '1000+ kg',
                        description: 'Standard air freight for general goods'
                    },
                    {
                        type: 'Express',
                        maxWeight: '500 kg',
                        description: 'Priority handling with faster transit'
                    }
                ],
                pricingStructure: airPricingStructure,
                popularGoods: [
                    'Electronics',
                    'Fashion',
                    'E-commerce',
                    'Medical Devices',
                    'Urgent Parts'
                ],
                isPopular: [
                    'los-angeles',
                    'new-york',
                    'london',
                    'sydney',
                    'toronto'
                ].includes(destSlug),
                // Include enhanced data from CSV if available
                ...csvRoute?.faqs && {
                    faqs: csvRoute.faqs
                }
            };
            routes.push(route);
        }
    }
    cachedAirRoutes = routes;
    return routes;
}
function generateAllRoutes() {
    if (cachedAllRoutes) return cachedAllRoutes;
    cachedAllRoutes = [
        ...generateSeaRoutes(),
        ...generateAirRoutes()
    ];
    return cachedAllRoutes;
}
// Build lookup maps for O(1) access - called once, then cached
function buildLookupMaps() {
    if (seaRoutesBySlug) return; // Already built
    const seaRoutes = generateSeaRoutes();
    const airRoutes = generateAirRoutes();
    // Build slug lookup maps
    seaRoutesBySlug = new Map(seaRoutes.map((r)=>[
            r.slug,
            r
        ]));
    airRoutesBySlug = new Map(airRoutes.map((r)=>[
            r.slug,
            r
        ]));
    // Build origin lookup maps
    seaRoutesByOrigin = new Map();
    airRoutesByOrigin = new Map();
    for (const route of seaRoutes){
        const key = route.originCity.toLowerCase();
        const existing = seaRoutesByOrigin.get(key) || [];
        existing.push(route);
        seaRoutesByOrigin.set(key, existing);
    }
    for (const route of airRoutes){
        const key = route.originCity.toLowerCase();
        const existing = airRoutesByOrigin.get(key) || [];
        existing.push(route);
        airRoutesByOrigin.set(key, existing);
    }
    // Build destination lookup maps
    seaRoutesByDestination = new Map();
    airRoutesByDestination = new Map();
    for (const route of seaRoutes){
        const key = route.destinationCity.toLowerCase();
        const existing = seaRoutesByDestination.get(key) || [];
        existing.push(route);
        seaRoutesByDestination.set(key, existing);
    }
    for (const route of airRoutes){
        const key = route.destinationCity.toLowerCase();
        const existing = airRoutesByDestination.get(key) || [];
        existing.push(route);
        airRoutesByDestination.set(key, existing);
    }
}
function getRouteByFlatSlug(slug, serviceType) {
    buildLookupMaps();
    return serviceType === 'sea' ? seaRoutesBySlug.get(slug) : airRoutesBySlug.get(slug);
}
function getAllFlatRouteSlugs() {
    if (cachedFlatSlugs) return cachedFlatSlugs;
    const allRoutes = generateAllRoutes();
    cachedFlatSlugs = allRoutes.map((r)=>({
            type: r.serviceType,
            slug: r.slug
        }));
    return cachedFlatSlugs;
}
function getRoutesByCountry(countrySlug) {
    const allRoutes = generateAllRoutes();
    return allRoutes.filter((r)=>r.destinationSlug === countrySlug);
}
function getAllSeaRoutes() {
    return generateSeaRoutes();
}
function getAllAirRoutes() {
    return generateAirRoutes();
}
function getRoutesByOrigin(originCity, serviceType) {
    buildLookupMaps();
    const key = originCity.toLowerCase();
    return serviceType === 'sea' ? seaRoutesByOrigin.get(key) || [] : airRoutesByOrigin.get(key) || [];
}
function getRoutesByDestination(destinationCity, serviceType) {
    buildLookupMaps();
    const key = destinationCity.toLowerCase();
    return serviceType === 'sea' ? seaRoutesByDestination.get(key) || [] : airRoutesByDestination.get(key) || [];
}
}),
];

//# sourceMappingURL=src_lib_data_bed6b550._.js.map