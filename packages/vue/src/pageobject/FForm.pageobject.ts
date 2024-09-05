import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { FMessageBoxPageObject } from "./FMessageBox.pageobject";

/**
 * @public
 */
export class FFormPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public components: Record<string, BasePageObject> = {};

    /**
     * @param selector - the root of the form, usually `<form class="form">...</form>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
    }

    public errorMessageBox(): FMessageBoxPageObject {
        return new FMessageBoxPageObject(
            `${this.selector} .message-box.message-box--error`,
        );
    }
}
