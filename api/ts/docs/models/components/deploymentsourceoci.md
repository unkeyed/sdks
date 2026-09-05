# DeploymentSourceOCI

Deploy a prebuilt OCI image without a build.

## Example Usage

```typescript
import { DeploymentSourceOCI } from "@unkey/api/models/components";

let value: DeploymentSourceOCI = {
  image: "ghcr.io/acme/api:v1.2.3",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `image`                                                                             | *string*                                                                            | :heavy_check_mark:                                                                  | OCI image to deploy. Mutable tags are resolved to immutable digests before rollout. | ghcr.io/acme/api:v1.2.3                                                             |