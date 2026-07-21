# DeploymentAction

A lifecycle operation that can be performed on the deployment in its current
state, given its status, environment, and whether it is the current
deployment.


## Example Usage

```typescript
import { DeploymentAction } from "@unkey/api/models/components";

let value: DeploymentAction = "promote";
```

## Values

```typescript
"promote" | "rollback" | "stop" | "start"
```