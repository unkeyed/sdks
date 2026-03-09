# Operation

Defines how to modify the key's remaining credits. Use 'set' to replace current credits with a specific value or unlimited usage, 'increment' to add credits for plan upgrades or credit purchases, and 'decrement' to reduce credits for refunds or policy violations.


## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v2/models/components"
)

value := components.OperationSet

// Open enum: custom values can be created with a direct type cast
custom := components.Operation("custom_value")
```


## Values

| Name                 | Value                |
| -------------------- | -------------------- |
| `OperationSet`       | set                  |
| `OperationIncrement` | increment            |
| `OperationDecrement` | decrement            |