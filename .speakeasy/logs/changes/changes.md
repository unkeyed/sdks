## Go SDK Changes:
* `Unkey.Apps.CreateApp()`:  `request.Request` **Changed** (Breaking ⚠️)
* `Unkey.Portal.CreateSession()`: 
  * `request.Request.Scopes[]` **Changed** (Breaking ⚠️)
    - `Enum(analytics:read)` **Removed** (Breaking ⚠️)
    - `Enum(keys:create)` **Removed** (Breaking ⚠️)
* `Unkey.Permissions.SetRolePermissions()`:  `request.Request` **Changed** (Breaking ⚠️)
* `Unkey.Apps.GetApp()`: `response.Data` **Changed**
    - `Oci` **Added**
    - `SourceType` **Added**
* `Unkey.Portal.UpdatePortal()`: **Added**
* `Unkey.Portal.GetPortal()`: **Added**
* `Unkey.Deployments.CreateDeploymentV3()`: **Added**
* `Unkey.Apps.ListApps()`: `response.Data[]` **Changed**
    - `Oci` **Added**
    - `SourceType` **Added**
* `Unkey.Apps.UpdateApp()`: 
  *  `request.Request.Oci` **Added**
  * `response.Data` **Changed**
    - `Oci` **Added**
    - `SourceType` **Added**
* `Unkey.Deployments.CreateDeployment()`: **Deprecated**
* `Unkey.Domains.GetDomain()`:  `response.Data.DomainConnect` **Added**
* `Unkey.Domains.ListDomains()`:  `response.Data[].DomainConnect` **Added**
* `Unkey.Portal.DeletePortal()`: **Added**
* `Unkey.Portal.CreatePortal()`: **Added**
