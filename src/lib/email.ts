import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Parse CONTACT_EMAIL which may contain multiple comma-separated addresses
function getContactEmails(): string[] {
  const contactEmail = process.env.CONTACT_EMAIL || 'info@upfreights.com';
  return contactEmail.split(',').map(email => email.trim()).filter(Boolean);
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
}

export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  const { name, email, phone, company, message } = data;

  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
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
    from: process.env.RESEND_FROM_EMAIL || 'UpFreights <noreply@upfreights.com>',
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
  } = data;

  // Get display name for shipping type
  const shippingTypeName = shippingTypeNames[shippingType] || shippingType;

  const htmlContent = `
    <h2>New Quote Request</h2>
    <h3>Contact Information</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}

    <h3>Shipment Details</h3>
    <p><strong>Service Type:</strong> ${shippingTypeName}</p>
    ${cargoType ? `<p><strong>Cargo Type:</strong> ${cargoType}</p>` : ''}
    ${weight ? `<p><strong>Weight:</strong> ${weight}</p>` : ''}
    ${dimensions ? `<p><strong>Dimensions:</strong> ${dimensions}</p>` : ''}
    ${message ? `<p><strong>Additional Notes:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
  `;

  const textContent = `
New Quote Request

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
  `.trim();

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || 'UpFreights <noreply@upfreights.com>',
    to: getContactEmails(),
    replyTo: email,
    subject: `Quote Request: ${shippingTypeName}`,
    text: textContent,
    html: htmlContent,
  });

  if (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
}
