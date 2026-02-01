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
