# Level 05 — Async: Callbacks, Promises, Async/Await

Sub-levels

1. Callback conventions and error-first style
2. Promise internals and chaining
3. Async/Await patterns and pitfalls

Acceptance criteria

- Implement utilities in `tasks/`; include race conditions and cancellation
- Explain promise resolution procedure at whiteboard level

Tasks

- `promisify(fn)`: error-first callback to promise
- `pLimit(concurrency)`: limit concurrent promise creators
- `withTimeout(promise, ms)`: reject if not settled in time; abort signal aware
