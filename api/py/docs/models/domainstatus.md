# DomainStatus

The verification status of the domain.

- `pending`: the domain is created. No DNS check has completed yet.
- `verifying`: Unkey checks the DNS records approximately each minute.
- `verified`: the domain is verified. Unkey has configured routing and requested a certificate.
- `failed`: the required DNS records did not appear within 24 hours. Fix the records, then retry verification.


## Example Usage

```python
from unkey.py.models import DomainStatus

value = DomainStatus.PENDING
```


## Values

| Name        | Value       |
| ----------- | ----------- |
| `PENDING`   | pending     |
| `VERIFYING` | verifying   |
| `VERIFIED`  | verified    |
| `FAILED`    | failed      |