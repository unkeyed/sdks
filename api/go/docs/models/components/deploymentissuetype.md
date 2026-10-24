# DeploymentIssueType

What is wrong with the running app:

- `crash_loop`: the app keeps stopping, so Unkey waits longer before each
  restart. `meta` describes the last exit.

Handle unknown values, because new types can be added.


## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v3/models/components"
)

value := components.DeploymentIssueTypeCrashLoop

// Open enum: custom values can be created with a direct type cast
custom := components.DeploymentIssueType("custom_value")
```


## Values

| Name                           | Value                          |
| ------------------------------ | ------------------------------ |
| `DeploymentIssueTypeCrashLoop` | crash_loop                     |