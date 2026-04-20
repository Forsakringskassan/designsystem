import { FSortFilterDatasetPageObject } from "@fkui/vue/cypress";
import { FTablePageObject } from "../../../../cypress";
import Example from "./FTableSortFilterLazyModeExample.vue";

const table = new FTablePageObject();
const sorter = new FSortFilterDatasetPageObject('[data-test="filter"]');

describe("FTableSortFilterLazyModeExample", () => {
    describe("Editing rows", () => {
        it("keeps row position after inline edit when sort is active", () => {
            cy.mount(Example);

            // Apply sort
            table.header(1).click();
            sorter.selectField.dropdown().should("contain.text", "Text (stigande)");

            // Edit first row - change "Apelsin" to "Aardvark"
            table.cell({ row: 1, col: 1 }).click();
            cy.focused().clear();
            cy.focused().type("Aardvark{enter}");

            // Row should stay in same position (not re-sorted)
            table.cell({ row: 1, col: 1 }).should("contain.text", "Aardvark");
        });

        it("resets sort attribute when row is edited with active sort", () => {
            cy.mount(Example);

            // Apply sort
            table.header(1).click();
            sorter.selectField.dropdown().should("contain.text", "Text (stigande)");

            // Edit first row
            table.cell({ row: 1, col: 1 }).click();
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
            table.cell({ row: 1, col: 1 }).should("contain.text", "Apelsin");

            // Edit Apelsin to "Citronella" (no longer matches "Ap")
            table.cell({ row: 1, col: 1 }).click();
            cy.focused().clear();
            cy.focused().type("Citronella{enter}");

            // Row should still be visible (filter not reapplied on edit)
            table.cell({ row: 1, col: 1 }).should("contain.text", "Citronella");
        });

        it("preserves selections when editing rows without active sort", () => {
            cy.mount(Example);

            // Select first row
            table.selectInput(1).click();
            table.selectInput(1).should("be.checked");

            // Edit without sorting
            table.cell({ row: 1, col: 1 }).click();
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
            table.header(1).click();
            table.cell({ row: 1, col: 1 }).click();
            cy.focused().clear();
            cy.focused().type("Aardvark{enter}");

            // Selection should still be on first row
            table.selectInput(1).should("be.checked");
        });
    });

    describe("Filtering", () => {
        it("resets selections when filter is applied", () => {
            cy.mount(Example);

            // Select all rows
            table.selectHeaderInput().click();
            table.selectInput(1).should("be.checked");
            table.selectInput(2).should("be.checked");
            table.selectInput(3).should("be.checked");

            // Apply filter
            sorter.textField.input().type("Ap");

            // Selections should be reset (no rows checked)
            table.selectHeaderInput().should("not.be.checked");
        });

        it("recomputes filter when filter is changed", () => {
            cy.mount(Example);

            // Apply filter for "Ap"
            sorter.textField.input().type("Ap");
            table.cell({ row: 1, col: 1 }).should("contain.text", "Apelsin");
            table.el().contains("Banan").should("not.exist");

            // Clear and apply new filter
            sorter.textField.input().clear();
            sorter.textField.input().type("B");
            table.cell({ row: 1, col: 1 }).should("contain.text", "Banan");
            table.el().contains("Apelsin").should("not.exist");
        });

        it("displays rows starting with filtered letter", () => {
            cy.mount(Example);

            // Filter for "C"
            sorter.textField.input().type("C");

            // Only Citron should be visible
            table.cell({ row: 1, col: 1 }).should("contain.text", "Citron");
            table.el().contains("Apelsin").should("not.exist");
            table.el().contains("Banan").should("not.exist");
        });
    });

    describe("Sorting", () => {
        it("recomputes ordering when user explicitly sorts ascending", () => {
            cy.mount(Example);

            // Apply sort ascending
            table.header(1).click();
            sorter.selectField.dropdown().should("contain.text", "Text (stigande)");
            
            // Should be in ascending order
            table.cell({ row: 1, col: 1 }).should("contain.text", "Apelsin");
            table.cell({ row: 2, col: 1 }).should("contain.text", "Banan");
            table.cell({ row: 3, col: 1 }).should("contain.text", "Citron");
        });

        it("recomputes ordering when user sorts descending", () => {
            cy.mount(Example);

            // Apply sort descending
            table.header(1).click();
            sorter.selectField.dropdown().select("Text (fallande)");
            
            // Should be in descending order
            table.cell({ row: 1, col: 1 }).should("contain.text", "Citron");
            table.cell({ row: 2, col: 1 }).should("contain.text", "Banan");
            table.cell({ row: 3, col: 1 }).should("contain.text", "Apelsin");
        });

        it("preserves selections when sort is changed", () => {
            cy.mount(Example);

            // Select first row (Apelsin)
            table.selectInput(1).click();
            table.selectInput(1).should("be.checked");

            // Apply sort ascending - Apelsin stays first
            table.header(1).click();
            sorter.selectField.dropdown().should("contain.text", "Text (stigande)");
            
            // First row (Apelsin) should still be checked
            table.selectInput(1).should("be.checked");

            // Change to sort descending - Citron moves to first
            sorter.selectField.dropdown().select("Text (fallande)");
            table.cell({ row: 1, col: 1 }).should("contain.text", "Citron");
            
            // Apelsin should now be at position 3 and still checked
            table.selectInput(3).should("be.checked");
        });
    });

    describe("Multiple selections with sort", () => {
        it("preserves multiple selections when sort is changed", () => {
            cy.mount(Example);

            // Bulk select all
            table.selectHeaderInput().click();
            table.selectInput(1).should("be.checked");
            table.selectInput(2).should("be.checked");
            table.selectInput(3).should("be.checked");

            // Apply sort ascending
            table.header(1).click();
            sorter.selectField.dropdown().should("contain.text", "Text (stigande)");
            
            // All should still be checked
            table.selectInput(1).should("be.checked");
            table.selectInput(2).should("be.checked");
            table.selectInput(3).should("be.checked");

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
            table.cell({ row: 1, col: 1 }).should("contain.text", "Banan");

            // Select Banan
            table.selectInput(1).click();
            table.selectInput(1).should("be.checked");

            // Sort ascending
            table.header(1).click();
            sorter.selectField.dropdown().should("contain.text", "Text (stigande)");

            // Banan should still be checked
            table.selectInput(1).should("be.checked");
        });

        it("resets selections when filter is applied but preserves on sort", () => {
            cy.mount(Example);

            // Select Apelsin
            table.selectInput(1).click();
            table.selectInput(1).should("be.checked");

            // Apply filter - selections reset
            sorter.textField.input().type("Ap");
            table.selectHeaderInput().should("not.be.checked");

            // Apply sort - selections still preserved (empty)
            table.header(1).click();
            table.selectHeaderInput().should("not.be.checked");
        });
    });

    describe("Recomputing ordering when explicitly sorted again", () => {
        it("recomputes ordering after edit and re-sort", () => {
            cy.mount(Example);

            // Apply sort
            table.header(1).click();
            table.cell({ row: 1, col: 1 }).click();
            cy.focused().clear();
            cy.focused().type("Aardvark{enter}");

            // Row should stay in position (lazy - no recompute yet)
            table.cell({ row: 1, col: 1 }).should("contain.text", "Aardvark");

            // Re-sort to trigger recompute
            sorter.selectField.dropdown().select("Text (fallande)");
            sorter.selectField.dropdown().select("Text (stigande)");

            // Aardvark should now be first (alphabetically after recompute)
            table.cell({ row: 1, col: 1 }).should("contain.text", "Aardvark");
        });

        it("shows correct order after sort toggle", () => {
            cy.mount(Example);

            // Sort ascending
            table.header(1).click();
            sorter.selectField.dropdown().should("contain.text", "Text (stigande)");
            table.cell({ row: 1, col: 1 }).should("contain.text", "Apelsin");

            // Change to descending
            sorter.selectField.dropdown().select("Text (fallande)");
            table.cell({ row: 1, col: 1 }).should("contain.text", "Citron");

            // Back to ascending
            sorter.selectField.dropdown().select("Text (stigande)");
            table.cell({ row: 1, col: 1 }).should("contain.text", "Apelsin");
        });
    });

    describe("UI state after operations", () => {
        it("shows sort dropdown reset to Välj after row edit", () => {
            cy.mount(Example);

            // Sort ascending
            table.header(1).click();
            sorter.selectField.dropdown().should("contain.text", "Text (stigande)");

            // Edit a cell
            table.cell({ row: 2, col: 1 }).click();
            cy.focused().clear();
            cy.focused().type("Beta{enter}");

            // Sort should reset to Välj
            sorter.selectField.dropdown().should("contain.text", "Välj");
        });

        it("maintains sort after explicit user sort without edit", () => {
            cy.mount(Example);

            // Sort ascending
            table.header(1).click();
            sorter.selectField.dropdown().should("contain.text", "Text (stigande)");

            // Change to descending (user-initiated sort)
            sorter.selectField.dropdown().select("Text (fallande)");
            sorter.selectField.dropdown().should("contain.text", "Text (fallande)");
        });
    });
});
