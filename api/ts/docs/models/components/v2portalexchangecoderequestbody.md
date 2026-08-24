# V2PortalExchangeCodeRequestBody

## Example Usage

```typescript
import { V2PortalExchangeCodeRequestBody } from "@unkey/api/models/components";

let value: V2PortalExchangeCodeRequestBody = {
  code: "pst_abc123def456",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The exchange code carried by the portal URL from `portal.createSession`.<br/>Must be valid, unexpired, and not previously redeemed.<br/> | pst_abc123def456                                                                                                                 |