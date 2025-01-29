import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * @public
 */
export class FRadioFieldPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;

    /**
     * @param selector - the root of the radio button, usually `<div class="radio-button">...</div>`.
     * @param index -  the index of matched radiobuttons
     */
    public constructor(selector: string, index?: number) {
        if (index) {
            this.selector = `${selector}:nth(${index})`;
        } else {
            this.selector = selector;
        }

        this.el = () => cy.get(this.selector);
    }

    public radioButton(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(`${this.selector} input`);
    }

    public label(): DefaultCypressChainable {
        return cy.get(`${this.selector} .radio-button__label`);
    }

    public select(): DefaultCypressChainable {
        return cy.get(`${this.selector} label`).click();
    }

    public details(): DefaultCypressChainable {
        return cy.get(`${this.selector} .radio-button__details`);
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
