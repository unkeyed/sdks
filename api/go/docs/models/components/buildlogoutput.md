# BuildLogOutput

The output stream a build log entry was printed to. Many tools write progress
and warnings to `stderr`, so `stderr` does not mean that the step failed.


## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v3/models/components"
)

value := components.BuildLogOutputStdout
```


## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `BuildLogOutputStdout` | stdout                 |
| `BuildLogOutputStderr` | stderr                 |