/**
 *  @internal
 */
export function getFormattedValueFn<TRow>(
    fn: ((this: void, row: TRow) => string) | undefined,
    key: keyof TRow | undefined,
    formatter: (value: string) => string | undefined,
    defaultValue: string,
): (this: void, row: TRow) => string {
    if (fn) {
        return (row: TRow): string => {
            const value = fn(row);
            const result = formatter(value);
            return result ?? value;
        };
    }
    if (key) {
        return (row: TRow): string => {
            const value = row[key] as string;
            const result = formatter(value);

            return result ?? value;
        };
    }
    return () => defaultValue;
}
