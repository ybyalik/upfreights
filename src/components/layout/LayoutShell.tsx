'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import dynamic from 'next/dynamic';

const FloatingQuoteButton = dynamic(
  () => import('./FloatingQuoteButton').then(mod => ({ default: mod.FloatingQuoteButton }))
);

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingQuoteButton />
    </>
  );
}
