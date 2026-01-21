/**
 *  @internal
 */
export function getFormattedNumberValueFn<TRow>(
    fn: ((this: void, row: TRow) => string | number) | undefined,
    key: keyof TRow | undefined,
    formatter: (value: number | string) => string | undefined,
    defaultValue: string,
): (this: void, row: TRow) => string | number {
    if (fn) {
        return (row: TRow): string | number => {
            const value = fn(row);
            return formatter(value) ?? value;
        };
    }
    if (key) {
        return (row: TRow): string | number => {
            const value = row[key] as number;
            return formatter(value) ?? value;
        };
    }
    return () => defaultValue;
}
