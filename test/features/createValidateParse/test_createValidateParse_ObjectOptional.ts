import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectOptional = _test_validateParse(
    "ObjectOptional",
    ObjectOptional.generate,
    TSON.createValidateParse<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);