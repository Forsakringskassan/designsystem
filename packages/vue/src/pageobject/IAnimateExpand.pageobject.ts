import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * pageobject for the IAnimateExpand component
 * @param selector - CSS selector for the IAnimateExpand object
 */
export class IAnimateExpandPageobject implements BasePageObject {
    public selector: string;
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }
    private content(): DefaultCypressChainable {
        return cy.get(`${this.selector} [data-test="animation-content"]`);
    }
    private animationClass(): DefaultCypressChainable {
        return cy.get(`${this.selector} .animate-expand--expanded`);
    }

    /**
     * Wait for open animation to finish.
     */
    public waitOnOpen(): void {
        cy.log("Wait for open animation to finish");
        this.animationClass().should("exist"); // required when running headless
        this.waitOnAnimationCompleted();
    }

    /**
     * Wait for open animation to not exist.
     */
    public waitOnAnimationCompleted(): void {
        cy.log("Wait for open animation to complete");
        this.animationClass().should("not.exist");
    }

    /**
     * Wait for close animation to finish.
     */
    public waitOnClose(): void {
        cy.log("Wait for close animation to finish");
        cy.get(`${this.selector} [data-test="animation-content"] > *`).should(
            "not.exist",
        );
    }

    public constructor(selector: string) {
        this.selector = selector;
    }
}
