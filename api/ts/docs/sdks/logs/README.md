# Logs

## Overview

Log listing operations

### Available Operations

* [getApiRequestMetrics](#getapirequestmetrics) - Get API request metrics
* [listApiRequests](#listapirequests) - List API requests

## getApiRequestMetrics

Count the requests that the Unkey API served for your workspace per time bucket, split by status class.

The filters have the same shape as in `logs.listApiRequests`, without `requestId`. In one field, values under `is`, `contains`, `startsWith`, and `endsWith` are combined with OR. Values under `isNot` and `notContains`, and the range operators `gt`, `gte`, `lt`, and `lte`, are combined with AND. Different fields are combined with AND. Every text match is exact and case-sensitive.

`filters.time` sets the window. A missing lower bound is the start of your log retention, and a missing upper bound is now. Unkey picks the bucket width from the window. It is the distance between the `time` of two points. The first bucket starts at or before the window start and counts its whole width. Windows reach back at most 100 days, and requests outside the log retention of your workspace are not counted.

**Required Permissions**

Your root key must have the following permission:
- `unkey:v1:<workspace_id>:logs/apiRequests#read`


### Example Usage: empty

<!-- UsageSnippet language="typescript" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="empty" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.logs.getApiRequestMetrics({
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
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
import { logsGetApiRequestMetrics } from "@unkey/api/funcs/logsGetApiRequestMetrics.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await logsGetApiRequestMetrics(unkey, {
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetApiRequestMetrics failed:", res.error);
  }
}

run();
```
### Example Usage: missingPermission

<!-- UsageSnippet language="typescript" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="missingPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.logs.getApiRequestMetrics({
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
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
import { logsGetApiRequestMetrics } from "@unkey/api/funcs/logsGetApiRequestMetrics.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await logsGetApiRequestMetrics(unkey, {
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetApiRequestMetrics failed:", res.error);
  }
}

run();
```
### Example Usage: series

<!-- UsageSnippet language="typescript" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="series" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.logs.getApiRequestMetrics({
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
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
import { logsGetApiRequestMetrics } from "@unkey/api/funcs/logsGetApiRequestMetrics.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await logsGetApiRequestMetrics(unkey, {
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetApiRequestMetrics failed:", res.error);
  }
}

run();
```
### Example Usage: timeout

<!-- UsageSnippet language="typescript" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="timeout" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.logs.getApiRequestMetrics({
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
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
import { logsGetApiRequestMetrics } from "@unkey/api/funcs/logsGetApiRequestMetrics.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await logsGetApiRequestMetrics(unkey, {
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetApiRequestMetrics failed:", res.error);
  }
}

run();
```
### Example Usage: unknownField

<!-- UsageSnippet language="typescript" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="unknownField" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.logs.getApiRequestMetrics({
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
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
import { logsGetApiRequestMetrics } from "@unkey/api/funcs/logsGetApiRequestMetrics.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await logsGetApiRequestMetrics(unkey, {
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetApiRequestMetrics failed:", res.error);
  }
}

run();
```
### Example Usage: workspaceRateLimited

<!-- UsageSnippet language="typescript" operationID="logs.getApiRequestMetrics" method="post" path="/v2/logs.getApiRequestMetrics" example="workspaceRateLimited" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.logs.getApiRequestMetrics({
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
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
import { logsGetApiRequestMetrics } from "@unkey/api/funcs/logsGetApiRequestMetrics.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await logsGetApiRequestMetrics(unkey, {
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logsGetApiRequestMetrics failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2LogsGetApiRequestMetricsRequestBody](../../models/components/v2logsgetapirequestmetricsrequestbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2LogsGetApiRequestMetricsResponseBody](../../models/components/v2logsgetapirequestmetricsresponsebody.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.BadRequestErrorResponse          | 400                                     | application/json                        |
| errors.UnauthorizedErrorResponse        | 401                                     | application/json                        |
| errors.ForbiddenErrorResponse           | 403                                     | application/json                        |
| errors.UnprocessableEntityErrorResponse | 422                                     | application/json                        |
| errors.InternalServerErrorResponse      | 500                                     | application/json                        |
| errors.ServiceUnavailableErrorResponse  | 503                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## listApiRequests

List the requests that the Unkey API served for your workspace, newest first.

Filter by time, path, method, request ID, and status. In one field, values under `is`, `contains`, `startsWith`, and `endsWith` are combined with OR. Values under `isNot` and `notContains`, and the range operators `gt`, `gte`, `lt`, and `lte`, are combined with AND. Different fields are combined with AND. Every text match is exact and case-sensitive.

To get the next page, send the `pagination.cursor` of the previous page together with the same `filters`. A cursor does not expire, but rows older than the log retention leave the listing.

Unkey returns only requests inside the log retention of your workspace. The calls to this endpoint are not logged.

**Required Permissions**

Your root key must have the following permission:
- `unkey:v1:<workspace_id>:logs/apiRequests#read`


### Example Usage: empty

<!-- UsageSnippet language="typescript" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="empty" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.logs.listApiRequests({
    cursor: "MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g",
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      requestId: {
        isNot: [
          "api.unkey.dev",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
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
import { logsListApiRequests } from "@unkey/api/funcs/logsListApiRequests.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await logsListApiRequests(unkey, {
    cursor: "MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g",
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      requestId: {
        isNot: [
          "api.unkey.dev",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("logsListApiRequests failed:", res.error);
  }
}

run();
```
### Example Usage: invalidCursor

<!-- UsageSnippet language="typescript" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="invalidCursor" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.logs.listApiRequests({
    cursor: "MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g",
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      requestId: {
        isNot: [
          "api.unkey.dev",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
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
import { logsListApiRequests } from "@unkey/api/funcs/logsListApiRequests.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await logsListApiRequests(unkey, {
    cursor: "MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g",
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      requestId: {
        isNot: [
          "api.unkey.dev",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("logsListApiRequests failed:", res.error);
  }
}

run();
```
### Example Usage: missingPermission

<!-- UsageSnippet language="typescript" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="missingPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.logs.listApiRequests({
    cursor: "MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g",
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      requestId: {
        isNot: [
          "api.unkey.dev",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
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
import { logsListApiRequests } from "@unkey/api/funcs/logsListApiRequests.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await logsListApiRequests(unkey, {
    cursor: "MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g",
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      requestId: {
        isNot: [
          "api.unkey.dev",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("logsListApiRequests failed:", res.error);
  }
}

run();
```
### Example Usage: page

<!-- UsageSnippet language="typescript" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="page" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.logs.listApiRequests({
    cursor: "MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g",
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      requestId: {
        isNot: [
          "api.unkey.dev",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
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
import { logsListApiRequests } from "@unkey/api/funcs/logsListApiRequests.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await logsListApiRequests(unkey, {
    cursor: "MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g",
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      requestId: {
        isNot: [
          "api.unkey.dev",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("logsListApiRequests failed:", res.error);
  }
}

run();
```
### Example Usage: resultTooLarge

<!-- UsageSnippet language="typescript" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="resultTooLarge" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.logs.listApiRequests({
    cursor: "MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g",
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      requestId: {
        isNot: [
          "api.unkey.dev",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
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
import { logsListApiRequests } from "@unkey/api/funcs/logsListApiRequests.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await logsListApiRequests(unkey, {
    cursor: "MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g",
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      requestId: {
        isNot: [
          "api.unkey.dev",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("logsListApiRequests failed:", res.error);
  }
}

run();
```
### Example Usage: workspaceRateLimited

<!-- UsageSnippet language="typescript" operationID="logs.listApiRequests" method="post" path="/v2/logs.listApiRequests" example="workspaceRateLimited" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.logs.listApiRequests({
    cursor: "MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g",
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      requestId: {
        isNot: [
          "api.unkey.dev",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
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
import { logsListApiRequests } from "@unkey/api/funcs/logsListApiRequests.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await logsListApiRequests(unkey, {
    cursor: "MTc5MjAyMTg1MDEyMzpyZXFfNTY3OGVmZ2g",
    filters: {
      time: {
        gte: 1791936000000,
        lt: 1792022400000,
      },
      path: {
        notContains: [
          "verifyKey",
        ],
        startsWith: [
          "/v2/keys.",
        ],
      },
      method: {
        is: [
          "POST",
          "PUT",
        ],
      },
      requestId: {
        isNot: [
          "api.unkey.dev",
        ],
      },
      status: {
        isNot: [
          429,
        ],
        gte: 400,
        lt: 600,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("logsListApiRequests failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2LogsListApiRequestsRequestBody](../../models/components/v2logslistapirequestsrequestbody.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LogsListApiRequestsResponse](../../models/operations/logslistapirequestsresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.BadRequestErrorResponse          | 400                                     | application/json                        |
| errors.UnauthorizedErrorResponse        | 401                                     | application/json                        |
| errors.ForbiddenErrorResponse           | 403                                     | application/json                        |
| errors.UnprocessableEntityErrorResponse | 422                                     | application/json                        |
| errors.InternalServerErrorResponse      | 500                                     | application/json                        |
| errors.ServiceUnavailableErrorResponse  | 503                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |