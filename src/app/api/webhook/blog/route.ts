import { NextResponse } from 'next/server';

/**
 * The old outside publishing door (Outrank) is switched off, 15 November 2026.
 * Nothing can post to the blog from outside any more. Posts are added through the admin editor only.
 */
function gone() {
  return NextResponse.json({ error: 'This endpoint has been retired.' }, { status: 410 });
}

export const POST = gone;
export const GET = gone;
export const OPTIONS = gone;
