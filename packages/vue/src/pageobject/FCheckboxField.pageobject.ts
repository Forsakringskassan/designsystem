import { type DefaultCypressChainable, type BasePageObject } from "./common";
import "./trimmed-text";

/**
 * @public
 */
export class FCheckboxFieldPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;

    /**
     * @param selector - the root of the checkbox, usually `<div class="checkbox">...</div>`.
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

    public checkbox(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(`${this.selector} input`);
    }

    public label(): DefaultCypressChainable {
        return cy.get(`${this.selector} .checkbox__label`);
    }

    /**
     * @deprecated Use assertion `label().should('trimmedText', '...')` instead.
     */
    public trimmedText(): Cypress.Chainable<string> {
        return cy.get(`${this.selector} label`).__fkui_internal_trimmedText();
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
        return cy.get(`${this.selector} .checkbox__details`);
    }
}
