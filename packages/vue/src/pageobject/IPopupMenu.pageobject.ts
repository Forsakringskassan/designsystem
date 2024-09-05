import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * pageobject for the IPopupMenu component
 *
 * @public
 */
export class IPopupMenuPageObject implements BasePageObject {
    public selector: string;
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * @param selector - the root of the IPopupMenu, usually `<nav class="IPopupMenu">...</nav>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
    }

    /**
     * Get all items in the IPopupMenu
     * @returns all items
     */
    public items(): DefaultCypressChainable {
        return cy.get(`${this.selector} .ipopupmenu__list__item`);
    }

    /**
     * Get the item at position index in the IPopupMenu
     *
     * @param index - the position index in the item array
     * @returns Menu item with given index
     */
    public item(index: number): DefaultCypressChainable {
        return this.items().eq(index);
    }

    /**
     * Get link for item at index
     *
     * @param index - the position index in the item array
     * @returns link with given index
     */
    public getItemLink(index: number): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .ipopupmenu__list__item a:nth(${index})`,
        );
    }

    /**
     * Get currently selected menu item
     *
     * @returns Currently selected item
     */
    public getSelectedItem(): DefaultCypressChainable {
        return this.items().get(
            `${this.selector} .ipopupmenu__list__item--highlight`,
        );
    }
}
