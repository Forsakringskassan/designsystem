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
        return cy.get(`${this.selector} .tooltip__button`);
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

    /**
     * @deprecated Use `closeButton()`, `header()`, or `body()` instead.
     */
    public content(): {
        closeButtonTop: () => DefaultCypressChainable;
        heading: () => DefaultCypressChainable;
        brodtext: () => DefaultCypressChainable;
        closeButtonBottom: () => DefaultCypressChainable;
    } {
        return {
            closeButtonTop: (): DefaultCypressChainable =>
                cy.get(`${this.selector} .close-button`),
            closeButtonBottom: (): DefaultCypressChainable =>
                cy.get(`${this.selector} .close-button`),
            heading: (): DefaultCypressChainable =>
                cy.get(`${this.selector} .tooltip__content .tooltip__header`),
            brodtext: (): DefaultCypressChainable =>
                cy.get(`${this.selector} .tooltip__content .tooltip__body`),
        };
    }
}
