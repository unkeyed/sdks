# V2AppsCreateAppRequestBodyUnion

Create an app with exactly one source: `git` or `oci`. Requests that omit a
source or provide both sources are rejected.



## Supported Types

### `components.V2AppsCreateAppRequestBody1`

```typescript
const value: components.V2AppsCreateAppRequestBody1 = {
  project: "proj_1234abcd",
  name: "Payments API",
  slug: "proj_1234abcd",
  git: {
    repository: "unkeyed/unkey",
    defaultBranch: "main",
  },
  oci: {
    image: "ghcr.io/acme/api:v1.2.3",
  },
};
```

### `components.V2AppsCreateAppRequestBody2`

```typescript
const value: components.V2AppsCreateAppRequestBody2 = {
  project: "proj_1234abcd",
  name: "Payments API",
  slug: "proj_1234abcd",
  git: {
    repository: "unkeyed/unkey",
    defaultBranch: "main",
  },
  oci: {
    image: "ghcr.io/acme/api:v1.2.3",
  },
};
```

