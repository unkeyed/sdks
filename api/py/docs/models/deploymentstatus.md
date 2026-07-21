# DeploymentStatus

Current lifecycle status of the deployment. Poll until it reaches a
terminal state: ready (serving), failed, skipped, superseded, stopped,
or cancelled.


## Example Usage

```python
from unkey.py.models import DeploymentStatus

value = DeploymentStatus.PENDING
```


## Values

| Name                | Value               |
| ------------------- | ------------------- |
| `PENDING`           | pending             |
| `STARTING`          | starting            |
| `BUILDING`          | building            |
| `DEPLOYING`         | deploying           |
| `NETWORK`           | network             |
| `FINALIZING`        | finalizing          |
| `READY`             | ready               |
| `FAILED`            | failed              |
| `SKIPPED`           | skipped             |
| `AWAITING_APPROVAL` | awaiting_approval   |
| `STOPPED`           | stopped             |
| `SUPERSEDED`        | superseded          |
| `CANCELLED`         | cancelled           |