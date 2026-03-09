# Operation

Defines how to modify the key's remaining credits. Use 'set' to replace current credits with a specific value or unlimited usage, 'increment' to add credits for plan upgrades or credit purchases, and 'decrement' to reduce credits for refunds or policy violations.


## Example Usage

```python
from unkey.py.models import Operation

value = Operation.SET

# Open enum: unrecognized values are captured as UnrecognizedStr
```


## Values

| Name        | Value       |
| ----------- | ----------- |
| `SET`       | set         |
| `INCREMENT` | increment   |
| `DECREMENT` | decrement   |