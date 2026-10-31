## Go SDK Changes:
* `Unkey.Logs.GetApiRequestMetrics()`:  `error.status[429]` **Removed** (Breaking ⚠️)
* `Unkey.Logs.ListApiRequests()`:  `error.status[429]` **Removed** (Breaking ⚠️)
* `Unkey.Deployments.StopDeployment()`:  `error.status[403]` **Added**
* `Unkey.Deployments.PromoteDeployment()`:  `error.status[403]` **Added**
* `Unkey.Deployments.RollbackDeployment()`:  `error.status[403]` **Added**
* `Unkey.Deployments.StartDeployment()`:  `error.status[403]` **Added**
* `Unkey.Deployments.AuthorizeDeployment()`:  `error.status[403]` **Added**
* `Unkey.Deployments.ListBuildLogs()`:  `error.status[403]` **Added**
* `Unkey.Deployments.CancelDeployment()`:  `error.status[403]` **Added**
* `Unkey.Permissions.DeleteRole()`:  `error.status[404]` **Added**
* `Unkey.Portal.DeletePortal()`:  `error.status[403]` **Added**
* `Unkey.Portal.RevokeSession()`:  `error.status[403]` **Added**
* `Unkey.Portal.UpdatePortal()`:  `error.status[403]` **Added**
