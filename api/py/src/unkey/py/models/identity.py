"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
from .ratelimitresponse import RatelimitResponse, RatelimitResponseTypedDict
import pydantic
from typing import Any, List, Optional
from typing_extensions import Annotated, NotRequired, TypedDict
from unkey.py.types import BaseModel


class IdentityMetaTypedDict(TypedDict):
    r"""Identity metadata"""


class IdentityMeta(BaseModel):
    r"""Identity metadata"""


class IdentityTypedDict(TypedDict):
    external_id: str
    r"""External identity ID"""
    ratelimits: List[RatelimitResponseTypedDict]
    meta: NotRequired[IdentityMetaTypedDict]
    r"""Identity metadata"""
    description: NotRequired[Any]


class Identity(BaseModel):
    external_id: Annotated[str, pydantic.Field(alias="externalId")]
    r"""External identity ID"""

    ratelimits: List[RatelimitResponse]

    meta: Optional[IdentityMeta] = None
    r"""Identity metadata"""

    description: Optional[Any] = None
