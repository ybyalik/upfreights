'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, ChevronDown, Ship, Plane, Home, FileCheck, Warehouse, Handshake, Phone, BookOpen, FileText, Briefcase, Globe, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { services } from '@/lib/data/services';
import { destinations } from '@/lib/data/destinations';

const serviceIcons: Record<string, React.ElementType> = {
  'sea-freight': Ship,
  'air-freight': Plane,
  'door-to-door': Home,
  'customs-clearance': FileCheck,
  'warehousing': Warehouse,
  'trade-agency': Handshake,
};

const serviceSummaries: Record<string, string> = {
  'sea-freight': 'FCL & LCL ocean shipping',
  'air-freight': 'Express air cargo delivery',
  'door-to-door': 'Full-service logistics',
  'customs-clearance': 'Import/export brokerage',
  'warehousing': 'Secure storage in China',
  'trade-agency': 'Sourcing & procurement',
};

// Simple dropdown component
function Dropdown({
  trigger,
  children,
  className,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {trigger}
        <ChevronDown
          className={cn(
            "ml-1 h-3 w-3 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div
          className={cn(
            "absolute left-0 top-full z-50 mt-1 rounded-md border bg-white shadow-lg",
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

// Dropdown link item
function DropdownLink({
  href,
  icon: Icon,
  title,
  description,
}: {
  href: string;
  icon?: React.ElementType;
  title: string;
  description?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-orange"
    >
      {Icon && (
        <Icon className="h-5 w-5 text-orange group-hover:text-white shrink-0 mt-0.5" />
      )}
      <div>
        <div className="text-sm font-medium text-slate-800 group-hover:text-white">
          {title}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground group-hover:text-white/80 mt-0.5">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
              <Ship className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">UpFreights</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {/* Services Dropdown */}
            <Dropdown trigger="Services" className="w-[500px] p-4">
              <div className="grid grid-cols-2 gap-2">
                {services.map((service) => {
                  const Icon = serviceIcons[service.slug] || Ship;
                  return (
                    <DropdownLink
                      key={service.id}
                      href={`/${service.slug}`}
                      icon={Icon}
                      title={service.shortTitle}
                      description={serviceSummaries[service.slug]}
                    />
                  );
                })}
              </div>
              <div className="border-t border-border/50 mt-3 pt-3">
                <Link
                  href="/services"
                  className="block rounded-md p-3 text-center text-sm font-medium text-orange hover:bg-orange hover:text-white transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </Dropdown>

            {/* Destinations Dropdown */}
            <Dropdown trigger="Destinations" className="w-[500px] p-4">
              <div className="grid grid-cols-3 gap-2">
                {destinations.map((destination) => (
                  <Link
                    key={destination.id}
                    href={`/shipping-${destination.slug}`}
                    className="group flex items-center gap-2 rounded-md p-2.5 transition-colors hover:bg-orange"
                  >
                    <span className="text-xl">{destination.flag}</span>
                    <span className="text-sm font-medium text-slate-800 group-hover:text-white">
                      {destination.country}
                    </span>
                  </Link>
                ))}
              </div>
            </Dropdown>

            {/* About Link */}
            <Link
              href="/about"
              className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              About
            </Link>

            {/* Resources Dropdown */}
            <Dropdown trigger="Resources" className="w-[320px] p-4">
              <div className="space-y-1">
                <DropdownLink
                  href="/blog"
                  icon={BookOpen}
                  title="Blog"
                  description="Industry insights & guides"
                />
                <DropdownLink
                  href="/incoterms"
                  icon={FileText}
                  title="Incoterms 2020"
                  description="Trade terms explained"
                />
                <DropdownLink
                  href="/case-studies"
                  icon={Briefcase}
                  title="Case Studies"
                  description="Success stories"
                />
                <div className="border-t border-border/50 my-2 pt-2">
                  <p className="text-xs text-muted-foreground px-3 mb-2">Shipping Guides</p>
                  <DropdownLink
                    href="/shipping-routes-china-to-usa"
                    icon={MapPin}
                    title="China to USA Routes"
                    description="Complete shipping guide"
                  />
                  <DropdownLink
                    href="/shipping-routes-china"
                    icon={Globe}
                    title="China to Worldwide"
                    description="Global routes & carriers"
                  />
                </div>
              </div>
            </Dropdown>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <a
              href="tel:+8657382600785"
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              rel="nofollow"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Button asChild className="bg-orange hover:bg-orange-dark text-white">
              <Link href="/quote">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col space-y-6 mt-8">
                {/* Mobile Services */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Services
                  </h3>
                  <div className="space-y-2">
                    {services.map((service) => {
                      const Icon = serviceIcons[service.slug] || Ship;
                      return (
                        <Link
                          key={service.id}
                          href={`/${service.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors"
                        >
                          <Icon className="h-5 w-5 text-orange" />
                          <span className="text-sm font-medium">{service.shortTitle}</span>
                        </Link>
                      );
                    })}
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-orange rounded-md hover:bg-accent transition-colors"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>

                {/* Mobile Destinations */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Destinations
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {destinations.map((destination) => (
                      <Link
                        key={destination.id}
                        href={`/shipping-${destination.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent transition-colors"
                      >
                        <span className="text-lg">{destination.flag}</span>
                        <span className="text-sm">{destination.country}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Resources */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Resources
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="/blog"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors"
                    >
                      <BookOpen className="h-5 w-5 text-orange" />
                      <span className="text-sm font-medium">Blog</span>
                    </Link>
                    <Link
                      href="/incoterms"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors"
                    >
                      <FileText className="h-5 w-5 text-orange" />
                      <span className="text-sm font-medium">Incoterms 2020</span>
                    </Link>
                    <Link
                      href="/case-studies"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors"
                    >
                      <Briefcase className="h-5 w-5 text-orange" />
                      <span className="text-sm font-medium">Case Studies</span>
                    </Link>
                    <Link
                      href="/shipping-routes-china-to-usa"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors"
                    >
                      <MapPin className="h-5 w-5 text-orange" />
                      <span className="text-sm font-medium">China to USA Routes</span>
                    </Link>
                    <Link
                      href="/shipping-routes-china"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors"
                    >
                      <Globe className="h-5 w-5 text-orange" />
                      <span className="text-sm font-medium">China to Worldwide</span>
                    </Link>
                  </div>
                </div>

                {/* Mobile Links */}
                <div className="space-y-2">
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                  >
                    Contact
                  </Link>
                </div>

                {/* Mobile CTA */}
                <Button
                  asChild
                  className="w-full bg-orange hover:bg-orange-dark text-white"
                >
                  <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
