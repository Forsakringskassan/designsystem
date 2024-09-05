import { FLabelPageObject } from "./FLabel.pageobject";
import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { Input } from "./Input";
import { FTooltipPageObject } from "./FTooltip.pageobject";

/**
 * @public
 */
export class FTextFieldPageObject extends Input implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public label: FLabelPageObject;
    public tooltip: FTooltipPageObject;

    /**
     * @param selector - the root of the text field, usually `<div class="text-field">...</div>`.
     */
    public constructor(selector: string) {
        super(selector, "input");
        this.selector = selector;
        this.el = () => cy.get(this.selector);
        this.label = new FLabelPageObject(`${this.selector} .label`);
        this.tooltip = new FTooltipPageObject(`${this.selector} .tooltip`);
    }

    public input(): DefaultCypressChainable {
        return cy.get(`${this.selector} input`);
    }
    public errorIcon(): DefaultCypressChainable {
        return cy.get(`${this.selector} .icon.text-field__icon.f-icon-error`);
    }
}
