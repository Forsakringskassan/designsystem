import { FDefinitionListPageObject } from "@fkui/vue/cypress";
import Example from "./FDefinitionListPageObject.vue";

it("should show all definitions", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const myDefinitionList = new FDefinitionListPageObject(
        "[data-test=my-definition-list]",
    );
    myDefinitionList.definition(0).should("have.text", "8 timmar");
    myDefinitionList.definition(1).should("have.text", "8 timmar");
    myDefinitionList.definition(2).should("have.text", "100 procent");
    /* --- cut below --- */
});
