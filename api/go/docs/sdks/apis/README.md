# Apis
(*Apis*)

## Overview

### Available Operations

* [CreateAPI](#createapi)

## CreateAPI

### Example Usage

```go
package main

import(
	"context"
	api "github.com/unkeyed/sdks/go/api/v2"
	"github.com/unkeyed/sdks/go/api/v2/models/components"
	"log"
)

func main() {
    ctx := context.Background()

    s := api.New(
        api.WithSecurity("UNKEY_ROOT_KEY"),
    )

    res, err := s.Apis.CreateAPI(ctx, components.V2ApisCreateAPIRequestBody{
        Name: "my-api",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res.V2ApisCreateAPIResponseBody != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `ctx`                                                                                          | [context.Context](https://pkg.go.dev/context#Context)                                          | :heavy_check_mark:                                                                             | The context to use for the request.                                                            |
| `request`                                                                                      | [components.V2ApisCreateAPIRequestBody](../../models/components/v2apiscreateapirequestbody.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `opts`                                                                                         | [][operations.Option](../../models/operations/option.md)                                       | :heavy_minus_sign:                                                                             | The options for this request.                                                                  |

### Response

**[*operations.CreateAPIResponse](../../models/operations/createapiresponse.md), error**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| apierrors.BadRequestErrorResponse     | 400                                   | application/json                      |
| apierrors.UnauthorizedErrorResponse   | 401                                   | application/json                      |
| apierrors.ForbiddenErrorResponse      | 403                                   | application/json                      |
| apierrors.InternalServerErrorResponse | 500                                   | application/json                      |
| apierrors.APIError                    | 4XX, 5XX                              | \*/\*                                 |