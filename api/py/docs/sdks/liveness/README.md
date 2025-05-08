# Liveness
(*liveness*)

## Overview

### Available Operations

* [liveness](#liveness) - Liveness check

## liveness

This endpoint checks if the service is alive.

### Example Usage

```python
from unkey_py import Unkey


with Unkey(
    root_key="UNKEY_ROOT_KEY",
) as unkey:

    res = unkey.liveness.liveness()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.V2LivenessResponseBody](../../models/v2livenessresponsebody.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.PreconditionFailedErrorResponse | 412                                    | application/json                       |
| errors.InternalServerErrorResponse     | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |