# Level 03 — Objects, Prototypes, and `this`

Sub-levels

1. Object creation patterns
2. Prototype chain & shadowing
3. `this` binding and call-site

Acceptance criteria

- Implement utilities in `tasks/`; cover `Object.create`, class, and factory
- Explain prototype lookup with a diagram

Tasks

- `deepFreeze(obj)`: recursively freeze; handle cycles
- `bind(fn, thisArg, ...args)`: correct `new` behavior like native `bind`
- `create(proto, props)`: mimic `Object.create` with property descriptors
