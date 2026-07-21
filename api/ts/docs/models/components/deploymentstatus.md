# DeploymentStatus

Current lifecycle status of the deployment. Poll until it reaches a
terminal state: ready (serving), failed, skipped, superseded, stopped,
or cancelled.


## Example Usage

```typescript
import { DeploymentStatus } from "@unkey/api/models/components";

let value: DeploymentStatus = "ready";
```

## Values

```typescript
"pending" | "starting" | "building" | "deploying" | "network" | "finalizing" | "ready" | "failed" | "skipped" | "awaiting_approval" | "stopped" | "superseded" | "cancelled"
```