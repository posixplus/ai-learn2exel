/**
 * Hardcoded course users.
 * To add/remove students, edit this file and redeploy to Vercel.
 *
 * SECURITY NOTE: These passwords are stored in plain text here.
 * This is acceptable for a private internal course with <100 users.
 * For a public-facing product, use proper password hashing.
 *
 * Roles:
 *   'admin'   — can see all progress (future feature), marked specially
 *   'student' — standard learner access
 */

export interface CourseUser {
  username: string
  password: string
  displayName: string
  role: 'admin' | 'student'
  profession?: string   // optional — pre-set their profession
}

const USERS: CourseUser[] = [
  {
    username: 'jay',
    password: '$JKRichmond2026',        // ← Change this!
    displayName: 'Jay',
    role: 'admin',
  },
  // ── Add students below ────────────────────────────────────
  // {
  //   username: 'alice',
  //   password: 'alice2024',
  //   displayName: 'Alice',
  //   role: 'student',
  //   profession: 'teacher',
  // },
  // {
  //   username: 'bob',
  //   password: 'bob2024',
  //   displayName: 'Bob',
  //   role: 'student',
  // },
]

export default USERS

/** Look up a user by username (case-insensitive) */
export function findUser(username: string): CourseUser | undefined {
  return USERS.find(u => u.username.toLowerCase() === username.toLowerCase())
}

/** Validate username + password. Returns user if valid, null otherwise. */
export function validateCredentials(username: string, password: string): CourseUser | null {
  const user = findUser(username)
  if (!user) return null
  if (user.password !== password) return null
  return user
}
