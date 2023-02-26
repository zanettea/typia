import typia from "../../../../src";
import { ObjectNullable } from "../../../structures/ObjectNullable";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectNullable = _test_validateClone(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) =>
        ((input: any): typia.IValidation<typia.Primitive<ObjectNullable>> => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectNullable> => {
                const errors = [] as any[];
                const $report = (typia.validateClone as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectNullable => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }),
                            ((("object" === typeof input.manufacturer &&
                                null !== input.manufacturer) ||
                                $report(_exceptionable, {
                                    path: _path + ".manufacturer",
                                    expected:
                                        "Resolve<ObjectNullable.IManufacturer>",
                                    value: input.manufacturer,
                                })) &&
                                $vo1(
                                    input.manufacturer,
                                    _path + ".manufacturer",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".manufacturer",
                                    expected:
                                        "Resolve<ObjectNullable.IManufacturer>",
                                    value: input.manufacturer,
                                }),
                            null === input.brand ||
                                ((("object" === typeof input.brand &&
                                    null !== input.brand) ||
                                    $report(_exceptionable, {
                                        path: _path + ".brand",
                                        expected:
                                            "(Resolve<ObjectNullable.IBrand> | null)",
                                        value: input.brand,
                                    })) &&
                                    $vo2(
                                        input.brand,
                                        _path + ".brand",
                                        true && _exceptionable,
                                    )) ||
                                $report(_exceptionable, {
                                    path: _path + ".brand",
                                    expected:
                                        "(Resolve<ObjectNullable.IBrand> | null)",
                                    value: input.brand,
                                }),
                            null === input.similar ||
                                ((("object" === typeof input.similar &&
                                    null !== input.similar) ||
                                    $report(_exceptionable, {
                                        path: _path + ".similar",
                                        expected:
                                            "(Resolve<ObjectNullable.IBrand> | Resolve<ObjectNullable.IManufacturer> | null)",
                                        value: input.similar,
                                    })) &&
                                    $vu0(
                                        input.similar,
                                        _path + ".similar",
                                        true && _exceptionable,
                                    )) ||
                                $report(_exceptionable, {
                                    path: _path + ".similar",
                                    expected:
                                        "(Resolve<ObjectNullable.IBrand> | Resolve<ObjectNullable.IManufacturer> | null)",
                                    value: input.similar,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "manufacturer" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"manufacturer"',
                                    value: input.type,
                                }),
                            "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "brand" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"brand"',
                                    value: input.type,
                                }),
                            "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vu0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ("manufacturer" === input.type)
                                return $vo1(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("brand" === input.type)
                                return $vo2(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return $report(_exceptionable, {
                                path: _path,
                                expected:
                                    "(ObjectNullable.IManufacturer | ObjectNullable.IBrand)",
                                value: input,
                            });
                        })();
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "[Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>]",
                                value: input,
                            })) &&
                            (input.length === 3 ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "[Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>]",
                                    value: input,
                                })) &&
                            [
                                ((("object" === typeof input[0] &&
                                    null !== input[0]) ||
                                    $report(true, {
                                        path: _path + "[0]",
                                        expected:
                                            "Resolve<ObjectNullable.IProduct>",
                                        value: input[0],
                                    })) &&
                                    $vo0(input[0], _path + "[0]", true)) ||
                                    $report(true, {
                                        path: _path + "[0]",
                                        expected:
                                            "Resolve<ObjectNullable.IProduct>",
                                        value: input[0],
                                    }),
                                ((("object" === typeof input[1] &&
                                    null !== input[1]) ||
                                    $report(true, {
                                        path: _path + "[1]",
                                        expected:
                                            "Resolve<ObjectNullable.IProduct>",
                                        value: input[1],
                                    })) &&
                                    $vo0(input[1], _path + "[1]", true)) ||
                                    $report(true, {
                                        path: _path + "[1]",
                                        expected:
                                            "Resolve<ObjectNullable.IProduct>",
                                        value: input[1],
                                    }),
                                ((("object" === typeof input[2] &&
                                    null !== input[2]) ||
                                    $report(true, {
                                        path: _path + "[2]",
                                        expected:
                                            "Resolve<ObjectNullable.IProduct>",
                                        value: input[2],
                                    })) &&
                                    $vo0(input[2], _path + "[2]", true)) ||
                                    $report(true, {
                                        path: _path + "[2]",
                                        expected:
                                            "Resolve<ObjectNullable.IProduct>",
                                        value: input[2],
                                    }),
                            ].every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "[Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>]",
                            value: input,
                        })
                    );
                })(input, "$input", true);
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const clone = (
                input: ObjectNullable,
            ): typia.Primitive<ObjectNullable> => {
                const $throws = (typia.validateClone as any).throws;
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "object" === typeof input.manufacturer &&
                    null !== input.manufacturer &&
                    $io1(input.manufacturer) &&
                    (null === input.brand ||
                        ("object" === typeof input.brand &&
                            null !== input.brand &&
                            $io2(input.brand))) &&
                    (null === input.similar ||
                        ("object" === typeof input.similar &&
                            null !== input.similar &&
                            $iu0(input.similar)));
                const $io1 = (input: any): boolean =>
                    "manufacturer" === input.type &&
                    "string" === typeof input.name;
                const $io2 = (input: any): boolean =>
                    "brand" === input.type && "string" === typeof input.name;
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("manufacturer" === input.type) return $io1(input);
                        if ("brand" === input.type) return $io2(input);
                        return false;
                    })();
                const $co0 = (input: any): any => ({
                    name: input.name as any,
                    manufacturer:
                        "object" === typeof input.manufacturer &&
                        null !== input.manufacturer
                            ? $co1(input.manufacturer)
                            : (input.manufacturer as any),
                    brand:
                        "object" === typeof input.brand && null !== input.brand
                            ? $co2(input.brand)
                            : (input.brand as any),
                    similar:
                        "object" === typeof input.similar &&
                        null !== input.similar
                            ? $cu0(input.similar)
                            : (input.similar as any),
                });
                const $co1 = (input: any): any => ({
                    type: input.type as any,
                    name: input.name as any,
                });
                const $co2 = (input: any): any => ({
                    type: input.type as any,
                    name: input.name as any,
                });
                const $cu0 = (input: any): any =>
                    (() => {
                        if ("manufacturer" === input.type) return $co1(input);
                        if ("brand" === input.type) return $co2(input);
                        $throws({
                            expected:
                                "(ObjectNullable.IManufacturer | ObjectNullable.IBrand)",
                            value: input,
                        });
                    })();
                return Array.isArray(input) &&
                    input.length === 3 &&
                    "object" === typeof input[0] &&
                    null !== input[0] &&
                    $io0(input[0]) &&
                    "object" === typeof input[1] &&
                    null !== input[1] &&
                    $io0(input[1]) &&
                    "object" === typeof input[2] &&
                    null !== input[2] &&
                    $io0(input[2])
                    ? ([
                          "object" === typeof input[0] && null !== input[0]
                              ? $co0(input[0])
                              : (input[0] as any),
                          "object" === typeof input[1] && null !== input[1]
                              ? $co0(input[1])
                              : (input[1] as any),
                          "object" === typeof input[2] && null !== input[2]
                              ? $co0(input[2])
                              : (input[2] as any),
                      ] as any)
                    : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    ObjectNullable.SPOILERS,
);