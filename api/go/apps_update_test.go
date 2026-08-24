package v3_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/unkeyed/sdks/api/go/v3/models/components"
	"github.com/unkeyed/sdks/api/go/v3/optionalnullable"
)

func TestUpdateAppGitSerialization(t *testing.T) {
	repository := "unkeyed/unkey"

	tests := []struct {
		name     string
		git      optionalnullable.OptionalNullable[components.AppGitUpdateInput]
		expected string
	}{
		{
			name:     "omitted",
			expected: `{"app":"app","project":"project"}`,
		},
		{
			name:     "null",
			git:      optionalnullable.From[components.AppGitUpdateInput](nil),
			expected: `{"app":"app","git":null,"project":"project"}`,
		},
		{
			name: "value",
			git: optionalnullable.From(&components.AppGitUpdateInput{
				Repository: &repository,
			}),
			expected: `{"app":"app","git":{"repository":"unkeyed/unkey"},"project":"project"}`,
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			body, err := (components.V2AppsUpdateAppRequestBody{
				Project: "project",
				App:     "app",
				Git:     test.git,
			}).MarshalJSON()
			require.NoError(t, err)
			require.JSONEq(t, test.expected, string(body))
		})
	}
}
