<!-- Start SDK Example Usage [usage] -->
```go
package main

import (
	"context"
	unkey "github.com/unkeyed/sdks/api/go/v3"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"log"
	"os"
)

func main() {
	ctx := context.Background()

	s := unkey.New(
		unkey.WithSecurity(os.Getenv("UNKEY_ROOT_KEY")),
	)

	res, err := s.Analytics.GetGatewayRequests(ctx, components.V2AnalyticsGetGatewayRequestsRequestBody{
		Query: "SELECT path, count() AS total FROM gateway_requests_v1 WHERE response_status >= 500 AND time >= toUnixTimestamp64Milli(now64(3) - INTERVAL 24 HOUR) GROUP BY path ORDER BY total DESC LIMIT 10",
	})
	if err != nil {
		log.Fatal(err)
	}
	if res.V2AnalyticsGetGatewayRequestsResponseBody != nil {
		// handle response
	}
}

```
<!-- End SDK Example Usage [usage] -->