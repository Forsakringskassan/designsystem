import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export enum dayType {
    day = "calendar-day",
    highlight = "calendar-day--highlight",
    selected = "calendar-day--selected",
    disabled = "calendar-day--disabled",
}

/**
 * @public
 */
export class FCalenderDayPageobject implements BasePageObject {
    public selector: string;

    public constructor(selector: string) {
        this.selector = selector;
    }
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    public number(): DefaultCypressChainable {
        return cy.get(`${this.selector}>span:first`);
    }

    public srOnly(): DefaultCypressChainable {
        return cy.get(`${this.selector}>.sr-only`);
    }

    public button(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return this.el().parent('[data-test="select-day-button"]');
    }

    public click(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return this.button().click();
    }
}
