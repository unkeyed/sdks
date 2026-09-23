## Typescript SDK Changes:
* `unkey.apps.createApp()`:  `request` **Changed** (Breaking ⚠️)
* `unkey.portal.getVerifications()`: 
  * `response` **Changed** (Breaking ⚠️)
    - `bucketMillis` **Added**
    - `data` **Removed** (Breaking ⚠️)
    - `keys` **Added**
  *  `error.status[422]` **Added**
* `unkey.portal.createSession()`: `request` **Changed** (Breaking ⚠️)
    - `preview` **Removed** (Breaking ⚠️)
    - `scopes[].enum(keys:create)` **Removed** (Breaking ⚠️)
* `unkey.permissions.setRolePermissions()`:  `request` **Changed** (Breaking ⚠️)
* `unkey.apps.updateApp()`: 
  *  `request.oci` **Added**
  * `response.data` **Changed**
    - `oci` **Added**
    - `sourceType` **Added**
* `unkey.portal.updatePortal()`: **Added**
* `unkey.apps.getApp()`: `response.data` **Changed**
    - `oci` **Added**
    - `sourceType` **Added**
* `unkey.apps.listApps()`: `response.data[]` **Changed**
    - `oci` **Added**
    - `sourceType` **Added**
* `unkey.deployments.createDeploymentV3()`: **Added**
* `unkey.deployments.createDeployment()`: **Deprecated**
* `unkey.domains.getDomain()`:  `response.data.domainConnect` **Added**
* `unkey.domains.listDomains()`: 
  * `request` **Changed**
    - `app` **Changed**
    - `environment` **Changed**
    - `project` **Changed**
  *  `response.data[].domainConnect` **Added**
  *  `error.status[503]` **Added**
* `unkey.keys.updateKey()`: 
  *  `request.ratelimits` **Changed**
* `unkey.keys.verifyKey()`: 
  *  `request.keyspaces` **Added**
  *  `response.data.keyspaceId` **Added**
* `unkey.portal.getPortal()`: **Added**
* `unkey.portal.deletePortal()`: **Added**
* `unkey.portal.createPortal()`: **Added**
