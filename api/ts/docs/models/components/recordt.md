# RecordT

Configure when this check persists its cost.
- `IF_ALLOWED`: counts the cost only if it fits.
- `ALWAYS`: counts the cost even if it does not fit, such as for usage that already happened.
- `NEVER`: counts nothing and only reports whether the cost fits. This is the same behavior as setting a cost of 0.


## Example Usage

```typescript
import { RecordT } from "@unkey/api/models/components";

let value: RecordT = "IF_ALLOWED";
```

## Values

```typescript
"IF_ALLOWED" | "ALWAYS" | "NEVER"
```