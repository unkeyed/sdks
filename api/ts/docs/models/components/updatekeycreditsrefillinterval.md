# UpdateKeyCreditsRefillInterval

How often credits are automatically refilled.

## Example Usage

```typescript
import { UpdateKeyCreditsRefillInterval } from "@unkey/api/models/components";

let value: UpdateKeyCreditsRefillInterval = "daily";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"daily" | "monthly" | Unrecognized<string>
```