# Level 10 — Node.js Runtime, FS, Streams

Sub-levels

1. Process model and event loop differences
2. Filesystem, buffers, and streams
3. Backpressure and highWaterMark

Acceptance criteria

- Implement stream utilities with correctness and performance tests
- Explain flow control and memory risks

Tasks

- `pipelinePromise(...streams)`: promisified pipeline
- `rateLimitStream(n, perMs)`: transform stream with rate limiting
- `walk(dir, {followSymlinks})`: async generator for directory walking
