# EnvironmentShutdownSignal

Signal sent to the container on shutdown.


## Example Usage

```python
from unkey.py.models import EnvironmentShutdownSignal

value = EnvironmentShutdownSignal.SIGTERM
```


## Values

| Name      | Value     |
| --------- | --------- |
| `SIGTERM` | SIGTERM   |
| `SIGINT`  | SIGINT    |
| `SIGQUIT` | SIGQUIT   |
| `SIGKILL` | SIGKILL   |