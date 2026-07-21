# DeploymentErrorCode

The reason a deployment failed. `unknown` means Unkey could not classify the
failure; see `message` for details.


## Example Usage

```typescript
import { DeploymentErrorCode } from "@unkey/api/models/components";

let value: DeploymentErrorCode = "no_schedulable_regions";
```

## Values

```typescript
"no_schedulable_regions" | "invalid_runtime_settings" | "cpu_quota_exceeded" | "memory_quota_exceeded" | "storage_quota_exceeded" | "build_failed" | "unknown"
```