"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
import pydantic
from typing_extensions import Annotated, TypedDict
from unkey_py.types import BaseModel


class RatelimitSetOverrideResponseDataTypedDict(TypedDict):
    override_id: str
    r"""The id of the override. This is used internally."""


class RatelimitSetOverrideResponseData(BaseModel):
    override_id: Annotated[str, pydantic.Field(alias="overrideId")]
    r"""The id of the override. This is used internally."""
