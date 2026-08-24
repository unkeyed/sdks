# Type

Record type to create. `ALIAS` is not a real DNS record type: it means an apex-compatible
alias, which providers expose as ALIAS, ANAME, or a flattened CNAME. Apex domains cannot
hold a plain CNAME, so they receive `ALIAS` where a subdomain receives `CNAME`.


## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v2/models/components"
)

value := components.TypeCname
```


## Values

| Name        | Value       |
| ----------- | ----------- |
| `TypeCname` | CNAME       |
| `TypeAlias` | ALIAS       |
| `TypeTxt`   | TXT         |