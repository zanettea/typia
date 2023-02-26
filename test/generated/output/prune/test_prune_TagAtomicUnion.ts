import typia from "../../../../src";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_TagAtomicUnion = _test_prune(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) =>
        ((input: TagAtomicUnion): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input))
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
        })(input),
);