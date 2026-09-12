import { FRadioGroupPageObject } from "../../../cypress";
import Example from "./FRadioFieldLiveExample.vue";

describe("FRadioFieldLiveExample", () => {
    const fieldset = new FRadioGroupPageObject(
        ".live-example__example fieldset",
    );
    enum Answer {
        Yes = ".radio-button:nth(0)",
        No = ".radio-button:nth(1)",
    }

    describe("Basic functionality in FRadioFieldLiveExample", () => {
        beforeEach(() => {
            cy.mount(Example);
        });

        it("should confirm that the basic features of the live example work as intended", () => {
            cy.get(".live-example__container").should("exist");

            fieldset.numberOfOptions().should("equal", 2);

            fieldset
                .radioButton(Answer.Yes)
                .isSelected()
                .should("equal", false);
            fieldset.radioButton(Answer.No).isSelected().should("equal", false);

            fieldset.radioButton(Answer.Yes).select();
            fieldset.radioButton(Answer.Yes).isSelected().should("equal", true);
            fieldset.radioButton(Answer.No).select();

            fieldset.radioButton(Answer.No).isSelected().should("equal", true);

            fieldset
                .radioButton(Answer.Yes)
                .isSelected()
                .should("equal", false);
        });
    });
});
