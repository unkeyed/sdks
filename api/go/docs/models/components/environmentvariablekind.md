# EnvironmentVariableKind

How the value may be read back. `writeonly` values can never be read back
through the API; `recoverable` values can be decrypted. Values are encrypted
at rest either way.


## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v2/models/components"
)

value := components.EnvironmentVariableKindRecoverable
```


## Values

| Name                                 | Value                                |
| ------------------------------------ | ------------------------------------ |
| `EnvironmentVariableKindRecoverable` | recoverable                          |
| `EnvironmentVariableKindWriteonly`   | writeonly                            |