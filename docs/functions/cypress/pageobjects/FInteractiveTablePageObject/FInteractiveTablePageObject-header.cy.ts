import { FInteractiveTablePageObject } from "@fkui/vue/cypress";
import Example from "./FInteractiveTablePageObject-header.vue";

it("header() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FInteractiveTablePageObject();
    table.header(1).should("contain.text", "A");
    table.header(2).should("contain.text", "B");
    table.header(3).should("contain.text", "C");
    /* --- cut below --- */
});
