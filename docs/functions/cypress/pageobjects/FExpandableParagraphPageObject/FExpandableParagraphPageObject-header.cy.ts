import { FExpandableParagraphPageObject } from "@fkui/vue/cypress";
import FExpandableParagraphPageObjectExample from "./FExpandableParagraphPageObject.vue";

it("expandCollapseIcon should return element", () => {
    cy.mount(FExpandableParagraphPageObjectExample);
    /* --- cut above --- */
    const list = new FExpandableParagraphPageObject();
    list.header().should("have.trimmedText", "Titel");
    /* --- cut below --- */
});
