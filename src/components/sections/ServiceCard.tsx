import Link from 'next/link';
import { Ship, Plane, Home, FileCheck, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Service } from '@/lib/types';

const serviceIcons: Record<string, React.ElementType> = {
  'sea-freight': Ship,
  'air-freight': Plane,
  'door-to-door': Home,
  'customs-clearance': FileCheck,
};

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
}

export function ServiceCard({ service, variant = 'default', className }: ServiceCardProps) {
  const Icon = serviceIcons[service.slug] || Ship;

  if (variant === 'compact') {
    return (
      <Link href={`/${service.slug}`}>
        <Card className={cn(
          'group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50',
          className
        )}>
          <CardContent className="p-4 flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors">
              <Icon className="h-6 w-6 text-orange" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground group-hover:text-orange transition-colors">
                {service.shortTitle}
              </h3>
              <p className="text-sm text-muted-foreground truncate">
                {service.shortDescription}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-orange group-hover:translate-x-1 transition-all" />
          </CardContent>
        </Card>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link href={`/${service.slug}`}>
        <Card className={cn(
          'group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden',
          className
        )}>
          <div className="h-2 bg-gradient-to-r from-orange to-orange-light" />
          <CardHeader className="pb-4">
            <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-4">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <CardTitle className="text-xl group-hover:text-orange transition-colors">
              {service.title}
            </CardTitle>
            <CardDescription className="text-base">
              {service.shortDescription}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              {service.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center text-orange font-medium group-hover:translate-x-2 transition-transform">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/${service.slug}`}>
      <Card className={cn(
        'group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50',
        className
      )}>
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center mb-4 group-hover:bg-orange/20 transition-colors">
            <Icon className="h-6 w-6 text-orange" />
          </div>
          <CardTitle className="text-lg group-hover:text-orange transition-colors">
            {service.shortTitle}
          </CardTitle>
          <CardDescription>{service.shortDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-orange font-medium group-hover:translate-x-1 transition-transform">
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
