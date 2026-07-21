# Deployments

## Overview

Deployment operations

### Available Operations

* [createDeployment](#createdeployment) - Create deployment
* [getDeployment](#getdeployment) - Get deployment
* [listDeployments](#listdeployments) - List deployments
* [promoteDeployment](#promotedeployment) - Promote deployment
* [rollbackDeployment](#rollbackdeployment) - Rollback deployment
* [startDeployment](#startdeployment) - Start deployment
* [stopDeployment](#stopdeployment) - Stop deployment

## createDeployment

Create a deployment for an app in a project.

Provide exactly one source:
- `image`: deploy a prebuilt Docker image as-is (no build).
- `git`: build and deploy from the app's connected GitHub repository, a branch, a specific commit, or a fork commit. Requires the app to have a repository connected.
- `deployment`: re-run an existing deployment by its id. Git-connected apps rebuild from the recorded commit; other apps reuse the recorded image.

Returns immediately with a `deploymentId`. The build and rollout run asynchronously — poll `deployments.getDeployment` to watch status until it is ready.

**Authentication**: requires a root key with permission to create deployments.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deployments.createDeployment" method="post" path="/v2/deployments.createDeployment" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.createDeployment({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    git: {
      branch: "main",
      commitSha: "9f2c1a7",
      repository: "contributor/acme-api",
    },
    image: {
      dockerImage: "ghcr.io/acme/api:v1.2.3",
    },
    deployment: {
      deploymentId: "proj_1234abcd",
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
import { deploymentsCreateDeployment } from "@unkey/api/funcs/deploymentsCreateDeployment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsCreateDeployment(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    git: {
      branch: "main",
      commitSha: "9f2c1a7",
      repository: "contributor/acme-api",
    },
    image: {
      dockerImage: "ghcr.io/acme/api:v1.2.3",
    },
    deployment: {
      deploymentId: "proj_1234abcd",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deploymentsCreateDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2DeploymentsCreateDeploymentRequestBodyUnion](../../models/components/v2deploymentscreatedeploymentrequestbodyunion.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2DeploymentsCreateDeploymentResponseBody](../../models/components/v2deploymentscreatedeploymentresponsebody.md)\>**

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

## getDeployment

Retrieve a single deployment by its id.

Use this to check a deployment's status after creating it, or to inspect the
runtime configuration of an existing deployment.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.read_deployment` (to read deployments in any environment)
- `environment.<environment_id>.read_deployment` (to read deployments in a specific environment)


### Example Usage: deployment

<!-- UsageSnippet language="typescript" operationID="deployments.getDeployment" method="post" path="/v2/deployments.getDeployment" example="deployment" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.getDeployment({
    deploymentId: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { deploymentsGetDeployment } from "@unkey/api/funcs/deploymentsGetDeployment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsGetDeployment(unkey, {
    deploymentId: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deploymentsGetDeployment failed:", res.error);
  }
}

run();
```
### Example Usage: deploymentNotFound

<!-- UsageSnippet language="typescript" operationID="deployments.getDeployment" method="post" path="/v2/deployments.getDeployment" example="deploymentNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.getDeployment({
    deploymentId: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { deploymentsGetDeployment } from "@unkey/api/funcs/deploymentsGetDeployment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsGetDeployment(unkey, {
    deploymentId: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deploymentsGetDeployment failed:", res.error);
  }
}

run();
```
### Example Usage: getById

<!-- UsageSnippet language="typescript" operationID="deployments.getDeployment" method="post" path="/v2/deployments.getDeployment" example="getById" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.getDeployment({
    deploymentId: "d_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { deploymentsGetDeployment } from "@unkey/api/funcs/deploymentsGetDeployment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsGetDeployment(unkey, {
    deploymentId: "d_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deploymentsGetDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2DeploymentsGetDeploymentRequestBody](../../models/components/v2deploymentsgetdeploymentrequestbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2DeploymentsGetDeploymentResponseBody](../../models/components/v2deploymentsgetdeploymentresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## listDeployments

Retrieve a paginated list of deployments within a workspace, newest first.

Filter by project, app, environment, and lifecycle status. All filters are
optional; with none set, every deployment in the workspace is returned.
Filters nest: `app` requires `project`, and `environment` requires both
`project` and `app`. Results are paginated; when `hasMore` is true, pass the
returned `cursor` to fetch the next page.

**Required Permissions**

Your root key must have the `environment.*.read_deployment` permission.
Listing spans environments, so a grant on a single environment is not
sufficient.


### Example Usage: byEnvironment

<!-- UsageSnippet language="typescript" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="byEnvironment" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.listDeployments({
    project: "payments-service",
    app: "payments-api",
    environment: "production",
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
import { deploymentsListDeployments } from "@unkey/api/funcs/deploymentsListDeployments.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsListDeployments(unkey, {
    project: "payments-service",
    app: "payments-api",
    environment: "production",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("deploymentsListDeployments failed:", res.error);
  }
}

run();
```
### Example Usage: deploymentList

<!-- UsageSnippet language="typescript" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="deploymentList" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.listDeployments({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    status: [
      "ready",
      "failed",
    ],
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
import { deploymentsListDeployments } from "@unkey/api/funcs/deploymentsListDeployments.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsListDeployments(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    status: [
      "ready",
      "failed",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("deploymentsListDeployments failed:", res.error);
  }
}

run();
```
### Example Usage: missingParent

<!-- UsageSnippet language="typescript" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="missingParent" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.listDeployments({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    status: [
      "ready",
      "failed",
    ],
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
import { deploymentsListDeployments } from "@unkey/api/funcs/deploymentsListDeployments.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsListDeployments(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    status: [
      "ready",
      "failed",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("deploymentsListDeployments failed:", res.error);
  }
}

run();
```
### Example Usage: missingPermission

<!-- UsageSnippet language="typescript" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="missingPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.listDeployments({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    status: [
      "ready",
      "failed",
    ],
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
import { deploymentsListDeployments } from "@unkey/api/funcs/deploymentsListDeployments.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsListDeployments(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    status: [
      "ready",
      "failed",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("deploymentsListDeployments failed:", res.error);
  }
}

run();
```
### Example Usage: projectNotFound

<!-- UsageSnippet language="typescript" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="projectNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.listDeployments({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    status: [
      "ready",
      "failed",
    ],
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
import { deploymentsListDeployments } from "@unkey/api/funcs/deploymentsListDeployments.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsListDeployments(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    status: [
      "ready",
      "failed",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("deploymentsListDeployments failed:", res.error);
  }
}

run();
```
### Example Usage: workspaceWide

<!-- UsageSnippet language="typescript" operationID="deployments.listDeployments" method="post" path="/v2/deployments.listDeployments" example="workspaceWide" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.listDeployments({});

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
import { deploymentsListDeployments } from "@unkey/api/funcs/deploymentsListDeployments.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsListDeployments(unkey, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("deploymentsListDeployments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2DeploymentsListDeploymentsRequestBody](../../models/components/v2deploymentslistdeploymentsrequestbody.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeploymentsListDeploymentsResponse](../../models/operations/deploymentslistdeploymentsresponse.md)\>**

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

