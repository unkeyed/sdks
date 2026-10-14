# Ratelimit

## Overview

Rate limiting operations

### Available Operations

* [createNamespace](#createnamespace) - Create ratelimit namespace
* [deleteNamespace](#deletenamespace) - Delete ratelimit namespace
* [deleteOverride](#deleteoverride) - Delete ratelimit override
* [getOverride](#getoverride) - Get ratelimit override
* [limit](#limit) - Apply rate limiting
* [listNamespaces](#listnamespaces) - List ratelimit namespaces
* [listOverrides](#listoverrides) - List ratelimit overrides
* [multiLimit](#multilimit) - Apply multiple rate limit checks
* [setOverride](#setoverride) - Set ratelimit override
* [updateNamespace](#updatenamespace) - Update ratelimit namespace

## createNamespace

Create a rate limit namespace before you rate limit against it.

`ratelimit.limit` also creates a namespace the first time you use its name, when your root key can create namespaces. Use this endpoint when you want the namespace to exist up front, for example to set overrides before the first request.

**Important**: Names are unique within your workspace, deleted namespaces included. A name that is in use or was deleted returns 409.

**Required Permissions**

Your root key must have the following permission:
- `unkey:v1:<workspace_id>:projects/*/ratelimits/namespaces/*#write`


### Example Usage: basic

<!-- UsageSnippet language="typescript" operationID="ratelimit.createNamespace" method="post" path="/v2/ratelimit.createNamespace" example="basic" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.createNamespace({
    name: "email.outbound",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitCreateNamespace } from "@unkey/api/funcs/ratelimitCreateNamespace.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitCreateNamespace(unkey, {
    name: "email.outbound",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitCreateNamespace failed:", res.error);
  }
}

run();
```
### Example Usage: emptyName

<!-- UsageSnippet language="typescript" operationID="ratelimit.createNamespace" method="post" path="/v2/ratelimit.createNamespace" example="emptyName" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.createNamespace({
    name: "email.outbound",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitCreateNamespace } from "@unkey/api/funcs/ratelimitCreateNamespace.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitCreateNamespace(unkey, {
    name: "email.outbound",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitCreateNamespace failed:", res.error);
  }
}

run();
```
### Example Usage: missingPermission

<!-- UsageSnippet language="typescript" operationID="ratelimit.createNamespace" method="post" path="/v2/ratelimit.createNamespace" example="missingPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.createNamespace({
    name: "email.outbound",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitCreateNamespace } from "@unkey/api/funcs/ratelimitCreateNamespace.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitCreateNamespace(unkey, {
    name: "email.outbound",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitCreateNamespace failed:", res.error);
  }
}

run();
```
### Example Usage: nameTaken

<!-- UsageSnippet language="typescript" operationID="ratelimit.createNamespace" method="post" path="/v2/ratelimit.createNamespace" example="nameTaken" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.createNamespace({
    name: "email.outbound",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitCreateNamespace } from "@unkey/api/funcs/ratelimitCreateNamespace.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitCreateNamespace(unkey, {
    name: "email.outbound",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitCreateNamespace failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="ratelimit.createNamespace" method="post" path="/v2/ratelimit.createNamespace" example="success" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.createNamespace({
    name: "email.outbound",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitCreateNamespace } from "@unkey/api/funcs/ratelimitCreateNamespace.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitCreateNamespace(unkey, {
    name: "email.outbound",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitCreateNamespace failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2RatelimitCreateNamespaceRequestBody](../../models/components/v2ratelimitcreatenamespacerequestbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2RatelimitCreateNamespaceResponseBody](../../models/components/v2ratelimitcreatenamespaceresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.ConflictErrorResponse        | 409                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/json                    |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## deleteNamespace

Delete a rate limit namespace and all of its overrides, identified by the namespace ID or name.

**Important**: A deleted name cannot be reused. `ratelimit.limit` and `ratelimit.multiLimit` return 410 for it instead of creating a new namespace, so a deleted namespace does not turn into unlimited traffic. Other API nodes can take up to a minute to see the deletion.

**Required Permissions**

Your root key must have one of the following permissions:
- `unkey:v1:<workspace_id>:projects/*/ratelimits/namespaces/*#delete` (to delete any namespace)
- `unkey:v1:<workspace_id>:projects/<project_id>/ratelimits/namespaces/<namespace_id>#delete` (to delete a specific namespace)


### Example Usage: byId

<!-- UsageSnippet language="typescript" operationID="ratelimit.deleteNamespace" method="post" path="/v2/ratelimit.deleteNamespace" example="byId" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.deleteNamespace({
    namespace: "rlns_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitDeleteNamespace } from "@unkey/api/funcs/ratelimitDeleteNamespace.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitDeleteNamespace(unkey, {
    namespace: "rlns_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitDeleteNamespace failed:", res.error);
  }
}

run();
```
### Example Usage: byName

<!-- UsageSnippet language="typescript" operationID="ratelimit.deleteNamespace" method="post" path="/v2/ratelimit.deleteNamespace" example="byName" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.deleteNamespace({
    namespace: "email.outbound",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitDeleteNamespace } from "@unkey/api/funcs/ratelimitDeleteNamespace.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitDeleteNamespace(unkey, {
    namespace: "email.outbound",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitDeleteNamespace failed:", res.error);
  }
}

run();
```
### Example Usage: deleted

<!-- UsageSnippet language="typescript" operationID="ratelimit.deleteNamespace" method="post" path="/v2/ratelimit.deleteNamespace" example="deleted" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.deleteNamespace({
    namespace: "rlns_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitDeleteNamespace } from "@unkey/api/funcs/ratelimitDeleteNamespace.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitDeleteNamespace(unkey, {
    namespace: "rlns_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitDeleteNamespace failed:", res.error);
  }
}

run();
```
### Example Usage: emptyNamespace

<!-- UsageSnippet language="typescript" operationID="ratelimit.deleteNamespace" method="post" path="/v2/ratelimit.deleteNamespace" example="emptyNamespace" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.deleteNamespace({
    namespace: "rlns_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitDeleteNamespace } from "@unkey/api/funcs/ratelimitDeleteNamespace.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitDeleteNamespace(unkey, {
    namespace: "rlns_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitDeleteNamespace failed:", res.error);
  }
}

run();
```
### Example Usage: namespaceNotFound

<!-- UsageSnippet language="typescript" operationID="ratelimit.deleteNamespace" method="post" path="/v2/ratelimit.deleteNamespace" example="namespaceNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.deleteNamespace({
    namespace: "rlns_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitDeleteNamespace } from "@unkey/api/funcs/ratelimitDeleteNamespace.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitDeleteNamespace(unkey, {
    namespace: "rlns_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitDeleteNamespace failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2RatelimitDeleteNamespaceRequestBody](../../models/components/v2ratelimitdeletenamespacerequestbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2RatelimitDeleteNamespaceResponseBody](../../models/components/v2ratelimitdeletenamespaceresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/json                    |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## deleteOverride

Permanently remove a rate limit override. Affected identifiers immediately revert to the namespace default.

Use this to remove temporary overrides, reset identifiers to standard limits, or clean up outdated rules.

**Important:** Deletion is immediate and permanent. The override cannot be recovered and must be recreated if needed again.

**Permissions:** Requires `ratelimit.*.delete_override` or `ratelimit.<namespace_id>.delete_override`


### Example Usage: missingPermission

<!-- UsageSnippet language="typescript" operationID="ratelimit.deleteOverride" method="post" path="/v2/ratelimit.deleteOverride" example="missingPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.deleteOverride({
    namespace: "<value>",
    identifier: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitDeleteOverride } from "@unkey/api/funcs/ratelimitDeleteOverride.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitDeleteOverride(unkey, {
    namespace: "<value>",
    identifier: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitDeleteOverride failed:", res.error);
  }
}

run();
```
### Example Usage: overrideNotFound

<!-- UsageSnippet language="typescript" operationID="ratelimit.deleteOverride" method="post" path="/v2/ratelimit.deleteOverride" example="overrideNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.deleteOverride({
    namespace: "<value>",
    identifier: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitDeleteOverride } from "@unkey/api/funcs/ratelimitDeleteOverride.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitDeleteOverride(unkey, {
    namespace: "<value>",
    identifier: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitDeleteOverride failed:", res.error);
  }
}

run();
```
### Example Usage: specific

<!-- UsageSnippet language="typescript" operationID="ratelimit.deleteOverride" method="post" path="/v2/ratelimit.deleteOverride" example="specific" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.deleteOverride({
    namespace: "api.requests",
    identifier: "premium_user_123",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitDeleteOverride } from "@unkey/api/funcs/ratelimitDeleteOverride.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitDeleteOverride(unkey, {
    namespace: "api.requests",
    identifier: "premium_user_123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitDeleteOverride failed:", res.error);
  }
}

run();
```
### Example Usage: wildcard

<!-- UsageSnippet language="typescript" operationID="ratelimit.deleteOverride" method="post" path="/v2/ratelimit.deleteOverride" example="wildcard" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.deleteOverride({
    namespace: "api.requests",
    identifier: "premium_*",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitDeleteOverride } from "@unkey/api/funcs/ratelimitDeleteOverride.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitDeleteOverride(unkey, {
    namespace: "api.requests",
    identifier: "premium_*",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitDeleteOverride failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2RatelimitDeleteOverrideRequestBody](../../models/components/v2ratelimitdeleteoverriderequestbody.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2RatelimitDeleteOverrideResponseBody](../../models/components/v2ratelimitdeleteoverrideresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## getOverride

Retrieve the configuration of a specific rate limit override by its identifier.

Use this to inspect override configurations, audit rate limiting policies, or debug rate limiting behavior.

**Important:** The identifier must match exactly as specified when creating the override, including wildcard patterns.

**Permissions:** Requires `ratelimit.*.read_override` or `ratelimit.<namespace_id>.read_override`


### Example Usage: missingPermission

<!-- UsageSnippet language="typescript" operationID="ratelimit.getOverride" method="post" path="/v2/ratelimit.getOverride" example="missingPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.getOverride({
    namespace: "<value>",
    identifier: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitGetOverride } from "@unkey/api/funcs/ratelimitGetOverride.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitGetOverride(unkey, {
    namespace: "<value>",
    identifier: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitGetOverride failed:", res.error);
  }
}

run();
```
### Example Usage: overrideNotFound

<!-- UsageSnippet language="typescript" operationID="ratelimit.getOverride" method="post" path="/v2/ratelimit.getOverride" example="overrideNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.getOverride({
    namespace: "<value>",
    identifier: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitGetOverride } from "@unkey/api/funcs/ratelimitGetOverride.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitGetOverride(unkey, {
    namespace: "<value>",
    identifier: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitGetOverride failed:", res.error);
  }
}

run();
```
### Example Usage: specific

<!-- UsageSnippet language="typescript" operationID="ratelimit.getOverride" method="post" path="/v2/ratelimit.getOverride" example="specific" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.getOverride({
    namespace: "api.requests",
    identifier: "premium_user_123",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitGetOverride } from "@unkey/api/funcs/ratelimitGetOverride.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitGetOverride(unkey, {
    namespace: "api.requests",
    identifier: "premium_user_123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitGetOverride failed:", res.error);
  }
}

run();
```
### Example Usage: wildcard

<!-- UsageSnippet language="typescript" operationID="ratelimit.getOverride" method="post" path="/v2/ratelimit.getOverride" example="wildcard" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.getOverride({
    namespace: "api.requests",
    identifier: "premium_*",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitGetOverride } from "@unkey/api/funcs/ratelimitGetOverride.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitGetOverride(unkey, {
    namespace: "api.requests",
    identifier: "premium_*",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitGetOverride failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2RatelimitGetOverrideRequestBody](../../models/components/v2ratelimitgetoverriderequestbody.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2RatelimitGetOverrideResponseBody](../../models/components/v2ratelimitgetoverrideresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## limit

Check and enforce rate limits for any identifier (user ID, IP address, API client, etc.).

Use this for rate limiting beyond API keys - limit users by ID, IPs by address, or any custom identifier. Supports namespace organization, variable costs, and custom overrides.

**Response Codes**: Rate limit checks return HTTP 200 regardless of whether the limit is exceeded — check the `success` field in the response to determine if the request should be allowed. A 429 may be returned if the workspace exceeds its API rate limit. Other 4xx responses indicate auth, namespace existence/deletion, or validation errors (e.g., 410 Gone for deleted namespaces). 5xx responses indicate server errors.

**Required Permissions**

Your root key must have one of the following permissions:
- `ratelimit.*.limit` (to check limits in any namespace)
- `ratelimit.<namespace_id>.limit` (to check limits in a specific namespace)


### Example Usage: allowed

<!-- UsageSnippet language="typescript" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="allowed" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.limit({
    namespace: "sms.sign_up",
    cost: 5,
    duration: 60000,
    identifier: "user_12345",
    limit: 1000,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitLimit } from "@unkey/api/funcs/ratelimitLimit.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitLimit(unkey, {
    namespace: "sms.sign_up",
    cost: 5,
    duration: 60000,
    identifier: "user_12345",
    limit: 1000,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitLimit failed:", res.error);
  }
}

run();
```
### Example Usage: basic

<!-- UsageSnippet language="typescript" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="basic" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.limit({
    namespace: "api.requests",
    cost: 5,
    duration: 60000,
    identifier: "user_abc123",
    limit: 100,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitLimit } from "@unkey/api/funcs/ratelimitLimit.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitLimit(unkey, {
    namespace: "api.requests",
    cost: 5,
    duration: 60000,
    identifier: "user_abc123",
    limit: 100,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitLimit failed:", res.error);
  }
}

run();
```
### Example Usage: ipLimit

<!-- UsageSnippet language="typescript" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="ipLimit" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.limit({
    namespace: "auth.login",
    cost: 5,
    duration: 60000,
    identifier: "203.0.113.42",
    limit: 5,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitLimit } from "@unkey/api/funcs/ratelimitLimit.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitLimit(unkey, {
    namespace: "auth.login",
    cost: 5,
    duration: 60000,
    identifier: "203.0.113.42",
    limit: 5,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitLimit failed:", res.error);
  }
}

run();
```
### Example Usage: limitReached

<!-- UsageSnippet language="typescript" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="limitReached" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.limit({
    namespace: "sms.sign_up",
    cost: 5,
    duration: 60000,
    identifier: "user_12345",
    limit: 1000,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitLimit } from "@unkey/api/funcs/ratelimitLimit.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitLimit(unkey, {
    namespace: "sms.sign_up",
    cost: 5,
    duration: 60000,
    identifier: "user_12345",
    limit: 1000,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitLimit failed:", res.error);
  }
}

run();
```
### Example Usage: weightedCost

<!-- UsageSnippet language="typescript" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="weightedCost" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.limit({
    namespace: "api.heavy_operations",
    cost: 5,
    duration: 3600000,
    identifier: "user_def456",
    limit: 50,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitLimit } from "@unkey/api/funcs/ratelimitLimit.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitLimit(unkey, {
    namespace: "api.heavy_operations",
    cost: 5,
    duration: 3600000,
    identifier: "user_def456",
    limit: 50,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitLimit failed:", res.error);
  }
}

run();
```
### Example Usage: withOverride

<!-- UsageSnippet language="typescript" operationID="ratelimit.limit" method="post" path="/v2/ratelimit.limit" example="withOverride" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.limit({
    namespace: "sms.sign_up",
    cost: 5,
    duration: 60000,
    identifier: "user_12345",
    limit: 1000,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitLimit } from "@unkey/api/funcs/ratelimitLimit.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitLimit(unkey, {
    namespace: "sms.sign_up",
    cost: 5,
    duration: 60000,
    identifier: "user_12345",
    limit: 1000,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitLimit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2RatelimitLimitRequestBody](../../models/components/v2ratelimitlimitrequestbody.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2RatelimitLimitResponseBody](../../models/components/v2ratelimitlimitresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.GoneErrorResponse            | 410                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## listNamespaces

Retrieve a paginated list of the rate limit namespaces in your workspace.

Use this to find the namespaces your services rate limit against, for example to build an admin view or to look up a namespace ID. Results are ordered newest first and returned in pages. When `hasMore` is true, pass the returned `cursor` to fetch the next page.

Deleted namespaces are not returned. The list contains only the namespaces your root key can read.

**Required Permissions**

Your root key must have one of the following permissions:
- `unkey:v1:<workspace_id>:projects/*/ratelimits/namespaces/*#read` (to read any namespace)
- `unkey:v1:<workspace_id>:projects/<project_id>/ratelimits/namespaces/<namespace_id>#read` (to read a specific namespace)


### Example Usage: basic

<!-- UsageSnippet language="typescript" operationID="ratelimit.listNamespaces" method="post" path="/v2/ratelimit.listNamespaces" example="basic" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.listNamespaces({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitListNamespaces } from "@unkey/api/funcs/ratelimitListNamespaces.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitListNamespaces(unkey, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("ratelimitListNamespaces failed:", res.error);
  }
}

run();
```
### Example Usage: empty

<!-- UsageSnippet language="typescript" operationID="ratelimit.listNamespaces" method="post" path="/v2/ratelimit.listNamespaces" example="empty" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.listNamespaces({
    cursor: "rlns_1234abcd",
    search: "api",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitListNamespaces } from "@unkey/api/funcs/ratelimitListNamespaces.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitListNamespaces(unkey, {
    cursor: "rlns_1234abcd",
    search: "api",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("ratelimitListNamespaces failed:", res.error);
  }
}

run();
```
### Example Usage: invalidLimit

<!-- UsageSnippet language="typescript" operationID="ratelimit.listNamespaces" method="post" path="/v2/ratelimit.listNamespaces" example="invalidLimit" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.listNamespaces({
    cursor: "rlns_1234abcd",
    search: "api",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitListNamespaces } from "@unkey/api/funcs/ratelimitListNamespaces.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitListNamespaces(unkey, {
    cursor: "rlns_1234abcd",
    search: "api",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("ratelimitListNamespaces failed:", res.error);
  }
}

run();
```
### Example Usage: morePages

<!-- UsageSnippet language="typescript" operationID="ratelimit.listNamespaces" method="post" path="/v2/ratelimit.listNamespaces" example="morePages" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.listNamespaces({
    cursor: "rlns_1234abcd",
    search: "api",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitListNamespaces } from "@unkey/api/funcs/ratelimitListNamespaces.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitListNamespaces(unkey, {
    cursor: "rlns_1234abcd",
    search: "api",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("ratelimitListNamespaces failed:", res.error);
  }
}

run();
```
### Example Usage: namespaceList

<!-- UsageSnippet language="typescript" operationID="ratelimit.listNamespaces" method="post" path="/v2/ratelimit.listNamespaces" example="namespaceList" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.listNamespaces({
    cursor: "rlns_1234abcd",
    search: "api",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitListNamespaces } from "@unkey/api/funcs/ratelimitListNamespaces.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitListNamespaces(unkey, {
    cursor: "rlns_1234abcd",
    search: "api",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("ratelimitListNamespaces failed:", res.error);
  }
}

run();
```
### Example Usage: paginated

<!-- UsageSnippet language="typescript" operationID="ratelimit.listNamespaces" method="post" path="/v2/ratelimit.listNamespaces" example="paginated" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.listNamespaces({
    limit: 20,
    cursor: "rlns_1234abcd",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitListNamespaces } from "@unkey/api/funcs/ratelimitListNamespaces.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitListNamespaces(unkey, {
    limit: 20,
    cursor: "rlns_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("ratelimitListNamespaces failed:", res.error);
  }
}

run();
```
### Example Usage: search

<!-- UsageSnippet language="typescript" operationID="ratelimit.listNamespaces" method="post" path="/v2/ratelimit.listNamespaces" example="search" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.listNamespaces({
    search: "api",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitListNamespaces } from "@unkey/api/funcs/ratelimitListNamespaces.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitListNamespaces(unkey, {
    search: "api",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("ratelimitListNamespaces failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2RatelimitListNamespacesRequestBody](../../models/components/v2ratelimitlistnamespacesrequestbody.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RatelimitListNamespacesResponse](../../models/operations/ratelimitlistnamespacesresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/json                    |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## listOverrides

Retrieve a paginated list of all rate limit overrides in a namespace.

Use this to audit rate limiting policies, build admin dashboards, or manage override configurations.

**Important:** Results are paginated. Use the cursor parameter to retrieve additional pages when more results are available.

**Permissions:** Requires `ratelimit.*.read_override` or `ratelimit.<namespace_id>.read_override`


### Example Usage: basic

<!-- UsageSnippet language="typescript" operationID="ratelimit.listOverrides" method="post" path="/v2/ratelimit.listOverrides" example="basic" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.listOverrides({
    namespace: "api.requests",
    limit: 20,
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitListOverrides } from "@unkey/api/funcs/ratelimitListOverrides.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitListOverrides(unkey, {
    namespace: "api.requests",
    limit: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("ratelimitListOverrides failed:", res.error);
  }
}

run();
```
### Example Usage: missingPermission

<!-- UsageSnippet language="typescript" operationID="ratelimit.listOverrides" method="post" path="/v2/ratelimit.listOverrides" example="missingPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.listOverrides({
    namespace: "<value>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitListOverrides } from "@unkey/api/funcs/ratelimitListOverrides.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitListOverrides(unkey, {
    namespace: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("ratelimitListOverrides failed:", res.error);
  }
}

run();
```
### Example Usage: pagination

<!-- UsageSnippet language="typescript" operationID="ratelimit.listOverrides" method="post" path="/v2/ratelimit.listOverrides" example="pagination" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.listOverrides({
    namespace: "api.requests",
    cursor: "cursor_eyJsYXN0SWQiOiJvdnJfM2RITGNOeVN6SnppRHlwMkpla2E5ciJ9",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitListOverrides } from "@unkey/api/funcs/ratelimitListOverrides.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitListOverrides(unkey, {
    namespace: "api.requests",
    cursor: "cursor_eyJsYXN0SWQiOiJvdnJfM2RITGNOeVN6SnppRHlwMkpla2E5ciJ9",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("ratelimitListOverrides failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2RatelimitListOverridesRequestBody](../../models/components/v2ratelimitlistoverridesrequestbody.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RatelimitListOverridesResponse](../../models/operations/ratelimitlistoverridesresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## multiLimit

Check and enforce multiple rate limits in a single request for any identifiers (user IDs, IP addresses, API clients, etc.).

Use this to efficiently check multiple rate limits at once. Each rate limit check is independent and returns its own result with a top-level `passed` indicator showing if all checks succeeded.

**Response Codes**: Rate limit checks return HTTP 200 regardless of whether limits are exceeded — check the `passed` field to see if all limits passed, or the `success` field in each individual result. A 429 may be returned if the workspace exceeds its API rate limit. Other 4xx responses indicate auth, namespace existence/deletion, or validation errors (e.g., 410 Gone for deleted namespaces). 5xx responses indicate server errors.

**Required Permissions**

Your root key must have one of the following permissions:
- `ratelimit.*.limit` (to check limits in any namespace)
- `ratelimit.<namespace_id>.limit` (to check limits in all specific namespaces being checked)


### Example Usage: allAllowed

<!-- UsageSnippet language="typescript" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="allAllowed" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.multiLimit([]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitMultiLimit } from "@unkey/api/funcs/ratelimitMultiLimit.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitMultiLimit(unkey, []);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitMultiLimit failed:", res.error);
  }
}

run();
```
### Example Usage: ipHashAndUserLimits

<!-- UsageSnippet language="typescript" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="ipHashAndUserLimits" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.multiLimit([
    {
      namespace: "auth.login",
      cost: 5,
      duration: 60000,
      identifier: "sha256_8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4",
      limit: 10,
    },
    {
      namespace: "api.requests",
      cost: 5,
      duration: 3600000,
      identifier: "user_def456",
      limit: 1000,
    },
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitMultiLimit } from "@unkey/api/funcs/ratelimitMultiLimit.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitMultiLimit(unkey, [
    {
      namespace: "auth.login",
      cost: 5,
      duration: 60000,
      identifier: "sha256_8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4",
      limit: 10,
    },
    {
      namespace: "api.requests",
      cost: 5,
      duration: 3600000,
      identifier: "user_def456",
      limit: 1000,
    },
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitMultiLimit failed:", res.error);
  }
}

run();
```
### Example Usage: mixedResults

<!-- UsageSnippet language="typescript" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="mixedResults" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.multiLimit([]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitMultiLimit } from "@unkey/api/funcs/ratelimitMultiLimit.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitMultiLimit(unkey, []);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitMultiLimit failed:", res.error);
  }
}

run();
```
### Example Usage: multipleChecks

<!-- UsageSnippet language="typescript" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="multipleChecks" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.multiLimit([
    {
      namespace: "api.requests",
      cost: 5,
      duration: 60000,
      identifier: "user_abc123",
      limit: 100,
    },
    {
      namespace: "auth.login",
      cost: 5,
      duration: 60000,
      identifier: "user_abc123",
      limit: 5,
    },
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitMultiLimit } from "@unkey/api/funcs/ratelimitMultiLimit.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitMultiLimit(unkey, [
    {
      namespace: "api.requests",
      cost: 5,
      duration: 60000,
      identifier: "user_abc123",
      limit: 100,
    },
    {
      namespace: "auth.login",
      cost: 5,
      duration: 60000,
      identifier: "user_abc123",
      limit: 5,
    },
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitMultiLimit failed:", res.error);
  }
}

run();
```
### Example Usage: withOverride

<!-- UsageSnippet language="typescript" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="withOverride" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.multiLimit([
    {
      namespace: "sms.sign_up",
      cost: 5,
      duration: 60000,
      identifier: "user_12345",
      limit: 1000,
    },
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitMultiLimit } from "@unkey/api/funcs/ratelimitMultiLimit.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitMultiLimit(unkey, [
    {
      namespace: "sms.sign_up",
      cost: 5,
      duration: 60000,
      identifier: "user_12345",
      limit: 1000,
    },
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitMultiLimit failed:", res.error);
  }
}

run();
```
### Example Usage: withWeightedCost

<!-- UsageSnippet language="typescript" operationID="ratelimit.multiLimit" method="post" path="/v2/ratelimit.multiLimit" example="withWeightedCost" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.multiLimit([
    {
      namespace: "api.light_operations",
      duration: 60000,
      identifier: "user_xyz789",
      limit: 100,
    },
    {
      namespace: "api.heavy_operations",
      cost: 5,
      duration: 3600000,
      identifier: "user_xyz789",
      limit: 50,
    },
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitMultiLimit } from "@unkey/api/funcs/ratelimitMultiLimit.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitMultiLimit(unkey, [
    {
      namespace: "api.light_operations",
      duration: 60000,
      identifier: "user_xyz789",
      limit: 100,
    },
    {
      namespace: "api.heavy_operations",
      cost: 5,
      duration: 3600000,
      identifier: "user_xyz789",
      limit: 50,
    },
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitMultiLimit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2RatelimitLimitRequestBody[]](../../models/.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2RatelimitMultiLimitResponseBody](../../models/components/v2ratelimitmultilimitresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.GoneErrorResponse            | 410                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## setOverride

Create or update a custom rate limit for specific identifiers, bypassing the namespace default.

Use this to create premium tiers with higher limits, apply stricter limits to specific users, or implement emergency throttling.

**Important:** Overrides take effect immediately and completely replace the default limit for matching identifiers. Use wildcard patterns (e.g., `premium_*`) to match multiple identifiers.

**Permissions:** Requires `ratelimit.*.set_override` or `ratelimit.<namespace_id>.set_override`


### Example Usage: missingPermission

<!-- UsageSnippet language="typescript" operationID="ratelimit.setOverride" method="post" path="/v2/ratelimit.setOverride" example="missingPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.setOverride({
    namespace: "<value>",
    duration: 956831,
    identifier: "<value>",
    limit: 816580,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitSetOverride } from "@unkey/api/funcs/ratelimitSetOverride.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitSetOverride(unkey, {
    namespace: "<value>",
    duration: 956831,
    identifier: "<value>",
    limit: 816580,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitSetOverride failed:", res.error);
  }
}

run();
```
### Example Usage: namespaceNotFound

<!-- UsageSnippet language="typescript" operationID="ratelimit.setOverride" method="post" path="/v2/ratelimit.setOverride" example="namespaceNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.setOverride({
    namespace: "<value>",
    duration: 956831,
    identifier: "<value>",
    limit: 816580,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitSetOverride } from "@unkey/api/funcs/ratelimitSetOverride.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitSetOverride(unkey, {
    namespace: "<value>",
    duration: 956831,
    identifier: "<value>",
    limit: 816580,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitSetOverride failed:", res.error);
  }
}

run();
```
### Example Usage: premium

<!-- UsageSnippet language="typescript" operationID="ratelimit.setOverride" method="post" path="/v2/ratelimit.setOverride" example="premium" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.setOverride({
    namespace: "api.requests",
    duration: 60000,
    identifier: "premium_user_123",
    limit: 1000,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitSetOverride } from "@unkey/api/funcs/ratelimitSetOverride.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitSetOverride(unkey, {
    namespace: "api.requests",
    duration: 60000,
    identifier: "premium_user_123",
    limit: 1000,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitSetOverride failed:", res.error);
  }
}

run();
```
### Example Usage: wildcard

<!-- UsageSnippet language="typescript" operationID="ratelimit.setOverride" method="post" path="/v2/ratelimit.setOverride" example="wildcard" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.setOverride({
    namespace: "api.requests",
    duration: 60000,
    identifier: "premium_*",
    limit: 500,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitSetOverride } from "@unkey/api/funcs/ratelimitSetOverride.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitSetOverride(unkey, {
    namespace: "api.requests",
    duration: 60000,
    identifier: "premium_*",
    limit: 500,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitSetOverride failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2RatelimitSetOverrideRequestBody](../../models/components/v2ratelimitsetoverriderequestbody.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2RatelimitSetOverrideResponseBody](../../models/components/v2ratelimitsetoverrideresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## updateNamespace

Rename a rate limit namespace, identified by its ID or current name.

Renaming to the current name returns the namespace without a write.

**Important**: Overrides stay with the namespace. Requests that pass the namespace by name, such as `ratelimit.limit`, must use the new name. A `ratelimit.limit` call with the old name can create a new, empty namespace with that name. A name that is in use or was deleted returns 409. Other API nodes can take up to a minute to see the new name.

**Required Permissions**

Your root key must have one of the following permissions:
- `unkey:v1:<workspace_id>:projects/*/ratelimits/namespaces/*#write` (to rename any namespace)
- `unkey:v1:<workspace_id>:projects/<project_id>/ratelimits/namespaces/<namespace_id>#write` (to rename a specific namespace)


### Example Usage: emptyName

<!-- UsageSnippet language="typescript" operationID="ratelimit.updateNamespace" method="post" path="/v2/ratelimit.updateNamespace" example="emptyName" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.updateNamespace({
    namespace: "rlns_1234abcd",
    name: "email.outbound",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitUpdateNamespace } from "@unkey/api/funcs/ratelimitUpdateNamespace.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitUpdateNamespace(unkey, {
    namespace: "rlns_1234abcd",
    name: "email.outbound",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitUpdateNamespace failed:", res.error);
  }
}

run();
```
### Example Usage: nameTaken

<!-- UsageSnippet language="typescript" operationID="ratelimit.updateNamespace" method="post" path="/v2/ratelimit.updateNamespace" example="nameTaken" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.updateNamespace({
    namespace: "rlns_1234abcd",
    name: "email.outbound",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitUpdateNamespace } from "@unkey/api/funcs/ratelimitUpdateNamespace.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitUpdateNamespace(unkey, {
    namespace: "rlns_1234abcd",
    name: "email.outbound",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitUpdateNamespace failed:", res.error);
  }
}

run();
```
### Example Usage: namespaceNotFound

<!-- UsageSnippet language="typescript" operationID="ratelimit.updateNamespace" method="post" path="/v2/ratelimit.updateNamespace" example="namespaceNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.updateNamespace({
    namespace: "rlns_1234abcd",
    name: "email.outbound",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitUpdateNamespace } from "@unkey/api/funcs/ratelimitUpdateNamespace.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitUpdateNamespace(unkey, {
    namespace: "rlns_1234abcd",
    name: "email.outbound",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitUpdateNamespace failed:", res.error);
  }
}

run();
```
### Example Usage: renameById

<!-- UsageSnippet language="typescript" operationID="ratelimit.updateNamespace" method="post" path="/v2/ratelimit.updateNamespace" example="renameById" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.updateNamespace({
    namespace: "rlns_1234abcd",
    name: "email.outbound",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitUpdateNamespace } from "@unkey/api/funcs/ratelimitUpdateNamespace.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitUpdateNamespace(unkey, {
    namespace: "rlns_1234abcd",
    name: "email.outbound",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitUpdateNamespace failed:", res.error);
  }
}

run();
```
### Example Usage: renameByName

<!-- UsageSnippet language="typescript" operationID="ratelimit.updateNamespace" method="post" path="/v2/ratelimit.updateNamespace" example="renameByName" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.updateNamespace({
    namespace: "email.sends",
    name: "email.outbound",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitUpdateNamespace } from "@unkey/api/funcs/ratelimitUpdateNamespace.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitUpdateNamespace(unkey, {
    namespace: "email.sends",
    name: "email.outbound",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitUpdateNamespace failed:", res.error);
  }
}

run();
```
### Example Usage: renamed

<!-- UsageSnippet language="typescript" operationID="ratelimit.updateNamespace" method="post" path="/v2/ratelimit.updateNamespace" example="renamed" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.ratelimit.updateNamespace({
    namespace: "rlns_1234abcd",
    name: "email.outbound",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { ratelimitUpdateNamespace } from "@unkey/api/funcs/ratelimitUpdateNamespace.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await ratelimitUpdateNamespace(unkey, {
    namespace: "rlns_1234abcd",
    name: "email.outbound",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ratelimitUpdateNamespace failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2RatelimitUpdateNamespaceRequestBody](../../models/components/v2ratelimitupdatenamespacerequestbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2RatelimitUpdateNamespaceResponseBody](../../models/components/v2ratelimitupdatenamespaceresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.ConflictErrorResponse        | 409                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/json                    |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |