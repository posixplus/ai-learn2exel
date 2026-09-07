import { neon } from '@neondatabase/serverless'

// Lazy client so the build never tries to connect without a database URL.
let _sql: ReturnType<typeof neon> | null = null
export function getSql() {
  if (_sql) return _sql
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL
  if (!url) throw new Error('DATABASE_URL (or POSTGRES_URL) is not set')
  _sql = neon(url)
  return _sql
}

// Idempotent schema creation. Cheap to call; runs once per warm instance.
let schemaReady = false
export async function ensureSchema() {
  if (schemaReady) return
  const sql = getSql()
  await sql`CREATE TABLE IF NOT EXISTS magic_tokens (
    token       TEXT PRIMARY KEY,
    email       TEXT NOT NULL,
    name        TEXT NOT NULL,
    expires_at  TIMESTAMPTZ NOT NULL,
    used        BOOLEAN NOT NULL DEFAULT FALSE,
    cert_id     TEXT
  )`
  await sql`CREATE TABLE IF NOT EXISTS certificates (
    id          TEXT PRIMARY KEY,
    name        TEXT NOT NULL,
    email       TEXT NOT NULL,
    issued_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    signature   TEXT NOT NULL
  )`
  schemaReady = true
}
