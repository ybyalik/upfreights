import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  variant?: 'default' | 'dark' | 'gradient';
  title?: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  className?: string;
}

export function CTASection({
  variant = 'default',
  title = 'Ready to Ship?',
  description = 'Get a free quote for your shipment today. Our team will respond within 24 hours with competitive rates.',
  primaryAction = { label: 'Get a Quote', href: '/quote' },
  secondaryAction = { label: 'Contact Us', href: '/contact' },
  className,
}: CTASectionProps) {
  const variants = {
    default: 'bg-cream',
    dark: 'bg-slate text-white',
    gradient: 'bg-gradient-hero text-white',
  };

  return (
    <section className={cn('py-20 lg:py-28 relative overflow-hidden', variants[variant], className)}>
      {/* Background decorative elements */}
      {variant === 'gradient' && (
        <>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent transform skew-x-[-12deg] origin-top-right" />
          <div className="absolute inset-0 pattern-grid opacity-10" />
        </>
      )}

      <div className="container mx-auto px-4 relative">
        {/* Asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className={cn(
              'font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4',
              variant === 'default' ? 'text-foreground' : 'text-white'
            )}>
              {title}
            </p>

            <p className={cn(
              'text-lg mb-8 max-w-xl',
              variant === 'default' ? 'text-muted-foreground' : 'text-white/80'
            )}>
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                asChild
                size="lg"
                className={cn(
                  'px-8 h-12',
                  variant === 'default'
                    ? 'bg-copper hover:bg-copper-dark text-white'
                    : 'bg-copper hover:bg-copper-dark text-white'
                )}
              >
                <Link href={primaryAction.href}>
                  {primaryAction.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className={cn(
                  'px-8 h-12',
                  variant !== 'default' && '!border-white/40 !text-white !bg-transparent hover:!bg-white/10 hover:!text-white'
                )}
              >
                <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
              </Button>
            </div>
          </div>

          {/* Stats column */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className={cn(
              'rounded-2xl p-6 lg:p-8',
              variant === 'default' ? 'bg-white shadow-lg border border-border' : 'bg-white/10 backdrop-blur-sm border border-white/10'
            )}>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    'text-3xl font-heading font-bold',
                    variant === 'default' ? 'text-copper' : 'text-copper-light'
                  )}>
                    10K+
                  </div>
                  <div className={cn(
                    'text-sm',
                    variant === 'default' ? 'text-muted-foreground' : 'text-white/60'
                  )}>
                    Shipments<br />delivered
                  </div>
                </div>

                <div className={cn(
                  'h-px',
                  variant === 'default' ? 'bg-border' : 'bg-white/10'
                )} />

                <div className="flex items-center gap-4">
                  <div className={cn(
                    'text-3xl font-heading font-bold',
                    variant === 'default' ? 'text-teal' : 'text-white'
                  )}>
                    50+
                  </div>
                  <div className={cn(
                    'text-sm',
                    variant === 'default' ? 'text-muted-foreground' : 'text-white/60'
                  )}>
                    Destination<br />countries
                  </div>
                </div>

                <div className={cn(
                  'h-px',
                  variant === 'default' ? 'bg-border' : 'bg-white/10'
                )} />

                <div className="flex items-center gap-4">
                  <div className={cn(
                    'text-3xl font-heading font-bold',
                    variant === 'default' ? 'text-foreground' : 'text-white'
                  )}>
                    24hr
                  </div>
                  <div className={cn(
                    'text-sm',
                    variant === 'default' ? 'text-muted-foreground' : 'text-white/60'
                  )}>
                    Quote<br />response
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
