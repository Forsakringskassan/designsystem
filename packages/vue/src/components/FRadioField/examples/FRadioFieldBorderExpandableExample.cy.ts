import { FRadioGroupPageObject } from "../../../cypress";
import Example from "./FRadioFieldBorderExpandableExample.vue";

describe("FRadioFieldBorderExpandableExample", () => {
    const fieldset = new FRadioGroupPageObject(".fieldset");
    const firstAlternative = fieldset.radioButton(".radio-button:nth(0)");
    const secondAlternative = fieldset.radioButton(".radio-button:nth(1)");
    const thirdAlternative = fieldset.radioButton(".radio-button:nth(2)");

    beforeEach(() => {
        cy.mount(Example);
    });

    it("should only expand details within the selected bordered alternative", () => {
        fieldset.el().should("have.class", "radio-button-group--border");
        fieldset.numberOfOptions().should("equal", 3);
        firstAlternative.details().should("not.exist");
        secondAlternative.details().should("not.exist");
        thirdAlternative.details().should("not.exist");

        firstAlternative.select();
        firstAlternative.details().should("be.visible");
        secondAlternative.details().should("not.exist");
        thirdAlternative.details().should("not.exist");

        secondAlternative.select();
        firstAlternative.details().should("not.exist");
        secondAlternative.details().should("be.visible");
        thirdAlternative.details().should("not.exist");
    });
});
