/**
 * Used to define items by `FNavigationMenu`
 * internal logic and `IPopupMenu` public API.
 *
 * @public
 */
export interface MenuItem {
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
}
