# DeploymentIssueType

What is wrong with the running app:

- `crash_loop`: the app keeps stopping, so Unkey waits longer before each
  restart. `meta` describes the last exit.

Handle unknown values, because new types can be added.


## Example Usage

```python
from unkey.py.models import DeploymentIssueType

value = DeploymentIssueType.CRASH_LOOP

# Open enum: unrecognized values are captured as UnrecognizedStr
```


## Values

| Name         | Value        |
| ------------ | ------------ |
| `CRASH_LOOP` | crash_loop   |