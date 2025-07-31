<!-- Start SDK Example Usage [usage] -->
```go
package main

import (
	"context"
	unkey "github.com/unkeyed/sdks/api/go/v2"
	"github.com/unkeyed/sdks/api/go/v2/models/components"
	"log"
	"os"
)

func main() {
	ctx := context.Background()

	s := unkey.New(
		unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
	)

	res, err := s.Apis.CreateAPI(ctx, components.V2ApisCreateAPIRequestBody{
		Name: "payment-service-production",
	})
	if err != nil {
		log.Fatal(err)
	}
	if res.V2ApisCreateAPIResponseBody != nil {
		// handle response
	}
}

```
<!-- End SDK Example Usage [usage] -->