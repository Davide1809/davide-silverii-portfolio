import { useState } from 'react'
import { ProjectCard } from '../components/ProjectCard.jsx'
import { ProjectCategoryControls } from '../components/ProjectCategoryControls.jsx'
import { ProjectFilters } from '../components/ProjectFilters.jsx'
import { projects } from '../data/projects.js'

const categories = ['All', ...new Set(projects.map((project) => project.category))]

export function ItemListPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const normalizedSearch = searchTerm.trim().toLowerCase()
  const visibleProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory
    const searchableText = `${project.title} ${project.description} ${project.tools.join(' ')}`
    return matchesCategory && searchableText.toLowerCase().includes(normalizedSearch)
  })

  return (
    <section className="projects-section route-page" aria-labelledby="projects-title">
      <div className="content-width">
        <div className="projects-heading">
          <div>
            <p className="eyebrow">
              Project directory <span className="count-mark">{String(projects.length).padStart(2, '0')}</span>
            </p>
            <h1 id="projects-title">Projects in progress<br />and in practice.</h1>
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
  )
}
