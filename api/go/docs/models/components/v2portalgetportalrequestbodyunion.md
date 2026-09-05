# V2PortalGetPortalRequestBodyUnion

Name the portal directly with `portal`, or name the resource it serves with
`keyspaceId` or `appId`. Exactly one of the three is required; sending more
than one is a bad request.



## Supported Types

### V2PortalGetPortalRequestBody1

```go
v2PortalGetPortalRequestBodyUnion := components.CreateV2PortalGetPortalRequestBodyUnionV2PortalGetPortalRequestBody1(components.V2PortalGetPortalRequestBody1{/* values here */})
```

### V2PortalGetPortalRequestBody2

```go
v2PortalGetPortalRequestBodyUnion := components.CreateV2PortalGetPortalRequestBodyUnionV2PortalGetPortalRequestBody2(components.V2PortalGetPortalRequestBody2{/* values here */})
```

### V2PortalGetPortalRequestBody3

```go
v2PortalGetPortalRequestBodyUnion := components.CreateV2PortalGetPortalRequestBodyUnionV2PortalGetPortalRequestBody3(components.V2PortalGetPortalRequestBody3{/* values here */})
```

## Union Discrimination

Use the `Type` field to determine which variant is active, then access the corresponding field:

```go
switch v2PortalGetPortalRequestBodyUnion.Type {
	case components.V2PortalGetPortalRequestBodyUnionTypeV2PortalGetPortalRequestBody1:
		// v2PortalGetPortalRequestBodyUnion.V2PortalGetPortalRequestBody1 is populated
	case components.V2PortalGetPortalRequestBodyUnionTypeV2PortalGetPortalRequestBody2:
		// v2PortalGetPortalRequestBodyUnion.V2PortalGetPortalRequestBody2 is populated
	case components.V2PortalGetPortalRequestBodyUnionTypeV2PortalGetPortalRequestBody3:
		// v2PortalGetPortalRequestBodyUnion.V2PortalGetPortalRequestBody3 is populated
}
```
