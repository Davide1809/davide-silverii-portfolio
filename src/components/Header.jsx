import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../auth/useAuth.js'

export function Header() {
  const { status, logout } = useAuth()
  const [logoutError, setLogoutError] = useState('')

  async function handleLogout() {
    setLogoutError('')
    try {
      await logout()
    } catch (error) {
      setLogoutError(error.message)
    }
  }

  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Davide Silverii, home">
        <span className="wordmark-mark">DS</span>
        <span>Davide Silverii</span>
      </Link>
      <nav aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/items">Projects</NavLink>
        {status === 'authenticated' ? (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <button className="header-action-button" onClick={handleLogout} type="button">Log out</button>
          </>
        ) : (
          <NavLink to="/login">Log in</NavLink>
        )}
        <a className="nav-contact" href="mailto:dsilverii01@rio.edu">Get in touch <span aria-hidden="true">↗</span></a>
      </nav>
      {logoutError && <p className="header-auth-error" role="alert">{logoutError}</p>}
    </header>
  )
}
