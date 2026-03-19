import { FErrorListPageObject } from "./FErrorList.pageobject";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FMessageBoxPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public errors: FErrorListPageObject;

    /**
     * @param selector - the root of the message box, usually `<div class="message-box">...</div>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(selector);
        this.errors = new FErrorListPageObject(this.selector);
    }

    public icon(): DefaultCypressChainable {
        return cy.get(`${this.selector} .message-box__icon`);
    }

    public content(): DefaultCypressChainable {
        return cy.get(`${this.selector} .message-box__content`);
    }

    public typeOfMessage(): Cypress.Chainable<string> {
        return this.el().then((el) =>
            /* eslint-disable-next-line sonarjs/slow-regex -- technical debt */
            el[0].className.replace(/.*message-box--(\w+).*/, "$1"),
        );
    }
}
