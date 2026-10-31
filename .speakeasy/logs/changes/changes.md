## Typescript SDK Changes:
* `unkey.logs.getApiRequestMetrics()`:  `error.status[429]` **Removed** (Breaking ⚠️)
* `unkey.logs.listApiRequests()`:  `error.status[429]` **Removed** (Breaking ⚠️)
* `unkey.deployments.stopDeployment()`:  `error.status[403]` **Added**
* `unkey.deployments.promoteDeployment()`:  `error.status[403]` **Added**
* `unkey.deployments.rollbackDeployment()`:  `error.status[403]` **Added**
* `unkey.deployments.startDeployment()`:  `error.status[403]` **Added**
* `unkey.deployments.authorizeDeployment()`:  `error.status[403]` **Added**
* `unkey.deployments.listBuildLogs()`:  `error.status[403]` **Added**
* `unkey.deployments.cancelDeployment()`:  `error.status[403]` **Added**
* `unkey.permissions.deleteRole()`:  `error.status[404]` **Added**
* `unkey.portal.deletePortal()`:  `error.status[403]` **Added**
* `unkey.portal.revokeSession()`:  `error.status[403]` **Added**
* `unkey.portal.updatePortal()`:  `error.status[403]` **Added**
