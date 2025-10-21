import { FTablePageObject } from "../../../../src/cypress";
import Example from "./FTablePageObject-expandButton.vue";

it("expandButton() should expand correct row.", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject();
    table.expandButton(1).click();
    table.cell({ row: 2, col: 3 }).should("contain.text", "Expanded 1");
    table.cell({ row: 3, col: 3 }).should("contain.text", "Expanded 2");
    /* --- cut below --- */
});
