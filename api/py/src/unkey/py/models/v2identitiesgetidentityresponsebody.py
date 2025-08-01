"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
from .meta import Meta, MetaTypedDict
from .v2identitiesgetidentityresponsedata import (
    V2IdentitiesGetIdentityResponseData,
    V2IdentitiesGetIdentityResponseDataTypedDict,
)
from typing_extensions import TypedDict
from unkey.py.types import BaseModel


class V2IdentitiesGetIdentityResponseBodyTypedDict(TypedDict):
    meta: MetaTypedDict
    r"""Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team."""
    data: V2IdentitiesGetIdentityResponseDataTypedDict


class V2IdentitiesGetIdentityResponseBody(BaseModel):
    meta: Meta
    r"""Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team."""

    data: V2IdentitiesGetIdentityResponseData
