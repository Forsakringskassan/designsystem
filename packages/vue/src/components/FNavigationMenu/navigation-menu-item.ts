/**
 * @public
 */
export interface NavigationMenuItem {
    /**
     * Menu item label text
     */
    label: string;
    /**
     * Menu item route used upon for example item selection
     */
    route: string;
    /**
     * Optional href attribute to use on menu item link
     */
    href?: string;
    /**
     * Optional target attribute on menu item link
     */
    target?: string;
}
