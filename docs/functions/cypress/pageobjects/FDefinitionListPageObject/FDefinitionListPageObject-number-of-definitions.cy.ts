import { FDefinitionListPageObject } from "@fkui/vue/cypress";
import Example from "./FDefinitionListPageObject-number-of-definitions.vue";

it("should show the correct number of definitions in the definition list", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const myDefinitionListOneDefinition = new FDefinitionListPageObject(
        "[data-test=my-definition-list-one-definition]",
    );
    myDefinitionListOneDefinition.numberOfDefinitions().should("eq", 1);

    const myDefinitionListThreeDefinitions = new FDefinitionListPageObject(
        "[data-test=my-definition-list-three-definitions]",
    );
    myDefinitionListThreeDefinitions.numberOfDefinitions().should("eq", 3);
    /* --- cut below --- */
});
