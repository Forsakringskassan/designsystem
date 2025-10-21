import { FTablePageObject } from "@fkui/vue-labs/cypress";
import Example from "./FTablePageObject-selectInput.vue";

it("selectInput() should select correct row.", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const table = new FTablePageObject("[data-test=table]");
    table.selectHeaderInput().click();
    table.selectInput(1).click();
    table.selectInput(1).should("be.checked");
    /* --- cut below --- */
});
