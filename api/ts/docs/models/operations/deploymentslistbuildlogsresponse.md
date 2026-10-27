# DeploymentsListBuildLogsResponse

## Example Usage

```typescript
import { DeploymentsListBuildLogsResponse } from "@unkey/api/models/operations";

let value: DeploymentsListBuildLogsResponse = {
  result: {
    meta: {
      requestId: "req_123",
    },
    data: [
      {
        time: 1704067201000,
        stepId:
          "sha256:3f9c2b7e1d4a6f8c0b5e9d2a7c4f1e8b3d6a9c2f5e8b1d4a7c0f3e6b9d2a5c8f",
        step: "[3/7] RUN npm ci",
        output: "stdout",
        message: "added 412 packages in 12s\n",
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                               | [components.V2DeploymentsListBuildLogsResponseBody](../../models/components/v2deploymentslistbuildlogsresponsebody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |