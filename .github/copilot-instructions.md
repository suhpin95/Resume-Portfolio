# Copilot Instructions

## Project Overview

- This is currently a React 18 single-page portfolio built with Create React App and npm. The migration goal is React 19.2 and Bun.
- JavaScript and JSX are used throughout; this repository does not use TypeScript.
- Styling uses SCSS modules and global SCSS under `src/styles`.
- Routing uses React Router 6; routes are centrally registered in `src/routes/BaseRoutes.jsx`.
- The app includes a theme context, responsive layouts, lazy-loaded scenes, and PWA/service-worker support.

## Source Organization

- `src/scenes` contains route-level views.
- `src/components` contains reusable components.
- `src/layouts` contains page layout wrappers.
- `src/hooks` contains custom hooks and theme state.
- `src/data` contains static portfolio data.
- `src/routes` contains route configuration.
- `src/styles` contains global styles and shared SCSS.
- Keep components small and place styles in the matching `.module.scss` file.
- Preserve the existing folder-by-feature/component structure instead of adding a separate generic component system.

## React Conventions

- Use functional components and React hooks.
- Import `React` dependencies explicitly only when needed; this project uses the modern JSX runtime.
- Use named exports for shared constants or data and default exports for components.
- Use lazy imports for route-level scenes.
- Do not introduce state management libraries for local UI state; use context or hooks where the existing architecture supports it.
- Preserve modal, navigation, theme, and route behavior when editing shared components.

## Styling Conventions

- Use CSS Modules for component-specific styles.
- Keep global-only resets and shared variables in `src/styles/main.scss` or `src/styles/theme.scss`.
- Reuse existing theme variables and classes before introducing new values.
- Preserve responsive behavior and avoid fixed viewport dimensions when flexible layout is appropriate.
- Use semantic class names and keep selectors scoped.

## Data and Assets

- Keep portfolio content in `src/data` or existing component data sources when appropriate.
- Prefer existing public assets and Cloudinary-hosted images for portfolio media.
- Add static assets to `public` only when they are not better served through an existing data or asset pattern.
- Do not commit secrets or credentials.

## Quality and Validation

- Until the Bun migration is complete, use the existing npm scripts: `npm start`, `npm test -- --watchAll=false`, and `npm run build`.
- As part of the migration, verify compatibility of the build, test, and third-party React tooling with React 19.2 and Bun.
- After the repository switches to Bun, use `bun install` and `bun run <script>`; keep only the intended lockfile and avoid mixing package managers.
- When changes do not affect build output or behavior, focused lint/build validation is preferable to unnecessary full work.
- Fix the root cause rather than masking errors with broad or empty exception handling.

## Accessibility and UX

- Use semantic HTML and meaningful labels.
- Preserve keyboard access for menus, modals, buttons, and links.
- Keep visible focus states and sufficient color contrast.
- Do not remove text alternatives or ARIA relationships for decorative or interactive elements.

## Change Discipline

- Make the smallest complete change for the requested behavior.
- Reuse existing components, hooks, route constants, and SCSS patterns.
- Update directly related tests and documentation when behavior changes.
- Do not edit `build` or generated output unless the task explicitly requires it.
