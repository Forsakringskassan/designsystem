import { FTablePageObject } from "../../../../src/cypress";
import Example from "./FTablePageObject-el.vue";

it("`FTablePageObject.el()` should get correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject();
    table.el().should("exist");
    /* --- cut below --- */
});
