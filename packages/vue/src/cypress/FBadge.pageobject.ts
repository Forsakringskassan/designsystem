import { FBadgeSelectors } from "../selectors";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FBadgePageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FBadgeSelectors>;

    /**
     * @param selector - the root of the badge.
     */
    public constructor(selector: string = ".badge") {
        this._selectors = FBadgeSelectors(selector);
    }

    public get selector(): string {
        return this._selectors.selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this._selectors.selector);
    }

    public status(): Cypress.Chainable<string> {
        return this.el().then((el) => {
            /* eslint-disable-next-line regexp/optimal-quantifier-concatenation -- technical debt */
            return el[0].className.replace(/.*badge--(\w+).*/, "$1");
        });
    }

    public isInverted(): Cypress.Chainable<boolean> {
        return this.el().then((el) => {
            return (
                /* eslint-disable-next-line regexp/optimal-quantifier-concatenation -- technical debt */
                el[0].className.replace(/.*badge--\w+-(\w+).*/, "$1") ===
                "inverted"
            );
        });
    }
}
