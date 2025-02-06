import { FLabelPageObject } from "./FLabel.pageobject";
import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { Input } from "./Input";
import { FTooltipPageObject } from "./FTooltip.pageobject";

/**
 * @public
 */
export class FTextareaFieldPageObject extends Input implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public label: FLabelPageObject;
    public tooltip: FTooltipPageObject;

    /**
     * @param selector - the root of the textarea field, usually `<div class="textarea-field">...</div>`.
     */
    public constructor(selector: string) {
        super(selector, "textarea");
        this.selector = selector;
        this.el = () => cy.get(this.selector);
        this.label = new FLabelPageObject(`${this.selector} .label`);
        this.tooltip = new FTooltipPageObject(`${this.selector} .tooltip`);
    }

    public input(): DefaultCypressChainable {
        return cy.get(`${this.selector} textarea`);
    }
    public errorIcon(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .icon.textarea-field__icon.f-icon-error`,
        );
    }
}
