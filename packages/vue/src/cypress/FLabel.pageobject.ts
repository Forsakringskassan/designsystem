import { FLabelSelectors } from "../selectors";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FLabelPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FLabelSelectors>;

    /**
     * @param selector - the root of the label, usually `<label class="label">...</label>`.
     */
    public constructor(selector: string = ".label") {
        this._selectors = FLabelSelectors(selector);
    }

    public get selector(): string {
        return this._selectors.selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this._selectors.selector);
    }

    /**
     * Hjälptext
     */
    public description(): DefaultCypressChainable {
        return cy.get(this._selectors.description());
    }

    /**
     * ErrorIcon
     */
    public errorIcon(): DefaultCypressChainable {
        return cy.get(this._selectors.errorIcon());
    }

    /**
     * Formatbeskrivning
     */
    public formatDescription(): DefaultCypressChainable {
        return cy.get(this._selectors.formatDescription());
    }

    /**
     * Felmeddelande
     */
    public errorMessage(): DefaultCypressChainable {
        return cy.get(this._selectors.errorMessage());
    }
}
