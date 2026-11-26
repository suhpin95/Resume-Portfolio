# Suhas Pindiproli — Portfolio

Personal portfolio for **Suhas Pindiproli**, a senior software engineer focused on
distributed systems and AI platforms.

Live site: <https://suhas-pindiproli.netlify.app/>

## Stack

- **Bun** for package management and scripts
- **Vite 8** for the build
- **React 19**
- **React Router 8**
- **SCSS + CSS Modules**
- **Netlify** for hosting and serverless functions
- **Biome** for linting and formatting
- **Vitest** for tests

## Requirements

- [Bun](https://bun.sh/) 1.4+
- Node.js 22.12+ (used by Vite and Netlify Functions)

The repository pins the expected versions in `.bun-version`, `.nvmrc`, and
`.node-version`.

## Getting started

```bash
git clone https://github.com/suhpin95/Resume-Portfolio.git
cd Resume-Portfolio
bun install
bun run dev
```

Open <http://localhost:5173>.

### Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the Vite dev server |
| `bun run build` | Build the production site into `dist/` |
| `bun run preview` | Preview the production build |
| `bun run lint` | Run Biome checks |
| `bun run format` | Format with Biome |
| `bun run test` | Run the Vitest suite |
| `bun run check` | Lint, test, and build |

## Netlify deployment

Netlify is configured in `netlify.toml`:

- Build command: `bun install --frozen-lockfile && bun run build`
- Publish directory: `dist`
- Node 22 and Bun 1.4.5 are pinned for the build environment
- All routes fall back to `index.html` for client-side routing

Push to `main` to deploy. Pull requests and branches get Netlify deploy previews.

## Project structure

```text
public/            static assets, resume PDF, favicons
src/
  components/      reusable UI
  data/            profile, projects, experience, skills
  hooks/           theme, GitHub data, reveal, media queries
  layouts/         shared page shells
  routes/          route configuration
  scenes/          route-level pages
  styles/          global SCSS, tokens, animations
netlify/functions/ Netlify Functions
```

## Migration notes

This site was migrated from Create React App and npm to Vite, React 19, React
Router 8, and Bun. The old CRA service worker, `node-sass`, `react-pdf`,
`react-tsparticles`, and the npm lockfile were removed.
