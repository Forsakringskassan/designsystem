/**
 *  @internal
 */
export function getValueFn<TRow, TValue>(
    fn: ((row: TRow) => TValue) | undefined,
    key: keyof TRow | undefined,
    coerce: (value: unknown) => TValue,
    defaultValue: TValue,
): (row: TRow) => TValue {
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

/**
 *  @internal
 */
export function getFormattedValueFn<TRow>(
    fn: ((row: TRow) => string) | undefined,
    key: keyof TRow | undefined,
    formatter: (value: string) => string | undefined,
    defaultValue: string,
): (row: TRow) => string {
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

/**
 *  @internal
 */
export function getFormattedNumberValueFn<TRow>(
    fn: ((row: TRow) => string | number) | undefined,
    key: keyof TRow | undefined,
    formatter: (value: number | string) => string | undefined,
    defaultValue: string,
): (row: TRow) => string | number {
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
