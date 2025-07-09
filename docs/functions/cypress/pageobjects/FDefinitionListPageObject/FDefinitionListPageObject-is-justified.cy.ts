import { FDefinitionListPageObject } from "@fkui/vue/cypress";
import Example from "./FDefinitionListPageObject-is-justified.vue";

it("should show if the definition list is justified or not", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const myDefinitionListNotJustified = new FDefinitionListPageObject(
        "[data-test=my-definition-list-not-justified]",
    );
    myDefinitionListNotJustified.isJustified().should("be.equal", false);

    const myDefinitionListJustified = new FDefinitionListPageObject(
        "[data-test=my-definition-list-justified]",
    );
    myDefinitionListJustified.isJustified().should("be.equal", true);
    /* --- cut below --- */
});
