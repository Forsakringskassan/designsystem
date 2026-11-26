import { FRadioGroupPageObject } from "../../../cypress";
import Example from "./FRadioFieldHorizontalExample.vue";

describe("FRadioFieldHorizontalExample", () => {
    const fieldset = new FRadioGroupPageObject(".fieldset");
    const firstAlternative = fieldset.radioButton(".radio-button:nth(0)");
    const secondAlternative = fieldset.radioButton(".radio-button:nth(1)");

    beforeEach(() => {
        cy.viewport(1024, 600);
        cy.mount(Example);
    });

    it("should display two horizontal alternatives and allow one selection", () => {
        fieldset.el().should("have.class", "radio-button-group--horizontal");
        fieldset.numberOfOptions().should("equal", 2);

        firstAlternative.select();
        firstAlternative.isSelected().should("equal", true);
        secondAlternative.isSelected().should("equal", false);

        secondAlternative.select();
        firstAlternative.isSelected().should("equal", false);
        secondAlternative.isSelected().should("equal", true);
    });
});
