import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * @public
 */
export class FTooltipPageObject implements BasePageObject {
    public selector: string;

    /**
     * @param selector - the root of the tooltip
     */
    public constructor(selector: string) {
        this.selector = selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    public iButton(): DefaultCypressChainable {
        return cy.get(
            [
                /* no attached to anything */
                `.tooltip__button:has(~ :is(${this.selector}))`,

                /* attached to label or heading */
                `.tooltip__container:has(.tooltip__button):has(~ :is(${this.selector})) > .tooltip__button`,
            ].join(", "),
        );
    }

    public header(): DefaultCypressChainable {
        return cy.get(`${this.selector} .tooltip__header`);
    }

    public body(): DefaultCypressChainable {
        return cy.get(`${this.selector} .tooltip__body`);
    }

    public closeButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} .close-button`);
    }
}
