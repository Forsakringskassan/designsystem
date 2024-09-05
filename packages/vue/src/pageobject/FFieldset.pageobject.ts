import { FLabelPageObject } from "./FLabel.pageobject";
import { DefaultCypressChainable, BasePageObject } from "./common";
import { FRadioFieldPageObject } from "./FRadioField.pageobject";
import { FTooltipPageObject } from "./FTooltip.pageobject";
import { FCheckboxFieldPageObject } from "./FCheckboxField.pageobject";

/**
 * @public
 */
export class FFieldsetPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public label: FLabelPageObject;
    public tooltip: FTooltipPageObject;

    /**
     * @param selector - the root of the fieldset, usually `<div class="radio-button-group">...</div>` or `<div class="checkbox-group">...</div>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
        this.label = new FLabelPageObject(`${this.selector} .label`);
        this.tooltip = new FTooltipPageObject(`${this.selector} .tooltip`);
    }

    public content(): DefaultCypressChainable {
        return cy.get(`${this.selector} .fieldset__content`);
    }

    public radioButton(buttonSelector: string): FRadioFieldPageObject {
        return new FRadioFieldPageObject(`${this.selector} ${buttonSelector}`);
    }

    public numberOfRadio(): Cypress.Chainable<number> {
        return cy.get(`${this.selector} .radio-button`).then((el) => {
            return el.length;
        });
    }

    public checkBox(checkboxSelector: string): FCheckboxFieldPageObject {
        return new FCheckboxFieldPageObject(
            `${this.selector} ${checkboxSelector}`,
        );
    }

    public numberOfCheckboxes(): Cypress.Chainable<number> {
        return cy.get(`${this.selector} .checkbox`).then((el) => {
            return el.length;
        });
    }
}
