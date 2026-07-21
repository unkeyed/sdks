# KeyauthPolicy

Verifies Unkey API keys on matching requests.

## Example Usage

```typescript
import { KeyauthPolicy } from "@unkey/api/models/components";

let value: KeyauthPolicy = {
  keyspaces: [
    "ks_1234abcd",
  ],
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `keyspaces`                                                                                                                 | *string*[]                                                                                                                  | :heavy_check_mark:                                                                                                          | Keyspaces to verify keys against, referenced by id. All keyspaces must<br/>belong to your workspace.                        |
| `locations`                                                                                                                 | [components.KeyLocation](../../models/components/keylocation.md)[]                                                          | :heavy_minus_sign:                                                                                                          | Where to look for the key on incoming requests, tried in order. Defaults<br/>to the `Authorization Bearer` header when omitted. |
| `permissionQuery`                                                                                                           | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Optional permission query the verified key must satisfy, e.g.<br/>`documents.read AND documents.write`.                     |
| `ratelimits`                                                                                                                | [components.KeyRatelimit](../../models/components/keyratelimit.md)[]                                                        | :heavy_minus_sign:                                                                                                          | Rate limits applied during key verification.                                                                                |