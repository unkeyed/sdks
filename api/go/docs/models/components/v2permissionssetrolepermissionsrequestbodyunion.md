# V2PermissionsSetRolePermissionsRequestBodyUnion

Provide exactly one of `role` or the deprecated `roleId`.


## Supported Types

### V2PermissionsSetRolePermissionsRequestBody1

```go
v2PermissionsSetRolePermissionsRequestBodyUnion := components.CreateV2PermissionsSetRolePermissionsRequestBodyUnionV2PermissionsSetRolePermissionsRequestBody1(components.V2PermissionsSetRolePermissionsRequestBody1{/* values here */})
```

### V2PermissionsSetRolePermissionsRequestBody2

```go
v2PermissionsSetRolePermissionsRequestBodyUnion := components.CreateV2PermissionsSetRolePermissionsRequestBodyUnionV2PermissionsSetRolePermissionsRequestBody2(components.V2PermissionsSetRolePermissionsRequestBody2{/* values here */})
```

## Union Discrimination

Use the `Type` field to determine which variant is active, then access the corresponding field:

```go
switch v2PermissionsSetRolePermissionsRequestBodyUnion.Type {
	case components.V2PermissionsSetRolePermissionsRequestBodyUnionTypeV2PermissionsSetRolePermissionsRequestBody1:
		// v2PermissionsSetRolePermissionsRequestBodyUnion.V2PermissionsSetRolePermissionsRequestBody1 is populated
	case components.V2PermissionsSetRolePermissionsRequestBodyUnionTypeV2PermissionsSetRolePermissionsRequestBody2:
		// v2PermissionsSetRolePermissionsRequestBodyUnion.V2PermissionsSetRolePermissionsRequestBody2 is populated
}
```
