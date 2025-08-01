"""Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT."""

from __future__ import annotations
from typing_extensions import TypedDict
from unkey.py.types import BaseModel


class V2PermissionsDeleteRoleRequestBodyTypedDict(TypedDict):
    role: str
    r"""Unique identifier of the role to permanently delete from your workspace.
    Must either be a valid role ID that begins with 'role_' or the given role name and exists within your workspace.

    WARNING: Deletion is immediate and irreversible with significant consequences:
    - All API keys assigned this role will lose the associated permissions
    - Access to resources protected by this role's permissions will be denied
    - Any authorization logic depending on this role will start failing
    - Historical analytics referencing this role remain intact

    Before deletion, ensure:
    - You've updated any dependent authorization logic or code
    - You've migrated any keys to use alternative roles or direct permissions
    - You've notified relevant team members of the access changes

    """


class V2PermissionsDeleteRoleRequestBody(BaseModel):
    role: str
    r"""Unique identifier of the role to permanently delete from your workspace.
    Must either be a valid role ID that begins with 'role_' or the given role name and exists within your workspace.

    WARNING: Deletion is immediate and irreversible with significant consequences:
    - All API keys assigned this role will lose the associated permissions
    - Access to resources protected by this role's permissions will be denied
    - Any authorization logic depending on this role will start failing
    - Historical analytics referencing this role remain intact

    Before deletion, ensure:
    - You've updated any dependent authorization logic or code
    - You've migrated any keys to use alternative roles or direct permissions
    - You've notified relevant team members of the access changes

    """
