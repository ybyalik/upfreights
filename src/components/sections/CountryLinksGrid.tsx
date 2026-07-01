import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { countryDestinations } from '@/lib/data/countries';

/**
 * Grid of links to every country landing page (/shipping-china-to-<country>),
 * sorted alphabetically. Used on /all-routes and /shipping-routes-china so the
 * country pages are internally linked, not just in the sitemap.
 */
export function CountryLinksGrid() {
  const countries = [...countryDestinations].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
      {countries.map((country) => (
        <Link
          key={country.slug}
          href={`/${country.slug}`}
          className="group flex items-center justify-between gap-2 rounded-md border border-border/50 px-3 py-2.5 text-sm transition-colors hover:border-orange hover:bg-orange/5"
        >
          <span className="font-medium text-foreground group-hover:text-orange transition-colors">
            {country.name}
          </span>
          <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-orange opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>
      ))}
    </div>
  );
}
