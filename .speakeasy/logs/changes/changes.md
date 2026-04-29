## Python SDK Changes:
* `unkey.keys.verify_key()`: 
  *  `request.credits.cost` **Changed** (Breaking ⚠️)
  *  `response.data.credits` **Changed** (Breaking ⚠️)
* `unkey.internal.get_deployment()`: `response.data.status` **Changed**
    - `enum(cancelled)` **Added**
    - `enum(superseded)` **Added**
