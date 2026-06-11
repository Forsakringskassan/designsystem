import { FFieldsetPageObject } from "../../../cypress";
import FCheckboxFieldLiveExample from "./FCheckboxFieldLiveExample.vue";
import FCheckboxGroupSingle from "./FCheckboxGroupSingle.vue";
import FCheckboxGroupValues from "./FCheckboxGroupValues.vue";

/**
 * Toggle all checkboxes in a fieldset and check the new value
 * @param fieldSet - the fieldset containing all checkboxes.
 */
function toggleAll(fieldSet: FFieldsetPageObject, selected: boolean): void {
    cy.wrap(`Toggle fieldset: ${selected}...`).then(() => {
        fieldSet.numberOfCheckboxes().then((nbrOf) => {
            for (let index = 0; index < nbrOf; index++) {
                const selector = `.checkbox:nth(${index})`;
                fieldSet.checkBox(selector).select();
                fieldSet.checkBox(selector).isSelected().should("eq", selected);
            }
        });
    });
}

describe("Basic functionality in FCheckboxFieldLiveExample", () => {
    const fieldset = new FFieldsetPageObject(".live-example__example fieldset");

    beforeEach(() => {
        cy.mount(FCheckboxFieldLiveExample);
    });

    it("should confirm that the basic features of the live example work as intended", () => {
        cy.get(".live-example__example").should("exist");
        fieldset.numberOfCheckboxes().should("equal", 3);
        toggleAll(fieldset, true); // Select
        toggleAll(fieldset, false); // Deselect
    });
});

describe("Basic functionality in FCheckboxGroupSingle", () => {
    const fieldset = new FFieldsetPageObject(".fieldset");

    beforeEach(() => {
        cy.mount(FCheckboxGroupSingle);
    });

    it("should confirm that the basic features of the live example work as intended", () => {
        fieldset.el().should("exist");
        fieldset.numberOfCheckboxes().should("equal", 1);
        toggleAll(fieldset, true); // Select
        toggleAll(fieldset, false); // Deselect
        cy.get("[data-test=checked-boxes]").should(
            "contain.text",
            "Kryssruta ej kryssad",
        );
    });
});

describe("Basic functionality in FCheckboxGroupValues", () => {
    const fieldset = new FFieldsetPageObject(".fieldset");

    const checkboxField = {
        first: ".checkbox:nth(0)",
        second: ".checkbox:nth(1)",
    };

    beforeEach(() => {
        cy.mount(FCheckboxGroupValues);
    });

    it("should confirm that the basic features of the live example work as intended", () => {
        fieldset.el().should("exist");
        fieldset.numberOfCheckboxes().should("equal", 2);
        toggleAll(fieldset, true); // Select
        toggleAll(fieldset, false); // Deselect

        fieldset
            .checkBox(checkboxField.first)
            .value()
            .should("eq", "Om du bor eller arbetar utomlands");

        fieldset
            .checkBox(checkboxField.second)
            .value()
            .should("eq", "[object Object]");
    });
});
