# EnvironmentsListEnvironmentVariablesResponse

## Example Usage

```typescript
import { EnvironmentsListEnvironmentVariablesResponse } from "@unkey/api/models/operations";

let value: EnvironmentsListEnvironmentVariablesResponse = {
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

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                                       | [components.V2EnvironmentsListEnvironmentVariablesResponseBody](../../models/components/v2environmentslistenvironmentvariablesresponsebody.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |