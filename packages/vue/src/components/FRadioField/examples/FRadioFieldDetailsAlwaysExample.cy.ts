import { FRadioGroupPageObject } from "../../../cypress";
import Example from "./FRadioFieldDetailsAlwaysExample.vue";

describe("FRadioFieldDetailsAlwaysExample", () => {
    const fieldset = new FRadioGroupPageObject(".fieldset");
    const firstAlternative = fieldset.radioButton(".radio-button:nth(0)");
    const secondAlternative = fieldset.radioButton(".radio-button:nth(1)");
    const thirdAlternative = fieldset.radioButton(".radio-button:nth(2)");
    const fourthAlternative = fieldset.radioButton(".radio-button:nth(3)");

    beforeEach(() => {
        cy.mount(Example);
    });

    it("should display details only for alternatives with supplementary information", () => {
        fieldset.numberOfOptions().should("equal", 4);
        firstAlternative.details().should("be.visible");
        secondAlternative.details().should("be.visible");
        thirdAlternative.details().should("be.visible");
        fourthAlternative.details().should("not.exist");
    });
});
