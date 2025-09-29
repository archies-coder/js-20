# Level 01 — Language Primitives & Coercions

Sub-levels

1. Numbers, Strings, Booleans — edge cases
2. Equality and Coercion
3. Truthy/Falsy mastery

Acceptance criteria

- Implement small utilities in `tasks/` and pass tests in `tests/`
- Explain coercion rules and pitfalls from memory

Tasks

- `toNumber(value)`: strict, rejects weird inputs; no `Number()` shortcuts
- `safeAdd(a, b)`: handles bigint vs number and overflow boundaries
- `stringify(value)`: deterministic stable stringify for primitives and arrays of primitives

Getting started

- Create `tasks/` and `tests/`
- Write tests first (`vitest`/`jest` OK). Include edge cases.
- Add `NOTES.md` with gotchas you discover.
