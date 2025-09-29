# Level 15 — Security & Reliability

Sub-levels

1. Input validation, sanitization, and escaping
2. Reliability: retries, backoff, idempotency
3. Secrets and configuration hygiene

Acceptance criteria

- Demonstrate safe handling of untrusted inputs
- Add robust retry/backoff with jitter and idempotent operations

Tasks

- `validate`: tiny schema validator (string/number/enum/object) + tests
- `retry(fn, {retries, jitter, onRetry})`: exponential backoff w/ jitter
- `safeTemplate(str, values)`: escape HTML/attr contexts correctly
