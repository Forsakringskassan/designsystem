import { type BasePageObject, type DefaultCypressChainable } from "./common";
import { FLabelPageObject } from "./FLabel.pageobject";
import { FTooltipPageObject } from "./FTooltip.pageobject";

/**
 * @public
 * @param selector - the root of the output field, usually `<div class="output-field">...</div>`.
 */
export class FOutputFieldPageobject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public label: FLabelPageObject;
    public tooltip: FTooltipPageObject;
    public body: () => DefaultCypressChainable;

    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
        this.label = new FLabelPageObject(`${this.selector} .label`);
        this.tooltip = new FTooltipPageObject(`${this.selector} .tooltip`);
        this.body = () => cy.get(`${this.selector} .output-field__output`);
    }
}
