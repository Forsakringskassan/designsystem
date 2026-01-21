/**
 * @internal
 */
export function getLabelFn<TRow>(
    fn: ((this: void, row: TRow) => string) | undefined,
): (this: void, row: TRow) => string {
    if (fn) {
        return fn;
    }
    return () => "";
}
