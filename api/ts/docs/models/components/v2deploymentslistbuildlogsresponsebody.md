# V2DeploymentsListBuildLogsResponseBody

## Example Usage

```typescript
import { V2DeploymentsListBuildLogsResponseBody } from "@unkey/api/models/components";

let value: V2DeploymentsListBuildLogsResponseBody = {
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                                                                                                                                          | [components.Meta](../../models/components/meta.md)                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                              | Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team. |
| `data`                                                                                                                                                                                                                                                          | [components.BuildLogEntry](../../models/components/buildlogentry.md)[]                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                              | The log entries, in the order the build printed them.                                                                                                                                                                                                           |
| `pagination`                                                                                                                                                                                                                                                    | [components.Pagination](../../models/components/pagination.md)                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                              | Pagination metadata for list endpoints. Provides information necessary to traverse through large result sets efficiently using cursor-based pagination.                                                                                                         |