import { FModalSelectors } from "../selectors";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FModalPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FModalSelectors>;
    public selector: string;

    /**
     * @param selector - the root of the Modal, usually `<div class="modal">...</div>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this._selectors = FModalSelectors(selector);
    }

    public el(): DefaultCypressChainable {
        return cy.get(this._selectors.dialog());
    }

    public title(): DefaultCypressChainable {
        return cy.get(this._selectors.header());
    }

    public body(): DefaultCypressChainable {
        return cy.get(this._selectors.content());
    }

    public primaryButton(): DefaultCypressChainable {
        return cy.get(`${this._selectors.footer()} .button--primary`);
    }

    public secondaryButton(): DefaultCypressChainable {
        return cy.get(`${this._selectors.footer()} .button--secondary`);
    }

    public closeCross(): DefaultCypressChainable {
        return cy.get(this._selectors.closeButton());
    }

    public typeOfModal(): Cypress.Chainable<string> {
        return cy.get(this.selector).then((el) => {
            const prefix = "modal--";
            const classes = Array.from(el[0].classList.values());
            const statusClass = classes.find((it) => it.startsWith(prefix));
            return statusClass?.slice(prefix.length) ?? "";
        });
    }
}
