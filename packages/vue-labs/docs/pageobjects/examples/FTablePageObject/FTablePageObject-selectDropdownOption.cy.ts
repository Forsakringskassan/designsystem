import { FTablePageObject } from "../../../../src/cypress";
import Example from "./FTablePageObject-selectDropdownOption.vue";

it("selectDropdownOption() should should get correct text.", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject("[data-test=table]");
    table.cell({ row: 1, col: 2 }).should("contain.text", "Foo");
    table.cell({ row: 1, col: 2 }).click();
    table.selectDropdownOption(1).should("contain.text", "Foo");
    table.selectDropdownOption(2).should("contain.text", "Bar");
    table.selectDropdownOption(3).should("contain.text", "Baz");
    table.selectDropdownOption(3).click();
    table.cell({ row: 1, col: 2 }).should("contain.text", "Baz");
    /* --- cut below --- */
});
