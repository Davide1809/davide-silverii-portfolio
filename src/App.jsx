import { useState } from 'react'
import profilePhoto from './assets/profile.jpg'
import { projects } from './data/projects.js'
import './Portfolio.css'

const categories = ['All', ...new Set(projects.map((project) => project.category))]

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const normalizedSearch = searchTerm.trim().toLowerCase()
  const visibleProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory
    const searchableText = `${project.title} ${project.description} ${project.tools.join(' ')}`
    const matchesSearch = searchableText.toLowerCase().includes(normalizedSearch)

    return matchesCategory && matchesSearch
  })

  return (
    <div className="site-shell">
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

      <main id="top">
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

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="content-width">
            <div className="projects-heading">
              <div>
                <p className="eyebrow">Selected work <span className="count-mark">04</span></p>
                <h2 id="projects-title">Projects in progress<br />and in practice.</h2>
              </div>
              <label className="search-field">
                <span className="search-icon" aria-hidden="true">⌕</span>
                <span className="visually-hidden">Search projects</span>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search projects"
                />
                <kbd>/</kbd>
              </label>
            </div>

            <div className="project-controls" aria-label="Filter projects by category">
              {categories.map((category) => (
                <button
                  className={`filter-button${activeCategory === category ? ' is-active' : ''}`}
                  type="button"
                  key={category}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
              <p className="result-count" role="status" aria-live="polite">
                {visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'}
              </p>
            </div>

            <div className="project-grid">
              {visibleProjects.map((project, index) => (
                <article className="project-item" key={project.id}>
                  <div className="project-topline">
                    <span className="project-number">0{index + 1}</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="tool-list" aria-label="Tools and concepts">
                    {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
                  </ul>
                </article>
              ))}
              {visibleProjects.length === 0 && (
                <p className="empty-state">No projects match that search. Try another keyword or category.</p>
              )}
            </div>
          </div>
        </section>

        <section className="contact-section content-width" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Have a project in mind?</p>
          <div className="contact-row">
            <h2 id="contact-title">Let’s make<br />something useful.</h2>
            <a className="contact-link" href="mailto:dsilverii01@rio.edu">
              dsilverii01@rio.edu <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Davide Silverii</span>
        <span>Built with React + Vite</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
