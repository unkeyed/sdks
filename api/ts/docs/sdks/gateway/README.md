# Gateway

## Overview

Gateway policy operations

### Available Operations

* [listPolicies](#listpolicies) - List policies
* [setPolicies](#setpolicies) - Set policies
* [updatePolicy](#updatepolicy) - Update policy

## listPolicies

Retrieve an environment's gateway policies in evaluation order: the
gateway evaluates them top to bottom and the first rejection
short-circuits the request.

The full policy list is returned in a single response.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.read_policies` (for any environment)
- `environment.<environment_id>.read_policies` (for a specific environment)


### Example Usage

<!-- UsageSnippet language="typescript" operationID="gateway.listPolicies" method="post" path="/v2/gateway.listPolicies" example="list" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.gateway.listPolicies({
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
import { gatewayListPolicies } from "@unkey/api/funcs/gatewayListPolicies.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await gatewayListPolicies(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatewayListPolicies failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2GatewayListPoliciesRequestBody](../../models/components/v2gatewaylistpoliciesrequestbody.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2GatewayListPoliciesResponseBody](../../models/components/v2gatewaylistpoliciesresponsebody.md)\>**

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

## setPolicies

Replace an environment's gateway policies in a single atomic request.
Policies run at the edge before requests reach your app: verify API keys,
rate limit, block requests outright, or validate them against your
OpenAPI spec.

Policies are an ordered list: the gateway evaluates them top to bottom
and the first rejection short-circuits the request.

Each policy sets exactly one of `keyauth`, `ratelimit`, `firewall` or
`openapi`, plus optional `match` expressions restricting which requests
it applies to.

Every call is a full replace: the environment's policies become exactly
the request list in the given order, and the server generates a fresh id
for each one. An empty list removes all policies. The operation is
atomic: if any policy is invalid, nothing is written.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.set_policies` (for any environment)
- `environment.<environment_id>.set_policies` (for a specific environment)


### Example Usage: matchers

<!-- UsageSnippet language="typescript" operationID="gateway.setPolicies" method="post" path="/v2/gateway.setPolicies" example="matchers" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.gateway.setPolicies({
    project: "payments",
    app: "payments-api",
    environment: "production",
    policies: [
      {
        name: "Block internal paths",
        enabled: true,
        match: [
          {
            path: {
              path: {
                prefix: "/internal/",
              },
            },
          },
        ],
        firewall: {
          action: "ACTION_DENY",
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
import { gatewaySetPolicies } from "@unkey/api/funcs/gatewaySetPolicies.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await gatewaySetPolicies(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
    policies: [
      {
        name: "Block internal paths",
        enabled: true,
        match: [
          {
            path: {
              path: {
                prefix: "/internal/",
              },
            },
          },
        ],
        firewall: {
          action: "ACTION_DENY",
        },
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatewaySetPolicies failed:", res.error);
  }
}

run();
```
### Example Usage: reset

<!-- UsageSnippet language="typescript" operationID="gateway.setPolicies" method="post" path="/v2/gateway.setPolicies" example="reset" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.gateway.setPolicies({
    project: "payments",
    app: "payments-api",
    environment: "production",
    policies: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { gatewaySetPolicies } from "@unkey/api/funcs/gatewaySetPolicies.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await gatewaySetPolicies(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
    policies: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatewaySetPolicies failed:", res.error);
  }
}

run();
```
### Example Usage: set

<!-- UsageSnippet language="typescript" operationID="gateway.setPolicies" method="post" path="/v2/gateway.setPolicies" example="set" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.gateway.setPolicies({
    project: "payments",
    app: "payments-api",
    environment: "production",
    policies: [
      {
        name: "Require API key",
        enabled: true,
        keyauth: {
          keyspaces: [
            "ks_1234abcd",
          ],
        },
      },
      {
        name: "Global IP limit",
        enabled: true,
        ratelimit: {
          limit: 100,
          windowMs: 60000,
          identifier: {
            remoteIp: {},
          },
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
import { gatewaySetPolicies } from "@unkey/api/funcs/gatewaySetPolicies.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await gatewaySetPolicies(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
    policies: [
      {
        name: "Require API key",
        enabled: true,
        keyauth: {
          keyspaces: [
            "ks_1234abcd",
          ],
        },
      },
      {
        name: "Global IP limit",
        enabled: true,
        ratelimit: {
          limit: 100,
          windowMs: 60000,
          identifier: {
            remoteIp: {},
          },
        },
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatewaySetPolicies failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2GatewaySetPoliciesRequestBody](../../models/components/v2gatewaysetpoliciesrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2GatewaySetPoliciesResponseBody](../../models/components/v2gatewaysetpoliciesresponsebody.md)\>**

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

## updatePolicy

Update a single policy in place without resending the environment's full
policy list. The policy keeps its id and its position in the evaluation
order, and all other policies are untouched.

Omitted fields keep their stored values; at least one updatable field
must be provided. Setting `match` to null removes all match expressions
so the policy applies to every request. Providing one of `keyauth`,
`ratelimit`, `firewall` or `openapi` replaces the policy's rule
entirely, including switching its type; at most one may be set.

Policy ids are regenerated whenever `gateway.setPolicies` replaces the
list, so fetch current ids via `gateway.listPolicies` first.

**Required Permissions**

Your root key must have one of the following permissions:
- `environment.*.update_policy` (for any environment)
- `environment.<environment_id>.update_policy` (for a specific environment)


### Example Usage: clearMatch

<!-- UsageSnippet language="typescript" operationID="gateway.updatePolicy" method="post" path="/v2/gateway.updatePolicy" example="clearMatch" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.gateway.updatePolicy({
    project: "payments",
    app: "payments-api",
    environment: "production",
    policyId: "pol_9d2Fk1LmQ",
    match: null,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { gatewayUpdatePolicy } from "@unkey/api/funcs/gatewayUpdatePolicy.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await gatewayUpdatePolicy(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
    policyId: "pol_9d2Fk1LmQ",
    match: null,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatewayUpdatePolicy failed:", res.error);
  }
}

run();
```
### Example Usage: disable

<!-- UsageSnippet language="typescript" operationID="gateway.updatePolicy" method="post" path="/v2/gateway.updatePolicy" example="disable" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.gateway.updatePolicy({
    project: "payments",
    app: "payments-api",
    environment: "production",
    policyId: "pol_9d2Fk1LmQ",
    enabled: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { gatewayUpdatePolicy } from "@unkey/api/funcs/gatewayUpdatePolicy.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await gatewayUpdatePolicy(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
    policyId: "pol_9d2Fk1LmQ",
    enabled: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatewayUpdatePolicy failed:", res.error);
  }
}

run();
```
### Example Usage: rename

<!-- UsageSnippet language="typescript" operationID="gateway.updatePolicy" method="post" path="/v2/gateway.updatePolicy" example="rename" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.gateway.updatePolicy({
    project: "payments",
    app: "payments-api",
    environment: "production",
    policyId: "pol_9d2Fk1LmQ",
    name: "Require API key (v2)",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { gatewayUpdatePolicy } from "@unkey/api/funcs/gatewayUpdatePolicy.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await gatewayUpdatePolicy(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
    policyId: "pol_9d2Fk1LmQ",
    name: "Require API key (v2)",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatewayUpdatePolicy failed:", res.error);
  }
}

run();
```
### Example Usage: switchRule

<!-- UsageSnippet language="typescript" operationID="gateway.updatePolicy" method="post" path="/v2/gateway.updatePolicy" example="switchRule" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.gateway.updatePolicy({
    project: "payments",
    app: "payments-api",
    environment: "production",
    policyId: "pol_9d2Fk1LmQ",
    firewall: {
      action: "ACTION_DENY",
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
import { gatewayUpdatePolicy } from "@unkey/api/funcs/gatewayUpdatePolicy.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await gatewayUpdatePolicy(unkey, {
    project: "payments",
    app: "payments-api",
    environment: "production",
    policyId: "pol_9d2Fk1LmQ",
    firewall: {
      action: "ACTION_DENY",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("gatewayUpdatePolicy failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2GatewayUpdatePolicyRequestBody](../../models/components/v2gatewayupdatepolicyrequestbody.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2GatewayUpdatePolicyResponseBody](../../models/components/v2gatewayupdatepolicyresponsebody.md)\>**

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