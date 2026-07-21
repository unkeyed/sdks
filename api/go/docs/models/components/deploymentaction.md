# DeploymentAction

A lifecycle operation that can be performed on the deployment in its current
state, given its status, environment, and whether it is the current
deployment.


## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v2/models/components"
)

value := components.DeploymentActionPromote
```


## Values

| Name                       | Value                      |
| -------------------------- | -------------------------- |
| `DeploymentActionPromote`  | promote                    |
| `DeploymentActionRollback` | rollback                   |
| `DeploymentActionStop`     | stop                       |
| `DeploymentActionStart`    | start                      |