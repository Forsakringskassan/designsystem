import { FTooltipSelectors } from "../selectors";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FTooltipPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FTooltipSelectors>;

    /**
     * @param selector - the root of the tooltip
     */
    public constructor(selector: string) {
        this._selectors = FTooltipSelectors(selector);
    }

    public get selector(): string {
        return this._selectors.selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this._selectors.selector);
    }

    public iButton(): DefaultCypressChainable {
        return cy.get(this._selectors.toggleButton());
    }

    public header(): DefaultCypressChainable {
        return cy.get(this._selectors.header());
    }

    public body(): DefaultCypressChainable {
        return cy.get(this._selectors.body());
    }

    public closeButton(): DefaultCypressChainable {
        return cy.get(this._selectors.closeButton());
    }
}
