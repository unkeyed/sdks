## Typescript SDK Changes:
* `unkey.keys.verifyKey()`: 
  *  `request.credits.cost` **Changed** (Breaking ⚠️)
  *  `response.data.credits` **Changed** (Breaking ⚠️)
* `unkey.portal.createSession()`: **Added**
* `unkey.portal.exchangeSession()`: **Added**
* `unkey.internal.getDeployment()`: `response.data.status` **Changed**
    - `enum(cancelled)` **Added**
    - `enum(superseded)` **Added**
