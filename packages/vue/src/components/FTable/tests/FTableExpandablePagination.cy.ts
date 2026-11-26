import Example from "./FTableExpandablePaginationExample.vue";
import { FPaginatorPageObject, FTablePageObject } from "@fkui/vue/cypress";

const table = new FTablePageObject();
const paginator = new FPaginatorPageObject();

describe("FTableExpandablePaginationExample", () => {
    it("should allow expanding a row with Enter immedietly after page fallback", () => {
        cy.mount(Example);

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
        cy.mount(Example);

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
