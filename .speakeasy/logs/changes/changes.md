## Go SDK Changes:
* `Unkey.Apis.ListKeys()`:  `response.Data[].LastUsedAt` **Added**
* `Unkey.Internal.GetDeployment()`: `response.Data.Status` **Changed**
    - `Enum(awaitingApproval)` **Added**
    - `Enum(skipped)` **Added**
* `Unkey.Keys.GetKey()`:  `response.Data.LastUsedAt` **Added**
* `Unkey.Keys.Whoami()`:  `response.Data.LastUsedAt` **Added**
