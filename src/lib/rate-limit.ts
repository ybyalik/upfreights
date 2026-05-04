import type { NextRequest } from 'next/server';

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

// Periodically prune expired entries to keep the map bounded.
function prune(now: number) {
  if (buckets.size < 1000) return;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  const real = request.headers.get('x-real-ip');
  if (real) return real;
  return 'unknown';
}

export interface RateLimitOptions {
  windowMs: number;
  max: number;
  key: string;
}

export interface RateLimitResult {
  ok: boolean;
  remaining: number;
  resetAt: number;
}

// Best-effort in-memory rate limit. Per-instance only (Vercel may run multiple
// warm instances), but raises the bar against script-driven abuse.
export function rateLimit(options: RateLimitOptions): RateLimitResult {
  const now = Date.now();
  prune(now);

  const bucket = buckets.get(options.key);
  if (!bucket || bucket.resetAt <= now) {
    const fresh: Bucket = { count: 1, resetAt: now + options.windowMs };
    buckets.set(options.key, fresh);
    return { ok: true, remaining: options.max - 1, resetAt: fresh.resetAt };
  }

  if (bucket.count >= options.max) {
    return { ok: false, remaining: 0, resetAt: bucket.resetAt };
  }

  bucket.count += 1;
  return { ok: true, remaining: options.max - bucket.count, resetAt: bucket.resetAt };
}
