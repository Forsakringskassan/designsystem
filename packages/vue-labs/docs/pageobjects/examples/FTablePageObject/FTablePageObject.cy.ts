import { FTablePageObject } from "../../../../src/cypress";
import Example from "./FTablePageObject.vue";

it("cell() should get correct element.", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject();
    table.cell({ row: 1, col: 2 }).should("contain.text", "Foo");
    table.cell({ row: 2, col: 2 }).should("contain.text", "Bar");
    table.cell({ row: 3, col: 2 }).should("contain.text", "Baz");
    /* --- cut below --- */
});
