# BuildLogOutput

The output stream a build log entry was printed to. Many tools write progress
and warnings to `stderr`, so `stderr` does not mean that the step failed.


## Example Usage

```python
from unkey.py.models import BuildLogOutput

value = BuildLogOutput.STDOUT
```


## Values

| Name     | Value    |
| -------- | -------- |
| `STDOUT` | stdout   |
| `STDERR` | stderr   |