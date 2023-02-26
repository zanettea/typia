import typia from "../../../../src";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ArrayMatrix = _test_clone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input: ArrayMatrix): typia.Primitive<ArrayMatrix> => {
        return Array.isArray(input)
            ? input.map((elem: any) =>
                  Array.isArray(elem)
                      ? elem.map((elem: any) =>
                            Array.isArray(elem)
                                ? elem.map((elem: any) => elem as any)
                                : (elem as any),
                        )
                      : (elem as any),
              )
            : (input as any);
    },
);