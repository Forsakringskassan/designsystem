/**
 * @public
 */
export interface IMenuItem {
    /**
     * Menu item label text
     */
    label: string;
    /**
     * Menu item key for referencing upon for example item selection
     */
    key: string;
    /**
     * Optional href attribute to use on menu item link
     */
    href?: string;
    /**
     * Optional target attribute on menu item link
     */
    target?: string;
    /**
     * Optional name of an icon to show on the right side of the label
     */
    iconRight?: string;
    /**
     * Optional aria-haspopup attribute
     */
    ariaHasPopup?: boolean;
    /**
     * Optional screen reader text for the item menu "mer/more"
     */
    srMenuMoreTextContents?: string;
    srMenuMoreTextSelectedContents?: string;
}

/**
 * Minimum menu item index that allows overflow.
 *
 * @internal
 */
export const MIN_OVERFLOW_INDEX = 1;

/**
 * Find the first element to overflow excluding the
 * item that will overlap the overflow menu item if overflow is enabled.
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

    if (index > -1) {
        if (index - 1 < MIN_OVERFLOW_INDEX) {
            return MIN_OVERFLOW_INDEX;
        }

        return index;
    }

    return index;
}
