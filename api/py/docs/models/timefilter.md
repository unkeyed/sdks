# TimeFilter

Filters by the time of the event, in Unix milliseconds. Every bound is combined with AND.
Rows older than the workspace's retention are never returned or counted, whatever the bounds.



## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `gt`                                | *Optional[int]*                     | :heavy_minus_sign:                  | Keep events after this time.        |
| `gte`                               | *Optional[int]*                     | :heavy_minus_sign:                  | Keep events at or after this time.  |
| `lt`                                | *Optional[int]*                     | :heavy_minus_sign:                  | Keep events before this time.       |
| `lte`                               | *Optional[int]*                     | :heavy_minus_sign:                  | Keep events at or before this time. |