## Python SDK Changes:
* `unkey.apps.create_app()`: `request` **Changed** (Breaking ⚠️)
    - `git` **Removed** (Breaking ⚠️)
    - `name` **Removed** (Breaking ⚠️)
    - `project` **Removed** (Breaking ⚠️)
    - `request` **Added** (Breaking ⚠️)
    - `slug` **Removed** (Breaking ⚠️)
* `unkey.portal.create_session()`: 
  * `request.scopes[]` **Changed** (Breaking ⚠️)
    - `enum(analytics:read)` **Removed** (Breaking ⚠️)
    - `enum(keys:create)` **Removed** (Breaking ⚠️)
* `unkey.permissions.set_role_permissions()`: `request` **Changed** (Breaking ⚠️)
    - `permissions` **Removed** (Breaking ⚠️)
    - `request` **Added** (Breaking ⚠️)
    - `role_id` **Removed** (Breaking ⚠️)
* `unkey.apps.get_app()`: `response.data` **Changed**
    - `oci` **Added**
    - `source_type` **Added**
* `unkey.portal.update_portal()`: **Added**
* `unkey.portal.get_portal()`: **Added**
* `unkey.deployments.create_deployment_v3()`: **Added**
* `unkey.apps.list_apps()`: `response.data[]` **Changed**
    - `oci` **Added**
    - `source_type` **Added**
* `unkey.apps.update_app()`: 
  *  `request.oci` **Added**
  * `response.data` **Changed**
    - `oci` **Added**
    - `source_type` **Added**
* `unkey.deployments.create_deployment()`: **Deprecated**
* `unkey.domains.get_domain()`:  `response.data.domain_connect` **Added**
* `unkey.domains.list_domains()`:  `response.data[].domain_connect` **Added**
* `unkey.portal.delete_portal()`: **Added**
* `unkey.portal.create_portal()`: **Added**
