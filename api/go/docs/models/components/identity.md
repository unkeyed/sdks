# Identity


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `ID`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | Identity ID                                                                    |
| `ExternalID`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | External identity ID                                                           |
| `Meta`                                                                         | map[string]*any*                                                               | :heavy_minus_sign:                                                             | Identity metadata                                                              |
| `Ratelimits`                                                                   | [][components.RatelimitResponse](../../models/components/ratelimitresponse.md) | :heavy_minus_sign:                                                             | Identity ratelimits                                                            |