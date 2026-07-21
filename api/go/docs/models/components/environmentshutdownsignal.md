# EnvironmentShutdownSignal

Signal sent to the container on shutdown.


## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v2/models/components"
)

value := components.EnvironmentShutdownSignalSigterm
```


## Values

| Name                               | Value                              |
| ---------------------------------- | ---------------------------------- |
| `EnvironmentShutdownSignalSigterm` | SIGTERM                            |
| `EnvironmentShutdownSignalSigint`  | SIGINT                             |
| `EnvironmentShutdownSignalSigquit` | SIGQUIT                            |
| `EnvironmentShutdownSignalSigkill` | SIGKILL                            |