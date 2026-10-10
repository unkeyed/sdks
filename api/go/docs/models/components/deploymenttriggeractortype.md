# DeploymentTriggerActorType

`user` is a dashboard user, `root_key` a root key, `github` the GitHub
user who pushed or opened the pull request, `system` Unkey itself.
`unknown` when the actor isn't recognized.


## Example Usage

```go
import (
	"github.com/unkeyed/sdks/api/go/v3/models/components"
)

value := components.DeploymentTriggerActorTypeUser
```


## Values

| Name                                | Value                               |
| ----------------------------------- | ----------------------------------- |
| `DeploymentTriggerActorTypeUser`    | user                                |
| `DeploymentTriggerActorTypeRootKey` | root_key                            |
| `DeploymentTriggerActorTypeGithub`  | github                              |
| `DeploymentTriggerActorTypeSystem`  | system                              |
| `DeploymentTriggerActorTypeUnknown` | unknown                             |