# Liveness
(*Liveness*)

## Overview

### Available Operations

* [Liveness](#liveness) - Liveness check

## Liveness

This endpoint checks if the service is alive.

### Example Usage

```go
package main

import(
	"context"
	api "github.com/unkeyed/sdks/go/api/v2"
	"log"
)

func main() {
    ctx := context.Background()

    s := api.New(
        api.WithSecurity("UNKEY_ROOT_KEY"),
    )

    res, err := s.Liveness.Liveness(ctx)
    if err != nil {
        log.Fatal(err)
    }
    if res.V2LivenessResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `ctx`                                                    | [context.Context](https://pkg.go.dev/context#Context)    | :heavy_check_mark:                                       | The context to use for the request.                      |
| `opts`                                                   | [][operations.Option](../../models/operations/option.md) | :heavy_minus_sign:                                       | The options for this request.                            |

### Response

**[*operations.LivenessResponse](../../models/operations/livenessresponse.md), error**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| apierrors.PreconditionFailedErrorResponse | 412                                       | application/json                          |
| apierrors.InternalServerErrorResponse     | 500                                       | application/json                          |
| apierrors.APIError                        | 4XX, 5XX                                  | \*/\*                                     |