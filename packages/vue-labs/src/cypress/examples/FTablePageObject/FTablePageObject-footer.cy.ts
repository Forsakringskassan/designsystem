import Example from "./FTablePageObject-footer.vue";
import { FTablePageObject } from "@fkui/vue-labs/cypress";

it("footer() should get correct text from table footer.", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject("[data-test=table]");
    table.footer().should("contain.text", "My awesome footer");
    /* --- cut below --- */
});
