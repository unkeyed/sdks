"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
import pydantic
from typing import Optional
from typing_extensions import Annotated, NotRequired, TypedDict
from unkey.py.types import BaseModel


class V2KeysDeleteKeyRequestBodyTypedDict(TypedDict):
    key_id: str
    r"""Specifies which key to delete using the database identifier returned from `createKey`.
    Do not confuse this with the actual API key string that users include in requests.
    Deletion immediately invalidates the key, causing all future verification attempts to fail with `code=NOT_FOUND`.
    Key deletion triggers cache invalidation across all regions but may take up to 30 seconds to fully propagate.

    """
    permanent: NotRequired[bool]
    r"""Controls deletion behavior between recoverable soft-deletion and irreversible permanent erasure.
    Soft deletion (default) preserves key data for potential recovery through direct database operations.
    Permanent deletion completely removes all traces including hash values and metadata with no recovery option.

    Use permanent deletion only for regulatory compliance (GDPR), resolving hash collisions, or when reusing identical key strings.
    Permanent deletion cannot be undone and may affect analytics data that references the deleted key.
    Most applications should use soft deletion to maintain audit trails and prevent accidental data loss.

    """


class V2KeysDeleteKeyRequestBody(BaseModel):
    key_id: Annotated[str, pydantic.Field(alias="keyId")]
    r"""Specifies which key to delete using the database identifier returned from `createKey`.
    Do not confuse this with the actual API key string that users include in requests.
    Deletion immediately invalidates the key, causing all future verification attempts to fail with `code=NOT_FOUND`.
    Key deletion triggers cache invalidation across all regions but may take up to 30 seconds to fully propagate.

    """

    permanent: Optional[bool] = False
    r"""Controls deletion behavior between recoverable soft-deletion and irreversible permanent erasure.
    Soft deletion (default) preserves key data for potential recovery through direct database operations.
    Permanent deletion completely removes all traces including hash values and metadata with no recovery option.

    Use permanent deletion only for regulatory compliance (GDPR), resolving hash collisions, or when reusing identical key strings.
    Permanent deletion cannot be undone and may affect analytics data that references the deleted key.
    Most applications should use soft deletion to maintain audit trails and prevent accidental data loss.

    """
