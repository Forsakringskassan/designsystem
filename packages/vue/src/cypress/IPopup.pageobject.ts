import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * pageobject for the IPopup component.
 *
 * @public
 */
export class IPopupPageObject implements BasePageObject {
    public selector: string;

    /**
     * @param selector - the root of the IPopup.
     */
    public constructor(selector: string = ".popup") {
        this.selector = selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }
}
