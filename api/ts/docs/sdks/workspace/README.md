# Workspace

## Overview

Workspace limits and usage operations

### Available Operations

* [getLimits](#getlimits) - Get workspace limits
* [getUsage](#getusage) - Get workspace usage

## getLimits

Get every limit of your workspace, with the current value against each
limit that has one.

Use this before an operation that a limit can reject, for example to see how
many custom domains or log drains remain, or how much CPU, memory, and disk
a new deployment can still reserve.

The request takes no parameters. Each limit has a `limit`, which is `null`
when unlimited, and a `current` value when the limit has one. Billable
operations count the current calendar month in UTC. The Compute limits are
present only when the workspace has a Compute plan.

**Required Permissions**

Your root key must have the following permission:
- `unkey:v1:<workspace_id>:limits#read`


### Example Usage: withCompute

<!-- UsageSnippet language="typescript" operationID="workspace.getLimits" method="post" path="/v2/workspace.getLimits" example="withCompute" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.workspace.getLimits();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { workspaceGetLimits } from "@unkey/api/funcs/workspaceGetLimits.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await workspaceGetLimits(unkey);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspaceGetLimits failed:", res.error);
  }
}

run();
```
### Example Usage: withoutCompute

<!-- UsageSnippet language="typescript" operationID="workspace.getLimits" method="post" path="/v2/workspace.getLimits" example="withoutCompute" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.workspace.getLimits();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { workspaceGetLimits } from "@unkey/api/funcs/workspaceGetLimits.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await workspaceGetLimits(unkey);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspaceGetLimits failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2WorkspaceGetLimitsResponseBody](../../models/components/v2workspacegetlimitsresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## getUsage

Get the usage of your workspace for one calendar month (UTC): billable API
operations, compute usage per environment, and active keys per app.

Use this to track usage during the month or to look back at a past
month. The response has no prices. Your invoice is the source of truth.
Compute usage can be up to 15 minutes late, and it can change for up to 7
days.

Send `{}` for the current month to date, or
`{"period": {"year": 2026, "month": 9}}` for a full past month. The month
must start within the last 90 days.

**Required Permissions**

Your root key must have this permission:
- `unkey:v1:<workspace_id>:usage#read`


### Example Usage: currentMonth

<!-- UsageSnippet language="typescript" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="currentMonth" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.workspace.getUsage({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { workspaceGetUsage } from "@unkey/api/funcs/workspaceGetUsage.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await workspaceGetUsage(unkey, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspaceGetUsage failed:", res.error);
  }
}

run();
```
### Example Usage: deletedApp

<!-- UsageSnippet language="typescript" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="deletedApp" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.workspace.getUsage({
    period: {
      year: 2026,
      month: 9,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { workspaceGetUsage } from "@unkey/api/funcs/workspaceGetUsage.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await workspaceGetUsage(unkey, {
    period: {
      year: 2026,
      month: 9,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspaceGetUsage failed:", res.error);
  }
}

run();
```
### Example Usage: emptyMonth

<!-- UsageSnippet language="typescript" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="emptyMonth" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.workspace.getUsage({
    period: {
      year: 2026,
      month: 9,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { workspaceGetUsage } from "@unkey/api/funcs/workspaceGetUsage.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await workspaceGetUsage(unkey, {
    period: {
      year: 2026,
      month: 9,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspaceGetUsage failed:", res.error);
  }
}

run();
```
### Example Usage: futureMonth

<!-- UsageSnippet language="typescript" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="futureMonth" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.workspace.getUsage({
    period: {
      year: 2026,
      month: 9,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { workspaceGetUsage } from "@unkey/api/funcs/workspaceGetUsage.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await workspaceGetUsage(unkey, {
    period: {
      year: 2026,
      month: 9,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspaceGetUsage failed:", res.error);
  }
}

run();
```
### Example Usage: invalidMonth

<!-- UsageSnippet language="typescript" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="invalidMonth" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.workspace.getUsage({
    period: {
      year: 2026,
      month: 9,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { workspaceGetUsage } from "@unkey/api/funcs/workspaceGetUsage.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await workspaceGetUsage(unkey, {
    period: {
      year: 2026,
      month: 9,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspaceGetUsage failed:", res.error);
  }
}

run();
```
### Example Usage: invalidRootKey

<!-- UsageSnippet language="typescript" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="invalidRootKey" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.workspace.getUsage({
    period: {
      year: 2026,
      month: 9,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { workspaceGetUsage } from "@unkey/api/funcs/workspaceGetUsage.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await workspaceGetUsage(unkey, {
    period: {
      year: 2026,
      month: 9,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspaceGetUsage failed:", res.error);
  }
}

run();
```
### Example Usage: missingPermission

<!-- UsageSnippet language="typescript" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="missingPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.workspace.getUsage({
    period: {
      year: 2026,
      month: 9,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { workspaceGetUsage } from "@unkey/api/funcs/workspaceGetUsage.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await workspaceGetUsage(unkey, {
    period: {
      year: 2026,
      month: 9,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspaceGetUsage failed:", res.error);
  }
}

run();
```
### Example Usage: monthTooOld

<!-- UsageSnippet language="typescript" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="monthTooOld" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.workspace.getUsage({
    period: {
      year: 2026,
      month: 9,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { workspaceGetUsage } from "@unkey/api/funcs/workspaceGetUsage.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await workspaceGetUsage(unkey, {
    period: {
      year: 2026,
      month: 9,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspaceGetUsage failed:", res.error);
  }
}

run();
```
### Example Usage: pastMonth

<!-- UsageSnippet language="typescript" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="pastMonth" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.workspace.getUsage({
    period: {
      year: 2026,
      month: 9,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { workspaceGetUsage } from "@unkey/api/funcs/workspaceGetUsage.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await workspaceGetUsage(unkey, {
    period: {
      year: 2026,
      month: 9,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspaceGetUsage failed:", res.error);
  }
}

run();
```
### Example Usage: usageUnavailable

<!-- UsageSnippet language="typescript" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="usageUnavailable" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.workspace.getUsage({
    period: {
      year: 2026,
      month: 9,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { workspaceGetUsage } from "@unkey/api/funcs/workspaceGetUsage.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await workspaceGetUsage(unkey, {
    period: {
      year: 2026,
      month: 9,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspaceGetUsage failed:", res.error);
  }
}

run();
```
### Example Usage: workspaceRateLimited

<!-- UsageSnippet language="typescript" operationID="workspace.getUsage" method="post" path="/v2/workspace.getUsage" example="workspaceRateLimited" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.workspace.getUsage({
    period: {
      year: 2026,
      month: 9,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { workspaceGetUsage } from "@unkey/api/funcs/workspaceGetUsage.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await workspaceGetUsage(unkey, {
    period: {
      year: 2026,
      month: 9,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspaceGetUsage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2WorkspaceGetUsageRequestBody](../../models/components/v2workspacegetusagerequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2WorkspaceGetUsageResponseBody](../../models/components/v2workspacegetusageresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |