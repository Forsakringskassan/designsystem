import { FInteractiveTablePageObject } from "@fkui/vue/cypress";
import Example from "./FInteractiveTablePageObject-cell.vue";

it("cell() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FInteractiveTablePageObject(".table");
    table.cell({ row: 1, col: 2 }).should("contain.text", "B1");
    table.cell({ row: 2, col: 3 }).should("contain.text", "C2");
    /* --- cut below --- */
});
