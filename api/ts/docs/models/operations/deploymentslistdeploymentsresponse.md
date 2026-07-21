# DeploymentsListDeploymentsResponse

## Example Usage

```typescript
import { DeploymentsListDeploymentsResponse } from "@unkey/api/models/operations";

let value: DeploymentsListDeploymentsResponse = {
  result: {
    meta: {
      requestId: "req_123",
    },
    data: [
      {
        id: "d_1234abcd",
        status: "ready",
        isCurrent: true,
        environment: "production",
        app: "payments-api",
        project: "acme",
        git: {
          commitSha: "9f2c1a7d3b",
          branch: "main",
        },
        docker: {
          image: "ghcr.io/acme/api:v1.2.3",
        },
        availableActions: [
          "stop",
        ],
        regions: [
          "us-east-1",
          "eu-west-1",
        ],
        error: {
          code: "no_schedulable_regions",
          step: "deploying",
          message:
            "No schedulable regions configured. Please configure at least one schedulable region before deploying.",
        },
        domains: [
          "kebap-app.unkey.app",
        ],
        runtime: {
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
        },
        createdAt: 1704067200000,
        updatedAt: 1704153600000,
      },
    ],
    pagination: {
      cursor: "eyJrZXkiOiJrZXlfMTIzNCIsInRzIjoxNjk5Mzc4ODAwfQ==",
      hasMore: true,
    },
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                   | [components.V2DeploymentsListDeploymentsResponseBody](../../models/components/v2deploymentslistdeploymentsresponsebody.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |