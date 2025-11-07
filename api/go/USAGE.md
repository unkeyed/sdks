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

	res, err := s.Analytics.GetVerifications(ctx, components.V2AnalyticsGetVerificationsRequestBody{
		Query: "SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY",
	})
	if err != nil {
		log.Fatal(err)
	}
	if res.V2AnalyticsGetVerificationsResponseBody != nil {
		// handle response
	}
}

```
<!-- End SDK Example Usage [usage] -->