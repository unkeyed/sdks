# V2EnvironmentsGetEnvironmentResponseBody

## Example Usage

```typescript
import { V2EnvironmentsGetEnvironmentResponseBody } from "@unkey/api/models/components";

let value: V2EnvironmentsGetEnvironmentResponseBody = {
  meta: {
    requestId: "req_123",
  },
  data: {
    id: "env_1234abcd",
    slug: "production",
    description: "Production environment",
    deleteProtection: false,
    createdAt: 1704067200000,
    updatedAt: 1704153600000,
    runtime: {
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
    },
    build: {
      dockerfile: "Dockerfile",
      rootDirectory: ".",
      buildCommand: "pnpm --filter api build",
      watchPaths: [
        "src/**",
      ],
      autoDeploy: true,
    },
    regions: [
      {
        name: "us-east-1",
        replicas: {
          min: 1,
          max: 3,
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.Environment](../../models/components/environment.md)                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                             |