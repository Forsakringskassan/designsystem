import { FCheckboxFieldSelectors } from "../selectors";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FCheckboxFieldPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FCheckboxFieldSelectors>;

    /**
     * @param selector - the root of the checkbox, usually `<div class="checkbox">...</div>`.
     * @param index -  the index of matched radiobuttons
     */
    public constructor(selector: string, index?: number) {
        if (index) {
            this._selectors = FCheckboxFieldSelectors(
                `${selector}:nth(${String(index)})`,
            );
        } else {
            this._selectors = FCheckboxFieldSelectors(selector);
        }
    }

    public get selector(): string {
        return this._selectors.selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this._selectors.selector);
    }

    public checkbox(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this._selectors.checkbox());
    }

    public label(): DefaultCypressChainable {
        return cy.get(this._selectors.label());
    }

    public select(): DefaultCypressChainable {
        return this.label().click();
    }

    public isSelected(): Cypress.Chainable<boolean> {
        return this.checkbox().then((el) => {
            return el.get(0).checked;
        });
    }

    public value(): Cypress.Chainable<string> {
        return this.checkbox().then((el) => {
            return el.get(0).value;
        });
    }

    public details(): DefaultCypressChainable {
        return cy.get(this._selectors.details());
    }
}
