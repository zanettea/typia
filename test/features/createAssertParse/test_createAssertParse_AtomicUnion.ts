import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_AtomicUnion = _test_assertParse(
    "AtomicUnion",
    AtomicUnion.generate,
    TSON.createAssertParse<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);