# @unkey/api

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *@unkey/api* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=@unkey/api&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>



<!-- Start Summary [summary] -->
## Summary

Unkey API: Unkey's API provides programmatic access for all resources within our platform.


### Authentication
#
This API uses HTTP Bearer authentication with root keys. Most endpoints require specific permissions associated with your root key. When making requests, include your root key in the `Authorization` header:
```
Authorization: Bearer unkey_xxxxxxxxxxx
```

All responses follow a consistent envelope structure that separates operational metadata from actual data. This design provides several benefits:
- Debugging: Every response includes a unique requestId for tracing issues
- Consistency: Predictable response format across all endpoints
- Extensibility: Easy to add new metadata without breaking existing integrations
- Error Handling: Unified error format with actionable information

### Success Response Format:
```json
{
  "meta": {
    "requestId": "req_123456"
  },
  "data": {
    // Actual response data here
  }
}
```

The meta object contains operational information:
- `requestId`: Unique identifier for this request (essential for support)

The data object contains the actual response data specific to each endpoint.

### Paginated Response Format:
```json
{
  "meta": {
    "requestId": "req_123456"
  },
  "data": [
    // Array of results
  ],
  "pagination": {
    "cursor": "next_page_token",
    "hasMore": true
  }
}
```

The pagination object appears on list endpoints and contains:
- `cursor`: Token for requesting the next page
- `hasMore`: Whether more results are available

### Error Response Format:
```json
{
  "meta": {
    "requestId": "req_2c9a0jf23l4k567"
  },
  "error": {
    "detail": "The resource you are attempting to modify is protected and cannot be changed",
    "status": 403,
    "title": "Forbidden",
    "type": "https://unkey.com/docs/errors/unkey/application/protected_resource"
  }
}
```

Error responses include comprehensive diagnostic information:
- `title`: Human-readable error summary
- `detail`: Specific description of what went wrong
- `status`: HTTP status code
- `type`: Link to error documentation
- `errors`: Array of validation errors (for 400 responses)

