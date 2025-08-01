"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
import httpx
from typing import Optional
from unkey.py.errors import UnkeyError
from unkey.py.models import baseerror as models_baseerror, meta as models_meta
from unkey.py.types import BaseModel


class PreconditionFailedErrorResponseData(BaseModel):
    meta: models_meta.Meta
    r"""Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team."""

    error: models_baseerror.BaseError
    r"""Base error structure following Problem Details for HTTP APIs (RFC 7807). This provides a standardized way to carry machine-readable details of errors in HTTP response content."""


class PreconditionFailedErrorResponse(UnkeyError):
    r"""Error response when one or more conditions specified in the request headers are not met. This typically occurs when:
    - Using conditional requests with If-Match or If-None-Match headers
    - The resource version doesn't match the expected value
    - Optimistic concurrency control detects a conflict

    To resolve this error, fetch the latest version of the resource and retry with updated conditions.
    """

    data: PreconditionFailedErrorResponseData

    def __init__(
        self,
        data: PreconditionFailedErrorResponseData,
        raw_response: httpx.Response,
        body: Optional[str] = None,
    ):
        message = body or raw_response.text
        super().__init__(message, raw_response, body)
        self.data = data
