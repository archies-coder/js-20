# Level 08 — Types: JS Typing Patterns (Pure JS)

Sub-levels

1. Structural typing concepts applied via JSDoc
2. Inferring and narrowing patterns in JS
3. Publish .d.ts for JS libs (no TS source yet)

Acceptance criteria

- Add JSDoc types and/or d.ts shims for utilities; pass `tsc --noEmit`
- Explain variance, conditional types basics (high-level)

Tasks

- Add types for prior utilities via JSDoc or d.ts files
- `assert<T extends boolean>(cond, msg?)`: JS with d.ts for narrowing
- `makeTaggedUnion(cases)`: helper that infers tag unions in TS consumers
