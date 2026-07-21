# Environments

## Overview

Environment management operations

### Available Operations

* [getEnvironment](#getenvironment) - Get environment
* [listEnvironmentVariables](#listenvironmentvariables) - List environment variables
* [listEnvironments](#listenvironments) - List environments
* [removeEnvironmentVariables](#removeenvironmentvariables) - Remove environment variables
* [setEnvironmentVariables](#setenvironmentvariables) - Set environment variables
* [updateSettings](#updatesettings) - Update environment settings

## getEnvironment

Retrieve a single environment by its id.

Use this to fetch environment details after creation or to verify an environment exists before performing operations.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.read_environment` (to read any environment)
- `environment.<environment_id>.read_environment` (to read a specific environment)


### Example Usage: environment

<!-- UsageSnippet language="typescript" operationID="environments.getEnvironment" method="post" path="/v2/environments.getEnvironment" example="environment" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.getEnvironment({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { environmentsGetEnvironment } from "@unkey/api/funcs/environmentsGetEnvironment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsGetEnvironment(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsGetEnvironment failed:", res.error);
  }
}

run();
```
### Example Usage: environmentNotFound

<!-- UsageSnippet language="typescript" operationID="environments.getEnvironment" method="post" path="/v2/environments.getEnvironment" example="environmentNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.getEnvironment({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { environmentsGetEnvironment } from "@unkey/api/funcs/environmentsGetEnvironment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsGetEnvironment(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsGetEnvironment failed:", res.error);
  }
}

run();
```
### Example Usage: getById

<!-- UsageSnippet language="typescript" operationID="environments.getEnvironment" method="post" path="/v2/environments.getEnvironment" example="getById" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.getEnvironment({
    project: "payments",
    app: "payments-api",
    environment: "env_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { environmentsGetEnvironment } from "@unkey/api/funcs/environmentsGetEnvironment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsGetEnvironment(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "env_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsGetEnvironment failed:", res.error);
  }
}

run();
```
### Example Usage: getBySlug

<!-- UsageSnippet language="typescript" operationID="environments.getEnvironment" method="post" path="/v2/environments.getEnvironment" example="getBySlug" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.getEnvironment({
    project: "payments",
    app: "payments-api",
    environment: "production",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { environmentsGetEnvironment } from "@unkey/api/funcs/environmentsGetEnvironment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsGetEnvironment(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsGetEnvironment failed:", res.error);
  }
}

run();
```
### Example Usage: missingPermission

<!-- UsageSnippet language="typescript" operationID="environments.getEnvironment" method="post" path="/v2/environments.getEnvironment" example="missingPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.getEnvironment({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { environmentsGetEnvironment } from "@unkey/api/funcs/environmentsGetEnvironment.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsGetEnvironment(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsGetEnvironment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2EnvironmentsGetEnvironmentRequestBody](../../models/components/v2environmentsgetenvironmentrequestbody.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2EnvironmentsGetEnvironmentResponseBody](../../models/components/v2environmentsgetenvironmentresponsebody.md)\>**

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

## listEnvironmentVariables

Retrieve the environment variables for an environment.

Identify the environment by its project, app, and environment identifiers.
Results are ordered by variable id and paginated; when `hasMore` is true,
pass the returned `cursor` to fetch the next page.

`recoverable` variables are returned with their decrypted plaintext value.
`writeonly` variables never expose a value: only the key, kind, and
description are returned.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.read_environment_variables` (for any environment)
- `environment.<environment_id>.read_environment_variables` (for a specific environment)


### Example Usage

<!-- UsageSnippet language="typescript" operationID="environments.listEnvironmentVariables" method="post" path="/v2/environments.listEnvironmentVariables" example="list" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.listEnvironmentVariables({
    project: "payments",
    app: "payments-api",
    environment: "production",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { environmentsListEnvironmentVariables } from "@unkey/api/funcs/environmentsListEnvironmentVariables.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsListEnvironmentVariables(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsListEnvironmentVariables failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2EnvironmentsListEnvironmentVariablesRequestBody](../../models/components/v2environmentslistenvironmentvariablesrequestbody.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2EnvironmentsListEnvironmentVariablesResponseBody](../../models/components/v2environmentslistenvironmentvariablesresponsebody.md)\>**

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

## listEnvironments

Retrieve the environments within an app.

Use this to enumerate every environment in an app. Identify the app by its project slug and app slug. Results are ordered by environment id. An app has only a handful of environments, so all of them are returned in a single response.

**Required Permissions**

Your root key must have the following permission:
- `environment.*.read_environment` (to read environments in any app)


### Example Usage: appNotFound

<!-- UsageSnippet language="typescript" operationID="environments.listEnvironments" method="post" path="/v2/environments.listEnvironments" example="appNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.listEnvironments({
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
import { environmentsListEnvironments } from "@unkey/api/funcs/environmentsListEnvironments.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsListEnvironments(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsListEnvironments failed:", res.error);
  }
}

run();
```
### Example Usage: basic

<!-- UsageSnippet language="typescript" operationID="environments.listEnvironments" method="post" path="/v2/environments.listEnvironments" example="basic" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.listEnvironments({
    project: "payments-service",
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
import { environmentsListEnvironments } from "@unkey/api/funcs/environmentsListEnvironments.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsListEnvironments(unkey, {
    project: "payments-service",
    app: "payments-api",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsListEnvironments failed:", res.error);
  }
}

run();
```
### Example Usage: environmentList

<!-- UsageSnippet language="typescript" operationID="environments.listEnvironments" method="post" path="/v2/environments.listEnvironments" example="environmentList" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.listEnvironments({
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
import { environmentsListEnvironments } from "@unkey/api/funcs/environmentsListEnvironments.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsListEnvironments(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsListEnvironments failed:", res.error);
  }
}

run();
```
### Example Usage: missingApp

<!-- UsageSnippet language="typescript" operationID="environments.listEnvironments" method="post" path="/v2/environments.listEnvironments" example="missingApp" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.listEnvironments({
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
import { environmentsListEnvironments } from "@unkey/api/funcs/environmentsListEnvironments.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsListEnvironments(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsListEnvironments failed:", res.error);
  }
}

run();
```
### Example Usage: missingPermission

<!-- UsageSnippet language="typescript" operationID="environments.listEnvironments" method="post" path="/v2/environments.listEnvironments" example="missingPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.listEnvironments({
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
import { environmentsListEnvironments } from "@unkey/api/funcs/environmentsListEnvironments.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsListEnvironments(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsListEnvironments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2EnvironmentsListEnvironmentsRequestBody](../../models/components/v2environmentslistenvironmentsrequestbody.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2EnvironmentsListEnvironmentsResponseBody](../../models/components/v2environmentslistenvironmentsresponsebody.md)\>**

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

## removeEnvironmentVariables

Remove environment variables from an environment in a single atomic request.

This operation only deletes keys by name. Keys in the payload that exist are
removed; keys that are not present are ignored, since their absence already
matches the requested state. To replace or update values, use
`setEnvironmentVariables` instead. The whole operation is atomic: if any part
fails the environment is left unchanged.

Duplicate keys in the payload collapse to a single removal. Values are never
read or returned.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.remove_environment_variables` (for any environment)
- `environment.<environment_id>.remove_environment_variables` (for a specific environment)


### Example Usage

<!-- UsageSnippet language="typescript" operationID="environments.removeEnvironmentVariables" method="post" path="/v2/environments.removeEnvironmentVariables" example="removeVariables" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.removeEnvironmentVariables({
    project: "payments",
    app: "payments-api",
    environment: "production",
    variables: [
      "LOG_LEVEL",
      "DEBUG_MODE",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { environmentsRemoveEnvironmentVariables } from "@unkey/api/funcs/environmentsRemoveEnvironmentVariables.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsRemoveEnvironmentVariables(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
    variables: [
      "LOG_LEVEL",
      "DEBUG_MODE",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsRemoveEnvironmentVariables failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2EnvironmentsRemoveEnvironmentVariablesRequestBody](../../models/components/v2environmentsremoveenvironmentvariablesrequestbody.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2EnvironmentsRemoveEnvironmentVariablesResponseBody](../../models/components/v2environmentsremoveenvironmentvariablesresponsebody.md)\>**

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

## setEnvironmentVariables

Create or update environment variables for an environment in a single atomic
request.

By default this is an upsert: each variable in the payload is created if new
or fully overwritten if the key already exists, and any variable not in the
payload is left untouched. This lets you change one variable without
re-sending the others, which matters for write-only secrets you can no longer
read back.

Set `prune: true` to make it a full replace instead: after upserting, every
variable not in the payload is deleted. Sending `prune: true` with an empty
`variables` list resets the environment by deleting every variable.

Each variable is written exactly as sent, never merged, so omitted optional
fields fall back to their defaults rather than the previous value. Values are
always encrypted at rest. Set `kind: recoverable` to allow a value to be read
back; it defaults to `writeonly`, which can never be read back through the API.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.set_environment_variables` (for any environment)
- `environment.<environment_id>.set_environment_variables` (for a specific environment)


### Example Usage: replace

<!-- UsageSnippet language="typescript" operationID="environments.setEnvironmentVariables" method="post" path="/v2/environments.setEnvironmentVariables" example="replace" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.setEnvironmentVariables({
    project: "payments",
    app: "payments-api",
    environment: "production",
    variables: [
      {
        key: "DATABASE_URL",
        value: "postgresql://user:pass@host:5432/db",
      },
      {
        key: "LOG_LEVEL",
        value: "debug",
        kind: "recoverable",
        description: "Application log verbosity",
      },
    ],
    prune: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { environmentsSetEnvironmentVariables } from "@unkey/api/funcs/environmentsSetEnvironmentVariables.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsSetEnvironmentVariables(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
    variables: [
      {
        key: "DATABASE_URL",
        value: "postgresql://user:pass@host:5432/db",
      },
      {
        key: "LOG_LEVEL",
        value: "debug",
        kind: "recoverable",
        description: "Application log verbosity",
      },
    ],
    prune: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsSetEnvironmentVariables failed:", res.error);
  }
}

run();
```
### Example Usage: reset

<!-- UsageSnippet language="typescript" operationID="environments.setEnvironmentVariables" method="post" path="/v2/environments.setEnvironmentVariables" example="reset" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.setEnvironmentVariables({
    project: "payments",
    app: "payments-api",
    environment: "production",
    variables: [],
    prune: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { environmentsSetEnvironmentVariables } from "@unkey/api/funcs/environmentsSetEnvironmentVariables.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsSetEnvironmentVariables(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
    variables: [],
    prune: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsSetEnvironmentVariables failed:", res.error);
  }
}

run();
```
### Example Usage: upsert

<!-- UsageSnippet language="typescript" operationID="environments.setEnvironmentVariables" method="post" path="/v2/environments.setEnvironmentVariables" example="upsert" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.setEnvironmentVariables({
    project: "payments",
    app: "payments-api",
    environment: "production",
    variables: [
      {
        key: "LOG_LEVEL",
        value: "info",
        kind: "recoverable",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { environmentsSetEnvironmentVariables } from "@unkey/api/funcs/environmentsSetEnvironmentVariables.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsSetEnvironmentVariables(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
    variables: [
      {
        key: "LOG_LEVEL",
        value: "info",
        kind: "recoverable",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsSetEnvironmentVariables failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2EnvironmentsSetEnvironmentVariablesRequestBody](../../models/components/v2environmentssetenvironmentvariablesrequestbody.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2EnvironmentsSetEnvironmentVariablesResponseBody](../../models/components/v2environmentssetenvironmentvariablesresponsebody.md)\>**

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

## updateSettings

Update the build, runtime, and regional settings for an environment.

All settings fields are optional. Omit a field to leave it unchanged. For
nullable fields (`dockerfile`, `healthcheck`, `openapiSpecPath`), send null
to clear the value. When `regions` is present it replaces the full set of
regions for the environment.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.update_environment` (to update any environment)
- `environment.<environment_id>.update_environment` (to update a specific environment)


### Example Usage: environmentNotFound

<!-- UsageSnippet language="typescript" operationID="environments.updateSettings" method="post" path="/v2/environments.updateSettings" example="environmentNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.updateSettings({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    dockerfile: "./Dockerfile",
    rootDirectory: ".",
    buildCommand: "pnpm --filter api build",
    autoDeploy: true,
    port: 8080,
    vCpus: 1,
    memoryMib: 512,
    storageMib: 1024,
    healthcheck: {
      method: "GET",
      path: "/healthz",
      intervalSeconds: 10,
      timeoutSeconds: 2,
      failureThreshold: 3,
      initialDelaySeconds: 5,
    },
    shutdownSignal: "SIGTERM",
    upstreamProtocol: "http1",
    openapiSpecPath: "/openapi.yaml",
    regions: [
      {
        name: "us-east-1",
        replicas: {
          min: 1,
          max: 3,
        },
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { environmentsUpdateSettings } from "@unkey/api/funcs/environmentsUpdateSettings.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsUpdateSettings(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    dockerfile: "./Dockerfile",
    rootDirectory: ".",
    buildCommand: "pnpm --filter api build",
    autoDeploy: true,
    port: 8080,
    vCpus: 1,
    memoryMib: 512,
    storageMib: 1024,
    healthcheck: {
      method: "GET",
      path: "/healthz",
      intervalSeconds: 10,
      timeoutSeconds: 2,
      failureThreshold: 3,
      initialDelaySeconds: 5,
    },
    shutdownSignal: "SIGTERM",
    upstreamProtocol: "http1",
    openapiSpecPath: "/openapi.yaml",
    regions: [
      {
        name: "us-east-1",
        replicas: {
          min: 1,
          max: 3,
        },
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsUpdateSettings failed:", res.error);
  }
}

run();
```
### Example Usage: missingPermission

<!-- UsageSnippet language="typescript" operationID="environments.updateSettings" method="post" path="/v2/environments.updateSettings" example="missingPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.updateSettings({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    dockerfile: "./Dockerfile",
    rootDirectory: ".",
    buildCommand: "pnpm --filter api build",
    autoDeploy: true,
    port: 8080,
    vCpus: 1,
    memoryMib: 512,
    storageMib: 1024,
    healthcheck: {
      method: "GET",
      path: "/healthz",
      intervalSeconds: 10,
      timeoutSeconds: 2,
      failureThreshold: 3,
      initialDelaySeconds: 5,
    },
    shutdownSignal: "SIGTERM",
    upstreamProtocol: "http1",
    openapiSpecPath: "/openapi.yaml",
    regions: [
      {
        name: "us-east-1",
        replicas: {
          min: 1,
          max: 3,
        },
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { environmentsUpdateSettings } from "@unkey/api/funcs/environmentsUpdateSettings.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsUpdateSettings(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    dockerfile: "./Dockerfile",
    rootDirectory: ".",
    buildCommand: "pnpm --filter api build",
    autoDeploy: true,
    port: 8080,
    vCpus: 1,
    memoryMib: 512,
    storageMib: 1024,
    healthcheck: {
      method: "GET",
      path: "/healthz",
      intervalSeconds: 10,
      timeoutSeconds: 2,
      failureThreshold: 3,
      initialDelaySeconds: 5,
    },
    shutdownSignal: "SIGTERM",
    upstreamProtocol: "http1",
    openapiSpecPath: "/openapi.yaml",
    regions: [
      {
        name: "us-east-1",
        replicas: {
          min: 1,
          max: 3,
        },
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsUpdateSettings failed:", res.error);
  }
}

run();
```
### Example Usage: setRegions

<!-- UsageSnippet language="typescript" operationID="environments.updateSettings" method="post" path="/v2/environments.updateSettings" example="setRegions" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.updateSettings({
    project: "payments",
    app: "payments-api",
    environment: "production",
    regions: [
      {
        name: "us-east-1",
        replicas: {
          min: 1,
          max: 3,
        },
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { environmentsUpdateSettings } from "@unkey/api/funcs/environmentsUpdateSettings.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsUpdateSettings(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
    regions: [
      {
        name: "us-east-1",
        replicas: {
          min: 1,
          max: 3,
        },
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsUpdateSettings failed:", res.error);
  }
}

run();
```
### Example Usage: setRuntime

<!-- UsageSnippet language="typescript" operationID="environments.updateSettings" method="post" path="/v2/environments.updateSettings" example="setRuntime" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.updateSettings({
    project: "payments",
    app: "payments-api",
    environment: "production",
    vCpus: 2,
    memoryMib: 1024,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { environmentsUpdateSettings } from "@unkey/api/funcs/environmentsUpdateSettings.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsUpdateSettings(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
    vCpus: 2,
    memoryMib: 1024,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsUpdateSettings failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="environments.updateSettings" method="post" path="/v2/environments.updateSettings" example="success" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.environments.updateSettings({
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    dockerfile: "./Dockerfile",
    rootDirectory: ".",
    buildCommand: "pnpm --filter api build",
    autoDeploy: true,
    port: 8080,
    vCpus: 1,
    memoryMib: 512,
    storageMib: 1024,
    healthcheck: {
      method: "GET",
      path: "/healthz",
      intervalSeconds: 10,
      timeoutSeconds: 2,
      failureThreshold: 3,
      initialDelaySeconds: 5,
    },
    shutdownSignal: "SIGTERM",
    upstreamProtocol: "http1",
    openapiSpecPath: "/openapi.yaml",
    regions: [
      {
        name: "us-east-1",
        replicas: {
          min: 1,
          max: 3,
        },
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { environmentsUpdateSettings } from "@unkey/api/funcs/environmentsUpdateSettings.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await environmentsUpdateSettings(unkey, {
    project: "proj_1234abcd",
    app: "proj_1234abcd",
    environment: "proj_1234abcd",
    dockerfile: "./Dockerfile",
    rootDirectory: ".",
    buildCommand: "pnpm --filter api build",
    autoDeploy: true,
    port: 8080,
    vCpus: 1,
    memoryMib: 512,
    storageMib: 1024,
    healthcheck: {
      method: "GET",
      path: "/healthz",
      intervalSeconds: 10,
      timeoutSeconds: 2,
      failureThreshold: 3,
      initialDelaySeconds: 5,
    },
    shutdownSignal: "SIGTERM",
    upstreamProtocol: "http1",
    openapiSpecPath: "/openapi.yaml",
    regions: [
      {
        name: "us-east-1",
        replicas: {
          min: 1,
          max: 3,
        },
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentsUpdateSettings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2EnvironmentsUpdateSettingsRequestBody](../../models/components/v2environmentsupdatesettingsrequestbody.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2EnvironmentsUpdateSettingsResponseBody](../../models/components/v2environmentsupdatesettingsresponsebody.md)\>**

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