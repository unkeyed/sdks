// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package utils

import (
	"bytes"
	"encoding/json"
	"fmt"
	"math/big"
	"reflect"
	"strconv"
	"strings"
	"time"
	"unsafe"

	"github.com/unkeyed/sdks/api/go/v2/types"

	"github.com/ericlagergren/decimal"
)

func MarshalJSON(v interface{}, tag reflect.StructTag, topLevel bool) ([]byte, error) {
	typ, val := dereferencePointers(reflect.TypeOf(v), reflect.ValueOf(v))

	switch {
	case isModelType(typ):
		if topLevel {
			return json.Marshal(v)
		}

		if isNil(typ, val) {
			return []byte("null"), nil
		}

		out := map[string]json.RawMessage{}

		for i := 0; i < typ.NumField(); i++ {
			field := typ.Field(i)
			fieldVal := val.Field(i)

			fieldName := field.Name

			omitEmpty := false
			jsonTag := field.Tag.Get("json")
			if jsonTag != "" {
				for _, tag := range strings.Split(jsonTag, ",") {
					if tag == "omitempty" {
						omitEmpty = true
					} else {
						fieldName = tag
					}
				}
			}

			if isNil(field.Type, fieldVal) && field.Tag.Get("const") == "" {
				if omitEmpty {
					continue
				}
			}

			if !field.IsExported() && field.Tag.Get("const") == "" {
				continue
			}

			additionalProperties := field.Tag.Get("additionalProperties")
			if fieldName == "-" && additionalProperties == "" {
				continue
			}

			if additionalProperties == "true" {
				if isNil(field.Type, fieldVal) {
					continue
				}
				fieldVal := trueReflectValue(fieldVal)
				if fieldVal.Type().Kind() != reflect.Map {
					return nil, fmt.Errorf("additionalProperties must be a map")
				}

				for _, key := range fieldVal.MapKeys() {
					r, err := marshalValue(fieldVal.MapIndex(key).Interface(), field.Tag)
					if err != nil {
						return nil, err
					}

					out[key.String()] = r
				}

				continue
			}

			var fv interface{}

			if field.IsExported() {
				fv = fieldVal.Interface()
			} else {
				pt := reflect.New(typ).Elem()
				pt.Set(val)

				pf := pt.Field(i)

				fv = reflect.NewAt(pf.Type(), unsafe.Pointer(pf.UnsafeAddr())).Elem().Interface()
			}

			r, err := marshalValue(fv, field.Tag)
			if err != nil {
				return nil, err
			}

			out[fieldName] = r
		}

		return json.Marshal(out)
	default:
		return marshalValue(v, tag)
	}
}

