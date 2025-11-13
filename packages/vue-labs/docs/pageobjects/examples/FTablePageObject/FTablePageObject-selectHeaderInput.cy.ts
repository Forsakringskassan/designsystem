import { FTablePageObject } from "../../../../src/cypress";
import Example from "./FTablePageObject-selectHeaderInput.vue";

it("selectHeaderInput() should select all rows.", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject("[data-test=table]");
    table.selectHeaderInput().click();
    table.selectInput(1).should("be.checked");
    table.selectInput(2).should("be.checked");
    table.selectInput(3).should("be.checked");
    /* --- cut below --- */
});
