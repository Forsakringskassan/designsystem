import { FSortFilterDatasetPageObject } from "@fkui/vue/cypress";
import { FTablePageObject } from "../../../cypress";
import Example from "./examples/FTableBulkSortFilterExample.vue";

const table = new FTablePageObject();
const sorter = new FSortFilterDatasetPageObject('[data-test="filter"]');

describe("7.3 Row Selection Behavior with Filtering and Sorting", () => {
    // eslint-disable-next-line mocha/no-pending-tests -- temporarily disabled, will be enabled with upcoming sortfilter updates.
    it.skip("clears selection when a new filter is applied", () => {
        cy.mount(Example);

        table.selectInput(1).check();
        table.selectInput(1).should("be.checked");

        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", true);

        sorter.textField.input().type("Ape");

        table.selectInput(1).should("not.be.checked");
        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", false);
    });

    it("retains selection when sorting changes", () => {
        cy.mount(Example);

        table.selectInput(2).focus().click();
        table.selectInput(2).should("be.checked");
        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", true);
        // sort ascending via column header
        table.header(2).click();
        table.selectInput(2).should("be.checked");
        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", true);
        // sort descending via column header
        table.header(2).click();
        table.selectInput(1).should("be.checked");
        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", true);
        // sort ascending via dropdown
        sorter.selectField.dropdown().select("Text (stigande)");
        table.selectInput(2).should("be.checked");
        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", true);
        // sort descending via dropdown
        sorter.selectField.dropdown().select("Text (fallande)");
        table.selectInput(1).should("be.checked");
        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", true);
    });

    it("selecting all on a filtered result selects only filtered rows", () => {
        cy.mount(Example);
        table.rows().should("have.length", 2);
        sorter.textField.input().type("b");
        table.rows().should("have.length", 1);
        table.selectHeaderInput().click();

        cy.get("[data-test=selected-count]").should(
            "contain.text",
            "Valda rader: 1",
        );
    });
});

describe("7.7 Dataset change resets selection ", () => {
    it("recalculates bulk state when rows are added and consumer removes selected rows", () => {
        cy.mount(Example);

        table.selectHeaderInput().check();

        table
            .selectHeaderInput()
            .should("be.checked")
            .and("have.prop", "indeterminate", false);
        table.selectInput(1).should("be.checked");
        table.selectInput(2).should("be.checked");

        cy.contains("button", "Lägg till rad").click();

        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", true);
        table.selectInput(1).should("be.checked");
        table.selectInput(2).should("be.checked");
        table.selectInput(3).should("not.be.checked");

        table.selectInput(3).check();

        table
            .selectHeaderInput()
            .should("be.checked")
            .and("have.prop", "indeterminate", false);

        cy.contains("button", "Ta bort markerade rader").click();

        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", false);
    });
});
