## Python SDK Changes:
* `unkey.deployments.list_build_logs()`: **Added**
* `unkey.permissions.update_permission()`: **Added**
* `unkey.permissions.update_role()`: **Added**
* `unkey.portal.list_sessions()`: **Added**
* `unkey.portal.revoke_session()`: **Added**
* `unkey.root_keys.create_key()`: **Added**
* `unkey.root_keys.delete_key()`: **Added**
* `unkey.root_keys.list_keys()`: **Added**
* `unkey.root_keys.reroll_key()`: **Added**
* `unkey.root_keys.update_key()`: **Added**
* `unkey.workspace.get_limits()`: **Added**
* `unkey.workspace.get_usage()`: **Added**
* `unkey.deployments.get_deployment()`: `response.data` **Changed**
    - `docker.resolved_image` **Added**
    - `finished_at` **Added**
    - `git.author` **Added**
    - `git.commit_message` **Added**
    - `git.commit_timestamp` **Added**
    - `git.fork_repository` **Added**
    - `git.pr_number` **Added**
    - `trigger` **Added**
* `unkey.deployments.list_deployments()`: 
  * `request` **Changed**
    - `branch` **Added**
    - `end_time` **Added**
    - `start_time` **Added**
  * `response.data[]` **Changed**
    - `docker.resolved_image` **Added**
    - `finished_at` **Added**
    - `git.author` **Added**
    - `git.commit_message` **Added**
    - `git.commit_timestamp` **Added**
    - `git.fork_repository` **Added**
    - `git.pr_number` **Added**
    - `trigger` **Added**
* `unkey.gateway.list_policies()`:  `response.data[].match[].remote_ip` **Added**
* `unkey.gateway.set_policies()`: 
  *  `request.policies[].match[].remote_ip` **Added**
* `unkey.gateway.update_policy()`: 
  *  `request.match[].remote_ip` **Added**
* `unkey.keys.reroll_key()`:  `request.expiration` **Changed**
* `unkey.portal.create_session()`:  `error.status[409]` **Added**
* `unkey.portal.reroll_key()`:  `request.expiration` **Changed**
