/**
 * Batch Content Generation Script
 *
 * This script generates unique content for all air freight and sea freight routes
 * using the Claude API. The generated content is saved to JSON files that are
 * consumed by the route pages.
 *
 * Usage:
 *   npx ts-node scripts/generate-route-content.ts
 *
 * Requirements:
 *   - ANTHROPIC_API_KEY environment variable must be set
 *   - Run from the project root directory
 */

import Anthropic from '@anthropic-ai/sdk';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// ES module compatibility for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Anthropic client
const anthropic = new Anthropic();

// Route data (copied from routeGenerator.ts to avoid import issues)
const airOrigins = [
  { city: 'Shanghai', port: 'Shanghai Pudong Airport (PVG)', code: 'PVG' },
  { city: 'Shenzhen', port: "Shenzhen Bao'an Airport (SZX)", code: 'SZX' },
  { city: 'Guangzhou', port: 'Guangzhou Baiyun Airport (CAN)', code: 'CAN' },
  { city: 'Beijing', port: 'Beijing Capital Airport (PEK)', code: 'PEK' },
  { city: 'Qingdao', port: 'Qingdao Jiaodong Airport (TAO)', code: 'TAO' },
  { city: 'Xiamen', port: 'Xiamen Gaoqi Airport (XMN)', code: 'XMN' },
];

const seaOrigins = [
  { city: 'Shanghai', port: 'Port of Shanghai (CNSHA)', code: 'CNSHA' },
  { city: 'Shenzhen', port: 'Port of Shenzhen (CNSZX)', code: 'CNSZX' },
  { city: 'Guangzhou', port: 'Port of Guangzhou (CNGZH)', code: 'CNGZH' },
  { city: 'Ningbo', port: 'Ningbo-Zhoushan Port (CNNGB)', code: 'CNNGB' },
  { city: 'Qingdao', port: 'Port of Qingdao (CNTAO)', code: 'CNTAO' },
  { city: 'Tianjin', port: 'Port of Tianjin (CNTSN)', code: 'CNTSN' },
  { city: 'Xiamen', port: 'Port of Xiamen (CNXMN)', code: 'CNXMN' },
  { city: 'Hong Kong', port: 'Port of Hong Kong (HKHKG)', code: 'HKHKG' },
];

const allDestinations: Record<string, { city: string; seaPort?: string; airPort?: string; country: string; seaTransit?: string; airTransit?: string }> = {
  // United States
  'los-angeles': { city: 'Los Angeles', seaPort: 'Port of Los Angeles (USLAX)', airPort: 'Los Angeles International Airport (LAX)', country: 'United States', seaTransit: '15-18', airTransit: '2-3' },
  'long-beach': { city: 'Long Beach', seaPort: 'Port of Long Beach (USLGB)', airPort: 'Long Beach Airport (LGB)', country: 'United States', seaTransit: '15-18', airTransit: '2-3' },
  'new-york': { city: 'New York', seaPort: 'Port of New York/New Jersey (USNYC)', airPort: 'JFK International Airport (JFK)', country: 'United States', seaTransit: '22-28', airTransit: '3-4' },
  'oakland': { city: 'Oakland', seaPort: 'Port of Oakland (USOAK)', airPort: 'Oakland International Airport (OAK)', country: 'United States', seaTransit: '14-17', airTransit: '2-3' },
  'seattle': { city: 'Seattle', seaPort: 'Port of Seattle (USSEA)', airPort: 'Seattle-Tacoma Airport (SEA)', country: 'United States', seaTransit: '12-15', airTransit: '2-3' },
  'tacoma': { city: 'Tacoma', seaPort: 'Port of Tacoma (USTAC)', airPort: 'Seattle-Tacoma Airport (SEA)', country: 'United States', seaTransit: '12-15', airTransit: '2-3' },
  'savannah': { city: 'Savannah', seaPort: 'Port of Savannah (USSAV)', airPort: 'Savannah/Hilton Head Airport (SAV)', country: 'United States', seaTransit: '25-30', airTransit: '3-5' },
  'houston': { city: 'Houston', seaPort: 'Port of Houston (USHOU)', airPort: 'George Bush Airport (IAH)', country: 'United States', seaTransit: '28-32', airTransit: '3-4' },
  'dallas': { city: 'Dallas', seaPort: 'Dallas Logistics Hub (via Houston)', airPort: 'Dallas/Fort Worth Airport (DFW)', country: 'United States', seaTransit: '30-35', airTransit: '3-4' },
  'salt-lake-city': { city: 'Salt Lake City', seaPort: 'Salt Lake City Inland Port', airPort: 'Salt Lake City Airport (SLC)', country: 'United States', seaTransit: '18-22', airTransit: '3-4' },
  'charleston': { city: 'Charleston', seaPort: 'Port of Charleston (USCHS)', airPort: 'Charleston Airport (CHS)', country: 'United States', seaTransit: '28-32', airTransit: '3-5' },
  'norfolk': { city: 'Norfolk', seaPort: 'Port of Virginia (USNFK)', airPort: 'Norfolk Airport (ORF)', country: 'United States', seaTransit: '26-30', airTransit: '3-5' },
  'jacksonville': { city: 'Jacksonville', seaPort: 'Port of Jacksonville (USJAX)', airPort: 'Jacksonville Airport (JAX)', country: 'United States', seaTransit: '28-32', airTransit: '3-5' },
  'wilmington': { city: 'Wilmington', seaPort: 'Port of Wilmington (USILM)', airPort: 'Wilmington Airport (ILM)', country: 'United States', seaTransit: '28-32', airTransit: '3-5' },
  'atlanta': { city: 'Atlanta', seaPort: 'Atlanta Logistics Hub (via Savannah)', airPort: 'Hartsfield-Jackson Airport (ATL)', country: 'United States', seaTransit: '27-32', airTransit: '3-4' },
  'boston': { city: 'Boston', seaPort: 'Port of Boston (USBOS)', airPort: 'Logan International Airport (BOS)', country: 'United States', seaTransit: '28-33', airTransit: '3-4' },
  'chicago': { city: 'Chicago', seaPort: 'Chicago Logistics Hub (via rail)', airPort: "O'Hare International Airport (ORD)", country: 'United States', seaTransit: '20-25', airTransit: '3-4' },
  'denver': { city: 'Denver', seaPort: 'Denver Logistics Hub (via rail)', airPort: 'Denver International Airport (DEN)', country: 'United States', seaTransit: '22-27', airTransit: '3-4' },
  'miami': { city: 'Miami', seaPort: 'Port of Miami (USMIA)', airPort: 'Miami International Airport (MIA)', country: 'United States', seaTransit: '30-35', airTransit: '3-5' },
  'san-francisco': { city: 'San Francisco', seaPort: 'Port of San Francisco (USSFO)', airPort: 'San Francisco International Airport (SFO)', country: 'United States', seaTransit: '14-17', airTransit: '2-3' },
  // Canada
  'vancouver': { city: 'Vancouver', seaPort: 'Port of Vancouver (CAVAN)', airPort: 'Vancouver International Airport (YVR)', country: 'Canada', seaTransit: '14-17', airTransit: '2-3' },
  'toronto': { city: 'Toronto', seaPort: 'Port of Toronto (via rail)', airPort: 'Toronto Pearson Airport (YYZ)', country: 'Canada', seaTransit: '20-25', airTransit: '3-4' },
  'montreal': { city: 'Montreal', seaPort: 'Port of Montreal (CAMTR)', airPort: 'Montreal-Trudeau Airport (YUL)', country: 'Canada', seaTransit: '25-30', airTransit: '3-4' },
  'halifax': { city: 'Halifax', seaPort: 'Port of Halifax (CAHAL)', airPort: 'Halifax Stanfield Airport (YHZ)', country: 'Canada', seaTransit: '28-32', airTransit: '4-5' },
  'calgary': { city: 'Calgary', seaPort: 'Calgary Logistics Hub (via Vancouver)', airPort: 'Calgary International Airport (YYC)', country: 'Canada', seaTransit: '18-22', airTransit: '2-3' },
  'prince-rupert': { city: 'Prince Rupert', seaPort: 'Port of Prince Rupert (CAPRR)', airPort: 'Prince Rupert Airport (YPR)', country: 'Canada', seaTransit: '10-13', airTransit: '3-4' },
  'ottawa': { city: 'Ottawa', seaPort: 'Ottawa Logistics Hub (via Montreal)', airPort: 'Ottawa International Airport (YOW)', country: 'Canada', seaTransit: '27-32', airTransit: '3-4' },
  'regina': { city: 'Regina', seaPort: 'Regina Logistics Hub (via Vancouver)', airPort: 'Regina International Airport (YQR)', country: 'Canada', seaTransit: '20-25', airTransit: '3-4' },
  'winnipeg': { city: 'Winnipeg', seaPort: 'Winnipeg Logistics Hub (via Vancouver)', airPort: 'Winnipeg James Armstrong Richardson Airport (YWG)', country: 'Canada', seaTransit: '20-25', airTransit: '3-4' },
  // United Kingdom
  'felixstowe': { city: 'Felixstowe', seaPort: 'Port of Felixstowe (GBFXT)', country: 'United Kingdom', seaTransit: '28-32' },
  'southampton': { city: 'Southampton', seaPort: 'Port of Southampton (GBSOU)', country: 'United Kingdom', seaTransit: '30-35' },
  'london-gateway': { city: 'London Gateway', seaPort: 'London Gateway (GBLGP)', country: 'United Kingdom', seaTransit: '28-32' },
  'london': { city: 'London', seaPort: 'Port of London (GBLON)', airPort: 'London Heathrow Airport (LHR)', country: 'United Kingdom', seaTransit: '28-32', airTransit: '3-4' },
  // Australia
  'sydney': { city: 'Sydney', seaPort: 'Port Botany (AUSYD)', airPort: 'Sydney Kingsford Smith Airport (SYD)', country: 'Australia', seaTransit: '18-22', airTransit: '2-3' },
  'melbourne': { city: 'Melbourne', seaPort: 'Port of Melbourne (AUMEL)', airPort: 'Melbourne Airport (MEL)', country: 'Australia', seaTransit: '18-22', airTransit: '2-3' },
  'brisbane': { city: 'Brisbane', seaPort: 'Port of Brisbane (AUBNE)', airPort: 'Brisbane Airport (BNE)', country: 'Australia', seaTransit: '16-20', airTransit: '2-3' },
  'fremantle': { city: 'Fremantle', seaPort: 'Port of Fremantle (AUFRE)', airPort: 'Perth Airport (PER)', country: 'Australia', seaTransit: '14-18', airTransit: '2-3' },
  'canberra': { city: 'Canberra', airPort: 'Canberra Airport (CBR)', country: 'Australia', airTransit: '3-4' },
  // Germany
  'hamburg': { city: 'Hamburg', seaPort: 'Port of Hamburg (DEHAM)', airPort: 'Hamburg Airport (HAM)', country: 'Germany', seaTransit: '30-35', airTransit: '3-5' },
  'bremerhaven': { city: 'Bremerhaven', seaPort: 'Port of Bremerhaven (DEBRV)', country: 'Germany', seaTransit: '30-35' },
  'frankfurt': { city: 'Frankfurt', seaPort: 'Frankfurt Logistics Hub (via Hamburg)', airPort: 'Frankfurt Airport (FRA)', country: 'Germany', seaTransit: '32-38', airTransit: '3-4' },
  'munich': { city: 'Munich', seaPort: 'Munich Logistics Hub (via Hamburg)', airPort: 'Munich Airport (MUC)', country: 'Germany', seaTransit: '33-40', airTransit: '3-5' },
  // Netherlands
  'rotterdam': { city: 'Rotterdam', seaPort: 'Port of Rotterdam (NLRTM)', country: 'Netherlands', seaTransit: '28-32' },
};

