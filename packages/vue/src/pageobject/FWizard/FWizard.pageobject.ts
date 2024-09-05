import { type BasePageObject, type DefaultCypressChainable } from "../common";
import { FWizardStepPageobject } from "./FWizardStep.pageobject";

/**
 * pageobject for the FWizard component
 *
 * @public
 * @param selector - CSS seletor to the FWizard object
 */
export class FWizardPageobject implements BasePageObject {
    public selector: string;
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * Get all FWizardSteps in the FWizard
     *
     * @returns all steps
     */
    public steps(): DefaultCypressChainable {
        return cy.get(`${this.selector} .wizard-step`);
    }

    /**
     * Get specfic step in wizard.
     *
     * @param index - step to retrieve (0-indexed)
     * @returns FWizardStepPageObject
     */
    public getStep(index: number): FWizardStepPageobject {
        return new FWizardStepPageobject(
            `${this.selector} .wizard-step:nth(${index})`,
        );
    }

    /**
     * Turns off the animation att css class level.
     */
    public turnOffAnimation(): void {
        cy.get(".wizard-step__connector").invoke("css", "transition", "none");
    }

    public constructor(selector: string) {
        this.selector = selector;
    }
}
