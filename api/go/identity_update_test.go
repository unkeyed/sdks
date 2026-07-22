package v2_test

import (
	"context"
	"encoding/json"
	"io"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/require"
	unkey "github.com/unkeyed/sdks/api/go/v2"
	"github.com/unkeyed/sdks/api/go/v2/models/components"
)

func TestUpdateIdentityRequestSerialization(t *testing.T) {
	wireBody := make(chan []byte, 1)
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, request *http.Request) {
		body, err := io.ReadAll(request.Body)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		wireBody <- body
		w.WriteHeader(http.StatusNoContent)
	}))
	t.Cleanup(server.Close)

	client := unkey.New(unkey.WithSecurity("unkey_dummy"), unkey.WithServerURL(server.URL))
	rateLimit := components.RatelimitRequest{
		Name:      "requests",
		Limit:     1000,
		Duration:  3_600_000,
		AutoApply: unkey.Bool(true),
	}

	tests := []struct {
		name     string
		request  components.V2IdentitiesUpdateIdentityRequestBody
		expected map[string]any
	}{
		{
			name: "omits nil metadata and rate limits",
			request: components.V2IdentitiesUpdateIdentityRequestBody{
				Identity:   "user_123",
				Meta:       nil,
				Ratelimits: nil,
			},
			expected: map[string]any{"identity": "user_123"},
		},
		{
			name: "includes empty metadata to clear it",
			request: components.V2IdentitiesUpdateIdentityRequestBody{
				Identity: "user_123",
				Meta:     map[string]any{},
			},
			expected: map[string]any{"identity": "user_123", "meta": map[string]any{}},
		},
		{
			name: "includes populated metadata",
			request: components.V2IdentitiesUpdateIdentityRequestBody{
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
			request: components.V2IdentitiesUpdateIdentityRequestBody{
				Identity:   "user_123",
				Ratelimits: []components.RatelimitRequest{},
			},
			expected: map[string]any{"identity": "user_123", "ratelimits": []any{}},
		},
		{
			name: "includes populated rate limits",
			request: components.V2IdentitiesUpdateIdentityRequestBody{
				Identity:   "user_123",
				Ratelimits: []components.RatelimitRequest{rateLimit},
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
			request: components.V2IdentitiesUpdateIdentityRequestBody{
				Identity:   "user_123",
				Meta:       map[string]any{},
				Ratelimits: []components.RatelimitRequest{rateLimit},
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
			request: components.V2IdentitiesUpdateIdentityRequestBody{
				Identity: "user_123",
				Meta: map[string]any{
					"plan": "pro",
				},
				Ratelimits: []components.RatelimitRequest{},
			},
			expected: map[string]any{
				"identity":   "user_123",
				"meta":       map[string]any{"plan": "pro"},
				"ratelimits": []any{},
			},
		},
		{
			name: "includes empty metadata and rate limits",
			request: components.V2IdentitiesUpdateIdentityRequestBody{
				Identity:   "user_123",
				Meta:       map[string]any{},
				Ratelimits: []components.RatelimitRequest{},
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
			expectedBody, err := json.Marshal(test.expected)
			require.NoError(t, err)

			_, _ = client.Identities.UpdateIdentity(context.Background(), test.request)
			require.JSONEq(t, string(expectedBody), string(<-wireBody))
		})
	}
}
