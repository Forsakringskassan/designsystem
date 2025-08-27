import { FDefinitionListPageObject } from "@fkui/vue/cypress";
import Example from "./FDefinitionListPageObject.vue";

it("should show that the list is not justified", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const myDefinitionList = new FDefinitionListPageObject(
        "[data-test=my-definition-list]",
    );
    myDefinitionList.isJustified().should("eq", false);
    /* --- cut below --- */
});