func UnmarshalJSON(b []byte, v interface{}, tag reflect.StructTag, topLevel bool, disallowUnknownFields bool) error {
	if reflect.TypeOf(v).Kind() != reflect.Ptr {
		return fmt.Errorf("v must be a pointer")
	}

	typ, val := dereferencePointers(reflect.TypeOf(v), reflect.ValueOf(v))

	switch {
	case isModelType(typ):
		if topLevel || bytes.Equal(b, []byte("null")) {
			d := json.NewDecoder(bytes.NewReader(b))
			if disallowUnknownFields {
				d.DisallowUnknownFields()
			}
			return d.Decode(v)
		}

		var unmarhsaled map[string]json.RawMessage

		if err := json.Unmarshal(b, &unmarhsaled); err != nil {
			return err
		}

		var additionalPropertiesField *reflect.StructField
		var additionalPropertiesValue *reflect.Value

		for i := 0; i < typ.NumField(); i++ {
			field := typ.Field(i)
			fieldVal := val.Field(i)

			fieldName := field.Name

			jsonTag := field.Tag.Get("json")
			if jsonTag != "" {
				for _, tag := range strings.Split(jsonTag, ",") {
					if tag != "omitempty" {
						fieldName = tag
					}
				}
			}

			if field.Tag.Get("additionalProperties") == "true" {
				additionalPropertiesField = &field
				additionalPropertiesValue = &fieldVal
				continue
			}

			// If we receive a value for a const field ignore it but mark it as unmarshaled
			if field.Tag.Get("const") != "" {
				if r, ok := unmarhsaled[fieldName]; ok {
					val := string(r)

					if strings.HasPrefix(val, `"`) && strings.HasSuffix(val, `"`) {
						var err error
						val, err = strconv.Unquote(val)
						if err != nil {
							return fmt.Errorf("failed to unquote const field `%s` value `%s`: %w", fieldName, val, err)
						}
					}
					constValue := field.Tag.Get("const")
					if val != constValue {
						return fmt.Errorf("const field `%s` does not match expected value `%s` got `%s`", fieldName, constValue, val)
					}

					delete(unmarhsaled, fieldName)
				}
			} else if !field.IsExported() {
				continue
			}

			value, ok := unmarhsaled[fieldName]
			if !ok {
				defaultTag, defaultOk := field.Tag.Lookup("default")
				if defaultOk {
					value = handleDefaultConstValue(defaultTag, fieldVal.Interface(), field.Tag)
					ok = true
				}
			} else {
				delete(unmarhsaled, fieldName)
			}

			if ok {
				if err := unmarshalValue(value, fieldVal, field.Tag, disallowUnknownFields); err != nil {
					return err
				}
			}
		}

		keys := make([]string, 0, len(unmarhsaled))
		for k := range unmarhsaled {
			keys = append(keys, k)
		}

		if len(keys) > 0 {
			if disallowUnknownFields && (additionalPropertiesField == nil || additionalPropertiesValue == nil) {
				return fmt.Errorf("unknown fields: %v", keys)
			}

			if additionalPropertiesField != nil && additionalPropertiesValue != nil {
				typeOfMap := additionalPropertiesField.Type
				if additionalPropertiesValue.Type().Kind() == reflect.Interface {
					typeOfMap = reflect.TypeOf(map[string]interface{}{})
				} else if additionalPropertiesValue.Type().Kind() != reflect.Map {
					return fmt.Errorf("additionalProperties must be a map")
				}

				mapValue := reflect.MakeMap(typeOfMap)

				for key, value := range unmarhsaled {
					val := reflect.New(typeOfMap.Elem())

					if err := unmarshalValue(value, val, additionalPropertiesField.Tag, disallowUnknownFields); err != nil {
						return err
					}

					if val.Elem().Type().String() == typeOfMap.Elem().String() {
						mapValue.SetMapIndex(reflect.ValueOf(key), val.Elem())
					} else {
						mapValue.SetMapIndex(reflect.ValueOf(key), trueReflectValue(val))
					}

				}
				if additionalPropertiesValue.Type().Kind() == reflect.Interface {
					additionalPropertiesValue.Set(mapValue)
				} else {
					additionalPropertiesValue.Set(mapValue)
				}
			}
		}
	default:
		return unmarshalValue(b, reflect.ValueOf(v), tag, disallowUnknownFields)
	}

	return nil
}

func marshalValue(v interface{}, tag reflect.StructTag) (json.RawMessage, error) {
	constTag := tag.Get("const")
	if constTag != "" {
		return handleDefaultConstValue(constTag, v, tag), nil
	}

	if isNil(reflect.TypeOf(v), reflect.ValueOf(v)) {
		defaultTag, ok := tag.Lookup("default")
		if ok {
			return handleDefaultConstValue(defaultTag, v, tag), nil
		}

		return []byte("null"), nil
	}

	typ, val := dereferencePointers(reflect.TypeOf(v), reflect.ValueOf(v))
	switch typ.Kind() {
	case reflect.Int64:
		format := tag.Get("integer")
		if format == "string" {
			b := val.Interface().(int64)
			return []byte(fmt.Sprintf(`"%d"`, b)), nil
		}
	case reflect.Float64:
		format := tag.Get("number")
		if format == "string" {
			b := val.Interface().(float64)
			return []byte(fmt.Sprintf(`"%g"`, b)), nil
		}
	case reflect.Map:
		if isNil(typ, val) {
			return []byte("null"), nil
		}

		out := map[string]json.RawMessage{}

		for _, key := range val.MapKeys() {
			itemVal := val.MapIndex(key)

			if isNil(itemVal.Type(), itemVal) {
				out[key.String()] = []byte("null")
				continue
			}

			r, err := marshalValue(itemVal.Interface(), tag)
			if err != nil {
				return nil, err
			}

			out[key.String()] = r
		}

		return json.Marshal(out)
	case reflect.Slice, reflect.Array:
		if isNil(typ, val) {
			return []byte("null"), nil
		}

		out := []json.RawMessage{}

		for i := 0; i < val.Len(); i++ {
			itemVal := val.Index(i)

			if isNil(itemVal.Type(), itemVal) {
				out = append(out, []byte("null"))
				continue
			}

			r, err := marshalValue(itemVal.Interface(), tag)
			if err != nil {
				return nil, err
			}

			out = append(out, r)
		}

		return json.Marshal(out)
	case reflect.Struct:
		switch typ {
		case reflect.TypeOf(time.Time{}):
			return []byte(fmt.Sprintf(`"%s"`, val.Interface().(time.Time).Format(time.RFC3339Nano))), nil
		case reflect.TypeOf(big.Int{}):
			format := tag.Get("bigint")
			if format == "string" {
				b := val.Interface().(big.Int)
				return []byte(fmt.Sprintf(`"%s"`, (&b).String())), nil
			}
		case reflect.TypeOf(decimal.Big{}):
			format := tag.Get("decimal")
			if format == "number" {
				b := val.Interface().(decimal.Big)
				f, ok := (&b).Float64()
				if ok {
					return []byte(b.String()), nil
				}

				return []byte(fmt.Sprintf(`%f`, f)), nil
			}
		}
	}

	return json.Marshal(v)
}

