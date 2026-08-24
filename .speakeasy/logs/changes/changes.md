## Typescript SDK Changes:
* `unkey.analytics.getVerifications()`:  `error.status[404]` **Removed** (Breaking ⚠️)
* `unkey.portal.createSession()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `permissions` **Removed** (Breaking ⚠️)
    - `portal` **Added** (Breaking ⚠️)
    - `returnUrl` **Added**
    - `scopes` **Added** (Breaking ⚠️)
    - `slug` **Removed** (Breaking ⚠️)
  * `response.data` **Changed** (Breaking ⚠️)
    - `id` **Added**
    - `sessionId` **Removed** (Breaking ⚠️)
* `unkey.apps.updateApp()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `defaultBranch` **Removed** (Breaking ⚠️)
    - `git` **Added**
  * `response.data` **Changed** (Breaking ⚠️)
    - `defaultBranch` **Removed** (Breaking ⚠️)
    - `git` **Added**
* `unkey.apps.listApps()`: `response.data[]` **Changed** (Breaking ⚠️)
    - `defaultBranch` **Removed** (Breaking ⚠️)
    - `git` **Added**
* `unkey.apps.getApp()`: `response.data` **Changed** (Breaking ⚠️)
    - `defaultBranch` **Removed** (Breaking ⚠️)
    - `git` **Added**
* `unkey.domains.listDomains()`: **Added**
* `unkey.domains.deleteDomain()`: **Added**
* `unkey.domains.verifyDomain()`: **Added**
* `unkey.github.installApp()`: **Added**
* `unkey.permissions.setRolePermissions()`: **Added**
* `unkey.portal.exchangeCode()`: **Added**
* `unkey.portal.exchangeSession()`: **Removed** (Breaking ⚠️)
* `unkey.domains.getDomain()`: **Added**
* `unkey.apps.createApp()`: 
  *  `request.git` **Added**
* `unkey.analytics.getGatewayRequests()`: **Added**
* `unkey.domains.createDomain()`: **Added**
* `unkey.analytics.getRuntimeLogs()`: **Added**
* `unkey.environments.getEnvironment()`:  `response.data.kind` **Added**
* `unkey.environments.listEnvironments()`:  `response.data[].kind` **Added**
* `unkey.gateway.listPolicies()`: `response.data[]` **Changed**
    - `keyauth.credits` **Added**
    - `logging` **Added**
    - `ratelimit.identifier` **Changed**
    - `ratelimit.identifiers` **Added**
* `unkey.gateway.setPolicies()`: 
  * `request.policies[]` **Changed**
    - `keyauth.credits` **Added**
    - `logging` **Added**
    - `ratelimit.identifier` **Changed**
    - `ratelimit.identifiers` **Added**
* `unkey.gateway.updatePolicy()`: `request` **Changed**
    - `keyauth.credits` **Added**
    - `logging` **Added**
    - `ratelimit.identifier` **Changed**
    - `ratelimit.identifiers` **Added**
* `unkey.permissions.createRole()`: 
  *  `request.permissions` **Added**
* `unkey.analytics.getRatelimits()`: **Added**
