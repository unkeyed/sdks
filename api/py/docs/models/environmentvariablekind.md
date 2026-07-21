# EnvironmentVariableKind

How the value may be read back. `writeonly` values can never be read back
through the API; `recoverable` values can be decrypted. Values are encrypted
at rest either way.


## Example Usage

```python
from unkey.py.models import EnvironmentVariableKind

value = EnvironmentVariableKind.RECOVERABLE
```


## Values

| Name          | Value         |
| ------------- | ------------- |
| `RECOVERABLE` | recoverable   |
| `WRITEONLY`   | writeonly     |