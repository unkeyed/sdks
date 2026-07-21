## Python SDK Changes:
* `unkey.portal.create_session()`: 
  *  `request.permissions[]` **Changed** (Breaking ⚠️)
* `unkey.gateway.list_policies()`: **Added**
* `unkey.apps.get_app()`: **Added**
* `unkey.apps.list_apps()`: **Added**
* `unkey.apps.update_app()`: **Added**
* `unkey.deployments.create_deployment()`: **Added**
* `unkey.deployments.get_deployment()`: **Added**
* `unkey.deployments.list_deployments()`: **Added**
* `unkey.deployments.promote_deployment()`: **Added**
* `unkey.deployments.rollback_deployment()`: **Added**
* `unkey.deployments.start_deployment()`: **Added**
* `unkey.deployments.stop_deployment()`: **Added**
* `unkey.environments.get_environment()`: **Added**
* `unkey.environments.list_environment_variables()`: **Added**
* `unkey.environments.list_environments()`: **Added**
* `unkey.environments.remove_environment_variables()`: **Added**
* `unkey.environments.set_environment_variables()`: **Added**
* `unkey.apps.create_app()`: **Added**
* `unkey.environments.update_settings()`: **Added**
* `unkey.apis.list_keys()`:  `response.pagination` **Changed**
* `unkey.gateway.update_policy()`: **Added**
* `unkey.portal.get_verifications()`: **Added**
* `unkey.portal.list_keys()`: **Added**
* `unkey.portal.reroll_key()`: **Added**
* `unkey.projects.create_project()`: **Added**
* `unkey.projects.delete_project()`: **Added**
* `unkey.projects.get_project()`: **Added**
* `unkey.projects.list_projects()`: **Added**
* `unkey.projects.update_project()`: **Added**
* `unkey.gateway.set_policies()`: **Added**
* `unkey.internal.create_deployment()`: **Deprecated**
* `unkey.internal.get_deployment()`: **Deprecated**
* `unkey.identities.list_identities()`:  `request.search` **Added**
* `unkey.permissions.list_permissions()`: 
  *  `request.search` **Added**
  *  `response.pagination` **Changed**
* `unkey.permissions.list_roles()`: 
  *  `request.search` **Added**
  *  `response.pagination` **Changed**
* `unkey.apps.delete_app()`: **Added**
* `unkey.ratelimit.list_overrides()`:  `response.pagination` **Changed**
