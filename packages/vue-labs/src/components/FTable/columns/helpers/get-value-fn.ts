/**
 *  @internal
 */
export function getValueFn<TRow, TValue>(
    fn: ((this: void, row: TRow) => TValue | string) | undefined,
    key: keyof TRow | undefined,
    coerce: (value: unknown) => TValue | string,
    defaultValue: TValue | string,
): (this: void, row: TRow) => TValue | string {
    if (fn) {
        return fn;
    }
    if (key) {
        return (row: TRow): TValue | string => {
            return coerce(row[key] ?? defaultValue);
        };
    }
    return () => defaultValue;
}
