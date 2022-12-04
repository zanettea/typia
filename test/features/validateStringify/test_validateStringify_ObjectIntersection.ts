import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectIntersection =
    _test_validateStringify(
        "ObjectIntersection",
        ObjectIntersection.generate,
        (input) => TSON.validateStringify(input),
        ObjectIntersection.SPOILERS,
    );