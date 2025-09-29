# TypeScript Progression Roadmap

Goal: Become production-ready with TypeScript without slowing down JS fundamentals. We introduce TS concepts gradually and flip to TS-first at Level 09.

Principles
- Learn types to serve correctness and clarity, not ceremony.
- Prefer inference; annotate public APIs and tricky parts.
- Keep build friction low: use `tsc --noEmit` for checks, JSDoc in JS where helpful.

Progression by level
- Level 01–08: Pure JS. Use JSDoc sparingly to express intent (e.g., function contracts). No TS files.
- Level 09–12: Switch to TS-first for new code. Advanced typing patterns: generics, partial inference, discriminated unions, asserts, branded types.
- Level 13–16: Public API typing discipline, third-party types, ambient types, DOM types, strict configuration hygiene.
- Level 17–20: React types, utility types, hooks patterns, context selectors, and library-quality d.ts emission.

Practices
- Add types only where they reduce bugs or improve comprehension.
- Use `satisfies` and `as const` to keep inference precise.
- Prefer functional, total functions with clear input/output types.

Milestones
- Write an `assert` util that narrows types from JS.
- Publish a small JS lib with `.d.ts` and `exports` map.
- Convert a module to TS and eliminate `any`.
- Use discriminated unions for state machines with exhaustive checking.
