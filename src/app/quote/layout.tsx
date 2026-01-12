import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get a Free Quote',
  description:
    'Request a free, no-obligation freight quote. Get customized shipping rates for sea freight, air freight, and door-to-door delivery from China within 24 hours.',
  alternates: {
    canonical: '/quote',
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
