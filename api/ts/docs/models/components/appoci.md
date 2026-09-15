# AppOCI

An app's OCI image source.

## Example Usage

```typescript
import { AppOCI } from "@unkey/api/models/components";

let value: AppOCI = {
  image: "ghcr.io/acme/api:v1.2.3",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `image`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The configured default OCI image reference for new deployments. It must include an explicit tag or digest. | ghcr.io/acme/api:v1.2.3                                                                                    |