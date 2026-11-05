# Route Tests

Manual checks performed in the local Vite development server:

- Opened `/` directly: the home view loaded with the introduction and about sections.
- Clicked **Projects** in the header: navigation changed to `/items` without a full page reload and displayed all four projects.
- Clicked a project's **View project details** link: `/items/network-analysis` displayed the matching title, description, category, and tools.
- Used browser Back from the detail view: returned to `/items`.
- Refreshed `/items`: the item list loaded directly after refresh.
- Opened `/items/password-health-tracker` directly and refreshed: the matching detail view loaded both times.
- Opened `/items/not-a-real-project` directly and refreshed: a visible project-not-found message and link back to the project list appeared.

All checks passed; no uncaught browser errors were observed during these checks.
