// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type RatelimitOverride struct {
	// The unique identifier of this specific rate limit override. This ID is generated when the override is created and can be used for management operations like updating or deleting the override.
	OverrideID string `json:"overrideId"`
	// The duration in milliseconds for this override's rate limit window. This may differ from the default duration for the namespace, allowing custom time windows for specific entities. After this duration elapses, the rate limit counter for affected identifiers resets to zero.
	Duration int64 `json:"duration"`
	// The identifier pattern this override applies to. This determines which entities receive the custom rate limit.
	//
	// This can be:
	// - An exact identifier for a specific entity
	// - A pattern with wildcards for matching multiple entities
	//
	// Wildcard examples:
	// - 'admin_*' matches any identifier starting with 'admin_'
	// - '*_test' matches any identifier ending with '_test'
	// - '*premium*' matches any identifier containing 'premium'
	//
	// More complex patterns can combine multiple wildcards. Detailed documentation on pattern matching rules is available at https://www.unkey.com/docs/ratelimiting/overrides#wildcard-rules
	Identifier string `json:"identifier"`
	// The maximum number of requests allowed for entities matching this override. This replaces the default limit for the namespace when applied.
	//
	// Common use cases:
	// - Higher limits for premium customers
	// - Reduced limits for abusive or suspicious entities
	// - Zero limit to completely block specific patterns
	// - Custom tier-based limits for different customer segments
	Limit int64 `json:"limit"`
}

func (o *RatelimitOverride) GetOverrideID() string {
	if o == nil {
		return ""
	}
	return o.OverrideID
}

func (o *RatelimitOverride) GetDuration() int64 {
	if o == nil {
		return 0
	}
	return o.Duration
}

func (o *RatelimitOverride) GetIdentifier() string {
	if o == nil {
		return ""
	}
	return o.Identifier
}

func (o *RatelimitOverride) GetLimit() int64 {
	if o == nil {
		return 0
	}
	return o.Limit
}
