import Example from "./FTablePageObject-header.vue";
import { FTablePageObject } from "@fkui/vue-labs/cypress";

it("header() should get correct element.", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject("[data-test=table]");
    table.header(1).should("contain.text", "ID");
    table.header(2).should("contain.text", "Namn");
    /* --- cut below --- */
});
