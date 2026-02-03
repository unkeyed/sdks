# Code

A machine-readable code indicating the verification status
or failure reason. Values: `VALID` (key is valid and passed all checks), `NOT_FOUND` (key doesn't
exist or belongs to wrong API), `FORBIDDEN` (key lacks required permissions), `INSUFFICIENT_PERMISSIONS`
(key lacks specific required permissions for this request), `USAGE_EXCEEDED` (key has no remaining credits), `RATE_LIMITED` (key exceeded rate limits), `DISABLED` (key was explicitly disabled),
`EXPIRED` (key has passed its expiration date).


## Example Usage

```typescript
import { Code } from "@unkey/api/models/components";

let value: Code = "VALID";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"VALID" | "NOT_FOUND" | "FORBIDDEN" | "INSUFFICIENT_PERMISSIONS" | "USAGE_EXCEEDED" | "RATE_LIMITED" | "DISABLED" | "EXPIRED" | Unrecognized<string>
```