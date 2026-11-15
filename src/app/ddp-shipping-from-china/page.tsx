import type { Metadata } from 'next';
import { KitArticlePage, type KitArticle } from '@/components/sections/KitArticlePage';
import data from '@/content/articles/ddp-shipping-from-china.json';

const article = data as KitArticle;

export const metadata: Metadata = {
  title: 'DDP Shipping From China to the US: What the Price Covers',
  description: article.metaDescription,
  alternates: { canonical: '/ddp-shipping-from-china' },
  openGraph: {
    title: article.title,
    description: article.metaDescription,
    type: 'article',
    images: article.cover ? [{ url: article.cover.url, alt: article.cover.alt }] : undefined,
  },
};

export default function DdpShippingPage() {
  return <KitArticlePage article={article} crumb={{ label: 'Services', href: '/services' }} />;
}
