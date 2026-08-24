## Go SDK Changes:
* `Unkey.Analytics.GetVerifications()`:  `error.status[404]` **Removed** (Breaking ⚠️)
* `Unkey.Portal.CreateSession()`: 
  * `request.Request` **Changed** (Breaking ⚠️)
    - `Permissions` **Removed** (Breaking ⚠️)
    - `Portal` **Added** (Breaking ⚠️)
    - `ReturnUrl` **Added**
    - `Scopes` **Added** (Breaking ⚠️)
    - `Slug` **Removed** (Breaking ⚠️)
  * `response.Data` **Changed** (Breaking ⚠️)
    - `Id` **Added**
    - `SessionId` **Removed** (Breaking ⚠️)
* `Unkey.Apps.UpdateApp()`: 
  * `request.Request` **Changed** (Breaking ⚠️)
    - `DefaultBranch` **Removed** (Breaking ⚠️)
    - `Git` **Added**
  * `response.Data` **Changed** (Breaking ⚠️)
    - `DefaultBranch` **Removed** (Breaking ⚠️)
    - `Git` **Added**
* `Unkey.Apps.ListApps()`: `response.Data[]` **Changed** (Breaking ⚠️)
    - `DefaultBranch` **Removed** (Breaking ⚠️)
    - `Git` **Added**
* `Unkey.Apps.GetApp()`: `response.Data` **Changed** (Breaking ⚠️)
    - `DefaultBranch` **Removed** (Breaking ⚠️)
    - `Git` **Added**
* `Unkey.Domains.ListDomains()`: **Added**
* `Unkey.Domains.DeleteDomain()`: **Added**
* `Unkey.Domains.VerifyDomain()`: **Added**
* `Unkey.Github.InstallApp()`: **Added**
* `Unkey.Permissions.SetRolePermissions()`: **Added**
* `Unkey.Portal.ExchangeCode()`: **Added**
* `Unkey.Portal.ExchangeSession()`: **Removed** (Breaking ⚠️)
* `Unkey.Domains.GetDomain()`: **Added**
* `Unkey.Apps.CreateApp()`: 
  *  `request.Request.Git` **Added**
* `Unkey.Analytics.GetGatewayRequests()`: **Added**
* `Unkey.Domains.CreateDomain()`: **Added**
* `Unkey.Analytics.GetRuntimeLogs()`: **Added**
* `Unkey.Environments.GetEnvironment()`:  `response.Data.Kind` **Added**
* `Unkey.Environments.ListEnvironments()`:  `response.Data[].Kind` **Added**
* `Unkey.Gateway.ListPolicies()`: `response.Data[]` **Changed**
    - `Keyauth.Credits` **Added**
    - `Logging` **Added**
    - `Ratelimit.Identifier` **Changed**
    - `Ratelimit.Identifiers` **Added**
* `Unkey.Gateway.SetPolicies()`: 
  * `request.Request.Policies[]` **Changed**
    - `Keyauth.Credits` **Added**
    - `Logging` **Added**
    - `Ratelimit.Identifier` **Changed**
    - `Ratelimit.Identifiers` **Added**
* `Unkey.Gateway.UpdatePolicy()`: `request.Request` **Changed**
    - `Keyauth.Credits` **Added**
    - `Logging` **Added**
    - `Ratelimit.Identifier` **Changed**
    - `Ratelimit.Identifiers` **Added**
* `Unkey.Permissions.CreateRole()`: 
  *  `request.Request.Permissions` **Added**
* `Unkey.Analytics.GetRatelimits()`: **Added**
