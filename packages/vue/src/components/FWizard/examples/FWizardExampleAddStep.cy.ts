import { FWizardPageobject } from "../../../cypress";
import FWizardExampleAddStep from "./FWizardExampleAddStep.vue";

const wizard = new FWizardPageobject(".wizard");

it("should log message from beforeNext callback", () => {
    cy.window()
        .its("console")
        .then((console) => {
            cy.spy(console, "log").as("log");
        });

    cy.mount(FWizardExampleAddStep);

    wizard.getStep(0).continue().click();
    wizard.getStep(1).continue().click();

    cy.get("@log").should(
        "be.calledWith",
        "Här kanska man anropar backend för att kontrollera något?",
    );
});
