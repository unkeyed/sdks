// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type V2ApisGetAPIRequestBody struct {
	// Specifies which API to retrieve by its unique identifier.
	// Must be a valid API ID that begins with 'api_' and exists within your workspace.
	//
	APIID string `json:"apiId"`
}

func (o *V2ApisGetAPIRequestBody) GetAPIID() string {
	if o == nil {
		return ""
	}
	return o.APIID
}
