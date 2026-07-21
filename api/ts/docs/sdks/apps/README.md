# Apps

## Overview

App management operations

### Available Operations

* [createApp](#createapp) - Create app
* [deleteApp](#deleteapp) - Delete app
* [getApp](#getapp) - Get app
* [listApps](#listapps) - List apps
* [updateApp](#updateapp) - Update app

## createApp

Create an app within a project. The app is created with default `production` and `preview` environments.

The slug you provide is the stable, caller-defined handle used to reference this app. It must be unique within the project.

**Important**: The slug cannot collide with an existing app in the same project. A duplicate slug returns a 409 conflict.

**Required Permissions**

Your root key must have one of the following permissions:
- `project.*.create_app` (to create apps in any project)
- `project.<project_id>.create_app` (to create apps in a specific project)


### Example Usage: appExists

<!-- UsageSnippet language="typescript" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="appExists" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.createApp({
    project: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsCreateApp } from "@unkey/api/funcs/appsCreateApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsCreateApp(unkey, {
    project: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsCreateApp failed:", res.error);
  }
}

run();
```
### Example Usage: basic

<!-- UsageSnippet language="typescript" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="basic" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.createApp({
    project: "payments",
    name: "Payments API",
    slug: "payments-api",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsCreateApp } from "@unkey/api/funcs/appsCreateApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsCreateApp(unkey, {
    project: "payments",
    name: "Payments API",
    slug: "payments-api",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsCreateApp failed:", res.error);
  }
}

run();
```
### Example Usage: invalidSlug

<!-- UsageSnippet language="typescript" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="invalidSlug" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.createApp({
    project: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsCreateApp } from "@unkey/api/funcs/appsCreateApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsCreateApp(unkey, {
    project: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsCreateApp failed:", res.error);
  }
}

run();
```
### Example Usage: missingPermission

<!-- UsageSnippet language="typescript" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="missingPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.createApp({
    project: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsCreateApp } from "@unkey/api/funcs/appsCreateApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsCreateApp(unkey, {
    project: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsCreateApp failed:", res.error);
  }
}

run();
```
### Example Usage: projectNotFound

<!-- UsageSnippet language="typescript" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="projectNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.createApp({
    project: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsCreateApp } from "@unkey/api/funcs/appsCreateApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsCreateApp(unkey, {
    project: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsCreateApp failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="apps.createApp" method="post" path="/v2/apps.createApp" example="success" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.createApp({
    project: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsCreateApp } from "@unkey/api/funcs/appsCreateApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsCreateApp(unkey, {
    project: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsCreateApp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2AppsCreateAppRequestBody](../../models/components/v2appscreateapprequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2AppsCreateAppResponseBody](../../models/components/v2appscreateappresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.ConflictErrorResponse        | 409                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## deleteApp

Delete an existing app, identified by its id.

Deletion is asynchronous and eventually consistent. The app and all of its associated resources (environments, deployments, custom domains) are torn down by a background workflow. A successful response indicates the deletion was enqueued, not that every resource has already been removed.

Apps with delete protection enabled cannot be deleted until protection is disabled.

**Required Permissions**

Your root key must have one of the following permissions:
- `app.*.delete_app` (to delete any app)
- `app.<app_id>.delete_app` (to delete a specific app)


### Example Usage: appNotFound

<!-- UsageSnippet language="typescript" operationID="apps.deleteApp" method="post" path="/v2/apps.deleteApp" example="appNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.deleteApp({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsDeleteApp } from "@unkey/api/funcs/appsDeleteApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsDeleteApp(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsDeleteApp failed:", res.error);
  }
}

run();
```
### Example Usage: deleteById

<!-- UsageSnippet language="typescript" operationID="apps.deleteApp" method="post" path="/v2/apps.deleteApp" example="deleteById" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.deleteApp({
    project: "payments",
    app: "app_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsDeleteApp } from "@unkey/api/funcs/appsDeleteApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsDeleteApp(unkey, {
    project: "payments",
    app: "app_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsDeleteApp failed:", res.error);
  }
}

run();
```
### Example Usage: deleteBySlug

<!-- UsageSnippet language="typescript" operationID="apps.deleteApp" method="post" path="/v2/apps.deleteApp" example="deleteBySlug" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.deleteApp({
    project: "payments",
    app: "payments-service",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsDeleteApp } from "@unkey/api/funcs/appsDeleteApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsDeleteApp(unkey, {
    project: "payments",
    app: "payments-service",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsDeleteApp failed:", res.error);
  }
}

run();
```
### Example Usage: missingPermission

<!-- UsageSnippet language="typescript" operationID="apps.deleteApp" method="post" path="/v2/apps.deleteApp" example="missingPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.deleteApp({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsDeleteApp } from "@unkey/api/funcs/appsDeleteApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsDeleteApp(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsDeleteApp failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="apps.deleteApp" method="post" path="/v2/apps.deleteApp" example="success" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.deleteApp({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsDeleteApp } from "@unkey/api/funcs/appsDeleteApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsDeleteApp(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsDeleteApp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2AppsDeleteAppRequestBody](../../models/components/v2appsdeleteapprequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2AppsDeleteAppResponseBody](../../models/components/v2appsdeleteappresponsebody.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.BadRequestErrorResponse         | 400                                    | application/json                       |
| errors.UnauthorizedErrorResponse       | 401                                    | application/json                       |
| errors.ForbiddenErrorResponse          | 403                                    | application/json                       |
| errors.NotFoundErrorResponse           | 404                                    | application/json                       |
| errors.PreconditionFailedErrorResponse | 412                                    | application/json                       |
| errors.TooManyRequestsErrorResponse    | 429                                    | application/problem+json               |
| errors.InternalServerErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## getApp

Retrieve a single app by its id or slug within a project.

Use this to fetch app details after creation or to verify an app exists before performing operations.

**Required Permissions**

Your root key must have one of the following permissions:
- `app.*.read_app` (to read any app)
- `app.<app_id>.read_app` (to read a specific app)


### Example Usage: app

<!-- UsageSnippet language="typescript" operationID="apps.getApp" method="post" path="/v2/apps.getApp" example="app" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.getApp({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsGetApp } from "@unkey/api/funcs/appsGetApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsGetApp(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsGetApp failed:", res.error);
  }
}

run();
```
### Example Usage: appNotFound

<!-- UsageSnippet language="typescript" operationID="apps.getApp" method="post" path="/v2/apps.getApp" example="appNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.getApp({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsGetApp } from "@unkey/api/funcs/appsGetApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsGetApp(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsGetApp failed:", res.error);
  }
}