const airRouteMatrix: Record<string, string[]> = {
  'shanghai': ['los-angeles', 'long-beach', 'new-york', 'chicago', 'san-francisco', 'atlanta', 'dallas', 'seattle', 'miami', 'houston', 'boston', 'denver', 'oakland', 'tacoma', 'savannah', 'vancouver', 'toronto', 'montreal', 'calgary', 'ottawa', 'halifax', 'prince-rupert', 'london', 'sydney', 'melbourne', 'brisbane', 'canberra', 'fremantle', 'frankfurt', 'munich', 'hamburg'],
  'shenzhen': ['los-angeles', 'long-beach', 'new-york', 'chicago', 'san-francisco', 'atlanta', 'dallas', 'seattle', 'miami', 'houston', 'boston', 'denver', 'oakland', 'tacoma', 'savannah', 'vancouver', 'toronto', 'montreal', 'calgary', 'ottawa', 'halifax', 'prince-rupert', 'london', 'sydney', 'melbourne', 'brisbane', 'canberra', 'fremantle', 'frankfurt', 'munich', 'hamburg'],
  'guangzhou': ['los-angeles', 'long-beach', 'new-york', 'chicago', 'san-francisco', 'atlanta', 'dallas', 'seattle', 'miami', 'oakland', 'tacoma', 'savannah', 'vancouver', 'toronto', 'montreal', 'calgary', 'ottawa', 'halifax', 'london', 'sydney', 'melbourne', 'brisbane', 'canberra', 'fremantle', 'frankfurt', 'munich', 'hamburg'],
  'beijing': ['los-angeles', 'long-beach', 'new-york', 'chicago', 'san-francisco', 'atlanta', 'dallas', 'seattle', 'miami', 'houston', 'boston', 'denver', 'oakland', 'tacoma', 'savannah', 'vancouver', 'toronto', 'montreal', 'calgary', 'ottawa', 'halifax', 'prince-rupert', 'london', 'sydney', 'melbourne', 'brisbane', 'canberra', 'fremantle', 'frankfurt', 'munich', 'hamburg'],
  'qingdao': ['los-angeles', 'new-york', 'chicago', 'san-francisco', 'atlanta', 'dallas', 'miami', 'boston', 'denver', 'vancouver', 'toronto', 'montreal', 'calgary', 'ottawa', 'london', 'sydney', 'melbourne', 'brisbane', 'canberra', 'frankfurt', 'munich'],
  'xiamen': ['los-angeles', 'new-york', 'chicago', 'san-francisco', 'atlanta', 'dallas', 'miami', 'boston', 'denver', 'vancouver', 'toronto', 'montreal', 'calgary', 'ottawa', 'london', 'sydney', 'melbourne', 'brisbane', 'canberra', 'frankfurt', 'munich'],
};

