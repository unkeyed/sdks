# Via

What started this deployment: `github` (a push or pull request), `api`,
`cli`, `dashboard`, or `unkey` (Unkey itself, for example a rebuild).
`unknown` when it was not recorded. `api`, `cli` and `dashboard` are
reported by the client.


## Example Usage

```typescript
import { Via } from "@unkey/api/models/components";

let value: Via = "github";
```

## Values

```typescript
"unknown" | "github" | "api" | "cli" | "dashboard" | "unkey"
```