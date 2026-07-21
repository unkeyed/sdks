# DeploymentDocker

## Example Usage

```typescript
import { DeploymentDocker } from "@unkey/api/models/components";

let value: DeploymentDocker = {
  image: "ghcr.io/acme/api:v1.2.3",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `image`                                | *string*                               | :heavy_check_mark:                     | The Docker image this deployment runs. | ghcr.io/acme/api:v1.2.3                |