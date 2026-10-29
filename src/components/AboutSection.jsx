export function AboutSection() {
  return (
    <section className="about-section content-width" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow">A little about me</p>
        <h2 id="about-title">Good security starts<br />with good questions.</h2>
      </div>
      <div className="about-details">
        <p>
          I’m building a foundation across cybersecurity, software development, and the
          systems that connect them. I like turning what I learn into practical projects,
          from network analysis to small web applications.
        </p>
        <ul className="skill-list" aria-label="Areas of focus">
          <li>Network security</li>
          <li>Web development</li>
          <li>Programming</li>
          <li>Problem solving</li>
        </ul>
      </div>
    </section>
  )
}
