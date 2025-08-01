// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"github.com/unkeyed/sdks/api/go/v2/models/components"
)

type UpdateCreditsResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Credits updated successfully. Response includes updated remaining credits and refill settings.
	//
	V2KeysUpdateCreditsResponseBody *components.V2KeysUpdateCreditsResponseBody
}

func (o *UpdateCreditsResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *UpdateCreditsResponse) GetV2KeysUpdateCreditsResponseBody() *components.V2KeysUpdateCreditsResponseBody {
	if o == nil {
		return nil
	}
	return o.V2KeysUpdateCreditsResponseBody
}
