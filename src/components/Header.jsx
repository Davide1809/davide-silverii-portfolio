export function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Davide Silverii, home">
        <span className="wordmark-mark">DS</span>
        <span>Davide Silverii</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a className="nav-contact" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  )
}
