import { type DefaultCypressChainable } from "./common";

/**
 * pageobject for the FErrorList component
 *
 * @public
 * @param selector - CSS selector for the FErrorList object
 */
export class FErrorListPageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;

    /**
     * @param selector - the root of the errorlist.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
    }

    /**
     * Get `li` elements. Verify count using `.should("have.length", N)`.
     */
    public listItems(): DefaultCypressChainable {
        return cy.get(`${this.selector} li`);
    }

    /**
     * Get `a` elements. Verify count using `.should("have.length", N)`.
     */
    public links(): DefaultCypressChainable {
        return cy.get(`${this.selector} a`);
    }

    public getLink(index: number): DefaultCypressChainable {
        return cy.get(`${this.selector} a:nth(${index})`);
    }

    public getLinkByName(
        error: string,
    ): Cypress.Chainable<Cypress.Chainable<JQuery<HTMLElement>> | HTMLElement> {
        let link = (): DefaultCypressChainable | HTMLElement =>
            cy.get(`${this.selector} ${error}`);

        return cy
            .get(`${this.selector} a`)
            .each((el) => {
                if (el.get(0).innerText.trim() === error) {
                    link = () => el.get(0);
                }
            })
            .then(() => {
                return link();
            });
    }

    public hasError(error: string): Cypress.Chainable<boolean> {
        let hasSelectedError = false;

        return cy
            .get(`${this.selector} li`)
            .each((el) => {
                if (el.get(0).innerText.trim() === error) {
                    hasSelectedError = true;
                }
            })
            .then(() => {
                return hasSelectedError;
            });
    }
}
