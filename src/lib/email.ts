import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Parse CONTACT_EMAIL which may contain multiple comma-separated addresses
function getContactEmails(): string[] {
  const contactEmail = process.env.CONTACT_EMAIL || 'quote@upfreights.com';
  return contactEmail.split(',').map(email => email.trim()).filter(Boolean);
}

// Escape visitor-typed values before they go into an HTML email body, so
// nothing a visitor types can change how the email is displayed.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

interface QuoteEmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  shippingType: string;
  cargoType?: string;
  weight?: string;
  dimensions?: string;
  message?: string;
  sourcePage?: string;
  referrer?: string;
  reference?: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  const { name, email, phone, company, message } = data;

  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  const textContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${company ? `Company: ${company}` : ''}

Message:
${message}
  `.trim();

  const { error } = await resend.emails.send({
    from: 'UpFreights <davidfan@upfreights.com>',
    to: getContactEmails(),
    replyTo: email,
    subject: `Contact Form: ${name}`,
    text: textContent,
    html: htmlContent,
  });

  if (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
}

// Map shipping type IDs to display names
const shippingTypeNames: Record<string, string> = {
  'sea': 'Sea Freight',
  'air': 'Air Freight',
  'door-to-door': 'Door to Door',
  'customs-clearance': 'Customs Clearance',
  'other': 'Other',
};

export async function sendQuoteEmail(data: QuoteEmailData): Promise<void> {
  const {
    name,
    email,
    phone,
    company,
    shippingType,
    cargoType,
    weight,
    dimensions,
    message,
    sourcePage,
    referrer,
    reference,
  } = data;

  // Get display name for shipping type
  const shippingTypeName = shippingTypeNames[shippingType] || shippingType;

  // sourcePage is already reduced to a path, so it is safe to rebuild as a link
  const sourcePageUrl = sourcePage ? `https://upfreights.com${sourcePage}` : '';

  const htmlContent = `
    <h2>New Quote Request</h2>
    ${reference ? `<p><strong>Reference:</strong> ${escapeHtml(reference)}</p>` : ''}
    <h3>Contact Information</h3>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}

    <h3>Shipment Details</h3>
    <p><strong>Service Type:</strong> ${escapeHtml(shippingTypeName)}</p>
    ${cargoType ? `<p><strong>Cargo Type:</strong> ${escapeHtml(cargoType)}</p>` : ''}
    ${weight ? `<p><strong>Weight:</strong> ${escapeHtml(weight)}</p>` : ''}
    ${dimensions ? `<p><strong>Dimensions:</strong> ${escapeHtml(dimensions)}</p>` : ''}
    ${message ? `<p><strong>Additional Notes:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>` : ''}

    <h3>Submitted From</h3>
    <p><strong>Page:</strong> ${sourcePageUrl ? `<a href="${escapeHtml(sourcePageUrl)}">${escapeHtml(sourcePageUrl)}</a>` : 'Unknown'}</p>
    ${referrer ? `<p><strong>Arrived from:</strong> ${escapeHtml(referrer)}</p>` : ''}
  `;

  const textContent = `
New Quote Request
${reference ? `Reference: ${reference}` : ''}

CONTACT INFORMATION
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${company ? `Company: ${company}` : ''}

SHIPMENT DETAILS
Service Type: ${shippingTypeName}
${cargoType ? `Cargo Type: ${cargoType}` : ''}
${weight ? `Weight: ${weight}` : ''}
${dimensions ? `Dimensions: ${dimensions}` : ''}
${message ? `\nAdditional Notes:\n${message}` : ''}

SUBMITTED FROM
Page: ${sourcePageUrl || 'Unknown'}
${referrer ? `Arrived from: ${referrer}` : ''}
  `.trim();

  const { error } = await resend.emails.send({
    from: 'UpFreights <quote@upfreights.com>',
    to: getContactEmails(),
    replyTo: email,
    subject: `Quote Request: ${name} - ${shippingTypeName}`,
    text: textContent,
    html: htmlContent,
  });

  if (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
}

interface QuoteAutoResponseData {
  name: string;
  email: string;
}

export async function sendQuoteAutoResponse(data: QuoteAutoResponseData): Promise<void> {
  const { name, email } = data;

  // Use first name for greeting
  const firstName = name.split(' ')[0];

  const htmlContent = `
    <p>Hi ${escapeHtml(firstName)},</p>

    <p>Thanks for reaching out to UpFreights!</p>

    <p>We've received your freight forwarding quote request and our team is reviewing the details now.</p>

    <p>We'll get back to you as soon as possible with pricing and next steps.</p>

    <p>If your shipment is time-sensitive or you need to add more information, feel free to reply to this email.</p>

    <p>Thank you,<br>
    <strong>The UpFreights Team</strong><br>
    China Freight Forwarding Solutions</p>
  `;

  const textContent = `
Hi ${firstName},

Thanks for reaching out to UpFreights!

We've received your freight forwarding quote request and our team is reviewing the details now.

We'll get back to you as soon as possible with pricing and next steps.

If your shipment is time-sensitive or you need to add more information, feel free to reply to this email.

Thank you,
The UpFreights Team
China Freight Forwarding Solutions
  `.trim();

  const contactEmails = getContactEmails();
  const replyToEmail = contactEmails[0] || 'quote@upfreights.com';

  const { error } = await resend.emails.send({
    from: 'UpFreights <quote@upfreights.com>',
    to: email,
    replyTo: replyToEmail,
    subject: 'We received your quote request - UpFreights',
    text: textContent,
    html: htmlContent,
  });

  if (error) {
    throw new Error(`Failed to send auto-response email: ${error.message}`);
  }
}
