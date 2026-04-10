'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { login } = useAuth()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const success = await login(username, password)
      if (success) {
        const redirect = searchParams.get('redirect') || '/level0/lesson1'
        router.push(redirect)
      } else {
        setError('Invalid username or password')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          id="username"
          type="text"
          className="form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          id="password"
          type="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <button
        type="submit"
        className="login-submit"
        disabled={isLoading}
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  )
}

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <div className="login-logo-icon">🤖</div>
        </div>

        <h1 style={{ marginBottom: '0.25rem', textAlign: 'center' }}>AI for Everyone</h1>
        <p className="login-subtitle">Welcome back — please sign in to continue</p>

        <Suspense fallback={<div style={{ padding: '1rem', textAlign: 'center' }}>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  )
}
