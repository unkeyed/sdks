## Typescript SDK Changes:
* `unkey.deployments.authorizeDeployment()`: **Added**
* `unkey.deployments.cancelDeployment()`: **Added**
* `unkey.logs.getApiRequestMetrics()`: **Added**
* `unkey.logs.listApiRequests()`: **Added**
* `unkey.deployments.getDeployment()`:  `response.data.issues` **Added**
* `unkey.deployments.listDeployments()`:  `response.data[].issues` **Added**
* `unkey.gateway.listPolicies()`:  `response.data[].match[].header.present` **Changed**
* `unkey.gateway.setPolicies()`: 
  *  `request.policies[].match[].header.present` **Changed**
* `unkey.gateway.updatePolicy()`: 
  *  `request.match[].header.present` **Changed**
