import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      {
        // Block aggressive/less useful bots to save bandwidth
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'PetalBot',
        disallow: '/',
      },
      {
        userAgent: 'BLEXBot',
        disallow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
    ],
    sitemap: 'https://upfreights.com/sitemap.xml',
  };
}
