import { FDefinitionListPageObject } from "@fkui/vue/cypress";
import Example from "./FDefinitionListPageObject.vue";

it("should show that the list has three definitions", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const myDefinitionList = new FDefinitionListPageObject(
        "[data-test=my-definition-list]",
    );
    myDefinitionList.numberOfDefinitions().should("eq", 3);
    /* --- cut below --- */
});
