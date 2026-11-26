import { FRadioFieldSelectors } from "../selectors";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FRadioFieldPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FRadioFieldSelectors>;

    /**
     * @param selector - the root of the radio button, usually `<div class="radio-button">...</div>`.
     * @param index -  the index of matched radiobuttons
     */
    public constructor(selector: string, index?: number) {
        if (index) {
            this._selectors = FRadioFieldSelectors(
                `${selector}:nth(${String(index)})`,
            );
        } else {
            this._selectors = FRadioFieldSelectors(selector);
        }
    }

    public get selector(): string {
        return this._selectors.selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this._selectors.selector);
    }

    public radioButton(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this._selectors.input());
    }

    public label(): DefaultCypressChainable {
        return cy.get(this._selectors.label());
    }

    public select(): DefaultCypressChainable {
        return cy.get(this._selectors.label()).click();
    }

    public details(): DefaultCypressChainable {
        return cy.get(this._selectors.details());
    }

    public isSelected(): Cypress.Chainable<boolean> {
        return this.radioButton().then((el) => {
            return el.get(0).checked;
        });
    }

    public value(): Cypress.Chainable<string> {
        return this.radioButton().then((el) => {
            return el.get(0).value;
        });
    }
}
