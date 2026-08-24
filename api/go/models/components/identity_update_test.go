package components

import (
	"encoding/json"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestUpdateIdentityRequestSerialization(t *testing.T) {
	autoApply := true
	rateLimit := RatelimitRequest{
		Name:      "requests",
		Limit:     1000,
		Duration:  3_600_000,
		AutoApply: &autoApply,
	}

	tests := []struct {
		name     string
		request  V2IdentitiesUpdateIdentityRequestBody
		expected map[string]any
	}{
		{
			name: "omits nil metadata and rate limits",
			request: V2IdentitiesUpdateIdentityRequestBody{
				Identity:   "user_123",
				Meta:       nil,
				Ratelimits: nil,
			},
			expected: map[string]any{"identity": "user_123"},
		},
		{
			name: "includes empty metadata to clear it",
			request: V2IdentitiesUpdateIdentityRequestBody{
				Identity: "user_123",
				Meta:     map[string]any{},
			},
			expected: map[string]any{"identity": "user_123", "meta": map[string]any{}},
		},
		{
			name: "includes populated metadata",
			request: V2IdentitiesUpdateIdentityRequestBody{
				Identity: "user_123",
				Meta: map[string]any{
					"enabled": true,
					"plan":    "pro",
					"seats":   3,
				},
			},
			expected: map[string]any{
				"identity": "user_123",
				"meta": map[string]any{
					"enabled": true,
					"plan":    "pro",
					"seats":   3,
				},
			},
		},
		{
			name: "includes empty rate limits to clear them",
			request: V2IdentitiesUpdateIdentityRequestBody{
				Identity:   "user_123",
				Ratelimits: []RatelimitRequest{},
			},
			expected: map[string]any{"identity": "user_123", "ratelimits": []any{}},
		},
		{
			name: "includes populated rate limits",
			request: V2IdentitiesUpdateIdentityRequestBody{
				Identity:   "user_123",
				Ratelimits: []RatelimitRequest{rateLimit},
			},
			expected: map[string]any{
				"identity": "user_123",
				"ratelimits": []any{
					map[string]any{"name": "requests", "limit": 1000, "duration": 3_600_000, "autoApply": true},
				},
			},
		},
		{
			name: "includes empty metadata with populated rate limits",
			request: V2IdentitiesUpdateIdentityRequestBody{
				Identity:   "user_123",
				Meta:       map[string]any{},
				Ratelimits: []RatelimitRequest{rateLimit},
			},
			expected: map[string]any{
				"identity": "user_123",
				"meta":     map[string]any{},
				"ratelimits": []any{
					map[string]any{"name": "requests", "limit": 1000, "duration": 3_600_000, "autoApply": true},
				},
			},
		},
		{
			name: "includes populated metadata with empty rate limits",
			request: V2IdentitiesUpdateIdentityRequestBody{
				Identity: "user_123",
				Meta: map[string]any{
					"plan": "pro",
				},
				Ratelimits: []RatelimitRequest{},
			},
			expected: map[string]any{
				"identity":   "user_123",
				"meta":       map[string]any{"plan": "pro"},
				"ratelimits": []any{},
			},
		},
		{
			name: "includes empty metadata and rate limits",
			request: V2IdentitiesUpdateIdentityRequestBody{
				Identity:   "user_123",
				Meta:       map[string]any{},
				Ratelimits: []RatelimitRequest{},
			},
			expected: map[string]any{
				"identity":   "user_123",
				"meta":       map[string]any{},
				"ratelimits": []any{},
			},
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			actualBody, err := json.Marshal(test.request)
			require.NoError(t, err)

			expectedBody, err := json.Marshal(test.expected)
			require.NoError(t, err)
			require.JSONEq(t, string(expectedBody), string(actualBody))
		})
	}
}
