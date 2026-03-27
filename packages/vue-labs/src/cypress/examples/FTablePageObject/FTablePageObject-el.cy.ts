import Example from "./FTablePageObject-el.vue";
import { FTablePageObject } from "@fkui/vue-labs/cypress";

it("`FTablePageObject.el()` should get correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject("[data-test=table]");
    table.el().should("exist");
    /* --- cut below --- */
});
