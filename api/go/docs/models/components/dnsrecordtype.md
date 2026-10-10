# DNSRecordType

Record type to create. `ALIAS` is not a real DNS record type: it means an apex-compatible
alias, which providers expose as ALIAS, ANAME, or a flattened CNAME. Apex domains cannot
hold a plain CNAME, so they receive `ALIAS` where a subdomain receives `CNAME`.


## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v3/models/components"
)

value := components.DNSRecordTypeCname
```


## Values

| Name                 | Value                |
| -------------------- | -------------------- |
| `DNSRecordTypeCname` | CNAME                |
| `DNSRecordTypeAlias` | ALIAS                |
| `DNSRecordTypeTxt`   | TXT                  |