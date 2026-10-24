# DeploymentIssueType

What is wrong with the running app:

- `crash_loop`: the app keeps stopping, so Unkey waits longer before each
  restart. `meta` describes the last exit.

Handle unknown values, because new types can be added.


## Example Usage

```typescript
import { DeploymentIssueType } from "@unkey/api/models/components";

let value: DeploymentIssueType = "crash_loop";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"crash_loop" | Unrecognized<string>
```