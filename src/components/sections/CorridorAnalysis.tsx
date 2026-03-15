import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  Package,
  Calendar,
  FileText,
  DollarSign,
} from 'lucide-react';
import type { ShippingCorridor } from '@/lib/types';

interface CorridorAnalysisProps {
  corridor: ShippingCorridor;
  originCity: string;
  destinationCity: string;
  className?: string;
}

export function CorridorAnalysis({
  corridor,
  originCity,
  destinationCity,
  className,
}: CorridorAnalysisProps) {
  const items = [
    {
      icon: TrendingUp,
      title: 'Trade Significance',
      content: corridor.significance,
      accent: true,
    },
    {
      icon: Package,
      title: 'Common Cargo',
      content: corridor.commonCargo,
      isList: true,
    },
    {
      icon: Calendar,
      title: 'Seasonal Patterns',
      content: corridor.seasonalPatterns,
    },
    {
      icon: FileText,
      title: 'Regulations',
      content: corridor.regulations,
    },
    {
      icon: DollarSign,
      title: 'Economic Factors',
      content: corridor.economicFactors,
    },
  ];

  return (
    <section className={cn('py-20 lg:py-28 bg-slate-dark relative overflow-hidden', className)}>
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20" />

      <div className="container mx-auto px-4 relative">
        {/* Asymmetric header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-5">
            <p className="text-copper-light font-medium text-sm uppercase tracking-wider mb-2">Trade Analysis</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white">
              {originCity} — {destinationCity}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-7 flex items-end">
            <p className="text-white/60">
              Market conditions, trade patterns, and factors affecting this corridor.
            </p>
          </div>
        </div>

        {/* Bento-style grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                'rounded-xl p-6 transition-all',
                item.accent
                  ? 'bg-copper/20 border border-copper/30 md:col-span-2 lg:col-span-1'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              )}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0',
                    item.accent ? 'bg-copper/30' : 'bg-white/10'
                  )}
                >
                  <item.icon
                    className={cn(
                      'h-5 w-5',
                      item.accent ? 'text-copper-light' : 'text-white/70'
                    )}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-heading font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  {item.isList && Array.isArray(item.content) ? (
                    <div className="flex flex-wrap gap-2">
                      {item.content.map((cargo, i) => (
                        <Badge
                          key={i}
                          className="bg-white/10 text-white/80 border-0 hover:bg-white/20"
                        >
                          {cargo}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.content as string}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
