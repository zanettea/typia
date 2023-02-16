import typia from "typia";

import { TagStep } from "../../structures/TagStep";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_TagStep = _test_clone(
    "TagStep",
    TagStep.generate,
    typia.createClone<TagStep>(),
);