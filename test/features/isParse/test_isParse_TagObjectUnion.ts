import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_TagObjectUnion = _test_isParse(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => TSON.isParse<TagObjectUnion>(input),
    TagObjectUnion.SPOILERS,
);