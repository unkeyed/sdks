// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type V2RatelimitLimitResponseData struct {
	// The maximum number of operations allowed within the time window. This reflects either the default limit specified in the request or an override limit if one exists for this identifier.
	//
	// This value helps clients understand their total quota for the current window.
	Limit int64 `json:"limit"`
	// The number of operations remaining in the current window before the rate limit is exceeded. Applications should use this value to:
	//
	// - Implement client-side throttling before hitting limits
	// - Display usage information to end users
	// - Trigger alerts when approaching limits
	// - Adjust request patterns based on available capacity
	//
	// When this reaches zero, requests will be rejected until the window resets.
	Remaining int64 `json:"remaining"`
	// The Unix timestamp in milliseconds when the rate limit window will reset and 'remaining' will return to 'limit'.
	//
	// This timestamp enables clients to:
	// - Calculate and display wait times to users
	// - Implement intelligent retry mechanisms
	// - Schedule requests to resume after the reset
	// - Implement exponential backoff when needed
	//
	// The reset time is based on a sliding window from the first request in the current window.
	Reset int64 `json:"reset"`
	// Whether the request passed the rate limit check. If true, the request is allowed to proceed. If false, the request has exceeded the rate limit and should be blocked or rejected.
	//
	// You MUST check this field to determine if the request should proceed, as the endpoint always returns `HTTP 200` even when rate limited.
	Success bool `json:"success"`
	// If a rate limit override was applied for this identifier, this field contains the ID of the override that was used. Empty when no override is in effect.
	//
	// This can be useful for:
	// - Debugging which override rule was matched
	// - Tracking the effects of specific overrides
	// - Understanding why limits differ from default values
	OverrideID *string `json:"overrideId,omitempty"`
}

func (o *V2RatelimitLimitResponseData) GetLimit() int64 {
	if o == nil {
		return 0
	}
	return o.Limit
}

func (o *V2RatelimitLimitResponseData) GetRemaining() int64 {
	if o == nil {
		return 0
	}
	return o.Remaining
}

func (o *V2RatelimitLimitResponseData) GetReset() int64 {
	if o == nil {
		return 0
	}
	return o.Reset
}

func (o *V2RatelimitLimitResponseData) GetSuccess() bool {
	if o == nil {
		return false
	}
	return o.Success
}

func (o *V2RatelimitLimitResponseData) GetOverrideID() *string {
	if o == nil {
		return nil
	}
	return o.OverrideID
}
