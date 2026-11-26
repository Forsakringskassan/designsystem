import FTableAddRemoveExample from "./FTableAddRemoveExample.vue";
import { FModalPageObject, FTablePageObject } from "@fkui/vue/cypress";

const table = new FTablePageObject();
const modal = new FModalPageObject(".modal");

it("should be able to add and remove rows in table", () => {
    cy.mount(FTableAddRemoveExample);
    table.rows().should("have.length", 4);

    // add row
    cy.get("[data-test=add-row-button]").click();
    table.rows().should("have.length", 5);

    // abort remove row
    table.cell({ row: 2, col: 3 }).click();
    modal.el().should("exist");
    modal.secondaryButton().click(); // abort remove
    table.rows().should("have.length", 5);

    // remove row
    table.cell({ row: 2, col: 3 }).click();
    modal.el().should("exist");
    modal.primaryButton().click(); // confirm remove
    table.rows().should("have.length", 4);
});
