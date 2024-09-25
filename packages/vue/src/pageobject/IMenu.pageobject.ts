import { type BasePageObject, type DefaultCypressChainable } from "./common";
import { IPopupMenuPageObject } from "./IPopupMenu.pageobject";

/**
 * pageobject for the IMenu component
 *
 * @public
 */
export class IMenuPageObject implements BasePageObject {
    public selector: string;

    /**
     * @param selector - the root of the IMenu, usually `<nav class="imenu">...</nav>`.
     */
    public constructor(selector: string = ".imenu") {
        this.selector = selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * Get all visible items in the IMenu, including the overflow menu item.
     *
     * @returns All visible items.
     */
    public items(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .imenu__list__item:not(.imenu__list__item--hidden)`,
        );
    }

    /**
     * Find all overflowed items in the IMenu.
     *
     * @returns All overflowed items.
     */
    public overflowedItems(): DefaultCypressChainable {
        return this.el().find(`.imenu__list__item--hidden`);
    }

    /**
     * Get the visible item at position index in the IMenu, including the overflow menu item..
     *
     * @param index - the position index in the item array.
     * @returns Menu item with given index.
     */
    public item(index: number): DefaultCypressChainable {
        return this.items().eq(index);
    }

    /**
     * Get link for visible item at index, including the overflow menu item.
     *
     * @param index - the position index in the item array.
     * @returns link with given index.
     */
    public getItemLink(index: number): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .imenu__list__item:not(.imenu__list__item--hidden) a:nth(${index})`,
        );
    }

    /**
     * Get currently selected menu item.
     *
     * @returns Currently selected item.
     */
    public getSelectedItem(): DefaultCypressChainable {
        return this.items().get(
            `${this.selector} .imenu__list__item--highlight`,
        );
    }

    /**
     * Get the menu item that open the overflow popup menu.
     *
     * @returns Overflow popup menu item.
     */
    public overflowItem(): DefaultCypressChainable {
        return this.items().get(`${this.selector} .imenu__popup-item__wrapper`);
    }

    /**
     * Get the popup menu page object.
     *
     * @returns Overflow popup menu item.
     */
    public popupMenu(): IPopupMenuPageObject {
        return new IPopupMenuPageObject(
            `${this.selector} .ipopupmenu > ul.ipopupmenu__list`,
        );
    }
}
