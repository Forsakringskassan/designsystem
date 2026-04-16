import { FExpandableParagraphSelectors } from "../selectors";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 * @since v6.43.0
 */
export class FExpandableParagraphPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FExpandableParagraphSelectors>;

    /**
     * @param selector - The root of the FExpandableParagraph component
     */
    public constructor(selector: string = ".expandable-paragraph") {
        this._selectors = FExpandableParagraphSelectors(selector);
    }

    public get selector(): string {
        return this._selectors.selector;
    }

    /**
     * Get the root element.
     *
     * @returns The element itself.
     */
    public el(): DefaultCypressChainable {
        return cy.get(this._selectors.selector);
    }

    /**
     * Get the expand/collapse icon.
     *
     * @returns The expand/collapse icon.
     */
    public expandCollapseIcon(): DefaultCypressChainable {
        return cy.get(this._selectors.expandCollapseIcon());
    }

    /**
     * Get the header.
     *
     * @returns The header.
     */
    public header(): DefaultCypressChainable {
        return cy.get(this._selectors.header());
    }

    /**
     * Get the body.
     *
     * @returns The body.
     */
    public body(): DefaultCypressChainable {
        return cy.get(this._selectors.body());
    }

    /**
     * Get the related info.
     *
     * @returns The related info.
     */
    public relatedInfo(): DefaultCypressChainable {
        return cy.get(this._selectors.relatedInfo());
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