const seaRouteMatrix: Record<string, string[]> = {
  'shanghai': ['los-angeles', 'long-beach', 'new-york', 'oakland', 'seattle', 'tacoma', 'savannah', 'houston', 'dallas', 'salt-lake-city', 'charleston', 'norfolk', 'jacksonville', 'wilmington', 'atlanta', 'boston', 'chicago', 'denver', 'miami', 'san-francisco', 'vancouver', 'toronto', 'montreal', 'halifax', 'calgary', 'prince-rupert', 'ottawa', 'regina', 'winnipeg', 'felixstowe', 'southampton', 'london-gateway', 'london', 'sydney', 'melbourne', 'brisbane', 'fremantle', 'hamburg', 'bremerhaven', 'rotterdam'],
  'shenzhen': ['los-angeles', 'long-beach', 'new-york', 'oakland', 'seattle', 'tacoma', 'savannah', 'houston', 'dallas', 'salt-lake-city', 'charleston', 'norfolk', 'jacksonville', 'atlanta', 'boston', 'san-francisco', 'vancouver', 'toronto', 'montreal', 'halifax', 'calgary', 'prince-rupert', 'ottawa', 'regina', 'winnipeg', 'felixstowe', 'southampton', 'london-gateway', 'sydney', 'melbourne', 'brisbane', 'fremantle', 'hamburg', 'bremerhaven', 'frankfurt', 'munich', 'rotterdam'],
  'guangzhou': ['los-angeles', 'long-beach', 'new-york', 'oakland', 'seattle', 'tacoma', 'savannah', 'houston', 'dallas', 'salt-lake-city', 'charleston', 'norfolk', 'jacksonville', 'atlanta', 'boston', 'chicago', 'denver', 'miami', 'san-francisco', 'vancouver', 'toronto', 'montreal', 'halifax', 'calgary', 'prince-rupert', 'ottawa', 'regina', 'winnipeg', 'felixstowe', 'southampton', 'london-gateway', 'london', 'sydney', 'melbourne', 'brisbane', 'fremantle', 'hamburg', 'bremerhaven', 'munich', 'rotterdam'],
  'ningbo': ['los-angeles', 'long-beach', 'new-york', 'oakland', 'seattle', 'tacoma', 'savannah', 'houston', 'dallas', 'salt-lake-city', 'charleston', 'norfolk', 'jacksonville', 'chicago', 'miami', 'san-francisco', 'vancouver', 'toronto', 'montreal', 'halifax', 'calgary', 'prince-rupert', 'ottawa', 'regina', 'winnipeg', 'felixstowe', 'southampton', 'london-gateway', 'london', 'sydney', 'melbourne', 'brisbane', 'fremantle', 'hamburg', 'bremerhaven', 'frankfurt', 'munich', 'rotterdam'],
  'qingdao': ['los-angeles', 'long-beach', 'new-york', 'oakland', 'seattle', 'tacoma', 'savannah', 'houston', 'dallas', 'salt-lake-city', 'charleston', 'norfolk', 'jacksonville', 'atlanta', 'boston', 'denver', 'san-francisco', 'vancouver', 'toronto', 'montreal', 'halifax', 'calgary', 'prince-rupert', 'ottawa', 'regina', 'winnipeg', 'felixstowe', 'southampton', 'london-gateway', 'london', 'sydney', 'melbourne', 'brisbane', 'fremantle', 'hamburg', 'bremerhaven', 'frankfurt', 'munich', 'rotterdam'],
  'tianjin': ['los-angeles', 'long-beach', 'new-york', 'oakland', 'seattle', 'tacoma', 'savannah', 'houston', 'dallas', 'salt-lake-city', 'charleston', 'norfolk', 'jacksonville', 'atlanta', 'boston', 'chicago', 'denver', 'miami', 'san-francisco', 'vancouver', 'toronto', 'montreal', 'halifax', 'calgary', 'prince-rupert', 'ottawa', 'regina', 'winnipeg', 'felixstowe', 'southampton', 'london-gateway', 'london', 'sydney', 'melbourne', 'brisbane', 'fremantle', 'hamburg', 'bremerhaven', 'frankfurt', 'munich', 'rotterdam'],
  'xiamen': ['los-angeles', 'long-beach', 'new-york', 'oakland', 'seattle', 'tacoma', 'savannah', 'houston', 'dallas', 'salt-lake-city', 'charleston', 'norfolk', 'jacksonville', 'atlanta', 'boston', 'chicago', 'denver', 'san-francisco', 'vancouver', 'toronto', 'montreal', 'halifax', 'calgary', 'prince-rupert', 'ottawa', 'regina', 'winnipeg', 'felixstowe', 'southampton', 'london-gateway', 'london', 'sydney', 'melbourne', 'brisbane', 'fremantle', 'hamburg', 'bremerhaven', 'munich', 'rotterdam'],
  'hong-kong': ['los-angeles', 'long-beach', 'new-york', 'oakland', 'seattle', 'tacoma', 'savannah', 'houston', 'dallas', 'salt-lake-city', 'charleston', 'norfolk', 'jacksonville', 'vancouver', 'toronto', 'montreal', 'halifax', 'calgary', 'prince-rupert', 'regina', 'winnipeg', 'felixstowe', 'southampton', 'london-gateway', 'sydney', 'melbourne', 'brisbane', 'fremantle', 'hamburg', 'bremerhaven', 'rotterdam'],
};

