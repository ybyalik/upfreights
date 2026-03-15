'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import type { Statistic } from '@/lib/types';

interface StatsProps {
  stats: Statistic[];
  variant?: 'default' | 'dark' | 'cards';
  className?: string;
}

function AnimatedNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateValue();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateValue = () => {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(numericValue * easeOut);

      // Format with commas if needed
      if (value.includes(',')) {
        setDisplayValue(currentValue.toLocaleString());
      } else {
        setDisplayValue(currentValue.toString());
      }

      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayValue(value.replace(/[^0-9,]/g, ''));
      }
    }, stepDuration);
  };

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function Stats({ stats, variant = 'default', className }: StatsProps) {
  if (variant === 'cards') {
    return (
      <div className={cn('grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6', className)}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-card border border-border/50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl lg:text-4xl font-bold text-orange mb-2">
              <AnimatedNumber
                value={stat.value}
                suffix={stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''}
              />
            </div>
            <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
            {stat.description && (
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'dark') {
    return (
      <div className={cn('bg-primary py-12', className)}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-orange mb-2">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''}
                  />
                </div>
                <div className="text-sm font-medium text-primary-foreground mb-1">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-xs text-primary-foreground/60">{stat.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12', className)}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
            <AnimatedNumber
              value={stat.value}
              suffix={stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''}
            />
          </div>
          <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
          {stat.description && (
            <div className="text-xs text-muted-foreground">{stat.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}
