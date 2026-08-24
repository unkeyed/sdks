# EnvironmentKind

The deployment lifecycle role of an environment.

- `production`: Deployments serve production traffic, support promotion and rollback, and cannot be stopped.
- `preview`: Deployments can be stopped and started and are eligible for preview lifecycle automation.


## Example Usage

```python
from unkey.py.models import EnvironmentKind

value = EnvironmentKind.PRODUCTION
```


## Values

| Name         | Value        |
| ------------ | ------------ |
| `PRODUCTION` | production   |
| `PREVIEW`    | preview      |