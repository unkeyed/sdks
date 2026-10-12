# RootKeys

## Overview

### Available Operations

* [create_key](#create_key) - Create root key
* [delete_key](#delete_key) - Delete root key
* [list_keys](#list_keys) - List root keys
* [reroll_key](#reroll_key) - Reroll root key
* [update_key](#update_key) - Update root key

## create_key

Creates a root key for the authenticated workspace.
Requires `unkey:v1:<workspace_id>:rootKeys/*#write`.
The created root key cannot have more permissions than the caller.


### Example Usage

<!-- UsageSnippet language="python" operationID="rootKeys.createKey" method="post" path="/v2/rootKeys.createKey" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.root_keys.create_key(permissions=[
        "<value 1>",
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `permissions`                                                                                                                                                                                                                  | List[*str*]                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                             | Permissions to grant to the root key. Each permission must be within the caller's existing permissions.                                                                                                                        |
| `name`                                                                                                                                                                                                                         | *Optional[str]*                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                             | Optional name for the root key.                                                                                                                                                                                                |
| `expires`                                                                                                                                                                                                                      | *OptionalNullable[int]*                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                             | Expiration as Unix milliseconds, strictly in the future. Expiring root-key callers must provide a child expiry no later than their own. JWT admins and nonexpiring root-key callers may omit it or set null for no expiration. |
| `retries`                                                                                                                                                                                                                      | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                             | Configuration to override the default retry behavior of the client.                                                                                                                                                            |

### Response

**[models.V2RootKeysCreateKeyResponseBody](../../models/v2rootkeyscreatekeyresponsebody.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## delete_key

Deletes a root key in the authenticated workspace.
Requires `unkey:v1:<workspace_id>:rootKeys/<key_id>#delete`.
Use `rootKeys/*#delete` to delete any root key in the workspace.
Deleted keys cannot authenticate.


### Example Usage

<!-- UsageSnippet language="python" operationID="rootKeys.deleteKey" method="post" path="/v2/rootKeys.deleteKey" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.root_keys.delete_key(key_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `key_id`                                                                 | *str*                                                                    | :heavy_check_mark:                                                       | Root key identifier returned by rootKeys.createKey or rootKeys.listKeys. |
| `retries`                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)         | :heavy_minus_sign:                                                       | Configuration to override the default retry behavior of the client.      |

### Response

**[models.V2RootKeysDeleteKeyResponseBody](../../models/v2rootkeysdeletekeyresponsebody.md)**

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

## list_keys

Lists readable root keys in the authenticated workspace, ordered by key ID.
Requires `unkey:v1:<workspace_id>:rootKeys/<key_id>#read` for each returned key.
Use `rootKeys/*#read` to read all root keys. Write permission does not imply read.
A caller with no readable keys receives an empty page.

Includes disabled and expired keys from the new root-key store.
Deleted keys are excluded. Secrets and hashes are never returned.
Pass the returned cursor when hasMore is true to retrieve the next page.


### Example Usage

<!-- UsageSnippet language="python" operationID="rootKeys.listKeys" method="post" path="/v2/rootKeys.listKeys" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.root_keys.list_keys(limit=100)

    while res is not None:
        # Handle items

        res = res.next()

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Maximum number of readable root keys per page.                      |
| `cursor`                                                            | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | Opaque cursor from a previous response. Omit for the first page.    |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.RootKeysListKeysResponse](../../models/rootkeyslistkeysresponse.md)**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BadRequestErrorResponse      | 400                                 | application/json                    |
| errors.UnauthorizedErrorResponse    | 401                                 | application/json                    |
| errors.TooManyRequestsErrorResponse | 429                                 | application/problem+json            |
| errors.InternalServerErrorResponse  | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## reroll_key

Creates a new root key secret with the same name, enabled state, expiration, and
effective permissions as an existing root key in the authenticated workspace.
Requires `unkey:v1:<workspace_id>:rootKeys/<key_id>#write`, and the caller must
already hold every permission of the original key. When `expiration` is not null,
it also requires `unkey:v1:<workspace_id>:rootKeys/<key_id>#delete`.

`expiration` controls the original key: 0 revokes it immediately, a positive value
keeps it valid for that many milliseconds, and null keeps its current expiration.


### Example Usage

<!-- UsageSnippet language="python" operationID="rootKeys.rerollKey" method="post" path="/v2/rootKeys.rerollKey" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.root_keys.reroll_key(key_id="<id>", expiration=997482)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                   | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key_id`                                                                                                                                                                                    | *str*                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                          | Root key identifier returned by rootKeys.createKey or rootKeys.listKeys.                                                                                                                    |
| `expiration`                                                                                                                                                                                | *Nullable[int]*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                          | Milliseconds until the original root key expires. Use 0 to revoke it immediately.<br/>Use null to keep the original key's current expiration. This value never extends<br/>an existing expiration.<br/> |
| `retries`                                                                                                                                                                                   | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                          | Configuration to override the default retry behavior of the client.                                                                                                                         |

### Response

**[models.V2RootKeysRerollKeyResponseBody](../../models/v2rootkeysrerollkeyresponsebody.md)**

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

## update_key

Updates a root key in the authenticated workspace.
Requires `unkey:v1:<workspace_id>:rootKeys/<key_id>#write`.
Use `rootKeys/*#write` to update any root key in the workspace.

`permissions` replaces the complete permission set. Each permission must be a supported URN
in the authenticated workspace and within the caller's permissions.
An expiring root key can only update root keys that expire no later than itself.


### Example Usage

<!-- UsageSnippet language="python" operationID="rootKeys.updateKey" method="post" path="/v2/rootKeys.updateKey" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.root_keys.update_key(key_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key_id`                                                                                                                                                                                 | *str*                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                       | Root key identifier returned by rootKeys.createKey or rootKeys.listKeys.                                                                                                                 |
| `name`                                                                                                                                                                                   | *OptionalNullable[str]*                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                       | New root key name. Set null to remove the name. Omit to keep the current name.                                                                                                           |
| `enabled`                                                                                                                                                                                | *Optional[bool]*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                       | Whether the root key can authenticate. Omit to keep the current state.                                                                                                                   |
| `permissions`                                                                                                                                                                            | List[*str*]                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                       | Complete replacement permission set. Every permission must be a supported URN in the authenticated workspace<br/>and within the caller's permissions. Omit to keep the current permissions.<br/> |
| `retries`                                                                                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                       | Configuration to override the default retry behavior of the client.                                                                                                                      |

### Response

**[models.V2RootKeysUpdateKeyResponseBody](../../models/v2rootkeysupdatekeyresponsebody.md)**

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