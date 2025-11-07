<!-- Start SDK Example Usage [usage] -->
```python
# Synchronous Example
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.analytics.get_verifications(query="SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY")

    # Handle response
    print(res)
```

</br>

The same SDK client can also be used to make asynchronous requests by importing asyncio.

```python
# Asynchronous Example
import asyncio
from unkey.py import Unkey

async def main():

    async with Unkey(
        root_key="<YOUR_BEARER_TOKEN_HERE>",
    ) as unkey:

        res = await unkey.analytics.get_verifications_async(query="SELECT COUNT(*) as total FROM key_verifications_v1 WHERE outcome = 'VALID' AND time >= now() - INTERVAL 7 DAY")

        # Handle response
        print(res)

asyncio.run(main())
```
<!-- End SDK Example Usage [usage] -->