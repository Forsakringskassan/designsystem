import { FCrudDatasetSelectors } from "../selectors";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FCrudDatasetPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FCrudDatasetSelectors>;

    public constructor(selector = ".crud-dataset") {
        this._selectors = FCrudDatasetSelectors(selector);
    }

    public get selector(): string {
        return this._selectors.selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this._selectors.selector);
    }

    public addButton(): DefaultCypressChainable {
        return cy.get(this._selectors.addButton());
    }
}
