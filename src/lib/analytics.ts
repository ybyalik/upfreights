// Small helper for reporting leads to Google Analytics.
// Safe to call anywhere: it does nothing on the server, or when Analytics
// has not loaded (ad blockers, privacy tools).

type LeadForm = 'hero_quote' | 'quote_page' | 'contact';

export function trackLead(form: LeadForm, details: Record<string, string> = {}): void {
  if (typeof window === 'undefined') return;

  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== 'function') return;

  // "generate_lead" is the event name Google Analytics recommends for form leads.
  gtag('event', 'generate_lead', {
    form_name: form,
    page_path: window.location.pathname,
    ...details,
  });
}
