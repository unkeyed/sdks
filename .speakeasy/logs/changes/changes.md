## Typescript SDK Changes:
* `unkey.portal.createSession()`: 
  *  `request.permissions[]` **Changed** (Breaking ⚠️)
* `unkey.gateway.listPolicies()`: **Added**
* `unkey.apps.getApp()`: **Added**
* `unkey.apps.listApps()`: **Added**
* `unkey.apps.updateApp()`: **Added**
* `unkey.deployments.createDeployment()`: **Added**
* `unkey.deployments.getDeployment()`: **Added**
* `unkey.deployments.listDeployments()`: **Added**
* `unkey.deployments.promoteDeployment()`: **Added**
* `unkey.deployments.rollbackDeployment()`: **Added**
* `unkey.deployments.startDeployment()`: **Added**
* `unkey.deployments.stopDeployment()`: **Added**
* `unkey.environments.getEnvironment()`: **Added**
* `unkey.environments.listEnvironmentVariables()`: **Added**
* `unkey.environments.listEnvironments()`: **Added**
* `unkey.environments.removeEnvironmentVariables()`: **Added**
* `unkey.environments.setEnvironmentVariables()`: **Added**
* `unkey.apps.createApp()`: **Added**
* `unkey.environments.updateSettings()`: **Added**
* `unkey.apis.listKeys()`:  `response.pagination` **Changed**
* `unkey.gateway.updatePolicy()`: **Added**
* `unkey.portal.getVerifications()`: **Added**
* `unkey.portal.listKeys()`: **Added**
* `unkey.portal.rerollKey()`: **Added**
* `unkey.projects.createProject()`: **Added**
* `unkey.projects.deleteProject()`: **Added**
* `unkey.projects.getProject()`: **Added**
* `unkey.projects.listProjects()`: **Added**
* `unkey.projects.updateProject()`: **Added**
* `unkey.gateway.setPolicies()`: **Added**
* `unkey.internal.createDeployment()`: **Deprecated**
* `unkey.internal.getDeployment()`: **Deprecated**
* `unkey.identities.listIdentities()`: 
  *  `request.search` **Added**
* `unkey.permissions.listPermissions()`: 
  *  `request.search` **Added**
  *  `response.pagination` **Changed**
* `unkey.permissions.listRoles()`: 
  *  `request.search` **Added**
  *  `response.pagination` **Changed**
* `unkey.apps.deleteApp()`: **Added**
* `unkey.ratelimit.listOverrides()`:  `response.pagination` **Changed**
