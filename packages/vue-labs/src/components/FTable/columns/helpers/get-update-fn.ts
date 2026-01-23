/**
 * @internal
 */
/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- technical debt */
export function getUpdateFn<TRow, TValue, K extends keyof TRow>(
    fn:
        | ((this: void, row: TRow, newValue: TValue, oldValue: TValue) => void)
        | undefined,
    key: K | undefined,
): (this: void, row: TRow, newValue: TValue, oldValue: TValue) => void {
    if (fn) {
        return fn;
    }
    if (key) {
        return (row: TRow, value: TValue): void => {
            row[key] = value as TRow[K]; // @todo This is not safe :/
        };
    }
    return () => undefined;
}
