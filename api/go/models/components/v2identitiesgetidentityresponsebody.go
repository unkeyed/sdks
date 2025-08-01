// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type V2IdentitiesGetIdentityResponseBody struct {
	// Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team.
	Meta Meta                                `json:"meta"`
	Data V2IdentitiesGetIdentityResponseData `json:"data"`
}

func (o *V2IdentitiesGetIdentityResponseBody) GetMeta() Meta {
	if o == nil {
		return Meta{}
	}
	return o.Meta
}

func (o *V2IdentitiesGetIdentityResponseBody) GetData() V2IdentitiesGetIdentityResponseData {
	if o == nil {
		return V2IdentitiesGetIdentityResponseData{}
	}
	return o.Data
}
