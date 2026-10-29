import { useState } from 'react'
import profilePhoto from './assets/profile.jpg'
import { projects } from './data/projects.js'
import { AboutSection } from './components/AboutSection.jsx'
import { ContactSection } from './components/ContactSection.jsx'
import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { IntroSection } from './components/IntroSection.jsx'
import { ProjectCard } from './components/ProjectCard.jsx'
import { ProjectCategoryControls } from './components/ProjectCategoryControls.jsx'
import { ProjectFilters } from './components/ProjectFilters.jsx'
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
      <Header />
      <main id="top">
        <IntroSection profilePhoto={profilePhoto} />
        <AboutSection />
        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="content-width">
            <div className="projects-heading">
              <div>
                <p className="eyebrow">
                  Selected work <span className="count-mark">{String(projects.length).padStart(2, '0')}</span>
                </p>
                <h2 id="projects-title">Projects in progress<br />and in practice.</h2>
              </div>
              <ProjectFilters searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </div>
            <ProjectCategoryControls
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              resultCount={visibleProjects.length}
            />
            <div className="project-grid">
              {visibleProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
              {visibleProjects.length === 0 && (
                <p className="empty-state">No projects match that search. Try another keyword or category.</p>
              )}
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
