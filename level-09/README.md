# Level 09 — Modules, Bundlers, Tree-shaking (TypeScript-first)

Sub-levels

1. ESM vs CJS interop
2. Dead-code elimination and side effects
3. Dynamic import and code splitting

Acceptance criteria

- Build tiny lib with Rollup/ESBuild and verify tree-shaking
- Source code in TypeScript; emit ESM/CJS as needed
- Document `sideEffects` field and pitfalls

Tasks

- `build-lib/`: minimal TS package with `exports` map variations
- `sideEffectProbe`: demonstrate tree-shaking and side-effects
- `importGraph(url)`: crawl import graph with dynamic imports
