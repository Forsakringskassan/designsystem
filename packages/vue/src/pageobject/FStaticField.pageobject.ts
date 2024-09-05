import { type BasePageObject, type DefaultCypressChainable } from "./common";
import { FLabelPageObject } from "./FLabel.pageobject";
import { FTooltipPageObject } from "./FTooltip.pageobject";

/**
 * @public
 */
export class FStaticFieldPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public label: FLabelPageObject;
    public tooltip: FTooltipPageObject;

    /**
     * @param selector - the root of the static field, usually `<div class="output-field">...</div>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
        this.label = new FLabelPageObject(`${this.selector} .label`);
        this.tooltip = new FTooltipPageObject(`${this.selector} .tooltip`);
    }

    public body(): DefaultCypressChainable {
        return cy.get(`${this.selector} p`);
    }
}
