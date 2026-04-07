import { FListSelectors } from "../selectors";
import { FListItemPageObject } from "./FListItem.pageobject";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FListPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FListSelectors>;

    /**
     * @param selector - the root of the list, usually `<ul class="list">...</ul>`.
     */
    public constructor(selector: string = ".list") {
        this._selectors = FListSelectors(selector);
    }

    public get selector(): string {
        return this._selectors.selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this._selectors.selector);
    }

    /**
     * Hämta page object för specifikt list item.
     */
    public listItem(index: number): FListItemPageObject {
        return new FListItemPageObject(`${this.selector} > .list__item`, index);
    }

    /**
     * Hämta alla list items.
     */
    public listItems(): DefaultCypressChainable {
        return cy.get(this._selectors.listItems());
    }

    /**
     * Felmeddelande
     */
    public emptyMessage(): DefaultCypressChainable {
        return cy.get(this._selectors.emptyMessage());
    }
}
