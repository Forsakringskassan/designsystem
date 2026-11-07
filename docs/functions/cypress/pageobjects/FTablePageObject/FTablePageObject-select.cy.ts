import { FTablePageObject } from "@fkui/vue/cypress";
import Example from "./FTablePageObject-select.vue";

it("select() should get native select element and update value", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject("[data-test=table]");

    table.select(1, 2).should("have.prop", "tagName", "SELECT");
    table.select(1, 2).should("have.value", "Foo");
    table.select(1, 2).select("Baz");
    table.select(1, 2).should("have.value", "Baz");
    /* --- cut below --- */
});
