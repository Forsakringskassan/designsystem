import { FTablePageObject } from "../../../../src/cypress";
import Example from "./FTablePageObject-footer.vue";

it("footer() should get correct text from table footer.", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject("[data-test=table]");
    table.footer().should("contain.text", "My awesome footer");
    /* --- cut below --- */
});
