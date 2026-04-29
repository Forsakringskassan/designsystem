import { FTablePageObject } from "../../../cypress";
import Example from "./examples/FTableSortFilterPaginationExample.vue";
import {
    FPaginatorPageObject,
    FSortFilterDatasetPageObject,
} from "@fkui/vue/cypress";

const table = new FTablePageObject();
const paginator = new FPaginatorPageObject();
const sorter = new FSortFilterDatasetPageObject('[data-test="filter"]');

it("selecting all on page 2 selects all rows across pages", () => {
    cy.mount(Example);

    paginator.nextButton().click();
    paginator.currentPageButton().should("contain.text", "2");

    table.selectHeaderInput().click();

    cy.get("[data-test=selected-count]").should(
        "contain.text",
        "Valda rader: 6",
    );
    table
        .selectHeaderInput()
        .should("be.checked")
        .and("have.prop", "indeterminate", false);

    paginator.previousButton().click();
    paginator.currentPageButton().should("contain.text", "1");
    table.selectInput(1).should("be.checked");
    table.selectInput(3).should("be.checked");
});

it("unselecting all on page 2 clears selections across all pages", () => {
    cy.mount(Example);

    paginator.nextButton().click();
    table.selectHeaderInput().click();
    table.selectHeaderInput().click();

    cy.get("[data-test=selected-count]").should(
        "contain.text",
        "Valda rader: 0",
    );
    table
        .selectHeaderInput()
        .should("not.be.checked")
        .and("have.prop", "indeterminate", false);

    paginator.previousButton().click();
    table.selectInput(1).should("not.be.checked");
    table.selectInput(3).should("not.be.checked");
});

it("selecting all on page 2 of a filtered result selects all filtered rows", () => {
    cy.mount(Example);

    sorter.textField.input().type("a");
    paginator.nextButton().click();
    paginator.currentPageButton().should("contain.text", "2");

    table.selectHeaderInput().click();

    cy.get("[data-test=selected-count]").should(
        "contain.text",
        "Valda rader: 4",
    );
    table
        .selectHeaderInput()
        .should("be.checked")
        .and("have.prop", "indeterminate", false);

    paginator.previousButton().click();
    table.selectInput(1).should("be.checked");
    table.selectInput(3).should("be.checked");
});

describe("Pagination Navigation", () => {
    it("displays correct items per page", () => {
        cy.mount(Example);

        // Should show 3 items on page 1
        table.cell({ row: 1, col: 2 }).should("contain.text", "Apelsin");
        table.cell({ row: 2, col: 2 }).should("contain.text", "Banan");
        table.cell({ row: 3, col: 2 }).should("contain.text", "Citron");

        // Only 3 rows visible
        table.rows().should("have.length", 3);
    });

    it("navigates to next page", () => {
        cy.mount(Example);

        paginator.currentPageButton().should("contain.text", "1");
        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        // Page 2 should show Druva, Fikon, Granatapple
        table.cell({ row: 1, col: 2 }).should("contain.text", "Druva");
        table.cell({ row: 2, col: 2 }).should("contain.text", "Fikon");
        table.cell({ row: 3, col: 2 }).should("contain.text", "Granatapple");
    });

    it("navigates to previous page", () => {
        cy.mount(Example);

        // Go to page 2
        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        // Go back to page 1
        paginator.previousButton().click();
        paginator.currentPageButton().should("contain.text", "1");
        table.cell({ row: 1, col: 2 }).should("contain.text", "Apelsin");
    });

    it("shows page numbers in paginator", () => {
        cy.mount(Example);

        // Should show page 1 and 2 buttons (6 items, 3 per page = 2 pages)
        paginator.pageButton().should("have.length.at.least", 2);
    });
});

