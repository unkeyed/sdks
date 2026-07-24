<!-- Start SDK Example Usage [usage] -->
```python
# Synchronous Example
from unkey.py import Unkey


with Unkey(
    root_key="<YOUR_BEARER_TOKEN_HERE>",
) as unkey:

    res = unkey.analytics.get_ratelimits(query="SELECT namespace_id, COUNT(*) AS total FROM ratelimits_v1 WHERE namespace_id = 'rlns_123' GROUP BY namespace_id")

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

        res = await unkey.analytics.get_ratelimits_async(query="SELECT namespace_id, COUNT(*) AS total FROM ratelimits_v1 WHERE namespace_id = 'rlns_123' GROUP BY namespace_id")

        # Handle response
        print(res)

asyncio.run(main())
```
<!-- End SDK Example Usage [usage] -->