/**
 * Find the first element to overflow including the element
 * that will overlap the item that opens the popup menu.
 *
 * @internal
 * @returns Element index or -1 if no element overflows.
 */
export function findOverflowIndex(
    totalWidth: number,
    elements: Array<{ offsetWidth: number }>,
): number {
    let sum = 0;
    const index = elements.findIndex((element) => {
        sum += element.offsetWidth;
        return sum > totalWidth;
    });

    return index < 1 ? index : index - 1;
}
