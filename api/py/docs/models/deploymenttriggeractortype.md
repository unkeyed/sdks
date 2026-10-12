# DeploymentTriggerActorType

`user` is a dashboard user, `root_key` a root key, `github` the GitHub
user who pushed or opened the pull request, `system` Unkey itself.
`unknown` when the actor isn't recognized.


## Example Usage

```python
from unkey.py.models import DeploymentTriggerActorType

value = DeploymentTriggerActorType.USER
```


## Values

| Name       | Value      |
| ---------- | ---------- |
| `USER`     | user       |
| `ROOT_KEY` | root_key   |
| `GITHUB`   | github     |
| `SYSTEM`   | system     |
| `UNKNOWN`  | unknown    |