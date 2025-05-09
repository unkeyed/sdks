"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
from .meta import Meta, MetaTypedDict
from .ratelimitlimitresponsedata import (
    RatelimitLimitResponseData,
    RatelimitLimitResponseDataTypedDict,
)
from typing_extensions import TypedDict
from unkey_py.types import BaseModel


class V2RatelimitLimitResponseBodyTypedDict(TypedDict):
    meta: MetaTypedDict
    data: RatelimitLimitResponseDataTypedDict


class V2RatelimitLimitResponseBody(BaseModel):
    meta: Meta

    data: RatelimitLimitResponseData
