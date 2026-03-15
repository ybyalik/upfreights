import { cn } from '@/lib/utils';
import type { FAQ } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  description?: string;
  className?: string;
}

export function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  description,
  className,
}: FAQSectionProps) {
  return (
    <section className={cn('py-20 lg:py-28 bg-background', className)}>
      <div className="container mx-auto px-4">
        {/* Asymmetric header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-5">
            <p className="text-copper font-medium text-sm uppercase tracking-wider mb-2">FAQ</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              {title}
            </h2>
          </div>
          {description && (
            <div className="lg:col-span-5 lg:col-start-7 flex items-end">
              <p className="text-muted-foreground">{description}</p>
            </div>
          )}
        </div>

        {/* Asymmetric FAQ layout - left rail with numbering */}
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="hidden lg:block lg:col-span-1">
            {/* Decorative vertical line */}
            <div className="w-px h-full bg-border ml-auto" />
          </div>

          <div className="lg:col-span-10">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-cream rounded-xl border-0 px-6 data-[state=open]:bg-cream-dark transition-colors"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-copper hover:no-underline py-5">
                    <span className="flex items-center gap-4">
                      <span className="text-copper/50 font-mono text-sm">{String(index + 1).padStart(2, '0')}</span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 pl-10">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
