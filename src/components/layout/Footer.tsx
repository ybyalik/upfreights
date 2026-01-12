import Link from 'next/link';
import { Ship, Mail, Phone, MapPin } from 'lucide-react';
import { services } from '@/lib/data/services';
import { destinations } from '@/lib/data/destinations';

// Facebook icon component
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  );
}

// LinkedIn icon component
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange">
                <Ship className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">UpFreights</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 max-w-md">
              Your trusted partner for international freight forwarding. We specialize in
              shipping from China to destinations worldwide, offering sea freight, air freight,
              and comprehensive door-to-door logistics solutions.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@upfreights.com"
                className="flex items-center space-x-3 text-sm text-primary-foreground/80 hover:text-orange transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@upfreights.com</span>
              </a>
              <a
                href="tel:+86-573-82600785"
                className="flex items-center space-x-3 text-sm text-primary-foreground/80 hover:text-orange transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+86-573-82600785</span>
              </a>
              <div className="flex items-start space-x-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  Room 1106, Fuyue Building<br />
                  No.28 Zhonghuan West Road<br />
                  Jiaxing, China 314000
                </span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://www.facebook.com/upfreights"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-primary-foreground/60 hover:text-orange transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/upfreights/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-primary-foreground/60 hover:text-orange transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-sm text-primary-foreground/80 hover:text-orange transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-4">
              Destinations
            </h3>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination.id}>
                  <Link
                    href={`/shipping-${destination.slug}`}
                    className="text-sm text-primary-foreground/80 hover:text-orange transition-colors inline-flex items-center space-x-2"
                  >
                    <span>{destination.flag}</span>
                    <span>{destination.country}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-primary-foreground/80 hover:text-orange transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-primary-foreground/80 hover:text-orange transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/80 hover:text-orange transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-sm text-primary-foreground/80 hover:text-orange transition-colors"
                >
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-primary-foreground/80 hover:text-orange transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-primary-foreground/80 hover:text-orange transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              &copy; {currentYear} UpFreights. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-xs text-primary-foreground/40">
                Trusted by 1,000+ businesses worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
