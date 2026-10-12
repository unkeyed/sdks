# Via

What started this deployment: `github` (a push or pull request), `api`,
`cli`, `dashboard`, or `unkey` (Unkey itself, for example a rebuild).
`unknown` when it was not recorded. `api`, `cli` and `dashboard` are
reported by the client.


## Example Usage

```python
from unkey.py.models import Via

value = Via.UNKNOWN
```


## Values

| Name        | Value       |
| ----------- | ----------- |
| `UNKNOWN`   | unknown     |
| `GITHUB`    | github      |
| `API`       | api         |
| `CLI`       | cli         |
| `DASHBOARD` | dashboard   |
| `UNKEY`     | unkey       |