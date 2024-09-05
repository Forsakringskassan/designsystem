import { type DefaultCypressChainable, type BasePageObject } from "../common";

/**
 * @public
 */
export class FPageHeaderPageobject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    /**
     * @param selector - the root of the page header, usually `div.page-header__root`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
    }

    public skipLink(): DefaultCypressChainable {
        return cy.get(`${this.selector} .iskiplink`).then(($el) => {
            // Workaround: to be able to click the skipLink it must be visible.
            // To be visible user needs to use TAB-key which isn't supported by Cypress.
            // The workaround is to show the skipLink when using this fetch method.
            $el.css({ top: 45, left: 10 });
        });
    }

    public applicationName(): DefaultCypressChainable {
        return cy.get(`${this.selector} .page-header__app-name`);
    }

    public rightSlot(): DefaultCypressChainable {
        return cy.get(`${this.selector} .page-header__right-slot`);
    }

    public logoSlot(): DefaultCypressChainable {
        return cy.get(`${this.selector} div.page-header__logo`);
    }

    public logoRouterLink(): DefaultCypressChainable {
        return cy.get(`${this.selector} .page-header__logo > a`);
    }
}
