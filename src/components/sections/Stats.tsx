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
  // The number as written, minus the "+" or "%" sign. Keeps commas and decimals,
  // so "99.2%" stays "99.2" and "10,000+" stays "10,000".
  const finalText = value.replace(/[^0-9.,]/g, '');
  // The server (and anyone without JavaScript) gets the real figure, never "0".
  const [displayValue, setDisplayValue] = useState(finalText);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const target = parseFloat(finalText.replace(/,/g, ''));
    if (!Number.isFinite(target)) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const decimals = (finalText.split('.')[1] || '').length;
    const useCommas = finalText.includes(',');
    const format = (n: number) =>
      useCommas
        ? n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
        : n.toFixed(decimals);

    let timer: ReturnType<typeof setInterval> | undefined;

    const animateValue = () => {
      const duration = 2000;
      const steps = 60;
      let currentStep = 0;

      timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const factor = Math.pow(10, decimals);
        setDisplayValue(format(Math.floor(target * easeOut * factor) / factor));

        if (currentStep >= steps) {
          clearInterval(timer);
          setDisplayValue(finalText);
        }
      }, duration / steps);
    };

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

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [finalText]);

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
