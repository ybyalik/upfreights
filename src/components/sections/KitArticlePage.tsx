import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumbs } from './Breadcrumbs';
import { CTASection } from './CTASection';
import { HeroQuoteForm } from './HeroQuoteForm';
import { formatContent } from '@/lib/markdown';
import { generateFaqSchema, ORGANIZATION_INFO } from '@/lib/schema';

/** An article written with the content kit and approved by the owner (src/content/articles/<slug>.json). */
export interface KitArticle {
  slug: string;
  title: string;
  dek: string;
  metaDescription: string;
  body: string;
  updated: string;
  author: string;
  authorRole: string;
  cover?: { url: string; alt: string } | null;
}

function slugify(t: string) {
  return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/** Questions from the "Questions people also ask" section: a bold question line, then its answer. */
function faqsFrom(body: string) {
  const part = body.split(/^## Questions people also ask\s*$/m)[1];
  if (!part) return [];
  const out: { question: string; answer: string }[] = [];
  const re = /^\*\*(.+\?)\*\*\s*\n+([^\n]+)/gm;
  let m;
  while ((m = re.exec(part))) {
    out.push({ question: m[1].trim(), answer: m[2].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim() });
  }
  return out;
}

export function KitArticlePage({ article, crumb, tool }: { article: KitArticle; crumb: { label: string; href: string }; tool?: React.ReactNode }) {
  const headings = article.body.split('\n').filter((l) => l.startsWith('## ')).map((l) => l.slice(3).trim());
  const faqs = faqsFrom(article.body);
  const url = `${ORGANIZATION_INFO.url}/${article.slug}`;
  const updated = new Date(article.updated + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    dateModified: article.updated,
    author: { '@type': 'Person', name: article.author, jobTitle: article.authorRole },
    publisher: { '@type': 'Organization', name: ORGANIZATION_INFO.name, url: ORGANIZATION_INFO.url },
    mainEntityOfPage: url,
    ...(article.cover ? { image: `${ORGANIZATION_INFO.url}${article.cover.url}` } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqs.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }} />}

      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <Breadcrumbs items={[crumb, { label: article.title }]} variant="light" className="mb-6" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">{article.title}</h1>
              <p className="text-lg text-white/80 mb-5">{article.dek}</p>
              <p className="text-white/60 text-sm">
                By {article.author}, {article.authorRole}. Updated {updated}.
              </p>
            </div>
            <div className="lg:col-span-5">
              <HeroQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {tool && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">{tool}</div>
        </section>
      )}

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2 prose prose-lg max-w-none">
              {article.cover && (
                <Image src={article.cover.url} alt={article.cover.alt} width={1400} height={933} className="rounded-xl w-full h-auto mb-8" priority />
              )}
              <div
                className="prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-orange prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: formatContent(article.body) }}
              />
            </article>
            <aside className="lg:col-span-1">
              {headings.length > 0 && (
                <Card className="border-border/50 sticky top-24">
                  <CardContent className="p-5">
                    <p className="font-semibold text-foreground mb-3">On this page</p>
                    <ul className="space-y-2 text-sm">
                      {headings.map((h) => (
                        <li key={h}>
                          <a href={`#${slugify(h)}`} className="text-muted-foreground hover:text-orange">
                            {h}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
