import { NextRequest, NextResponse } from 'next/server';
import { createToken, COOKIE_NAME } from '@/lib/auth';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

function timingSafeEqual(a: string, b: string): boolean {
  // Constant-time string comparison without Node crypto (works on Edge runtime too).
  const aBuf = new TextEncoder().encode(a);
  const bBuf = new TextEncoder().encode(b);
  const len = Math.max(aBuf.length, bBuf.length);
  let diff = aBuf.length ^ bBuf.length;
  for (let i = 0; i < len; i++) {
    diff |= (aBuf[i] ?? 0) ^ (bBuf[i] ?? 0);
  }
  return diff === 0;
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const limit = rateLimit({ key: `login:${ip}`, windowMs: 15 * 60_000, max: 5 });
    if (!limit.ok) {
      return NextResponse.json(
        { error: 'Too many attempts. Try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((limit.resetAt - Date.now()) / 1000)) } }
      );
    }

    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json(
        { error: 'Admin not configured' },
        { status: 500 }
      );
    }

    if (typeof password !== 'string' || !timingSafeEqual(password, adminPassword)) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    const token = await createToken();
    const response = NextResponse.json({ success: true });

    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 86400,
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}
