import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { FCheckboxFieldPageObject } from "./FCheckboxField.pageobject";

/**
 * @public
 */
export class FListItemPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public index: number;

    /**
     * @param selector - the root of the li, usually `<li class="list__item">...</li>`.
     * @param index - the index of matched li:s.
     */
    public constructor(selector: string, index: number) {
        this.selector = `${selector}:nth(${index})`;
        this.index = index;
        this.el = () => cy.get(this.selector);
    }

    /**
     * Select checkbox page object
     */
    public selectCheckbox(): FCheckboxFieldPageObject {
        return new FCheckboxFieldPageObject(
            `${this.selector} .list__item__selectpane__input`,
        );
    }

    /**
     * Content / Clickable link if checkbox:false
     */
    public content(): DefaultCypressChainable {
        return cy.get(`${this.selector} .list__item__itempane`);
    }
}
