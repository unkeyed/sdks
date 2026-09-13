# PortalBranding

How the portal looks to your end users. Both fields are optional; a portal
with neither set renders with default styling.


## Example Usage

```typescript
import { PortalBranding } from "@unkey/api/models/components";

let value: PortalBranding = {
  logoUrl: "https://cdn.example.com/logo.svg",
  primaryColor: "#6366f1",
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     | Example                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `logoUrl`                                                                                                                                                                       | *string*                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                              | Absolute `https://` URL of the logo shown in the portal header.<br/><br/>Loaded by your end users' browsers, so the host you name receives their IP<br/>and user agent on every page view.<br/> | https://cdn.example.com/logo.svg                                                                                                                                                |
| `primaryColor`                                                                                                                                                                  | *string*                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                              | Six-digit hex colour used for primary actions and accents in the portal.<br/>                                                                                                   | #6366f1                                                                                                                                                                         |