import type { NextConfig } from "next";

// Blog posts retired before November 2026. Each 301-redirects to the live page
// on the same topic (14 November 2026), or to the home page where no page matches.
const retiredBlogRedirects: Record<string, string> = {
  '20-foot-container-dimensions': '/blog/dimension-of-20-ft-container',
  '20-foot-container-size': '/blog/dimension-of-20-ft-container',
  '20-ft-container-in-cbm': '/blog/dimension-of-20-ft-container',
  'cbm-for-20-ft-container': '/blog/dimension-of-20-ft-container',
  '40-feet-container-size': '/blog/how-many-cbm-in-a-40-ft-container',
  '40-ft-container-dimensions-in-feet': '/blog/how-many-cbm-in-a-40-ft-container',
  '40-ft-container-size': '/blog/how-many-cbm-in-a-40-ft-container',
  'how-many-cbm-in-40-feet-container': '/blog/how-many-cbm-in-a-40-ft-container',
  'how-many-cbm-in-40-ft-container': '/blog/how-many-cbm-in-a-40-ft-container',
  'how-many-cbms-in-a-40-ft-container': '/blog/how-many-cbm-in-a-40-ft-container',
  'how-many-cubic-meters-in-40-ft-container': '/blog/how-many-cbm-in-a-40-ft-container',
  'container-load-calculator': '/blog/how-many-cbm-in-a-40-ft-container',
  'container-loading-calculator': '/blog/how-many-cbm-in-a-40-ft-container',
  '40-hq-container-size': '/blog/dimensions-of-a-40-hc-container',
  'how-to-calculate-cbm': '/blog/1-cbm-to-kg',
  'how-to-find-cbm': '/blog/1-cbm-to-kg',
  'air-cargo-forwarders': '/air-freight',
  'air-freight-from-china-to-europe': '/air-freight',
  'freight-forwarder-air-freight': '/air-freight',
  'international-air-transport-association': '/air-freight',
  'bonded-storage-warehouse': '/warehousing',
  'third-party-logistics-provider': '/warehousing',
  'warehousing-near-me': '/warehousing',
  'canton-fair-map': '/trade-agency',
  'canton-fair-phase-2': '/trade-agency',
  'canton-fair-phase-3': '/trade-agency',
  'canton-fair-registration': '/trade-agency',
  'clothing-manufacturer-in-china': '/trade-agency',
  'sourcing-agent-china': '/trade-agency',
  'sourcing-agents-for-china': '/trade-agency',
  'chinese-fashion-brands': '/trade-agency',
  'cargo-forwarding-services': '/services',
  'freight-broker-services': '/services',
  'china-import-freight-forwarder-near-me': '/services',
  'freight-forwarder-company': '/services',
  'international-shipping-companies': '/services',
  'certificate-of-origin': '/customs-clearance',
  'commerce-control-list': '/customs-clearance',
  'consignee-in-meaning': '/customs-clearance',
  'customs-clearance-for-imports': '/customs-clearance',
  'export-control-regulations-usa': '/customs-clearance',
  'import-general-manifest': '/customs-clearance',
  'letter-of-origin': '/customs-clearance',
  'statement-of-origin': '/customs-clearance',
  'us-customs-and-border-protection': '/customs-clearance',
  'harmonized-tariff-code': '/blog/hts-code-search',
  'cheap-shipping-from-china': '/sea-freight',
  'china-ocean-shipping': '/sea-freight',
  'fcl-and-lcl': '/sea-freight',
  'lcl-and-fcl': '/sea-freight',
  'freight-by-sea': '/sea-freight',
  'less-than-container-load-shipping': '/sea-freight',
  'less-than-container-load': '/sea-freight',
  'roll-on-roll-off-shipping': '/sea-freight',
  'sea-freight-cost-calculator': '/sea-freight',
  'sea-freight-forwarder-china': '/sea-freight',
  'sea-freight-from-china': '/sea-freight',
  'temperature-controlled-shipping': '/sea-freight',
  'freight-surcharge-types-what-youre-really-paying-for': '/sea-freight',
  'china-door-to-door-shipping': '/door-to-door',
  'door-to-door-delivery-tracking': '/door-to-door',
  'door-to-door-shipping': '/door-to-door',
  'china-to-uk-sea-freight-time': '/shipping-china-to-united-kingdom',
  'german-freight-forwarders': '/shipping-china-to-germany',
  'shipping-from-china-to-united-states': '/shipping-china-to-united-states',
  'shipping-from-china-to-usa': '/shipping-china-to-united-states',
  'freight-forwarder-china-to-europe': '/shipping-routes-china',
  'international-shipping-from-china': '/shipping-routes-china',
  'cif-fob': '/incoterms/cif',
  'fob-and-cif': '/incoterms/fob',
  'fob-delivery-meaning': '/incoterms/fob',
  'fob-price-meaning': '/incoterms/fob',
  'ddp-vs-ddu': '/incoterms/ddp',
  'ddu-and-ddp-incoterms': '/incoterms/ddp',
  'ddu-and-ddp': '/incoterms/ddp',
  'ddu-ddp-incoterms': '/incoterms/ddp',
  'delivered-duty-paid-meaning': '/incoterms/ddp',
  'ex-works-price': '/incoterms/exw',
  'exw-price-definition': '/incoterms/exw',
  'drop-and-ship': '/warehousing',
  'e-commerce-shipping-solutions': '/warehousing',
  'best-shipping-method-for-shopify-stores': '/warehousing',
  'freight-forwarding-terminology-glossary': '/incoterms',
  'china-to-us-time-difference': '/',
  'freight-forwarder-china-to-indonesia': '/',
  'shekou-ferry-terminal': '/',
  'shipment-and-cargo': '/',
  'supply-chain-management-best-practices': '/',
  'insurance-options-for-international-shipping': '/',
  'freight-class-codes-and-their-meanings': '/',
};

