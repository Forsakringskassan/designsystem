import { FTablePageObject } from "../../../../src/cypress";
import Example from "./FTablePageObject-headerDescription.vue";

it("headerDescription() should get correct header description text.", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject();
    table.headerDescription(1).should("contain.text", "Description 1");
    table.headerDescription(2).should("contain.text", "Description 2");
    /* --- cut below --- */
});
