import Link from 'next/link';
import { Plane, Ship, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Route } from '@/lib/types';

interface RouteCardProps {
  route: Route;
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
}

export function RouteCard({ route, variant = 'default', className }: RouteCardProps) {
  const Icon = route.serviceType === 'air' ? Plane : Ship;
  const serviceLabel = route.serviceType === 'air' ? 'Air Freight' : 'Sea Freight';

  if (variant === 'compact') {
    return (
      <Link href={`/${route.serviceType === 'air' ? 'air' : 'sea'}-freight-${route.slug}`}>
        <Card className={cn(
          'group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 border-border/50',
          className
        )}>
          <CardContent className="p-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon className="h-4 w-4 text-muted-foreground" />
              <div>
                <span className="text-sm font-medium">
                  {route.originCity} <ArrowRight className="inline h-3 w-3 mx-1" /> {route.destinationCity}
                </span>
              </div>
            </div>
            <span className="text-xs text-muted-foreground">{route.transitTime}</span>
          </CardContent>
        </Card>
      </Link>
    );
  }

  if (variant === 'detailed') {
    return (
      <Link href={`/${route.serviceType === 'air' ? 'air' : 'sea'}-freight-${route.slug}`}>
        <Card className={cn(
          'group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden',
          className
        )}>
          <div className={cn(
            'h-1',
            route.serviceType === 'air' ? 'bg-ocean' : 'bg-primary'
          )} />
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-4">
              <Badge variant="secondary" className="text-xs">
                <Icon className="h-3 w-3 mr-1" />
                {serviceLabel}
              </Badge>
              {route.isPopular && (
                <Badge className="bg-orange text-white text-xs">Popular</Badge>
              )}
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">From</p>
                <p className="font-semibold">{route.originCity}</p>
                <p className="text-xs text-muted-foreground truncate">{route.originPort}</p>
              </div>
              <div className="flex flex-col items-center px-2">
                <div className="w-8 h-px bg-border" />
                <Icon className="h-5 w-5 text-orange my-1" />
                <div className="w-8 h-px bg-border" />
              </div>
              <div className="flex-1 text-right">
                <p className="text-sm text-muted-foreground">To</p>
                <p className="font-semibold">{route.destinationCity}</p>
                <p className="text-xs text-muted-foreground truncate">{route.destinationPort}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {route.transitTime}
              </div>
              <span className="text-sm text-orange font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                View details <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/${route.serviceType === 'air' ? 'air' : 'sea'}-freight-${route.slug}`}>
      <Card className={cn(
        'group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 border-border/50',
        className
      )}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="text-xs">
              <Icon className="h-3 w-3 mr-1" />
              {serviceLabel}
            </Badge>
            <span className="text-xs text-muted-foreground">{route.transitTime}</span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{route.originCity}</p>
              <p className="text-xs text-muted-foreground truncate">{route.originCountry}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-orange flex-shrink-0" />
            <div className="flex-1 min-w-0 text-right">
              <p className="font-medium truncate">{route.destinationCity}</p>
              <p className="text-xs text-muted-foreground truncate">{route.destinationCountry}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
