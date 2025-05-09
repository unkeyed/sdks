// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"github.com/unkeyed/sdks/go/api/v2/internal/utils"
)

type V2RatelimitListOverridesRequestBody struct {
	// The id of the namespace to list overrides for.
	NamespaceID *string `json:"namespaceId,omitempty"`
	// The name of the namespace to list overrides for.
	NamespaceName *string `json:"namespaceName,omitempty"`
	// Pagination cursor from a previous response
	Cursor *string `json:"cursor,omitempty"`
	// Maximum number of results to return
	Limit *int64 `default:"10" json:"limit"`
}

func (v V2RatelimitListOverridesRequestBody) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(v, "", false)
}

func (v *V2RatelimitListOverridesRequestBody) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &v, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *V2RatelimitListOverridesRequestBody) GetNamespaceID() *string {
	if o == nil {
		return nil
	}
	return o.NamespaceID
}

func (o *V2RatelimitListOverridesRequestBody) GetNamespaceName() *string {
	if o == nil {
		return nil
	}
	return o.NamespaceName
}

func (o *V2RatelimitListOverridesRequestBody) GetCursor() *string {
	if o == nil {
		return nil
	}
	return o.Cursor
}

func (o *V2RatelimitListOverridesRequestBody) GetLimit() *int64 {
	if o == nil {
		return nil
	}
	return o.Limit
}
