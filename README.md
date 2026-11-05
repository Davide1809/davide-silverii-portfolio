# Davide Silverii Portfolio

A personal portfolio built with React and Vite, featuring cybersecurity and software development projects.

## Route plan

- `/` → Home: portfolio introduction and about information.
- `/items` → Item list: searchable, filterable collection of portfolio projects.
- `/items/:id` → Item details: details for the project identified by its ID.

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

3. Start the development server:

   ```sh
   npm run dev
   ```

   Open the local URL printed in the terminal.

## Available scripts

- `npm run dev` starts the local development server.
- `npm run build` creates an optimized production build in `dist/`.
- `npm run preview` serves the production build locally. Run `npm run build` first.
- `npm run lint` checks the source with Oxlint.

## Project structure

```text
src/
  assets/       Profile image
  components/   Reusable page and project components
  data/         Exported portfolio project data
  App.jsx       Router configuration and shared page layout
  pages/        Home, item list, and item detail views
  Portfolio.css Portfolio styles
  index.css     Global styles
```

Dependencies are installed locally and `node_modules/` is excluded from Git by `.gitignore`.

## Route checks

See [ROUTE_TESTS.md](./ROUTE_TESTS.md) for the navigation checks performed for this assignment.
