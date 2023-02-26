import typia from "../../../../src";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ObjectRecursive = _test_equals(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (
        input: any,
        _exceptionable: boolean = true,
    ): input is ObjectRecursive.IDepartment => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            (null === input.parent ||
                ("object" === typeof input.parent &&
                    null !== input.parent &&
                    $io0(input.parent, true && _exceptionable))) &&
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.code &&
            "string" === typeof input.name &&
            "number" === typeof input.sequence &&
            Number.isFinite(input.sequence) &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            $io1(input.created_at, true && _exceptionable) &&
            (6 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (
                        [
                            "parent",
                            "id",
                            "code",
                            "name",
                            "sequence",
                            "created_at",
                        ].some((prop) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.time &&
            Number.isFinite(input.time) &&
            "number" === typeof input.zone &&
            Number.isFinite(input.zone) &&
            (2 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (["time", "zone"].some((prop) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    },
);