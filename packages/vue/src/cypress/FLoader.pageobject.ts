import { FLoaderSelectors } from "../selectors";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FLoaderPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FLoaderSelectors>;

    /**
     * @param selector - the root of the loader, usually `<div class="loader">...</div>`.
     */
    public constructor(selector: string = ".loader") {
        this._selectors = FLoaderSelectors(selector);
    }

    public get selector(): string {
        return this._selectors.selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this._selectors.selector);
    }

    public wrapper(): DefaultCypressChainable {
        return cy.get(this._selectors.wrapper());
    }

    public waitText(): DefaultCypressChainable {
        return cy.get(this._selectors.waitText());
    }
}
