import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Check, Clock } from 'lucide-react';
import type { ServiceTier } from '@/lib/types';

interface ServiceTierCardProps {
  tier: ServiceTier;
  className?: string;
}

export function ServiceTierCard({ tier, className }: ServiceTierCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl relative overflow-hidden transition-all duration-300',
        tier.isPopular
          ? 'bg-slate text-white shadow-xl'
          : 'bg-white border border-border shadow-sm hover:shadow-lg',
        className
      )}
    >
      {tier.isPopular && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-copper to-copper-light" />
      )}

      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-heading text-lg font-bold">{tier.label}</h4>
            {tier.isPopular && (
              <Badge className="bg-copper text-white border-0 text-xs">
                Popular
              </Badge>
            )}
          </div>
          <p className={cn(
            'text-sm capitalize',
            tier.isPopular ? 'text-white/60' : 'text-muted-foreground'
          )}>
            {tier.name} tier
          </p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className={cn(
            'text-4xl font-heading font-bold mb-1',
            tier.isPopular ? 'text-copper-light' : 'text-copper'
          )}>
            {tier.pricePerCBM}
          </div>
          <p className={cn(
            'text-sm',
            tier.isPopular ? 'text-white/50' : 'text-muted-foreground'
          )}>
            per CBM
          </p>
        </div>

        {/* Transit time */}
        <div className={cn(
          'flex items-center gap-2 mb-6 text-sm rounded-lg px-3 py-2',
          tier.isPopular ? 'bg-white/10' : 'bg-cream'
        )}>
          <Clock className={cn(
            'h-4 w-4',
            tier.isPopular ? 'text-white/60' : 'text-muted-foreground'
          )} />
          <span className={tier.isPopular ? 'text-white' : 'text-foreground'}>
            {tier.transitTime}
          </span>
        </div>

        {/* Features */}
        <ul className="space-y-3">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={cn(
                'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5',
                tier.isPopular ? 'bg-copper/30' : 'bg-copper/10'
              )}>
                <Check className={cn(
                  'h-3 w-3',
                  tier.isPopular ? 'text-copper-light' : 'text-copper'
                )} />
              </div>
              <span className={cn(
                'text-sm',
                tier.isPopular ? 'text-white/80' : 'text-muted-foreground'
              )}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
