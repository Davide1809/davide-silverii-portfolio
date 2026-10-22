# Davide Silverii Portfolio

A personal portfolio built with React and Vite, featuring cybersecurity and software development projects.

## Requirements

- Node.js 22.12 or newer
- npm
- Git

## Run locally

This project uses Vite 8 and requires Node.js 22.12 or newer. If you use nvm, run `nvm install` the first time, then `nvm use` from the project folder to select the version in `.nvmrc`.

1. Clone this repository:

   ```sh
   git clone https://github.com/Davide1809/davide-silverii-portfolio.git
   cd davide-silverii-portfolio
   ```

2. Install dependencies:

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
  data/         Exported portfolio project data
  App.jsx       Page layout and project filtering
  Portfolio.css Portfolio styles
  index.css     Global styles
```

Dependencies are installed locally and `node_modules/` is excluded from Git by `.gitignore`.
