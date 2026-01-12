import { cn } from '@/lib/utils';
import { Box, Snowflake, Package, Truck } from 'lucide-react';
import type { ContainerTypeInfo } from '@/lib/types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  box: Box,
  snowflake: Snowflake,
  package: Package,
  truck: Truck,
};

interface ContainerTypeCardProps {
  container: ContainerTypeInfo;
  className?: string;
}

export function ContainerTypeCard({ container, className }: ContainerTypeCardProps) {
  const Icon = iconMap[container.icon] || Box;

  return (
    <div
      className={cn(
        'bg-white rounded-xl p-6 border border-border/50 card-lift group',
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-slate/10 flex items-center justify-center flex-shrink-0 group-hover:bg-copper/10 transition-colors">
          <Icon className="h-6 w-6 text-slate group-hover:text-copper transition-colors" />
        </div>
        <div>
          <h4 className="font-heading font-bold text-foreground mb-1">
            {container.name}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {container.description}
          </p>
        </div>
      </div>
    </div>
  );
}
