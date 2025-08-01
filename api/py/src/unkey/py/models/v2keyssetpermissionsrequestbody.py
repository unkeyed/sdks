"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
import pydantic
from typing import List
from typing_extensions import Annotated, TypedDict
from unkey.py.types import BaseModel


class V2KeysSetPermissionsRequestBodyTypedDict(TypedDict):
    key_id: str
    r"""Specifies which key receives the additional permissions using the database identifier returned from `keys.createKey`.
    Do not confuse this with the actual API key string that users include in requests.

    """
    permissions: List[str]
    r"""The permissions to set for this key.

    This is a complete replacement operation - it overwrites all existing direct permissions with this new set.

    Key behaviors:
    - Providing an empty array removes all direct permissions from the key
    - This only affects direct permissions - permissions granted through roles are not affected
    - All existing direct permissions not included in this list will be removed

    Any permissions that do not exist will be auto created if the root key has permissions, otherwise this operation will fail with a 403 error.
    """


class V2KeysSetPermissionsRequestBody(BaseModel):
    key_id: Annotated[str, pydantic.Field(alias="keyId")]
    r"""Specifies which key receives the additional permissions using the database identifier returned from `keys.createKey`.
    Do not confuse this with the actual API key string that users include in requests.

    """

    permissions: List[str]
    r"""The permissions to set for this key.

    This is a complete replacement operation - it overwrites all existing direct permissions with this new set.

    Key behaviors:
    - Providing an empty array removes all direct permissions from the key
    - This only affects direct permissions - permissions granted through roles are not affected
    - All existing direct permissions not included in this list will be removed

    Any permissions that do not exist will be auto created if the root key has permissions, otherwise this operation will fail with a 403 error.
    """
