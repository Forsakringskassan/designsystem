/**
 * @internal
 */
export function isVisible<T>(
    visible: (this: void, row: T) => boolean,
    row: T,
): boolean {
    return visible(row);
}