// Style instructions for Claude (user's original instructions)
const STYLE_INSTRUCTIONS = `Write with the authority of an industry insider who simplifies complex logistics for practical business use. Don't use Em Dash. Don't use too many hyphens. Don't use industry jargon without explanation. Write at a 9th-grade reading level. Your voice should be professional yet approachable, acknowledging complexity while focusing on solutions. Be helpful and advisory rather than just informational, showing empathy for business challenges. Build trust through specific data points, real port names, and correct industry terminology.

CRITICAL: Vary your sentence openings - do NOT start multiple paragraphs with the same phrase. Each paragraph should have a unique opening. Avoid repetitive patterns across different routes.

Write each section as a single paragraph of 4-6 sentences. Do not use bullet points, numbered lists, or markdown formatting. Write in flowing prose only.`;

interface RouteContent {
  benefits: string;
  rates: string;
  transitTimes: string;
}

interface RouteInfo {
  originCity: string;
  originPort: string;
  destinationCity: string;
  destinationPort: string;
  country: string;
  transitTime: string;
  freightType: 'air' | 'sea';
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Check for test mode
const isTestMode = process.argv.includes('--test');
const testLimit = 1; // Number of routes per freight type in test mode

async function generateContentForRoute(route: RouteInfo): Promise<RouteContent> {
  const freightLabel = route.freightType === 'air' ? 'Air Freight' : 'Sea Freight';
  const currentYear = new Date().getFullYear();

  const prompt = `${STYLE_INSTRUCTIONS}

Generate unique content for a ${freightLabel.toLowerCase()} shipping route from ${route.originCity}, China to ${route.destinationCity}, ${route.country}.

Route details:
- Origin: ${route.originCity} (${route.originPort})
- Destination: ${route.destinationCity} (${route.destinationPort})
- Country: ${route.country}
- Transit Time: ${route.transitTime} days
- Service Type: ${freightLabel}
- Current Year: ${currentYear}

Generate THREE separate content sections. Each section should be a single flowing paragraph of 4-6 sentences. Do not use bullet points, numbered lists, headers, or markdown. Write in prose only.

Respond in this exact JSON format:
{
  "benefits": "A paragraph about the benefits of ${freightLabel.toLowerCase()} from ${route.originCity} to ${route.destinationCity}. Focus on speed advantages, carrier options, cargo safety, and business value. Mention the specific airports/ports by name.",
  "rates": "A paragraph about current ${currentYear} ${freightLabel.toLowerCase()} rates from ${route.originCity} to ${route.destinationCity}. Include specific price ranges per kg (air) or per CBM/container (sea), factors affecting cost, additional fees like fuel surcharge and customs, and cost-saving tips.",
  "transitTimes": "A paragraph explaining transit times for ${freightLabel.toLowerCase()} from ${route.originCity} to ${route.destinationCity}. Include flight/sailing duration, customs clearance estimates, different service levels (express/standard/economy), and tips for faster processing."
}

Make the content unique and specific to this route. Reference the actual port/airport names, typical cargo types for ${route.country}, and relevant customs considerations.`;

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1500,
    messages: [
      { role: 'user', content: prompt }
    ]
  });

  const textContent = response.content.find(c => c.type === 'text');
  if (!textContent || textContent.type !== 'text') {
    throw new Error('No text content in response');
  }

  // Extract JSON from response
  const jsonMatch = textContent.text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('No JSON found in response');
  }

  let jsonStr = jsonMatch[0];

  // Clean up common JSON issues from Claude's responses
  // Remove any trailing content after the last }
  const lastBrace = jsonStr.lastIndexOf('}');
  if (lastBrace !== -1) {
    jsonStr = jsonStr.substring(0, lastBrace + 1);
  }

  // Fix unescaped quotes inside strings by finding and fixing problematic patterns
  // Replace smart quotes with regular quotes
  jsonStr = jsonStr.replace(/[\u201C\u201D]/g, '"');
  jsonStr = jsonStr.replace(/[\u2018\u2019]/g, "'");

  // Try to parse, if it fails try additional cleanup
  try {
    return JSON.parse(jsonStr) as RouteContent;
  } catch (firstError) {
    // Try removing control characters
    jsonStr = jsonStr.replace(/[\x00-\x1F\x7F]/g, ' ');

    // Try to extract just the three fields we need
    const benefitsMatch = jsonStr.match(/"benefits"\s*:\s*"((?:[^"\\]|\\.)*)"/);
    const ratesMatch = jsonStr.match(/"rates"\s*:\s*"((?:[^"\\]|\\.)*)"/);
    const transitMatch = jsonStr.match(/"transitTimes"\s*:\s*"((?:[^"\\]|\\.)*)"/);

    if (benefitsMatch && ratesMatch && transitMatch) {
      return {
        benefits: benefitsMatch[1].replace(/\\"/g, '"').replace(/\\n/g, ' '),
        rates: ratesMatch[1].replace(/\\"/g, '"').replace(/\\n/g, ' '),
        transitTimes: transitMatch[1].replace(/\\"/g, '"').replace(/\\n/g, ' ')
      };
    }

    // If still failing, throw the original error
    throw firstError;
  }
}

async function generateAllContent() {
  // Load existing content to skip routes that already have content
  const dataDir = path.join(__dirname, '..', 'src', 'lib', 'data', 'generated');
  let airContent: Record<string, RouteContent> = {};
  let seaContent: Record<string, RouteContent> = {};

  try {
    const airPath = path.join(dataDir, 'air-freight-content.json');
    if (fs.existsSync(airPath)) {
      airContent = JSON.parse(fs.readFileSync(airPath, 'utf-8'));
      console.log(`Loaded ${Object.keys(airContent).length} existing air freight routes`);
    }
  } catch (e) {
    console.log('No existing air freight content found, starting fresh');
  }

  try {
    const seaPath = path.join(dataDir, 'sea-freight-content.json');
    if (fs.existsSync(seaPath)) {
      seaContent = JSON.parse(fs.readFileSync(seaPath, 'utf-8'));
      console.log(`Loaded ${Object.keys(seaContent).length} existing sea freight routes`);
    }
  } catch (e) {
    console.log('No existing sea freight content found, starting fresh');
  }

  // Build list of all routes
  const airRoutes: RouteInfo[] = [];
  const seaRoutes: RouteInfo[] = [];

  // Air routes
  for (const [originSlug, destSlugs] of Object.entries(airRouteMatrix)) {
    const origin = airOrigins.find(o => slugify(o.city) === originSlug);
    if (!origin) continue;

    for (const destSlug of destSlugs) {
      const dest = allDestinations[destSlug];
      if (!dest || !dest.airPort) continue;

      airRoutes.push({
        originCity: origin.city,
        originPort: origin.port,
        destinationCity: dest.city,
        destinationPort: dest.airPort,
        country: dest.country,
        transitTime: dest.airTransit || '3-5',
        freightType: 'air',
      });
    }
  }

  // Sea routes
  for (const [originSlug, destSlugs] of Object.entries(seaRouteMatrix)) {
    const origin = seaOrigins.find(o => slugify(o.city) === originSlug);
    if (!origin) continue;

    for (const destSlug of destSlugs) {
      const dest = allDestinations[destSlug];
      if (!dest || !dest.seaPort) continue;

      seaRoutes.push({
        originCity: origin.city,
        originPort: origin.port,
        destinationCity: dest.city,
        destinationPort: dest.seaPort,
        country: dest.country,
        transitTime: dest.seaTransit || '20-30',
        freightType: 'sea',
      });
    }
  }

  // Apply test mode limit if enabled
  const airRoutesToGenerate = isTestMode ? airRoutes.slice(0, testLimit) : airRoutes;
  const seaRoutesToGenerate = isTestMode ? seaRoutes.slice(0, testLimit) : seaRoutes;

  if (isTestMode) {
    console.log('\n🧪 TEST MODE ENABLED - Only generating sample routes\n');
  }

  console.log(`\nTotal routes to generate:`);
  console.log(`  Air freight: ${airRoutesToGenerate.length} routes${isTestMode ? ` (test mode, ${airRoutes.length} total available)` : ''}`);
  console.log(`  Sea freight: ${seaRoutesToGenerate.length} routes${isTestMode ? ` (test mode, ${seaRoutes.length} total available)` : ''}`);
  console.log(`  Total: ${airRoutesToGenerate.length + seaRoutesToGenerate.length} routes\n`);

  // Generate air freight content
  console.log('Generating air freight content...\n');
  let completed = 0;
  let skipped = 0;
  for (const route of airRoutesToGenerate) {
    const key = `${slugify(route.originCity)}-to-${slugify(route.destinationCity)}`;

    // Skip if already exists
    if (airContent[key]) {
      skipped++;
      continue;
    }

    try {
      console.log(`  [${++completed}/${airRoutesToGenerate.length - skipped}] ${route.originCity} → ${route.destinationCity}...`);
      const content = await generateContentForRoute(route);
      airContent[key] = content;

      // Save after each successful generation to prevent data loss
      fs.writeFileSync(
        path.join(dataDir, 'air-freight-content.json'),
        JSON.stringify(airContent, null, 2)
      );

      // Rate limiting: wait 500ms between requests
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`    Error generating content for ${key}:`, error);
      // Continue with other routes
    }
  }
  if (skipped > 0) {
    console.log(`  (Skipped ${skipped} routes that already had content)`);
  }

  // Generate sea freight content
  console.log('\nGenerating sea freight content...\n');
  completed = 0;
  skipped = 0;
  for (const route of seaRoutesToGenerate) {
    const key = `${slugify(route.originCity)}-to-${slugify(route.destinationCity)}`;

    // Skip if already exists
    if (seaContent[key]) {
      skipped++;
      continue;
    }

    try {
      console.log(`  [${++completed}/${seaRoutesToGenerate.length - skipped}] ${route.originCity} → ${route.destinationCity}...`);
      const content = await generateContentForRoute(route);
      seaContent[key] = content;

      // Save after each successful generation to prevent data loss
      fs.writeFileSync(
        path.join(dataDir, 'sea-freight-content.json'),
        JSON.stringify(seaContent, null, 2)
      );

      // Rate limiting: wait 500ms between requests
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`    Error generating content for ${key}:`, error);
      // Continue with other routes
    }
  }
  if (skipped > 0) {
    console.log(`  (Skipped ${skipped} routes that already had content)`);
  }

  // Save to JSON files (dataDir already defined at top of function)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(dataDir, 'air-freight-content.json'),
    JSON.stringify(airContent, null, 2)
  );
  console.log(`\nSaved air freight content to src/lib/data/generated/air-freight-content.json`);

  fs.writeFileSync(
    path.join(dataDir, 'sea-freight-content.json'),
    JSON.stringify(seaContent, null, 2)
  );
  console.log(`Saved sea freight content to src/lib/data/generated/sea-freight-content.json`);

  console.log(`\nGeneration complete!`);
  console.log(`  Air routes with content: ${Object.keys(airContent).length}`);
  console.log(`  Sea routes with content: ${Object.keys(seaContent).length}`);
}

// Run the script
generateAllContent().catch(console.error);