func handleDefaultConstValue(tagValue string, val interface{}, tag reflect.StructTag) json.RawMessage {
	if tagValue == "null" {
		return []byte("null")
	}

	typ := dereferenceTypePointer(reflect.TypeOf(val))
	switch typ {
	case reflect.TypeOf(time.Time{}):
		return []byte(fmt.Sprintf(`"%s"`, tagValue))
	case reflect.TypeOf(big.Int{}):
		bigIntTag := tag.Get("bigint")
		if bigIntTag == "string" {
			return []byte(fmt.Sprintf(`"%s"`, tagValue))
		}
	case reflect.TypeOf(int64(0)):
		format := tag.Get("integer")
		if format == "string" {
			return []byte(fmt.Sprintf(`"%s"`, tagValue))
		}
	case reflect.TypeOf(float64(0)):
		format := tag.Get("number")
		if format == "string" {
			return []byte(fmt.Sprintf(`"%s"`, tagValue))
		}
	case reflect.TypeOf(decimal.Big{}):
		decimalTag := tag.Get("decimal")
		if decimalTag != "number" {
			return []byte(fmt.Sprintf(`"%s"`, tagValue))
		}
	case reflect.TypeOf(types.Date{}):
		return []byte(fmt.Sprintf(`"%s"`, tagValue))
	default:
		if typ.Kind() == reflect.String {
			return []byte(fmt.Sprintf("%q", tagValue))
		}
	}

	return []byte(tagValue)
}

