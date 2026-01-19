# Keys

## Overview

API key management operations

### Available Operations

* [addPermissions](#addpermissions) - Add key permissions
* [addRoles](#addroles) - Add key roles
* [createKey](#createkey) - Create API key
* [deleteKey](#deletekey) - Delete API keys
* [getKey](#getkey) - Get API key
* [migrateKeys](#migratekeys) - Migrate API key(s)
* [removePermissions](#removepermissions) - Remove key permissions
* [removeRoles](#removeroles) - Remove key roles
* [rerollKey](#rerollkey) - Reroll Key
* [setPermissions](#setpermissions) - Set key permissions
* [setRoles](#setroles) - Set key roles
* [updateCredits](#updatecredits) - Update key credits
* [updateKey](#updatekey) - Update key settings
* [verifyKey](#verifykey) - Verify API key
* [whoami](#whoami) - Get API key by hash

## addPermissions

Add permissions to a key without affecting existing permissions.

Use this for privilege upgrades, enabling new features, or plan changes that grant additional capabilities. Permissions granted through roles remain unchanged.

**Important**: Changes take effect immediately with up to 30-second edge propagation.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.update_key` (to update keys in any API)
- `api.<api_id>.update_key` (to update keys in a specific API)

**Side Effects**

Invalidates the key cache for immediate effect, and makes permissions available for verification within 30 seconds across all regions.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="keys.addPermissions" method="post" path="/v2/keys.addPermissions" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.keys.addPermissions({
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    permissions: [
      "<value 1>",
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
import { keysAddPermissions } from "@unkey/api/funcs/keysAddPermissions.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await keysAddPermissions(unkey, {
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    permissions: [
      "<value 1>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("keysAddPermissions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2KeysAddPermissionsRequestBody](../../models/components/v2keysaddpermissionsrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2KeysAddPermissionsResponseBody](../../models/components/v2keysaddpermissionsresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## addRoles

Add roles to a key without affecting existing roles or permissions.

Use this for privilege upgrades, enabling new feature sets, or subscription changes that grant additional role-based capabilities. Direct permissions remain unchanged.

**Important**: Changes take effect immediately with up to 30-second edge propagation.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.update_key` (to update keys in any API)
- `api.<api_id>.update_key` (to update keys in a specific API)

**Side Effects**

Invalidates the key cache for immediate effect, and makes role assignments available for verification within 30 seconds across all regions.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="keys.addRoles" method="post" path="/v2/keys.addRoles" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.keys.addRoles({
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    roles: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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
import { keysAddRoles } from "@unkey/api/funcs/keysAddRoles.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await keysAddRoles(unkey, {
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    roles: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("keysAddRoles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2KeysAddRolesRequestBody](../../models/components/v2keysaddrolesrequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2KeysAddRolesResponseBody](../../models/components/v2keysaddrolesresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## createKey

Create a new API key for user authentication and authorization.

Use this endpoint when users sign up, upgrade subscription tiers, or need additional keys. Keys are cryptographically secure and unique to the specified API namespace.

**Important**: The key is returned only once. Store it immediately and provide it to your user, as it cannot be retrieved later.

**Common use cases:**
- Generate keys for new user registrations
- Create additional keys for different applications
- Issue keys with specific permissions or limits

**Required Permissions**

Your root key needs one of:
- `api.*.create_key` (create keys in any API)
- `api.<api_id>.create_key` (create keys in specific API)


### Example Usage

<!-- UsageSnippet language="typescript" operationID="keys.createKey" method="post" path="/v2/keys.createKey" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.keys.createKey({
    apiId: "api_1234abcd",
    prefix: "prod",
    name: "Payment Service Production Key",
    byteLength: 24,
    externalId: "user_1234abcd",
    meta: {
      "plan": "enterprise",
      "featureFlags": {
        "betaAccess": true,
        "concurrentConnections": 10,
      },
      "customerName": "Acme Corp",
      "billing": {
        "tier": "premium",
        "renewal": "2024-12-31",
      },
    },
    roles: [
      "api_admin",
      "billing_reader",
    ],
    permissions: [
      "documents.read",
      "documents.write",
      "settings.view",
    ],
    expires: 1704067200000,
    credits: {
      remaining: 1000,
      refill: {
        interval: "daily",
        amount: 1000,
        refillDay: 15,
      },
    },
    ratelimits: [
      {
        name: "requests",
        limit: 100,
        duration: 60000,
        autoApply: true,
      },
      {
        name: "heavy_operations",
        limit: 10,
        duration: 3600000,
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
import { keysCreateKey } from "@unkey/api/funcs/keysCreateKey.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await keysCreateKey(unkey, {
    apiId: "api_1234abcd",
    prefix: "prod",
    name: "Payment Service Production Key",
    byteLength: 24,
    externalId: "user_1234abcd",
    meta: {
      "plan": "enterprise",
      "featureFlags": {
        "betaAccess": true,
        "concurrentConnections": 10,
      },
      "customerName": "Acme Corp",
      "billing": {
        "tier": "premium",
        "renewal": "2024-12-31",
      },
    },
    roles: [
      "api_admin",
      "billing_reader",
    ],
    permissions: [
      "documents.read",
      "documents.write",
      "settings.view",
    ],
    expires: 1704067200000,
    credits: {
      remaining: 1000,
      refill: {
        interval: "daily",
        amount: 1000,
        refillDay: 15,
      },
    },
    ratelimits: [
      {
        name: "requests",
        limit: 100,
        duration: 60000,
        autoApply: true,
      },
      {
        name: "heavy_operations",
        limit: 10,
        duration: 3600000,
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("keysCreateKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2KeysCreateKeyRequestBody](../../models/components/v2keyscreatekeyrequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2KeysCreateKeyResponseBody](../../models/components/v2keyscreatekeyresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## deleteKey

Delete API keys permanently from user accounts or for cleanup purposes.

Use this for user-requested key deletion, account deletion workflows, or cleaning up unused keys. Keys are immediately invalidated. Two modes: soft delete (default, preserves audit records) and permanent delete.

**Important**: For temporary access control, use `updateKey` with `enabled: false` instead of deletion.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.delete_key` (to delete keys in any API)
- `api.<api_id>.delete_key` (to delete keys in a specific API)


### Example Usage

<!-- UsageSnippet language="typescript" operationID="keys.deleteKey" method="post" path="/v2/keys.deleteKey" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.keys.deleteKey({
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { keysDeleteKey } from "@unkey/api/funcs/keysDeleteKey.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await keysDeleteKey(unkey, {
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("keysDeleteKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2KeysDeleteKeyRequestBody](../../models/components/v2keysdeletekeyrequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2KeysDeleteKeyResponseBody](../../models/components/v2keysdeletekeyresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## getKey

Retrieve detailed key information for dashboard interfaces and administrative purposes.

Use this to build key management dashboards showing users their key details, status, permissions, and usage data. You can identify keys by `keyId` or the actual key string.

**Important**: Set `decrypt: true` only in secure contexts to retrieve plaintext key values from recoverable keys.

**Required Permissions**

Your root key must have one of the following permissions for basic key information:
- `api.*.read_key` (to read keys from any API)
- `api.<api_id>.read_key` (to read keys from a specific API)

Additional permission required for decrypt functionality:
- `api.*.decrypt_key` or `api.<api_id>.decrypt_key`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="keys.getKey" method="post" path="/v2/keys.getKey" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.keys.getKey({
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
import { keysGetKey } from "@unkey/api/funcs/keysGetKey.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await keysGetKey(unkey, {
    keyId: "key_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("keysGetKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2KeysGetKeyRequestBody](../../models/components/v2keysgetkeyrequestbody.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2KeysGetKeyResponseBody](../../models/components/v2keysgetkeyresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## migrateKeys

Returns HTTP 200 even on partial success; hashes that could not be migrated are listed under `data.failed`.

**Required Permissions**
Your root key must have one of the following permissions for basic key information:
- `api.*.create_key` (to migrate keys to any API)
- `api.<api_id>.create_key` (to migrate keys to a specific API)


### Example Usage

<!-- UsageSnippet language="typescript" operationID="keys.migrateKeys" method="post" path="/v2/keys.migrateKeys" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.keys.migrateKeys({
    migrationId: "your_company",
    apiId: "api_123456789",
    keys: [
      {
        hash: "your_already_hashed_key",
        name: "Payment Service Production Key",
        externalId: "user_1234abcd",
        meta: {
          "plan": "enterprise",
          "featureFlags": {
            "betaAccess": true,
            "concurrentConnections": 10,
          },
          "customerName": "Acme Corp",
          "billing": {
            "tier": "premium",
            "renewal": "2024-12-31",
          },
        },
        roles: [
          "api_admin",
          "billing_reader",
        ],
        permissions: [
          "documents.read",
          "documents.write",
          "settings.view",
        ],
        credits: {
          remaining: 1000,
          refill: {
            interval: "daily",
            amount: 1000,
            refillDay: 15,
          },
        },
        ratelimits: [
          {
            name: "requests",
            limit: 100,
            duration: 60000,
            autoApply: true,
          },
          {
            name: "heavy_operations",
            limit: 10,
            duration: 3600000,
          },
        ],
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
import { keysMigrateKeys } from "@unkey/api/funcs/keysMigrateKeys.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await keysMigrateKeys(unkey, {
    migrationId: "your_company",
    apiId: "api_123456789",
    keys: [
      {
        hash: "your_already_hashed_key",
        name: "Payment Service Production Key",
        externalId: "user_1234abcd",
        meta: {
          "plan": "enterprise",
          "featureFlags": {
            "betaAccess": true,
            "concurrentConnections": 10,
          },
          "customerName": "Acme Corp",
          "billing": {
            "tier": "premium",
            "renewal": "2024-12-31",
          },
        },
        roles: [
          "api_admin",
          "billing_reader",
        ],
        permissions: [
          "documents.read",
          "documents.write",
          "settings.view",
        ],
        credits: {
          remaining: 1000,
          refill: {
            interval: "daily",
            amount: 1000,
            refillDay: 15,
          },
        },
        ratelimits: [
          {
            name: "requests",
            limit: 100,
            duration: 60000,
            autoApply: true,
          },
          {
            name: "heavy_operations",
            limit: 10,
            duration: 3600000,
          },
        ],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("keysMigrateKeys failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2KeysMigrateKeysRequestBody](../../models/components/v2keysmigratekeysrequestbody.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2KeysMigrateKeysResponseBody](../../models/components/v2keysmigratekeysresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## removePermissions

Remove permissions from a key without affecting existing roles or other permissions.

Use this for privilege downgrades, removing temporary access, or plan changes that revoke specific capabilities. Permissions granted through roles remain unchanged.

**Important**: Changes take effect immediately with up to 30-second edge propagation.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.update_key` (to update keys in any API)
- `api.<api_id>.update_key` (to update keys in a specific API)

**Side Effects**

Invalidates the key cache for immediate effect, and makes permission changes available for verification within 30 seconds across all regions.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="keys.removePermissions" method="post" path="/v2/keys.removePermissions" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.keys.removePermissions({
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    permissions: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { keysRemovePermissions } from "@unkey/api/funcs/keysRemovePermissions.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await keysRemovePermissions(unkey, {
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    permissions: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("keysRemovePermissions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2KeysRemovePermissionsRequestBody](../../models/components/v2keysremovepermissionsrequestbody.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2KeysRemovePermissionsResponseBody](../../models/components/v2keysremovepermissionsresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## removeRoles

Remove roles from a key without affecting direct permissions or other roles.

Use this for privilege downgrades, removing temporary access, or subscription changes that revoke specific role-based capabilities. Direct permissions remain unchanged.

**Important**: Changes take effect immediately with up to 30-second edge propagation.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.update_key` (to update keys in any API)
- `api.<api_id>.update_key` (to update keys in a specific API)

**Side Effects**

Invalidates the key cache for immediate effect, and makes role changes available for verification within 30 seconds across all regions.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="keys.removeRoles" method="post" path="/v2/keys.removeRoles" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.keys.removeRoles({
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    roles: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { keysRemoveRoles } from "@unkey/api/funcs/keysRemoveRoles.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await keysRemoveRoles(unkey, {
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    roles: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("keysRemoveRoles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2KeysRemoveRolesRequestBody](../../models/components/v2keysremoverolesrequestbody.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2KeysRemoveRolesResponseBody](../../models/components/v2keysremoverolesresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## rerollKey

Generate a new API key while preserving the configuration from an existing key.

This operation creates a fresh key with a new token while maintaining all settings from the original key:
- Permissions and roles
- Custom metadata
- Rate limit configurations
- Identity associations
- Remaining credits
- Recovery settings

**Key Generation:**
- The system attempts to extract the prefix from the original key
- If prefix extraction fails, the default API prefix is used
- Key length follows the API's default byte configuration (or 16 bytes if not specified)

**Original Key Handling:**
- The original key will be revoked after the duration specified in `expiration`
- Set `expiration` to 0 to revoke immediately
- This allows for graceful key rotation with an overlap period

Common use cases include:
- Rotating keys for security compliance
- Issuing replacement keys for compromised credentials
- Creating backup keys with identical permissions

**Important:** Analytics and usage metrics are tracked at both the key level AND identity level. If the original key has an identity, the new key will inherit it, allowing you to track usage across both individual keys and the overall identity.

**Required Permissions**

 Your root key must have:
 - `api.*.create_key` or `api.<api_id>.create_key`
 - `api.*.encrypt_key` or `api.<api_id>.encrypt_key` (only when the original key is recoverable)


### Example Usage

<!-- UsageSnippet language="typescript" operationID="keys.rerollKey" method="post" path="/v2/keys.rerollKey" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.keys.rerollKey({
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
import { keysRerollKey } from "@unkey/api/funcs/keysRerollKey.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await keysRerollKey(unkey, {
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    expiration: 86400000,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("keysRerollKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2KeysRerollKeyRequestBody](../../models/components/v2keysrerollkeyrequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2KeysRerollKeyResponseBody](../../models/components/v2keysrerollkeyresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## setPermissions

Replace all permissions on a key with the specified set in a single atomic operation.

Use this to synchronize with external systems, reset permissions to a known state, or apply standardized permission templates. Permissions granted through roles remain unchanged.

**Important**: Changes take effect immediately with up to 30-second edge propagation.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.update_key` (to update keys in any API)
- `api.<api_id>.update_key` (to update keys in a specific API)

**Side Effects**

Invalidates the key cache for immediate effect, and makes permission changes available for verification within 30 seconds across all regions.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="keys.setPermissions" method="post" path="/v2/keys.setPermissions" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.keys.setPermissions({
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    permissions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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
import { keysSetPermissions } from "@unkey/api/funcs/keysSetPermissions.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await keysSetPermissions(unkey, {
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    permissions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("keysSetPermissions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2KeysSetPermissionsRequestBody](../../models/components/v2keyssetpermissionsrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2KeysSetPermissionsResponseBody](../../models/components/v2keyssetpermissionsresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## setRoles

Replace all roles on a key with the specified set in a single atomic operation.

Use this to synchronize with external systems, reset roles to a known state, or apply standardized role templates. Direct permissions are never affected.

**Important**: Changes take effect immediately with up to 30-second edge propagation.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.update_key` (to update keys in any API)
- `api.<api_id>.update_key` (to update keys in a specific API)

**Side Effects**

Invalidates the key cache for immediate effect, and makes role changes available for verification within 30 seconds across all regions.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="keys.setRoles" method="post" path="/v2/keys.setRoles" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.keys.setRoles({
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    roles: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { keysSetRoles } from "@unkey/api/funcs/keysSetRoles.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await keysSetRoles(unkey, {
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    roles: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("keysSetRoles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2KeysSetRolesRequestBody](../../models/components/v2keyssetrolesrequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2KeysSetRolesResponseBody](../../models/components/v2keyssetrolesresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## updateCredits

Update credit quotas in response to plan changes, billing cycles, or usage purchases.

Use this for user upgrades/downgrades, monthly quota resets, credit purchases, or promotional bonuses. Supports three operations: set, increment, or decrement credits. Set to null for unlimited usage.

**Important**: Setting unlimited credits automatically clears existing refill configurations.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.update_key` (to update keys in any API)
- `api.<api_id>.update_key` (to update keys in a specific API)

**Side Effects**

Credit updates remove the key from cache immediately. Setting credits to unlimited automatically clears any existing refill settings. Changes take effect instantly but may take up to 30 seconds to propagate to all edge regions.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="keys.updateCredits" method="post" path="/v2/keys.updateCredits" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.keys.updateCredits({
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    value: 1000,
    operation: "set",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { keysUpdateCredits } from "@unkey/api/funcs/keysUpdateCredits.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await keysUpdateCredits(unkey, {
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    value: 1000,
    operation: "set",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("keysUpdateCredits failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2KeysUpdateCreditsRequestBody](../../models/components/v2keysupdatecreditsrequestbody.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2KeysUpdateCreditsResponseBody](../../models/components/v2keysupdatecreditsresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## updateKey

Update key properties in response to plan changes, subscription updates, or account status changes.

Use this for user upgrades/downgrades, role modifications, or administrative changes. Supports partial updates - only specify fields you want to change. Set fields to null to clear them.

**Important**: Permissions and roles are replaced entirely. Use dedicated add/remove endpoints for incremental changes.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.update_key` (to update keys in any API)
- `api.<api_id>.update_key` (to update keys in a specific API)

**Side Effects**

If you specify an `externalId` that doesn't exist, a new identity will be automatically created and linked to the key. Permission updates will auto-create any permissions that don't exist in your workspace. Changes take effect immediately but may take up to 30 seconds to propagate to all edge regions due to cache invalidation.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="keys.updateKey" method="post" path="/v2/keys.updateKey" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.keys.updateKey({
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    name: "Payment Service Production Key",
    externalId: "user_912a841d",
    meta: {
      "plan": "enterprise",
      "limits": {
        "storage": "500GB",
        "compute": "1000 minutes/month",
      },
      "features": [
        "analytics",
        "exports",
        "webhooks",
      ],
      "hasAcceptedTerms": true,
      "billing": {
        "cycle": "monthly",
        "next_billing": "2024-01-15",
      },
      "preferences": {
        "timezone": "UTC",
        "notifications": true,
      },
      "lastBillingDate": "2023-10-15",
    },
    expires: 1704067200000,
    credits: {
      remaining: 1000,
      refill: {
        interval: "daily",
        amount: 1000,
        refillDay: 15,
      },
    },
    ratelimits: [
      {
        name: "api",
        limit: 738192,
        duration: 167910,
      },
    ],
    enabled: true,
    roles: [
      "api_admin",
      "billing_reader",
    ],
    permissions: [
      "documents.read",
      "documents.write",
      "settings.view",
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
import { keysUpdateKey } from "@unkey/api/funcs/keysUpdateKey.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await keysUpdateKey(unkey, {
    keyId: "key_2cGKbMxRyIzhCxo1Idjz8q",
    name: "Payment Service Production Key",
    externalId: "user_912a841d",
    meta: {
      "plan": "enterprise",
      "limits": {
        "storage": "500GB",
        "compute": "1000 minutes/month",
      },
      "features": [
        "analytics",
        "exports",
        "webhooks",
      ],
      "hasAcceptedTerms": true,
      "billing": {
        "cycle": "monthly",
        "next_billing": "2024-01-15",
      },
      "preferences": {
        "timezone": "UTC",
        "notifications": true,
      },
      "lastBillingDate": "2023-10-15",
    },
    expires: 1704067200000,
    credits: {
      remaining: 1000,
      refill: {
        interval: "daily",
        amount: 1000,
        refillDay: 15,
      },
    },
    ratelimits: [
      {
        name: "api",
        limit: 738192,
        duration: 167910,
      },
    ],
    enabled: true,
    roles: [
      "api_admin",
      "billing_reader",
    ],
    permissions: [
      "documents.read",
      "documents.write",
      "settings.view",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("keysUpdateKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2KeysUpdateKeyRequestBody](../../models/components/v2keysupdatekeyrequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2KeysUpdateKeyResponseBody](../../models/components/v2keysupdatekeyresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## verifyKey

Verify an API key's validity and permissions for request authentication.

Use this endpoint on every incoming request to your protected resources. It checks key validity, permissions, rate limits, and usage quotas in a single call.

**Important**: Always returns HTTP 200. Check the `valid` field in response data to determine if the key is authorized.

**Common use cases:**
- Authenticate API requests before processing
- Enforce permission-based access control
- Track usage and apply rate limits

**Required Permissions**

Your root key needs one of:
- `api.*.verify_key` (verify keys in any API)
- `api.<api_id>.verify_key` (verify keys in specific API)

**Note**: If your root key has no verify permissions at all, you will receive a `403 Forbidden` error. If your root key has verify permissions for a different API than the key you're verifying, you will receive a `200` response with `code: NOT_FOUND` to avoid leaking key existence.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="keys.verifyKey" method="post" path="/v2/keys.verifyKey" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.keys.verifyKey({
    key: "sk_1234abcdef",
    tags: [
      "endpoint=/users/profile",
      "method=GET",
      "region=us-east-1",
      "clientVersion=2.3.0",
      "feature=premium",
    ],
    permissions: "documents.read AND users.view",
    credits: {
      cost: 5,
    },
    ratelimits: [
      {
        name: "tokens",
        cost: 2,
        limit: 50,
        duration: 600000,
      },
    ],
    migrationId: "m_1234abcd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { keysVerifyKey } from "@unkey/api/funcs/keysVerifyKey.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await keysVerifyKey(unkey, {
    key: "sk_1234abcdef",
    tags: [
      "endpoint=/users/profile",
      "method=GET",
      "region=us-east-1",
      "clientVersion=2.3.0",
      "feature=premium",
    ],
    permissions: "documents.read AND users.view",
    credits: {
      cost: 5,
    },
    ratelimits: [
      {
        name: "tokens",
        cost: 2,
        limit: 50,
        duration: 600000,
      },
    ],
    migrationId: "m_1234abcd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("keysVerifyKey failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2KeysVerifyKeyRequestBody](../../models/components/v2keysverifykeyrequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2KeysVerifyKeyResponseBody](../../models/components/v2keysverifykeyresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## whoami

Find out what key this is.

**Required Permissions**

Your root key must have one of the following permissions for basic key information:
- `api.*.read_key` (to read keys from any API)
- `api.<api_id>.read_key` (to read keys from a specific API)

If your rootkey lacks permissions but the key exists, we may return a 404 status here to prevent leaking the existance of a key to unauthorized clients. If you believe that a key should exist, but receive a 404, please double check your root key has the correct permissions.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="keys.whoami" method="post" path="/v2/keys.whoami" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.keys.whoami({
    key: "sk_1234abcdef5678",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { keysWhoami } from "@unkey/api/funcs/keysWhoami.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await keysWhoami(unkey, {
    key: "sk_1234abcdef5678",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("keysWhoami failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2KeysWhoamiRequestBody](../../models/components/v2keyswhoamirequestbody.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2KeysWhoamiResponseBody](../../models/components/v2keyswhoamiresponsebody.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |