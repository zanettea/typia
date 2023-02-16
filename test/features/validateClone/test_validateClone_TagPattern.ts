import typia from "typia";

import { TagPattern } from "../../structures/TagPattern";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_TagPattern = _test_validateClone(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.validateClone(input),
    TagPattern.SPOILERS,
);