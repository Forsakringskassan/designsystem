import { FTextareaFieldSelectors } from "../selectors";

import { FLabelPageObject } from "./FLabel.pageobject";
import { FTooltipPageObject } from "./FTooltip.pageobject";
import { type BasePageObject, type DefaultCypressChainable } from "./common";
import { Input } from "./input";

/**
 * @public
 */
export class FTextareaFieldPageObject extends Input implements BasePageObject {
    private _selectors: ReturnType<typeof FTextareaFieldSelectors>;

    public override selector: string;
    public override el: () => DefaultCypressChainable;
    public label: FLabelPageObject;
    public tooltip: FTooltipPageObject;

    /**
     * @param selector - the root of the textarea field, usually `<div class="textarea-field">...</div>`.
     */
    public constructor(selector: string) {
        super(selector, "textarea");
        this._selectors = FTextareaFieldSelectors(selector);

        this.selector = this._selectors.selector;
        this.el = () => cy.get(this._selectors.selector);
        this.label = new FLabelPageObject(this._selectors.label());
        this.tooltip = new FTooltipPageObject(
            `${this._selectors.selector} .tooltip`,
        );
    }

    public input(): DefaultCypressChainable {
        return cy.get(this._selectors.textarea());
    }

    /**
     * @deprecated Not used anymore for error feedback within the field
     */
    public errorIcon(): DefaultCypressChainable {
        return cy.get(
            `${this._selectors.selector} .icon.textarea-field__icon.f-icon-error`,
        );
    }
}
