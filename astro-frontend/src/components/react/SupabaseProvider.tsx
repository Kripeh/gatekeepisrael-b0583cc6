/**
 * Shared Supabase client for Astro React Islands.
 * This replaces the Lovable-generated client for the Astro frontend.
 */
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://sqxmgqqtcgkjztpvhzzr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxeG1ncXF0Y2dranp0cHZoenpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwNzg0MDQsImV4cCI6MjA4NDY1NDQwNH0.ItgF4MSwK3OhcnJPhwTAhoRoV4WyQxiPDVsAWzC3HAk';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/** Simple environment-aware logger */
export const logger = {
  error: (message: string, error?: unknown) => {
    console.error(message, error);
  },
  warn: (message: string, data?: unknown) => {
    console.warn(message, data);
  },
};
