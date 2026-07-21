# DeploymentRuntime

## Example Usage

```typescript
import { DeploymentRuntime } from "@unkey/api/models/components";

let value: DeploymentRuntime = {
  vCpus: 0.25,
  memoryMib: 256,
  storageMib: 0,
  port: 8080,
  command: [
    "node",
    "server.js",
  ],
  shutdownSignal: "SIGTERM",
  upstreamProtocol: "http1",
  healthcheck: {
    method: "GET",
    path: "/healthz",
    intervalSeconds: 10,
    timeoutSeconds: 2,
    failureThreshold: 3,
    initialDelaySeconds: 5,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `vCpus`                                                                                          | *number*                                                                                         | :heavy_check_mark:                                                                               | CPU allocation in vCPUs (1 = one vCPU, 0.5 = half a vCPU).<br/>                                  | 0.25                                                                                             |
| `memoryMib`                                                                                      | *number*                                                                                         | :heavy_check_mark:                                                                               | Memory allocation in mebibytes.<br/>                                                             | 256                                                                                              |
| `storageMib`                                                                                     | *number*                                                                                         | :heavy_check_mark:                                                                               | Ephemeral storage allocation in mebibytes.<br/>                                                  | 0                                                                                                |
| `port`                                                                                           | *number*                                                                                         | :heavy_check_mark:                                                                               | Port the container listens on.<br/>                                                              | 8080                                                                                             |
| `command`                                                                                        | *string*[]                                                                                       | :heavy_check_mark:                                                                               | Container entrypoint command override. Empty when none is set.<br/>                              | [<br/>"node",<br/>"server.js"<br/>]                                                              |
| `shutdownSignal`                                                                                 | [components.EnvironmentShutdownSignal](../../models/components/environmentshutdownsignal.md)     | :heavy_check_mark:                                                                               | Signal sent to the container on shutdown.<br/>                                                   | SIGTERM                                                                                          |
| `upstreamProtocol`                                                                               | [components.EnvironmentUpstreamProtocol](../../models/components/environmentupstreamprotocol.md) | :heavy_check_mark:                                                                               | Protocol used to reach the container.<br/>                                                       | http1                                                                                            |
| `healthcheck`                                                                                    | [components.EnvironmentHealthcheck](../../models/components/environmenthealthcheck.md)           | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |