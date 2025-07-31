# Code

A machine-readable code indicating the verification status
or failure reason. Values: `VALID` (key is valid and passed all checks), `NOT_FOUND` (key doesn't
exist or belongs to wrong API), `FORBIDDEN` (key lacks required permissions), `INSUFFICIENT_PERMISSIONS`
(key lacks specific required permissions for this request), `INSUFFICIENT_CREDITS`
(key has no remaining credits), `USAGE_EXCEEDED` (key exceeded usage limits), `RATE_LIMITED` (key exceeded rate limits), `DISABLED` (key was explicitly disabled),
`EXPIRED` (key has passed its expiration date).



## Values

| Name                       | Value                      |
| -------------------------- | -------------------------- |
| `VALID`                    | VALID                      |
| `NOT_FOUND`                | NOT_FOUND                  |
| `FORBIDDEN`                | FORBIDDEN                  |
| `INSUFFICIENT_PERMISSIONS` | INSUFFICIENT_PERMISSIONS   |
| `INSUFFICIENT_CREDITS`     | INSUFFICIENT_CREDITS       |
| `USAGE_EXCEEDED`           | USAGE_EXCEEDED             |
| `RATE_LIMITED`             | RATE_LIMITED               |
| `DISABLED`                 | DISABLED                   |
| `EXPIRED`                  | EXPIRED                    |