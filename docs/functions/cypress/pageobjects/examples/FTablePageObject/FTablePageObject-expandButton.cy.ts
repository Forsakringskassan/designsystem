import { FTablePageObject } from "@fkui/vue-labs/cypress";
import Example from "./FTablePageObject-expandButton.vue";

it("expandButton() should expand correct row.", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject("[data-test=table]");
    table.expandButton(1).click();
    table.cell({ row: 1, col: 1 }).should("contain.text", "Expanded foo");
    /* --- cut below --- */
});
