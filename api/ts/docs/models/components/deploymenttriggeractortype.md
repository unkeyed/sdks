# DeploymentTriggerActorType

`user` is a dashboard user, `root_key` a root key, `github` the GitHub
user who pushed or opened the pull request, `system` Unkey itself.
`unknown` when the actor isn't recognized.


## Example Usage

```typescript
import { DeploymentTriggerActorType } from "@unkey/api/models/components";

let value: DeploymentTriggerActorType = "github";
```

## Values

```typescript
"user" | "root_key" | "github" | "system" | "unknown"
```