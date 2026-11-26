/**
 * @public
 */
export interface NavigationMenuItem {
    /**
     * Text to display for the menu item.
     */
    label: string;
    /**
     * Unique identifier for the menu item.
     */
    route: string;
    /**
     * `href` attribute to add to menu item anchor element
     */
    href?: string;
    /**
     * `target` attribute to add to menu item anchor element.
     */
    target?: string;
}
