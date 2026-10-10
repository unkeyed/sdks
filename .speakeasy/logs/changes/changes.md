## Typescript SDK Changes:
* `unkey.deployments.listBuildLogs()`: **Added**
* `unkey.permissions.updatePermission()`: **Added**
* `unkey.permissions.updateRole()`: **Added**
* `unkey.portal.listSessions()`: **Added**
* `unkey.portal.revokeSession()`: **Added**
* `unkey.rootKeys.createKey()`: **Added**
* `unkey.rootKeys.deleteKey()`: **Added**
* `unkey.rootKeys.listKeys()`: **Added**
* `unkey.rootKeys.rerollKey()`: **Added**
* `unkey.rootKeys.updateKey()`: **Added**
* `unkey.workspace.getLimits()`: **Added**
* `unkey.workspace.getUsage()`: **Added**
* `unkey.deployments.getDeployment()`: `response.data` **Changed**
    - `docker.resolvedImage` **Added**
    - `finishedAt` **Added**
    - `git.author` **Added**
    - `git.commitMessage` **Added**
    - `git.commitTimestamp` **Added**
    - `git.forkRepository` **Added**
    - `git.prNumber` **Added**
    - `trigger` **Added**
* `unkey.deployments.listDeployments()`: 
  * `request` **Changed**
    - `branch` **Added**
    - `endTime` **Added**
    - `startTime` **Added**
  * `response.data[]` **Changed**
    - `docker.resolvedImage` **Added**
    - `finishedAt` **Added**
    - `git.author` **Added**
    - `git.commitMessage` **Added**
    - `git.commitTimestamp` **Added**
    - `git.forkRepository` **Added**
    - `git.prNumber` **Added**
    - `trigger` **Added**
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
