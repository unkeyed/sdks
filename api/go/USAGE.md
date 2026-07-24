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

	res, err := s.Analytics.GetRatelimits(ctx, components.V2AnalyticsGetRatelimitsRequestBody{
		Query: "SELECT namespace_id, COUNT(*) AS total FROM ratelimits_v1 WHERE namespace_id = 'rlns_123' GROUP BY namespace_id",
	})
	if err != nil {
		log.Fatal(err)
	}
	if res.V2AnalyticsGetRatelimitsResponseBody != nil {
		// handle response
	}
}

```
<!-- End SDK Example Usage [usage] -->