import { FSelectFieldSelectors } from "../selectors";
import { FLabelPageObject } from "./FLabel.pageobject";
import { FTooltipPageObject } from "./FTooltip.pageobject";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FSelectFieldPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FSelectFieldSelectors>;
    public label: FLabelPageObject;
    public tooltip: FTooltipPageObject;

    /**
     * @param selector - the root of the select field, usually `<div class="select-field">...</div>`.
     */
    public constructor(selector: string) {
        this._selectors = FSelectFieldSelectors(selector);
        this.label = new FLabelPageObject(this._selectors.label());
        this.tooltip = new FTooltipPageObject(
            `${this._selectors.selector} .tooltip`,
        );
    }

    /**
     * Gets the page object selector.
     *
     * @returns The page object selector.
     */
    public get selector(): string {
        return this._selectors.selector;
    }

    /**
     * Gets the page object element.
     *
     * @returns The page object element.
     */
    public el(): DefaultCypressChainable {
        return cy.get(this._selectors.selector);
    }

    public dropdown(): Cypress.Chainable<JQuery<HTMLSelectElement>> {
        return cy.get(this._selectors.select());
    }

    public arrowIcon(): DefaultCypressChainable {
        return cy.get(this._selectors.arrowIcon());
    }

    public numberOfOptions(): Cypress.Chainable<number> {
        return this.dropdown().then(
            (el) => el.find("option").not('[disabled="disabled"]').length,
        );
    }

    public listOfOptions(): Cypress.Chainable<string[]> {
        const listItem: string[] = [];
        return cy
            .get(this._selectors.options())
            .not('[disabled="disabled"]')
            .each((el) => {
                listItem.push(el.get(0).textContent.trim());
            })
            .then(() => listItem);
    }

    /**
     * Get the currently selected `<option>` element.
     */
    public selectedOption(): Cypress.Chainable<JQuery<HTMLOptionElement>> {
        return cy.get<HTMLOptionElement>(this._selectors.selectedOption());
    }

    public selectedValue(): Cypress.Chainable<string> {
        return this.dropdown().then((el) => {
            return el.get(0).value;
        });
    }
}
