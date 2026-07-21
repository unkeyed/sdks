# DeploymentSourceImage

Deploy a prebuilt Docker image as-is.

## Example Usage

```typescript
import { DeploymentSourceImage } from "@unkey/api/models/components";

let value: DeploymentSourceImage = {
  dockerImage: "ghcr.io/acme/api:v1.2.3",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   | Example                       |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `dockerImage`                 | *string*                      | :heavy_check_mark:            | Docker image to deploy as-is. | ghcr.io/acme/api:v1.2.3       |