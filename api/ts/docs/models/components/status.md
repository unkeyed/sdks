# Status

Current deployment status

## Example Usage

```typescript
import { Status } from "@unkey/api/models/components";

let value: Status = "READY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UNSPECIFIED" | "PENDING" | "BUILDING" | "DEPLOYING" | "NETWORK" | "READY" | "FAILED" | Unrecognized<string>
```