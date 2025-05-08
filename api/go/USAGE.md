<!-- Start SDK Example Usage [usage] -->
```go
package main

import (
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

	res, err := s.Ratelimit.Limit(ctx, components.V2RatelimitLimitRequestBody{
		Namespace:  "sms.sign_up",
		Duration:   711276,
		Identifier: "<value>",
		Limit:      581877,
	})
	if err != nil {
		log.Fatal(err)
	}
	if res.V2RatelimitLimitResponseBody != nil {
		// handle response
	}
}

```
<!-- End SDK Example Usage [usage] -->