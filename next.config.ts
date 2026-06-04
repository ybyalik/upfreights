import type { NextConfig } from "next";

// Blog posts that have been retired. Each 301-redirects to the home page so any
// indexed URL or backlink keeps its link equity instead of returning a 404.
const retiredBlogSlugs = [
  '20-foot-container-dimensions',
  '20-foot-container-size',
  '20-ft-container-in-cbm',
  '40-feet-container-size',
  '40-ft-container-dimensions-in-feet',
  '40-ft-container-size',
  '40-hq-container-size',
  'air-cargo-forwarders',
  'air-freight-from-china-to-europe',
  'bonded-storage-warehouse',
  'canton-fair-map',
  'canton-fair-phase-2',
  'canton-fair-phase-3',
  'canton-fair-registration',
  'cargo-forwarding-services',
  'cbm-for-20-ft-container',
  'certificate-of-origin',
  'cheap-shipping-from-china',
  'china-door-to-door-shipping',
  'china-import-freight-forwarder-near-me',
  'china-ocean-shipping',
  'china-to-uk-sea-freight-time',
  'china-to-us-time-difference',
  'chinese-fashion-brands',
  'cif-fob',
  'clothing-manufacturer-in-china',
  'commerce-control-list',
  'consignee-in-meaning',
  'container-load-calculator',
  'container-loading-calculator',
  'customs-clearance-for-imports',
  'ddp-vs-ddu',
  'ddu-and-ddp-incoterms',
  'ddu-and-ddp',
  'ddu-ddp-incoterms',
  'delivered-duty-paid-meaning',
  'door-to-door-delivery-tracking',
  'door-to-door-shipping',
  'drop-and-ship',
  'e-commerce-shipping-solutions',
  'ex-works-price',
  'export-control-regulations-usa',
  'exw-price-definition',
  'fcl-and-lcl',
  'fob-and-cif',
  'fob-delivery-meaning',
  'fob-price-meaning',
  'freight-broker-services',
  'freight-by-sea',
  'freight-forwarder-air-freight',
  'freight-forwarder-china-to-europe',
  'freight-forwarder-china-to-indonesia',
  'freight-forwarder-company',
  'freight-surcharge-types-what-youre-really-paying-for',
  'german-freight-forwarders',
  'harmonized-tariff-code',
  'how-many-cbm-in-40-feet-container',
  'how-many-cbm-in-40-ft-container',
  'how-many-cbms-in-a-40-ft-container',
  'how-many-cubic-meters-in-40-ft-container',
  'how-to-calculate-cbm',
  'how-to-find-cbm',
  'import-general-manifest',
  'international-air-transport-association',
  'international-shipping-companies',
  'international-shipping-from-china',
  'lcl-and-fcl',
  'less-than-container-load-shipping',
  'less-than-container-load',
  'letter-of-origin',
  'roll-on-roll-off-shipping',
  'sea-freight-cost-calculator',
  'sea-freight-forwarder-china',
  'sea-freight-from-china',
  'shekou-ferry-terminal',
  'shipment-and-cargo',
  'shipping-from-china-to-united-states',
  'shipping-from-china-to-usa',
  'sourcing-agent-china',
  'sourcing-agents-for-china',
  'statement-of-origin',
  'supply-chain-management-best-practices',
  'temperature-controlled-shipping',
  'third-party-logistics-provider',
  'us-customs-and-border-protection',
  'warehousing-near-me',
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...retiredBlogSlugs.map((slug) => ({
        source: `/blog/${slug}`,
        destination: '/',
        permanent: true,
      })),
      {
        source: '/blog/freight-forwarding-terminology-glossary',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/insurance-options-for-international-shipping',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/freight-class-codes-and-their-meanings',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/best-shipping-method-for-shopify-stores',
        destination: '/',
        permanent: true,
      },
      {
        source: '/shipping-china-to-uk',
        destination: '/shipping-china-to-united-kingdom',
        permanent: true,
      },
      {
        source: '/shipping-china-to-usa',
        destination: '/shipping-china-to-united-states',
        permanent: true,
      },
      {
        source: '/sea-freight-:slug([a-z0-9-]+)-to-leghorn',
        destination: '/sea-freight-:slug-to-livorno',
        permanent: true,
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
