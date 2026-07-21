# Replicas

Min and max replica bounds for autoscaling in a region.

## Example Usage

```typescript
import { Replicas } from "@unkey/api/models/components";

let value: Replicas = {
  min: 1,
  max: 3,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 | Example                     |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `min`                       | *number*                    | :heavy_check_mark:          | Minimum number of replicas. | 1                           |
| `max`                       | *number*                    | :heavy_check_mark:          | Maximum number of replicas. | 3                           |