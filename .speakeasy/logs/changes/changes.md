## Python SDK Changes:
* `unkey.apps.create_app()`: `request` **Changed** (Breaking ⚠️)
    - `git` **Removed** (Breaking ⚠️)
    - `name` **Removed** (Breaking ⚠️)
    - `project` **Removed** (Breaking ⚠️)
    - `request` **Added** (Breaking ⚠️)
    - `slug` **Removed** (Breaking ⚠️)
* `unkey.portal.get_verifications()`: 
  * `response` **Changed** (Breaking ⚠️)
    - `bucket_millis` **Added**
    - `data` **Removed** (Breaking ⚠️)
    - `keys` **Added**
  *  `error.status[422]` **Added**
* `unkey.portal.create_session()`: `request` **Changed** (Breaking ⚠️)
    - `preview` **Removed** (Breaking ⚠️)
    - `scopes[].enum(keys:create)` **Removed** (Breaking ⚠️)
* `unkey.permissions.set_role_permissions()`: `request` **Changed** (Breaking ⚠️)
    - `permissions` **Removed** (Breaking ⚠️)
    - `request` **Added** (Breaking ⚠️)
    - `role_id` **Removed** (Breaking ⚠️)
* `unkey.apps.update_app()`: 
  *  `request.oci` **Added**
  * `response.data` **Changed**
    - `oci` **Added**
    - `source_type` **Added**
* `unkey.portal.update_portal()`: **Added**
* `unkey.apps.get_app()`: `response.data` **Changed**
    - `oci` **Added**
    - `source_type` **Added**
* `unkey.apps.list_apps()`: `response.data[]` **Changed**
    - `oci` **Added**
    - `source_type` **Added**
* `unkey.deployments.create_deployment_v3()`: **Added**
* `unkey.deployments.create_deployment()`: **Deprecated**
* `unkey.domains.get_domain()`:  `response.data.domain_connect` **Added**
* `unkey.domains.list_domains()`: 
  * `request` **Changed**
    - `app` **Changed**
    - `environment` **Changed**
    - `project` **Changed**
  *  `response.data[].domain_connect` **Added**
  *  `error.status[503]` **Added**
* `unkey.keys.verify_key()`: 
  *  `request.keyspaces` **Added**
  *  `response.data.keyspace_id` **Added**
* `unkey.portal.get_portal()`: **Added**
* `unkey.portal.delete_portal()`: **Added**
* `unkey.portal.create_portal()`: **Added**
