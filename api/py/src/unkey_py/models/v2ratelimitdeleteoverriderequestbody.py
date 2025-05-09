"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
import pydantic
from typing import Optional
from typing_extensions import Annotated, NotRequired, TypedDict
from unkey_py.types import BaseModel


class V2RatelimitDeleteOverrideRequestBodyTypedDict(TypedDict):
    r"""Deletes an existing override."""

    identifier: str
    r"""Identifier of the override to delete"""
    namespace_id: NotRequired[str]
    r"""The id of the namespace. Either namespaceId or namespaceName must be provided"""
    namespace_name: NotRequired[str]
    r"""The name of the namespace. Either namespaceId or namespaceName must be provided"""


class V2RatelimitDeleteOverrideRequestBody(BaseModel):
    r"""Deletes an existing override."""

    identifier: str
    r"""Identifier of the override to delete"""

    namespace_id: Annotated[Optional[str], pydantic.Field(alias="namespaceId")] = None
    r"""The id of the namespace. Either namespaceId or namespaceName must be provided"""

    namespace_name: Annotated[Optional[str], pydantic.Field(alias="namespaceName")] = (
        None
    )
    r"""The name of the namespace. Either namespaceId or namespaceName must be provided"""
