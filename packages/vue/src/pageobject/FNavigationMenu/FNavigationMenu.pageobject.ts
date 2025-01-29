import { type BasePageObject, type DefaultCypressChainable } from "../common";
import { IPopupMenuPageObject } from "../IPopupMenu.pageobject";

/**
 * Represents `f-navigation-menu` with access to its elements
 * and `i-popup-menu` page object.
 *
 * @public
 */
export class FNavigationMenuPageobject implements BasePageObject {
    public selector: string;

    /**
     * @param selector - the root of the navigation menu, usually `.imenu`.
     */
    public constructor(selector: string = ".imenu") {
        this.selector = selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * Get all visible items in the menu, including the popup menu item.
     *
     * @returns All visible menu items.
     */
    public items(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .imenu__list__item:not(.imenu__list__item--hidden)`,
        );
    }

    /**
     * Get all overflowed (hidden) items in the menu.
     *
     * @returns All overflowed menu items.
     */
    public overflowItems(): DefaultCypressChainable {
        return cy.get(`${this.selector} .imenu__list__item--hidden`);
    }

    /**
     * Get the visible item at position index in the menu, including popup item.
     *
     * @param index - the position index in the item array.
     * @returns Menu item with given index.
     */
    public item(index: number): DefaultCypressChainable {
        return this.items().eq(index);
    }

    /**
     * Get link for visible item at given index, including popup item.
     *
     * @param index - the position index in the item array.
     * @returns link with given index.
     */
    public itemLink(index: number): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .imenu__list__item:not(.imenu__list__item--hidden) a:nth(${index})`,
        );
    }

    /**
     * Get currently selected menu item.
     *
     * @returns Currently selected item.
     */
    public selectedItem(): DefaultCypressChainable {
        return this.items().get(
            `${this.selector} .imenu__list__item--highlight`,
        );
    }

    /**
     * Get the menu item that open the popup menu.
     *
     * @returns The popup menu item.
     */
    public popupItem(): DefaultCypressChainable {
        return this.items().get(`${this.selector} .imenu__popup-item__wrapper`);
    }

    /**
     * Returns `IPopupMenu` page object.
     */
    public popupMenu(): IPopupMenuPageObject {
        // Popup menu may have teleported outside of current selector, so it can't be used.
        return new IPopupMenuPageObject(`.ipopupmenu > ul.ipopupmenu__list`);
    }
}
