# Identities
(*identities*)

## Overview

### Available Operations

* [createIdentity](#createidentity)
* [deleteIdentity](#deleteidentity)

## createIdentity

### Example Usage

```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: "UNKEY_ROOT_KEY",
});

async function run() {
  const result = await unkey.identities.createIdentity({
    externalId: "user_123",
    ratelimits: [
      {
        name: "api",
        limit: 944235,
        duration: 703242,
      },
      {
        name: "api",
        limit: 17275,
        duration: 470912,
      },
      {
        name: "api",
        limit: 919479,
        duration: 557622,
      },
    ],
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { identitiesCreateIdentity } from "@unkey/api/funcs/identitiesCreateIdentity.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: "UNKEY_ROOT_KEY",
});

async function run() {
  const res = await identitiesCreateIdentity(unkey, {
    externalId: "user_123",
    ratelimits: [
      {
        name: "api",
        limit: 944235,
        duration: 703242,
      },
      {
        name: "api",
        limit: 17275,
        duration: 470912,
      },
      {
        name: "api",
        limit: 919479,
        duration: 557622,
      },
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2IdentitiesCreateIdentityRequestBody](../../models/components/v2identitiescreateidentityrequestbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2IdentitiesCreateIdentityResponseBody](../../models/components/v2identitiescreateidentityresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/problem+json           |
| errors.UnauthorizedErrorResponse   | 401                                | application/problem+json           |
| errors.ForbiddenErrorResponse      | 403                                | application/problem+json           |
| errors.ConflictErrorResponse       | 409                                | application/problem+json           |
| errors.InternalServerErrorResponse | 500                                | application/problem+json           |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## deleteIdentity

### Example Usage

```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: "UNKEY_ROOT_KEY",
});

async function run() {
  const result = await unkey.identities.deleteIdentity({
    externalId: "user_123",
    identityId: "id_123",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { identitiesDeleteIdentity } from "@unkey/api/funcs/identitiesDeleteIdentity.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: "UNKEY_ROOT_KEY",
});

async function run() {
  const res = await identitiesDeleteIdentity(unkey, {
    externalId: "user_123",
    identityId: "id_123",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2IdentitiesDeleteIdentityRequestBodyUnion](../../models/components/v2identitiesdeleteidentityrequestbodyunion.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2IdentitiesDeleteIdentityResponseBody](../../models/components/v2identitiesdeleteidentityresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/problem+json           |
| errors.UnauthorizedErrorResponse   | 401                                | application/problem+json           |
| errors.ForbiddenErrorResponse      | 403                                | application/problem+json           |
| errors.NotFoundErrorResponse       | 404                                | application/problem+json           |
| errors.InternalServerErrorResponse | 500                                | application/problem+json           |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |