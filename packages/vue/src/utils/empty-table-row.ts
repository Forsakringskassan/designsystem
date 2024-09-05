/**
 * @internal
 */
export interface EmptyTableRow {
    (): string;
    [Symbol.toPrimitive](hint: string): unknown;
    [key: string]: EmptyTableRow;
}

/**
 * Creates an empty item for the table components which allows to recursively
 * lookup any property even deeply nested.
 *
 * E.g. both `row.foo` and `row.foo.bar.baz` will be resolvable and not throw
 * any errors about missing properties.
 *
 * @internal
 */
export function emptyTableRow(textContent = ""): EmptyTableRow {
    function toPrimitive(hint: string): string | null {
        if (hint === "string") {
            return textContent;
        } else {
            return null;
        }
    }
    function toString(): string {
        return textContent;
    }
    const proxy = new Proxy(() => textContent, {
        apply() {
            return textContent;
        },
        get(_target, prop) {
            switch (prop) {
                case Symbol.toPrimitive:
                    return toPrimitive;
                case "toString":
                    return toString;
                case "__v_isRef":
                    return false;
                default:
                    return proxy;
            }
        },
    }) as EmptyTableRow;
    return proxy;
}
