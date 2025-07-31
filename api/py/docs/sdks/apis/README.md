# Apis
(*apis*)

## Overview

API management operations

### Available Operations

* [create_api](#create_api) - Create API namespace
* [delete_api](#delete_api) - Delete API namespace
* [get_api](#get_api) - Get API namespace
* [list_keys](#list_keys) - List API keys

## create_api

Create an API namespace for organizing keys by environment, service, or product.

Use this to separate production from development keys, isolate different services, or manage multiple products. Each API gets a unique identifier and dedicated infrastructure for secure key operations.

**Important**: API names must be unique within your workspace and cannot be changed after creation.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.create_api` (to create APIs in any workspace)


### Example Usage

<!-- UsageSnippet language="python" operationID="createApi" method="post" path="/v2/apis.createApi" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apis.create_api(name="payment-service-production")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                         | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       | Example                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                            | *str*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                | Unique identifier for this API namespace within your workspace.<br/>Use descriptive names like 'payment-service-prod' or 'user-api-dev' to clearly identify purpose and environment.<br/> | payment-service-production                                                                                                                                                        |
| `retries`                                                                                                                                                                         | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                | Configuration to override the default retry behavior of the client.                                                                                                               |                                                                                                                                                                                   |

### Response

**[models.V2ApisCreateAPIResponseBody](../../models/v2apiscreateapiresponsebody.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## delete_api

Permanently delete an API namespace and immediately invalidate all associated keys.

Use this for cleaning up development environments, retiring deprecated services, or removing unused resources. All keys in the namespace are immediately marked as deleted and will fail verification with `code=NOT_FOUND`.

**Important**: This operation is immediate and permanent. Verify you have the correct API ID before deletion. If delete protection is enabled, disable it first through the dashboard or API configuration.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.delete_api` (to delete any API)
- `api.<api_id>.delete_api` (to delete a specific API)


### Example Usage

<!-- UsageSnippet language="python" operationID="deleteApi" method="post" path="/v2/apis.deleteApi" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apis.delete_api(api_id="api_1234abcd")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `api_id`                                                                                                                                                                                                                                                                                                                                                                                                 | *str*                                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                       | Specifies which API namespace to permanently delete from your workspace.<br/>Must be a valid API ID that begins with 'api_' and exists within your workspace.<br/><br/>Before proceeding, ensure you have the correct API ID and understand that this action cannot be undone. If you need to migrate functionality, create replacement keys in a new API namespace and update client applications before deletion.<br/> | api_1234abcd                                                                                                                                                                                                                                                                                                                                                                                             |
| `retries`                                                                                                                                                                                                                                                                                                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                       | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                          |

### Response

**[models.V2ApisDeleteAPIResponseBody](../../models/v2apisdeleteapiresponsebody.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.BadRequestErrorResponse         | 400                                    | application/json                       |
| errors.UnauthorizedErrorResponse       | 401                                    | application/json                       |
| errors.ForbiddenErrorResponse          | 403                                    | application/json                       |
| errors.NotFoundErrorResponse           | 404                                    | application/json                       |
| errors.PreconditionFailedErrorResponse | 412                                    | application/json                       |
| errors.InternalServerErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## get_api

Retrieve basic information about an API namespace including its ID and name.

Use this to verify an API exists before performing operations, get the human-readable name when you only have the API ID, or confirm access to a specific namespace. For detailed key information, use the `listKeys` endpoint instead.

**Required Permissions**

Your root key must have one of the following permissions:
- `api.*.read_api` (to read any API)
- `api.<api_id>.read_api` (to read a specific API)


### Example Usage

<!-- UsageSnippet language="python" operationID="getApi" method="post" path="/v2/apis.getApi" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apis.get_api(api_id="api_1234abcd")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                   | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 | Example                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `api_id`                                                                                                                                    | *str*                                                                                                                                       | :heavy_check_mark:                                                                                                                          | Specifies which API to retrieve by its unique identifier.<br/>Must be a valid API ID that begins with 'api_' and exists within your workspace.<br/> | api_1234abcd                                                                                                                                |
| `retries`                                                                                                                                   | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                            | :heavy_minus_sign:                                                                                                                          | Configuration to override the default retry behavior of the client.                                                                         |                                                                                                                                             |

### Response

**[models.V2ApisGetAPIResponseBody](../../models/v2apisgetapiresponsebody.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## list_keys

Retrieve a paginated list of API keys for dashboard and administrative interfaces.

Use this to build key management dashboards, filter keys by user with `externalId`, or retrieve key details for administrative purposes. Each key includes status, metadata, permissions, and usage limits.

**Important**: Set `decrypt: true` only in secure contexts to retrieve plaintext key values from recoverable keys.

**Required Permissions**

Your root key must have one of the following permissions for basic key listing:
- `api.*.read_key` (to read keys from any API)
- `api.<api_id>.read_key` (to read keys from a specific API)

Additionally, you need read access to the API itself:
- `api.*.read_api` or `api.<api_id>.read_api`

Additional permission required for decrypt functionality:
- `api.*.decrypt_key` or `api.<api_id>.decrypt_key`


### Example Usage

<!-- UsageSnippet language="python" operationID="listKeys" method="post" path="/v2/apis.listKeys" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.apis.list_keys(api_id="api_1234abcd", limit=100, cursor="cursor_eyJsYXN0S2V5SWQiOiJrZXlfMjNld3MiLCJsYXN0Q3JlYXRlZEF0IjoxNjcyNTI0MjM0MDAwfQ==", external_id="user_1234abcd", decrypt=False, revalidate_keys_cache=False)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                 | Example                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `api_id`                                                                                                                                                                                                                                                                                                                                                                                                                    | *str*                                                                                                                                                                                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                          | The API namespace whose keys you want to list.<br/>Returns all keys in this API, subject to pagination and filters.<br/>                                                                                                                                                                                                                                                                                                    | api_1234abcd                                                                                                                                                                                                                                                                                                                                                                                                                |
| `limit`                                                                                                                                                                                                                                                                                                                                                                                                                     | *Optional[int]*                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                          | Maximum number of keys to return per request.<br/>Balance between response size and number of pagination calls needed.<br/>                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `cursor`                                                                                                                                                                                                                                                                                                                                                                                                                    | *Optional[str]*                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                          | Pagination cursor from previous response to fetch next page.<br/>Use when `hasMore: true` in previous response.<br/>                                                                                                                                                                                                                                                                                                        | cursor_eyJsYXN0S2V5SWQiOiJrZXlfMjNld3MiLCJsYXN0Q3JlYXRlZEF0IjoxNjcyNTI0MjM0MDAwfQ==                                                                                                                                                                                                                                                                                                                                         |
| `external_id`                                                                                                                                                                                                                                                                                                                                                                                                               | *Optional[str]*                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                          | Filter keys by external ID to find keys for a specific user or entity.<br/>Must exactly match the externalId set during key creation.<br/>                                                                                                                                                                                                                                                                                  | user_1234abcd                                                                                                                                                                                                                                                                                                                                                                                                               |
| `decrypt`                                                                                                                                                                                                                                                                                                                                                                                                                   | *Optional[bool]*                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                          | When true, attempts to include the plaintext key value in the response. SECURITY WARNING:<br/>- This requires special permissions on the calling root key<br/>- Only works for keys created with 'recoverable: true'<br/>- Exposes sensitive key material in the response<br/>- Should only be used in secure administrative contexts<br/>- Never enable this in user-facing applications                                   |                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `revalidate_keys_cache`                                                                                                                                                                                                                                                                                                                                                                                                     | *Optional[bool]*                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                          | EXPERIMENTAL: Skip the cache and fetch the keys directly from the database. This ensures you see the most recent state, including keys created moments ago. Use this when:<br/>- You've just created a key and need to display it immediately<br/>- You need absolute certainty about the current key state<br/>- You're debugging cache consistency issues<br/><br/>This parameter comes with a performance cost and should be used sparingly. |                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `retries`                                                                                                                                                                                                                                                                                                                                                                                                                   | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                          | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                             |

### Response

**[models.V2ApisListKeysResponseBody](../../models/v2apislistkeysresponsebody.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |