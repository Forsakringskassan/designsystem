import { FInteractiveTablePageObject } from "@fkui/vue/cypress";
import Example from "./FInteractiveTablePageObject-selectable.vue";

it("selectable() should select correct input element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FInteractiveTablePageObject();
    table.selectable(1).should("have.attr", "type", "checkbox");
    table.selectable(1).closest("tr").should("contain.text", "Select row A1");
    table.selectable(2).closest("tr").should("contain.text", "Select row A2");
    table.selectable(3).closest("tr").should("contain.text", "Select row A3");
    /* --- cut below --- */
});
