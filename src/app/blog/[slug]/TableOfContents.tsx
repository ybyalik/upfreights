'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

// Group headings into h2s with their nested h3s
function groupHeadings(headings: Heading[]): { h2: Heading; h3s: Heading[] }[] {
  const groups: { h2: Heading; h3s: Heading[] }[] = [];
  let currentGroup: { h2: Heading; h3s: Heading[] } | null = null;

  headings.forEach((heading) => {
    if (heading.level === 2) {
      if (currentGroup) {
        groups.push(currentGroup);
      }
      currentGroup = { h2: heading, h3s: [] };
    } else if (heading.level === 3 && currentGroup) {
      currentGroup.h3s.push(heading);
    }
  });

  if (currentGroup) {
    groups.push(currentGroup);
  }

  return groups;
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const groups = groupHeadings(headings);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <nav className="space-y-1">
      {groups.map((group) => {
        const hasChildren = group.h3s.length > 0;
        const isExpanded = expandedSections.has(group.h2.id);

        return (
          <div key={group.h2.id}>
            <div className="flex items-start gap-1">
              {hasChildren && (
                <button
                  onClick={() => toggleSection(group.h2.id)}
                  className="mt-1 p-0.5 text-muted-foreground hover:text-foreground transition-colors shrink-0"
                  aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
                >
                  <ChevronDown
                    className={cn(
                      'h-3 w-3 transition-transform duration-200',
                      !isExpanded && '-rotate-90'
                    )}
                  />
                </button>
              )}
              <a
                href={`#${group.h2.id}`}
                onClick={(e) => handleClick(e, group.h2.id)}
                className={cn(
                  'block text-sm text-muted-foreground hover:text-orange transition-colors leading-snug',
                  !hasChildren && 'ml-4'
                )}
              >
                {group.h2.text}
              </a>
            </div>

            {hasChildren && isExpanded && (
              <div className="ml-4 mt-1 space-y-1 border-l border-border/50 pl-3">
                {group.h3s.map((h3) => (
                  <a
                    key={h3.id}
                    href={`#${h3.id}`}
                    onClick={(e) => handleClick(e, h3.id)}
                    className="block text-xs text-muted-foreground/80 hover:text-orange transition-colors leading-snug"
                  >
                    {h3.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
