# KeyCreditsRefillInterval

How often credits are automatically refilled.

## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v2/models/components"
)

value := components.KeyCreditsRefillIntervalDaily

// Open enum: custom values can be created with a direct type cast
custom := components.KeyCreditsRefillInterval("custom_value")
```


## Values

| Name                              | Value                             |
| --------------------------------- | --------------------------------- |
| `KeyCreditsRefillIntervalDaily`   | daily                             |
| `KeyCreditsRefillIntervalMonthly` | monthly                           |