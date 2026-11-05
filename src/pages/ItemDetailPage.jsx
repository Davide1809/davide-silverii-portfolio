import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'

export function ItemDetailPage() {
  const { id } = useParams()
  const project = projects.find((item) => item.id === id)

  if (!project) {
    return (
      <section className="route-page content-width not-found-page">
        <p className="eyebrow">Project not found</p>
        <h1>No project matches “{id}”.</h1>
        <p>The project may have been removed or the address may be incorrect.</p>
        <Link className="button button-primary" to="/items">
          Browse all projects <span aria-hidden="true">↗</span>
        </Link>
      </section>
    )
  }

  return (
    <article className="item-detail route-page content-width">
      <Link className="text-link back-link" to="/items">← Back to projects</Link>
      <p className="eyebrow">{project.category} · Project details</p>
      <h1>{project.title}</h1>
      <p className="item-detail-description">{project.description}</p>
      <h2>Tools and concepts</h2>
      <ul className="skill-list" aria-label="Tools and concepts">
        {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
      </ul>
      <p className="item-detail-id">Project ID: <code>{project.id}</code></p>
    </article>
  )
}
