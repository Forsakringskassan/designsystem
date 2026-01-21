/**
 *  @internal
 */
export function getValueFn<TRow, TValue>(
    fn: ((this: void, row: TRow) => TValue) | undefined,
    key: keyof TRow | undefined,
    coerce: (value: unknown) => TValue,
    defaultValue: TValue,
): (this: void, row: TRow) => TValue {
    if (fn) {
        return fn;
    }
    if (key) {
        return (row: TRow): TValue => {
            return coerce(row[key]);
        };
    }
    return () => defaultValue;
}