run();
```
### Example Usage: getById

<!-- UsageSnippet language="typescript" operationID="apps.getApp" method="post" path="/v2/apps.getApp" example="getById" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.getApp({
    project: "payments",
    app: "app_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsGetApp } from "@unkey/api/funcs/appsGetApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsGetApp(unkey, {
    project: "payments",
    app: "app_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsGetApp failed:", res.error);
  }
}

run();
```
### Example Usage: getBySlug

<!-- UsageSnippet language="typescript" operationID="apps.getApp" method="post" path="/v2/apps.getApp" example="getBySlug" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.getApp({
    project: "payments",
    app: "payments-api",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsGetApp } from "@unkey/api/funcs/appsGetApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsGetApp(unkey, {
    project: "payments",
    app: "payments-api",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsGetApp failed:", res.error);
  }
}

run();
```
### Example Usage: missingPermission

<!-- UsageSnippet language="typescript" operationID="apps.getApp" method="post" path="/v2/apps.getApp" example="missingPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.getApp({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsGetApp } from "@unkey/api/funcs/appsGetApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsGetApp(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsGetApp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2AppsGetAppRequestBody](../../models/components/v2appsgetapprequestbody.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2AppsGetAppResponseBody](../../models/components/v2appsgetappresponsebody.md)\>**

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

## listApps

Retrieve a paginated list of apps within a project.

Use this to enumerate every app in a project. Results are ordered by app id and paginated; when `hasMore` is true, pass the returned `cursor` to fetch the next page.

**Required Permissions**

Your root key must have the following permission:
- `app.*.read_app` (to read apps in any project)


### Example Usage: appList

<!-- UsageSnippet language="typescript" operationID="apps.listApps" method="post" path="/v2/apps.listApps" example="appList" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.listApps({
    project: "proj_1234abcd",
    cursor: "app_1234abcd",
    search: "checkout",
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
import { appsListApps } from "@unkey/api/funcs/appsListApps.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsListApps(unkey, {
    project: "proj_1234abcd",
    cursor: "app_1234abcd",
    search: "checkout",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("appsListApps failed:", res.error);
  }
}

run();
```
### Example Usage: basic

<!-- UsageSnippet language="typescript" operationID="apps.listApps" method="post" path="/v2/apps.listApps" example="basic" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.listApps({
    project: "payments-service",
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
import { appsListApps } from "@unkey/api/funcs/appsListApps.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsListApps(unkey, {
    project: "payments-service",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("appsListApps failed:", res.error);
  }
}

