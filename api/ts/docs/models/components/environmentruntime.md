# EnvironmentRuntime

Runtime settings that control how the container runs.
Omitted until the environment has runtime settings.


## Example Usage

```typescript
import { EnvironmentRuntime } from "@unkey/api/models/components";

let value: EnvironmentRuntime = {
  port: 8080,
  vCpus: 0.25,
  memoryMib: 256,
  storageMib: 0,
  command: [
    "node",
    "server.js",
  ],
  healthcheck: {
    method: "GET",
    path: "/healthz",
    intervalSeconds: 10,
    timeoutSeconds: 2,
    failureThreshold: 3,
    initialDelaySeconds: 5,
  },
  shutdownSignal: "SIGTERM",
  upstreamProtocol: "http1",
  openapiSpecPath: "/openapi.yaml",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `port`                                                                                           | *number*                                                                                         | :heavy_check_mark:                                                                               | Port the container listens on.<br/>                                                              | 8080                                                                                             |
| `vCpus`                                                                                          | *number*                                                                                         | :heavy_check_mark:                                                                               | CPU allocation in vCPUs (1 = one vCPU, 0.5 = half a vCPU).<br/>                                  | 0.25                                                                                             |
| `memoryMib`                                                                                      | *number*                                                                                         | :heavy_check_mark:                                                                               | Memory allocation in mebibytes.<br/>                                                             | 256                                                                                              |
| `storageMib`                                                                                     | *number*                                                                                         | :heavy_check_mark:                                                                               | Ephemeral storage allocation in mebibytes.<br/>                                                  | 0                                                                                                |
| `command`                                                                                        | *string*[]                                                                                       | :heavy_check_mark:                                                                               | Container entrypoint command override.<br/>                                                      | [<br/>"node",<br/>"server.js"<br/>]                                                              |
| `healthcheck`                                                                                    | [components.EnvironmentHealthcheck](../../models/components/environmenthealthcheck.md)           | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `shutdownSignal`                                                                                 | [components.EnvironmentShutdownSignal](../../models/components/environmentshutdownsignal.md)     | :heavy_check_mark:                                                                               | Signal sent to the container on shutdown.<br/>                                                   | SIGTERM                                                                                          |
| `upstreamProtocol`                                                                               | [components.EnvironmentUpstreamProtocol](../../models/components/environmentupstreamprotocol.md) | :heavy_check_mark:                                                                               | Protocol used to reach the container.<br/>                                                       | http1                                                                                            |
| `openapiSpecPath`                                                                                | *string*                                                                                         | :heavy_minus_sign:                                                                               | Path to the OpenAPI spec served by the container, if any.<br/>                                   | /openapi.yaml                                                                                    |