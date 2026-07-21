# ProjectsListProjectsResponse

## Example Usage

```typescript
import { ProjectsListProjectsResponse } from "@unkey/api/models/operations";

let value: ProjectsListProjectsResponse = {
  result: {
    meta: {
      requestId: "req_123",
    },
    data: [
      {
        id: "proj_1234abcd",
        name: "Payments Service",
        slug: "payments-service",
        createdAt: 1704067200000,
        updatedAt: 1704153600000,
        deleteProtection: false,
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [components.V2ProjectsListProjectsResponseBody](../../models/components/v2projectslistprojectsresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |