# Record

Configure when this check persists its cost.
- `IF_ALLOWED`: counts the cost only if it fits.
- `ALWAYS`: counts the cost even if it does not fit, such as for usage that already happened.
- `NEVER`: counts nothing and only reports whether the cost fits. This is the same behavior as setting a cost of 0.


## Example Usage

```python
from unkey.py.models import Record

value = Record.IF_ALLOWED
```


## Values

| Name         | Value        |
| ------------ | ------------ |
| `IF_ALLOWED` | IF_ALLOWED   |
| `ALWAYS`     | ALWAYS       |
| `NEVER`      | NEVER        |