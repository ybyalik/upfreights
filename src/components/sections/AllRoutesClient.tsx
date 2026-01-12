'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Ship, Plane, ArrowRight, Search, Filter, X, Clock, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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

interface AllRoutesClientProps {
  seaRoutes: Route[];
  airRoutes: Route[];
}

export function AllRoutesClient({ seaRoutes, airRoutes }: AllRoutesClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [serviceTypeFilter, setServiceTypeFilter] = useState<'all' | 'sea' | 'air'>('all');
  const [originFilter, setOriginFilter] = useState<string>('all');
  const [countryFilter, setCountryFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grouped' | 'list'>('grouped');

  const allRoutes = useMemo(() => [...seaRoutes, ...airRoutes], [seaRoutes, airRoutes]);

  // Get unique values for filters
  const origins = useMemo(() => {
    const routes = serviceTypeFilter === 'sea' ? seaRoutes : serviceTypeFilter === 'air' ? airRoutes : allRoutes;
    return [...new Set(routes.map(r => r.originCity))].sort();
  }, [seaRoutes, airRoutes, allRoutes, serviceTypeFilter]);

  const countries = useMemo(() => {
    const routes = serviceTypeFilter === 'sea' ? seaRoutes : serviceTypeFilter === 'air' ? airRoutes : allRoutes;
    return [...new Set(routes.map(r => r.destinationCountry))].sort();
  }, [seaRoutes, airRoutes, allRoutes, serviceTypeFilter]);

  // Filter routes
  const filteredRoutes = useMemo(() => {
    let routes = serviceTypeFilter === 'sea' ? seaRoutes : serviceTypeFilter === 'air' ? airRoutes : allRoutes;

    if (originFilter !== 'all') {
      routes = routes.filter(r => r.originCity === originFilter);
    }

    if (countryFilter !== 'all') {
      routes = routes.filter(r => r.destinationCountry === countryFilter);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      routes = routes.filter(r =>
        r.originCity.toLowerCase().includes(query) ||
        r.destinationCity.toLowerCase().includes(query) ||
        r.destinationCountry.toLowerCase().includes(query) ||
        r.slug.toLowerCase().includes(query)
      );
    }

    return routes;
  }, [seaRoutes, airRoutes, allRoutes, serviceTypeFilter, originFilter, countryFilter, searchQuery]);

  // Split filtered routes by type
  const filteredSeaRoutes = useMemo(() =>
    filteredRoutes.filter(r => r.serviceType === 'sea'),
    [filteredRoutes]
  );

  const filteredAirRoutes = useMemo(() =>
    filteredRoutes.filter(r => r.serviceType === 'air'),
    [filteredRoutes]
  );

  // Group routes by origin
  const groupByOrigin = (routes: Route[]) => {
    return routes.reduce((acc, route) => {
      const origin = route.originCity;
      if (!acc[origin]) acc[origin] = [];
      acc[origin].push(route);
      return acc;
    }, {} as Record<string, Route[]>);
  };

  // Group routes by country
  const groupByCountry = (routes: Route[]) => {
    return routes.reduce((acc, route) => {
      const country = route.destinationCountry;
      if (!acc[country]) acc[country] = [];
      acc[country].push(route);
      return acc;
    }, {} as Record<string, Route[]>);
  };

  const hasActiveFilters = serviceTypeFilter !== 'all' || originFilter !== 'all' || countryFilter !== 'all' || searchQuery.trim() !== '';

  const clearFilters = () => {
    setSearchQuery('');
    setServiceTypeFilter('all');
    setOriginFilter('all');
    setCountryFilter('all');
  };

  const seaRoutesByOrigin = groupByOrigin(filteredSeaRoutes);
  const airRoutesByOrigin = groupByOrigin(filteredAirRoutes);

  return (
    <div>
      {/* Search and Filters */}
      <div className="bg-white border border-border rounded-xl p-4 md:p-6 mb-8 shadow-sm">
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search routes by city, country, or port..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 text-base"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Filters Row */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Filter className="h-4 w-4" />
            Filters
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Service Type Filter */}
            <Select value={serviceTypeFilter} onValueChange={(v) => {
              setServiceTypeFilter(v as 'all' | 'sea' | 'air');
              setOriginFilter('all');
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
                {origins.map((origin) => (
                  <SelectItem key={origin} value={origin}>
                    {origin}
                  </SelectItem>
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
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* View Toggle - min 44px touch targets on mobile */}
          <div className="flex items-center gap-1 border rounded-lg p-1">
            <button
              onClick={() => setViewMode('grouped')}
              className={cn(
                'px-4 py-2.5 sm:px-3 sm:py-1.5 text-sm rounded-md transition-colors min-h-[44px] sm:min-h-0',
                viewMode === 'grouped' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Grouped
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={cn(
                'px-4 py-2.5 sm:px-3 sm:py-1.5 text-sm rounded-md transition-colors min-h-[44px] sm:min-h-0',
                viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              List
            </button>
          </div>
        </div>

        {/* Active Filters & Results Count */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between gap-3 sm:gap-4 mt-4 pt-4 border-t">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredRoutes.length}</span> routes
              {serviceTypeFilter === 'all' && (
                <span className="text-muted-foreground">
                  {' '}({filteredSeaRoutes.length} sea, {filteredAirRoutes.length} air)
                </span>
              )}
            </span>
          </div>

          {hasActiveFilters && (
            <div className="flex items-center gap-2">
              {searchQuery && (
                <Badge variant="secondary" className="gap-1">
                  Search: {searchQuery}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchQuery('')} />
                </Badge>
              )}
              {serviceTypeFilter !== 'all' && (
                <Badge variant="secondary" className="gap-1">
                  {serviceTypeFilter === 'sea' ? 'Sea Freight' : 'Air Freight'}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setServiceTypeFilter('all')} />
                </Badge>
              )}
              {originFilter !== 'all' && (
                <Badge variant="secondary" className="gap-1">
                  From: {originFilter}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setOriginFilter('all')} />
                </Badge>
              )}
              {countryFilter !== 'all' && (
                <Badge variant="secondary" className="gap-1">
                  To: {countryFilter}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setCountryFilter('all')} />
                </Badge>
              )}
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear All
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* No Results */}
      {filteredRoutes.length === 0 && (
        <Card className="border-border/50">
          <CardContent className="py-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No routes found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filters to find routes.
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Grouped View */}
      {viewMode === 'grouped' && filteredRoutes.length > 0 && (
        <>
          {/* Sea Freight Routes */}
          {(serviceTypeFilter === 'all' || serviceTypeFilter === 'sea') && filteredSeaRoutes.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-ocean/10 flex items-center justify-center">
                  <Ship className="h-5 w-5 text-ocean" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Sea Freight Routes</h2>
                  <p className="text-sm text-muted-foreground">{filteredSeaRoutes.length} routes</p>
                </div>
              </div>

              <div className="space-y-8">
                {Object.entries(seaRoutesByOrigin).map(([origin, routes]) => {
                  const routesByCountry = groupByCountry(routes);
                  return (
                    <div key={origin}>
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-orange" />
                        From {origin}
                        <span className="text-sm font-normal text-muted-foreground">({routes.length} routes)</span>
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {Object.entries(routesByCountry).map(([country, countryRoutes]) => (
                          <Card key={country} className="border-border/50 hover:border-ocean/50 transition-colors">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-3">
                                <Globe className="h-4 w-4 text-muted-foreground" />
                                <h4 className="font-semibold text-foreground">{country}</h4>
                              </div>
                              <ul className="space-y-1.5">
                                {countryRoutes.map((route) => (
                                  <li key={route.id}>
                                    <Link
                                      href={`/sea-freight-${route.slug}`}
                                      className="text-sm text-muted-foreground hover:text-ocean transition-colors flex items-center gap-1.5 group"
                                    >
                                      <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                                      <span>{route.destinationCity}</span>
                                      <span className="text-xs text-muted-foreground/60 ml-auto">
                                        {route.transitTime}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Air Freight Routes */}
          {(serviceTypeFilter === 'all' || serviceTypeFilter === 'air') && filteredAirRoutes.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                  <Plane className="h-5 w-5 text-orange" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Air Freight Routes</h2>
                  <p className="text-sm text-muted-foreground">{filteredAirRoutes.length} routes</p>
                </div>
              </div>

              <div className="space-y-8">
                {Object.entries(airRoutesByOrigin).map(([origin, routes]) => {
                  const routesByCountry = groupByCountry(routes);
                  return (
                    <div key={origin}>
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-orange" />
                        From {origin}
                        <span className="text-sm font-normal text-muted-foreground">({routes.length} routes)</span>
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {Object.entries(routesByCountry).map(([country, countryRoutes]) => (
                          <Card key={country} className="border-border/50 hover:border-orange/50 transition-colors">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-3">
                                <Globe className="h-4 w-4 text-muted-foreground" />
                                <h4 className="font-semibold text-foreground">{country}</h4>
                              </div>
                              <ul className="space-y-1.5">
                                {countryRoutes.map((route) => (
                                  <li key={route.id}>
                                    <Link
                                      href={`/air-freight-${route.slug}`}
                                      className="text-sm text-muted-foreground hover:text-orange transition-colors flex items-center gap-1.5 group"
                                    >
                                      <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                                      <span>{route.destinationCity}</span>
                                      <span className="text-xs text-muted-foreground/60 ml-auto">
                                        {route.transitTime}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </>
      )}

      {/* List View */}
      {viewMode === 'list' && filteredRoutes.length > 0 && (
        <div className="space-y-2">
          {filteredRoutes.map((route) => (
            <Link
              key={route.id}
              href={`/routes/${route.serviceType}-freight/${route.slug}`}
              className="block"
            >
              <Card className="border-border/50 hover:border-primary/50 hover:shadow-md transition-all">
                <CardContent className="p-4">
                  {/* Mobile: stacked layout, Desktop: horizontal flex */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    {/* Icon and route info row */}
                    <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      <div className={cn(
                        'w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0',
                        route.serviceType === 'sea' ? 'bg-ocean/10' : 'bg-orange/10'
                      )}>
                        {route.serviceType === 'sea' ? (
                          <Ship className="h-5 w-5 text-ocean" />
                        ) : (
                          <Plane className="h-5 w-5 text-orange" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-foreground">{route.originCity}</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <span className="font-semibold text-foreground">{route.destinationCity}</span>
                          <Badge variant="outline" className="text-xs">
                            {route.destinationCountry}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5 truncate">
                          {route.originPort} to {route.destinationPort}
                        </p>
                      </div>
                    </div>

                    {/* Transit time and badge - on mobile appears below route info */}
                    <div className="flex items-center justify-between sm:flex-col sm:items-end sm:justify-center gap-2 sm:gap-1 pl-[52px] sm:pl-0 flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {route.transitTime}
                      </div>
                      <Badge
                        variant="secondary"
                        className={cn(
                          'text-xs',
                          route.serviceType === 'sea' ? 'bg-ocean/10 text-ocean' : 'bg-orange/10 text-orange'
                        )}
                      >
                        {route.serviceType === 'sea' ? 'Sea Freight' : 'Air Freight'}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
