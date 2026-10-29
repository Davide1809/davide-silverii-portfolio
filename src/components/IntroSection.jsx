export function IntroSection({ profilePhoto }) {
  return (
    <section className="intro-section" aria-labelledby="intro-title">
      <div className="intro-copy">
        <p className="eyebrow"><span className="status-dot" /> Cybersecurity student · Developer</p>
        <h1 id="intro-title">Curious about systems.<br />{' '}<span>Focused on making them safer.</span></h1>
        <p className="intro-summary">
          I’m Davide, a cybersecurity student who enjoys understanding how technology works
          and building useful things with it.
        </p>
        <div className="intro-actions">
          <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
          <a className="text-link" href="mailto:dsilverii01@rio.edu">Contact me <span aria-hidden="true">↗</span></a>
        </div>
        <p className="intro-location"><span aria-hidden="true">↳</span> Studying at the University of Rio Grande</p>
      </div>
      <figure className="portrait-frame">
        <img src={profilePhoto} alt="Portrait of Davide Silverii" />
        <figcaption><span>Currently learning</span><strong>Secure application development</strong></figcaption>
      </figure>
      <span className="intro-index" aria-hidden="true">01 / 04</span>
    </section>
  )
}
