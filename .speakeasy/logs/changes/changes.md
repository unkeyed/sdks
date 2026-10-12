## Go SDK Changes:
* `Unkey.Deployments.ListBuildLogs()`: **Added**
* `Unkey.Permissions.UpdatePermission()`: **Added**
* `Unkey.Permissions.UpdateRole()`: **Added**
* `Unkey.Portal.ListSessions()`: **Added**
* `Unkey.Portal.RevokeSession()`: **Added**
* `Unkey.RootKeys.CreateKey()`: **Added**
* `Unkey.RootKeys.DeleteKey()`: **Added**
* `Unkey.RootKeys.ListKeys()`: **Added**
* `Unkey.RootKeys.RerollKey()`: **Added**
* `Unkey.RootKeys.UpdateKey()`: **Added**
* `Unkey.Workspace.GetLimits()`: **Added**
* `Unkey.Workspace.GetUsage()`: **Added**
* `Unkey.Deployments.GetDeployment()`: `response.Data` **Changed**
    - `Docker.ResolvedImage` **Added**
    - `FinishedAt` **Added**
    - `Git.Author` **Added**
    - `Git.CommitMessage` **Added**
    - `Git.CommitTimestamp` **Added**
    - `Git.ForkRepository` **Added**
    - `Git.PrNumber` **Added**
    - `Trigger` **Added**
* `Unkey.Deployments.ListDeployments()`: 
  * `request.Request` **Changed**
    - `Branch` **Added**
    - `EndTime` **Added**
    - `StartTime` **Added**
  * `response.Data[]` **Changed**
    - `Docker.ResolvedImage` **Added**
    - `FinishedAt` **Added**
    - `Git.Author` **Added**
    - `Git.CommitMessage` **Added**
    - `Git.CommitTimestamp` **Added**
    - `Git.ForkRepository` **Added**
    - `Git.PrNumber` **Added**
    - `Trigger` **Added**
* `Unkey.Gateway.ListPolicies()`:  `response.Data[].Match[].RemoteIp` **Added**
* `Unkey.Gateway.SetPolicies()`: 
  *  `request.Request.Policies[].Match[].RemoteIp` **Added**
* `Unkey.Gateway.UpdatePolicy()`: 
  *  `request.Request.Match[].RemoteIp` **Added**
* `Unkey.Keys.RerollKey()`: 
  *  `request.Request.Expiration` **Changed**
* `Unkey.Portal.CreateSession()`:  `error.status[409]` **Added**
* `Unkey.Portal.RerollKey()`: 
  *  `request.Request.Expiration` **Changed**
