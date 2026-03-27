import { FStaticFieldPageObject } from "../../cypress";
import FStaticFieldInput from "./examples/FStaticFieldInput.vue";
import FStaticFieldTooltipDescription from "./examples/FStaticFieldTooltipDescription.vue";

describe("FStaticField", () => {
    it("static field with textfield: should provide a page object that can access any necessary elements", () => {
        cy.mount(FStaticFieldInput);
        const staticField = new FStaticFieldPageObject(
            "[data-test] .output-field",
        );
        staticField.label.el().eq(0).should("have.trimmedText", "Beskrivning");
        staticField.tooltip.el().should("not.exist");
        staticField
            .body()
            .should("have.trimmedText", "En liten statisk beskrivning.");
    });

    it("static field with tooltip: should provide a page object that can access any necessary elements", () => {
        cy.mount(FStaticFieldTooltipDescription);
        const staticFieldWithTooltip = new FStaticFieldPageObject(
            "[data-test] .output-field",
        );
        staticFieldWithTooltip.label.el().should("contain.text", "Etikett");
        staticFieldWithTooltip.tooltip.el().should("not.be.visible");
        staticFieldWithTooltip.tooltip.iButton().click();
        staticFieldWithTooltip.tooltip.el().should("be.visible");
        staticFieldWithTooltip
            .body()
            .should("have.trimmedText", "En liten statisk text.");
    });
});
