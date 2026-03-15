'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Ship, ArrowRight, Anchor, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import type { Route } from '@/lib/types';

interface SeaRoutesFilterableProps {
  routes: Route[];
}

const subPortMap: Record<string, string> = {
  'Shekou': 'Shenzhen',
  'Yantian': 'Shenzhen',
  'Nansha': 'Guangzhou',
};

export function SeaRoutesFilterable({ routes }: SeaRoutesFilterableProps) {
  const [originFilter, setOriginFilter] = useState<string>('all');
  const [countryFilter, setCountryFilter] = useState<string>('all');

  // Build origins list with sub-ports
  const origins = useMemo(() => {
    const uniqueOrigins = [...new Set(routes.map(r => r.originCity))];
    const subPorts: string[] = [];
    if (routes.some(r => r.originCity === 'Shenzhen' && r.destinationCountry === 'Italy')) {
      subPorts.push('Shekou', 'Yantian');
    }
    if (routes.some(r => r.originCity === 'Guangzhou' && r.destinationCountry === 'Italy')) {
      subPorts.push('Nansha');
    }
    return [...uniqueOrigins, ...subPorts].sort();
  }, [routes]);

  const countries = useMemo(() => {
    return [...new Set(routes.map(r => r.destinationCountry))].sort();
  }, [routes]);

  const isSubPortFilter = originFilter in subPortMap;
  const subPortParentCity = isSubPortFilter ? subPortMap[originFilter] : null;

  const filteredRoutes = useMemo(() => {
    let filtered = routes;

    if (originFilter !== 'all') {
      if (isSubPortFilter) {
        filtered = filtered.filter(r => r.originCity === subPortParentCity && r.destinationCountry === 'Italy');
      } else {
        filtered = filtered.filter(r => r.originCity === originFilter);
      }
    }

    if (countryFilter !== 'all') {
      filtered = filtered.filter(r => r.destinationCountry === countryFilter);
    }

    return filtered;
  }, [routes, originFilter, countryFilter, isSubPortFilter, subPortParentCity]);

  // Group filtered routes by origin
  const routesByOrigin = useMemo(() => {
    return filteredRoutes.reduce((acc, route) => {
      if (!acc[route.originCity]) acc[route.originCity] = [];
      acc[route.originCity].push(route);
      return acc;
    }, {} as Record<string, Route[]>);
  }, [filteredRoutes]);

  const originCities = Object.keys(routesByOrigin).sort();

  const hasActiveFilters = originFilter !== 'all' || countryFilter !== 'all';

  const clearFilters = () => {
    setOriginFilter('all');
    setCountryFilter('all');
  };

  return (
    <div>
      {/* Filters */}
      <div className="bg-card border border-border/50 rounded-xl p-4 md:p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Filter className="h-4 w-4" />
            Filter Routes
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Origin Filter */}
            <Select value={originFilter} onValueChange={setOriginFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Origin City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Origins</SelectItem>
                {origins.map(origin => (
                  <SelectItem key={origin} value={origin}>{origin}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Country Filter */}
            <Select value={countryFilter} onValueChange={setCountryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Destination Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                {countries.map(country => (
                  <SelectItem key={country} value={country}>{country}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="shrink-0">
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </div>

        {/* Results count */}
        <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Showing {filteredRoutes.length} routes
            {hasActiveFilters && ` (filtered from ${routes.length} total)`}
          </span>
        </div>
      </div>

      {/* Routes grouped by origin */}
      <div className="space-y-8">
        {originCities.map((originCity) => {
          const cityRoutes = routesByOrigin[originCity];
          return (
            <div key={originCity}>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Ship className="h-5 w-5 text-ocean" />
                From {originCity}
                <span className="text-sm font-normal text-muted-foreground">({cityRoutes.length} routes)</span>
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {!isSubPortFilter && cityRoutes.map((route) => (
                  <Link
                    key={route.id}
                    href={`/sea-freight-${route.slug}`}
                    className="p-3 bg-card border border-border/50 rounded-lg hover:border-orange transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-foreground font-medium truncate">{route.destinationCity}</span>
                      <span className="text-xs text-muted-foreground flex-shrink-0">
                        {route.transitTime}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-orange transition-colors flex-shrink-0" />
                  </Link>
                ))}
                {/* Sub-port entries */}
                {[
                  ...(originCity === 'Shenzhen' ? [
                    { name: 'Shekou', anchor: 'shekou' },
                    { name: 'Yantian', anchor: 'yantian' },
                  ] : []),
                  ...(originCity === 'Guangzhou' ? [
                    { name: 'Nansha', anchor: 'nansha' },
                  ] : []),
                ]
                .filter((subPort) => {
                  if (isSubPortFilter) return subPort.name === originFilter;
                  return true;
                })
                .flatMap((subPort) =>
                  cityRoutes
                    .filter(route => route.destinationCountry === 'Italy')
                    .map((route) => (
                      <Link
                        key={`${subPort.anchor}-${route.id}`}
                        href={`/sea-freight-${route.slug}#${subPort.anchor}`}
                        className="p-3 bg-card border border-border/50 rounded-lg hover:border-orange transition-colors flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-foreground font-medium truncate">{route.destinationCity}</span>
                          <Badge variant="outline" className="text-[10px] px-1 py-0 border-copper/30 text-copper flex-shrink-0">
                            {subPort.name}
                          </Badge>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-orange transition-colors flex-shrink-0" />
                      </Link>
                    ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* No results */}
      {filteredRoutes.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <Filter className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No routes found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your filters to see more results.
          </p>
          <Button variant="outline" onClick={clearFilters}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}
