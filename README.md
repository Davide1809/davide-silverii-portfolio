# Davide Silverii Portfolio

A personal portfolio built with React and Vite, featuring cybersecurity and software development projects.

## Requirements

- Node.js 22.12 or newer
- npm
- Git

## Run locally

This project uses Vite 8 and requires Node.js 22.12 or newer. Installing Node with nvm does not automatically switch the current Terminal session to it. After opening a new Terminal, load nvm and select the project's Node version before running npm commands:

```sh
source "$HOME/.nvm/nvm.sh"
nvm install 22
nvm use 22
node -v
```

Confirm the version is `v22.12.0` or newer. If `node -v` still shows Node 18, do not continue: load nvm and run `nvm use 22` again.

1. Clone this repository:

   ```sh
   git clone https://github.com/Davide1809/davide-silverii-portfolio.git
   cd davide-silverii-portfolio
   ```

2. Select Node 22 as shown above, then install dependencies:

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
  App.jsx       Page composition and project filtering state
  Portfolio.css Portfolio styles
  index.css     Global styles
```

Dependencies are installed locally and `node_modules/` is excluded from Git by `.gitignore`.
