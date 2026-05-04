import { NextRequest, NextResponse } from 'next/server';
import { sendQuoteEmail, sendQuoteAutoResponse } from '@/lib/email';
import { sanitizeInput, validateEmail, validatePhone } from '@/lib/validation';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const limit = rateLimit({ key: `quote:${ip}`, windowMs: 60_000, max: 3 });
    if (!limit.ok) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment and try again.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((limit.resetAt - Date.now()) / 1000)) } }
      );
    }

    const body = await request.json();

    // Honeypot spam check - if this field is filled, it's likely a bot
    if (body.website && body.website.trim() !== '') {
      // Silently reject but return success to not alert bots
      console.log('Spam detected: honeypot field filled');
      return NextResponse.json(
        { success: true, message: 'Quote request sent successfully' },
        { status: 200 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(body.name || ''),
      email: sanitizeInput(body.email || ''),
      phone: sanitizeInput(body.phone || ''),
      company: sanitizeInput(body.company || ''),
      shippingType: sanitizeInput(body.shippingType || ''),
      origin: sanitizeInput(body.origin || ''),
      destination: sanitizeInput(body.destination || ''),
      cargoType: sanitizeInput(body.cargoType || ''),
      weight: sanitizeInput(body.weight || ''),
      dimensions: sanitizeInput(body.dimensions || ''),
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

    if (sanitizedData.phone) {
      const phoneValidation = validatePhone(sanitizedData.phone);
      if (!phoneValidation.isValid) {
        errors.phone = phoneValidation.error || 'Invalid phone';
      }
    }

    if (!sanitizedData.shippingType) {
      errors.shippingType = 'Please select a shipping type';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    // Send email to business
    await sendQuoteEmail(sanitizedData);

    // Send auto-response to customer
    try {
      await sendQuoteAutoResponse({
        name: sanitizedData.name,
        email: sanitizedData.email,
      });
    } catch (autoResponseError) {
      // Log but don't fail the request if auto-response fails
      console.error('Failed to send auto-response email:', autoResponseError);
    }

    return NextResponse.json(
      { success: true, message: 'Quote request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json(
      { error: 'Failed to send quote request. Please try again later.' },
      { status: 500 }
    );
  }
}
