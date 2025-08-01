// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type V2KeysGetKeyResponseBody struct {
	// Metadata object included in every API response. This provides context about the request and is essential for debugging, audit trails, and support inquiries. The `requestId` is particularly important when troubleshooting issues with the Unkey support team.
	Meta Meta            `json:"meta"`
	Data KeyResponseData `json:"data"`
}

func (o *V2KeysGetKeyResponseBody) GetMeta() Meta {
	if o == nil {
		return Meta{}
	}
	return o.Meta
}

func (o *V2KeysGetKeyResponseBody) GetData() KeyResponseData {
	if o == nil {
		return KeyResponseData{}
	}
	return o.Data
}
