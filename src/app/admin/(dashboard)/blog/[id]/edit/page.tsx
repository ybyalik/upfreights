'use client';

import { useEffect, useState, use } from 'react';
import { BlogForm } from '@/components/admin/BlogForm';
import { Loader2 } from 'lucide-react';

export default function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [data, setData] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/admin/blog/${id}`);
        if (!res.ok) throw new Error('Post not found');
        const json = await res.json();
        setData(json.post);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load post');
      }
    }
    load();
  }, [id]);

  if (error) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return <BlogForm mode="edit" initialData={data as never} />;
}