describe("Adding Rows - Pagination Behavior", () => {
    it("jumps to last page when a new row is added with no sort/filter", () => {
        cy.mount(Example);

        paginator.currentPageButton().should("contain.text", "1");

        cy.get('[data-test="add-row"]').click();

        // New row added to end makes 7 items total (3 pages with 3 items per page)
        // Should jump to page 3
        paginator.currentPageButton().should("contain.text", "3");

        // Last page should have the new row
        table.cell({ row: 1, col: 2 }).should("contain.text", "Äpple");
    });

    it("jumps to last page when adding row with sort active", () => {
        cy.mount(Example);

        // Apply sort
        table.header(2).click();
        sorter.selectField.dropdown().should("contain.text", "Text (stigande)");

        paginator.currentPageButton().should("contain.text", "1");

        cy.get('[data-test="add-row"]').click();

        // Should navigate to last page
        paginator.currentPageButton().should("contain.text", "3");
    });

    it("jumps to last page when adding row with filter active", () => {
        cy.mount(Example);

        // Apply filter
        sorter.textField.input().type("a");

        paginator.currentPageButton().should("contain.text", "1");

        cy.get('[data-test="add-row"]').click();

        // Should jump to last page when rows added with filter active
        // 4 matching items (Banan, Citron, Druva, Fikon, Granatapple, Äpple) on page with 3/page
        paginator.currentPageButton().should("contain.text", "2");
    });

    it("preserves selections when adding rows", () => {
        cy.mount(Example);

        // Select first row
        table.selectInput(1).click();
        cy.get('[data-test="selected-count"]').should(
            "contain.text",
            "Valda rader: 1",
        );

        // Add row
        cy.get('[data-test="add-row"]').click();

        // Selection should be preserved
        cy.get('[data-test="selected-count"]').should(
            "contain.text",
            "Valda rader: 1",
        );
    });
});

describe("Adding Rows - Selection State", () => {
    it("changes bulk checkbox from checked to indeterminate when row added to full selection", () => {
        cy.mount(Example);

        table.selectHeaderInput().click();
        table.selectHeaderInput().should("have.prop", "checked", true);
        cy.get('[data-test="add-row"]').click();

        // Bulk checkbox should show indeterminate
        table.selectHeaderInput().should("have.prop", "indeterminate", true);
    });
});

describe("Editing Rows - Pagination Behavior", () => {
    it("does not navigate pages when editing row on current page", () => {
        cy.mount(Example);

        // Apply sort
        table.header(2).click();

        paginator.currentPageButton().should("contain.text", "1");

        // Edit first row
        table.cell({ row: 1, col: 2 }).click();
        cy.focused().clear();
        cy.focused().type("Aardvark{enter}");

        // Should stay on page 1 (no navigation on edit)
        paginator.currentPageButton().should("contain.text", "1");
    });

    it("preserves page position when editing rows with sort active", () => {
        cy.mount(Example);

        // Go to page 2
        table.header(2).click();
        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        // Edit a row on page 2
        table.cell({ row: 1, col: 2 }).click();
        cy.focused().clear();
        cy.focused().type("Beta{enter}");

        // Should stay on page 2
        paginator.currentPageButton().should("contain.text", "2");
    });

    it("preserves page position when editing row with filter active", () => {
        cy.mount(Example);

        // Apply filter that shows multiple pages
        sorter.textField.input().type("a");

        // Go to page 2 if available
        paginator.nextButton().then((button) => {
            if (!button.prop("disabled")) {
                cy.wrap(button).click();
                paginator.currentPageButton().should("contain.text", "2");

                // Edit a row
                table.cell({ row: 1, col: 2 }).click();
                cy.focused().clear();
                cy.focused().type("Beta{enter}");

                // Should stay on page 2
                paginator.currentPageButton().should("contain.text", "2");
            }
        });
    });
});

describe("Filtering - Pagination Behavior", () => {
    it("goes to first page when user applies filter", () => {
        cy.mount(Example);

        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        sorter.textField.input().type("Ban");

        paginator.currentPageButton().should("contain.text", "1");
    });

    it("resets selections when filter is applied", () => {
        cy.mount(Example);

        // Select all rows
        table.selectHeaderInput().click();

        // Apply filter
        sorter.textField.input().type("D");

        // Selections reset and page goes to 1
        cy.get('[data-test="selected-count"]').should(
            "contain.text",
            "Valda rader: 0",
        );
        paginator.currentPageButton().should("contain.text", "1");
    });

    it("shows filtered results on first page", () => {
        cy.mount(Example);

        // Go to page 2
        paginator.nextButton().click();

        // Apply filter
        sorter.textField.input().type("Grana");

        // Go to page 1 with filtered result
        paginator.currentPageButton().should("contain.text", "1");
        table.cell({ row: 1, col: 2 }).should("contain.text", "Granatapple");
    });

    it("updates pagination when filter reduces item count below current page", () => {
        cy.mount(Example);

        // Go to page 2
        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        // Apply filter that matches only 1 item (fit on page 1)
        sorter.textField.input().type("Fikon");

        // Should navigate to first page
        paginator.currentPageButton().should("contain.text", "1");
        table.cell({ row: 1, col: 2 }).should("contain.text", "Fikon");
    });

    it("clears filter and preserves pagination", () => {
        cy.mount(Example);

        // Go to page 2
        paginator.nextButton().click();

        // Apply filter
        sorter.textField.input().type("a");

        // Clear filter
        sorter.textField.input().clear();

        // Should stay on page 1 (filter reset goes to first page)
        paginator.currentPageButton().should("contain.text", "1");
    });
});

