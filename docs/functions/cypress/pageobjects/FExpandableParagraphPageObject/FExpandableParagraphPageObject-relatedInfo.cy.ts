import { FExpandableParagraphPageObject } from "@fkui/vue/cypress";
import FExpandableParagraphPageObjectExample from "./FExpandableParagraphPageObject.vue";

it("expandCollapseIcon should return element", () => {
    cy.mount(FExpandableParagraphPageObjectExample);
    /* --- cut above --- */
    const list = new FExpandableParagraphPageObject();
    list.relatedInfo().should("have.trimmedText", "2026-01-01");
    /* --- cut below --- */
});
