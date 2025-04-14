import { type BasePageObject, type DefaultCypressChainable } from "../common";
import { FErrorListPageObject } from "../FErrorList.pageobject";
import { IAnimateExpandPageobject } from "../IAnimateExpand.pageobject";
import { FWizardStepHeaderPageobject } from "./FWizardStepHeader.pageobject";

/**
 * Status of the FWizardStep -
 * done, open or pending
 *
 * @public
 */
export enum STATUS {
    done = "done",
    open = "open",
    pending = "pending",
}

/**
 * pageobject for the FWizardStep component
 *
 * @public
 * @param selector - CSS selector for the FWizardStep object
 */
export class FWizardStepPageobject implements BasePageObject {
    public selector: string;
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * Get the header pageobject in the FWizardStep
     */
    public header: FWizardStepHeaderPageobject;

    /**
     * get the errorlist pageobject in the FWizardStep
     */
    public errors: FErrorListPageObject;

    /**
     * Get the primary button element of the FWizardStep
     */
    public continue(): DefaultCypressChainable {
        this.waitOnAnimationCompleted();
        return cy.get(`${this.selector} .button-group:last .button--primary`);
    }

    /**
     * Get the secondary button element of the FWizardStep
     */
    public cancel(): DefaultCypressChainable {
        this.waitOnAnimationCompleted();
        return cy.get(`${this.selector} .button-group:last .button--secondary`);
    }

    /**
     * Get the body element of the FWizardStep
     */
    public body(): DefaultCypressChainable {
        return cy.get(`${this.selector} .wizard-step-body`);
    }

    /**
     * Get the steps number
     */
    public stepNumber(): DefaultCypressChainable {
        return cy
            .get(`${this.selector} [data-test="step-number"]`)
            .invoke("text");
    }

    /**
     * Get the title element
     */
    public title(): DefaultCypressChainable {
        return cy
            .get(`${this.selector} .wizard-step__header__title`)
            .then((element) => {
                if (element.children("a").length > 0) {
                    return cy.get(
                        `${this.selector} .wizard-step__header__title > a`,
                    );
                }
                return cy.get(`${this.selector} .wizard-step__header__title`);
            });
    }

    /**
     * Wait for open animation to finish.
     */
    public waitOnOpen(): void {
        this.animateExpand.waitOnOpen();
    }

    /**
     * Wait for close animation to finish.
     */
    public waitOnClose(): void {
        this.animateExpand.waitOnClose();
    }

    /**
     * Wait for any animation to complete.
     */
    public waitOnAnimationCompleted(): void {
        this.animateExpand.waitOnAnimationCompleted();
    }

    private animateExpand: IAnimateExpandPageobject;

    public constructor(selector: string) {
        this.selector = selector;
        this.errors = new FErrorListPageObject(`${this.selector} .error-list`);
        this.header = new FWizardStepHeaderPageobject(this.selector);
        this.animateExpand = new IAnimateExpandPageobject(this.selector);
    }

    /**
     * Get the status of the wizard step.
     * @see STATUS
     */
    public status(): Cypress.Chainable<string> {
        return this.el().then((el) =>
            el[0].className.replace(/.*wizard-step--(\w+).*/, "$1"),
        );
    }
}
