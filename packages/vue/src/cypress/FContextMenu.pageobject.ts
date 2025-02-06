import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * @public
 */
export class FContextMenuPageObject implements BasePageObject {
    public selector: string;
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * @param selector - the root of the page header, usually `<nav class="contextmenu">...</nav>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
    }

    /**
     * Get all items in the FContextMenu
     * @returns all items
     */
    public items(): DefaultCypressChainable {
        return cy.get(`${this.selector} .contextmenu__list__item`);
    }

    /**
     * Get the item at position index in the FContextMenu
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
            `${this.selector} .contextmenu__list__item a:nth(${index})`,
        );
    }
}
