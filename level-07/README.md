# Level 07 — Errors, Debugging, Exception Safety

Sub-levels

1. Error taxonomies and wrapping
2. Stack traces, source maps
3. Exception-safe code and resource cleanup

Acceptance criteria

- Implement resilient utilities with thorough tests
- Explain boundaries for catching vs propagating

Tasks

- `Result<T, E>`: a small functional result type for JS
- `withResource(open, use, close)`: ensure cleanup on success/failure
- `captureStack(fn)`: normalize stack traces across runtimes
