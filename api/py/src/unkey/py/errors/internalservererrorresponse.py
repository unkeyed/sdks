"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
import httpx
from typing import Optional
from unkey.py.errors import UnkeyError
from unkey.py.models import baseerror as models_baseerror, meta as models_meta
from unkey.py.types import BaseModel


class InternalServerErrorResponseData(BaseModel):
    meta: models_meta.Meta
    r"""Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team."""

    error: models_baseerror.BaseError
    r"""Base error structure following Problem Details for HTTP APIs (RFC 7807). This provides a standardized way to carry machine-readable details of errors in HTTP response content."""


class InternalServerErrorResponse(UnkeyError):
    r"""Error response when an unexpected error occurs on the server. This indicates a problem with Unkey's systems rather than your request.

    When you encounter this error:
    - The request ID in the response can help Unkey support investigate the issue
    - The error is likely temporary and retrying may succeed
    - If the error persists, contact Unkey support with the request ID
    """

    data: InternalServerErrorResponseData

    def __init__(
        self,
        data: InternalServerErrorResponseData,
        raw_response: httpx.Response,
        body: Optional[str] = None,
    ):
        message = body or raw_response.text
        super().__init__(message, raw_response, body)
        self.data = data