// Country pages merged into the country guide (approved 15 November 2026): one page per country.
const mergedCountryPages: Record<string, string> = {
  '/sea-freight-from-china-to-usa': '/shipping-china-to-united-states',
  '/sea-freight-from-china-to-canada': '/shipping-china-to-canada',
  '/sea-freight-from-china-to-uk': '/shipping-china-to-united-kingdom',
  '/sea-freight-from-china-to-australia': '/shipping-china-to-australia',
  '/sea-freight-from-china-to-germany': '/shipping-china-to-germany',
  '/sea-freight-from-china-to-italy': '/shipping-china-to-italy',
  '/sea-freight-from-china-to-netherlands': '/shipping-china-to-netherlands',
  '/sea-freight-from-china-to-sweden': '/shipping-china-to-sweden',
  '/sea-freight-from-china-to-czech-republic': '/shipping-china-to-czech-republic',
  '/sea-freight-from-china-to-norway': '/shipping-china-to-norway',
  '/air-freight-from-china-to-usa': '/shipping-china-to-united-states',
  '/air-freight-from-china-to-canada': '/shipping-china-to-canada',
  '/air-freight-from-china-to-uk': '/shipping-china-to-united-kingdom',
  '/air-freight-from-china-to-australia': '/shipping-china-to-australia',
  '/air-freight-from-china-to-germany': '/shipping-china-to-germany',
  '/air-freight-from-china-to-netherlands': '/shipping-china-to-netherlands',
  '/shipping-routes-china-to-usa': '/shipping-china-to-united-states',
};

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...Object.entries(mergedCountryPages).map(([source, destination]) => ({
        source,
        destination,
        statusCode: 301,
      })),
      ...Object.entries(retiredBlogRedirects).map(([slug, destination]) => ({
        source: `/blog/${slug}`,
        destination,
        statusCode: 301,
      })),
      {
        source: '/ddp-shipping-from-china',
        destination: '/blog/ddp-shipping-from-china',
        statusCode: 301,
      },
      {
        source: '/amazon-fba-freight-forwarding',
        destination: '/blog/amazon-fba-freight-forwarding',
        statusCode: 301,
      },
      {
        source: '/cbm-calculator',
        destination: '/blog/cbm-calculator',
        statusCode: 301,
      },
      {
        source: '/chargeable-weight-calculator',
        destination: '/blog/chargeable-weight-calculator',
        statusCode: 301,
      },
      {
        source: '/shipping-china-to-uk',
        destination: '/shipping-china-to-united-kingdom',
        statusCode: 301,
      },
      {
        source: '/shipping-china-to-usa',
        destination: '/shipping-china-to-united-states',
        statusCode: 301,
      },
      {
        source: '/sea-freight-:slug([a-z0-9-]+)-to-leghorn',
        destination: '/sea-freight-:slug-to-livorno',
        statusCode: 301,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.outrank.so',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdnimg.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    // Optimize images: convert to WebP, set quality, cache for 1 year
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: false,
  },
  async rewrites() {
    return [
      // Sea freight flat URLs: /sea-freight-shanghai-to-new-york -> /sea-freight/shanghai-to-new-york
      // Note: (routes) is a route group, so it doesn't appear in the URL path
      {
        source: '/sea-freight-:slug([a-z0-9-]+)',
        destination: '/sea-freight/:slug',
      },
      // Air freight flat URLs: /air-freight-shanghai-to-new-york -> /air-freight/shanghai-to-new-york
      {
        source: '/air-freight-:slug([a-z0-9-]+)',
        destination: '/air-freight/:slug',
      },
    ];
  },
  // Note: Security headers are now handled by edge middleware (src/middleware.ts)
  // This reduces Vercel Edge Request CPU Duration by processing at edge, not origin
};

export default nextConfig;
