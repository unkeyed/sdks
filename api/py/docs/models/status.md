# Status

Current deployment status

## Example Usage

```python
from unkey.py.models import Status

value = Status.UNSPECIFIED

# Open enum: unrecognized values are captured as UnrecognizedStr
```


## Values

| Name                | Value               |
| ------------------- | ------------------- |
| `UNSPECIFIED`       | UNSPECIFIED         |
| `PENDING`           | PENDING             |
| `STARTING`          | STARTING            |
| `BUILDING`          | BUILDING            |
| `DEPLOYING`         | DEPLOYING           |
| `NETWORK`           | NETWORK             |
| `FINALIZING`        | FINALIZING          |
| `READY`             | READY               |
| `FAILED`            | FAILED              |
| `SKIPPED`           | SKIPPED             |
| `AWAITING_APPROVAL` | AWAITING_APPROVAL   |