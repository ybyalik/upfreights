import Link from 'next/link';
import { Home, ArrowLeft, Ship, Plane, Package, FileQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 py-16 text-center">
        {/* 404 Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-orange/10 flex items-center justify-center">
              <FileQuestion className="w-16 h-16 text-orange" />
            </div>
            {/* Floating shipping icons */}
            <Ship className="absolute -top-2 -left-4 w-8 h-8 text-muted-foreground/30 animate-pulse" />
            <Plane className="absolute -top-2 -right-4 w-8 h-8 text-muted-foreground/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <Package className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 text-muted-foreground/30 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or doesn&apos;t exist.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="bg-orange hover:bg-orange-dark text-white">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go to Homepage
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/quote">
              Get a Quote
            </Link>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground mb-4">Or explore our services:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/sea-freight"
              className="text-sm text-foreground hover:text-orange transition-colors flex items-center gap-1"
            >
              <Ship className="h-4 w-4" />
              Sea Freight
            </Link>
            <Link
              href="/air-freight"
              className="text-sm text-foreground hover:text-orange transition-colors flex items-center gap-1"
            >
              <Plane className="h-4 w-4" />
              Air Freight
            </Link>
            <Link
              href="/door-to-door"
              className="text-sm text-foreground hover:text-orange transition-colors flex items-center gap-1"
            >
              <Package className="h-4 w-4" />
              Door-to-Door
            </Link>
            <Link
              href="/contact"
              className="text-sm text-foreground hover:text-orange transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
