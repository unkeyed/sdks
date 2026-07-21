# V2DeploymentsCreateDeploymentRequestBodyUnion

Create a deployment. Provide exactly one of git, image, or deployment.


## Supported Types

### `components.V2DeploymentsCreateDeploymentRequestBody1`

```typescript
const value: components.V2DeploymentsCreateDeploymentRequestBody1 = {
  project: "proj_1234abcd",
  app: "proj_1234abcd",
  environment: "proj_1234abcd",
  git: {
    branch: "main",
    commitSha: "9f2c1a7",
    repository: "contributor/acme-api",
  },
  image: {
    dockerImage: "ghcr.io/acme/api:v1.2.3",
  },
  deployment: {
    deploymentId: "proj_1234abcd",
  },
};
```

### `components.V2DeploymentsCreateDeploymentRequestBody2`

```typescript
const value: components.V2DeploymentsCreateDeploymentRequestBody2 = {
  project: "proj_1234abcd",
  app: "proj_1234abcd",
  environment: "proj_1234abcd",
  git: {
    branch: "main",
    commitSha: "9f2c1a7",
    repository: "contributor/acme-api",
  },
  image: {
    dockerImage: "ghcr.io/acme/api:v1.2.3",
  },
  deployment: {
    deploymentId: "proj_1234abcd",
  },
};
```

### `components.V2DeploymentsCreateDeploymentRequestBody3`

```typescript
const value: components.V2DeploymentsCreateDeploymentRequestBody3 = {
  project: "proj_1234abcd",
  app: "proj_1234abcd",
  environment: "proj_1234abcd",
  git: {
    branch: "main",
    commitSha: "9f2c1a7",
    repository: "contributor/acme-api",
  },
  image: {
    dockerImage: "ghcr.io/acme/api:v1.2.3",
  },
  deployment: {
    deploymentId: "proj_1234abcd",
  },
};
```

