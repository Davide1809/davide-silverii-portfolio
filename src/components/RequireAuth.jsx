import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../auth/useAuth.js'

export function RequireAuth({ children }) {
  const { status, authError, retrySession } = useAuth()
  const location = useLocation()

  if (status === 'checking') {
    return (
      <section className="route-page content-width auth-status" aria-live="polite">
        <p className="eyebrow">Checking session</p>
        <h1>Checking your sign-in…</h1>
      </section>
    )
  }

  if (status === 'error') {
    return (
      <section className="route-page content-width auth-status">
        <p className="eyebrow">Authentication unavailable</p>
        <h1>Can’t check your session.</h1>
        <p role="alert">{authError}</p>
        <button className="button button-primary" type="button" onClick={() => void retrySession()}>
          Try again <span aria-hidden="true">↻</span>
        </button>
      </section>
    )
  }

  if (status !== 'authenticated') {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return children
}
