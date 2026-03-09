## Go SDK Changes:
* `Unkey.Internal.CreateDeployment()`: 
  * `request.Request` **Changed** (Breaking ⚠️)
    - `App` **Added** (Breaking ⚠️)
    - `ProjectId` **Removed** (Breaking ⚠️)
    - `Project` **Added** (Breaking ⚠️)
  *  `error.status[429]` **Added**
* `Unkey.Analytics.GetVerifications()`:  `error.status[429]` **Changed** (Breaking ⚠️)
* `Unkey.Keys.RerollKey()`:  `error.status[429]` **Added**
* `Unkey.Keys.RemovePermissions()`:  `error.status[429]` **Added**
* `Unkey.Apis.ListKeys()`:  `error.status[429]` **Added**
* `Unkey.Apis.DeleteApi()`:  `error.status[429]` **Added**
* `Unkey.Internal.GetDeployment()`: 
  * `response.Data.Status` **Changed**
    - `Enum(finalizing)` **Added**
    - `Enum(starting)` **Added**
  *  `error.status[429]` **Added**
* `Unkey.Identities.CreateIdentity()`:  `error.status[429]` **Added**
* `Unkey.Identities.DeleteIdentity()`:  `error.status[429]` **Added**
* `Unkey.Identities.GetIdentity()`:  `error.status[429]` **Added**
* `Unkey.Identities.ListIdentities()`:  `error.status[429]` **Added**
* `Unkey.Identities.UpdateIdentity()`:  `error.status[429]` **Added**
* `Unkey.Keys.AddPermissions()`:  `error.status[429]` **Added**
* `Unkey.Keys.AddRoles()`:  `error.status[429]` **Added**
* `Unkey.Keys.CreateKey()`:  `error.status[429]` **Added**
* `Unkey.Keys.DeleteKey()`:  `error.status[429]` **Added**
* `Unkey.Keys.GetKey()`:  `error.status[429]` **Added**
* `Unkey.Keys.MigrateKeys()`:  `error.status[429]` **Added**
* `Unkey.Keys.SetPermissions()`:  `error.status[429]` **Added**
* `Unkey.Keys.RemoveRoles()`:  `error.status[429]` **Added**
* `Unkey.Apis.GetApi()`:  `error.status[429]` **Added**
* `Unkey.Apis.CreateApi()`:  `error.status[429]` **Added**
* `Unkey.Keys.VerifyKey()`:  `error.status[429]` **Added**
* `Unkey.Keys.UpdateCredits()`:  `error.status[429]` **Added**
* `Unkey.Keys.UpdateKey()`:  `error.status[429]` **Added**
* `Unkey.Keys.SetRoles()`:  `error.status[429]` **Added**
* `Unkey.Keys.Whoami()`:  `error.status[429]` **Added**
* `Unkey.Permissions.CreatePermission()`:  `error.status[429]` **Added**
* `Unkey.Permissions.CreateRole()`:  `error.status[429]` **Added**
* `Unkey.Permissions.DeletePermission()`:  `error.status[429]` **Added**
* `Unkey.Permissions.DeleteRole()`:  `error.status[429]` **Added**
* `Unkey.Permissions.GetPermission()`:  `error.status[429]` **Added**
* `Unkey.Permissions.GetRole()`:  `error.status[429]` **Added**
* `Unkey.Permissions.ListPermissions()`:  `error.status[429]` **Added**
* `Unkey.Permissions.ListRoles()`:  `error.status[429]` **Added**
* `Unkey.Ratelimit.DeleteOverride()`:  `error.status[429]` **Added**
* `Unkey.Ratelimit.GetOverride()`:  `error.status[429]` **Added**
* `Unkey.Ratelimit.Limit()`:  `error.status[429]` **Added**
* `Unkey.Ratelimit.ListOverrides()`:  `error.status[429]` **Added**
* `Unkey.Ratelimit.MultiLimit()`:  `error.status[429]` **Added**
* `Unkey.Ratelimit.SetOverride()`:  `error.status[429]` **Added**
