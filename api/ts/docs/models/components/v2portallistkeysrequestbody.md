# V2PortalListKeysRequestBody

## Example Usage

```typescript
import { V2PortalListKeysRequestBody } from "@unkey/api/models/components";

let value: V2PortalListKeysRequestBody = {
  cursor: "key_1234abcd",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | Maximum number of keys to return per request.<br/>Balance between response size and number of pagination calls needed.<br/> |                                                                                                                        |
| `cursor`                                                                                                               | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Pagination cursor from a previous response to fetch the next page.<br/>Use when `hasMore: true` in the previous response.<br/> | key_1234abcd                                                                                                           |