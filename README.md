# Suhas Pindiproli - Portfolio

Personal portfolio for **Suhas Pindiproli**, a senior software engineer focused on distributed systems and AI platforms.

Live site: <https://suhas-pindiproli.netlify.app/>

## Stack

- Bun 1.4+ and Node.js 22.12+
- Vite 8, React 19, and React Router 8
- SCSS Modules and Biome
- Netlify hosting and Functions
- Vitest

## Getting started

```bash
git clone https://github.com/suhpin95/Resume-Portfolio.git
cd Resume-Portfolio
bun install
bun run dev
```

Open <http://localhost:5173>.

| Command | Description |
| --- | --- |
| `bun run dev` | Start the Vite development server |
| `bun run build` | Create the production site in `dist/` |
| `bun run preview` | Preview the production build |
| `bun run lint` | Run Biome checks |
| `bun run format` | Format with Biome |
| `bun run test` | Run Vitest |
| `bun run check` | Run lint, tests, and the production build |


## Deployment

Netlify reads `netlify.toml` for the Bun install/build command, `dist` publish directory, function location, API rewrite, SPA fallback, and security headers. Pushes to the production branch deploy the site; pull requests receive deploy previews.

To reproduce the production build locally:

```bash
bun install --frozen-lockfile
bun run check
```

To test the Netlify function and production configuration locally, install the [Netlify CLI](https://docs.netlify.com/cli/get-started/) and run:

```bash
netlify dev
netlify build
```

The GitHub function calls the public GitHub API without credentials. Set `GITHUB_TOKEN` in the Netlify environment only if you need authenticated API rate limits; do not commit the token. If live repository data cannot be retrieved, the UI explicitly reports that it is showing the saved snapshot.


## Migration notes

The app migrated from Create React App and npm to Vite, React 19, React Router 8, and Bun. The npm lockfile and CRA service-worker setup were removed; `bun.lock` is the package lockfile. JavaScript and JSX remain in use, with `jsconfig.json` and JSDoc typedefs for editor support. Sass is built by Vite, and the resume remains a static public asset.
