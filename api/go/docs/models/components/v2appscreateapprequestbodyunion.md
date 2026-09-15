# V2AppsCreateAppRequestBodyUnion

Create an app with exactly one source: `git` or `oci`. Requests that omit a
source or provide both sources are rejected.



## Supported Types

### V2AppsCreateAppRequestBody1

```go
v2AppsCreateAppRequestBodyUnion := components.CreateV2AppsCreateAppRequestBodyUnionV2AppsCreateAppRequestBody1(components.V2AppsCreateAppRequestBody1{/* values here */})
```

### V2AppsCreateAppRequestBody2

```go
v2AppsCreateAppRequestBodyUnion := components.CreateV2AppsCreateAppRequestBodyUnionV2AppsCreateAppRequestBody2(components.V2AppsCreateAppRequestBody2{/* values here */})
```

## Union Discrimination

Use the `Type` field to determine which variant is active, then access the corresponding field:

```go
switch v2AppsCreateAppRequestBodyUnion.Type {
	case components.V2AppsCreateAppRequestBodyUnionTypeV2AppsCreateAppRequestBody1:
		// v2AppsCreateAppRequestBodyUnion.V2AppsCreateAppRequestBody1 is populated
	case components.V2AppsCreateAppRequestBodyUnionTypeV2AppsCreateAppRequestBody2:
		// v2AppsCreateAppRequestBodyUnion.V2AppsCreateAppRequestBody2 is populated
}
```
