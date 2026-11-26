import { FDetailsPanelPageObject } from "@fkui/vue/cypress";
import Example from "./FDetailsPanelPageObject-footer.vue";

it("footer() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const panel = FDetailsPanelPageObject.fromName("awesome-panel");
    panel
        .footer()
        .should("exist")
        .and("match", "div")
        .and("have.text", "Lorem ipsum");
    /* --- cut below --- */
});
