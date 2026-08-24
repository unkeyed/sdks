# V2DeployGetDeploymentResponseDataStatus

Current deployment status

## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v2/models/components"
)

value := components.V2DeployGetDeploymentResponseDataStatusUnspecified

// Open enum: custom values can be created with a direct type cast
custom := components.V2DeployGetDeploymentResponseDataStatus("custom_value")
```


## Values

| Name                                                      | Value                                                     |
| --------------------------------------------------------- | --------------------------------------------------------- |
| `V2DeployGetDeploymentResponseDataStatusUnspecified`      | UNSPECIFIED                                               |
| `V2DeployGetDeploymentResponseDataStatusPending`          | PENDING                                                   |
| `V2DeployGetDeploymentResponseDataStatusStarting`         | STARTING                                                  |
| `V2DeployGetDeploymentResponseDataStatusBuilding`         | BUILDING                                                  |
| `V2DeployGetDeploymentResponseDataStatusDeploying`        | DEPLOYING                                                 |
| `V2DeployGetDeploymentResponseDataStatusNetwork`          | NETWORK                                                   |
| `V2DeployGetDeploymentResponseDataStatusFinalizing`       | FINALIZING                                                |
| `V2DeployGetDeploymentResponseDataStatusReady`            | READY                                                     |
| `V2DeployGetDeploymentResponseDataStatusFailed`           | FAILED                                                    |
| `V2DeployGetDeploymentResponseDataStatusSkipped`          | SKIPPED                                                   |
| `V2DeployGetDeploymentResponseDataStatusAwaitingApproval` | AWAITING_APPROVAL                                         |
| `V2DeployGetDeploymentResponseDataStatusStopped`          | STOPPED                                                   |
| `V2DeployGetDeploymentResponseDataStatusSuperseded`       | SUPERSEDED                                                |
| `V2DeployGetDeploymentResponseDataStatusCancelled`        | CANCELLED                                                 |