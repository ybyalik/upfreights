/**
 * AI Route Content Generator
 *
 * This script uses the Anthropic API to generate unique content for each shipping route.
 *
 * Prerequisites:
 * - Set ANTHROPIC_API_KEY environment variable
 * - npm install @anthropic-ai/sdk (if not already installed)
 *
 * Usage:
 * - Generate all routes: npx tsx scripts/generateRouteContent.ts
 * - Generate specific route: npx tsx scripts/generateRouteContent.ts --route "shanghai-to-los-angeles"
 * - Generate for freight type: npx tsx scripts/generateRouteContent.ts --type sea
 * - Dry run (no API calls): npx tsx scripts/generateRouteContent.ts --dry-run
 * - Skip existing: npx tsx scripts/generateRouteContent.ts --skip-existing
 * - Specify content types: npx tsx scripts/generateRouteContent.ts --content=overview,industryTips
 */

import Anthropic from '@anthropic-ai/sdk';
import * as fs from 'fs';
import * as path from 'path';

// Types for generated content
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

// Route info type (matches routeGenerator output)
interface RouteInfo {
  slug: string;
  originCity: string;
  originPort: string;
  destinationCity: string;
  destinationPort: string;
  destinationCountry: string;
  freightType: 'sea' | 'air';
}

// Configuration
const CONFIG = {
  outputPath: path.join(__dirname, '../src/lib/data/generatedRouteContent.json'),
  model: 'claude-sonnet-4-20250514' as const,
  maxTokens: 1024,
  batchSize: 5, // Process routes in batches to avoid rate limits
  delayBetweenBatches: 2000, // ms delay between batches
};

// Initialize Anthropic client (will be created when needed)
let anthropic: Anthropic | null = null;

function getAnthropicClient(): Anthropic {
  if (!anthropic) {
    anthropic = new Anthropic();
  }
  return anthropic;
}

