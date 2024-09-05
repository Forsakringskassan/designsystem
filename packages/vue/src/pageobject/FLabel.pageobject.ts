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
     * Label heading
     */
    public trimmedText(): Cypress.Chainable<string> {
        return this.el().then((el) => {
            const textNode = el.get(0).childNodes[0] as Text;
            if (!textNode.wholeText) {
                return "";
            }

            return textNode.wholeText
                .replace(/[\n\r]/gm, "")
                .replace(/\s+/g, " ")
                .replace(/(^\s|\s$)*/g, "");
        });
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
    public discreteDescription(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .label__description.label__description--discrete`,
        );
    }

    /**
     * Felmeddelande
     */
    public errorMessage(): DefaultCypressChainable {
        return cy.get(`${this.selector} .label__message.label__message--error`);
    }
}
