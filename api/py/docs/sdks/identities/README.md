# Identities
(*identities*)

## Overview

### Available Operations

* [create_identity](#create_identity)
* [delete_identity](#delete_identity)

## create_identity

### Example Usage

```python
from unkey_py import Unkey


with Unkey(
    root_key="UNKEY_ROOT_KEY",
) as unkey:

    res = unkey.identities.create_identity(external_id="user_123", ratelimits=[
        {
            "name": "api",
            "limit": 944235,
            "duration": 703242,
        },
        {
            "name": "api",
            "limit": 17275,
            "duration": 470912,
        },
        {
            "name": "api",
            "limit": 919479,
            "duration": 557622,
        },
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `external_id`                                                                                                                                                                                                                                                                                                                                                                            | *str*                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                       | The id of this identity in your system.<br/><br/>This usually comes from your authentication provider and could be a userId, organisationId or even an email.<br/>It does not matter what you use, as long as it uniquely identifies something in your application.<br/><br/>`externalId`s are unique across your workspace and therefore a `CONFLICT` error is returned when you try to create duplicates.<br/> | user_123                                                                                                                                                                                                                                                                                                                                                                                 |
| `meta`                                                                                                                                                                                                                                                                                                                                                                                   | [Optional[models.V2IdentitiesCreateIdentityRequestBodyMeta]](../../models/v2identitiescreateidentityrequestbodymeta.md)                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                       | Attach metadata to this identity that you need to have access to when verifying a key.<br/><br/>This will be returned as part of the `verifyKey` response.<br/>                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                          |
| `ratelimits`                                                                                                                                                                                                                                                                                                                                                                             | List[[models.Ratelimit](../../models/ratelimit.md)]                                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                       | Attach ratelimits to this identity.<br/><br/>When verifying keys, you can specify which limits you want to use and all keys attached to this identity, will share the limits.                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                          |
| `retries`                                                                                                                                                                                                                                                                                                                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                       | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                          |

### Response

**[models.V2IdentitiesCreateIdentityResponseBody](../../models/v2identitiescreateidentityresponsebody.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/problem+json           |
| errors.UnauthorizedErrorResponse   | 401                                | application/problem+json           |
| errors.ForbiddenErrorResponse      | 403                                | application/problem+json           |
| errors.ConflictErrorResponse       | 409                                | application/problem+json           |
| errors.InternalServerErrorResponse | 500                                | application/problem+json           |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## delete_identity

### Example Usage

```python
from unkey_py import Unkey


with Unkey(
    root_key="UNKEY_ROOT_KEY",
) as unkey:

    res = unkey.identities.delete_identity(request={
        "external_id": "user_123",
        "identity_id": "id_123",
    })

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                       | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                       | [models.V2IdentitiesDeleteIdentityRequestBodyUnion](../../models/v2identitiesdeleteidentityrequestbodyunion.md) | :heavy_check_mark:                                                                                              | The request object to use for the request.                                                                      |
| `retries`                                                                                                       | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                | :heavy_minus_sign:                                                                                              | Configuration to override the default retry behavior of the client.                                             |

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