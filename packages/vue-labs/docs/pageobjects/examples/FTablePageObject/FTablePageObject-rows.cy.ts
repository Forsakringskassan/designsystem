import { FTablePageObject } from "../../../../src/cypress";
import Example from "./FTablePageObject-rows.vue";

it("rows() should get correct number of rows.", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject("[data-test=table]");
    table.rows().should("have.length", 3);
    /* --- cut below --- */
});
