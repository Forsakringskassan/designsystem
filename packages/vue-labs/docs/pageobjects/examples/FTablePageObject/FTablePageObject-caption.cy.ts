import { FTablePageObject } from "../../../../src/cypress";
import Example from "./FTablePageObject-caption.vue";

it("caption() should get correct text from table caption.", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject("[data-test=table]");
    table.caption().should("contain.text", "My awesome caption");
    /* --- cut below --- */
});
