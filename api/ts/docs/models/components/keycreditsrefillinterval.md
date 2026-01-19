# KeyCreditsRefillInterval

How often credits are automatically refilled.

## Example Usage

```typescript
import { KeyCreditsRefillInterval } from "@unkey/api/models/components";

let value: KeyCreditsRefillInterval = "daily";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"daily" | "monthly" | Unrecognized<string>
```