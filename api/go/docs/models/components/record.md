# Record

Configure when this check persists its cost.
- `IF_ALLOWED`: counts the cost only if it fits.
- `ALWAYS`: counts the cost even if it does not fit, such as for usage that already happened.
- `NEVER`: counts nothing and only reports whether the cost fits. This is the same behavior as setting a cost of 0.


## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v4/models/components"
)

value := components.RecordIfAllowed
```


## Values

| Name              | Value             |
| ----------------- | ----------------- |
| `RecordIfAllowed` | IF_ALLOWED        |
| `RecordAlways`    | ALWAYS            |
| `RecordNever`     | NEVER             |