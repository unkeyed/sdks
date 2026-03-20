# Status

Current deployment status

## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v2/models/components"
)

value := components.StatusUnspecified

// Open enum: custom values can be created with a direct type cast
custom := components.Status("custom_value")
```


## Values

| Name                     | Value                    |
| ------------------------ | ------------------------ |
| `StatusUnspecified`      | UNSPECIFIED              |
| `StatusPending`          | PENDING                  |
| `StatusStarting`         | STARTING                 |
| `StatusBuilding`         | BUILDING                 |
| `StatusDeploying`        | DEPLOYING                |
| `StatusNetwork`          | NETWORK                  |
| `StatusFinalizing`       | FINALIZING               |
| `StatusReady`            | READY                    |
| `StatusFailed`           | FAILED                   |
| `StatusSkipped`          | SKIPPED                  |
| `StatusAwaitingApproval` | AWAITING_APPROVAL        |