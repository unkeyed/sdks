# SourceType

The configured source used to create deployments. Omitted for historical
apps whose source could not be classified.


## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v3/models/components"
)

value := components.SourceTypeGit
```


## Values

| Name            | Value           |
| --------------- | --------------- |
| `SourceTypeGit` | git             |
| `SourceTypeOci` | oci             |