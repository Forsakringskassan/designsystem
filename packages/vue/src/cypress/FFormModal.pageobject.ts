import { FModalPageObject } from "./FModal.pageobject";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FFormModalPageObject
    extends FModalPageObject
    implements BasePageObject
{
    public selector: string;
    public el: () => DefaultCypressChainable;
    /**
     * @param selector - the root of the Modal, usually `<div class="modal">...</div>`.
     */
    public constructor(selector: string) {
        super(selector);
        this.selector = selector;
        this.el = () => cy.get(this.selector);
    }

    public submitButton(): DefaultCypressChainable {
        return this.primaryButton();
    }

    public cancelButton(): DefaultCypressChainable {
        return this.secondaryButton();
    }
}
