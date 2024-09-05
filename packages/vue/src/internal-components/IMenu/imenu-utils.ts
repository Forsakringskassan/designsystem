export const menuMoreKey = "MENU_MORE";

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
 * Find the first element to overflow.
 *
 * @internal
 * @returns Element index or -1 if no element overflows.
 */
export function findOverflowIndex(
    totalWidth: number,
    elements: Array<{ offsetWidth: number }>,
): number {
    let sum = 0;
    return elements.findIndex((element) => {
        sum += element.offsetWidth;
        return sum > totalWidth;
    });
}
