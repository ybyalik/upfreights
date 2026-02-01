import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/data/blog';
import { generateSeaRoutes, generateAirRoutes } from '@/lib/data/routeGenerator';

const BASE_URL = 'https://upfreights.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Static pages matching existing site
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/quote`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/all-routes`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/incoterms`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/shipping-routes-china-to-usa`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/shipping-routes-china`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Service pages (flat URLs like /sea-freight, /air-freight, etc.)
  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/sea-freight`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/air-freight`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/door-to-door`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/customs-clearance`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/warehousing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/trade-agency`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Case study pages
  const caseStudyPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/case-studies/nigerian-sesame-to-qingdao`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/case-studies/baby-carriages-china-to-los-angeles`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/case-studies/oversized-equipment-japan-to-hangzhou`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Incoterms pages
  const incotermsSlugs = ['exw', 'fca', 'fas', 'fob', 'cfr', 'cif', 'cpt', 'cip', 'dap', 'dpu', 'ddp'];
  const incotermsPages: MetadataRoute.Sitemap = incotermsSlugs.map((term) => ({
    url: `${BASE_URL}/incoterms/${term}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Country destination pages (flat URLs like /shipping-china-to-usa)
  const countryDestinations = [
    'shipping-china-to-australia',
    'shipping-china-to-belgium',
    'shipping-china-to-brazil',
    'shipping-china-to-canada',
    'shipping-china-to-france',
    'shipping-china-to-germany',
    'shipping-china-to-india',
    'shipping-china-to-italy',
    'shipping-china-to-japan',
    'shipping-china-to-mexico',
    'shipping-china-to-netherlands',
    'shipping-china-to-new-zealand',
    'shipping-china-to-singapore',
    'shipping-china-to-south-korea',
    'shipping-china-to-spain',
    'shipping-china-to-uk',
    'shipping-china-to-united-kingdom',
    'shipping-china-to-united-states',
    'shipping-china-to-usa',
  ];

  const countryPages: MetadataRoute.Sitemap = countryDestinations.map((dest) => ({
    url: `${BASE_URL}/${dest}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Sea freight country pages (like /sea-freight-from-china-to-usa)
  const seaFreightCountryPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/sea-freight-from-china-to-usa`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sea-freight-from-china-to-canada`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sea-freight-from-china-to-uk`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sea-freight-from-china-to-australia`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sea-freight-from-china-to-germany`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sea-freight-from-china-to-netherlands`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Air freight country pages (like /air-freight-from-china-to-usa)
  const airFreightCountryPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/air-freight-from-china-to-usa`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/air-freight-from-china-to-canada`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/air-freight-from-china-to-uk`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/air-freight-from-china-to-australia`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/air-freight-from-china-to-germany`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/air-freight-from-china-to-netherlands`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt || currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Sea freight routes (flat URLs like /sea-freight-shanghai-to-los-angeles)
  const seaRoutes = generateSeaRoutes();
  const seaFreightRoutes: MetadataRoute.Sitemap = seaRoutes.map((route) => ({
    url: `${BASE_URL}/sea-freight-${route.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Air freight routes (flat URLs like /air-freight-shanghai-to-los-angeles)
  const airRoutes = generateAirRoutes();
  const airFreightRoutes: MetadataRoute.Sitemap = airRoutes.map((route) => ({
    url: `${BASE_URL}/air-freight-${route.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...caseStudyPages,
    ...incotermsPages,
    ...countryPages,
    ...seaFreightCountryPages,
    ...airFreightCountryPages,
    ...blogPages,
    ...seaFreightRoutes,
    ...airFreightRoutes,
  ];
}
