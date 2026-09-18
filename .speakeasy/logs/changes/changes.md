## Go SDK Changes:
* `Unkey.Apps.CreateApp()`:  `request.Request` **Changed** (Breaking ⚠️)
* `Unkey.Portal.GetVerifications()`: 
  * `response` **Changed** (Breaking ⚠️)
    - `BucketMillis` **Added**
    - `Data` **Removed** (Breaking ⚠️)
    - `Keys` **Added**
  *  `error.status[422]` **Added**
* `Unkey.Portal.CreateSession()`: 
  *  `request.Request.Scopes[].Enum(keys:create)` **Removed** (Breaking ⚠️)
* `Unkey.Permissions.SetRolePermissions()`:  `request.Request` **Changed** (Breaking ⚠️)
* `Unkey.Apps.GetApp()`: `response.Data` **Changed**
    - `Oci` **Added**
    - `SourceType` **Added**
* `Unkey.Portal.UpdatePortal()`: **Added**
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
* `Unkey.Domains.ListDomains()`: 
  * `request.Request` **Changed**
    - `App` **Changed**
    - `Environment` **Changed**
    - `Project` **Changed**
  *  `response.Data[].DomainConnect` **Added**
  *  `error.status[503]` **Added**
* `Unkey.Portal.GetPortal()`: **Added**
* `Unkey.Portal.DeletePortal()`: **Added**
* `Unkey.Portal.CreatePortal()`: **Added**
