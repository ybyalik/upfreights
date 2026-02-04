import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.outrank.so',
        pathname: '/**',
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