## promoteDeployment

Promote a deployment to become the current deployment for its environment.
All sticky domains are reassigned from the current deployment to the
promoted one, and the previous deployment is scheduled for standby.

The deployment must be ready, not already shutting down, belong to the
production environment, and its app must already have a current deployment.
Promoting the deployment that is already current fails, unless the app is in
a rolled-back state, in which case promoting the current deployment
confirms the rollback and re-enables automatic promotion of future
deployments.

Promotion runs as a durable workflow: this endpoint returns once the
promotion is accepted. Poll `getDeployment` or `listDeployments` to observe
the result.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.promote_deployment` (to promote deployments in any environment)
- `environment.<environment_id>.promote_deployment` (to promote deployments in a specific environment)


### Example Usage: accepted

<!-- UsageSnippet language="typescript" operationID="deployments.promoteDeployment" method="post" path="/v2/deployments.promoteDeployment" example="accepted" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.promoteDeployment({
    deploymentId: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { deploymentsPromoteDeployment } from "@unkey/api/funcs/deploymentsPromoteDeployment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsPromoteDeployment(unkey, {
    deploymentId: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deploymentsPromoteDeployment failed:", res.error);
  }
}

run();
```
### Example Usage: promote

<!-- UsageSnippet language="typescript" operationID="deployments.promoteDeployment" method="post" path="/v2/deployments.promoteDeployment" example="promote" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.promoteDeployment({
    deploymentId: "d_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { deploymentsPromoteDeployment } from "@unkey/api/funcs/deploymentsPromoteDeployment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsPromoteDeployment(unkey, {
    deploymentId: "d_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deploymentsPromoteDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2DeploymentsPromoteDeploymentRequestBody](../../models/components/v2deploymentspromotedeploymentrequestbody.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2DeploymentsPromoteDeploymentResponseBody](../../models/components/v2deploymentspromotedeploymentresponsebody.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.BadRequestErrorResponse         | 400                                    | application/json                       |
| errors.UnauthorizedErrorResponse       | 401                                    | application/json                       |
| errors.NotFoundErrorResponse           | 404                                    | application/json                       |
| errors.PreconditionFailedErrorResponse | 412                                    | application/json                       |
| errors.TooManyRequestsErrorResponse    | 429                                    | application/problem+json               |
| errors.InternalServerErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## rollbackDeployment

Roll live traffic back to a previous deployment. `deploymentId` is the
deployment to roll back TO; the app's current deployment is used as
the rollback source automatically.

The target deployment must be ready, not already shutting down, belong to
the production environment, and must not itself be the current deployment.

After a rollback the app is marked as rolled back, which prevents new
deployments from automatically taking over live traffic. Promote the
rolled-back deployment (or a newer one) to clear this state.

Rollback runs as a durable workflow: this endpoint returns once the
rollback is accepted. Poll `getDeployment` or `listDeployments` to observe
the result.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.rollback_deployment` (to roll back deployments in any environment)
- `environment.<environment_id>.rollback_deployment` (to roll back deployments in a specific environment)


### Example Usage: accepted

<!-- UsageSnippet language="typescript" operationID="deployments.rollbackDeployment" method="post" path="/v2/deployments.rollbackDeployment" example="accepted" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.rollbackDeployment({
    deploymentId: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { deploymentsRollbackDeployment } from "@unkey/api/funcs/deploymentsRollbackDeployment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsRollbackDeployment(unkey, {
    deploymentId: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deploymentsRollbackDeployment failed:", res.error);
  }
}

run();
```
### Example Usage: rollback

<!-- UsageSnippet language="typescript" operationID="deployments.rollbackDeployment" method="post" path="/v2/deployments.rollbackDeployment" example="rollback" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.rollbackDeployment({
    deploymentId: "d_prev5678",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { deploymentsRollbackDeployment } from "@unkey/api/funcs/deploymentsRollbackDeployment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsRollbackDeployment(unkey, {
    deploymentId: "d_prev5678",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deploymentsRollbackDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2DeploymentsRollbackDeploymentRequestBody](../../models/components/v2deploymentsrollbackdeploymentrequestbody.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2DeploymentsRollbackDeploymentResponseBody](../../models/components/v2deploymentsrollbackdeploymentresponsebody.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.BadRequestErrorResponse         | 400                                    | application/json                       |
| errors.UnauthorizedErrorResponse       | 401                                    | application/json                       |
| errors.NotFoundErrorResponse           | 404                                    | application/json                       |
| errors.PreconditionFailedErrorResponse | 412                                    | application/json                       |
| errors.TooManyRequestsErrorResponse    | 429                                    | application/problem+json               |
| errors.InternalServerErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## startDeployment

Start a deployment that was previously stopped with `stopDeployment`, so it
serves traffic again. The deployment keeps the configuration it had when it
was stopped; nothing is rebuilt or redeployed.

The deployment must currently be stopped, and must belong to a
non-production environment. Production deployments are never stopped, so
they cannot be started.

Starting is asynchronous: this endpoint only enqueues the start and returns
immediately. Poll `getDeployment` until the status reaches `ready`.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.start_deployment` (to start deployments in any environment)
- `environment.<environment_id>.start_deployment` (to start deployments in a specific environment)


### Example Usage: accepted

<!-- UsageSnippet language="typescript" operationID="deployments.startDeployment" method="post" path="/v2/deployments.startDeployment" example="accepted" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.startDeployment({
    deploymentId: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { deploymentsStartDeployment } from "@unkey/api/funcs/deploymentsStartDeployment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsStartDeployment(unkey, {
    deploymentId: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deploymentsStartDeployment failed:", res.error);
  }
}

run();
```
### Example Usage: start

<!-- UsageSnippet language="typescript" operationID="deployments.startDeployment" method="post" path="/v2/deployments.startDeployment" example="start" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.startDeployment({
    deploymentId: "d_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { deploymentsStartDeployment } from "@unkey/api/funcs/deploymentsStartDeployment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsStartDeployment(unkey, {
    deploymentId: "d_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deploymentsStartDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2DeploymentsStartDeploymentRequestBody](../../models/components/v2deploymentsstartdeploymentrequestbody.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2DeploymentsStartDeploymentResponseBody](../../models/components/v2deploymentsstartdeploymentresponsebody.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.BadRequestErrorResponse         | 400                                    | application/json                       |
| errors.UnauthorizedErrorResponse       | 401                                    | application/json                       |
| errors.NotFoundErrorResponse           | 404                                    | application/json                       |
| errors.PreconditionFailedErrorResponse | 412                                    | application/json                       |
| errors.TooManyRequestsErrorResponse    | 429                                    | application/problem+json               |
| errors.InternalServerErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## stopDeployment

Stop a running preview deployment. Stopped deployments keep their
configuration and can be resumed later with `startDeployment`.

The deployment must be ready and running, and must belong to a
non-production environment; production deployments cannot be stopped.
A deployment that is already draining from a previous stop is rejected
with a precondition error.

Stopping is asynchronous: this endpoint only enqueues the stop and returns
immediately. Poll `getDeployment` until the status reaches `stopped`.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.stop_deployment` (to stop deployments in any environment)
- `environment.<environment_id>.stop_deployment` (to stop deployments in a specific environment)


### Example Usage: accepted

<!-- UsageSnippet language="typescript" operationID="deployments.stopDeployment" method="post" path="/v2/deployments.stopDeployment" example="accepted" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.stopDeployment({
    deploymentId: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { deploymentsStopDeployment } from "@unkey/api/funcs/deploymentsStopDeployment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsStopDeployment(unkey, {
    deploymentId: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deploymentsStopDeployment failed:", res.error);
  }
}

run();
```
### Example Usage: stop

<!-- UsageSnippet language="typescript" operationID="deployments.stopDeployment" method="post" path="/v2/deployments.stopDeployment" example="stop" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.deployments.stopDeployment({
    deploymentId: "d_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { deploymentsStopDeployment } from "@unkey/api/funcs/deploymentsStopDeployment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await deploymentsStopDeployment(unkey, {
    deploymentId: "d_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deploymentsStopDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2DeploymentsStopDeploymentRequestBody](../../models/components/v2deploymentsstopdeploymentrequestbody.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2DeploymentsStopDeploymentResponseBody](../../models/components/v2deploymentsstopdeploymentresponsebody.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.BadRequestErrorResponse         | 400                                    | application/json                       |
| errors.UnauthorizedErrorResponse       | 401                                    | application/json                       |
| errors.NotFoundErrorResponse           | 404                                    | application/json                       |
| errors.PreconditionFailedErrorResponse | 412                                    | application/json                       |
| errors.TooManyRequestsErrorResponse    | 429                                    | application/problem+json               |
| errors.InternalServerErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |