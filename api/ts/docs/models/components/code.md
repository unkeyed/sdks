# Code

A machine-readable code indicating the verification status
or failure reason. Values: `VALID` (key is valid and passed all checks), `NOT_FOUND` (key doesn't
exist or belongs to wrong API), `FORBIDDEN` (key lacks required permissions), `INSUFFICIENT_PERMISSIONS`
(key lacks specific required permissions for this request), `INSUFFICIENT_CREDITS`
(key has no remaining credits), `USAGE_EXCEEDED` (key exceeded usage limits), `RATE_LIMITED` (key exceeded rate limits), `DISABLED` (key was explicitly disabled),
`EXPIRED` (key has passed its expiration date).


## Example Usage

```typescript
import { Code } from "@unkey/api/models/components";

let value: Code = "VALID";
```

## Values

```typescript
"VALID" | "NOT_FOUND" | "FORBIDDEN" | "INSUFFICIENT_PERMISSIONS" | "INSUFFICIENT_CREDITS" | "USAGE_EXCEEDED" | "RATE_LIMITED" | "DISABLED" | "EXPIRED"
```