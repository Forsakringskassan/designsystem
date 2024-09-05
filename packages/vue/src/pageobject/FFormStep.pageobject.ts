import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { FErrorListPageObject } from "./FErrorList.pageobject";

/**
 * @public
 */
export class FFormStepPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public errors: FErrorListPageObject;
    private headerSelector: string;

    /**
     * @param selector - the root of the form step, usually `<div class="form-step">...</div>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(selector);
        this.headerSelector = `${this.selector} .form-step__header`;
        this.errors = new FErrorListPageObject(
            `${this.selector} .form-step__error`,
        );
    }

    /**
     * The header contains the title and the valid icon.
     */
    public header(): DefaultCypressChainable {
        return cy.get(this.headerSelector);
    }

    public title(): DefaultCypressChainable {
        return cy.get(`${this.headerSelector} .form-step__title`);
    }

    public body(): DefaultCypressChainable {
        return cy.get(`${this.headerSelector} +`);
    }

    public validIcon(): DefaultCypressChainable {
        return cy.get(
            `${this.headerSelector} .icon.form-step__check.f-icon-success`,
        );
    }

    public isOpen(): Cypress.Chainable<boolean> {
        return this.editConfirmButton().then((elem) => {
            return elem.get(0).getAttribute("aria-expanded") === "true";
        });
    }

    public editConfirmButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} button[data-form-step-button]`);
    }
}
