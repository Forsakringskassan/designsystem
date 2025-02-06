import { FErrorListPageObject } from "./FErrorList.pageobject";
import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * @public
 */
export class FValidationFormPageObject implements BasePageObject {
    public selector: string;
    public errorlist: FErrorListPageObject;

    /**
     * @param selector - the root of the validation form.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.errorlist = new FErrorListPageObject(
            `${this.selector} .error-list`,
        );
    }
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }
}
