package v3_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"github.com/unkeyed/sdks/api/go/v3/optionalnullable"
)

func TestUpdateKeyRatelimitsSerialization(t *testing.T) {
	autoApply := true
	ratelimits := []components.RatelimitRequest{
		{
			Name:      "requests",
			Limit:     100,
			Duration:  60_000,
			AutoApply: &autoApply,
		},
	}

	tests := []struct {
		name       string
		ratelimits optionalnullable.OptionalNullable[[]components.RatelimitRequest]
		expected   string
	}{
		{
			name:     "omitted",
			expected: `{"keyId":"key_123"}`,
		},
		{
			name:       "null",
			ratelimits: optionalnullable.From[[]components.RatelimitRequest](nil),
			expected:   `{"keyId":"key_123","ratelimits":null}`,
		},
		{
			name:       "value",
			ratelimits: optionalnullable.From(&ratelimits),
			expected:   `{"keyId":"key_123","ratelimits":[{"autoApply":true,"duration":60000,"limit":100,"name":"requests"}]}`,
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			body, err := (components.V2KeysUpdateKeyRequestBody{
				KeyID:      "key_123",
				Ratelimits: test.ratelimits,
			}).MarshalJSON()
			require.NoError(t, err)
			require.JSONEq(t, test.expected, string(body))
		})
	}
}
