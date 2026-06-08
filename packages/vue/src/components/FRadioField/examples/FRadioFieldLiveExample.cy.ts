import {
    FCheckboxFieldPageObject,
    FFieldsetPageObject,
    FRadioGroupPageObject,
} from "../../../cypress";
import FRadioField from "../FRadioField.vue";
import Example from "./FRadioFieldLiveExample.vue";

describe("FRadioFieldLiveExample", () => {
    const fieldset = new FRadioGroupPageObject(
        ".live-example__example fieldset",
    );
    enum barnover18 {
        Ja = ".radio-button:nth(0)",
        Nej = ".radio-button:nth(1)",
    }

    describe("Basic functionality in FRadioFieldLiveExample", () => {
        beforeEach(() => {
            cy.mount(Example);
        });

        it("should confirm that the basic features of the live example work as intended", () => {
            cy.get(".live-example__container").should("exist");

            fieldset.numberOfOptions().should("equal", 2);

            fieldset
                .radioButton(barnover18.Ja)
                .isSelected()
                .should("equal", false);
            fieldset
                .radioButton(barnover18.Nej)
                .isSelected()
                .should("equal", false);

            fieldset.radioButton(barnover18.Ja).select();
            fieldset
                .radioButton(barnover18.Ja)
                .isSelected()
                .should("equal", true);
            fieldset.radioButton(barnover18.Nej).select();

            fieldset
                .radioButton(barnover18.Nej)
                .isSelected()
                .should("equal", true);

            fieldset
                .radioButton(barnover18.Ja)
                .isSelected()
                .should("equal", false);
        });
    });
});
