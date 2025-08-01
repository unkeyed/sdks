"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
from .identity import Identity, IdentityTypedDict
from .meta import Meta, MetaTypedDict
from typing_extensions import TypedDict
from unkey.py.types import BaseModel


class V2IdentitiesUpdateIdentityResponseBodyTypedDict(TypedDict):
    data: IdentityTypedDict
    meta: MetaTypedDict
    r"""Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team."""


class V2IdentitiesUpdateIdentityResponseBody(BaseModel):
    data: Identity

    meta: Meta
    r"""Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team."""
