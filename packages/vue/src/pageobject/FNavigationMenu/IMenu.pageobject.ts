import { type BasePageObject, type DefaultCypressChainable } from "../common";

/**
 * pageobject for the removed IMenu component.
 *
 * @deprecated `IMenuPageObject` is deprecated and equivalent methods are available for `FNavigationMenuPageobject`.
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
     * Get all visible items in the IMenu, including popup item.
     *
     * @deprecated Use `FNavigationMenuPageobject.items()` instead.
     * @returns All visible items.
     */
    public items(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .imenu__list__item:not(.imenu__list__item--hidden)`,
        );
    }

    /**
     * Get the visible item at position index in the IMenu, including popup item.
     *
     * @deprecated Use `FNavigationMenuPageobject.item()` instead.
     * @param index - the position index in the item array.
     * @returns Menu item with given index.
     */
    public item(index: number): DefaultCypressChainable {
        return this.items().eq(index);
    }

    /**
     * Get link for visible item at index, including popup item.
     *
     * @deprecated Use `FNavigationMenuPageobject.itemLink()` instead.
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
     * @deprecated Use `FNavigationMenuPageobject.selectedItem()` instead.
     * @returns Currently selected item.
     */
    public getSelectedItem(): DefaultCypressChainable {
        return this.items().get(
            `${this.selector} .imenu__list__item--highlight`,
        );
    }
}
