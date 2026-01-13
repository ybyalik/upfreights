import Link from 'next/link';
import { ArrowRight, Ship, Plane, Package, Shield, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroProps {
  variant?: 'default' | 'simple';
  className?: string;
}

export function Hero({ variant = 'default', className }: HeroProps) {
  if (variant === 'simple') {
    return (
      <section className={cn('bg-gradient-hero py-16 lg:py-24', className)}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Global Freight Forwarding
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Reliable shipping solutions from China to the world
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={cn('relative overflow-hidden bg-gradient-hero', className)}>
      {/* Background Pattern - hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-10 hidden lg:block">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-orange blur-3xl" />
      </div>

      {/* Animated shipping icons background - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        <Ship className="absolute top-1/4 left-[10%] h-16 w-16 text-white/5 animate-pulse" />
        <Plane className="absolute top-1/3 right-[15%] h-12 w-12 text-white/5 animate-pulse" style={{ animationDelay: '1s' }} />
        <Package className="absolute bottom-1/4 left-[20%] h-10 w-10 text-white/5 animate-pulse" style={{ animationDelay: '2s' }} />
        <Globe className="absolute bottom-1/3 right-[25%] h-14 w-14 text-white/5 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white/90">Trusted by 1,000+ businesses worldwide</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ship From China{' '}
            <span className="text-orange">Worldwide</span>
            <br />
            With Confidence
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            UpFreights provides reliable, cost-effective freight forwarding services.
            Sea freight, air freight, and door-to-door delivery to over 50 countries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-orange hover:bg-orange-dark text-white px-8"
            >
              <Link href="/quote">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="!border-white/40 !text-white !bg-transparent hover:!bg-white/10 hover:!text-white px-8"
            >
              <Link href="/services/sea-freight">
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-orange" />
              </div>
              <div>
                <p className="font-semibold text-white">24hr Response</p>
                <p className="text-sm text-white/60">Quick quote turnaround</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-orange" />
              </div>
              <div>
                <p className="font-semibold text-white">Fully Insured</p>
                <p className="text-sm text-white/60">Cargo protection included</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-orange" />
              </div>
              <div>
                <p className="font-semibold text-white">50+ Countries</p>
                <p className="text-sm text-white/60">Global shipping network</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
