## Typescript SDK Changes:
* `unkey.portal.listSessions()`: **Added**
* `unkey.portal.revokeSession()`: **Added**
* `unkey.rootKeys.createKey()`: **Added**
* `unkey.rootKeys.deleteKey()`: **Added**
* `unkey.rootKeys.listKeys()`: **Added**
* `unkey.rootKeys.rerollKey()`: **Added**
* `unkey.rootKeys.updateKey()`: **Added**
* `unkey.gateway.listPolicies()`:  `response.data[].match[].remoteIp` **Added**
* `unkey.gateway.setPolicies()`: 
  *  `request.policies[].match[].remoteIp` **Added**
* `unkey.gateway.updatePolicy()`: 
  *  `request.match[].remoteIp` **Added**
* `unkey.keys.rerollKey()`: 
  *  `request.expiration` **Changed**
* `unkey.portal.createSession()`:  `error.status[409]` **Added**
* `unkey.portal.rerollKey()`: 
  *  `request.expiration` **Changed**
