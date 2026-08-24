# Type

Record type to create. `ALIAS` is not a real DNS record type: it means an apex-compatible
alias, which providers expose as ALIAS, ANAME, or a flattened CNAME. Apex domains cannot
hold a plain CNAME, so they receive `ALIAS` where a subdomain receives `CNAME`.


## Example Usage

```typescript
import { Type } from "@unkey/api/models/components";

let value: Type = "CNAME";
```

## Values

```typescript
"CNAME" | "ALIAS" | "TXT"
```