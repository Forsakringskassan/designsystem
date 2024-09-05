import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { FErrorListPageObject } from "./FErrorList.pageobject";

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
        this.errors = new FErrorListPageObject(`${this.selector}`);
    }

    /**
     * @deprecated Access using `content()` instead. It is not guaranteed that provided heading class is used.
     */
    public title(): DefaultCypressChainable {
        return cy.get(`${this.selector} .message-box__heading`);
    }

    public icon(): DefaultCypressChainable {
        return cy.get(`${this.selector} .message-box__icon`);
    }

    /**
     * @deprecated Access using `content()` instead. It is not guaranteed that `p`-tag is used.
     */
    public body(): DefaultCypressChainable {
        return cy.get(`${this.selector} p`);
    }

    public content(): DefaultCypressChainable {
        return cy.get(`${this.selector} .message-box__content`);
    }

    public typeOfMessage(): Cypress.Chainable<string> {
        return this.el().then((el) =>
            el[0].className.replace(/.*message-box--(\w+).*/, "$1"),
        );
    }
}
