<!-- Start SDK Example Usage [usage] -->
```python
# Synchronous Example
from unkey_py import Unkey


with Unkey(
    root_key="UNKEY_ROOT_KEY",
) as unkey:

    res = unkey.ratelimit.limit(namespace="sms.sign_up", duration=711276, identifier="<value>", limit=581877)

    # Handle response
    print(res)
```

</br>

The same SDK client can also be used to make asychronous requests by importing asyncio.
```python
# Asynchronous Example
import asyncio
from unkey_py import Unkey

async def main():

    async with Unkey(
        root_key="UNKEY_ROOT_KEY",
    ) as unkey:

        res = await unkey.ratelimit.limit_async(namespace="sms.sign_up", duration=711276, identifier="<value>", limit=581877)

        # Handle response
        print(res)

asyncio.run(main())
```
<!-- End SDK Example Usage [usage] -->