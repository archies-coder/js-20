# Level 11 — HTTP, REST, GraphQL Basics

Sub-levels

1. HTTP primitives: methods, status, headers, caching
2. REST semantics: resources, pagination, idempotency
3. GraphQL basics: schema, resolvers, N+1 avoidance

Acceptance criteria

- Implement minimal HTTP server and REST endpoints without frameworks
- Add a small GraphQL schema and fix an N+1 with batching

Tasks

- `mini-http`: Node `http` server with ETag/Last-Modified and proper codes
- `rest-users`: list/detail/create/update/delete with pagination + rate limit
- `gql-api`: simple schema + DataLoader-style batching to avoid N+1