// Load existing generated content if it exists
function loadExistingContent(): GeneratedRouteData {
  try {
    if (fs.existsSync(CONFIG.outputPath)) {
      const data = fs.readFileSync(CONFIG.outputPath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.log('No existing content found, starting fresh.');
  }
  return {
    lastUpdated: new Date().toISOString(),
    routes: {},
  };
}

// Save generated content
function saveContent(data: GeneratedRouteData): void {
  const dir = path.dirname(CONFIG.outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(CONFIG.outputPath, JSON.stringify(data, null, 2));
  console.log(`Content saved to ${CONFIG.outputPath}`);
}

// Build the prompt for content generation
function buildPrompt(route: RouteInfo, contentType: string, customPrompt?: string): string {
  const baseContext = `You are a freight forwarding expert writing content for a shipping company website (Upfreights).
The content should be informative, professional, and SEO-friendly.
Write in a confident, knowledgeable tone without being overly salesy.
Focus on practical information that would help someone shipping goods on this route.
Do not use generic filler language.`;

  const routeContext = `
Route: ${route.originCity}, China to ${route.destinationCity}, ${route.destinationCountry}
Origin Port: ${route.originPort}
Destination Port: ${route.destinationPort}
Destination Country: ${route.destinationCountry}
Freight Type: ${route.freightType === 'sea' ? 'Sea Freight (Ocean)' : 'Air Freight'}`;

  // If custom prompt is provided, use it
  if (customPrompt) {
    return `${baseContext}

${routeContext}

${customPrompt}`;
  }

  switch (contentType) {
    case 'overview':
      return `${baseContext}

${routeContext}

Write a unique 2-3 paragraph overview for this shipping route. Include:
- What makes this trade corridor significant
- Key industries and goods commonly shipped on this route
- General transit considerations

Keep it concise (150-200 words). Do not include headers or bullet points - just flowing paragraphs.
Do not start with "The" - vary your sentence structure.`;

    case 'portInsights':
      return `${baseContext}

${routeContext}

Write two short paragraphs (50-75 words each):
1. About the origin port/city - its significance as a shipping hub, any notable features for cargo
2. About the destination port/city - its role in trade, logistics infrastructure, customs efficiency

Return ONLY valid JSON in this exact format (no markdown, no extra text):
{"origin": "paragraph about origin", "destination": "paragraph about destination"}`;

    case 'industryTips':
      return `${baseContext}

${routeContext}

Provide 4-5 practical shipping tips specific to this route. Focus on:
- Best practices for this corridor
- Timing considerations
- Documentation tips specific to this destination
- Cost optimization suggestions

Return ONLY valid JSON array (no markdown, no extra text):
["tip 1", "tip 2", "tip 3", "tip 4"]`;

    case 'tradeCorridorSignificance':
      return `${baseContext}

${routeContext}

Write a single paragraph (75-100 words) explaining the significance of this trade corridor in global commerce.
Mention trade volume context, key industries served, and why this route matters.
Do not start with "The" - vary your sentence structure.`;

    case 'seasonalConsiderations':
      return `${baseContext}

${routeContext}

Write a single paragraph (75-100 words) about seasonal factors affecting this shipping route.
Include peak seasons (like Chinese New Year, Q4 retail rush), weather considerations, and how timing affects rates and availability.
Do not start with "The" - vary your sentence structure.`;

    default:
      return `${baseContext}\n${routeContext}\n\nGenerate content for: ${contentType}`;
  }
}

// Parse API response based on content type
function parseResponse(text: string, contentType: string): unknown {
  const cleanText = text.trim();

  if (contentType === 'portInsights' || contentType === 'industryTips') {
    try {
      // Try to extract JSON from the response
      const jsonMatch = cleanText.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      return JSON.parse(cleanText);
    } catch {
      console.warn(`  ⚠ Could not parse JSON for ${contentType}, using raw text`);
      if (contentType === 'industryTips') {
        return [cleanText];
      }
      return { origin: cleanText, destination: '' };
    }
  }

  return cleanText;
}

// Generate content for a single route
async function generateRouteContent(
  route: RouteInfo,
  contentTypes: string[] = ['overview', 'tradeCorridorSignificance'],
  customPrompts?: Record<string, string>
): Promise<RouteContent> {
  const content: RouteContent['content'] = {};
  const client = getAnthropicClient();

  for (const contentType of contentTypes) {
    const customPrompt = customPrompts?.[contentType];
    const prompt = buildPrompt(route, contentType, customPrompt);

    try {
      const response = await client.messages.create({
        model: CONFIG.model,
        max_tokens: CONFIG.maxTokens,
        messages: [{ role: 'user', content: prompt }],
      });

      const textContent = response.content[0];
      if (textContent.type === 'text') {
        const parsed = parseResponse(textContent.text, contentType);

        if (contentType === 'portInsights') {
          content.portInsights = parsed as { origin: string; destination: string };
        } else if (contentType === 'industryTips') {
          content.industryTips = parsed as string[];
        } else {
          (content as Record<string, unknown>)[contentType] = parsed;
        }

        console.log(`  ✓ Generated ${contentType}`);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`  ✗ Error generating ${contentType}: ${errorMessage}`);
    }
  }

  return {
    slug: route.slug,
    originCity: route.originCity,
    destinationCity: route.destinationCity,
    destinationCountry: route.destinationCountry,
    freightType: route.freightType,
    generatedAt: new Date().toISOString(),
    content,
  };
}

// Process routes in batches
async function processRoutes(
  routes: RouteInfo[],
  contentTypes: string[],
  existingData: GeneratedRouteData,
  options: { skipExisting: boolean; dryRun: boolean },
  customPrompts?: Record<string, string>
): Promise<GeneratedRouteData> {
  const data = { ...existingData, routes: { ...existingData.routes } };
  let processed = 0;
  let skipped = 0;

  const routesToProcess: RouteInfo[] = [];

  // First, determine which routes to process
  for (const route of routes) {
    const key = `${route.freightType}-${route.slug}`;

    if (options.skipExisting && data.routes[key]) {
      skipped++;
      continue;
    }

    routesToProcess.push(route);
  }

  console.log(`\nRoutes to process: ${routesToProcess.length}`);
  console.log(`Routes skipped (existing): ${skipped}\n`);

  // Process in batches
  for (let i = 0; i < routesToProcess.length; i += CONFIG.batchSize) {
    const batch = routesToProcess.slice(i, i + CONFIG.batchSize);

    for (const route of batch) {
      const key = `${route.freightType}-${route.slug}`;

      if (options.dryRun) {
        console.log(`[DRY RUN] Would generate: ${key}`);
        continue;
      }

      console.log(`\nProcessing ${key} (${processed + 1}/${routesToProcess.length})...`);
      const content = await generateRouteContent(route, contentTypes, customPrompts);
      data.routes[key] = content;
      processed++;
    }

    // Delay between batches to avoid rate limits
    if (i + CONFIG.batchSize < routesToProcess.length && !options.dryRun) {
      console.log(`\nPausing ${CONFIG.delayBetweenBatches}ms before next batch...`);
      await new Promise((resolve) => setTimeout(resolve, CONFIG.delayBetweenBatches));
    }
  }

  data.lastUpdated = new Date().toISOString();
  return data;
}

// Load routes from routeGenerator (dynamic import to handle path aliasing)
async function loadRoutes(): Promise<RouteInfo[]> {
  // Read the route generator file and extract route data
  const routeGeneratorPath = path.join(__dirname, '../src/lib/data/routeGenerator.ts');

  if (!fs.existsSync(routeGeneratorPath)) {
    console.error('Route generator not found at:', routeGeneratorPath);
    return [];
  }

  // For now, we'll use a simpler approach - read the routes from the generated static params
  // In production, you might want to compile the TypeScript or use a shared JSON file

  // Sample routes for demonstration
  const sampleRoutes: RouteInfo[] = [
    // Sea freight routes
    { slug: 'shanghai-to-los-angeles', originCity: 'Shanghai', originPort: 'Port of Shanghai', destinationCity: 'Los Angeles', destinationPort: 'Port of Los Angeles', destinationCountry: 'United States', freightType: 'sea' },
    { slug: 'shanghai-to-new-york', originCity: 'Shanghai', originPort: 'Port of Shanghai', destinationCity: 'New York', destinationPort: 'Port of New York/New Jersey', destinationCountry: 'United States', freightType: 'sea' },
    { slug: 'shenzhen-to-los-angeles', originCity: 'Shenzhen', originPort: 'Port of Shenzhen', destinationCity: 'Los Angeles', destinationPort: 'Port of Los Angeles', destinationCountry: 'United States', freightType: 'sea' },
    { slug: 'ningbo-to-rotterdam', originCity: 'Ningbo', originPort: 'Port of Ningbo-Zhoushan', destinationCity: 'Rotterdam', destinationPort: 'Port of Rotterdam', destinationCountry: 'Netherlands', freightType: 'sea' },
    { slug: 'shanghai-to-hamburg', originCity: 'Shanghai', originPort: 'Port of Shanghai', destinationCity: 'Hamburg', destinationPort: 'Port of Hamburg', destinationCountry: 'Germany', freightType: 'sea' },
    { slug: 'guangzhou-to-felixstowe', originCity: 'Guangzhou', originPort: 'Port of Guangzhou', destinationCity: 'Felixstowe', destinationPort: 'Port of Felixstowe', destinationCountry: 'United Kingdom', freightType: 'sea' },
    { slug: 'shanghai-to-sydney', originCity: 'Shanghai', originPort: 'Port of Shanghai', destinationCity: 'Sydney', destinationPort: 'Port of Sydney', destinationCountry: 'Australia', freightType: 'sea' },
    { slug: 'shenzhen-to-vancouver', originCity: 'Shenzhen', originPort: 'Port of Shenzhen', destinationCity: 'Vancouver', destinationPort: 'Port of Vancouver', destinationCountry: 'Canada', freightType: 'sea' },

    // Air freight routes
    { slug: 'shanghai-to-los-angeles', originCity: 'Shanghai', originPort: 'Shanghai Pudong Airport (PVG)', destinationCity: 'Los Angeles', destinationPort: 'Los Angeles Airport (LAX)', destinationCountry: 'United States', freightType: 'air' },
    { slug: 'shanghai-to-new-york', originCity: 'Shanghai', originPort: 'Shanghai Pudong Airport (PVG)', destinationCity: 'New York', destinationPort: 'JFK Airport', destinationCountry: 'United States', freightType: 'air' },
    { slug: 'shenzhen-to-london', originCity: 'Shenzhen', originPort: 'Shenzhen Bao\'an Airport (SZX)', destinationCity: 'London', destinationPort: 'London Heathrow (LHR)', destinationCountry: 'United Kingdom', freightType: 'air' },
    { slug: 'guangzhou-to-frankfurt', originCity: 'Guangzhou', originPort: 'Guangzhou Baiyun Airport (CAN)', destinationCity: 'Frankfurt', destinationPort: 'Frankfurt Airport (FRA)', destinationCountry: 'Germany', freightType: 'air' },
  ];

  return sampleRoutes;
}

// Main function
async function main() {
  const args = process.argv.slice(2);
  const options = {
    route: args.find((a) => a.startsWith('--route='))?.split('=')[1],
    type: args.find((a) => a.startsWith('--type='))?.split('=')[1] as 'sea' | 'air' | undefined,
    dryRun: args.includes('--dry-run'),
    skipExisting: args.includes('--skip-existing'),
    contentTypes: args.find((a) => a.startsWith('--content='))?.split('=')[1]?.split(',') ||
      ['overview', 'tradeCorridorSignificance', 'seasonalConsiderations'],
    limit: parseInt(args.find((a) => a.startsWith('--limit='))?.split('=')[1] || '0', 10),
  };

  console.log('═'.repeat(60));
  console.log('  AI Route Content Generator');
  console.log('═'.repeat(60));
  console.log('\nOptions:');
  console.log(`  Route filter: ${options.route || 'all'}`);
  console.log(`  Type filter: ${options.type || 'all'}`);
  console.log(`  Content types: ${options.contentTypes.join(', ')}`);
  console.log(`  Dry run: ${options.dryRun}`);
  console.log(`  Skip existing: ${options.skipExisting}`);
  console.log(`  Limit: ${options.limit || 'none'}`);
  console.log('');

  // Check for API key
  if (!process.env.ANTHROPIC_API_KEY && !options.dryRun) {
    console.error('❌ Error: ANTHROPIC_API_KEY environment variable is not set.');
    console.error('   Set it with: export ANTHROPIC_API_KEY=your-api-key');
    process.exit(1);
  }

  // Load routes
  let routes = await loadRoutes();

  // Apply filters
  if (options.route) {
    routes = routes.filter((r) => r.slug === options.route);
  }
  if (options.type) {
    routes = routes.filter((r) => r.freightType === options.type);
  }
  if (options.limit > 0) {
    routes = routes.slice(0, options.limit);
  }

  if (routes.length === 0) {
    console.log('No routes match the specified filters.');
    return;
  }

  console.log(`Found ${routes.length} routes to process.\n`);

  // Load existing content
  const existingData = loadExistingContent();
  console.log(`Existing content: ${Object.keys(existingData.routes).length} routes`);

  // Process routes
  const updatedData = await processRoutes(
    routes,
    options.contentTypes,
    existingData,
    { skipExisting: options.skipExisting, dryRun: options.dryRun }
  );

  // Save results
  if (!options.dryRun) {
    saveContent(updatedData);
  }

  console.log('\n' + '═'.repeat(60));
  console.log('  Generation complete!');
  console.log(`  Total routes in database: ${Object.keys(updatedData.routes).length}`);
  console.log('═'.repeat(60));
}

// Export for use as module
export {
  generateRouteContent,
  loadExistingContent,
  saveContent,
  buildPrompt,
  processRoutes,
  loadRoutes,
  CONFIG,
};

// Run if executed directly
main().catch(console.error);
