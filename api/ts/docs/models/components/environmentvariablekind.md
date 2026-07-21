# EnvironmentVariableKind

How the value may be read back. `writeonly` values can never be read back
through the API; `recoverable` values can be decrypted. Values are encrypted
at rest either way.


## Example Usage

```typescript
import { EnvironmentVariableKind } from "@unkey/api/models/components";

let value: EnvironmentVariableKind = "writeonly";
```

## Values

```typescript
"recoverable" | "writeonly"
```