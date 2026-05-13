# V2PortalExchangeSessionRequestBody

## Example Usage

```typescript
import { V2PortalExchangeSessionRequestBody } from "@unkey/api/models/components";

let value: V2PortalExchangeSessionRequestBody = {
  sessionId: "pst_abc123def456",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `sessionId`                                                                                                         | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The session token ID received from `portal.createSession`.<br/>Must be valid, unexpired, and not previously exchanged.<br/> | pst_abc123def456                                                                                                    |