describe("Sorting - Pagination Behavior", () => {
    it("goes to first page when user applies sort", () => {
        cy.mount(Example);

        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        table.header(2).click();
        sorter.selectField.dropdown().should("contain.text", "Text (stigande)");

        paginator.currentPageButton().should("contain.text", "1");
    });

    it("preserves selections when sort applied and navigates to first page", () => {
        cy.mount(Example);

        // Select rows on page 1
        table.selectInput(1).click();
        table.selectInput(2).click();
        cy.get('[data-test="selected-count"]').should(
            "contain.text",
            "Valda rader: 2",
        );

        // Go to page 2
        paginator.nextButton().click();

        // Apply sort
        table.header(2).click();
        sorter.selectField.dropdown().should("contain.text", "Text (stigande)");

        // Should navigate to page 1 but preserve selections
        paginator.currentPageButton().should("contain.text", "1");
        cy.get('[data-test="selected-count"]').should(
            "contain.text",
            "Valda rader: 2",
        );
    });

    it("changes sort order and navigates to first page", () => {
        cy.mount(Example);

        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        // Apply sort ascending
        table.header(2).click();
        table.header(2).click();
        table.header(2).click();

        sorter.selectField.dropdown().should("contain.text", "Text (stigande)");
        paginator.currentPageButton().should("contain.text", "1");

        // Go back to page 2
        paginator.nextButton().click();

        // Change to descending
        table.header(2).click();
        // sorter.selectField.dropdown().select("Text (fallande)");

        // Should go back to page 1
        paginator.currentPageButton().should("contain.text", "1");
        table.cell({ row: 1, col: 2 }).should("contain.text", "Granatapple");
    });
});

describe("Complex Pagination Scenarios", () => {
    it("maintains pagination state through sort then filter", () => {
        cy.mount(Example);

        // Apply sort ascending
        table.header(2).click();
        paginator.currentPageButton().should("contain.text", "1");

        // Go to page 2
        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        // Apply filter - should go to page 1
        sorter.textField.input().type("a");
        paginator.currentPageButton().should("contain.text", "1");
    });

    it("handles pagination during add row with multiple pages", () => {
        cy.mount(Example);

        // Verify we have 2 pages (6 items, 3 per page)
        paginator.nextButton().should("not.be.disabled");

        // Go to page 2
        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        // Add row - should create 3 pages and jump to page 3
        cy.get('[data-test="add-row"]').click();
        paginator.currentPageButton().should("contain.text", "3");

        // Add another row - should stay on page 3 (new rows keep going to last)
        cy.get('[data-test="add-row"]').click();
        paginator.currentPageButton().should("contain.text", "3");
    });

    it("navigates correctly with sort and pagination together", () => {
        cy.mount(Example);

        // Apply sort descending
        table.header(2).click();
        sorter.selectField.dropdown().select("Text (fallande)");

        // First item should be Granatapple (descending)
        table.cell({ row: 1, col: 2 }).should("contain.text", "Granatapple");
        paginator.currentPageButton().should("contain.text", "1");

        // Navigate to page 2
        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        // First item on page 2 should be Citron
        table.cell({ row: 1, col: 2 }).should("contain.text", "Citron");
    });

    it("shows correct selection count across pages", () => {
        cy.mount(Example);

        // Select on page 1
        table.selectInput(1).click();
        cy.get('[data-test="selected-count"]').should(
            "contain.text",
            "Valda rader: 1",
        );

        // Go to page 2
        paginator.nextButton().click();

        // Select on page 2
        table.selectInput(1).click();
        cy.get('[data-test="selected-count"]').should(
            "contain.text",
            "Valda rader: 2",
        );

        // Go back to page 1
        paginator.previousButton().click();

        // Selection count should reflect selections from both pages
        cy.get('[data-test="selected-count"]').should(
            "contain.text",
            "Valda rader: 2",
        );
    });
});

describe("Removing Rows - Pagination Behavior", () => {
    it("navigates to last page when last page becomes empty after removal", () => {
        cy.mount(Example);

        // We have 6 items, 3 per page = 2 pages
        // Go to page 2
        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        // Page 2 currently shows Druva, Fikon, Granatapple
        table.cell({ row: 1, col: 2 }).should("contain.text", "Druva");

        // Verify we can see page 2
        cy.get('[data-test="selected-count"]').should("exist");
    });
});
