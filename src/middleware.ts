import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import { RETIRED_AIR_ROUTE_SLUGS } from '@/lib/data/retiredAirRoutes';
import { RETIRED_SEA_ROUTE_SLUGS } from '@/lib/data/retiredSeaRoutes';

/**
 * Edge Middleware - runs at the edge, not origin
 * This significantly reduces Edge Request CPU Duration on Vercel
 * by processing headers at edge locations rather than origin servers.
 */

const COOKIE_NAME = 'admin_token';

// Retired sea-freight routes that 301-redirect to the home page rather than
// returning 410. Listed by flat slug (origin-to-destination).
const SEA_ROUTES_REDIRECT_TO_HOME = new Set<string>([
  'qingdao-to-new-york',
  'ningbo-to-new-york',
]);

async function verifyAdminToken(token: string): Promise<boolean> {
  try {
    const secret = process.env.ADMIN_JWT_SECRET;
    if (!secret) return false;
    await jwtVerify(token, new TextEncoder().encode(secret));
    return true;
  } catch {
    return false;
  }
}

// Security headers applied at the edge
const securityHeaders = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; '),
};

// Body returned for unpublished air-freight routes (HTTP 410 Gone).
function goneResponse(): NextResponse {
  const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Page no longer available | UpFreights</title></head>
<body style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:40rem;margin:6rem auto;padding:0 1.5rem;color:#1f2937;line-height:1.6">
<h1 style="font-size:1.5rem;margin-bottom:.5rem">This page is no longer available</h1>
<p style="color:#6b7280">The air freight route you were looking for has been removed. Explore our current services instead.</p>
<p style="margin-top:1.5rem"><a href="/air-freight" style="color:#0d9488;font-weight:600;text-decoration:none">Air Freight services</a> &nbsp;·&nbsp; <a href="/" style="color:#0d9488;font-weight:600;text-decoration:none">Home</a></p>
</body></html>`;
  return new NextResponse(html, {
    status: 410,
    headers: { 'content-type': 'text/html; charset=utf-8', 'x-robots-tag': 'noindex' },
  });
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Unpublished air/sea-freight routes: serve 410 Gone. These flat URLs
  // (/air-freight-<origin>-to-<dest>, /sea-freight-<origin>-to-<dest>) are
  // matched before the next.config rewrite to /(air|sea)-freight/<slug>, so
  // this is authoritative.
  if (pathname.startsWith('/air-freight-')) {
    if (RETIRED_AIR_ROUTE_SLUGS.has(pathname.slice('/air-freight-'.length))) {
      return goneResponse();
    }
  }
  if (pathname.startsWith('/sea-freight-')) {
    const slug = pathname.slice('/sea-freight-'.length);
    // A few retired routes 301 to the home page instead of returning 410.
    // They stay in RETIRED_SEA_ROUTE_SLUGS so the generator still excludes
    // them from the sitemap and internal links; this just changes the response.
    if (SEA_ROUTES_REDIRECT_TO_HOME.has(slug)) {
      return NextResponse.redirect(new URL('/', request.url), 301);
    }
    if (RETIRED_SEA_ROUTE_SLUGS.has(slug)) {
      return goneResponse();
    }
  }

  // Admin page protection (except login page)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (!token || !(await verifyAdminToken(token))) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Admin API protection (except auth endpoints)
  if (pathname.startsWith('/api/admin') && !pathname.startsWith('/api/admin/auth')) {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (!token || !(await verifyAdminToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  // Apply security headers
  const response = NextResponse.next();
  for (const [key, value] of Object.entries(securityHeaders)) {
    response.headers.set(key, value);
  }

  return response;
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
