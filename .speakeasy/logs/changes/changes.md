## Python SDK Changes:
* `unkey.logs.get_api_request_metrics()`:  `error.status[429]` **Removed** (Breaking ⚠️)
* `unkey.logs.list_api_requests()`:  `error.status[429]` **Removed** (Breaking ⚠️)
* `unkey.deployments.stop_deployment()`:  `error.status[403]` **Added**
* `unkey.deployments.promote_deployment()`:  `error.status[403]` **Added**
* `unkey.deployments.rollback_deployment()`:  `error.status[403]` **Added**
* `unkey.deployments.start_deployment()`:  `error.status[403]` **Added**
* `unkey.deployments.authorize_deployment()`:  `error.status[403]` **Added**
* `unkey.deployments.list_build_logs()`:  `error.status[403]` **Added**
* `unkey.deployments.cancel_deployment()`:  `error.status[403]` **Added**
* `unkey.permissions.delete_role()`:  `error.status[404]` **Added**
* `unkey.portal.delete_portal()`:  `error.status[403]` **Added**
* `unkey.portal.revoke_session()`:  `error.status[403]` **Added**
* `unkey.portal.update_portal()`:  `error.status[403]` **Added**
