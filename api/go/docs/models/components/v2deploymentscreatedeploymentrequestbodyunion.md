# V2DeploymentsCreateDeploymentRequestBodyUnion

Create a deployment. Provide exactly one of git, image, or deployment.


## Supported Types

### V2DeploymentsCreateDeploymentRequestBody1

```go
v2DeploymentsCreateDeploymentRequestBodyUnion := components.CreateV2DeploymentsCreateDeploymentRequestBodyUnionV2DeploymentsCreateDeploymentRequestBody1(components.V2DeploymentsCreateDeploymentRequestBody1{/* values here */})
```

### V2DeploymentsCreateDeploymentRequestBody2

```go
v2DeploymentsCreateDeploymentRequestBodyUnion := components.CreateV2DeploymentsCreateDeploymentRequestBodyUnionV2DeploymentsCreateDeploymentRequestBody2(components.V2DeploymentsCreateDeploymentRequestBody2{/* values here */})
```

### V2DeploymentsCreateDeploymentRequestBody3

```go
v2DeploymentsCreateDeploymentRequestBodyUnion := components.CreateV2DeploymentsCreateDeploymentRequestBodyUnionV2DeploymentsCreateDeploymentRequestBody3(components.V2DeploymentsCreateDeploymentRequestBody3{/* values here */})
```

## Union Discrimination

Use the `Type` field to determine which variant is active, then access the corresponding field:

```go
switch v2DeploymentsCreateDeploymentRequestBodyUnion.Type {
	case components.V2DeploymentsCreateDeploymentRequestBodyUnionTypeV2DeploymentsCreateDeploymentRequestBody1:
		// v2DeploymentsCreateDeploymentRequestBodyUnion.V2DeploymentsCreateDeploymentRequestBody1 is populated
	case components.V2DeploymentsCreateDeploymentRequestBodyUnionTypeV2DeploymentsCreateDeploymentRequestBody2:
		// v2DeploymentsCreateDeploymentRequestBodyUnion.V2DeploymentsCreateDeploymentRequestBody2 is populated
	case components.V2DeploymentsCreateDeploymentRequestBodyUnionTypeV2DeploymentsCreateDeploymentRequestBody3:
		// v2DeploymentsCreateDeploymentRequestBodyUnion.V2DeploymentsCreateDeploymentRequestBody3 is populated
}
```
