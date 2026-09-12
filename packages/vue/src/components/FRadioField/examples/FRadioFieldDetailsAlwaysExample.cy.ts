import { FRadioGroupPageObject } from "../../../cypress";
import Example from "./FRadioFieldDetailsAlwaysExample.vue";

describe("FRadioFieldDetailsAlwaysExample", () => {
    const fieldset = new FRadioGroupPageObject(".fieldset");

    beforeEach(() => {
        cy.mount(Example);
    });

    it("should display details for all alternatives", () => {
        fieldset
            .radioButton(".radio-button:nth(0)")
            .details()
            .should("be.visible");
        fieldset
            .radioButton(".radio-button:nth(1)")
            .details()
            .should("be.visible");
    });
});
