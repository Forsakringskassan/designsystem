import { FMessageBoxSelectors } from "../selectors";
import { FErrorListPageObject } from "./FErrorList.pageobject";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FMessageBoxPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FMessageBoxSelectors>;

    public errors: FErrorListPageObject;

    /**
     * @param selector - the root of the message box, usually `<div class="message-box">...</div>`.
     */
    public constructor(selector: string) {
        this._selectors = FMessageBoxSelectors(selector);
        this.errors = new FErrorListPageObject(this.selector);
    }

    public get selector(): string {
        return this._selectors.selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this._selectors.selector);
    }

    public icon(): DefaultCypressChainable {
        return cy.get(this._selectors.icon());
    }

    public content(): DefaultCypressChainable {
        return cy.get(this._selectors.content());
    }

    public typeOfMessage(): Cypress.Chainable<string> {
        return this.el().then((el) => {
            const prefix = "message-box--";
            const classes = Array.from(el[0].classList.values());
            const statusClass = classes.find((it) => it.startsWith(prefix));
            return statusClass?.slice(prefix.length) ?? "";
        });
    }
}
