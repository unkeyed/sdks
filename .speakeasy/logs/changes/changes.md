## Go SDK Changes:
* `Unkey.Portal.ListSessions()`: **Added**
* `Unkey.Portal.RevokeSession()`: **Added**
* `Unkey.RootKeys.CreateKey()`: **Added**
* `Unkey.RootKeys.DeleteKey()`: **Added**
* `Unkey.RootKeys.ListKeys()`: **Added**
* `Unkey.RootKeys.RerollKey()`: **Added**
* `Unkey.RootKeys.UpdateKey()`: **Added**
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
