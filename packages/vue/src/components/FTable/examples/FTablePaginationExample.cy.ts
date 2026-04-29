import FTablePaginationExample from "./FTablePaginationExample.vue";
import { FPaginatorPageObject } from "@fkui/vue/cypress";
import { FTablePageObject } from "@fkui/vue/cypress";

const table = new FTablePageObject();
const paginator = new FPaginatorPageObject();

describe("FTablePaginationExample", () => {
    it("should navigate to the previous page when the last page becomes empty after row removals", () => {
        cy.mount(FTablePaginationExample);

        paginator.currentPageButton().should("contain.text", "1");

        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "2");

        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "3");

        table
            .cell({ row: 1, col: 3 })
            .should("contain.text", "Sofia Lindström");
        table.cell({ row: 2, col: 3 }).should("contain.text", "Olle Bergström");

        cy.contains(".table-ng tbody tr", "Sofia Lindström").within(() => {
            cy.get("button").last().click();
        });

        cy.contains(".table-ng tbody tr", "Olle Bergström").within(() => {
            cy.get("button").last().click();
        });

        paginator.currentPageButton().should("contain.text", "2");

        table
            .cell({ row: 1, col: 3 })
            .should("contain.text", "David Lindqvist");
        table.cell({ row: 2, col: 3 }).should("contain.text", "Elin Andersson");
        table.cell({ row: 3, col: 3 }).should("contain.text", "Victor Nilsson");

        cy.contains("Tabellen är tom").should("not.exist");
    });

    it("should not crash when removing the last remaining row on the current page", () => {
        cy.mount(FTablePaginationExample);

        cy.contains("button", "Lägg till rad").click();
        cy.contains("button", "Lägg till rad").click();

        paginator.nextButton().click();
        paginator.nextButton().click();
        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "4");

        table.rows().should("have.length", 1);
        table.cell({ row: 1, col: 3 }).should("contain.text", "Ny person");

        cy.get(".table-ng tbody tr").eq(0).find("td:last-child").click();

        paginator.currentPageButton().should("contain.text", "3");
        cy.contains("Tabellen är tom").should("not.exist");
        table.rows().should("have.length", 3);
    });

    it("should allow expanding a row with Enter immedietly after page fallback", () => {
        cy.mount(FTablePaginationExample);

        paginator.nextButton().click();
        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "3");

        cy.contains(".table-ng tbody tr", "Sofia Lindström").within(() => {
            cy.get("button").last().click();
        });

        cy.contains(".table-ng tbody tr", "Olle Bergström").within(() => {
            cy.get("button").last().click();
        });

        paginator.currentPageButton().should("contain.text", "2");

        cy.focused().should("exist");
        cy.focused().press(Cypress.Keyboard.Keys.ENTER);

        table.cell({ row: 2, col: 3 }).should("contain.text", "Detalj 1");
        table.cell({ row: 3, col: 3 }).should("contain.text", "Detalj 2");
    });

    it("should allow expanding a row with Enter after navigating to a newly created last page", () => {
        cy.mount(FTablePaginationExample);

        cy.contains("button", "Lägg till rad").click();
        cy.contains("button", "Lägg till rad").click();

        paginator.nextButton().click();
        paginator.nextButton().click();
        paginator.nextButton().click();
        paginator.currentPageButton().should("contain.text", "4");

        cy.focused().should("exist");
        cy.focused().realPress(["Shift", "Tab"]);
        cy.focused().realPress(["Shift", "Tab"]);
        cy.focused().press(Cypress.Keyboard.Keys.ENTER);

        table.cell({ row: 2, col: 3 }).should("contain.text", "Detalj 1");
    });
});
