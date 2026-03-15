'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MessageSquareQuote } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FloatingQuoteButton() {
  const [hasHeroQuoteForm, setHasHeroQuoteForm] = useState(false);

  useEffect(() => {
    // Check if HeroQuoteForm exists on the page
    const quoteForm = document.querySelector('[data-hero-quote-form]');
    setHasHeroQuoteForm(!!quoteForm);
  }, []);

  const handleClick = () => {
    if (hasHeroQuoteForm) {
      const quoteForm = document.querySelector('[data-hero-quote-form]');
      if (quoteForm) {
        quoteForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  if (hasHeroQuoteForm) {
    return (
      <Button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 bg-orange hover:bg-orange-dark text-white shadow-lg rounded-full px-6 py-3 h-auto"
      >
        <MessageSquareQuote className="h-5 w-5 mr-2" />
        Free Quote
      </Button>
    );
  }

  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 bg-orange hover:bg-orange-dark text-white shadow-lg rounded-full px-6 py-3 h-auto"
    >
      <Link href="/quote">
        <MessageSquareQuote className="h-5 w-5 mr-2" />
        Free Quote
      </Link>
    </Button>
  );
}
