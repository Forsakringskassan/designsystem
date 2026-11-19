import FTableCrudEdit from "./FTableCrudEdit.vue";
import { FModalPageObject, FTablePageObject } from "@fkui/vue/cypress";

const table = new FTablePageObject();
const modal = new FModalPageObject(".modal");

it("should have working (c)rud", () => {
    // read
    cy.mount(FTableCrudEdit);
    table.rows().should("have.length", 3);

    // update
    table.cell({ row: 1, col: 4 }).click();
    table.contextmenu().should("exist");
    table.contextmenuItems().eq(0).click();
    cy.get(".modal input").eq(0).clear();
    cy.get(".modal input").eq(0).type("888");
    modal.primaryButton().click();
    table.cell({ row: 1, col: 3 }).should("contain.text", "888");

    // delete
    table.cell({ row: 1, col: 4 }).click();
    table.contextmenu().should("exist");
    table.contextmenuItems().eq(1).click();
    modal.primaryButton().click();
    table.rows().should("have.length", 2);
});
