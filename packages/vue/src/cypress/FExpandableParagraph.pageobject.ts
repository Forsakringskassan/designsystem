import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 * @since %version%
 */
export class FExpandableParagraphPageObject implements BasePageObject {
    public selector: string;

    /**
     * @param selector - The root of the FExpandableParagraph component
     */
    public constructor(selector: string = ".expandable-paragraph") {
        this.selector = selector;
    }

    /**
     * Get the root element.
     *
     * @returns The element itself.
     */
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * Get the expand/collapse icon.
     *
     * @returns The expand/collapse icon.
     */
    public expandCollapseIcon(): DefaultCypressChainable {
        return cy.get(`${this.selector} .expandable-paragraph__icon`);
    }

    /**
     * Get the header.
     *
     * @returns The header.
     */
    public header(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .expandable-paragraph__heading .expandable-paragraph__button`,
        );
    }

    /**
     * Get the body.
     *
     * @returns The body.
     */
    public body(): DefaultCypressChainable {
        return cy.get(`${this.selector} .expandable-paragraph__content`);
    }

    /**
     * Get the related info.
     *
     * @returns The related info.
     */
    public relatedInfo(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .expandable-paragraph__related-information`,
        );
    }

    /**
     * Get if the paragraph is open or not.
     *
     * @returns If the paragraph is open or not.
     */
    public isOpen(): Cypress.Chainable<boolean> {
        return this.el().then(($el) => {
            return $el.hasClass("expandable-paragraph--open");
        });
    }
}
