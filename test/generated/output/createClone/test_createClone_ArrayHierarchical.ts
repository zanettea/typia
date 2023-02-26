import typia from "../../../../src";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ArrayHierarchical = _test_clone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input: ArrayHierarchical): typia.Primitive<ArrayHierarchical> => {
        const $io1 = (input: any): boolean =>
            "number" === typeof input.time && "number" === typeof input.zone;
        const $io2 = (input: any): boolean =>
            "number" === typeof input.id &&
            "string" === typeof input.code &&
            "number" === typeof input.sales &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            $io1(input.created_at) &&
            Array.isArray(input.employees) &&
            input.employees.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io3(elem),
            );
        const $io3 = (input: any): boolean =>
            "number" === typeof input.id &&
            "string" === typeof input.name &&
            "number" === typeof input.age &&
            "number" === typeof input.grade &&
            "object" === typeof input.employeed_at &&
            null !== input.employeed_at &&
            $io1(input.employeed_at);
        const $co0 = (input: any): any => ({
            id: input.id as any,
            serial: input.serial as any,
            name: input.name as any,
            established_at:
                "object" === typeof input.established_at &&
                null !== input.established_at
                    ? $co1(input.established_at)
                    : (input.established_at as any),
            departments: Array.isArray(input.departments)
                ? input.departments.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co2(elem)
                          : (elem as any),
                  )
                : (input.departments as any),
        });
        const $co1 = (input: any): any => ({
            time: input.time as any,
            zone: input.zone as any,
        });
        const $co2 = (input: any): any => ({
            id: input.id as any,
            code: input.code as any,
            sales: input.sales as any,
            created_at:
                "object" === typeof input.created_at &&
                null !== input.created_at
                    ? $co1(input.created_at)
                    : (input.created_at as any),
            employees: Array.isArray(input.employees)
                ? input.employees.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co3(elem)
                          : (elem as any),
                  )
                : (input.employees as any),
        });
        const $co3 = (input: any): any => ({
            id: input.id as any,
            name: input.name as any,
            age: input.age as any,
            grade: input.grade as any,
            employeed_at:
                "object" === typeof input.employeed_at &&
                null !== input.employeed_at
                    ? $co1(input.employeed_at)
                    : (input.employeed_at as any),
        });
        return Array.isArray(input)
            ? input.map((elem: any) =>
                  "object" === typeof elem && null !== elem
                      ? $co0(elem)
                      : (elem as any),
              )
            : (input as any);
    },
);