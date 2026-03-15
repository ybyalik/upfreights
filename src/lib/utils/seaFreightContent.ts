/**
 * Sea Freight Generated Content
 *
 * This module provides generated content for sea freight route pages.
 * Content is loaded from a pre-generated JSON file created by the
 * scripts/generate-route-content.ts script using the Claude API.
 */

import generatedContent from '@/lib/data/generated/sea-freight-content.json';

export interface SeaFreightGeneratedContent {
  benefits: string;
  rates: string;
  transitTimes: string;
}

// Type assertion for the imported JSON
const contentData = generatedContent as Record<string, SeaFreightGeneratedContent>;

/**
 * Get generated content for a sea freight route
 */
export function getSeaFreightContent(
  originCity: string,
  destinationCity: string
): SeaFreightGeneratedContent | null {
  const slug = `${originCity.toLowerCase().replace(/\s+/g, '-')}-to-${destinationCity.toLowerCase().replace(/\s+/g, '-')}`;
  return contentData[slug] || null;
}

/**
 * Get benefits section content
 */
export function getSeaFreightBenefits(originCity: string, destinationCity: string): string | null {
  const content = getSeaFreightContent(originCity, destinationCity);
  return content?.benefits || null;
}

/**
 * Get rates section content
 */
export function getSeaFreightRates(originCity: string, destinationCity: string): string | null {
  const content = getSeaFreightContent(originCity, destinationCity);
  return content?.rates || null;
}

/**
 * Get transit times section content
 */
export function getSeaFreightTransitTimes(originCity: string, destinationCity: string): string | null {
  const content = getSeaFreightContent(originCity, destinationCity);
  return content?.transitTimes || null;
}

/**
 * Check if generated content exists for a route
 */
export function hasSeaFreightContent(originCity: string, destinationCity: string): boolean {
  return getSeaFreightContent(originCity, destinationCity) !== null;
}

/**
 * Get section titles for the generated content
 */
export function getSeaFreightSectionTitles(originCity: string, destinationCity: string) {
  return {
    benefits: `Benefits of Sea Freight Shipping from ${originCity} to ${destinationCity}`,
    rates: `Sea Freight Shipping Rates from ${originCity} to ${destinationCity}`,
    transitTimes: `Transit Times for Sea Freight from ${originCity} to ${destinationCity}`,
  };
}
