import { Link, NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Davide Silverii, home">
        <span className="wordmark-mark">DS</span>
        <span>Davide Silverii</span>
      </Link>
      <nav aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/items">Projects</NavLink>
        <a className="nav-contact" href="mailto:dsilverii01@rio.edu">Get in touch <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  )
}
