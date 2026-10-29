export function ProjectCard({ project, index }) {
  return (
    <article className="project-item">
      <div className="project-topline">
        <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
        <span className="project-category">{project.category}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="tool-list" aria-label="Tools and concepts">
        {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
      </ul>
    </article>
  )
}
