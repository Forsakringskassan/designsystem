import { type DefaultCypressChainable, type BasePageObject } from "../common";

/**
 * @public
 */
export class FPageHeaderPageobject implements BasePageObject {
    public selector: string;

    /**
     * @param selector - the root of the page header, usually `div.page-header__root`.
     */
    public constructor(selector: string = ".page-header__root") {
        this.selector = selector;
    }

    /**
     * Get root element.
     */
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * Get skiplink anchor element and wrapper for `skip-link-text` slot.
     */
    public skipLink(): DefaultCypressChainable {
        return cy.get(`${this.selector} .iskiplink`).then(($el) => {
            // Workaround: to be able to click the skipLink it must be visible.
            // To be visible user needs to use TAB-key which isn't supported by Cypress.
            // The workaround is to show the skipLink when using this fetch method.
            $el.css({ top: 45, left: 10 });
        });
    }

    /**
     * Get wrapper element for `default` slot.
     */
    public applicationName(): DefaultCypressChainable {
        return cy.get(`${this.selector} .page-header__app-name`);
    }

    /**
     * Get wrapper element for `right` slot.
     */
    public rightSlot(): DefaultCypressChainable {
        return cy.get(`${this.selector} .page-header__right-slot`);
    }

    /**
     * Get wrapper element for `logo` slot.
     */
    public logoSlot(): DefaultCypressChainable {
        return cy.get(`${this.selector} div.page-header__logo`);
    }
}
