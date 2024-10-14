import { isSet } from "@fkui/logic";

export function sort<T>(
    list: T[],
    sortAttribute: string,
    ascending: boolean,
): T[] {
    return list.sort((item1, item2) =>
        compare(item1, item2, sortAttribute as keyof T, ascending),
    );
}

function compare<T>(
    item1: T,
    item2: T,
    attribute: keyof T,
    ascending: boolean,
): number {
    const value1 = item1[attribute];
    const value2 = item2[attribute];

    if (!isSet(value1) || !isSet(value2)) {
        // Null values are always unsorted at the end of the list
        return nullCompare(value1, value2);
    }
    if (!isSupportedType(value1) || !isSupportedType(value2)) {
        throw Error(
            `Sorting is only supported for types number, string and boolean.
            Attribute '${attribute.toString()}' comparsion of types '${typeof value1}' and '${typeof value2}' is not supported.`,
        );
    }
    if (typeof value1 === "string" && typeof value2 === "string") {
        return fixOrder(value1.localeCompare(value2), ascending);
    }
    if (typeof value1 === "number" && typeof value2 === "number") {
        return fixOrder(numberCompare(value1, value2), ascending);
    }
    if (typeof value1 === "boolean" && typeof value2 === "boolean") {
        return fixOrder(booleanCompare(value1, value2), ascending);
    }

    // We have mixed types, then we assume that the value of type string is incorrect (parser has not been applied after validation error).
    // Values with error should always be sorted first.
    if (typeof value1 === "string") {
        return -1;
    } else {
        return 1;
    }
}

function isSupportedType(value: unknown): boolean {
    return ["string", "number", "boolean"].includes(typeof value);
}

// This is used instead of list.reverse to keep null values
// at the end of the list and in unsorted order
function fixOrder(order: number, ascending: boolean): number {
    return ascending ? order : order - order * 2;
}

function booleanCompare(value1: boolean, value2: boolean): number {
    if (value1 === value2) {
        return 0;
    } else if (value1 > value2) {
        return 1;
    }
    return -1;
}

function numberCompare(value1: number, value2: number): number {
    return value1 - value2;
}

function nullCompare(value1: unknown, value2: unknown): number {
    if (!isSet(value1) && !isSet(value2)) {
        return 0;
    } else if (!isSet(value1)) {
        return 1;
    }
    return -1;
}
