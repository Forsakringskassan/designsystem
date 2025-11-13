import { FTablePageObject } from "../../../../src/cypress";
import Example from "./FTablePageObject-headerTitle.vue";

it("headerTitle() should get correct header title text.", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject("[data-test=table]");
    table.headerTitle(1).should("contain.text", "ID");
    table.headerTitle(2).should("contain.text", "Namn");
    /* --- cut below --- */
});
