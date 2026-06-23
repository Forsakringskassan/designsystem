import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FModalPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;

    /**
     * @param selector - the root of the Modal, usually `<div class="modal">...</div>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(`${this.selector} .modal__dialog-container`);
    }

    public title(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .modal__dialog-container .modal__title`,
        );
    }

    public body(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .modal__dialog-container .modal__content`,
        );
    }

    public primaryButton(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .modal__dialog-container .modal__footer .button--primary`,
        );
    }

    public secondaryButton(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .modal__dialog-container .modal__footer .button--secondary`,
        );
    }

    public closeCross(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .modal__dialog-container .close-button`,
        );
    }

    public typeOfModal(): Cypress.Chainable<string> {
        return cy.get(this.selector).then((el) => {
            const prefix = "modal--";
            const classes = Array.from(el[0].classList.values());
            const statusClass = classes.find((it) => it.startsWith(prefix));
            return statusClass?.slice(prefix.length) ?? "";
        });
    }
}
