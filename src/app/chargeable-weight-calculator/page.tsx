import type { Metadata } from 'next';
import { KitArticlePage, type KitArticle } from '@/components/sections/KitArticlePage';
import { ChargeableWeightCalculator } from '@/components/tools/ChargeableWeightCalculator';
import data from '@/content/articles/chargeable-weight-calculator.json';

const article = data as KitArticle;

export const metadata: Metadata = {
  title: 'Chargeable Weight Calculator for Air Freight From China',
  description: article.metaDescription,
  alternates: { canonical: '/chargeable-weight-calculator' },
  openGraph: {
    title: article.title,
    description: article.metaDescription,
    type: 'article',
    images: article.cover ? [{ url: article.cover.url, alt: article.cover.alt }] : undefined,
  },
};

export default function ChargeableWeightPage() {
  return <KitArticlePage article={article} crumb={{ label: 'Air Freight', href: '/air-freight' }} tool={<ChargeableWeightCalculator />} />;
}
