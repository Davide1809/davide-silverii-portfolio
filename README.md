# Davide Silverii Portfolio

A personal portfolio built with React and Vite, featuring cybersecurity and software development projects.

## Route plan

- `/` → Home: portfolio introduction and about information.
- `/items` → Item list: searchable, filterable collection of portfolio projects.
- `/items/:id` → Item details: details for the project identified by its ID.
- `/login` → Login: signs in to the Inventory System API.
- `/dashboard` → Protected inventory view: displays products for the signed-in user.

## Requirements

- Node.js 22.12 or newer
- npm
- Git

## Run locally

This project uses Vite 8 and requires Node.js 22.12 or newer. Installing Node with nvm does not automatically switch the current Terminal session to it. After opening a new Terminal, load nvm and select the project's Node version before running npm commands:

```sh
source "$HOME/.nvm/nvm.sh"
nvm install
nvm use
node -v
```

These commands use the Node 22 version specified in `.nvmrc`. Confirm `node -v` reports Node.js 22.12 or newer before running npm commands. If you do not use nvm, install Node.js 22.12 or newer and select it in your terminal.

1. Clone this repository:

   ```sh
   git clone https://github.com/Davide1809/davide-silverii-portfolio.git
   cd davide-silverii-portfolio
   ```

2. Select a supported Node version as shown above, then install dependencies:

   ```sh
   npm install
   ```

3. Configure the API URL for the frontend:

   ```sh
   cp .env.example .env
   ```

   The example points to the local backend at `http://localhost:3000/api`. The API URL is public frontend configuration; never put passwords, database credentials, or signing secrets in a `VITE_` variable.

4. Start the development server:

   ```sh
   npm run dev
   ```

   Open the local URL printed in the terminal.

## Available scripts

- `npm run dev` starts the local development server.
- `npm run build` creates an optimized production build in `dist/`.
- `npm run preview` serves the production build locally. Run `npm run build` first.
- `npm run lint` checks the source with Oxlint.

## Full-stack authentication

The frontend integrates with the [Application Development I Inventory System API](https://github.com/Davide1809/appdev1-final-project), which uses server-side sessions.

### Verified backend authentication flow

The login endpoint is `POST /api/users/login`. It accepts a JSON body containing `username` and `password`, returns **200 OK** with the user on successful login, and rejects invalid credentials with **401 Unauthorized**. Missing credentials return **400 Bad Request**.

After login, the backend sets an `HttpOnly` session cookie. The browser sends that cookie on `GET /api/users/me` and the protected `GET /api/products` request. The product response is displayed on `/dashboard`. A normal user requesting the admin-only `GET /api/admin/dashboard/stats` receives **403 Forbidden**; an unauthenticated protected request receives **401 Unauthorized**.

### Run the backend locally

Set up MySQL and the backend environment using the backend repository's README. Configure `FRONTEND_ORIGINS=http://localhost:5173` in the backend environment so credentialed browser requests from Vite are allowed. Keep `SESSION_SECRET` and database credentials in the backend's ignored `.env` file only. Start the backend on port `3000`, then run this frontend with `npm run dev`.

For a deployed frontend, set `VITE_API_BASE_URL` to the backend's public `/api` URL at build time and set the backend's `FRONTEND_ORIGINS` to the exact frontend origin. The session cookie must use HTTPS in production; cross-site deployments also require `SESSION_COOKIE_SAME_SITE=none`. Add CSRF protection before enabling cross-site session cookies for state-changing endpoints. Browsers may block third-party cookies, so serving the frontend and API on the same site is preferable.

### Security and verification notes

- The session ID is an `HttpOnly` cookie, not a token stored in frontend JavaScript or local storage. The backend remains responsible for authorization; hiding a frontend route is not a security boundary.
- Never commit passwords, database credentials, session/signing secrets, or real user credentials. `VITE_` variables are included in browser code and are not secrets.
- Use the browser Developer Tools **Network** panel to inspect the login, session check, protected products request, and the 401/403 responses. Do not share screenshots containing passwords or session-cookie values.
- To check forbidden behavior, sign in with a non-admin account and select **Check admin access** on the dashboard.

## Project structure

```text
src/
  assets/       Profile image
  auth/         Session state and API request helper
  components/   Reusable page and project components
  data/         Exported portfolio project data
  App.jsx       Router configuration and shared page layout
  pages/        Home, projects, login, and protected dashboard views
  Portfolio.css Portfolio styles
  index.css     Global styles
```

Dependencies are installed locally and `node_modules/` is excluded from Git by `.gitignore`.

## Route checks

See [ROUTE_TESTS.md](./ROUTE_TESTS.md) for the navigation checks performed for this assignment.
