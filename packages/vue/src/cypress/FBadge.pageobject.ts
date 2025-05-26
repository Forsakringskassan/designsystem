import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * @public
 */
export class FBadgePageObject implements BasePageObject {
    public selector: string;

    /**
     * Använd `FBadgePageObject` för att hämta information relaterat till {@link
     * FBadge | bricka}.
     *
     * @see {@link FBadge}
     * @see {@link TestPlugin}
     *
     * @param selector - Selector till `FBadge` elementet. Du kan med fördel
     * använda {@link TestPlugin | `v-test`} direktivet för din selector.
     */
    public constructor(selector: string) {
        this.selector = selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * Get badge variant.
     *
     * @see {@link FBadge}
     * @returns A string with the badge variant:
     *
     * - `default`
     * - `warning`
     * - `error`
     * - `success`
     * - `info`
     */
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
