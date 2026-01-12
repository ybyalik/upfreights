import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  variant?: 'default' | 'light';
}

export function Breadcrumbs({ items, className, variant = 'default' }: BreadcrumbsProps) {
  const isLight = variant === 'light';

  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center space-x-1 text-sm', className)}>
      <Link
        href="/"
        className={cn(
          'flex items-center transition-colors',
          isLight
            ? 'text-white/70 hover:text-white'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center">
            <ChevronRight className={cn(
              'h-4 w-4 mx-1',
              isLight ? 'text-white/40' : 'text-muted-foreground/50'
            )} />
            {isLast || !item.href ? (
              <span className={cn(
                isLast
                  ? (isLight ? 'text-white font-medium' : 'text-foreground font-medium')
                  : (isLight ? 'text-white/70' : 'text-muted-foreground')
              )}>
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  'transition-colors',
                  isLight
                    ? 'text-white/70 hover:text-white'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
