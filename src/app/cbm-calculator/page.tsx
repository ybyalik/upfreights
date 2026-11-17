import type { Metadata } from 'next';
import { KitArticlePage, type KitArticle } from '@/components/sections/KitArticlePage';
import { CbmCalculator } from '@/components/tools/CbmCalculator';
import data from '@/content/articles/cbm-calculator.json';

const article = data as KitArticle;

export const metadata: Metadata = {
  title: 'CBM Calculator: How Sea and Air Freight Charges Work',
  description: article.metaDescription,
  alternates: { canonical: '/cbm-calculator' },
  openGraph: {
    title: article.title,
    description: article.metaDescription,
    type: 'article',
    images: article.cover ? [{ url: article.cover.url, alt: article.cover.alt }] : undefined,
  },
};

export default function CbmCalculatorPage() {
  return <KitArticlePage article={article} crumb={{ label: 'Sea Freight', href: '/sea-freight' }} tool={<CbmCalculator />} />;
}
