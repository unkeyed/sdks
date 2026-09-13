# V2PortalCreatePortalRequestBodyUnion


## Supported Types

### V2PortalCreatePortalRequestBody1

```go
v2PortalCreatePortalRequestBodyUnion := components.CreateV2PortalCreatePortalRequestBodyUnionV2PortalCreatePortalRequestBody1(components.V2PortalCreatePortalRequestBody1{/* values here */})
```

### V2PortalCreatePortalRequestBody2

```go
v2PortalCreatePortalRequestBodyUnion := components.CreateV2PortalCreatePortalRequestBodyUnionV2PortalCreatePortalRequestBody2(components.V2PortalCreatePortalRequestBody2{/* values here */})
```

## Union Discrimination

Use the `Type` field to determine which variant is active, then access the corresponding field:

```go
switch v2PortalCreatePortalRequestBodyUnion.Type {
	case components.V2PortalCreatePortalRequestBodyUnionTypeV2PortalCreatePortalRequestBody1:
		// v2PortalCreatePortalRequestBodyUnion.V2PortalCreatePortalRequestBody1 is populated
	case components.V2PortalCreatePortalRequestBodyUnionTypeV2PortalCreatePortalRequestBody2:
		// v2PortalCreatePortalRequestBodyUnion.V2PortalCreatePortalRequestBody2 is populated
}
```
