import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Testimonial } from '@/lib/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <Card className={cn('h-full border-border/50', className)}>
      <CardContent className="p-6">
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'h-4 w-4',
                i < testimonial.rating
                  ? 'text-orange fill-orange'
                  : 'text-muted-foreground/30'
              )}
            />
          ))}
        </div>

        {/* Content */}
        <blockquote className="text-foreground mb-6 leading-relaxed">
          &ldquo;{testimonial.content}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-semibold text-primary">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>

        {/* Route badge if available */}
        {testimonial.route && (
          <div className="mt-4 pt-4 border-t border-border/50">
            <span className="text-xs text-muted-foreground">
              Route: {testimonial.route}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Sample testimonials data for use throughout the site
export const sampleTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'TechGear Inc.',
    role: 'Supply Chain Manager',
    content: 'UpFreights has transformed our supply chain. Their sea freight service from Shenzhen to Los Angeles is consistently reliable, and their tracking system keeps us informed every step of the way.',
    rating: 5,
    route: 'Shenzhen to Los Angeles',
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'HomeStyle Imports',
    role: 'Operations Director',
    content: 'We\'ve been using UpFreights for over 3 years. Their customs clearance expertise has saved us countless hours and prevented costly delays. Highly recommended for furniture imports.',
    rating: 5,
    route: 'Shanghai to New York',
  },
  {
    id: '3',
    name: 'Emma Williams',
    company: 'Fashion Forward Ltd',
    role: 'Procurement Manager',
    content: 'The door-to-door service is exceptional. From pickup in Guangzhou to delivery at our UK warehouse, everything is handled professionally. Their air freight rates are very competitive.',
    rating: 5,
    route: 'Guangzhou to London',
  },
  {
    id: '4',
    name: 'David Mueller',
    company: 'AutoParts GmbH',
    role: 'Logistics Coordinator',
    content: 'UpFreights helped us establish a reliable supply line from China to Germany. Their team understands EU regulations and ensures smooth customs processing every time.',
    rating: 4,
    route: 'Shanghai to Hamburg',
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    company: 'Oz Electronics',
    role: 'Import Manager',
    content: 'Fast transit times and excellent communication. Our electronics shipments from Shenzhen arrive in Melbourne in perfect condition. The biosecurity compliance handling is seamless.',
    rating: 5,
    route: 'Shenzhen to Melbourne',
  },
  {
    id: '6',
    name: 'James Wilson',
    company: 'Maple Goods Co.',
    role: 'Owner',
    content: 'As a small business, I needed a freight partner who could guide me through the process. UpFreights made importing from China to Canada straightforward and affordable.',
    rating: 5,
    route: 'Ningbo to Vancouver',
  },
];
