# Level 02 — Functions, Scope, Closures

Sub-levels

1. Lexical scope vs dynamic-like patterns
2. Closures & memory leaks
3. Partial application & currying

Acceptance criteria

- Implement utilities in `tasks/`; memory leak test included
- Explain closure capture vs loop variables

Tasks

- `once(fn)`: call only once, drop references for GC
- `memoize(fn, keyFn?)`: cache with bounded size and eviction
- `curry(fn)`: fixed-arity curry; errors on over-application
