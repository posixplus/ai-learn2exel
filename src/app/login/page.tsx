import { redirect } from 'next/navigation'

// Login is disabled — everyone gets direct access.
// Middleware also redirects /login → / as a safety net.
export default function LoginPage() {
  redirect('/')
}
