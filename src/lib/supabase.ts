/**
 * Supabase client — server-side only (uses service role key).
 * Never import this in client components.
 *
 * Supabase table setup (run once in Supabase SQL editor):
 *
 *   create table if not exists user_progress (
 *     username   text primary key,
 *     progress   jsonb not null default '{}'::jsonb,
 *     updated_at timestamptz not null default now()
 *   );
 *
 *   -- Disable RLS (we handle auth ourselves)
 *   alter table user_progress disable row level security;
 */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl  = process.env.SUPABASE_URL!
const supabaseKey  = process.env.SUPABASE_SERVICE_ROLE_KEY!   // server-only

if (!supabaseUrl || !supabaseKey) {
  // Only throw at runtime, not during build
  if (process.env.NODE_ENV !== 'production') {
    console.warn('⚠️  Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local')
  }
}

export const supabase = createClient(supabaseUrl ?? '', supabaseKey ?? '')

/** Progress map: { lessonId: boolean } */
export type ProgressMap = Record<string, boolean>

/** Load all progress for a user */
export async function loadProgress(username: string): Promise<ProgressMap> {
  const { data, error } = await supabase
    .from('user_progress')
    .select('progress')
    .eq('username', username)
    .single()

  if (error || !data) return {}
  return (data.progress as ProgressMap) ?? {}
}

/** Save (upsert) progress for a user */
export async function saveProgress(username: string, progress: ProgressMap): Promise<void> {
  await supabase
    .from('user_progress')
    .upsert(
      { username, progress, updated_at: new Date().toISOString() },
      { onConflict: 'username' }
    )
}
