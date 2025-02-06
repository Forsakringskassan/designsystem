import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { FLabelPageObject } from "./FLabel.pageobject";
import { FTooltipPageObject } from "./FTooltip.pageobject";
import { FRadioFieldPageObject } from "./FRadioField.pageobject";

/**
 * @public
 */
export class FRadioGroupPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public label: FLabelPageObject;
    public tooltip: FTooltipPageObject;

    /**
     * @param selector - the root of the radio group, usually `<div class="radio-button-group">...</div>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
        this.label = new FLabelPageObject(`${this.selector} legend.label`);
        this.tooltip = new FTooltipPageObject(`${this.selector} .tooltip`);
    }

    public content(): DefaultCypressChainable {
        return cy.get(`${this.selector} .radio-button-group__content`);
    }

    public radioButton(buttonSelector: string): FRadioFieldPageObject {
        return new FRadioFieldPageObject(`${this.selector} ${buttonSelector}`);
    }

    public numberOfOptions(): Cypress.Chainable<number> {
        return cy.get(`${this.selector} .radio-button`).then((el) => {
            return el.length;
        });
    }
}
