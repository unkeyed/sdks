# Type

Record type to create. `ALIAS` is not a real DNS record type: it means an apex-compatible
alias, which providers expose as ALIAS, ANAME, or a flattened CNAME. Apex domains cannot
hold a plain CNAME, so they receive `ALIAS` where a subdomain receives `CNAME`.


## Example Usage

```python
from unkey.py.models import Type

value = Type.CNAME
```


## Values

| Name    | Value   |
| ------- | ------- |
| `CNAME` | CNAME   |
| `ALIAS` | ALIAS   |
| `TXT`   | TXT     |