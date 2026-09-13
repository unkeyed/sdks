# DeploymentDocker

## Example Usage

```typescript
import { DeploymentDocker } from "@unkey/api/models/components";

let value: DeploymentDocker = {
  image: "ghcr.io/acme/api:v1.2.3",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `image`                                                | *string*                                               | :heavy_check_mark:                                     | The OCI image reference requested for this deployment. | ghcr.io/acme/api:v1.2.3                                |