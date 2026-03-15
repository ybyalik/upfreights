/**
 * Generated Route Content Utility
 *
 * This module provides functions to retrieve AI-generated content for shipping routes.
 * Content is generated via scripts/generateRouteContent.ts and stored in JSON.
 */

// Types matching the generation script
export interface RouteContent {
  slug: string;
  originCity: string;
  destinationCity: string;
  destinationCountry: string;
  freightType: 'sea' | 'air';
  generatedAt: string;
  content: {
    overview?: string;
    portInsights?: {
      origin: string;
      destination: string;
    };
    industryTips?: string[];
    tradeCorridorSignificance?: string;
    seasonalConsiderations?: string;
    customContent?: Record<string, string>;
  };
}

export interface GeneratedRouteData {
  lastUpdated: string;
  routes: Record<string, RouteContent>;
}

// Import the generated content (will be empty object if file doesn't exist yet)
let generatedData: GeneratedRouteData = { lastUpdated: '', routes: {} };

try {
  // Dynamic import for the JSON data
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  generatedData = require('@/lib/data/generatedRouteContent.json');
} catch {
  // File doesn't exist yet - that's okay
  console.log('No generated route content found. Run scripts/generateRouteContent.ts to generate.');
}

/**
 * Get generated content for a specific route
 */
export function getGeneratedContent(
  slug: string,
  freightType: 'sea' | 'air'
): RouteContent | null {
  const key = `${freightType}-${slug}`;
  return generatedData.routes[key] || null;
}

/**
 * Get the overview text for a route
 */
export function getRouteOverview(
  slug: string,
  freightType: 'sea' | 'air'
): string | null {
  const content = getGeneratedContent(slug, freightType);
  return content?.content.overview || null;
}

/**
 * Get port insights for a route
 */
export function getPortInsights(
  slug: string,
  freightType: 'sea' | 'air'
): { origin: string; destination: string } | null {
  const content = getGeneratedContent(slug, freightType);
  return content?.content.portInsights || null;
}

/**
 * Get industry tips for a route
 */
export function getIndustryTips(
  slug: string,
  freightType: 'sea' | 'air'
): string[] | null {
  const content = getGeneratedContent(slug, freightType);
  return content?.content.industryTips || null;
}

/**
 * Get trade corridor significance for a route
 */
export function getTradeCorridorSignificance(
  slug: string,
  freightType: 'sea' | 'air'
): string | null {
  const content = getGeneratedContent(slug, freightType);
  return content?.content.tradeCorridorSignificance || null;
}

/**
 * Get seasonal considerations for a route
 */
export function getSeasonalConsiderations(
  slug: string,
  freightType: 'sea' | 'air'
): string | null {
  const content = getGeneratedContent(slug, freightType);
  return content?.content.seasonalConsiderations || null;
}

/**
 * Get custom content by key for a route
 */
export function getCustomContent(
  slug: string,
  freightType: 'sea' | 'air',
  key: string
): string | null {
  const content = getGeneratedContent(slug, freightType);
  return content?.content.customContent?.[key] || null;
}

/**
 * Check if generated content exists for a route
 */
export function hasGeneratedContent(
  slug: string,
  freightType: 'sea' | 'air'
): boolean {
  const key = `${freightType}-${slug}`;
  return key in generatedData.routes;
}

/**
 * Get the last update time for all generated content
 */
export function getContentLastUpdated(): string | null {
  return generatedData.lastUpdated || null;
}

/**
 * Get all routes that have generated content
 */
export function getRoutesWithContent(freightType?: 'sea' | 'air'): string[] {
  return Object.keys(generatedData.routes)
    .filter((key) => !freightType || key.startsWith(`${freightType}-`))
    .map((key) => key.replace(/^(sea|air)-/, ''));
}

/**
 * Get stats about generated content
 */
export function getContentStats(): {
  totalRoutes: number;
  seaRoutes: number;
  airRoutes: number;
  lastUpdated: string | null;
} {
  const routes = Object.keys(generatedData.routes);
  return {
    totalRoutes: routes.length,
    seaRoutes: routes.filter((k) => k.startsWith('sea-')).length,
    airRoutes: routes.filter((k) => k.startsWith('air-')).length,
    lastUpdated: generatedData.lastUpdated || null,
  };
}
