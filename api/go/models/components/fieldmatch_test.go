package components

import (
	"encoding/json"
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/unkeyed/sdks/api/go/v3/types"
)

func TestFieldMatchSerialization(t *testing.T) {
	tests := []struct {
		name     string
		match    FieldMatch
		present  *bool
		expected map[string]any
	}{
		{
			name:     "defaults to present",
			match:    FieldMatch{Name: "X-Tenant"},
			present:  types.Pointer(true),
			expected: map[string]any{"name": "X-Tenant", "present": true},
		},
		{
			name: "preserves explicit true",
			match: FieldMatch{
				Name:    "X-Tenant",
				Present: types.Pointer(true),
			},
			present:  types.Pointer(true),
			expected: map[string]any{"name": "X-Tenant", "present": true},
		},
		{
			name: "preserves explicit false",
			match: FieldMatch{
				Name:    "X-Tenant",
				Present: types.Pointer(false),
			},
			present:  types.Pointer(false),
			expected: map[string]any{"name": "X-Tenant", "present": false},
		},
		{
			name: "leaves value matchers alone",
			match: FieldMatch{
				Name:  "X-Tenant",
				Value: &StringMatch{Exact: types.Pointer("tenant-a")},
			},
			expected: map[string]any{"name": "X-Tenant", "value": map[string]any{"exact": "tenant-a"}},
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			for _, field := range []string{"header", "queryParam"} {
				t.Run(field, func(t *testing.T) {
					match := MatchExpr{Header: &test.match}
					if field == "queryParam" {
						match = MatchExpr{QueryParam: &test.match}
					}
					actual, err := json.Marshal(match)
					require.NoError(t, err)
					expected, err := json.Marshal(map[string]any{field: test.expected})
					require.NoError(t, err)
					require.JSONEq(t, string(expected), string(actual))
				})
			}
			require.Equal(t, test.present, test.match.GetPresent())
		})
	}
}
