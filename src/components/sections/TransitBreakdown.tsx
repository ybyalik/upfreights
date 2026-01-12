'use client';

import { cn } from '@/lib/utils';
import { Package, Ship, Truck } from 'lucide-react';

interface TransitStage {
  name: string;
  duration: string;
  icon?: 'package' | 'ship' | 'truck';
}

interface TransitBreakdownProps {
  totalDays: string;
  stages: TransitStage[];
  className?: string;
}

const iconMap = {
  package: Package,
  ship: Ship,
  truck: Truck,
};

export function TransitBreakdown({ totalDays, stages, className }: TransitBreakdownProps) {
  return (
    <div className={cn('', className)}>
      <div className="text-center mb-8">
        <div className="text-4xl font-bold text-primary mb-2">{totalDays}</div>
        <p className="text-muted-foreground">Total door-to-door delivery time</p>
      </div>

      <div className="space-y-4">
        {stages.map((stage, index) => {
          const Icon = stage.icon ? iconMap[stage.icon] : Package;
          return (
            <div key={index} className="flex items-center gap-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                {index + 1}
              </div>
              <div className="flex-1 flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">{stage.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{stage.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
