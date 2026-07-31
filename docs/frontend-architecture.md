# Canvas Frontend Architecture

## Product Boundary

`canvas_front_next` is the consumer-facing frontend for the trusted backend platform
`infinite_canvas`. Its API prefix is `/api/infinite-canvas/v1`; it never selects a platform at
runtime and never falls back to Admin APIs.

The approved product routes are closed to:

```text
/login
/projects
/canvas/:projectId
/assets
/prompts
```

The root route will redirect from authenticated session state after the Auth contract lands.
There is no registration route: verified email login creates eligible users on the server.

## Dependency Ownership

- React and TanStack Router own rendering and type-safe route composition.
- TanStack Query owns remote server state and request invalidation.
- Zustand owns short-lived editor and interaction state only.
- IndexedDB through `idb` owns recovery drafts, never cross-device truth.
- Ant Design supplies accessible product controls; Lucide supplies command icons.
- The COS browser SDK is confined to the future upload-intent adapter.
- OpenAPI types and the HTTP client will be generated from the backend Contract Bundle.

No business response DTO is handwritten before
`admin_back_go/contracts/infinite-canvas/v1` exists. The current bootstrap is the permanent
session-restoration surface and does not simulate authentication or project data.

## Source Boundaries

```text
src/app                 composition root, providers, routing
src/features/auth       login and in-memory session lifecycle
src/features/projects   cloud project queries and mutations
src/features/canvas     editor model, interaction, autosave orchestration
src/features/assets     upload intents, COS transfer, signed URL resolution
src/features/prompts    read-only prompt browsing and insertion
src/modules/http        generated contract client and transport middleware
src/shared              product-neutral theme, layout, and controls
```

Dependencies point inward through public feature entry points. Shared code cannot import a
feature. Features cannot import another feature's store or repository directly; orchestration
belongs in `app` or a narrow workflow module.

## State And Security

- Access tokens live in an in-memory vault. Refresh tokens remain HttpOnly Canvas cookies.
- Auth startup has explicit booting, anonymous, and authenticated states.
- A single in-flight refresh coordinates concurrent 401 responses and retries each request once.
- Project documents and revisions are server truth. Draft keys include platform, user, and project.
- Documents store asset IDs only; COS object keys, signed URLs, and blob URLs are transient.
- Client requests never contain provider, channel, API key, base URL, or target platform fields.

## First Delivery Gate

This foundation intentionally stops before API integration. Auth, RBAC, project, COS, and prompt
operations begin only after the Infinite Canvas Contract Bundle is generated from the merged
backend baseline. Until then, the app renders the same stable initialization surface that session
restore will use in production.
