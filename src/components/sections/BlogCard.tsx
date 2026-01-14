import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { BlogPost } from '@/lib/types';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
}

export function BlogCard({ post, variant = 'default', className }: BlogCardProps) {
  if (variant === 'compact') {
    return (
      <Link href={`/blog/${post.slug}`}>
        <Card className={cn(
          'group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 border-border/50',
          className
        )}>
          <CardContent className="p-4">
            <Badge variant="secondary" className="text-xs mb-2">
              {post.category}
            </Badge>
            <h3 className="font-semibold text-foreground group-hover:text-orange transition-colors line-clamp-2 mb-2">
              {post.title}
            </h3>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {post.readingTime}
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link href={`/blog/${post.slug}`}>
        <Card className={cn(
          'group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden',
          className
        )}>
          <div className="h-48 bg-gradient-to-br from-primary via-primary to-ocean relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-4xl">📦</span>
              </div>
            </div>
            {post.featured && (
              <Badge className="absolute top-4 right-4 bg-orange text-white">
                Featured
              </Badge>
            )}
          </div>
          <CardHeader className="pb-2">
            <Badge variant="secondary" className="w-fit text-xs mb-2">
              {post.category}
            </Badge>
            <h3 className="text-xl font-bold group-hover:text-orange transition-colors line-clamp-2">
              {post.title}
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {post.readingTime}
              </span>
              <span className="flex items-center text-orange font-medium group-hover:translate-x-1 transition-transform">
                Read <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className={cn(
        'group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50',
        className
      )}>
        <CardHeader className="pb-2">
          <Badge variant="secondary" className="w-fit text-xs mb-2">
            {post.category}
          </Badge>
          <h3 className="text-lg font-semibold group-hover:text-orange transition-colors line-clamp-2">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            {post.readingTime}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
