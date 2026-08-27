/**
 * @internal
 */
export function isVisible<T>(
    visible: boolean | ((this: void, row: T) => boolean) | undefined,
    row: T,
): boolean {
    if (visible === undefined) {
        return true;
    }
    if (typeof visible === "boolean") {
        return visible;
    }
    return visible(row);
}
