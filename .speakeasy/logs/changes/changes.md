## Go SDK Changes:
* `Unkey.Deployments.AuthorizeDeployment()`: **Added**
* `Unkey.Deployments.CancelDeployment()`: **Added**
* `Unkey.Logs.GetApiRequestMetrics()`: **Added**
* `Unkey.Logs.ListApiRequests()`: **Added**
* `Unkey.Ratelimit.CreateNamespace()`: **Added**
* `Unkey.Ratelimit.DeleteNamespace()`: **Added**
* `Unkey.Ratelimit.ListNamespaces()`: **Added**
* `Unkey.Ratelimit.UpdateNamespace()`: **Added**
* `Unkey.Workspace.GetFlags()`: **Added**
* `Unkey.Workspace.UpdateFlag()`: **Added**
* `Unkey.Deployments.GetDeployment()`:  `response.Data.Issues` **Added**
* `Unkey.Deployments.ListDeployments()`:  `response.Data[].Issues` **Added**
* `Unkey.Gateway.ListPolicies()`:  `response.Data[].Match[].Header.Present` **Changed**
* `Unkey.Gateway.SetPolicies()`: 
  *  `request.Request.Policies[].Match[].Header.Present` **Changed**
* `Unkey.Gateway.UpdatePolicy()`: 
  *  `request.Request.Match[].Header.Present` **Changed**
