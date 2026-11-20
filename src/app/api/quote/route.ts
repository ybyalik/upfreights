import { NextRequest, NextResponse } from 'next/server';
import { sendQuoteEmail, sendQuoteAutoResponse } from '@/lib/email';
import { sanitizeInput, validateEmail, validatePhone, sanitizeSourcePath, sanitizeReferrer } from '@/lib/validation';
import { rateLimit, getClientIp } from '@/lib/rate-limit';
import { saveLead, markLeadEmail } from '@/lib/leads';

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
      sourcePage: sanitizeSourcePath(body.sourcePage || ''),
      referrer: sanitizeReferrer(body.referrer || ''),
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

    // One reference per request, created here so the number the customer
    // sees on screen is the same one that lands in our inbox.
    const reference = `QR-${Date.now().toString(36).toUpperCase()}`;

    // Backup copy first, so the lead is kept even if the email fails
    const { name, email, company, phone, sourcePage, ...details } = sanitizedData;
    const leadId = await saveLead({ form: 'quote', reference, name, email, company, phone, page: sourcePage, details });

    // Send email to business
    try {
      await sendQuoteEmail({ ...sanitizedData, reference });
      await markLeadEmail(leadId, true);
    } catch (emailError) {
      await markLeadEmail(leadId, false, emailError);
      throw emailError;
    }

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
      { success: true, message: 'Quote request sent successfully', reference },
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
