// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"github.com/unkeyed/sdks/api/go/v2/models/components"
)

type IdentitiesGetIdentityResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Successfully retrieved the identity information
	V2IdentitiesGetIdentityResponseBody *components.V2IdentitiesGetIdentityResponseBody
}

func (o *IdentitiesGetIdentityResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *IdentitiesGetIdentityResponse) GetV2IdentitiesGetIdentityResponseBody() *components.V2IdentitiesGetIdentityResponseBody {
	if o == nil {
		return nil
	}
	return o.V2IdentitiesGetIdentityResponseBody
}
