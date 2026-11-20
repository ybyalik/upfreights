/**
 * Blog cleanup, 14 November 2026 (owner's rules).
 *
 * How each post was sorted, using Google Search Console (16 Aug to 13 Nov 2026),
 * the IndexChex index check of 13 Nov 2026 and DataForSEO backlink data of 14 Nov 2026.
 * No blog post had a click from Google in those 90 days, so "has rankings" means
 * Google still shows it: at least 20 impressions, or at least 10 impressions at an
 * average position of 20 or better, or ChatGPT cited it in our test.
 *
 * 1. Shown in Google                          -> kept
 * 2. In Google, not shown, no backlinks        -> 410 Gone
 * 3. Not in Google, no backlinks               -> 410 Gone
 * 4. Has backlinks, not shown / not in Google  -> 301 to the closest blog or service page
 * 5. Near-duplicates of a kept post            -> 301 to the kept post (merged)
 *
 * The full list with the numbers is in
 * ~/Desktop/upfreights-review-2026-11/blog-cleanup-2026-11-14.csv
 */

/** Posts that answer 410 Gone. */
export const BLOG_GONE_SLUGS = new Set<string>([
  // in Google, not shown, no backlinks
  'china-shipping-one-stop-services',
  'garment-clothing-manufacturers',
  'international-air-transport',
  'lianyungang-jiangsu-china',
  'oem-odm-definition',
  'proof-of-origin',
  'shanghai-to-vancouver',
  'turkish-freight-forwarders',
  'uk-time-to-china-time',
  // not in Google, no backlinks
  'amazon-hong-kong',
  'bill-of-origin',
  'brazil-freight-forwarders',
  'canadian-freight-forwarders',
  'canton-fair-dates',
  'federal-express-tracking-by-tracking-number',
  'foire-de-canton',
  'fx-tracking-number',
  'hong-kong-post-track-and-trace',
  'led-light-importer',
  'less-than-truck-load',
  'msc-cont-tracking',
  'oocl-cntr-tracking',
  'singapore-freight-forwarding',
  'taicang-jiangsu-china',
  'ups-access-point',
  // review of 15 Nov 2026: off-topic or wrong direction, no backlinks
  'best-freight-forwarding-companies-in-china',
  'royal-post-tracking',
  'import-auto-parts',
  'import-into-china',
]);

/** Posts that answer 301 to another page. */
export const BLOG_REDIRECTS: Record<string, string> = {
  // removed on 14 Nov as having no backlinks; Ahrefs (17 Nov) shows live links, so 301 instead
  'letter-of-credit': '/incoterms',
  'china-sea-freight-rates': '/sea-freight',
  // merged into a kept post (near-duplicates)
  'size-of-20-ft-container': '/blog/dimension-of-20-ft-container',
  '40-ft-container': '/blog/dimensions-of-a-40-hc-container',
  '40-feet-container-dimensions': '/blog/dimensions-of-a-40-hc-container',
  '40-foot-container-size': '/blog/dimensions-of-a-40-hc-container',
  'freight-forwarding-service': '/services',
  'freight-forward-company': '/services',
  'freight-forwarding-services-companies': '/services',
  'freight-forward-service': '/services',
  'international-freight-forwarder': '/services',
  'us-hts-code': '/blog/hts-code-search',
  'find-harmonized-code': '/blog/hts-code-search',
  'ex-work-price-definition': '/incoterms/exw',
  'ex-works-price-meaning': '/incoterms/exw',
  'china-vat-tax': '/shipping-china-to-united-kingdom',
  'fba-on-amazon': '/blog/amazon-fba-freight-forwarding',
  // merged into an existing guide or service page
  'meaning-of-fob': '/incoterms/fob',
  'delivery-duty-paid-shipping': '/incoterms/ddp',
  // has backlinks, not shown in Google: sent to the closest page
  'incoterms-2025-explained': '/incoterms',
  'oem-and-odm': '/trade-agency',
  'sourcing-agents-in-china': '/trade-agency',
  'sourcing-agent-in-china': '/trade-agency',
  'yiwu-wholesale-marketplace': '/trade-agency',
  'amz-fulfillment-center': '/blog/amazon-fba-freight-forwarding',
  'shipping-from-china-to-us': '/shipping-china-to-united-states',
  'dhl-express-from-china': '/air-freight',
  'bill-of-lading': '/customs-clearance',
  'indian-freight-forwarding-companies': '/services',
  'freight-quote-vs-estimate-difference': '/quote',
  'how-to-reduce-shipping-time-from-china': '/air-freight',
  // review of 15 Nov 2026: folded into the page that owns the topic, or removed with backlinks kept
  'best-freight-rate-comparison-tools-cut-shipping-costs': '/quote',
  'china-fulfillment-services-for-dropshippers': '/warehousing',
  'top-product-categories-to-source-from-china': '/trade-agency',
  'logistics-hubs-in-the-middle-east': '/all-routes',
  'maersk-container-track-trace': '/sea-freight',
  'exw-price-meaning': '/incoterms/exw',
  'vat-from-china': '/shipping-china-to-united-kingdom',
  'freight-forwarding-services': '/services',
  'freight-consolidation-strategies': '/sea-freight',
};

/** True for any post that should no longer be listed (gone or redirected). */
export function isRemovedBlogSlug(slug: string): boolean {
  return BLOG_GONE_SLUGS.has(slug) || slug in BLOG_REDIRECTS;
}

/** Every removed slug, written for a Supabase `not in` filter: ("a","b",...). */
export const REMOVED_BLOG_SLUGS_FILTER = `(${[...BLOG_GONE_SLUGS, ...Object.keys(BLOG_REDIRECTS)]
  .map((s) => `"${s}"`)
  .join(',')})`;
