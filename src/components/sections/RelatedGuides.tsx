import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/** A short list of the blog guides that belong to a service page (internal linking, 17 Nov 2026). */
export function RelatedGuides({ title = 'Guides for this service', links }: { title?: string; links: { label: string; href: string }[] }) {
  return (
    <section className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-bold text-foreground mb-5">{title}</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="inline-flex items-center gap-2 text-foreground hover:text-orange font-medium">
                <ArrowRight className="h-4 w-4 text-orange flex-shrink-0" />
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
