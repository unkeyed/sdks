# RatelimitSDK
(*ratelimit*)

## Overview

### Available Operations

* [limit](#limit)
* [set_override](#set_override)
* [get_override](#get_override)
* [list_overrides](#list_overrides)
* [delete_override](#delete_override)

## limit

### Example Usage

```python
from unkey_py import Unkey


with Unkey(
    root_key="UNKEY_ROOT_KEY",
) as unkey:

    res = unkey.ratelimit.limit(namespace="sms.sign_up", duration=711276, identifier="<value>", limit=581877)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `namespace`                                                         | *str*                                                               | :heavy_check_mark:                                                  | The namespace name for the rate limit.                              | sms.sign_up                                                         |
| `duration`                                                          | *int*                                                               | :heavy_check_mark:                                                  | The duration in milliseconds for the rate limit window.             |                                                                     |
| `identifier`                                                        | *str*                                                               | :heavy_check_mark:                                                  | The identifier for the rate limit.                                  |                                                                     |
| `limit`                                                             | *int*                                                               | :heavy_check_mark:                                                  | The maximum number of requests allowed.                             |                                                                     |
| `cost`                                                              | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | The cost of the request. Defaults to 1 if not provided.             |                                                                     |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |

### Response

**[models.V2RatelimitLimitResponseBody](../../models/v2ratelimitlimitresponsebody.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## set_override

### Example Usage

```python
from unkey_py import Unkey


with Unkey(
    root_key="UNKEY_ROOT_KEY",
) as unkey:

    res = unkey.ratelimit.set_override(duration=920725, identifier="<value>", limit=354329)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `duration`                                                                                                                                                                                                                                 | *int*                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                         | The duration in milliseconds for the rate limit window.                                                                                                                                                                                    |
| `identifier`                                                                                                                                                                                                                               | *str*                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                         | Identifier of your user, this can be their userId, an email, an ip or anything else. Wildcards ( * ) can be used to match multiple identifiers, More info can be found at https://www.unkey.com/docs/ratelimiting/overrides#wildcard-rules |
| `limit`                                                                                                                                                                                                                                    | *int*                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                         | The maximum number of requests allowed.                                                                                                                                                                                                    |
| `namespace_id`                                                                                                                                                                                                                             | *Optional[str]*                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                         | The id of the namespace. Either namespaceId or namespaceName must be provided                                                                                                                                                              |
| `namespace_name`                                                                                                                                                                                                                           | *Optional[str]*                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                         | The name of the namespace. Either namespaceId or namespaceName must be provided                                                                                                                                                            |
| `retries`                                                                                                                                                                                                                                  | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                         | Configuration to override the default retry behavior of the client.                                                                                                                                                                        |

### Response

**[models.V2RatelimitSetOverrideResponseBody](../../models/v2ratelimitsetoverrideresponsebody.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## get_override

### Example Usage

```python
from unkey_py import Unkey


with Unkey(
    root_key="UNKEY_ROOT_KEY",
) as unkey:

    res = unkey.ratelimit.get_override(identifier="<value>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `identifier`                                                                                                                                                                                                                               | *str*                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                         | Identifier of your user, this can be their userId, an email, an ip or anything else. Wildcards ( * ) can be used to match multiple identifiers, More info can be found at https://www.unkey.com/docs/ratelimiting/overrides#wildcard-rules |
| `namespace_id`                                                                                                                                                                                                                             | *Optional[str]*                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                         | The id of the namespace. Either namespaceId or namespaceName must be provided                                                                                                                                                              |
| `namespace_name`                                                                                                                                                                                                                           | *Optional[str]*                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                         | The name of the namespace. Either namespaceId or namespaceName must be provided                                                                                                                                                            |
| `retries`                                                                                                                                                                                                                                  | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                         | Configuration to override the default retry behavior of the client.                                                                                                                                                                        |

### Response

**[models.V2RatelimitGetOverrideResponseBody](../../models/v2ratelimitgetoverrideresponsebody.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## list_overrides

### Example Usage

```python
from unkey_py import Unkey


with Unkey(
    root_key="UNKEY_ROOT_KEY",
) as unkey:

    res = unkey.ratelimit.list_overrides()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                         | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `request`                                                                                         | [models.V2RatelimitListOverridesRequestBody](../../models/v2ratelimitlistoverridesrequestbody.md) | :heavy_check_mark:                                                                                | The request object to use for the request.                                                        |
| `retries`                                                                                         | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                  | :heavy_minus_sign:                                                                                | Configuration to override the default retry behavior of the client.                               |

### Response

**[models.V2RatelimitListOverridesResponseBody](../../models/v2ratelimitlistoverridesresponsebody.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## delete_override

### Example Usage

```python
from unkey_py import Unkey


with Unkey(
    root_key="UNKEY_ROOT_KEY",
) as unkey:

    res = unkey.ratelimit.delete_override(identifier="<value>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                       | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `identifier`                                                                    | *str*                                                                           | :heavy_check_mark:                                                              | Identifier of the override to delete                                            |
| `namespace_id`                                                                  | *Optional[str]*                                                                 | :heavy_minus_sign:                                                              | The id of the namespace. Either namespaceId or namespaceName must be provided   |
| `namespace_name`                                                                | *Optional[str]*                                                                 | :heavy_minus_sign:                                                              | The name of the namespace. Either namespaceId or namespaceName must be provided |
| `retries`                                                                       | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                | :heavy_minus_sign:                                                              | Configuration to override the default retry behavior of the client.             |

### Response

**[models.V2RatelimitDeleteOverrideResponseBody](../../models/v2ratelimitdeleteoverrideresponsebody.md)**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestErrorResponse     | 400                                | application/json                   |
| errors.UnauthorizedErrorResponse   | 401                                | application/json                   |
| errors.ForbiddenErrorResponse      | 403                                | application/json                   |
| errors.NotFoundErrorResponse       | 404                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |