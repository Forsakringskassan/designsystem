import { FDefinitionListPageObject } from "@fkui/vue/cypress";
import Example from "./FDefinitionListPageObject-term.vue";

it("should show all terms", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const myDefinitionList = new FDefinitionListPageObject(
        "[data-test=my-definition-list]",
    );
    myDefinitionList.term(0).should("have.text", "Skulle ha jobbat");
    myDefinitionList.term(1).should("have.text", "Vabbade");
    myDefinitionList.term(2).should("have.text", "Omfattning");
    /* --- cut below --- */
});
