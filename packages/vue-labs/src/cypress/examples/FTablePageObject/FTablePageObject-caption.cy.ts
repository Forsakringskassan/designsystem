import Example from "./FTablePageObject-caption.vue";
import { FTablePageObject } from "@fkui/vue-labs/cypress";

it("caption() should get correct text from table caption.", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject("[data-test=table]");
    table.caption().should("contain.text", "My awesome caption");
    /* --- cut below --- */
});
