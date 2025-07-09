import { FDefinitionListPageObject } from "@fkui/vue/cypress";
import Example from "./FDefinitionListPageObject-description.vue";

it("should show all descriptions", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const myDefinitionList = new FDefinitionListPageObject(
        "[data-test=my-definition-list]",
    );
    myDefinitionList.description(0).should("have.text", "8 timmar");
    myDefinitionList.description(1).should("have.text", "8 timmar");
    myDefinitionList.description(2).should("have.text", "100 procent");
    /* --- cut below --- */
});
