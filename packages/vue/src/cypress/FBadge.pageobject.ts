import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FBadgePageObject implements BasePageObject {
    public selector: string;

    /**
     * @param selector - the root of the badge.
     */
    public constructor(selector: string) {
        this.selector = selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    public status(): Cypress.Chainable<string> {
        return this.el().then((el) =>
            /* eslint-disable-next-line sonarjs/slow-regex -- technical debt */
            el[0].className.replace(/.*badge--(\w+).*/, "$1"),
        );
    }

    public isInverted(): Cypress.Chainable<boolean> {
        return this.el().then(
            (el) =>
                /* eslint-disable-next-line sonarjs/slow-regex -- technical debt */
                el[0].className.replace(/.*badge--(\w+)-(\w+).*/, "$2") ===
                "inverted",
        );
    }
}