run();
```
### Example Usage: invalidLimit

<!-- UsageSnippet language="typescript" operationID="apps.listApps" method="post" path="/v2/apps.listApps" example="invalidLimit" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.listApps({
    project: "proj_1234abcd",
    cursor: "app_1234abcd",
    search: "checkout",
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
import { appsListApps } from "@unkey/api/funcs/appsListApps.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsListApps(unkey, {
    project: "proj_1234abcd",
    cursor: "app_1234abcd",
    search: "checkout",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("appsListApps failed:", res.error);
  }
}

run();
```
### Example Usage: missingPermission

<!-- UsageSnippet language="typescript" operationID="apps.listApps" method="post" path="/v2/apps.listApps" example="missingPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.listApps({
    project: "proj_1234abcd",
    cursor: "app_1234abcd",
    search: "checkout",
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
import { appsListApps } from "@unkey/api/funcs/appsListApps.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsListApps(unkey, {
    project: "proj_1234abcd",
    cursor: "app_1234abcd",
    search: "checkout",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("appsListApps failed:", res.error);
  }
}

run();
```
### Example Usage: projectNotFound

<!-- UsageSnippet language="typescript" operationID="apps.listApps" method="post" path="/v2/apps.listApps" example="projectNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.listApps({
    project: "proj_1234abcd",
    cursor: "app_1234abcd",
    search: "checkout",
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
import { appsListApps } from "@unkey/api/funcs/appsListApps.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsListApps(unkey, {
    project: "proj_1234abcd",
    cursor: "app_1234abcd",
    search: "checkout",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("appsListApps failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2AppsListAppsRequestBody](../../models/components/v2appslistappsrequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AppsListAppsResponse](../../models/operations/appslistappsresponse.md)\>**

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

## updateApp

Update an existing app, identified by its id.

The app name, slug, default branch, and delete protection setting can be changed. Omitted fields are left unchanged. Changing the slug affects the deployment domains generated for this app.

**Important**: The slug cannot collide with an existing app in the same project. A duplicate slug returns a 409 conflict.

**Required Permissions**

Your root key must have one of the following permissions:
- `app.*.update_app` (to update any app)
- `app.<app_id>.update_app` (to update a specific app)


### Example Usage: app

<!-- UsageSnippet language="typescript" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="app" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.updateApp({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
    defaultBranch: "main",
    deleteProtection: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsUpdateApp } from "@unkey/api/funcs/appsUpdateApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsUpdateApp(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
    defaultBranch: "main",
    deleteProtection: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsUpdateApp failed:", res.error);
  }
}

run();
```
### Example Usage: appExists

<!-- UsageSnippet language="typescript" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="appExists" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.updateApp({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
    defaultBranch: "main",
    deleteProtection: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsUpdateApp } from "@unkey/api/funcs/appsUpdateApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsUpdateApp(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
    defaultBranch: "main",
    deleteProtection: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsUpdateApp failed:", res.error);
  }
}

run();
```
### Example Usage: appNotFound

<!-- UsageSnippet language="typescript" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="appNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.updateApp({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
    defaultBranch: "main",
    deleteProtection: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsUpdateApp } from "@unkey/api/funcs/appsUpdateApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsUpdateApp(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
    defaultBranch: "main",
    deleteProtection: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsUpdateApp failed:", res.error);
  }
}

run();
```
### Example Usage: changeSlug

<!-- UsageSnippet language="typescript" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="changeSlug" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.updateApp({
    project: "payments",
    app: "payments-service",
    slug: "payments-api",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsUpdateApp } from "@unkey/api/funcs/appsUpdateApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsUpdateApp(unkey, {
    project: "payments",
    app: "payments-service",
    slug: "payments-api",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsUpdateApp failed:", res.error);
  }
}

run();
```
### Example Usage: missingPermission

<!-- UsageSnippet language="typescript" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="missingPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.updateApp({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
    defaultBranch: "main",
    deleteProtection: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsUpdateApp } from "@unkey/api/funcs/appsUpdateApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsUpdateApp(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    name: "Payments API",
    slug: "proj_1234abcd",
    defaultBranch: "main",
    deleteProtection: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsUpdateApp failed:", res.error);
  }
}

run();
```
### Example Usage: rename

<!-- UsageSnippet language="typescript" operationID="apps.updateApp" method="post" path="/v2/apps.updateApp" example="rename" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.apps.updateApp({
    project: "payments",
    app: "app_1234abcd",
    name: "Payments API",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { appsUpdateApp } from "@unkey/api/funcs/appsUpdateApp.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await appsUpdateApp(unkey, {
    project: "payments",
    app: "app_1234abcd",
    name: "Payments API",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appsUpdateApp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2AppsUpdateAppRequestBody](../../models/components/v2appsupdateapprequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2AppsUpdateAppResponseBody](../../models/components/v2appsupdateappresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.ConflictErrorResponse        | 409                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |