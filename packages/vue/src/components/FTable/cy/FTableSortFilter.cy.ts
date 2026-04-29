import { FTablePageObject } from "../../../cypress";
import Example from "./examples/FTableSortFilterExample.vue";
import { FSortFilterDatasetPageObject } from "@fkui/vue/cypress";

const table = new FTablePageObject();
const sorter = new FSortFilterDatasetPageObject('[data-test="filter"]');

describe("7.3 Row Selection Behavior with Filtering and Sorting", () => {
    it("clears selection when a new filter is applied", () => {
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
        table.selectInput(5).should("be.checked");
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
        table.selectInput(5).should("be.checked");
        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", true);
    });

    it("selecting all on a filtered result selects only filtered rows", () => {
        cy.mount(Example);
        table.rows().should("have.length", 6);
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
        table.selectInput(6).should("be.checked");

        cy.contains("button", "Lägg till rad").click();

        table
            .selectHeaderInput()
            .should("not.be.checked")
            .and("have.prop", "indeterminate", true);
        table.selectInput(1).should("be.checked");
        table.selectInput(6).should("be.checked");
        table.selectInput(7).should("not.be.checked");

        table.selectInput(7).check();

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

describe("9 Sorted and filtered table with editable cell", () => {
    it("9.5 should sort, filter, edit a cell and then verify the table is unsorted", () => {
        const sorter = new FSortFilterDatasetPageObject(".sort-filter-dataset");
        cy.mount(Example);
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

describe("Editing rows", () => {
    it("keeps row position after inline edit when sort is active", () => {
        cy.mount(Example);

        // Apply sort
        sorter.selectField.dropdown().select("Text (fallande)");
        table.cell({ row: 1, col: 2 }).should("contain.text", "Granatapple");

        // Edit first row - change "Granatapple" to "Aardvark"
        table.cell({ row: 1, col: 2 }).click();
        cy.focused().clear();
        cy.focused().type("Aardvark{enter}");

        // Row should stay in same position (not re-sorted)
        table.cell({ row: 1, col: 2 }).should("contain.text", "Aardvark");
    });

    it("resets sort attribute when row is edited with active sort", () => {
        cy.mount(Example);

        // Apply sort
        table.header(2).click();
        sorter.selectField.dropdown().should("contain.text", "Text (stigande)");

        // Edit first row
        table.cell({ row: 1, col: 2 }).click();
        cy.focused().clear();
        cy.focused().type("Aardvark{enter}");

        // Sort should be reset to "Välj"
        sorter.selectField.dropdown().should("contain.text", "Välj");
    });

    it("keeps row visible even if filter no longer matches after edit", () => {
        cy.mount(Example);

        // Apply filter for "Ap"
        sorter.textField.input().type("Ap");

        // Should show only Apelsin
        table.cell({ row: 1, col: 2 }).should("contain.text", "Apelsin");

        // Edit Apelsin to "Citronella" (no longer matches "Ap")
        table.cell({ row: 1, col: 2 }).click();
        cy.focused().clear();
        cy.focused().type("Citronella{enter}");

        // Row should still be visible (filter not reapplied on edit)
        table.cell({ row: 1, col: 2 }).should("contain.text", "Citronella");
    });

    it("preserves selections when editing rows without active sort", () => {
        cy.mount(Example);

        // Select first row
        table.selectInput(1).click();
        table.selectInput(1).should("be.checked");

        // Edit without sorting
        table.cell({ row: 1, col: 2 }).click();
        cy.focused().clear();
        cy.focused().type("Aardvark{enter}");

        // Selection should be preserved (first row stays selected)
        table.selectInput(1).should("be.checked");
    });

    it("preserves selections when editing rows with active sort", () => {
        cy.mount(Example);

        // Select first row (Apelsin)
        table.selectInput(1).click();
        table.selectInput(1).should("be.checked");

        // Apply sort and edit
        sorter.selectField.dropdown().select("Text (fallande)");
        table.cell({ row: 1, col: 2 }).click();
        cy.focused().clear();
        cy.focused().type("Aardvark{enter}");

        // Selection should still remain on Apelsin row
        table.selectInput(6).should("be.checked");
    });
});

describe("Filtering", () => {
    it("resets selections when filter is applied", () => {
        cy.mount(Example);

        // Select all rows
        table.selectHeaderInput().click();
        table.selectInput(1).should("be.checked");
        table.selectInput(6).should("be.checked");

        // Apply filter
        sorter.textField.input().type("Ap");

        // Selections should be reset (no rows checked)
        table.selectHeaderInput().should("not.be.checked");
    });

    it("resets selection state when filter changes on empty table", () => {
        cy.mount(Example);

        // Apply filter
        sorter.textField.input().type("B");

        // Remove all filtered rows
        table.selectHeaderInput().click();
        table.selectHeaderInput().should("be.checked");
        cy.contains("button", "Ta bort markerade rader").click();
        table.selectHeaderInput().should("not.be.checked");

        // Check "select all" despite nothing left to select
        table.selectHeaderInput().click();
        table.selectHeaderInput().should("be.checked");

        // Clear filter
        sorter.textField.input().clear();

        // Selections should be reset (no rows checked)
        table.selectHeaderInput().should("not.be.checked");
    });

    it("recomputes filter when filter is changed", () => {
        cy.mount(Example);

        // Apply filter for "Ap"
        sorter.textField.input().type("Ap");
        table.cell({ row: 1, col: 2 }).should("contain.text", "Apelsin");
        table.el().contains("Banan").should("not.exist");

        // Clear and apply new filter
        sorter.textField.input().clear();
        sorter.textField.input().type("B");
        table.cell({ row: 1, col: 2 }).should("contain.text", "Banan");
        table.el().contains("Apelsin").should("not.exist");
    });

    it("displays rows starting with filtered letter", () => {
        cy.mount(Example);

        // Filter for "C"
        sorter.textField.input().type("C");

        // Only Citron should be visible
        table.cell({ row: 1, col: 2 }).should("contain.text", "Citron");
        table.el().contains("Apelsin").should("not.exist");
        table.el().contains("Banan").should("not.exist");
    });
});

describe("Sorting", () => {
    it("recomputes ordering when user sorts descending", () => {
        cy.mount(Example);

        // Apply sort descending
        sorter.selectField.dropdown().select("Text (fallande)");

        // Should be in descending order
        table.cell({ row: 1, col: 2 }).should("contain.text", "Granatapple");
        table.cell({ row: 6, col: 2 }).should("contain.text", "Apelsin");
    });

    it("preserves selections when sort is changed", () => {
        cy.mount(Example);

        // Select first row (Apelsin)
        table.selectInput(1).click();
        table.selectInput(1).should("be.checked");

        // Apply sort ascending - Apelsin stays first
        sorter.selectField.dropdown().select("Text (stigande)");

        // First row (Apelsin) should still be checked
        table.selectInput(1).should("be.checked");

        // Change to sort descending - Granatapple moves to first
        sorter.selectField.dropdown().select("Text (fallande)");
        table.cell({ row: 1, col: 2 }).should("contain.text", "Granatapple");

        // Apelsin should now be at position 6 and still checked
        table.selectInput(6).should("be.checked");
    });
});

describe("Multiple selections with sort", () => {
    it("preserves multiple selections when sort is changed", () => {
        cy.mount(Example);

        // Bulk select all
        table.selectHeaderInput().click();
        table.selectInput(1).should("be.checked");
        table.selectInput(6).should("be.checked");

        // Apply sort ascending
        sorter.selectField.dropdown().select("Text (stigande)");

        // All should still be checked
        table.selectInput(1).should("be.checked");
        table.selectInput(6).should("be.checked");

        // Change to descending - bulk checkbox should still show checked status
        sorter.selectField.dropdown().select("Text (fallande)");
        table.selectHeaderInput().should("be.checked");
    });
});

describe("Combined sort and filter", () => {
    it("preserves selections when sorting with active filter", () => {
        cy.mount(Example);

        // Apply filter for "B" (only Banan matches)
        sorter.textField.input().type("B");
        table.cell({ row: 1, col: 2 }).should("contain.text", "Banan");

        // Select Banan
        table.selectInput(1).click();
        table.selectInput(1).should("be.checked");

        // Sort ascending
        sorter.selectField.dropdown().select("Text (stigande)");

        // Banan should still be checked
        table.selectInput(1).should("be.checked");
    });
});

describe("Recomputing ordering when explicitly sorted again", () => {
    it("recomputes ordering after edit and re-sort", () => {
        cy.mount(Example);

        // Apply sort
        sorter.selectField.dropdown().select("Text (fallande)");
        table.cell({ row: 1, col: 2 }).click();
        cy.focused().clear();
        cy.focused().type("Aardvark{enter}");

        // Row should stay in position (lazy - no recompute yet)
        table.cell({ row: 1, col: 2 }).should("contain.text", "Aardvark");

        // Re-sort to trigger recompute
        sorter.selectField.dropdown().select("Text (fallande)");

        // Aardvark should now be last (alphabetically after recompute)
        table.cell({ row: 6, col: 2 }).should("contain.text", "Aardvark");
    });

    it("shows correct order after sort toggle", () => {
        cy.mount(Example);

        // Sort ascending
        sorter.selectField.dropdown().select("Text (stigande)");
        table.cell({ row: 1, col: 2 }).should("contain.text", "Apelsin");

        // Change to descending
        sorter.selectField.dropdown().select("Text (fallande)");
        table.cell({ row: 1, col: 2 }).should("contain.text", "Granatapple");

        // Back to ascending
        sorter.selectField.dropdown().select("Text (stigande)");
        table.cell({ row: 1, col: 2 }).should("contain.text", "Apelsin");
    });
});

describe("UI state after operations", () => {
    it("shows sort dropdown reset to Välj after row edit", () => {
        cy.mount(Example);

        // Sort ascending
        sorter.selectField.dropdown().select("Text (stigande)");
        sorter.selectField.dropdown().should("contain.text", "Text (stigande)");

        // Edit a cell
        table.cell({ row: 2, col: 2 }).click();
        cy.focused().clear();
        cy.focused().type("Beta{enter}");

        // Sort should reset to Välj
        sorter.selectField.dropdown().should("contain.text", "Välj");
    });
});
