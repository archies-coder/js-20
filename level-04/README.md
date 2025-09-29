# Level 04 — Arrays, Iterators, Generators

Sub-levels

1. Array methods and pitfalls
2. Custom iterables and iterators
3. Generators and async generators

Acceptance criteria

- Implement utilities in `tasks/`; include performance-focused tests
- Explain iterator protocol and generator state transitions

Tasks

- `mapAsync(iterable, fn, {concurrency})`: handle sync/async items & function
- `chunk(iterable, size)`: lazy chunking via iterator
- `mergeSorted(iterA, iterB)`: generator merging two sorted sources
