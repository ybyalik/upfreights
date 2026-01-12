'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Ship, Plane, Home, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { services } from '@/lib/data/services';
import { destinations } from '@/lib/data/destinations';

const serviceIcons: Record<string, React.ElementType> = {
  'sea-freight': Ship,
  'air-freight': Plane,
  'door-to-door': Home,
  'customs-clearance': FileCheck,
};

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
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
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {services.map((service) => {
                        const Icon = serviceIcons[service.slug] || Ship;
                        return (
                          <li key={service.id}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={`/${service.slug}`}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="flex items-center space-x-2">
                                  <Icon className="h-5 w-5 text-orange" />
                                  <span className="text-sm font-medium leading-none">
                                    {service.shortTitle}
                                  </span>
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                                  {service.shortDescription}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                      <li className="col-span-2 border-t border-border/50 pt-3 mt-1">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services"
                            className="block select-none rounded-md p-3 text-center font-medium text-orange hover:bg-accent transition-colors"
                          >
                            View All Services
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Destinations Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Destinations
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] lg:grid-cols-3">
                      {destinations.map((destination) => (
                        <li key={destination.id}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={`/shipping-${destination.slug}`}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center space-x-2">
                                <span className="text-2xl">{destination.flag}</span>
                                <span className="text-sm font-medium leading-none">
                                  {destination.country}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">
                                {destination.transitTimeAir} by air
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* About Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}>
                    <Link href="/about">About</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Blog Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}>
                    <Link href="/blog">Blog</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <Button asChild className="bg-orange hover:bg-orange-dark text-white">
              <Link href="/quote">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors"
                        >
                          <Icon className="h-5 w-5 text-orange" />
                          <span className="text-sm font-medium">{service.shortTitle}</span>
                        </Link>
                      );
                    })}
                    <Link
                      href="/services"
                      onClick={() => setIsOpen(false)}
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
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent transition-colors"
                      >
                        <span className="text-lg">{destination.flag}</span>
                        <span className="text-sm">{destination.country}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Links */}
                <div className="space-y-2">
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
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
                  <Link href="/quote" onClick={() => setIsOpen(false)}>
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
