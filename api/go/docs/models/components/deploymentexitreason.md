# DeploymentExitReason

Why the app stopped:

- `out_of_memory`: the app used more memory than its limit and was stopped.
- `exited_with_error`: the app exited with a non-zero `exitCode`.
- `start_failed`: the start command could not run, for example because the
  entrypoint does not exist.
- `exited_cleanly`: the app exited with code 0. A service must keep running,
  so Unkey restarts it.
- `unknown`: Unkey could not classify the exit. Handle this value, because
  new reasons can be added.


## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v3/models/components"
)

value := components.DeploymentExitReasonOutOfMemory

// Open enum: custom values can be created with a direct type cast
custom := components.DeploymentExitReason("custom_value")
```


## Values

| Name                                  | Value                                 |
| ------------------------------------- | ------------------------------------- |
| `DeploymentExitReasonOutOfMemory`     | out_of_memory                         |
| `DeploymentExitReasonExitedWithError` | exited_with_error                     |
| `DeploymentExitReasonStartFailed`     | start_failed                          |
| `DeploymentExitReasonExitedCleanly`   | exited_cleanly                        |
| `DeploymentExitReasonUnknown`         | unknown                               |