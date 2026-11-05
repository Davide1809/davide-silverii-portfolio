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
      {project.links?.length > 0 && (
        <section className="item-detail-links" aria-labelledby="project-links-title">
          <h2 id="project-links-title">Project links</h2>
          <ul>
            {project.links.map(({ label, href, download = false }) => (
              <li key={href}>
                <a
                  className="project-resource-link"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  {...(download ? { download: true } : {})}
                >
                  {label} <span aria-hidden="true">{download ? '↓' : '↗'}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}
