// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type V2RatelimitSetOverrideResponseData struct {
	// The unique identifier for the newly created or updated rate limit override. This ID can be used to:
	//
	// - Reference this specific override in subsequent API calls
	// - Delete or modify this override later
	// - Track which override is being applied in rate limit responses
	// - Associate override effects with specific rules in analytics
	//
	// Store this ID if you need to manage the override in the future.
	OverrideID string `json:"overrideId"`
}

func (o *V2RatelimitSetOverrideResponseData) GetOverrideID() string {
	if o == nil {
		return ""
	}
	return o.OverrideID
}
