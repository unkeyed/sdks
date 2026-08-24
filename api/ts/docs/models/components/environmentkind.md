# EnvironmentKind

The deployment lifecycle role of an environment.

- `production`: Deployments serve production traffic, support promotion and rollback, and cannot be stopped.
- `preview`: Deployments can be stopped and started and are eligible for preview lifecycle automation.


## Example Usage

```typescript
import { EnvironmentKind } from "@unkey/api/models/components";

let value: EnvironmentKind = "production";
```

## Values

```typescript
"production" | "preview"
```