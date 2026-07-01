import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RichCountryPage } from '@/components/sections';
import { generateSeaRoutes, generateAirRoutes } from '@/lib/data/routeGenerator';
import { getCountryBySlug } from '@/lib/data/countries';
import { generateCountryServiceSchema } from '@/lib/schema';

const SLUG = 'shipping-china-to-australia';
const country = getCountryBySlug(SLUG);

const title = country?.content?.metaTitle ?? `Shipping from China to ${country?.name ?? 'Australia'}`;
const description = country?.content?.metaDescription ?? country?.description;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title,
    description,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
};

export default function ShippingToAustraliaPage() {
  if (!country) notFound();

  const seaRoutes = generateSeaRoutes().filter(
    (r) => r.destinationCountry.toLowerCase() === 'australia'
  );
  const airRoutes = generateAirRoutes().filter(
    (r) => r.destinationCountry.toLowerCase() === 'australia'
  );

  const serviceSchema = generateCountryServiceSchema({
    name: country.name,
    slug: country.slug,
    description: country.description,
    majorPorts: country.majorPorts,
    transitTime: country.transitTime,
  });

  return (
    <RichCountryPage
      country={country}
      seaRoutes={seaRoutes}
      airRoutes={airRoutes}
      serviceSchema={serviceSchema}
    />
  );
}