func unmarshalValue(value json.RawMessage, v reflect.Value, tag reflect.StructTag, disallowUnknownFields bool) error {
	if bytes.Equal(value, []byte("null")) {
		if v.CanAddr() {
			return json.Unmarshal(value, v.Addr().Interface())
		} else {
			return json.Unmarshal(value, v.Interface())
		}
	}

	typ := dereferenceTypePointer(v.Type())

	switch typ.Kind() {
	case reflect.Int64:
		var b int64

		format := tag.Get("integer")
		if format == "string" {
			var s string
			if err := json.Unmarshal(value, &s); err != nil {
				return err
			}

			var err error
			b, err = strconv.ParseInt(s, 10, 64)
			if err != nil {
				return fmt.Errorf("failed to parse string as int64: %w", err)
			}
			if v.Kind() == reflect.Ptr {
				if v.IsNil() {
					v.Set(reflect.New(typ))
				}
				v = v.Elem()
			}

			v.Set(reflect.ValueOf(b))
			return nil
		}
	case reflect.Float64:
		var b float64

		format := tag.Get("number")
		if format == "string" {
			var s string
			if err := json.Unmarshal(value, &s); err != nil {
				return err
			}

			var err error
			b, err = strconv.ParseFloat(s, 64)
			if err != nil {
				return fmt.Errorf("failed to parse string as float64: %w", err)
			}

			if v.Kind() == reflect.Ptr {
				if v.IsNil() {
					v.Set(reflect.New(typ))
				}
				v = v.Elem()
			}

			v.Set(reflect.ValueOf(b))
			return nil
		}
	case reflect.Map:
		if bytes.Equal(value, []byte("null")) || !isComplexValueType(dereferenceTypePointer(typ.Elem())) {
			if v.CanAddr() {
				return json.Unmarshal(value, v.Addr().Interface())
			} else {
				return json.Unmarshal(value, v.Interface())
			}
		}

		var unmarhsaled map[string]json.RawMessage

		if err := json.Unmarshal(value, &unmarhsaled); err != nil {
			return err
		}

		m := reflect.MakeMap(typ)

		for k, value := range unmarhsaled {
			itemVal := reflect.New(typ.Elem())

			if err := unmarshalValue(value, itemVal, tag, disallowUnknownFields); err != nil {
				return err
			}

			m.SetMapIndex(reflect.ValueOf(k), itemVal.Elem())
		}

		v.Set(m)
		return nil
	case reflect.Slice, reflect.Array:
		var unmarshaled []json.RawMessage

		if err := json.Unmarshal(value, &unmarshaled); err != nil {
			return err
		}

		arrVal := reflect.MakeSlice(typ, len(unmarshaled), len(unmarshaled))

		for index, value := range unmarshaled {
			itemVal := reflect.New(typ.Elem())

			if err := unmarshalValue(value, itemVal, tag, disallowUnknownFields); err != nil {
				return err
			}

			arrVal.Index(index).Set(itemVal.Elem())
		}

		if v.Kind() == reflect.Pointer {
			if v.IsNil() {
				v.Set(reflect.New(typ))
			}
			v = v.Elem()
		}

		v.Set(arrVal)
		return nil
	case reflect.Struct:
		switch typ {
		case reflect.TypeOf(time.Time{}):
			var s string
			if err := json.Unmarshal(value, &s); err != nil {
				return err
			}

			t, err := time.Parse(time.RFC3339Nano, s)
			if err != nil {
				return fmt.Errorf("failed to parse string as time.Time: %w", err)
			}

			if v.Kind() == reflect.Ptr {
				if v.IsNil() {
					v.Set(reflect.New(typ))
				}
				v = v.Elem()
			}

			v.Set(reflect.ValueOf(t))
			return nil
		case reflect.TypeOf(big.Int{}):
			var b *big.Int

			format := tag.Get("bigint")
			if format == "string" {
				var s string
				if err := json.Unmarshal(value, &s); err != nil {
					return err
				}

				var ok bool
				b, ok = new(big.Int).SetString(s, 10)
				if !ok {
					return fmt.Errorf("failed to parse string as big.Int")
				}
			} else {
				if err := json.Unmarshal(value, &b); err != nil {
					return err
				}
			}

			if v.Kind() == reflect.Ptr && v.Elem().Kind() == reflect.Ptr {
				v = v.Elem()
			}

			v.Set(reflect.ValueOf(b))
			return nil
		case reflect.TypeOf(decimal.Big{}):
			var d *decimal.Big
			format := tag.Get("decimal")
			if format == "number" {
				var ok bool
				d, ok = new(decimal.Big).SetString(string(value))
				if !ok {
					return fmt.Errorf("failed to parse number as decimal.Big")
				}
			} else {
				if err := json.Unmarshal(value, &d); err != nil {
					return err
				}
			}

			if v.Kind() == reflect.Ptr && v.Elem().Kind() == reflect.Ptr {
				v = v.Elem()
			}

			v.Set(reflect.ValueOf(d))
			return nil
		case reflect.TypeOf(types.Date{}):
			var s string

			if err := json.Unmarshal(value, &s); err != nil {
				return err
			}

			d, err := types.DateFromString(s)
			if err != nil {
				return fmt.Errorf("failed to parse string as types.Date: %w", err)
			}

			if v.Kind() == reflect.Ptr {
				if v.IsNil() {
					v.Set(reflect.New(typ))
				}
				v = v.Elem()
			}

			v.Set(reflect.ValueOf(d))
			return nil
		}
	}

	var val interface{}

	if v.CanAddr() {
		val = v.Addr().Interface()
	} else {
		val = v.Interface()
	}

	d := json.NewDecoder(bytes.NewReader(value))
	if disallowUnknownFields {
		d.DisallowUnknownFields()
	}
	return d.Decode(val)
}

func dereferencePointers(typ reflect.Type, val reflect.Value) (reflect.Type, reflect.Value) {
	if typ.Kind() == reflect.Ptr {
		typ = typ.Elem()
		val = val.Elem()
	} else {
		return typ, val
	}

	return dereferencePointers(typ, val)
}

func dereferenceTypePointer(typ reflect.Type) reflect.Type {
	if typ.Kind() == reflect.Ptr {
		typ = typ.Elem()
	} else {
		return typ
	}

	return dereferenceTypePointer(typ)
}

func isComplexValueType(typ reflect.Type) bool {
	switch typ.Kind() {
	case reflect.Struct:
		switch typ {
		case reflect.TypeOf(time.Time{}):
			fallthrough
		case reflect.TypeOf(big.Int{}):
			fallthrough
		case reflect.TypeOf(decimal.Big{}):
			fallthrough
		case reflect.TypeOf(types.Date{}):
			return true
		}
	}

	return false
}

func isModelType(typ reflect.Type) bool {
	if isComplexValueType(typ) {
		return false
	}

	if typ.Kind() == reflect.Struct {
		return true
	}

	return false
}
