# Level 13 — Performance: Big-O, Profiling, Memory

Sub-levels

1. Complexity analysis and tradeoffs
2. CPU profiling and flamegraphs (Node/Chrome)
3. Memory leaks, GC, and retention paths

Acceptance criteria

- Benchmark alternative implementations and justify choices
- Demonstrate finding and fixing a leak

Tasks

- `LRUCache(capacity)`: O(1) get/put with linked map
- `bench`: simple benchmark harness and perf baselines
- `leak-fix`: create a leak, capture heap snapshot, then fix it
