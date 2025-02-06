import { FLabelPageObject } from "./FLabel.pageobject";
import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { FTooltipPageObject } from "./FTooltip.pageobject";

/**
 * @public
 */
export class FSelectFieldPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public label: FLabelPageObject;
    public tooltip: FTooltipPageObject;

    /**
     * @param selector - the root of the select field, usually `<div class="select-field">...</div>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
        this.label = new FLabelPageObject(`${this.selector} .label`);
        this.tooltip = new FTooltipPageObject(`${this.selector} .tooltip`);
    }

    public dropdown(): Cypress.Chainable<JQuery<HTMLSelectElement>> {
        return cy.get(`${this.selector} select`);
    }

    public arrowIcon(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .icon.select-field__icon.f-icon-arrow-down`,
        );
    }

    public numberOfOptions(): Cypress.Chainable<number> {
        return this.dropdown().then(
            (el) => el.find("option").not('[disabled="disabled"]').length,
        );
    }

    public listOfOptions(): Cypress.Chainable<string[]> {
        const listItem: string[] = [];
        return cy
            .get(`${this.selector} select option`)
            .not('[disabled="disabled"]')
            .each((el) => {
                return listItem.push(el.get(0).innerText);
            })
            .then(() => listItem);
    }

    /**
     * Get the currently selected `<option>` element.
     */
    public selectedOption(): Cypress.Chainable<JQuery<HTMLOptionElement>> {
        return cy.get<HTMLOptionElement>(`${this.selector} option:selected`);
    }

    public selectedValue(): Cypress.Chainable<string> {
        return this.dropdown().then((el) => {
            return el.get(0).value;
        });
    }
}
