'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { TiptapEditor } from './TiptapEditor';
import { markdownToHtml, htmlToMarkdown } from '@/lib/markdown';
import { Loader2, ArrowLeft, Upload, X, ExternalLink, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface BlogFormData {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  featured: boolean;
}

interface BlogFormProps {
  initialData?: BlogFormData;
  mode: 'create' | 'edit';
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function BlogForm({ initialData, mode }: BlogFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [slugManual, setSlugManual] = useState(false);
  const [dirty, setDirty] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<BlogFormData>({
    slug: '',
    title: '',
    excerpt: '',
    content: '',
    category: '',
    publishedAt: new Date().toISOString().slice(0, 10),
    image: '',
    metaTitle: '',
    metaDescription: '',
    featured: false,
    ...initialData,
  });

  const [editorHtml, setEditorHtml] = useState('');

  useEffect(() => {
    if (initialData?.content) {
      setEditorHtml(markdownToHtml(initialData.content));
    }
  }, [initialData?.content]);

  // Warn before leaving with unsaved changes
  useEffect(() => {
    if (!dirty) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [dirty]);

  function updateField<K extends keyof BlogFormData>(key: K, value: BlogFormData[K]) {
    setDirty(true);
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      if (key === 'title' && !slugManual) {
        next.slug = slugify(value as string);
      }
      return next;
    });
  }

  function handleEditorChange(html: string) {
    setDirty(true);
    setEditorHtml(html);
    const md = htmlToMarkdown(html);
    setForm((prev) => ({ ...prev, content: md }));
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Upload failed');
      }

      const { url } = await res.json();
      updateField('image', url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload image');
    }

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      const url = mode === 'create' ? '/api/admin/blog' : `/api/admin/blog/${initialData?.id}`;
      const method = mode === 'create' ? 'POST' : 'PUT';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to save');
      }

      setDirty(false);
      router.push('/admin/blog');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
          <Link href="/admin/blog">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-heading font-bold">
          {mode === 'create' ? 'New Post' : 'Edit Post'}
        </h1>
        {mode === 'edit' && form.slug && (
          <Button variant="outline" size="sm" className="ml-auto" asChild>
            <a href={`/blog/${form.slug}`} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Post
            </a>
          </Button>
        )}
      </div>

      {error && (
        <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={form.title}
            onChange={(e) => updateField('title', e.target.value)}
            placeholder="Post title"
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            value={form.slug}
            onChange={(e) => {
              setSlugManual(true);
              updateField('slug', e.target.value);
            }}
            placeholder="post-slug"
            required
          />
          <p className="text-xs text-muted-foreground">Auto-generated from title. Edit to customize.</p>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="excerpt">Excerpt</Label>
            <span className={`text-xs ${form.excerpt.length > 300 ? 'text-destructive' : 'text-muted-foreground'}`}>
              {form.excerpt.length}/300
            </span>
          </div>
          <Textarea
            id="excerpt"
            value={form.excerpt}
            onChange={(e) => updateField('excerpt', e.target.value)}
            placeholder="Brief description of the post"
            rows={3}
          />
        </div>

        <div className="grid gap-2">
          <Label>Content</Label>
          <TiptapEditor
            content={editorHtml}
            onChange={handleEditorChange}
            placeholder="Write your blog post content..."
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            value={form.category}
            onChange={(e) => updateField('category', e.target.value)}
            placeholder="e.g. Shipping, Logistics"
          />
        </div>

        <div className="grid gap-2">
          <Label>Featured Image</Label>
          {form.image ? (
            <div className="relative inline-block">
              <img
                src={form.image}
                alt="Featured"
                className="h-40 w-auto rounded-md border object-cover"
              />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute -top-2 -right-2 h-6 w-6"
                onClick={() => updateField('image', '')}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ) : (
            <div
              className="flex flex-col items-center justify-center rounded-md border border-dashed p-6 cursor-pointer hover:bg-accent/50 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              {uploading ? (
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              ) : (
                <>
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Click to upload an image</p>
                  <p className="text-xs text-muted-foreground mt-1">JPG, PNG, WebP, GIF, or SVG</p>
                </>
              )}
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="publishedAt">Published Date</Label>
          <Input
            id="publishedAt"
            type="date"
            value={form.publishedAt.slice(0, 10)}
            onChange={(e) => updateField('publishedAt', e.target.value)}
            className="max-w-xs"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="metaTitle">Meta Title</Label>
            <Input
              id="metaTitle"
              value={form.metaTitle}
              onChange={(e) => updateField('metaTitle', e.target.value)}
              placeholder="SEO title (defaults to post title)"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="metaDescription">Meta Description</Label>
              <span className={`text-xs ${form.metaDescription.length > 160 ? 'text-destructive' : 'text-muted-foreground'}`}>
                {form.metaDescription.length}/160
              </span>
            </div>
            <Textarea
              id="metaDescription"
              value={form.metaDescription}
              onChange={(e) => updateField('metaDescription', e.target.value)}
              placeholder="SEO description (defaults to excerpt)"
              rows={2}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            id="featured"
            type="checkbox"
            checked={form.featured}
            onChange={(e) => updateField('featured', e.target.checked)}
            className="rounded border-input"
          />
          <Label htmlFor="featured" className="cursor-pointer">Featured post</Label>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={saving || uploading}>
          {saving ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Saving...
            </>
          ) : mode === 'create' ? (
            'Create Post'
          ) : (
            'Update Post'
          )}
        </Button>
        <Button variant="outline" type="button" asChild>
          <Link href="/admin/blog">Cancel</Link>
        </Button>
      </div>
    </form>
  );
}
