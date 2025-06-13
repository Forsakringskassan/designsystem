import { FInteractiveTablePageObject } from "@fkui/vue/cypress";
import Example from "./FInteractiveTablePageObject-checkbox.vue";

it("header() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FInteractiveTablePageObject();
    table.checkbox(1).label().should("contain.text", "Select row A1");
    table.checkbox(2).label().should("contain.text", "Select row A2");
    table.checkbox(3).label().should("contain.text", "Select row A3");
    /* --- cut below --- */
});
