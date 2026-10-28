# Redux Demo

An early React learning app covering Redux state, memoized selectors, component lifecycle, and refs. It also sends tagged keyboard interactions to a companion GraphQL breadcrumb API.

## Examples

- `/demo` — click and hover counters wired through Redux
- `/lifecycle` — synchronize a document title from component state
- `/refs` — focus an input through a DOM ref
- `src/store/` — actions, reducer, selectors, and a saga scaffold
- `hooksSolution.js` files — hook-based alternatives to the class examples

The breadcrumb integration expects [graphql-server](https://github.com/justinrex/graphql-server) at `http://localhost:4000`.

## Project status

This repository preserves a React 16 / Create React App 2 learning exercise. Its original `npm start`, `npm test`, and `npm run build` scripts remain, but compatibility with current Node.js releases has not been verified. The existing render test also needs the app's router and store providers before it can serve as a useful check.

For current interactive React examples with passing automated checks, see [React Demos](https://github.com/justinrex/react-demos).
