import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { FLabelPageObject } from "./FLabel.pageobject";
import { FTooltipPageObject } from "./FTooltip.pageobject";
import { FCheckboxFieldPageObject } from "./FCheckboxField.pageobject";

/**
 * @public
 */
export class FCheckboxGroupPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public label: FLabelPageObject;
    public tooltip: FTooltipPageObject;

    /**
     * @param selector - the root of the checkbox group, usually `<div class="checkbox-group">...</div>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
        this.label = new FLabelPageObject(`${this.selector} legend.label`);
        this.tooltip = new FTooltipPageObject(`${this.selector} .tooltip`);
    }

    public content(): DefaultCypressChainable {
        return cy.get(`${this.selector} .checkbox-group__content`);
    }

    public checkBox(checkboxSelector: string): FCheckboxFieldPageObject {
        return new FCheckboxFieldPageObject(
            `${this.selector} ${checkboxSelector}`,
        );
    }

    public numberOfCheckboxes(): Cypress.Chainable<number> {
        return cy.get(`${this.selector} input`).then((el) => {
            return el.length;
        });
    }
}
