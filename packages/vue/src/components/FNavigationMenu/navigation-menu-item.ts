/**
 * @public
 */
export interface NavigationMenuItem {
    /**
     * Text to display for the menu item.
     */
    label: string;
    /**
     * Unique route/path for the menu item. Used for item selection and reference.
     */
    route: string;
    /**
     * Optional href attribute to use on menu item link.
     */
    href?: string;
    /**
     * Optional target attribute on menu item link.
     */
    target?: string;
}
