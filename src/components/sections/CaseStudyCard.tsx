import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CaseStudyCardProps {
  slug: string;
  title: string;
  subtitle: string;
  origin: string;
  destination: string;
  services: string[];
  className?: string;
}

export function CaseStudyCard({
  slug,
  title,
  subtitle,
  origin,
  destination,
  services,
  className,
}: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${slug}`} className="block group">
      <Card className={cn(
        'h-full border-border/50 hover:border-orange/50 hover:shadow-lg transition-all duration-300',
        className
      )}>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <MapPin className="h-4 w-4 text-orange" />
            <span>{origin}</span>
            <ArrowRight className="h-3 w-3" />
            <span>{destination}</span>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-orange transition-colors">
            {title}
          </h3>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
              >
                {service}
              </span>
            ))}
            {services.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                +{services.length - 3} more
              </span>
            )}
          </div>

          <div className="flex items-center text-orange font-medium text-sm group-hover:gap-2 transition-all">
            <span>Read Case Study</span>
            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
