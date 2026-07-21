# EnvironmentRegion

Replica bounds for a single region the environment deploys to.

## Example Usage

```typescript
import { EnvironmentRegion } from "@unkey/api/models/components";

let value: EnvironmentRegion = {
  name: "us-east-1",
  replicas: {
    min: 1,
    max: 3,
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | Region name, such as us-east-1.                            | us-east-1                                                  |
| `replicas`                                                 | [components.Replicas](../../models/components/replicas.md) | :heavy_check_mark:                                         | Min and max replica bounds for autoscaling in a region.    |                                                            |