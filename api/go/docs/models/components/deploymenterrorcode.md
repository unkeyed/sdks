# DeploymentErrorCode

The reason a deployment failed. `unknown` means Unkey could not classify the
failure; see `message` for details.


## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v2/models/components"
)

value := components.DeploymentErrorCodeNoSchedulableRegions
```


## Values

| Name                                        | Value                                       |
| ------------------------------------------- | ------------------------------------------- |
| `DeploymentErrorCodeNoSchedulableRegions`   | no_schedulable_regions                      |
| `DeploymentErrorCodeInvalidRuntimeSettings` | invalid_runtime_settings                    |
| `DeploymentErrorCodeCPUQuotaExceeded`       | cpu_quota_exceeded                          |
| `DeploymentErrorCodeMemoryQuotaExceeded`    | memory_quota_exceeded                       |
| `DeploymentErrorCodeStorageQuotaExceeded`   | storage_quota_exceeded                      |
| `DeploymentErrorCodeBuildFailed`            | build_failed                                |
| `DeploymentErrorCodeUnknown`                | unknown                                     |