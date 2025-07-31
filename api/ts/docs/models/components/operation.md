# Operation

Defines how to modify the key's remaining credits. Use 'set' to replace current credits with a specific value or unlimited usage, 'increment' to add credits for plan upgrades or credit purchases, and 'decrement' to reduce credits for refunds or policy violations.


## Example Usage

```typescript
import { Operation } from "@unkey/api/models/components";

let value: Operation = "set";
```

## Values

```typescript
"set" | "increment" | "decrement"
```