This structure ensures you always have the context needed to debug issues and take corrective action.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@unkey/api](#unkeyapi)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @unkey/api
```

### PNPM

```bash
pnpm add @unkey/api
```

### Bun

```bash
bun add @unkey/api
```

### Yarn

```bash
yarn add @unkey/api
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Unkey": {
      "command": "npx",
      "args": [
        "-y", "--package", "@unkey/api",
        "--",
        "mcp", "start",
        "--root-key", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Unkey": {
      "command": "npx",
      "args": [
        "-y", "--package", "@unkey/api",
        "--",
        "mcp", "start",
        "--root-key", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @unkey/api -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.analytics.getVerifications({
    query:
      "SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name      | Type | Scheme      | Environment Variable |
| --------- | ---- | ----------- | -------------------- |
| `rootKey` | http | HTTP Bearer | `UNKEY_ROOT_KEY`     |

To authenticate with the API the `rootKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.analytics.getVerifications({
    query:
      "SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY",
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [analytics](docs/sdks/analytics/README.md)

* [getVerifications](docs/sdks/analytics/README.md#getverifications) - Query key verification data

### [apis](docs/sdks/apis/README.md)

* [createApi](docs/sdks/apis/README.md#createapi) - Create API namespace
* [deleteApi](docs/sdks/apis/README.md#deleteapi) - Delete API namespace
* [getApi](docs/sdks/apis/README.md#getapi) - Get API namespace
* [listKeys](docs/sdks/apis/README.md#listkeys) - List API keys

### [identities](docs/sdks/identities/README.md)

* [createIdentity](docs/sdks/identities/README.md#createidentity) - Create Identity
* [deleteIdentity](docs/sdks/identities/README.md#deleteidentity) - Delete Identity
* [getIdentity](docs/sdks/identities/README.md#getidentity) - Get Identity
* [listIdentities](docs/sdks/identities/README.md#listidentities) - List Identities
* [updateIdentity](docs/sdks/identities/README.md#updateidentity) - Update Identity

### [keys](docs/sdks/keys/README.md)

* [addPermissions](docs/sdks/keys/README.md#addpermissions) - Add key permissions
* [addRoles](docs/sdks/keys/README.md#addroles) - Add key roles
* [createKey](docs/sdks/keys/README.md#createkey) - Create API key
* [deleteKey](docs/sdks/keys/README.md#deletekey) - Delete API keys
* [getKey](docs/sdks/keys/README.md#getkey) - Get API key
* [migrateKeys](docs/sdks/keys/README.md#migratekeys) - Migrate API key(s)
* [removePermissions](docs/sdks/keys/README.md#removepermissions) - Remove key permissions
* [removeRoles](docs/sdks/keys/README.md#removeroles) - Remove key roles
* [rerollKey](docs/sdks/keys/README.md#rerollkey) - Reroll Key
* [setPermissions](docs/sdks/keys/README.md#setpermissions) - Set key permissions
* [setRoles](docs/sdks/keys/README.md#setroles) - Set key roles
* [updateCredits](docs/sdks/keys/README.md#updatecredits) - Update key credits
* [updateKey](docs/sdks/keys/README.md#updatekey) - Update key settings
* [verifyKey](docs/sdks/keys/README.md#verifykey) - Verify API key
* [whoami](docs/sdks/keys/README.md#whoami) - Get API key by hash

### [permissions](docs/sdks/permissions/README.md)

* [createPermission](docs/sdks/permissions/README.md#createpermission) - Create permission
* [createRole](docs/sdks/permissions/README.md#createrole) - Create role
* [deletePermission](docs/sdks/permissions/README.md#deletepermission) - Delete permission
* [deleteRole](docs/sdks/permissions/README.md#deleterole) - Delete role
* [getPermission](docs/sdks/permissions/README.md#getpermission) - Get permission
* [getRole](docs/sdks/permissions/README.md#getrole) - Get role
* [listPermissions](docs/sdks/permissions/README.md#listpermissions) - List permissions
* [listRoles](docs/sdks/permissions/README.md#listroles) - List roles

### [ratelimit](docs/sdks/ratelimit/README.md)

* [deleteOverride](docs/sdks/ratelimit/README.md#deleteoverride) - Delete ratelimit override
* [getOverride](docs/sdks/ratelimit/README.md#getoverride) - Get ratelimit override
* [limit](docs/sdks/ratelimit/README.md#limit) - Apply rate limiting
* [listOverrides](docs/sdks/ratelimit/README.md#listoverrides) - List ratelimit overrides
* [multiLimit](docs/sdks/ratelimit/README.md#multilimit) - Apply multiple rate limit checks
* [setOverride](docs/sdks/ratelimit/README.md#setoverride) - Set ratelimit override

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`analyticsGetVerifications`](docs/sdks/analytics/README.md#getverifications) - Query key verification data
- [`apisCreateApi`](docs/sdks/apis/README.md#createapi) - Create API namespace
- [`apisDeleteApi`](docs/sdks/apis/README.md#deleteapi) - Delete API namespace
- [`apisGetApi`](docs/sdks/apis/README.md#getapi) - Get API namespace
- [`apisListKeys`](docs/sdks/apis/README.md#listkeys) - List API keys
- [`identitiesCreateIdentity`](docs/sdks/identities/README.md#createidentity) - Create Identity
- [`identitiesDeleteIdentity`](docs/sdks/identities/README.md#deleteidentity) - Delete Identity
- [`identitiesGetIdentity`](docs/sdks/identities/README.md#getidentity) - Get Identity
- [`identitiesListIdentities`](docs/sdks/identities/README.md#listidentities) - List Identities
- [`identitiesUpdateIdentity`](docs/sdks/identities/README.md#updateidentity) - Update Identity
- [`keysAddPermissions`](docs/sdks/keys/README.md#addpermissions) - Add key permissions
- [`keysAddRoles`](docs/sdks/keys/README.md#addroles) - Add key roles
- [`keysCreateKey`](docs/sdks/keys/README.md#createkey) - Create API key
- [`keysDeleteKey`](docs/sdks/keys/README.md#deletekey) - Delete API keys
- [`keysGetKey`](docs/sdks/keys/README.md#getkey) - Get API key
- [`keysMigrateKeys`](docs/sdks/keys/README.md#migratekeys) - Migrate API key(s)
- [`keysRemovePermissions`](docs/sdks/keys/README.md#removepermissions) - Remove key permissions
- [`keysRemoveRoles`](docs/sdks/keys/README.md#removeroles) - Remove key roles
- [`keysRerollKey`](docs/sdks/keys/README.md#rerollkey) - Reroll Key
- [`keysSetPermissions`](docs/sdks/keys/README.md#setpermissions) - Set key permissions
- [`keysSetRoles`](docs/sdks/keys/README.md#setroles) - Set key roles
- [`keysUpdateCredits`](docs/sdks/keys/README.md#updatecredits) - Update key credits
- [`keysUpdateKey`](docs/sdks/keys/README.md#updatekey) - Update key settings
- [`keysVerifyKey`](docs/sdks/keys/README.md#verifykey) - Verify API key
- [`keysWhoami`](docs/sdks/keys/README.md#whoami) - Get API key by hash
- [`permissionsCreatePermission`](docs/sdks/permissions/README.md#createpermission) - Create permission
- [`permissionsCreateRole`](docs/sdks/permissions/README.md#createrole) - Create role
- [`permissionsDeletePermission`](docs/sdks/permissions/README.md#deletepermission) - Delete permission
- [`permissionsDeleteRole`](docs/sdks/permissions/README.md#deleterole) - Delete role
- [`permissionsGetPermission`](docs/sdks/permissions/README.md#getpermission) - Get permission
- [`permissionsGetRole`](docs/sdks/permissions/README.md#getrole) - Get role
- [`permissionsListPermissions`](docs/sdks/permissions/README.md#listpermissions) - List permissions
- [`permissionsListRoles`](docs/sdks/permissions/README.md#listroles) - List roles
- [`ratelimitDeleteOverride`](docs/sdks/ratelimit/README.md#deleteoverride) - Delete ratelimit override
- [`ratelimitGetOverride`](docs/sdks/ratelimit/README.md#getoverride) - Get ratelimit override
- [`ratelimitLimit`](docs/sdks/ratelimit/README.md#limit) - Apply rate limiting
- [`ratelimitListOverrides`](docs/sdks/ratelimit/README.md#listoverrides) - List ratelimit overrides
- [`ratelimitMultiLimit`](docs/sdks/ratelimit/README.md#multilimit) - Apply multiple rate limit checks
- [`ratelimitSetOverride`](docs/sdks/ratelimit/README.md#setoverride) - Set ratelimit override

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.identities.listIdentities({
    limit: 50,
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.analytics.getVerifications({
    query:
      "SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.analytics.getVerifications({
    query:
      "SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`UnkeyError`](./src/models/errors/unkeyerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Unkey } from "@unkey/api";
import * as errors from "@unkey/api/models/errors";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  try {
    const result = await unkey.analytics.getVerifications({
      query:
        "SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.UnkeyError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.BadRequestErrorResponse) {
        console.log(error.data$.meta); // components.Meta
        console.log(error.data$.error); // components.BadRequestErrorDetails
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`UnkeyError`](./src/models/errors/unkeyerror.ts): The base class for HTTP error responses.
  * [`BadRequestErrorResponse`](./src/models/errors/badrequesterrorresponse.ts): Error response for invalid requests that cannot be processed due to client-side errors. This typically occurs when request parameters are missing, malformed, or fail validation rules. The response includes detailed information about the specific errors in the request, including the location of each error and suggestions for fixing it. When receiving this error, check the 'errors' array in the response for specific validation issues that need to be addressed before retrying. Status code `400`.
  * [`UnauthorizedErrorResponse`](./src/models/errors/unauthorizederrorresponse.ts): Error response when authentication has failed or credentials are missing. This occurs when: - No authentication token is provided in the request - The provided token is invalid, expired, or malformed - The token format doesn't match expected patterns  To resolve this error, ensure you're including a valid root key in the Authorization header. Status code `401`.
  * [`ForbiddenErrorResponse`](./src/models/errors/forbiddenerrorresponse.ts): Error response when the provided credentials are valid but lack sufficient permissions for the requested operation. This occurs when: - The root key doesn't have the required permissions for this endpoint - The operation requires elevated privileges that the current key lacks - Access to the requested resource is restricted based on workspace settings  To resolve this error, ensure your root key has the necessary permissions or contact your workspace administrator. Status code `403`.
  * [`InternalServerErrorResponse`](./src/models/errors/internalservererrorresponse.ts): Error response when an unexpected error occurs on the server. This indicates a problem with Unkey's systems rather than your request.  When you encounter this error: - The request ID in the response can help Unkey support investigate the issue - The error is likely temporary and retrying may succeed - If the error persists, contact Unkey support with the request ID. Status code `500`.
  * [`NotFoundErrorResponse`](./src/models/errors/notfounderrorresponse.ts): Error response when the requested resource cannot be found. This occurs when: - The specified resource ID doesn't exist in your workspace - The resource has been deleted or moved - The resource exists but is not accessible with current permissions  To resolve this error, verify the resource ID is correct and that you have access to it. Status code `404`. *

<details><summary>Less common errors (12)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`UnkeyError`](./src/models/errors/unkeyerror.ts)**:
* [`ConflictErrorResponse`](./src/models/errors/conflicterrorresponse.ts): Error response when the request conflicts with the current state of the resource. This occurs when: - Attempting to create a resource that already exists - Modifying a resource that has been changed by another operation - Violating unique constraints or business rules  To resolve this error, check the current state of the resource and adjust your request accordingly. Status code `409`. Applicable to 3 of 39 methods.*
* [`GoneErrorResponse`](./src/models/errors/goneerrorresponse.ts): Error response when the requested resource has been soft-deleted and is no longer available. This occurs when: - The resource has been marked as deleted but still exists in the database - The resource is intentionally unavailable but could potentially be restored - The resource cannot be restored through the API or dashboard  To resolve this error, contact support if you need the resource restored. Status code `410`. Applicable to 2 of 39 methods.*
* [`PreconditionFailedErrorResponse`](./src/models/errors/preconditionfailederrorresponse.ts): Error response when one or more conditions specified in the request headers are not met. This typically occurs when: - Using conditional requests with If-Match or If-None-Match headers - The resource version doesn't match the expected value - Optimistic concurrency control detects a conflict  To resolve this error, fetch the latest version of the resource and retry with updated conditions. Status code `412`. Applicable to 1 of 39 methods.*
* [`UnprocessableEntityErrorResponse`](./src/models/errors/unprocessableentityerrorresponse.ts): Error response when the request is syntactically valid but cannot be processed due to semantic constraints or resource limitations. This occurs when: - A query exceeds execution time limits - A query uses more memory than allowed - A query scans too many rows - A query result exceeds size limits  The request syntax is correct, but the operation cannot be completed due to business rules or resource constraints. Review the error details for specific limitations and adjust your request accordingly. Status code `422`. Applicable to 1 of 39 methods.*
* [`TooManyRequestsErrorResponse`](./src/models/errors/toomanyrequestserrorresponse.ts): Error response when the client has sent too many requests in a given time period. This occurs when you've exceeded a rate limit or quota for the resource you're accessing.  The rate limit resets automatically after the time window expires. To avoid this error: - Implement exponential backoff when retrying requests - Cache results where appropriate to reduce request frequency - Check the error detail message for specific quota information - Contact support if you need a higher quota for your use case. Status code `429`. Applicable to 1 of 39 methods.*
* [`ServiceUnavailableErrorResponse`](./src/models/errors/serviceunavailableerrorresponse.ts): Error response when a required service is temporarily unavailable. This indicates that the service exists but cannot be reached or is not responding.  When you encounter this error: - The service is likely experiencing temporary issues - Retrying the request after a short delay may succeed - If the error persists, the service may be undergoing maintenance - Contact Unkey support if the issue continues. Status code `503`. Applicable to 1 of 39 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  serverURL: "https://api.unkey.com",
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.analytics.getVerifications({
    query:
      "SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY",
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Unkey } from "@unkey/api";
import { HTTPClient } from "@unkey/api/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Unkey({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Unkey } from "@unkey/api";

const sdk = new Unkey({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `UNKEY_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@unkey/api&utm_campaign=typescript)
