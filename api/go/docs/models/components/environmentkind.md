# EnvironmentKind

The deployment lifecycle role of an environment.

- `production`: Deployments serve production traffic, support promotion and rollback, and cannot be stopped.
- `preview`: Deployments can be stopped and started and are eligible for preview lifecycle automation.


## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v2/models/components"
)

value := components.EnvironmentKindProduction
```


## Values

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `EnvironmentKindProduction` | production                  |
| `EnvironmentKindPreview`    | preview                     |