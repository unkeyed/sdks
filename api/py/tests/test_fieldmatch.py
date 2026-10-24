import json
import unittest

from unkey.py.models.fieldmatch import FieldMatch
from unkey.py.models.matchexpr import MatchExpr
from unkey.py.models.stringmatch import StringMatch
from unkey.py.utils.serializers import marshal_json


class FieldMatchTest(unittest.TestCase):
    def test_name_only_defaults_to_present(self):
        match = FieldMatch(name="x-required")

        self.assertIs(match.present, True)
        self.assertIs(match.PRESENT, True)
        self.assertEqual(
            json.loads(marshal_json(match, FieldMatch)),
            {"name": "x-required", "present": True},
        )

    def test_presence_constructor_aliases(self):
        for present in (True, False, None):
            for match in (
                FieldMatch(name="x-required", present=present),
                FieldMatch(name="x-required", PRESENT=present),
            ):
                with self.subTest(present=present, match=match):
                    self.assertIs(match.present, present)
                    self.assertIs(match.PRESENT, present)
                    expected = {"name": "x-required"}
                    if present is not None:
                        expected["present"] = present
                    for by_alias in (True, False):
                        self.assertEqual(
                            json.loads(match.model_dump_json(by_alias=by_alias)),
                            expected,
                        )

    def test_presence_assignment_aliases(self):
        match = FieldMatch(name="x-required")

        for present in (False, None, True):
            with self.subTest(present=present):
                match.PRESENT = present
                self.assertIs(match.present, present)
                expected = {"name": "x-required"}
                if present is not None:
                    expected["present"] = present
                self.assertEqual(json.loads(marshal_json(match, FieldMatch)), expected)

        match.present = False
        self.assertIs(match.PRESENT, False)

    def test_value_only_omits_presence(self):
        for value in (
            StringMatch(exact=""),
            StringMatch(prefix="Bearer "),
            StringMatch(regex="^token$"),
        ):
            with self.subTest(value=value):
                match = FieldMatch(name="authorization", value=value)
                self.assertIsNone(match.present)
                self.assertIsNone(match.PRESENT)
                self.assertEqual(
                    json.loads(marshal_json(match, FieldMatch)),
                    {"name": "authorization", "value": value.model_dump()},
                )

    def test_explicit_presence_is_not_overwritten_with_value(self):
        for alias in ("present", "PRESENT"):
            with self.subTest(alias=alias):
                match = FieldMatch.model_validate(
                    {"name": "x-required", alias: False, "value": {"exact": "token"}}
                )
                self.assertIs(match.present, False)

    def test_lowercase_presence_takes_precedence(self):
        match = FieldMatch(name="x-required", present=False, PRESENT=True)

        self.assertIs(match.present, False)
        self.assertIs(match.PRESENT, False)

    def test_nested_header_and_query_wire_serialization(self):
        for field in ("header", "queryParam"):
            for options, expected in (
                ({}, {"present": True}),
                ({"present": False}, {"present": False}),
                ({"PRESENT": True}, {"present": True}),
                ({"PRESENT": False}, {"present": False}),
                ({"present": None}, {}),
                ({"value": {"exact": "token"}}, {"value": {"exact": "token"}}),
            ):
                payload = {"name": "x-required", **options}
                for nested in (payload, FieldMatch.model_validate(payload)):
                    with self.subTest(field=field, options=options, nested=nested):
                        match = MatchExpr.model_validate({field: nested})
                        self.assertEqual(
                            json.loads(marshal_json(match, MatchExpr)),
                            {field: {"name": "x-required", **expected}},
                        )


if __name__ == "__main__":
    unittest.main()
