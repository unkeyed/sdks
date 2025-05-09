"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
from .validationerror import ValidationError, ValidationErrorTypedDict
from typing import List, Optional
from typing_extensions import NotRequired, TypedDict
from unkey_py.types import BaseModel


class BadRequestErrorDetailsTypedDict(TypedDict):
    detail: str
    r"""A human-readable explanation specific to this occurrence of the problem."""
    status: int
    r"""HTTP status code"""
    title: str
    r"""A short, human-readable summary of the problem type. This value should not change between occurrences of the error."""
    type: str
    r"""A URI reference to human-readable documentation for the error."""
    errors: List[ValidationErrorTypedDict]
    r"""Optional list of individual error details"""
    instance: NotRequired[str]
    r"""A URI reference that identifies the specific occurrence of the problem."""


class BadRequestErrorDetails(BaseModel):
    detail: str
    r"""A human-readable explanation specific to this occurrence of the problem."""

    status: int
    r"""HTTP status code"""

    title: str
    r"""A short, human-readable summary of the problem type. This value should not change between occurrences of the error."""

    type: str
    r"""A URI reference to human-readable documentation for the error."""

    errors: List[ValidationError]
    r"""Optional list of individual error details"""

    instance: Optional[str] = None
    r"""A URI reference that identifies the specific occurrence of the problem."""
