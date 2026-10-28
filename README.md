# Redux Demo

Interactive examples of shared Redux state, memoized selectors, component lifecycle, and DOM refs. Built with React 19, Redux 5, React Router, and Vite.

## Run locally

Use Node.js 24 LTS (24.15 or newer) and npm.

```sh
nvm use
npm ci
npm start
```

Open [localhost:3000](http://localhost:3000). The lessons work without a backend.

## Examples

- `/demo` — dispatch count/hover actions and derive a multiple with Reselect
- `/lifecycle` — update the document title and restore it when leaving the page
- `/refs` — focus a labeled input through a DOM ref
- `hooksSolution.jsx` files — working hook-based alternatives to the class examples

Navigation follows the current URL, including direct links and browser history. Labels and focus indicators support keyboard use.

## Optional breadcrumb API

Copy `.env.example` to `.env.local` and set:

```text
VITE_BREADCRUMB_ENDPOINT=http://localhost:4000
```

Run the companion [GraphQL server](https://github.com/justinrex/graphql-server) to save tagged keyboard interactions. Only the component tag and event type are sent; key values and input text are excluded. Tracking is disabled by default, times out after five seconds, and drops failures without blocking the examples. Restart Vite after changing environment settings.

## Checks

```sh
npm run check      # lint, interaction tests, and production build
npm test           # Vitest + Testing Library
npm run preview    # serve the production build after npm run build
```

Tests cover connected state updates, derived values, route/history navigation, document-title restoration, both ref implementations, and optional tracking failures. They use mocked HTTP responses; live breadcrumb persistence is a separate integration check.

`src/store/` keeps explicit Redux actions and reducers so the data flow stays visible. Empty saga and middleware scaffolds from the original exercise have been removed.
