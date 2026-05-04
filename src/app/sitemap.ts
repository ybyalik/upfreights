import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';
import { generateSeaRoutes, generateAirRoutes } from '@/lib/data/routeGenerator';
import { getAllCountrySlugs, getAllSeaFreightCountrySlugs } from '@/lib/data/countries';

export const revalidate = 3600;

const BASE_URL = 'https://upfreights.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Stable per-page date so search engines don't see every URL "change" on every revalidate.
  // Bump when the page content materially changes.
  const STATIC_LAST_MODIFIED = '2026-03-28';

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: STATIC_LAST_MODIFIED, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/services`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/quote`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE_URL}/all-routes`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/case-studies`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/incoterms`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/shipping-routes-china-to-usa`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/shipping-routes-china`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms-of-service`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Service pages (flat URLs like /sea-freight, /air-freight, etc.)
  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/sea-freight`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/air-freight`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/door-to-door`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/customs-clearance`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/warehousing`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/trade-agency`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Case study pages
  const caseStudyPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/case-studies/nigerian-sesame-to-qingdao`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/case-studies/baby-carriages-china-to-los-angeles`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/case-studies/oversized-equipment-japan-to-hangzhou`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Incoterms pages
  const incotermsSlugs = ['exw', 'fca', 'fas', 'fob', 'cfr', 'cif', 'cpt', 'cip', 'dap', 'dpu', 'ddp'];
  const incotermsPages: MetadataRoute.Sitemap = incotermsSlugs.map((term) => ({
    url: `${BASE_URL}/incoterms/${term}`,
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Country destination pages — dynamically generated from countries.ts
  const countryPages: MetadataRoute.Sitemap = getAllCountrySlugs().map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Sea freight country pages — dynamically generated from countries.ts
  const seaFreightCountryPages: MetadataRoute.Sitemap = getAllSeaFreightCountrySlugs().map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Air freight country pages (like /air-freight-from-china-to-usa)
  const airFreightCountryPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/air-freight-from-china-to-usa`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/air-freight-from-china-to-canada`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/air-freight-from-china-to-uk`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/air-freight-from-china-to-australia`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/air-freight-from-china-to-germany`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/air-freight-from-china-to-netherlands`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Blog posts from Supabase
  const { data: blogPostsData } = await supabase
    .from('blog_posts')
    .select('slug, published_at, updated_at');

  const blogPages: MetadataRoute.Sitemap = (blogPostsData || []).map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updated_at || post.published_at || STATIC_LAST_MODIFIED,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Sea freight routes (flat URLs like /sea-freight-shanghai-to-los-angeles)
  const seaRoutes = generateSeaRoutes();
  const seaFreightRoutes: MetadataRoute.Sitemap = seaRoutes.map((route) => ({
    url: `${BASE_URL}/sea-freight-${route.slug}`,
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Air freight routes (flat URLs like /air-freight-shanghai-to-los-angeles)
  const airRoutes = generateAirRoutes();
  const airFreightRoutes: MetadataRoute.Sitemap = airRoutes.map((route) => ({
    url: `${BASE_URL}/air-freight-${route.slug}`,
    lastModified: STATIC_LAST_MODIFIED,
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
