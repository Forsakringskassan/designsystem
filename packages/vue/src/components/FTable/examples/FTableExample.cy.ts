import FTableExample from "./FTableExample.vue";
import { FModalPageObject, FTablePageObject } from "@fkui/vue/cypress";

const table = new FTablePageObject();
const modal = new FModalPageObject(".modal");

it("should show data in table", () => {
    cy.mount(FTableExample);
    table.rows().should("have.length", 3);
});

it("should remove selected rows", () => {
    cy.mount(FTableExample);
    table.selectHeaderInput().check();
    cy.get("[data-id=remove-selected-button]").click();
    modal.el().should("exist");
    modal.primaryButton().click(); // confirm
    table.cell({ row: 1, col: 1 }).should("contain.text", "Tabellen är tom");
});
