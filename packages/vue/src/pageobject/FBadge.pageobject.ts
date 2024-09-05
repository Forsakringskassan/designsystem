import { type DefaultCypressChainable, type BasePageObject } from "./common";
import "./trimmed-text";

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

    /**
     * @deprecated Use assertion `label().should('trimmedText', '...')` instead.
     */
    public trimmedText(): Cypress.Chainable<string> {
        return this.el().__fkui_internal_trimmedText();
    }

    public status(): Cypress.Chainable<string> {
        return this.el().then((el) =>
            el[0].className.replace(/.*badge--(\w+).*/, "$1"),
        );
    }

    public isInverted(): Cypress.Chainable<boolean> {
        return this.el().then(
            (el) =>
                el[0].className.replace(/.*badge--(\w+)-(\w+).*/, "$2") ===
                "inverted",
        );
    }
}
