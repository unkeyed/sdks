# V2PortalCreateSessionResponseData

## Example Usage

```typescript
import { V2PortalCreateSessionResponseData } from "@unkey/api/models/components";

let value: V2PortalCreateSessionResponseData = {
  id: "ps_abc123def456",
  url: "https://portal.unkey.com/?code=pst_abc123def456",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The portal session's identifier. Not a credential: it is safe to log and<br/>to store against your own records of the end user's visit.<br/> | ps_abc123def456                                                                                                                      |
| `url`                                                                                                                                | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The full portal URL to redirect the end user to. Carries a single-use<br/>exchange code that is valid for 15 minutes.<br/>           | https://portal.unkey.com/?code=pst_abc123def456                                                                                      |