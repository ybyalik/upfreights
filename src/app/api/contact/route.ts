import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';
import { sanitizeInput, validateEmail } from '@/lib/validation';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const limit = rateLimit({ key: `contact:${ip}`, windowMs: 60_000, max: 3 });
    if (!limit.ok) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment and try again.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((limit.resetAt - Date.now()) / 1000)) } }
      );
    }

    const body = await request.json();

    // Honeypot check - if filled, silently accept but don't process
    if (body.website) {
      console.log('Honeypot triggered - bot submission detected');
      return NextResponse.json(
        { success: true, message: 'Message sent successfully' },
        { status: 200 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(body.name || ''),
      email: sanitizeInput(body.email || ''),
      phone: sanitizeInput(body.phone || ''),
      company: sanitizeInput(body.company || ''),
      message: sanitizeInput(body.message || ''),
    };

    // Basic validation
    const errors: Record<string, string> = {};

    if (!sanitizedData.name || sanitizedData.name.trim().length < 2) {
      errors.name = 'Name is required';
    }

    const emailValidation = validateEmail(sanitizedData.email);
    if (!emailValidation.isValid) {
      errors.email = emailValidation.error || 'Invalid email';
    }

    if (!sanitizedData.message || sanitizedData.message.trim().length === 0) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    // Send email
    await sendContactEmail(sanitizedData);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
