import { FTablePageObject } from "../../../../src/cypress";
import Example from "./FTablePageObject-selectInput.vue";

it("selectInput() should select correct row.", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject("[data-test=table]");
    table.selectInput(1).click();
    table.selectInput(1).should("be.checked");
    table.selectInput(2).should("not.be.checked");
    table.selectInput(3).should("not.be.checked");
    /* --- cut below --- */
});
