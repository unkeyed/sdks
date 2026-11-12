# Portal

## Overview

Customer Portal session management

### Available Operations

* [createDomain](#createdomain) - Create portal domain
* [createPortal](#createportal) - Create portal
* [createSession](#createsession) - Create portal session
* [deleteDomain](#deletedomain) - Delete portal domain
* [deletePortal](#deleteportal) - Delete portal
* [exchangeCode](#exchangecode) - Exchange portal code
* [getDomain](#getdomain) - Get portal domain
* [getPortal](#getportal) - Get portal
* [getVerifications](#getverifications) - Get portal verifications
* [listDomains](#listdomains) - List portal domains
* [listKeys](#listkeys) - List portal keys
* [listSessions](#listsessions) - List portal sessions
* [rerollKey](#rerollkey) - Reroll portal key
* [revokeSession](#revokesession) - Revoke portal sessions
* [updatePortal](#updateportal) - Update portal
* [verifyDomain](#verifydomain) - Verify portal domain

## createDomain

Attach a custom domain to a portal and start verifying it.

The domain is created in the `pending` state and does not serve the portal until
verification succeeds. The response returns `dnsRecords`: create every entry exactly as
given. Verification runs in the background; poll `portal.getDomain` for the result.

A name already attached to one of your portals or environments returns a 409.

Requires `unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>/domains/*#write`.
Use `portals/*/domains/*#write` to attach domains to any portal in the project.
Without the permission this returns **404**, not 403, unless the key can read
the portal or its domains.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="portal.createDomain" method="post" path="/v2/portal.createDomain" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.portal.createDomain({
    portal: "proj_1234abcd",
    domain: "portal.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { portalCreateDomain } from "@unkey/api/funcs/portalCreateDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await portalCreateDomain(unkey, {
    portal: "proj_1234abcd",
    domain: "portal.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalCreateDomain failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PortalCreateDomainRequestBody](../../models/components/v2portalcreatedomainrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PortalCreateDomainResponseBody](../../models/components/v2portalcreatedomainresponsebody.md)\>**

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

## createPortal

Create a portal for one app or keyspace in your workspace.

Unreleased and subject to change without notice.

Send exactly one of `keyspaceId` or `appId`. That resource must belong to your
workspace, and it can back only one portal, so a second portal for the same
resource is a **409**.

`displayName` is what your end users see. It is yours to set and change
independently of the resource the portal serves.

**Required Permissions**

Your root key must have `portal.*.create_portal`. A grant scoped to a specific
portal id does not authorize creation, because the id does not exist yet.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="portal.createPortal" method="post" path="/v2/portal.createPortal" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.portal.createPortal({
    slug: "acme-portal",
    displayName: "Acme",
    keyspaceId: "ks_1234abcd",
    appId: "app_1234abcd",
    enabled: true,
    logoUrl: "https://cdn.example.com/logo.svg",
    primaryColor: "#6366f1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { portalCreatePortal } from "@unkey/api/funcs/portalCreatePortal.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await portalCreatePortal(unkey, {
    slug: "acme-portal",
    displayName: "Acme",
    keyspaceId: "ks_1234abcd",
    appId: "app_1234abcd",
    enabled: true,
    logoUrl: "https://cdn.example.com/logo.svg",
    primaryColor: "#6366f1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalCreatePortal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PortalCreatePortalRequestBodyUnion](../../models/components/v2portalcreateportalrequestbodyunion.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PortalCreatePortalResponseBody](../../models/components/v2portalcreateportalresponsebody.md)\>**

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
- `keys:reroll` requires `api.<api_id>.create_key`, plus
  `api.<api_id>.encrypt_key` when the keyspace stores encrypted keys
- `analytics:read` requires `api.<api_id>.read_analytics`

The `*` form of each is also accepted. Requesting a scope you do not hold
returns 403 for the whole request rather than minting a reduced session, so a
missing grant is visible instead of surfacing later as a broken portal.

Missing the portal permission itself returns **404** when your root key
cannot read the portal or its sessions, so a caller who cannot see a portal
is not told whether it exists. A root key that can read the portal but lacks
the permission gets **403**.

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
| errors.ConflictErrorResponse        | 409                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## deleteDomain

Detach a custom domain from a portal. A verified domain stops serving the portal.

Requires `unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>/domains/<domain_id>#delete`.
Use `portals/<portal_id>/domains/*#delete` to delete any domain on the portal.
Without the permission this returns **404**, not 403, unless the key can read
the portal or the domain.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="portal.deleteDomain" method="post" path="/v2/portal.deleteDomain" example="accepted" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.portal.deleteDomain({
    portal: "proj_1234abcd",
    domainId: "pdom_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { portalDeleteDomain } from "@unkey/api/funcs/portalDeleteDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await portalDeleteDomain(unkey, {
    portal: "proj_1234abcd",
    domainId: "pdom_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalDeleteDomain failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PortalDeleteDomainRequestBody](../../models/components/v2portaldeletedomainrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PortalDeleteDomainResponseBody](../../models/components/v2portaldeletedomainresponsebody.md)\>**

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

## deletePortal

Delete a portal and revoke the sessions it minted.

Unreleased and subject to change without notice.

Its end users lose access rather than keeping it until their tokens expire.
Revocation is not instantaneous: session lookups are cached briefly, so a
request already in flight may still succeed.

The app or keyspace it served is untouched, and its slug becomes free for a
new portal.

Its custom domains are deleted with it: they stop serving and their DNS
records can be removed. Their certificates are not revoked.

**Required Permissions**

Your root key must have `delete` permission on
`unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>`.
A broader grant, such as `unkey:v1:<workspace_id>:**#delete`, also permits deletion.

A root key that cannot read the portal gets **404**. One that can read it
but lacks the permission gets **403**.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="portal.deletePortal" method="post" path="/v2/portal.deletePortal" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.portal.deletePortal({
    portal: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { portalDeletePortal } from "@unkey/api/funcs/portalDeletePortal.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await portalDeletePortal(unkey, {
    portal: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalDeletePortal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PortalDeletePortalRequestBody](../../models/components/v2portaldeleteportalrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PortalDeletePortalResponseBody](../../models/components/v2portaldeleteportalresponsebody.md)\>**

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

## getDomain

Read one custom domain attached to a portal, with its verification status and DNS records.

Requires `unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>/domains/<domain_id>#read`.
Use `portals/<portal_id>/domains/*#read` to read every domain on the portal.
Without the permission this returns **404**, not 403, unless the key can read
the portal itself.


### Example Usage: failed

<!-- UsageSnippet language="typescript" operationID="portal.getDomain" method="post" path="/v2/portal.getDomain" example="failed" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.portal.getDomain({
    portal: "proj_1234abcd",
    domainId: "pdom_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { portalGetDomain } from "@unkey/api/funcs/portalGetDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await portalGetDomain(unkey, {
    portal: "proj_1234abcd",
    domainId: "pdom_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalGetDomain failed:", res.error);
  }
}

run();
```
### Example Usage: verified

<!-- UsageSnippet language="typescript" operationID="portal.getDomain" method="post" path="/v2/portal.getDomain" example="verified" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.portal.getDomain({
    portal: "proj_1234abcd",
    domainId: "pdom_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { portalGetDomain } from "@unkey/api/funcs/portalGetDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await portalGetDomain(unkey, {
    portal: "proj_1234abcd",
    domainId: "pdom_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalGetDomain failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PortalGetDomainRequestBody](../../models/components/v2portalgetdomainrequestbody.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PortalGetDomainResponseBody](../../models/components/v2portalgetdomainresponsebody.md)\>**

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

## getPortal

Read one portal, by its id or slug, or by the resource it serves.

Unreleased and subject to change without notice.

Send exactly one of `portal`, `keyspaceId`, or `appId`. Sending more than one
is a **400**.

**Required Permissions**

Your root key must have one of:
- `portal.*.read_portal` (to read any portal in the workspace)
- `portal.<portal_id>.read_portal` (to read a specific portal)

Without the permission this returns **404**, not 403.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="portal.getPortal" method="post" path="/v2/portal.getPortal" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.portal.getPortal({
    portal: "proj_1234abcd",
    keyspaceId: "ks_1234abcd",
    appId: "app_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { portalGetPortal } from "@unkey/api/funcs/portalGetPortal.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await portalGetPortal(unkey, {
    portal: "proj_1234abcd",
    keyspaceId: "ks_1234abcd",
    appId: "app_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalGetPortal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PortalGetPortalRequestBodyUnion](../../models/components/v2portalgetportalrequestbodyunion.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PortalGetPortalResponseBody](../../models/components/v2portalgetportalresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.NotFoundErrorResponse        | 404                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## getVerifications

Return a verification analytics timeseries for the authenticated portal
session's end user.

Authenticates only with a portal session cookie and always restricts results
to verification events attributed to the session's external identity. Unlike
`analytics.getVerifications`, this endpoint takes a fixed time window (no
query language) and returns outcome-broken-out counts. Bucket granularity is
chosen automatically from the window size.

The response carries one zero-filled series per key the end user has
verifications for, so a client can render both a per-key table and an
account-wide chart from one call by summing them. Pass `keyId` to narrow the
window to a single key.


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

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.BadRequestErrorResponse          | 400                                     | application/json                        |
| errors.UnauthorizedErrorResponse        | 401                                     | application/json                        |
| errors.ForbiddenErrorResponse           | 403                                     | application/json                        |
| errors.NotFoundErrorResponse            | 404                                     | application/json                        |
| errors.UnprocessableEntityErrorResponse | 422                                     | application/json                        |
| errors.TooManyRequestsErrorResponse     | 429                                     | application/problem+json                |
| errors.InternalServerErrorResponse      | 500                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## listDomains

List the custom domains attached to a portal, with their verification status and DNS records.

Requires `unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>/domains/*#read`.
Without the permission this returns **404**, not 403, unless the key can read
the portal itself.


### Example Usage: empty

<!-- UsageSnippet language="typescript" operationID="portal.listDomains" method="post" path="/v2/portal.listDomains" example="empty" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.portal.listDomains({
    portal: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { portalListDomains } from "@unkey/api/funcs/portalListDomains.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await portalListDomains(unkey, {
    portal: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalListDomains failed:", res.error);
  }
}

run();
```
### Example Usage: twoDomains

<!-- UsageSnippet language="typescript" operationID="portal.listDomains" method="post" path="/v2/portal.listDomains" example="twoDomains" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.portal.listDomains({
    portal: "proj_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { portalListDomains } from "@unkey/api/funcs/portalListDomains.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await portalListDomains(unkey, {
    portal: "proj_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalListDomains failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PortalListDomainsRequestBody](../../models/components/v2portallistdomainsrequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PortalListDomainsResponseBody](../../models/components/v2portallistdomainsresponsebody.md)\>**

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

## listSessions

List the end users holding a revocable session on a portal, with each
end user's sessions.

Unreleased and subject to change without notice.

A session is revocable until it expires or is revoked. That includes
sessions whose portal URL was created but not opened yet. Pass an end
user's `externalId` to `portal.revokeSession` to end their sessions.

**Required Permissions**

Your root key must have one of:
- `portal.*.create_portal_session` (for any portal in the workspace)
- `portal.<portal_id>.create_portal_session` (for a specific portal)

It also accepts `unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>/sessions/*`
with `#read` or `#write`. Reading the portal itself is not enough.

Without the permission this returns **404**, not 403.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="portal.listSessions" method="post" path="/v2/portal.listSessions" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.portal.listSessions({
    portal: "proj_1234abcd",
    cursor: "user_123",
    search: "user_",
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
import { portalListSessions } from "@unkey/api/funcs/portalListSessions.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await portalListSessions(unkey, {
    portal: "proj_1234abcd",
    cursor: "user_123",
    search: "user_",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("portalListSessions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PortalListSessionsRequestBody](../../models/components/v2portallistsessionsrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PortalListSessionsResponse](../../models/operations/portallistsessionsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
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

## revokeSession

Revoke every live session an end user holds on a portal.

Unreleased and subject to change without notice.

Sessions that were created but not yet opened are revoked too, so their
portal URLs stop working. Revocation is not instantaneous: session lookups
are cached briefly, so a request already in flight may still succeed.

Revoking ends existing sessions only. To keep the end user out, also stop
calling `portal.createSession` for them.

Calling this again for the same end user is safe and revokes nothing.

**Required Permissions**

Your root key must have one of:
- `portal.*.create_portal_session` (for any portal in the workspace)
- `portal.<portal_id>.create_portal_session` (for a specific portal)

It also accepts `unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>/sessions/*#write`,
which dashboard roles carry. Unlike `portal.createSession`, a dashboard
session can call this, not just a root key.

A root key that cannot read the portal's sessions gets **404**. One that can
read them but lacks the permission gets **403**.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="portal.revokeSession" method="post" path="/v2/portal.revokeSession" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.portal.revokeSession({
    portal: "proj_1234abcd",
    externalId: "user_123",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { portalRevokeSession } from "@unkey/api/funcs/portalRevokeSession.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await portalRevokeSession(unkey, {
    portal: "proj_1234abcd",
    externalId: "user_123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalRevokeSession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PortalRevokeSessionRequestBody](../../models/components/v2portalrevokesessionrequestbody.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PortalRevokeSessionResponseBody](../../models/components/v2portalrevokesessionresponsebody.md)\>**

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

## updatePortal

Change a portal's slug, display name, the resource it serves, its enabled
state, or its branding.

Unreleased and subject to change without notice.

Only the fields you send change. Omitting a field leaves it as it is, and for
branding, sending null clears it. Send at most one of `keyspaceId` or `appId`.

Two changes affect your end users immediately:
- Re-pointing at a different resource revokes the portal's live sessions,
  because a session carries the scope it was minted with.
- Disabling stops new sessions and revokes the live ones. Re-enabling does
  not restore them.

**Required Permissions**

Your root key must have one of:
- `portal.*.update_portal` (to update any portal in the workspace)
- `portal.<portal_id>.update_portal` (to update a specific portal)

A root key that cannot read the portal gets **404**. One that can read it
but lacks the permission gets **403**.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="portal.updatePortal" method="post" path="/v2/portal.updatePortal" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.portal.updatePortal({
    portal: "proj_1234abcd",
    slug: "acme-portal",
    displayName: "Acme",
    keyspaceId: "ks_1234abcd",
    appId: "app_1234abcd",
    enabled: false,
    logoUrl: "https://cdn.example.com/logo.svg",
    primaryColor: "#6366f1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { portalUpdatePortal } from "@unkey/api/funcs/portalUpdatePortal.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await portalUpdatePortal(unkey, {
    portal: "proj_1234abcd",
    slug: "acme-portal",
    displayName: "Acme",
    keyspaceId: "ks_1234abcd",
    appId: "app_1234abcd",
    enabled: false,
    logoUrl: "https://cdn.example.com/logo.svg",
    primaryColor: "#6366f1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalUpdatePortal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PortalUpdatePortalRequestBody](../../models/components/v2portalupdateportalrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PortalUpdatePortalResponseBody](../../models/components/v2portalupdateportalresponsebody.md)\>**

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

## verifyDomain

Restart verification for a portal domain.

Call this after you correct the DNS records of a domain that shows `failed`, or to give a
`pending` domain a new 24-hour verification period. The endpoint returns when Unkey accepts
the retry. Poll `portal.getDomain` for the result.

A domain that is already `verified` returns a 202 and starts nothing.

Requires `unkey:v1:<workspace_id>:projects/<project_id>/portals/<portal_id>/domains/<domain_id>#write`.
Use `portals/<portal_id>/domains/*#write` to manage every domain on the portal.
Without the permission this returns **404**, not 403, unless the key can read
the portal or the domain.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="portal.verifyDomain" method="post" path="/v2/portal.verifyDomain" example="accepted" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.portal.verifyDomain({
    portal: "proj_1234abcd",
    domainId: "pdom_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { portalVerifyDomain } from "@unkey/api/funcs/portalVerifyDomain.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await portalVerifyDomain(unkey, {
    portal: "proj_1234abcd",
    domainId: "pdom_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalVerifyDomain failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PortalVerifyDomainRequestBody](../../models/components/v2portalverifydomainrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PortalVerifyDomainResponseBody](../../models/components/v2portalverifydomainresponsebody.md)\>**

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