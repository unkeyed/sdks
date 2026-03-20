## Typescript SDK Changes:
* `unkey.apis.listKeys()`:  `response.data[].lastUsedAt` **Added**
* `unkey.internal.getDeployment()`: `response.data.status` **Changed**
    - `enum(awaitingApproval)` **Added**
    - `enum(skipped)` **Added**
* `unkey.keys.getKey()`:  `response.data.lastUsedAt` **Added**
* `unkey.keys.whoami()`:  `response.data.lastUsedAt` **Added**
