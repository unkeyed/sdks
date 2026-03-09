# Code

A machine-readable code indicating the verification status
or failure reason. Values: `VALID` (key is valid and passed all checks), `NOT_FOUND` (key doesn't
exist or belongs to wrong API), `FORBIDDEN` (key lacks required permissions), `INSUFFICIENT_PERMISSIONS`
(key lacks specific required permissions for this request), `USAGE_EXCEEDED` (key has no remaining credits), `RATE_LIMITED` (key exceeded rate limits), `DISABLED` (key was explicitly disabled),
`EXPIRED` (key has passed its expiration date).


## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v2/models/components"
)

value := components.CodeValid

// Open enum: custom values can be created with a direct type cast
custom := components.Code("custom_value")
```


## Values

| Name                          | Value                         |
| ----------------------------- | ----------------------------- |
| `CodeValid`                   | VALID                         |
| `CodeNotFound`                | NOT_FOUND                     |
| `CodeForbidden`               | FORBIDDEN                     |
| `CodeInsufficientPermissions` | INSUFFICIENT_PERMISSIONS      |
| `CodeUsageExceeded`           | USAGE_EXCEEDED                |
| `CodeRateLimited`             | RATE_LIMITED                  |
| `CodeDisabled`                | DISABLED                      |
| `CodeExpired`                 | EXPIRED                       |