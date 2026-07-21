# EnvironmentHealthcheck

## Example Usage

```typescript
import { EnvironmentHealthcheck } from "@unkey/api/models/components";

let value: EnvironmentHealthcheck = {
  method: "GET",
  path: "/healthz",
  intervalSeconds: 10,
  timeoutSeconds: 2,
  failureThreshold: 3,
  initialDelaySeconds: 5,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `method`                                                                                           | [components.EnvironmentHealthcheckMethod](../../models/components/environmenthealthcheckmethod.md) | :heavy_check_mark:                                                                                 | HTTP method used to probe the container.<br/>                                                      | GET                                                                                                |
| `path`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | HTTP path probed on the container. Must start with a slash.<br/>                                   | /healthz                                                                                           |
| `intervalSeconds`                                                                                  | *number*                                                                                           | :heavy_minus_sign:                                                                                 | How often the probe runs, in seconds. Defaults to 10 when omitted.<br/>                            | 10                                                                                                 |
| `timeoutSeconds`                                                                                   | *number*                                                                                           | :heavy_minus_sign:                                                                                 | Per-probe timeout, in seconds. Defaults to 5 when omitted.<br/>                                    | 2                                                                                                  |
| `failureThreshold`                                                                                 | *number*                                                                                           | :heavy_minus_sign:                                                                                 | Consecutive failures before the container is restarted. Defaults to 3 when omitted.<br/>           | 3                                                                                                  |
| `initialDelaySeconds`                                                                              | *number*                                                                                           | :heavy_minus_sign:                                                                                 | Delay before the first probe runs, in seconds. Defaults to 0 when omitted.<br/>                    | 5                                                                                                  |