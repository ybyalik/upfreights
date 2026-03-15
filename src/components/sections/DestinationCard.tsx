import Link from 'next/link';
import { ArrowRight, Plane, Ship } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Destination } from '@/lib/types';

interface DestinationCardProps {
  destination: Destination;
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
}

export function DestinationCard({ destination, variant = 'default', className }: DestinationCardProps) {
  if (variant === 'compact') {
    return (
      <Link href={`/shipping-${destination.slug}`}>
        <Card className={cn(
          'group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 border-border/50',
          className
        )}>
          <CardContent className="p-4 flex items-center space-x-4">
            <span className="text-3xl">{destination.flag}</span>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground group-hover:text-orange transition-colors">
                {destination.country}
              </h3>
              <div className="flex items-center space-x-3 text-xs text-muted-foreground mt-1">
                <span className="flex items-center">
                  <Plane className="h-3 w-3 mr-1" />
                  {destination.transitTimeAir}
                </span>
                <span className="flex items-center">
                  <Ship className="h-3 w-3 mr-1" />
                  {destination.transitTimeSea}
                </span>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-orange group-hover:translate-x-1 transition-all" />
          </CardContent>
        </Card>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link href={`/shipping-${destination.slug}`}>
        <Card className={cn(
          'group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden h-full',
          className
        )}>
          <div className="h-32 bg-gradient-to-br from-primary via-primary to-ocean relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                {destination.flag}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{destination.flag}</span>
              <h3 className="text-xl font-bold group-hover:text-orange transition-colors">
                {destination.country}
              </h3>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {destination.description}
            </p>
            <div className="flex items-center justify-between text-sm">
              <div className="space-y-1">
                <div className="flex items-center text-muted-foreground">
                  <Plane className="h-4 w-4 mr-2 text-ocean" />
                  <span>{destination.transitTimeAir}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Ship className="h-4 w-4 mr-2 text-primary" />
                  <span>{destination.transitTimeSea}</span>
                </div>
              </div>
              <div className="flex items-center text-orange font-medium group-hover:translate-x-1 transition-transform">
                Explore <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/shipping-${destination.slug}`}>
      <Card className={cn(
        'group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50',
        className
      )}>
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-4xl">{destination.flag}</span>
            <div>
              <h3 className="font-bold text-lg group-hover:text-orange transition-colors">
                China to {destination.country}
              </h3>
              <p className="text-sm text-muted-foreground">
                {destination.majorPorts.length} major ports
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-secondary/50 rounded-lg p-3">
              <div className="flex items-center text-xs text-muted-foreground mb-1">
                <Plane className="h-3 w-3 mr-1" />
                Air Freight
              </div>
              <p className="font-semibold text-sm">{destination.transitTimeAir}</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-3">
              <div className="flex items-center text-xs text-muted-foreground mb-1">
                <Ship className="h-3 w-3 mr-1" />
                Sea Freight
              </div>
              <p className="font-semibold text-sm">{destination.transitTimeSea}</p>
            </div>
          </div>

          <div className="flex items-center text-sm text-orange font-medium group-hover:translate-x-1 transition-transform">
            View shipping routes <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
