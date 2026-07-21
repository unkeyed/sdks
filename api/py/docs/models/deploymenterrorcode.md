# DeploymentErrorCode

The reason a deployment failed. `unknown` means Unkey could not classify the
failure; see `message` for details.


## Example Usage

```python
from unkey.py.models import DeploymentErrorCode

value = DeploymentErrorCode.NO_SCHEDULABLE_REGIONS
```


## Values

| Name                       | Value                      |
| -------------------------- | -------------------------- |
| `NO_SCHEDULABLE_REGIONS`   | no_schedulable_regions     |
| `INVALID_RUNTIME_SETTINGS` | invalid_runtime_settings   |
| `CPU_QUOTA_EXCEEDED`       | cpu_quota_exceeded         |
| `MEMORY_QUOTA_EXCEEDED`    | memory_quota_exceeded      |
| `STORAGE_QUOTA_EXCEEDED`   | storage_quota_exceeded     |
| `BUILD_FAILED`             | build_failed               |
| `UNKNOWN`                  | unknown                    |