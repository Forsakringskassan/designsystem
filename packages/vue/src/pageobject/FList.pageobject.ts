import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { FListItemPageObject } from "./FListItem.pageobject";

/**
 * @public
 */
export class FListPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;

    /**
     * @param selector - the root of the label, usually `<li class="list">...</label>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
    }

    /**
     * Hämta page object för specifikt list item.
     */
    public listItem(index: number): FListItemPageObject {
        return new FListItemPageObject(`${this.selector} .list__item`, index);
    }

    /**
     * Hämta alla list items.
     */
    public listItems(): DefaultCypressChainable {
        return cy.get(`${this.selector} .list__item .list__item__itempane`);
    }

    /**
     * Felmeddelande
     */
    public emptyMessage(): DefaultCypressChainable {
        return cy.get(`${this.selector} .list__item`);
    }
}
