# Status

Current deployment status

## Example Usage

```typescript
import { Status } from "@unkey/api/models/components";

let value: Status = "READY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"UNSPECIFIED" | "PENDING" | "STARTING" | "BUILDING" | "DEPLOYING" | "NETWORK" | "FINALIZING" | "READY" | "FAILED" | "SKIPPED" | "AWAITING_APPROVAL" | Unrecognized<string>
```