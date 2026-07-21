# EnvironmentShutdownSignal

Signal sent to the container on shutdown.


## Example Usage

```typescript
import { EnvironmentShutdownSignal } from "@unkey/api/models/components";

let value: EnvironmentShutdownSignal = "SIGTERM";
```

## Values

```typescript
"SIGTERM" | "SIGINT" | "SIGQUIT" | "SIGKILL"
```