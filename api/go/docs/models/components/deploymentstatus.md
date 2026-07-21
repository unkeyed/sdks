# DeploymentStatus

Current lifecycle status of the deployment. Poll until it reaches a
terminal state: ready (serving), failed, skipped, superseded, stopped,
or cancelled.


## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v2/models/components"
)

value := components.DeploymentStatusPending
```


## Values

| Name                               | Value                              |
| ---------------------------------- | ---------------------------------- |
| `DeploymentStatusPending`          | pending                            |
| `DeploymentStatusStarting`         | starting                           |
| `DeploymentStatusBuilding`         | building                           |
| `DeploymentStatusDeploying`        | deploying                          |
| `DeploymentStatusNetwork`          | network                            |
| `DeploymentStatusFinalizing`       | finalizing                         |
| `DeploymentStatusReady`            | ready                              |
| `DeploymentStatusFailed`           | failed                             |
| `DeploymentStatusSkipped`          | skipped                            |
| `DeploymentStatusAwaitingApproval` | awaiting_approval                  |
| `DeploymentStatusStopped`          | stopped                            |
| `DeploymentStatusSuperseded`       | superseded                         |
| `DeploymentStatusCancelled`        | cancelled                          |