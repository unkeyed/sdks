# Identities

## Overview

Identity management operations

### Available Operations

* [create_identity](#create_identity) - Create Identity
* [delete_identity](#delete_identity) - Delete Identity
* [get_identity](#get_identity) - Get Identity
* [list_identities](#list_identities) - List Identities
* [update_identity](#update_identity) - Update Identity

## create_identity

Create an identity to group multiple API keys under a single entity. Identities enable shared rate limits and metadata across all associated keys.

Perfect for users with multiple devices, organizations with multiple API keys, or when you need unified rate limiting across different services.

**Important**
Requires `identity.*.create_identity` permission


### Example Usage

<!-- UsageSnippet language="python" operationID="identities.createIdentity" method="post" path="/v2/identities.createIdentity" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.identities.create_identity(external_id="user_123", ratelimits=[
        {
            "name": "api",
            "limit": 696170,
            "duration": 249033,
        },
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `external_id`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | *str*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Creates an identity using your system's unique identifier for a user, organization, or entity.<br/>Must be stable and unique across your workspace - duplicate externalIds return CONFLICT errors.<br/>This identifier links Unkey identities to your authentication system, database records, or tenant structure.<br/><br/>Avoid changing externalIds after creation as this breaks the link between your systems.<br/>Use consistent identifier patterns across your application for easier management and debugging.<br/>Accepts letters, numbers, underscores, dots, and hyphens for flexible identifier formats.<br/>Essential for implementing proper multi-tenant isolation and user-specific rate limiting.<br/>                                                                                                       | user_123                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `meta`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Dict[str, *Any*]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Stores arbitrary JSON metadata returned during key verification for contextual information.<br/>Eliminates additional database lookups during verification, improving performance for stateless services.<br/>Avoid storing sensitive data here as it's returned in verification responses.<br/><br/>Large metadata objects increase verification latency and should stay under 10KB total size.<br/>Use this for subscription details, feature flags, user preferences, and organization information.<br/>Metadata is returned as-is whenever keys associated with this identity are verified.<br/>                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `ratelimits`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | List[[models.RatelimitRequest](../../models/ratelimitrequest.md)]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Defines shared rate limits that apply to all keys belonging to this identity.<br/>Prevents abuse by users with multiple keys by enforcing consistent limits across their entire key portfolio.<br/>Essential for implementing fair usage policies and tiered access levels in multi-tenant applications.<br/><br/>Rate limit counters are shared across all keys with this identity, regardless of how many keys the user creates.<br/>During verification, specify which named limits to check for enforcement.<br/>Identity rate limits supplement any key-specific rate limits that may also be configured.<br/>- Each named limit can have different thresholds and windows<br/><br/>When verifying keys, you can specify which limits you want to use and all keys attached to this identity will share the limits, regardless of which specific key is used.<br/> |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `retries`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Response

**[models.V2IdentitiesCreateIdentityResponseBody](../../models/v2identitiescreateidentityresponsebody.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.ConflictErrorResponse       | 409                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## delete_identity

Permanently delete an identity. This operation cannot be undone.

Use this for data cleanup, compliance requirements, or when removing entities from your system.

> **Important**  
> Requires `identity.*.delete_identity` permission  
> Associated API keys remain functional but lose shared resources  
> External ID becomes available for reuse immediately


### Example Usage

<!-- UsageSnippet language="python" operationID="v2.identities.deleteIdentity" method="post" path="/v2/identities.deleteIdentity" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.identities.delete_identity(identity="user_123")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                               | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             | Example                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identity`                                                                                                                                                                                              | *str*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                      | The ID of the identity to delete. This can be either the externalId (from your own system that was used during identity creation) or the identityId (the internal ID returned by the identity service). | user_123                                                                                                                                                                                                |
| `retries`                                                                                                                                                                                               | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                      | Configuration to override the default retry behavior of the client.                                                                                                                                     |                                                                                                                                                                                                         |

### Response

**[models.V2IdentitiesDeleteIdentityResponseBody](../../models/v2identitiesdeleteidentityresponsebody.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/problem+json           |
| errors.UnauthorizedErrorResponse   | 401                                | application/problem+json           |
| errors.ForbiddenErrorResponse      | 403                                | application/problem+json           |
| errors.NotFoundErrorResponse       | 404                                | application/problem+json           |
| errors.InternalServerErrorResponse | 500                                | application/problem+json           |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## get_identity

Retrieve an identity by external ID. Returns metadata, rate limits, and other associated data.

Use this to check if an identity exists, view configurations, or build management dashboards.

> **Important**  
> Requires `identity.*.read_identity` permission


### Example Usage

<!-- UsageSnippet language="python" operationID="identities.getIdentity" method="post" path="/v2/identities.getIdentity" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.identities.get_identity(identity="user_123")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                 | Type                                                                                                                                                                                                      | Required                                                                                                                                                                                                  | Description                                                                                                                                                                                               | Example                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identity`                                                                                                                                                                                                | *str*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                        | The ID of the identity to retrieve. This can be either the externalId (from your own system that was used during identity creation) or the identityId (the internal ID returned by the identity service). | user_abc123                                                                                                                                                                                               |
| `retries`                                                                                                                                                                                                 | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                        | Configuration to override the default retry behavior of the client.                                                                                                                                       |                                                                                                                                                                                                           |

### Response

**[models.V2IdentitiesGetIdentityResponseBody](../../models/v2identitiesgetidentityresponsebody.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## list_identities

Get a paginated list of all identities in your workspace. Returns metadata and rate limit configurations.

Perfect for building management dashboards, auditing configurations, or browsing your identities.

> **Important**  
> Requires `identity.*.read_identity` permission


### Example Usage

<!-- UsageSnippet language="python" operationID="identities.listIdentities" method="post" path="/v2/identities.listIdentities" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.identities.list_identities(limit=50, cursor="cursor_eyJrZXkiOiJrZXlfMTIzNCJ9")

    while res is not None:
        # Handle items

        res = res.next()

```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `limit`                                                                                                                              | *Optional[int]*                                                                                                                      | :heavy_minus_sign:                                                                                                                   | The maximum number of identities to return in a single request. Use this to control response size and loading performance.           | 50                                                                                                                                   |
| `cursor`                                                                                                                             | *Optional[str]*                                                                                                                      | :heavy_minus_sign:                                                                                                                   | Pagination cursor from a previous response. Use this to fetch subsequent pages of results when the response contains a cursor value. | cursor_eyJrZXkiOiJrZXlfMTIzNCJ9                                                                                                      |
| `retries`                                                                                                                            | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                                   | Configuration to override the default retry behavior of the client.                                                                  |                                                                                                                                      |

### Response

**[models.IdentitiesListIdentitiesResponse](../../models/identitieslistidentitiesresponse.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## update_identity

Update an identity's metadata and rate limits. Only specified fields are modified - others remain unchanged.

Perfect for subscription changes, plan upgrades, or updating user information. Changes take effect immediately.

> **Important**
> Requires `identity.*.update_identity` permission
> Rate limit changes propagate within 30 seconds


### Example Usage

<!-- UsageSnippet language="python" operationID="v2.identities.updateIdentity" method="post" path="/v2/identities.updateIdentity" -->
```python
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.identities.update_identity(identity="user_123", meta={
        "email": "alice@example.com",
        "name": "Alice Smith",
        "plan": "premium",
    }, ratelimits=[
        {
            "name": "requests",
            "limit": 1000,
            "duration": 3600000,
            "auto_apply": True,
        },
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identity`                                                                                                                                                                                                                                                                                                                                                                                                            | *str*                                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                    | The ID of the identity to update. Accepts either the externalId (your system-generated identifier) or the identityId (internal identifier returned by the identity service).                                                                                                                                                                                                                                          | user_123                                                                                                                                                                                                                                                                                                                                                                                                              |
| `meta`                                                                                                                                                                                                                                                                                                                                                                                                                | Dict[str, *Any*]                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                    | Replaces all existing metadata with this new metadata object.<br/>Omitting this field preserves existing metadata, while providing an empty object clears all metadata.<br/>Avoid storing sensitive data here as it's returned in verification responses.<br/>Large metadata objects increase verification latency and should stay under 10KB total size.<br/>                                                        | {<br/>"name": "Alice Smith",<br/>"email": "alice@example.com",<br/>"plan": "premium"<br/>}                                                                                                                                                                                                                                                                                                                            |
| `ratelimits`                                                                                                                                                                                                                                                                                                                                                                                                          | List[[models.RatelimitRequest](../../models/ratelimitrequest.md)]                                                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                    | Replaces all existing identity rate limits with this complete list of rate limits.<br/>Omitting this field preserves existing rate limits, while providing an empty array removes all rate limits.<br/>These limits are shared across all keys belonging to this identity, preventing abuse through multiple keys.<br/>Rate limit changes take effect immediately but may take up to 30 seconds to propagate across all regions.<br/> | [<br/>{<br/>"name": "requests",<br/>"limit": 1000,<br/>"duration": 3600000,<br/>"autoApply": true<br/>}<br/>]                                                                                                                                                                                                                                                                                                         |
| `retries`                                                                                                                                                                                                                                                                                                                                                                                                             | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                    | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Response

**[models.V2IdentitiesUpdateIdentityResponseBody](../../models/v2identitiesupdateidentityresponsebody.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |