## Typescript SDK Changes:
* `unkey.apps.createApp()`:  `request` **Changed** (Breaking ⚠️)
* `unkey.portal.createSession()`: 
  * `request.scopes[]` **Changed** (Breaking ⚠️)
    - `enum(analytics:read)` **Removed** (Breaking ⚠️)
    - `enum(keys:create)` **Removed** (Breaking ⚠️)
* `unkey.permissions.setRolePermissions()`:  `request` **Changed** (Breaking ⚠️)
* `unkey.apps.getApp()`: `response.data` **Changed**
    - `oci` **Added**
    - `sourceType` **Added**
* `unkey.portal.updatePortal()`: **Added**
* `unkey.portal.getPortal()`: **Added**
* `unkey.deployments.createDeploymentV3()`: **Added**
* `unkey.apps.listApps()`: `response.data[]` **Changed**
    - `oci` **Added**
    - `sourceType` **Added**
* `unkey.apps.updateApp()`: 
  *  `request.oci` **Added**
  * `response.data` **Changed**
    - `oci` **Added**
    - `sourceType` **Added**
* `unkey.deployments.createDeployment()`: **Deprecated**
* `unkey.domains.getDomain()`:  `response.data.domainConnect` **Added**
* `unkey.domains.listDomains()`:  `response.data[].domainConnect` **Added**
* `unkey.keys.updateKey()`: 
  *  `request.ratelimits` **Changed**
* `unkey.portal.deletePortal()`: **Added**
* `unkey.portal.createPortal()`: **Added**
