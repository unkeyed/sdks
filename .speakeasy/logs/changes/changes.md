## Go SDK Changes:
* `Unkey.Portal.CreateSession()`: 
  *  `request.Request.Permissions[]` **Changed** (Breaking ⚠️)
* `Unkey.Gateway.ListPolicies()`: **Added**
* `Unkey.Apps.GetApp()`: **Added**
* `Unkey.Apps.ListApps()`: **Added**
* `Unkey.Apps.UpdateApp()`: **Added**
* `Unkey.Deployments.CreateDeployment()`: **Added**
* `Unkey.Deployments.GetDeployment()`: **Added**
* `Unkey.Deployments.ListDeployments()`: **Added**
* `Unkey.Deployments.PromoteDeployment()`: **Added**
* `Unkey.Deployments.RollbackDeployment()`: **Added**
* `Unkey.Deployments.StartDeployment()`: **Added**
* `Unkey.Deployments.StopDeployment()`: **Added**
* `Unkey.Environments.GetEnvironment()`: **Added**
* `Unkey.Environments.ListEnvironmentVariables()`: **Added**
* `Unkey.Environments.ListEnvironments()`: **Added**
* `Unkey.Environments.RemoveEnvironmentVariables()`: **Added**
* `Unkey.Environments.SetEnvironmentVariables()`: **Added**
* `Unkey.Apps.CreateApp()`: **Added**
* `Unkey.Environments.UpdateSettings()`: **Added**
* `Unkey.Apis.ListKeys()`:  `response.Pagination` **Changed**
* `Unkey.Gateway.UpdatePolicy()`: **Added**
* `Unkey.Portal.GetVerifications()`: **Added**
* `Unkey.Portal.ListKeys()`: **Added**
* `Unkey.Portal.RerollKey()`: **Added**
* `Unkey.Projects.CreateProject()`: **Added**
* `Unkey.Projects.DeleteProject()`: **Added**
* `Unkey.Projects.GetProject()`: **Added**
* `Unkey.Projects.ListProjects()`: **Added**
* `Unkey.Projects.UpdateProject()`: **Added**
* `Unkey.Gateway.SetPolicies()`: **Added**
* `Unkey.Internal.CreateDeployment()`: **Deprecated**
* `Unkey.Internal.GetDeployment()`: **Deprecated**
* `Unkey.Identities.ListIdentities()`: 
  *  `request.Request.Search` **Added**
* `Unkey.Permissions.ListPermissions()`: 
  *  `request.Request.Search` **Added**
  *  `response.Pagination` **Changed**
* `Unkey.Permissions.ListRoles()`: 
  *  `request.Request.Search` **Added**
  *  `response.Pagination` **Changed**
* `Unkey.Apps.DeleteApp()`: **Added**
* `Unkey.Ratelimit.ListOverrides()`:  `response.Pagination` **Changed**
