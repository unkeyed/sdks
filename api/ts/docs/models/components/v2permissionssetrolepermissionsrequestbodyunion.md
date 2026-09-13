# V2PermissionsSetRolePermissionsRequestBodyUnion

Provide exactly one of `role` or the deprecated `roleId`.


## Supported Types

### `components.V2PermissionsSetRolePermissionsRequestBody1`

```typescript
const value: components.V2PermissionsSetRolePermissionsRequestBody1 = {
  role: "<value>",
  permissions: [
    "<value 1>",
  ],
};
```

### `components.V2PermissionsSetRolePermissionsRequestBody2`

```typescript
const value: components.V2PermissionsSetRolePermissionsRequestBody2 = {
  roleId: "<id>",
  permissions: [
    "<value 1>",
  ],
};
```

