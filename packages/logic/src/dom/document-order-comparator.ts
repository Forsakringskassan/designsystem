/**
 * Compares the position of the given node against another node in any document.
 *
 * Unset elements (e.g. `null`) are undefined behaviour but the current
 * non-contractural behaviour is to put them at the end of the sorted
 * array. The caller should ensure those elements are removed before sorting.
 *
 * @example
 * ```ts
 * const sorted = listOfElements.sort(documentOrderComparator);
 * ```
 *
 * @public
 */
export function documentOrderComparator<T extends Node>(
    a?: T | null,
    b?: T | null,
): number {
    if (!a) {
        return 1;
    }

    if (!b) {
        return -1;
    }

    const BITMASK =
        Node.DOCUMENT_POSITION_DISCONNECTED | Node.DOCUMENT_POSITION_PRECEDING;
    const result = a.compareDocumentPosition(b) & BITMASK;

    /* After the bitmask result can only have three distinct values:
     *
     * Result   Comparator   Description
     * ------   ----------   -----------
     *      0           -1   A follow B
     *      1            0   Disconnected
     *      2            1   A preceed B
     *
     * Given above table we can compute final comparator value by subtracting 1.
     */
    return result - 1;
}
