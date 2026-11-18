import { FTablePageObject } from "@fkui/vue/cypress";
import Example from "./FTablePageObject-select.vue";

it("select() should get native select element and update value", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject("[data-test=table]");

    table.select({ row: 1, col: 2 }).should("have.prop", "tagName", "SELECT");
    table.select({ row: 1, col: 2 }).should("have.value", "Foo");
    table.select({ row: 1, col: 2 }).select("Baz");
    table.select({ row: 1, col: 2 }).should("have.value", "Baz");
    /* --- cut below --- */
});
