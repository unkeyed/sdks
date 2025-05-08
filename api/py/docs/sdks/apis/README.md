# Apis
(*apis*)

## Overview

### Available Operations

* [create_api](#create_api)

## create_api

### Example Usage

```python
from unkey_py import Unkey


with Unkey(
    root_key="UNKEY_ROOT_KEY",
) as unkey:

    res = unkey.apis.create_api(name="my-api")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `name`                                                              | *str*                                                               | :heavy_check_mark:                                                  | The name for your API. This is not customer facing.                 | my-api                                                              |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |

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