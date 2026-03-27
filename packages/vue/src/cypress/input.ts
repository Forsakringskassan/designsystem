import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class Input implements BasePageObject {
    public selector: string;
    public inputSelector: string;
    public el: () => DefaultCypressChainable;

    public constructor(selector: string, inputSelector: string) {
        this.selector = selector;
        this.inputSelector = inputSelector;
        this.el = () => cy.get(this.selector);
    }

    public enter(text: string): DefaultCypressChainable {
        return cy
            .get(`${this.selector} ${this.inputSelector}`)
            .clear()
            .type(text)
            .blur();
    }

    public value(): Cypress.Chainable<string> {
        return cy
            .get<HTMLInputElement>(`${this.selector}  ${this.inputSelector}`)
            .then((el) => {
                return el.get(0).value;
            });
    }
}
