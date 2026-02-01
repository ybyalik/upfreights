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

// X (Twitter) icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Instagram icon component
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
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
              <a
                href="https://x.com/twings0573"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-primary-foreground/60 hover:text-orange transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/twingsupply/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-primary-foreground/60 hover:text-orange transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-wide mb-4">
              <Link href="/services" className="text-primary-foreground hover:text-orange transition-colors">
                Services
              </Link>
            </p>
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
            <p className="font-semibold text-sm uppercase tracking-wide mb-4 text-primary-foreground">
              Destinations
            </p>
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
              <li>
                <Link
                  href="/all-routes"
                  className="text-sm text-primary-foreground/80 hover:text-orange transition-colors"
                >
                  All Routes →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-wide mb-4 text-primary-foreground">
              Company
            </p>
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
