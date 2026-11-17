import type { Metadata } from 'next';
import { KitArticlePage, type KitArticle } from '@/components/sections/KitArticlePage';

import data from '@/content/articles/amazon-fba-freight-forwarding.json';

const article = data as KitArticle;

export const metadata: Metadata = {
  title: 'Shipping From China to Amazon FBA: Routes, Fees, Checklist',
  description: article.metaDescription,
  alternates: { canonical: '/amazon-fba-freight-forwarding' },
  openGraph: {
    title: article.title,
    description: article.metaDescription,
    type: 'article',
    images: article.cover ? [{ url: article.cover.url, alt: article.cover.alt }] : undefined,
  },
};

export default function AmazonFbaPage() {
  return <KitArticlePage article={article} crumb={{ label: 'Services', href: '/services' }} />;
}
