// Form validation utilities

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

// Validate email format
export function validateEmail(email: string): ValidationResult {
  if (!email || email.trim().length === 0) {
    return { isValid: false, error: 'Email is required' };
  }

  // Max length check
  if (email.length > 254) {
    return { isValid: false, error: 'Email is too long' };
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  return { isValid: true };
}

// Validate phone number (international format)
export function validatePhone(phone: string): ValidationResult {
  if (!phone || phone.trim().length === 0) {
    return { isValid: false, error: 'Phone number is required' };
  }

  // Remove spaces, dashes, parentheses for validation
  const cleanPhone = phone.replace(/[\s\-()]/g, '');

  // Max length check
  if (cleanPhone.length > 20) {
    return { isValid: false, error: 'Phone number is too long' };
  }

  // Allow international format: optional + followed by digits
  const phoneRegex = /^\+?[0-9]{7,15}$/;
  if (!phoneRegex.test(cleanPhone)) {
    return { isValid: false, error: 'Please enter a valid phone number' };
  }

  return { isValid: true };
}

// Validate name (first or last)
export function validateName(name: string, fieldName: string = 'Name'): ValidationResult {
  if (!name || name.trim().length === 0) {
    return { isValid: false, error: `${fieldName} is required` };
  }

  // Min length
  if (name.trim().length < 2) {
    return { isValid: false, error: `${fieldName} must be at least 2 characters` };
  }

  // Max length
  if (name.length > 50) {
    return { isValid: false, error: `${fieldName} is too long` };
  }

  // Only allow letters, spaces, hyphens, apostrophes
  const nameRegex = /^[a-zA-Z\s\-']+$/;
  if (!nameRegex.test(name)) {
    return { isValid: false, error: `${fieldName} contains invalid characters` };
  }

  return { isValid: true };
}

// Validate company name (optional)
export function validateCompany(company: string): ValidationResult {
  if (!company || company.trim().length === 0) {
    return { isValid: true }; // Optional field
  }

  // Max length
  if (company.length > 100) {
    return { isValid: false, error: 'Company name is too long' };
  }

  return { isValid: true };
}

// Validate text area content (messages, special requirements)
export function validateTextArea(text: string, fieldName: string = 'Message', maxLength: number = 2000): ValidationResult {
  if (!text || text.trim().length === 0) {
    return { isValid: true }; // Optional by default
  }

  if (text.length > maxLength) {
    return { isValid: false, error: `${fieldName} is too long (max ${maxLength} characters)` };
  }

  return { isValid: true };
}

// Validate subject line
export function validateSubject(subject: string): ValidationResult {
  if (!subject || subject.trim().length === 0) {
    return { isValid: true }; // Optional
  }

  if (subject.length > 200) {
    return { isValid: false, error: 'Subject is too long' };
  }

  return { isValid: true };
}

// Sanitize input to prevent injection
export function sanitizeInput(input: string): string {
  if (!input) return '';

  // Remove any HTML tags
  let sanitized = input.replace(/<[^>]*>/g, '');

  // Remove potential script injections
  sanitized = sanitized.replace(/javascript:/gi, '');
  sanitized = sanitized.replace(/on\w+\s*=/gi, '');

  // Trim and limit length
  return sanitized.trim().slice(0, 5000);
}

// Validate quote form
export interface QuoteFormData {
  serviceType: string;
  timeline: string;
  specialRequirements: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
}

export function validateQuoteForm(data: QuoteFormData): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  // Required: service type
  if (!data.serviceType) {
    errors.serviceType = 'Please select a service type';
  }

  // Required: timeline
  if (!data.timeline) {
    errors.timeline = 'Please select a timeline';
  }

  // Optional: special requirements
  const reqValidation = validateTextArea(data.specialRequirements, 'Special requirements', 2000);
  if (!reqValidation.isValid && reqValidation.error) {
    errors.specialRequirements = reqValidation.error;
  }

  // Required: first name
  const firstNameValidation = validateName(data.firstName, 'First name');
  if (!firstNameValidation.isValid && firstNameValidation.error) {
    errors.firstName = firstNameValidation.error;
  }

  // Required: last name
  const lastNameValidation = validateName(data.lastName, 'Last name');
  if (!lastNameValidation.isValid && lastNameValidation.error) {
    errors.lastName = lastNameValidation.error;
  }

  // Required: email
  const emailValidation = validateEmail(data.email);
  if (!emailValidation.isValid && emailValidation.error) {
    errors.email = emailValidation.error;
  }

  // Required: phone
  const phoneValidation = validatePhone(data.phone);
  if (!phoneValidation.isValid && phoneValidation.error) {
    errors.phone = phoneValidation.error;
  }

  // Optional: company
  const companyValidation = validateCompany(data.company);
  if (!companyValidation.isValid && companyValidation.error) {
    errors.company = companyValidation.error;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

// Validate contact form
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export function validateContactForm(data: ContactFormData): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  // Required: first name
  const firstNameValidation = validateName(data.firstName, 'First name');
  if (!firstNameValidation.isValid && firstNameValidation.error) {
    errors.firstName = firstNameValidation.error;
  }

  // Required: last name
  const lastNameValidation = validateName(data.lastName, 'Last name');
  if (!lastNameValidation.isValid && lastNameValidation.error) {
    errors.lastName = lastNameValidation.error;
  }

  // Required: email
  const emailValidation = validateEmail(data.email);
  if (!emailValidation.isValid && emailValidation.error) {
    errors.email = emailValidation.error;
  }

  // Optional: phone
  if (data.phone && data.phone.trim().length > 0) {
    const phoneValidation = validatePhone(data.phone);
    if (!phoneValidation.isValid && phoneValidation.error) {
      errors.phone = phoneValidation.error;
    }
  }

  // Optional: company
  const companyValidation = validateCompany(data.company);
  if (!companyValidation.isValid && companyValidation.error) {
    errors.company = companyValidation.error;
  }

  // Optional: subject
  const subjectValidation = validateSubject(data.subject);
  if (!subjectValidation.isValid && subjectValidation.error) {
    errors.subject = subjectValidation.error;
  }

  // Required: message
  if (!data.message || data.message.trim().length === 0) {
    errors.message = 'Message is required';
  } else {
    const messageValidation = validateTextArea(data.message, 'Message', 5000);
    if (!messageValidation.isValid && messageValidation.error) {
      errors.message = messageValidation.error;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
