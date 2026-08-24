# Portal

## Overview

Customer Portal session management

### Available Operations

* [createSession](#createsession) - Create portal session
* [exchangeCode](#exchangecode) - Exchange portal code
* [getVerifications](#getverifications) - Get portal verifications
* [listKeys](#listkeys) - List portal keys
* [rerollKey](#rerollkey) - Reroll portal key

## createSession

Create a portal session for an end user and get the URL to redirect them to.

The URL carries a single-use exchange code valid for 15 minutes, which the portal
redeems exactly once for a 24-hour access token via `portal.exchangeCode`.

**Required Permissions**

Authorization runs in two stages, and both must pass.

First, your root key must have one of the following permissions:
- `portal.*.create_portal_session` (to mint sessions for any portal in the workspace)
- `portal.<portal_id>.create_portal_session` (to mint sessions for a specific portal)

Second, a session can never carry a capability your root key does not itself
hold. Each requested scope additionally requires the equivalent permission on
every keyspace the portal resolves to:
- `keys:read` requires `api.<api_id>.read_key` **and** `api.<api_id>.read_api`
- `keys:reroll` and `keys:create` require `api.<api_id>.create_key`, plus
  `api.<api_id>.encrypt_key` when the keyspace stores encrypted keys
- `analytics:read` requires `api.<api_id>.read_analytics`

The `*` form of each is also accepted. Requesting a scope you do not hold
returns 403 for the whole request rather than minting a reduced session, so a
missing grant is visible instead of surfacing later as a broken portal.

Missing the portal permission itself returns **404**, not 403: a caller who
cannot mint for a portal is not told whether it exists.

Your root key must also be associated with a workspace that has an enabled portal.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="portal.createSession" method="post" path="/v2/portal.createSession" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.portal.createSession({
    portal: "proj_1234abcd",
    externalId: "user_123",
    scopes: [
      "keys:read",
      "keys:reroll",
      "analytics:read",
    ],
    returnUrl: "https://app.example.com/settings/api-keys",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { portalCreateSession } from "@unkey/api/funcs/portalCreateSession.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await portalCreateSession(unkey, {
    portal: "proj_1234abcd",
    externalId: "user_123",
    scopes: [
      "keys:read",
      "keys:reroll",
      "analytics:read",
    ],
    returnUrl: "https://app.example.com/settings/api-keys",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalCreateSession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PortalCreateSessionRequestBody](../../models/components/v2portalcreatesessionrequestbody.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PortalCreateSessionResponse](../../models/operations/portalcreatesessionresponse.md)\>**

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

## exchangeCode

Exchange a short-lived code for a long-lived portal access token.

This endpoint is unauthenticated. The code itself serves as proof of authorization.
Each code can only be redeemed once; subsequent attempts return 401.

The returned access token is valid for 24 hours and should be stored as an
httpOnly cookie or used in the Authorization header for subsequent API calls.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="portal.exchangeCode" method="post" path="/v2/portal.exchangeCode" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey();

async function run() {
  const result = await unkey.portal.exchangeCode({
    code: "pst_abc123def456",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { portalExchangeCode } from "@unkey/api/funcs/portalExchangeCode.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore();

async function run() {
  const res = await portalExchangeCode(unkey, {
    code: "pst_abc123def456",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalExchangeCode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PortalExchangeCodeRequestBody](../../models/components/v2portalexchangecoderequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PortalExchangeCodeResponse](../../models/operations/portalexchangecoderesponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## getVerifications

Return a verification analytics timeseries for the authenticated portal
session's end user.

Authenticates only with a portal session cookie and always restricts results
to verification events attributed to the session's external identity. Unlike
`analytics.getVerifications`, this endpoint takes a fixed time window (no
query language) and returns a zero-filled, outcome-broken-out timeseries.
Bucket granularity is chosen automatically from the window size.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="portal.getVerifications" method="post" path="/v2/portal.getVerifications" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey();

async function run() {
  const result = await unkey.portal.getVerifications({
    portalSession: process.env["UNKEY_PORTAL_SESSION"] ?? "",
  }, {
    startTime: 1704067200000,
    endTime: 1704672000000,
    keyId: "key_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { portalGetVerifications } from "@unkey/api/funcs/portalGetVerifications.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore();

async function run() {
  const res = await portalGetVerifications(unkey, {
    portalSession: process.env["UNKEY_PORTAL_SESSION"] ?? "",
  }, {
    startTime: 1704067200000,
    endTime: 1704672000000,
    keyId: "key_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalGetVerifications failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PortalGetVerificationsRequestBody](../../models/components/v2portalgetverificationsrequestbody.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PortalGetVerificationsSecurity](../../models/operations/portalgetverificationssecurity.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PortalGetVerificationsResponseBody](../../models/components/v2portalgetverificationsresponsebody.md)\>**

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

## listKeys

Retrieve a paginated list of API keys owned by the authenticated portal
session's end user.

This is the portal-scoped variant of `apis.listKeys`. It authenticates only
with a portal session cookie and always restricts results to the keys owned
by the session's external identity, within the keyspaces configured on the
portal configuration. Both the identity and the keyspaces come from the
session, so the request body has no `externalId` or `apiId` field.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="portal.listKeys" method="post" path="/v2/portal.listKeys" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey();

async function run() {
  const result = await unkey.portal.listKeys({
    portalSession: process.env["UNKEY_PORTAL_SESSION"] ?? "",
  }, {
    cursor: "key_1234abcd",
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
import { portalListKeys } from "@unkey/api/funcs/portalListKeys.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore();

async function run() {
  const res = await portalListKeys(unkey, {
    portalSession: process.env["UNKEY_PORTAL_SESSION"] ?? "",
  }, {
    cursor: "key_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("portalListKeys failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PortalListKeysRequestBody](../../models/components/v2portallistkeysrequestbody.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PortalListKeysSecurity](../../models/operations/portallistkeyssecurity.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PortalListKeysResponse](../../models/operations/portallistkeysresponse.md)\>**

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

## rerollKey

Reroll an API key owned by the authenticated portal session's end user,
issuing a new key while preserving its configuration.

This is the portal-scoped variant of `keys.rerollKey`. It authenticates only
with a portal session cookie and may only reroll keys owned by the session's
external identity; any other key returns 404.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="portal.rerollKey" method="post" path="/v2/portal.rerollKey" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey();

async function run() {
  const result = await unkey.portal.rerollKey({
    portalSession: process.env["UNKEY_PORTAL_SESSION"] ?? "",
  }, {
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    expiration: 86400000,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { portalRerollKey } from "@unkey/api/funcs/portalRerollKey.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore();

async function run() {
  const res = await portalRerollKey(unkey, {
    portalSession: process.env["UNKEY_PORTAL_SESSION"] ?? "",
  }, {
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    expiration: 86400000,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalRerollKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2KeysRerollKeyRequestBody](../../models/components/v2keysrerollkeyrequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PortalRerollKeySecurity](../../models/operations/portalrerollkeysecurity.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2KeysRerollKeyResponseBody](../../models/components/v2keysrerollkeyresponsebody.md)\>**

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