import { FTextFieldSelectors } from "../selectors";

import { FLabelPageObject } from "./FLabel.pageobject";
import { FTooltipPageObject } from "./FTooltip.pageobject";
import { type BasePageObject, type DefaultCypressChainable } from "./common";
import { Input } from "./input";

/**
 * @public
 */
export class FTextFieldPageObject extends Input implements BasePageObject {
    private _selectors: ReturnType<typeof FTextFieldSelectors>;

    public override selector: string;
    public override el: () => DefaultCypressChainable;
    public label: FLabelPageObject;
    public tooltip: FTooltipPageObject;

    /**
     * @param selector - the root of the text field, usually `<div class="text-field">...</div>`.
     */
    public constructor(selector: string) {
        super(selector, "input");
        this._selectors = FTextFieldSelectors(selector);

        this.selector = this._selectors.selector;
        this.el = () => cy.get(this._selectors.selector);
        this.label = new FLabelPageObject(this._selectors.label());
        this.tooltip = new FTooltipPageObject(
            `${this._selectors.selector} .tooltip`,
        );
    }

    public input(): DefaultCypressChainable {
        return cy.get(this._selectors.input());
    }

    public errorIcon(): DefaultCypressChainable {
        return cy.get(
            `${this._selectors.selector} .icon.text-field__icon.f-icon-error`,
        );
    }
}
