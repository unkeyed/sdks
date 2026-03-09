# UpdateKeyCreditsRefillInterval

How often credits are automatically refilled.

## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v2/models/components"
)

value := components.UpdateKeyCreditsRefillIntervalDaily

// Open enum: custom values can be created with a direct type cast
custom := components.UpdateKeyCreditsRefillInterval("custom_value")
```


## Values

| Name                                    | Value                                   |
| --------------------------------------- | --------------------------------------- |
| `UpdateKeyCreditsRefillIntervalDaily`   | daily                                   |
| `UpdateKeyCreditsRefillIntervalMonthly` | monthly                                 |