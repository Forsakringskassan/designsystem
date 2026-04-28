import { FTablePageObject } from "@fkui/vue/cypress";
import Example from "./FTablePageObject.vue";

it("`FTablePageObject.el()` should get correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject("[data-test=table]");
    table.el().should("exist");
    /* --- cut below --- */
});
