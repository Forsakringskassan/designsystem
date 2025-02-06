import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * PageObject for element created by alertScreenReader.
 *
 * @public
 */
export class AlertScreenReaderPageObject implements BasePageObject {
    public selector = "#fkui-alert-screen-reader";

    /**
     * Returns the alertScreenReader element with text.
     */
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }
}
