export function ProjectFilters({ searchTerm, onSearchChange }) {
  return (
    <label className="search-field">
      <span className="search-icon" aria-hidden="true">⌕</span>
      <span className="visually-hidden">Search projects</span>
      <input
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search projects"
      />
      <kbd>/</kbd>
    </label>
  )
}
