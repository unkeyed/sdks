// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package apierrors

import (
	"encoding/json"
	"github.com/unkeyed/sdks/go/api/v2/models/components"
)

type UnauthorizedErrorResponse struct {
	Meta   components.Meta      `json:"meta"`
	Error_ components.BaseError `json:"error"`
}

var _ error = &UnauthorizedErrorResponse{}

func (e *UnauthorizedErrorResponse) Error() string {
	data, _ := json.Marshal(e)
	return string(data)
}
