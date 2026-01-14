/**
 * Air Freight Generated Content
 *
 * This module provides generated content for air freight route pages.
 * Content is loaded from a pre-generated JSON file created by the
 * scripts/generate-route-content.ts script using the Claude API.
 */

import generatedContent from '@/lib/data/generated/air-freight-content.json';

export interface AirFreightGeneratedContent {
  benefits: string;
  rates: string;
  transitTimes: string;
}

// Type assertion for the imported JSON
const contentData = generatedContent as Record<string, AirFreightGeneratedContent>;

/**
 * Get generated content for an air freight route
 */
export function getAirFreightContent(
  originCity: string,
  destinationCity: string
): AirFreightGeneratedContent | null {
  const slug = `${originCity.toLowerCase().replace(/\s+/g, '-')}-to-${destinationCity.toLowerCase().replace(/\s+/g, '-')}`;
  return contentData[slug] || null;
}

/**
 * Get benefits section content
 */
export function getAirFreightBenefits(originCity: string, destinationCity: string): string | null {
  const content = getAirFreightContent(originCity, destinationCity);
  return content?.benefits || null;
}

/**
 * Get rates section content
 */
export function getAirFreightRates(originCity: string, destinationCity: string): string | null {
  const content = getAirFreightContent(originCity, destinationCity);
  return content?.rates || null;
}

/**
 * Get transit times section content
 */
export function getAirFreightTransitTimes(originCity: string, destinationCity: string): string | null {
  const content = getAirFreightContent(originCity, destinationCity);
  return content?.transitTimes || null;
}

/**
 * Check if generated content exists for a route
 */
export function hasAirFreightContent(originCity: string, destinationCity: string): boolean {
  return getAirFreightContent(originCity, destinationCity) !== null;
}

/**
 * Get section titles for the generated content
 */
export function getAirFreightSectionTitles(originCity: string, destinationCity: string) {
  return {
    benefits: `Benefits of Air Freight Shipping from ${originCity} to ${destinationCity}`,
    rates: `Air Freight Shipping Rates from ${originCity} to ${destinationCity}`,
    transitTimes: `Transit Times for Air Freight from ${originCity} to ${destinationCity}`,
  };
}
