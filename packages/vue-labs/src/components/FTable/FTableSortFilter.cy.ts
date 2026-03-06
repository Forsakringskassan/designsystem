import { FSortFilterDatasetPageObject } from "@fkui/vue/cypress";
import { FTablePageObject } from "../../cypress";

import FTableBulkTestExample from "./examples/FTableBulkTestExample.vue";

const table = new FTablePageObject();

describe("7.3 Row Selection Behavior with Filtering and Sorting", () => {
    it("should retain row selections after applying a filter", () => {
        const sorter = new FSortFilterDatasetPageObject(".sort-filter-dataset");
        cy.mount(FTableBulkTestExample);
        table.selectInput(1).focus().click();
        table.selectInput(1).should("be.checked");

        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", true);

        sorter.textField.input().type("Ape");

        table.selectInput(1).should("be.checked");
        table
            .selectHeaderInput()
            .should("be.checked")
            .and("have.prop", "indeterminate", true);
    });

    it("should retain row selections when sorting is applied", () => {
        const sorter = new FSortFilterDatasetPageObject('[data-test="filter"]');

        cy.mount(FTableBulkTestExample);

        table.selectInput(2).focus().click();
        table.selectInput(2).should("be.checked");
        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", true);
        //sort ascending
        table.header(2).click();
        table.selectInput(2).should("be.checked");
        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", true);
        //sort descending
        table.header(2).click();
        table.selectInput(1).should("be.checked");
        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", true);
        //sort ascending
        sorter.selectField.dropdown().select("Text (stigande)");
        table.selectInput(2).should("be.checked");
        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", true);
        //sort descending
        sorter.selectField.dropdown().select("Text (fallande)");
        table.selectInput(1).should("be.checked");
        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", true);
    });
});

describe("9 Sorted and filtered table with editable cell", () => {
    it("9.5 should sort, filter, edit a cell and then verify the table is unsorted", () => {
        const sorter = new FSortFilterDatasetPageObject(".sort-filter-dataset");
        cy.mount(FTableBulkTestExample);
        // Gå med pilarna till sorteringsbar rubrik och sortera krav 4.3
        table.header(2).click();
        // Verifiera dropdown-sorteringen ska reflektera rubriksorteringen
        sorter.selectField.dropdown().should("contain.text", "Text (stigande)");
        // Filtrera  och verifiera krav 9.2 Sortering sker på hela tabellen och inte bara de rader som visas.
        // Redigera tex inmatningsfält som påverka sorteringen
        table.cell({ row: 1, col: 2 }).click();
        cy.focused().clear();
        cy.focused().type("Citron{enter}");
        // Verifiera att värdet i filtreringen är kvar
        table.cell({ row: 1, col: 2 }).should("contain.text", "Citron");
        // Verifiera att tabellen visas osorterad både på dropdown och kolumnrubrik
        sorter.selectField.dropdown().should("contain.text", "Välj");
        table.header(2).get("svg").should("have.class", "f-icon-sort");
        // Verifiera att radordningen är oförändrad
    });
});
