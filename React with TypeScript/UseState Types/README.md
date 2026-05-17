# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

````js
export default defineConfig([
  # UseState Types

  A minimal Vite + React + TypeScript example demonstrating typed `useState` usage and typed component props.

  Prerequisites
  - Node.js 16+ (LTS recommended)

  Setup
  1. Install dependencies:

  ```bash
  npm install
````

2. Start the dev server:

```bash
npm run dev
```

Build

```bash
npm run build
```

What this example shows

- Typed `useState` in functional components
- Typing component props and simple state patterns

# UseState Types

This folder is a compact Vite + React + TypeScript example that demonstrates properly typed `useState` usage and typed component props.

Summary

- Simple counter using `useState<number>` in `src/App.tsx`.
- A `UserProfile` component that uses an interface (`ProfileInfo`) and `useState<ProfileInfo>` to manage form state.

Prerequisites

- Node.js 16+ and npm (or a compatible package manager)

Quick start

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Linting

```bash
npm run lint
```

Available scripts (from `package.json`)

- `dev` — starts Vite dev server
- `build` — runs `tsc -b` then `vite build`
- `preview` — serves the production build
- `lint` — runs ESLint against the project

Key files

- `src/main.tsx`: React entry point mounting the app.
- `src/App.tsx`: Counter example using `useState<number>`.
- `src/components/UserProfile.tsx`: Demonstrates typed state using `interface ProfileInfo` and updating nested fields.
- `vite.config.ts`, `tsconfig.*.json`, `eslint.config.js`: project config files.

Tips

- The counter state in `src/App.tsx` is declared as `useState<number>(0)` to enforce numeric updates.
- `UserProfile` converts numeric input values to `number` before updating the typed state.
- If you add more complex state shapes, prefer separate setters or `useReducer` for clarity.

Dependencies

- React 19 + Vite + TypeScript (see `package.json` for exact versions).

License

- This example is provided for learning and demonstration; adapt freely for your projects.
