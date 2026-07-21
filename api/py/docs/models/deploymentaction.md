# DeploymentAction

A lifecycle operation that can be performed on the deployment in its current
state, given its status, environment, and whether it is the current
deployment.


## Example Usage

```python
from unkey.py.models import DeploymentAction

value = DeploymentAction.PROMOTE
```


## Values

| Name       | Value      |
| ---------- | ---------- |
| `PROMOTE`  | promote    |
| `ROLLBACK` | rollback   |
| `STOP`     | stop       |
| `START`    | start      |