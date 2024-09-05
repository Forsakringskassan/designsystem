import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * pageobject for the IMenu component
 *
 * @public
 */
export class IMenuPageObject implements BasePageObject {
    public selector: string;
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * @param selector - the root of the IMenu, usually `<nav class="imenu">...</nav>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
    }

    /**
     * Get all items in the IMenu
     *
     * @returns all items
     */
    public items(): DefaultCypressChainable {
        return cy.get(`${this.selector} .imenu__list__item`);
    }

    /**
     * Get the item at position index in the IMenu
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
        return cy.get(`${this.selector} .imenu__list__item a:nth(${index})`);
    }

    /**
     * Get currently selected menu item
     *
     * @returns Currently selected item
     */
    public getSelectedItem(): DefaultCypressChainable {
        return this.items().get(
            `${this.selector} .imenu__list__item--highlight`,
        );
    }
}
