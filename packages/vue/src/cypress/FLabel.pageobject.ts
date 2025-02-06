import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * @public
 */
export class FLabelPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;

    /**
     * @param selector - the root of the label, usually `<label class="label">...</label>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
    }

    /**
     * Hjälptext
     */
    public description(): DefaultCypressChainable {
        return cy.get(`${this.selector} .label__description`);
    }

    /**
     * ErrorIcon
     */
    public errorIcon(): DefaultCypressChainable {
        return cy.get(`${this.selector} .icon.label__icon--left.f-icon-error`);
    }

    /**
     * Formatbeskrivning
     */
    public formatDescription(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .label__description.label__description--format`,
        );
    }

    /**
     * Felmeddelande
     */
    public errorMessage(): DefaultCypressChainable {
        return cy.get(`${this.selector} .label__message.label__message--error`);
    }
}
