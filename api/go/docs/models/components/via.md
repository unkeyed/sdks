# Via

What started this deployment: `github` (a push or pull request), `api`,
`cli`, `dashboard`, or `unkey` (Unkey itself, for example a rebuild).
`unknown` when it was not recorded. `api`, `cli` and `dashboard` are
reported by the client.


## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v3/models/components"
)

value := components.ViaUnknown
```


## Values

| Name           | Value          |
| -------------- | -------------- |
| `ViaUnknown`   | unknown        |
| `ViaGithub`    | github         |
| `ViaAPI`       | api            |
| `ViaCli`       | cli            |
| `ViaDashboard` | dashboard      |
| `ViaUnkey`     | unkey          |