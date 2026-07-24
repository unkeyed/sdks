<!-- Start SDK Example Usage [usage] -->
```typescript
import { Unkey } from "@unkey/api";

const unkey = new Unkey({
  rootKey: process.env["UNKEY_ROOT_KEY"] ?? "",
});

async function run() {
  const result = await unkey.analytics.getRatelimits({
    query:
      "SELECT namespace_id, COUNT(*) AS total FROM ratelimits_v1 WHERE namespace_id = 'rlns_123' GROUP BY namespace_id",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->