import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import type { PortInfo } from '@/lib/types';

interface PortInfoCardProps {
  label: 'Origin Port' | 'Destination Port';
  portInfo: PortInfo;
  className?: string;
}

export function PortInfoCard({ label, portInfo, className }: PortInfoCardProps) {
  return (
    <Card className={cn('border-border/50', className)}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">{label}</p>
            <h3 className="text-lg font-bold text-foreground mb-2">
              {portInfo.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {portInfo.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
