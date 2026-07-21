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

func TestUpdateIdentitySendsEmptyMetadata(t *testing.T) {
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
	_, _ = client.Identities.UpdateIdentity(context.Background(), components.V2IdentitiesUpdateIdentityRequestBody{
		Identity: "user_123",
		Meta:     map[string]any{},
	})

	var payload map[string]json.RawMessage
	require.NoError(t, json.Unmarshal(<-wireBody, &payload))
	require.Contains(t, payload, "meta", "an empty metadata object must be sent to clear existing metadata")
	require.JSONEq(t, `{}`, string(payload["meta"]))
}
