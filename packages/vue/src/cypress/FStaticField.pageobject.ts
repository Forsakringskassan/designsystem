import { FStaticFieldSelectors } from "../selectors";
import { FLabelPageObject } from "./FLabel.pageobject";
import { FTooltipPageObject } from "./FTooltip.pageobject";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FStaticFieldPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FStaticFieldSelectors>;

    public label: FLabelPageObject;
    public tooltip: FTooltipPageObject;

    /**
     * @param selector - the root of the static field, usually `<div class="output-field">...</div>`.
     */
    public constructor(selector: string) {
        this._selectors = FStaticFieldSelectors(selector);
        this.label = new FLabelPageObject(this._selectors.label());
        this.tooltip = new FTooltipPageObject(`${this.selector} .tooltip`);
    }

    public get selector(): string {
        return this._selectors.selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this._selectors.selector);
    }

    public body(): DefaultCypressChainable {
        return cy.get(this._selectors.body());
    }
}
