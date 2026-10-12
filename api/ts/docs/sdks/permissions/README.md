# Permissions

## Overview

Permission and role management operations

### Available Operations

* [createPermission](#createpermission) - Create permission
* [createRole](#createrole) - Create role
* [deletePermission](#deletepermission) - Delete permission
* [deleteRole](#deleterole) - Delete role
* [getPermission](#getpermission) - Get permission
* [getRole](#getrole) - Get role
* [listPermissions](#listpermissions) - List permissions
* [listRoles](#listroles) - List roles
* [setRolePermissions](#setrolepermissions) - Set role permissions
* [updatePermission](#updatepermission) - Update permission
* [updateRole](#updaterole) - Update role

## createPermission

Create a new permission to define specific actions or capabilities in your RBAC system. Permissions can be assigned directly to API keys or included in roles.

Use hierarchical naming patterns like `documents.read`, `admin.users.delete`, or `billing.invoices.create` for clear organization.

**Important:** Permission slugs must be unique within the workspace. Names do not need to be unique. Once created, permissions are immediately available for assignment.

**Required Permissions**

Your root key must have the following permission:
- `rbac.*.create_permission`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="permissions.createPermission" method="post" path="/v2/permissions.createPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.createPermission({
    name: "users.read",
    slug: "users-read",
    description: "Grants read-only access to user profile information, account settings, and subscription status.",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsCreatePermission } from "@unkey/api/funcs/permissionsCreatePermission.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsCreatePermission(unkey, {
    name: "users.read",
    slug: "users-read",
    description: "Grants read-only access to user profile information, account settings, and subscription status.",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsCreatePermission failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PermissionsCreatePermissionRequestBody](../../models/components/v2permissionscreatepermissionrequestbody.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PermissionsCreatePermissionResponseBody](../../models/components/v2permissionscreatepermissionresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.ConflictErrorResponse        | 409                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## createRole

Create a new role to group related permissions for easier management. Roles enable consistent permission assignment across multiple API keys. Permission slugs supplied in `permissions` are attached during creation. Missing permissions are created automatically.

**Important:** Role names must be unique within the workspace. Once created, roles are immediately available for assignment.

**Required Permissions**

Your root key must always have:
- `rbac.*.create_role`

When `permissions` is not empty, it must also have:
- `rbac.*.add_permission_to_role`

When any requested permission slug does not exist, it must also have:
- `rbac.*.create_permission`


### Example Usage: basic

<!-- UsageSnippet language="typescript" operationID="permissions.createRole" method="post" path="/v2/permissions.createRole" example="basic" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.createRole({
    name: "content.editor",
    description: "Can read and write content",
    permissions: [
      "content.read",
      "content.write",
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
import { permissionsCreateRole } from "@unkey/api/funcs/permissionsCreateRole.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsCreateRole(unkey, {
    name: "content.editor",
    description: "Can read and write content",
    permissions: [
      "content.read",
      "content.write",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsCreateRole failed:", res.error);
  }
}

run();
```
### Example Usage: withoutDescription

<!-- UsageSnippet language="typescript" operationID="permissions.createRole" method="post" path="/v2/permissions.createRole" example="withoutDescription" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.createRole({
    name: "api.reader",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsCreateRole } from "@unkey/api/funcs/permissionsCreateRole.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsCreateRole(unkey, {
    name: "api.reader",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsCreateRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PermissionsCreateRoleRequestBody](../../models/components/v2permissionscreaterolerequestbody.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PermissionsCreateRoleResponseBody](../../models/components/v2permissionscreateroleresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.ConflictErrorResponse        | 409                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## deletePermission

Remove a permission from your workspace. This also removes the permission from all API keys and roles.

**Important:** This operation cannot be undone and immediately affects all API keys and roles that had this permission assigned.

**Required Permissions**

Your root key must have the following permission:
- `rbac.*.delete_permission`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="permissions.deletePermission" method="post" path="/v2/permissions.deletePermission" example="basic" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.deletePermission({
    permission: "perm_1234567890abcdef",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsDeletePermission } from "@unkey/api/funcs/permissionsDeletePermission.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsDeletePermission(unkey, {
    permission: "perm_1234567890abcdef",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsDeletePermission failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PermissionsDeletePermissionRequestBody](../../models/components/v2permissionsdeletepermissionrequestbody.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PermissionsDeletePermissionResponseBody](../../models/components/v2permissionsdeletepermissionresponsebody.md)\>**

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

## deleteRole

Remove a role from your workspace. This also removes the role from all assigned API keys.

**Important:** This operation cannot be undone and immediately affects all API keys that had this role assigned.

**Required Permissions**

Your root key must have the following permission:
- `rbac.*.delete_role`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="permissions.deleteRole" method="post" path="/v2/permissions.deleteRole" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.deleteRole({
    role: "role_dns_manager",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsDeleteRole } from "@unkey/api/funcs/permissionsDeleteRole.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsDeleteRole(unkey, {
    role: "role_dns_manager",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsDeleteRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PermissionsDeleteRoleRequestBody](../../models/components/v2permissionsdeleterolerequestbody.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PermissionsDeleteRoleResponseBody](../../models/components/v2permissionsdeleteroleresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## getPermission

Retrieve details about a specific permission including its name, description, and metadata.

**Required Permissions**

Your root key must have the following permission:
- `rbac.*.read_permission`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="permissions.getPermission" method="post" path="/v2/permissions.getPermission" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.getPermission({
    permission: "perm_1234567890abcdef",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsGetPermission } from "@unkey/api/funcs/permissionsGetPermission.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsGetPermission(unkey, {
    permission: "perm_1234567890abcdef",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsGetPermission failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PermissionsGetPermissionRequestBody](../../models/components/v2permissionsgetpermissionrequestbody.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PermissionsGetPermissionResponseBody](../../models/components/v2permissionsgetpermissionresponsebody.md)\>**

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

## getRole

Retrieve details about a specific role including its assigned permissions.

**Required Permissions**

Your root key must have the following permission:
- `rbac.*.read_role`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="permissions.getRole" method="post" path="/v2/permissions.getRole" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.getRole({
    role: "role_1234567890abcdef",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsGetRole } from "@unkey/api/funcs/permissionsGetRole.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsGetRole(unkey, {
    role: "role_1234567890abcdef",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsGetRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PermissionsGetRoleRequestBody](../../models/components/v2permissionsgetrolerequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PermissionsGetRoleResponseBody](../../models/components/v2permissionsgetroleresponsebody.md)\>**

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

## listPermissions

Retrieve all permissions in your workspace.
Results are paginated and sorted by their id.

**Required Permissions**

Your root key must have the following permission:
- `rbac.*.read_permission`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="permissions.listPermissions" method="post" path="/v2/permissions.listPermissions" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.listPermissions({
    cursor: "eyJrZXkiOiJwZXJtXzEyMzQifQ==",
    limit: 50,
    search: "documents",
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
import { permissionsListPermissions } from "@unkey/api/funcs/permissionsListPermissions.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsListPermissions(unkey, {
    cursor: "eyJrZXkiOiJwZXJtXzEyMzQifQ==",
    limit: 50,
    search: "documents",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("permissionsListPermissions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PermissionsListPermissionsRequestBody](../../models/components/v2permissionslistpermissionsrequestbody.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PermissionsListPermissionsResponse](../../models/operations/permissionslistpermissionsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.ForbiddenErrorResponse       | 403                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## listRoles

Retrieve all roles in your workspace including their assigned permissions.
Results are paginated and sorted by their id.

**Required Permissions**

Your root key must have the following permission:
- `rbac.*.read_role`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="permissions.listRoles" method="post" path="/v2/permissions.listRoles" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.listRoles({
    limit: 50,
    cursor: "eyJrZXkiOiJyb2xlXzEyMzQifQ==",
    search: "admin",
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
import { permissionsListRoles } from "@unkey/api/funcs/permissionsListRoles.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsListRoles(unkey, {
    limit: 50,
    cursor: "eyJrZXkiOiJyb2xlXzEyMzQifQ==",
    search: "admin",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("permissionsListRoles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PermissionsListRolesRequestBody](../../models/components/v2permissionslistrolesrequestbody.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PermissionsListRolesResponse](../../models/operations/permissionslistrolesresponse.md)\>**

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

## setRolePermissions

Atomically replaces all permissions directly assigned to a role. An empty `permissions` array removes every permission from the role. Permissions that do not exist are created when the caller has permission to create them.

**Required Permissions**

Your root key must have:
- `rbac.*.add_permission_to_role`
- `rbac.*.remove_permission_from_role`

When any requested permission slug does not exist, it must also have:
- `rbac.*.create_permission`


### Example Usage

<!-- UsageSnippet language="typescript" operationID="permissions.setRolePermissions" method="post" path="/v2/permissions.setRolePermissions" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.setRolePermissions({
    roleId: "proj_1234abcd",
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
import { permissionsSetRolePermissions } from "@unkey/api/funcs/permissionsSetRolePermissions.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsSetRolePermissions(unkey, {
    roleId: "proj_1234abcd",
    permissions: [
      "<value 1>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsSetRolePermissions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PermissionsSetRolePermissionsRequestBodyUnion](../../models/components/v2permissionssetrolepermissionsrequestbodyunion.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PermissionsSetRolePermissionsResponseBody](../../models/components/v2permissionssetrolepermissionsresponsebody.md)\>**

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

## updatePermission

Update the name, slug, or description of a permission, identified by its ID or slug.

Omitted fields keep their current values. A request with no fields to update returns the stored permission without a write.

**Important**: Keys and roles reference the permission by ID, so they keep the permission after a slug change. Key verification can return the old slug for a short time while caches refresh. A slug that another permission in your workspace already uses returns 409.

**Required Permissions**

Your root key must have the following permission:
- `unkey:v1:<workspace_id>:projects/<project_id>/rbac/permissions/<permission_id>#write`


### Example Usage: changeSlug

<!-- UsageSnippet language="typescript" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="changeSlug" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updatePermission({
    permission: "documents-read",
    slug: "documents.read",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdatePermission } from "@unkey/api/funcs/permissionsUpdatePermission.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdatePermission(unkey, {
    permission: "documents-read",
    slug: "documents.read",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdatePermission failed:", res.error);
  }
}

run();
```
### Example Usage: clearDescription

<!-- UsageSnippet language="typescript" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="clearDescription" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updatePermission({
    permission: "perm_1234567890abcdef",
    description: null,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdatePermission } from "@unkey/api/funcs/permissionsUpdatePermission.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdatePermission(unkey, {
    permission: "perm_1234567890abcdef",
    description: null,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdatePermission failed:", res.error);
  }
}

run();
```
### Example Usage: invalidSlug

<!-- UsageSnippet language="typescript" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="invalidSlug" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updatePermission({
    permission: "perm_1234567890abcdef",
    name: "Read documents",
    slug: "documents.read",
    description: "Allows reading document resources",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdatePermission } from "@unkey/api/funcs/permissionsUpdatePermission.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdatePermission(unkey, {
    permission: "perm_1234567890abcdef",
    name: "Read documents",
    slug: "documents.read",
    description: "Allows reading document resources",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdatePermission failed:", res.error);
  }
}

run();
```
### Example Usage: keyDisabled

<!-- UsageSnippet language="typescript" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="keyDisabled" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updatePermission({
    permission: "perm_1234567890abcdef",
    name: "Read documents",
    slug: "documents.read",
    description: "Allows reading document resources",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdatePermission } from "@unkey/api/funcs/permissionsUpdatePermission.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdatePermission(unkey, {
    permission: "perm_1234567890abcdef",
    name: "Read documents",
    slug: "documents.read",
    description: "Allows reading document resources",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdatePermission failed:", res.error);
  }
}

run();
```
### Example Usage: missingKey

<!-- UsageSnippet language="typescript" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="missingKey" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updatePermission({
    permission: "perm_1234567890abcdef",
    name: "Read documents",
    slug: "documents.read",
    description: "Allows reading document resources",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdatePermission } from "@unkey/api/funcs/permissionsUpdatePermission.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdatePermission(unkey, {
    permission: "perm_1234567890abcdef",
    name: "Read documents",
    slug: "documents.read",
    description: "Allows reading document resources",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdatePermission failed:", res.error);
  }
}

run();
```
### Example Usage: permissionNotFound

<!-- UsageSnippet language="typescript" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="permissionNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updatePermission({
    permission: "perm_1234567890abcdef",
    name: "Read documents",
    slug: "documents.read",
    description: "Allows reading document resources",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdatePermission } from "@unkey/api/funcs/permissionsUpdatePermission.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdatePermission(unkey, {
    permission: "perm_1234567890abcdef",
    name: "Read documents",
    slug: "documents.read",
    description: "Allows reading document resources",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdatePermission failed:", res.error);
  }
}

run();
```
### Example Usage: rename

<!-- UsageSnippet language="typescript" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="rename" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updatePermission({
    permission: "perm_1234567890abcdef",
    name: "Read documents",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdatePermission } from "@unkey/api/funcs/permissionsUpdatePermission.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdatePermission(unkey, {
    permission: "perm_1234567890abcdef",
    name: "Read documents",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdatePermission failed:", res.error);
  }
}

run();
```
### Example Usage: slugTaken

<!-- UsageSnippet language="typescript" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="slugTaken" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updatePermission({
    permission: "perm_1234567890abcdef",
    name: "Read documents",
    slug: "documents.read",
    description: "Allows reading document resources",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdatePermission } from "@unkey/api/funcs/permissionsUpdatePermission.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdatePermission(unkey, {
    permission: "perm_1234567890abcdef",
    name: "Read documents",
    slug: "documents.read",
    description: "Allows reading document resources",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdatePermission failed:", res.error);
  }
}

run();
```
### Example Usage: updated

<!-- UsageSnippet language="typescript" operationID="permissions.updatePermission" method="post" path="/v2/permissions.updatePermission" example="updated" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updatePermission({
    permission: "perm_1234567890abcdef",
    name: "Read documents",
    slug: "documents.read",
    description: "Allows reading document resources",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdatePermission } from "@unkey/api/funcs/permissionsUpdatePermission.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdatePermission(unkey, {
    permission: "perm_1234567890abcdef",
    name: "Read documents",
    slug: "documents.read",
    description: "Allows reading document resources",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdatePermission failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PermissionsUpdatePermissionRequestBody](../../models/components/v2permissionsupdatepermissionrequestbody.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PermissionsUpdatePermissionResponseBody](../../models/components/v2permissionsupdatepermissionresponsebody.md)\>**

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

## updateRole

Update the name or description of a role, identified by its ID or name.

Omitted fields keep their current values. A request with no fields to update returns the stored role without a write.

This endpoint does not change the role's permissions or keys. Use `permissions.setRolePermissions`, `keys.addRoles`, and `keys.removeRoles` for those.

**Important**: Keys keep the role after a rename. Requests that name the role, such as `keys.addRoles`, must use the new name. Key verification can return the old name for a short time while caches refresh. A name that another role in your workspace already uses returns 409.

**Required Permissions**

Your root key must have the following permission:
- `unkey:v1:<workspace_id>:projects/<project_id>/rbac/roles/<role_id>#write`


### Example Usage: clearDescription

<!-- UsageSnippet language="typescript" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="clearDescription" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updateRole({
    role: "role_1234567890abcdef",
    description: null,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdateRole } from "@unkey/api/funcs/permissionsUpdateRole.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdateRole(unkey, {
    role: "role_1234567890abcdef",
    description: null,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdateRole failed:", res.error);
  }
}

run();
```
### Example Usage: describeByName

<!-- UsageSnippet language="typescript" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="describeByName" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updateRole({
    role: "support.readonly",
    description: "Read-only access for customer support",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdateRole } from "@unkey/api/funcs/permissionsUpdateRole.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdateRole(unkey, {
    role: "support.readonly",
    description: "Read-only access for customer support",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdateRole failed:", res.error);
  }
}

run();
```
### Example Usage: emptyName

<!-- UsageSnippet language="typescript" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="emptyName" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updateRole({
    role: "role_1234567890abcdef",
    name: "support.readonly",
    description: "Read-only access for customer support",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdateRole } from "@unkey/api/funcs/permissionsUpdateRole.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdateRole(unkey, {
    role: "role_1234567890abcdef",
    name: "support.readonly",
    description: "Read-only access for customer support",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdateRole failed:", res.error);
  }
}

run();
```
### Example Usage: keyDisabled

<!-- UsageSnippet language="typescript" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="keyDisabled" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updateRole({
    role: "role_1234567890abcdef",
    name: "support.readonly",
    description: "Read-only access for customer support",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdateRole } from "@unkey/api/funcs/permissionsUpdateRole.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdateRole(unkey, {
    role: "role_1234567890abcdef",
    name: "support.readonly",
    description: "Read-only access for customer support",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdateRole failed:", res.error);
  }
}

run();
```
### Example Usage: missingKey

<!-- UsageSnippet language="typescript" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="missingKey" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updateRole({
    role: "role_1234567890abcdef",
    name: "support.readonly",
    description: "Read-only access for customer support",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdateRole } from "@unkey/api/funcs/permissionsUpdateRole.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdateRole(unkey, {
    role: "role_1234567890abcdef",
    name: "support.readonly",
    description: "Read-only access for customer support",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdateRole failed:", res.error);
  }
}

run();
```
### Example Usage: nameTaken

<!-- UsageSnippet language="typescript" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="nameTaken" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updateRole({
    role: "role_1234567890abcdef",
    name: "support.readonly",
    description: "Read-only access for customer support",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdateRole } from "@unkey/api/funcs/permissionsUpdateRole.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdateRole(unkey, {
    role: "role_1234567890abcdef",
    name: "support.readonly",
    description: "Read-only access for customer support",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdateRole failed:", res.error);
  }
}

run();
```
### Example Usage: rename

<!-- UsageSnippet language="typescript" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="rename" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updateRole({
    role: "role_1234567890abcdef",
    name: "support.readonly",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdateRole } from "@unkey/api/funcs/permissionsUpdateRole.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdateRole(unkey, {
    role: "role_1234567890abcdef",
    name: "support.readonly",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdateRole failed:", res.error);
  }
}

run();
```
### Example Usage: roleNotFound

<!-- UsageSnippet language="typescript" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="roleNotFound" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updateRole({
    role: "role_1234567890abcdef",
    name: "support.readonly",
    description: "Read-only access for customer support",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdateRole } from "@unkey/api/funcs/permissionsUpdateRole.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdateRole(unkey, {
    role: "role_1234567890abcdef",
    name: "support.readonly",
    description: "Read-only access for customer support",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdateRole failed:", res.error);
  }
}

run();
```
### Example Usage: updated

<!-- UsageSnippet language="typescript" operationID="permissions.updateRole" method="post" path="/v2/permissions.updateRole" example="updated" -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.permissions.updateRole({
    role: "role_1234567890abcdef",
    name: "support.readonly",
    description: "Read-only access for customer support",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnkeyCore } from "@unkey/api/core.js";
import { permissionsUpdateRole } from "@unkey/api/funcs/permissionsUpdateRole.js";

// Use `UnkeyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unkey = new UnkeyCore({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const res = await permissionsUpdateRole(unkey, {
    role: "role_1234567890abcdef",
    name: "support.readonly",
    description: "Read-only access for customer support",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("permissionsUpdateRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V2PermissionsUpdateRoleRequestBody](../../models/components/v2permissionsupdaterolerequestbody.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.V2PermissionsUpdateRoleResponseBody](../../models/components/v2permissionsupdateroleresponsebody.md)\>**

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