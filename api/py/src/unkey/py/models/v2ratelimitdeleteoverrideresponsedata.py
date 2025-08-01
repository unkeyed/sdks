"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
from typing_extensions import TypedDict
from unkey.py.types import BaseModel


class V2RatelimitDeleteOverrideResponseDataTypedDict(TypedDict):
    r"""Empty response object. A successful response indicates the override was successfully deleted. The operation is immediate - as soon as this response is received, the override no longer exists and affected identifiers have reverted to using the default rate limit for the namespace. No other data is returned as part of the deletion operation."""


class V2RatelimitDeleteOverrideResponseData(BaseModel):
    r"""Empty response object. A successful response indicates the override was successfully deleted. The operation is immediate - as soon as this response is received, the override no longer exists and affected identifiers have reverted to using the default rate limit for the namespace. No other data is returned as part of the deletion operation."""
