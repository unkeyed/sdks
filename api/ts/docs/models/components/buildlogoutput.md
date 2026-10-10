# BuildLogOutput

The output stream a build log entry was printed to. Many tools write progress
and warnings to `stderr`, so `stderr` does not mean that the step failed.


## Example Usage

```typescript
import { BuildLogOutput } from "@unkey/api/models/components";

let value: BuildLogOutput = "stdout";
```

## Values

```typescript
"stdout" | "stderr"
```