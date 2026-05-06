## Go SDK Changes:
* `Unkey.Keys.VerifyKey()`: 
  *  `request.Request.Credits.Cost` **Changed** (Breaking ⚠️)
  *  `response.Data.Credits` **Changed** (Breaking ⚠️)
* `Unkey.Internal.GetDeployment()`: `response.Data.Status` **Changed**
    - `Enum(cancelled)` **Added**
    - `Enum(superseded)` **Added**
