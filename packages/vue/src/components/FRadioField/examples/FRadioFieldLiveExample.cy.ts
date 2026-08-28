import { FRadioGroupPageObject } from "../../../cypress";
import FRadioFieldBorderExpandableExample from "./FRadioFieldBorderExpandableExample.vue";
import FRadioFieldDetailsAlwaysExample from "./FRadioFieldDetailsAlwaysExample.vue";
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

describe("FRadioFieldDetailsAlwaysExample", () => {
    const fieldset = new FRadioGroupPageObject(".fieldset");

    beforeEach(() => {
        cy.mount(FRadioFieldDetailsAlwaysExample);
    });

    it("should display details for all alternatives", () => {
        cy.get(".col").should("have.class", "col--md-9");
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

describe("FRadioFieldBorderExpandableExample", () => {
    const fieldset = new FRadioGroupPageObject(".fieldset");
    const firstAlternative = fieldset.radioButton(".radio-button:nth(0)");
    const secondAlternative = fieldset.radioButton(".radio-button:nth(1)");
    const thirdAlternative = fieldset.radioButton(".radio-button:nth(2)");

    beforeEach(() => {
        cy.mount(FRadioFieldBorderExpandableExample);
    });

    it("should only expand details within the selected bordered alternative", () => {
        cy.get(".col").should("have.class", "col--md-9");
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
