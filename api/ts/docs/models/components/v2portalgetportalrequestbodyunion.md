# V2PortalGetPortalRequestBodyUnion

Name the portal directly with `portal`, or name the resource it serves with
`keyspaceId` or `appId`. Exactly one of the three is required; sending more
than one is a bad request.



## Supported Types

### `components.V2PortalGetPortalRequestBody1`

```typescript
const value: components.V2PortalGetPortalRequestBody1 = {
  portal: "proj_1234abcd",
  keyspaceId: "ks_1234abcd",
  appId: "app_1234abcd",
};
```

### `components.V2PortalGetPortalRequestBody2`

```typescript
const value: components.V2PortalGetPortalRequestBody2 = {
  portal: "proj_1234abcd",
  keyspaceId: "ks_1234abcd",
  appId: "app_1234abcd",
};
```

### `components.V2PortalGetPortalRequestBody3`

```typescript
const value: components.V2PortalGetPortalRequestBody3 = {
  portal: "proj_1234abcd",
  keyspaceId: "ks_1234abcd",
  appId: "app_1234abcd",
};
```

