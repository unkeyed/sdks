# PermissionsListRolesResponse

## Example Usage

```typescript
import { PermissionsListRolesResponse } from "@unkey/api/models/operations";

let value: PermissionsListRolesResponse = {
  result: {
    meta: {
      requestId: "req_123",
    },
    data: [],
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
| `result`                                                                                                       | [components.V2PermissionsListRolesResponseBody](../../models/components/v2permissionslistrolesresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |