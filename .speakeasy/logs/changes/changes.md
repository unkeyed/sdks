## Python SDK Changes:
* `unkey.analytics.get_verifications()`:  `error.status[404]` **Removed** (Breaking ⚠️)
* `unkey.portal.create_session()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `permissions` **Removed** (Breaking ⚠️)
    - `portal` **Added** (Breaking ⚠️)
    - `return_url` **Added**
    - `scopes` **Added** (Breaking ⚠️)
    - `slug` **Removed** (Breaking ⚠️)
  * `response.data` **Changed** (Breaking ⚠️)
    - `id` **Added**
    - `session_id` **Removed** (Breaking ⚠️)
* `unkey.apps.update_app()`: 
  * `request` **Changed** (Breaking ⚠️)
    - `default_branch` **Removed** (Breaking ⚠️)
    - `git` **Added**
  * `response.data` **Changed** (Breaking ⚠️)
    - `default_branch` **Removed** (Breaking ⚠️)
    - `git` **Added**
* `unkey.apps.list_apps()`: `response.data[]` **Changed** (Breaking ⚠️)
    - `default_branch` **Removed** (Breaking ⚠️)
    - `git` **Added**
* `unkey.apps.get_app()`: `response.data` **Changed** (Breaking ⚠️)
    - `default_branch` **Removed** (Breaking ⚠️)
    - `git` **Added**
* `unkey.domains.list_domains()`: **Added**
* `unkey.domains.delete_domain()`: **Added**
* `unkey.domains.verify_domain()`: **Added**
* `unkey.github.install_app()`: **Added**
* `unkey.permissions.set_role_permissions()`: **Added**
* `unkey.portal.exchange_code()`: **Added**
* `unkey.portal.exchange_session()`: **Removed** (Breaking ⚠️)
* `unkey.domains.get_domain()`: **Added**
* `unkey.apps.create_app()`:  `request.git` **Added**
* `unkey.analytics.get_gateway_requests()`: **Added**
* `unkey.domains.create_domain()`: **Added**
* `unkey.analytics.get_runtime_logs()`: **Added**
* `unkey.environments.get_environment()`:  `response.data.kind` **Added**
* `unkey.environments.list_environments()`:  `response.data[].kind` **Added**
* `unkey.gateway.list_policies()`: `response.data[]` **Changed**
    - `keyauth.credits` **Added**
    - `logging` **Added**
    - `ratelimit.identifier` **Changed**
    - `ratelimit.identifiers` **Added**
* `unkey.gateway.set_policies()`: 
  * `request.policies[]` **Changed**
    - `keyauth.credits` **Added**
    - `logging` **Added**
    - `ratelimit.identifier` **Changed**
    - `ratelimit.identifiers` **Added**
* `unkey.gateway.update_policy()`: `request` **Changed**
    - `keyauth.credits` **Added**
    - `logging` **Added**
    - `ratelimit.identifier` **Changed**
    - `ratelimit.identifiers` **Added**
* `unkey.keys.update_key()`:  `request.ratelimits` **Changed**
* `unkey.permissions.create_role()`:  `request.permissions` **Added**
* `unkey.analytics.get_ratelimits()`: **Added**
