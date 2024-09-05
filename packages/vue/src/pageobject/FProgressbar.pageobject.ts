import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FProgressbarPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public progressMeter: () => DefaultCypressChainable;

    /**
     * @param selector - the root of the static field, usually `<div class="progress">...</div>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
        this.progressMeter = () => cy.get(`${this.selector} .progress__meter`);
    }

    public progressStatus(): Cypress.Chainable<string> {
        return this.progressMeter().then((el) =>
            el[0].classList[1].replace(/.*progress__meter--(\w+).*/, "$1"),
        );
    }

    public ariaValueNow(): Cypress.Chainable<string | undefined> {
        return this.progressMeter().invoke("attr", "aria-valuenow");
    }
}
