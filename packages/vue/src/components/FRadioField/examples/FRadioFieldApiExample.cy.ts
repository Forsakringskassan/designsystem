import { FTooltipPageObject } from "../../../cypress";
import Example from "./FRadioFieldApiExample.vue";

describe("FRadioFieldApiExample", () => {
    beforeEach(() => {
        cy.mount(Example);
    });

    it("should update the example from the content controls", () => {
        const tooltip = new FTooltipPageObject(
            ".live-example__example .tooltip",
        );

        cy.get(".live-example__example").within(() => {
            cy.contains("Etikettrubrik").should("be.visible");
            cy.contains("Label 1").should("be.visible");
            cy.contains("Label 2").should("be.visible");
            cy.contains("Hjälptext").should("not.exist");
            cy.contains("Utvidgad text").should("not.exist");
        });

        cy.get(".live-example__controls").contains("label", "Tooltip").click();
        tooltip.iButton().click();
        tooltip.header().should("contain", "Rubrik");
        tooltip.body().should("contain", "Text");

        cy.get(".live-example__controls")
            .contains("label", "Hjälptext")
            .click();
        cy.get(".live-example__controls select").select("always");

        cy.get(".live-example__example").within(() => {
            cy.contains("Hjälptext").should("be.visible");
            cy.contains("Utvidgad text").should("be.visible");
        });
    });
});
