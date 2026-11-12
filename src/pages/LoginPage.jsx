import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/useAuth.js'

export function LoginPage() {
  const { login, status, authError } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [formError, setFormError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (status === 'checking') {
    return (
      <section className="route-page content-width auth-status" aria-live="polite">
        <p className="eyebrow">Checking session</p>
        <h1>Checking your sign-in…</h1>
      </section>
    )
  }

  if (status === 'authenticated') {
    return <Navigate to="/dashboard" replace />
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setFormError('')

    const normalizedUsername = username.trim()
    if (!normalizedUsername || !password.trim()) {
      setFormError('Enter both your username and password.')
      return
    }

    setIsSubmitting(true)
    try {
      await login({ username: normalizedUsername, password })
      const destination = location.state?.from?.pathname || '/dashboard'
      navigate(destination, { replace: true })
    } catch (error) {
      setFormError(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="auth-page route-page content-width" aria-labelledby="login-title">
      <div className="auth-card">
        <p className="eyebrow">Inventory system · Sign in</p>
        <h1 id="login-title">Welcome back.</h1>
        <p className="auth-intro">Sign in with your Inventory System API account to open your protected dashboard.</p>
        {authError && <p className="auth-message auth-message-error" role="alert">{authError}</p>}
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="username">Username</label>
          <input
            autoComplete="username"
            autoFocus
            id="username"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
            required
            value={username}
          />
          <label htmlFor="password">Password</label>
          <input
            autoComplete="current-password"
            id="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            required
            type="password"
            value={password}
          />
          {formError && <p className="auth-message auth-message-error" role="alert">{formError}</p>}
          <button className="button button-primary auth-submit" disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Signing in…' : 'Sign in'} <span aria-hidden="true">↗</span>
          </button>
        </form>
        <Link className="text-link auth-home-link" to="/">← Back to portfolio</Link>
      </div>
    </section>
  )
}
