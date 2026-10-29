export function ProjectCategoryControls({
  categories,
  activeCategory,
  onCategoryChange,
  resultCount,
}) {
  return (
    <div className="project-controls" aria-label="Filter projects by category">
      {categories.map((category) => (
        <button
          className={`filter-button${activeCategory === category ? ' is-active' : ''}`}
          type="button"
          key={category}
          aria-pressed={activeCategory === category}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
      <p className="result-count" role="status" aria-live="polite">
        {resultCount} {resultCount === 1 ? 'project' : 'projects'}
      </p>
    </div>
  )
}
