export function AboutSection() {
  return (
    <section className="about-section content-width" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow">A little about me</p>
        <h2 id="about-title">Good security starts<br />with good questions.</h2>
      </div>
      <div className="about-details">
        <p>
          I’m an aspiring cybersecurity analyst and developer studying cybersecurity at the
          University of Rio Grande. I enjoy turning what I learn about software, networks,
          and systems into practical projects.
        </p>
        <div className="about-skill-groups">
          <div className="about-skill-group">
            <h3>Programming</h3>
            <ul className="skill-list" aria-label="Programming languages">
              <li>C</li>
              <li>C++</li>
              <li>Python</li>
              <li>Java</li>
              <li>Visual Basic</li>
              <li>HTML5 / CSS3</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="about-skill-group">
            <h3>Systems &amp; development</h3>
            <ul className="skill-list" aria-label="Systems and development skills">
              <li>Data structures &amp; algorithms</li>
              <li>Dijkstra &amp; Kruskal</li>
              <li>KMP &amp; backtracking</li>
              <li>Memory management</li>
              <li>Docker &amp; Compose</li>
              <li>REST APIs</li>
              <li>Database design</li>
              <li>Git &amp; GitHub</li>
              <li>Linux &amp; Windows</li>
              <li>Postman</li>
              <li>Microsoft Office</li>
            </ul>
          </div>
          <div className="about-skill-group">
            <h3>Security</h3>
            <ul className="skill-list" aria-label="Cybersecurity skills">
              <li>Network analysis</li>
              <li>Vulnerability assessment</li>
              <li>Authentication &amp; sessions</li>
              <li>Input sanitization</li>
              <li>Cryptography fundamentals</li>
              <li>Ethical hacking &amp; forensics fundamentals</li>
            </ul>
          </div>
        </div>
        <div className="about-current-focus">
          <h3>What I’m working toward</h3>
          <p>
            Deepening my skills in network defense, threat hunting, and threat intelligence;
            exploring Visual Basic and legacy integrations; and building resilient software
            with security in mind. I also hope to contribute to open-source security tools
            and developer resources.
          </p>
        </div>
        <p className="about-note">
          Away from the keyboard, I compete on the University of Rio Grande Men’s Soccer team.
        </p>
      </div>
    </section>
  )
}
