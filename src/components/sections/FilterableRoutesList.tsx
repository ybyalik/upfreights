'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Ship, Plane, ArrowRight, Filter, X, Clock, Anchor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Route } from '@/lib/types';

interface FilterableRoutesListProps {
  seaRoutes: Route[];
  airRoutes: Route[];
  countryName: string;
}

export function FilterableRoutesList({ seaRoutes, airRoutes, countryName }: FilterableRoutesListProps) {
  const [serviceTypeFilter, setServiceTypeFilter] = useState<'all' | 'sea' | 'air'>('all');
  const [originFilter, setOriginFilter] = useState<string>('all');
  const [destinationFilter, setDestinationFilter] = useState<string>('all');

  // Get unique origins and destinations based on service type filter
  const allRoutes = useMemo(() => [...seaRoutes, ...airRoutes], [seaRoutes, airRoutes]);

  // Filter routes based on service type for computing available origins/destinations
  const routesForFilters = useMemo(() => {
    if (serviceTypeFilter === 'sea') return seaRoutes;
    if (serviceTypeFilter === 'air') return airRoutes;
    return allRoutes;
  }, [seaRoutes, airRoutes, allRoutes, serviceTypeFilter]);

  // Sub-port mappings: sub-port name -> parent city
  const subPortMap: Record<string, string> = {
    'Shekou': 'Shenzhen',
    'Yantian': 'Shenzhen',
    'Nansha': 'Guangzhou',
  };

  const origins = useMemo(() => {
    const uniqueOrigins = [...new Set(routesForFilters.map(r => r.originCity))];
    // Add sub-ports if parent city has Italy routes
    const subPorts: string[] = [];
    if (routesForFilters.some(r => r.originCity === 'Shenzhen' && r.destinationCountry === 'Italy')) {
      subPorts.push('Shekou', 'Yantian');
    }
    if (routesForFilters.some(r => r.originCity === 'Guangzhou' && r.destinationCountry === 'Italy')) {
      subPorts.push('Nansha');
    }
    return [...uniqueOrigins, ...subPorts].sort();
  }, [routesForFilters]);

  const destinations = useMemo(() => {
    const uniqueDestinations = [...new Set(routesForFilters.map(r => r.destinationCity))];
    return uniqueDestinations.sort();
  }, [routesForFilters]);

  // Check if the origin filter is a sub-port
  const isSubPortFilter = originFilter in subPortMap;
  const subPortParentCity = isSubPortFilter ? subPortMap[originFilter] : null;

  // Filter routes
  const filteredSeaRoutes = useMemo(() => {
    if (serviceTypeFilter === 'air') return [];
    return seaRoutes.filter(route => {
      if (isSubPortFilter) {
        // When sub-port selected, show only parent city's Italy routes
        if (route.originCity !== subPortParentCity || route.destinationCountry !== 'Italy') return false;
      } else if (originFilter !== 'all' && route.originCity !== originFilter) {
        return false;
      }
      if (destinationFilter !== 'all' && route.destinationCity !== destinationFilter) return false;
      return true;
    });
  }, [seaRoutes, serviceTypeFilter, originFilter, destinationFilter, isSubPortFilter, subPortParentCity]);

  const filteredAirRoutes = useMemo(() => {
    if (serviceTypeFilter === 'sea') return [];
    return airRoutes.filter(route => {
      if (originFilter !== 'all' && route.originCity !== originFilter) return false;
      if (destinationFilter !== 'all' && route.destinationCity !== destinationFilter) return false;
      return true;
    });
  }, [airRoutes, serviceTypeFilter, originFilter, destinationFilter]);

  const totalFilteredRoutes = filteredSeaRoutes.length + filteredAirRoutes.length;
  const hasActiveFilters = serviceTypeFilter !== 'all' || originFilter !== 'all' || destinationFilter !== 'all';

  const clearFilters = () => {
    setServiceTypeFilter('all');
    setOriginFilter('all');
    setDestinationFilter('all');
  };

  return (
    <div>
      {/* Filters */}
      <Card className="border-border/50 mb-8">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Filter className="h-4 w-4" />
              Filter Routes
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Service Type Filter */}
              <Select value={serviceTypeFilter} onValueChange={(v) => {
                setServiceTypeFilter(v as 'all' | 'sea' | 'air');
                // Reset origin/destination filters when service type changes
                setOriginFilter('all');
                setDestinationFilter('all');
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Service Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  <SelectItem value="sea">
                    <span className="flex items-center gap-2">
                      <Ship className="h-4 w-4" />
                      Sea Freight
                    </span>
                  </SelectItem>
                  <SelectItem value="air">
                    <span className="flex items-center gap-2">
                      <Plane className="h-4 w-4" />
                      Air Freight
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>

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

              {/* Destination Filter */}
              <Select value={destinationFilter} onValueChange={setDestinationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Destination City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Destinations</SelectItem>
                  {destinations.map(dest => (
                    <SelectItem key={dest} value={dest}>{dest}</SelectItem>
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
              Showing {totalFilteredRoutes} routes
              {hasActiveFilters && ` (filtered from ${allRoutes.length} total)`}
            </span>
            <div className="flex gap-2">
              {filteredSeaRoutes.length > 0 && (
                <Badge variant="secondary" className="text-xs">
                  <Ship className="h-3 w-3 mr-1" />
                  {filteredSeaRoutes.length} sea
                </Badge>
              )}
              {filteredAirRoutes.length > 0 && (
                <Badge variant="secondary" className="text-xs">
                  <Plane className="h-3 w-3 mr-1" />
                  {filteredAirRoutes.length} air
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sea Freight Routes */}
      {filteredSeaRoutes.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-ocean/10 flex items-center justify-center">
              <Ship className="h-5 w-5 text-ocean" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Sea Freight Routes</h3>
              <p className="text-sm text-muted-foreground">{filteredSeaRoutes.length} routes to {countryName}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {!isSubPortFilter && filteredSeaRoutes.map((route) => (
              <Link
                key={route.id}
                href={`/sea-freight-${route.slug}`}
                className="group"
              >
                <Card className={cn(
                  "border-border/50 h-full transition-all duration-200",
                  "hover:shadow-md hover:border-ocean hover:-translate-y-0.5"
                )}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs bg-ocean/5 border-ocean/20 text-ocean">
                        <Ship className="h-3 w-3 mr-1" />
                        Sea Freight
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {route.transitTime}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground truncate">{route.originCity}</p>
                        <p className="text-xs text-muted-foreground truncate">{route.originCountry}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-ocean shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <div className="flex-1 min-w-0 text-right">
                        <p className="font-semibold text-foreground truncate">{route.destinationCity}</p>
                        <p className="text-xs text-muted-foreground truncate">{route.destinationCountry}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            {/* Sub-port entries for Italy routes */}
            {[
              { name: 'Shekou', anchor: 'shekou', parentCity: 'Shenzhen' },
              { name: 'Yantian', anchor: 'yantian', parentCity: 'Shenzhen' },
              { name: 'Nansha', anchor: 'nansha', parentCity: 'Guangzhou' },
            ]
            .filter((subPort) => {
              // When a sub-port is selected, only show that specific sub-port
              if (isSubPortFilter) return subPort.name === originFilter;
              // When a main city is selected, don't duplicate sub-port cards (they show via parent)
              if (originFilter !== 'all' && originFilter !== subPort.parentCity) return false;
              return true;
            })
            .flatMap((subPort) =>
              filteredSeaRoutes
                .filter(route => route.originCity === subPort.parentCity && route.destinationCountry === 'Italy')
                .map((route) => (
                <Link
                  key={`${subPort.anchor}-${route.id}`}
                  href={`/sea-freight-${route.slug}#${subPort.anchor}`}
                  className="group"
                >
                  <Card className={cn(
                    "border-border/50 h-full transition-all duration-200",
                    "hover:shadow-md hover:border-ocean hover:-translate-y-0.5"
                  )}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1.5">
                          <Badge variant="outline" className="text-xs bg-ocean/5 border-ocean/20 text-ocean">
                            <Ship className="h-3 w-3 mr-1" />
                            Sea Freight
                          </Badge>
                          <Badge variant="outline" className="text-xs border-copper/30 text-copper">
                            via {subPort.name}
                          </Badge>
                        </div>
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {route.transitTime}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground truncate">{subPort.name}</p>
                          <p className="text-xs text-muted-foreground truncate">China</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-ocean shrink-0 group-hover:translate-x-0.5 transition-transform" />
                        <div className="flex-1 min-w-0 text-right">
                          <p className="font-semibold text-foreground truncate">{route.destinationCity}</p>
                          <p className="text-xs text-muted-foreground truncate">{route.destinationCountry}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            )}
          </div>
        </div>
      )}

      {/* Air Freight Routes */}
      {filteredAirRoutes.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
              <Plane className="h-5 w-5 text-orange" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Air Freight Routes</h3>
              <p className="text-sm text-muted-foreground">{filteredAirRoutes.length} routes to {countryName}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAirRoutes.map((route) => (
              <Link
                key={route.id}
                href={`/air-freight-${route.slug}`}
                className="group"
              >
                <Card className={cn(
                  "border-border/50 h-full transition-all duration-200",
                  "hover:shadow-md hover:border-orange hover:-translate-y-0.5"
                )}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs bg-orange/5 border-orange/20 text-orange">
                        <Plane className="h-3 w-3 mr-1" />
                        Air Freight
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {route.transitTime}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground truncate">{route.originCity}</p>
                        <p className="text-xs text-muted-foreground truncate">{route.originCountry}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-orange shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <div className="flex-1 min-w-0 text-right">
                        <p className="font-semibold text-foreground truncate">{route.destinationCity}</p>
                        <p className="text-xs text-muted-foreground truncate">{route.destinationCountry}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* No results */}
      {totalFilteredRoutes === 0 && (
        <Card className="border-border/50">
          <CardContent className="p-12 text-center">
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
          </CardContent>
        </Card>
      )}
    </div>
  );
}
