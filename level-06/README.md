# Level 06 — Event Loop, Tasks/Microtasks, Timers

Sub-levels

1. Macro vs micro tasks ordering
2. Starvation and fairness
3. Timer clamping and drift

Acceptance criteria

- Write observable traces showing ordering guarantees
- Explain `queueMicrotask`, `Promise`, `setTimeout`, `MessageChannel`

Tasks

- `traceLoop(scenario)`: run a scenario and record execution order
- `defer(fn)`: schedule as microtask safely; fallback if unavailable
- `rafScheduler()`: queue animation frames with backpressure
