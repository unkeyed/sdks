// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

// KeyCreditsData - Credit configuration and remaining balance for this key.
type KeyCreditsData struct {
	// Number of credits remaining (null for unlimited).
	Remaining *int64 `json:"remaining"`
	// Configuration for automatic credit refill behavior.
	Refill *KeyCreditsRefill `json:"refill,omitempty"`
}

func (o *KeyCreditsData) GetRemaining() *int64 {
	if o == nil {
		return nil
	}
	return o.Remaining
}

func (o *KeyCreditsData) GetRefill() *KeyCreditsRefill {
	if o == nil {
		return nil
	}
	return o.Refill
}
