import {
  FileText,
  Calendar,
  Truck,
  ClipboardCheck,
  Ship,
  MapPin,
  Zap,
  Plane,
  Package,
  Shield,
  Clock,
  MessageSquare,
  Layers,
  Globe,
  FileCheck,
  Home,
  Search,
  Tag,
  Upload,
  CreditCard,
  Eye,
  CheckCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ProcessStep } from '@/lib/types';

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Calendar,
  Truck,
  ClipboardCheck,
  Ship,
  MapPin,
  Zap,
  Plane,
  Package,
  Shield,
  Clock,
  MessageSquare,
  Layers,
  Globe,
  FileCheck,
  Home,
  Search,
  Tag,
  Upload,
  CreditCard,
  Eye,
  CheckCircle,
};

interface ProcessTimelineProps {
  steps: ProcessStep[];
  variant?: 'horizontal' | 'vertical';
  className?: string;
}

export function ProcessTimeline({ steps, variant = 'horizontal', className }: ProcessTimelineProps) {
  if (variant === 'vertical') {
    return (
      <div className={cn('relative', className)}>
        {steps.map((step, index) => {
          const Icon = iconMap[step.icon] || CheckCircle;
          const isLast = index === steps.length - 1;

          return (
            <div key={step.step} className="relative pl-10 pb-10 last:pb-0">
              {/* Vertical line */}
              {!isLast && (
                <div className="absolute left-[15px] top-10 bottom-0 w-0.5 bg-border" />
              )}

              {/* Step circle */}
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-orange flex items-center justify-center text-white text-sm font-bold">
                {step.step}
              </div>

              {/* Content */}
              <div className="bg-card border border-border/50 rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn('relative', className)}>
      {/* Horizontal line for desktop */}
      <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-0.5 bg-border" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {steps.map((step, index) => {
          const Icon = iconMap[step.icon] || CheckCircle;

          return (
            <div key={step.step} className="relative text-center">
              {/* Step number badge */}
              <div className="relative inline-flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-orange text-white flex items-center justify-center text-lg font-bold mb-4 relative z-10">
                  {step.step}
                </div>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-4">
                <Icon className="h-7 w-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
