import { supabase } from '@/lib/supabase';

/**
 * Backup copy of every form request in the private `leads` table (17 Nov 2026).
 * The email is still the main way leads arrive; this record means a lead is never
 * lost if the email service fails. These helpers never throw, so a database
 * problem can never break a form.
 */
export interface LeadRecord {
  form: 'quote' | 'contact';
  reference?: string;
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  page?: string;
  details?: Record<string, unknown>;
}

export async function saveLead(lead: LeadRecord): Promise<number | null> {
  try {
    const { data, error } = await supabase.from('leads').insert(lead).select('id').single();
    if (error) {
      console.error('Lead backup failed:', error.message);
      return null;
    }
    return data?.id ?? null;
  } catch (e) {
    console.error('Lead backup failed:', e);
    return null;
  }
}

export async function markLeadEmail(id: number | null, sent: boolean, err?: unknown): Promise<void> {
  if (id == null) return;
  try {
    await supabase
      .from('leads')
      .update({ email_sent: sent, email_error: err ? String(err instanceof Error ? err.message : err).slice(0, 500) : null })
      .eq('id', id);
  } catch (e) {
    console.error('Lead backup update failed:', e);
  }
}
