import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TagObjectUnion = _test_validateParse(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => TSON.validateParse<TagObjectUnion>(input),
    TagObjectUnion.SPOILERS,
);